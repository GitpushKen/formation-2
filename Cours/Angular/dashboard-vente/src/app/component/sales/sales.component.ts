import { Component } from '@angular/core';
import { totalVentes } from '../graph/data';
import { BrainService } from '../../brain.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  dataVentes = totalVentes;
  vegetables:any = []

  constructor(private brain: BrainService) {

  }
  test(){
    this.brain.findHighest()
  }
}
