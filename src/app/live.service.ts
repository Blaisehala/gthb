import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  // userName = 'Blaisehala'
 

  propLink ='https://api.github.com'

  async getUsers(userName:string){
    const papa = this.http.get<any>(`${this.propLink}/users/${userName}`)
     return await lastValueFrom (papa).then((response)=>response)
   } 
 
 getRepo(userName:string):Observable<any>{
   return this.http.get<any>(`${this.propLink}/users/${userName}/repos`)
 }
  constructor(private http: HttpClient) { } 
 
}




//promise ---kind of waiting 
