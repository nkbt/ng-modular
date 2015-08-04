import angular from 'angular';

const hello = angular.module('hello', []);

hello
  .directive('hello', require('./hello_directive'));

export default hello;
