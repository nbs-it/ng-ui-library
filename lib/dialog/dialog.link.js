'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($window, $timeout) {
  return function (scope, element, attr, ctrl) {
    var vm = ctrl;
    vm.isShown = false;
    vm.show = function () {
      vm.isShown = true;
      $timeout(function () {
        scope.$apply(function () {});
      });
      _angular2.default.element($window).on('keydown keypress', function (event) {
        if (event.which === 27) {
          // Escape key press.
          vm.hide();
          event.stopPropagation();
        }
      });
      _angular2.default.element($window).on('click', function (event) {
        if (event.target !== element && vm.closeByClickOutside !== false) {
          // click outside of the dialog.
          vm.hide();
        }
      });
      vm.off = scope.$root.$on('hideMenu', function () {
        vm.hide();
      });
    };
    vm.hide = function () {
      vm.isShown = false;
      $timeout(function () {
        scope.$apply(function () {});
      });
      _angular2.default.element($window).off('keydown keypress');
      _angular2.default.element($window).off('click');
      vm.off();
    };
    vm.toggle = function () {
      vm.isShown === true ? vm.hide() : vm.show();
    };
    vm.clickOnElement = function () {
      if (vm.closeByClick !== false) {
        vm.toggle();
      }
    };
  };
};

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }