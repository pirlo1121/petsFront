import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  private http = inject(HttpClient);
  private apiUrl: string = 'http://localhost:3000';
  user = signal<any>( JSON.parse(localStorage.getItem('user') || 'null') );

  getUsers(){
    return this.http.get(this.apiUrl+'/users');
  }

  createUser(data:any){
    return this.http.post(this.apiUrl+'/users', data );
  }

  changeRole(id: string, data: any){
    return this.http.patch(`${this.apiUrl}/users/${id}`, data );
  }

  login(data: any){
    return this.http.post(this.apiUrl+'/login', data, {withCredentials:true});
  }

  logout(){
    return this.http.post(this.apiUrl+'/logout',{}, {withCredentials: true});
  }

  isLogged(){
    return this.user() !== null;
  }
 
  isAdmin(){
    return this.user()?.role === 'admin';
  }

}
