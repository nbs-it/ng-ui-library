'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _dialog = require('./dialog.link');

var _dialog2 = _interopRequireDefault(_dialog);

var _dialog3 = require('./dialog.html');

var _dialog4 = _interopRequireDefault(_dialog3);

require('./dialog.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dialogModule = _angular2.default.module('dialog', []).directive('dialog', dialogDirective).name;

function dialogDirective($window, $timeout) {
  return {
    restrict: 'A',
    transclude: {
      'dialogContent': '?dialogContent'
    },
    scope: {
      text: '@',
      closeByClick: '<',
      closeByClickOutside: '<',
      closeIcon: '<',
      close: '='
    },
    template: _dialog4.default,
    controller: function controller() {
      var _this = this;

      if (this.close) {
        this.$onInit = function () {
          _this.close = _this.hide;
        };
      }
    },
    controllerAs: 'vm',
    bindToController: true,
    link: (0, _dialog2.default)($window, $timeout)
  };
}

dialogDirective.$inject = ['$window', '$timeout'];

exports.default = dialogModule;