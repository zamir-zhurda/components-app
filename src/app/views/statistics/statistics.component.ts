import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
 @Input() data = [] as any;
}
