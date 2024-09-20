import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasklistService } from '../../services/tasklist.service';
import { ListeTachesComponentComponent } from '../liste-taches-component/liste-taches-component.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-ajout-taches-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ListeTachesComponentComponent, NewTaskComponent],
  templateUrl: './ajout-taches-component.component.html',
  styleUrl: './ajout-taches-component.component.css'
})
export class AjoutTachesComponentComponent {
  nouvelleTache:string = ''
  newTask:any;


  
  // @Output() tacheAjoutee = new EventEmitter<string>();
  
  // ajout(){
  //   this.tacheAjoutee.emit(this.nouvelleTache)
  // }

  constructor(private taskListService: TasklistService) {}

  infoTache(){
    // console.log (this.nouvelleTache);
    this.taskListService.infoTache(this.nouvelleTache)// this.newTask = this.taskListService.ajoutTache()
    // console.log(this.newTask)
  }
  ajoutTache(){
    this.taskListService.ajoutTache();
  }

  

  

}
