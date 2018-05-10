'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './products.routes';

export class ProductsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('fullstackversion4App.products', [ngRoute])
  .config(routes)
  .component('products', {
    template: require('./products.html'),
    controller: ProductsComponent,
    controllerAs: 'productsCtrl'
  })
  .name;
