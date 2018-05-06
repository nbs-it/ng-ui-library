import angular from 'angular';

let compileModule = angular.module('compile', [])
  .directive('compile', compileDirective)
  .name;

function compileDirective ($compile, $sce) {
  return {
    restrict: 'A',
    replace: true,
    controller: function () { },
    link: function (scope, element, attr, vm) {
      scope.$watch(() => {
        return attr.compile;
      }, (val) => {
        if (val) {
          var directive = $compile(angular.element(val))(scope);
          element.append(directive);
        }
      });
    }
  };
}

compileDirective.$inject = ['$compile', '$sce'];

export default compileModule;
