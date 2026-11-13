import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {

  productService = inject(ProductService);
  products = signal<any>([]);

  ngOnInit(){

    this.productService.getProducts().subscribe({
      next: (res:any)=>{
        this.products.set(res.data);
        console.log(res);
      },
      error: (err: any)=>{
        console.log(err)
      }
    })

  }



}
