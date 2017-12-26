import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  @Input()
  conversations: object = {};

  constructor() { }

  ngOnInit() {
    
  }

}
