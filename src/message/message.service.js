import angular from 'angular';

class messageService {
  constructor ($rootScope, $compile, $window, $timeout) {
    let vm = this;
    vm.$rootScope = $rootScope;
    vm.$compile = $compile;
    vm.$window = $window;
    vm.$timeout = $timeout;

    vm.isShown = false;
    vm.isShownCheck = function () {
      return vm.isShown;
    };

    vm.show = function (properties) {
      vm.properties = {
        buttons: true,
        buttonCancel: false,
        buttonConfirm: false,
        buttonConfirmFunction: vm.hide,
        icon: false,
        align: 'center',
        close: true,
        customHtml: null
      };
      for (var key in properties) {
        vm.properties[key] = properties[key];
      }
      vm.isShown = true;
    };

    vm.hide = function () {
      vm.isShown = false;
    };

    vm.toggle = function () {
      vm.isShown === true ? vm.hide() : vm.show();
    };

    vm.properties = {};

    vm.setup();
    return vm;
  }

  setup () {
    let vm = this;

    var msgElement = document.createElement('message');
    vm.$window.document.body.append(msgElement);

    let scope = vm.$rootScope.$new();
    vm.$timeout(function () {
      vm.$compile(msgElement)(scope);
    });
  }
}

messageService.$inject = ['$rootScope', '$compile', '$window', '$timeout'];

let messageModule = angular.module('messageService', [])
  .service('messageService', messageService)
  .name;

export default messageModule;
