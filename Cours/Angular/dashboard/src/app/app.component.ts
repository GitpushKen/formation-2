import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { Observable2Component } from './component/observable2/observable2.component';
import { ObservableComponent } from './component/observable/observable.component';
import { HttpRequestComponent } from './component/http-request/http-request.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Observable2Component, ObservableComponent, HttpRequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
