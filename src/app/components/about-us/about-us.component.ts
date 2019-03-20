import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swift-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'SwiftHouse - About Us';
  }

}
