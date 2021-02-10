import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { UserComponet } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {UserService} from './services/user.service';

import { PostsComponent } from './components/posts/posts.component';
import {PostService} from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponet,
    UsersListComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
