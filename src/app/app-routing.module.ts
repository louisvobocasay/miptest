import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../containers/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('../containers/posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
