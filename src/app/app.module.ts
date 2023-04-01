import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
    ErrorComponent,
    ProfileComponent,
    AddjobComponent,
    AlljobsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
