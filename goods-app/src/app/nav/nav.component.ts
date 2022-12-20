import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchString = '';

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  search(): void {
    this.data.getProducts().subscribe((data) => {
      let id;
      data.forEach((elem) => {
        if (elem.name == this.searchString) {
          id = elem.id;
        }
      });

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['product', id]);
    });
  }
}
