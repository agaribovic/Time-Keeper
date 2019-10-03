/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nmodule.exports = {\n    env: \"development\" || false,\n    port: process.env.PORT || 3000,\n    secret: 'Time$ch00l',\n    ftpOptions: { host: 'ftp.smarterasp.net', user: 'apollo', password: 'gigiSchool' },\n    token: 'x',\n    currentUser: {\n        id: '', name: '', sub: '', cli: '', scopes: [{ role: '', action: '', team: '' }]\n    },\n    identity: 'http://localhost:5000/login',\n    mongoUri: 'mongodb://mistral:Mistral2018@ds020168.mlab.com:20168/mern_db',\n    mongo: 'mongodb://localhost:27017/TimeKeeperProjectApollo',\n    userMail: 'apollogigischool@gmail.com',\n    userPassword: 'Apollo2019!'\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controllers/auth.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/auth.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar login = function login(req, res) {\n    var token = req.query.token;\n    //console.log('uso')\n    if (!token) {\n        _request2.default.get({\n            url: 'http://localhost:5000/login?client=TK'\n            // headers: { client: 'TK' }\n        }, function (err, result) {\n            res.status(200).send(result.body);\n        });\n    } else {\n        _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, result) {\n            if (err) {\n                res.status(401).send('Invalid token');\n            } else {\n                //console.log('verified')\n                _config2.default.token = token;\n                _config2.default.currentUser = result;\n                var exp = result.exp - new Date().getTime() / 1000;\n            }\n        });\n        res.redirect('/');\n    }\n};\n\nvar signed = function signed(req, res, next) {\n    var token = req.headers.authorization.substring(7);\n    if (!_config2.default.token) {\n        res.status(401).send('Access denied');\n    } else {\n        _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, result) {\n            if (err) {\n                console.log(err);\n                res.status(401).send('Access denied');\n            } else {\n                _config2.default.token = token;\n                _config2.default.currentUser = result;\n                var exp = result.exp - new Date().getTime() / 1000;\n                next();\n            }\n        });\n    }\n};\n\nvar contact = function contact(req, res) {};\n\nvar canRead = function canRead(req, res, next) {\n    if (_config2.default.currentUser.scopes[0].role === 'user') {}\n    next();\n};\n\nvar canWrite = function canWrite(req, res, next) {\n    if (_config2.default.currentUser.scopes[0].role !== 'admin') {}\n    next();\n};\n\nexports.default = { login: login, signed: signed, canRead: canRead, canWrite: canWrite, contact: contact };\n\n//# sourceURL=webpack:///./src/controllers/auth.controller.js?");

/***/ }),

/***/ "./src/controllers/calendar.controller.js":
/*!************************************************!*\
  !*** ./src/controllers/calendar.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nvar _unitOfWork = __webpack_require__(/*! ../repositories/unitOfWork */ \"./src/repositories/unitOfWork.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import { modelNames } from 'mongoose';\n\n/**\r\n * \r\n * @api{post}/api/calendar Creating a calendar\r\n * @apiName CreateCalendar\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} returns Calendar Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar create = function create(req, res) {\n    _unitOfWork.Calendar.insert(req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a calendar');\n        if (status > 300) _errorHandler2.default.error('Creating a calendar');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{get}/api/calendar Listing all calendars\r\n * @apiName ListCalendar\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} returns Calendar Documents\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar list = function list(req, res) {\n    //query za pretragu !!!  TODO\n    _unitOfWork.Calendar.getAll(function (status, result) {\n        _errorHandler2.default.info('Listing a calendar');\n        if (status > 300) _errorHandler2.default.error('Listing a calendar');\n        res.status(status).send(result);\n    });\n};\n/**\r\n * \r\n * @api{get}/api/calendar/:id Finding a calendar by Id\r\n * @apiName FindCalendarById\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} returns a Calendar Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar calendarById = function calendarById(req, res, next, id) {\n    req.id = id;next();\n};\n/**\r\n * \r\n * @api{get}/api/calendar/:id Reading a calendar by Id\r\n * @apiName ReadCalendarById\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} returns a Calendar Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar read = function read(req, res) {\n    _unitOfWork.Calendar.getOne(req.id, function (status, result) {\n        _errorHandler2.default.info('Reading a calendar');\n        if (status > 300) _errorHandler2.default.error('Reading a calendar');\n        res.status(status).send(result);\n    });\n};\n/**\r\n * \r\n * @api{put}/api/calendar/:id Updating a calendar by Id\r\n * @apiName UpdateCalendar\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} updates a Calendar Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar update = function update(req, res) {\n    _unitOfWork.Calendar.update(req.id, req.body, function (status, result) {\n        console.log(\"AjdI\");\n        console.log(req.id);\n        console.log(\"BODY\");\n        console.log(req.body);\n        _errorHandler2.default.info('Updating a calendar');\n        if (status > 300) _errorHandler2.default.error('Updating a calendar');\n        res.status(status).send(result);\n    });\n};\n/**\r\n * \r\n * @api{delete}/api/calendar/:id Removing a calendar\r\n * @apiName RemoveCalendar\r\n * @apiGroup Calendar\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Calendar} removes a Calendar Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar remove = function remove(req, res) {\n    _unitOfWork.Calendar.remove(req.id, function (status, result) {\n        _errorHandler2.default.info('Removing a calendar');\n        if (status > 300) _errorHandler2.default.error('Removing a calendar');\n        res.status(status).send(result);\n    });\n};\n\nexports.default = { create: create, list: list, calendarById: calendarById, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/calendar.controller.js?");

