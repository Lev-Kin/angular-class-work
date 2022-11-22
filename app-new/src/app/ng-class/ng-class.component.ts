import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  cssClass = {
    red: true,
    large: true
  }

  letterLarge = true;

  toggle(): void {
    this.letterLarge = !this.letterLarge;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
