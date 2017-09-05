import angular from 'angular';
import template from './modalBox.html';
import controller from './modalBox.controller';
import link from './modalBox.link';
import './modalBox.scss';

let modalBoxModule = angular.module('modalBox', [])

  .directive('modalBox', modalBoxDirective)
  .name;

function modalBoxDirective ($window, $timeout) {
  return {
    restrict: 'A',
    transclude: {
      'modalBoxHeader': '?modalBoxHeader',
      'modalBoxContent': '?modalBoxContent',
      'modalBoxFooter': '?modalBoxFooter'
    },
    scope: {
      closeOption: '@',
      close: '=?',
      open: '=',
      perfectScrollbar: '@'
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    link: link($window, $timeout)
  };
}

modalBoxDirective.$inject = ['$window', '$timeout'];
controller.$inject = ['$transclude'];

export default modalBoxModule;
