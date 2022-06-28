import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@angular-demo-app/data';

@Component({
  selector: 'angular-demo-app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  ngOnInit(): void {
    console.log('todos', this.todos);
  }
}
