import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router

  ) {

  }

  ngOnInit() {
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true
    }
    return false;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/auth/login"])
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


}
/*
metadata of component

selector: element name

templateUrl: it specifies which template(views) is used for component

styleUrls: it specifies which css file to include for component

*/
