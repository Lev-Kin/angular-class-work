import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IArticle } from '../model/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onClicked = new EventEmitter<IArticle>();

  constructor() { }

  ngOnInit(): void {
  }

  add(_title: HTMLInputElement, _url: HTMLInputElement) : void {
    this.onClicked.emit({
      title: _title.value,
      url: _url.value,
      voitePints: 1
    })
    _title.value = '';
    _url.value = '';
  }

}
