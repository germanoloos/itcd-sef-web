import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/modules/user/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token if available
    const token = this.authenticationService.getToken();
    if (token) {
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
        });
    }
    return next.handle(request);
  }
}
