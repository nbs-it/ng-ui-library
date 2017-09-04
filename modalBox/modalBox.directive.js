import angular from 'angular';
import template from './modalBox.html';
import controller from './modalBox.controller';
import './modalBox.scss';

let modalBoxModule = angular.module('modalBox', [])

  .directive('modalBox', modalBoxDirective)
  .name;

function modalBoxDirective ($window, $timeout) {
  return {
    restrict: 'A',
    transclude: {
      'modalBoxHeader': '?',
      'modalBoxContent': '?',
      'modalBoxFooter': '?'
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
    link: function (scope, element, attr, ctrl) {
      var vm = ctrl;

      vm.close = function () {
        vm.hide();
      };

      if (vm.open) {
        vm.isShown = true;
      } else {
        vm.isShown = false;
      }
      if (!vm.closeOption) {
        vm.closeOption = true;
      }
      vm.show = function () {
        vm.isShown = true;
        $timeout(function () {
          scope.$apply(function () { });
          angular.element(element[0].getElementsByClassName('modal-box')).on('click', function (event) {
            if (event.target === event.currentTarget && vm.closeOption !== 'false') { // click outside of the modal.
              vm.hide();
            }
          });
        });
        angular.element($window).on('keydown keypress', function (event) {
          if (event.which === 27 && vm.closeOption !== 'false') { // Escape key press.
            vm.hide();
            event.stopPropagation();
          }
        });
      };
      vm.hide = function () {
        vm.isShown = false;
        if (vm.open) {
          vm.open = false;
        }
        $timeout(function () {
          scope.$apply(function () { });
        });
        angular.element($window).off('keydown keypress');
        angular.element(element[0].getElementsByClassName('modal-box')).off('click');
      };
      vm.toggle = function () {
        vm.isShown === true ? vm.hide() : vm.show();
      };
      scope.$on('modalBoxClose', function () {
        vm.hide();
      });
    }
  };
}

modalBoxDirective.$inject = ['$window', '$timeout'];
controller.$inject = ['$transclude'];

export default modalBoxModule;
