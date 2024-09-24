import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface pokemon{
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

interface pokemonDetail{
  results : [
    [
      {
        id : number,
        name : string,
        sprites : [
          {
            front_default : string
          }
        ]
      }
    ]
  ]
}


@Injectable({
  providedIn: 'root'
})

export class HttpRequestServiceService {
  pokemons:any = []
  pokemonDetails:any = []
  listPoke:any = []
  list:any = []
  showedPoke:any = []

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'


  constructor(private http:HttpClient) {}

  getInfo(): Observable<pokemon> {
    return this.http.get<pokemon>(`${this.apiUrl}`)
  }
  getInfo2(): Observable<pokemonDetail> {
    return this.http.get<pokemonDetail>(`${this.apiUrl}`+`${this.listPoke.name}`)
  }


  search(){
    this.getInfo().subscribe({
      next: (data) => {(data.results).forEach(element => {
        this.listPoke.push(element);
        this.listPoke.forEach((poke:any) => {
          this.getInfo2().subscribe({
            next: (data2) => {(data2.results).forEach(poke => {
              this.showedPoke.push(poke)
            })} 
            
           });


        })
      });
      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        // const poke = this.list[i].name;
        this.listPoke.push(this.list[i])
        // this.pokemons.forEach((p:string) => {
        //   this.list.push(p)
        // }); 
        
      }
      console.log(this.listPoke);
      }
    })
    return this.listPoke;
  }


  
  

  // getFullData(){
  //   this.getInfo2().subscribe({
  //     next: (data2) => {(data2.results).forEach(element => {
  //       this.list.push(element)
  //     });
  //     console.log(this.list.length);
  //     for (let i = 0; i < this.list.length; i++) {
  //       // const poke = this.list[i].name;
  //       this.listPoke.push(this.list[i])
  //       // this.pokemons.forEach((p:string) => {
  //       //   this.list.push(p)
  //       // }); 


        
  //     }
  //     console.log(this.listPoke);
  //     }
  //   })
  //   return this.listPoke;
  // }


  recevoirPokeInfos(id:any) {
    console.log(id)
  }
}
