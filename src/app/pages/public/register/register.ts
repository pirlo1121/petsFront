import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  ciudad: string = '';


  register(){
    
  }

}
