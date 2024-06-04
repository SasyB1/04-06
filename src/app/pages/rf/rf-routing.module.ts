import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RfComponent } from './rf.component';

const routes: Routes = [{ path: '', component: RfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RfRoutingModule {}
