import { LoginService } from './services/login-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';
import { FormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoService } from './services/todo-service.service';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateFormComponent,
    TodoDashboardComponent,
    TodoLoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule
  ],
  providers: [TodoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
