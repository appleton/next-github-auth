'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _demandEnvVar = require('../modules/demandEnvVar');

var _demandEnvVar2 = _interopRequireDefault(_demandEnvVar);

var _getGithubAccessTokenCookie = require('../modules/getGithubAccessTokenCookie');

var _getGithubAccessTokenCookie2 = _interopRequireDefault(_getGithubAccessTokenCookie);

var _getGithubAuthorizeUrl = require('../modules/getGithubAuthorizeUrl');

var _getGithubAuthorizeUrl2 = _interopRequireDefault(_getGithubAuthorizeUrl);

var _PublicPage = require('../decorators/PublicPage');

var _PublicPage2 = _interopRequireDefault(_PublicPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GITHUB_URL = process.env.GITHUB_URL || 'https://github.com';
var githubAccessTokenUrl = GITHUB_URL + '/login/oauth/access_token';
var githubClientSecret = (0, _demandEnvVar2.default)('GITHUB_CLIENT_SECRET');

var fetchGithubAccessToken = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(githubAuthCode, githubClientId) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.post(githubAccessTokenUrl, {
              code: githubAuthCode,
              client_id: githubClientId,
              client_secret: githubClientSecret
            }, {
              headers: {
                Accept: 'application/json'
              }
            });

          case 2:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', response.data.access_token);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function fetchGithubAccessToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var SignIn = function (_Component) {
  (0, _inherits3.default)(SignIn, _Component);
  (0, _createClass3.default)(SignIn, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req,
            res = _ref3.res,
            githubClientId = _ref3.env.githubClientId,
            _ref3$query = _ref3.query,
            _ref3$query$afterSign = _ref3$query.afterSignInUrl,
            afterSignInUrl = _ref3$query$afterSign === undefined ? '/' : _ref3$query$afterSign,
            githubAuthCode = _ref3$query.code;
        var isAuthorized, accessToken, githubAccessTokenCookie;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isAuthorized = false;

                if (!githubAuthCode) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return fetchGithubAccessToken(githubAuthCode, githubClientId);

              case 4:
                accessToken = _context2.sent;
                githubAccessTokenCookie = (0, _getGithubAccessTokenCookie2.default)(req, accessToken);


                res.setHeader('Set-Cookie', githubAccessTokenCookie);

                isAuthorized = !!accessToken;

              case 8:
                return _context2.abrupt('return', { githubClientId: githubClientId, afterSignInUrl: afterSignInUrl, isAuthorized: isAuthorized });

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x3) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function SignIn(props) {
    (0, _classCallCheck3.default)(this, SignIn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignIn.__proto__ || (0, _getPrototypeOf2.default)(SignIn)).call(this, props));

    if (process.browser && props.afterSignInUrl) {
      if (props.isAuthorized) {
        // Wait to redirect on the client so the cookie will be available
        window.location = props.afterSignInUrl;
      } else {
        window.location = (0, _getGithubAuthorizeUrl2.default)(props.githubClientId, props.scope, props.afterSignInUrl);
      }
    }
    return _this;
  }

  (0, _createClass3.default)(SignIn, [{
    key: 'render',
    value: function render() {
      // All server side, nothing to show
      return null;
    }
  }]);
  return SignIn;
}(_react.Component);

SignIn.propTypes = {
  githubClientId: _propTypes2.default.string.isRequired,
  afterSignInUrl: _propTypes2.default.string.isRequired,
  isAuthorized: _propTypes2.default.bool.isRequired,
  scope: _propTypes2.default.string
};
SignIn.defaultProps = {
  scope: ''
};
exports.default = (0, _PublicPage2.default)(SignIn);