import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {PostsComponent} from './components/posts/posts.component';


const routes: Routes=[
  { path:'', component:HomeComponent},
  { path:'users', component:UsersListComponent},
  { path:'posts', component:PostsComponent},

];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
