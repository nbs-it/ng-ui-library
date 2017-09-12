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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customInputModule = _angular2.default.module('customInput', [_angularSanitize2.default]).directive('customInput', customInputDirective).directive('compileTemplate', compileTemplate).name;

function customInputDirective($interpolate) {
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
    controller: ['$transclude', '$window', '$timeout', '$scope', '$compile', '$interpolate', function ($transclude, $window, $timeout, $scope, $compile, $interpolate) {
      var vm = this;
      vm.$window = $window;
      vm.$timeout = $timeout;
      vm.$transclude = $transclude;
      vm.dialogOpen = false;
      $timeout(function () {
        // vm.autoCompleteRow = $interpolate(vm.autoCompleteRow)();
        if (vm.typeInput === 'autoComplete') {
          $scope.$watch('vm.model', function (old, newValue) {
            console.log(vm.autoCompleteRow);
            vm.dialogOpen = true;
            if (!vm.model || vm.model === '') {
              vm.dialogOpen = false;
            }
            if (vm.filter === true) {
              vm.itemsFiltered = vm.arrayItems.filter(function (item) {
                console.log(item);
                if (item.toString().indexOf(vm.model) !== -1) {
                  return item;
                }
              });
            } else {
              vm.itemsFiltered = vm.arrayItems ? vm.arrayItems : [];
            }
          });
        }
      });
    }],
    controllerAs: 'vm',
    bindToController: true
  };
}

// customInputDirective.$inject = ['$transclude'];

customInputDirective.$inject = ['$interpolate'];

function compileTemplate($compile, $parse) {
  return {
    link: function link(scope, element, attr) {
      var parsed = $parse(attr.ngBindHtml);
      function getStringValue() {
        return (parsed(scope) || '').toString();
      }
      // Recompile if the template changes
      scope.$watch(getStringValue, function () {
        $compile(element, null, -9999)(scope); // The -9999 makes it skip directives so that we do not recompile ourselves
      });
    }
  };
}
compileTemplate.$inject = ['$compile', '$parse'];

exports.default = customInputModule;