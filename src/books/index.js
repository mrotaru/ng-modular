'use strict'

require('angular')
  .module('app.books', ['core.data'])
  .component('books', require('./list.js'))
  .component('book', require('./single.js'))
  .provider('Books', require('./service.js'))
  .run(function routes (routeHelper) {
    routeHelper.addRoutes([{
      url: '/books',
      nav: {
        title: 'Books',
        order: 1,
        glyphicon: 'home'
      },
      whenConfig: {
        template: '<books></books>'
      }
    }, {
      url: '/book/:id',
      whenConfig: {
        templateUrl: '<book id="{{vm.id}}"></book>',
        controller: ($routeParams) => { this.id = $routeParams.id },
        controllerAs: 'vm'
      }
    }])
  })
