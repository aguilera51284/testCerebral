/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _inferno3 = __webpack_require__(4);
	
	var _cerebral = __webpack_require__(17);
	
	var _devtools = __webpack_require__(35);
	
	var _devtools2 = _interopRequireDefault(_devtools);
	
	var _operators = __webpack_require__(37);
	
	var _cerebralRouter = __webpack_require__(60);
	
	var _cerebralRouter2 = _interopRequireDefault(_cerebralRouter);
	
	var _cerebralProviderHttp = __webpack_require__(73);
	
	var _cerebralProviderHttp2 = _interopRequireDefault(_cerebralProviderHttp);
	
	var _cerebralForms = __webpack_require__(83);
	
	var _home = __webpack_require__(100);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _brand = __webpack_require__(103);
	
	var _brand2 = _interopRequireDefault(_brand);
	
	var _NewBrand = __webpack_require__(104);
	
	var _NewBrand2 = _interopRequireDefault(_NewBrand);
	
	var _App = __webpack_require__(108);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Modules
	var controller = (0, _cerebral.Controller)({
		// Options
		options: {
			// Use strict rendering
			strictRender: true,
			// Expose props.signals with all signals in components
			signalsProp: false
		},
		// Activate DevTools
		devtools: (0, _devtools2.default)({
			// chrome extension if unable to connect
			remoteDebugger: 'localhost:8585',
			// Time travel
			storeMutations: true,
			// Warnings on mutating outside "state" API
			preventExternalMutations: true,
			// Warnings when strict render path usage is wrong
			verifyStrictRender: true,
			// Throw error when overwriting existing input property
			preventInputPropReplacement: false,
			// Shows a warning when you have components with number of state dependencies
			// or signals above the set number
			bigComponentsWarning: { state: 5, signals: 5 }
		}),
		// Routers
		router: (0, _cerebralRouter2.default)({
			routes: {
				'/': 'home.routed',
				'/brand': {
					'/': 'brand.routed',
					'/new-brand': 'new_brand.routed'
				}
			},
			query: true, // Query support
			onlyHash: true, // Use hash urls
			baseUrl: '/' // Only handle url changes on nested path
		}),
		// States
		state: {
			currentPage: 'new_brand',
			isLogin: false,
			tokenJwt: '',
			settings: (0, _cerebralForms.form)({
				/**
	   validateOnChange: {
	   	value: true,
	   	description: 'Show error messages on change',
	   	unToggleFieldsWhenChecked: ['app.settings.validateInputOnBlur']
	   },
	   */
				disableSubmitWhenFormIsInValid: {
					value: false,
					description: 'Disable submit when form is invalid'
				},
				disableSubmitWhenFormIsSend: {
					value: false,
					description: 'Disable submit when form is send'
				}
				/**,
	   validateInputOnBlur: {
	   	value: false,
	   	description: 'Show error message on blur',
	   	unToggleFieldsWhenChecked: ['app.settings.validateOnChange']
	   }
	   */
			}),
			// User States
			user: {}
		},
		// Modules
		modules: {
			home: _home2.default,
			brand: _brand2.default,
			new_brand: _NewBrand2.default
		},
		// Signals
		signals: {
			redirectLogin: [function (_ref) {
				var router = _ref.router;
				return router.goTo('/login');
			}]
		},
		//Providers
		providers: [(0, _cerebralProviderHttp2.default)({
			// Prefix all requests with this url
			baseUrl: 'http://127.0.0.1:8080',
			// Any default headers to pass on requests
			headers: {
				'Content-Type': 'application/json',
				'Authorization': String('Bearer ' + localStorage.getItem('appJwt')),
				'Client-Id': '52fda0a34b6961601f8eb4d398757c08a4718f09'
			},
			// When talking to cross origin (cors), pass cookies
			// if set to true
			withCredentials: false
		})]
	});
	// Renderizar
	
	// Components
	/*jscs:enable esnext */
	_inferno2.default.render((0, _inferno.createVNode)(16, _inferno3.Container, {
		'controller': controller,
		children: (0, _inferno.createVNode)(16, _App2.default)
	}), document.getElementById('root'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);
	module.exports.default = module.exports;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * inferno v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.Inferno = global.Inferno || {})));
	}(this, (function (exports) { 'use strict';
	
	var NO_OP = '$NO_OP';
	var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	var isBrowser = typeof window !== 'undefined' && window.document;
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	var isArray = Array.isArray;
	function isStatefulComponent(o) {
	    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}
	function isStringOrNumber(obj) {
	    var type = typeof obj;
	    return type === 'string' || type === 'number';
	}
	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	function isAttrAnEvent(attr) {
	    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}
	function isString(obj) {
	    return typeof obj === 'string';
	}
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	function isObject(o) {
	    return typeof o === 'object';
	}
	function throwError(message) {
	    if (!message) {
	        message = ERROR_MSG;
	    }
	    throw new Error(("Inferno Error: " + message));
	}
	function warning(condition, message) {
	    if (!condition) {
	        console.error(message);
	    }
	}
	var EMPTY_OBJ = {};
	
	function applyKey(key, vNode) {
	    vNode.key = key;
	    return vNode;
	}
	function applyKeyIfMissing(key, vNode) {
	    if (isNumber(key)) {
	        key = "." + key;
	    }
	    if (isNull(vNode.key) || vNode.key[0] === '.') {
	        return applyKey(key, vNode);
	    }
	    return vNode;
	}
	function applyKeyPrefix(key, vNode) {
	    vNode.key = key + vNode.key;
	    return vNode;
	}
	function _normalizeVNodes(nodes, result, index, currentKey) {
	    for (; index < nodes.length; index++) {
	        var n = nodes[index];
	        var key = currentKey + "." + index;
	        if (!isInvalid(n)) {
	            if (isArray(n)) {
	                _normalizeVNodes(n, result, 0, key);
	            }
	            else {
	                if (isStringOrNumber(n)) {
	                    n = createTextVNode(n);
	                }
	                else if (isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
	                    n = cloneVNode(n);
	                }
	                if (isNull(n.key) || n.key[0] === '.') {
	                    n = applyKey(key, n);
	                }
	                else {
	                    n = applyKeyPrefix(currentKey, n);
	                }
	                result.push(n);
	            }
	        }
	    }
	}
	function normalizeVNodes(nodes) {
	    var newNodes;
	    // we assign $ which basically means we've flagged this array for future note
	    // if it comes back again, we need to clone it, as people are using it
	    // in an immutable way
	    // tslint:disable
	    if (nodes['$']) {
	        nodes = nodes.slice();
	    }
	    else {
	        nodes['$'] = true;
	    }
	    // tslint:enable
	    for (var i = 0; i < nodes.length; i++) {
	        var n = nodes[i];
	        if (isInvalid(n) || isArray(n)) {
	            var result = (newNodes || nodes).slice(0, i);
	            _normalizeVNodes(nodes, result, i, "");
	            return result;
	        }
	        else if (isStringOrNumber(n)) {
	            if (!newNodes) {
	                newNodes = nodes.slice(0, i);
	            }
	            newNodes.push(applyKeyIfMissing(i, createTextVNode(n)));
	        }
	        else if ((isVNode(n) && n.dom) || (isNull(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */))) {
	            if (!newNodes) {
	                newNodes = nodes.slice(0, i);
	            }
	            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
	        }
	        else if (newNodes) {
	            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
	        }
	    }
	    return newNodes || nodes;
	}
	function normalizeChildren(children) {
	    if (isArray(children)) {
	        return normalizeVNodes(children);
	    }
	    else if (isVNode(children) && children.dom) {
	        return cloneVNode(children);
	    }
	    return children;
	}
	function normalizeProps(vNode, props, children) {
	    if (!(vNode.flags & 28 /* Component */) && isNullOrUndef(children) && !isNullOrUndef(props.children)) {
	        vNode.children = props.children;
	    }
	    if (props.ref) {
	        vNode.ref = props.ref;
	        delete props.ref;
	    }
	    if (props.events) {
	        vNode.events = props.events;
	    }
	    if (!isNullOrUndef(props.key)) {
	        vNode.key = props.key;
	        delete props.key;
	    }
	}
	function copyPropsTo(copyFrom, copyTo) {
	    for (var prop in copyFrom) {
	        if (isUndefined(copyTo[prop])) {
	            copyTo[prop] = copyFrom[prop];
	        }
	    }
	}
	function normalizeElement(type, vNode) {
	    if (type === 'svg') {
	        vNode.flags = 128 /* SvgElement */;
	    }
	    else if (type === 'input') {
	        vNode.flags = 512 /* InputElement */;
	    }
	    else if (type === 'select') {
	        vNode.flags = 2048 /* SelectElement */;
	    }
	    else if (type === 'textarea') {
	        vNode.flags = 1024 /* TextareaElement */;
	    }
	    else if (type === 'media') {
	        vNode.flags = 256 /* MediaElement */;
	    }
	    else {
	        vNode.flags = 2 /* HtmlElement */;
	    }
	}
	function normalize(vNode) {
	    var props = vNode.props;
	    var hasProps = !isNull(props);
	    var type = vNode.type;
	    var children = vNode.children;
	    // convert a wrongly created type back to element
	    if (isString(type) && (vNode.flags & 28 /* Component */)) {
	        normalizeElement(type, vNode);
	        if (hasProps && props.children) {
	            vNode.children = props.children;
	            children = props.children;
	        }
	    }
	    if (hasProps) {
	        normalizeProps(vNode, props, children);
	    }
	    if (!isInvalid(children)) {
	        vNode.children = normalizeChildren(children);
	    }
	    if (hasProps && !isInvalid(props.children)) {
	        props.children = normalizeChildren(props.children);
	    }
	    if (process.env.NODE_ENV !== 'production') {
	        // This code will be stripped out from production CODE
	        // It will help users to track errors in their applications.
	        function verifyKeys(vNodes) {
	            var keyValues = vNodes.map(function (vnode) { return vnode.key; });
	            keyValues.some(function (item, idx) {
	                var hasDuplicate = keyValues.indexOf(item) !== idx;
	                warning(!hasDuplicate, 'Infreno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
	                return hasDuplicate;
	            });
	        }
	        if (vNode.children && Array.isArray(vNode.children)) {
	            verifyKeys(vNode.children);
	        }
	    }
	}
	
	var options = {
	    recyclingEnabled: true,
	    findDOMNodeEnabled: false,
	    roots: null,
	    createVNode: null,
	    beforeRender: null,
	    afterRender: null,
	    afterMount: null,
	    afterUpdate: null,
	    beforeUnmount: null
	};
	
	function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
	    if (flags & 16 /* ComponentUnknown */) {
	        flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	    }
	    var vNode = {
	        children: isUndefined(children) ? null : children,
	        dom: null,
	        events: events || null,
	        flags: flags,
	        key: isUndefined(key) ? null : key,
	        props: props || null,
	        ref: ref || null,
	        type: type
	    };
	    if (!noNormalise) {
	        normalize(vNode);
	    }
	    if (options.createVNode) {
	        options.createVNode(vNode);
	    }
	    return vNode;
	}
	function cloneVNode(vNodeToClone, props) {
	    var _children = [], len = arguments.length - 2;
	    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];
	
	    var children = _children;
	    if (_children.length > 0 && !isNull(_children[0])) {
	        if (!props) {
	            props = {};
	        }
	        if (_children.length === 1) {
	            children = _children[0];
	        }
	        if (isUndefined(props.children)) {
	            props.children = children;
	        }
	        else {
	            if (isArray(children)) {
	                if (isArray(props.children)) {
	                    props.children = props.children.concat(children);
	                }
	                else {
	                    props.children = [props.children].concat(children);
	                }
	            }
	            else {
	                if (isArray(props.children)) {
	                    props.children.push(children);
	                }
	                else {
	                    props.children = [props.children];
	                    props.children.push(children);
	                }
	            }
	        }
	    }
	    children = null;
	    var newVNode;
	    if (isArray(vNodeToClone)) {
	        var tmpArray = [];
	        for (var i = 0; i < vNodeToClone.length; i++) {
	            tmpArray.push(cloneVNode(vNodeToClone[i]));
	        }
	        newVNode = tmpArray;
	    }
	    else {
	        var flags = vNodeToClone.flags;
	        var events = vNodeToClone.events || (props && props.events) || null;
	        var key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
	        var ref = vNodeToClone.ref || (props ? props.ref : null);
	        if (flags & 28 /* Component */) {
	            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
	            var newProps = newVNode.props;
	            if (newProps) {
	                var newChildren = newProps.children;
	                // we need to also clone component children that are in props
	                // as the children may also have been hoisted
	                if (newChildren) {
	                    if (isArray(newChildren)) {
	                        for (var i$1 = 0; i$1 < newChildren.length; i$1++) {
	                            var child = newChildren[i$1];
	                            if (!isInvalid(child) && isVNode(child)) {
	                                newProps.children[i$1] = cloneVNode(child);
	                            }
	                        }
	                    }
	                    else if (isVNode(newChildren)) {
	                        newProps.children = cloneVNode(newChildren);
	                    }
	                }
	            }
	            newVNode.children = null;
	        }
	        else if (flags & 3970 /* Element */) {
	            children = (props && props.children) || vNodeToClone.children;
	            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
	        }
	        else if (flags & 1 /* Text */) {
	            newVNode = createTextVNode(vNodeToClone.children);
	        }
	    }
	    return newVNode;
	}
	function createVoidVNode() {
	    return createVNode(4096 /* Void */);
	}
	function createTextVNode(text) {
	    return createVNode(1 /* Text */, null, null, text, null, null, null, true);
	}
	function isVNode(o) {
	    return !!o.flags;
	}
	
	var Lifecycle = function Lifecycle() {
	    this.listeners = [];
	    this.fastUnmount = true;
	};
	Lifecycle.prototype.addListener = function addListener (callback) {
	    this.listeners.push(callback);
	};
	Lifecycle.prototype.trigger = function trigger () {
	        var this$1 = this;
	
	    for (var i = 0; i < this.listeners.length; i++) {
	        this$1.listeners[i]();
	    }
	};
	
	function constructDefaults(string, object, value) {
	    /* eslint no-return-assign: 0 */
	    string.split(',').forEach(function (i) { return object[i] = value; });
	}
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xmlNS = 'http://www.w3.org/XML/1998/namespace';
	var svgNS = 'http://www.w3.org/2000/svg';
	var strictProps = {};
	var booleanProps = {};
	var namespaces = {};
	var isUnitlessNumber = {};
	var skipProps = {};
	var dehyphenProps = {
	    httpEquiv: 'http-equiv',
	    acceptCharset: 'accept-charset'
	};
	var probablyKebabProps = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;
	function kebabize(str, smallLetter, largeLetter) {
	    return (smallLetter + "-" + (largeLetter.toLowerCase()));
	}
	var delegatedProps = {};
	constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
	constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
	constructDefaults('volume,defaultValue,defaultChecked', strictProps, true);
	constructDefaults('children,ref,key,selected,checked,value,multiple', skipProps, true);
	constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
	constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate', booleanProps, true);
	constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);
	
	var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	var delegatedEvents = new Map();
	function handleEvent(name, lastEvent, nextEvent, dom) {
	    var delegatedRoots = delegatedEvents.get(name);
	    if (nextEvent) {
	        if (!delegatedRoots) {
	            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
	            var docEvent = attachEventToDocument(name, delegatedRoots);
	            delegatedRoots.docEvent = docEvent;
	            delegatedEvents.set(name, delegatedRoots);
	        }
	        if (!lastEvent) {
	            delegatedRoots.count++;
	            if (isiOS && name === 'onClick') {
	                trapClickOnNonInteractiveElement(dom);
	            }
	        }
	        delegatedRoots.items.set(dom, nextEvent);
	    }
	    else if (delegatedRoots) {
	        if (delegatedRoots.items.has(dom)) {
	            delegatedRoots.count--;
	            delegatedRoots.items.delete(dom);
	            if (delegatedRoots.count === 0) {
	                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
	                delegatedEvents.delete(name);
	            }
	        }
	    }
	}
	function dispatchEvent(event, dom, items, count, eventData) {
	    var eventsToTrigger = items.get(dom);
	    if (eventsToTrigger) {
	        count--;
	        // linkEvent object
	        eventData.dom = dom;
	        if (eventsToTrigger.event) {
	            eventsToTrigger.event(eventsToTrigger.data, event);
	        }
	        else {
	            eventsToTrigger(event);
	        }
	        if (eventData.stopPropagation) {
	            return;
	        }
	    }
	    var parentDom = dom.parentNode;
	    if (count > 0 && (parentDom || parentDom === document.body)) {
	        dispatchEvent(event, parentDom, items, count, eventData);
	    }
	}
	function normalizeEventName(name) {
	    return name.substr(2).toLowerCase();
	}
	function attachEventToDocument(name, delegatedRoots) {
	    var docEvent = function (event) {
	        var eventData = {
	            stopPropagation: false,
	            dom: document
	        };
	        // we have to do this as some browsers recycle the same Event between calls
	        // so we need to make the property configurable
	        Object.defineProperty(event, 'currentTarget', {
	            configurable: true,
	            get: function get() {
	                return eventData.dom;
	            }
	        });
	        event.stopPropagation = function () {
	            eventData.stopPropagation = true;
	        };
	        var count = delegatedRoots.count;
	        if (count > 0) {
	            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
	        }
	    };
	    document.addEventListener(normalizeEventName(name), docEvent);
	    return docEvent;
	}
	function emptyFn() { }
	function trapClickOnNonInteractiveElement(dom) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	    // Just set it using the onclick property so that we don't have to manage any
	    // bookkeeping for it. Not sure if we need to clear it when the listener is
	    // removed.
	    // TODO: Only do this for the relevant Safaris maybe?
	    dom.onclick = emptyFn;
	}
	
	function isCheckedType(type) {
	    return type === 'checkbox' || type === 'radio';
	}
	function isControlled(props) {
	    var usesChecked = isCheckedType(props.type);
	    return usesChecked ? !isNullOrUndef(props.checked) : !isNullOrUndef(props.value);
	}
	function onTextInputChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onInput) {
	        var event = events.onInput;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.oninput) {
	        events.oninput(e);
	    }
	    // the user may have updated the vNode from the above onInput events
	    // so we need to get it from the context of `this` again
	    applyValue(this.vNode, dom);
	}
	function wrappedOnChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var event = events.onChange;
	    if (event.event) {
	        event.event(event.data, e);
	    }
	    else {
	        event(e);
	    }
	}
	function onCheckboxChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onClick) {
	        var event = events.onClick;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.onclick) {
	        events.onclick(e);
	    }
	    // the user may have updated the vNode from the above onClick events
	    // so we need to get it from the context of `this` again
	    applyValue(this.vNode, dom);
	}
	function handleAssociatedRadioInputs(name) {
	    var inputs = document.querySelectorAll(("input[type=\"radio\"][name=\"" + name + "\"]"));
	    [].forEach.call(inputs, function (dom) {
	        var inputWrapper = wrappers.get(dom);
	        if (inputWrapper) {
	            var props = inputWrapper.vNode.props;
	            if (props) {
	                dom.checked = inputWrapper.vNode.props.checked;
	            }
	        }
	    });
	}
	function processInput(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue(vNode, dom);
	    if (isControlled(props)) {
	        var inputWrapper = wrappers.get(dom);
	        if (!inputWrapper) {
	            inputWrapper = {
	                vNode: vNode
	            };
	            if (isCheckedType(props.type)) {
	                dom.onclick = onCheckboxChange.bind(inputWrapper);
	                dom.onclick.wrapped = true;
	            }
	            else {
	                dom.oninput = onTextInputChange.bind(inputWrapper);
	                dom.oninput.wrapped = true;
	            }
	            if (props.onChange) {
	                dom.onchange = wrappedOnChange.bind(inputWrapper);
	                dom.onchange.wrapped = true;
	            }
	            wrappers.set(dom, inputWrapper);
	        }
	        inputWrapper.vNode = vNode;
	    }
	}
	function applyValue(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    var type = props.type;
	    var value = props.value;
	    var checked = props.checked;
	    var multiple = props.multiple;
	    if (type && type !== dom.type) {
	        dom.type = type;
	    }
	    if (multiple && multiple !== dom.multiple) {
	        dom.multiple = multiple;
	    }
	    if (isCheckedType(type)) {
	        if (!isNullOrUndef(value)) {
	            dom.value = value;
	        }
	        dom.checked = checked;
	        if (type === 'radio' && props.name) {
	            handleAssociatedRadioInputs(props.name);
	        }
	    }
	    else {
	        if (!isNullOrUndef(value) && dom.value !== value) {
	            dom.value = value;
	        }
	        else if (!isNullOrUndef(checked)) {
	            dom.checked = checked;
	        }
	    }
	}
	
	function isControlled$1(props) {
	    return !isNullOrUndef(props.value);
	}
	function updateChildOptionGroup(vNode, value) {
	    var type = vNode.type;
	    if (type === 'optgroup') {
	        var children = vNode.children;
	        if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	                updateChildOption(children[i], value);
	            }
	        }
	        else if (isVNode(children)) {
	            updateChildOption(children, value);
	        }
	    }
	    else {
	        updateChildOption(vNode, value);
	    }
	}
	function updateChildOption(vNode, value) {
	    var props = vNode.props || EMPTY_OBJ;
	    var dom = vNode.dom;
	    // we do this as multiple may have changed
	    dom.value = props.value;
	    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
	        dom.selected = true;
	    }
	    else {
	        dom.selected = props.selected || false;
	    }
	}
	function onSelectChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onChange) {
	        var event = events.onChange;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.onchange) {
	        events.onchange(e);
	    }
	    // the user may have updated the vNode from the above onChange events
	    // so we need to get it from the context of `this` again
	    applyValue$1(this.vNode, dom);
	}
	function processSelect(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue$1(vNode, dom);
	    if (isControlled$1(props)) {
	        var selectWrapper = wrappers.get(dom);
	        if (!selectWrapper) {
	            selectWrapper = {
	                vNode: vNode
	            };
	            dom.onchange = onSelectChange.bind(selectWrapper);
	            dom.onchange.wrapped = true;
	            wrappers.set(dom, selectWrapper);
	        }
	        selectWrapper.vNode = vNode;
	    }
	}
	function applyValue$1(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    if (props.multiple !== dom.multiple) {
	        dom.multiple = props.multiple;
	    }
	    var children = vNode.children;
	    var value = props.value;
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            updateChildOptionGroup(children[i], value);
	        }
	    }
	    else if (isVNode(children)) {
	        updateChildOptionGroup(children, value);
	    }
	}
	
	function isControlled$2(props) {
	    return !isNullOrUndef(props.value);
	}
	function wrappedOnChange$1(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var event = events.onChange;
	    if (event.event) {
	        event.event(event.data, e);
	    }
	    else {
	        event(e);
	    }
	}
	function onTextareaInputChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onInput) {
	        var event = events.onInput;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.oninput) {
	        events.oninput(e);
	    }
	    // the user may have updated the vNode from the above onInput events
	    // so we need to get it from the context of `this` again
	    applyValue$2(this.vNode, dom);
	}
	function processTextarea(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue$2(vNode, dom);
	    var textareaWrapper = wrappers.get(dom);
	    if (isControlled$2(props)) {
	        if (!textareaWrapper) {
	            textareaWrapper = {
	                vNode: vNode
	            };
	            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
	            dom.oninput.wrapped = true;
	            if (props.onChange) {
	                dom.onchange = wrappedOnChange$1.bind(textareaWrapper);
	                dom.onchange.wrapped = true;
	            }
	            wrappers.set(dom, textareaWrapper);
	        }
	        textareaWrapper.vNode = vNode;
	    }
	}
	function applyValue$2(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    var value = props.value;
	    if (dom.value !== value) {
	        if (!isNullOrUndef(value)) {
	            dom.value = value;
	        }
	    }
	}
	
	var wrappers = new Map();
	function processElement(flags, vNode, dom) {
	    if (flags & 512 /* InputElement */) {
	        processInput(vNode, dom);
	    }
	    else if (flags & 2048 /* SelectElement */) {
	        processSelect(vNode, dom);
	    }
	    else if (flags & 1024 /* TextareaElement */) {
	        processTextarea(vNode, dom);
	    }
	}
	
	function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var flags = vNode.flags;
	    if (flags & 28 /* Component */) {
	        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
	    }
	    else if (flags & 3970 /* Element */) {
	        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
	    }
	    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
	        unmountVoidOrText(vNode, parentDom);
	    }
	}
	function unmountVoidOrText(vNode, parentDom) {
	    if (parentDom) {
	        removeChild(parentDom, vNode.dom);
	    }
	}
	var alreadyUnmounted = new WeakMap();
	function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var instance = vNode.children;
	    var flags = vNode.flags;
	    var isStatefulComponent$$1 = flags & 4;
	    var ref = vNode.ref;
	    var dom = vNode.dom;
	    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
	        return;
	    }
	    alreadyUnmounted.set(vNode);
	    if (!isRecycling) {
	        if (isStatefulComponent$$1) {
	            if (!instance._unmounted) {
	                instance._ignoreSetState = true;
	                options.beforeUnmount && options.beforeUnmount(vNode);
	                instance.componentWillUnmount && instance.componentWillUnmount();
	                if (ref && !isRecycling) {
	                    ref(null);
	                }
	                instance._unmounted = true;
	                options.findDOMNodeEnabled && componentToDOMNodeMap.delete(instance);
	                var subLifecycle = instance._lifecycle;
	                if (!subLifecycle.fastUnmount) {
	                    unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
	                }
	            }
	        }
	        else {
	            if (!isNullOrUndef(ref)) {
	                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
	                    ref.onComponentWillUnmount(dom);
	                }
	            }
	            if (!lifecycle.fastUnmount) {
	                unmount(instance, null, lifecycle, false, isRecycling);
	            }
	        }
	    }
	    if (parentDom) {
	        var lastInput = instance._lastInput;
	        if (isNullOrUndef(lastInput)) {
	            lastInput = instance;
	        }
	        removeChild(parentDom, dom);
	    }
	    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
	        poolComponent(vNode);
	    }
	}
	function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var dom = vNode.dom;
	    var ref = vNode.ref;
	    var events = vNode.events;
	    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
	        return;
	    }
	    alreadyUnmounted.set(vNode);
	    if (!lifecycle.fastUnmount) {
	        if (ref && !isRecycling) {
	            unmountRef(ref);
	        }
	        var children = vNode.children;
	        if (!isNullOrUndef(children)) {
	            unmountChildren$1(children, lifecycle, isRecycling);
	        }
	    }
	    if (!isNull(events)) {
	        for (var name in events) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, events[name], null, dom, lifecycle);
	            events[name] = null;
	        }
	    }
	    if (parentDom) {
	        removeChild(parentDom, dom);
	    }
	    if (options.recyclingEnabled && (parentDom || canRecycle)) {
	        poolElement(vNode);
	    }
	}
	function unmountChildren$1(children, lifecycle, isRecycling) {
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (!isInvalid(child) && isObject(child)) {
	                unmount(child, null, lifecycle, false, isRecycling);
	            }
	        }
	    }
	    else if (isObject(children)) {
	        unmount(children, null, lifecycle, false, isRecycling);
	    }
	}
	function unmountRef(ref) {
	    if (isFunction(ref)) {
	        ref(null);
	    }
	    else {
	        if (isInvalid(ref)) {
	            return;
	        }
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	        }
	        throwError();
	    }
	}
	
	function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    if (lastVNode !== nextVNode) {
	        var lastFlags = lastVNode.flags;
	        var nextFlags = nextVNode.flags;
	        if (nextFlags & 28 /* Component */) {
	            if (lastFlags & 28 /* Component */) {
	                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
	            }
	            else {
	                replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 3970 /* Element */) {
	            if (lastFlags & 3970 /* Element */) {
	                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	            }
	            else {
	                replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 1 /* Text */) {
	            if (lastFlags & 1 /* Text */) {
	                patchText(lastVNode, nextVNode);
	            }
	            else {
	                replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 4096 /* Void */) {
	            if (lastFlags & 4096 /* Void */) {
	                patchVoid(lastVNode, nextVNode);
	            }
	            else {
	                replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else {
	            // Error case: mount new one replacing old one
	            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	        }
	    }
	}
	function unmountChildren(children, dom, lifecycle, isRecycling) {
	    if (isVNode(children)) {
	        unmount(children, dom, lifecycle, true, isRecycling);
	    }
	    else if (isArray(children)) {
	        removeAllChildren(dom, children, lifecycle, isRecycling);
	    }
	    else {
	        dom.textContent = '';
	    }
	}
	function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    var nextTag = nextVNode.type;
	    var lastTag = lastVNode.type;
	    if (lastTag !== nextTag) {
	        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	    }
	    else {
	        var dom = lastVNode.dom;
	        var lastProps = lastVNode.props;
	        var nextProps = nextVNode.props;
	        var lastChildren = lastVNode.children;
	        var nextChildren = nextVNode.children;
	        var lastFlags = lastVNode.flags;
	        var nextFlags = nextVNode.flags;
	        var lastRef = lastVNode.ref;
	        var nextRef = nextVNode.ref;
	        var lastEvents = lastVNode.events;
	        var nextEvents = nextVNode.events;
	        nextVNode.dom = dom;
	        if (isSVG || (nextFlags & 128 /* SvgElement */)) {
	            isSVG = true;
	        }
	        if (lastChildren !== nextChildren) {
	            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        if (!(nextFlags & 2 /* HtmlElement */)) {
	            processElement(nextFlags, nextVNode, dom);
	        }
	        if (lastProps !== nextProps) {
	            patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG);
	        }
	        if (lastEvents !== nextEvents) {
	            patchEvents(lastEvents, nextEvents, dom, lifecycle);
	        }
	        if (nextRef) {
	            if (lastRef !== nextRef || isRecycling) {
	                mountRef(dom, nextRef, lifecycle);
	            }
	        }
	    }
	}
	function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	    var patchArray = false;
	    var patchKeyed = false;
	    if (nextFlags & 64 /* HasNonKeyedChildren */) {
	        patchArray = true;
	    }
	    else if ((lastFlags & 32 /* HasKeyedChildren */) && (nextFlags & 32 /* HasKeyedChildren */)) {
	        patchKeyed = true;
	        patchArray = true;
	    }
	    else if (isInvalid(nextChildren)) {
	        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	    }
	    else if (isInvalid(lastChildren)) {
	        if (isStringOrNumber(nextChildren)) {
	            setTextContent(dom, nextChildren);
	        }
	        else {
	            if (isArray(nextChildren)) {
	                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	            }
	            else {
	                mount(nextChildren, dom, lifecycle, context, isSVG);
	            }
	        }
	    }
	    else if (isStringOrNumber(nextChildren)) {
	        if (isStringOrNumber(lastChildren)) {
	            updateTextContent(dom, nextChildren);
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            setTextContent(dom, nextChildren);
	        }
	    }
	    else if (isArray(nextChildren)) {
	        if (isArray(lastChildren)) {
	            patchArray = true;
	            if (isKeyed(lastChildren, nextChildren)) {
	                patchKeyed = true;
	            }
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	        }
	    }
	    else if (isArray(lastChildren)) {
	        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
	        mount(nextChildren, dom, lifecycle, context, isSVG);
	    }
	    else if (isVNode(nextChildren)) {
	        if (isVNode(lastChildren)) {
	            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            mount(nextChildren, dom, lifecycle, context, isSVG);
	        }
	    } /* else if (isVNode(lastChildren)) {
	        // TODO: One test hits this line when passing invalid children what should be done?
	        // debugger;
	    } else {
	        // debugger;
	    }*/
	    if (patchArray) {
	        if (patchKeyed) {
	            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	    }
	}
	function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
	    var lastType = lastVNode.type;
	    var nextType = nextVNode.type;
	    var nextProps = nextVNode.props || EMPTY_OBJ;
	    var lastKey = lastVNode.key;
	    var nextKey = nextVNode.key;
	    var defaultProps = nextType.defaultProps;
	    if (!isUndefined(defaultProps)) {
	        copyPropsTo(defaultProps, nextProps);
	        nextVNode.props = nextProps;
	    }
	    if (lastType !== nextType) {
	        if (isClass) {
	            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            var lastInput = lastVNode.children._lastInput || lastVNode.children;
	            var nextInput = createFunctionalComponentInput(nextVNode, nextType, nextProps, context);
	            unmount(lastVNode, null, lifecycle, false, isRecycling);
	            patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
	            var dom = nextVNode.dom = nextInput.dom;
	            nextVNode.children = nextInput;
	            mountFunctionalComponentCallbacks(nextVNode.ref, dom, lifecycle);
	        }
	    }
	    else {
	        if (isClass) {
	            if (lastKey !== nextKey) {
	                replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	                return false;
	            }
	            var instance = lastVNode.children;
	            if (instance._unmounted) {
	                if (isNull(parentDom)) {
	                    return true;
	                }
	                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
	            }
	            else {
	                var lastState = instance.state;
	                var nextState = instance.state;
	                var lastProps = instance.props;
	                var childContext = instance.getChildContext();
	                nextVNode.children = instance;
	                instance._isSVG = isSVG;
	                if (!isNullOrUndef(childContext)) {
	                    childContext = Object.assign({}, context, childContext);
	                }
	                else {
	                    childContext = context;
	                }
	                var lastInput$1 = instance._lastInput;
	                var nextInput$1 = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
	                var didUpdate = true;
	                instance._childContext = childContext;
	                if (isInvalid(nextInput$1)) {
	                    nextInput$1 = createVoidVNode();
	                }
	                else if (nextInput$1 === NO_OP) {
	                    nextInput$1 = lastInput$1;
	                    didUpdate = false;
	                }
	                else if (isStringOrNumber(nextInput$1)) {
	                    nextInput$1 = createTextVNode(nextInput$1);
	                }
	                else if (isArray(nextInput$1)) {
	                    if (process.env.NODE_ENV !== 'production') {
	                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                    }
	                    throwError();
	                }
	                else if (isObject(nextInput$1) && nextInput$1.dom) {
	                    nextInput$1 = cloneVNode(nextInput$1);
	                }
	                if (nextInput$1.flags & 28 /* Component */) {
	                    nextInput$1.parentVNode = nextVNode;
	                }
	                else if (lastInput$1.flags & 28 /* Component */) {
	                    lastInput$1.parentVNode = nextVNode;
	                }
	                instance._lastInput = nextInput$1;
	                instance._vNode = nextVNode;
	                if (didUpdate) {
	                    var fastUnmount = lifecycle.fastUnmount;
	                    var subLifecycle = instance._lifecycle;
	                    lifecycle.fastUnmount = subLifecycle.fastUnmount;
	                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, childContext, isSVG, isRecycling);
	                    subLifecycle.fastUnmount = lifecycle.fastUnmount;
	                    lifecycle.fastUnmount = fastUnmount;
	                    instance.componentDidUpdate(lastProps, lastState);
	                    options.afterUpdate && options.afterUpdate(nextVNode);
	                    options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, nextInput$1.dom);
	                }
	                nextVNode.dom = nextInput$1.dom;
	            }
	        }
	        else {
	            var shouldUpdate = true;
	            var lastProps$1 = lastVNode.props;
	            var nextHooks = nextVNode.ref;
	            var nextHooksDefined = !isNullOrUndef(nextHooks);
	            var lastInput$2 = lastVNode.children;
	            var nextInput$2 = lastInput$2;
	            nextVNode.dom = lastVNode.dom;
	            nextVNode.children = lastInput$2;
	            if (lastKey !== nextKey) {
	                shouldUpdate = true;
	            }
	            else {
	                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
	                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
	                }
	            }
	            if (shouldUpdate !== false) {
	                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
	                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
	                }
	                nextInput$2 = nextType(nextProps, context);
	                if (isInvalid(nextInput$2)) {
	                    nextInput$2 = createVoidVNode();
	                }
	                else if (isStringOrNumber(nextInput$2) && nextInput$2 !== NO_OP) {
	                    nextInput$2 = createTextVNode(nextInput$2);
	                }
	                else if (isArray(nextInput$2)) {
	                    if (process.env.NODE_ENV !== 'production') {
	                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                    }
	                    throwError();
	                }
	                else if (isObject(nextInput$2) && nextInput$2.dom) {
	                    nextInput$2 = cloneVNode(nextInput$2);
	                }
	                if (nextInput$2 !== NO_OP) {
	                    patch(lastInput$2, nextInput$2, parentDom, lifecycle, context, isSVG, isRecycling);
	                    nextVNode.children = nextInput$2;
	                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
	                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
	                    }
	                    nextVNode.dom = nextInput$2.dom;
	                }
	            }
	            if (nextInput$2.flags & 28 /* Component */) {
	                nextInput$2.parentVNode = nextVNode;
	            }
	            else if (lastInput$2.flags & 28 /* Component */) {
	                lastInput$2.parentVNode = nextVNode;
	            }
	        }
	    }
	    return false;
	}
	function patchText(lastVNode, nextVNode) {
	    var nextText = nextVNode.children;
	    var dom = lastVNode.dom;
	    nextVNode.dom = dom;
	    if (lastVNode.children !== nextText) {
	        dom.nodeValue = nextText;
	    }
	}
	function patchVoid(lastVNode, nextVNode) {
	    nextVNode.dom = lastVNode.dom;
	}
	function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	    var lastChildrenLength = lastChildren.length;
	    var nextChildrenLength = nextChildren.length;
	    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
	    var i = 0;
	    for (; i < commonLength; i++) {
	        var nextChild = nextChildren[i];
	        if (nextChild.dom) {
	            nextChild = nextChildren[i] = cloneVNode(nextChild);
	        }
	        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
	    }
	    if (lastChildrenLength < nextChildrenLength) {
	        for (i = commonLength; i < nextChildrenLength; i++) {
	            var nextChild$1 = nextChildren[i];
	            if (nextChild$1.dom) {
	                nextChild$1 = nextChildren[i] = cloneVNode(nextChild$1);
	            }
	            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
	        }
	    }
	    else if (nextChildrenLength === 0) {
	        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
	    }
	    else if (lastChildrenLength > nextChildrenLength) {
	        for (i = commonLength; i < lastChildrenLength; i++) {
	            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
	        }
	    }
	}
	function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
	    var aLength = a.length;
	    var bLength = b.length;
	    var aEnd = aLength - 1;
	    var bEnd = bLength - 1;
	    var aStart = 0;
	    var bStart = 0;
	    var i;
	    var j;
	    var aNode;
	    var bNode;
	    var nextNode;
	    var nextPos;
	    var node;
	    if (aLength === 0) {
	        if (bLength !== 0) {
	            mountArrayChildren(b, dom, lifecycle, context, isSVG);
	        }
	        return;
	    }
	    else if (bLength === 0) {
	        removeAllChildren(dom, a, lifecycle, isRecycling);
	        return;
	    }
	    var aStartNode = a[aStart];
	    var bStartNode = b[bStart];
	    var aEndNode = a[aEnd];
	    var bEndNode = b[bEnd];
	    if (bStartNode.dom) {
	        b[bStart] = bStartNode = cloneVNode(bStartNode);
	    }
	    if (bEndNode.dom) {
	        b[bEnd] = bEndNode = cloneVNode(bEndNode);
	    }
	    // Step 1
	    /* eslint no-constant-condition: 0 */
	    outer: while (true) {
	        // Sync nodes with the same key at the beginning.
	        while (aStartNode.key === bStartNode.key) {
	            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	            aStart++;
	            bStart++;
	            if (aStart > aEnd || bStart > bEnd) {
	                break outer;
	            }
	            aStartNode = a[aStart];
	            bStartNode = b[bStart];
	            if (bStartNode.dom) {
	                b[bStart] = bStartNode = cloneVNode(bStartNode);
	            }
	        }
	        // Sync nodes with the same key at the end.
	        while (aEndNode.key === bEndNode.key) {
	            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	            aEnd--;
	            bEnd--;
	            if (aStart > aEnd || bStart > bEnd) {
	                break outer;
	            }
	            aEndNode = a[aEnd];
	            bEndNode = b[bEnd];
	            if (bEndNode.dom) {
	                b[bEnd] = bEndNode = cloneVNode(bEndNode);
	            }
	        }
	        // Move and sync nodes from right to left.
	        if (aEndNode.key === bStartNode.key) {
	            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
	            aEnd--;
	            bStart++;
	            aEndNode = a[aEnd];
	            bStartNode = b[bStart];
	            if (bStartNode.dom) {
	                b[bStart] = bStartNode = cloneVNode(bStartNode);
	            }
	            continue;
	        }
	        // Move and sync nodes from left to right.
	        if (aStartNode.key === bEndNode.key) {
	            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	            nextPos = bEnd + 1;
	            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	            insertOrAppend(dom, bEndNode.dom, nextNode);
	            aStart++;
	            bEnd--;
	            aStartNode = a[aStart];
	            bEndNode = b[bEnd];
	            if (bEndNode.dom) {
	                b[bEnd] = bEndNode = cloneVNode(bEndNode);
	            }
	            continue;
	        }
	        break;
	    }
	    if (aStart > aEnd) {
	        if (bStart <= bEnd) {
	            nextPos = bEnd + 1;
	            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	            while (bStart <= bEnd) {
	                node = b[bStart];
	                if (node.dom) {
	                    b[bStart] = node = cloneVNode(node);
	                }
	                bStart++;
	                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	            }
	        }
	    }
	    else if (bStart > bEnd) {
	        while (aStart <= aEnd) {
	            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
	        }
	    }
	    else {
	        aLength = aEnd - aStart + 1;
	        bLength = bEnd - bStart + 1;
	        var aNullable = a;
	        var sources = new Array(bLength);
	        // Mark all nodes as inserted.
	        for (i = 0; i < bLength; i++) {
	            sources[i] = -1;
	        }
	        var moved = false;
	        var pos = 0;
	        var patched = 0;
	        if ((bLength <= 4) || (aLength * bLength <= 16)) {
	            for (i = aStart; i <= aEnd; i++) {
	                aNode = a[i];
	                if (patched < bLength) {
	                    for (j = bStart; j <= bEnd; j++) {
	                        bNode = b[j];
	                        if (aNode.key === bNode.key) {
	                            sources[j - bStart] = i;
	                            if (pos > j) {
	                                moved = true;
	                            }
	                            else {
	                                pos = j;
	                            }
	                            if (bNode.dom) {
	                                b[j] = bNode = cloneVNode(bNode);
	                            }
	                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                            patched++;
	                            aNullable[i] = null;
	                            break;
	                        }
	                    }
	                }
	            }
	        }
	        else {
	            var keyIndex = new Map();
	            for (i = bStart; i <= bEnd; i++) {
	                node = b[i];
	                keyIndex.set(node.key, i);
	            }
	            for (i = aStart; i <= aEnd; i++) {
	                aNode = a[i];
	                if (patched < bLength) {
	                    j = keyIndex.get(aNode.key);
	                    if (!isUndefined(j)) {
	                        bNode = b[j];
	                        sources[j - bStart] = i;
	                        if (pos > j) {
	                            moved = true;
	                        }
	                        else {
	                            pos = j;
	                        }
	                        if (bNode.dom) {
	                            b[j] = bNode = cloneVNode(bNode);
	                        }
	                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                        patched++;
	                        aNullable[i] = null;
	                    }
	                }
	            }
	        }
	        if (aLength === a.length && patched === 0) {
	            removeAllChildren(dom, a, lifecycle, isRecycling);
	            while (bStart < bLength) {
	                node = b[bStart];
	                if (node.dom) {
	                    b[bStart] = node = cloneVNode(node);
	                }
	                bStart++;
	                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
	            }
	        }
	        else {
	            i = aLength - patched;
	            while (i > 0) {
	                aNode = aNullable[aStart++];
	                if (!isNull(aNode)) {
	                    unmount(aNode, dom, lifecycle, true, isRecycling);
	                    i--;
	                }
	            }
	            if (moved) {
	                var seq = lis_algorithm(sources);
	                j = seq.length - 1;
	                for (i = bLength - 1; i >= 0; i--) {
	                    if (sources[i] === -1) {
	                        pos = i + bStart;
	                        node = b[pos];
	                        if (node.dom) {
	                            b[pos] = node = cloneVNode(node);
	                        }
	                        nextPos = pos + 1;
	                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                        insertOrAppend(dom, mount(node, dom, lifecycle, context, isSVG), nextNode);
	                    }
	                    else {
	                        if (j < 0 || i !== seq[j]) {
	                            pos = i + bStart;
	                            node = b[pos];
	                            nextPos = pos + 1;
	                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                            insertOrAppend(dom, node.dom, nextNode);
	                        }
	                        else {
	                            j--;
	                        }
	                    }
	                }
	            }
	            else if (patched !== bLength) {
	                for (i = bLength - 1; i >= 0; i--) {
	                    if (sources[i] === -1) {
	                        pos = i + bStart;
	                        node = b[pos];
	                        if (node.dom) {
	                            b[pos] = node = cloneVNode(node);
	                        }
	                        nextPos = pos + 1;
	                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	                    }
	                }
	            }
	        }
	    }
	}
	// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
	function lis_algorithm(a) {
	    var p = a.slice(0);
	    var result = [];
	    result.push(0);
	    var i;
	    var j;
	    var u;
	    var v;
	    var c;
	    for (i = 0; i < a.length; i++) {
	        if (a[i] === -1) {
	            continue;
	        }
	        j = result[result.length - 1];
	        if (a[j] < a[i]) {
	            p[i] = j;
	            result.push(i);
	            continue;
	        }
	        u = 0;
	        v = result.length - 1;
	        while (u < v) {
	            c = ((u + v) / 2) | 0;
	            if (a[result[c]] < a[i]) {
	                u = c + 1;
	            }
	            else {
	                v = c;
	            }
	        }
	        if (a[i] < a[result[u]]) {
	            if (u > 0) {
	                p[i] = result[u - 1];
	            }
	            result[u] = i;
	        }
	    }
	    u = result.length;
	    v = result[u - 1];
	    while (u-- > 0) {
	        result[u] = v;
	        v = p[v];
	    }
	    return result;
	}
	function patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle) {
	    if (skipProps[prop]) {
	        return;
	    }
	    if (booleanProps[prop]) {
	        dom[prop] = nextValue ? true : false;
	    }
	    else if (strictProps[prop]) {
	        var value = isNullOrUndef(nextValue) ? '' : nextValue;
	        if (dom[prop] !== value) {
	            dom[prop] = value;
	        }
	    }
	    else if (lastValue !== nextValue) {
	        if (isAttrAnEvent(prop)) {
	            patchEvent(prop, lastValue, nextValue, dom, lifecycle);
	        }
	        else if (isNullOrUndef(nextValue)) {
	            dom.removeAttribute(prop);
	        }
	        else if (prop === 'className') {
	            if (isSVG) {
	                dom.setAttribute('class', nextValue);
	            }
	            else {
	                dom.className = nextValue;
	            }
	        }
	        else if (prop === 'style') {
	            patchStyle(lastValue, nextValue, dom);
	        }
	        else if (prop === 'dangerouslySetInnerHTML') {
	            var lastHtml = lastValue && lastValue.__html;
	            var nextHtml = nextValue && nextValue.__html;
	            if (lastHtml !== nextHtml) {
	                if (!isNullOrUndef(nextHtml)) {
	                    dom.innerHTML = nextHtml;
	                }
	            }
	        }
	        else if (prop !== 'childrenType' && prop !== 'ref' && prop !== 'key') {
	            var dehyphenProp;
	            if (dehyphenProps[prop]) {
	                dehyphenProp = dehyphenProps[prop];
	            }
	            else if (isSVG && prop.match(probablyKebabProps)) {
	                dehyphenProp = prop.replace(/([a-z])([A-Z]|1)/g, kebabize);
	                dehyphenProps[prop] = dehyphenProp;
	            }
	            else {
	                dehyphenProp = prop;
	            }
	            var ns = namespaces[prop];
	            if (ns) {
	                dom.setAttributeNS(ns, dehyphenProp, nextValue);
	            }
	            else {
	                dom.setAttribute(dehyphenProp, nextValue);
	            }
	        }
	    }
	}
	function patchEvents(lastEvents, nextEvents, dom, lifecycle) {
	    lastEvents = lastEvents || EMPTY_OBJ;
	    nextEvents = nextEvents || EMPTY_OBJ;
	    if (nextEvents !== EMPTY_OBJ) {
	        for (var name in nextEvents) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, lastEvents[name], nextEvents[name], dom, lifecycle);
	        }
	    }
	    if (lastEvents !== EMPTY_OBJ) {
	        for (var name$1 in lastEvents) {
	            // do not add a hasOwnProperty check here, it affects performance
	            if (isNullOrUndef(nextEvents[name$1])) {
	                patchEvent(name$1, lastEvents[name$1], null, dom, lifecycle);
	            }
	        }
	    }
	}
	function patchEvent(name, lastValue, nextValue, dom, lifecycle) {
	    if (lastValue !== nextValue) {
	        var nameLowerCase = name.toLowerCase();
	        var domEvent = dom[nameLowerCase];
	        // if the function is wrapped, that means it's been controlled by a wrapper
	        if (domEvent && domEvent.wrapped) {
	            return;
	        }
	        if (delegatedProps[name]) {
	            handleEvent(name, lastValue, nextValue, dom);
	        }
	        else {
	            if (lastValue !== nextValue) {
	                if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
	                    var linkEvent = nextValue.event;
	                    if (linkEvent && isFunction(linkEvent)) {
	                        if (!dom._data) {
	                            dom[nameLowerCase] = function (e) {
	                                linkEvent(e.currentTarget._data, e);
	                            };
	                        }
	                        dom._data = nextValue.data;
	                    }
	                    else {
	                        if (process.env.NODE_ENV !== 'production') {
	                            throwError(("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent."));
	                        }
	                        throwError();
	                    }
	                }
	                else {
	                    dom[nameLowerCase] = nextValue;
	                }
	            }
	        }
	    }
	}
	function patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG) {
	    lastProps = lastProps || EMPTY_OBJ;
	    nextProps = nextProps || EMPTY_OBJ;
	    if (nextProps !== EMPTY_OBJ) {
	        for (var prop in nextProps) {
	            // do not add a hasOwnProperty check here, it affects performance
	            var nextValue = nextProps[prop];
	            var lastValue = lastProps[prop];
	            if (isNullOrUndef(nextValue)) {
	                removeProp(prop, nextValue, dom);
	            }
	            else {
	                patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle);
	            }
	        }
	    }
	    if (lastProps !== EMPTY_OBJ) {
	        for (var prop$1 in lastProps) {
	            // do not add a hasOwnProperty check here, it affects performance
	            if (isNullOrUndef(nextProps[prop$1])) {
	                removeProp(prop$1, lastProps[prop$1], dom);
	            }
	        }
	    }
	}
	// We are assuming here that we come from patchProp routine
	// -nextAttrValue cannot be null or undefined
	function patchStyle(lastAttrValue, nextAttrValue, dom) {
	    if (isString(nextAttrValue)) {
	        dom.style.cssText = nextAttrValue;
	        return;
	    }
	    for (var style in nextAttrValue) {
	        // do not add a hasOwnProperty check here, it affects performance
	        var value = nextAttrValue[style];
	        if (isNumber(value) && !isUnitlessNumber[style]) {
	            dom.style[style] = value + 'px';
	        }
	        else {
	            dom.style[style] = value;
	        }
	    }
	    if (!isNullOrUndef(lastAttrValue)) {
	        for (var style$1 in lastAttrValue) {
	            if (isNullOrUndef(nextAttrValue[style$1])) {
	                dom.style[style$1] = '';
	            }
	        }
	    }
	}
	function removeProp(prop, lastValue, dom) {
	    if (prop === 'className') {
	        dom.removeAttribute('class');
	    }
	    else if (prop === 'value') {
	        dom.value = '';
	    }
	    else if (prop === 'style') {
	        dom.removeAttribute('style');
	    }
	    else if (isAttrAnEvent(prop)) {
	        handleEvent(name, lastValue, null, dom);
	    }
	    else {
	        dom.removeAttribute(prop);
	    }
	}
	
	var componentPools = new Map();
	var elementPools = new Map();
	function recycleElement(vNode, lifecycle, context, isSVG) {
	    var tag = vNode.type;
	    var key = vNode.key;
	    var pools = elementPools.get(tag);
	    if (!isUndefined(pools)) {
	        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	        if (!isUndefined(pool)) {
	            var recycledVNode = pool.pop();
	            if (!isUndefined(recycledVNode)) {
	                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
	                return vNode.dom;
	            }
	        }
	    }
	    return null;
	}
	function poolElement(vNode) {
	    var tag = vNode.type;
	    var key = vNode.key;
	    var pools = elementPools.get(tag);
	    if (isUndefined(pools)) {
	        pools = {
	            nonKeyed: [],
	            keyed: new Map()
	        };
	        elementPools.set(tag, pools);
	    }
	    if (isNull(key)) {
	        pools.nonKeyed.push(vNode);
	    }
	    else {
	        var pool = pools.keyed.get(key);
	        if (isUndefined(pool)) {
	            pool = [];
	            pools.keyed.set(key, pool);
	        }
	        pool.push(vNode);
	    }
	}
	function recycleComponent(vNode, lifecycle, context, isSVG) {
	    var type = vNode.type;
	    var key = vNode.key;
	    var pools = componentPools.get(type);
	    if (!isUndefined(pools)) {
	        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	        if (!isUndefined(pool)) {
	            var recycledVNode = pool.pop();
	            if (!isUndefined(recycledVNode)) {
	                var flags = vNode.flags;
	                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
	                if (!failed) {
	                    return vNode.dom;
	                }
	            }
	        }
	    }
	    return null;
	}
	function poolComponent(vNode) {
	    var type = vNode.type;
	    var key = vNode.key;
	    var hooks = vNode.ref;
	    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
	        hooks.onComponentWillUnmount ||
	        hooks.onComponentDidMount ||
	        hooks.onComponentWillUpdate ||
	        hooks.onComponentDidUpdate);
	    if (nonRecycleHooks) {
	        return;
	    }
	    var pools = componentPools.get(type);
	    if (isUndefined(pools)) {
	        pools = {
	            nonKeyed: [],
	            keyed: new Map()
	        };
	        componentPools.set(type, pools);
	    }
	    if (isNull(key)) {
	        pools.nonKeyed.push(vNode);
	    }
	    else {
	        var pool = pools.keyed.get(key);
	        if (isUndefined(pool)) {
	            pool = [];
	            pools.keyed.set(key, pool);
	        }
	        pool.push(vNode);
	    }
	}
	
	function mount(vNode, parentDom, lifecycle, context, isSVG) {
	    var flags = vNode.flags;
	    if (flags & 3970 /* Element */) {
	        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
	    }
	    else if (flags & 28 /* Component */) {
	        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	    }
	    else if (flags & 4096 /* Void */) {
	        return mountVoid(vNode, parentDom);
	    }
	    else if (flags & 1 /* Text */) {
	        return mountText(vNode, parentDom);
	    }
	    else {
	        if (process.env.NODE_ENV !== 'production') {
	            if (typeof vNode === 'object') {
	                throwError(("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + (JSON.stringify(vNode)) + "\"."));
	            }
	            else {
	                throwError(("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
	            }
	        }
	        throwError();
	    }
	}
	function mountText(vNode, parentDom) {
	    var dom = document.createTextNode(vNode.children);
	    vNode.dom = dom;
	    if (parentDom) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountVoid(vNode, parentDom) {
	    var dom = document.createTextNode('');
	    vNode.dom = dom;
	    if (parentDom) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
	    if (options.recyclingEnabled) {
	        var dom$1 = recycleElement(vNode, lifecycle, context, isSVG);
	        if (!isNull(dom$1)) {
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom$1);
	            }
	            return dom$1;
	        }
	    }
	    var tag = vNode.type;
	    var flags = vNode.flags;
	    if (isSVG || (flags & 128 /* SvgElement */)) {
	        isSVG = true;
	    }
	    var dom = documentCreateElement(tag, isSVG);
	    var children = vNode.children;
	    var props = vNode.props;
	    var events = vNode.events;
	    var ref = vNode.ref;
	    vNode.dom = dom;
	    if (!isNull(children)) {
	        if (isStringOrNumber(children)) {
	            setTextContent(dom, children);
	        }
	        else if (isArray(children)) {
	            mountArrayChildren(children, dom, lifecycle, context, isSVG);
	        }
	        else if (isVNode(children)) {
	            mount(children, dom, lifecycle, context, isSVG);
	        }
	    }
	    if (!(flags & 2 /* HtmlElement */)) {
	        processElement(flags, vNode, dom);
	    }
	    if (!isNull(props)) {
	        for (var prop in props) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	        }
	    }
	    if (!isNull(events)) {
	        for (var name in events) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, null, events[name], dom, lifecycle);
	        }
	    }
	    if (!isNull(ref)) {
	        mountRef(dom, ref, lifecycle);
	    }
	    if (!isNull(parentDom)) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
	    for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (!isInvalid(child)) {
	            if (child.dom) {
	                children[i] = child = cloneVNode(child);
	            }
	            mount(children[i], dom, lifecycle, context, isSVG);
	        }
	    }
	}
	function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
	    if (options.recyclingEnabled) {
	        var dom$1 = recycleComponent(vNode, lifecycle, context, isSVG);
	        if (!isNull(dom$1)) {
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom$1);
	            }
	            return dom$1;
	        }
	    }
	    var type = vNode.type;
	    var props = vNode.props || EMPTY_OBJ;
	    var defaultProps = type.defaultProps;
	    var ref = vNode.ref;
	    var dom;
	    if (!isUndefined(defaultProps)) {
	        copyPropsTo(defaultProps, props);
	        vNode.props = props;
	    }
	    if (isClass) {
	        var instance = createClassComponentInstance(vNode, type, props, context, isSVG);
	        // If instance does not have componentWillUnmount specified we can enable fastUnmount
	        var input = instance._lastInput;
	        var prevFastUnmount = lifecycle.fastUnmount;
	        // we store the fastUnmount value, but we set it back to true on the lifecycle
	        // we do this so we can determine if the component render has a fastUnmount or not
	        lifecycle.fastUnmount = true;
	        instance._vNode = vNode;
	        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
	        // we now create a lifecycle for this component and store the fastUnmount value
	        var subLifecycle = instance._lifecycle = new Lifecycle();
	        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
	        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
	        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
	        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
	        if (!isNull(parentDom)) {
	            appendChild(parentDom, dom);
	        }
	        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
	        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	        vNode.children = instance;
	    }
	    else {
	        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
	        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
	        vNode.children = input$1;
	        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
	        if (!isNull(parentDom)) {
	            appendChild(parentDom, dom);
	        }
	    }
	    return dom;
	}
	function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
	    if (ref) {
	        if (isFunction(ref)) {
	            ref(instance);
	        }
	        else {
	            if (process.env.NODE_ENV !== 'production') {
	                if (isStringOrNumber(ref)) {
	                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	                }
	                else if (isObject(ref) && (vNode.flags & 4 /* ComponentClass */)) {
	                    throwError('functional component lifecycle events are not supported on ES2015 class components.');
	                }
	                else {
	                    throwError(("a bad value for \"ref\" was used on component: \"" + (JSON.stringify(ref)) + "\""));
	                }
	            }
	            throwError();
	        }
	    }
	    var cDM = instance.componentDidMount;
	    var afterMount = options.afterMount;
	    if (!isUndefined(cDM) || !isNull(afterMount)) {
	        lifecycle.addListener(function () {
	            afterMount && afterMount(vNode);
	            cDM && instance.componentDidMount();
	        });
	    }
	}
	function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
	    if (ref) {
	        if (!isNullOrUndef(ref.onComponentWillMount)) {
	            ref.onComponentWillMount();
	        }
	        if (!isNullOrUndef(ref.onComponentDidMount)) {
	            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
	        }
	        if (!isNullOrUndef(ref.onComponentWillUnmount)) {
	            lifecycle.fastUnmount = false;
	        }
	    }
	}
	function mountRef(dom, value, lifecycle) {
	    if (isFunction(value)) {
	        lifecycle.fastUnmount = false;
	        lifecycle.addListener(function () { return value(dom); });
	    }
	    else {
	        if (isInvalid(value)) {
	            return;
	        }
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	        }
	        throwError();
	    }
	}
	
	function createClassComponentInstance(vNode, Component, props, context, isSVG) {
	    if (isUndefined(context)) {
	        context = {};
	    }
	    var instance = new Component(props, context);
	    instance.context = context;
	    if (instance.props === EMPTY_OBJ) {
	        instance.props = props;
	    }
	    instance._patch = patch;
	    if (options.findDOMNodeEnabled) {
	        instance._componentToDOMNodeMap = componentToDOMNodeMap;
	    }
	    instance._unmounted = false;
	    instance._pendingSetState = true;
	    instance._isSVG = isSVG;
	    instance.componentWillMount();
	    var childContext = instance.getChildContext();
	    if (!isNullOrUndef(childContext)) {
	        instance._childContext = Object.assign({}, context, childContext);
	    }
	    else {
	        instance._childContext = context;
	    }
	    options.beforeRender && options.beforeRender(instance);
	    var input = instance.render(props, instance.state, context);
	    options.afterRender && options.afterRender(instance);
	    if (isArray(input)) {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	        }
	        throwError();
	    }
	    else if (isInvalid(input)) {
	        input = createVoidVNode();
	    }
	    else if (isStringOrNumber(input)) {
	        input = createTextVNode(input);
	    }
	    else {
	        if (input.dom) {
	            input = cloneVNode(input);
	        }
	        if (input.flags & 28 /* Component */) {
	            // if we have an input that is also a component, we run into a tricky situation
	            // where the root vNode needs to always have the correct DOM entry
	            // so we break monomorphism on our input and supply it our vNode as parentVNode
	            // we can optimise this in the future, but this gets us out of a lot of issues
	            input.parentVNode = vNode;
	        }
	    }
	    instance._pendingSetState = false;
	    instance._lastInput = input;
	    return instance;
	}
	function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
	    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
	}
	function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
	    var shallowUnmount = false;
	    // we cannot cache nodeType here as vNode might be re-assigned below
	    if (vNode.flags & 28 /* Component */) {
	        // if we are accessing a stateful or stateless component, we want to access their last rendered input
	        // accessing their DOM node is not useful to us here
	        unmount(vNode, null, lifecycle, false, isRecycling);
	        vNode = vNode.children._lastInput || vNode.children;
	        shallowUnmount = true;
	    }
	    replaceChild(parentDom, dom, vNode.dom);
	    unmount(vNode, null, lifecycle, false, isRecycling);
	}
	function createFunctionalComponentInput(vNode, component, props, context) {
	    var input = component(props, context);
	    if (isArray(input)) {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	        }
	        throwError();
	    }
	    else if (isInvalid(input)) {
	        input = createVoidVNode();
	    }
	    else if (isStringOrNumber(input)) {
	        input = createTextVNode(input);
	    }
	    else {
	        if (input.dom) {
	            input = cloneVNode(input);
	        }
	        if (input.flags & 28 /* Component */) {
	            // if we have an input that is also a component, we run into a tricky situation
	            // where the root vNode needs to always have the correct DOM entry
	            // so we break monomorphism on our input and supply it our vNode as parentVNode
	            // we can optimise this in the future, but this gets us out of a lot of issues
	            input.parentVNode = vNode;
	        }
	    }
	    return input;
	}
	function setTextContent(dom, text) {
	    if (text !== '') {
	        dom.textContent = text;
	    }
	    else {
	        dom.appendChild(document.createTextNode(''));
	    }
	}
	function updateTextContent(dom, text) {
	    dom.firstChild.nodeValue = text;
	}
	function appendChild(parentDom, dom) {
	    parentDom.appendChild(dom);
	}
	function insertOrAppend(parentDom, newNode, nextNode) {
	    if (isNullOrUndef(nextNode)) {
	        appendChild(parentDom, newNode);
	    }
	    else {
	        parentDom.insertBefore(newNode, nextNode);
	    }
	}
	function documentCreateElement(tag, isSVG) {
	    if (isSVG === true) {
	        return document.createElementNS(svgNS, tag);
	    }
	    else {
	        return document.createElement(tag);
	    }
	}
	function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    unmount(lastNode, null, lifecycle, false, isRecycling);
	    var dom = mount(nextNode, null, lifecycle, context, isSVG);
	    nextNode.dom = dom;
	    replaceChild(parentDom, dom, lastNode.dom);
	}
	function replaceChild(parentDom, nextDom, lastDom) {
	    if (!parentDom) {
	        parentDom = lastDom.parentNode;
	    }
	    parentDom.replaceChild(nextDom, lastDom);
	}
	function removeChild(parentDom, dom) {
	    parentDom.removeChild(dom);
	}
	function removeAllChildren(dom, children, lifecycle, isRecycling) {
	    dom.textContent = '';
	    if (!lifecycle.fastUnmount || (lifecycle.fastUnmount && options.recyclingEnabled && !isRecycling)) {
	        removeChildren(null, children, lifecycle, isRecycling);
	    }
	}
	function removeChildren(dom, children, lifecycle, isRecycling) {
	    for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (!isInvalid(child)) {
	            unmount(child, dom, lifecycle, true, isRecycling);
	        }
	    }
	}
	function isKeyed(lastChildren, nextChildren) {
	    return nextChildren.length && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key)
	        && lastChildren.length && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
	}
	
	function normalizeChildNodes(parentDom) {
	    var dom = parentDom.firstChild;
	    while (dom) {
	        if (dom.nodeType === 8) {
	            if (dom.data === '!') {
	                var placeholder = document.createTextNode('');
	                parentDom.replaceChild(placeholder, dom);
	                dom = dom.nextSibling;
	            }
	            else {
	                var lastDom = dom.previousSibling;
	                parentDom.removeChild(dom);
	                dom = lastDom || parentDom.firstChild;
	            }
	        }
	        else {
	            dom = dom.nextSibling;
	        }
	    }
	}
	function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
	    var type = vNode.type;
	    var props = vNode.props || EMPTY_OBJ;
	    var ref = vNode.ref;
	    vNode.dom = dom;
	    if (isClass) {
	        var _isSVG = dom.namespaceURI === svgNS;
	        var defaultProps = type.defaultProps;
	        if (!isUndefined(defaultProps)) {
	            copyPropsTo(defaultProps, props);
	            vNode.props = props;
	        }
	        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG);
	        // If instance does not have componentWillUnmount specified we can enable fastUnmount
	        var prevFastUnmount = lifecycle.fastUnmount;
	        var input = instance._lastInput;
	        // we store the fastUnmount value, but we set it back to true on the lifecycle
	        // we do this so we can determine if the component render has a fastUnmount or not
	        lifecycle.fastUnmount = true;
	        instance._vComponent = vNode;
	        instance._vNode = vNode;
	        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
	        // we now create a lifecycle for this component and store the fastUnmount value
	        var subLifecycle = instance._lifecycle = new Lifecycle();
	        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
	        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
	        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
	        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
	        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
	        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	        vNode.children = instance;
	    }
	    else {
	        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
	        hydrate(input$1, dom, lifecycle, context, isSVG);
	        vNode.children = input$1;
	        vNode.dom = input$1.dom;
	        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
	    }
	    return dom;
	}
	function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
	    var tag = vNode.type;
	    var children = vNode.children;
	    var props = vNode.props;
	    var events = vNode.events;
	    var flags = vNode.flags;
	    var ref = vNode.ref;
	    if (isSVG || (flags & 128 /* SvgElement */)) {
	        isSVG = true;
	    }
	    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
	        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
	        vNode.dom = newDom;
	        replaceChild(dom.parentNode, newDom, dom);
	        return newDom;
	    }
	    vNode.dom = dom;
	    if (children) {
	        hydrateChildren(children, dom, lifecycle, context, isSVG);
	    }
	    if (!(flags & 2 /* HtmlElement */)) {
	        processElement(flags, vNode, dom);
	    }
	    if (props) {
	        for (var prop in props) {
	            patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	        }
	    }
	    if (events) {
	        for (var name in events) {
	            patchEvent(name, null, events[name], dom, lifecycle);
	        }
	    }
	    if (ref) {
	        mountRef(dom, ref, lifecycle);
	    }
	    return dom;
	}
	function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
	    normalizeChildNodes(parentDom);
	    var dom = parentDom.firstChild;
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (isObject(child) && !isNull(child)) {
	                if (dom) {
	                    dom = hydrate(child, dom, lifecycle, context, isSVG);
	                    dom = dom.nextSibling;
	                }
	                else {
	                    mount(child, parentDom, lifecycle, context, isSVG);
	                }
	            }
	        }
	    }
	    else if (isStringOrNumber(children)) {
	        if (dom && dom.nodeType === 3) {
	            if (dom.nodeValue !== children) {
	                dom.nodeValue = children;
	            }
	        }
	        else if (children) {
	            parentDom.textContent = children;
	        }
	        dom = dom.nextSibling;
	    }
	    else if (isObject(children)) {
	        hydrate(children, dom, lifecycle, context, isSVG);
	        dom = dom.nextSibling;
	    }
	    // clear any other DOM nodes, there should be only a single entry for the root
	    while (dom) {
	        parentDom.removeChild(dom);
	        dom = dom.nextSibling;
	    }
	}
	function hydrateText(vNode, dom) {
	    if (dom.nodeType !== 3) {
	        var newDom = mountText(vNode, null);
	        vNode.dom = newDom;
	        replaceChild(dom.parentNode, newDom, dom);
	        return newDom;
	    }
	    var text = vNode.children;
	    if (dom.nodeValue !== text) {
	        dom.nodeValue = text;
	    }
	    vNode.dom = dom;
	    return dom;
	}
	function hydrateVoid(vNode, dom) {
	    vNode.dom = dom;
	}
	function hydrate(vNode, dom, lifecycle, context, isSVG) {
	    if (process.env.NODE_ENV !== 'production') {
	        if (isInvalid(dom)) {
	            throwError("failed to hydrate. The server-side render doesn't match client side.");
	        }
	    }
	    var flags = vNode.flags;
	    if (flags & 28 /* Component */) {
	        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	    }
	    else if (flags & 3970 /* Element */) {
	        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
	    }
	    else if (flags & 1 /* Text */) {
	        return hydrateText(vNode, dom);
	    }
	    else if (flags & 4096 /* Void */) {
	        return hydrateVoid(vNode, dom);
	    }
	    else {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError(("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
	        }
	        throwError();
	    }
	}
	function hydrateRoot(input, parentDom, lifecycle) {
	    var dom = parentDom && parentDom.firstChild;
	    if (dom) {
	        hydrate(input, dom, lifecycle, {}, false);
	        dom = parentDom.firstChild;
	        // clear any other DOM nodes, there should be only a single entry for the root
	        while (dom = dom.nextSibling) {
	            parentDom.removeChild(dom);
	        }
	        return true;
	    }
	    return false;
	}
	
	// rather than use a Map, like we did before, we can use an array here
	// given there shouldn't be THAT many roots on the page, the difference
	// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
	var roots = [];
	var componentToDOMNodeMap = new Map();
	options.roots = roots;
	function findDOMNode(ref) {
	    if (!options.findDOMNodeEnabled) {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
	        }
	        throwError();
	    }
	    var dom = ref && ref.nodeType ? ref : null;
	    return componentToDOMNodeMap.get(ref) || dom;
	}
	function getRoot(dom) {
	    for (var i = 0; i < roots.length; i++) {
	        var root = roots[i];
	        if (root.dom === dom) {
	            return root;
	        }
	    }
	    return null;
	}
	
	function setRoot(dom, input, lifecycle) {
	    var root = {
	        dom: dom,
	        input: input,
	        lifecycle: lifecycle
	    };
	    roots.push(root);
	    return root;
	}
	function removeRoot(root) {
	    for (var i = 0; i < roots.length; i++) {
	        if (roots[i] === root) {
	            roots.splice(i, 1);
	            return;
	        }
	    }
	}
	var documentBody = isBrowser ? document.body : null;
	function render(input, parentDom) {
	    if (documentBody === parentDom) {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
	        }
	        throwError();
	    }
	    if (input === NO_OP) {
	        return;
	    }
	    var root = getRoot(parentDom);
	    if (isNull(root)) {
	        var lifecycle = new Lifecycle();
	        if (!isInvalid(input)) {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            if (!hydrateRoot(input, parentDom, lifecycle)) {
	                mount(input, parentDom, lifecycle, {}, false);
	            }
	            root = setRoot(parentDom, input, lifecycle);
	            lifecycle.trigger();
	        }
	    }
	    else {
	        var lifecycle$1 = root.lifecycle;
	        lifecycle$1.listeners = [];
	        if (isNullOrUndef(input)) {
	            unmount(root.input, parentDom, lifecycle$1, false, false);
	            removeRoot(root);
	        }
	        else {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            patch(root.input, input, parentDom, lifecycle$1, {}, false, false);
	        }
	        lifecycle$1.trigger();
	        root.input = input;
	    }
	    if (root) {
	        var rootInput = root.input;
	        if (rootInput && (rootInput.flags & 28 /* Component */)) {
	            return rootInput.children;
	        }
	    }
	}
	function createRenderer(_parentDom) {
	    var parentDom = _parentDom || null;
	    return function renderer(lastInput, nextInput) {
	        if (!parentDom) {
	            parentDom = lastInput;
	        }
	        render(nextInput, parentDom);
	    };
	}
	
	function linkEvent(data, event) {
	    return { data: data, event: event };
	}
	
	if (process.env.NODE_ENV !== 'production') {
		Object.freeze(EMPTY_OBJ);
		var testFunc = function testFn() {};
		warning(
			(testFunc.name || testFunc.toString()).indexOf('testFn') !== -1,
			'It looks like you\'re using a minified copy of the development build ' +
			'of Inferno. When deploying Inferno apps to production, make sure to use ' +
			'the production build which skips development warnings and is faster. ' +
			'See http://infernojs.org for more details.'
		);
	}
	
	// we duplicate it so it plays nicely with different module loading systems
	var index = {
		linkEvent: linkEvent,
		// core shapes
		createVNode: createVNode,
	
		// cloning
		cloneVNode: cloneVNode,
	
		// used to shared common items between Inferno libs
		NO_OP: NO_OP,
		EMPTY_OBJ: EMPTY_OBJ,
	
		// DOM
		render: render,
		findDOMNode: findDOMNode,
		createRenderer: createRenderer,
		options: options
	};
	
	exports['default'] = index;
	exports.linkEvent = linkEvent;
	exports.createVNode = createVNode;
	exports.cloneVNode = cloneVNode;
	exports.NO_OP = NO_OP;
	exports.EMPTY_OBJ = EMPTY_OBJ;
	exports.render = render;
	exports.findDOMNode = findDOMNode;
	exports.createRenderer = createRenderer;
	exports.options = options;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5)


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decorator = exports.connect = exports.StateContainer = exports.Container = undefined;
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _infernoCreateElement = __webpack_require__(6);
	
	var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);
	
	var _infernoComponent = __webpack_require__(8);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	var _Container = __webpack_require__(10);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _StateContainer = __webpack_require__(12);
	
	var _StateContainer2 = _interopRequireDefault(_StateContainer);
	
	var _Hoc = __webpack_require__(13);
	
	var _Hoc2 = _interopRequireDefault(_Hoc);
	
	var _connect = __webpack_require__(16);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_inferno2.default.createElement = _infernoCreateElement2.default;
	_inferno2.default.Component = _infernoComponent2.default;
	
	var Container = exports.Container = (0, _Container2.default)(_inferno2.default);
	var StateContainer = exports.StateContainer = (0, _StateContainer2.default)(_inferno2.default);
	var connect = exports.connect = (0, _connect2.default)((0, _Hoc2.default)(_inferno2.default));
	var decorator = exports.decorator = (0, _connect.decoratorFactory)((0, _Hoc2.default)(_inferno2.default));
	//# sourceMappingURL=inferno.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);
	module.exports.default = module.exports;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-create-element v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	    (global.Inferno = global.Inferno || {}, global.Inferno.createElement = factory(global.Inferno));
	}(this, (function (inferno) { 'use strict';
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	
	function isStatefulComponent(o) {
	    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}
	
	
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	
	function isAttrAnEvent(attr) {
	    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}
	function isString(obj) {
	    return typeof obj === 'string';
	}
	
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	function isObject(o) {
	    return typeof o === 'object';
	}
	
	var componentHooks = {
	    onComponentWillMount: true,
	    onComponentDidMount: true,
	    onComponentWillUnmount: true,
	    onComponentShouldUpdate: true,
	    onComponentWillUpdate: true,
	    onComponentDidUpdate: true
	};
	function createElement$1(name, props) {
	    var _children = [], len = arguments.length - 2;
	    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];
	
	    if (isInvalid(name) || isObject(name)) {
	        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
	    }
	    var children = _children;
	    var ref = null;
	    var key = null;
	    var events = null;
	    var flags = 0;
	    if (_children) {
	        if (_children.length === 1) {
	            children = _children[0];
	        }
	        else if (_children.length === 0) {
	            children = undefined;
	        }
	    }
	    if (isString(name)) {
	        flags = 2 /* HtmlElement */;
	        switch (name) {
	            case 'svg':
	                flags = 128 /* SvgElement */;
	                break;
	            case 'input':
	                flags = 512 /* InputElement */;
	                break;
	            case 'textarea':
	                flags = 1024 /* TextareaElement */;
	                break;
	            case 'select':
	                flags = 2048 /* SelectElement */;
	                break;
	            default:
	        }
	        for (var prop in props) {
	            if (prop === 'key') {
	                key = props.key;
	                delete props.key;
	            }
	            else if (prop === 'children' && isUndefined(children)) {
	                children = props.children; // always favour children args, default to props
	            }
	            else if (prop === 'ref') {
	                ref = props.ref;
	            }
	            else if (isAttrAnEvent(prop)) {
	                if (!events) {
	                    events = {};
	                }
	                events[prop] = props[prop];
	                delete props[prop];
	            }
	        }
	    }
	    else {
	        flags = isStatefulComponent(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	        if (!isUndefined(children)) {
	            if (!props) {
	                props = {};
	            }
	            props.children = children;
	            children = null;
	        }
	        for (var prop$1 in props) {
	            if (componentHooks[prop$1]) {
	                if (!ref) {
	                    ref = {};
	                }
	                ref[prop$1] = props[prop$1];
	            }
	            else if (prop$1 === 'key') {
	                key = props.key;
	                delete props.key;
	            }
	        }
	    }
	    return inferno.createVNode(flags, name, props, children, events, key, ref);
	}
	
	return createElement$1;
	
	})));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);
	module.exports.default = module.exports;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * inferno-component v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	    (global.Inferno = global.Inferno || {}, global.Inferno.Component = factory(global.Inferno));
	}(this, (function (inferno) { 'use strict';
	
	var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	var isBrowser = typeof window !== 'undefined' && window.document;
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	var isArray = Array.isArray;
	
	function isStringOrNumber(obj) {
	    var type = typeof obj;
	    return type === 'string' || type === 'number';
	}
	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	
	
	
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	
	function throwError(message) {
	    if (!message) {
	        message = ERROR_MSG;
	    }
	    throw new Error(("Inferno Error: " + message));
	}
	
	var Lifecycle = function Lifecycle() {
	    this.listeners = [];
	    this.fastUnmount = true;
	};
	Lifecycle.prototype.addListener = function addListener (callback) {
	    this.listeners.push(callback);
	};
	Lifecycle.prototype.trigger = function trigger () {
	        var this$1 = this;
	
	    for (var i = 0; i < this.listeners.length; i++) {
	        this$1.listeners[i]();
	    }
	};
	
	var noOp = ERROR_MSG;
	if (process.env.NODE_ENV !== 'production') {
	    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
	}
	var componentCallbackQueue = new Map();
	// when a components root VNode is also a component, we can run into issues
	// this will recursively look for vNode.parentNode if the VNode is a component
	function updateParentComponentVNodes(vNode, dom) {
	    if (vNode.flags & 28 /* Component */) {
	        var parentVNode = vNode.parentVNode;
	        if (parentVNode) {
	            parentVNode.dom = dom;
	            updateParentComponentVNodes(parentVNode, dom);
	        }
	    }
	}
	// this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
	function createVoidVNode() {
	    return inferno.createVNode(4096 /* Void */);
	}
	function createTextVNode(text) {
	    return inferno.createVNode(1 /* Text */, null, null, text);
	}
	function addToQueue(component, force, callback) {
	    // TODO this function needs to be revised and improved on
	    var queue = componentCallbackQueue.get(component);
	    if (!queue) {
	        queue = [];
	        componentCallbackQueue.set(component, queue);
	        Promise.resolve().then(function () {
	            componentCallbackQueue.delete(component);
	            applyState(component, force, function () {
	                for (var i = 0; i < queue.length; i++) {
	                    queue[i]();
	                }
	            });
	        });
	    }
	    if (callback) {
	        queue.push(callback);
	    }
	}
	function queueStateChanges(component, newState, callback, sync) {
	    if (isFunction(newState)) {
	        newState = newState(component.state);
	    }
	    for (var stateKey in newState) {
	        component._pendingState[stateKey] = newState[stateKey];
	    }
	    if (!component._pendingSetState && isBrowser) {
	        if (sync || component._blockRender) {
	            component._pendingSetState = true;
	            applyState(component, false, callback);
	        }
	        else {
	            addToQueue(component, false, callback);
	        }
	    }
	    else {
	        component.state = Object.assign({}, component.state, component._pendingState);
	        component._pendingState = {};
	    }
	}
	function applyState(component, force, callback) {
	    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
	        component._pendingSetState = false;
	        var pendingState = component._pendingState;
	        var prevState = component.state;
	        var nextState = Object.assign({}, prevState, pendingState);
	        var props = component.props;
	        var context = component.context;
	        component._pendingState = {};
	        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
	        var didUpdate = true;
	        if (isInvalid(nextInput)) {
	            nextInput = createVoidVNode();
	        }
	        else if (nextInput === inferno.NO_OP) {
	            nextInput = component._lastInput;
	            didUpdate = false;
	        }
	        else if (isStringOrNumber(nextInput)) {
	            nextInput = createTextVNode(nextInput);
	        }
	        else if (isArray(nextInput)) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	            }
	            throwError();
	        }
	        var lastInput = component._lastInput;
	        var vNode = component._vNode;
	        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
	        component._lastInput = nextInput;
	        if (didUpdate) {
	            var subLifecycle = component._lifecycle;
	            if (!subLifecycle) {
	                subLifecycle = new Lifecycle();
	            }
	            else {
	                subLifecycle.listeners = [];
	            }
	            component._lifecycle = subLifecycle;
	            var childContext = component.getChildContext();
	            if (!isNullOrUndef(childContext)) {
	                childContext = Object.assign({}, context, component._childContext, childContext);
	            }
	            else {
	                childContext = Object.assign({}, context, component._childContext);
	            }
	            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
	            subLifecycle.trigger();
	            component.componentDidUpdate(props, prevState);
	            inferno.options.afterUpdate && inferno.options.afterUpdate(vNode);
	        }
	        var dom = vNode.dom = nextInput.dom;
	        var componentToDOMNodeMap = component._componentToDOMNodeMap;
	        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
	        updateParentComponentVNodes(vNode, dom);
	        if (!isNullOrUndef(callback)) {
	            callback();
	        }
	    }
	    else if (callback) {
	        callback();
	    }
	}
	var Component$1 = function Component(props, context) {
	    this.state = {};
	    this.refs = {};
	    this._blockRender = false;
	    this._ignoreSetState = false;
	    this._blockSetState = false;
	    this._deferSetState = false;
	    this._pendingSetState = false;
	    this._pendingState = {};
	    this._lastInput = null;
	    this._vNode = null;
	    this._unmounted = true;
	    this._lifecycle = null;
	    this._childContext = null;
	    this._patch = null;
	    this._isSVG = false;
	    this._componentToDOMNodeMap = null;
	    /** @type {object} */
	    this.props = props || inferno.EMPTY_OBJ;
	    /** @type {object} */
	    this.context = context || {};
	};
	Component$1.prototype.render = function render (nextProps, nextState, nextContext) {
	};
	Component$1.prototype.forceUpdate = function forceUpdate (callback) {
	    if (this._unmounted) {
	        return;
	    }
	    isBrowser && applyState(this, true, callback);
	};
	Component$1.prototype.setState = function setState (newState, callback) {
	    if (this._unmounted) {
	        return;
	    }
	    if (!this._blockSetState) {
	        if (!this._ignoreSetState) {
	            queueStateChanges(this, newState, callback, false);
	        }
	    }
	    else {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('cannot update state via setState() in componentWillUpdate().');
	        }
	        throwError();
	    }
	};
	Component$1.prototype.setStateSync = function setStateSync (newState) {
	    if (this._unmounted) {
	        return;
	    }
	    if (!this._blockSetState) {
	        if (!this._ignoreSetState) {
	            queueStateChanges(this, newState, null, true);
	        }
	    }
	    else {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError('cannot update state via setState() in componentWillUpdate().');
	        }
	        throwError();
	    }
	};
	Component$1.prototype.componentWillMount = function componentWillMount () {
	};
	Component$1.prototype.componentDidUpdate = function componentDidUpdate (prevProps, prevState, prevContext) {
	};
	Component$1.prototype.shouldComponentUpdate = function shouldComponentUpdate (nextProps, nextState, context) {
	    return true;
	};
	Component$1.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, context) {
	};
	Component$1.prototype.componentWillUpdate = function componentWillUpdate (nextProps, nextState, nextContext) {
	};
	Component$1.prototype.getChildContext = function getChildContext () {
	};
	Component$1.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
	    if (this._unmounted === true) {
	        if (process.env.NODE_ENV !== 'production') {
	            throwError(noOp);
	        }
	        throwError();
	    }
	    if ((prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) || prevState !== nextState || force) {
	        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
	            if (!fromSetState) {
	                this._blockRender = true;
	                this.componentWillReceiveProps(nextProps, context);
	                this._blockRender = false;
	            }
	            if (this._pendingSetState) {
	                nextState = Object.assign({}, nextState, this._pendingState);
	                this._pendingSetState = false;
	                this._pendingState = {};
	            }
	        }
	        var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
	        if (shouldUpdate !== false || force) {
	            this._blockSetState = true;
	            this.componentWillUpdate(nextProps, nextState, context);
	            this._blockSetState = false;
	            this.props = nextProps;
	            var state = this.state = nextState;
	            this.context = context;
	            inferno.options.beforeRender && inferno.options.beforeRender(this);
	            var render = this.render(nextProps, state, context);
	            inferno.options.afterRender && inferno.options.afterRender(this);
	            return render;
	        }
	    }
	    return inferno.NO_OP;
	};
	
	return Component$1;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (View) {
	  var Container = function (_View$Component) {
	    _inherits(Container, _View$Component);
	
	    function Container() {
	      _classCallCheck(this, Container);
	
	      return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	    }
	
	    _createClass(Container, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        var controller = this.props.controller;
	
	        if (!controller) {
	          (0, _utils.throwError)('You are not passing controller to Container');
	        }
	        var componentDependencyStore = controller.componentDependencyStore,
	            _controller$devtools = controller.devtools,
	            devtools = _controller$devtools === undefined ? _utils.noop : _controller$devtools;
	
	        return {
	          cerebral: {
	            controller: controller,
	            registerComponent: registerComponent.bind(this, componentDependencyStore, devtools),
	            unregisterComponent: unregisterComponent.bind(this, componentDependencyStore, devtools),
	            updateComponent: updateComponent.bind(this, componentDependencyStore, devtools)
	          }
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return this.props.children;
	      }
	    }]);
	
	    return Container;
	  }(View.Component);
	
	  if (View.PropTypes) {
	    Container.propTypes = {
	      controller: View.PropTypes.object.isRequired,
	      children: View.PropTypes.node.isRequired
	    };
	    Container.childContextTypes = {
	      cerebral: View.PropTypes.object.isRequired
	    };
	  }
	
	  return Container;
	};
	
	function registerComponent(componentDependencyStore, devtools, component, depsMap) {
	  componentDependencyStore.addEntity(component, depsMap);
	  if (devtools) {
	    devtools.updateComponentsMap(component, depsMap);
	  }
	}
	
	function unregisterComponent(componentDependencyStore, devtools, component, depsMap) {
	  componentDependencyStore.removeEntity(component, depsMap);
	  if (devtools) {
	    devtools.updateComponentsMap(component, null, depsMap);
	  }
	}
	
	function updateComponent(componentDependencyStore, devtools, component, prevDepsMap, depsMap) {
	  componentDependencyStore.removeEntity(component, prevDepsMap);
	  componentDependencyStore.addEntity(component, depsMap);
	  if (devtools) {
	    devtools.updateComponentsMap(component, depsMap, prevDepsMap);
	  }
	  component._update();
	}
	//# sourceMappingURL=Container.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.propsDiffer = propsDiffer;
	exports.cleanPath = cleanPath;
	exports.isObject = isObject;
	exports.isSerializable = isSerializable;
	exports.ensurePath = ensurePath;
	exports.throwError = throwError;
	exports.isDeveloping = isDeveloping;
	exports.isDebuggerEnv = isDebuggerEnv;
	exports.verifyStrictRender = verifyStrictRender;
	exports.debounce = debounce;
	function propsDiffer(propsA, propsB) {
	  var propsAKeys = Object.keys(propsA);
	  var propsBKeys = Object.keys(propsB);
	  var isDifferent = false;
	
	  if (propsAKeys.length !== propsBKeys.length) {
	    isDifferent = true;
	  } else {
	    for (var i = 0; i < propsBKeys.length; i++) {
	      if (propsA[propsBKeys[i]] !== propsB[propsBKeys[i]]) {
	        isDifferent = true;
	        break;
	      }
	    }
	  }
	
	  return isDifferent;
	}
	
	function cleanPath(path) {
	  return path.replace(/\.\*\*|\.\*/, '');
	}
	
	function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && !Array.isArray(obj);
	}
	
	function isSerializable(value) {
	  var additionalTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var validType = additionalTypes.reduce(function (currentValid, type) {
	    if (currentValid || value instanceof type) {
	      return true;
	    }
	
	    return currentValid;
	  }, false);
	
	  if (value !== undefined && (validType || isObject(value) && Object.prototype.toString.call(value) === '[object Object]' && value.constructor === Object || typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean' || value === null || Array.isArray(value))) {
	    return true;
	  }
	  return false;
	}
	
	function ensurePath() {
	  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  if (Array.isArray(path)) {
	    return path;
	  } else if (typeof path === 'string') {
	    return path.split('.');
	  }
	
	  return [];
	}
	
	function throwError(message) {
	  throw new Error('Cerebral - ' + message);
	}
	
	function isDeveloping() {
	  return process.env.NODE_ENV !== 'production';
	}
	
	function isDebuggerEnv() {
	  return !(typeof window === 'undefined' || typeof window.chrome === 'undefined' && !process && !process.versions && !process.versions.electron);
	}
	
	function verifyStrictRender(changes, dependencyMap) {
	  var currentPathKey = [];
	  for (var path in dependencyMap) {
	    var pathArray = cleanPath(path).split('.');
	    var currentChangeKey = pathArray.shift();
	    var currentChangePath = changes;
	    currentPathKey.push(currentChangeKey);
	    while (currentChangePath) {
	      if (currentChangePath[currentChangeKey] === true && pathArray.length !== 0) {
	        throwError('You are in strict mode and path "' + path + '" is being replaced by "' + currentPathKey.join('.') + '". Change "' + path + '" to "' + currentPathKey.join('.') + '" or do not replace the path');
	      }
	      currentPathKey.push(currentChangeKey);
	      currentChangePath = currentChangePath[pathArray.shift()];
	    }
	    currentPathKey.length = 0;
	  }
	}
	
	function debounce(func, wait) {
	  var timeout = void 0;
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var later = function later() {
	      timeout = null;
	      func.apply(context, args);
	    };
	
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	  };
	}
	
	var noop = exports.noop = function noop() {};
	
	var forceSerializable = exports.forceSerializable = function forceSerializable(value) {
	  if (value && !isSerializable(value)) {
	    (function () {
	      var name = value.constructor.name;
	
	      try {
	        Object.defineProperty(value, 'toJSON', {
	          value: function value() {
	            return '[' + name + ']';
	          }
	        });
	      } catch (e) {}
	    })();
	  }
	
	  return value;
	};
	//# sourceMappingURL=utils.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (View) {
	  var StateContainer = function (_View$Component) {
	    _inherits(StateContainer, _View$Component);
	
	    function StateContainer() {
	      _classCallCheck(this, StateContainer);
	
	      return _possibleConstructorReturn(this, (StateContainer.__proto__ || Object.getPrototypeOf(StateContainer)).apply(this, arguments));
	    }
	
	    _createClass(StateContainer, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        var controller = createDummyController(this.props.state);
	        return {
	          cerebral: {
	            controller: controller,
	            registerComponent: _utils.noop,
	            unregisterComponent: _utils.noop,
	            updateComponent: _utils.noop
	          }
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return this.props.children;
	      }
	    }]);
	
	    return StateContainer;
	  }(View.Component);
	
	  if (View.PropTypes) {
	    StateContainer.propTypes = {
	      state: View.PropTypes.object,
	      children: View.PropTypes.node.isRequired
	    };
	    StateContainer.childContextTypes = {
	      cerebral: View.PropTypes.object.isRequired
	    };
	  }
	
	  return StateContainer;
	};
	
	/*
	  When testing and running on the server there is no need to
	  initialize all of Cerebral. So by not passing a controller
	  to this Container it will create a dummy version which inserts
	  state and mocks any signals when connecting the component.
	*/
	
	
	function createDummyController() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var getState = function getState(path) {
	    return (0, _utils.ensurePath)(path).reduce(function (currentState, pathKey) {
	      return currentState[pathKey];
	    }, state);
	  };
	  return {
	    options: {},
	    on: function on() {},
	
	    getState: getState,
	    model: {
	      get: getState
	    },
	    getSignal: function getSignal() {
	      return function () {};
	    }
	  };
	}
	//# sourceMappingURL=StateContainer.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Computed = __webpack_require__(14);
	
	var _utils = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (View) {
	  return function HOC(paths, signals, mergeProps, Component) {
	    var hasWarnedBigComponent = false;
	
	    var CerebralComponent = function (_View$Component) {
	      _inherits(CerebralComponent, _View$Component);
	
	      _createClass(CerebralComponent, null, [{
	        key: 'getStatePaths',
	        value: function getStatePaths(props) {
	          if (!paths) {
	            return {};
	          }
	          return typeof paths === 'function' ? paths(props) : paths;
	        }
	      }]);
	
	      function CerebralComponent(props) {
	        _classCallCheck(this, CerebralComponent);
	
	        var _this = _possibleConstructorReturn(this, (CerebralComponent.__proto__ || Object.getPrototypeOf(CerebralComponent)).call(this, props));
	
	        _this.evaluatedPaths = CerebralComponent.getStatePaths(props);
	        _this.signals = signals;
	        _this.mergeProps = mergeProps;
	        _this.Component = Component;
	        _this.cachedSignals = null;
	        _this.depsMap = _this.getDepsMap();
	        return _this;
	      }
	
	      _createClass(CerebralComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          if (!this.context.cerebral.controller) {
	            throw new Error('Can not find Cerebral controller, did you remember to use the Container component? Read more at: http://www.cerebraljs.com/documentation/cerebral-view-react');
	          }
	
	          if (!this.evaluatedPaths) {
	            return;
	          }
	
	          this.context.cerebral.registerComponent(this, this.depsMap);
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          var hasChange = (0, _utils.propsDiffer)(this.props, nextProps);
	
	          // If dynamic paths, we need to update them
	          if (hasChange && typeof paths === 'function') {
	            this.evaluatedPaths = CerebralComponent.getStatePaths(nextProps, this.context.cerebral.controller);
	
	            var nextDepsMap = this.getDepsMap();
	
	            if ((0, _utils.propsDiffer)(this.depsMap, nextDepsMap)) {
	              this.context.cerebral.updateComponent(this, this.depsMap, nextDepsMap);
	              this.depsMap = nextDepsMap;
	            }
	          }
	
	          if (hasChange) {
	            this._update();
	          }
	        }
	      }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	          // We only allow forced render by change of props passed
	          // or Container tells it to render
	          return false;
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          var _this2 = this;
	
	          this._isUnmounting = true;
	          this.context.cerebral.unregisterComponent(this, this.depsMap);
	          Object.keys(this.depsMap).forEach(function (depsMapKey) {
	            if (_this2.depsMap[depsMapKey] instanceof _Computed.Computed) {
	              _this2.depsMap[depsMapKey].remove();
	            }
	          });
	        }
	      }, {
	        key: 'getDepsMap',
	        value: function getDepsMap() {
	          var _this3 = this;
	
	          return Object.keys(this.evaluatedPaths).reduce(function (currentDepsMap, pathKey) {
	            if (_this3.evaluatedPaths[pathKey] instanceof _Computed.Computed) {
	              return Object.assign(currentDepsMap, _this3.evaluatedPaths[pathKey].depsMap);
	            }
	
	            currentDepsMap[pathKey] = _this3.evaluatedPaths[pathKey];
	
	            return currentDepsMap;
	          }, {});
	        }
	      }, {
	        key: 'getProps',
	        value: function getProps() {
	          var _this4 = this;
	
	          var controller = this.context.cerebral.controller;
	          var model = controller.model;
	          var props = this.props || {};
	          var statePaths = CerebralComponent.getStatePaths(this.props);
	          var stateProps = {};
	          var signalProps = {};
	          var mergeProps = this.mergeProps || {};
	
	          stateProps = Object.keys(statePaths || {}).reduce(function (currentProps, key) {
	            if (!statePaths[key]) {
	              (0, _utils.throwError)('There is no path or computed assigned to prop ' + key);
	            }
	            currentProps[key] = statePaths[key] instanceof _Computed.Computed ? statePaths[key].getValue(model) : controller.getState((0, _utils.cleanPath)(statePaths[key]));
	
	            return currentProps;
	          }, {});
	
	          if (this.context.cerebral.controller.devtools && this.context.cerebral.controller.devtools.bigComponentsWarning && !hasWarnedBigComponent && Object.keys(statePaths || {}).length >= this.context.cerebral.controller.devtools.bigComponentsWarning.state) {
	            console.warn('Component named ' + (Component.displayName || Component.name) + ' has a lot of state dependencies, consider refactoring or adjust this option in devtools');
	            hasWarnedBigComponent = true;
	          }
	
	          if (this.signals) {
	            (function () {
	              var extractedSignals = typeof signals === 'function' ? signals(props) : signals;
	
	              if (_this4.context.cerebral.controller.devtools && _this4.context.cerebral.controller.devtools.bigComponentsWarning && !hasWarnedBigComponent && Object.keys(extractedSignals).length >= _this4.context.cerebral.controller.devtools.bigComponentsWarning.signals) {
	                console.warn('Component named ' + (Component.displayName || Component.name) + ' has a lot of signals, consider refactoring or adjust this option in devtools');
	                hasWarnedBigComponent = true;
	              }
	              signalProps = Object.keys(extractedSignals).reduce(function (currentProps, key) {
	                currentProps[key] = controller.getSignal(extractedSignals[key]);
	
	                return currentProps;
	              }, {});
	            })();
	          }
	
	          if (mergeProps && typeof mergeProps === 'function') {
	            return mergeProps(stateProps, signalProps, props);
	          }
	
	          var propsToPass = Object.assign({}, props, stateProps, signalProps, mergeProps);
	
	          if (this.context.cerebral.controller.options.signalsProp) {
	            propsToPass.signals = this.cachedSignals = this.cachedSignals || this.extractModuleSignals(this.context.cerebral.controller.module, '');
	          }
	
	          return propsToPass;
	        }
	      }, {
	        key: 'extractModuleSignals',
	        value: function extractModuleSignals(module, parentPath) {
	          var _this5 = this;
	
	          return Object.keys(module.signals || {}).reduce(function (signals, signalKey) {
	            signals[signalKey] = _this5.context.cerebral.controller.getSignal(parentPath ? parentPath + '.' + signalKey : '' + signalKey);
	
	            return signals;
	          }, Object.keys(module.modules || {}).reduce(function (modules, moduleKey) {
	            modules[moduleKey] = _this5.extractModuleSignals(module.modules[moduleKey], parentPath ? parentPath + '.' + moduleKey : '' + moduleKey);
	
	            return modules;
	          }, {}));
	        }
	      }, {
	        key: '_update',
	        value: function _update() {
	          if (!this._isUnmounting) {
	            this.forceUpdate();
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return View.createElement(this.Component, this.getProps());
	        }
	      }]);
	
	      return CerebralComponent;
	    }(View.Component);
	
	    CerebralComponent.displayName = 'CerebralWrapping_' + (Component.displayName || Component.name);
	
	    if (View.PropTypes) {
	      CerebralComponent.contextTypes = {
	        cerebral: View.PropTypes.object
	      };
	    }
	
	    return CerebralComponent;
	  };
	};
	//# sourceMappingURL=Hoc.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Computed = exports.dependencyStore = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = computed;
	
	var _DependencyStore = __webpack_require__(15);
	
	var _DependencyStore2 = _interopRequireDefault(_DependencyStore);
	
	var _utils = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	  The dependency store used to store and extract what computeds
	  to flag as dirty when there are state uptates
	*/
	var dependencyStore = exports.dependencyStore = new _DependencyStore2.default();
	
	/*
	  The computed instance controls the value production. It
	  registers itself to the dependency store so when the
	  controller flushes it will extract affected computeds and
	  flag them as dirty. These are created when you call a computed
	  inside components.
	*/
	
	var Computed = exports.Computed = function () {
	  function Computed(props, paths, func, depsMap, factory) {
	    _classCallCheck(this, Computed);
	
	    this.setProps = props;
	    this.func = func;
	    this.value = null;
	    this.paths = paths;
	    this.depsMap = depsMap;
	    this.factory = factory;
	
	    this.isDirty = true;
	
	    dependencyStore.addEntity(this, this.depsMap);
	  }
	  /*
	    Uses the factory to return a computed for the given props. This returns
	    the same computed given the same props (cache in factory).
	  */
	
	
	  _createClass(Computed, [{
	    key: 'props',
	    value: function props() {
	      var _factory;
	
	      return (_factory = this.factory).create.apply(_factory, arguments);
	    }
	    /*
	      This method is called by the controller when a flush happens and
	      the dependency store returns affected computeds
	    */
	
	  }, {
	    key: 'flag',
	    value: function flag() {
	      this.isDirty = true;
	    }
	    /*
	      This method is called by manually busting cache of computeds, also busting
	      nested computeds
	    */
	
	  }, {
	    key: 'flagAll',
	    value: function flagAll() {
	      var _this = this;
	
	      this.flag();
	      Object.keys(this.paths).forEach(function (pathKey) {
	        if (_this.paths[pathKey] instanceof Computed) {
	          _this.paths[pathKey].flag();
	        }
	      });
	    }
	    /*
	      Produces a new value if the computed is dirty or returns existing
	      value
	    */
	
	  }, {
	    key: 'getValue',
	    value: function getValue(model) {
	      var _this2 = this;
	
	      if (this.isDirty) {
	        var computedProps = Object.assign({}, this.setProps, Object.keys(this.paths).reduce(function (currentProps, depsMapKey) {
	          currentProps[depsMapKey] = _this2.paths[depsMapKey] instanceof Computed ? _this2.paths[depsMapKey].getValue(model) : model.get((0, _utils.ensurePath)((0, _utils.cleanPath)(_this2.paths[depsMapKey])));
	
	          return currentProps;
	        }, {}));
	        this.value = this.func(computedProps);
	        this.isDirty = false;
	      }
	
	      return this.value;
	    }
	    /*
	      When a component unmounts it will call this method on any
	      attached computeds. It removes any attached computeds
	      to the computed and also from the factory cache
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this3 = this;
	
	      dependencyStore.removeEntity(this, this.depsMap);
	      Object.keys(this.paths).forEach(function (pathKey) {
	        if (_this3.paths[pathKey] instanceof Computed) {
	          _this3.paths[pathKey].remove();
	        }
	      });
	      this.factory.removeFromCache(this);
	    }
	  }]);
	
	  return Computed;
	}();
	
	/*
	  A factory instance allows you to produce computeds. It holds a
	  cache in case the the same computed is used multiple places. This
	  is what is created when you actually create a computed.
	*/
	
	
	var ComputedFactory = function () {
	  function ComputedFactory(paths, func) {
	    _classCallCheck(this, ComputedFactory);
	
	    if (!((0, _utils.isObject)(paths) || typeof paths === 'function') || typeof func !== 'function') {
	      (0, _utils.throwError)('You are not passing the correct arguments to the computed factory');
	    }
	    this.paths = paths;
	    this.func = func;
	    this.cache = [];
	
	    return this.create();
	  }
	  /*
	    This is what runs when you create an instance of a computed, passing
	    any optional props. It checks the cache or creates a new computed
	  */
	
	
	  _createClass(ComputedFactory, [{
	    key: 'create',
	    value: function create() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      if (!(0, _utils.isObject)(props)) {
	        (0, _utils.throwError)('You are not passing valid props to a computed');
	      }
	      for (var x = 0; x < this.cache.length; x++) {
	        if (!(0, _utils.propsDiffer)(props, this.cache[x].props)) {
	          return this.cache[x];
	        }
	      }
	
	      var paths = typeof this.paths === 'function' ? this.paths(props) : this.paths;
	      var depsMap = this.getDepsMap(paths);
	
	      var computedInstance = new Computed(props, paths, this.func, depsMap, this);
	      this.cache.push(computedInstance);
	
	      return computedInstance;
	    }
	    /*
	      Produces the dependency map to register the compute in the
	      dependency store with.
	    */
	
	  }, {
	    key: 'getDepsMap',
	    value: function getDepsMap(paths) {
	      return Object.keys(paths).reduce(function (currentDepsMap, depsMapKey) {
	        if (paths[depsMapKey] instanceof Computed) {
	          return Object.assign(currentDepsMap, paths[depsMapKey].depsMap);
	        }
	        currentDepsMap[depsMapKey] = paths[depsMapKey];
	
	        return currentDepsMap;
	      }, {});
	    }
	    /*
	      Called by each computed when removed to clean up cache
	    */
	
	  }, {
	    key: 'removeFromCache',
	    value: function removeFromCache(computedInstance) {
	      this.cache.splice(this.cache.indexOf(computedInstance), 1);
	    }
	  }]);
	
	  return ComputedFactory;
	}();
	
	function computed(paths, func) {
	  return new ComputedFactory(paths, func);
	}
	//# sourceMappingURL=Computed.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DependencyStore = function () {
	  function DependencyStore() {
	    _classCallCheck(this, DependencyStore);
	
	    this.map = {};
	  }
	  /*
	    Adds the entity to all the depending paths
	  */
	
	
	  _createClass(DependencyStore, [{
	    key: 'addEntity',
	    value: function addEntity(entity, depsMap) {
	      for (var depsMapKey in depsMap) {
	        var key = depsMap[depsMapKey];
	        this.map[key] = this.map[key] ? this.map[key].concat(entity) : [entity];
	      }
	    }
	    /*
	      Removes the entity from all depending paths
	    */
	
	  }, {
	    key: 'removeEntity',
	    value: function removeEntity(entity, depsMap) {
	      for (var depsMapKey in depsMap) {
	        var key = depsMap[depsMapKey];
	        this.map[key].splice(this.map[key].indexOf(entity), 1);
	      }
	    }
	    /*
	      As same entity can appear in multiple paths, this method returns
	      all unique entities. Used by view to render all components
	    */
	
	  }, {
	    key: 'getAllUniqueEntities',
	    value: function getAllUniqueEntities() {
	      var entities = [];
	
	      for (var mapKey in this.map) {
	        var keyComponents = this.map[mapKey];
	        for (var y = 0; y < keyComponents.length; y++) {
	          if (entities.indexOf(keyComponents[y]) === -1) {
	            entities.push(keyComponents[y]);
	          }
	        }
	      }
	
	      return entities;
	    }
	    /*
	      Converts the changes map from "flush" to an array of paths
	    */
	
	  }, {
	    key: 'convertChangeMap',
	    value: function convertChangeMap(currentLevel) {
	      var _this = this;
	
	      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { currentPath: [], allPaths: [] };
	
	      Object.keys(currentLevel).forEach(function (key) {
	        details.currentPath.push(key);
	        if (currentLevel[key] === true) {
	          details.allPaths.push(details.currentPath.join('.'));
	        } else {
	          _this.convertChangeMap(currentLevel[key], details);
	        }
	        details.currentPath.pop();
	      });
	
	      return details.allPaths;
	    }
	    /*
	      Returns entities based on a change map returned from
	      the model flush method. It does this by checking if
	      the changed path is part of any dependency path, or
	      the opposite. "foo.bar.baz" will cause change on dependency
	      "foo.bar" (dependency part of change path), and "foo.bar" will
	      cause change on dependency "foo.bar.baz" (change path part of dependency path)
	    */
	
	  }, {
	    key: 'getUniqueEntities',
	    value: function getUniqueEntities(changesMap) {
	      var entities = [];
	      var paths = this.convertChangeMap(changesMap);
	
	      for (var mapKey in this.map) {
	        for (var pathKey in paths) {
	          var path = paths[pathKey];
	
	          if (mapKey.indexOf(path) === 0 || path.indexOf(mapKey) === 0) {
	            for (var componentIndex in this.map[mapKey]) {
	              if (entities.indexOf(this.map[mapKey][componentIndex]) === -1) {
	                entities.push(this.map[mapKey][componentIndex]);
	              }
	            }
	          }
	        }
	      }
	
	      return entities;
	    }
	    /*
	      Returns entities using strict path definition based on a
	      change map returned from the model flush method
	    */
	
	  }, {
	    key: 'getStrictUniqueEntities',
	    value: function getStrictUniqueEntities(changesMap) {
	      var currentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	      var currentEntities = [];
	      for (var key in changesMap) {
	        var pathKey = currentKey ? currentKey + '.' + key : key;
	
	        var entities = [];
	        if (changesMap[key] === true) {
	          if (this.map[pathKey]) {
	            entities = entities.concat(this.map[pathKey]);
	          }
	          if (this.map[pathKey + '.*']) {
	            entities = entities.concat(this.map[pathKey + '.*']);
	          }
	          if (this.map[pathKey + '.**']) {
	            entities = entities.concat(this.map[pathKey + '.**']);
	          }
	        } else {
	          if (this.map[pathKey + '.*']) {
	            var immediateKeys = Object.keys(changesMap[key]);
	            for (var z = 0; z < immediateKeys.length; z++) {
	              if (changesMap[key][immediateKeys[z]] === true) {
	                entities = entities.concat(this.map[pathKey + '.*']);
	                break;
	              }
	            }
	          }
	          if (this.map[pathKey + '.**']) {
	            entities = entities.concat(this.map[pathKey + '.**']);
	          }
	        }
	
	        for (var y = 0; y < entities.length; y++) {
	          if (currentEntities.indexOf(entities[y]) === -1) {
	            currentEntities.push(entities[y]);
	          }
	        }
	
	        if (changesMap[key] !== true) {
	          currentEntities = currentEntities.concat(this.getStrictUniqueEntities(changesMap[key], pathKey));
	        }
	      }
	
	      return currentEntities;
	    }
	  }]);
	
	  return DependencyStore;
	}();
	
	exports.default = DependencyStore;
	//# sourceMappingURL=DependencyStore.js.map

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function connect(HOC, paths, passedSignals, injectedProps, passedComponent) {
	  var component = passedComponent;
	  var signals = passedSignals;
	  var props = injectedProps;
	
	  if (arguments.length === 4) {
	    component = props;
	    props = null;
	  } else if (arguments.length === 3) {
	    component = signals;
	    signals = null;
	  }
	
	  return HOC(paths, signals, props, component);
	}
	
	exports.default = function (HOC) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return connect.apply(undefined, [HOC].concat(args));
	  };
	};
	
	var decoratorFactory = exports.decoratorFactory = function decoratorFactory(HOC) {
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return function (component) {
	      return connect.apply(undefined, [HOC].concat(args, [component]));
	    };
	  };
	};
	//# sourceMappingURL=connect.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18)


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Controller = __webpack_require__(19);
	
	Object.defineProperty(exports, 'Controller', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Controller).default;
	  }
	});
	
	var _Computed = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Computed', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Computed).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	//# sourceMappingURL=index.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(Controller, [null].concat(args)))();
	};
	
	var _DependencyStore = __webpack_require__(15);
	
	var _DependencyStore2 = _interopRequireDefault(_DependencyStore);
	
	var _functionTree = __webpack_require__(20);
	
	var _functionTree2 = _interopRequireDefault(_functionTree);
	
	var _Module = __webpack_require__(29);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	var _Model = __webpack_require__(30);
	
	var _Model2 = _interopRequireDefault(_Model);
	
	var _utils = __webpack_require__(11);
	
	var _VerifyInput = __webpack_require__(31);
	
	var _VerifyInput2 = _interopRequireDefault(_VerifyInput);
	
	var _State = __webpack_require__(32);
	
	var _State2 = _interopRequireDefault(_State);
	
	var _Debugger = __webpack_require__(33);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _Controller = __webpack_require__(34);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _eventemitter = __webpack_require__(21);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _Computed = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  The controller is where everything is attached. The devtools
	  and router is attached directly. Also a top level module is created.
	  The controller creates the function tree that will run all signals,
	  based on top level providers and providers defined in modules
	*/
	var Controller = function (_EventEmitter) {
	  _inherits(Controller, _EventEmitter);
	
	  function Controller(_ref) {
	    var _ref$state = _ref.state,
	        state = _ref$state === undefined ? {} : _ref$state,
	        _ref$signals = _ref.signals,
	        signals = _ref$signals === undefined ? {} : _ref$signals,
	        _ref$providers = _ref.providers,
	        providers = _ref$providers === undefined ? [] : _ref$providers,
	        _ref$modules = _ref.modules,
	        modules = _ref$modules === undefined ? {} : _ref$modules,
	        router = _ref.router,
	        _ref$devtools = _ref.devtools,
	        devtools = _ref$devtools === undefined ? null : _ref$devtools,
	        _ref$options = _ref.options,
	        options = _ref$options === undefined ? {} : _ref$options;
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.computedDependencyStore = _Computed.dependencyStore;
	    _this.componentDependencyStore = new _DependencyStore2.default();
	    _this.options = options;
	    _this.flush = _this.flush.bind(_this);
	    _this.devtools = devtools;
	    _this.model = new _Model2.default({}, _this.devtools);
	    _this.module = new _Module2.default([], {
	      state: state,
	      signals: signals,
	      modules: modules
	    }, _this);
	    _this.router = router ? router(_this) : null;
	
	    var allProviders = [(0, _Controller2.default)(_this)].concat(_this.router ? [_this.router.provider] : []).concat(_this.devtools ? [(0, _Debugger2.default)()] : []).concat((0, _utils.isDeveloping)() ? [_VerifyInput2.default] : []).concat((0, _State2.default)()).concat(providers.concat(_this.module.getProviders()));
	
	    _this.runTree = new _functionTree2.default(allProviders);
	    _this.runTree.on('asyncFunction', function (execution, funcDetails) {
	      if (!funcDetails.isParallel) {
	        _this.flush();
	      }
	    });
	    _this.runTree.on('parallelStart', function () {
	      return _this.flush();
	    });
	    _this.runTree.on('parallelProgress', function (execution, currentPayload, functionsResolving) {
	      if (functionsResolving === 1) {
	        _this.flush();
	      }
	    });
	    _this.runTree.on('end', function () {
	      return _this.flush();
	    });
	    _this.runTree.on('error', function (error) {
	      throw error;
	    });
	
	    if (_this.devtools) {
	      _this.devtools.init(_this);
	    } else if ((0, _utils.isDeveloping)() && typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent)) {
	      console.warn('You are not using the Cerebral devtools. It is highly recommended to use it in combination with the debugger: https://cerebral.github.io/cerebral-website/install/02_debugger.html');
	    }
	
	    if ((0, _utils.isDeveloping)() && _this.options.strictRender) {
	      console.info('We are just notifying you that STRICT RENDER is on');
	    }
	
	    if (_this.router) _this.router.init();
	
	    _this.model.flush();
	    _this.emit('initialized');
	    return _this;
	  }
	  /*
	    Whenever computeds and components needs to be updated, this method
	    can be called
	  */
	
	
	  _createClass(Controller, [{
	    key: 'flush',
	    value: function flush(force) {
	      var changes = this.model.flush();
	
	      if (!force && !Object.keys(changes).length) {
	        return;
	      }
	
	      this.updateComputeds(changes, force);
	      this.updateComponents(changes, force);
	      this.emit('flush', changes, Boolean(force));
	    }
	  }, {
	    key: 'updateComputeds',
	    value: function updateComputeds(changes, force) {
	      var computedsAboutToBecomeDirty = void 0;
	
	      if (force) {
	        computedsAboutToBecomeDirty = this.computedDependencyStore.getAllUniqueEntities();
	      } else if (this.options.strictRender) {
	        computedsAboutToBecomeDirty = this.computedDependencyStore.getStrictUniqueEntities(changes);
	      } else {
	        computedsAboutToBecomeDirty = this.computedDependencyStore.getUniqueEntities(changes);
	      }
	
	      computedsAboutToBecomeDirty.forEach(function (computed) {
	        computed.flag();
	      });
	    }
	    /*
	      On "flush" use changes to extract affected components
	      from dependency store and render them
	    */
	
	  }, {
	    key: 'updateComponents',
	    value: function updateComponents(changes, force) {
	      var _this2 = this;
	
	      var componentsToRender = [];
	
	      if (force) {
	        componentsToRender = this.componentDependencyStore.getAllUniqueEntities();
	      } else if (this.options.strictRender) {
	        componentsToRender = this.componentDependencyStore.getStrictUniqueEntities(changes);
	        if (this.devtools && this.devtools.verifyStrictRender) {
	          (0, _utils.verifyStrictRender)(changes, this.componentDependencyStore.map);
	        }
	      } else {
	        componentsToRender = this.componentDependencyStore.getUniqueEntities(changes);
	      }
	
	      var start = Date.now();
	      componentsToRender.forEach(function (component) {
	        if (_this2.devtools) {
	          _this2.devtools.updateComponentsMap(component);
	        }
	        component._update(force);
	      });
	      var end = Date.now();
	
	      if (this.devtools && componentsToRender.length) {
	        this.devtools.sendComponentsMap(componentsToRender, changes, start, end);
	      }
	    }
	    /*
	      Conveniance method for grabbing the model
	    */
	
	  }, {
	    key: 'getModel',
	    value: function getModel() {
	      return this.model;
	    }
	    /*
	      Method called by view to grab state
	    */
	
	  }, {
	    key: 'getState',
	    value: function getState(path) {
	      return this.model.get((0, _utils.ensurePath)(path));
	    }
	    /*
	      Uses function tree to run the array and optional
	      payload passed in. The payload will be checkd
	    */
	
	  }, {
	    key: 'runSignal',
	    value: function runSignal(name, signal) {
	      var _this3 = this;
	
	      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	      if (this.devtools && (!(0, _utils.isObject)(payload) || !(0, _utils.isSerializable)(payload))) {
	        console.warn('You passed an invalid payload to signal "' + name + '". Only serializable payloads can be passed to a signal. The payload has been ignored. This is the object:', payload);
	        payload = {};
	      }
	
	      if (this.devtools) {
	        payload = Object.keys(payload).reduce(function (currentPayload, key) {
	          if (!(0, _utils.isSerializable)(payload, _this3.devtools.allowedTypes)) {
	            console.warn('You passed an invalid payload to signal "' + name + '", on key "' + key + '". Only serializable values like Object, Array, String, Number and Boolean can be passed in. Also these special value types:', _this3.devtools.allowedTypes);
	
	            return currentPayload;
	          }
	
	          currentPayload[key] = (0, _utils.forceSerializable)(payload[key]);
	
	          return currentPayload;
	        }, {});
	      }
	
	      this.runTree(name, signal, payload);
	    }
	    /*
	      Returns a function which binds the name/path of signal,
	      and the array. This allows view layer to just call it with
	      an optional payload and it will run
	    */
	
	  }, {
	    key: 'getSignal',
	    value: function getSignal(path) {
	      var pathArray = (0, _utils.ensurePath)(path);
	      var signalKey = pathArray.pop();
	      var module = pathArray.reduce(function (currentModule, key) {
	        return currentModule ? currentModule.modules[key] : undefined;
	      }, this.module);
	      var signal = module && module.signals[signalKey];
	
	      if (!signal) {
	        (0, _utils.throwError)('There is no signal at path "' + path + '"');
	      }
	
	      return function (payload) {
	        this.runSignal(path, signal, payload);
	      }.bind(this);
	    }
	  }]);
	
	  return Controller;
	}(_eventemitter2.default);
	//# sourceMappingURL=Controller.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _eventemitter = __webpack_require__(21);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _executeTree = __webpack_require__(22);
	
	var _executeTree2 = _interopRequireDefault(_executeTree);
	
	var _staticTree = __webpack_require__(23);
	
	var _staticTree2 = _interopRequireDefault(_staticTree);
	
	var _Execution = __webpack_require__(24);
	
	var _Execution2 = _interopRequireDefault(_Execution);
	
	var _Input = __webpack_require__(25);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Path = __webpack_require__(26);
	
	var _Path2 = _interopRequireDefault(_Path);
	
	var _Path3 = __webpack_require__(27);
	
	var _Path4 = _interopRequireDefault(_Path3);
	
	var _Abort = __webpack_require__(28);
	
	var _Abort2 = _interopRequireDefault(_Abort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Need to create a unique ID for each execution to identify it
	  in debugger
	*/
	function createUniqueId() {
	  return Date.now() + '_' + Math.floor(Math.random() * 10000);
	}
	
	/*
	  Validate any returned value from a function. Has
	  to be nothing or an object
	*/
	function isValidResult(result) {
	  return !result || (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && !Array.isArray(result);
	}
	
	/*
	  If it walks like a duck and quacks like a duck...
	*/
	function isPromise(result) {
	  return result && typeof result.then === 'function' && typeof result.catch === 'function';
	}
	
	var FunctionTreeExecution = function (_EventEmitter) {
	  _inherits(FunctionTreeExecution, _EventEmitter);
	
	  function FunctionTreeExecution(name, staticTree, functionTree, errorCallback) {
	    _classCallCheck(this, FunctionTreeExecution);
	
	    var _this = _possibleConstructorReturn(this, (FunctionTreeExecution.__proto__ || Object.getPrototypeOf(FunctionTreeExecution)).call(this));
	
	    _this.id = createUniqueId();
	    _this.name = name;
	    _this.staticTree = staticTree;
	    _this.functionTree = functionTree;
	    _this.datetime = Date.now();
	    _this.errorCallback = errorCallback;
	
	    _this.runFunction = _this.runFunction.bind(_this);
	    return _this;
	  }
	
	  /*
	    Creates the context for the current function to be run,
	    emits events and handles its returned value. Also handles
	    the returned value being a promise
	  */
	
	
	  _createClass(FunctionTreeExecution, [{
	    key: 'runFunction',
	    value: function runFunction(funcDetails, payload, prevPayload, next) {
	      var context = this.createContext(funcDetails, payload, prevPayload);
	      var functionTree = this.functionTree;
	      var errorCallback = this.errorCallback;
	      var execution = this;
	
	      functionTree.emit('functionStart', execution, funcDetails, payload);
	      var result = funcDetails.function(context);
	
	      if (result instanceof _Abort2.default) {
	        return functionTree.emit('abort', execution, funcDetails, payload);
	      }
	
	      /*
	        If result is a promise we want to emit an event and wait for it to resolve to
	        move on
	      */
	      if (isPromise(result)) {
	        functionTree.emit('asyncFunction', execution, funcDetails, payload, result);
	        result.then(function (result) {
	          if (result instanceof _Path4.default) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next(result.toJS());
	          } else if (funcDetails.outputs) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            throw new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path');
	          } else if (isValidResult(result)) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next({
	              payload: result
	            });
	          } else {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            throw new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result');
	          }
	        }).catch(function (result) {
	          if (result instanceof Error) {
	            errorCallback(result);
	          } else if (result instanceof _Path4.default) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next(result.toJS());
	          } else if (funcDetails.outputs) {
	            var error = new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path');
	
	            errorCallback(error);
	          } else if (isValidResult(result)) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next({
	              payload: result
	            });
	          } else {
	            var _error = new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result');
	
	            errorCallback(_error);
	          }
	        });
	      } else if (result instanceof _Path4.default) {
	        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	        next(result.toJS());
	      } else if (funcDetails.outputs) {
	        var error = new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path or a Promise');
	
	        errorCallback(error);
	      } else if (isValidResult(result)) {
	        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	        next({
	          payload: result
	        });
	      } else {
	        var _error2 = new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result');
	        errorCallback(_error2);
	      }
	    }
	
	    /*
	      Creates the context for the next running function
	    */
	
	  }, {
	    key: 'createContext',
	    value: function createContext(funcDetails, payload, prevPayload) {
	      return [(0, _Execution2.default)(this, _Abort2.default), (0, _Input2.default)(), (0, _Path2.default)()].concat(this.functionTree.contextProviders).reduce(function (currentContext, contextProvider) {
	        var newContext = typeof contextProvider === 'function' ? contextProvider(currentContext, funcDetails, payload, prevPayload) : Object.assign(currentContext, contextProvider);
	
	        if (newContext !== currentContext) {
	          throw new Error('function-tree: You are not returning the context from a provider');
	        }
	
	        return newContext;
	      }, {});
	    }
	  }]);
	
	  return FunctionTreeExecution;
	}(_eventemitter2.default);
	
	var FunctionTree = function (_EventEmitter2) {
	  _inherits(FunctionTree, _EventEmitter2);
	
	  function FunctionTree(contextProviders) {
	    var _ret;
	
	    _classCallCheck(this, FunctionTree);
	
	    var _this2 = _possibleConstructorReturn(this, (FunctionTree.__proto__ || Object.getPrototypeOf(FunctionTree)).call(this));
	
	    _this2.cachedTrees = [];
	    _this2.cachedStaticTrees = [];
	    _this2.contextProviders = contextProviders || [];
	    _this2.runTree = _this2.runTree.bind(_this2);
	    _this2.runTree.on = _this2.on.bind(_this2);
	    _this2.runTree.once = _this2.once.bind(_this2);
	    _this2.runTree.off = _this2.removeListener.bind(_this2);
	
	    return _ret = _this2.runTree, _possibleConstructorReturn(_this2, _ret);
	  }
	
	  /*
	    Analyses the tree to identify paths and its validity. This analysis
	    is cached. Then the method creates an execution for the tree to run.
	  */
	
	
	  _createClass(FunctionTree, [{
	    key: 'runTree',
	    value: function runTree() {
	      var _this3 = this;
	
	      var name = void 0;
	      var tree = void 0;
	      var payload = void 0;
	      var cb = void 0;
	      var staticTree = void 0;
	      var args = [].slice.call(arguments);
	      args.forEach(function (arg) {
	        if (typeof arg === 'string') {
	          name = arg;
	        } else if (Array.isArray(arg)) {
	          tree = arg;
	        } else if (typeof arg === 'function') {
	          cb = arg;
	        } else {
	          payload = arg;
	        }
	      });
	
	      if (!tree) {
	        throw new Error('function-tree - You did not pass in a function tree');
	      }
	
	      var treeIdx = this.cachedTrees.indexOf(tree);
	      if (treeIdx === -1) {
	        staticTree = (0, _staticTree2.default)(tree);
	        this.cachedTrees.push(tree);
	        this.cachedStaticTrees.push(staticTree);
	      } else {
	        staticTree = this.cachedStaticTrees[treeIdx];
	      }
	      var execution = new FunctionTreeExecution(name, staticTree, this, function (error) {
	        cb && cb(error, execution, payload);
	        setTimeout(function () {
	          _this3.emit('error', error, execution, payload);
	        });
	      });
	
	      this.emit('start', execution, payload);
	      (0, _executeTree2.default)(execution.staticTree, execution.runFunction, payload, function (funcDetails, path, currentPayload) {
	        _this3.emit('pathStart', path, execution, funcDetails, currentPayload);
	      }, function (currentPayload) {
	        _this3.emit('pathEnd', execution, currentPayload);
	      }, function (currentPayload, functionsToResolve) {
	        _this3.emit('parallelStart', execution, currentPayload, functionsToResolve);
	      }, function (currentPayload, functionsResolved) {
	        _this3.emit('parallelProgress', execution, currentPayload, functionsResolved);
	      }, function (currentPayload, functionsResolved) {
	        _this3.emit('parallelEnd', execution, currentPayload, functionsResolved);
	      }, function (finalPayload) {
	        _this3.emit('end', execution, finalPayload);
	        cb && cb(null, execution, finalPayload);
	      });
	    }
	  }]);
	
	  return FunctionTree;
	}(_eventemitter2.default);
	
	exports.default = function (contextProviders) {
	  return new FunctionTree(contextProviders);
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';
	
	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @api private
	 */
	function Events() {}
	
	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);
	
	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}
	
	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {Mixed} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;
	
	  if (this._eventsCount === 0) return names;
	
	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Boolean} exists Only check if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Add a listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {Mixed} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }
	
	  var listeners = this._events[evt];
	
	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }
	
	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {String|Symbol} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;
	
	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = executeTree;
	/*
	  Runs through the tree providing a "next" callback to process next step
	  of execution
	*/
	function executeTree(tree, resolveFunctionResult, initialPayload, branchStart, branchEnd, parallelStart, parallelProgress, parallelEnd, end) {
	  function runBranch(branch, index, payload, prevPayload, nextBranch) {
	    function runNextItem(result) {
	      runBranch(branch, index + 1, result, payload, nextBranch);
	    }
	
	    function processFunctionOutput(funcDetails, outputResult) {
	      return function (result) {
	        var newPayload = Object.assign({}, payload, result ? result.payload : {});
	
	        if (result && funcDetails.outputs) {
	          var outputs = Object.keys(funcDetails.outputs);
	
	          if (~outputs.indexOf(result.path)) {
	            branchStart(funcDetails, result.path, newPayload);
	            runBranch(funcDetails.outputs[result.path], 0, newPayload, payload, outputResult);
	          } else {
	            throw new Error('function-tree - function ' + funcDetails.name + ' must use one of its possible outputs: ' + outputs.join(', ') + '.');
	          }
	        } else {
	          outputResult(newPayload);
	        }
	      };
	    }
	
	    var currentItem = branch[index];
	
	    if (!currentItem) {
	      if (branch !== tree) {
	        branchEnd(payload);
	      }
	      nextBranch(payload);
	    } else if (Array.isArray(currentItem)) {
	      (function () {
	        var itemLength = currentItem.length;
	        parallelStart(payload, itemLength);
	        currentItem.reduce(function (payloads, action, index) {
	          resolveFunctionResult(action, payload, prevPayload, processFunctionOutput(action, function (payload) {
	            payloads.push(payload);
	            if (payloads.length === itemLength) {
	              parallelEnd(payload, itemLength);
	              runNextItem(Object.assign.apply(Object, [{}].concat(payloads)));
	            } else {
	              parallelProgress(payload, itemLength - payloads.length);
	            }
	          }));
	          return payloads;
	        }, []);
	      })();
	    } else {
	      resolveFunctionResult(currentItem, payload, prevPayload, processFunctionOutput(currentItem, runNextItem));
	    }
	  }
	
	  return runBranch(tree, 0, initialPayload, null, end);
	}
	//# sourceMappingURL=executeTree.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function getFunctionName(fn) {
	  var ret = fn.toString();
	  ret = ret.substr('function '.length);
	  ret = ret.substr(0, ret.indexOf('('));
	
	  return ret;
	}
	
	function traverse(functions, item, isChain, isParallel) {
	  if (Array.isArray(item) && typeof isChain === 'boolean') {
	    item = item.slice();
	    return item.map(function (subItem, index) {
	      if (typeof subItem === 'function') {
	        var nextSubItem = item[index + 1];
	        if (!Array.isArray(nextSubItem) && (typeof nextSubItem === 'undefined' ? 'undefined' : _typeof(nextSubItem)) === 'object') {
	          item.splice(index + 1, 1);
	          return traverse(functions, subItem, nextSubItem, !isChain);
	        } else {
	          return traverse(functions, subItem, null, !isChain);
	        }
	      } else if (Array.isArray(item) && isChain) {
	        return traverse(functions, subItem, false, !isChain);
	      }
	      throw new Error('Signal Tree - Unexpected entry in signal chain');
	    }).filter(function (func) {
	      return !!func;
	    });
	  } else if (typeof item === 'function') {
	    var _ret = function () {
	      var func = item;
	      var outputs = isChain;
	      var funcDetails = {
	        name: func.displayName || getFunctionName(func),
	        functionIndex: functions.push(func) - 1,
	        function: func,
	        isParallel: isParallel
	      };
	      if (outputs) {
	        funcDetails.outputs = {};
	        Object.keys(outputs).forEach(function (key) {
	          if (func.outputs && !~func.outputs.indexOf(key)) {
	            throw new Error('function-tree - Outputs object doesn\'t match list of possible outputs defined for function.');
	          }
	          funcDetails.outputs[key] = traverse(functions, outputs[key], true);
	        });
	      }
	
	      return {
	        v: funcDetails
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    throw new Error('function-tree - Unexpected entry in tree');
	  }
	}
	
	exports.default = function (tree) {
	  var functions = [];
	
	  return traverse(functions, tree, true);
	};
	//# sourceMappingURL=staticTree.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ExecutionProvider;
	
	var _executeTree = __webpack_require__(22);
	
	var _executeTree2 = _interopRequireDefault(_executeTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ExecutionProvider(execution, Abort) {
	  return function (context) {
	    context.execution = execution;
	    context.execution.retry = function (payload) {
	      return new Promise(function (resolve) {
	        (0, _executeTree2.default)(execution.staticTree, execution.runFunction, payload, resolve);
	      });
	    };
	    context.execution.abort = function () {
	      return new Abort();
	    };
	
	    return context;
	  };
	}
	//# sourceMappingURL=Execution.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = InputProvider;
	function InputProvider() {
	  return function (context, funcDetails, payload) {
	    context.input = payload || {};
	
	    return context;
	  };
	}
	//# sourceMappingURL=Input.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PathProvider;
	
	var _Path = __webpack_require__(27);
	
	var _Path2 = _interopRequireDefault(_Path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createNext(next, path) {
	  return function (payload) {
	    return new _Path2.default(path, payload);
	  };
	}
	
	function PathProvider() {
	  return function (context, functionDetails, payload, next) {
	    if (functionDetails.outputs) {
	      context.path = Object.keys(functionDetails.outputs).reduce(function (output, outputPath) {
	        output[outputPath] = createNext(next, outputPath);
	
	        return output;
	      }, {});
	    }
	
	    return context;
	  };
	}
	//# sourceMappingURL=Path.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Path = function () {
	  function Path(path, payload) {
	    _classCallCheck(this, Path);
	
	    this.path = path;
	    this.payload = payload;
	  }
	
	  _createClass(Path, [{
	    key: "toJS",
	    value: function toJS() {
	      return {
	        path: this.path,
	        payload: this.payload
	      };
	    }
	  }]);
	
	  return Path;
	}();
	
	exports.default = Path;
	//# sourceMappingURL=Path.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Abort = function Abort() {
	  _classCallCheck(this, Abort);
	};
	
	exports.default = Abort;
	//# sourceMappingURL=Abort.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Module = function () {
	  function Module(path, module, controller) {
	    _classCallCheck(this, Module);
	
	    this.name = path.slice().pop();
	    this.path = path;
	    this.controller = controller;
	    this.modules = {};
	
	    var moduleDescription = typeof module === 'function' ? module(this) : module;
	
	    this.initialState = moduleDescription.state || {};
	    if (moduleDescription.state) {
	      this.controller.getModel().set(this.path, moduleDescription.state);
	    }
	
	    this.signals = moduleDescription.signals || {};
	    this.provider = moduleDescription.provider;
	    this.registerModules(moduleDescription.modules || {});
	  }
	
	  _createClass(Module, [{
	    key: 'registerModules',
	    value: function registerModules(modules) {
	      var _this = this;
	
	      Object.keys(modules).forEach(function (moduleKey) {
	        _this.modules[moduleKey] = new Module(_this.path.concat(moduleKey), modules[moduleKey], _this.controller);
	      });
	    }
	    /*
	      Used by controller to extract all the providers of all modules
	    */
	
	  }, {
	    key: 'getProviders',
	    value: function getProviders() {
	      var _this2 = this;
	
	      return (this.provider ? [this.provider] : []).concat(Object.keys(this.modules).reduce(function (nestedProviders, moduleKey) {
	        return nestedProviders.concat(_this2.modules[moduleKey].getProviders());
	      }, []));
	    }
	  }]);
	
	  return Module;
	}();
	
	exports.default = Module;
	//# sourceMappingURL=Module.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Model = function () {
	  function Model() {
	    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var devtools = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    _classCallCheck(this, Model);
	
	    this.devtools = devtools;
	    this.preventExternalMutations = devtools ? devtools.preventExternalMutations : false;
	
	    this.state = this.preventExternalMutations ? this.freezeObject(initialState) : initialState;
	    this.changedPaths = [];
	  }
	  /*
	    Does an unfreeze and update of value, before freezing again
	  */
	
	
	  _createClass(Model, [{
	    key: 'unfreezeObject',
	    value: function unfreezeObject(value) {
	      if (Array.isArray(value)) {
	        return value.slice();
	      } else if ((0, _utils.isObject)(value)) {
	        return Object.assign({}, value);
	      }
	
	      return value;
	    }
	    /*
	      Freezes objects and arrays recursively to avoid unwanted mutation
	    */
	
	  }, {
	    key: 'freezeObject',
	    value: function freezeObject(object) {
	      if ((!Array.isArray(object) && !(0, _utils.isObject)(object)) | Object.isFrozen(object)) {
	        return object;
	      }
	
	      for (var key in object) {
	        // Properties might not be writable, but then there
	        // is not reason to freeze its value either
	        try {
	          object[key] = this.freezeObject(object[key]);
	        } catch (e) {}
	      }
	
	      Object.freeze(object);
	
	      return object;
	    }
	    /*
	      Converts an array of paths changed to a change object that
	      will be traversed by the dependency store
	    */
	
	  }, {
	    key: 'flush',
	    value: function flush() {
	      var changes = this.changedPaths.reduce(function (allChanges, path) {
	        path.reduce(function (currentChanges, key, index) {
	          if (index === path.length - 1 && !currentChanges[key]) {
	            currentChanges[key] = true;
	          } else if (currentChanges[key] === true) {
	            currentChanges[key] = {};
	          } else if (!currentChanges[key]) {
	            currentChanges[key] = {};
	          }
	
	          return currentChanges[key];
	        }, allChanges);
	
	        return allChanges;
	      }, {});
	
	      this.changedPaths = [];
	
	      return changes;
	    }
	    /*
	      A generic method for making a change to a path, used
	      by multiple mutation methods
	    */
	
	  }, {
	    key: 'updateIn',
	    value: function updateIn(path, cb) {
	      if (this.preventExternalMutations) {
	        this.updateInFrozen(path, cb);
	
	        return;
	      }
	
	      if (!path.length) {
	        this.state = cb(this.state);
	      }
	
	      this.changedPaths.push(path);
	      path.reduce(function (currentState, key, index) {
	        if (index === path.length - 1) {
	          currentState[key] = cb(currentState[key]);
	        } else if (!currentState[key]) {
	          (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.splice(0, path.length - 1).join('.') + '" exist?');
	        }
	
	        return currentState[key];
	      }, this.state);
	    }
	    /*
	      Unfreezes on the way down. When done freezes state. It is optimized
	      to not go down already frozen paths
	    */
	
	  }, {
	    key: 'updateInFrozen',
	    value: function updateInFrozen(path, cb) {
	      var _this = this;
	
	      if (!path.length) {
	        this.state = this.freezeObject(cb(this.unfreezeObject(this.state)));
	      }
	
	      this.changedPaths.push(path);
	      this.state = this.unfreezeObject(this.state);
	      path.reduce(function (currentState, key, index) {
	        if (index === path.length - 1) {
	          currentState[key] = cb(_this.unfreezeObject(currentState[key]));
	        } else if (!currentState[key]) {
	          (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.splice(0, path.length - 1).join('.') + '" exist?');
	        } else {
	          currentState[key] = _this.unfreezeObject(currentState[key]);
	        }
	
	        return currentState[key];
	      }, this.state);
	
	      this.freezeObject(this.state);
	    }
	    /*
	      Checks if value is serializable, if turned on
	    */
	
	  }, {
	    key: 'verifyValue',
	    value: function verifyValue(value, path) {
	      if (this.devtools && !(0, _utils.isSerializable)(value, this.devtools.allowedTypes)) {
	        (0, _utils.throwError)('You are passing a non serializable value into the state tree on path ' + path.join('.'));
	      }
	
	      return (0, _utils.forceSerializable)(value);
	    }
	  }, {
	    key: 'verifyValues',
	    value: function verifyValues(values, path) {
	      var _this2 = this;
	
	      if (this.devtools) {
	        values.forEach(function (value) {
	          _this2.verifyValue(value, path);
	        });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	      return path.reduce(function (currentState, key) {
	        return currentState ? currentState[key] : undefined;
	      }, this.state);
	    }
	  }, {
	    key: 'set',
	    value: function set(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function () {
	        return value;
	      });
	    }
	  }, {
	    key: 'push',
	    value: function push(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array) {
	        return array.concat(value);
	      });
	    }
	  }, {
	    key: 'merge',
	    value: function merge(path) {
	      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        values[_key - 1] = arguments[_key];
	      }
	
	      this.verifyValues(values, path);
	
	      // Create object if no present
	      if (!this.get(path)) {
	        this.set(path, {});
	      }
	
	      var value = Object.assign.apply(Object, values);
	
	      // We want this to behave like setting multiple keys
	      for (var prop in value) {
	        this.set(path.concat(prop), value[prop]);
	      }
	    }
	  }, {
	    key: 'pop',
	    value: function pop(path) {
	      this.updateIn(path, function (array) {
	        array.pop();
	
	        return array;
	      });
	    }
	  }, {
	    key: 'shift',
	    value: function shift(path) {
	      this.updateIn(path, function (array) {
	        array.shift();
	
	        return array;
	      });
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array) {
	        array.unshift(value);
	
	        return array;
	      });
	    }
	  }, {
	    key: 'splice',
	    value: function splice(path) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }
	
	      this.verifyValues(args, path);
	      this.updateIn(path, function (array) {
	        array.splice.apply(array, args);
	
	        return array;
	      });
	    }
	  }, {
	    key: 'unset',
	    value: function unset(path) {
	      this.changedPaths.push(path.slice());
	      var key = path.pop();
	
	      this.updateIn(path, function (obj) {
	        delete obj[key];
	
	        return obj;
	      });
	    }
	  }, {
	    key: 'concat',
	    value: function concat(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array) {
	        return array.concat(value);
	      });
	    }
	  }, {
	    key: 'compute',
	    value: function compute(computed) {
	      var forceRecompute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (forceRecompute) {
	        computed.flagAll();
	      }
	      return computed.getValue(this);
	    }
	  }]);
	
	  return Model;
	}();
	
	exports.default = Model;
	//# sourceMappingURL=Model.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(11);
	
	function VerifyInputProvider(context, functionDetails) {
	  try {
	    JSON.stringify(context.input);
	  } catch (e) {
	    (0, _utils.throwError)('The function ' + functionDetails.name + ' in signal ' + context.execution.name + ' is not given a valid input');
	  }
	
	  return context;
	}
	
	exports.default = VerifyInputProvider;
	//# sourceMappingURL=VerifyInput.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(11);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function StateProviderFactory() {
	  var methods = ['get', 'set', 'push', 'merge', 'pop', 'shift', 'unshift', 'splice', 'unset', 'concat', 'compute'];
	  var provider = null;
	
	  function createProvider(context) {
	    var model = context.controller.model;
	    var asyncTimeout = null;
	
	    return methods.reduce(function (currentStateContext, methodKey) {
	      if (methodKey === 'compute') {
	        currentStateContext.compute = function () {
	          return model.compute.apply(model, arguments);
	        };
	      } else if (typeof model[methodKey] === 'function') {
	        currentStateContext[methodKey] = function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var path = (0, _utils.ensurePath)(args.shift());
	
	          if (methodKey !== 'get') {
	            clearTimeout(asyncTimeout);
	            asyncTimeout = setTimeout(function () {
	              return context.controller.flush();
	            });
	          }
	
	          return model[methodKey].apply(model, [path].concat(args));
	        };
	      }
	
	      return currentStateContext;
	    }, {});
	  }
	
	  function StateProvider(context) {
	    context.state = provider = provider || createProvider(context);
	
	    if (context.debugger) {
	      context.state = methods.reduce(function (currentState, methodKey) {
	        if (methodKey === 'get' || methodKey === 'compute') {
	          currentState[methodKey] = provider[methodKey];
	        } else {
	          (function () {
	            var originFunc = provider[methodKey];
	
	            currentState[methodKey] = function () {
	              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	              }
	
	              var argsCopy = args.slice();
	              var path = (0, _utils.ensurePath)(argsCopy.shift());
	
	              context.debugger.send({
	                type: 'mutation',
	                color: '#333',
	                method: methodKey,
	                args: [path].concat(_toConsumableArray(argsCopy))
	              });
	
	              return originFunc.apply(context.controller.model, args);
	            };
	          })();
	        }
	
	        return currentState;
	      }, {});
	    }
	
	    return context;
	  }
	
	  return StateProvider;
	}
	
	exports.default = StateProviderFactory;
	//# sourceMappingURL=State.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function DebuggerProviderFactory() {
	  function DebuggerProvider(context, functionDetails, payload, prevPayload) {
	    var devtools = context.controller.devtools;
	
	    if (devtools.preventInputPropReplacement) {
	      Object.keys(payload).forEach(function (key) {
	        if (prevPayload && key in prevPayload && prevPayload[key] !== payload[key]) {
	          throw new Error('Cerebral Devtools - You have activated the "preventInputPropReplacement" option and in signal "' + context.execution.name + '", before the action "' + functionDetails.name + '", the key "' + key + '" was replaced');
	        }
	      });
	    }
	
	    context.debugger = {
	      send: function send(debuggerData) {
	        devtools.sendExecutionData(debuggerData, context, functionDetails, payload);
	      },
	      getColor: function getColor() {
	        return '#333';
	      },
	      wrapProvider: function wrapProvider(providerKey) {
	        var provider = context[providerKey];
	
	        context[providerKey] = Object.keys(provider).reduce(function (wrappedProvider, key) {
	          var originalFunc = provider[key];
	
	          wrappedProvider[key] = function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }
	
	            context.debugger.send({
	              method: providerKey + '.' + key,
	              args: args
	            });
	
	            return originalFunc.apply(provider, args);
	          };
	
	          return wrappedProvider;
	        }, {});
	      }
	    };
	
	    return context;
	  }
	
	  return DebuggerProvider;
	}
	
	exports.default = DebuggerProviderFactory;
	//# sourceMappingURL=Debugger.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function ControllerProviderFactory(controller) {
	  function ControllerProvider(context) {
	    context.controller = controller;
	
	    return context;
	  }
	
	  return ControllerProvider;
	}
	
	exports.default = ControllerProviderFactory;
	//# sourceMappingURL=Controller.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36)


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global CustomEvent WebSocket File FileList Blob */
	
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(Devtools, [null].concat(args)))();
	};
	
	var _utils = __webpack_require__(11);
	
	var _Path = __webpack_require__(27);
	
	var _Path2 = _interopRequireDefault(_Path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PLACEHOLDER_INITIAL_MODEL = 'PLACEHOLDER_INITIAL_MODEL';
	var PLACEHOLDER_DEBUGGING_DATA = '$$DEBUGGING_DATA$$';
	var VERSION = 'v1';
	
	/*
	  Connects to the Cerebral debugger
	  - Triggers events with information from function tree execution
	  - Stores data related to time travel, if activated
	*/
	
	var Devtools = function () {
	  function Devtools() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      storeMutations: true,
	      preventExternalMutations: true,
	      verifyStrictRender: true,
	      preventInputPropReplacement: false,
	      bigComponentsWarning: {
	        state: 5,
	        signals: 5
	      },
	      remoteDebugger: null,
	      multipleApps: true,
	      allowedTypes: []
	    };
	
	    _classCallCheck(this, Devtools);
	
	    this.VERSION = VERSION;
	    this.debuggerComponentsMap = {};
	    this.debuggerComponentDetailsId = 1;
	    this.storeMutations = typeof options.storeMutations === 'undefined' ? true : options.storeMutations;
	    this.preventExternalMutations = typeof options.preventExternalMutations === 'undefined' ? true : options.preventExternalMutations;
	    this.verifyStrictRender = typeof options.verifyStrictRender === 'undefined' ? true : options.verifyStrictRender;
	    this.preventInputPropReplacement = options.preventInputPropReplacement || false;
	    this.bigComponentsWarning = options.bigComponentsWarning || { state: 5, signals: 5 };
	    this.remoteDebugger = options.remoteDebugger || null;
	    this.multipleApps = typeof options.multipleApps === 'undefined' ? true : options.multipleApps;
	    this.backlog = [];
	    this.mutations = [];
	    this.latestExecutionId = null;
	    this.initialModelString = null;
	    this.isConnected = false;
	    this.controller = null;
	    this.originalRunTreeFunction = null;
	    this.ws = null;
	    this.isResettingDebugger = false;
	    this.isBrowserEnv = typeof document !== 'undefined' && typeof window !== 'undefined';
	    this.allowedTypes = [].concat(this.isBrowserEnv ? [File, FileList, Blob] : []).concat(options.allowedTypes || []);
	
	    this.sendInitial = this.sendInitial.bind(this);
	    this.sendComponentsMap = (0, _utils.debounce)(this.sendComponentsMap, 50);
	  }
	  /*
	    To remember state Cerebral stores the initial model as stringified
	    object. Since the model is mutable this is necessary. The debugger
	    passes the execution id of the signal that was double clicked. This
	    execution id is searched backwards in the array of mutations done.
	    This is necessary as multiple mutations can be done on the same execution.
	    Then all mutations are replayed to the model and all the components
	    will be rerendered using the "flush" event and "force" flag.
	     It will also replace the "runTree" method of the controller to
	    prevent any new signals firing off when in "remember state"
	  */
	
	
	  _createClass(Devtools, [{
	    key: 'remember',
	    value: function remember(executionId) {
	      this.controller.model.state = JSON.parse(this.initialModelString);
	      var lastMutationIndex = void 0;
	
	      if (executionId === this.latestExecutionId) {
	        this.controller.runTree = this.originalRunTreeFunction;
	        lastMutationIndex = this.mutations.length - 1;
	      } else {
	        for (lastMutationIndex = this.mutations.length - 1; lastMutationIndex >= 0; lastMutationIndex--) {
	          if (this.mutations[lastMutationIndex].executionId === executionId) {
	            break;
	          }
	        }
	
	        this.controller.runTree = function (name) {
	          console.warn('The signal "' + name + '" fired while debugger is remembering state, it was ignored');
	        };
	      }
	
	      for (var x = 0; x <= lastMutationIndex; x++) {
	        var _controller$model;
	
	        var mutation = JSON.parse(this.mutations[x].data);
	
	        (_controller$model = this.controller.model)[mutation.method].apply(_controller$model, _toConsumableArray(mutation.args));
	      }
	
	      this.controller.flush(true);
	    }
	    /*
	     */
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.controller.model.state = JSON.parse(this.initialModelString);
	      this.backlog = [];
	      this.mutations = [];
	      this.controller.flush(true);
	    }
	    /*
	      Sets up the listeners to Chrome Extension or remote debugger
	    */
	
	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      var _this = this;
	
	      if (this.remoteDebugger) {
	        this.ws = new WebSocket('ws://' + this.remoteDebugger);
	        this.ws.onmessage = function (event) {
	          var message = JSON.parse(event.data);
	          switch (message.type) {
	            case 'changeModel':
	              _this.controller.model.set(message.data.path, message.data.value);
	              _this.controller.flush();
	              break;
	            case 'remember':
	              if (!_this.storeMutations) {
	                console.warn('Cerebral Devtools - You tried to time travel, but you have turned of storing of mutations');
	              }
	              _this.remember(message.data);
	              break;
	            case 'reset':
	              _this.reset();
	              break;
	            case 'pong':
	              _this.sendInitial();
	              break;
	            case 'ping':
	              _this.sendInitial();
	              break;
	          }
	        };
	      } else {
	        window.addEventListener('cerebral2.debugger.changeModel', function (event) {
	          _this.controller.model.set(event.detail.path, event.detail.value);
	          _this.controller.flush();
	        });
	        window.addEventListener('cerebral2.debugger.remember', function (event) {
	          if (!_this.storeMutations) {
	            console.warn('Cerebral Devtools - You tried to time travel, but you have turned of storing of mutations');
	          }
	          _this.remember(event.detail);
	        });
	        window.addEventListener('cerebral2.debugger.reset', function (event) {
	          _this.reset();
	        });
	        // When debugger responds a client ping
	        window.addEventListener('cerebral2.debugger.pong', this.sendInitial);
	        // When debugger pings the client
	        window.addEventListener('cerebral2.debugger.ping', this.sendInitial);
	      }
	    }
	    /*
	      The debugger might be ready or it might not. The initial communication
	      with the debugger requires a "ping" -> "pong" to identify that it
	      is ready to receive messages.
	      1. Debugger is open when app loads
	        - Devtools sends "ping"
	        - Debugger sends "pong"
	        - Devtools sends "init"
	      2. Debugger is opened after app load
	        - Debugger sends "ping"
	        - Devtools sends "init"
	    */
	
	  }, {
	    key: 'init',
	    value: function init(controller) {
	      var _this2 = this;
	
	      this.controller = controller;
	      this.originalRunTreeFunction = controller.runTree;
	
	      if (this.storeMutations) {
	        this.initialModelString = JSON.stringify(controller.model.get());
	      }
	
	      this.addListeners();
	
	      if (this.remoteDebugger) {
	        this.ws.onopen = function () {
	          _this2.ws.send(JSON.stringify({ type: 'ping' }));
	        };
	        this.ws.onclose = function () {
	          if (_this2.isBrowserEnv) {
	            console.warn('You have configured remoteDebugger, but could not connect. Falling back to Chrome extension');
	            _this2.reInit();
	          } else {
	            console.warn('You have configured remoteDebugger, but could not connect. Please start the remote debugger and make sure you connect to correct port');
	          }
	        };
	        this.ws.onerror = function () {
	          if (_this2.isBrowserEnv) {
	            _this2.reInit();
	          }
	        };
	      } else if (this.isBrowserEnv) {
	        var event = new CustomEvent('cerebral2.client.message', {
	          detail: JSON.stringify({ type: 'ping' })
	        });
	        window.dispatchEvent(event);
	      } else {
	        console.warn('The Cerebral devtools is running in a non browser environment. You have to add the remoteDebugger option');
	      }
	
	      if (this.isBrowserEnv && this.multipleApps) {
	        (function () {
	          var hidden = void 0,
	              visibilityChange = void 0;
	          if (typeof document.hidden !== 'undefined') {
	            hidden = 'hidden';
	            visibilityChange = 'visibilitychange';
	          } else if (typeof document.msHidden !== 'undefined') {
	            hidden = 'msHidden';
	            visibilityChange = 'msvisibilitychange';
	          } else if (typeof document.webkitHidden !== 'undefined') {
	            hidden = 'webkitHidden';
	            visibilityChange = 'webkitvisibilitychange';
	          }
	
	          document.addEventListener(visibilityChange, function () {
	            if (!document[hidden]) {
	              _this2.isResettingDebugger = true;
	              _this2.backlog.forEach(function (message) {
	                _this2.sendMessage(message);
	              });
	              _this2.isResettingDebugger = false;
	            }
	          }, false);
	        })();
	      }
	
	      this.watchExecution();
	    }
	    /*
	      When websocket close, reinit with chrome extension
	    */
	
	  }, {
	    key: 'reInit',
	    value: function reInit() {
	      this.remoteDebugger = null;
	      this.addListeners();
	
	      var event = new CustomEvent('cerebral2.client.message', {
	        detail: JSON.stringify({ type: 'ping' })
	      });
	      window.dispatchEvent(event);
	    }
	    /*
	      Sends message to chrome extension or remote debugger
	    */
	
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(stringifiedMessage) {
	      if (this.multipleApps && !this.isResettingDebugger) {
	        this.backlog.push(stringifiedMessage);
	      }
	
	      if (this.remoteDebugger) {
	        this.ws.send(stringifiedMessage);
	      } else {
	        var event = new CustomEvent('cerebral2.client.message', { detail: stringifiedMessage });
	        window.dispatchEvent(event);
	      }
	    }
	    /*
	      Watches function tree for execution of signals. This is passed to
	      debugger to prevent time travelling when executing. It also tracks
	      latest executed signal for "remember" to know when signals can be
	      called again
	    */
	
	  }, {
	    key: 'watchExecution',
	    value: function watchExecution() {
	      var _this3 = this;
	
	      this.controller.runTree.on('start', function (execution) {
	        var message = JSON.stringify({
	          type: 'executionStart',
	          data: {
	            execution: {
	              executionId: execution.id,
	              name: execution.name,
	              staticTree: execution.staticTree,
	              datetime: execution.datetime
	            }
	          }
	        });
	
	        if (_this3.isConnected) {
	          _this3.sendMessage(message);
	        } else {
	          _this3.backlog.push(message);
	        }
	      });
	      this.controller.runTree.on('end', function (execution) {
	        var message = JSON.stringify({
	          type: 'executionEnd',
	          data: {
	            execution: {
	              executionId: execution.id
	            }
	          }
	        });
	        _this3.latestExecutionId = execution.id;
	
	        if (_this3.isConnected) {
	          _this3.sendMessage(message);
	        } else {
	          _this3.backlog.push(message);
	        }
	      });
	      this.controller.runTree.on('pathStart', function (path, execution, funcDetails) {
	        var message = JSON.stringify({
	          type: 'executionPathStart',
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              path: path
	            }
	          }
	        });
	
	        if (_this3.isConnected) {
	          _this3.sendMessage(message);
	        } else {
	          _this3.backlog.push(message);
	        }
	      });
	      this.controller.runTree.on('functionStart', function (execution, funcDetails, payload) {
	        var message = JSON.stringify({
	          type: 'execution',
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              payload: payload,
	              data: null
	            }
	          }
	        });
	
	        if (_this3.isConnected) {
	          _this3.sendMessage(message);
	        } else {
	          _this3.backlog.push(message);
	        }
	      });
	      this.controller.runTree.on('functionEnd', function (execution, funcDetails, payload, result) {
	        if (!result || result instanceof _Path2.default && !result.payload) {
	          return;
	        }
	
	        var message = JSON.stringify({
	          type: 'executionFunctionEnd',
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              output: result instanceof _Path2.default ? result.payload : result
	            }
	          }
	        });
	
	        if (_this3.isConnected) {
	          _this3.sendMessage(message);
	        } else {
	          _this3.backlog.push(message);
	        }
	      });
	    }
	    /*
	      Send initial model. If model has already been stringified we reuse it. Any
	      backlogged executions will also be triggered
	    */
	
	  }, {
	    key: 'sendInitial',
	    value: function sendInitial() {
	      var _this4 = this;
	
	      var initialModel = this.controller.model.get();
	      var message = JSON.stringify({
	        type: 'init',
	        version: this.VERSION,
	        data: {
	          initialModel: this.initialModelString ? PLACEHOLDER_INITIAL_MODEL : initialModel
	        }
	      }).replace('"' + PLACEHOLDER_INITIAL_MODEL + '"', this.initialModelString);
	
	      this.isResettingDebugger = true;
	      this.sendMessage(message);
	      this.backlog.forEach(function (backlogItem) {
	        _this4.sendMessage(backlogItem);
	      });
	      this.isResettingDebugger = false;
	
	      if (!this.multipleApps) {
	        this.backlog = [];
	      }
	
	      this.isConnected = true;
	
	      this.sendMessage(JSON.stringify({
	        type: 'components',
	        data: {
	          map: this.debuggerComponentsMap,
	          render: {
	            components: []
	          }
	        }
	      }));
	    }
	    /*
	      Create the stringified message for the debugger. As we need to
	      store mutations with the default true "storeMutations" option used
	      by time travel and jumping between Cerebral apps, we are careful
	      not doing unnecessary stringifying.
	    */
	
	  }, {
	    key: 'createExecutionMessage',
	    value: function createExecutionMessage(debuggingData, context, functionDetails, payload) {
	      var type = 'execution';
	      var mutationString = '';
	
	      if (this.storeMutations && debuggingData && debuggingData.type === 'mutation') {
	        mutationString = JSON.stringify(debuggingData);
	      }
	
	      var data = {
	        execution: {
	          executionId: context.execution.id,
	          functionIndex: functionDetails.functionIndex,
	          payload: payload,
	          datetime: context.execution.datetime,
	          data: mutationString ? PLACEHOLDER_DEBUGGING_DATA : debuggingData
	        }
	      };
	
	      if (mutationString) {
	        this.mutations.push({
	          executionId: context.execution.id,
	          data: mutationString
	        });
	      }
	
	      return JSON.stringify({
	        type: type,
	        version: this.VERSION,
	        data: data
	      }).replace('"' + PLACEHOLDER_DEBUGGING_DATA + '"', mutationString);
	    }
	    /*
	      Sends execution data to the debugger. Whenever a signal starts
	      it will send a message to the debugger, but any functions in the
	      function tree might also use this to send debugging data. Like when
	      mutations are done or any wrapped methods run.
	    */
	
	  }, {
	    key: 'sendExecutionData',
	    value: function sendExecutionData(debuggingData, context, functionDetails, payload) {
	      var message = this.createExecutionMessage(debuggingData, context, functionDetails, payload);
	
	      if (this.isConnected) {
	        this.sendMessage(message);
	      } else {
	        this.backlog.push(message);
	      }
	    }
	    /*
	      The container will listen to "flush" events from the controller
	      and send an event to debugger about initial registered components
	    */
	
	  }, {
	    key: 'extractComponentName',
	    value: function extractComponentName(component) {
	      return component.constructor.displayName.replace('CerebralWrapping_', '');
	    }
	    /*
	      Updates the map the represents what active state paths and
	      components are in your app. Used by the debugger
	    */
	
	  }, {
	    key: 'updateComponentsMap',
	    value: function updateComponentsMap(component, nextDeps, prevDeps) {
	      var componentDetails = {
	        name: this.extractComponentName(component),
	        renderCount: component.renderCount ? component.renderCount + 1 : 1,
	        id: component.componentDetailsId || this.debuggerComponentDetailsId++
	      };
	      component.componentDetailsId = componentDetails.id;
	      component.renderCount = componentDetails.renderCount;
	
	      if (prevDeps) {
	        for (var depsKey in prevDeps) {
	          var debuggerComponents = this.debuggerComponentsMap[prevDeps[depsKey]];
	
	          for (var x = 0; x < debuggerComponents.length; x++) {
	            if (debuggerComponents[x].id === component.componentDetailsId) {
	              debuggerComponents.splice(x, 1);
	              if (debuggerComponents.length === 0) {
	                delete this.debuggerComponentsMap[prevDeps[depsKey]];
	              }
	              break;
	            }
	          }
	        }
	      }
	
	      if (nextDeps) {
	        for (var _depsKey in nextDeps) {
	          this.debuggerComponentsMap[nextDeps[_depsKey]] = this.debuggerComponentsMap[nextDeps[_depsKey]] ? this.debuggerComponentsMap[nextDeps[_depsKey]].concat(componentDetails) : [componentDetails];
	        }
	      }
	    }
	    /*
	      Sends components map to debugger. It is debounced (check constructor).
	      It needs to wait because React updates async. Instead of tracking
	      callbacks we just wait 50ms as it is not that important when
	      debugger updates
	    */
	
	  }, {
	    key: 'sendComponentsMap',
	    value: function sendComponentsMap(componentsToRender, changes, start, end) {
	      this.sendMessage(JSON.stringify({
	        type: 'components',
	        data: {
	          map: this.debuggerComponentsMap,
	          render: {
	            start: start,
	            duration: end - start,
	            changes: changes,
	            components: componentsToRender.map(this.extractComponentName)
	          }
	        }
	      }));
	    }
	  }]);
	
	  return Devtools;
	}();
	//# sourceMappingURL=index.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38)


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debounce = __webpack_require__(39);
	
	Object.defineProperty(exports, 'debounce', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_debounce).default;
	  }
	});
	
	var _when = __webpack_require__(42);
	
	Object.defineProperty(exports, 'when', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_when).default;
	  }
	});
	
	var _wait = __webpack_require__(43);
	
	Object.defineProperty(exports, 'wait', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_wait).default;
	  }
	});
	
	var _equals = __webpack_require__(44);
	
	Object.defineProperty(exports, 'equals', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_equals).default;
	  }
	});
	
	var _state = __webpack_require__(45);
	
	Object.defineProperty(exports, 'state', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_state).default;
	  }
	});
	
	var _input = __webpack_require__(47);
	
	Object.defineProperty(exports, 'input', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_input).default;
	  }
	});
	
	var _string = __webpack_require__(48);
	
	Object.defineProperty(exports, 'string', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_string).default;
	  }
	});
	
	var _signal = __webpack_require__(49);
	
	Object.defineProperty(exports, 'signal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_signal).default;
	  }
	});
	
	var _concat = __webpack_require__(50);
	
	Object.defineProperty(exports, 'concat', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_concat).default;
	  }
	});
	
	var _merge = __webpack_require__(51);
	
	Object.defineProperty(exports, 'merge', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_merge).default;
	  }
	});
	
	var _pop = __webpack_require__(52);
	
	Object.defineProperty(exports, 'pop', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pop).default;
	  }
	});
	
	var _push = __webpack_require__(53);
	
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_push).default;
	  }
	});
	
	var _set = __webpack_require__(54);
	
	Object.defineProperty(exports, 'set', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_set).default;
	  }
	});
	
	var _shift = __webpack_require__(55);
	
	Object.defineProperty(exports, 'shift', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_shift).default;
	  }
	});
	
	var _splice = __webpack_require__(56);
	
	Object.defineProperty(exports, 'splice', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_splice).default;
	  }
	});
	
	var _toggle = __webpack_require__(57);
	
	Object.defineProperty(exports, 'toggle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_toggle).default;
	  }
	});
	
	var _unset = __webpack_require__(58);
	
	Object.defineProperty(exports, 'unset', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_unset).default;
	  }
	});
	
	var _unshift = __webpack_require__(59);
	
	Object.defineProperty(exports, 'unshift', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_unshift).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	//# sourceMappingURL=index.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _factories = __webpack_require__(40);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _factories.debounce;
	  }
	});
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports.debounce = __webpack_require__(41).default


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function createDebounce(time, execution) {
	  function debounce(_ref) {
	    var path = _ref.path;
	
	    return new Promise(function (resolve) {
	      if (execution.timer) {
	        execution.resolve(path.discard());
	        clearTimeout(execution.timer);
	      }
	
	      execution.timer = setTimeout(function () {
	        execution.resolve(path.continue());
	        execution.timer = null;
	        execution.resolve = null;
	      }, time);
	      execution.resolve = resolve;
	    });
	  }
	  debounce.displayName = 'debounce - ' + time + 'ms';
	
	  return debounce;
	}
	
	function debounceFactory(time) {
	  // New execution on every call
	  var execution = { timer: null, resolve: null };
	
	  return createDebounce(time, execution);
	}
	
	debounceFactory.shared = function () {
	  // Shared execution
	  var execution = { timer: null, resolve: null };
	
	  return function debounceSharedFactory(time) {
	    return createDebounce(time, execution);
	  };
	};
	
	exports.default = debounceFactory;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function whenFactory() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var whenFunc = args.length > 1 ? args[args.length - 1] : null;
	  var valueTemplates = args.length > 1 ? args.slice(0, -1) : args;
	  function when(context) {
	    var values = valueTemplates.map(function (value) {
	      return typeof value === 'function' ? value(context).value : value;
	    });
	    var isTrue = Boolean(whenFunc ? whenFunc.apply(undefined, _toConsumableArray(values)) : values[0]);
	
	    return isTrue ? context.path.true() : context.path.false();
	  }
	
	  when.displayName = 'operator.when';
	
	  return when;
	}
	
	exports.default = whenFactory;
	//# sourceMappingURL=when.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function waitFactory(ms) {
	  function wait(_ref) {
	    var path = _ref.path;
	
	    return new Promise(function (resolve) {
	      setTimeout(function () {
	        return resolve(path ? path.continue() : null);
	      }, ms);
	    });
	  }
	  wait.displayName = 'wait - ' + ms + 'ms';
	
	  return wait;
	}
	
	exports.default = waitFactory;
	//# sourceMappingURL=wait.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function equalsFactory(target) {
	  function equals(context) {
	    var targetValue = target(context).value;
	
	    return context.path[targetValue] ? context.path[targetValue]() : context.path.otherwise();
	  }
	
	  equals.displayName = 'operator.equals';
	
	  return equals;
	}
	
	exports.default = equalsFactory;
	//# sourceMappingURL=equals.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = state;
	
	var _populatePath = __webpack_require__(46);
	
	var _populatePath2 = _interopRequireDefault(_populatePath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function state(strings) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	
	  return function (context) {
	    var target = 'state';
	    var path = (0, _populatePath2.default)(context, strings, values);
	
	    return {
	      target: target,
	      path: path,
	      value: context.state.get(path)
	    };
	  };
	}
	//# sourceMappingURL=state.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = populatePath;
	function populatePath(context, strings, values) {
	  return strings.reduce(function (currentPath, string, idx) {
	    var valueTemplate = values[idx];
	    if (valueTemplate && valueTemplate.getValue) {
	      return currentPath + string + context.state.compute(valueTemplate);
	    }
	
	    if (valueTemplate && typeof valueTemplate === 'function') {
	      return currentPath + string + valueTemplate(context).value;
	    }
	
	    return currentPath + string + (valueTemplate || '');
	  }, '');
	}
	//# sourceMappingURL=populatePath.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = input;
	
	var _populatePath = __webpack_require__(46);
	
	var _populatePath2 = _interopRequireDefault(_populatePath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function input(strings) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	
	  return function (context) {
	    var target = 'input';
	    var path = (0, _populatePath2.default)(context, strings, values);
	
	    return {
	      target: target,
	      path: path,
	      value: path.split('.').reduce(function (currentValue, key) {
	        return currentValue[key];
	      }, context.input)
	    };
	  };
	}
	//# sourceMappingURL=input.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = string;
	
	var _populatePath = __webpack_require__(46);
	
	var _populatePath2 = _interopRequireDefault(_populatePath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function string(strings) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	
	  return function (context) {
	    var target = 'string';
	    var path = (0, _populatePath2.default)(context, strings, values);
	
	    return {
	      target: target,
	      path: path,
	      value: path
	    };
	  };
	}
	//# sourceMappingURL=string.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = signal;
	
	var _populatePath = __webpack_require__(46);
	
	var _populatePath2 = _interopRequireDefault(_populatePath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function signal(strings) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	
	  return function (context) {
	    var target = 'signal';
	    var path = (0, _populatePath2.default)(context, strings, values);
	
	    return {
	      target: target,
	      path: path,
	      value: context.controller.getSignal(path)
	    };
	  };
	}
	//# sourceMappingURL=signal.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target, value) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.concat: You have to use a state template tag as first argument');
	  }
	
	  function concat(context) {
	    var targetTemplate = target(context);
	    var concatValue = typeof value === 'function' ? value(context).value : value;
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.concat: You have to use a state template tag as first argument');
	    }
	
	    context.state.concat(targetTemplate.path, concatValue);
	  }
	
	  concat.displayName = 'operator.concat';
	
	  return concat;
	};
	//# sourceMappingURL=concat.js.map

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.merge: You have to use a state template tag as first argument');
	  }
	
	  function merge(context) {
	    var _context$state;
	
	    var targetTemplate = target(context);
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.merge: You have to use a state template tag as first argument');
	    }
	
	    (_context$state = context.state).merge.apply(_context$state, [targetTemplate.path].concat(_toConsumableArray(values.map(function (value) {
	      if (typeof value === 'function') {
	        return value(context).value;
	      }
	
	      return Object.keys(value).reduce(function (currentValue, key) {
	        currentValue[key] = typeof value[key] === 'function' ? value[key](context).value : value[key];
	
	        return currentValue;
	      }, {});
	    }))));
	  }
	
	  merge.displayName = 'operator.merge';
	
	  return merge;
	};
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	//# sourceMappingURL=merge.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.pop: You have to use a state template tag as first argument');
	  }
	
	  function pop(context) {
	    var targetTemplate = target(context);
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.pop: You have to use a state template tag as first argument');
	    }
	
	    context.state.pop(targetTemplate.path);
	  }
	
	  pop.displayName = 'operator.pop';
	
	  return pop;
	};
	//# sourceMappingURL=pop.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target, value) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.push: You have to use a state template tag as first argument');
	  }
	
	  function push(context) {
	    var targetTemplate = target(context);
	    var pushValue = typeof value === 'function' ? value(context).value : value;
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.push: You have to use a state template tag as first argument');
	    }
	
	    context.state.push(targetTemplate.path, pushValue);
	  }
	
	  push.displayName = 'operator.push';
	
	  return push;
	};
	//# sourceMappingURL=push.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target, value) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.set: You have to use a state template tag as first argument');
	  }
	
	  function set(context) {
	    var targetTemplate = target(context);
	    var setValue = typeof value === 'function' ? value(context).value : value;
	
	    if (targetTemplate.target !== 'state' && targetTemplate.target !== 'input') {
	      throw new Error('Cerebral operator.set: You have to use a state or input operator tag as first argument');
	    }
	
	    if (targetTemplate.target === 'state') {
	      context.state.set(targetTemplate.path, setValue);
	    } else {
	      var result = Object.assign({}, context.input);
	      var parts = targetTemplate.path.split('.');
	      var key = parts.pop();
	      var _target = parts.reduce(function (target, key) {
	        return target[key] = Object.assign({}, target[key] || {});
	      }, result);
	      _target[key] = setValue;
	
	      return result;
	    }
	  }
	
	  set.displayName = 'operator.set';
	
	  return set;
	};
	//# sourceMappingURL=set.js.map

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.shift: You have to use a state template tag as first argument');
	  }
	
	  function shift(context) {
	    var targetTemplate = target(context);
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.shift: You have to use a state template tag as first argument');
	    }
	
	    context.state.shift(targetTemplate.path);
	  }
	
	  shift.displayName = 'operator.shift';
	
	  return shift;
	};
	//# sourceMappingURL=shift.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.splice: You have to use a state template tag as first argument');
	  }
	
	  function splice(context) {
	    var _context$state;
	
	    var targetTemplate = target(context);
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.splice: You have to use a state template tag as first argument');
	    }
	
	    var spliceArgs = args.map(function (arg) {
	      return typeof arg === 'function' ? arg(context).value : arg;
	    });
	
	    (_context$state = context.state).splice.apply(_context$state, [targetTemplate.path].concat(_toConsumableArray(spliceArgs)));
	  }
	
	  splice.displayName = 'operator.splice';
	
	  return splice;
	};
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	//# sourceMappingURL=splice.js.map

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.toggle: You have to use a state template tag as first argument');
	  }
	
	  function toggle(context) {
	    var targetTemplate = target(context);
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.toggle: You have to use a state template tag as first argument');
	    }
	
	    context.state.set(targetTemplate.path, !context.state.get(targetTemplate.path));
	  }
	
	  toggle.displayName = 'operator.toggle';
	
	  return toggle;
	};
	//# sourceMappingURL=toggle.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.unset: You have to use a state template tag as first argument');
	  }
	
	  function unset(context) {
	    var targetTemplate = target(context);
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.unset: You have to use a state template tag as first argument');
	    }
	
	    context.state.unset(targetTemplate.path);
	  }
	
	  unset.displayName = 'operator.unset';
	
	  return unset;
	};
	//# sourceMappingURL=unset.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target, value) {
	  if (typeof target !== 'function') {
	    throw new Error('Cerebral operator.set: You have to use a state template tag as first argument');
	  }
	
	  function unshift(context) {
	    var targetTemplate = target(context);
	    var unshiftValue = typeof value === 'function' ? value(context).value : value;
	
	    if (targetTemplate.target !== 'state') {
	      throw new Error('Cerebral operator.unshift: You have to use a state template tag as first argument');
	    }
	
	    context.state.unshift(targetTemplate.path, unshiftValue);
	  }
	
	  unshift.displayName = 'operator.unshift';
	
	  return unshift;
	};
	//# sourceMappingURL=unshift.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.redirect = redirect;
	exports.goTo = goTo;
	exports.default = Router;
	
	var _utils = __webpack_require__(61);
	
	var _urlMapper = __webpack_require__(62);
	
	var _urlMapper2 = _interopRequireDefault(_urlMapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addressbar = void 0;
	try {
	  addressbar = __webpack_require__(68);
	} catch (e) {
	  addressbar = {
	    pathname: '/',
	    value: '',
	    origin: '',
	    on: function on() {},
	    removeListener: function removeListener() {}
	  };
	}
	
	function redirect(url) {
	  function redirect(_ref) {
	    var router = _ref.router;
	
	    router.redirect(url);
	  }
	
	  return redirect;
	}
	
	function goTo(url) {
	  function goTo(_ref2) {
	    var router = _ref2.router;
	
	    router.goTo(url);
	  }
	
	  return goTo;
	}
	
	function Router() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  options.mapper = (0, _urlMapper2.default)({ query: options.query });
	
	  return function (controller) {
	    if (!options.mapper || typeof options.mapper.map !== 'function') {
	      throw new Error('Cerebral router - mapper option must be provided.');
	    }
	
	    var routesConfig = (0, _utils.flattenConfig)(options.routes);
	
	    if (!options.baseUrl && options.onlyHash) {
	      // autodetect baseUrl
	      options.baseUrl = addressbar.pathname;
	    }
	    if (options.baseUrl && options.onlyHash) {
	      options.baseUrl = (options.baseUrl + '/').replace('//', '/');
	    }
	    options.baseUrl = (options.baseUrl || '') + (options.onlyHash ? '#' : '');
	
	    var signals = (0, _utils.getRoutableSignals)(routesConfig, controller);
	
	    function onUrlChange(event) {
	      var url = event ? event.target.value : addressbar.value;
	      url = url.replace(addressbar.origin, '');
	
	      if (options.onlyHash && !~url.indexOf('#')) {
	        // treat hash absense as root route
	        url = url + '#/';
	      }
	
	      // check if url should be routed
	      if (url.indexOf(options.baseUrl) === 0) {
	        var map = options.mapper.map(url.replace(options.baseUrl, ''), routesConfig);
	
	        if (map) {
	          event && event.preventDefault();
	          addressbar.value = url;
	
	          signals[map.match].signal(map.values);
	        } else {
	          if (options.allowEscape) return;
	
	          event && event.preventDefault();
	          console.warn('Cerebral router - No route matched ' + url + ', navigation was prevented. Please verify url or catch unmatched routes with a "/*" route.'); // eslint-disable-line no-console
	        }
	      }
	    }
	
	    function onSignalStart(execution, payload) {
	      var signal = signals[execution.name];
	      if (signal) {
	        var route = signal.route;
	        var input = payload;
	
	        addressbar.value = options.baseUrl + options.mapper.stringify(route, input);
	      }
	    }
	
	    function init() {
	      addressbar.on('change', onUrlChange);
	      controller.runTree.on('start', onSignalStart);
	      if (!options.preventAutostart) {
	        onUrlChange();
	      }
	    }
	
	    var contextProvider = {
	      getUrl: function getUrl() {
	        return addressbar.value.replace(addressbar.origin + options.baseUrl, '');
	      },
	      goTo: function goTo(url) {
	        addressbar.value = options.baseUrl + url;
	        onUrlChange();
	      },
	      redirect: function redirect(url) {
	        addressbar.value = {
	          value: options.baseUrl + url,
	          replace: true
	        };
	
	        onUrlChange();
	      },
	      redirectToSignal: function redirectToSignal(signalName, payload) {
	        var signal = signals[signalName];
	
	        if (signal) {
	          signal.signal(payload);
	        } else {
	          console.warn('Cerebral router - signal ' + signalName + ' is not bound to route. Redirect wouldn\'t happen.'); // eslint-disable-line no-console
	        }
	      }
	    };
	
	    return {
	      init: init,
	      provider: function provider(context) {
	        context.router = contextProvider;
	
	        return context;
	      }
	    };
	  };
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.flattenConfig = flattenConfig;
	exports.getRoutableSignals = getRoutableSignals;
	function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj) && obj !== null;
	}
	
	function flattenConfig(config) {
	  var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(config).reduce(function (flattened, key) {
	    if (isObject(config[key])) {
	      return Object.assign(flattened, flattenConfig(config[key], prev + key));
	    }
	
	    flattened[prev + key] = config[key];
	
	    return flattened;
	  }, {});
	}
	
	function getRoutableSignals(config, controller) {
	  return Object.keys(config).reduce(function (routableSignals, route) {
	    var signal = controller.getSignal(config[route]);
	
	    if (!signal) {
	      throw new Error('Cerebral router - The signal ' + config[route] + ' for the route ' + route + ' does not exist.');
	    }
	
	    if (routableSignals[config[route]]) {
	      throw new Error('Cerebral router - The signal ' + config[route] + ' has already been bound to route ' + route + '. Create a new signal and reuse actions instead if needed.');
	    }
	
	    routableSignals[config[route]] = {
	      route: route,
	      signal: signal
	    };
	
	    return routableSignals;
	  }, {});
	}
	//# sourceMappingURL=utils.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var mapper = __webpack_require__(63)
	var compileRoute = __webpack_require__(64)
	
	module.exports = function urlMapper (options) {
	  return mapper(compileRoute, options)
	}


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function mapper (compileFn, options) {
	  if (typeof compileFn !== 'function') throw new Error('URL Mapper - function to compile a route expected as first argument')
	
	  options = options || {}
	  var cache = {}
	
	  function getCompiledRoute (route) {
	    if (!cache[route]) {
	      cache[route] = compileFn(route, options)
	    }
	
	    return cache[route]
	  }
	
	  function parse (route, url) {
	    if (arguments.length < 2) throw new Error('URL Mapper - parse method expects 2 arguments')
	    return getCompiledRoute(route).parse(url)
	  }
	
	  function stringify (route, values) {
	    if (arguments.length < 2) throw new Error('URL Mapper - stringify method expects 2 arguments')
	    return getCompiledRoute(route).stringify(values)
	  }
	
	  function map (url, routes) {
	    if (arguments.length < 2) throw new Error('URL Mapper - map method expects 2 arguments')
	    for (var route in routes) {
	      var compiled = getCompiledRoute(route)
	      var values = compiled.parse(url)
	      if (values) {
	        var match = routes[route]
	
	        return {
	          route: route,
	          match: match,
	          values: values
	        }
	      }
	    }
	  }
	
	  return {
	    parse: parse,
	    stringify: stringify,
	    map: map
	  }
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var URLON = __webpack_require__(65)
	var pathToRegexp = __webpack_require__(66)
	
	function compileRoute (route, options) {
	  var re
	  var compiled
	  var keys = []
	  var querySeparator = options.querySeparator || '?'
	
	  re = pathToRegexp(route, keys)
	  keys = keys.map(function (key) { return key.name.toString() })
	  compiled = pathToRegexp.compile(route)
	
	  return {
	    parse: function (url) {
	      var path = url
	      var result = {}
	
	      if (~path.indexOf('#') && !~querySeparator.indexOf('#')) {
	        path = path.split('#')[0]
	      }
	
	      if (~path.indexOf(querySeparator)) {
	        if (options.query) {
	          var queryString = '_' + path.slice(path.indexOf(querySeparator) + querySeparator.length)
	          result = URLON.parse(queryString)
	        }
	        path = path.split(querySeparator)[0]
	      }
	
	      var match = re.exec(path)
	      if (!match) return null
	
	      for (var i = 1; i < match.length; ++i) {
	        var key = keys[i - 1]
	        var value = match[i] && decodeURIComponent(match[i])
	        if (value && value[0] === ':') {
	          result[key] = URLON.parse(value)
	        } else {
	          result[key] = value
	        }
	      }
	
	      return result
	    },
	
	    stringify: function (values) {
	      var pathParams = {}
	      var queryParams = {}
	
	      Object.keys(values).forEach(function (key) {
	        if (~keys.indexOf(key)) {
	          switch (typeof values[key]) {
	            case 'boolean':
	            case 'number':
	              pathParams[key] = URLON.stringify(values[key])
	              break
	
	            case 'object':
	              throw new Error('URL Mapper - objects are not allowed to be stringified as part of path')
	
	            default:
	              pathParams[key] = values[key]
	          }
	        } else {
	          if (typeof values[key] !== 'undefined') queryParams[key] = values[key]
	        }
	      })
	
	      var path = compiled(pathParams)
	      var queryString = ''
	
	      if (options.query) {
	        if (Object.keys(queryParams).length) {
	          queryString = querySeparator + URLON.stringify(queryParams).slice(1)
	        }
	      }
	
	      return path + queryString
	    }
	  }
	}
	
	module.exports = compileRoute


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var URLON = {
		stringify: function (input) {
			function encodeString (str) {
				return encodeURI(str.replace(/([=:&@_;\/])/g, '/$1'));
			}
	
			function stringify (input) {
				// Number or Boolean or Null
				if (typeof input === 'number' || input === true || input === false || input === null) {
					return ':' + input;
				}
				// Array
				if (input instanceof Array) {
					var res = [];
					for (var i = 0; i < input.length; ++i) {
						res.push(stringify(input[i]));
					}
					return '@' + res.join('&') + ';';
				}
				// Object
				if (typeof input === 'object') {
					var res = [];
					for (var key in input) {
						res.push(encodeString(key) + stringify(input[key]));
					}
					return '_' + res.join('&') + ';';
				}
				// String or undefined
				return '=' + encodeString((input !== null ? (input !== undefined ? input : "undefined") : "null").toString());
			}
	
			return stringify(input).replace(/;+$/g, '');
		},
	
		parse: function (str) {
			var pos = 0;
			str = decodeURI(str);
	
			function read() {
				var token = '';
				for (; pos !== str.length; ++pos) {
					if (str.charAt(pos) === '/') {
						pos += 1;
						if (pos === str.length) {
							token += ';';
							break;
						}
					} else if (str.charAt(pos).match(/[=:&@_;]/)) {
						break;
					}
					token += str.charAt(pos);
				}
				return token;
			}
	
			function parse() {
				var type = str.charAt(pos++);
	
				// String
				if (type === '=') {
					return read();
				}
				// Number or Boolean
				if (type === ':') {
					var value = read();
					if (value === 'true') {
						return true;
					}
					if (value === 'false') {
						return false;
					}
					value = parseFloat(value);
					return isNaN(value) ? null : value;
				}
				// Array
				if (type === '@') {
					var res = [];
					loop: {
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						while (1) {
							res.push(parse());
							if (pos >= str.length || str.charAt(pos) === ';') {
								break loop;
							}
							pos += 1;
						}
					}
					pos += 1;
					return res;
				}
				// Object
				if (type === '_') {
					var res = {};
					loop: {
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						while (1) {
							var name = read();
							res[name] = parse();
							if (pos >= str.length || str.charAt(pos) === ';') {
								break loop;
							}
							pos += 1;
						}
					}
					pos += 1;
					return res;
				}
				// Error
				throw 'Unexpected char ' + type;
			}
	
			return parse();
		}
	};
	
	if (true) {
		exports.stringify = URLON.stringify;
		exports.parse = URLON.parse;
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(67)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      keys.push(token)
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global history */
	
	var URL = __webpack_require__(69)
	var EventEmitter = __webpack_require__(21).EventEmitter
	var instance = null
	
	// Check if IE history polyfill is added
	var location = window.history.location || window.location
	
	module.exports = (function () {
	  if (instance) {
	    return instance
	  }
	
	  var eventEmitter = new EventEmitter()
	
	  eventEmitter.addEventListener = eventEmitter.addListener
	  eventEmitter.removeEventListener = eventEmitter.removeListener
	
	  var initialUrl = location.href
	  var uri = URL(initialUrl)
	  var origin = uri.protocol + '//' + uri.host
	  var isPreventingDefault = false
	  var doReplace = false
	  var prevUrl = ''
	  // var linkClicked = false
	  var isEmitting = false
	  var setSyncUrl = false
	
	  var emitChange = function (url, event) {
	    eventEmitter.emit('change', {
	      preventDefault: function () {
	        event && event.preventDefault()
	        isPreventingDefault = true
	      },
	      target: {
	        value: url ? origin + url : location.href
	      }
	    })
	  }
	
	  var onUrlChange = function (type) {
	    return function (event) {
	      if (location.href === prevUrl) {
	        return
	      }
	
	      // Fixes bug where trailing slash is converted to normal url
	      if (location.href[location.href.length - 1] === '/') {
	        doReplace = true
	      }
	
	      isEmitting = true
	      emitChange()
	      isEmitting = false
	
	      if (!setSyncUrl && isPreventingDefault) {
	        history.replaceState({}, '', (prevUrl || initialUrl).replace(origin, ''))
	      }
	
	      prevUrl = location.href
	      isPreventingDefault = false
	      setSyncUrl = false
	      doReplace = false
	    }
	  }
	
	  // this hack resolves issue with safari
	  // see issue from Page JS for reference https://github.com/visionmedia/page.js/issues/213
	  // see also https://github.com/visionmedia/page.js/pull/240
	  if (document.readyState !== 'complete') {
	    // load event has not fired
	    global.addEventListener('load', function () {
	      setTimeout(function () {
	        global.addEventListener('popstate', onUrlChange('pop'), false)
	      }, 0)
	    }, false)
	  } else {
	    // load event has fired
	    global.addEventListener('popstate', onUrlChange('pop'), false)
	  }
	
	  Object.defineProperty(eventEmitter, 'value', {
	    get: function () {
	      return location.href
	    },
	    set: function (value) {
	      if (typeof value !== 'string') {
	        doReplace = Boolean(value.replace)
	        value = value.value
	      }
	
	      // If emitting a change we flag that we are setting
	      // a url based on the event being emitted
	      if (isEmitting) {
	        setSyncUrl = true
	      }
	
	      // Ensure full url
	      if (value.indexOf(origin) === -1) {
	        value = origin + value
	      }
	
	      // If it is same url, forget about it
	      if (value === location.href) {
	        return
	      }
	
	      // We might need to replace the url if we are fixing
	      // for example trailing slash issue
	      if (doReplace) {
	        history.replaceState({}, '', value.replace(origin, ''))
	        doReplace = false
	      } else {
	        history.pushState({}, '', value.replace(origin, ''))
	      }
	
	      prevUrl = location.href
	      isPreventingDefault = false
	    }
	  })
	
	  // expose URLUtils like API https://developer.mozilla.org/en-US/docs/Web/API/URLUtils
	  // thanks https://github.com/cofounders/urlutils for reference
	  Object.defineProperty(eventEmitter, 'origin', {
	    get: function () {
	      var uri = URL(location.href)
	      return uri.protocol + '//' + uri.host
	    }
	  })
	
	  Object.defineProperty(eventEmitter, 'protocol', {
	    get: function () {
	      return URL(location.href).protocol
	    }
	  })
	
	  Object.defineProperty(eventEmitter, 'port', {
	    get: function () {
	      return URL(location.href).port
	    }
	  })
	
	  Object.defineProperty(eventEmitter, 'hostname', {
	    get: function () {
	      return URL(location.href).hostname
	    }
	  })
	
	  Object.defineProperty(eventEmitter, 'pathname', {
	    get: function () {
	      return URL(location.href).pathname
	    }
	  })
	
	  Object.defineProperty(eventEmitter, 'hash', {
	    get: function () {
	      return URL(location.href).hash
	    }
	  })
	
	  /*
	    This code is from the Page JS source code. Amazing work on handling all
	    kinds of scenarios with hyperlinks, thanks!
	  */
	
	  var isSameOrigin = function (href) {
	    return (href && (href.indexOf(origin) === 0))
	  }
	
	  var getClickedHref = function (event) {
	    // check which button
	    if ((event.which === null ? event.button : event.which) !== 1) { return false }
	
	    // check for modifiers
	    if (event.metaKey || event.ctrlKey || event.shiftKey) { return false }
	    if (event.defaultPrevented) { return false }
	
	    // ensure link
	    var element = event.target
	    while (element && element.nodeName !== 'A') { element = element.parentNode }
	    if (!element || element.nodeName !== 'A') { return false }
	
	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (element.hasAttribute('download') || element.getAttribute('rel') === 'external') { return false }
	
	    // Check for mailto: in the href
	    var href = element.getAttribute('href')
	    if (href && href.indexOf('mailto:') > -1) { return false }
	
	    // check target
	    if (element.target) { return false }
	
	    // x-origin
	    if (!isSameOrigin(element.href)) { return false }
	
	    return href
	  }
	
	  global.addEventListener(document.ontouchstart ? 'touchstart' : 'click', function (event) {
	    var href = getClickedHref(event)
	    if (href) {
	      // linkClicked = true
	      isEmitting = true
	      emitChange(href, event)
	      isEmitting = false
	      if (isPreventingDefault) {
	        // linkClicked = false
	      }
	      prevUrl = href
	      isPreventingDefault = false
	    }
	  })
	
	  instance = eventEmitter
	
	  return eventEmitter
	}())
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var required = __webpack_require__(70)
	  , lolcation = __webpack_require__(71)
	  , qs = __webpack_require__(72)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
	
	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];
	
	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */
	
	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);
	
	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}
	
	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;
	
	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }
	
	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');
	
	  return path.join('/');
	}
	
	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }
	
	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;
	
	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }
	
	  if (parser && 'function' !== typeof parser) parser = qs.parse;
	
	  location = lolcation(location);
	
	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;
	
	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];
	
	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];
	
	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }
	
	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );
	
	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }
	
	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);
	
	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }
	
	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }
	
	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}
	
	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	URL.prototype.set = function set(part, value, fn) {
	  var url = this;
	
	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }
	
	      url[part] = value;
	      break;
	
	    case 'port':
	      url[part] = value;
	
	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }
	
	      break;
	
	    case 'hostname':
	      url[part] = value;
	
	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;
	
	    case 'host':
	      url[part] = value;
	
	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }
	
	      break;
	
	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;
	
	    case 'pathname':
	      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;
	
	      break;
	
	    default:
	      url[part] = value;
	  }
	
	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];
	
	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  url.href = url.toString();
	
	  return url;
	};
	
	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	URL.prototype.toString = function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
	
	  var query
	    , url = this
	    , protocol = url.protocol;
	
	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
	
	  var result = protocol + (url.slashes ? '//' : '');
	
	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }
	
	  result += url.host + url.pathname;
	
	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;
	
	  if (url.hash) result += url.hash;
	
	  return result;
	};
	
	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;
	
	module.exports = URL;


