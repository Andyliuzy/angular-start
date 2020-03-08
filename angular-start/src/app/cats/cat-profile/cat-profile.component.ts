import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from '../models/cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit, OnDestroy {
  currentCat: Cat;
  routeParamsSub: Subscription;
  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.catService.getCatById(params.catId).subscribe(cat => {
        this.currentCat = cat as Cat;
      });
    });
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
  }

  getKeys(cat: Cat, filterKeys = []) {
    return Object.keys(cat).filter(c => !filterKeys.includes(c));
  }

  getKey(value) {
    return value;
  }

  getvalue(key: string) {
    return this.currentCat[key];
  }
}
