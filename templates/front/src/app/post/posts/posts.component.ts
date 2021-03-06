import {Component, TemplateRef, ViewChild} from '@angular/core';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent {
  posts = [{id:'',title: 'test',text:'titan',created_date:'',image:'',comment:[{id:'',text:'',created_date:''}]}];
  selectedMovie;





  constructor(private api: PostsService) {
    this.getMovies();
    this.selectedMovie = {id: -1, title: '',text:'' };
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

  movieClicked = (post) => {
    this.api.getOneMovie(post.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.posts.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
}
