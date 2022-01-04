import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Team } from 'src/app/Models/Team';

@Component({
  selector: 'team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  columns = ["statKey", "statValue", "rankKey", "rankValue"];
  statsDataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @Input() team: Team;
  constructor() { }

  ngOnInit() {
    var statsData = [
      {statKey: "Goals Against Per Game", statValue: this.team.stats.goalsAgainstPerGame, rankKey: "Goals Against Per Game", rankValue: this.team.rankings.goalsAgainstPerGame},
      {statKey: "PK%", statValue: this.team.stats.penaltyKillPercentage, rankKey: "Times Shorthanded", rankValue: this.team.rankings.penaltyKillOpportunities},
      {rankKey: "PK%", rankValue: this.team.rankings.penaltyKillPercentage}

    ];

    this.statsDataSource.data = statsData;
    // for (const key in this.team.rankings) {
    //   this.rankingsDataSource.data.push({key, value: this.team.rankings[key]});
    // }
  }

}
