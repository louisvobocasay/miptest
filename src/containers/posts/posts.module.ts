import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [PostsComponent, CommentsComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ]
})
export class PostsModule { }
