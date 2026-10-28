import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


  userService = inject(UserService);
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  ciudad: string = '';


  register(){
    const data = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    
    this.userService.createUser(data).subscribe({
      next: (res:any)=>{
        console.log(res)
      }, error: (err)=>{
        console.log(err)
      }
    })
  }
}
