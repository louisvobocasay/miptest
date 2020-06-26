import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
