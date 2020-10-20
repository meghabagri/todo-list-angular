import { User } from './../model/user';
import { LoginService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) {}
  name: string;
  email: string;
  password: string;

  isSaved: boolean;
  // tslint:disable-next-line: typedef
  onSubmit(user: User) {
    console.log(user.email);
    this.service.register(user.email, user.password).then(() => {
      this.isSaved = true;
    });
  }
  ngOnInit(): void {}
}
