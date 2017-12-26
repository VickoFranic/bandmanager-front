import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookClientService } from '../dashboard/services/facebook-client.service';

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})
export class BandsTableComponent implements OnInit {

  bands: Array<Object> = [];
  rows = [];
  selected = [];

  columns = [
    { prop: 'id' },
    { prop: 'name' }
  ];

  constructor(private fbClient: FacebookClientService, private router: Router) { }

  ngOnInit() {
    this.fbClient.getBands()
    .then(bands => { 
      this.bands = bands;
      console.log(bands);
      bands.forEach(band => {
        let tmp = {
          'id': band.id,
          'name': band.name,
          'access_token': band.access_token
        }
        this.rows.push(tmp);
      });
    });
  }

  onSelect({ selected }) {
    localStorage.setItem('selectedBandId', selected[0].id);
    localStorage.setItem('selectedBandName', selected[0].name);
    localStorage.setItem('selectedBandAccessToken', selected[0].access_token);

    this.router.navigate(['/dashboard']);
  }

}
