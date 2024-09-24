import { Component } from '@angular/core';
import { of, filter } from 'rxjs'

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  // of(1, 2, 3)
  // from([])
  // interval(1000)
  // fromEvent(search, 'input')
  listNumbers$ = of(1, 2, 3, 4)// $ convention de nommage pour informer les autres devs que c'est un observable

  result$ = this.listNumbers$.pipe(// pipe permet d'enchainer les methodes
    filter(num => num % 2 === 0),

  )
  constructor(){
    this.result$.subscribe(value => console.log(value));
  }
}
