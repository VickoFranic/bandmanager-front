import { Component, OnInit } from '@angular/core';
import { FacebookClientService } from './services/facebook-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bands: Array<Object> = [];

  constructor(private fbClient: FacebookClientService) { }

  ngOnInit() {
    this.fbClient.getBands()
      .then(bands => { 
        this.bands = bands;
        console.log(bands);
      });
  }

}
