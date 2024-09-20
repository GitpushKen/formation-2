import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-tache-component',
  standalone: true,
  imports: [],
  templateUrl: './tache-component.component.html',
  styleUrl: './tache-component.component.css'
})
export class TacheComponentComponent {

  constructor(private taskListService: TasklistService) {
    
  }


  @Input() item:any;

  
  @Output() tacheSupprimee = new EventEmitter<string>();
  
  delete(){
    this.tacheSupprimee.emit(this.item.id)
  }
}
