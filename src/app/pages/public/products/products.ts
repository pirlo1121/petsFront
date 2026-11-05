
import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../../services/product-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productService = inject(ProductService);
  products = signal<any>([]);
  


  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (res: any )=>{
        this.products.set(res.data);
        console.log(this.products());
      },
      error: (err: any)=>{
        console.log(err);
      }
    })
  }


}

