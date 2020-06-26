import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPost } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  posts: IPost[];

  constructor(
    private readonly httpClient: HttpClient
  ) {
    this.posts = [];
  }


  getPosts() {
    return this.httpClient.get(environment.baseUrl + '/posts')
  }
}
