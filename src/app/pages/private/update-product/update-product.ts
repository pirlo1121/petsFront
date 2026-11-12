import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  name = signal('');
  description = signal('');
  price = signal(0);
  imagen = signal('');

  router = inject(ActivatedRoute);
  productService = inject(ProductService);
  id: string = '';
  product = signal<any>({});
  route = inject(Router);

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.productService.getOneProduct(this.id).subscribe({
      next: (res: any) => {
        this.product.set(res.data);
        this.name.set(res.data.name);
        this.description.set(res.data.description);
        this.price.set(res.data.price);
        this.imagen.set(res.data.imagen);
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }

  update(): void {

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
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
       const data = {
      name: this.name(),
      description: this.description(),
      price: this.price(),
      imagen: this.imagen()
    }

    this.productService.updateProduct(this.id, data).subscribe({
      next: (res) => {
        Swal.fire({
          theme: "dark",
          position: "top-end",
          icon: "success",
          title: "Product updated",
          showConfirmButton: false,
          timer: 1200
        });
        this.route.navigateByUrl('/products');
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    
    
    }
    });
  }


}
