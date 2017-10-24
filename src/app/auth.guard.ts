import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FacebookService } from 'ngx-facebook';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private fb: FacebookService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      console.log("tu smo");

    return this.fb.getLoginStatus()
      .then((response) => {
        return response.status == 'connected';
      });
  }
}
