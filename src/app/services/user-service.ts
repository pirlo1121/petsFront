import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  private http = inject(HttpClient);
  private apiUrl: string = 'http://localhost:3000';
  user = signal<User | null>( JSON.parse(localStorage.getItem('user') || 'null') );

  getUsers(){
    return this.http.get<ApiResponse<User[]>>(this.apiUrl+'/users');
  }

  createUser(data: User){
    return this.http.post<ApiResponse<User>>(this.apiUrl+'/users', data );
  }

  changeRole(id: string, data: User){
    return this.http.patch<ApiResponse<User>>(`${this.apiUrl}/users/${id}`, data, { withCredentials:true } );
  }

  login(data: User){
    return this.http.post<ApiResponse<User>>(this.apiUrl+'/login', data, {withCredentials:true});
  }

  logout(){
    return this.http.post<ApiResponse<null>>(this.apiUrl+'/logout',{}, {withCredentials: true});
  }

  isLogged(): boolean {
    return this.user() !== null;
  }
 
  isAdmin(): boolean {
    return this.user()?.role === 'admin';
  }

}
