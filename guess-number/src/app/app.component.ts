import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'guess-number';
  hiddenNumber = Math.round(Math.random() * 100); // задуманное число
  guess = 0;
  deviation = -101;
  count = 0;

  check(): void {
    this.deviation = this.guess - this.hiddenNumber;
    this.count++;
  }

  reset(): void {
    this.hiddenNumber = Math.round(Math.random() * 100); // задуманное число
    this.guess = 0;
    this.deviation = -101;
    this.count = 0;
  }
}