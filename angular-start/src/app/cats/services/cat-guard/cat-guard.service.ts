import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatGuardService implements CanActivate {
  constructor(private router: Router, private modalService: NzModalService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return of(true).pipe(
      tap(result => {
        if (!result) {
          this.modalService.error({
            nzClassName: 'error-modal-dialog',
            nzTitle: 'Access Deny',
            nzContent:
              'Sorry, you do not have the access to this page. Please contact admin for help.'
          });
        }
      })
    );
  }
}
