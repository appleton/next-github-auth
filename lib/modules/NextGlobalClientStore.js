"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// In next it's useful to have a global spot to share data. This is used
// throughout to enable sharing server generated values across client loaded
// pages.

var data = {};

var NextGlobalClientStore = {
  get: function get(key) {
    return data[key];
  },
  set: function set(key, val) {
    data[key] = val;
  }
};

exports.default = NextGlobalClientStore;