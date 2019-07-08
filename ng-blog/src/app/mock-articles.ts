import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet viverra erat at laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae tempus enim. Vestibulum ac enim varius, euismod libero eu, elementum odio. Duis sapien leo, venenatis vitae condimentum facilisis, lobortis quis enim. Vivamus aliquam lorem sit amet tellus accumsan, eu luctus ipsum gravida. Suspendisse tellus magna, consectetur id ultricies et, rutrum rutrum lacus. Quisque vel porta nibh. Etiam vulputate magna nec vulputate pharetra. Proin facilisis aliquam sapien quis porttitor. Nam lacinia quam vitae augue rhoncus mollis. Integer viverra condimentum lorem. Integer id massa at ex pellentesque finibus.',
        description: "This is my first article! It's great. Please read it. :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'The second article',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet viverra erat at laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae tempus enim. Vestibulum ac enim varius, euismod libero eu, elementum odio. Duis sapien leo, venenatis vitae condimentum facilisis, lobortis quis enim. Vivamus aliquam lorem sit amet tellus accumsan, eu luctus ipsum gravida. Suspendisse tellus magna, consectetur id ultricies et, rutrum rutrum lacus. Quisque vel porta nibh. Etiam vulputate magna nec vulputate pharetra. Proin facilisis aliquam sapien quis porttitor. Nam lacinia quam vitae augue rhoncus mollis. Integer viverra condimentum lorem. Integer id massa at ex pellentesque finibus.',
        description: "Also a great article!",
        key: 'the-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    }
];
