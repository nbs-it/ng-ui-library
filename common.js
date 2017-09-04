import angular from 'angular';
import checkbox from './checkbox/checkbox';

let commonModule = angular.module('app.common', [
  checkbox
])
.name;

export default commonModule;
