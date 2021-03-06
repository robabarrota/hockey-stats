import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopScorersComponent } from './Components/top-scorers/top-scorers.component';


const routes: Routes = [
  {
    path:'TopScorers',
    component: TopScorersComponent
  },
  { path: '**',
    redirectTo: 'TopScorers'
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
