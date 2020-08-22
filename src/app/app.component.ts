import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var ga;

@Component({
  selector: 'swift-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(readonly router: Router) {
    const navEndEvent$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );

    navEndEvent$.subscribe((e: NavigationEnd) => {
      console.log(e);
      ga('set', 'location', window.location.href);
      ga('set', 'page', e.url);

      ga('send', 'pageview', e.url);
    });
  }

  title = 'Swifthouse Web (Pty) Ltd';

  ngOnInit(): void {

  }
}
