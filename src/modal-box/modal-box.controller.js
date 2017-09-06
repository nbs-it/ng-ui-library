let vm;

class ModalBoxController {
  constructor ($transclude) {
    vm = this;
    vm.$transclude = $transclude;
  }
}

export default ModalBoxController;
