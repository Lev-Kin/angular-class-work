import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';
// для доступа к данным
import { DataService } from '../data.service';
// для работы с маршрутами и программной маршрутизацией
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  isLoading = false;
  product!: Product;
  id!: number;
  allowed = false;

  constructor(
    private data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    // получение параметра маршрута
    this.id = +this.activatedRoute.snapshot.params['id']!;
    // получение данных по заданному id
    this.data.getProduct(this.id).subscribe((data) => {
      this.product = data;
      this.isLoading = false;
    });
  }

  deleteProduct(): void {
    this.data.deleteProduct(this.id).subscribe(() => {
      // программный переход к корневому маршруту
      this.router.navigate(['']);
    });
  }

  change(): void {
    this.allowed = true;
  }

  putProduct(): void {
    this.data.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
