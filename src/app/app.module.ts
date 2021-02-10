import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponet } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import {DataService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponet,
    UsersListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
