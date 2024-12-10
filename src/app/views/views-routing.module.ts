import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';
// import { StatisticsComponent } from './statistics/statistics.component';
const routes: Routes = [
 { 
  path: '',
  component: ViewsHomeComponent,
 },
//  { path:'statistics', component : StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
