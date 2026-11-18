import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { User } from '../../../interfaces/user';


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


  register(): void {
    const data: User = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    this.userService.createUser(data).subscribe({
      next: (res: ApiResponse<User>)=> {
        console.log(res)
      },
      error: (err: HttpErrorResponse)=> {
        console.log(err)
      }
    })
  }

}
