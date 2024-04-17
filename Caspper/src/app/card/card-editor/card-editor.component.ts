import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.sass']
})
export class CardEditorComponent implements OnInit{
  card = {}

  constructor(){}

  ngOnInit(): void {

  }
}
