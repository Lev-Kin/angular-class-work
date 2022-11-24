import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  products = [
    "milk",
    "fish",
    "aple",
    "orenge"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sortedList(): string[] {
    let list = this.products.slice();
    return list.sort();
  }

}
