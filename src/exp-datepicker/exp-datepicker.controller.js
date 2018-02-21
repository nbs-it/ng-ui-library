class ExpDatepickerController {
  constructor ($scope, $rootScope, $element, $timeout) {
    this.selectedMonth = null;
    this.selectedYear = null;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.list = {
      months: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
      ],
      years: [
        '18', '19', '20', '21', '22', '23', '24', '25'
      ]
    };
  }

  selectMonth (event) {
    this.month = event.target.innerText;
    this.selectedMonth = this.month;
    this.choose();
  }

  selectYear () {
    this.year = event.target.textContent;
    this.selectedYear = this.year;
    this.choose();
  }

  close () {
    this.$scope.$broadcast('closeDialog');
    this.selectedMonth = null;
    this.selectedYear = null;
  }

  choose () {
    let vm = this;
    this.$timeout(function () {
      vm.onChoose({});
    });
    if (vm.selectedMonth != null && vm.selectedYear != null) {
      vm.close();
    }
  }
}

export default ExpDatepickerController;
