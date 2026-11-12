import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user-service';


@Component({
  selector: 'app-all-users',
  imports: [],
  templateUrl: './all-users.html',
  styleUrl: './all-users.css',
})
export class AllUsers {

  userService = inject(UserService);
  users=signal<any>([]);

  ngOnInit(){
    this.loadData();
  }

  changeRole(id:string, userRole: string){

    let role = userRole === 'user' ? 'admin' : 'user'

    this.userService.changeRole(id, {role: role}).subscribe({
      next: (res:any)=>{
        this.loadData();
        console.log(res);
      },
      error: (err: any)=>{
        console.log(err)
      }
    })

  }


  loadData(){
    this.userService.getUsers().subscribe({
      next: (res:any) => {
        console.log(res);
        this.users.set(res.data);
      }, 
      error: (err:any)=>{
        console.log(err);
      }
    })
    
  }





}


