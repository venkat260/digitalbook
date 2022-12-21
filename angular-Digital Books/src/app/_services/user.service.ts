import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8082/api/user/';

const API_URL_creation = 'https://fljnrr1n9h.execute-api.ap-northeast-1.amazonaws.com/UAT/'

const API_URL_serach = 'https://fljnrr1n9h.execute-api.ap-northeast-1.amazonaws.com/UAT/search'

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient ,private tokenStorage: TokenStorageService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

 // search(category: string, title: string, author: string,price:number,publisher:string): Observable<any> {
  //  return this.http.get(API_URL + 'search?category='+category+'&title='+title+'&author='+author+'&price='+price+'&publisher='+publisher, 
  //  {
  //    responseType: 'text'
  //  });
  //}

  search(category: string, title: string, author: string,price:number,publisher:string): Observable<any> {
    return this.http.get(API_URL_serach + '?category='+category+'&title='+title+'&author='+author+'&price='+price+'&publisher='+publisher, 
    {
      responseType: 'text'
    });
  }
  //create(create: any) {
   // console.log(this.tokenStorage.getUser().id);
   // return this.http.post(API_URL+'author/'+this.tokenStorage.getUser().id+'/books',create,{
   //   responseType: 'text'
   // });
  //}

  create(create: any) {
    console.log(this.tokenStorage.getUser().id);
    return this.http.post(API_URL_creation+this.tokenStorage.getUser().id,create,{
      responseType: 'text'
    });
  }


}
