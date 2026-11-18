
import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../../services/product-service';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { Product } from '../../../interfaces/product';


@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productService = inject(ProductService);
  products = signal<Product[]>([]);
  


  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: ApiResponse<Product[]>)=>{
        this.products.set(res.data);
        console.log(this.products());
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }


}

