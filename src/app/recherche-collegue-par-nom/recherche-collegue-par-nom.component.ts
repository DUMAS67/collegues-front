import { Component, OnInit } from '@angular/core';
import { listCollegue } from '../mock/matricule/mock';
import { DataService } from '../services/data.service';// import du service DataService
import { observable, Observable } from 'rxjs'; // import du type Observable - mode async

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor(private dataservice:DataService) { } // injecte le service DataService
  listeMatricule: Observable <string[]>;
  affiche = false;
  nomRecherche: string;

  rechercher(saisie: string) {
    this.nomRecherche = saisie;
    this.listeMatricule=this.dataservice.rechercherParNom(saisie);
    this.affiche = true;
    console.log('OK recherche');
    console.log(this.nomRecherche);
  }

  ngOnInit() {
  }

}
