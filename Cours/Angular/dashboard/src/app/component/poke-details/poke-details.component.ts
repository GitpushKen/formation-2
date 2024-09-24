import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestServiceService } from '../http-request-service.service';
import { HttpRequestComponent } from '../http-request/http-request.component';

interface pokemonDetail{
  results : [
    [
      {
        id : [
          {
            name:string
            url:string
          }
        ]
      }
    ]
  ]
}

@Component({
  selector: 'app-poke-details',
  standalone: true,
  imports: [HttpRequestComponent],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css'
})
export class PokeDetailsComponent {

  constructor(private detail:HttpRequestServiceService, private getDetail:HttpClient) {}

  private apiUrl2 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

  details() : Observable<pokemonDetail> {
    return this.getDetail.get<pokemonDetail>(`${this.apiUrl2}`)
  }


  @Input() item:any;

  
  @Output() pokeInfos = new EventEmitter<string>();
  
  getPokeInfo(){
    this.pokeInfos.emit(this.item)
  }
}
