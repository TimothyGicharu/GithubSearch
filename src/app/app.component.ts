import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
import { User } from './user';
import { Repository } from './repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string;
  username:string;
  user:User;
  repos:Repository[];

  constructor(private api: GithubService){
    console.log('**start**')
    this.title = 'Github Users';
    this.username = 'TimothyGicharu';
    this.fetchUser()
    this.fetchRepos()
  }

  fetchUser(){
    this.api.getUser(this.username).subscribe((data:User) => {
      console.log(data)
      this.user = data
    })
  }

  fetchRepos(){
    this.api.getRepositories(this.username).subscribe((data:Repository[]) => {
      console.log(data)
      this.repos = data
    })
  }

  refreshData(newUsername:string){
    this.username = newUsername;
    this.fetchUser();
    this.fetchRepos();
  }
}
