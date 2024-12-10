import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 @Input('class') classNames = ''; 
 @Input() data = [] as any;
 @Input() headers = [] as any;
}
