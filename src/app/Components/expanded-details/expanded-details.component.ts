import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Player } from 'src/app/Models/Player';

@Component({
  selector: 'expanded-details',
  templateUrl: './expanded-details.component.html',
  styleUrls: ['./expanded-details.component.scss']
})
export class ExpandedDetailsComponent implements OnInit {
  seasonStatColumns = ["key", "value"];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @Input() player: Player;
  
  constructor() { }

  ngOnInit() {
    var data = [
      {key: "Goals", value: this.player.seasonStats.goals},
      {key: "Games", value: this.player.seasonStats.games},
      {key: "PowerPlay Goals", value: this.player.seasonStats.powerPlayGoals},
      {key: "Goals Per Game", value: this.player.seasonStats.goalsPerGame}
    ];
    this.dataSource.data = data;
    // for (const key in this.player.seasonStats) {
    //   this.dataSource.data.push({key, value: this.player.seasonStats[key]});
    // }
  }

}
