import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl: string = "http://localhost:3000/products";

  // obtener productos
  getProducts(){
    return this.http.get(this.apiUrl);
  }


}
