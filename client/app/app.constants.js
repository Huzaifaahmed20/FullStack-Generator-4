'use strict';

import angular from 'angular';

export default angular.module('fullstackversion4App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
