import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swift-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'SwiftHouse - Contact Us';
  }

}
