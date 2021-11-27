import {TemplateRef, ViewChild} from '@angular/core';
import {Component} from '@angular/core';
import {User} from '../user';
import {UserService} from './auth.service';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent  {
}
