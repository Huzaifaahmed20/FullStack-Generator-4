'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('fullstackversion4App.admin', ['fullstackversion4App.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
