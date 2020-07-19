import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, MemberCardComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
