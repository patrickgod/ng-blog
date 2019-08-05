import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../article";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:8000/dashboard/overview");
  }
}
