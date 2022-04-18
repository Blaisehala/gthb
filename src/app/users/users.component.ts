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

  repoFetch(userName:string):void{
    this.liveService.getRepo(userName).subscribe((repo)=>{
      this.repo=repo
      console.log(repo);
    })
  }
  
  userFetch(userName:string):void{
    this.liveService.getUsers(userName).then((user)=>(this.user=user))

     console.log();

    
    

      
  }
  
 



  ngOnInit(): void {
    this.repoFetch(this.userName)
    this.userFetch(this.userName)
  //     this.liveService.getUsers().subscribe(
  //       data => 
  //       {this.user =data
  //       console.log(this.user);}
  //     )
  }

}
