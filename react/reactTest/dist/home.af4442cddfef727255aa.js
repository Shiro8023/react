webpackJsonp([2],{"+e9Q":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),Home=function(_Component){function Home(e){_classCallCheck(this,Home);var t=_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,e));return t.state={count:0},t}return _inherits(Home,_Component),_createClass(Home,[{key:"_handleClick",value:function(){this.setState({count:++this.state.count})}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,"this is home~热替换 hot",_react2.default.createElement("br",null),"当前计数： ",this.state.count," ",_react2.default.createElement("br",null),_react2.default.createElement("button",{onClick:function(){return e._handleClick()}},"自增"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(_react.Component),_default=Home;exports.default=_default;var _temp=void("undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(Home,"Home","/Users/monica/soft/workspace/vscode/react/reactTest/src/pages/Home/Home.js"),__REACT_HOT_LOADER__.register(_default,"default","/Users/monica/soft/workspace/vscode/react/reactTest/src/pages/Home/Home.js")))}});