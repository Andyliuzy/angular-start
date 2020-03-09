import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { CatAdoptFormComponent } from './cat-adopt-form/cat-adopt-form.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatRoutingModule } from './cat-routing.module';

const COMPONENTS = [
  CatListComponent,
  CatDetailComponent,
  CatProfileComponent,
  CatAdoptFormComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule,
    CatRoutingModule
  ],
  exports: [COMPONENTS],
  entryComponents: [CatAdoptFormComponent]
})
export class CatModule {}
