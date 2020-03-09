import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CatAdoptFormComponent } from '../cat-adopt-form/cat-adopt-form.component';
import { Cat, UpdateCat } from '../models/cat.model';

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

  constructor(private modalService: NzModalService) {}

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
    if (!this.cat.adopted) {
      const modal = this.modalService.create({
        nzTitle: 'Personal Information',
        nzContent: CatAdoptFormComponent,
        nzOnOk: (instance: CatAdoptFormComponent) => {
          instance.submitForm();
          if (instance.validateForm.status === 'VALID') {
            this.adoptCat();
          }
          return instance.validateForm.status === 'VALID';
        }
      });
    } else {
      this.modalService.confirm({
        nzClassName: 'custom-modal-dialog',
        nzTitle: 'Do you want to cancel this addoption?',
        nzContent:
          'This operation may casue you unable to adopt the same cat agian, still continue?',
        nzOnOk: () => this.adoptCat()
      });
    }
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
