import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostsCreateComponent } from './posts/posts_create.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/component/login/login.component';
import { SingInComponent } from './auth/component/singin/singin.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { VerifyComponent } from './auth/verify/verify.component'

const appRoutes: Routes =[

    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'singin', component: SingInComponent},
    { path: 'posts', component: PostsComponent},
    { path: 'posts_create', component: PostsCreateComponent},
        {
        path: 'activate/:uid/:token', component: VerifyComponent
      },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    SingInComponent,
    PostsCreateComponent,
    VerifyComponent

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
  bootstrap: [AppComponent,LoginComponent,PostsComponent,SingInComponent,PostsCreateComponent,VerifyComponent]
})
export class AppModule { }
