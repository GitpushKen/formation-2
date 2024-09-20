import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BasketComponent } from './component/basket/basket.component';
import { ColorDirective } from './color.directive';
import { ComposantParentComponent } from './component/composant-parent/composant-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, BasketComponent, ColorDirective, ComposantParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'projet-2';
  username:string = '';
  newName:string = '';



  update() {
    this.username = `${this.newName}`
  }

  reset() {
    this.username = '';
  }
}



