import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Models/Game';
import { Player } from 'src/app/Models/Player';
import { Roster } from 'src/app/Models/Roster';
import { PlayerStat } from 'src/app/Models/PlayerStat';
import { Team } from 'src/app/Models/Team';
import { WeightedStats } from 'src/app/Models/WeightedStats';
import { PlayerService } from 'src/app/Services/player/player.service';
import { TeamService } from 'src/app/Services/team/team.service';
import weightedStatsJson from '../../../assets/weightedStats.json';
import * as XLSX from 'xlsx'; 
import { formatDate } from '@angular/common';
import { TeamStat } from 'src/app/Models/TeamStat';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.scss']
})
export class TopScorersComponent implements OnInit {
  loadingStatistics = true;
  loadingRosters = true;
  orderedPlayers: Player[] = [];
  teams: Team[] = [];
  rosters: Roster[];
  weightedStats: WeightedStats;
  maxPlayerRank: number = 750;
  maxTeamRank: number = 31;
  minRank: number = 1;
  games: Game[] = [];
  topPlayerStats: PlayerStat = new PlayerStat();
  worstPlayerStats: PlayerStat = new PlayerStat();
  topTeamStats: TeamStat = new TeamStat();
  worstTeamStats: TeamStat = new TeamStat();

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.weightedStats = weightedStatsJson;
    this.worstTeamStats = {
      penaltyKillFrequency: 0,
      penaltyKillPercentage: 0,
      goalsAgainstPerGame: 0,
      gamesPlayed: 0
    };
    this.topTeamStats = {
      penaltyKillFrequency: 99999,
      penaltyKillPercentage: 99999,
      goalsAgainstPerGame: 99999,
      gamesPlayed: 99999
    };
    this.topPlayerStats = {
      goals: 0,
      games: 0,
      powerPlayGoals: 0,
      goalsPerGame: 0
    };
    this.worstPlayerStats = {
      goals: 99999,
      games: 99999,
      powerPlayGoals: 99999,
      goalsPerGame: 99999
    };
  }

  todaysPlayers() {
    this.getRosters();
  }
  
  getRosters() {
    this.clearAll();
    var schedule: any;
    this.teamService.playingTeams().subscribe((scheduleObs: any) => schedule = scheduleObs, () => {}, () => {
      this.loadTodaysTeams(schedule.dates[0].games);
      this.loadTeamStatsAndRankings();
      this.loadRosters();
    });
  }

  loadTodaysTeams(games) {
    var teams: Team[] = [];
    games.forEach(game => {
      var homeTeam : Team = {
        id: game.teams.home.team.id,
        name: game.teams.home.team.name,
        rankings: null,
        stats: null
      };
      var awayTeam : Team = {
        id: game.teams.away.team.id,
        name:  game.teams.away.team.name,
        rankings: null,
        stats: null
      };
      teams.push(homeTeam);
      teams.push(awayTeam);
      var newGame : Game = {
        homeTeam: homeTeam,
        awayTeam: awayTeam
      };
      this.games.push(newGame);
    }); 
    this.teams = teams;
  }

  loadRosters() {
    var teamIds: number[] = [];
    this.teams.forEach(function (team) {
      teamIds.push(team.id);
    })
    var rostersResponse;
    this.playerService.getRosters(teamIds).subscribe((rostersObs: any) => rostersResponse = rostersObs, () => {}, () => {
      var rosters: Roster[] = [];
      var teams : any[] = rostersResponse.teams;
      teams.forEach(team => {
        var thisGame = this.games.filter((game) => game.homeTeam.id === team.id || game.awayTeam.id === team.id)[0];
        var opposingTeam : Team = thisGame.homeTeam.id === team.id ? thisGame.awayTeam : thisGame.homeTeam;
        var roster: Roster = {
          team: {
            id: team.id,
            name: team.name,
            rankings: null,
            stats: null
          },
          players: []
        };
        var teamRoster = team.roster.roster;
        teamRoster.forEach(rosterSpot => {
          var playerId = rosterSpot.person.id;
          var playerName = rosterSpot.person.fullName;
          var playerSeasonStatsresp, playerPlayoffStatsresp;
          this.playerService.getPlayerSeasonStats(playerId).subscribe((playerSeasonStatsResponse: any) => playerSeasonStatsresp = playerSeasonStatsResponse, () => {}, () => {
            var playerSeasonStat: PlayerStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerSeasonStatsresp.stats[0].splits[0].stat;
            this.playerService.getPlayerPlayoffStats(playerId).subscribe((playerPlayoffStatsResponse: any) => playerPlayoffStatsresp = playerPlayoffStatsResponse, () => {}, () => {
              var playerPlayoffStat: PlayerStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerPlayoffStatsresp.stats[0].splits[0].stat;
              var player: Player = {
                id: playerId,
                name: playerName,
                seasonStats: playerSeasonStat,
                //playoffStats: playerPlayoffStat,
                goalLikelihoodRank: -1,
                playingAgainst: opposingTeam,
                playsFor: team
              };
              this.calculateGoalLikelihood(player);
              roster.players.push(player);
              this.orderedPlayers.push(player);
            });
          });
        });
        rosters.push(roster);
      });
      this.rosters = rosters;
    });
  }

  clearAll() {
    this.teams = [];
    this.rosters = [];
    this.orderedPlayers = [];
  }

  calculateRank() {
    this.orderedPlayers.forEach(player => {
      this.calculateGoalLikelihood(player);
    })
  }
  orderPlayers() {
    //this.orderedPlayers.filter((a) => a.goalLikelihoodRank > 0);
    this.orderedPlayers.sort((a,b) => b.goalLikelihoodRank - a.goalLikelihoodRank);
  }

  getGoalsPerGame(stats: PlayerStat): number {
    return stats.games === 0 ? 0 : stats.goals / stats.games;
  }

  calculateGoalLikelihood(player: Player) {
    var playerSeasonStatsResp, playerPlayoffStatsResp;
    
    this.playerService.getPlayerSeasonStats(player.id).subscribe((playerSeasonStatsResponse: any) => playerSeasonStatsResp = playerSeasonStatsResponse, () => {}, () => {
      this.playerService.getPlayerPlayoffStats(player.id).subscribe((playerPlayoffStatsResponse: any) => playerPlayoffStatsResp = playerPlayoffStatsResponse, () => {}, () => {
        console.log("here");
        // if (playerSeasonStatsResp.stats[0].splits[0] !== undefined && playerPlayoffStatsResp.stats[0].splits[0] !== undefined) {
        if (playerSeasonStatsResp.stats[0].splits[0] !== undefined) {
          console.log("there");
          var playerSeasonStats = playerSeasonStatsResp.stats[0].splits[0].stat;
          //var playerPlayoffStats = playerPlayoffStatsResp.stats[0].splits[0].stat;
          // var playerTotalGoals = playerSeasonStats.goals || 0 + playerPlayoffStats.goals || 0 ;
          // var playerTotalGames = playerSeasonStats.games || 0  + playerPlayoffStats.games || 0 ;
          // var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0  + playerPlayoffStats.powerPlayGoals || 0 ;

          var playerTotalGoals = playerSeasonStats.goals || 0;
          var playerTotalGames = playerSeasonStats.games || 0;
          var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0;
          console.log(playerTotalGoals);
          player.goalLikelihoodRank = this.getGoalsPerGameScore(playerTotalGoals, playerTotalGames)
                                //+ this.getGeneralPlayerRank(playerStats.rankShots) *  this.getGeneralPlayerRank(playerStats.rankShotPct) * this.weightedStats.shotPercentageWeight
                                
                                + this.getOpposingGoalsAgainstScore(this.teams.find(team => team.id === player.playingAgainst.id).stats.goalsAgainstPerGame)
                                + this.getPowerPlayScore(this.teams.find(team => team.id === player.playingAgainst.id).rankings.penaltyKillOpportunities, this.teams.find(team => team.id === player.playingAgainst.id).stats.penaltyKillPercentage, this.teams.find(team => team.id === player.playingAgainst.id).stats.gamesPlayed, playerTotalPPG, playerTotalGames)
                                ;
        }
        else {
          player.goalLikelihoodRank = -1;
        }
      });
    });
    
  }

  rankingStringToNumber(rank: string): number {
    return rank ? Number(rank.slice(0, -2)) : 800;
  }

  getGeneralPlayerRank(rank: string): number {
    var rankValue = this.rankingStringToNumber(rank);
    var normalizedRankScore = this.normalizePlayerRankValue(rankValue);
    return normalizedRankScore;
  }

  getOpposingGoalsAgainstScore(gaa: number): number {
    var normalizedGAAScore = this.normalizeTeamStatValue(gaa, this.topTeamStats.goalsAgainstPerGame, this.worstTeamStats.goalsAgainstPerGame) * this.weightedStats.opposingGAAWeight;
    return normalizedGAAScore;
  }

  normalizePlayerRankValue(rankValue: number): number {
    var normalizedRankScore = (rankValue - this.minRank) / (this.maxPlayerRank - this.minRank);
    return !isNaN(normalizedRankScore) ? normalizedRankScore : 1;
  }
  normalizeTeamRankValue(rankValue: number): number {
    var normalizedRankScore = (rankValue - this.minRank) / (this.maxTeamRank - this.minRank);
    return !isNaN(normalizedRankScore) ? normalizedRankScore : 1;
  }
  normalizePlayerStatValue(playerStat: number, min: number, max: number) {
    var normalizedScore = (playerStat - min) / (max - min);
    return !isNaN(normalizedScore) ? normalizedScore : 1;
  }
  normalizeTeamStatValue(teamStat: number, min: number, max: number) {
    var normalizedScore = (teamStat - min) / (max - min);
    return !isNaN(normalizedScore) ? normalizedScore : 1;
  }

  getGoalsPerGameScore(goals: number, games: number): number {
    if (goals === undefined || games === 0) {
      return 0;
    }
    var goalsPerGameValue = this.normalizePlayerStatValue(goals / games, this.worstPlayerStats.goalsPerGame, this.topPlayerStats.goalsPerGame);
    var gamesValue = Math.log(games) / Math.log(this.topPlayerStats.games * 100);
    var goalsPerGameScore = (goalsPerGameValue + gamesValue) * this.weightedStats.goalsPerGameWeight;

    // var goalsValue = this.normalizePlayerStatValue(goals, this.worstPlayerStats.goals, this.topPlayerStats.goals);
    // var gamesValue = this.normalizePlayerStatValue(games, this.worstPlayerStats.games, this.topPlayerStats.games) + 1;

    // var gamesMultiplier = 1 + Math.log(games) / Math.log(this.topPlayerStats.games * 1000000);
    // var goalsPerGameScore = (goalsValue * this.weightedStats.numberOfGoalsWeight) / (gamesValue * this.weightedStats.numberOfGamesWeight) + gamesMultiplier;
    return goalsPerGameScore;
  }

  getPowerPlayScore(pkOps: string, pkPerc: number, teamGames: number, ppGoals: number, playerGames: number) {
    if (ppGoals === undefined) {
      return 0;
    }
    var opposingPKOpsRankValue = this.normalizeTeamRankValue(this.rankingStringToNumber(pkOps));
    var opposingPKPercStatValue = 1- this.normalizeTeamStatValue(pkPerc, this.topTeamStats.penaltyKillPercentage, this.worstTeamStats.penaltyKillPercentage);
    var playerPPStatValue = this.normalizePlayerStatValue(ppGoals, this.worstPlayerStats.powerPlayGoals, this.topPlayerStats.powerPlayGoals);
    var teamGamesValue = this.normalizePlayerStatValue(teamGames, this.topTeamStats.gamesPlayed, this.worstTeamStats.gamesPlayed) * this.weightedStats.numberOfGamesWeight + 1;
    var playerGamesValue = this.normalizePlayerStatValue(playerGames, this.worstPlayerStats.games, this.topPlayerStats.games) * this.weightedStats.numberOfGamesWeight + 1;

    var powerPlayOppRank = (playerPPStatValue * opposingPKOpsRankValue * opposingPKPercStatValue * this.weightedStats.powerPlayGoalsWeight) / (teamGamesValue * playerGamesValue * this.weightedStats.numberOfGamesWeight);

    return powerPlayOppRank;
  }

  loadTeamStatsAndRankings() {
    this.teams.forEach(team => {
      var teamStatsResp;
      this.teamService.getTeamStats(team.id).subscribe((teamStatsObs: any) => teamStatsResp = teamStatsObs, () => {}, () => { 
        var teamRankings = teamStatsResp.stats[1].splits[0].stat;
        var teamStats = teamStatsResp.stats[0].splits[0].stat;
        team.rankings = teamRankings;
        team.stats = teamStats;
      });
    });

  }


  //----------------------------------------------------

  loadGames() {
    var schedule: any;
    this.teamService.playingTeams().subscribe((scheduleObs: any) => schedule = scheduleObs, () => {}, () => {
      this.loadTodaysTeams(schedule.dates[0].games);
      this.loadRosters();
    });
  }

  exportToExcel() {
    var fileName= "TimsPredictionsExcelSheet" + formatDate(new Date(), 'dd-MM-yyyy', 'en') + ".xlsx";  
    /* table id is passed over here */   
    let element = document.getElementById('prediction-data'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  getMaxMinData() {
    var allTeamsResp;
    this.teamService.getAllTeams().subscribe((allTeamsObs: any) => allTeamsResp = allTeamsObs, () => {}, () => {
      var allTeamsObjs = allTeamsResp.teams;

      var teamIds = allTeamsObjs.map(team => team.id);
        var rostersResponse;
        this.playerService.getRosters(teamIds).subscribe((rostersObs: any) => rostersResponse = rostersObs, () => {}, () => { 
          var teams : any[] = rostersResponse.teams;
          teams.forEach(team => {
            var teamRoster = team.roster.roster;
            teamRoster.forEach(rosterSpot => {
              var playerId = rosterSpot.person.id;
              var playerSeasonStatsresp, playerPlayoffStatsresp;
              this.playerService.getPlayerSeasonStats(playerId).subscribe((playerSeasonStatsResponse: any) => playerSeasonStatsresp = playerSeasonStatsResponse, () => {}, () => {
                this.playerService.getPlayerPlayoffStats(playerId).subscribe((playerPlayoffStatsResponse: any) => playerPlayoffStatsresp = playerPlayoffStatsResponse, () => {}, () => {
                  var playerSeasonStat: PlayerStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerSeasonStatsresp.stats[0].splits[0].stat;
                  var playerPlayoffStat: PlayerStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerPlayoffStatsresp.stats[0].splits[0].stat;

                  // var goals = playerSeasonStat.goals + playerPlayoffStat.games == undefined ? playerPlayoffStat.games : 0;
                  // var games = playerSeasonStat.games + playerPlayoffStat.games ? playerPlayoffStat.games : 0;
                  // var powerPlayGoals = playerSeasonStat.powerPlayGoals + playerPlayoffStat.powerPlayGoals ? playerPlayoffStat.powerPlayGoals : 0;
                  var goals = playerSeasonStat.goals;
                  var games = playerSeasonStat.games;
                  var powerPlayGoals = playerSeasonStat.powerPlayGoals;
 
                  var goalsPerGame = goals/games;
                  if (goals > this.topPlayerStats.goals) {
                    this.topPlayerStats.goals = goals;
                  } else if (goals < this.worstPlayerStats.goals) {
                    this.worstPlayerStats.goals = goals;
                  }

                  if (games > this.topPlayerStats.games) {
                    this.topPlayerStats.games = games;
                  } else if (games < this.worstPlayerStats.games) {
                    this.worstPlayerStats.games = games;
                  }

                  if (powerPlayGoals > this.topPlayerStats.powerPlayGoals) {
                    this.topPlayerStats.powerPlayGoals = powerPlayGoals;
                  } else if (powerPlayGoals < this.worstPlayerStats.powerPlayGoals) {
                    this.worstPlayerStats.powerPlayGoals = powerPlayGoals;
                  }

                  if (goalsPerGame > this.topPlayerStats.goalsPerGame) {
                    this.topPlayerStats.goalsPerGame = goalsPerGame;
                  } else if (goalsPerGame < this.worstPlayerStats.goalsPerGame) {
                    this.worstPlayerStats.goalsPerGame = goalsPerGame;
                  }
                });
              });
            });
          });
        });


      allTeamsObjs.forEach(teamObj => {
        var pkopsRank : string = teamObj.teamStats[0].splits[1].stat.penaltyKillOpportunities;
        var pkperc : number  = teamObj.teamStats[0].splits[0].stat.penaltyKillPercentage;
        var gaa : number  = teamObj.teamStats[0].splits[0].stat.goalsAgainstPerGame;
        var gamesPlayed: number = teamObj.teamStats[0].splits[0].stat.gamesPlayed;
        var pkfreq = this.rankingStringToNumber(pkopsRank) / gamesPlayed;
        if (pkfreq < this.topTeamStats.penaltyKillFrequency) {
          this.topTeamStats.penaltyKillFrequency = pkfreq;
        } else if (pkfreq > this.worstTeamStats.penaltyKillFrequency) {
          this.worstTeamStats.penaltyKillFrequency = pkfreq;
        }

        if (pkperc < this.topTeamStats.penaltyKillPercentage) {
          this.topTeamStats.penaltyKillPercentage = pkperc
        } else if (pkperc > this.worstTeamStats.penaltyKillPercentage) {
          this.worstTeamStats.penaltyKillPercentage = pkperc
        }

        if (gaa < this.topTeamStats.goalsAgainstPerGame) {
          this.topTeamStats.goalsAgainstPerGame = gaa
        } else if (gaa > this.worstTeamStats.goalsAgainstPerGame) {
          this.worstTeamStats.goalsAgainstPerGame = gaa
        }

        if (gamesPlayed < this.topTeamStats.gamesPlayed) {
          this.topTeamStats.gamesPlayed = gamesPlayed
        } else if (gamesPlayed > this.worstTeamStats.gamesPlayed) {
          this.worstTeamStats.gamesPlayed = gamesPlayed
        }
      });
      this.loadingStatistics = false;
    });
  }
}
