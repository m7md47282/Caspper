import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

import { CardEditorComponent } from './card-editor/card-editor.component';



@NgModule({
  declarations: [
    CardEditorComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatTabsModule,
    MatInputModule
  ],
  exports:[
    CardEditorComponent
  ]
})
export class CardModule { }
