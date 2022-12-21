import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://localhost:8082/api/auth/';

const AUTH_API = 'https://fljnrr1n9h.execute-api.ap-northeast-1.amazonaws.com/UAT/'

//const AUTH_API = ' https://vcuqn9910f.execute-api.ap-northeast-1.amazonaws.com/UAT1/'



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,roles:string[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      roles
    }, httpOptions);
  }
}
