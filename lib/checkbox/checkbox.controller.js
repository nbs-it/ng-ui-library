"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckboxController = function CheckboxController() {
  _classCallCheck(this, CheckboxController);

  var vm = this;
  vm.$onInit = function () {
    vm.bindId = vm.bindId || vm.model;
  };
};

exports.default = CheckboxController;