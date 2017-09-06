'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _checkbox = require('./checkbox/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _numberSpinner = require('./number-spinner/number-spinner');

var _numberSpinner2 = _interopRequireDefault(_numberSpinner);

var _dialog = require('./dialog/dialog.directive');

var _dialog2 = _interopRequireDefault(_dialog);

var _modalBox = require('./modal-box/modal-box.directive');

var _modalBox2 = _interopRequireDefault(_modalBox);

var _inputCurrency = require('./input-currency/input-currency.directive');

var _inputCurrency2 = _interopRequireDefault(_inputCurrency);

var _customInput = require('./custom-input/custom-input.directive');

var _customInput2 = _interopRequireDefault(_customInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commonModule = _angular2.default.module('ng-ui-library', [_checkbox2.default, _numberSpinner2.default, _dialog2.default, _modalBox2.default, _inputCurrency2.default, _customInput2.default]).name;

exports.default = commonModule;