import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/tdf/tdf.module').then((m) => m.TdfModule),
  },
  {
    path: 'rf',
    loadChildren: () => import('./pages/rf/rf.module').then((m) => m.RfModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
