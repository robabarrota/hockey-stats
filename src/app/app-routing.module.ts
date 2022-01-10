import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopGoaliesComponent } from './Components/top-goalies/top-goalies.component';
import { TopScorersComponent } from './Components/top-scorers/top-scorers.component';


const routes: Routes = [
  {
    path:'top-scorers',
    component: TopScorersComponent
  },
  {
    path:'top-goalies',
    component: TopGoaliesComponent
  },
  { path: '**',
    redirectTo: 'top-scorers'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
