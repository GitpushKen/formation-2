import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

// On créé l'interface qui va servir de modèle
interface Pokemon {
  id: number;
  name: string; 
  sprite: string;
  like: number; 
  dislike: number; 
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})


export class SignalsComponent {

  public pokemons = signal<Pokemon[]>([ // un signal est une methode, il faut mettre les parenthèse en les utilisants, ici, les valeurs seront mise à jour car chaque objet est dans le signal
    {
      id: 1, 
      name: "Bulbizarre",
      sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
      like: 0,
      dislike :0
    },
    {
      id: 2, 
      name: "Salamèche",
      sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
      like: 0,
      dislike :0
    },
    {
      id: 3, 
      name: "Carapuce",
      sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
      like: 0,
      dislike :0
    },
  ]);

  // Ici on retourne ce qui servira à positionner les pokemons dans le tableaux en fonction de leurs likes/dislikes
  sortedPokemons = computed(() => {
    return [...this.pokemons()].sort((a, b) => {
      const populariteA = a.like - a.dislike;
      const populariteB = b.like - b.dislike;
      return populariteB - populariteA;
    });
  });

  like(id: number) { // On pense bien à récupérer l'id qui servira de référence pour cibler le bon pokémon
    this.pokemons.update(pokemons => // Update mettra à jour le compteur de like
      pokemons.map(pokemon => 
        pokemon.id === id ? {...pokemon, like: pokemon.like + 1} : pokemon // Si l'id du bouton correspond à l'id du pokemon, on augmente les likes
      )
    );
  }
  dislike(id: number) {
    this.pokemons.update(pokemons => 
      pokemons.map(pokemon =>
        pokemon.id === id ? {...pokemon, dislike: pokemon.dislike + 1} : pokemon
      )
    )
  }
}

//  // Création d'un signal
  // //  votePoke1 = signal(0); 
  // //  votePoke2 = signal(0); 
  // //  votePoke3 = signal(0);

  //  votes = [
  //   {votePoke1 = signal(0); }
  //  ]
 
  //  position:any = [];
 
  //  positionUp = signal(1);


  // test(){
  //   console.log(this.listPoke)
  // }


  // like(){
  //   this.votePoke1.update(i => i + 1)
  //   console.log(this.votePoke1())
  //   this.positionning();
  // }

  // dislike(){
  //   this.votePoke1.update(i => Math.max(0, i - 1))
  //   console.log(this.votePoke1())
  // }
  // like2(){
  //   this.votePoke2.update(i => i + 1)
  //   console.log(this.votePoke2())
  //   this.positionning();
  // }

  // dislike2(){
  //   this.votePoke2.update(i => Math.max(0, i - 1))
  //   console.log(this.votePoke2())
  // }
  // like3(){
  //   this.votePoke3.update(i => i + 1)
  //   console.log(this.votePoke3())
  //   this.positionning();
  //   console.log(this.listPoke)
  // }

  // dislike3(){
  //   this.votePoke3.update(i => Math.max(0, i - 1))
  //   console.log(this.votePoke3())
  // }


  // listPoke:any = [
  //   {id:"1", name: 'Bulbizarre', sprite:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png", nbVote :this.votePoke1()},
  //   {id:"2", name: 'Salamèche', sprite:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png", nbVote :this.votePoke2()},
  //   {id:"3", name: 'Carapuce', sprite:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png", nbVote :this.votePoke3()}
  // ]

  // compareVote(a:number, b:number){
  //   return a - b
  // }

  // positionning(){
  //   this.position = [...this.listPoke.sort(this.compareVote)]
  //   console.log(this.position)
  // }





  // // total = computed(() => this.vote() * this.positionUp()); // Compute se déclenche au changement d'un des signaux

  // // message = computed(() => {
  // //   for (let i = 0; i < this.votes.length; i++) {
  // //     const nbVote = this.votes[i]();
  // //   if(nbVote === 0 ){
  // //     return 'Loooooosers'
  // //   } else if (nbVote < 4) {
  // //     return 'Oh la pince';
  // //   } else {
  // //     return 'Merci rourou'
  // //   }
      
  // //   }
  // // })

  // displayPokeList() {
  //   return this.listPoke;
  // }


  // constructor(private getPoke:HttpClient) {
  //   effect(() => { // se déclenche au changement du signal
  //     // console.log(`Le panier à été mis à jour. Nouveau total : ${this.total()}`);
  //     this.displayPokeList();
  //   })
  // }


