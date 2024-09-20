import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacheComponentComponent } from '../tache-component/tache-component.component';
import { TasklistService } from '../../services/tasklist.service';


@Component({
  selector: 'app-liste-taches-component',
  standalone: true,
  imports: [CommonModule, TacheComponentComponent],
  templateUrl: './liste-taches-component.component.html',
  styleUrl: './liste-taches-component.component.css'
})
export class ListeTachesComponentComponent {
  taches:any = []
  tacheSupprimee:any = ''
  
  constructor(private taskListService: TasklistService) {
    this.taches = this.taskListService.displayTaskList();
  }

  recevoirTacheSuppr(id:any) {
    this.taches = this.taskListService.recevoirTacheSuppr(id);
    this.taches = this.taskListService.displayTaskList();
  }
  recevoirTacheAdd(tache:any) {
    this.taches = this.taskListService.ajoutTache();
  }


}
