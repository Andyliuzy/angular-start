import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Cat, UpdateCat } from '../models/cat.model';
import { CatHelperService } from '../services/cat-helper.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {
  imageVisible = false;
  selectedCat: Cat;

  @Input() cat: Cat;

  @Output() updateCat$: EventEmitter<UpdateCat> = new EventEmitter<UpdateCat>();

  constructor(
    private modalService: NzModalService,
    private catHelperService: CatHelperService
  ) {}

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

  subcribeCat() {
    const targetCat = Object.assign({}, this.cat);
    targetCat.subscribed = !targetCat.subscribed;
    this.updateCat$.emit({
      type: 'subscribe',
      cat: targetCat
    });
  }

  confirmAdoption() {
    this.catHelperService.confirmAdoption(this.cat, () => this.adoptCat());
  }

  adoptCat() {
    const targetCat = Object.assign({}, this.cat);
    targetCat.adopted = !targetCat.adopted;
    this.updateCat$.emit({
      type: 'adopted',
      cat: targetCat
    });
  }
}
