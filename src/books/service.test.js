'use strict'

/* global angular, inject, describe, beforeEach, afterEach, it */

let jsdom = require('jsdom').jsdom
let assert = require('assert')

global.document = jsdom('<html><head><script></script></head><body></body></html>')
global.window = global.document.defaultView
global.navigator = window.navigator = {}
global.Node = window.Node

// emulate mocha running in browser (makes angular-mocks work)
global.window.mocha = true
global.window.mocha = true
global.window.beforeEach = beforeEach
// global.window.setup = setup
global.window.afterEach = afterEach
// global.window.teardown = teardown

require('angular/angular')
require('angular-mocks')

global.angular = window.angular
global.inject = global.angular.mock.inject
global.ngModule = global.angular.mock.module

angular.module('core.data', []).value('Data', {
  request: () => [{name: 'B1'}, {name: 'B2'}]
})

angular.module('app.books', ['core.data'])
  .factory('Books', require('./service.js'))

describe('Books service', function () {
  beforeEach(angular.mock.module('app.books'))

  it('should return a list of books', inject(function (Books) {
    assert.ok(Books.getAll().length > 0)
    assert.ok(Books.getAll()[1].name === 'B2')
  }))
})
