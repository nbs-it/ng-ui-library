import angular from 'angular';
import template from './custom-input.html';
import './custom-input.scss';
import sanitize from 'angular-sanitize';
import jQuery from './extend-highlight';

let customInputModule = angular.module('customInput', [sanitize])
  .directive('customInput', customInputDirective)
  .directive('compileTemplate', compileTemplate)

  .name;

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
      icon: '@',
      iconClass: '@',
      description: '@',
      typeInput: '=',
      arrayItems: '<',
      filter: '<',
      autoCompleteRow: '<'
    },
    template,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate',
      function ($transclude, $window, $timeout, $scope, $interpolate) {
        let vm = this;
        vm.$window = $window;
        vm.$timeout = $timeout;
        vm.$transclude = $transclude;
        vm.dialogOpen = false;

        vm.$window.jQuery = jQuery;
        $timeout(() => {
          if (vm.typeInput === 'autoComplete') {
            $scope.$watch('vm.model', (old, newValue) => {
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
                vm.itemsFiltered = vm.arrayItems.filter((item) => {
                  if (item.toString().indexOf(vm.model) !== -1) {
                    return item;
                  }
                });
              } else {
                vm.itemsFiltered = vm.arrayItems ? vm.arrayItems : [];
              }

              $timeout(() => {
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

function compileTemplate ($compile, $parse, $timeout) {
  return {

    link: function (scope, element, attr) {
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

export default customInputModule;
