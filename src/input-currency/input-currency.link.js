import angular from 'angular';

export default function ($filter) {
  return function (scope, element, attr, ctrl) {
    var vm = ctrl;
    if (!vm) {
      return;
    }

    vm.max = Number(vm.max) || Infinity;
    vm.min = Number(vm.min) || 0;

    vm.onChange = function () {
      if (vm.$modelValue) {
        let value = vm.$modelValue;
        var maxSum = value.toString().split('.')[0].length < 6 && value <= vm.max;
        var minSum = vm.$modelValue !== 0 && value >= vm.min;
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

    angular.element(element).on('change', function (e) {
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
}
