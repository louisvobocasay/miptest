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

  clearTimeoutManager: any;

  post: IPost;
  isLoaded: boolean;

  isLoadingComments: boolean;
  isSubmitting: boolean;
  comments: IComment[];
  comment: string;
  errorMessage: string;
  newCommentId: number;

  constructor(
    private readonly service: PostsService,
    private readonly router: Router,
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

    this.activatedRoute.params.subscribe((params: { [key: string]: string }) => {
      this.service.getPostById(params['id'])
        .subscribe((post: IPost) => {
          this.post = post;
          this.isLoaded = true;
          this.getComments();
        })
    })

    this.commentsService.getComments()
      .subscribe((comments: IComment[]) => {
        this.newCommentId = comments.length + 1;
      })

  }

  getComments() {
    this.isLoadingComments = true;
    this.commentsService.getCommentsByPostId(this.post.id)
      .subscribe((comments: IComment[]) => {
        this.comments = comments.reverse();
      })
  }


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
          console.log(error);

        })
    }, 300);



  }

  onCommentChange() {
    this.errorMessage = null;
  }
}
