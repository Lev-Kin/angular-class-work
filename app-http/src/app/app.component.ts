import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-http';

  data!: Object;
  loading = true; // и
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'angular/common/http'})
  }

  constructor(private http: HttpClient) {

  }

  getData(): void {
    this.http.get("http://localhost:3000/products").subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
  }

  addData(): void {
    this.http.post("http://localhost:3000/products",
      {
        id: 10,
        name: 'smartphone',
        price: 1000
      });

      this.httpOptions;
  }
}
