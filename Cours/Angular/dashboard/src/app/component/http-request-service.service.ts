import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { map, Observable, switchMap } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { response } from 'express';
>>>>>>> 933e7b75fe034c87efa227d39d78259bf278d9ea

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
}


@Injectable({
  providedIn: 'root'
})

export class HttpRequestServiceService {
  pokemons:any = []
  pokemonDetails:any = []
  listPoke:any = []
  showedPoke:any = []
  namePoke:any = []
  outputed:any =[]

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'


  constructor(private http:HttpClient) {}

  getInfo(): Observable<pokemon> {
<<<<<<< HEAD
    return this.http.get<pokemon>(`${this.apiUrl}`)
  }
  getInfo2(response:any): Observable<pokemonDetail> {
    return this.http.get<pokemonDetail>(`${this.apiUrl}`+`${this.listPoke.name}`)
=======
    return this.http.get<pokemon>(`${this.apiUrl}`+ '?offset=0&limit=20')
>>>>>>> 933e7b75fe034c87efa227d39d78259bf278d9ea
  }



  search(){
    this.getInfo().subscribe({
      next: (data) => {(data.results).forEach(element => {
        this.listPoke.push(element);
<<<<<<< HEAD
        switchMap((response:any) => {
          return this.getInfo2(response.results).pipe(map(details => {
            details:details
          }))
        })
        })
  }});
      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        // const poke = this.list[i].name;
        this.listPoke.push(this.list[i])
        // this.pokemons.forEach((p:string) => {
        //   this.list.push(p)
        // }); 
        
      }
=======
      });
>>>>>>> 933e7b75fe034c87efa227d39d78259bf278d9ea
      console.log(this.listPoke);
      }
    })
    return this.listPoke;
  }
<<<<<<< HEAD
  // search(){
  //   this.getInfo().subscribe({
  //     next: (data) => {(data.results).forEach(element => {
  //       this.listPoke.push(element);
  //       this.listPoke.forEach((poke:any) => {
  //         this.getInfo2().subscribe({
  //           next: (data2) => {(data2.results).forEach(poke => {
  //             this.showedPoke.push(poke)
  //           })} 
            
  //          });


  //       })
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
=======
  recevoirPokeInfos(id:any) {
    console.log(id)
    this.namePoke = id.name
    console.log(this.namePoke)
  }
  getInfo2() :Observable<pokemonDetail>{
    return this.http.get<pokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${this.namePoke}`)
  }

  getFullData(){
    this.getInfo2().subscribe({
      next: (data) => {this.showedPoke = data;
      console.log(this.showedPoke.name);
      }
    })
    return this.showedPoke;
  }

  outputFullData(){
    this.outputed = this.showedPoke
    console.log(this.outputed);

  }





>>>>>>> 933e7b75fe034c87efa227d39d78259bf278d9ea



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




  }

