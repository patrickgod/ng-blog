import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListComponent } from "./article-list/article-list.component";
import { AboutComponent } from "./about/about.component";
import { ArticleComponent } from "./article/article.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditArticleComponent } from "./dashboard/edit-article/edit-article.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/:key", component: EditArticleComponent },
  { path: "dashboard/preview/:key", component: ArticleComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: ArticleListComponent },
  { path: ":key", component: ArticleComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
