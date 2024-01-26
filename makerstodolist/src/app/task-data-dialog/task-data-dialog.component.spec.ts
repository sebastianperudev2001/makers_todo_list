import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDataDialogComponent } from './task-data-dialog.component';

describe('TaskDataDialogComponent', () => {
  let component: TaskDataDialogComponent;
  let fixture: ComponentFixture<TaskDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDataDialogComponent]
    });
    fixture = TestBed.createComponent(TaskDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
