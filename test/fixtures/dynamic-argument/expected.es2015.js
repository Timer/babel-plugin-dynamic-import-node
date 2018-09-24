"use strict";

var MODULE = Object('test-module');
Promise.resolve().then(function () {
  return require("".concat(MODULE));
});
Promise.resolve().then(function () {
  return require("test-".concat(MODULE));
});
