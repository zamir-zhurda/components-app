import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() data = [] as any;
  openedItemIndex = 0;

  onClickExpand(index : number){
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    }else{
      this.openedItemIndex = index;
    }
    
  }
}
