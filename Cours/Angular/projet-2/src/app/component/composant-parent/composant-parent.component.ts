import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ComposantEnfantComponent } from '../composant-enfant/composant-enfant.component';

@Component({
  selector: 'app-composant-parent',
  standalone: true,
  imports: [ComposantEnfantComponent],
  templateUrl: './composant-parent.component.html',
  styleUrl: './composant-parent.component.css'
})
export class ComposantParentComponent {
  counter:number = 0;
  messageParent:string = 'Bonjour je suis ton/ta père/mère';
  recevoirMessage(message:string) {
  alert(message);
  }
  @ViewChild(ComposantEnfantComponent) composantEnfant !: ComposantEnfantComponent;

  counterTest() {
    this.composantEnfant.counterTest();
  }
}
