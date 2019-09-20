import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + "/user/login", {
      name,
      password
    });
  }

  auth(): Observable<boolean> {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    return this.http.post<boolean>(environment.apiUrl + "/user/auth", {
      token
    });
  }
}
