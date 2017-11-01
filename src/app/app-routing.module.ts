import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';

const routes: Routes = [
  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent
  },
  {
    path: 'washington',
    pathMatch: 'full',
    component: WashingtonComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
