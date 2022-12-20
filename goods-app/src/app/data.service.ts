import { Injectable } from '@angular/core';
// описание модели
import { Product } from './model/model';
// для выполнения запросов
import { HttpClient, HttpHeaders } from '@angular/common/http';
// не забываем подключить модуль HttpClientModule  в app.module.ts
// поддержка асинхронных запросов
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // для доступа к json-server
  url = 'http://localhost:3000/products';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, this.httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`, this.httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(
      `${this.url}/${product.id}`,
      product,
      this.httpOptions
    );
  }

  // для категорий
  category = "";
}
