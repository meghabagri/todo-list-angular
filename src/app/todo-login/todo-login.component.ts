import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './../model/user';
import { LoginService } from './../services/login-service.service';

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: LoginService) {}
  ngOnInit(): void {}

  verify(user: User) {
    this.service.login(user.email, user.password);
  }
}
