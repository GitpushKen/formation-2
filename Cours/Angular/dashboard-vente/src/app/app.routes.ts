import { Routes, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { GraphComponent } from './component/graph/graph.component';
import { SalesComponent } from './component/sales/sales.component';
import { TotalComponent } from './component/total/total.component';

export const routes: Routes = [
    {
      path: '', component: MainComponent
    },
    {
      path: 'graph', component: GraphComponent
    },
    {
      path: 'ventes', component: SalesComponent
    },
    {
      path: 'total', component: TotalComponent
    },
    {
      path: '**', redirectTo: ''
    }
  ];
