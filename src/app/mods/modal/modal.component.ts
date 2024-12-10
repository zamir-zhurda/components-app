import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  
  @Output() closeModal = new EventEmitter();

  constructor(private element: ElementRef){
    // console.log("Element: ",this.element.nativeElement);
  }

  ngOnInit(){
    document.body.appendChild(this.element.nativeElement);
  }

  ngOnDestroy(){
   this.element.nativeElement.remove();
  }

  onBackgroundCloseClick() {
    console.log('Background close modal clicked')
    this.closeModal.emit();
  }

  onIconCloseClick(){
    console.log('Icon close modal clicked')
    this.closeModal.emit();
  }

  onButtonCloseClick(){
    console.log('Button close modal clicked')
    this.closeModal.emit();
  }
}
