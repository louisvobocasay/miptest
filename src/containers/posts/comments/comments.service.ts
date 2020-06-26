import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IComment, VComment as VCreateComment } from '../../../models';
import { validateSync } from 'class-validator';
import { throwError } from 'rxjs';

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

    const errors = validateSync(body);
    if (errors.length) {
      console.log(errors);
      
      return throwError(errors);
    }
    return this.httpClient.post(environment.baseUrl + '/comments', body, {
      headers: headers
    })
  }


}
