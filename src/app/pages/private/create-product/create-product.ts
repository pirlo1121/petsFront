import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { Product } from '../../../interfaces/product';



@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {

  productService = inject(ProductService);

  name: string = '';
  description: string = '';
  price: number = 0;
  imagen: string = '';

  create(): void {

    const data: Product = {
      name: this.name,
      description: this.description,
      price: this.price,
      imagen: this.imagen
    }

    this.productService.createProduct(data).subscribe({
      next: (res: ApiResponse<Product>) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "creado",
            showConfirmButton: false,
            timer: 1200
          });
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });

  }



}
