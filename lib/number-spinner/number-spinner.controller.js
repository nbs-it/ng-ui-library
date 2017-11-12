'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberSpinnerController = function () {
  function NumberSpinnerController($scope, $timeout) {
    _classCallCheck(this, NumberSpinnerController);

    var vm = this;
    vm.input = _angular2.default.element(document.getElementById('number-spinner-number-input'));
    $scope.$watch('vm.disabled', function () {
      if (vm.disabled) {
        vm.value = 1;
      }
    });
  }

  _createClass(NumberSpinnerController, [{
    key: '$onInit',
    value: function $onInit() {
      this.value = this.value || 1;
      this.totalValue = this.totalValue || 0;
      this.currencyIcon = this.currencyIcon || '₪';
    }
  }, {
    key: 'plus',
    value: function plus() {
      if (!this.disabled && this.value < 99) {
        this.value++;
      }
    }
  }, {
    key: 'minus',
    value: function minus() {
      if (!this.disabled && this.value > 1) {
        this.value--;
      }
    }
  }, {
    key: 'change',
    value: function change() {
      if (isNaN(this.value) || this.value === '') {
        this.value = 1;
      }
    }
  }]);

  return NumberSpinnerController;
}();

exports.default = NumberSpinnerController;