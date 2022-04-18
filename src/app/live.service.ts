import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LiveService {
  user = 'Blaisehala'
 

  propLink =  `https://api.github.com/users/${this.user}`

 
  constructor(private http: HttpClient) { } 
  getUsers():Observable<any>{
    return this.http.get<any>(this.propLink)
  } 

}
