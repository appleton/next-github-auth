'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _NextGlobalClientStore = require('../modules/NextGlobalClientStore');

var _NextGlobalClientStore2 = _interopRequireDefault(_NextGlobalClientStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com';

var getGithubAccessToken = function getGithubAccessToken(req) {
  if (process.browser) {
    return _NextGlobalClientStore2.default.get('githubAccessToken');
  } else {
    var accessTokenCookie = req.headers.cookie && req.headers.cookie.split(';').map(function (c) {
      return c.trim();
    }).find(function (c) {
      return c.startsWith('githubAccessToken=');
    });

    if (accessTokenCookie) {
      return accessTokenCookie.split('=').pop();
    }
  }
};

var getGithubUser = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(githubAccessToken) {
    var url, headers, options, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (githubAccessToken) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            if (!process.browser) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', _NextGlobalClientStore2.default.get('githubUser'));

          case 4:
            url = GITHUB_API_URL + '/user';
            headers = { Authorization: 'token ' + githubAccessToken };
            options = { headers: headers };
            result = void 0;
            _context.prev = 8;
            _context.next = 11;
            return _axios2.default.get(url, options);

          case 11:
            result = _context.sent;
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](8);

            if (!(_context.t0.response.status !== 401)) {
              _context.next = 18;
              break;
            }

            throw _context.t0;

          case 18:
            if (!result) {
              _context.next = 20;
              break;
            }

            return _context.abrupt('return', result.data);

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[8, 14]]);
  }));

  return function getGithubUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var GithubContext = function GithubContext(Page) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(GithubContextWrapper, _Component);
    (0, _createClass3.default)(GithubContextWrapper, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            github = _props.github,
            _props$env = _props.env;
        _props$env = _props$env === undefined ? {} : _props$env;
        var githubClientId = _props$env.githubClientId;


        return {
          github: (0, _extends3.default)({}, github, {
            clientId: githubClientId
          })
        };
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(pageContext) {
          var req, accessToken, user, github, pageProps;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  req = pageContext.req;
                  accessToken = getGithubAccessToken(req);
                  _context2.next = 4;
                  return getGithubUser(accessToken);

                case 4:
                  user = _context2.sent;
                  github = { accessToken: accessToken, user: user };

                  if (!Page.getInitialProps) {
                    _context2.next = 12;
                    break;
                  }

                  _context2.next = 9;
                  return Page.getInitialProps((0, _extends3.default)({}, pageContext, { github: github }));

                case 9:
                  _context2.t0 = _context2.sent;
                  _context2.next = 13;
                  break;

                case 12:
                  _context2.t0 = {};

                case 13:
                  pageProps = _context2.t0;
                  return _context2.abrupt('return', (0, _extends3.default)({}, pageProps, { github: github }));

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getInitialProps(_x2) {
          return _ref2.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function GithubContextWrapper(props) {
      (0, _classCallCheck3.default)(this, GithubContextWrapper);

      var _this = (0, _possibleConstructorReturn3.default)(this, (GithubContextWrapper.__proto__ || (0, _getPrototypeOf2.default)(GithubContextWrapper)).call(this, props));

      if (process.browser) {
        _NextGlobalClientStore2.default.set('githubUser', props.github.user);
        _NextGlobalClientStore2.default.set('githubAccessToken', props.github.accessToken);
      }
      return _this;
    }

    (0, _createClass3.default)(GithubContextWrapper, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Page, this.props);
      }
    }]);
    return GithubContextWrapper;
  }(_react.Component), _class.propTypes = {
    github: _propTypes2.default.shape({
      user: _propTypes2.default.shape({
        login: _propTypes2.default.string.isRequired
      }),
      accessToken: _propTypes2.default.string
    })
  }, _class.childContextTypes = {
    github: _propTypes2.default.shape({
      user: _propTypes2.default.shape({
        login: _propTypes2.default.string
      }),
      accessToken: _propTypes2.default.string,
      clientId: _propTypes2.default.string
    })
  }, _temp;
};

exports.default = GithubContext;