import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../models/cat.model';
import { CatHelperService } from '../services/cat-helper.service';
import { CatService } from '../services/cat.service';

const SUCCESS_STATUS = 204;
@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {
  private catValue: Cat;
  @Input()
  set cat(value: Cat) {
    this.catValue = value;
  }
  get cat(): Cat {
    return this.catValue;
  }

  constructor(
    private catService: CatService,
    private catHelperService: CatHelperService
  ) {}

  ngOnInit() {}

  subscribeCat() {
    const targetCat = Object.assign({}, this.cat);
    targetCat.subscribed = !targetCat.subscribed;
    this.catService.updateCat(targetCat).subscribe(r => {
      if (r.status === SUCCESS_STATUS) {
        this.catService.notifyReload({ type: 'subscribe' });
        this.catService
          .getCatById(targetCat.id)
          .subscribe((cat: Cat) => (this.cat = cat));
      }
    });
  }

  confirmAdoptCat() {
    this.catHelperService.confirmAdoption(this.cat, () => this.adoptCat());
  }

  adoptCat() {
    const targetCat = Object.assign({}, this.cat);
    targetCat.adopted = !targetCat.adopted;
    this.catService.updateCat(targetCat).subscribe(r => {
      if (r.status === SUCCESS_STATUS) {
        this.catService.notifyReload({ type: 'adopted' });
        this.catService
          .getCatById(targetCat.id)
          .subscribe((cat: Cat) => (this.cat = cat));
      }
    });
  }
}
