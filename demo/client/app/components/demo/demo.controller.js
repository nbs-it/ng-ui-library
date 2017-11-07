let vm;
let $window;
let $timeout;

class DemoController {
  constructor ($scope, _$window, _$timeout, $q) {
    vm = this;
    $window = _$window;
    $timeout = _$timeout;
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

  $onInit () {
    $timeout(function () {
      $window.setErrorMessage(vm.demoForm.customInputField, 'required', 'שדה לא יכול להיות ריק');
    });
  }

  autocompleteTest () {
    return vm.$q.resolve([1, 2, 3]);
  }
}

export default DemoController;
