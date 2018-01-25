'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemandSignedIn = function DemandSignedIn(Page) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(DemandSignedInWrapper, _Component);
    (0, _createClass3.default)(DemandSignedInWrapper, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(pageContext) {
          var githubClientId, _pageContext$pathname, afterSignInUrl, github, pageProps;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  githubClientId = pageContext.env.githubClientId, _pageContext$pathname = pageContext.pathname, afterSignInUrl = _pageContext$pathname === undefined ? '/' : _pageContext$pathname, github = pageContext.github;

                  if (github.user) {
                    _context.next = 8;
                    break;
                  }

                  if (!process.browser) {
                    _context.next = 7;
                    break;
                  }

                  window.location = '/sign-in?afterSignInUrl=' + afterSignInUrl;
                  return _context.abrupt('return', { isRedirecting: true });

                case 7:
                  return _context.abrupt('return', { afterSignInUrl: afterSignInUrl, githubClientId: githubClientId });

                case 8:
                  if (!Page.getInitialProps) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 11;
                  return Page.getInitialProps((0, _extends3.default)({}, pageContext, { github: github }));

                case 11:
                  _context.t0 = _context.sent;
                  _context.next = 15;
                  break;

                case 14:
                  _context.t0 = {};

                case 15:
                  pageProps = _context.t0;
                  return _context.abrupt('return', (0, _extends3.default)({}, pageProps, {
                    github: github,
                    githubClientId: githubClientId,
                    afterSignInUrl: afterSignInUrl
                  }));

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function DemandSignedInWrapper(props) {
      (0, _classCallCheck3.default)(this, DemandSignedInWrapper);

      var _this = (0, _possibleConstructorReturn3.default)(this, (DemandSignedInWrapper.__proto__ || (0, _getPrototypeOf2.default)(DemandSignedInWrapper)).call(this, props));

      if (process.browser) {
        if (!props.github.user && !props.isRedirecting) {
          window.location = '/sign-in?afterSignInUrl=' + props.afterSignInUrl;
        }
      }
      return _this;
    }

    (0, _createClass3.default)(DemandSignedInWrapper, [{
      key: 'render',
      value: function render() {
        if (this.props.github.user) {
          return _react2.default.createElement(Page, this.props);
        }

        return null;
      }
    }]);
    return DemandSignedInWrapper;
  }(_react.Component), _class.propTypes = {
    env: _propTypes2.default.shape({
      githubClientId: _propTypes2.default.string.isRequired
    }).isRequired
  }, _temp;
};

exports.default = DemandSignedIn;