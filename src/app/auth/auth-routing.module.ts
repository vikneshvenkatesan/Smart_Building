import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '', component: IndexComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent
      }
    ]
  }


];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