/***/ }),

/***/ "./src/controllers/contact.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/contact.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mailer = __webpack_require__(/*! ../../src/mailer */ \"./src/mailer.js\");\n\nvar _mailer2 = _interopRequireDefault(_mailer);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    console.log(req.body);\n    var mailOptions = {\n        to: _config2.default.userMail,\n        subject: 'Contact us Form',\n        text: ' Name: ' + req.body.name + '\\n Email: ' + req.body.email + '\\n Phone: ' + req.body.phone + '\\n Message: ' + req.body.message\n\n    };\n    (0, _mailer2.default)(mailOptions);\n};\nexports.default = { create: create };\n\n//# sourceURL=webpack:///./src/controllers/contact.controller.js?");

/***/ }),

/***/ "./src/controllers/customer.controller.js":
/*!************************************************!*\
  !*** ./src/controllers/customer.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _unitOfWork = __webpack_require__(/*! ../repositories/unitOfWork */ \"./src/repositories/unitOfWork.js\");\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n* @api{post}/api/customer Creating a Customer\r\n* @apiName CreateCustomer\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} returns a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar create = function create(req, res) {\n    _unitOfWork.Customers.insert(req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a customer');\n        if (status > 300) _errorHandler2.default.error('Creating a customer');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{get}/api/customer Listing all Customers\r\n* @apiName ListCustomers\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} returns a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar list = function list(req, res) {\n    _unitOfWork.Customers.getAll(function (status, result) {\n        _errorHandler2.default.info('Listing a customer');\n        if (status > 300) _errorHandler2.default.error('Listing a customer');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{get}/api/customer/:id Finding a Customer by Id\r\n* @apiName FindCustomerById\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} returns a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar customerById = function customerById(req, res, next, id) {\n    req.id = id;next();\n};\n\n/**\r\n* @api{get}/api/customer/:id Reading a Customer by ID\r\n* @apiName ReadCustomer\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} returns a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar read = function read(req, res) {\n    _unitOfWork.Customers.getOne(req.id, function (status, result) {\n        _errorHandler2.default.info('Reading a customer');\n        if (status > 300) _errorHandler2.default.error('Reading a customer');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{put}/api/customer/:id Updating a Customer \r\n* @apiName UpdateCustomer\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} updates a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar update = function update(req, res) {\n    _unitOfWork.Customers.update(req.id, req.body, function (status, result) {\n        _errorHandler2.default.info('Updating a customer');\n        if (status > 300) _errorHandler2.default.error('Updating a customer');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{delete}/api/customer/:id Removing a Customer \r\n* @apiName RemoveCustomer\r\n* @apiGroup Customer\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Customer} removes a Customer Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar remove = function remove(req, res) {\n    _unitOfWork.Customers.remove(req.id, function (status, result) {\n        _errorHandler2.default.info('Removing a customer');\n        if (status > 300) _errorHandler2.default.error('Removing a customer');\n        res.status(status).send(result);\n    });\n};\n\nexports.default = { create: create, list: list, customerById: customerById, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/customer.controller.js?");

/***/ }),

/***/ "./src/controllers/person.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/person.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _unitOfWork = __webpack_require__(/*! ../repositories/unitOfWork */ \"./src/repositories/unitOfWork.js\");\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @api{post}/api/people Creating a person\r\n * @apiName CreatePerson\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} returns Person Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\n\nvar create = function create(req, res) {\n    _unitOfWork.People.insert(req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a person');\n        if (status > 300) _errorHandler2.default.error('Creating a person');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{post}/api/people Listing a person\r\n * @apiName ListPerson\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} returns Person Documents\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\nvar list = function list(req, res) {\n    _unitOfWork.People.getAll(function (status, result) {\n        _errorHandler2.default.info('Listing a person');\n        if (status > 300) _errorHandler2.default.error('Listing a person');\n        res.status(status).send(result);\n    }, [{ include: 'engagement.team', fields: 'name' }]);\n};\n\n/**\r\n * \r\n * @api{get}/api/people/:id Finding a person by Id\r\n * @apiName FindPersonById\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} returns a Person Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\nvar personById = function personById(req, res, next, id) {\n    req.id = id;next();\n};\n\n/**\r\n * \r\n * @api{get}/api/people/:id Reading a person by Id\r\n * @apiName ReadPersonById\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} returns a Person Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\n\nvar read = function read(req, res) {\n    _unitOfWork.People.getOne(req.id, function (status, result) {\n        _errorHandler2.default.info('Reading a person');\n        if (status > 300) _errorHandler2.default.error('Reading a person');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{put}/api/calendar/:id Updating a person by Id\r\n * @apiName UpdatePerson\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} updates a Person Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *   {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\n\nvar update = function update(req, res) {\n    _unitOfWork.People.update(req.id, req.body, function (status, result) {\n        _errorHandler2.default.info('Updating a person');\n        if (status > 300) _errorHandler2.default.error('Updating a person');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{delete}/api/people/:id Removing a person\r\n * @apiName RemovePerson\r\n * @apiGroup Person\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Person} removes a Person Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\r\n        \"firstName\": \"neko\",\r\n        \"engagements\": [],\r\n        \"__v\": 0,\r\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\r\n    }\r\n * }\r\n */\n\nvar remove = function remove(req, res) {\n    _unitOfWork.People.remove(req.id, function (status, result) {\n        _errorHandler2.default.info('Removing a person');\n        if (status > 300) _errorHandler2.default.error('Removing a person');\n        res.status(status).send(result);\n    });\n};\n\nexports.default = { create: create, list: list, personById: personById, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/person.controller.js?");

