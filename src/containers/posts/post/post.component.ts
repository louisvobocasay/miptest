import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost, VCreatePost } from '../../../models';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  cleartimeoutManager: any;


  postBody: string;
  postId: number;
  rawId: string;
  submitResponse: Observable<Object>;
  isLoading: boolean;
  errorMessage: string;

  constructor(
    private readonly service: PostsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: { [key: string]: string }) => {
      this.rawId = params['id'];
      if (this.rawId) {
        this.getPostDetail(this.rawId);
      } else {
        this.service.getPosts()
          .subscribe((posts: IPost[]) => {
            this.postId = posts.length + 1;
          })
      }
    })
  }

  getPostDetail(id: string) {
    this.service.getPostById(id)
      .subscribe((post: IPost) => {
        this.postBody = post.body;
        this.postId = post.id
      })
  }

  onSave() {

    // Prevent multiple clicked on the same time
    clearTimeout(this.cleartimeoutManager)
    this.cleartimeoutManager = setTimeout(() => {

      const post: VCreatePost = new VCreatePost(this.rawId, this.postBody);
      this.isLoading = true;
      
      /**
       * If this id is defined
       */
      if (this.rawId) {
        this.submitResponse = this.service.updatePost(this.rawId, post)
      } else {
        this.submitResponse = this.service.createPost(post)
      }

      this.submitResponse.subscribe((response) => {
        this.isLoading = false;
        setTimeout(() => this.router.navigate(['/posts']), 300);
      }, (error) => {
        this.errorMessage = error.message + '\n' + error.error;
        console.log(error);
      })
    }, 100);

  }

}
