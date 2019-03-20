import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swift-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'SwiftHouse - 404';
  }

}
