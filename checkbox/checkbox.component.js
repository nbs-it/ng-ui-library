import template from './checkbox.html';
import controller from './checkbox.controller';
import './checkbox.scss';

let checkboxComponent = {
  bindings: {
    bindModel: '=',
    bindId: '@',
    label: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default checkboxComponent;
