import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swift-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'SwiftHouse - Home';
  }

}
