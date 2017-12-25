import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { BandService } from './dashboard/services/band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
