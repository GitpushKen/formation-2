import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpRequestServiceService } from '../http-request-service.service';
import { HttpRequestComponent } from '../http-request/http-request.component';
import { ShowedPokeComponent } from '../showed-poke/showed-poke.component';
import { cpSync } from 'fs';



@Component({
  selector: 'app-poke-details',
  standalone: true,
  imports: [HttpRequestComponent, CommonModule, ShowedPokeComponent],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css'
})
export class PokeDetailsComponent {
  showedPoke:any = []

  constructor(private getPoke:HttpRequestServiceService,) {}


  @Input() item:any;


  @Output() pokeInfos = new EventEmitter<string>();



  getPokeInfo(){
    this.pokeInfos.emit(this.item)
  }

}
