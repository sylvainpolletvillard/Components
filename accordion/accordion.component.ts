import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'c3m-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

 /* Accordion Items Array */
 groups: Array<AccordionItemComponent> = [];

 /* Add a accordion item to accordion group */
  addGroup(group: AccordionItemComponent): void {
    this.groups.push(group);
  }

  /* Close All accordion item but keep open the current accordion item */
  closeOthers(openGroup: AccordionItemComponent): void {
    this.groups.forEach((group: AccordionItemComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  /* Close all accordion items */
  closeAll(openGroup: AccordionItemComponent): void {
    this.groups.forEach((group: AccordionItemComponent) => {
        group.isOpen = false;
    });
  }

  /* Remove a accordion item of accordion items group */
  removeGroup(group: AccordionItemComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
