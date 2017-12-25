import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { BandService } from '../../dashboard/services/band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService, private bandService: BandService, private router: Router) {}

  ngOnInit() {

  }

  openBandsTable() {
    this.router.navigate(['/select-band']);
  }
}
