'use strict'

require('angular')
  .module('app.books', ['core.data'])
  .component('bmBooks', require('./list.js'))
  .component('bmBook', require('./single.js'))
  .factory('Books', require('./service.js'))
  .run(function routes (routeHelper) {
    routeHelper.addRoutes([{
      url: '/books',
      nav: {
        title: 'Books',
        order: 1,
        glyphicon: 'book'
      },
      whenConfig: {
        template: '<bm-books></bm-books>'
      }
    }, {
      url: '/book/:id',
      whenConfig: {
        template: '<bm-book id="{{vm.id}}"></bm-book>',
        controller: function ($routeParams) { this.id = $routeParams.id },
        controllerAs: 'vm'
      }
    }])
  })
