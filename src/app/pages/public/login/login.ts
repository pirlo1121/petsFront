import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  email: string = '';
  password: string = '';
  message: string = '';

  login():void{
    console.log('ejemplo')
  
    // console.log(this.email)
    // // operador ternario
    // alert(!this.email || !this.password ? 'debe llenar todos los campos' : 'datos enviados ')
  }



}

