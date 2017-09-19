let vm;

class ModalBoxController {
  constructor ($transclude) {
    vm = this;
    vm.$transclude = $transclude;
  }

  $onInit () {
    let width = vm.width
    if (!width) {
      width = '';
    } else if (width.search('px') < 0) {
      width += 'px';
    }
    vm.modalBoxWidth = width;
  }
}

export default ModalBoxController;
