'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GITHUB_URL = process.env.GITHUB_URL || 'https://github.com';
var githubAuthorizeUrl = GITHUB_URL + '/login/oauth/authorize';

var queryStringFromObj = function queryStringFromObj(queryObj) {
  return (0, _keys2.default)(queryObj).filter(function (key) {
    return queryObj[key] !== undefined;
  }).map(function (key) {
    return key + '=' + queryObj[key];
  }).join('&');
};

var getRedirectUri = function getRedirectUri(githubClientId, afterSignInUrl) {
  if (!process.browser) {
    return;
  }

  var afterAuthUrl = window.location.origin + '/sign-in';

  if (afterSignInUrl && afterSignInUrl !== '/sign-in') {
    afterAuthUrl = afterAuthUrl + '?afterSignInUrl=' + afterSignInUrl;
  }

  return encodeURIComponent(afterAuthUrl);
};

var getGithubAuthorizeUrl = function getGithubAuthorizeUrl(githubClientId, githubScope, afterSignInUrl) {
  if (!githubClientId) {
    throw new Error('Client id is not defined');
  }

  var githubAuthorizeParams = queryStringFromObj({
    client_id: githubClientId,
    redirect_uri: getRedirectUri(githubClientId, afterSignInUrl),
    scope: githubScope
  });

  return githubAuthorizeUrl + '?' + githubAuthorizeParams;
};

exports.default = getGithubAuthorizeUrl;