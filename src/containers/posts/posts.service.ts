import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPost } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }


  getPosts() {
    return this.httpClient.get(environment.baseUrl + '/posts')
  }

  getPostById(id: string) {
    return this.httpClient.get(environment.baseUrl + '/posts/' + id)
  }
}
