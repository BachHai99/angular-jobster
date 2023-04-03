import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { allJobsReducer } from './stores/allJobs/all-jobs.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { AddjobComponent } from './pages/dashboard/addjob/addjob.component';
import { AlljobsComponent } from './pages/dashboard/alljobs/alljobs.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobComponent } from './components/job/job.component';
import { JobsContainerComponent } from './components/jobs-container/jobs-container.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
    ErrorComponent,
    ProfileComponent,
    AddjobComponent,
    AlljobsComponent,
    StatsComponent,
    LogoComponent,
    NavbarComponent,
    JobComponent,
    JobsContainerComponent,
    LoadingComponent,
    SearchContainerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: allJobsReducer }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
