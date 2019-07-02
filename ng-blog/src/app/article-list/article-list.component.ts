import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    this.articles = ARTICLES;

    console.log(this.articles);
  }

}
