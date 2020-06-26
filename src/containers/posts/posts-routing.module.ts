import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  { path: ':id/comment', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
