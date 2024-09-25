import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Chart, registerables } from 'chart.js';
import { getRelativePosition} from 'chart.js/helpers'
import { totalVentes } from './data';

Chart.register(...registerables);
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})

export class GraphComponent {


  test(){
    console.log(totalVentes.datasets)
  }
  public graphConfig: any = {
    type : 'line',
    data : {
      labels : ['Janvier', 'Février', 'Mars', 'Avril'],
    datasets : totalVentes.datasets
    },
    option : {
      aspectRatio: 1,
    }
  }

  graph:any;
  ngOnInit(): void {
    this.graph = new Chart('Graph', this.graphConfig);
  }


}

