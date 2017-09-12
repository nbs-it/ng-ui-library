'use strict';

var _autocomplete = require('./autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _autocomplete3 = require('./autocomplete.controller');

var _autocomplete4 = _interopRequireDefault(_autocomplete3);

var _autocomplete5 = require('./autocomplete.component');

var _autocomplete6 = _interopRequireDefault(_autocomplete5);

var _autocomplete7 = require('./autocomplete.html');

var _autocomplete8 = _interopRequireDefault(_autocomplete7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Autocomplete', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_autocomplete2.default));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _autocomplete4.default();
    };
  }));

  describe('Module', function () {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function () {
    // controller specs
    it('has a name property [REMOVE]', function () {
      // erase if removing this.name from the controller
      var controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', function () {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', function () {
      expect(_autocomplete8.default).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _autocomplete6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_autocomplete8.default);
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_autocomplete4.default);
    });
  });
});