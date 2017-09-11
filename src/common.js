import angular from 'angular';
import checkbox from './checkbox/checkbox';
import numberSpinner from './number-spinner/number-spinner';
import dialog from './dialog/dialog.directive';
import modalBox from './modal-box/modal-box.directive';
import inputCurrency from './input-currency/input-currency.directive';
import customInput from './custom-input/custom-input.directive';
import expInput from './exp-input/exp-input.directive';
import expDatepicker from './exp-datepicker/exp-datepicker.directive';

let commonModule = angular.module('ng-ui-library', [
  checkbox,
  numberSpinner,
  dialog,
  modalBox,
  inputCurrency,
  customInput,
  expInput,
  expDatepicker
])
  .name;

export default commonModule;
