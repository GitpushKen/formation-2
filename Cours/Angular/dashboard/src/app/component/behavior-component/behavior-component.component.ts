import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-component',
  standalone: true,
  imports: [],
  templateUrl: './behavior-component.component.html',
  styleUrl: './behavior-component.component.css'
})
export class BehaviorComponentComponent {
  private countSubject = new BehaviorSubject<number>(0)

  count$ = this.countSubject.asObservable();

  private lastActionSubject = new BehaviorSubject<string>('Aucune action');
  lastAction$ = this.lastActionSubject.asObservable();

  constructor() {
    console.log('Valeur initiale', this.countSubject.getValue());
  }

  increment() {
    this.countSubject.next(this.countSubject.getValue()+1);
    this.lastActionSubject.next('Incrementation')
  }
  decrement() {
    this.countSubject.next(this.countSubject.getValue()-1);
    this.lastActionSubject.next('Décrementation')
  }
}
