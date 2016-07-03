'use strict'

require('angular')
  .module('app.authors', ['core.data'])
  .provider('Authors', require('./service.js'))
