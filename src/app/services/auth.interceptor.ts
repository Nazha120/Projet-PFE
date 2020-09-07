import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {AuthenticationService} from './authentification.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authentificationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('login') || request.url.includes('register')) {
      return next.handle(request);
    }

    const token = this.authentificationService.loadToken();

    if (!!token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    return next.handle(request);
  }
}
