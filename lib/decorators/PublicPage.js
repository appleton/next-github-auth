'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('../modules/compose');

var _compose2 = _interopRequireDefault(_compose);

var _nextPageDecoratorInvariant = require('next-page-decorator-invariant');

var _nextPageDecoratorInvariant2 = _interopRequireDefault(_nextPageDecoratorInvariant);

var _nextPageEnvironment = require('next-page-environment');

var _nextPageEnvironment2 = _interopRequireDefault(_nextPageEnvironment);

var _GithubContext = require('./GithubContext');

var _GithubContext2 = _interopRequireDefault(_GithubContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicPage = (0, _compose2.default)((0, _nextPageDecoratorInvariant2.default)('PublicPage'), (0, _nextPageEnvironment2.default)({ githubClientId: process.env.GITHUB_CLIENT_ID }), _GithubContext2.default);

exports.default = PublicPage;