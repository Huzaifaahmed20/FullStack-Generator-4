'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('fullstackversion4App.login', [])
  .controller('LoginController', LoginController)
  .name;
