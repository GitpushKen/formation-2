import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  lastItem:any;
  nouvelleTache:any ='';
  newTask:any;
  taches : { id:number; nom: string; completed:boolean}[] = [
    {
      id: 0, nom:'Vaisselle', completed:false
    },
    {
      id: 1, nom:'Ménage', completed:false
    },
    {
      id: 2, nom:'Arroser les plantes', completed:false
    }
  ]
  counter:number = 0;

  displayTaskList() {
    return this.taches;
  }

  recevoirTacheSuppr(id:any) {
    console.log(id)
    this.taches.splice(id, 1)
  }

  // getNouvelleTache() {
  //   if(this.nouvelleTache) {
  //   return this.nouvelleTache = this.nouvelleTache;
  //   }
  // }


  infoTache(x:string){
    console.log (x);
    this.nouvelleTache = x;
    console.log (this.nouvelleTache);
  }

  ajoutTache() {
    console.log (this.nouvelleTache);
    // this.lastItem = this.taches.find(item => item.id === this.taches.length)
    // console.log(this.lastItem)
    this.newTask = {id: this.taches.length, nom: this.nouvelleTache, completed:false}
    console.log(this.newTask)
    this.taches.push(this.newTask)
    console.log(this.taches);
    
  }

  
  constructor() { }
}
