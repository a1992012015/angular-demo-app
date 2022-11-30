import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@angular-demo-app/data';
import { concatMap, delay, mergeMap, of } from 'rxjs';

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
    this.rxjsTest1();
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

  private rxjsTest1(): void {
    // 发出延迟值
    const source = of(2000, 1000);
    // 将内部 observable 映射成 source，当前一个完成时发出结果并订阅下一个
    const example = source.pipe(
      concatMap((val) => {
        console.log('val', val);
        return of(`Delayed by: ${val}ms`).pipe(delay(val));
      })
    );
    // 输出: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe((val) => console.log(`With concatMap: ${val}`));

    // 展示 concatMap 和 mergeMap 之间的区别
    const mergeMapExample = source
      .pipe(
        // 只是为了确保 meregeMap 的日志晚于 concatMap 示例
        delay(5000),
        mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe((val) => console.log(`With mergeMap: ${val}`));
  }
}
