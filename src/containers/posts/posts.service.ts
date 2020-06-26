import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPost } from '../../models';
import { validateSync } from 'class-validator';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  /**
   * Get list posts without parameter
   */
  getPosts() {
    return this.httpClient.get(environment.baseUrl + '/posts')
  }


  /**
   * @param id Get post detail by post specific id
   */
  getPostById(id: string) {
    return this.httpClient.get(environment.baseUrl + '/posts/' + id)
  }

  /**
   * Update post's body by id
   * @param id PostID
   * @param body It's not allowed empty here
   */
  updatePost(id: string, body: IPost) {
    return this.httpClient.put(environment.baseUrl + '/posts/' + id, body)
  }

  /**
   * Create new post
   * @param post 
   */
  createPost(post: IPost) {

    const errors = validateSync(post);
    console.log(errors);
    return;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.httpClient.post(environment.baseUrl + '/posts/', post, { headers: headers })
  }
}
