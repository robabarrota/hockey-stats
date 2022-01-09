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
import { MatTableDataSource, Sort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TopScorersComponent implements OnInit {
  currentVersion = environment.appVersion;
  orderedPlayers: Player[] = [];
  teams: Team[] = [];
  rosters: Roster[];
  weightedStats: WeightedStats;
  maxPlayerRank: number = 750;
  maxTeamRank: number = 31;
  minRank: number = 1;
  games: Game[] = [];
  topPlayerStats: any;
  worstPlayerStats: any;
  topTeamStats: TeamStat = new TeamStat();
  worstTeamStats: TeamStat = new TeamStat();
  loading = false;
  loaded = false;
  displayedColumns = ["rank", "player", "team", "score"];
  dataSource: MatTableDataSource<Player> = new MatTableDataSource(this.orderedPlayers);
  expandedElement: Player | null;

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.weightedStats = weightedStatsJson;
    this.worstTeamStats = {
      penaltyKillPercentage: 0,
      goalsAgainstPerGame: 0,
      gamesPlayed: 0
    };
    this.topTeamStats = {
      penaltyKillPercentage: 99999,
      goalsAgainstPerGame: 99999,
      gamesPlayed: 99999
    };
    this.topPlayerStats = {
      goals: 0,
      games: 0,
      powerPlayGoals: 0,
      goalsPerGame: 0,
      goalsPerGameScore: 0
    };
    this.worstPlayerStats = {
      goals: 99999,
      games: 99999,
      powerPlayGoals: 99999,
      goalsPerGame: 99999,
      goalsPerGameScore: 99999
    };
    this.runTheNumbers();
  }

  async runTheNumbers() {
    this.loading = true;
    await this.getMaxMinData();
    await this.getRosters();
    this.orderPlayers();
    this.dataSource.data = this.orderedPlayers;
    this.dataSource.filterPredicate = (data, filter: string) => {
      var formattedFilter = filter.toLowerCase().trim();
      var name = data.name.toLowerCase().trim();
      var team = data.playingFor.name.toLowerCase().trim();
      var rank = data.rank.toString();
      return name.includes(formattedFilter) || rank.includes(formattedFilter) || team.includes(formattedFilter)
    };
    this.loading = false;
    this.loaded = true;
  }

  todaysPlayers() {
    this.getRosters();
  }

  async getRosters() {
    this.clearAll();
    var schedule = await this.teamService.playingTeams();
    this.loadTodaysTeams(schedule.dates[0].games);
    await this.loadTeamStatsAndRankings();
    await this.loadRosters();
  }

  loadTodaysTeams(games) {
    var teams: Team[] = [];
    games.forEach(game => {
      var homeTeam: Team = {
        id: game.teams.home.team.id,
        name: game.teams.home.team.name,
        rankings: null,
        stats: null
      };
      var awayTeam: Team = {
        id: game.teams.away.team.id,
        name: game.teams.away.team.name,
        rankings: null,
        stats: null
      };
      teams.push(homeTeam);
      teams.push(awayTeam);
      var newGame: Game = {
        homeTeam: homeTeam,
        awayTeam: awayTeam
      };
      this.games.push(newGame);
    });
    this.teams = teams;
  }

  async loadRosters() {
    var teamIds: number[] = [];
    this.teams.forEach(function (team) {
      teamIds.push(team.id);
    })
    var rostersResponse = await this.playerService.getRosters(teamIds);
    var rosters: Roster[] = [];
    var teams: any[] = rostersResponse.teams;
    await Promise.all(teams.map(async team => {
      var thisGame = this.games.filter((game) => game.homeTeam.id === team.id || game.awayTeam.id === team.id)[0];
      var opposingTeam: Team = thisGame.homeTeam.id === team.id ? thisGame.awayTeam : thisGame.homeTeam;
      var { stats, rankings } = this.teams.find(team => team.id == team.id);
      var roster: Roster = {
        team: {
          id: team.id,
          name: team.name,
          rankings: rankings,
          stats: stats
        },
        players: []
      };
      var teamRoster = team.roster.roster;
      await Promise.all(teamRoster.map(async rosterSpot => {
        var playerId = rosterSpot.person.id;
        var playerName = rosterSpot.person.fullName;
        var playerSeasonStatsresp = await this.playerService.getPlayerSeasonStats(playerId);
        var playerSeasonStat: PlayerStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerSeasonStatsresp.stats[0].splits[0].stat;
        //var playerPlayoffStatsresp = await this.playerService.getPlayerPlayoffStats(playerId);
        //var playerPlayoffStat: PlayerStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerPlayoffStatsresp.stats[0].splits[0].stat;
        var player: Player = {
          id: playerId,
          name: playerName,
          seasonStats: { ...playerSeasonStat, goalsPerGame: playerSeasonStat.games > 0 ? +(playerSeasonStat.goals / playerSeasonStat.games).toFixed(3) : 0 },
          //playoffStats: playerPlayoffStat,
          goalLikelihoodRank: -1,
          playingAgainst: opposingTeam,
          playingFor: roster.team,
          rank: 0
        };
        await this.calculateGoalLikelihood(player);
        roster.players.push(player);
        this.orderedPlayers.push(player);
      }));
      rosters.push(roster);
    }));
    this.rosters = rosters;
  }

  clearAll() {
    this.teams = [];
    this.rosters = [];
    this.orderedPlayers = [];
    this.loaded = false;
  }

  orderPlayers() {
    this.orderedPlayers.sort((a, b) => b.goalLikelihoodRank - a.goalLikelihoodRank);
    this.orderedPlayers.map((player, index) => player.rank = index + 1);
  }

  getGoalsPerGame(stats: PlayerStat): number {
    return stats.games === 0 ? 0 : stats.goals / stats.games;
  }

  async calculateGoalLikelihood(player: Player) {
    var playerSeasonStatsResp = await this.playerService.getPlayerSeasonStats(player.id)
    // var playerPlayoffStatsResp = await this.playerService.getPlayerPlayoffStats(player.id)
    // if (playerSeasonStatsResp.stats[0].splits[0] !== undefined && playerPlayoffStatsResp.stats[0].splits[0] !== undefined) {
    if (playerSeasonStatsResp.stats[0].splits[0] !== undefined) {
      var playerSeasonStats = playerSeasonStatsResp.stats[0].splits[0].stat;
      //var playerPlayoffStats = playerPlayoffStatsResp.stats[0].splits[0].stat;
      // var playerTotalGoals = playerSeasonStats.goals || 0 + playerPlayoffStats.goals || 0 ;
      // var playerTotalGames = playerSeasonStats.games || 0  + playerPlayoffStats.games || 0 ;
      // var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0  + playerPlayoffStats.powerPlayGoals || 0 ;

      var playerTotalGoals = playerSeasonStats.goals || 0;
      var playerTotalGames = playerSeasonStats.games || 0;
      var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0;
      if (player.id == 8476822 || player.id == 8480216) {
        console.log("here");
      }
      player.goalLikelihoodRank = this.getGoalsPerGameScore(playerTotalGoals, playerTotalGames)
        //+ this.getGeneralPlayerRank(playerStats.rankShots) *  this.getGeneralPlayerRank(playerStats.rankShotPct) * this.weightedStats.shotPercentageWeight

        + this.getOpposingGoalsAgainstScore(this.teams.find(team => team.id === player.playingAgainst.id).stats.goalsAgainstPerGame)
        + this.getPowerPlayScore(this.teams.find(team => team.id === player.playingAgainst.id).rankings.penaltyKillOpportunities, this.teams.find(team => team.id === player.playingAgainst.id).stats.penaltyKillPercentage, this.teams.find(team => team.id === player.playingAgainst.id).stats.gamesPlayed, playerTotalPPG, playerTotalGames)
        ;
    }
    else {
      player.goalLikelihoodRank = -1;
    }
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
    var goalsPerGamePreNorm = this.calculateGoalsPerGameScore(goals, games);
    var goalsPerGameNormalized = this.normalizePlayerStatValue(goalsPerGamePreNorm, this.worstPlayerStats.goalsPerGameScore, this.topPlayerStats.goalsPerGameScore);
    var goalsPerGameScore = goalsPerGameNormalized * this.weightedStats.goalsPerGameWeight;

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
    var opposingPKPercStatValue = 1 - this.normalizeTeamStatValue(pkPerc, this.topTeamStats.penaltyKillPercentage, this.worstTeamStats.penaltyKillPercentage);
    var playerPPStatValue = this.normalizePlayerStatValue(ppGoals, this.worstPlayerStats.powerPlayGoals, this.topPlayerStats.powerPlayGoals);
    var teamGamesValue = this.normalizePlayerStatValue(teamGames, this.topTeamStats.gamesPlayed, this.worstTeamStats.gamesPlayed) * this.weightedStats.numberOfGamesWeight + 1;
    var playerGamesValue = this.normalizePlayerStatValue(playerGames, this.worstPlayerStats.games, this.topPlayerStats.games) * this.weightedStats.numberOfGamesWeight + 1;

    var powerPlayOppRank = (playerPPStatValue * opposingPKOpsRankValue * opposingPKPercStatValue * this.weightedStats.powerPlayGoalsWeight) / (teamGamesValue * playerGamesValue * this.weightedStats.numberOfGamesWeight);

    return powerPlayOppRank;
  }

  async loadTeamStatsAndRankings() {
    await Promise.all(this.teams.map(async team => {
      var teamStatsResp = await this.teamService.getTeamStats(team.id)
      team.rankings = teamStatsResp.stats[1].splits[0].stat;
      team.stats = teamStatsResp.stats[0].splits[0].stat;
    }));
  }


  //----------------------------------------------------

  exportToExcel() {
    var fileName = "TimsPredictionsExcelSheet" + formatDate(new Date(), 'dd-MM-yyyy', 'en') + ".xlsx";
    /* table id is passed over here */
    let element = document.getElementById('prediction-data');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  async getMaxMinData() {
    var allTeamsResp = await this.teamService.getAllTeams();
    var allTeamsObjs = allTeamsResp.teams;

    var teamIds = allTeamsObjs.map(team => team.id);
    var rostersResponse = await this.playerService.getRosters(teamIds);
    var teams: any[] = rostersResponse.teams;
    Promise.all(teams.map(async team => {
      var teamRoster = team.roster.roster;
      await Promise.all(teamRoster.map(async rosterSpot => {
        var playerId = rosterSpot.person.id;
        var playerSeasonStatsresp = await this.playerService.getPlayerSeasonStats(playerId);
        //var playerPlayoffStatsresp = await this.playerService.getPlayerPlayoffStats(playerId);
        var playerSeasonStat: PlayerStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerSeasonStatsresp.stats[0].splits[0].stat;
        //var playerPlayoffStat: PlayerStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new PlayerStat() : playerPlayoffStatsresp.stats[0].splits[0].stat;

        // var goals = playerSeasonStat.goals + playerPlayoffStat.games == undefined ? playerPlayoffStat.games : 0;
        // var games = playerSeasonStat.games + playerPlayoffStat.games ? playerPlayoffStat.games : 0;
        // var powerPlayGoals = playerSeasonStat.powerPlayGoals + playerPlayoffStat.powerPlayGoals ? playerPlayoffStat.powerPlayGoals : 0;
        var goals = playerSeasonStat.goals;
        var games = playerSeasonStat.games;
        var powerPlayGoals = playerSeasonStat.powerPlayGoals;

        var goalsPerGame = goals/games;

        var goalsPerGameScore = this.calculateGoalsPerGameScore(goals, games);

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

        if (goalsPerGameScore > this.topPlayerStats.goalsPerGameScore) {
          this.topPlayerStats.goalsPerGameScore = goalsPerGameScore;
        } else if (goalsPerGameScore < this.worstPlayerStats.goalsPerGameScore) {
          this.worstPlayerStats.goalsPerGameScore = goalsPerGameScore;
        }
      }));
    }))

    allTeamsObjs.forEach(teamObj => {
      var pkperc: number = teamObj.teamStats[0].splits[0].stat.penaltyKillPercentage;
      var gaa: number = teamObj.teamStats[0].splits[0].stat.goalsAgainstPerGame;
      var gamesPlayed: number = teamObj.teamStats[0].splits[0].stat.gamesPlayed;

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
  }

  sortData(sort: Sort) {
    const data = this.orderedPlayers.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rank': return compare(a.rank, b.rank, isAsc);
        case 'player': return compare(a.name, b.name, isAsc);
        case 'team': return compare(a.playingFor.name, b.playingFor.name, isAsc);
        case 'score': return compare(a.goalLikelihoodRank, b.goalLikelihoodRank, isAsc);
        default: return 0;
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateGoalsPerGameScore(goals: number, games: number) {
    var goalsPerGame = goals / games;
    var gamesValue = (Math.log(games) / Math.log(164));
    var goalsPerGameScore = (goalsPerGame * gamesValue);

    return goalsPerGameScore
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
