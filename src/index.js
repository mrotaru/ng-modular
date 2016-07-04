'use strict'

require('./core')
require('./data')
require('./directives')
require('./books')
require('./authors')
require('./about')
require('./layout')

require('angular')
  .module('app', [
    /**
     * Core and common modules
     */
    'app.core',
    'app.directives',
    'app.layout',

    /**
     * Feature modules
     */
    'app.books',
    'app.authors'
  ])

