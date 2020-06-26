import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable, Subscription } from 'rxjs';
import { IPost } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  // Declaration
  posts: IPost[]
  isLoading: boolean;

  constructor(
    private readonly service: PostsService,
    private readonly router: Router
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts.reverse()
      })
  }

  onRowClick(post: IPost) {
    this.router.navigate(['posts', post.id,'update'])
  }

}
