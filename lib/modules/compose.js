"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var reverseFns = fns.reverse();
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    reverseFns.forEach(function (fn) {
      if (!Array.isArray(args)) {
        args = [args];
      }
      args = fn.apply(null, args);
    });
    return args;
  };
};

exports.default = compose;