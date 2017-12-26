import { Injectable } from '@angular/core';
import { FacebookClientService } from './facebook-client.service';

@Injectable()
export class BandService {

  constructor(private facebookClientService: FacebookClientService) { }

  getSelectedBand() {
    let band = {
      id: localStorage.getItem('selectedBandId'),
      name: localStorage.getItem('selectedBandName'),
      access_token: localStorage.getItem('selectedBandAccessToken')
    }
    
    return band;
  }

  getSingleBandFacebookData(band) {
    const url = '/' + band.id + '?fields=cover,description,about,roles';
    const token = band.access_token;  

    return this.facebookClientService.get(url, token)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return null;
      })
  }
}
