import angular from 'angular';

class NumberSpinnerController {
  constructor ($scope, $timeout) {
    var vm = this;
    vm.$onInit = function () {
      vm.value = vm.value || 1;
      vm.totalValue = vm.totalValue || 0;
      vm.currencyIcon = vm.currencyIcon || '₪';
    };
    vm.input = angular.element(document.getElementById('number-spinner-number-input'));
    vm.plus = function () {
      if (!vm.disabled && vm.value < 99) {
        vm.value++;
      }
    };
    vm.minus = function () {
      if (!vm.disabled && vm.value > 1) {
        vm.value--;
      }
    };
    vm.change = function () {
      if (isNaN(vm.value) || vm.value === '') {
        vm.value = 1;
      }
    };
    $scope.$watch('vm.disabled', function () {
      if (vm.disabled) {
        vm.value = 1;
      }
    });
  }
}

export default NumberSpinnerController;
