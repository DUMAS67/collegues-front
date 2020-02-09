import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import variable de HttpClientModule
import { Observable, Subject } from 'rxjs';
import { Collegue } from '../collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // création du bus d'événement
  subjectColNew = new Subject<Collegue>();

  constructor(private http: HttpClient) { } // Injection d'une variable http de type HttpClient
  // pour que DataService utilise le module HTTPClient

  rechercherParNom(nom: string): Observable<string[]> {// Observable mieux que promise -mode asynchrone toujours

    return this.http.get<string[]>('https://btoulemonde-collegues-api.herokuapp.com/collegues?nom=' + nom);
    //returne un tableau de résultat de la requête


  }

  rechercherPhotos(): Observable<any[]> {// Observable mieux que promise -mode asynchrone toujours

    return this.http.get<any[]>('https://btoulemonde-collegues-api.herokuapp.com/collegues/photos');
    //returne un tableau de résultat de la requète


  }
  rechercherCollegueMatricule(matricule: string): Observable<Collegue> {

    return this.http.get<Collegue>('https://btoulemonde-collegues-api.herokuapp.com/collegues/' + matricule);
  }
}