/***/ }),

/***/ "./src/controllers/project.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/project.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _unitOfWork = __webpack_require__(/*! ../repositories/unitOfWork */ \"./src/repositories/unitOfWork.js\");\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @api{post}/api/projects Creating a project\r\n * @apiName Createproject\r\n * @apiGroup Project\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Project} returns Project Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        \"name\":\"zakir\",\r\n        \"description\":\"opis\",\r\n        \"teamId\":\"asdj234io2j3ifjsodf\"\r\n        \"status\":\"ok\"\r\n    }\r\n * }\r\n */\nvar create = function create(req, res) {\n    _unitOfWork.Projects.insert(req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a project');\n        if (status > 300) _errorHandler2.default.error('Creating a project');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* \r\n* @api{get}/api/projects Listing all projects\r\n* @apiName ListingAllproject\r\n* @apiGroup Project\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Project} returns Project Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n    \"name\":\"zakir\",\r\n    \"description\":\"opis\",\r\n    \"teamId\":\"asdj234io2j3ifjsodf\"\r\n    \"status\":\"ok\"\r\n}\r\n* }\r\n*/\nvar list = function list(req, res) {\n    _unitOfWork.Projects.getAll(function (status, result) {\n        _errorHandler2.default.info('Listing a project');\n        if (status > 300) _errorHandler2.default.error('Listing a project');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* \r\n* @api{get}/api/projects/:id Finding a project by Id\r\n* @apiName FindAProjectById\r\n* @apiGroup Project\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Project} returns a Project Document\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n    \"name\":\"zakir\",\r\n    \"description\":\"opis\",\r\n    \"teamId\":\"asdj234io2j3ifjsodf\"\r\n    \"status\":\"ok\"\r\n}\r\n* }\r\n*/\nvar projectById = function projectById(req, res, next, id) {\n    req.id = id;next();\n};\n/**\r\n * \r\n * @api{get}/api/projects/:id Reading a project by Id\r\n * @apiName ReadProjectById\r\n * @apiGroup Project\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Project} returns a Project Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar read = function read(req, res) {\n    _unitOfWork.Projects.getOne(req.id, function (status, result) {\n        _errorHandler2.default.info('Reading a project');\n        if (status > 300) _errorHandler2.default.error('Reading a project');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{put}/api/projects/:id Updating a project by Id\r\n * @apiName UpdateProject\r\n * @apiGroup Project\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Project} returns a Project Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar update = function update(req, res) {\n    _unitOfWork.Projects.update(req.id, req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a project');\n        if (status > 300) _errorHandler2.default.error('Creating a project');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n * \r\n * @api{delete}/api/projects/:id Deleting a project \r\n * @apiName DeleteProject\r\n * @apiGroup Project\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Project} returns a Project Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success\r\n *  {\r\n        date: \"01.05.2005\",\r\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n        type: \"tip\",\r\n        hours: 8,\r\n    }\r\n * }\r\n */\nvar remove = function remove(req, res) {\n    _unitOfWork.Projects.remove(req.id, function (status, result) {\n        _errorHandler2.default.info('Updating a project');\n        if (status > 300) _errorHandler2.default.error('Updating a project');\n        res.status(status).send(result);\n    });\n};\n\nexports.default = { create: create, list: list, update: update, remove: remove, projectById: projectById, read: read };\n\n//# sourceURL=webpack:///./src/controllers/project.controller.js?");

/***/ }),

