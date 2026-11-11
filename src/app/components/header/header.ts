import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  userService = inject(UserService);
  

  logout() {
    this.userService.logout().subscribe({
      next: (res: any) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sesion cerrada",
          showConfirmButton: false,
          timer: 1200
        });
        this.userService.user.set(null);
        localStorage.removeItem('user')
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
