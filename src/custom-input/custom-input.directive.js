import angular from 'angular';
import template from './custom-input.html';
import './custom-input.scss';
import sanitize from 'angular-sanitize';

let customInputModule = angular.module('customInput', [sanitize])
  .directive('customInput', customInputDirective)
  .directive('compileTemplate', compileTemplate)
  .name;

function customInputDirective ($interpolate) {
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
    template,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$compile', '$interpolate',
      function ($transclude, $window, $timeout, $scope, $compile, $interpolate) {
        let vm = this;
        vm.$window = $window;
        vm.$timeout = $timeout;
        vm.$transclude = $transclude;
        vm.dialogOpen = false;
        $timeout(() => {
          // vm.autoCompleteRow = $interpolate(vm.autoCompleteRow)();
          if (vm.typeInput === 'autoComplete') {
            $scope.$watch('vm.model', (old, newValue) => {
              console.log(vm.autoCompleteRow);
              vm.dialogOpen = true;
              if (!vm.model || vm.model === '') {
                vm.dialogOpen = false;
              }
              if (vm.filter === true) {
                vm.itemsFiltered = vm.arrayItems.filter((item) => {
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

function compileTemplate ($compile, $parse) {
  return {
    link: function (scope, element, attr) {
      var parsed = $parse(attr.ngBindHtml);
      function getStringValue () {
        return (parsed(scope) || '').toString();
      }
          // Recompile if the template changes
      scope.$watch(getStringValue, function () {
        $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
      });
    }
  };
}
compileTemplate.$inject = ['$compile', '$parse'];

export default customInputModule;
