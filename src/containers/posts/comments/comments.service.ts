import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IComment } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  /**
   *
   */
  constructor(
    private readonly httpClient: HttpClient
  ) {

  }


  getComments() {
    return this.httpClient.get(environment.baseUrl + '/comments')
  }

  getCommentsByPostId(id: number) {
    return this.httpClient.get(environment.baseUrl + `/posts/${id}/comments`)
  }

  sendComment(body: IComment) {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    console.log(body);

    return this.httpClient.post(environment.baseUrl + '/comments', body, {
      headers: headers
    })
  }


}
