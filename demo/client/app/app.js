import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appConfig from './app.config';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Components
])
  .config(appConfig)
  .component('app', AppComponent);
