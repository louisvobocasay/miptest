import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  { path: 'create', component: PostComponent },
  { path: ':id/update', component: PostComponent },
  { path: ':id/comment', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
