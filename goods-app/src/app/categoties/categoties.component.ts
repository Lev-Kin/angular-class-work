import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-categoties',
  templateUrl: './categoties.component.html',
  styleUrls: ['./categoties.component.css'],
})
export class CategotiesComponent implements OnInit {
  title: string = 'Категория';
  isLoading: boolean = true;
  categories: string[] = [];

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getProducts().subscribe((data) => {
      this.categories = data
        .map((item) => item.category!)
        .filter((item, index, arr) => arr.indexOf(item) == index)
        .sort();
    });
    this.isLoading = false;
  }

  filtr(index: number) {
    this.data.category = this.categories[index];
    this.router.navigate(['']);
  }

  clearFiltr(): void {
    this.data.category = '';
    this.router.navigate(['']);
  }
}
