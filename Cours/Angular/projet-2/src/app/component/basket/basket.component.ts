import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from '../fruits/fruits.component';
import { EmptyDirective } from '../../directive/empty.directive';



@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [FormsModule, CommonModule, FruitsComponent, EmptyDirective],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  counter:number = 0;
  total:number = 0
  displayPrice:any = 0
  totalPrice:number = 0
  notEmpty:boolean = false
  picked:any=[];
  entrie:any=[];

  title:string ='Basket list'
  imgUrl:string = '';

  basketList:any = [

  ]

  displayList = [
    {
      name: 'Pomme', 
      description: 'Et la connaissance de la gravité fut', 
      weight: 125,
      imgUrl: "/assets/apple.avif",
      selected: true,
      counter: 0,
      price: 0.40
    },
    {
      name: 'Salade', 
      description: 'Ne raconte que des bétises', 
      weight: 185,
      imgUrl: "/assets/salade.webp",
      selected: false,
      counter: 0,
      price: 0.99
    },
    {
      name: 'Fraise', 
      description: 'Fruit préféré des Charlottes', 
      weight: 45,
      imgUrl: "/assets/fraise.png",
      selected: false,
      counter: 0,
      price: 0.25
    },
    {
      name: 'Kiwi', 
      description: 'Fruit exotique brun avec une chair verte et des petits graines noires.',
      weight: 75,
      imgUrl: "/assets/kiwi.jpg",
      selected: false,
      counter: 0,
      price: 0.50
    },
    {
      name: 'Banane', 
      description: 'Fruit jaune, courbé, doux et riche en potassium.',
      weight: 120,
      imgUrl: "/assets/banane.jpg",
      selected: false,
      counter: 0,
      price: 0.30
    },
    {
      name: 'Courgette', 
      description: "Légume d'été, de couleur verte, avec une texture douce.",
      weight: 150,
      imgUrl: "/assets/courgette.jpg",
      selected: false,
      counter: 0,
      price: 1.25
    },
    {
      name: 'Poivron', 
      description: "Légume croquant et coloré, disponible en rouge, jaune ou vert.",
      weight: 200,
      imgUrl: "/assets/pepperbell.jpg",
      selected: false,
      counter: 0,
      price: 0.70
    },
    {
      name: 'Épinard', 
      description: "Feuilles vertes, tendres et riches en nutriments, souvent utilisé en salade.",
      weight: 100,
      imgUrl: "/assets/spinach.jpg",
      selected: false,
      counter: 0,
      price: 1.10
    }
  ];
  
  basketFruit(x:any) {
    this.entrie = new FruitsComponent()
    this.entrie.name = x.name;
    this.entrie.imgUrl = x.imgUrl;
    this.entrie.counter = x.counter;
    this.entrie.price = x.price;
    this.basketList.notEmpty = true
    console.log(this.basketList.notEmpty);
    
    console.log(this.entrie.name);
    if(!this.picked.includes(this.entrie.name)){
      this.picked.push(x.name)
      this.entrie.counter = 1
      this.basketList.push(this.entrie)
      this.total++
      this.totalPrice += x.price
      this.displayPrice = this.totalPrice.toFixed(2)
      console.log(this.basketList);
      console.log(this.picked.length);
      
    }
  }
  counterFruit(x:any) {
    x.counter ++;
    this.total++
    this.totalPrice += x.price
    this.displayPrice = this.totalPrice.toFixed(2)
  }
  minusFruit(x:any, pos:any) {
    if (x.counter >1 ) {
      x.counter --;
      this.total--
      this.totalPrice -= x.price
      this.displayPrice = this.totalPrice.toFixed(2)
    } else if (x.counter = 1){
      this.basketList.splice(pos, 1)
      this.picked.splice(pos, 1)
      this.total--
      this.totalPrice -= x.price
      this.displayPrice = this.totalPrice.toFixed(2)
    }
    if (this.picked.length < 1){
      console.log(this.picked.length);
      console.log(this.basketList.notEmpty);
      this.basketList.notEmpty = false
    }

  }
  
}

