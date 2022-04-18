import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName = 'Blaisehala'
user!:any;
repo!:any;
  constructor(private liveService:LiveService ) { }

  repoFetch(userName:string){
    this.liveService.getRepo(userName).subscribe((repo)=>{
      this.repo=repo
      console.log(repo);
    })
  }

  

  ngOnInit(): void {
    this.repoFetch(this.userName)
  //     this.liveService.getUsers().subscribe(
  //       data => 
  //       {this.user =data
  //       console.log(this.user);}
  //     )
  }

}
