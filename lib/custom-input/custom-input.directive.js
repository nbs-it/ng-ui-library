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

var _inputDate = require('../input-date/input-date.directive');

var _inputDate2 = _interopRequireDefault(_inputDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customInputModule = _angular2.default.module('customInput', [_angularSanitize2.default, _inputDate2.default]).directive('customInput', customInputDirective).directive('compileTemplate', compileTemplate).name;

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
      arrayItems: '<?',
      filter: '<?',
      autoCompleteRow: '<?'
    },
    template: _customInput2.default,
    controllerAs: 'vm',
    bindToController: true,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate', function ($transclude, $window, $timeout, $scope, $interpolate) {
      var vm = this;
      vm.$transclude = $transclude;
      vm.dialogOpen = false;
      $window.jQuery = _extendHighlight2.default;
      vm.getCurrentDate = function () {
        vm.model = new Date();
      };
      // for autoComplete
      vm.$onInit = function () {
        if (vm.type === 'autocomplete' || vm.type === 'auto-complete') {
          vm.type = 'autoComplete';
        }
        if (vm.type === 'autoComplete') {
          $scope.$watch('vm.model', function (old, newValue) {
            var configList = function configList(arrayItems) {
              vm.arrayItems = arrayItems;
              vm.itemsFiltered = [];
              if (!vm.model) {
                vm.dialogOpen = false;
                $window.jQuery('.row-autocomplete').unhighlight();
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
                $window.jQuery('.row-autocomplete').unhighlight().highlight([vm.model]);
              });
            };
            if (_angular2.default.isFunction(vm.arrayItems)) {
              var holdFunction = vm.arrayItems;
              return vm.arrayItems().then(configList).then(function () {
                vm.arrayItems = holdFunction;
              });
            } else {
              configList(vm.arrayItems);
            }
          });
        }
      };
    }]
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