import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CatAdoptFormComponent } from './cat-adopt-form/cat-adopt-form.component';
import { LoadingComponent } from './loading/loading.component';

const COMPONENTS = [LoadingComponent, CatAdoptFormComponent];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, NgZorroAntdModule, ReactiveFormsModule, FormsModule],
  exports: [NgZorroAntdModule, COMPONENTS],
  entryComponents: [CatAdoptFormComponent]
})
export class ShareModule {}
