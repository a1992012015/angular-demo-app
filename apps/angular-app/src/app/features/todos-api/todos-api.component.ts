import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@angular-demo-app/data';

@Component({
  selector: 'angular-demo-app-todos-api',
  templateUrl: './todos-api.component.html',
  styleUrls: ['./todos-api.component.scss']
})
export class TodosApiComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  ngOnInit(): void {
    console.log('TodosApiComponent', this.todos);
  }

  fetch(): void {
    this.http.get<Todo[]>('/api/app/todos').subscribe((t) => (this.todos = t));
  }

  addTodo(): void {
    this.http.post('/api/app/addTodo', { index: 1 }).subscribe(() => {
      this.fetch();
    });
  }

  getProxies(): void {
    this.http.get('/api/app/proxies').subscribe((response) => {
      console.log('response', response);
    });
  }

  getConfig(): void {
    this.http.get('/api/app/config').subscribe((response) => {
      console.log('response', response);
    });
  }

  getYaml(): void {
    this.http.get('/api/app/yaml').subscribe((response) => {
      console.log('response', response);
    });
  }

  setYaml(): void {
    this.http.post('/api/app/yaml', { body: [] }).subscribe((response) => {
      console.log('response', response);
    });
  }
}
