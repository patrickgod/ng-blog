import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: '',
        description: "This is my first article! It's great. Please read it. :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'The second article',
        content: '',
        description: "Also a great article!",
        key: 'the-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    }
];
