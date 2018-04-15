export default function ($scope, $rootScope, $element, $timeout) {
  let vm;

  class ExpDatepickerController {
    constructor () {
      vm = this;
      vm.selectedMonth = null;
      vm.selectedYear = null;
      vm.$scope = $scope;
      vm.$timeout = $timeout;
      vm.list = {
        months: [
          '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
        ],
        years: [
          '18', '19', '20', '21', '22', '23', '24', '25'
        ]
      };
    }

    selectMonth (event) {
      vm.month = event.target.innerText;
      vm.selectedMonth = vm.month;
      vm.choose();
    }

    selectYear () {
      vm.year = event.target.textContent;
      vm.selectedYear = vm.year;
      vm.choose();
    }

    close () {
      vm.$scope.$broadcast('closeDialog');
      vm.selectedMonth = null;
      vm.selectedYear = null;
    }

    choose () {
      vm.$timeout(function () {
        vm.onChoose({});
      });
      if (vm.selectedMonth != null && vm.selectedYear != null) {
        vm.close();
      }
    }
  }

  return new ExpDatepickerController();
}
