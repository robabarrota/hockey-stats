import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/Player';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import appsettingsJson from '../../../assets/appsettings.json';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseApiUrl: string;
  apiVersion: string;

  constructor(private http: HttpClient) { 
    this.baseApiUrl = appsettingsJson.apiBaseUrl;
    this.apiVersion = appsettingsJson.apiVersion;
  }

  getRosters(teamIds: number[]) : Observable<any> {
    var requestUrl = this.baseApiUrl + this.apiVersion + "teams/?teamId=" + teamIds.join(",") + "&expand=team.roster";
    var result = this.http.get(requestUrl);
    return result;
  }

  getPlayerStats(playerId: number) : Observable<any> {
    var requestUrl = this.baseApiUrl + this.apiVersion + "people/" + playerId + "/stats?stats=statsSingleSeason&season=20202021";
    var result = this.http.get(requestUrl);
    return result;
  }

  getPlayerRankings(playerId: number): Observable<any> {
    var requestUrl = this.baseApiUrl + this.apiVersion + "people/" + playerId + "/stats?stats=regularSeasonStatRankings&season=20202021";
    var result = this.http.get(requestUrl);
    return result;
  }
}
