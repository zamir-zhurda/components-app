import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesDirective } from '../times.directive';
@Component({
  selector: 'app-placeholder',
  imports: [CommonModule,TimesDirective],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
 @Input() hasHeader = true;
 @Input() lines = 3;

}
