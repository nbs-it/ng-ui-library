let vm;

class DemoController {
  constructor ($scope, $q) {
    vm = this;
    vm.$q = $q;
    vm.checkboxChecked = true;
    vm.numberSpinnerValue = 1;
    vm.openDialog = false;
    vm.closeDialog = function () {
      $scope.$broadcast('closeDialog');
    };
    vm.modalBoxIsShown = false;
    vm.modalBoxWidth = '550px';
    vm.inputCurrencyModel = '0.00';
    vm.customInputModel = 'some value';
    vm.autoCompleteModel = 'משה';
    vm.autoCompleteHtml = '<span class="test" >{{item}}</span>';
  }
  autocompleteTest () {
    return vm.$q.resolve([1, 2, 3]);
  }
}

export default DemoController;
