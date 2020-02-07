import { Component, OnInit } from '@angular/core';
import { Collegue } from '../collegues';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
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
