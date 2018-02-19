goog.provide('app');

import assign from 'object-assign';

// ES Module
import esModule from './lib/esModule';

// goog.xxx
goog.require('goog.ui.Component');

// Closure Script
goog.require('app.googRequire');

// Closure Module
goog.require('app.googModule');
const googModule = goog.module.get('app.googModule');

document.querySelector('#entry').textContent = JSON.stringify(assign(
  {esModule: esModule()},
  {googRequire: app.googRequire()},
  {googModule: googModule()},
  {Component: typeof goog.ui.Component}
));
