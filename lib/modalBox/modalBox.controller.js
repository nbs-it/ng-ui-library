"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vm = void 0;

var ModalBoxController = function ModalBoxController($transclude) {
  _classCallCheck(this, ModalBoxController);

  vm = this;
  vm.$transclude = $transclude;
};

exports.default = ModalBoxController;