'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _autocomplete = require('./autocomplete.component');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autocompleteModule = _angular2.default.module('autocomplete', [_angularUiRouter2.default]).component('autocomplete', _autocomplete2.default).name;

exports.default = autocompleteModule;