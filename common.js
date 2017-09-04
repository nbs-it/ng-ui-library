import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './numberSpinner/numberSpinner';

let commonModule = angular.module('app.common', [
  checkbox,
  numberSpinner
])
.name;

export default commonModule;
