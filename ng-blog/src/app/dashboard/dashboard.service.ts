import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Article } from "../article";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token;
    }

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    return headers;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(
      environment.apiUrl + "/dashboard/overview",
      { headers: this.getHeaders() }
    );
  }

  togglePublishState(article: Article): Observable<Article> {
    return this.http.post<Article>(
      environment.apiUrl + "/dashboard/article/publish",
      article
    );
  }

  getArticle(key: string): Observable<Article> {
    return this.http.get<Article>(
      environment.apiUrl + "/dashboard/article/" + key
    );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(
      environment.apiUrl + "/dashboard/article",
      article
    );
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(
      environment.apiUrl + "/dashboard/article/" + id
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      environment.apiUrl + "/dashboard/article",
      article
    );
  }
}