/***/ "./src/controllers/team.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/team.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _unitOfWork = __webpack_require__(/*! ../repositories/unitOfWork */ \"./src/repositories/unitOfWork.js\");\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n* @api{post}/api/team Creating a Team\r\n* @apiName CreateTeam\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} returns a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar create = function create(req, res) {\n    _unitOfWork.Teams.insert(req.body, function (status, result) {\n        _errorHandler2.default.info('Creating a team');\n        if (status > 300) _errorHandler2.default.error('Creating a team');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{get}/api/team Listing all Teams\r\n* @apiName ListTeam\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} returns a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar list = function list(req, res) {\n    _unitOfWork.Teams.getAll(function (status, result) {\n        _errorHandler2.default.info('Listing a team');\n        if (status > 300) _errorHandler2.default.error('Listing a team');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{get}/api/team/:id Finding a Team by Id\r\n* @apiName FindTeamById\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} returns a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar teamById = function teamById(req, res, next, id) {\n    req.id = id;next();\n};\n\n/**\r\n* @api{get}/api/team/:id Reading a Team\r\n* @apiName ReadATeam\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} returns a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar read = function read(req, res) {\n    _unitOfWork.Teams.getOne(req.id, function (status, result) {\n        _errorHandler2.default.info('Reading a team');\n        if (status > 300) _errorHandler2.default.error('Reading a team');\n        res.status(status).send(result);\n    });\n};\n\n/**\r\n* @api{put}/api/team/:id Updating a Team \r\n* @apiName UpdateTeam\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} updates a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar update = function update(req, res) {\n    _unitOfWork.Teams.update(req.id, req.body, function (status, result) {\n        _errorHandler2.default.info('Updating a team');\n        if (status > 300) _errorHandler2.default.error('Updating a team');\n        res.status(status).send(result);\n    });\n}; //#region \n\n/**\r\n* @api{delete}/api/team/:id Removing a Team\r\n* @apiName RemoveTeam\r\n* @apiGroup Team\r\n* @apiVersion 1.0.0\r\n* @apiSuccess {Team} removes a Team Documents\r\n* @apiSuccess {Number} status should be 200\r\n* @apiSuccessExample Example data on success\r\n*  {\r\n       date: \"01.05.2005\",\r\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\r\n       type: \"tip\",\r\n       hours: 8,\r\n   }\r\n* }\r\n*/\nvar remove = function remove(req, res) {\n    _unitOfWork.Teams.remove(req.id, function (status, result) {\n        _errorHandler2.default.info('Removing a team');\n        if (status > 300) _errorHandler2.default.error('Removing a team');\n        res.status(status).send(result);\n    });\n};\n\nexports.default = { create: create, list: list, teamById: teamById, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/team.controller.js?");

/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar winston = __webpack_require__(/*! winston */ \"winston\");\nvar logform = __webpack_require__(/*! logform */ \"logform\");\nvar _logform$format = logform.format,\n    combine = _logform$format.combine,\n    timestamp = _logform$format.timestamp,\n    printf = _logform$format.printf;\n\n\nvar logger = winston.createLogger({\n    level: 'info',\n    format: combine(timestamp(), printf(function (nfo) {\n        return nfo.timestamp + ' [' + nfo.level + '] ' + nfo.message;\n    })),\n    transports: [new winston.transports.File({\n        filename: './error.log',\n        level: 'error'\n    }), new winston.transports.File({\n        filename: './journal.log'\n    })]\n});\nexports.default = logger;\n\n//# sourceURL=webpack:///./src/errorHandler.js?");

/***/ }),

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _template = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* const corsOptions={\r\n    origin:'*',\r\n    methods:'*',\r\n    allowedHeaders:'Bearer'\r\n} */\nvar app = (0, _express2.default)();\napp.use((0, _cors2.default)());\napp.use((0, _helmet2.default)());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.text());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.get('/', function (req, res) {\n    res.status(200).send((0, _template2.default)());\n});\n(0, _routes2.default)(app);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/express.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./src/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.set('useCreateIndex', true);\n_mongoose2.default.set('useNewUrlParser', true);\n_mongoose2.default.connect(_config2.default.mongo);\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('unable to connect to database: ' + _config2.default.mongo);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  console.log('Server started on port ' + _config2.default.port);\n});\n\nexports.default = _express2.default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mailer.js":
/*!***********************!*\
  !*** ./src/mailer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar _nodemailer2 = _interopRequireDefault(_nodemailer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar transporter = _nodemailer2.default.createTransport({\n  service: 'gmail',\n  auth: {\n    user: _config2.default.userMail,\n    pass: _config2.default.userPassword\n  }\n});\n\nvar sender = function sender(mailOptions) {\n  transporter.sendMail(mailOptions, function (error, info) {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log('Email sent: ' + info.response);\n    }\n  });\n};\n\nexports.default = sender;\n\n//# sourceURL=webpack:///./src/mailer.js?");

/***/ }),

/***/ "./src/models/calendar.model.js":
/*!**************************************!*\
  !*** ./src/models/calendar.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _types = __webpack_require__(/*! @babel/types */ \"@babel/types\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n\n/** \r\n * @api{post}/api/access Insert new access grant \r\n * @apiName InsertAccess\r\n * @apiGroup Access\r\n * @apiVersion 1.0.0\r\n * @apiSuccess {Access} returns Access Document\r\n * @apiSuccess {Number} status should be 200\r\n * @apiSuccessExample Example data on success:\r\n * [\r\n    {\r\n        \"_id\": \"5c93d62de41e720d80874aeb\",\r\n        \"user\": null,\r\n        \"client\": null,\r\n        \"scopes\": [\r\n            {\r\n                \"_id\": \"5c93d62de41e720d80874aec\",\r\n                \"role\": \"User\",\r\n                \"action\": \"\",\r\n                \"team\": \"\"\r\n            }\r\n        ],\r\n        \"__v\": 0\r\n    }\r\n]\r\n */\n\nvar Task = new Schema({\n    projectId: String,\n    description: String,\n    hours: Number\n});\n\nvar Comment = new Schema({\n    name: String,\n    content: String,\n    dateOfPost: Date\n});\n\nvar Day = new Schema({\n    type: String,\n    hours: Number,\n    tasks: [Task],\n    date: Date,\n    comments: [Comment]\n});\n\nvar calendarSchema = new Schema({\n    employeeId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Person' },\n    days: [Day]\n});\n\nmodule.exports = _mongoose2.default.models.Calendar || _mongoose2.default.model('Calendar', calendarSchema);\n\n//# sourceURL=webpack:///./src/models/calendar.model.js?");

