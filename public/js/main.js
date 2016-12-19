webpackJsonp([0],[
/* 0 */
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, jQuery) {'use strict';
	
	var _simplePjax = __webpack_require__(/*! simple-pjax */ 2);
	
	var _simplePjax2 = _interopRequireDefault(_simplePjax);
	
	var _greetings = __webpack_require__(/*! ./modules/greetings */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Timeout before calling the loading indicator function. Set to 0 to disable.
	// See webpack.config.js for third-party JS loading instructions.
	
	_simplePjax2.default.indicateLoadAfter = 100;
	
	// Called when loading takes a while. Use it to display a custom loading indicator.
	_simplePjax2.default.onIndicateLoadStart = function () {
	  document.documentElement.style.opacity = 0.5;
	};
	
	// Called when loading ends. Use it to hide a custom loading indicator.
	_simplePjax2.default.onIndicateLoadEnd = function () {
	  document.documentElement.style.opacity = null;
	};
	
	document.addEventListener('simple-pjax-before-transition', function () {
	  // perform cleanup
	});
	
	document.addEventListener('simple-pjax-after-transition', function () {
	  // perform DOM mutations
	});
	
	$(document).ready(function () {
	  // Initialise modules here...
	  console.log('jQuery version: ' + jQuery.fn.jquery);
	  _greetings.Greetings.to('awesome developer');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1), __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************************!*\
  !*** ./assets/scripts/modules/greetings.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Greetings = exports.Greetings = {
	  to: function to() {
	    var subject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'creator';
	
	    console.log('Hi ' + subject + ' and welcome to Hackathon Starter Plus! :)');
	  }
	};

/***/ }
]);
//# sourceMappingURL=main.js.map