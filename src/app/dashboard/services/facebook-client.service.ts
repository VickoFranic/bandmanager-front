import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';
import { AuthService } from '../../auth.service';

@Injectable()
export class FacebookClientService {

  constructor(private fb: FacebookService, private authService: AuthService) { }

  /**
   * Get user bands
   */
  getBands() {
    const token = this.authService.getUser().accessToken;

    return this.fb.api('/me?fields=email,accounts', 'get', {'access_token': token})
      .then((response) => {

        let result = new Array;
        let bands = response.accounts.data;

        bands.forEach(band => {
          if (band.category == 'Musician/Band') {
            result.push(band);
          }
        });
        return result;
      });
  }
}
