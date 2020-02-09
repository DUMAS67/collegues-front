import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html'
})
export class GallerieComponent implements OnInit {
  listePhoto: Observable <any[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listePhoto = this.dataService.rechercherPhotos();
  }

}
