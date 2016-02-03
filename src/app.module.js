'use strict';

angular
  .module("app", [

    /**
     * Core and common modules
     */
    'app.core',
    'app.directives',
    'app.layout',

    /**
     * Feature modules
     */
    'app.foo',
    'app.dashboard',
  ]);

