import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bonjour-angular';
  //collegueTest = collegueMock; valeur du paramètre dans le cas <app-collegue[col]="CollegueTest"
}
