import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs';
import { IPost } from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  // Declaration
  posts: IPost[] = [{ "id": 1, "body": "foo" },
  { "id": 2, "body": "bar" }];

  constructor(
    private readonly service: PostsService
  ) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      })
  }

}
