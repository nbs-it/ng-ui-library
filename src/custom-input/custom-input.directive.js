import angular from 'angular';
import template from './custom-input.html';
import './custom-input.scss';
import './autocomplete.scss';
import sanitize from 'angular-sanitize';
import jQuery from './extend-highlight';
import { autocompleteCtrl, autocompleteLink } from './autocomplete';
import validation from './validation';
import compileTemplate from './compile-template';
import inputDate from '../input-date/input-date.directive';

let customInputModule = angular.module('customInput', [sanitize, inputDate])
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
      required: '<?',
      model: '=?',
      placeholder: '@',
      tabIndex: '@',
      icon: '@',
      iconClass: '@',
      formField: '<?',
      description: '@',
      arrayItems: '<?',
      filter: '<?',
      autoCompleteRow: '<?',
      propItemSelected: '<?'
    },
    template,
    controllerAs: 'vm',
    bindToController: true,
    controller: ['$transclude', '$window', '$timeout', '$scope', '$interpolate', function ($transclude, $window, $timeout, $scope, $interpolate) {
      var vm = this;
      vm.$scope = $scope;
      vm.$transclude = $transclude;
      vm.dialogOpens = false;
      $window.jQuery = vm.jQuery = jQuery;
      vm.$timeout = $timeout;
      vm.queries = 0;

      $window.setErrorMessage = function (formField, filedName, message) {
        if (!angular.isObject(formField.$errorMsg)) {
          formField.$errorMsg = {};
        }
        formField.$errorMsg[filedName] = message;
      };

      vm.getCurrentDate = function () {
        vm.model = new Date();
      };

      vm.defaultErrorMsg = {
        required: 'שדה חובה',
        minlength: 'תוכן קצר מידי',
        maxlength: 'תוכן ארוך מידי',
        pattern: 'תוכן לא תקין'
      };

      vm.$onInit = function () {
        autocompleteCtrl(vm, $scope, $window, $timeout);
        validation(vm);
      };
    }],
    link: function (scope, element, attr, ctrl) {
      autocompleteLink(scope, element, attr, ctrl);
    }
  };
}

customInputDirective.$inject = ['$interpolate', '$window', '$compile'];

export default customInputModule;
