import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  src = `https://mobimg.b-cdn.net/v3/fetch/ba/ba3caa48e02c686c85e035778df4e850.jpeg`;
  constructor() { }

  ngOnInit(): void {
  }

}
