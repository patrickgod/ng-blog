import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/article";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-article-overview",
  templateUrl: "./article-overview.component.html",
  styleUrls: ["./article-overview.component.css"]
})
export class ArticleOverviewComponent implements OnInit {
  articles: Article[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.dashboardService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
