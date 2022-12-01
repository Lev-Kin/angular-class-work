import { Component } from '@angular/core';
import { IArticle } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vote';
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
  }
  
  sortedList(): IArticle[] {
    let arr = [...this.list]
    this.list.sort((a: IArticle, b: IArticle) => {
      return (b.voitePints! - a.voitePints!);
    });

    return arr;
  }

}
