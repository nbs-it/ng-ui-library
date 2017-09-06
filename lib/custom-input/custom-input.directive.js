'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _customInput = require('./custom-input.html');

var _customInput2 = _interopRequireDefault(_customInput);

require('./custom-input.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customInputModule = _angular2.default.module('customInput', []).directive('customInput', customInputDirective).name;

function customInputDirective() {
  return {
    transclude: {
      input: '?input'
    },
    scope: {
      type: '@',
      bindName: '@',
      bindId: '@',
      label: '@',
      model: '=',
      placeholder: '@',
      icon: '@',
      iconClass: '@',
      description: '@'
    },
    template: _customInput2.default,
    controller: ['$transclude', function ($transclude) {
      var vm = this;
      vm.$transclude = $transclude;
      console.log($transclude);
    }],
    controllerAs: 'vm',
    bindToController: true
  };
}

// customInputDirective.$inject = ['$transclude'];

exports.default = customInputModule;