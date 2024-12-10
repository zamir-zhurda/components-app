import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { SharedModule } from "../../shared/shared.module";
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  imports: [ModalComponent, SharedModule, CommonModule, AccordionComponent],  
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title: 'Why is the sea blue?', content:'The sea is blue because of the salt' },
    { title: 'Why is the earth a sphere?', content:'The erth is not quite a sphere...' },
    { title: 'What color is the sun', content:'The sun is yeallow.' }
  ]

  onOpenClick(){
   this.modalOpen = true;   
  }

  onCloseClick(){
    this.modalOpen = false;   
  }

}