/***/ }),

/***/ "./src/models/customer.model.js":
/*!**************************************!*\
  !*** ./src/models/customer.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n\n/**\r\n * @api Customer (basic information about customers)\r\n * @apiName CustomerModel\r\n * @apiGroup Model\r\n * @apiVersion 1.0.0\r\n */\n\nvar customerSchema = new _mongoose2.default.Schema({\n  name: String,\n  image: String,\n  contact: { type: String, unique: true },\n  email: String,\n  phone: String,\n  address: { zipcode: String, city: String, road: String },\n  status: String\n});\n\nmodule.exports = _mongoose2.default.models.Customer || _mongoose2.default.model(\"Customer\", customerSchema);\n\n//# sourceURL=webpack:///./src/models/customer.model.js?");

/***/ }),

/***/ "./src/models/person.model.js":
/*!************************************!*\
  !*** ./src/models/person.model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n\n/**\r\n * @api Person (basic information about person)\r\n * @apiName PersonModel\r\n * @apiGroup Model\r\n * @apiVersion 1.0.0\r\n */\n\nvar Engagement = new _mongoose2.default.Schema({\n    team: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Team' },\n    role: String,\n    hours: Number\n});\n\nvar personSchema = new Schema({\n    firstName: String,\n    lastName: String,\n    gender: String,\n    image: String,\n    email: String,\n    phone: String,\n    position: String,\n    birthDay: Date,\n    beginDate: Date,\n    endDate: Date,\n    status: String,\n    lastLogin: Date,\n    engagements: [Engagement],\n    currentMonth: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Calendar' }\n});\n\nmodule.exports = _mongoose2.default.models.Person || _mongoose2.default.model('Person', personSchema);\n\n//# sourceURL=webpack:///./src/models/person.model.js?");

/***/ }),

/***/ "./src/models/project.model.js":
/*!*************************************!*\
  !*** ./src/models/project.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n/**\r\n * @api Project (information about project with archive of all days)\r\n * @apiName Projctmodel\r\n * @apiGroup Model\r\n * @apiVersion 1.0.0\r\n */\nvar Day = new Schema({\n    date: Date,\n    employeeId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Person' },\n    type: String,\n    hours: Number\n});\n\nvar projectSchema = new Schema({\n    name: String,\n    description: String,\n    teamId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Team' },\n    startDate: Date,\n    endDate: Date,\n    status: String,\n    customer: {\n        name: String,\n        image: String,\n        contact: String,\n        email: String,\n        phone: String,\n        address: {\n            zipCode: String,\n            city: String,\n            road: String\n        },\n        status: String\n    },\n    archive: [Day]\n});\n\nmodule.exports = _mongoose2.default.models.Project || _mongoose2.default.model('Project', projectSchema);\n\n//# sourceURL=webpack:///./src/models/project.model.js?");

/***/ }),

/***/ "./src/models/team.model.js":
/*!**********************************!*\
  !*** ./src/models/team.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n\n/**\r\n * @api Team (basic information about team and his memebers)\r\n * @apiName TeamModel\r\n * @apiGroup Model\r\n * @apiVersion 1.0.0\r\n */\n\nvar Member = new _mongoose2.default.Schema({\n  person: { type: _mongoose2.default.Schema.Types.ObjectId, ref: \"Person\" },\n  role: String,\n  hours: Number\n});\nvar teamSchema = new Schema({\n  teamName: String,\n  description: String,\n  members: [Member]\n});\n\nmodule.exports = _mongoose2.default.models.Team || _mongoose2.default.model(\"Team\", teamSchema);\n\n//# sourceURL=webpack:///./src/models/team.model.js?");

/***/ }),

