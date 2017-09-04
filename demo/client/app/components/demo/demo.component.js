import template from './demo.html';
import controller from './demo.controller';
import './demo.scss';

let demoComponent = {
  bindings: { },
  template,
  controller,
  controllerAs: 'vm'
};

// controller.$inject = [''];

export default demoComponent;
