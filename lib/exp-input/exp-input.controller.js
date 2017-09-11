'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vm = void 0;

var ExpInputController = function ExpInputController($scope, $element) {
  _classCallCheck(this, ExpInputController);

  vm = this;
  vm.$onInit = function () {
    if (vm.datepicker !== false) {
      vm.datepicker = true;

      vm.datePickerOnChoose = function () {
        vm.creditCardForm.expMonth.$setDirty();
      };
    }
    var expMonthInput = $element[0].querySelector('.expMonth-input');
    var expYearInput = $element[0].querySelector('.expYear-input');
    vm.expMonthChange = function () {
      // skip to next field
      if (expMonthInput.value.length > 1) {
        expYearInput.focus();
        expYearInput.select();
      }
    };
    angular.element(expMonthInput).on('change', function (e) {
      // one number in expMonth
      var val = this.value;
      if (val.length === 1) {
        vm.monthModel = '0' + val;
      }
    });
  };
};

exports.default = ExpInputController;