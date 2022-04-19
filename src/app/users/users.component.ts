import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName = ''
user!:any;
repo!:any;
  constructor(private liveService:LiveService ) { }
  getData(newUserName:any):void{
    this.userName = newUserName

    this.repoFetch=(newUserName)
    this.userFetch=(newUserName)

    this.liveService.getRepo(this.userName).subscribe((repo)=>{
      this.repo=repo
      console.log(repo);
    })
    

    this.liveService.getUsers(this.userName).then((user)=>(this.user=user))

     console.log(newUserName);

  }



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
