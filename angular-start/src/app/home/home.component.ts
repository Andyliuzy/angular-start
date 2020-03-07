import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  isHomePage: boolean;
  isCatPage: boolean;
  isUserPage: boolean;

  routerEventSubScription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('---> route:', this.router.url);
    this.setSelectednaviagtion(this.router.url);
    this.routerEventSubScription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.setSelectednaviagtion(e.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy() {
    this.routerEventSubScription.unsubscribe();
  }

  setSelectednaviagtion(url) {
    this.isHomePage = false;
    this.isCatPage = false;
    this.isUserPage = false;
    if (url.includes('cats')) {
      this.isCatPage = true;
    } else if (url.includes('dashboard')) {
      this.isUserPage = true;
    } else {
      this.isHomePage = true;
    }
  }
}
