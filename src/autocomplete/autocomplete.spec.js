import AutocompleteModule from './autocomplete';
import AutocompleteController from './autocomplete.controller';
import AutocompleteComponent from './autocomplete.component';
import AutocompleteTemplate from './autocomplete.html';

describe('Autocomplete', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AutocompleteModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AutocompleteController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AutocompleteTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AutocompleteComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AutocompleteTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AutocompleteController);
    });
  });
});
