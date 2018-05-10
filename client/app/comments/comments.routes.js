'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/comments', {
      template: '<comments></comments>'
    });
}
