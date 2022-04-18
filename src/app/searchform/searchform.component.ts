import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LiveService } from '../live.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {


  @Output() newUserName= new EventEmitter ()
  userName:string = ""
  submitForm(userName:string){
    this.newUserName.emit(userName)

  }
  constructor( private  liveService:LiveService) {

   }

  ngOnInit(): void {
  }

}
