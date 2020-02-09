import { Component, OnInit } from '@angular/core';
import { Collegue } from '../collegues';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html'
})
export class CreerCollegueComponent implements OnInit {


  collegueACreer: Collegue = {};
  constructor() { }

  ngOnInit() {
  }

  creerCollegue() {
console.log(this.collegueACreer);

  }

}
