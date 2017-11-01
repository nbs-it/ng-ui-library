import angular from 'angular';
import moment from 'moment';

let inputDateModule = angular.module('inputDate', [])
  .directive('inputDate', inputDateDirective)
  .name;

function inputDateDirective ($window) {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ctrl) {
      var vm = ctrl;
      if (!vm) {
        return;
      }

      vm.$formatters.unshift(function (a) {
        if (vm.$modelValue) {
          var date = moment(vm.$modelValue);
          if (!date._isValid) {
            return '';
          }
          return date.format('DD/MM/YYYY');
        }
      });
      vm.$parsers.unshift(function (viewValue) {
        if (viewValue && moment(viewValue, 'DD/MM/YYYY')._isValid) {
          return moment(viewValue, 'DD/MM/YYYY').format();
        }
      });
    }
  };
}
inputDateDirective.$inject = ['$window'];
export default inputDateModule;
