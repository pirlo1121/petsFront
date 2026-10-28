import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user-service';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-all-users',
  imports: [],
  templateUrl: './all-users.html',
  styleUrl: './all-users.css',
})
export class AllUsers {

  userService = inject(UserService);
  users = signal<any>([]);

  ngOnInit(){

    this.userService.getUsers().subscribe({
      next: (res:any)=>{
        this.users.set(res.data);
        console.log(res.data);
      },
      error: (err :any)=>{
        console.log(err)
      }
    });

  }



}