/***/ "./src/repositories/repository.js":
/*!****************************************!*\
  !*** ./src/repositories/repository.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //#region \n// import Team from '../models/team.model'\n// import _ from 'lodash'\n\n// const insert = (data, callback) => {\n//     let team = new Team(data)\n//     team.save((err, result) => {\n//         if (err)\n//             callback(400, err)\n//         else callback(201, result)\n//     })\n// }\n\n// const getAll = (callback) => {\n//     Team.find((err, result) => {\n//         if (err) {\n//             callback(400, err)\n//         } else {\n//             callback(200, result)\n//         }\n//     })\n// }\n// const getOne = (id, callback) => {\n//     Team.findById(id).populate('members.person', '_id firstName lastName')\n//         .exec((err, result) => {\n//             if (err) {\n//                 callback(400, err)\n//             } else {\n//                 callback(200, result)\n//             }\n//         })\n// }\n// const update = (id, body, callback) => {\n//     getOne(id, (status, team) => {\n//         team = _.extend(team, body)\n//         team.save((err, result) => {\n//             if (err) {\n//                 callback(400, err)\n//             } else {\n//                 callback(200, result)\n//             }\n//         })\n//     })\n// }\n// const remove = (id, callback) => {\n//     getOne(id, (status, team) => {\n//         team.remove((err, result) => {\n//             if (err) {\n//                 callback(400, err)\n//             } else {\n//                 callback(200, result)\n//             }\n//         })\n//     })\n// }\n\n// export default { getAll, insert, getOne, update ,remove}\n\n//.populate('members.person', ' _id firstName lastName')\n//#endregion\n\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _errorHandler = __webpack_require__(/*! ../errorHandler */ \"./src/errorHandler.js\");\n\nvar _errorHandler2 = _interopRequireDefault(_errorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Repository = function () {\n    function Repository(modelName) {\n        var _this = this;\n\n        _classCallCheck(this, Repository);\n\n        this.update = function (id, body, callback) {\n            _this.getOne(id, function (status, obj) {\n                if (status !== 200) {\n                    callback(404, 'Requested data not found');\n                } else {\n                    obj = _lodash2.default.extend(obj, body);\n                    obj.save(function (err, result) {\n                        if (err) {\n                            callback(400, err);\n                        } else {\n                            callback(200, result);\n                        }\n                    });\n                }\n            });\n        };\n\n        this.remove = function (id, callback) {\n            _this.getOne(id, function (status, obj) {\n                if (status !== 200) {\n                    callback(404, 'Requeted data not found');\n                } else {\n                    obj.remove(function (err, result) {\n                        if (err) {\n                            callback(400, err);\n                        } else {\n                            callback(200, result);\n                        }\n                    });\n                }\n            });\n        };\n\n        this.collection = _mongoose2.default.model(modelName);\n    }\n\n    /**\r\n    *  @api{getAll}/api Get all from the database for specific collection\r\n    * @apiName Get All\r\n    * @apiGroup Repository\r\n    * @apiVersion 1.0.0\r\n    * @apiSuccess {Repository} returns all members of specific collection from the database for\r\n    * @apiSuccess {Number} status should be 200\r\n    * @apiSuccessExample Example data on success:\r\n    [\r\n        {\r\n            \"_id\": \"5c9b924f380e7d09e4606c65\",\r\n            \"teamName\": \"Apollo\",\r\n            \"description\": \"Apollo team consists of four brave musketeers\",\r\n            \"members\": [\r\n                {\r\n                    \"_id\": \"5c9b924f380e7d09e4606c66\",\r\n                    \"role\": \"developer\",\r\n                    \"hours\": 40\r\n                }\r\n            ],\r\n            \"__v\": 0\r\n        },\r\n        {\r\n            \"_id\": \"5c9b9476b8f6a44310d552cb\",\r\n            \"teamName\": \"Apollo\",\r\n            \"description\": \"Apollo team consists of four brave musketeers\",\r\n            \"members\": [\r\n                {\r\n                    \"_id\": \"5c9b9476b8f6a44310d552cc\",\r\n                    \"role\": \"developer\",\r\n                    \"hours\": 40\r\n                }\r\n            ],\r\n            \"__v\": 0\r\n        }\r\n    ]\r\n     */\n\n    _createClass(Repository, [{\n        key: 'getAll',\n        value: function getAll(callback) {\n            this.collection.find(function (err, result) {\n                if (err) {\n                    callback(400, err);\n                } else {\n                    callback(200, result);\n                }\n            });\n        }\n        /**\r\n        *  @api{getOne}/api/collection/id Get one from the database for specific collection\r\n        * @apiName Get One\r\n        * @apiGroup Repository\r\n        * @apiVersion 1.0.0\r\n        * @apiSuccess {Repository} returns one members of specific collection from the database for\r\n        * @apiSuccess {Number} status should be 200\r\n        * @apiSuccessExample Example data on success:\r\n        {\r\n            \"_id\": \"5c9b924f380e7d09e4606c65\",\r\n            \"teamName\": \"Apollo\",\r\n            \"description\": \"Apollo team consists of four brave musketeers\",\r\n            \"members\": [\r\n                {\r\n                    \"_id\": \"5c9b924f380e7d09e4606c66\",\r\n                    \"role\": \"developer\",\r\n                    \"hours\": 40\r\n                }\r\n            ],\r\n            \"__v\": 0\r\n        }\r\n        */\n\n    }, {\n        key: 'getOne',\n        value: function getOne(id, callback) {\n            this.collection.findById(id).exec(function (err, result) {\n                if (err) {\n                    callback(400, err);\n                } else {\n                    callback(200, result);\n                }\n            });\n        }\n\n        /**\r\n        *  @api{insert}/api/collection Inserts new document in collection\r\n        * @apiName Insert\r\n        * @apiGroup Repository\r\n        * @apiVersion 1.0.0\r\n        * @apiSuccess {Repository} inserts one members of specific collection in the database\r\n        * @apiSuccess {Number} status should be 200\r\n        * @apiSuccessExample Example data on success:\r\n        {\r\n         \"_id\": \"5c9c9739bfd339355c17b956\",\r\n         \"teamName\": \"Nemesis\",\r\n         \"description\": \"Nemesi tema\",\r\n         \"members\": [\r\n             {\r\n                 \"_id\": \"5c9b9476b8f6a44310d552cc\",\r\n                 \"role\": \"dev\",\r\n                 \"hours\": 40\r\n             }\r\n         ],\r\n         \"__v\": 0\r\n        }\r\n        */\n\n    }, {\n        key: 'insert',\n        value: function insert(data, callback) {\n            var obj = new this.collection(data);\n            obj.save(function (err, result) {\n                if (err) {\n                    callback(400, err);\n                } else {\n                    callback(200, result);\n                }\n            });\n        }\n        /**\r\n        *  @api{update}/api/collection Updates existing document in collection\r\n        * @apiName Update\r\n        * @apiGroup Repository\r\n        * @apiVersion 1.0.0\r\n        * @apiSuccess {Repository} updates one member of specific collection in the database\r\n        * @apiSuccess {Number} status should be 200\r\n        * @apiSuccessExample Example data on success:\r\n        {\r\n           \"_id\": \"5c9c9739bfd339355c17b956\",\r\n           \"teamName\": \"Nemesis\",\r\n           \"description\": \"Nemesis team\",\r\n           \"members\": [\r\n               {\r\n                   \"_id\": \"5c9b9476b8f6a44310d552cc\",\r\n                   \"role\": \"dev\",\r\n                   \"hours\": 40\r\n               }\r\n           ],\r\n           \"__v\": 1\r\n        }\r\n        */\n\n        /**\r\n        *  @api{remove}/api/collection/id Deletes existing document in collection with specified id\r\n        * @apiName Remove\r\n        * @apiGroup Repository\r\n        * @apiVersion 1.0.0\r\n        * @apiSuccess {Repository} removes one member of specific collection in the database\r\n        * @apiSuccess {Number} status should be 200\r\n        * @apiSuccessExample Example data on success:\r\n        {\r\n            \"_id\": \"5c9c9739bfd339355c17b956\",\r\n            \"teamName\": \"Nemesis\",\r\n            \"description\": \"Nemesis team\",\r\n            \"members\": [\r\n                {\r\n                    \"_id\": \"5c9b9476b8f6a44310d552cc\",\r\n                    \"role\": \"dev\",\r\n                    \"hours\": 40\r\n                }\r\n            ],\r\n            \"__v\": 1\r\n        }\r\n        */\n\n    }]);\n\n    return Repository;\n}();\n\nmodule.exports = Repository;\n\n//# sourceURL=webpack:///./src/repositories/repository.js?");

