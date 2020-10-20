import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private dbPath = '/todos';

  todosRef: AngularFireList<Todo> = null;

  constructor(private db: AngularFireDatabase) {
    this.todosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Todo> {
    return this.todosRef;
  }

  create(tutorial: Todo): any {
    return this.todosRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.todosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.todosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    console.log('here');
    return this.todosRef.remove();
  }
}
