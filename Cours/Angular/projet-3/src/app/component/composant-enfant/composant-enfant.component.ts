import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  standalone: true,
  imports: [],
  templateUrl: './composant-enfant.component.html',
  styleUrl: './composant-enfant.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ComposantEnfantComponent {
  @Input() message:string = '';
  @Output() messageEnvoye = new EventEmitter<string>();

  counter:number = 0;
  counterTotal:number = 0;

  messageEnfant() {
    this.messageEnvoye.emit('Je suis ton enfant')
  }

  counterTest() {
    this.counter++
  }
}
