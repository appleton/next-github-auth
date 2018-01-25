'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getGithubAccessTokenCookie = function getGithubAccessTokenCookie(req) {
  var accessToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var isSecure = req.headers['x-forwarded-proto'] === 'https';

  var cookie = 'githubAccessToken=' + accessToken + '; SameSite=Strict; HttpOnly';

  if (isSecure) {
    cookie = cookie + '; Secure';
  }

  return cookie;
};

exports.default = getGithubAccessTokenCookie;