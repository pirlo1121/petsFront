import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userService = inject(UserService);

  email: string = '';
  password: string = '';
  message: string = '';

  login():void{
    const data= {
      email: this.email,
      password: this.password
    }
    this.userService.login(data).subscribe({
      next: (res: any)=> {
        localStorage.setItem('user', JSON.stringify(res.data) );
        this.userService.user.set(res.data);
        console.log(res);
      },
      error: (err: any)=> {
        console.log(err)
      }
    })
    

  }



}

