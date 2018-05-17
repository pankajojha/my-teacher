import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TICKET_URL, LOGIN_URL,  TOKEN_ENDPOINT_URL, SERVER_ENDPOINT } from '../model/URLConstants';
import { Auth } from '../model/Auth';
import * as moment from "moment";
import { Observable, of } from 'rxjs';
import { stringify } from 'querystring';
import { finalize, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 
      'Content-Type': 'application/text',
       'Access-Control-Allow-Origin':'*' , 
       'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'})  
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  tokenVal : string;

  constructor(private http: HttpClient) { 
    console.log(" constructor authService")
  }

  login()  {
   return this.http.get(TOKEN_ENDPOINT_URL, {responseType: 'text'})
   .subscribe(data => {
     console.log(data)
     localStorage.setItem("token", data);   
     this.isLoggedIn = true;
   }, error => console.log(error));
  }
  
  getAuthToken(url : string, obj : string): Observable<any> {
    return this.http.post(url, obj, httpOptions); 
  }
  
  private setSession(authResult) {
    console.log(authResult);
    localStorage.setItem(TOKEN, authResult.token);   
    
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  } 


  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    this.isLoggedIn = false;
  }

  getToken() {
    return this.http.get(TOKEN_ENDPOINT_URL);
  }


  getBlob(url : string){
    this.http.get(url, {responseType: 'blob'})
    .subscribe(data => {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        const readerResult = reader.result;
        console.log(readerResult); // Print blob content as text
      };
      reader.readAsText(data, 'UTF-8');
    }, error => console.log(error));
  }

}
