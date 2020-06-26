import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PostsService } from '../posts.service';
import { IPost, IComment } from '../../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  // Declarations
  clearTimeoutManager: any;

  post: IPost;
  
  comments: IComment[];
  comment: string;
  errorMessage: string;
  newCommentId: number;

  isLoaded: boolean;
  isLoadingComments: boolean;
  isSubmitting: boolean;

  constructor(
    private readonly service: PostsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly commentsService: CommentsService
  ) {
    this.isLoaded = false;
    this.isLoadingComments = true;
    this.comment = "";
    this.newCommentId = -1;
    this.isSubmitting = false;

  }

  ngOnInit(): void {

    // Get post ID from the url
    this.activatedRoute.params.subscribe((params: { [key: string]: string }) => {
      this.service.getPostById(params['id'])
        .subscribe((post: IPost) => {
          this.post = post;
          this.isLoaded = true;
          this.getComments();
        })
    })

    //Get total commentsfor calculating new id for new record
    this.commentsService.getComments()
      .subscribe((comments: IComment[]) => {
        this.newCommentId = comments.length + 1;
      })

  }

  // Get comments from the service
  getComments() {
    this.isLoadingComments = true;
    this.commentsService.getCommentsByPostId(this.post.id)
      .subscribe((comments: IComment[]) => {
        this.comments = comments.reverse();
      })
  }

  /**
   * Leave a comment for the post
   */
  sendComment() {
    // Prevent multiple click on the same time
    clearTimeout(this.clearTimeoutManager)
    this.clearTimeoutManager = setTimeout(() => {
      this.isSubmitting = true;
      this.commentsService.sendComment({
        id: this.newCommentId,
        body: this.comment,
        postId: this.post.id
      })
        .subscribe((result: any) => {
          console.log(result);
          this.isSubmitting = false;
        }, (error) => {
          this.errorMessage = error.message + '\n' + error.error;
          this.isSubmitting = false;
          console.log(error);

        })
    }, 300);



  }

  onCommentChange() {
    this.errorMessage = null;
  }
}
