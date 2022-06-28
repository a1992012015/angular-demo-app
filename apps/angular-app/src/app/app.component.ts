import { Component } from '@angular/core';
import { Todo } from '@angular-demo-app/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'angular-demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  // constructor(private http: HttpClient) {
  //   this.fetch();
  // }
  //
  // fetch() {
  //   this.http.get<Todo[]>('/api/app/todos').subscribe((t) => (this.todos = t));
  // }
  //
  // addTodo() {
  //   this.http.post('/api/app/addTodo', { index: 1 }).subscribe(() => {
  //     this.fetch();
  //   });
  // }
}
