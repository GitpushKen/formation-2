import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { HttpRequestServiceService } from '../http-request-service.service';
import { HttpClient } from '@angular/common/http';
import { PokeDetailsComponent } from "../poke-details/poke-details.component";
import { ShowedPokeComponent } from "../showed-poke/showed-poke.component";





@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [CommonModule, FormsModule, PokeDetailsComponent, ShowedPokeComponent],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {
  pokemons:any = []
  list:any = []
  listPoke:any = []
  showedPoke:any = []
  namePoke:any= []

  constructor(private getPoke: HttpRequestServiceService, private detail:HttpClient) {

  }
  search(){
    this.listPoke = this.getPoke.search();
    // this.getPoke.getInfo().subscribe({
    //   next: (data) => {(data.results).forEach(element => {
    //     this.list.push(element)
    //   });
    //   console.log(this.list.length);
    //   for (let i = 0; i < this.list.length; i++) {
    //     // const poke = this.list[i].name;
    //     this.listPoke.push(this.list[i])
    //     // this.pokemons.forEach((p:string) => {
    //     //   this.list.push(p)
    //     // });


    //   }
    //   console.log(this.listPoke);
    //   }
    // })
  }


  getDetail(){

    console.log(this.showedPoke)
  }

  recevoirPokeInfo(id:any) {
    this.namePoke = this.getPoke.recevoirPokeInfos(id);
    this.showedPoke = this.getPoke.getFullData()

  }
}

// Faire un input vers poke-details enfant
