import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantraSectionComponent } from './mantra-section/mantra-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplesComponent } from './temples/temples.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { TempleComponent } from './temple/temple.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'mantra',component:MantraSectionComponent,children:[{path:'mantra-pdf/:title',component:PdfReaderComponent}]},
  {path:'temples',component:TemplesComponent,children:[{path:'temple/:name',component:TempleComponent}]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
