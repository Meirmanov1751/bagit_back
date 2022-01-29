import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  fead = [{id:'',email:'',text:''}]
  selectedMovie;

  constructor(private router:Router,private service: AppService) {
    this.selectedMovie = {id: -1, email: '',text:'' };
  }

  Postfead = () => {
    this.service.postFead(this.selectedMovie).subscribe(
      data => {
        this.fead.push(data);
        alert('Ваше сообщение получено!');
      },
      error => {
        console.log(error);
      }
    );
  }
}
