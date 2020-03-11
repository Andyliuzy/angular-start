import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatRoutingModule } from './cat-routing.module';

const COMPONENTS = [CatListComponent, CatDetailComponent, CatProfileComponent];

@NgModule({
  declarations: [COMPONENTS, ActionPanelComponent],
  imports: [CommonModule, ShareModule, CatRoutingModule],
  exports: [COMPONENTS],
  entryComponents: []
})
export class CatModule {}
