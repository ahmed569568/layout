import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}/auth/login`, data);
    //  return this.http.post(`${environment.serverUrl}/auth/login`, data).pipe(map((response:any)=>{
    //    const user = response;
    //    if(user){
    //      localStorage.setItem('token',user.token);
    //    }
    //  }))
  }

  signIn(data: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}/auth/register`, data);
  }
}
