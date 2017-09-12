import angular from 'angular';
import autocompleteComponent from './autocomplete.component';

let autocompleteModule = angular.module('autocomplete', [
])
  .component('autocomplete', autocompleteComponent)
  .name;

export default autocompleteModule;
