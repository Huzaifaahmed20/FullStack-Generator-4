'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/products', {
      template: '<products></products>'
    });
}
