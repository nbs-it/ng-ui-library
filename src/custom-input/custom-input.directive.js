'use strict';

Object.defineProperty(exports, '__esModule', {
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

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customInputModule = _angular2.default.module('customInput', [_angularSanitize2.default, _inputDate2.default]).directive('customInput', customInputDirective).directive('compileTemplate', compileTemplate).name;

function customInputDirective ($interpolate, $window, $compile) {
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
      tabIndex: '@',
      icon: '@',
      iconClass: '@',
      description: '@',
      arrayItems: '<?',
      filter: '<?',
      autoCompleteRow: '<?',
      propItemSelected: '<?'
    },
    template: _customInput2.default,
    controllerAs: 'vm',
    bindToController: true,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate', function ($transclude, $window, $timeout, $scope, $interpolate) {
      var vm = this;
      vm.$scope = $scope;
      vm.$transclude = $transclude;
      vm.dialogOpen = false;
      $window.jQuery = _extendHighlight2.default;
      vm.jQuery = $window.jQuery;
      vm.$timeout = $timeout;
      vm.queries = 0;
      vm.getCurrentDate = function () {
        vm.model = new Date();
      };
      // for autoComplete
      vm.$onInit = function () {
        vm.indexArrow = 0;
        var holdFunction;
        if (vm.type === 'autocomplete' || vm.type === 'auto-complete') {
          vm.type = 'autoComplete';
        }

        if (vm.type === 'autoComplete') {
          $scope.$watch('vm.model', function (old, newValue) {
            if (vm.autoCompleteNoQuery === true) {
              vm.autoCompleteNoQuery = false;
              return;
            }
            var configList = function configList (arrayItems) {
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
              if (vm.filter === true && typeof holdFunction === 'function') {
                vm.itemsFiltered = vm.arrayItems.filter(function (item) {
                  if (item.toString().indexOf(vm.model) !== -1) {
                    return item;
                  }
                });
              } else {
                vm.itemsFiltered = vm.arrayItems ? vm.arrayItems : [];
              }
              $timeout(function () {
                // $window.jQuery('.row-autocomplete').unhighlight().highlight([vm.model]);
              });
            };
            if (_angular2.default.isFunction(vm.arrayItems)) {
              holdFunction = vm.arrayItems;
              vm.queries += 1;
              if (vm.existQuery) {
                vm.newQuery = true;
              }
              vm.existQuery = true;
              $timeout(() => {
                vm.queries -= 1;
                if (vm.queries > 0) {
                  return;
                }
                vm.existQuery = false;
                return vm.arrayItems().then(configList).then(function () {
                  if (vm.autoCompleteRow) {
                    vm.rowsHtmlData = vm.getRowsHtmlData();
                  }
                  vm.arrayItems = holdFunction;
                });
              }, 400);
            } else {
              configList(vm.arrayItems);
            }
          });
        }
      };
      vm.selectObject = function (item, more) {
        vm.model = item;
        if (vm.propItemSelected) {
          vm.model = item[vm.propItemSelected];
        }
        vm.autoCompleteNoQuery = true;
      };
      vm.getRowsHtmlData = function () {
        function getHtmlBinding (item, rowHtml) {
          function getValue (object, path) {
            return path.split('.').reduce((res, prop) => res[prop], object);
          }
          while (rowHtml.match(/\{\{(.*)\}\}/i)) {
            let matchBind = rowHtml.match(/\{\{(.*)\}\}/i)[0];
            let objectPath = matchBind.replace(/\}\}|\{\{/g, '').split('.');
            let path = objectPath.splice(1, objectPath.length).join('.');
            rowHtml = rowHtml.replace(/\{\{(.*)\}\}/i, getValue(item, path));
          }
          return rowHtml;
        }
        let html = ``;
        if (vm.itemsFiltered && vm.itemsFiltered[0]) {
          vm.itemsFiltered.forEach((item, index) => {
            html += `<div
              class="row-autocomplete"
              ng-class="{'selected-arrow': vm.indexArrow == ` + index + `}"
              ng-click="vm.selectObject(item)">`;
            let rowHtml = _angular.copy(vm.autoCompleteRow);
            rowHtml = getHtmlBinding(item, rowHtml);
            html += rowHtml + '</div>';
          });
        }
        return html;
      };
    }],
    link: function link (scope, element, attr, ctrl) {
      let vm = ctrl;
      element.bind('keydown keypress', function (event) {
        let autocompleteModal = vm.jQuery('.autocomplete .dialog-wrap');
        let rowAutocomplete = vm.jQuery('.row-autocomplete').first();
        if (event.which === 13) {
          vm.selectObject(vm.itemsFiltered[vm.indexArrow]);
          vm.modalClosed();
        }
        if (event.which === 40) {
          vm.$scope.$apply(function () {
            if (vm.indexArrow < vm.itemsFiltered.length - 1) {
              vm.indexArrow += 1;
              autocompleteModal.css('max-height').replace(/^\D+/g, '');
              vm.$timeout(() => {
                if (((rowAutocomplete.outerHeight(true) * vm.indexArrow) + 30) > autocompleteModal.height()) {
                  autocompleteModal.scrollTop(rowAutocomplete.outerHeight(true) + autocompleteModal.scrollTop());
                }
              }, 50);
            }
            vm.selectObject(vm.itemsFiltered[vm.indexArrow]);
          });
        }
        if (event.which === 38) {
          if (vm.indexArrow > 0) {
            vm.$scope.$apply(function () {
              vm.indexArrow -= 1;

              vm.$timeout(() => {
                if (((vm.itemsFiltered.length * rowAutocomplete.outerHeight(true)) - (vm.indexArrow * rowAutocomplete.outerHeight(true))) > autocompleteModal.height()) {
                  autocompleteModal.scrollTop(autocompleteModal.scrollTop() - rowAutocomplete.outerHeight(true));
                }
              }, 50);
              vm.selectObject(vm.itemsFiltered[vm.indexArrow]);
            });
          }
        }
      });
    }
  };
}

customInputDirective.$inject = ['$interpolate', '$window', '$compile'];

function compileTemplate ($compile, $parse, $timeout) {
  return {
    restrict: 'A',
    replace: true,
    link: function link (scope, element, attr) {
      scope.$watch(function () {
        return attr.directive;
      }, function (val) {
        if (val) {
          element.empty();
          var directive = $compile(_angular2.default.element(val))(scope);
          element.append(directive);
        }
      });
    }
  };
}

compileTemplate.$inject = ['$compile', '$parse', '$timeout'];

exports.default = customInputModule;
