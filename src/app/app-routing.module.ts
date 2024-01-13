import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantraSectionComponent } from './mantra-section/mantra-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplesComponent } from './temples/temples.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'mantra',component:MantraSectionComponent},
  {path:'temples',component:TemplesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
