import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './number-spinner/number-spinner';
import dialog from './dialog/dialog.directive';
import modalBox from './modal-box/modal-box.directive';
import inputCurrency from './input-currency/input-currency.directive';
let commonModule = angular.module('ng-ui-library', [
  checkbox,
  numberSpinner,
  dialog,
  modalBox,
  inputCurrency
])
  .name;

export default commonModule;
