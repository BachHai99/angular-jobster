import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlljobsComponent } from './pages/dashboard/alljobs/alljobs.component';
import { AddjobComponent } from './pages/dashboard/addjob/addjob.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';


const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: '/home',
  //   component: LandingComponent
  // },
  // {
  //   path: "/",
  //   component: LandingComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: "all-jobs",
    component: AlljobsComponent
  },
  {
    path: "add-job",
    component: AddjobComponent
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: StatsComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
