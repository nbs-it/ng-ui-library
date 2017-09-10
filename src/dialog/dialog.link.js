import angular from 'angular';

export default function ($window, $timeout) {
  return function (scope, element, attr, ctrl) {
    var vm = ctrl;
    vm.isShown = false;
    vm.show = function () {
      vm.isShown = true;
      $timeout(function () {
        scope.$apply(function () { });
      });
      angular.element($window).on('keydown keypress', function (event) {
        if (event.which === 27) { // Escape key press.
          vm.hide();
          event.stopPropagation();
        }
      });
      angular.element($window).on('click', function (event) {
        if (event.target !== element && vm.closeByClickOutside !== false) { // click outside of the dialog.
          vm.hide();
        }
      });
      vm.off = scope.$on('closeDialog', function () {
        vm.hide();
      });
    };
    vm.hide = function () {
      vm.isShown = false;
      $timeout(function () {
        scope.$apply(function () { });
      });
      angular.element($window).off('keydown keypress');
      angular.element($window).off('click');
      vm.off();
    };
    if (close in attr) {
      vm.close = vm.hide;
    }
    vm.toggle = function () {
      vm.isShown === true ? vm.hide() : vm.show();
    };
    vm.clickOnElement = function () {
      if (vm.closeByClick !== false) {
        vm.toggle();
      }
    };
  };
}
