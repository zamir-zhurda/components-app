import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../shared/divider/divider.component';
import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    DividerComponent
  ]
})
export class ViewsModule { }
