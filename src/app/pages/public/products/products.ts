import { Component, inject} from '@angular/core';
import { ProductService } from '../../../services/product-service';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productService = inject(ProductService);


  ngOnInit(){

  this.productService.getProducts().subscribe({
    next: (res: any)=>{
      console.log(res)
    }, 
    error: (err: any)=>{
      console.log(err)
    }
  })



  }


 
}
