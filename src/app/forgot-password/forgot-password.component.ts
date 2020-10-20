import { LoginService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private service: LoginService) {}
  mailSent: boolean;
  ngOnInit(): void {}
  sendEmail(email: HTMLInputElement) {
    this.service.sendPasswordResetEmail(email.value).then(() => {
      this.mailSent = true;
    });
  }
}
