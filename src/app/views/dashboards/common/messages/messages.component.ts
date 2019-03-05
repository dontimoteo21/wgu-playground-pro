import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages = [
    'message1',
    'message2',
    'message3',
    'message4'
  ]
  constructor() { }

  ngOnInit() {
  }

}
