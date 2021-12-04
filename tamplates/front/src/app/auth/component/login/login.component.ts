import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UserService} from '../../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  formData: any;
  form: FormGroup;
  aSub: Subscription;
  errorRes: object | null = null;

  constructor(private authService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(
        null, [Validators.required, Validators.minLength(4)]
      ),
      password: new FormControl(
        null, [Validators.required]
      )
    });
  }

  submit(): void {
    this.formData = new FormData();
    this.formData.append('username', this.form.value.username);
    this.formData.append('password', this.form.value.password);
    this.aSub = this.authService.login(this.formData).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['posts']);
      },
      error => this.errorRes = error
    );
  }

}