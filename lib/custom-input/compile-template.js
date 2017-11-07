'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function compileTemplate($compile, $parse, $timeout) {
  return {
    restrict: 'A',
    replace: true,
    link: function link(scope, element, attr) {
      scope.$watch(function () {
        return attr.directive;
      }, function (val) {
        if (val) {
          element.empty();
          var directive = $compile(angular.element(val))(scope);
          element.append(directive);
        }
      });
    }
  };
}

compileTemplate.$inject = ['$compile', '$parse', '$timeout'];

exports.default = compileTemplate;