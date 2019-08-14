import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/article";
import { DashboardService } from "../dashboard.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.css"]
})
export class EditArticleComponent implements OnInit {
  article: Article = null;
  saved = false;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key: string = params.key;
      this.getArticle(key);
    });
  }

  getArticle(key: string): void {
    this.dashboardService.getArticle(key).subscribe((article: Article) => {
      if (article === null) {
        this.router.navigateByUrl("404");
        return;
      }
      this.article = article;
    });
  }

  updateArticle(): void {
    this.saved = false;
    this.dashboardService.updateArticle(this.article).subscribe(result => {
      this.article = result;
      this.saved = true;
    });
  }
}
