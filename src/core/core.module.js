"use strict";

angular
  .module("app.core", [
    /**
     * Angular built-in modules
     */
    'ngRoute',

    /**
     * Reusable common modules
     */
    'lib.logger', 'lib.router',

    /**
     * Third party libs available to all modules (part of core)
     */
    'toastr'
  ]);
