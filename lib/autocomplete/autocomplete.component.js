'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = require('./autocomplete.html');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _autocomplete3 = require('./autocomplete.controller');

var _autocomplete4 = _interopRequireDefault(_autocomplete3);

require('./autocomplete.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autocompleteComponent = {
  bindings: {},
  template: _autocomplete2.default,
  controller: _autocomplete4.default,
  controllerAs: 'vm'
};

exports.default = autocompleteComponent;