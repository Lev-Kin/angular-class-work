import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  choice: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  nextChoice(): void {
    this.choice++;
    if (this.choice > 3) {
      this.choice = 1;
    }
  }

}
