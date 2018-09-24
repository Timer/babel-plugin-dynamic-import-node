"use strict";

Promise.resolve().then(function () {
  return require("".concat({
    'answer': 42
  }));
});
Promise.resolve().then(function () {
  return require("".concat(['foo', 'bar']));
});
Promise.resolve().then(function () {
  return require("".concat(42));
});
Promise.resolve().then(function () {
  return require("".concat(void 0));
});
Promise.resolve().then(function () {
  return require("".concat(undefined));
});
Promise.resolve().then(function () {
  return require("".concat(null));
});
Promise.resolve().then(function () {
  return require("".concat(true));
});
Promise.resolve().then(function () {
  return require("".concat(Symbol()));
});
