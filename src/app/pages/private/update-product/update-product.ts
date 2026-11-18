import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {

  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  id: string = '';
  name = signal<string>('');
  description = signal<string>('');
  price = signal<number>(0);
  imagen = signal<string>('');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getOneProduct(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.name.set(res.data.name);
        this.description.set(res.data.description);
        this.price.set(res.data.price);
        this.imagen.set(res.data.imagen);

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }




  update(): void {

    const data = {
      name: this.name(),
      description: this.description(),
      price: this.price(),
      imagen: this.imagen()
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#297c00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.productService.updateProduct(this.id, data).subscribe({
          next: (res: any) => {
            console.log(res);
          },
          error: (err: any) => {
            console.log(err);
          }
        })

        Swal.fire({
          title: "updated!",
          text: "Your file has been updated.",
          icon: "success"
        });

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





}
