import { Injectable } from '@angular/core';

@Injectable()
export class BandService {

  constructor() { }

  getSelectedBand() {
    let band = {
      id: localStorage.getItem('selectedBandId'),
      name: localStorage.getItem('selectedBandName')
    }
    
    return band;
  }
}
