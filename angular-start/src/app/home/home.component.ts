import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Cat } from '../cats/models/cat.model';
import { CatService } from '../cats/services/cat.service';

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
  adoptedCats$: Observable<Cat[]>;
  subscribedCats$: Observable<Cat[]>;

  routerEventSubscription: Subscription;
  reloadCatSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catService: CatService
  ) {}

  ngOnInit() {
    this.setSelectednaviagtion(this.router.url);
    this.routerEventSubscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.setSelectednaviagtion(e.urlAfterRedirects);
      }
    });
    this.reloadCatSubscription = this.catService.reloadNotify$.subscribe(
      ({ type }) => {
        if (type === 'adopted') {
          this.adoptedCats$ = this.catService.getAdoptedCats();
        } else if (type === 'subscribe') {
          this.subscribedCats$ = this.catService.getSubscribedCats();
        }
      }
    );
    this.adoptedCats$ = this.catService.getAdoptedCats();
    this.subscribedCats$ = this.catService.getSubscribedCats();
  }

  ngOnDestroy() {
    this.routerEventSubscription.unsubscribe();
    this.reloadCatSubscription.unsubscribe();
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
