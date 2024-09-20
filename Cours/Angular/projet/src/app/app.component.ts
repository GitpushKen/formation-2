import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './component/hello-world/hello-world.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SocialsComponent } from './component/socials/socials.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, ProfileComponent, SocialsComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  // Evènements


})



export class AppComponent {

}

