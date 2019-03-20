import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swift-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'SwiftHouse - Pricing';
  }

}
