import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/Models/Team';
import appsettingsJson from '../../../assets/appsettings.json';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseApiUrl: string;
  apiVersion: string;

  constructor(private http: HttpClient) { 
    this.baseApiUrl = appsettingsJson.apiBaseUrl;
    this.apiVersion = appsettingsJson.apiVersion;
  }

  playingTeams() : Observable<any> {
    //https://statsapi.web.nhl.com/api/v1/schedule
    var todaysDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    var requestUrl = this.baseApiUrl + this.apiVersion + "schedule?startDate=" + todaysDate + "&endDate=" + todaysDate;
    var result = this.http.get(requestUrl);
    return result;
  }

  getTeamStats(teamId: number) : Observable<any> {
    var requestUrl = this.baseApiUrl + this.apiVersion + "teams/" + teamId + "/stats";
    var result = this.http.get(requestUrl);
    return result;
  }

  getAllTeams() : Observable<any> {
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats"
    var requestUrl = this.baseApiUrl + this.apiVersion + "teams?expand=team.stats";
    var result = this.http.get(requestUrl);
    return result;
  }
}
