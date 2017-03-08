import { Routes } from '@angular/router';


import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';

export const VideosRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'liste',
      component: ListeComponent
    },
	{
      path: 'details',
      component: DetailsComponent
    }]
  }
];
