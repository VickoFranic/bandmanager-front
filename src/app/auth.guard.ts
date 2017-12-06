import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FacebookService } from 'ngx-facebook';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private fb: FacebookService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      let user = this.authService.getUser();
      if (user) {

      return this.fb.api('/me', "get", {'access_token': user.accessToken})
                .then((response) => { 
                  return true;
                })
                .catch((error) => {
                  localStorage.clear();
                  return false;
                });
    }
  }
}
