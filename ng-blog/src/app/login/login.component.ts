import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage = "";

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.errorMessage = "";

    this.authService.login(this.user.name, this.user.password).subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.errorMessage = "Username or password is wrong.";
      }
    );
  }
}
