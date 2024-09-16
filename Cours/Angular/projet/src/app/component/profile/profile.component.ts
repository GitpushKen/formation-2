import { Component } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SocialsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  prenom:string = 'Ken'
  nom:string = 'PEROT'
  age:number = 30
  imageUrl = "/assets/1.jpg";
  description:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus auctor eros, et tincidunt massa ultrices quis. Proin gravida leo consequat ante sollicitudin cursus et eget purus. Etiam rhoncus mauris a iaculis accumsan. Ut sed metus nec eros gravida ullamcorper quis pretium nulla. Suspendisse potenti. Cras posuere, nisi ut tempor faucibus, dolor diam ullamcorper ex, sed venenatis tortor nunc vitae justo"
}