/***/ }),

/***/ "./src/repositories/unitOfWork.js":
/*!****************************************!*\
  !*** ./src/repositories/unitOfWork.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../models/person.model */ \"./src/models/person.model.js\");\n\n__webpack_require__(/*! ../models/team.model */ \"./src/models/team.model.js\");\n\n__webpack_require__(/*! ../models/customer.model */ \"./src/models/customer.model.js\");\n\n__webpack_require__(/*! ../models/project.model */ \"./src/models/project.model.js\");\n\n__webpack_require__(/*! ../models/calendar.model */ \"./src/models/calendar.model.js\");\n\nvar _repository = __webpack_require__(/*! ./repository */ \"./src/repositories/repository.js\");\n\nvar _repository2 = _interopRequireDefault(_repository);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** \r\n* @api Creates creates instances of repository for each model\r\n* @apiName UnitOfWork\r\n* @apiGroup UnitOfWork\r\n* @apiVersion 1.0.0\r\n*/\n\nvar unitofWork = function unitofWork() {\n    _classCallCheck(this, unitofWork);\n};\n\nunitofWork.People = new _repository2.default('Person');\nunitofWork.Teams = new _repository2.default('Team');\nunitofWork.Customers = new _repository2.default('Customer');\nunitofWork.Projects = new _repository2.default('Project');\nunitofWork.Calendar = new _repository2.default('Calendar');\n\n\nmodule.exports = unitofWork;\n\n//# sourceURL=webpack:///./src/repositories/unitOfWork.js?");

/***/ }),

/***/ "./src/routes/auth.router.js":
/*!***********************************!*\
  !*** ./src/routes/auth.router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/login').get(_auth2.default.login);\nrouter.route('/auth/contact').get(_auth2.default.contact);\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/auth.router.js?");

/***/ }),

/***/ "./src/routes/calendar.route.js":
/*!**************************************!*\
  !*** ./src/routes/calendar.route.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _calendar = __webpack_require__(/*! ../controllers/calendar.controller */ \"./src/controllers/calendar.controller.js\");\n\nvar _calendar2 = _interopRequireDefault(_calendar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n/** \r\n* @api{Routing} Routing GET and POST methods for calendar\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/calendar').get(_calendar2.default.list).post(_calendar2.default.create);\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for calendar with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/calendar/:id').get(_calendar2.default.read).put(_calendar2.default.update).delete(_calendar2.default.remove);\n\nrouter.param('id', _calendar2.default.calendarById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/calendar.route.js?");

/***/ }),

