import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditorComponent } from './card/card-editor/card-editor.component';
import { DasboardComponent } from './dasboard/dasboard/dasboard.component';

const routes: Routes = [
  {
    path: 'cardEditor',
    component: CardEditorComponent
  },
  {
    path: '',
    component: DasboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
