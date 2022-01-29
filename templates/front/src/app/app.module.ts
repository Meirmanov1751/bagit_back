import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {AppComponent} from "./app.component";
import { LoginComponent } from './auth/login/login.component';
import { SinginComponent } from './auth/singin/singin.component';
import { VerifyComponent } from './auth/verify/verify.component';
import { PostsComponent } from './post/posts/posts.component';
import { PostsCreateComponent } from './post/posts-create/posts-create.component';
import { ChatComponent } from './chat/chat.component';


const appRoutes: Routes =[

    { path: '', component: AppComponent},
  {
    path: 'posts',component:PostsComponent
  },
  {
    path: 'posts_create',component:PostsCreateComponent
  },
  {
    path: 'sing_in',component:SinginComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'activate/:uid/:token', component: VerifyComponent
  },



];

@NgModule({
  declarations: [
    LoginComponent,
         SinginComponent,
         VerifyComponent,
         PostsComponent,
         PostsCreateComponent,
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,PostsComponent]
})
export class AppModule { }
