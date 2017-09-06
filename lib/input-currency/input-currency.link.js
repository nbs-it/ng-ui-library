'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($filter) {
  return function (scope, element, attr, ctrl) {
    var vm = ctrl;
    if (!vm) {
      return;
    }
    vm.onChange = function () {
      if (vm.$modelValue) {
        var maxSum = vm.$modelValue.toString().split('.')[0].length < 6;
        var minSum = vm.$modelValue !== 0;
        vm.$setValidity('maxSum', maxSum);
        vm.$setValidity('minSum', minSum);
      }
    };
    vm.$formatters.unshift(function (a) {
      vm.onChange();
      return $filter('number')(vm.$modelValue, 2);
    });

    vm.$parsers.unshift(function (viewValue) {
      if (viewValue[viewValue.length - 1] !== '.') {
        var plainNumber = viewValue.replace(/[^\d|.]/g, '');
        var step = plainNumber.split('.')[1];
        var fractionSize;
        if (!step) {
          fractionSize = 0;
        } else if (step.length === 1) {
          fractionSize = 1;
        } else {
          fractionSize = 2;
        }
        vm.onChange();
        element.val($filter('number')(plainNumber, fractionSize));
        return plainNumber;
      }
    });

    _angular2.default.element(element).on('change', function (e) {
      var val = this.value;
      if (val.split('.').length < 2) {
        this.value += '.00';
      }
      if (val.split('.')[0].length < 1) {
        this.value = '0' + this.value;
      }
      if (val.split('.')[1]) {
        if (val.split('.')[1].length < 1) {
          this.value += '00';
        } else if (val.split('.')[1].length < 2) {
          this.value += '0';
        }
      }
      vm.$setViewValue(this.value);
    });
  };
};

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }