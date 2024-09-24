import { Component, Input } from '@angular/core';
import { HttpRequestServiceService } from '../http-request-service.service';

@Component({
  selector: 'app-showed-poke',
  standalone: true,
  imports: [],
  templateUrl: './showed-poke.component.html',
  styleUrl: './showed-poke.component.css'
})
export class ShowedPokeComponent {
  showedPoke:any = []

  constructor(private getPoke:HttpRequestServiceService) {}
  @Input() item:any;

  getFullData(){
    this.showedPoke = this.getPoke.getFullData()
  }
}
