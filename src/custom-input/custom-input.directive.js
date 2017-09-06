import angular from 'angular';
import template from './custom-input.html';
import './custom-input.scss';

let customInputModule = angular.module('customInput', [])
  .directive('customInput', customInputDirective)
  .name;

function customInputDirective () {
  return {
    transclude: true,
    scope: {
      type: '@',
      name: '@',
      label: '@',
      model: '=',
      placeholder: '@',
      icon: '@',
      iconClass: '@',
      description: '@'
    },
    template,
    controller: function () { },
    controllerAs: 'vm',
    bindToController: true
  };
}

// customInputDirective.$inject = ['$window', '$timeout'];

export default customInputModule;
