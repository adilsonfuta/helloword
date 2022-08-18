import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes=[
  { path:'', component:HomeComponent},
  { path:'users', component:UsersListComponent},
  { path:'posts', component:PostsComponent},
  {path:'post/:id', component:PostComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
