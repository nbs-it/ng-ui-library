'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberSpinnerController = function NumberSpinnerController($scope, $timeout) {
  _classCallCheck(this, NumberSpinnerController);

  var vm = this;
  vm.$onInit = function () {
    vm.value = vm.value || 1;
    vm.totalValue = vm.totalValue || 0;
    vm.currencyIcon = vm.currencyIcon || '₪';
  };
  vm.input = _angular2.default.element(document.getElementById('number-spinner-number-input'));
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
};

exports.default = NumberSpinnerController;