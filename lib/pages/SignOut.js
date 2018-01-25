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

var _react = require('react');

var _getGithubAccessTokenCookie = require('../modules/getGithubAccessTokenCookie');

var _getGithubAccessTokenCookie2 = _interopRequireDefault(_getGithubAccessTokenCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignOut = function (_Component) {
  (0, _inherits3.default)(SignOut, _Component);
  (0, _createClass3.default)(SignOut, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          res = _ref.res;

      if (!process.browser) {
        var githubAccessTokenCookie = (0, _getGithubAccessTokenCookie2.default)(req, '');
        res.writeHead(302, {
          'Set-Cookie': githubAccessTokenCookie,
          Location: '/'
        });
        res.end();
      }

      return {};
    }
  }]);

  function SignOut() {
    (0, _classCallCheck3.default)(this, SignOut);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignOut.__proto__ || (0, _getPrototypeOf2.default)(SignOut)).call(this));

    window.location = '/sign-out';
    return _this;
  }

  (0, _createClass3.default)(SignOut, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return SignOut;
}(_react.Component);

exports.default = SignOut;