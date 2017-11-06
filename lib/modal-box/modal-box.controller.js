'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vm = void 0;

var ModalBoxController = function () {
  function ModalBoxController($transclude) {
    _classCallCheck(this, ModalBoxController);

    vm = this;
    vm.$transclude = $transclude;
  }

  _createClass(ModalBoxController, [{
    key: '$onInit',
    value: function $onInit() {
      var width = vm.width;
      if (!width) {
        width = '';
      } else if (!isNaN(width)) {
        width += 'px';
      }
      vm.modalBoxWidth = width;

      var height = vm.height;
      if (!height) {
        height = '';
      } else if (!isNaN(height)) {
        height += 'px';
      }
      vm.modalBoxHeight = height;
    }
  }]);

  return ModalBoxController;
}();

exports.default = ModalBoxController;