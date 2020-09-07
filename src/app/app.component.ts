import {Component, OnInit, DoCheck} from '@angular/core';
import {AuthenticationService} from './services/authentification.service';
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  activePage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  isAuthenticated(): boolean {
    return !this.authService.isTokenExpired();
  }


  ngOnInit() {

  }

  ngDoCheck(): void {
    if (this.isAuthenticated()) {
      this.activePage = 'dashboard';
    } else {
      if (this.router.url.includes('login')) {
        this.activePage = 'login';
      } else if (this.router.url.includes('register')) {
        this.activePage = 'register';

      }
    }
  }

}
