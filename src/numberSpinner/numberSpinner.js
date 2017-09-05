import angular from 'angular';
import numberSpinnerComponent from './numberSpinner.component';

let numberSpinnerModule = angular.module('numberSpinner', [])

  .component('numberSpinner', numberSpinnerComponent)
  .name;

export default numberSpinnerModule;
