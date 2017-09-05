import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './numberSpinner/numberSpinner';
import dialog from './dialog/dialog.directive';
import modalBox from './modalBox/modalBox.directive';
let commonModule = angular.module('app.common', [
  checkbox,
  numberSpinner,
  dialog,
  modalBox
])
.name;

export default commonModule;
