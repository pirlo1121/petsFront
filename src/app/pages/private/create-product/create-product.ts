import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';


@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {

  productService = inject(ProductService);

    name:string ='';
    description:string ='';
    price:number = 0;
    imagen:string ='';

  create():void {
    const data = {
      name: this.name,
      description: this.description,
      price: this.price,
      imagen: this.imagen
    }

    this.productService.createProduct(data).subscribe({
      next: (res:any)=>{
        console.log(res);
      },
      error: (err:any)=>{
        console.log(err);
      }
    })





  }
}
