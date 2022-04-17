import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LiveService {
  prop_link = " https://api.github.com/ "
  constructor(private http: HttpClient) { }  

  getUsers():Observable{ 

   }

  getRepos(){
    console.log('test')
  }

}
