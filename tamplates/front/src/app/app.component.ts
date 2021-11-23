import { Observable } from 'rxjs';
import { Component,OnInit } from '@angular/core';

import { HttpService } from './api.service';
import { Posts } from './posts';
import {map} from "rxjs/operators";


// @ts-ignore
@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {


  constructor(private _blogPostService: HttpService) {
  }
   postsList:any=[];


  ngOnInit(): void {
    this.refreshDepList();
  }


  refreshDepList(){
    this._blogPostService.getDepList().subscribe(data=>{
      this.postsList=data;
    });
  }


}
