import { Component, OnInit } from '@angular/core';
import { BandService } from './services/band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedBand: object = {};

  constructor(private bandService: BandService, private router: Router) { }

  ngOnInit() {
    if (! this.bandService.getSelectedBand().id) {
      this.router.navigate(['/select-band']);
    } else {
      this.selectedBand = this.bandService.getSelectedBand();
    }
  }

}
