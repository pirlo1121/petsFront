import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service';


@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  
  productService = inject(ProductService);
  router = inject(ActivatedRoute);
  id: string = '';

  ngOnInit(){

  }




}
    // this.id = this.router.snapshot.params['id'];
