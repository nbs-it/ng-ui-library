import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './numberSpinner/numberSpinner';
import modalBox from './modalBox/modalBox.directive';
let commonModule = angular.module('app.common.general', [
  checkbox,
  numberSpinner,
  modalBox
])
.name;

export default commonModule;
