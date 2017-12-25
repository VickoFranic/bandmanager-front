import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  band: object = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
      this.band = localStorage.selectedBand;
  }
}
