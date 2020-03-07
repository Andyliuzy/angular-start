import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit {
  currentCat: Cat;
  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    const id = this.route.snapshot.params.catId;
    this.catService.getCatById(id).subscribe(cat => {
      this.currentCat = cat as Cat;
      console.log('---> current cat: ', this.currentCat);
    });
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
