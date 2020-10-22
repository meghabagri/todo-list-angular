import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { TodoService } from '../services/todo-service.service';
import { Todo } from '../model/todo';
import { NgForm } from '@angular/forms';

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
  onSubmit(f: NgForm) {
    this.service.create(f.value).then(() => {
      this.saved = true;
      f.reset();
    });
  }
  ngOnInit(): void {}
}
