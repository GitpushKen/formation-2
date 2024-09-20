import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  title:string = "Tasks";
  lists:string[] = ['tache1', 'tache2', 'tache3'];
  counter:number = this.lists.length;
  nouvelleTache:string = '';
  imageUrl1 = "/assets/done.png";

  ajoutTache() {
    if(this.nouvelleTache){
      this.lists.push(this.nouvelleTache);
      this.nouvelleTache ='';
      this.counter++;
    } else {
      alert(`Vous n'avez rien saisi`)
    }
  }
  supprTache(pos:number) {
    this.lists.splice(pos, 1)
    this.counter--;
  }

  
  
}
