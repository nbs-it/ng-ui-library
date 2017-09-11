let vm;

class ExpDatepickerController {
  constructor ($scope, $rootScope, $element, $timeout) {
    vm = this;
    vm.selectedMonth = null;
    vm.selectedYear = null;
    vm.list = {
      months: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
      ],
      years: [
        '17', '18', '19', '20', '21', '22'
      ]
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
  }
}

export default ExpDatepickerController;
