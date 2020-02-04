import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  constructor() { }

creer() {
  console.log('Vous avez créer un Collègue');
}

modifier() {
  console.log('Vous avez modifier un Collègue');
}
  ngOnInit() {
  }

}
