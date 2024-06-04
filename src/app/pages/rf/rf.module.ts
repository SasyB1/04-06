import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfRoutingModule } from './rf-routing.module';
import { RfComponent } from './rf.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RfComponent],
  imports: [CommonModule, RfRoutingModule, ReactiveFormsModule],
})
export class RfModule {}
