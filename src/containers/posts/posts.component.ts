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

  constructor(
    private readonly service: PostsService,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe((posts: IPost[]) => this.posts = posts)
  }

}
