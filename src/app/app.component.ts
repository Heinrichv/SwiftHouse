import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'swift-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router){   
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', 'GTM-P9QKTV4', {
               'page_path': event.urlAfterRedirects
             });
          }
       }
    )}

  title = 'Swifthouse Web (Pty) Ltd';

  ngOnInit(): void {

  }
}
