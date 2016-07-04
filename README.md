Sample demo app based on [John Papa's "modular"
demo](https://github.com/johnpapa/ng-demos/tree/master/modular), incorporating
Angular 1.5 components as in ["Building Components with Angular
1.5"](https://app.pluralsight.com/library/courses/building-components-angular-1-5/table-of-contents)
by Scott Allen.

1. CommonJs/Browserify
2. unit tests in Node (no `phantomjs` or Karma needed for the unit tests)
    https://gist.github.com/rikukissa/dcb422eb3b464cc184ae 
    https://glebbahmutov.com/blog/unit-testing-angular-from-node-like-a-boss/
3. use ES6
4. use `npm` scripts as a build tool and dependency management, no `bower`
5. use `jade` for templates
6. each component in it's own folder, with a README where appropriate
7. [`standard`](http://standardjs.com/) code style
