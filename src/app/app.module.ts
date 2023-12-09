import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MantraSectionComponent } from './mantra-section/mantra-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplesComponent } from './temples/temples.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SearchPipe } from './search-pipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
@NgModule({
  declarations: [	
    AppComponent,
    LandingPageComponent,
    MantraSectionComponent,
    NavBarComponent,
    TemplesComponent,
   BlogComponent,
    SearchPipe,
      PhotoGalleryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    MatIconModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    SpeedDialModule,
    MatExpansionModule,
    SplitButtonModule,
    ToastModule,
    MessagesModule,
    HttpClientModule,
    CardModule,
    TagModule,
    ButtonModule,
    ProgressSpinnerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
