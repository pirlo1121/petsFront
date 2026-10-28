import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  apiUrl: string = 'http//localhost:3000/products';
  http = inject(HttpClient);

  ngOnInit() {

    this.http.get("http//localhost:3000/products").subscribe({
      next: (res: any) => {
        console.log(res)
      }, error:(err)=>{
        console.log(err)
      }
    })

  }




}

