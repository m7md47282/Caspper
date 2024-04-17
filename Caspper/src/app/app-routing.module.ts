import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard/dasboard.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardComponent
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then(m => m.CardModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
