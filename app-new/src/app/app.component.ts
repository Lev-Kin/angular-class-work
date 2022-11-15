import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-new';
  text = 'To be or not to be...';
  name = 'adfadf';

  getTitle(): string {
    return this.title;
  };

}
