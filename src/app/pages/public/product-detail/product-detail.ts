import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service';
import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { Product } from '../../../interfaces/product';


@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {


  router = inject(ActivatedRoute);
  productService = inject(ProductService);
  id: string = '';
  product = signal<Product | null>(null);

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
      this.productService.getOneProduct(this.id).subscribe({
        next: (res: ApiResponse<Product>)=>{
          this.product.set(res.data);
          console.log(res)
        },
        error: (err: HttpErrorResponse)=>{
          console.log(err)
        }
    });


  }



}
