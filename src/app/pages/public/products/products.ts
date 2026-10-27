import { Component, inject, signal} from '@angular/core';
import { ProductService } from '../../../services/product-service';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productService = inject(ProductService);
  products = signal<any>([]);


  ngOnInit(){

  this.productService.getProducts().subscribe({
    next: (res: any)=>{
      console.log(res)
      this.products.set(res.data);
    }, 
    error: (err: any)=>{
      console.log(err)
    }
  })



  }


 
}
