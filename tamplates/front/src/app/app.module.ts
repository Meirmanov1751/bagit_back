import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { PostsCreateComponent } from './posts/posts_create.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/login.component';
import { SingInComponent } from './auth/singin.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

const appRoutes: Routes =[

    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'singin', component: SingInComponent},
    { path: 'posts', component: PostsComponent},
    { path: 'posts_create', component: PostsCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    SingInComponent,
    PostsCreateComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,PostsComponent,SingInComponent,PostsCreateComponent]
})
export class AppModule { }
