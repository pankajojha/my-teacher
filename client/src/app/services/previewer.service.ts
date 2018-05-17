import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_ENDPOINT, ITEM_SHOW_URL } from '../model/URLConstants';
import {Auth} from '../model/Auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PreviewerService {
  url : string;

  constructor(private http: HttpClient) { }

  getItemShow(tenantId : string, itemId: string) {
    if(Auth.getToken() != undefined){
      this.url = SERVER_ENDPOINT+ITEM_SHOW_URL +tenantId+"/item/"+itemId+"/show/"+ Auth.getToken();
      return this.http.get(this.url, {responseType: 'blob'})
      .subscribe(data => {
        console.log(data)      
      }, error => console.log(error));
    }
   }

   getHtmlUrl(tenantId : string, itemId: string) {
    if(Auth.getToken() != undefined){
      return SERVER_ENDPOINT+ITEM_SHOW_URL +tenantId+"/item/"+itemId+"/show/"+ Auth.getToken();      
    }
  }
}
