import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { BandService } from '../../dashboard/services/band.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService, private bandService: BandService) {}

  ngOnInit() {

  }
}
