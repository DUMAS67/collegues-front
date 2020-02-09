import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http'; // permet de faire des requetes http
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { InfoCollegueComponent } from './info-collegue/info-collegue.component';

const ROUTES: Routes = [
  { path: 'accueil', component: CollegueComponent }, // /page1 ->
  { path: 'gallerie', component: GallerieComponent },
  { path: 'detailCollegue/:matricule', component: InfoCollegueComponent},
  { path: '', redirectTo: 'page1', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponent,
    GallerieComponent,
    InfoCollegueComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    HttpClientModule, // à introduire pour pouvoir faire des requetes http
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declaration d'un service à rajouter notamment httpClientModule
