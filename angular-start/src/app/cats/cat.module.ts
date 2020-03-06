import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatRoutingModule } from './cat-routing.module';

const COMPONENTS = [CatListComponent, CatDetailComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ShareModule, CatRoutingModule],
  exports: [COMPONENTS]
})
export class CatModule {}
