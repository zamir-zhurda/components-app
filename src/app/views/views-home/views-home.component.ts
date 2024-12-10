import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from '../item-list/item-list.component';
@Component({
  selector: 'app-views-home',
  imports: [StatisticsComponent, CommonModule, DividerComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
 statistics = [
  { value : 22, label : "Number of users"},
  { value: 900 , label : "Revenue"},
  { value: 200 , label : "Reviews"}
 ];

 items  = [
  { imageUrl: 'assets/images/couch.jpeg', title:'Couch', description: 'This is a fantastic Couch to sit on' },
  { imageUrl: 'assets/images/dresser.jpeg', title:'Dresser', description: 'This is a great Dresser to put staff' }
 ]
}
