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
import { LoadingBarComponent } from './Components/loading-bar/loading-bar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TopGoaliesComponent } from './Components/top-goalies/top-goalies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopScorersComponent,
    PlayerDetailsComponent,
    TeamDetailsComponent,
    LoadingBarComponent,
    NavbarComponent,
    FooterComponent,
    TopGoaliesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
