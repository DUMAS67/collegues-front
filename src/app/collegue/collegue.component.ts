import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegues';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {
  // @Input() col: Collegue; a utiliser quand paramètre dans app-collegue[col]
  constructor(private dataService: DataService) { }

  clickM = false;
  col: Collegue;
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

    this.dataService.subjectColNew.subscribe(
      colNew => {
        this.col = colNew;
      }
    );
  }
}
