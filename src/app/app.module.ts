import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopScorersComponent } from './Components/top-scorers/top-scorers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material/app-material.module';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';
import { TeamDetailsComponent } from './Components/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopScorersComponent,
    PlayerDetailsComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
