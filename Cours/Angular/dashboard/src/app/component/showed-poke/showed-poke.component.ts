import { Component, Input } from '@angular/core';
import { HttpRequestServiceService } from '../http-request-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showed-poke',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './showed-poke.component.html',
  styleUrl: './showed-poke.component.css'
})
export class ShowedPokeComponent {
  showedPoke:any = []

  constructor(private getPoke:HttpRequestServiceService) {}
  @Input() item:any;

  getDetail(){
    this.showedPoke = this.getPoke.getFullData()
    console.log(this.showedPoke)
  }
}
