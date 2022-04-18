import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user!:any;
  constructor(private liveService:LiveService ) { }

  ngOnInit(): void {
      this.liveService.getUsers().subscribe(
        data => 
        {this.user =data
        console.log(this.user);}
      )
  }

}
