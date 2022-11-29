import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  valueOne = 100;
  valueTwo = 'Two';

  // декоратор для входных даных
  @Input() value!: string;
  @Input() product: any;

  // декоратор для выходных данных
  @Output() onClicked = new EventEmitter<string>;

  constructor() {}

  generateEvent(): void {
    this.onClicked.emit("transfer data");
  }

  ngOnInit(): void {}
}
