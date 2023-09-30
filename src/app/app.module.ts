import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MantraSectionComponent } from './mantra-section/mantra-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplesComponent } from './temples/temples.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AboutComponent } from './about/about.component';
import { SearchPipe } from './search-pipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MantraSectionComponent,
    NavBarComponent,
    TemplesComponent,
    AboutComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    SpeedDialModule,
    MatExpansionModule,
    SplitButtonModule,
    AvatarModule,
    AvatarGroupModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
