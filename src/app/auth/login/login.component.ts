import { Component } from "@angular/core"
import { Users } from '../models/user.model';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.services';
import { MsgServices } from 'src/app/shared/services/message.service';


@Component({

    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]

})
export class LoginComponent {

    public user: Users;
    showMessage: boolean = true;
    public loginByEmail: boolean = false
    public submitting: boolean = false


    constructor(
        public router: Router,
        public authService: AuthService,// j j kura injectable decorator use gareko xa tyo constructor ma inject garnu parxa 
        public msgService: MsgServices
    ) {
        this.user = new Users({})
        console.log("get token>>> ", localStorage.getItem("token"))
        console.log("get user>>> ", JSON.parse(localStorage.getItem("user")))
    }

    login() {
        this.submitting = true;
        // we will make a call to service which will call to backend for communication 
        // suppose we get success now we have to navigate user to dashbord.
        this.authService.login(this.user)
            .subscribe(
                (data: any) => {
                    this.msgService.showSuccess("welcome " + data.user.username)
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user))

                    this.router.navigate(["user/dashboard"])
                    this.submitting = false
                },
                (error) => {
                    this.msgService.showError(error)
                    this.submitting = false
                }
            )
        // expectation would be success or failure

    }
    changeLoginMethod() {
        this.loginByEmail = !this.loginByEmail
    }
 
    isLoggedIn() {
        if (localStorage.getItem('token')) {

            return true
        }
        return false;
    }


}


/*DATA BINDING
Communication of data between view and controller

types of data binding
event binding: (click, change, hover, double click) syntax ()
property binding(disable, enable, hidden) syntax []
two way data binding (synchronization of data between views and controller)
    if changes in views reflects in controller and if changes in controller reflects in views





*/
