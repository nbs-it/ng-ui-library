let vm;

class DemoController {
  constructor ($scope) {
    vm = this;
    vm.checkboxChecked = true;
    vm.numberSpinnerValue = 1;
    vm.openDialog = false;
    vm.closeDialog = function () {
      $scope.$broadcast('closeDialog');
    };
    vm.modalBoxIsShown = false;
    vm.inputCurrencyModel = '0.00';
    vm.customInputModel = 'some value';
  }
}

export default DemoController;
