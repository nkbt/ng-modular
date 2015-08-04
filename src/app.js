import angular from 'angular';

const app = angular.module('app', [
  require('./hello').name
]);

export default app;
