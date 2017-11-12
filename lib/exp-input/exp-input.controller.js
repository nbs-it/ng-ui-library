'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExpInputController = function () {
  function ExpInputController($scope, $element) {
    _classCallCheck(this, ExpInputController);

    this.$scope = $scope;
    this.$element = $element;
  }

  _createClass(ExpInputController, [{
    key: '$onInit',
    value: function $onInit() {
      if (this.datepicker !== false) {
        this.datepicker = true;

        this.datePickerOnChoose = function () {
          this.creditCardForm.expMonth.$setDirty();
        };
      }
      var expMonthInput = this.$element[0].querySelector('.expMonth-input');
      var expYearInput = this.$element[0].querySelector('.expYear-input');
      this.expMonthChange = function () {
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
          this.monthModel = '0' + val;
        }
      });
    }
  }]);

  return ExpInputController;
}();

exports.default = ExpInputController;