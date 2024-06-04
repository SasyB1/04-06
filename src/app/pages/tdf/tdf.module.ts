import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TdfRoutingModule } from './tdf-routing.module';
import { TdfComponent } from './tdf.component';

@NgModule({
  declarations: [TdfComponent],
  imports: [CommonModule, TdfRoutingModule, FormsModule],
})
export class TdfModule {}
