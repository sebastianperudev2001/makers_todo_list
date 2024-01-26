
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;
  editableSubItem: boolean = false; // Add editableSubItem property for sub-item


  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();


  removeSubItem(subitem: Item) {
    // Implement the logic to remove sub-item from the item's subitems array
    // For example:
    if (this.item.subitems) {
      const index = this.item.subitems.indexOf(subitem);
      if (index !== -1) {
        this.item.subitems.splice(index, 1);
      }
    }
  }

  saveSubItem(subitem: Item, newValue: string) {
    // Implement the logic to save changes to the sub-item
    // For example:
    subitem.titulo = newValue;
    this.editableSubItem = false; // Hide edit mode
  }


  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.titulo = description;
  }

  simplify(description: string)
  {
        
  }

}
