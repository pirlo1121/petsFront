import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../interfaces/api-response';
import { User } from '../../../interfaces/user';


@Component({
  selector: 'app-all-users',
  imports: [],
  templateUrl: './all-users.html',
  styleUrl: './all-users.css',
})
export class AllUsers {

  userService = inject(UserService);
  users=signal<User[]>([]);

  ngOnInit(): void {
    this.loadData();
  }

  changeRole(id: string, userRole: string): void {

    let role: string = userRole === 'user' ? 'admin' : 'user'

    this.userService.changeRole(id, {role: role}).subscribe({
      next: (res: ApiResponse<User>)=>{
        this.loadData();
        console.log(res);
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })

  }


  loadData(): void {
    this.userService.getUsers().subscribe({
      next: (res: ApiResponse<User[]>) => {
        console.log(res);
        this.users.set(res.data);
      }, 
      error: (err: HttpErrorResponse)=>{
        console.log(err);
      }
    })
    
  }





}


