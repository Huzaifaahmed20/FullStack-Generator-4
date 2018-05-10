'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './comments.routes';

export class CommentsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('fullstackversion4App.comments', [ngRoute])
  .config(routes)
  .component('comments', {
    template: require('./comments.html'),
    controller: CommentsComponent,
    controllerAs: 'commentsCtrl'
  })
  .name;
