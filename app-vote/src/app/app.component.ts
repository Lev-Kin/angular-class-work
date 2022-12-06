import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IArticle } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vote';

  list: IArticle[] = [];

  constructor(private data: DataService) {
    this.list = this.data.sortedList();
  }

}
