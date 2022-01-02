import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Team } from 'src/app/Models/Team';

@Component({
  selector: 'team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  teamStatColumns = ["key", "value"];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @Input() team: Team;
  constructor() { }

  ngOnInit() {
    var data = [
      {key: "Games Played", value: this.team.stats.gamesPlayed},
      {key: "Goals Against Per Game", value: this.team.stats.goalsAgainstPerGame},
      {key: "Penalty Kill Percentage", value: this.team.stats.penaltyKillPercentage}
    ];
    this.dataSource.data = data;
    // for (const key in this.team.stats) {
    //   this.dataSource.data.push({key, value: this.team.stats[key]});
    // }
  }

}
