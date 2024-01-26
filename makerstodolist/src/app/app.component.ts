import { Component } from '@angular/core';
import { Item } from './item';
import { MatDialog } from '@angular/material/dialog';

import { TaskDataDialogComponent } from './task-data-dialog/task-data-dialog.component';

const today = new Date(); // Get today's date

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";


  constructor(private dialog: MatDialog) {}


  /*
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];
  */


  allItems: Item[] = [
    { id: 1, completado: true, titulo: "eat", fecha: today, subitems: [{ id: 70, completado: true, titulo: "subtask", fecha: today,subitems: []}, { id: 70, completado: true, titulo: "subtask", fecha: today,subitems: []}, { id: 70, completado: true, titulo: "subtask", fecha: today,subitems: []}] },
    { id: 2,completado: true, titulo: "sleep", fecha: today, subitems: [] },
    { id: 3, completado: false, titulo: "play", fecha: today, subitems: [] },
    { id: 4, completado: false, titulo: "laugh", fecha: today, subitems: [] }
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.completado : !item.completado
    );
  }

  addItem(titulo: string) {
    const newId = this.allItems.length > 0 ? this.allItems[0].id + 1 : 1; // Generate new ID

    this.allItems.unshift({
      id: newId,
      completado: false,
      titulo: titulo,
      fecha: today,
      subitems: []
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  
  showTaskDataPopup() {
    this.dialog.open(TaskDataDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        allItems: this.allItems
      }
    });
  }


}
