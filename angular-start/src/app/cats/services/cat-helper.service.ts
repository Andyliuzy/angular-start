import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CatAdoptFormComponent } from '../../share/cat-adopt-form/cat-adopt-form.component';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatHelperService {
  constructor(private modalService: NzModalService) {}

  // tslint:disable-next-line: ban-types
  confirmAdoption(cat: Cat, cb: Function) {
    if (!cat.adopted) {
      this.modalService.create({
        nzTitle: 'Personal Information',
        nzContent: CatAdoptFormComponent,
        nzOnOk: (instance: CatAdoptFormComponent) => {
          instance.submitForm();
          if (instance.validateForm.status === 'VALID') {
            cb();
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
        nzOnOk: () => cb()
      });
    }
  }
}
