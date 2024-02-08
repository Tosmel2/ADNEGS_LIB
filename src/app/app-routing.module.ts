import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardGuard } from './auth-guards/user-dashboard.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [UserDashboardGuard]
  },
  {
    path: '',
    loadChildren: () => import('../modules/public/public.module').then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
