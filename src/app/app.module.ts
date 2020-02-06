import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http'; // permet de faire des requetes http

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    HttpClientModule // à introduire pour pouvoir faire des requetes http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declaration d'un service à rajouter notamment httpClientModule
