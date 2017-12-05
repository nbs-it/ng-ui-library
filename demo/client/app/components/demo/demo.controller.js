let vm;

class DemoController {
  constructor ($scope, $q, messageService) {
    vm = this;
    vm.$q = $q;
    vm.messageService = messageService;
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

    vm.customInputErrorMessage = { required: 'שדה לא יכול להיות ריק' };

    vm.messageProperties = {
      close: true,
      buttons: true,
      text: 'שולח לגבייה...',
      icon: 'fa fa-spinner fa-pulse',
      customHtml: `<div style="background:rgba(0, 0, 0, 0.43);color:#fff;margin-top:20px;border-radius:8px;min-width:350px;">
  <div style="display:inline-block;font-size: 60px;">
  1.<span style="font-size:40px">00</span>
  </div>
  <span style="display:inline-block;font-size:30px;font-weight:100;margin-right:5px">₪</span>
</div>`
    };
  }

  showMessage () {
    vm.messageService.show({
      close: vm.messageProperties.close,
      buttons: vm.messageProperties.buttons,
      icon: vm.messageProperties.icon,
      text: vm.messageProperties.text,
      customHtml: vm.messageProperties.customHtml
    });
  }

  autocompleteTest () {
    return vm.$q.resolve([1, 2, 3]);
  }
}

export default DemoController;
