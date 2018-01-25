'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PublicPage = require('../decorators/PublicPage');

var _PublicPage2 = _interopRequireDefault(_PublicPage);

var _SignIn = require('../pages/SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicSignInPage = (0, _PublicPage2.default)(_SignIn2.default);

var configureSignIn = function configureSignIn(config) {
  var WrappedSignIn = function WrappedSignIn(props) {
    return (0, _react.createElement)(PublicSignInPage, (0, _extends3.default)({}, props, config));
  };

  WrappedSignIn.propTypes = {
    scope: _propTypes2.default.string
  };

  WrappedSignIn.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(pageContext) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', PublicSignInPage.getInitialProps ? PublicSignInPage.getInitialProps(pageContext) : {});

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return WrappedSignIn;
};

exports.default = configureSignIn;