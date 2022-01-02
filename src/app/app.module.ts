import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopScorersComponent } from './Components/top-scorers/top-scorers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material/app-material.module';
import { ExpandedDetailsComponent } from './Components/expanded-details/expanded-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopScorersComponent,
    ExpandedDetailsComponent
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
