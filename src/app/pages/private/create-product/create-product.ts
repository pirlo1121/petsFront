import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {


     name:string ='';
    description:string ='';
    price:number = 0;
    imagen:string ='';
    avalible:string ='';
    disponible:boolean =  false


  create(){
  
  }
}
