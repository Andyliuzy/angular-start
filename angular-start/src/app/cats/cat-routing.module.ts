import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CatListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule {}
