import angular from 'angular';
import template from './custom-input.html';
import './custom-input.scss';

let customInputModule = angular.module('customInput', [])
  .directive('customInput', customInputDirective)
  .name;

function customInputDirective () {
  return {
    transclude: {
      input: '?input'
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
      description: '@'
    },
    template,
    controller: ['$transclude', function ($transclude) {
      let vm = this;
      vm.$transclude = $transclude;
      console.log($transclude);
    }],
    controllerAs: 'vm',
    bindToController: true
  };
}

// customInputDirective.$inject = ['$transclude'];

export default customInputModule;
