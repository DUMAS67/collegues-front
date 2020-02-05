import { Component, OnInit } from '@angular/core';
import { listCollegue } from '../mock/matricule/mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor() { }
  listeMatricule: Set<string>;
  affiche = false;
  nomRecherche: string;

  rechercher(saisie: string) {
    this.listeMatricule = listCollegue;
    this.nomRecherche = saisie;
    this.affiche = true;
    console.log('OK recherche');
    console.log(this.nomRecherche);
  }

  ngOnInit() {
  }

}