/***/ "./src/routes/customer.route.js":
/*!**************************************!*\
  !*** ./src/routes/customer.route.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _customer = __webpack_require__(/*! ../controllers/customer.controller */ \"./src/controllers/customer.controller.js\");\n\nvar _customer2 = _interopRequireDefault(_customer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n/** \r\n* @api{Routing} Routing GET and POST methods for customers\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/customers').get(_customer2.default.list).post(_customer2.default.create);\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for customers with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/customers/:id').get(_customer2.default.read).put(_customer2.default.update).delete(_customer2.default.remove);\n\nrouter.param('id', _customer2.default.customerById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/customer.route.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _team = __webpack_require__(/*! ./team.route */ \"./src/routes/team.route.js\");\n\nvar _team2 = _interopRequireDefault(_team);\n\nvar _person = __webpack_require__(/*! ./person.route */ \"./src/routes/person.route.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nvar _customer = __webpack_require__(/*! ./customer.route */ \"./src/routes/customer.route.js\");\n\nvar _customer2 = _interopRequireDefault(_customer);\n\nvar _project = __webpack_require__(/*! ./project.route */ \"./src/routes/project.route.js\");\n\nvar _project2 = _interopRequireDefault(_project);\n\nvar _calendar = __webpack_require__(/*! ./calendar.route */ \"./src/routes/calendar.route.js\");\n\nvar _calendar2 = _interopRequireDefault(_calendar);\n\nvar _auth = __webpack_require__(/*! ./auth.router */ \"./src/routes/auth.router.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _mailer = __webpack_require__(/*! ./mailer.router */ \"./src/routes/mailer.router.js\");\n\nvar _mailer2 = _interopRequireDefault(_mailer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for projects with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nexports.default = function (app) {\n    app.use('/', _team2.default);\n    app.use('/', _person2.default);\n    app.use('/', _project2.default);\n    app.use('/', _customer2.default);\n    app.use('/', _calendar2.default);\n    app.use('/', _auth2.default);\n    app.use('/', _mailer2.default);\n};\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/mailer.router.js":
/*!*************************************!*\
  !*** ./src/routes/mailer.router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _contact = __webpack_require__(/*! ../controllers/contact.controller */ \"./src/controllers/contact.controller.js\");\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/contact').post(_contact2.default.create);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/mailer.router.js?");

/***/ }),

/***/ "./src/routes/person.route.js":
/*!************************************!*\
  !*** ./src/routes/person.route.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _person = __webpack_require__(/*! ../controllers/person.controller */ \"./src/controllers/person.controller.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n/** \r\n* @api{Routing} Routing GET and POST methods for people\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/people').get(_person2.default.list).post(_person2.default.create);\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for people with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/people/:id').get(_person2.default.read).put(_person2.default.update).delete(_person2.default.remove);\n\nrouter.param('id', _person2.default.personById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/person.route.js?");

/***/ }),

/***/ "./src/routes/project.route.js":
/*!*************************************!*\
  !*** ./src/routes/project.route.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _project = __webpack_require__(/*! ../controllers/project.controller */ \"./src/controllers/project.controller.js\");\n\nvar _project2 = _interopRequireDefault(_project);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n/** \r\n* @api{Routing} Routing GET and POST methods for projects\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/projects').get(_project2.default.list).post(_project2.default.create);\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for projects with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/projects/:id').get(_project2.default.read).put(_project2.default.update).delete(_project2.default.remove);\n\nrouter.param('id', _project2.default.projectById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/project.route.js?");

/***/ }),

/***/ "./src/routes/team.route.js":
/*!**********************************!*\
  !*** ./src/routes/team.route.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _team = __webpack_require__(/*! ../controllers/team.controller */ \"./src/controllers/team.controller.js\");\n\nvar _team2 = _interopRequireDefault(_team);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n/** \r\n* @api{Routing} Routing GET and POST methods for teams\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/teams').get(_team2.default.list).post(_team2.default.create);\n\n/** \r\n* @api{Routing} Routing GET, PUT AND DELETE methods for teams with specified ID\r\n* @apiName Router\r\n* @apiGroup Routes\r\n* @apiVersion 1.0.0\r\n*/\n\nrouter.route('/api/teams/:id').get(_team2.default.read).put(_team2.default.update).delete(_team2.default.remove);\n\nrouter.param('id', _team2.default.teamById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/team.route.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'TimeKeeper';\n\n\n    if (!_lodash2.default.isEmpty(_config2.default.currentUser)) {\n        return '<!doctype html>\\n    <html lang=\\'en\\'>\\n        <head>\\n            <meta charset=\\'utf-8\\'>\\n            <title>' + title + '</title>\\n        </head>\\n        <body>\\n            <h2>Hello from ' + title + '</h2>\\n            <p>Your user is<br>\\n            ' + _config2.default.currentUser._id + '<br>\\n            ' + _config2.default.currentUser.name + '<br>\\n            ' + _config2.default.currentUser.sub + '<br>\\n            ' + _config2.default.currentUser.cli + '<br>\\n            ' + _config2.default.currentUser.scopes[0].role + ':' + _config2.default.currentUser.scopes[0].action + ' <br>\\n            ' + _config2.default.token + '\\n            </p>\\n        </body>\\n    </html>';\n    } else {\n        return '<!doctype html>\\n        <html lang=\\'en\\'>\\n            <head>\\n                <meta charset=\\'utf-8\\'>\\n                <title>' + title + '</title>\\n            </head>\\n            <body>\\n                <h1>Your account is not yet enabled, please contact your administrator</h1>\\n            </body>\\n        </html>';\n    }\n};\n\n//# sourceURL=webpack:///./src/template.js?");

/***/ }),

/***/ "@babel/types":
/*!*******************************!*\
  !*** external "@babel/types" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/types\");\n\n//# sourceURL=webpack:///external_%22@babel/types%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "logform":
/*!**************************!*\
  !*** external "logform" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"logform\");\n\n//# sourceURL=webpack:///external_%22logform%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });