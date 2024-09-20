import { Routes, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ProjectComponent } from './component/project/project.component';
import { InfoComponent } from './component/info/info.component';

export const routes: Routes = [
    {
      path: '', component: AccueilComponent
    },
    {
      path: 'projets', component: ProjectComponent
    },
    {
      path: 'infos', component: InfoComponent
    },
    {
      path: '**', redirectTo: ''
    }
  ];
