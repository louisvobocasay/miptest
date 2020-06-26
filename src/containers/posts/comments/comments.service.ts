import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IComment, VComment as VCreateComment } from '../../../models';

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

  sendComment(body: VCreateComment) {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    if(body.body.trim() === ""){
      throw Error("Body could not be empty")
    }
    return this.httpClient.post(environment.baseUrl + '/comments', body, {
      headers: headers
    })
  }


}
