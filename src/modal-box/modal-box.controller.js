let vm;

class ModalBoxController {
  constructor ($transclude) {
    vm = this;
    vm.$transclude = $transclude;
  }

  $onInit () {
    let width = vm.width;
    if (!width) {
      width = '';
    } else if (!isNaN(width)) {
      width += 'px';
    }
    vm.modalBoxWidth = width;

    let height = vm.height;
    if (!height) {
      height = '';
    } else if (!isNaN(height)) {
      height += 'px';
    }
    vm.modalBoxHeight = height;
  }
}

export default ModalBoxController;
