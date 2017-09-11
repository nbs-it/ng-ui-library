let vm;

class ExpInputController {
  constructor ($scope, $element) {
    vm = this;
    vm.$onInit = function () {
      if (vm.datepicker !== false) {
        vm.datepicker = true;

        vm.datePickerOnChoose = function () {
          vm.creditCardForm.expMonth.$setDirty();
        };
      }
      let expMonthInput = $element[0].querySelector('.expMonth-input');
      let expYearInput = $element[0].querySelector('.expYear-input');
      vm.expMonthChange = function () { // skip to next field
        if (expMonthInput.value.length > 1) {
          expYearInput.focus();
          expYearInput.select();
        }
      };
      angular.element(expMonthInput).on('change', function (e) { // one number in expMonth
        var val = this.value;
        if (val.length === 1) {
          vm.monthModel = '0' + val;
        }
      });
    };
  }
}

export default ExpInputController;
