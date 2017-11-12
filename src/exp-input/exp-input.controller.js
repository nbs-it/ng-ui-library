
class ExpInputController {
  constructor ($scope, $element) {
    this.$scope = $scope;
    this.$element = $element;
  }

  $onInit () {
    if (this.datepicker !== false) {
      this.datepicker = true;

      this.datePickerOnChoose = function () {
        this.creditCardForm.expMonth.$setDirty();
      };
    }
    let expMonthInput = this.$element[0].querySelector('.expMonth-input');
    let expYearInput = this.$element[0].querySelector('.expYear-input');
    this.expMonthChange = function () { // skip to next field
      if (expMonthInput.value.length > 1) {
        expYearInput.focus();
        expYearInput.select();
      }
    };
    angular.element(expMonthInput).on('change', function (e) { // one number in expMonth
      var val = this.value;
      if (val.length === 1) {
        this.monthModel = '0' + val;
      }
    });
  }
}

export default ExpInputController;
