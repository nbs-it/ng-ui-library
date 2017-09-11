'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vm = void 0;

var ExpDatepickerController = function ExpDatepickerController($scope, $rootScope, $element, $timeout) {
  _classCallCheck(this, ExpDatepickerController);

  vm = this;
  vm.selectedMonth = null;
  vm.selectedYear = null;
  vm.list = {
    months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    years: ['17', '18', '19', '20', '21', '22']
  };
  vm.selectMonth = function (event) {
    vm.month = event.target.innerText;
    vm.selectedMonth = vm.month;
    vm.choose();
  };
  vm.selectYear = function () {
    vm.year = event.target.textContent;
    vm.selectedYear = vm.year;
    vm.choose();
  };
  vm.close = function () {
    $scope.$broadcast('closeDialog');
    vm.selectedMonth = null;
    vm.selectedYear = null;
  };
  vm.choose = function () {
    $timeout(function () {
      vm.onChoose({});
    });
    if (vm.selectedMonth != null && vm.selectedYear != null) {
      vm.close();
    }
  };
};

exports.default = ExpDatepickerController;