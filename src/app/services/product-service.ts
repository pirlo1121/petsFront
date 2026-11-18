import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private http = inject(HttpClient);
  private apiUrl: string = 'http://localhost:3000/products';


  getProducts(){
    return this.http.get<ApiResponse<Product[]>>(this.apiUrl);
  }


  createProduct(data: Product){
    return this.http.post<ApiResponse<Product>>(this.apiUrl , data, { withCredentials:true });
  }


  getOneProduct(id: string){
    return this.http.get<ApiResponse<Product>>(`${this.apiUrl}/${id}`);
  }


  updateProduct(id: string, data: Product){
    return this.http.patch<ApiResponse<Product>>(`${this.apiUrl}/${id}`, data, { withCredentials:true });
  }

  deleteProduct(id: string){
    return this.http.delete<ApiResponse<Product>>(`${this.apiUrl}/${id}`, { withCredentials:true });
  }



  

}
