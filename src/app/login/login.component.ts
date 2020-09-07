import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentification.service";
import {IUser} from "../model/user.model";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AccountService} from "../services/account.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  constructor(private authenticationService: AuthenticationService, private router: Router, private accountService: AccountService) {
  }

  ngOnInit() {
  }

  onLogin(): void {

    let user: IUser;
    user = {
      username: this.loginForm.value['login'] ,
      password: this.loginForm.value['password']
    }
    this.authenticationService.login(user).subscribe(
      data => {
        console.log(data);
        const jwtToken = data.headers.get('Authorization');
        this.authenticationService.saveToken(jwtToken);
        this.accountService.account(user.username).subscribe(
          data => {
            console.log('User Info ' + data);
            if ('body' in data) {
              this.authenticationService.setCurrentAccount(data.body);
            }
            this.router.navigate(['dashboard']);

          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }


}
