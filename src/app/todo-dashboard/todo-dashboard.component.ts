import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { AngularFireList } from '@angular/fire/database';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoDashboardComponent implements OnInit {
  constructor(private service: TodoService) {}
  todos: any;
  deleted: boolean;
  isActive: boolean;
  ngOnInit(): void {
    this.todos = this.service
      .getAll()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }
  // tslint:disable-next-line: typedef
  removeAllTutorials(): void {
    this.service
      .deleteAll()
      .then(() => (this.deleted = true))
      .catch(err => console.log(err));
  }
  createTodo(): void {}
  onClick(itemKey): void {
    this.service.delete(itemKey);
  }
}
