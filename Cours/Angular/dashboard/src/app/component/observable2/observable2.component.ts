import { Component } from '@angular/core';
import { of, filter} from 'rxjs'

@Component({
  selector: 'app-observable2',
  standalone: true,
  imports: [],
  templateUrl: './observable2.component.html',
  styleUrl: './observable2.component.css'
})
export class Observable2Component {
  nombre$ = of(1, 2, 3, 8, 34)

  result$ = this.nombre$.pipe(
    filter(nombre => nombre < 10),
    filter(nombre => nombre > 2)
  )

  constructor(){
    this.result$.subscribe(value => console.log(value));
  }
}
