import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {
  imageVisible = false;
  selectedCat: Cat;
  @Input() cat: Cat;

  constructor() {}

  ngOnInit() {}

  clickImage(cat: Cat) {
    this.selectedCat = cat;
    this.imageVisible = true;
  }

  handleCancel() {
    setTimeout(() => {
      this.selectedCat = null;
      this.imageVisible = false;
    });
  }
}
