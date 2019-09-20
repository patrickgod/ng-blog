import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { User } from "../user";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.errorMessage = "";

    this.authService.login(this.user.name, this.user.password).subscribe(
      result => {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("token", result.token);
        }

        this.router.navigate(["/dashboard"]);
      },
      error => {
        this.errorMessage = "Username or password is wrong.";
      }
    );
  }
}
