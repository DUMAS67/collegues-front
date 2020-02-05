import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  constructor() { }

clickM = false;

creer() {
  console.log('Vous avez créer un Collègue');
}

modifier() {
  this.clickM = true;
  console.log('Vous avez modifier un Collègue');
}
valider() {
  console.log('Vous avez valider un Collègue');
}
  ngOnInit() {
  }

}
