import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  valueOne = 100;
  valueTwo = "Two";

  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
