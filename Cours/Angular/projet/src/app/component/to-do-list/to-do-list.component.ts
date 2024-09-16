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
  title:string = "Tâches";
  lists:string[] = ['tache1', 'tache2', 'tache3'];
  nouvelleTache:string = '';

  ajoutTache() {
    if(this.nouvelleTache){
      this.lists.push(this.nouvelleTache);
      this.nouvelleTache ='';
    } else {
      alert(`Vous n'avez rien saisi`)
    }
  }
  supprTache() {
    if(this.nouvelleTache){
      this.lists.push(this.nouvelleTache);
      this.nouvelleTache ='';
    } else {
      alert(`Vous n'avez rien saisi`)
    }
  }
}
