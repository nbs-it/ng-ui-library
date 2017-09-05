import template from './numberSpinner.html';
import controller from './numberSpinner.controller';

import './numberSpinner.scss';

let numberSpinnerComponent = {
  bindings: {
    value: '=value',
    label: '@',
    currencyIcon: '@',
    compact: '<',
    totalValue: '<',
    disabled: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};
controller.$inject = ['$scope', '$timeout'];

export default numberSpinnerComponent;
