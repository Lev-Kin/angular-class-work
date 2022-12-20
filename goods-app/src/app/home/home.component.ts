import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  products: Product[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
      console.log(data);
    });
  }

  filteredList(): Product[] {
    return this.products.filter(
      (item) => this.data.category == "" || item.category == this.data.category);
  }
}
