import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutletModule } from './outlet/outlet.module';
import { DasboardComponent } from './dasboard/dasboard/dasboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    OutletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
