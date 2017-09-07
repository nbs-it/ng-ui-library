class CheckboxController {
  constructor () {
    let vm = this;
    vm.$onInit = () => {
      vm.bindId = vm.bindId || vm.model;
    };
  }
}

export default CheckboxController;
