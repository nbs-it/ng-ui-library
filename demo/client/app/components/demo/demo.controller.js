let vm;

class DemoController {
  constructor () {
    vm = this;
    vm.checkboxChecked = true;
    vm.numberSpinnerValue = 1;
    vm.modalBoxIsShown = false;
    vm.inputCurrencyModel = '0.00';
    vm.customInputModel = 'some value';
  }
}

export default DemoController;
