'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _checkbox = require('./checkbox/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _numberSpinner = require('./numberSpinner/numberSpinner');

var _numberSpinner2 = _interopRequireDefault(_numberSpinner);

var _dialog = require('./dialog/dialog.directive');

var _dialog2 = _interopRequireDefault(_dialog);

var _modalBox = require('./modalBox/modalBox.directive');

var _modalBox2 = _interopRequireDefault(_modalBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commonModule = _angular2.default.module('app.common', [_checkbox2.default, _numberSpinner2.default, _dialog2.default, _modalBox2.default]).name;

exports.default = commonModule;