'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _customInput = require('./custom-input.html');

var _customInput2 = _interopRequireDefault(_customInput);

require('./custom-input.scss');

var _angularSanitize = require('angular-sanitize');

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

var _extendHighlight = require('./extend-highlight');

var _extendHighlight2 = _interopRequireDefault(_extendHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customInputModule = _angular2.default.module('customInput', [_angularSanitize2.default]).directive('customInput', customInputDirective).directive('compileTemplate', compileTemplate).name;

function customInputDirective($interpolate, $window, $compile) {
  return {
    transclude: {
      input: '?input',
      autocompleteContent: '?autocompleteContent',
      test: '?test'
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
      description: '@',
      typeInput: '=',
      arrayItems: '<',
      filter: '<',
      autoCompleteRow: '<'
    },
    template: _customInput2.default,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate', function ($transclude, $window, $timeout, $scope, $interpolate) {
      var vm = this;
      vm.$window = $window;
      vm.$timeout = $timeout;
      vm.$transclude = $transclude;
      vm.dialogOpen = false;

      vm.$window.jQuery = _extendHighlight2.default;
      $timeout(function () {
        if (vm.typeInput === 'autoComplete') {
          $scope.$watch('vm.model', function (old, newValue) {
            vm.itemsFiltered = [];
            if (!vm.model) {
              vm.dialogOpen = false;
              vm.$window.jQuery('.row-autocomplete').unhighlight();
              return;
            }
            vm.dialogOpen = true;

            if (!vm.model || vm.model === '') {
              vm.dialogOpen = false;
            }
            if (vm.filter === true) {
              vm.itemsFiltered = vm.arrayItems.filter(function (item) {
                if (item.toString().indexOf(vm.model) !== -1) {
                  return item;
                }
              });
            } else {
              vm.itemsFiltered = vm.arrayItems ? vm.arrayItems : [];
            }

            $timeout(function () {
              vm.$window.jQuery('.row-autocomplete').unhighlight();
              vm.$window.jQuery('.row-autocomplete').highlight([vm.model]);
            });
          });
        }
      });
    }],
    controllerAs: 'vm',
    bindToController: true
  };
}

customInputDirective.$inject = ['$interpolate', '$window', '$compile'];

function compileTemplate($compile, $parse, $timeout) {
  return {

    link: function link(scope, element, attr) {
      var num = $parse(attr.num);
      var model = $parse(attr.model);

      // Recompile if the template changes
      scope.$watch(model, function () {
        $compile(element, 20, -(num(scope) || '').toString())(scope);
        // The -9999 makes it skip directives so that we do not recompile ourselves
      });
    }
  };
}

compileTemplate.$inject = ['$compile', '$parse', '$timeout'];

exports.default = customInputModule;