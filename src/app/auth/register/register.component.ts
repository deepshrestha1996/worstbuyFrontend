import { Component, OnInit } from '@angular/core';
import { Users } from "./../models/user.model"
import { AuthService } from '../services/auth.services';
import { MsgServices } from 'src/app/shared/services/message.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitting: boolean = false;
  user;
  constructor(
    public authService: AuthService,
    public msgService: MsgServices,
    public router: Router
  ) {
    this.user = new Users({});
  }

  ngOnInit() {
  }

  register() {
    console.log("this.user now >>>", this.user)
    this.submitting = true
    this.authService.register(this.user)
      .subscribe(
        (data: any) => {
          this.msgService.showSuccess("registration Successful")
          this.router.navigate(["/auth/login"])
        },
        (error) => {
          this.submitting=false;
          this.msgService.showError(error)
        }
      )
  }

}
