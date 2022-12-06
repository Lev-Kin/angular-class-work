import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  add(_title: HTMLInputElement, _url: HTMLInputElement): void {

    this.data.addArticle({
      title: _title.value,
      url: _url.value,
      voitePints: 1
    });

    _title.value = '';
    _url.value = '';
  }

}
