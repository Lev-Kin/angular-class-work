import { Injectable } from '@angular/core';
import { IArticle } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  list: IArticle[] = [
    {
      title: "angular",
      url: "https://angular.io/",
      voitePints: 5
    },
    {
      title: "javascript",
      url: "https://learn.javascript.ru/",
      voitePints: 3
    }
  ];

  addArticle(obj: IArticle): void {
    this.list.push(obj);
    this.sort();
  }

  sortedList(): IArticle[] {
    this.sort();
    return this.list;
  }

  sort(): void {
    this.list.sort((a: IArticle, b: IArticle) => {
      return (b.voitePints! - a.voitePints!);
    });
  }

  constructor() { }
}
