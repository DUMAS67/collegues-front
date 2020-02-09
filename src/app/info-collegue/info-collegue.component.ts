import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue } from '../collegues';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-collegue',
  templateUrl: './info-collegue.component.html'
})
export class InfoCollegueComponent implements OnInit {


  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  col: Observable<Collegue>;
  ngOnInit() {

    this.router.paramMap.subscribe((paramMap) => {

      const matricule = paramMap.get('matricule');

      this.col = this.dataService.rechercherCollegueMatricule(matricule);

    });
    console.log(this.col);
  }

}
