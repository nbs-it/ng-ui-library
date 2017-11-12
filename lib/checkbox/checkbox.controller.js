"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckboxController = function CheckboxController() {
  var _this = this;

  _classCallCheck(this, CheckboxController);

  this.$onInit = function () {
    _this.bindId = _this.bindId || _this.model;
  };
};

exports.default = CheckboxController;