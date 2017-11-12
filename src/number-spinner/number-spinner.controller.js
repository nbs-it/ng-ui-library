import angular from 'angular';

class NumberSpinnerController {
  constructor ($scope, $timeout) {
    let vm = this;
    vm.input = angular.element(document.getElementById('number-spinner-number-input'));
    $scope.$watch('vm.disabled', function () {
      if (vm.disabled) {
        vm.value = 1;
      }
    });
  }

  $onInit () {
    this.value = this.value || 1;
    this.totalValue = this.totalValue || 0;
    this.currencyIcon = this.currencyIcon || '₪';
  }

  plus () {
    if (!this.disabled && this.value < 99) {
      this.value++;
    }
  }

  minus () {
    if (!this.disabled && this.value > 1) {
      this.value--;
    }
  }

  change () {
    if (isNaN(this.value) || this.value === '') {
      this.value = 1;
    }
  }
}

export default NumberSpinnerController;
