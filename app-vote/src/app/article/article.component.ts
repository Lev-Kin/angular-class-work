import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../model/model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() item!: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

  voiteUp(): void {
    this.item.voitePints!++;
  }

  voiteDown(): void {
    this.item.voitePints!--;
    if(this.item.voitePints! < 0){
      this.item.voitePints = 0;
    }
  }



}