/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;
	
	  if (!port) return false;
	
	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;
	
	    case 'https':
	    case 'wss':
	    return port !== 443;
	
	    case 'ftp':
	    return port !== 21;
	
	    case 'gopher':
	    return port !== 70;
	
	    case 'file':
	    return false;
	  }
	
	  return port !== 0;
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
	
	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 }
	  , URL;
	
	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	module.exports = function lolcation(loc) {
	  loc = loc || global.location || {};
	  URL = URL || __webpack_require__(69);
	
	  var finaldestination = {}
	    , type = typeof loc
	    , key;
	
	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }
	
	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }
	
	  return finaldestination;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;
	
	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
	  );
	
	  return result;
	}
	
	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';
	
	  var pairs = [];
	
	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';
	
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }
	
	  return pairs.length ? prefix + pairs.join('&') : '';
	}
	
	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.httpDelete = exports.httpPatch = exports.httpPut = exports.httpPost = exports.httpGet = exports.FileUpload = undefined;
	
	var _fileUpload = __webpack_require__(74);
	
	Object.defineProperty(exports, 'FileUpload', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_fileUpload).default;
	  }
	});
	
	var _httpGet = __webpack_require__(75);
	
	Object.defineProperty(exports, 'httpGet', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_httpGet).default;
	  }
	});
	
	var _httpPost = __webpack_require__(77);
	
	Object.defineProperty(exports, 'httpPost', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_httpPost).default;
	  }
	});
	
	var _httpPut = __webpack_require__(78);
	
	Object.defineProperty(exports, 'httpPut', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_httpPut).default;
	  }
	});
	
	var _httpPatch = __webpack_require__(79);
	
	Object.defineProperty(exports, 'httpPatch', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_httpPatch).default;
	  }
	});
	
	var _httpDelete = __webpack_require__(80);
	
	Object.defineProperty(exports, 'httpDelete', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_httpDelete).default;
	  }
	});
	exports.default = HttpProviderFactory;
	
	var _request = __webpack_require__(81);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _utils = __webpack_require__(76);
	
	var _fileUpload2 = _interopRequireDefault(_fileUpload);
	
	var _DEFAULT_OPTIONS = __webpack_require__(82);
	
	var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function HttpProviderFactory(passedOptions) {
	  var moduleOptions = (0, _utils.mergeWith)({}, _DEFAULT_OPTIONS2.default);
	  if (typeof passedOptions === 'function') {
	    moduleOptions = passedOptions(moduleOptions);
	  } else if (passedOptions) {
	    moduleOptions = (0, _utils.mergeWith)(passedOptions, _DEFAULT_OPTIONS2.default);
	  }
	
	  var cachedProvider = null;
	  function HttpProvider(context) {
	    var requests = {};
	    function createAbortablePromise(url, cb) {
	      return new Promise(function (resolve, reject) {
	        requests[url] = {
	          resolve: resolve,
	          reject: reject,
	          xhr: cb(function (payload) {
	            delete requests[url];
	            resolve(payload);
	          }, function (error) {
	            delete requests[url];
	            reject(error);
	          })
	        };
	      });
	    }
	
	    function requestService(options) {
	      options = (0, _utils.mergeWith)(options, moduleOptions);
	
	      if (typeof options.onProgress === 'string') {
	        options.onProgress = context.controller.getSignal(options.onProgress);
	      }
	
	      options.method = options.method.toUpperCase();
	
	      return createAbortablePromise(options.url, function (resolve, reject) {
	        return (0, _request2.default)(options, (0, _utils.createResponse)(options, resolve, reject));
	      });
	    }
	
	    if (cachedProvider) {
	      context.http = cachedProvider;
	    } else {
	      context.http = cachedProvider = {
	        request: requestService,
	        get: function get(url, passedQuery) {
	          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	          var query = passedQuery || options.query;
	
	          options.url = query && Object.keys(query).length ? url + '?' + (0, _utils.urlEncode)(query) : url;
	          options.method = 'GET';
	
	          return requestService(options);
	        },
	        post: function post(url, body) {
	          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
	          options.method = 'POST';
	          options.body = body;
	
	          return requestService(options);
	        },
	        put: function put(url, body) {
	          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
	          options.method = 'PUT';
	          options.body = body;
	
	          return requestService(options);
	        },
	        patch: function patch(url, body) {
	          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
	          options.method = 'PATCH';
	          options.body = body;
	
	          return requestService(options);
	        },
	        delete: function _delete(url, query) {
	          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
	          options.method = 'DELETE';
	
	          return requestService(options);
	        },
	        updateOptions: function updateOptions(newOptions) {
	          moduleOptions = (0, _utils.mergeWith)(newOptions, moduleOptions);
	        },
	        abort: function abort(regexp) {
	          var matchingUrls = Object.keys(requests).filter(function (url) {
	            return Boolean(url.match(new RegExp(regexp)));
	          });
	          matchingUrls.forEach(function (url) {
	            requests[url].xhr.abort();
	          });
	        },
	        fileUpload: function fileUpload() {
	          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	          options.url = moduleOptions.baseUrl + options.url;
	
	          return new _fileUpload2.default(options);
	        }
	      };
	    }
	
	    if (context.debugger) {
	      context.debugger.wrapProvider('http');
	    }
	
	    return context;
	  }
	  return HttpProvider;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (options) {
	  if (!options.url) {
	    console.warn('upload-controller: options must contain url');
	    return;
	  }
	  this.isAborted = false;
	  this.xhr = new XMLHttpRequest();
	  this.abort = function () {
	    this.isAborted = true;
	    this.xhr && this.xhr.abort();
	  };
	
	  this.send = function (files) {
	    var fileUpload = this;
	    var xhr = this.xhr;
	
	    fileUpload.isAborted = false;
	
	    return new Promise(function (resolve, reject) {
	      if (files && (files instanceof FileList || files.length || files instanceof File)) {
	        var formData = new FormData();
	
	        if (files instanceof FileList || files.length) {
	          for (var i = 0; i < files.length; i++) {
	            formData.append(options.name || 'files', files[i]);
	          }
	        } else {
	          formData.append(options.name || 'files', files);
	        }
	
	        if (options.data) {
	          Object.keys(options.data).forEach(function (paramKey) {
	            formData.append(paramKey, options.data[paramKey]);
	          });
	        }
	
	        xhr.onreadystatechange = function () {
	          if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
	            resolve(parseResponse(xhr));
	          } else if (xhr.readyState === 4) {
	            var response = parseResponse(xhr);
	
	            response.isAborted = fileUpload.isAborted;
	            reject(response);
	          }
	        };
	
	        xhr.open('POST', options.url, true);
	
	        if (options.headers) {
	          Object.keys(options.headers).forEach(function (key) {
	            xhr.setRequestHeader(key, options.headers[key]);
	          });
	        }
	
	        xhr.upload.onprogress = function (e) {
	          if (options.onProgress) {
	            var percentComplete = e.loaded / e.total * 100;
	            options.onProgress({
	              progress: +percentComplete.toFixed(0)
	            });
	          }
	        };
	
	        xhr.send(formData);
	      } else {
	        reject('Not an instance of a File, File[] or FileList');
	      }
	    });
	  };
	};
	
	/* eslint-env browser */
	
	function parseResponse(xhr) {
	  try {
	    return {
	      status: xhr.status,
	      result: JSON.parse(xhr.responseText)
	    };
	  } catch (e) {
	    return {
	      status: xhr.status,
	      result: null
	    };
	  }
	}
	//# sourceMappingURL=fileUpload.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	function httpGetFactory(url) {
	  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  function httpGet(context) {
	    var urlTemplate = typeof url === 'function' ? url(context).value : url;
	
	    return context.http.get(urlTemplate, (0, _utils.convertObjectWithTemplates)(query, context)).then(context.path.success).catch(function (response) {
	      if (response.isAborted) {
	        return context.path.abort(response);
	      }
	
	      return context.path.error(response);
	    });
	  }
	
	  return httpGet;
	}
	
	exports.default = httpGetFactory;
	//# sourceMappingURL=httpGet.js.map

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.createResponse = createResponse;
	exports.mergeWith = mergeWith;
	exports.urlEncode = urlEncode;
	exports.convertObjectWithTemplates = convertObjectWithTemplates;
	exports.parseHeaders = parseHeaders;
	function createResponse(options, resolve, reject) {
	  return function (event) {
	    switch (event.type) {
	      case 'load':
	        return options.onResponse(event.currentTarget, resolve, reject);
	      case 'progress':
	        if (options.onProgress && event.lengthComputable) {
	          options.onProgress({
	            progress: Number(event.loaded / event.total).toFixed(0)
	          });
	        }
	        break;
	      case 'error':
	        reject({
	          status: event.currentTarget.status,
	          result: 'Request error'
	        });
	        break;
	      case 'abort':
	        reject({
	          isAborted: true
	        });
	        break;
	    }
	  };
	}
	
	function mergeWith(optionsA, optionsB) {
	  return Object.keys(optionsB).reduce(function (newOptions, key) {
	    if (!newOptions[key]) {
	      newOptions[key] = optionsB[key];
	    } else if (key === 'headers') {
	      newOptions[key] = mergeWith(newOptions[key], optionsB[key] || {});
	    }
	
	    return newOptions;
	  }, optionsA);
	}
	
	function urlEncode(obj, prefix) {
	  var str = [];
	
	  for (var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      var k = prefix ? prefix + '[' + p + ']' : p;
	      var v = obj[p];
	
	      str.push((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? urlEncode(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
	    }
	  }
	  return str.join('&');
	}
	
	function convertObjectWithTemplates(obj, context) {
	  if (typeof obj === 'function') {
	    return obj(context).value;
	  }
	
	  return Object.keys(obj).reduce(function (convertedObject, key) {
	    convertedObject[key] = typeof obj[key] === 'function' ? obj[key](context).value : obj[key];
	
	    return convertedObject;
	  }, {});
	}
	
	function parseHeaders(rawHeaders) {
	  var headerPairs = rawHeaders.replace(/\r?\n$/, '').split(/\r?\n/);
	
	  return headerPairs.reduce(function (parsedHeaders, headerPair) {
	    var index = headerPair.indexOf(':');
	    var key = headerPair.substr(0, index).trim().toLowerCase();
	    var value = headerPair.substr(index + 1).trim();
	    if (key) {
	      parsedHeaders[key] = parsedHeaders[key] ? parsedHeaders[key] + ', ' + value : value;
	    }
	
	    return parsedHeaders;
	  }, {});
	}
	//# sourceMappingURL=utils.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	function httpPostFactory(url) {
	  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  function httpPost(context) {
	    var urlTemplate = typeof url === 'function' ? url(context).value : url;
	
	    return context.http.post(urlTemplate, (0, _utils.convertObjectWithTemplates)(body, context)).then(context.path.success).catch(function (response) {
	      if (response.isAborted) {
	        return context.path.abort(response);
	      }
	
	      return context.path.error(response);
	    });
	  }
	
	  return httpPost;
	}
	
	exports.default = httpPostFactory;
	//# sourceMappingURL=httpPost.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	function httpPutFactory(url) {
	  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  function httpPut(context) {
	    var urlTemplate = typeof url === 'function' ? url(context).value : url;
	
	    return context.http.put(urlTemplate, (0, _utils.convertObjectWithTemplates)(body, context)).then(context.path.success).catch(function (response) {
	      if (response.isAborted) {
	        return context.path.abort(response);
	      }
	
	      return context.path.error(response);
	    });
	  }
	
	  return httpPut;
	}
	
	exports.default = httpPutFactory;
	//# sourceMappingURL=httpPut.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	function httpPatchFactory(url) {
	  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  function httpPatch(context) {
	    var urlTemplate = typeof url === 'function' ? url(context).value : url;
	
	    return context.http.patch(urlTemplate, (0, _utils.convertObjectWithTemplates)(body, context)).then(context.path.success).catch(function (response) {
	      if (response.isAborted) {
	        return context.path.abort(response);
	      }
	
	      return context.path.error(response);
	    });
	  }
	
	  return httpPatch;
	}
	
	exports.default = httpPatchFactory;
	//# sourceMappingURL=httpPatch.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	function httpDeleteFactory(url) {
	  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  function httpDelete(context) {
	    var urlTemplate = typeof url === 'function' ? url(context).value : url;
	
	    return context.http.delete(urlTemplate, (0, _utils.convertObjectWithTemplates)(query, context)).then(context.path.success).catch(function (response) {
	      if (response.isAborted) {
	        return context.path.abort(response);
	      }
	
	      return context.path.error(response);
	    });
	  }
	
	  return httpDelete;
	}
	
	exports.default = httpDeleteFactory;
	//# sourceMappingURL=httpDelete.js.map

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = request;
	/* eslint-env browser */
	
	function request(options, cb) {
	  var xhr = new XMLHttpRequest();
	  xhr.addEventListener('progress', cb);
	  xhr.addEventListener('load', cb);
	  xhr.addEventListener('error', cb);
	  xhr.addEventListener('abort', cb);
	  xhr.open(options.method, options.baseUrl + options.url);
	  options.onRequest(xhr, options);
	
	  return xhr;
	}
	//# sourceMappingURL=request.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(76);
	
	exports.default = {
	  method: 'get',
	  baseUrl: '',
	  headers: {
	    'Content-Type': 'application/json; charset=UTF-8',
	    'Accept': 'application/json'
	  },
	  onRequest: function onRequest(xhr, options) {
	    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
	      options.body = (0, _utils.urlEncode)(options.body);
	    } else if (options.headers['Content-Type'].indexOf('application/json') >= 0) {
	      options.body = JSON.stringify(options.body);
	    }
	
	    xhr.withCredentials = Boolean(options.withCredentials);
	
	    Object.keys(options.headers).forEach(function (key) {
	      xhr.setRequestHeader(key, options.headers[key]);
	    });
	
	    xhr.send(options.body);
	  },
	  onResponse: function onResponse(xhr, resolve, reject) {
	    var result = xhr.responseText;
	
	    if (result && xhr.getResponseHeader('Content-Type').indexOf('application/json') >= 0) {
	      result = JSON.parse(xhr.responseText);
	    }
	
	    var responseHeaders = 'getAllResponseHeaders' in xhr ? (0, _utils.parseHeaders)(xhr.getAllResponseHeaders()) : null;
	
	    if (xhr.status >= 200 && xhr.status < 300) {
	      resolve({
	        status: xhr.status,
	        headers: responseHeaders,
	        result: result
	      });
	    } else {
	      reject({
	        status: xhr.status,
	        headers: responseHeaders,
	        result: result
	      });
	    }
	  }
	};
	//# sourceMappingURL=DEFAULT_OPTIONS.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getInvalidFormFields = exports.getFormFields = exports.formToJSON = exports.initializeForm = exports.resetForm = exports.validateForm = exports.validateField = exports.changeField = exports.rules = exports.form = undefined;
	
	var _form = __webpack_require__(84);
	
	Object.defineProperty(exports, 'form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_form).default;
	  }
	});
	
	var _rules = __webpack_require__(89);
	
	Object.defineProperty(exports, 'rules', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_rules).default;
	  }
	});
	
	var _changeField = __webpack_require__(90);
	
	Object.defineProperty(exports, 'changeField', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_changeField).default;
	  }
	});
	
	var _validateField = __webpack_require__(91);
	
	Object.defineProperty(exports, 'validateField', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_validateField).default;
	  }
	});
	
	var _validateForm = __webpack_require__(92);
	
	Object.defineProperty(exports, 'validateForm', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_validateForm).default;
	  }
	});
	
	var _resetForm = __webpack_require__(93);
	
	Object.defineProperty(exports, 'resetForm', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_resetForm).default;
	  }
	});
	
	var _initializeForm = __webpack_require__(94);
	
	Object.defineProperty(exports, 'initializeForm', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_initializeForm).default;
	  }
	});
	
	var _formToJSON = __webpack_require__(95);
	
	Object.defineProperty(exports, 'formToJSON', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_formToJSON).default;
	  }
	});
	
	var _getFormFields = __webpack_require__(96);
	
	Object.defineProperty(exports, 'getFormFields', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getFormFields).default;
	  }
	});
	
	var _getInvalidFormFields = __webpack_require__(97);
	
	Object.defineProperty(exports, 'getInvalidFormFields', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getInvalidFormFields).default;
	  }
	});
	exports.isValidForm = isValidForm;
	
	var _isValidForm = __webpack_require__(98);
	
	var _isValidForm2 = _interopRequireDefault(_isValidForm);
	
	var _isValidForm3 = __webpack_require__(99);
	
	var _isValidForm4 = _interopRequireDefault(_isValidForm3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidForm(form) {
	  if (typeof form === 'string' || typeof form === 'function') {
	    return (0, _isValidForm4.default)(form);
	  }
	
	  return (0, _isValidForm2.default)(form);
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = form;
	
	var _configureField = __webpack_require__(85);
	
	var _configureField2 = _interopRequireDefault(_configureField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function form(formData) {
	  return Object.keys(formData).reduce(function (form, key) {
	    form[key] = (0, _configureField2.default)(formData, formData[key]);
	
	    return form;
	  }, {});
	}
	//# sourceMappingURL=form.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureField;
	
	var _runValidation = __webpack_require__(86);
	
	var _runValidation2 = _interopRequireDefault(_runValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureField(formData, field) {
	  // If not an actual field but a global property or just a namespace
	  if (field !== Object(field) || !('value' in field)) {
	    return field;
	  }
	
	  var isValueRules = field.isValueRules || ['isValue'];
	  var isRequired = field.isRequired || false;
	  var value = field.value;
	  var defaultValue = field.defaultValue || value;
	  var validationRules = field.validationRules || null;
	  var validationMessages = field.validationMessages || [];
	  var requiredMessage = field.requiredMessage || null;
	
	  field.defaultValue = defaultValue;
	  field.validationRules = validationRules;
	  // Field is valid only when there is a value and the validation rule
	  // says it is valid. If "isRequired" it will only be valid if it actually
	  // has a value
	  field.validationMessages = validationMessages;
	  field.requiredMessage = requiredMessage;
	  field.isValueRules = isValueRules;
	  field.isRequired = isRequired;
	
	  var validationResult = (0, _runValidation2.default)(field, formData);
	
	  field.isValid = validationResult.isValid;
	  field.errorMessage = validationResult.errorMessage;
	  field.hasValue = validationResult.hasValue;
	  field.isPristine = true;
	
	  return field;
	}
	//# sourceMappingURL=configureField.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = runValidation;
	
	var _checkHasValue = __webpack_require__(87);
	
	var _checkHasValue2 = _interopRequireDefault(_checkHasValue);
	
	var _validate = __webpack_require__(88);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function runValidation(field, form) {
	  var hasValue = (0, _checkHasValue2.default)(form, field.value, field.isValueRules);
	  var result = (0, _validate2.default)(form, field.value, field.validationRules);
	  var isValid = result.isValid && (field.isRequired && hasValue || !field.isRequired);
	  var errorMessage = field.isRequired && !hasValue ? field.requiredMessage : result.isValid ? null : field.validationMessages[result.failedRuleIndex];
	
	  return {
	    isValid: isValid,
	    isPristine: false,
	    hasValue: (0, _checkHasValue2.default)(form, field.value, field.isValueRules),
	    errorMessage: errorMessage
	  };
	}
	//# sourceMappingURL=runValidation.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkHasValue;
	
	var _validate = __webpack_require__(88);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function checkHasValue(form, value, isValueRules) {
	  var result = (0, _validate2.default)(form, value, isValueRules);
	  return result.isValid;
	}
	//# sourceMappingURL=checkHasValue.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validate;
	
	var _rules = __webpack_require__(89);
	
	var _rules2 = _interopRequireDefault(_rules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(form, value, validations) {
	  var initialValidation = {
	    isValid: true,
	    failedRuleIndex: null
	  };
	
	  if (!validations) {
	    return initialValidation;
	  }
	
	  if (Array.isArray(validations)) {
	    return validations.reduce(function (result, validation, index) {
	      if (!result.isValid) {
	        return result;
	      }
	
	      // Convert string to object form
	      if (typeof validation === 'string') {
	        var args = validation.split(/:(.+)?/);
	
	        validation = {};
	        if (args[1]) {
	          try {
	            validation[args[0]] = JSON.parse(args[1]);
	          } catch (e) {
	            validation[args[0]] = args[1];
	          }
	        } else {
	          validation[args[0]] = undefined;
	        }
	      }
	
	      return {
	        isValid: Object.keys(validation).reduce(function (isValid, key) {
	          if (!isValid) {
	            return false;
	          }
	
	          var rule = _rules2.default[key] || function () {
	            throw new Error('Rule ' + key + ' is not found');
	          };
	
	          return rule(value, form, validation[key]);
	        }, true),
	        failedRuleIndex: index
	      };
	    }, initialValidation);
	  }
	}
	//# sourceMappingURL=validate.js.map

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var rules = {
	  isExisty: function isExisty(value) {
	    return value !== null && value !== undefined;
	  },
	  isEmpty: function isEmpty(value) {
	    return value === '';
	  },
	  matchRegexp: function matchRegexp(value, _, regexp) {
	    return !rules.isExisty(value) || rules.isEmpty(value) || regexp.test(value);
	  },
	  isValue: function isValue(value) {
	    return value !== undefined && value !== '' && value !== null && value !== false && (!Array.isArray(value) || !!value.length);
	  },
	  isUndefined: function isUndefined(value) {
	    return value === undefined;
	  },
	  isEmail: function isEmail(value) {
	    return rules.matchRegexp(value, null, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
	  },
	  isUrl: function isUrl(value) {
	    return rules.matchRegexp(value, null, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
	  },
	  isTrue: function isTrue(value) {
	    return value === true;
	  },
	  isFalse: function isFalse(value) {
	    return value === false;
	  },
	  isNumeric: function isNumeric(value) {
	    if (typeof value === 'number') {
	      return true;
	    }
	
	    return rules.matchRegexp(value, null, /^[-+]?(?:\d*[.])?\d+$/);
	  },
	  isAlpha: function isAlpha(value) {
	    return rules.matchRegexp(value, null, /^[A-Z]+$/i);
	  },
	  isAlphanumeric: function isAlphanumeric(value) {
	    return rules.matchRegexp(value, null, /^[0-9A-Z]+$/i);
	  },
	  isInt: function isInt(value) {
	    return rules.matchRegexp(value, null, /^(?:[-+]?(?:0|[1-9]\d*))$/);
	  },
	  isFloat: function isFloat(value) {
	    return rules.matchRegexp(value, null, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
	  },
	  isWords: function isWords(value) {
	    return rules.matchRegexp(value, null, /^[A-Z\s]+$/i);
	  },
	  isSpecialWords: function isSpecialWords(value) {
	    return rules.matchRegexp(value, null, /^[A-Z\s\u00C0-\u017F]+$/i);
	  },
	  isLength: function isLength(value, form, length) {
	    return value.length === length;
	  },
	  equals: function equals(value, form, eql) {
	    return value === eql;
	  },
	  equalsField: function equalsField(value, form, field) {
	    return value === form[field].value;
	  },
	  maxLength: function maxLength(value, form, length) {
	    return value.length <= length;
	  },
	  minLength: function minLength(value, form, length) {
	    return !rules.isExisty(value) || rules.isEmpty(value) || value.length >= length;
	  }
	};
	
	exports.default = rules;
	//# sourceMappingURL=rules.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['', '.value'], ['', '.value']),
	    _templateObject2 = _taggedTemplateLiteral(['field'], ['field']),
	    _templateObject3 = _taggedTemplateLiteral(['value'], ['value']);
	
	var _operators = __webpack_require__(37);
	
	var _validateField = __webpack_require__(91);
	
	var _validateField2 = _interopRequireDefault(_validateField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	exports.default = [(0, _operators.set)((0, _operators.state)(_templateObject, (0, _operators.input)(_templateObject2)), (0, _operators.input)(_templateObject3)), (0, _validateField2.default)((0, _operators.input)(_templateObject2))];
	//# sourceMappingURL=changeField.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateFieldFactory;
	
	var _runValidation = __webpack_require__(86);
	
	var _runValidation2 = _interopRequireDefault(_runValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateFieldFactory(pathTemplate) {
	  function validateField(context) {
	    var path = typeof pathTemplate === 'function' ? pathTemplate(context).value : pathTemplate;
	    var fieldPath = path.split('.');
	    var formPath = fieldPath.slice().splice(0, fieldPath.length - 1);
	    var field = context.state.get(fieldPath);
	    var form = context.state.get(formPath);
	    var validationResult = (0, _runValidation2.default)(field, form);
	
	    context.state.merge(fieldPath, validationResult);
	
	    var dependentFields = [];
	    if (Array.isArray(field.dependsOn)) {
	      dependentFields = field.dependsOn;
	    } else if (field.dependsOn) {
	      dependentFields = [field.dependsOn];
	    }
	
	    var dependentOfValidationResult = dependentFields.reduce(function (currentValidationResult, stringPath) {
	      var dependentFieldPath = stringPath.split('.');
	      var dependentFormPath = dependentFieldPath.slice().splice(0, dependentFieldPath.length - 1);
	      var dependentField = context.state.get(dependentFieldPath);
	      var dependentForm = context.state.get(dependentFormPath);
	      if (!dependentForm || !dependentField) {
	        throw new Error('The path ' + stringPath + ' used with "dependsOn" on field ' + fieldPath.join('.') + ' is not correct, please check it');
	      }
	
	      var dependentValidationResult = (0, _runValidation2.default)(dependentField, dependentForm);
	      context.state.merge(dependentFieldPath, dependentValidationResult);
	
	      if (currentValidationResult.isValid && !dependentValidationResult.isValid) {
	        return Object.assign(currentValidationResult, { isValid: false });
	      }
	
	      return currentValidationResult;
	    }, validationResult);
	
	    context.state.merge(fieldPath, dependentOfValidationResult);
	  }
	
	  return validateField;
	}
	//# sourceMappingURL=validateField.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateFormFactory;
	
	var _runValidation = __webpack_require__(86);
	
	var _runValidation2 = _interopRequireDefault(_runValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateFormFactory(passedFormPathTemplate) {
	  function validateForm(context) {
	    var passedFormPath = typeof passedFormPathTemplate === 'function' ? passedFormPathTemplate(context).value : passedFormPathTemplate;
	    var formPath = passedFormPath.split('.');
	    var currentPathValue = context.state.get(formPath);
	
	    function validateForm(path, form) {
	      Object.keys(form).forEach(function (key) {
	        if (form[key] === Object(form[key])) {
	          if (Array.isArray(form[key])) {
	            validateArray(path.concat(key), form[key]);
	          } else if ('value' in form[key]) {
	            context.state.merge(path.concat(key), (0, _runValidation2.default)(form[key], form));
	          } else {
	            validateForm(path.concat(key), form[key]);
	          }
	        }
	      });
	    }
	
	    function validateArray(path, formArray) {
	      formArray.forEach(function (form, index) {
	        validateForm(path.concat(index), form);
	      });
	    }
	
	    validateForm(formPath, currentPathValue);
	  }
	
	  return validateForm;
	}
	//# sourceMappingURL=validateForm.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initializeForm = __webpack_require__(94);
	
	exports.default = _initializeForm.resetForm;
	//# sourceMappingURL=resetForm.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetForm = undefined;
	exports.default = initializeFormFactory;
	
	var _configureField = __webpack_require__(85);
	
	var _configureField2 = _interopRequireDefault(_configureField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initializeObject(form, initialValues) {
	  return Object.keys(form).reduce(function (newForm, key) {
	    if (form[key] === Object(form[key])) {
	      var newInitialValues = initialValues && initialValues[key];
	      if (Array.isArray(form[key])) {
	        newForm[key] = initializeArray(form[key], newInitialValues);
	      } else if ('value' in form[key]) {
	        var newField = Object.keys(form[key]).reduce(function (newField, fKey) {
	          newField[fKey] = form[key][fKey];
	          return newField;
	        }, {});
	        newField.defaultValue = newInitialValues || newField.defaultValue;
	        newField.value = newField.defaultValue;
	        newForm[key] = (0, _configureField2.default)(form, newField);
	      } else {
	        newForm[key] = initializeObject(form[key], newInitialValues);
	      }
	    }
	
	    return newForm;
	  }, {});
	}
	
	function initializeArray(formArray, initialValues) {
	  if (initialValues && formArray.length < initialValues.length) {
	    return initialValues.reduce(function (newFormArray, value, index) {
	      newFormArray[index] = initializeObject(formArray[index] || formArray[0], value);
	      return newFormArray;
	    }, []);
	  }
	  return formArray.reduce(function (newFormArray, form, index) {
	    newFormArray[index] = initializeObject(form, initialValues && initialValues[index]);
	    return newFormArray;
	  }, []);
	}
	
	function initializeFormFactory(formPathTemplate, initialValuesTemplate) {
	  function initializeForm(context) {
	    var formPath = typeof formPathTemplate === 'function' ? formPathTemplate(context).value : formPathTemplate;
	    var initialValues = typeof initialValuesTemplate === 'function' ? initialValuesTemplate(context).value : initialValuesTemplate;
	    var form = context.state.get(formPath);
	
	    context.state.merge(formPath, initializeObject(form, initialValues));
	  }
	
	  return initializeForm;
	}
	
	function resetFormFactory(formPathTemplate) {
	  function resetForm(context) {
	    var formPath = typeof formPathTemplate === 'function' ? formPathTemplate(context).value : formPathTemplate;
	    var form = context.state.get(formPath);
	
	    context.state.merge(formPath, initializeObject(form));
	  }
	
	  return resetForm;
	}
	
	exports.resetForm = resetFormFactory;
	//# sourceMappingURL=initializeForm.js.map

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formToJSON;
	function extractObject(object) {
	  return Object.keys(object).reduce(function (newObject, key) {
	    if (object[key] && object[key] === Object(object[key])) {
	      if (Array.isArray(object[key])) {
	        newObject[key] = extractArray(object[key]);
	      } else if ('value' in object[key]) {
	        newObject[key] = object[key].value;
	      } else {
	        newObject[key] = extractObject(object[key]);
	      }
	    }
	
	    return newObject;
	  }, {});
	}
	
	function extractArray(array) {
	  return array.map(function (object) {
	    return extractObject(object);
	  });
	}
	
	function formToJSON(form) {
	  return extractObject(form);
	}
	//# sourceMappingURL=formToJSON.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getFormFields;
	function getFormFields(object) {
	  var currentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var allFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  return Object.keys(object).reduce(function (allFields, key) {
	    currentPath.push(key);
	    if (Array.isArray(object[key])) {
	      object[key].forEach(function (formItem, index) {
	        currentPath.push(index);
	        getFormFields(object[key][index], currentPath, allFields);
	        currentPath.pop();
	      });
	      currentPath.pop();
	
	      return allFields;
	    } else if (object[key] === Object(object[key]) && 'value' in object[key]) {
	      allFields[currentPath.join('.')] = object[key];
	      currentPath.pop();
	
	      return allFields;
	    }
	    getFormFields(object[key], currentPath, allFields);
	    currentPath.pop();
	
	    return allFields;
	  }, allFields);
	}
	//# sourceMappingURL=getFormFields.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getInvalidFields;
	
	var _getFormFields = __webpack_require__(96);
	
	var _getFormFields2 = _interopRequireDefault(_getFormFields);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getInvalidFields(form) {
	  var formFields = (0, _getFormFields2.default)(form);
	
	  return Object.keys(formFields).filter(function (key) {
	    return !formFields[key].isValid;
	  }).reduce(function (invalidFields, key) {
	    invalidFields[key] = formFields[key];
	
	    return invalidFields;
	  }, {});
	}
	//# sourceMappingURL=getInvalidFormFields.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isValidForm;
	
	var _getFormFields = __webpack_require__(96);
	
	var _getFormFields2 = _interopRequireDefault(_getFormFields);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidForm(form) {
	  var formFields = (0, _getFormFields2.default)(form);
	
	  return Object.keys(formFields).reduce(function (isValid, formFieldKey) {
	    if (!isValid) {
	      return false;
	    }
	
	    return formFields[formFieldKey].isValid;
	  }, true);
	}
	//# sourceMappingURL=isValidForm.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isValidForm = __webpack_require__(98);
	
	var _isValidForm2 = _interopRequireDefault(_isValidForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidFormFactory(formPathTemplate) {
	  function isValidForm(context) {
	    var formPath = typeof formPathTemplate === 'function' ? formPathTemplate(context).value : formPathTemplate;
	    var form = context.state.get(formPath);
	
	    if ((0, _isValidForm2.default)(form)) {
	      return context.path.true();
	    }
	
	    return context.path.false();
	  }
	
	  return isValidForm;
	}
	
	exports.default = isValidFormFactory;
	//# sourceMappingURL=isValidForm.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['currentPage'], ['currentPage']);
	
	var _operators = __webpack_require__(37);
	
	var _toggleSelectSettings = __webpack_require__(101);
	
	var _toggleSelectSettings2 = _interopRequireDefault(_toggleSelectSettings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	exports.default = {
	    state: {},
	    signals: {
	        routed: [(0, _operators.set)((0, _operators.state)(_templateObject), 'home')],
	        toggleSelectSettings: _toggleSelectSettings2.default
	    }
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['value'], ['value']);
	
	var _unToggleSettings = __webpack_require__(102);
	
	var _unToggleSettings2 = _interopRequireDefault(_unToggleSettings);
	
	var _cerebralForms = __webpack_require__(83);
	
	var _operators = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = [].concat(_toConsumableArray(_cerebralForms.changeField), [(0, _operators.when)((0, _operators.input)(_templateObject)), {
		true: [_unToggleSettings2.default],
		false: []
	}]);

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = unToggleSettings;
	function unToggleSettings(_ref) {
		var state = _ref.state,
		    input = _ref.input;
	
		console.log("Otra accion");
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['currentPage'], ['currentPage']);
	
	var _operators = __webpack_require__(37);
	
	var _cerebralForms = __webpack_require__(83);
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	exports.default = {
	    state: {
	        Brands: {}
	    },
	    signals: {
	        routed: [(0, _operators.set)((0, _operators.state)(_templateObject), 'brand')]
	    }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['currentPage'], ['currentPage']);
	
	var _operators = __webpack_require__(37);
	
	var _cerebralForms = __webpack_require__(83);
	
	var _CapiFactory = __webpack_require__(105);
	
	var _CapiFactory2 = _interopRequireDefault(_CapiFactory);
	
	var _PostBrandAction = __webpack_require__(107);
	
	var _PostBrandAction2 = _interopRequireDefault(_PostBrandAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	exports.default = {
		state: {
			formBrand: (0, _cerebralForms.form)({
				name: {
					value: '',
					validationMessages: ['El campo email es invalido.'],
					isRequired: true,
					validationRules: ['isValue'],
					isTouched: false
				},
				shortName: {
					value: '',
					isRequired: true,
					validationMessages: ['El campo password es necesario.']
				},
				description: {
					value: '',
					isRequired: true,
					validationMessages: ['El campo password es necesario.']
				},
				url: {
					value: '',
					isRequired: true,
					validationMessages: ['El campo url es necesario.']
				}
			}),
			postBrand: {}
		},
		signals: {
			routed: [(0, _operators.set)((0, _operators.state)(_templateObject), 'new_brand')],
			fieldChanged: _cerebralForms.changeField,
			postAction: [].concat(_toConsumableArray((0, _CapiFactory2.default)('POST', '/api/v1/brand', {
				success: [],
				error: []
			})))
		}
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RefreshTokenAction = __webpack_require__(106);
	
	var _RefreshTokenAction2 = _interopRequireDefault(_RefreshTokenAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CapiFactory(method, url, paths) {
	  console.log(paths);
	  function Request(_ref) {
	    var http = _ref.http,
	        path = _ref.path;
	
	    console.log(path); // Null
	    return http.post(url, {
	      name: "Arturo"
	    }).then(function (response) {
	      console.log(response);
	      // Depending on response.status you can trigger different paths
	
	      return path.success();
	    }).catch(function (error) {
	      return path.error({ error: error });
	    });
	  }
	  return [Request, Object.assign({
	    expired: [_RefreshTokenAction2.default]
	  }, paths)];
	}
	exports.default = CapiFactory;

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	
	function RefreshTokenAction(_ref) {
		var input = _ref.input;
	
		console.log("En la accion");
	}

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function PostBrandAction(_ref) {
		var http = _ref.http,
		    path = _ref.path,
		    state = _ref.state;
	
		var data = state.get('new_brand.formBrand');
		return http.post('/api/v1/brand', {
			name: data.name.value,
			short_name: data.shortName.value,
			description: data.description.value,
			url: data.url.value
		})
		// All status codes between 200 - 300, including 200
		.then(function (response) {
			console.log(response);
		})
		// All other status codes
		.catch(function (response) {
			console.log(response);
		});
	}
	exports.default = PostBrandAction;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _inferno3 = __webpack_require__(4);
	
	var _operators = __webpack_require__(37);
	
	var _infernoComponent = __webpack_require__(8);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	var _Home = __webpack_require__(109);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _Brand = __webpack_require__(110);
	
	var _Brand2 = _interopRequireDefault(_Brand);
	
	var _NewBrand = __webpack_require__(111);
	
	var _NewBrand2 = _interopRequireDefault(_NewBrand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Compoments
	
	
	// Pages
	var pages = {
		home: _Home2.default,
		brand: _Brand2.default,
		new_brand: _NewBrand2.default
	};
	
	// Connect To cerebral
	exports.default = (0, _inferno3.connect)({
		currentPage: 'currentPage',
		user: 'user'
	}, {}, function (_Component) {
		_inherits(App, _Component);
	
		function App(props) {
			_classCallCheck(this, App);
	
			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
		}
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				var Page = pages[this.props.currentPage];
				return (0, _inferno.createVNode)(2, 'div', {
					'className': 'l-dashboard'
				}, (0, _inferno.createVNode)(2, 'section', {
					'className': 'l-dashboard__content'
				}, (0, _inferno.createVNode)(16, Page)));
			}
		}]);
	
		return App;
	}(_infernoComponent2.default));

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _inferno3 = __webpack_require__(4);
	
	var _infernoComponent = __webpack_require__(8);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Connect to Cerebral
	
	
	exports.default = (0, _inferno3.connect)({
		// States
		formBrand: 'new_brand.formBrand.**'
	}, {
		// Signals
		fieldChanged: 'new_brand.fieldChanged',
		postAction: 'new_brand.postAction'
	},
	// Class Header
	function (_Component) {
		_inherits(NewBrand, _Component);
	
		function NewBrand(props) {
			_classCallCheck(this, NewBrand);
	
			return _possibleConstructorReturn(this, (NewBrand.__proto__ || Object.getPrototypeOf(NewBrand)).call(this, props));
		}
	
		_createClass(NewBrand, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render(_ref) {
				var formBrand = _ref.formBrand,
				    fieldChanged = _ref.fieldChanged,
				    postAction = _ref.postAction;
	
				var LabelClass = "m-textfield__label";
				return (0, _inferno.createVNode)(2, 'div', {
					'className': ''
				}, (0, _inferno.createVNode)(2, 'h1', null, 'Home'));
			}
		}]);
	
		return NewBrand;
	}(_infernoComponent2.default));

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _inferno3 = __webpack_require__(4);
	
	var _infernoComponent = __webpack_require__(8);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Connect to Cerebral
	
	
	exports.default = (0, _inferno3.connect)({
		// States
	}, {
		// Signals
	},
	// Class Header
	function (_Component) {
		_inherits(Brand, _Component);
	
		function Brand(props) {
			_classCallCheck(this, Brand);
	
			return _possibleConstructorReturn(this, (Brand.__proto__ || Object.getPrototypeOf(Brand)).call(this, props));
		}
	
		_createClass(Brand, [{
			key: 'render',
			value: function render(_ref) {
				var formBrand = _ref.formBrand,
				    fieldChanged = _ref.fieldChanged;
	
				return (0, _inferno.createVNode)(2, 'div', {
					'className': ''
				}, (0, _inferno.createVNode)(2, 'h4', null, 'Lista de Unidades'));
			}
		}]);
	
		return Brand;
	}(_infernoComponent2.default));

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _inferno3 = __webpack_require__(4);
	
	var _infernoComponent = __webpack_require__(8);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Connect to Cerebral
	
	
	exports.default = (0, _inferno3.connect)({
		// States
		formBrand: 'new_brand.formBrand.**'
	}, {
		// Signals
		fieldChanged: 'new_brand.fieldChanged',
		postAction: 'new_brand.postAction'
	}, function (_Component) {
		_inherits(NewBrand, _Component);
	
		function NewBrand(props) {
			_classCallCheck(this, NewBrand);
	
			return _possibleConstructorReturn(this, (NewBrand.__proto__ || Object.getPrototypeOf(NewBrand)).call(this, props));
		}
	
		_createClass(NewBrand, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render(_ref) {
				var formBrand = _ref.formBrand,
				    fieldChanged = _ref.fieldChanged,
				    postAction = _ref.postAction;
	
				var LabelClass = "m-textfield__label";
				return (0, _inferno.createVNode)(2, 'div', {
					'className': ''
				}, [(0, _inferno.createVNode)(2, 'h4', null, 'Nueva Unidad'), (0, _inferno.createVNode)(2, 'div', {
					'className': 'm-textfield  -floating-label -width-full --js-textfield'
				}, [(0, _inferno.createVNode)(512, 'input', {
					'className': 'm-textfield__input',
					'value': formBrand.name.value
				}, null, {
					'onInput': function onInput(e) {
						return fieldChanged({
							field: 'new_brand.formBrand.name',
							value: e.target.value
						});
					}
				}), (0, _inferno.createVNode)(2, 'label', {
					'className': formBrand.name.isValid ? LabelClass : LabelClass + " is_invalid",
					'for': 'name'
				}, 'Name'), (0, _inferno.createVNode)(2, 'span', {
					'class': 'm-field__error'
				}, 'El campo es invalido.')]), (0, _inferno.createVNode)(2, 'div', {
					'className': 'm-textfield  -floating-label -width-full --js-textfield'
				}, [(0, _inferno.createVNode)(512, 'input', {
					'className': 'm-textfield__input',
					'value': formBrand.shortName.value
				}, null, {
					'onInput': function onInput(e) {
						return fieldChanged({
							field: 'new_brand.formBrand.shortName',
							value: e.target.value
						});
					}
				}), (0, _inferno.createVNode)(2, 'label', {
					'className': 'm-textfield__label',
					'for': 'short_name'
				}, 'Nombre Corto'), (0, _inferno.createVNode)(2, 'span', {
					'class': 'm-field__error'
				}, 'El campo es invalido.')]), (0, _inferno.createVNode)(2, 'div', {
					'className': 'm-textfield  -floating-label -width-full --js-textfield'
				}, [(0, _inferno.createVNode)(512, 'input', {
					'className': 'm-textfield__input',
					'value': formBrand.description.value
				}, null, {
					'onInput': function onInput(e) {
						return fieldChanged({
							field: 'new_brand.formBrand.description',
							value: e.target.value
						});
					}
				}), (0, _inferno.createVNode)(2, 'label', {
					'className': 'm-textfield__label',
					'for': 'description'
				}, 'Descripci\xF3n'), (0, _inferno.createVNode)(2, 'span', {
					'class': 'm-field__error'
				}, 'El campo es invalido.')]), (0, _inferno.createVNode)(2, 'div', {
					'className': 'm-textfield  -floating-label -width-full --js-textfield'
				}, [(0, _inferno.createVNode)(512, 'input', {
					'className': 'm-textfield__input',
					'value': formBrand.url.value
				}, null, {
					'onInput': function onInput(e) {
						return fieldChanged({
							field: 'new_brand.formBrand.url',
							value: e.target.value
						});
					}
				}), (0, _inferno.createVNode)(2, 'label', {
					'className': 'm-textfield__label',
					'for': 'url'
				}, 'Url'), (0, _inferno.createVNode)(2, 'span', {
					'class': 'm-field__error'
				}, 'El campo es invalido.')]), (0, _inferno.createVNode)(2, 'a', {
					'className': 'pure-button pure-button-primary'
				}, 'Registrar', {
					'onClick': function onClick(e) {
						return postAction();
					}
				}), (0, _inferno.createVNode)(2, 'a', {
					'className': 'pure-button pure-button-primary'
				}, 'Registrar y Continuar')]);
			}
		}]);
	
		return NewBrand;
	}(_infernoComponent2.default));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map