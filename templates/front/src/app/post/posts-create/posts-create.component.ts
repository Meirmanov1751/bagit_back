import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  posts = [{id:'',title: 'test',text:'titan',created_date:'',image:'',comment:[{id:'',text:'',created_date:''}]}];
  selectedMovie;





  constructor(private api: PostsService,private router: Router) {
    this.selectedMovie = {id: -1,image:'', title: '',text:'' };
  }

  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.posts.push(data);
        this.router.navigate(['posts']);
        alert('your post is created');
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
  }

}
