import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  posts = [{title: 'test',text:'titan',created_date:''}];


  constructor(private api: ApiService) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
