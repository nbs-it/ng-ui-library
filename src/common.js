import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './number-spinner/number-spinner';
import dialog from './dialog/dialog.directive';
import modalBox from './modal-box/modal-box.directive';
import inputCurrency from './input-currency/input-currency.directive';
import customInput from './custom-input/custom-input.directive';
let commonModule = angular.module('ng-ui-library', [
  checkbox,
  numberSpinner,
  dialog,
  modalBox,
  inputCurrency,
  customInput
])
  .name;

export default commonModule;
