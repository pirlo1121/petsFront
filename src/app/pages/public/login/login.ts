import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userService = inject(UserService);
  route = inject(Router)
  email: string = '';
  password: string = '';

  login(): void {
    const data = {
      email: this.email,
      password: this.password
    }
    this.userService.login(data).subscribe({
      next: (res: any) => {

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sesion iniciada",
          showConfirmButton: false,
          timer: 1200
        });
        localStorage.setItem('user', JSON.stringify(res.data));
        this.userService.user.set(res.data);
        this.route.navigateByUrl( res.data.role === 'admin'  ? '/dashboard' : '/products')
      },
      error: (err: any) => {

        console.log(err)
      }
    })


  }



}

