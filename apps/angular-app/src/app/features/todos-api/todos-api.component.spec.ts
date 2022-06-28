import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosApiComponent } from './todos-api.component';

describe('TodosApiComponent', () => {
  let component: TodosApiComponent;
  let fixture: ComponentFixture<TodosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
