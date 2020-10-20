import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { AngularFireList } from '@angular/fire/database';
import { Todo } from '../model/todo';

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
  ngOnInit(): void {
    this.service
      .getAll()
      .valueChanges()
      .subscribe(data => {
        this.todos = data;
      });
  }
  // tslint:disable-next-line: typedef
  removeAllTutorials(): void {
    this.service
      .deleteAll()
      .then(() => (this.deleted = true))
      .catch(err => console.log(err));
  }
  createTodo(): void {}
}
