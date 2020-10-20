import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { TodoService } from '../services/todo-service.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.css']
})
export class TodoCreateFormComponent implements OnInit {
  constructor(private service: TodoService) {}
  saved = false;
  responsible: string;
  priority: string;
  description: string;
  // tslint:disable-next-line: typedef
  onSubmit(todo: Todo) {
    this.service.create(todo).then(() => {
      this.saved = true;
    });
  }
  ngOnInit(): void {}
}
