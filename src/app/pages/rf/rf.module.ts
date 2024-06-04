import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfRoutingModule } from './rf-routing.module';
import { RfComponent } from './rf.component';

@NgModule({
  declarations: [RfComponent],
  imports: [CommonModule, RfRoutingModule],
})
export class RfModule {}
