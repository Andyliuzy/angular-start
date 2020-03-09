import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user/welcome'
  },
  {
    path: 'user',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomePageComponent
      },
      {
        path: 'cats',
        loadChildren: () => import('./cats/index').then(m => m.CatModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./user/index').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
