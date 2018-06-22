import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularAnimate from 'angular-animate';
import appConfig from './app.config';
import Components from './components/components';
import Common from '../../../src/common';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  angularAnimate,
  Common,
  Components
])
  .config(appConfig)
  .component('app', AppComponent);
