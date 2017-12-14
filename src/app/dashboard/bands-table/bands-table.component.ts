import { Component, OnInit } from '@angular/core';
import { FacebookClientService } from '../services/facebook-client.service';

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})
export class BandsTableComponent implements OnInit {

  bands: Array<Object> = [];

  rows = [];

  columns = [
    { prop: 'id' },
    { prop: 'name' }
  ];

  constructor(private fbClient: FacebookClientService) { }

  ngOnInit() {
    this.fbClient.getBands()
    .then(bands => { 
      this.bands = bands;
      bands.forEach(band => {
        let tmp = {
          'id': band.id,
          'name': band.name
        }
        this.rows.push(tmp);
      });
    });
  }

}
