import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {User} from '../user';
import {Repository} from '../repository';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private http: HttpClient) { }

  getUser(username:string){
    console.log('Get user')
    return this.http.get<User>('https://api.github.com/users/'+username+'?access_token='+environment.githubToken)
  }

  getRepositories(username:string){
    return this.http.get<Repository[]>('https://api.github.com/users/'+username+'/repos?access_token='+environment.githubToken)
  }
}
