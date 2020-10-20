import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { RegisterComponent } from './register/register.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: TodoLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: TodoDashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}
