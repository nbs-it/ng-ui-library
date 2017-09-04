class CheckboxController {
  constructor () {
    let vm = this;
    vm.$onInit = () => {
      vm.bindId = vm.bindId || vm.bindModel;
    };
  }
}

export default CheckboxController;
