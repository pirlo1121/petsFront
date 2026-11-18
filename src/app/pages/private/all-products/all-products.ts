import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {

  productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.loadData()
  }


  delete(id: string): void {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe({
          next: (res: ApiResponse<Product>) => {
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
            console.log(res);
            this.loadData();

          },
          error: (err: HttpErrorResponse) => {
             Swal.fire({
          title: "error!",
          text: "error",
          icon: "error"
        });
            console.log(err)
          }
        })

       
      }
      if (!result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "cancelado",
                showConfirmButton: false,
                timer: 1500
              });
            }
    });
  }


  loadData(): void {

    this.productService.getProducts().subscribe({
      next: (res: ApiResponse<Product[]>) => {
        this.products.set(res.data);
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

  }


}
