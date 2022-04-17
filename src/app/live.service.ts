import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LiveService {
  getUser() {
    throw new Error ('Method not immplmented');
  }

  propLink = " https://api.github.com/ "

  user = 'Maltilda Nyaboke';
  userLink:string= `https://api.github.com/users${this.user}`
  repoLink:string=  `https://api.github.com/users/${this.user}/repos`
  
  constructor(private http: HttpClient) { } 
  getUsers():Observable<any>{
    return this.http.get<any>(this.userLink)
  } 
   getRepos():Observable<any>{
     return this.http.get<any>(this.repoLink)
   }
}
