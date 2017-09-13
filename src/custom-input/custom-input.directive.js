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
      arrayItems: '<?',
      filter: '<?',
      autoCompleteRow: '<?'
    },
    template,
    controllerAs: 'vm',
    bindToController: true,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate',
      function ($transclude, $window, $timeout, $scope, $interpolate) {
        let vm = this;
        vm.$transclude = $transclude;
        vm.dialogOpen = false;
        $window.jQuery = jQuery;

        // for autoComplete
        vm.$onInit = () => {
          if (vm.type === 'autocomplete' || vm.type === 'auto-complete') {
            vm.type = 'autoComplete';
          }
          if (vm.type === 'autoComplete') {
            $scope.$watch('vm.model', (old, newValue) => {
              let configList = (arrayItems) => {
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
                  vm.itemsFiltered = vm.arrayItems.filter((item) => {
                    if (item.toString().indexOf(vm.model) !== -1) {
                      return item;
                    }
                  });
                } else {
                  vm.itemsFiltered = vm.arrayItems ? vm.arrayItems : [];
                }

                $timeout(() => {
                  $window.jQuery('.row-autocomplete').unhighlight().highlight([vm.model]);
                });
              };
              if (angular.isFunction(vm.arrayItems)) {
                let holdFunction = vm.arrayItems;
                return vm.arrayItems().then(configList).then(() => {
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
