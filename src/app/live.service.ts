import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  userName = 'Blaisehala'
 

  propLink =  `https://api.github.com/`

 
  constructor(private http: HttpClient) { } 
 async getUsers(){
   const papa = this.http.get<any>(`${this.propLink}/users/${this.userName}`)
    return await lastValueFrom (papa).then((response)=>response)
  } 

}




//promise ---kind of waiting 
