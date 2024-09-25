import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})

// un signal est une methode, il faut mettre les parenthèse en les utilisants

export class SignalsComponent {
  item = signal(0); // Création d'un signal
  prixItem = signal(0);

  total = computed(() => this.item() * this.prixItem()); // Compute se déclenche au changement d'un des signaux

  message = computed(() => {
    const nbArticle = this.item();
    if(nbArticle === 0 ){
      return 'Panier vide'
    } else if (nbArticle < 4) {
      return 'Oh la pince';
    } else {
      return 'Merci rourou'
    }
  })

  constructor(){
    effect(() => { // se déclenche au changement du signal
      console.log(`Le panier à été mis à jour. Nouveau total : ${this.total()}`);
      
    })
  }
  add(){
    this.item.update(i => i + 1)
  }

  remove(){
    this.item.update(i => Math.max(0, i - 1))
  }

}
