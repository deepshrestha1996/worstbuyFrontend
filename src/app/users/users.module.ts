import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './users.routing';

@NgModule({
  declarations: [ProfileComponent, ChangePasswordComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule]
})
export class UsersModule { }
