import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeTachesComponentComponent } from './component/liste-taches-component/liste-taches-component.component';
import { AjoutTachesComponentComponent } from './component/ajout-taches-component/ajout-taches-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeTachesComponentComponent,AjoutTachesComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-4';
}
