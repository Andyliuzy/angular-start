import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatGuardService } from './services/cat-guard/cat-guard.service';

const routes: Routes = [
  {
    path: 'list',
    component: CatListComponent
  },
  {
    path: ':catId',
    component: CatProfileComponent,
    canActivate: [CatGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule {}
