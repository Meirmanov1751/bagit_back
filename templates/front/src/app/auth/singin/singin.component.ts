import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
  providers:[AuthService]
})
export class SinginComponent implements OnInit {
  form: FormGroup;
  aSub: Subscription;
  errorRes: object | null = null;

  constructor(private authService: AuthService , private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        null, [Validators.required, Validators.minLength(6)]
      ),
      username: new FormControl(
        null, [Validators.required, Validators.minLength(4)]
      ),
      password: new FormControl(
        null, [Validators.required, Validators.minLength(8)]
      )
    });
  }

  submit(): void {
    this.aSub = this.authService.registration(this.form.value).subscribe(
      res => (alert('Send email'),
        this.router.navigate(['posts'])),
      error => console.log(error.error),

    );
  }
}
