import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoadingComponent } from './loading/loading.component';

const COMPONENTS = [LoadingComponent];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [NgZorroAntdModule, COMPONENTS]
})
export class ShareModule {}
