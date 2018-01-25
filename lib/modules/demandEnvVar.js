"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var demandEnvVar = function demandEnvVar(envVarName) {
  if (!process.browser && !process.env[envVarName]) {
    console.error(envVarName + " environment variable is required");
    process.exit(1);
  }

  return process.env[envVarName];
};

exports.default = demandEnvVar;