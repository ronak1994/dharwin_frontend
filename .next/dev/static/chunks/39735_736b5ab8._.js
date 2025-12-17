(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/dharwin_boilerplate/node_modules/filepond/dist/filepond.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * FilePond 4.31.1
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */ /* eslint-disable */ (function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? factory(exports) : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(exports1) {
    'use strict';
    var isNode = function isNode(value) {
        return value instanceof HTMLElement;
    };
    var createStore = function createStore(initialState) {
        var queries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        // internal state
        var state = Object.assign({}, initialState);
        // contains all actions for next frame, is clear when actions are requested
        var actionQueue = [];
        var dispatchQueue = [];
        // returns a duplicate of the current state
        var getState = function getState() {
            return Object.assign({}, state);
        };
        // returns a duplicate of the actions array and clears the actions array
        var processActionQueue = function processActionQueue() {
            // create copy of actions queue
            var queue = [].concat(actionQueue);
            // clear actions queue (we don't want no double actions)
            actionQueue.length = 0;
            return queue;
        };
        // processes actions that might block the main UI thread
        var processDispatchQueue = function processDispatchQueue() {
            // create copy of actions queue
            var queue = [].concat(dispatchQueue);
            // clear actions queue (we don't want no double actions)
            dispatchQueue.length = 0;
            // now dispatch these actions
            queue.forEach(function(_ref) {
                var type = _ref.type, data = _ref.data;
                dispatch(type, data);
            });
        };
        // adds a new action, calls its handler and
        var dispatch = function dispatch(type, data, isBlocking) {
            // is blocking action (should never block if document is hidden)
            if (isBlocking && !document.hidden) {
                dispatchQueue.push({
                    type: type,
                    data: data
                });
                return;
            }
            // if this action has a handler, handle the action
            if (actionHandlers[type]) {
                actionHandlers[type](data);
            }
            // now add action
            actionQueue.push({
                type: type,
                data: data
            });
        };
        var query = function query(str) {
            var _queryHandles;
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            return queryHandles[str] ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args) : null;
        };
        var api = {
            getState: getState,
            processActionQueue: processActionQueue,
            processDispatchQueue: processDispatchQueue,
            dispatch: dispatch,
            query: query
        };
        var queryHandles = {};
        queries.forEach(function(query) {
            queryHandles = Object.assign({}, query(state), {}, queryHandles);
        });
        var actionHandlers = {};
        actions.forEach(function(action) {
            actionHandlers = Object.assign({}, action(dispatch, query, state), {}, actionHandlers);
        });
        return api;
    };
    var defineProperty = function defineProperty(obj, property, definition) {
        if (typeof definition === 'function') {
            obj[property] = definition;
            return;
        }
        Object.defineProperty(obj, property, Object.assign({}, definition));
    };
    var forin = function forin(obj, cb) {
        for(var key in obj){
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            cb(key, obj[key]);
        }
    };
    var createObject = function createObject(definition) {
        var obj = {};
        forin(definition, function(property) {
            defineProperty(obj, property, definition[property]);
        });
        return obj;
    };
    var attr = function attr(node, name) {
        var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (value === null) {
            return node.getAttribute(name) || node.hasAttribute(name);
        }
        node.setAttribute(name, value);
    };
    var ns = 'http://www.w3.org/2000/svg';
    var svgElements = [
        'svg',
        'path'
    ]; // only svg elements used
    var isSVGElement = function isSVGElement(tag) {
        return svgElements.includes(tag);
    };
    var createElement = function createElement(tag, className) {
        var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (typeof className === 'object') {
            attributes = className;
            className = null;
        }
        var element = isSVGElement(tag) ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (className) {
            if (isSVGElement(tag)) {
                attr(element, 'class', className);
            } else {
                element.className = className;
            }
        }
        forin(attributes, function(name, value) {
            attr(element, name, value);
        });
        return element;
    };
    var appendChild = function appendChild(parent) {
        return function(child, index) {
            if (typeof index !== 'undefined' && parent.children[index]) {
                parent.insertBefore(child, parent.children[index]);
            } else {
                parent.appendChild(child);
            }
        };
    };
    var appendChildView = function appendChildView(parent, childViews) {
        return function(view, index) {
            if (typeof index !== 'undefined') {
                childViews.splice(index, 0, view);
            } else {
                childViews.push(view);
            }
            return view;
        };
    };
    var removeChildView = function removeChildView(parent, childViews) {
        return function(view) {
            // remove from child views
            childViews.splice(childViews.indexOf(view), 1);
            // remove the element
            if (view.element.parentNode) {
                parent.removeChild(view.element);
            }
            return view;
        };
    };
    var IS_BROWSER = function() {
        return typeof window !== 'undefined' && typeof window.document !== 'undefined';
    }();
    var isBrowser = function isBrowser() {
        return IS_BROWSER;
    };
    var testElement = isBrowser() ? createElement('svg') : {};
    var getChildCount = 'children' in testElement ? function(el) {
        return el.children.length;
    } : function(el) {
        return el.childNodes.length;
    };
    var getViewRect = function getViewRect(elementRect, childViews, offset, scale) {
        var left = offset[0] || elementRect.left;
        var top = offset[1] || elementRect.top;
        var right = left + elementRect.width;
        var bottom = top + elementRect.height * (scale[1] || 1);
        var rect = {
            // the rectangle of the element itself
            element: Object.assign({}, elementRect),
            // the rectangle of the element expanded to contain its children, does not include any margins
            inner: {
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            },
            // the rectangle of the element expanded to contain its children including own margin and child margins
            // margins will be added after we've recalculated the size
            outer: {
                left: left,
                top: top,
                right: right,
                bottom: bottom
            }
        };
        // expand rect to fit all child rectangles
        childViews.filter(function(childView) {
            return !childView.isRectIgnored();
        }).map(function(childView) {
            return childView.rect;
        }).forEach(function(childViewRect) {
            expandRect(rect.inner, Object.assign({}, childViewRect.inner));
            expandRect(rect.outer, Object.assign({}, childViewRect.outer));
        });
        // calculate inner width and height
        calculateRectSize(rect.inner);
        // append additional margin (top and left margins are included in top and left automatically)
        rect.outer.bottom += rect.element.marginBottom;
        rect.outer.right += rect.element.marginRight;
        // calculate outer width and height
        calculateRectSize(rect.outer);
        return rect;
    };
    var expandRect = function expandRect(parent, child) {
        // adjust for parent offset
        child.top += parent.top;
        child.right += parent.left;
        child.bottom += parent.top;
        child.left += parent.left;
        if (child.bottom > parent.bottom) {
            parent.bottom = child.bottom;
        }
        if (child.right > parent.right) {
            parent.right = child.right;
        }
    };
    var calculateRectSize = function calculateRectSize(rect) {
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
    };
    var isNumber = function isNumber(value) {
        return typeof value === 'number';
    };
    /**
     * Determines if position is at destination
     * @param position
     * @param destination
     * @param velocity
     * @param errorMargin
     * @returns {boolean}
     */ var thereYet = function thereYet(position, destination, velocity) {
        var errorMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;
        return Math.abs(position - destination) < errorMargin && Math.abs(velocity) < errorMargin;
    };
    /**
     * Spring animation
     */ var spring = // default options
    function spring() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$stiffness = _ref.stiffness, stiffness = _ref$stiffness === void 0 ? 0.5 : _ref$stiffness, _ref$damping = _ref.damping, damping = _ref$damping === void 0 ? 0.75 : _ref$damping, _ref$mass = _ref.mass, mass = _ref$mass === void 0 ? 10 : _ref$mass;
        var target = null;
        var position = null;
        var velocity = 0;
        var resting = false;
        // updates spring state
        var interpolate = function interpolate(ts, skipToEndState) {
            // in rest, don't animate
            if (resting) return;
            // need at least a target or position to do springy things
            if (!(isNumber(target) && isNumber(position))) {
                resting = true;
                velocity = 0;
                return;
            }
            // calculate spring force
            var f = -(position - target) * stiffness;
            // update velocity by adding force based on mass
            velocity += f / mass;
            // update position by adding velocity
            position += velocity;
            // slow down based on amount of damping
            velocity *= damping;
            // we've arrived if we're near target and our velocity is near zero
            if (thereYet(position, target, velocity) || skipToEndState) {
                position = target;
                velocity = 0;
                resting = true;
                // we done
                api.onupdate(position);
                api.oncomplete(position);
            } else {
                // progress update
                api.onupdate(position);
            }
        };
        /**
             * Set new target value
             * @param value
             */ var setTarget = function setTarget(value) {
            // if currently has no position, set target and position to this value
            if (isNumber(value) && !isNumber(position)) {
                position = value;
            }
            // next target value will not be animated to
            if (target === null) {
                target = value;
                position = value;
            }
            // let start moving to target
            target = value;
            // already at target
            if (position === target || typeof target === 'undefined') {
                // now resting as target is current position, stop moving
                resting = true;
                velocity = 0;
                // done!
                api.onupdate(position);
                api.oncomplete(position);
                return;
            }
            resting = false;
        };
        // need 'api' to call onupdate callback
        var api = createObject({
            interpolate: interpolate,
            target: {
                set: setTarget,
                get: function get() {
                    return target;
                }
            },
            resting: {
                get: function get() {
                    return resting;
                }
            },
            onupdate: function onupdate(value) {},
            oncomplete: function oncomplete(value) {}
        });
        return api;
    };
    var easeLinear = function easeLinear(t) {
        return t;
    };
    var easeInOutQuad = function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    var tween = // default values
    function tween() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$duration = _ref.duration, duration = _ref$duration === void 0 ? 500 : _ref$duration, _ref$easing = _ref.easing, easing = _ref$easing === void 0 ? easeInOutQuad : _ref$easing, _ref$delay = _ref.delay, delay = _ref$delay === void 0 ? 0 : _ref$delay;
        var start = null;
        var t;
        var p;
        var resting = true;
        var reverse = false;
        var target = null;
        var interpolate = function interpolate(ts, skipToEndState) {
            if (resting || target === null) return;
            if (start === null) {
                start = ts;
            }
            if (ts - start < delay) return;
            t = ts - start - delay;
            if (t >= duration || skipToEndState) {
                t = 1;
                p = reverse ? 0 : 1;
                api.onupdate(p * target);
                api.oncomplete(p * target);
                resting = true;
            } else {
                p = t / duration;
                api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
            }
        };
        // need 'api' to call onupdate callback
        var api = createObject({
            interpolate: interpolate,
            target: {
                get: function get() {
                    return reverse ? 0 : target;
                },
                set: function set(value) {
                    // is initial value
                    if (target === null) {
                        target = value;
                        api.onupdate(value);
                        api.oncomplete(value);
                        return;
                    }
                    // want to tween to a smaller value and have a current value
                    if (value < target) {
                        target = 1;
                        reverse = true;
                    } else {
                        // not tweening to a smaller value
                        reverse = false;
                        target = value;
                    }
                    // let's go!
                    resting = false;
                    start = null;
                }
            },
            resting: {
                get: function get() {
                    return resting;
                }
            },
            onupdate: function onupdate(value) {},
            oncomplete: function oncomplete(value) {}
        });
        return api;
    };
    var animator = {
        spring: spring,
        tween: tween
    };
    /*
                       { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
                       { translation: { type: 'spring', ... }, ... }
                       { translation: { x: { type: 'spring', ... } } }
                      */ var createAnimator = function createAnimator(definition, category, property) {
        // default is single definition
        // we check if transform is set, if so, we check if property is set
        var def = definition[category] && typeof definition[category][property] === 'object' ? definition[category][property] : definition[category] || definition;
        var type = typeof def === 'string' ? def : def.type;
        var props = typeof def === 'object' ? Object.assign({}, def) : {};
        return animator[type] ? animator[type](props) : null;
    };
    var addGetSet = function addGetSet(keys, obj, props) {
        var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        obj = Array.isArray(obj) ? obj : [
            obj
        ];
        obj.forEach(function(o) {
            keys.forEach(function(key) {
                var name = key;
                var getter = function getter() {
                    return props[key];
                };
                var setter = function setter(value) {
                    return props[key] = value;
                };
                if (typeof key === 'object') {
                    name = key.key;
                    getter = key.getter || getter;
                    setter = key.setter || setter;
                }
                if (o[name] && !overwrite) {
                    return;
                }
                o[name] = {
                    get: getter,
                    set: setter
                };
            });
        });
    };
    // add to state,
    // add getters and setters to internal and external api (if not set)
    // setup animators
    var animations = function animations(_ref) {
        var mixinConfig = _ref.mixinConfig, viewProps = _ref.viewProps, viewInternalAPI = _ref.viewInternalAPI, viewExternalAPI = _ref.viewExternalAPI;
        // initial properties
        var initialProps = Object.assign({}, viewProps);
        // list of all active animations
        var animations = [];
        // setup animators
        forin(mixinConfig, function(property, animation) {
            var animator = createAnimator(animation);
            if (!animator) {
                return;
            }
            // when the animator updates, update the view state value
            animator.onupdate = function(value) {
                viewProps[property] = value;
            };
            // set animator target
            animator.target = initialProps[property];
            // when value is set, set the animator target value
            var prop = {
                key: property,
                setter: function setter(value) {
                    // if already at target, we done!
                    if (animator.target === value) {
                        return;
                    }
                    animator.target = value;
                },
                getter: function getter() {
                    return viewProps[property];
                }
            };
            // add getters and setters
            addGetSet([
                prop
            ], [
                viewInternalAPI,
                viewExternalAPI
            ], viewProps, true);
            // add it to the list for easy updating from the _write method
            animations.push(animator);
        });
        // expose internal write api
        return {
            write: function write(ts) {
                var skipToEndState = document.hidden;
                var resting = true;
                animations.forEach(function(animation) {
                    if (!animation.resting) resting = false;
                    animation.interpolate(ts, skipToEndState);
                });
                return resting;
            },
            destroy: function destroy() {}
        };
    };
    var addEvent = function addEvent(element) {
        return function(type, fn) {
            element.addEventListener(type, fn);
        };
    };
    var removeEvent = function removeEvent(element) {
        return function(type, fn) {
            element.removeEventListener(type, fn);
        };
    };
    // mixin
    var listeners = function listeners(_ref) {
        var mixinConfig = _ref.mixinConfig, viewProps = _ref.viewProps, viewInternalAPI = _ref.viewInternalAPI, viewExternalAPI = _ref.viewExternalAPI, viewState = _ref.viewState, view = _ref.view;
        var events = [];
        var add = addEvent(view.element);
        var remove = removeEvent(view.element);
        viewExternalAPI.on = function(type, fn) {
            events.push({
                type: type,
                fn: fn
            });
            add(type, fn);
        };
        viewExternalAPI.off = function(type, fn) {
            events.splice(events.findIndex(function(event) {
                return event.type === type && event.fn === fn;
            }), 1);
            remove(type, fn);
        };
        return {
            write: function write() {
                // not busy
                return true;
            },
            destroy: function destroy() {
                events.forEach(function(event) {
                    remove(event.type, event.fn);
                });
            }
        };
    };
    // add to external api and link to props
    var apis = function apis(_ref) {
        var mixinConfig = _ref.mixinConfig, viewProps = _ref.viewProps, viewExternalAPI = _ref.viewExternalAPI;
        addGetSet(mixinConfig, viewExternalAPI, viewProps);
    };
    var isDefined = function isDefined(value) {
        return value != null;
    };
    // add to state,
    // add getters and setters to internal and external api (if not set)
    // set initial state based on props in viewProps
    // apply as transforms each frame
    var defaults = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0
    };
    var styles = function styles(_ref) {
        var mixinConfig = _ref.mixinConfig, viewProps = _ref.viewProps, viewInternalAPI = _ref.viewInternalAPI, viewExternalAPI = _ref.viewExternalAPI, view = _ref.view;
        // initial props
        var initialProps = Object.assign({}, viewProps);
        // current props
        var currentProps = {};
        // we will add those properties to the external API and link them to the viewState
        addGetSet(mixinConfig, [
            viewInternalAPI,
            viewExternalAPI
        ], viewProps);
        // override rect on internal and external rect getter so it takes in account transforms
        var getOffset = function getOffset() {
            return [
                viewProps['translateX'] || 0,
                viewProps['translateY'] || 0
            ];
        };
        var getScale = function getScale() {
            return [
                viewProps['scaleX'] || 0,
                viewProps['scaleY'] || 0
            ];
        };
        var getRect = function getRect() {
            return view.rect ? getViewRect(view.rect, view.childViews, getOffset(), getScale()) : null;
        };
        viewInternalAPI.rect = {
            get: getRect
        };
        viewExternalAPI.rect = {
            get: getRect
        };
        // apply view props
        mixinConfig.forEach(function(key) {
            viewProps[key] = typeof initialProps[key] === 'undefined' ? defaults[key] : initialProps[key];
        });
        // expose api
        return {
            write: function write() {
                // see if props have changed
                if (!propsHaveChanged(currentProps, viewProps)) {
                    return;
                }
                // moves element to correct position on screen
                applyStyles(view.element, viewProps);
                // store new transforms
                Object.assign(currentProps, Object.assign({}, viewProps));
                // no longer busy
                return true;
            },
            destroy: function destroy() {}
        };
    };
    var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
        // different amount of keys
        if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
            return true;
        }
        // lets analyze the individual props
        for(var prop in newProps){
            if (newProps[prop] !== currentProps[prop]) {
                return true;
            }
        }
        return false;
    };
    var applyStyles = function applyStyles(element, _ref2) {
        var opacity = _ref2.opacity, perspective = _ref2.perspective, translateX = _ref2.translateX, translateY = _ref2.translateY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, rotateX = _ref2.rotateX, rotateY = _ref2.rotateY, rotateZ = _ref2.rotateZ, originX = _ref2.originX, originY = _ref2.originY, width = _ref2.width, height = _ref2.height;
        var transforms = '';
        var styles = '';
        // handle transform origin
        if (isDefined(originX) || isDefined(originY)) {
            styles += 'transform-origin: ' + (originX || 0) + 'px ' + (originY || 0) + 'px;';
        }
        // transform order is relevant
        // 0. perspective
        if (isDefined(perspective)) {
            transforms += 'perspective(' + perspective + 'px) ';
        }
        // 1. translate
        if (isDefined(translateX) || isDefined(translateY)) {
            transforms += 'translate3d(' + (translateX || 0) + 'px, ' + (translateY || 0) + 'px, 0) ';
        }
        // 2. scale
        if (isDefined(scaleX) || isDefined(scaleY)) {
            transforms += 'scale3d(' + (isDefined(scaleX) ? scaleX : 1) + ', ' + (isDefined(scaleY) ? scaleY : 1) + ', 1) ';
        }
        // 3. rotate
        if (isDefined(rotateZ)) {
            transforms += 'rotateZ(' + rotateZ + 'rad) ';
        }
        if (isDefined(rotateX)) {
            transforms += 'rotateX(' + rotateX + 'rad) ';
        }
        if (isDefined(rotateY)) {
            transforms += 'rotateY(' + rotateY + 'rad) ';
        }
        // add transforms
        if (transforms.length) {
            styles += 'transform:' + transforms + ';';
        }
        // add opacity
        if (isDefined(opacity)) {
            styles += 'opacity:' + opacity + ';';
            // if we reach zero, we make the element inaccessible
            if (opacity === 0) {
                styles += 'visibility:hidden;';
            }
            // if we're below 100% opacity this element can't be clicked
            if (opacity < 1) {
                styles += 'pointer-events:none;';
            }
        }
        // add height
        if (isDefined(height)) {
            styles += 'height:' + height + 'px;';
        }
        // add width
        if (isDefined(width)) {
            styles += 'width:' + width + 'px;';
        }
        // apply styles
        var elementCurrentStyle = element.elementCurrentStyle || '';
        // if new styles does not match current styles, lets update!
        if (styles.length !== elementCurrentStyle.length || styles !== elementCurrentStyle) {
            element.style.cssText = styles;
            // store current styles so we can compare them to new styles later on
            // _not_ getting the style value is faster
            element.elementCurrentStyle = styles;
        }
    };
    var Mixins = {
        styles: styles,
        listeners: listeners,
        animations: animations,
        apis: apis
    };
    var updateRect = function updateRect() {
        var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!element.layoutCalculated) {
            rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
            rect.marginTop = parseInt(style.marginTop, 10) || 0;
            rect.marginRight = parseInt(style.marginRight, 10) || 0;
            rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
            rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
            element.layoutCalculated = true;
        }
        rect.left = element.offsetLeft || 0;
        rect.top = element.offsetTop || 0;
        rect.width = element.offsetWidth || 0;
        rect.height = element.offsetHeight || 0;
        rect.right = rect.left + rect.width;
        rect.bottom = rect.top + rect.height;
        rect.scrollTop = element.scrollTop;
        rect.hidden = element.offsetParent === null;
        return rect;
    };
    var createView = // default view definition
    function createView() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$tag = _ref.tag, tag = _ref$tag === void 0 ? 'div' : _ref$tag, _ref$name = _ref.name, name = _ref$name === void 0 ? null : _ref$name, _ref$attributes = _ref.attributes, attributes = _ref$attributes === void 0 ? {} : _ref$attributes, _ref$read = _ref.read, read = _ref$read === void 0 ? function() {} : _ref$read, _ref$write = _ref.write, write = _ref$write === void 0 ? function() {} : _ref$write, _ref$create = _ref.create, create = _ref$create === void 0 ? function() {} : _ref$create, _ref$destroy = _ref.destroy, destroy = _ref$destroy === void 0 ? function() {} : _ref$destroy, _ref$filterFrameActio = _ref.filterFrameActionsForChild, filterFrameActionsForChild = _ref$filterFrameActio === void 0 ? function(child, actions) {
            return actions;
        } : _ref$filterFrameActio, _ref$didCreateView = _ref.didCreateView, didCreateView = _ref$didCreateView === void 0 ? function() {} : _ref$didCreateView, _ref$didWriteView = _ref.didWriteView, didWriteView = _ref$didWriteView === void 0 ? function() {} : _ref$didWriteView, _ref$ignoreRect = _ref.ignoreRect, ignoreRect = _ref$ignoreRect === void 0 ? false : _ref$ignoreRect, _ref$ignoreRectUpdate = _ref.ignoreRectUpdate, ignoreRectUpdate = _ref$ignoreRectUpdate === void 0 ? false : _ref$ignoreRectUpdate, _ref$mixins = _ref.mixins, mixins = _ref$mixins === void 0 ? [] : _ref$mixins;
        return function(// each view requires reference to store
        store) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // root element should not be changed
            var element = createElement(tag, 'filepond--' + name, attributes);
            // style reference should also not be changed
            var style = window.getComputedStyle(element, null);
            // element rectangle
            var rect = updateRect();
            var frameRect = null;
            // rest state
            var isResting = false;
            // pretty self explanatory
            var childViews = [];
            // loaded mixins
            var activeMixins = [];
            // references to created children
            var ref = {};
            // state used for each instance
            var state = {};
            // list of writers that will be called to update this view
            var writers = [
                write
            ];
            var readers = [
                read
            ];
            var destroyers = [
                destroy
            ];
            // core view methods
            var getElement = function getElement() {
                return element;
            };
            var getChildViews = function getChildViews() {
                return childViews.concat();
            };
            var getReference = function getReference() {
                return ref;
            };
            var createChildView = function createChildView(store) {
                return function(view, props) {
                    return view(store, props);
                };
            };
            var getRect = function getRect() {
                if (frameRect) {
                    return frameRect;
                }
                frameRect = getViewRect(rect, childViews, [
                    0,
                    0
                ], [
                    1,
                    1
                ]);
                return frameRect;
            };
            var getStyle = function getStyle() {
                return style;
            };
            /**
                 * Read data from DOM
                 * @private
                 */ var _read = function _read() {
                frameRect = null;
                // read child views
                childViews.forEach(function(child) {
                    return child._read();
                });
                var shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
                if (shouldUpdate) {
                    updateRect(rect, element, style);
                }
                // readers
                var api = {
                    root: internalAPI,
                    props: props,
                    rect: rect
                };
                readers.forEach(function(reader) {
                    return reader(api);
                });
            };
            /**
                 * Write data to DOM
                 * @private
                 */ var _write = function _write(ts, frameActions, shouldOptimize) {
                // if no actions, we assume that the view is resting
                var resting = frameActions.length === 0;
                // writers
                writers.forEach(function(writer) {
                    var writerResting = writer({
                        props: props,
                        root: internalAPI,
                        actions: frameActions,
                        timestamp: ts,
                        shouldOptimize: shouldOptimize
                    });
                    if (writerResting === false) {
                        resting = false;
                    }
                });
                // run mixins
                activeMixins.forEach(function(mixin) {
                    // if one of the mixins is still busy after write operation, we are not resting
                    var mixinResting = mixin.write(ts);
                    if (mixinResting === false) {
                        resting = false;
                    }
                });
                // updates child views that are currently attached to the DOM
                childViews.filter(function(child) {
                    return !!child.element.parentNode;
                }).forEach(function(child) {
                    // if a child view is not resting, we are not resting
                    var childResting = child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
                    if (!childResting) {
                        resting = false;
                    }
                });
                // append new elements to DOM and update those
                childViews//.filter(child => !child.element.parentNode)
                .forEach(function(child, index) {
                    // skip
                    if (child.element.parentNode) {
                        return;
                    }
                    // append to DOM
                    internalAPI.appendChild(child.element, index);
                    // call read (need to know the size of these elements)
                    child._read();
                    // re-call write
                    child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
                    // we just added somthing to the dom, no rest
                    resting = false;
                });
                // update resting state
                isResting = resting;
                didWriteView({
                    props: props,
                    root: internalAPI,
                    actions: frameActions,
                    timestamp: ts
                });
                // let parent know if we are resting
                return resting;
            };
            var _destroy = function _destroy() {
                activeMixins.forEach(function(mixin) {
                    return mixin.destroy();
                });
                destroyers.forEach(function(destroyer) {
                    destroyer({
                        root: internalAPI,
                        props: props
                    });
                });
                childViews.forEach(function(child) {
                    return child._destroy();
                });
            };
            // sharedAPI
            var sharedAPIDefinition = {
                element: {
                    get: getElement
                },
                style: {
                    get: getStyle
                },
                childViews: {
                    get: getChildViews
                }
            };
            // private API definition
            var internalAPIDefinition = Object.assign({}, sharedAPIDefinition, {
                rect: {
                    get: getRect
                },
                // access to custom children references
                ref: {
                    get: getReference
                },
                // dom modifiers
                is: function is(needle) {
                    return name === needle;
                },
                appendChild: appendChild(element),
                createChildView: createChildView(store),
                linkView: function linkView(view) {
                    childViews.push(view);
                    return view;
                },
                unlinkView: function unlinkView(view) {
                    childViews.splice(childViews.indexOf(view), 1);
                },
                appendChildView: appendChildView(element, childViews),
                removeChildView: removeChildView(element, childViews),
                registerWriter: function registerWriter(writer) {
                    return writers.push(writer);
                },
                registerReader: function registerReader(reader) {
                    return readers.push(reader);
                },
                registerDestroyer: function registerDestroyer(destroyer) {
                    return destroyers.push(destroyer);
                },
                invalidateLayout: function invalidateLayout() {
                    return element.layoutCalculated = false;
                },
                // access to data store
                dispatch: store.dispatch,
                query: store.query
            });
            // public view API methods
            var externalAPIDefinition = {
                element: {
                    get: getElement
                },
                childViews: {
                    get: getChildViews
                },
                rect: {
                    get: getRect
                },
                resting: {
                    get: function get() {
                        return isResting;
                    }
                },
                isRectIgnored: function isRectIgnored() {
                    return ignoreRect;
                },
                _read: _read,
                _write: _write,
                _destroy: _destroy
            };
            // mixin API methods
            var mixinAPIDefinition = Object.assign({}, sharedAPIDefinition, {
                rect: {
                    get: function get() {
                        return rect;
                    }
                }
            });
            // add mixin functionality
            Object.keys(mixins).sort(function(a, b) {
                // move styles to the back of the mixin list (so adjustments of other mixins are applied to the props correctly)
                if (a === 'styles') {
                    return 1;
                } else if (b === 'styles') {
                    return -1;
                }
                return 0;
            }).forEach(function(key) {
                var mixinAPI = Mixins[key]({
                    mixinConfig: mixins[key],
                    viewProps: props,
                    viewState: state,
                    viewInternalAPI: internalAPIDefinition,
                    viewExternalAPI: externalAPIDefinition,
                    view: createObject(mixinAPIDefinition)
                });
                if (mixinAPI) {
                    activeMixins.push(mixinAPI);
                }
            });
            // construct private api
            var internalAPI = createObject(internalAPIDefinition);
            // create the view
            create({
                root: internalAPI,
                props: props
            });
            // append created child views to root node
            var childCount = getChildCount(element); // need to know the current child count so appending happens in correct order
            childViews.forEach(function(child, index) {
                internalAPI.appendChild(child.element, childCount + index);
            });
            // call did create
            didCreateView(internalAPI);
            // expose public api
            return createObject(externalAPIDefinition);
        };
    };
    var createPainter = function createPainter(read, write) {
        var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
        var name = '__framePainter';
        // set global painter
        if (window[name]) {
            window[name].readers.push(read);
            window[name].writers.push(write);
            return;
        }
        window[name] = {
            readers: [
                read
            ],
            writers: [
                write
            ]
        };
        var painter = window[name];
        var interval = 1000 / fps;
        var last = null;
        var id = null;
        var requestTick = null;
        var cancelTick = null;
        var setTimerType = function setTimerType() {
            if (document.hidden) {
                requestTick = function requestTick() {
                    return window.setTimeout(function() {
                        return tick(performance.now());
                    }, interval);
                };
                cancelTick = function cancelTick() {
                    return window.clearTimeout(id);
                };
            } else {
                requestTick = function requestTick() {
                    return window.requestAnimationFrame(tick);
                };
                cancelTick = function cancelTick() {
                    return window.cancelAnimationFrame(id);
                };
            }
        };
        document.addEventListener('visibilitychange', function() {
            if (cancelTick) cancelTick();
            setTimerType();
            tick(performance.now());
        });
        var tick = function tick(ts) {
            // queue next tick
            id = requestTick(tick);
            // limit fps
            if (!last) {
                last = ts;
            }
            var delta = ts - last;
            if (delta <= interval) {
                // skip frame
                return;
            }
            // align next frame
            last = ts - delta % interval;
            // update view
            painter.readers.forEach(function(read) {
                return read();
            });
            painter.writers.forEach(function(write) {
                return write(ts);
            });
        };
        setTimerType();
        tick(performance.now());
        return {
            pause: function pause() {
                cancelTick(id);
            }
        };
    };
    var createRoute = function createRoute(routes, fn) {
        return function(_ref) {
            var root = _ref.root, props = _ref.props, _ref$actions = _ref.actions, actions = _ref$actions === void 0 ? [] : _ref$actions, timestamp = _ref.timestamp, shouldOptimize = _ref.shouldOptimize;
            actions.filter(function(action) {
                return routes[action.type];
            }).forEach(function(action) {
                return routes[action.type]({
                    root: root,
                    props: props,
                    action: action.data,
                    timestamp: timestamp,
                    shouldOptimize: shouldOptimize
                });
            });
            if (fn) {
                fn({
                    root: root,
                    props: props,
                    actions: actions,
                    timestamp: timestamp,
                    shouldOptimize: shouldOptimize
                });
            }
        };
    };
    var insertBefore = function insertBefore(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode);
    };
    var insertAfter = function insertAfter(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };
    var isArray = function isArray(value) {
        return Array.isArray(value);
    };
    var isEmpty = function isEmpty(value) {
        return value == null;
    };
    var trim = function trim(str) {
        return str.trim();
    };
    var toString = function toString(value) {
        return '' + value;
    };
    var toArray = function toArray(value) {
        var splitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
        if (isEmpty(value)) {
            return [];
        }
        if (isArray(value)) {
            return value;
        }
        return toString(value).split(splitter).map(trim).filter(function(str) {
            return str.length;
        });
    };
    var isBoolean = function isBoolean(value) {
        return typeof value === 'boolean';
    };
    var toBoolean = function toBoolean(value) {
        return isBoolean(value) ? value : value === 'true';
    };
    var isString = function isString(value) {
        return typeof value === 'string';
    };
    var toNumber = function toNumber(value) {
        return isNumber(value) ? value : isString(value) ? toString(value).replace(/[a-z]+/gi, '') : 0;
    };
    var toInt = function toInt(value) {
        return parseInt(toNumber(value), 10);
    };
    var toFloat = function toFloat(value) {
        return parseFloat(toNumber(value));
    };
    var isInt = function isInt(value) {
        return isNumber(value) && isFinite(value) && Math.floor(value) === value;
    };
    var toBytes = function toBytes(value) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
        // is in bytes
        if (isInt(value)) {
            return value;
        }
        // is natural file size
        var naturalFileSize = toString(value).trim();
        // if is value in megabytes
        if (/MB$/i.test(naturalFileSize)) {
            naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
            return toInt(naturalFileSize) * base * base;
        }
        // if is value in kilobytes
        if (/KB/i.test(naturalFileSize)) {
            naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
            return toInt(naturalFileSize) * base;
        }
        return toInt(naturalFileSize);
    };
    var isFunction = function isFunction(value) {
        return typeof value === 'function';
    };
    var toFunctionReference = function toFunctionReference(string) {
        var ref = self;
        var levels = string.split('.');
        var level = null;
        while(level = levels.shift()){
            ref = ref[level];
            if (!ref) {
                return null;
            }
        }
        return ref;
    };
    var methods = {
        process: 'POST',
        patch: 'PATCH',
        revert: 'DELETE',
        fetch: 'GET',
        restore: 'GET',
        load: 'GET'
    };
    var createServerAPI = function createServerAPI(outline) {
        var api = {};
        api.url = isString(outline) ? outline : outline.url || '';
        api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;
        api.headers = outline.headers ? outline.headers : {};
        forin(methods, function(key) {
            api[key] = createAction(key, outline[key], methods[key], api.timeout, api.headers);
        });
        // remove process if no url or process on outline
        api.process = outline.process || isString(outline) || outline.url ? api.process : null;
        // special treatment for remove
        api.remove = outline.remove || null;
        // remove generic headers from api object
        delete api.headers;
        return api;
    };
    var createAction = function createAction(name, outline, method, timeout, headers) {
        // is explicitely set to null so disable
        if (outline === null) {
            return null;
        }
        // if is custom function, done! Dev handles everything.
        if (typeof outline === 'function') {
            return outline;
        }
        // build action object
        var action = {
            url: method === 'GET' || method === 'PATCH' ? '?' + name + '=' : '',
            method: method,
            headers: headers,
            withCredentials: false,
            timeout: timeout,
            onload: null,
            ondata: null,
            onerror: null
        };
        // is a single url
        if (isString(outline)) {
            action.url = outline;
            return action;
        }
        // overwrite
        Object.assign(action, outline);
        // see if should reformat headers;
        if (isString(action.headers)) {
            var parts = action.headers.split(/:(.+)/);
            action.headers = {
                header: parts[0],
                value: parts[1]
            };
        }
        // if is bool withCredentials
        action.withCredentials = toBoolean(action.withCredentials);
        return action;
    };
    var toServerAPI = function toServerAPI(value) {
        return createServerAPI(value);
    };
    var isNull = function isNull(value) {
        return value === null;
    };
    var isObject = function isObject(value) {
        return typeof value === 'object' && value !== null;
    };
    var isAPI = function isAPI(value) {
        return isObject(value) && isString(value.url) && isObject(value.process) && isObject(value.revert) && isObject(value.restore) && isObject(value.fetch);
    };
    var getType = function getType(value) {
        if (isArray(value)) {
            return 'array';
        }
        if (isNull(value)) {
            return 'null';
        }
        if (isInt(value)) {
            return 'int';
        }
        if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
            return 'bytes';
        }
        if (isAPI(value)) {
            return 'api';
        }
        return typeof value;
    };
    var replaceSingleQuotes = function replaceSingleQuotes(str) {
        return str.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",');
    };
    var conversionTable = {
        array: toArray,
        boolean: toBoolean,
        int: function int(value) {
            return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
        },
        number: toFloat,
        float: toFloat,
        bytes: toBytes,
        string: function string(value) {
            return isFunction(value) ? value : toString(value);
        },
        function: function _function(value) {
            return toFunctionReference(value);
        },
        serverapi: toServerAPI,
        object: function object(value) {
            try {
                return JSON.parse(replaceSingleQuotes(value));
            } catch (e) {
                return null;
            }
        }
    };
    var convertTo = function convertTo(value, type) {
        return conversionTable[type](value);
    };
    var getValueByType = function getValueByType(newValue, defaultValue, valueType) {
        // can always assign default value
        if (newValue === defaultValue) {
            return newValue;
        }
        // get the type of the new value
        var newValueType = getType(newValue);
        // is valid type?
        if (newValueType !== valueType) {
            // is string input, let's attempt to convert
            var convertedValue = convertTo(newValue, valueType);
            // what is the type now
            newValueType = getType(convertedValue);
            // no valid conversions found
            if (convertedValue === null) {
                throw 'Trying to assign value with incorrect type to "' + option + '", allowed type: "' + valueType + '"';
            } else {
                newValue = convertedValue;
            }
        }
        // assign new value
        return newValue;
    };
    var createOption = function createOption(defaultValue, valueType) {
        var currentValue = defaultValue;
        return {
            enumerable: true,
            get: function get() {
                return currentValue;
            },
            set: function set(newValue) {
                currentValue = getValueByType(newValue, defaultValue, valueType);
            }
        };
    };
    var createOptions = function createOptions(options) {
        var obj = {};
        forin(options, function(prop) {
            var optionDefinition = options[prop];
            obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
        });
        return createObject(obj);
    };
    var createInitialState = function createInitialState(options) {
        return {
            // model
            items: [],
            // timeout used for calling update items
            listUpdateTimeout: null,
            // timeout used for stacking metadata updates
            itemUpdateTimeout: null,
            // queue of items waiting to be processed
            processingQueue: [],
            // options
            options: createOptions(options)
        };
    };
    var fromCamels = function fromCamels(string) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
        return string.split(/(?=[A-Z])/).map(function(part) {
            return part.toLowerCase();
        }).join(separator);
    };
    var createOptionAPI = function createOptionAPI(store, options) {
        var obj = {};
        forin(options, function(key) {
            obj[key] = {
                get: function get() {
                    return store.getState().options[key];
                },
                set: function set(value) {
                    store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
                        value: value
                    });
                }
            };
        });
        return obj;
    };
    var createOptionActions = function createOptionActions(options) {
        return function(dispatch, query, state) {
            var obj = {};
            forin(options, function(key) {
                var name = fromCamels(key, '_').toUpperCase();
                obj['SET_' + name] = function(action) {
                    try {
                        state.options[key] = action.value;
                    } catch (e) {} // nope, failed
                    // we successfully set the value of this option
                    dispatch('DID_SET_' + name, {
                        value: state.options[key]
                    });
                };
            });
            return obj;
        };
    };
    var createOptionQueries = function createOptionQueries(options) {
        return function(state) {
            var obj = {};
            forin(options, function(key) {
                obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
                    return state.options[key];
                };
            });
            return obj;
        };
    };
    var InteractionMethod = {
        API: 1,
        DROP: 2,
        BROWSE: 3,
        PASTE: 4,
        NONE: 5
    };
    var getUniqueId = function getUniqueId() {
        return Math.random().toString(36).substring(2, 11);
    };
    function _typeof(obj) {
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
        }
        return _typeof(obj);
    }
    var REACT_ELEMENT_TYPE;
    function _jsx(type, props, key, children) {
        if (!REACT_ELEMENT_TYPE) {
            REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
        }
        var defaultProps = type && type.defaultProps;
        var childrenLength = arguments.length - 3;
        if (!props && childrenLength !== 0) {
            props = {
                children: void 0
            };
        }
        if (props && defaultProps) {
            for(var propName in defaultProps){
                if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                }
            }
        } else if (!props) {
            props = defaultProps || {};
        }
        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = new Array(childrenLength);
            for(var i = 0; i < childrenLength; i++){
                childArray[i] = arguments[i + 3];
            }
            props.children = childArray;
        }
        return {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key === undefined ? null : '' + key,
            ref: null,
            props: props,
            _owner: null
        };
    }
    function _asyncIterator(iterable) {
        var method;
        if (typeof Symbol !== 'undefined') {
            if (Symbol.asyncIterator) {
                method = iterable[Symbol.asyncIterator];
                if (method != null) return method.call(iterable);
            }
            if (Symbol.iterator) {
                method = iterable[Symbol.iterator];
                if (method != null) return method.call(iterable);
            }
        }
        throw new TypeError('Object is not async iterable');
    }
    function _AwaitValue(value) {
        this.wrapped = value;
    }
    function _AsyncGenerator(gen) {
        var front, back;
        function send(key, arg) {
            return new Promise(function(resolve, reject) {
                var request = {
                    key: key,
                    arg: arg,
                    resolve: resolve,
                    reject: reject,
                    next: null
                };
                if (back) {
                    back = back.next = request;
                } else {
                    front = back = request;
                    resume(key, arg);
                }
            });
        }
        function resume(key, arg) {
            try {
                var result = gen[key](arg);
                var value = result.value;
                var wrappedAwait = value instanceof _AwaitValue;
                Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                    if (wrappedAwait) {
                        resume('next', arg);
                        return;
                    }
                    settle(result.done ? 'return' : 'normal', arg);
                }, function(err) {
                    resume('throw', err);
                });
            } catch (err) {
                settle('throw', err);
            }
        }
        function settle(type, value) {
            switch(type){
                case 'return':
                    front.resolve({
                        value: value,
                        done: true
                    });
                    break;
                case 'throw':
                    front.reject(value);
                    break;
                default:
                    front.resolve({
                        value: value,
                        done: false
                    });
                    break;
            }
            front = front.next;
            if (front) {
                resume(front.key, front.arg);
            } else {
                back = null;
            }
        }
        this._invoke = send;
        if (typeof gen.return !== 'function') {
            this.return = undefined;
        }
    }
    if (typeof Symbol === 'function' && Symbol.asyncIterator) {
        _AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
            return this;
        };
    }
    _AsyncGenerator.prototype.next = function(arg) {
        return this._invoke('next', arg);
    };
    _AsyncGenerator.prototype.throw = function(arg) {
        return this._invoke('throw', arg);
    };
    _AsyncGenerator.prototype.return = function(arg) {
        return this._invoke('return', arg);
    };
    function _wrapAsyncGenerator(fn) {
        return function() {
            return new _AsyncGenerator(fn.apply(this, arguments));
        };
    }
    function _awaitAsyncGenerator(value) {
        return new _AwaitValue(value);
    }
    function _asyncGeneratorDelegate(inner, awaitWrap) {
        var iter = {}, waiting = false;
        function pump(key, value) {
            waiting = true;
            value = new Promise(function(resolve) {
                resolve(inner[key](value));
            });
            return {
                done: false,
                value: awaitWrap(value)
            };
        }
        if (typeof Symbol === 'function' && Symbol.iterator) {
            iter[Symbol.iterator] = function() {
                return this;
            };
        }
        iter.next = function(value) {
            if (waiting) {
                waiting = false;
                return value;
            }
            return pump('next', value);
        };
        if (typeof inner.throw === 'function') {
            iter.throw = function(value) {
                if (waiting) {
                    waiting = false;
                    throw value;
                }
                return pump('throw', value);
            };
        }
        if (typeof inner.return === 'function') {
            iter.return = function(value) {
                return pump('return', value);
            };
        }
        return iter;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self1 = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self1, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                }
                _next(undefined);
            });
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _defineEnumerableProperties(obj, descs) {
        for(var key in descs){
            var desc = descs[key];
            desc.configurable = desc.enumerable = true;
            if ('value' in desc) desc.writable = true;
            Object.defineProperty(obj, key, desc);
        }
        if (Object.getOwnPropertySymbols) {
            var objectSymbols = Object.getOwnPropertySymbols(descs);
            for(var i = 0; i < objectSymbols.length; i++){
                var sym = objectSymbols[i];
                var desc = descs[sym];
                desc.configurable = desc.enumerable = true;
                if ('value' in desc) desc.writable = true;
                Object.defineProperty(obj, sym, desc);
            }
        }
        return obj;
    }
    function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);
            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }
        return obj;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source){
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }
            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        }
        return target;
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(source, true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(source).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function');
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function isNativeReflectConstruct() {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [
                    null
                ];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }
        return _construct.apply(null, arguments);
    }
    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf('[native code]') !== -1;
    }
    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === 'function' ? new Map() : undefined;
        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== 'function') {
                throw new TypeError('Super expression must either be null or a function');
            }
            if (typeof _cache !== 'undefined') {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class);
    }
    function _instanceof(left, right) {
        if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
            return !!right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    }
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for(var key in obj){
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }
    function _newArrowCheck(innerThis, boundThis) {
        if (innerThis !== boundThis) {
            throw new TypeError('Cannot instantiate an arrow function');
        }
    }
    function _objectDestructuringEmpty(obj) {
        if (obj == null) throw new TypeError('Cannot destructure undefined');
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
        return target;
    }
    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for(i = 0; i < sourceSymbolKeys.length; i++){
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }
        return target;
    }
    function _assertThisInitialized(self1) {
        if (self1 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self1;
    }
    function _possibleConstructorReturn(self1, call) {
        if (call && (typeof call === 'object' || typeof call === 'function')) {
            return call;
        }
        return _assertThisInitialized(self1);
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get(target, property, receiver) {
        if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);
                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.get) {
                    return desc.get.call(receiver);
                }
                return desc.value;
            };
        }
        return _get(target, property, receiver || target);
    }
    function set(target, property, value, receiver) {
        if (typeof Reflect !== 'undefined' && Reflect.set) {
            set = Reflect.set;
        } else {
            set = function set(target, property, value, receiver) {
                var base = _superPropBase(target, property);
                var desc;
                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);
                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) {
                        return false;
                    }
                }
                desc = Object.getOwnPropertyDescriptor(receiver, property);
                if (desc) {
                    if (!desc.writable) {
                        return false;
                    }
                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else {
                    _defineProperty(receiver, property, value);
                }
                return true;
            };
        }
        return set(target, property, value, receiver);
    }
    function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);
        if (!s && isStrict) {
            throw new Error('failed to set property');
        }
        return value;
    }
    function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }
    function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }
        strings.raw = raw;
        return strings;
    }
    function _temporalRef(val1, name) {
        if (val1 === _temporalUndefined) {
            throw new ReferenceError(name + ' is not defined - temporal dead zone');
        } else {
            return val1;
        }
    }
    function _readOnlyError(name) {
        throw new Error('"' + name + '" is read-only');
    }
    function _classNameTDZError(name) {
        throw new Error('Class "' + name + '" cannot be referenced in computed property keys.');
    }
    var _temporalUndefined = {};
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }
    function _slicedToArrayLoose(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _nonIterableRest();
    }
    function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        }
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i['return'] != null) _i['return']();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _iterableToArrayLimitLoose(arr, i) {
        var _arr = [];
        for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
            _arr.push(_step.value);
            if (i && _arr.length === i) break;
        }
        return _arr;
    }
    function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
    }
    function _nonIterableRest() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
    function _skipFirstGeneratorNext(fn) {
        return function() {
            var it = fn.apply(this, arguments);
            it.next();
            return it;
        };
    }
    function _toPrimitive(input, hint) {
        if (typeof input !== 'object' || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (typeof res !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (hint === 'string' ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, 'string');
        return typeof key === 'symbol' ? key : String(key);
    }
    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
    }
    function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
            Object.defineProperty(target, property, desc);
            desc = null;
        }
        return desc;
    }
    var id = 0;
    function _classPrivateFieldLooseKey(name) {
        return '__private_' + id++ + '_' + name;
    }
    function _classPrivateFieldLooseBase(receiver, privateKey) {
        if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
            throw new TypeError('attempted to use private field on non-instance');
        }
        return receiver;
    }
    function _classPrivateFieldGet(receiver, privateMap) {
        var descriptor = privateMap.get(receiver);
        if (!descriptor) {
            throw new TypeError('attempted to get private field on non-instance');
        }
        if (descriptor.get) {
            return descriptor.get.call(receiver);
        }
        return descriptor.value;
    }
    function _classPrivateFieldSet(receiver, privateMap, value) {
        var descriptor = privateMap.get(receiver);
        if (!descriptor) {
            throw new TypeError('attempted to set private field on non-instance');
        }
        if (descriptor.set) {
            descriptor.set.call(receiver, value);
        } else {
            if (!descriptor.writable) {
                throw new TypeError('attempted to set read only private field');
            }
            descriptor.value = value;
        }
        return value;
    }
    function _classPrivateFieldDestructureSet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError('attempted to set private field on non-instance');
        }
        var descriptor = privateMap.get(receiver);
        if (descriptor.set) {
            if (!('__destrObj' in descriptor)) {
                descriptor.__destrObj = {
                    set value (v){
                        descriptor.set.call(receiver, v);
                    }
                };
            }
            return descriptor.__destrObj;
        } else {
            if (!descriptor.writable) {
                throw new TypeError('attempted to set read only private field');
            }
            return descriptor;
        }
    }
    function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }
        return descriptor.value;
    }
    function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }
        if (!descriptor.writable) {
            throw new TypeError('attempted to set read only private field');
        }
        descriptor.value = value;
        return value;
    }
    function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }
        return method;
    }
    function _classStaticPrivateMethodSet() {
        throw new TypeError('attempted to set read only static private field');
    }
    function _decorate(decorators, factory, superClass, mixins) {
        var api = _getDecoratorsApi();
        if (mixins) {
            for(var i = 0; i < mixins.length; i++){
                api = mixins[i](api);
            }
        }
        var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
        }, superClass);
        var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
        api.initializeClassElements(r.F, decorated.elements);
        return api.runClassFinishers(r.F, decorated.finishers);
    }
    function _getDecoratorsApi() {
        _getDecoratorsApi = function() {
            return api;
        };
        var api = {
            elementsDefinitionOrder: [
                [
                    'method'
                ],
                [
                    'field'
                ]
            ],
            initializeInstanceElements: function(O, elements) {
                [
                    'method',
                    'field'
                ].forEach(function(kind) {
                    elements.forEach(function(element) {
                        if (element.kind === kind && element.placement === 'own') {
                            this.defineClassElement(O, element);
                        }
                    }, this);
                }, this);
            },
            initializeClassElements: function(F, elements) {
                var proto = F.prototype;
                [
                    'method',
                    'field'
                ].forEach(function(kind) {
                    elements.forEach(function(element) {
                        var placement = element.placement;
                        if (element.kind === kind && (placement === 'static' || placement === 'prototype')) {
                            var receiver = placement === 'static' ? F : proto;
                            this.defineClassElement(receiver, element);
                        }
                    }, this);
                }, this);
            },
            defineClassElement: function(receiver, element) {
                var descriptor = element.descriptor;
                if (element.kind === 'field') {
                    var initializer = element.initializer;
                    descriptor = {
                        enumerable: descriptor.enumerable,
                        writable: descriptor.writable,
                        configurable: descriptor.configurable,
                        value: initializer === void 0 ? void 0 : initializer.call(receiver)
                    };
                }
                Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function(elements, decorators) {
                var newElements = [];
                var finishers = [];
                var placements = {
                    static: [],
                    prototype: [],
                    own: []
                };
                elements.forEach(function(element) {
                    this.addElementPlacement(element, placements);
                }, this);
                elements.forEach(function(element) {
                    if (!_hasDecorators(element)) return newElements.push(element);
                    var elementFinishersExtras = this.decorateElement(element, placements);
                    newElements.push(elementFinishersExtras.element);
                    newElements.push.apply(newElements, elementFinishersExtras.extras);
                    finishers.push.apply(finishers, elementFinishersExtras.finishers);
                }, this);
                if (!decorators) {
                    return {
                        elements: newElements,
                        finishers: finishers
                    };
                }
                var result = this.decorateConstructor(newElements, decorators);
                finishers.push.apply(finishers, result.finishers);
                result.finishers = finishers;
                return result;
            },
            addElementPlacement: function(element, placements, silent) {
                var keys = placements[element.placement];
                if (!silent && keys.indexOf(element.key) !== -1) {
                    throw new TypeError('Duplicated element (' + element.key + ')');
                }
                keys.push(element.key);
            },
            decorateElement: function(element, placements) {
                var extras = [];
                var finishers = [];
                for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
                    var keys = placements[element.placement];
                    keys.splice(keys.indexOf(element.key), 1);
                    var elementObject = this.fromElementDescriptor(element);
                    var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
                    element = elementFinisherExtras.element;
                    this.addElementPlacement(element, placements);
                    if (elementFinisherExtras.finisher) {
                        finishers.push(elementFinisherExtras.finisher);
                    }
                    var newExtras = elementFinisherExtras.extras;
                    if (newExtras) {
                        for(var j = 0; j < newExtras.length; j++){
                            this.addElementPlacement(newExtras[j], placements);
                        }
                        extras.push.apply(extras, newExtras);
                    }
                }
                return {
                    element: element,
                    finishers: finishers,
                    extras: extras
                };
            },
            decorateConstructor: function(elements, decorators) {
                var finishers = [];
                for(var i = decorators.length - 1; i >= 0; i--){
                    var obj = this.fromClassDescriptor(elements);
                    var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
                    if (elementsAndFinisher.finisher !== undefined) {
                        finishers.push(elementsAndFinisher.finisher);
                    }
                    if (elementsAndFinisher.elements !== undefined) {
                        elements = elementsAndFinisher.elements;
                        for(var j = 0; j < elements.length - 1; j++){
                            for(var k = j + 1; k < elements.length; k++){
                                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                                    throw new TypeError('Duplicated element (' + elements[j].key + ')');
                                }
                            }
                        }
                    }
                }
                return {
                    elements: elements,
                    finishers: finishers
                };
            },
            fromElementDescriptor: function(element) {
                var obj = {
                    kind: element.kind,
                    key: element.key,
                    placement: element.placement,
                    descriptor: element.descriptor
                };
                var desc = {
                    value: 'Descriptor',
                    configurable: true
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                if (element.kind === 'field') obj.initializer = element.initializer;
                return obj;
            },
            toElementDescriptors: function(elementObjects) {
                if (elementObjects === undefined) return;
                return _toArray(elementObjects).map(function(elementObject) {
                    var element = this.toElementDescriptor(elementObject);
                    this.disallowProperty(elementObject, 'finisher', 'An element descriptor');
                    this.disallowProperty(elementObject, 'extras', 'An element descriptor');
                    return element;
                }, this);
            },
            toElementDescriptor: function(elementObject) {
                var kind = String(elementObject.kind);
                if (kind !== 'method' && kind !== 'field') {
                    throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
                }
                var key = _toPropertyKey(elementObject.key);
                var placement = String(elementObject.placement);
                if (placement !== 'static' && placement !== 'prototype' && placement !== 'own') {
                    throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
                }
                var descriptor = elementObject.descriptor;
                this.disallowProperty(elementObject, 'elements', 'An element descriptor');
                var element = {
                    kind: kind,
                    key: key,
                    placement: placement,
                    descriptor: Object.assign({}, descriptor)
                };
                if (kind !== 'field') {
                    this.disallowProperty(elementObject, 'initializer', 'A method descriptor');
                } else {
                    this.disallowProperty(descriptor, 'get', 'The property descriptor of a field descriptor');
                    this.disallowProperty(descriptor, 'set', 'The property descriptor of a field descriptor');
                    this.disallowProperty(descriptor, 'value', 'The property descriptor of a field descriptor');
                    element.initializer = elementObject.initializer;
                }
                return element;
            },
            toElementFinisherExtras: function(elementObject) {
                var element = this.toElementDescriptor(elementObject);
                var finisher = _optionalCallableProperty(elementObject, 'finisher');
                var extras = this.toElementDescriptors(elementObject.extras);
                return {
                    element: element,
                    finisher: finisher,
                    extras: extras
                };
            },
            fromClassDescriptor: function(elements) {
                var obj = {
                    kind: 'class',
                    elements: elements.map(this.fromElementDescriptor, this)
                };
                var desc = {
                    value: 'Descriptor',
                    configurable: true
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                return obj;
            },
            toClassDescriptor: function(obj) {
                var kind = String(obj.kind);
                if (kind !== 'class') {
                    throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
                }
                this.disallowProperty(obj, 'key', 'A class descriptor');
                this.disallowProperty(obj, 'placement', 'A class descriptor');
                this.disallowProperty(obj, 'descriptor', 'A class descriptor');
                this.disallowProperty(obj, 'initializer', 'A class descriptor');
                this.disallowProperty(obj, 'extras', 'A class descriptor');
                var finisher = _optionalCallableProperty(obj, 'finisher');
                var elements = this.toElementDescriptors(obj.elements);
                return {
                    elements: elements,
                    finisher: finisher
                };
            },
            runClassFinishers: function(constructor, finishers) {
                for(var i = 0; i < finishers.length; i++){
                    var newConstructor = (0, finishers[i])(constructor);
                    if (newConstructor !== undefined) {
                        if (typeof newConstructor !== 'function') {
                            throw new TypeError('Finishers must return a constructor.');
                        }
                        constructor = newConstructor;
                    }
                }
                return constructor;
            },
            disallowProperty: function(obj, name, objectType) {
                if (obj[name] !== undefined) {
                    throw new TypeError(objectType + " can't have a ." + name + ' property.');
                }
            }
        };
        return api;
    }
    function _createElementDescriptor(def) {
        var key = _toPropertyKey(def.key);
        var descriptor;
        if (def.kind === 'method') {
            descriptor = {
                value: def.value,
                writable: true,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === 'get') {
            descriptor = {
                get: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === 'set') {
            descriptor = {
                set: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === 'field') {
            descriptor = {
                configurable: true,
                writable: true,
                enumerable: true
            };
        }
        var element = {
            kind: def.kind === 'field' ? 'field' : 'method',
            key: key,
            placement: def.static ? 'static' : def.kind === 'field' ? 'own' : 'prototype',
            descriptor: descriptor
        };
        if (def.decorators) element.decorators = def.decorators;
        if (def.kind === 'field') element.initializer = def.value;
        return element;
    }
    function _coalesceGetterSetter(element, other) {
        if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
        } else {
            other.descriptor.set = element.descriptor.set;
        }
    }
    function _coalesceClassElements(elements) {
        var newElements = [];
        var isSameElement = function(other) {
            return other.kind === 'method' && other.key === element.key && other.placement === element.placement;
        };
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var other;
            if (element.kind === 'method' && (other = newElements.find(isSameElement))) {
                if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
                    if (_hasDecorators(element) || _hasDecorators(other)) {
                        throw new ReferenceError('Duplicated methods (' + element.key + ") can't be decorated.");
                    }
                    other.descriptor = element.descriptor;
                } else {
                    if (_hasDecorators(element)) {
                        if (_hasDecorators(other)) {
                            throw new ReferenceError("Decorators can't be placed on different accessors with for " + 'the same property (' + element.key + ').');
                        }
                        other.decorators = element.decorators;
                    }
                    _coalesceGetterSetter(element, other);
                }
            } else {
                newElements.push(element);
            }
        }
        return newElements;
    }
    function _hasDecorators(element) {
        return element.decorators && element.decorators.length;
    }
    function _isDataDescriptor(desc) {
        return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
    }
    function _optionalCallableProperty(obj, name) {
        var value = obj[name];
        if (value !== undefined && typeof value !== 'function') {
            throw new TypeError("Expected '" + name + "' to be a function");
        }
        return value;
    }
    function _classPrivateMethodGet(receiver, privateSet, fn) {
        if (!privateSet.has(receiver)) {
            throw new TypeError('attempted to get private field on non-instance');
        }
        return fn;
    }
    function _classPrivateMethodSet() {
        throw new TypeError('attempted to reassign private method');
    }
    function _wrapRegExp(re, groups) {
        _wrapRegExp = function(re, groups) {
            return new BabelRegExp(re, groups);
        };
        var _RegExp = _wrapNativeSuper(RegExp);
        var _super = RegExp.prototype;
        var _groups = new WeakMap();
        function BabelRegExp(re, groups) {
            var _this = _RegExp.call(this, re);
            _groups.set(_this, groups);
            return _this;
        }
        _inherits(BabelRegExp, _RegExp);
        BabelRegExp.prototype.exec = function(str) {
            var result = _super.exec.call(this, str);
            if (result) result.groups = buildGroups(result, this);
            return result;
        };
        BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
            if (typeof substitution === 'string') {
                var groups = _groups.get(this);
                return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                    return '$' + groups[name];
                }));
            } else if (typeof substitution === 'function') {
                var _this = this;
                return _super[Symbol.replace].call(this, str, function() {
                    var args = [];
                    args.push.apply(args, arguments);
                    if (typeof args[args.length - 1] !== 'object') {
                        args.push(buildGroups(args, _this));
                    }
                    return substitution.apply(this, args);
                });
            } else {
                return _super[Symbol.replace].call(this, str, substitution);
            }
        };
        function buildGroups(result, re) {
            var g = _groups.get(re);
            return Object.keys(g).reduce(function(groups, name) {
                groups[name] = result[g[name]];
                return groups;
            }, Object.create(null));
        }
        return _wrapRegExp.apply(this, arguments);
    }
    var arrayRemove = function arrayRemove(arr, index) {
        return arr.splice(index, 1);
    };
    var run = function run(cb, sync) {
        if (sync) {
            cb();
        } else if (document.hidden) {
            Promise.resolve(1).then(cb);
        } else {
            setTimeout(cb, 0);
        }
    };
    var on = function on() {
        var listeners = [];
        var off = function off(event, cb) {
            arrayRemove(listeners, listeners.findIndex(function(listener) {
                return listener.event === event && (listener.cb === cb || !cb);
            }));
        };
        var _fire = function fire(event, args, sync) {
            listeners.filter(function(listener) {
                return listener.event === event;
            }).map(function(listener) {
                return listener.cb;
            }).forEach(function(cb) {
                return run(function() {
                    return cb.apply(void 0, _toConsumableArray(args));
                }, sync);
            });
        };
        return {
            fireSync: function fireSync(event) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                _fire(event, args, true);
            },
            fire: function fire(event) {
                for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                    args[_key2 - 1] = arguments[_key2];
                }
                _fire(event, args, false);
            },
            on: function on(event, cb) {
                listeners.push({
                    event: event,
                    cb: cb
                });
            },
            onOnce: function onOnce(event, _cb) {
                listeners.push({
                    event: event,
                    cb: function cb() {
                        off(event, _cb);
                        _cb.apply(void 0, arguments);
                    }
                });
            },
            off: off
        };
    };
    var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(src, target, excluded) {
        Object.getOwnPropertyNames(src).filter(function(property) {
            return !excluded.includes(property);
        }).forEach(function(key) {
            return Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(src, key));
        });
    };
    var PRIVATE = [
        'fire',
        'process',
        'revert',
        'load',
        'on',
        'off',
        'onOnce',
        'retryLoad',
        'extend',
        'archive',
        'archived',
        'release',
        'released',
        'requestProcessing',
        'freeze'
    ];
    var createItemAPI = function createItemAPI(item) {
        var api = {};
        copyObjectPropertiesToObject(item, api, PRIVATE);
        return api;
    };
    var removeReleasedItems = function removeReleasedItems(items) {
        items.forEach(function(item, index) {
            if (item.released) {
                arrayRemove(items, index);
            }
        });
    };
    var ItemStatus = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8
    };
    var FileOrigin = {
        INPUT: 1,
        LIMBO: 2,
        LOCAL: 3
    };
    var getNonNumeric = function getNonNumeric(str) {
        return /[^0-9]+/.exec(str);
    };
    var getDecimalSeparator = function getDecimalSeparator() {
        return getNonNumeric(1.1.toLocaleString())[0];
    };
    var getThousandsSeparator = function getThousandsSeparator() {
        // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
        // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
        var decimalSeparator = getDecimalSeparator();
        var thousandsStringWithSeparator = 1000.0.toLocaleString();
        var thousandsStringWithoutSeparator = 1000.0.toString();
        if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
            return getNonNumeric(thousandsStringWithSeparator)[0];
        }
        return decimalSeparator === '.' ? ',' : '.';
    };
    var Type = {
        BOOLEAN: 'boolean',
        INT: 'int',
        NUMBER: 'number',
        STRING: 'string',
        ARRAY: 'array',
        OBJECT: 'object',
        FUNCTION: 'function',
        ACTION: 'action',
        SERVER_API: 'serverapi',
        REGEX: 'regex'
    };
    // all registered filters
    var filters = [];
    // loops over matching filters and passes options to each filter, returning the mapped results
    var applyFilterChain = function applyFilterChain(key, value, utils) {
        return new Promise(function(resolve, reject) {
            // find matching filters for this key
            var matchingFilters = filters.filter(function(f) {
                return f.key === key;
            }).map(function(f) {
                return f.cb;
            });
            // resolve now
            if (matchingFilters.length === 0) {
                resolve(value);
                return;
            }
            // first filter to kick things of
            var initialFilter = matchingFilters.shift();
            // chain filters
            matchingFilters.reduce(// loop over promises passing value to next promise
            function(current, next) {
                return current.then(function(value) {
                    return next(value, utils);
                });
            }, // call initial filter, will return a promise
            initialFilter(value, utils)).then(function(value) {
                return resolve(value);
            }).catch(function(error) {
                return reject(error);
            });
        });
    };
    var applyFilters = function applyFilters(key, value, utils) {
        return filters.filter(function(f) {
            return f.key === key;
        }).map(function(f) {
            return f.cb(value, utils);
        });
    };
    // adds a new filter to the list
    var addFilter = function addFilter(key, cb) {
        return filters.push({
            key: key,
            cb: cb
        });
    };
    var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
        return Object.assign(defaultOptions, additionalOptions);
    };
    var getOptions = function getOptions() {
        return Object.assign({}, defaultOptions);
    };
    var setOptions = function setOptions(opts) {
        forin(opts, function(key, value) {
            // key does not exist, so this option cannot be set
            if (!defaultOptions[key]) {
                return;
            }
            defaultOptions[key][0] = getValueByType(value, defaultOptions[key][0], defaultOptions[key][1]);
        });
    };
    // default options on app
    var defaultOptions = {
        // the id to add to the root element
        id: [
            null,
            Type.STRING
        ],
        // input field name to use
        name: [
            'filepond',
            Type.STRING
        ],
        // disable the field
        disabled: [
            false,
            Type.BOOLEAN
        ],
        // classname to put on wrapper
        className: [
            null,
            Type.STRING
        ],
        // is the field required
        required: [
            false,
            Type.BOOLEAN
        ],
        // Allow media capture when value is set
        captureMethod: [
            null,
            Type.STRING
        ],
        // - "camera", "microphone" or "camcorder",
        // - Does not work with multiple on apple devices
        // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"
        // sync `acceptedFileTypes` property with `accept` attribute
        allowSyncAcceptAttribute: [
            true,
            Type.BOOLEAN
        ],
        // Feature toggles
        allowDrop: [
            true,
            Type.BOOLEAN
        ],
        allowBrowse: [
            true,
            Type.BOOLEAN
        ],
        allowPaste: [
            true,
            Type.BOOLEAN
        ],
        allowMultiple: [
            false,
            Type.BOOLEAN
        ],
        allowReplace: [
            true,
            Type.BOOLEAN
        ],
        allowRevert: [
            true,
            Type.BOOLEAN
        ],
        allowRemove: [
            true,
            Type.BOOLEAN
        ],
        allowProcess: [
            true,
            Type.BOOLEAN
        ],
        allowReorder: [
            false,
            Type.BOOLEAN
        ],
        allowDirectoriesOnly: [
            false,
            Type.BOOLEAN
        ],
        // Try store file if `server` not set
        storeAsFile: [
            false,
            Type.BOOLEAN
        ],
        // Revert mode
        forceRevert: [
            false,
            Type.BOOLEAN
        ],
        // Input requirements
        maxFiles: [
            null,
            Type.INT
        ],
        checkValidity: [
            false,
            Type.BOOLEAN
        ],
        // Where to put file
        itemInsertLocationFreedom: [
            true,
            Type.BOOLEAN
        ],
        itemInsertLocation: [
            'before',
            Type.STRING
        ],
        itemInsertInterval: [
            75,
            Type.INT
        ],
        // Drag 'n Drop related
        dropOnPage: [
            false,
            Type.BOOLEAN
        ],
        dropOnElement: [
            true,
            Type.BOOLEAN
        ],
        dropValidation: [
            false,
            Type.BOOLEAN
        ],
        ignoredFiles: [
            [
                '.ds_store',
                'thumbs.db',
                'desktop.ini'
            ],
            Type.ARRAY
        ],
        // Upload related
        instantUpload: [
            true,
            Type.BOOLEAN
        ],
        maxParallelUploads: [
            2,
            Type.INT
        ],
        allowMinimumUploadDuration: [
            true,
            Type.BOOLEAN
        ],
        // Chunks
        chunkUploads: [
            false,
            Type.BOOLEAN
        ],
        chunkForce: [
            false,
            Type.BOOLEAN
        ],
        chunkSize: [
            5000000,
            Type.INT
        ],
        chunkRetryDelays: [
            [
                500,
                1000,
                3000
            ],
            Type.ARRAY
        ],
        // The server api end points to use for uploading (see docs)
        server: [
            null,
            Type.SERVER_API
        ],
        // File size calculations, can set to 1024, this is only used for display, properties use file size base 1000
        fileSizeBase: [
            1000,
            Type.INT
        ],
        // Labels and status messages
        labelFileSizeBytes: [
            'bytes',
            Type.STRING
        ],
        labelFileSizeKilobytes: [
            'KB',
            Type.STRING
        ],
        labelFileSizeMegabytes: [
            'MB',
            Type.STRING
        ],
        labelFileSizeGigabytes: [
            'GB',
            Type.STRING
        ],
        labelDecimalSeparator: [
            getDecimalSeparator(),
            Type.STRING
        ],
        labelThousandsSeparator: [
            getThousandsSeparator(),
            Type.STRING
        ],
        labelIdle: [
            'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
            Type.STRING
        ],
        labelInvalidField: [
            'Field contains invalid files',
            Type.STRING
        ],
        labelFileWaitingForSize: [
            'Waiting for size',
            Type.STRING
        ],
        labelFileSizeNotAvailable: [
            'Size not available',
            Type.STRING
        ],
        labelFileCountSingular: [
            'file in list',
            Type.STRING
        ],
        labelFileCountPlural: [
            'files in list',
            Type.STRING
        ],
        labelFileLoading: [
            'Loading',
            Type.STRING
        ],
        labelFileAdded: [
            'Added',
            Type.STRING
        ],
        labelFileLoadError: [
            'Error during load',
            Type.STRING
        ],
        labelFileRemoved: [
            'Removed',
            Type.STRING
        ],
        labelFileRemoveError: [
            'Error during remove',
            Type.STRING
        ],
        labelFileProcessing: [
            'Uploading',
            Type.STRING
        ],
        labelFileProcessingComplete: [
            'Upload complete',
            Type.STRING
        ],
        labelFileProcessingAborted: [
            'Upload cancelled',
            Type.STRING
        ],
        labelFileProcessingError: [
            'Error during upload',
            Type.STRING
        ],
        labelFileProcessingRevertError: [
            'Error during revert',
            Type.STRING
        ],
        labelTapToCancel: [
            'tap to cancel',
            Type.STRING
        ],
        labelTapToRetry: [
            'tap to retry',
            Type.STRING
        ],
        labelTapToUndo: [
            'tap to undo',
            Type.STRING
        ],
        labelButtonRemoveItem: [
            'Remove',
            Type.STRING
        ],
        labelButtonAbortItemLoad: [
            'Abort',
            Type.STRING
        ],
        labelButtonRetryItemLoad: [
            'Retry',
            Type.STRING
        ],
        labelButtonAbortItemProcessing: [
            'Cancel',
            Type.STRING
        ],
        labelButtonUndoItemProcessing: [
            'Undo',
            Type.STRING
        ],
        labelButtonRetryItemProcessing: [
            'Retry',
            Type.STRING
        ],
        labelButtonProcessItem: [
            'Upload',
            Type.STRING
        ],
        // make sure width and height plus viewpox are even numbers so icons are nicely centered
        iconRemove: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING
        ],
        iconProcess: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
            Type.STRING
        ],
        iconRetry: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING
        ],
        iconUndo: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING
        ],
        iconDone: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING
        ],
        // event handlers
        oninit: [
            null,
            Type.FUNCTION
        ],
        onwarning: [
            null,
            Type.FUNCTION
        ],
        onerror: [
            null,
            Type.FUNCTION
        ],
        onactivatefile: [
            null,
            Type.FUNCTION
        ],
        oninitfile: [
            null,
            Type.FUNCTION
        ],
        onaddfilestart: [
            null,
            Type.FUNCTION
        ],
        onaddfileprogress: [
            null,
            Type.FUNCTION
        ],
        onaddfile: [
            null,
            Type.FUNCTION
        ],
        onprocessfilestart: [
            null,
            Type.FUNCTION
        ],
        onprocessfileprogress: [
            null,
            Type.FUNCTION
        ],
        onprocessfileabort: [
            null,
            Type.FUNCTION
        ],
        onprocessfilerevert: [
            null,
            Type.FUNCTION
        ],
        onprocessfile: [
            null,
            Type.FUNCTION
        ],
        onprocessfiles: [
            null,
            Type.FUNCTION
        ],
        onremovefile: [
            null,
            Type.FUNCTION
        ],
        onpreparefile: [
            null,
            Type.FUNCTION
        ],
        onupdatefiles: [
            null,
            Type.FUNCTION
        ],
        onreorderfiles: [
            null,
            Type.FUNCTION
        ],
        // hooks
        beforeDropFile: [
            null,
            Type.FUNCTION
        ],
        beforeAddFile: [
            null,
            Type.FUNCTION
        ],
        beforeRemoveFile: [
            null,
            Type.FUNCTION
        ],
        beforePrepareFile: [
            null,
            Type.FUNCTION
        ],
        // styles
        stylePanelLayout: [
            null,
            Type.STRING
        ],
        stylePanelAspectRatio: [
            null,
            Type.STRING
        ],
        styleItemPanelAspectRatio: [
            null,
            Type.STRING
        ],
        styleButtonRemoveItemPosition: [
            'left',
            Type.STRING
        ],
        styleButtonProcessItemPosition: [
            'right',
            Type.STRING
        ],
        styleLoadIndicatorPosition: [
            'right',
            Type.STRING
        ],
        styleProgressIndicatorPosition: [
            'right',
            Type.STRING
        ],
        styleButtonRemoveItemAlign: [
            false,
            Type.BOOLEAN
        ],
        // custom initial files array
        files: [
            [],
            Type.ARRAY
        ],
        // show support by displaying credits
        credits: [
            [
                'https://pqina.nl/',
                'Powered by PQINA'
            ],
            Type.ARRAY
        ]
    };
    var getItemByQuery = function getItemByQuery(items, query) {
        // just return first index
        if (isEmpty(query)) {
            return items[0] || null;
        }
        // query is index
        if (isInt(query)) {
            return items[query] || null;
        }
        // if query is item, get the id
        if (typeof query === 'object') {
            query = query.id;
        }
        // assume query is a string and return item by id
        return items.find(function(item) {
            return item.id === query;
        }) || null;
    };
    var getNumericAspectRatioFromString = function getNumericAspectRatioFromString(aspectRatio) {
        if (isEmpty(aspectRatio)) {
            return aspectRatio;
        }
        if (/:/.test(aspectRatio)) {
            var parts = aspectRatio.split(':');
            return parts[1] / parts[0];
        }
        return parseFloat(aspectRatio);
    };
    var getActiveItems = function getActiveItems(items) {
        return items.filter(function(item) {
            return !item.archived;
        });
    };
    var Status = {
        EMPTY: 0,
        IDLE: 1,
        ERROR: 2,
        BUSY: 3,
        READY: 4
    };
    var res = null;
    var canUpdateFileInput = function canUpdateFileInput() {
        if (res === null) {
            try {
                var dataTransfer = new DataTransfer();
                dataTransfer.items.add(new File([
                    'hello world'
                ], 'This_Works.txt'));
                var el = document.createElement('input');
                el.setAttribute('type', 'file');
                el.files = dataTransfer.files;
                res = el.files.length === 1;
            } catch (err) {
                res = false;
            }
        }
        return res;
    };
    var ITEM_ERROR = [
        ItemStatus.LOAD_ERROR,
        ItemStatus.PROCESSING_ERROR,
        ItemStatus.PROCESSING_REVERT_ERROR
    ];
    var ITEM_BUSY = [
        ItemStatus.LOADING,
        ItemStatus.PROCESSING,
        ItemStatus.PROCESSING_QUEUED,
        ItemStatus.INIT
    ];
    var ITEM_READY = [
        ItemStatus.PROCESSING_COMPLETE
    ];
    var isItemInErrorState = function isItemInErrorState(item) {
        return ITEM_ERROR.includes(item.status);
    };
    var isItemInBusyState = function isItemInBusyState(item) {
        return ITEM_BUSY.includes(item.status);
    };
    var isItemInReadyState = function isItemInReadyState(item) {
        return ITEM_READY.includes(item.status);
    };
    var isAsync = function isAsync(state) {
        return isObject(state.options.server) && (isObject(state.options.server.process) || isFunction(state.options.server.process));
    };
    var queries = function queries(state) {
        return {
            GET_STATUS: function GET_STATUS() {
                var items = getActiveItems(state.items);
                var EMPTY = Status.EMPTY, ERROR = Status.ERROR, BUSY = Status.BUSY, IDLE = Status.IDLE, READY = Status.READY;
                if (items.length === 0) return EMPTY;
                if (items.some(isItemInErrorState)) return ERROR;
                if (items.some(isItemInBusyState)) return BUSY;
                if (items.some(isItemInReadyState)) return READY;
                return IDLE;
            },
            GET_ITEM: function GET_ITEM(query) {
                return getItemByQuery(state.items, query);
            },
            GET_ACTIVE_ITEM: function GET_ACTIVE_ITEM(query) {
                return getItemByQuery(getActiveItems(state.items), query);
            },
            GET_ACTIVE_ITEMS: function GET_ACTIVE_ITEMS() {
                return getActiveItems(state.items);
            },
            GET_ITEMS: function GET_ITEMS() {
                return state.items;
            },
            GET_ITEM_NAME: function GET_ITEM_NAME(query) {
                var item = getItemByQuery(state.items, query);
                return item ? item.filename : null;
            },
            GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
                var item = getItemByQuery(state.items, query);
                return item ? item.fileSize : null;
            },
            GET_STYLES: function GET_STYLES() {
                return Object.keys(state.options).filter(function(key) {
                    return /^style/.test(key);
                }).map(function(option1) {
                    return {
                        name: option1,
                        value: state.options[option1]
                    };
                });
            },
            GET_PANEL_ASPECT_RATIO: function GET_PANEL_ASPECT_RATIO() {
                var isShapeCircle = /circle/.test(state.options.stylePanelLayout);
                var aspectRatio = isShapeCircle ? 1 : getNumericAspectRatioFromString(state.options.stylePanelAspectRatio);
                return aspectRatio;
            },
            GET_ITEM_PANEL_ASPECT_RATIO: function GET_ITEM_PANEL_ASPECT_RATIO() {
                return state.options.styleItemPanelAspectRatio;
            },
            GET_ITEMS_BY_STATUS: function GET_ITEMS_BY_STATUS(status) {
                return getActiveItems(state.items).filter(function(item) {
                    return item.status === status;
                });
            },
            GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
                return getActiveItems(state.items).length;
            },
            SHOULD_UPDATE_FILE_INPUT: function SHOULD_UPDATE_FILE_INPUT() {
                return state.options.storeAsFile && canUpdateFileInput() && !isAsync(state);
            },
            IS_ASYNC: function IS_ASYNC() {
                return isAsync(state);
            },
            GET_FILE_SIZE_LABELS: function GET_FILE_SIZE_LABELS(query) {
                return {
                    labelBytes: query('GET_LABEL_FILE_SIZE_BYTES') || undefined,
                    labelKilobytes: query('GET_LABEL_FILE_SIZE_KILOBYTES') || undefined,
                    labelMegabytes: query('GET_LABEL_FILE_SIZE_MEGABYTES') || undefined,
                    labelGigabytes: query('GET_LABEL_FILE_SIZE_GIGABYTES') || undefined
                };
            }
        };
    };
    var hasRoomForItem = function hasRoomForItem(state) {
        var count = getActiveItems(state.items).length;
        // if cannot have multiple items, to add one item it should currently not contain items
        if (!state.options.allowMultiple) {
            return count === 0;
        }
        // if allows multiple items, we check if a max item count has been set, if not, there's no limit
        var maxFileCount = state.options.maxFiles;
        if (maxFileCount === null) {
            return true;
        }
        // we check if the current count is smaller than the max count, if so, another file can still be added
        if (count < maxFileCount) {
            return true;
        }
        // no more room for another file
        return false;
    };
    var limit = function limit(value, min, max) {
        return Math.max(Math.min(max, value), min);
    };
    var arrayInsert = function arrayInsert(arr, index, item) {
        return arr.splice(index, 0, item);
    };
    var insertItem = function insertItem(items, item, index) {
        if (isEmpty(item)) {
            return null;
        }
        // if index is undefined, append
        if (typeof index === 'undefined') {
            items.push(item);
            return item;
        }
        // limit the index to the size of the items array
        index = limit(index, 0, items.length);
        // add item to array
        arrayInsert(items, index, item);
        // expose
        return item;
    };
    var isBase64DataURI = function isBase64DataURI(str) {
        return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(str);
    };
    var getFilenameFromURL = function getFilenameFromURL(url) {
        return ('' + url).split('/').pop().split('?').shift();
    };
    var getExtensionFromFilename = function getExtensionFromFilename(name) {
        return name.split('.').pop();
    };
    var guesstimateExtension = function guesstimateExtension(type) {
        // if no extension supplied, exit here
        if (typeof type !== 'string') {
            return '';
        }
        // get subtype
        var subtype = type.split('/').pop();
        // is svg subtype
        if (/svg/.test(subtype)) {
            return 'svg';
        }
        if (/zip|compressed/.test(subtype)) {
            return 'zip';
        }
        if (/plain/.test(subtype)) {
            return 'txt';
        }
        if (/msword/.test(subtype)) {
            return 'doc';
        }
        // if is valid subtype
        if (/[a-z]+/.test(subtype)) {
            // always use jpg extension
            if (subtype === 'jpeg') {
                return 'jpg';
            }
            // return subtype
            return subtype;
        }
        return '';
    };
    var leftPad = function leftPad(value) {
        var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return (padding + value).slice(-padding.length);
    };
    var getDateString = function getDateString() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        return date.getFullYear() + '-' + leftPad(date.getMonth() + 1, '00') + '-' + leftPad(date.getDate(), '00') + '_' + leftPad(date.getHours(), '00') + '-' + leftPad(date.getMinutes(), '00') + '-' + leftPad(date.getSeconds(), '00');
    };
    var getFileFromBlob = function getFileFromBlob(blob, filename) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var extension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var file = typeof type === 'string' ? blob.slice(0, blob.size, type) : blob.slice(0, blob.size, blob.type);
        file.lastModifiedDate = new Date();
        // copy relative path
        if (blob._relativePath) file._relativePath = blob._relativePath;
        // if blob has name property, use as filename if no filename supplied
        if (!isString(filename)) {
            filename = getDateString();
        }
        // if filename supplied but no extension and filename has extension
        if (filename && extension === null && getExtensionFromFilename(filename)) {
            file.name = filename;
        } else {
            extension = extension || guesstimateExtension(file.type);
            file.name = filename + (extension ? '.' + extension : '');
        }
        return file;
    };
    var getBlobBuilder = function getBlobBuilder() {
        return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
    };
    var createBlob = function createBlob(arrayBuffer, mimeType) {
        var BB = getBlobBuilder();
        if (BB) {
            var bb = new BB();
            bb.append(arrayBuffer);
            return bb.getBlob(mimeType);
        }
        return new Blob([
            arrayBuffer
        ], {
            type: mimeType
        });
    };
    var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(byteString, mimeType) {
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for(var i = 0; i < byteString.length; i++){
            ia[i] = byteString.charCodeAt(i);
        }
        return createBlob(ab, mimeType);
    };
    var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(dataURI) {
        return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
    };
    var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(dataURI) {
        // get data part of string (remove data:image/jpeg...,)
        var data = dataURI.split(',')[1];
        // remove any whitespace as that causes InvalidCharacterError in IE
        return data.replace(/\s/g, '');
    };
    var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(dataURI) {
        return atob(getBase64DataFromBase64DataURI(dataURI));
    };
    var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
        var mimeType = getMimeTypeFromBase64DataURI(dataURI);
        var byteString = getByteStringFromBase64DataURI(dataURI);
        return getBlobFromByteStringWithMimeType(byteString, mimeType);
    };
    var getFileFromBase64DataURI = function getFileFromBase64DataURI(dataURI, filename, extension) {
        return getFileFromBlob(getBlobFromBase64DataURI(dataURI), filename, null, extension);
    };
    var getFileNameFromHeader = function getFileNameFromHeader(header) {
        // test if is content disposition header, if not exit
        if (!/^content-disposition:/i.test(header)) return null;
        // get filename parts
        var matches = header.split(/filename=|filename\*=.+''/).splice(1).map(function(name) {
            return name.trim().replace(/^["']|[;"']{0,2}$/g, '');
        }).filter(function(name) {
            return name.length;
        });
        return matches.length ? decodeURI(matches[matches.length - 1]) : null;
    };
    var getFileSizeFromHeader = function getFileSizeFromHeader(header) {
        if (/content-length:/i.test(header)) {
            var size = header.match(/[0-9]+/)[0];
            return size ? parseInt(size, 10) : null;
        }
        return null;
    };
    var getTranfserIdFromHeader = function getTranfserIdFromHeader(header) {
        if (/x-content-transfer-id:/i.test(header)) {
            var id = (header.split(':')[1] || '').trim();
            return id || null;
        }
        return null;
    };
    var getFileInfoFromHeaders = function getFileInfoFromHeaders(headers) {
        var info = {
            source: null,
            name: null,
            size: null
        };
        var rows = headers.split('\n');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for(var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var header = _step.value;
                var name = getFileNameFromHeader(header);
                if (name) {
                    info.name = name;
                    continue;
                }
                var size = getFileSizeFromHeader(header);
                if (size) {
                    info.size = size;
                    continue;
                }
                var source = getTranfserIdFromHeader(header);
                if (source) {
                    info.source = source;
                    continue;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return info;
    };
    var createFileLoader = function createFileLoader(fetchFn) {
        var state = {
            source: null,
            complete: false,
            progress: 0,
            size: null,
            timestamp: null,
            duration: 0,
            request: null
        };
        var getProgress = function getProgress() {
            return state.progress;
        };
        var abort = function abort() {
            if (state.request && state.request.abort) {
                state.request.abort();
            }
        };
        // load source
        var load = function load() {
            // get quick reference
            var source = state.source;
            api.fire('init', source);
            // Load Files
            if (source instanceof File) {
                api.fire('load', source);
            } else if (source instanceof Blob) {
                // Load blobs, set default name to current date
                api.fire('load', getFileFromBlob(source, source.name));
            } else if (isBase64DataURI(source)) {
                // Load base 64, set default name to current date
                api.fire('load', getFileFromBase64DataURI(source));
            } else {
                // Deal as if is external URL, let's load it!
                loadURL(source);
            }
        };
        // loads a url
        var loadURL = function loadURL(url) {
            // is remote url and no fetch method supplied
            if (!fetchFn) {
                api.fire('error', {
                    type: 'error',
                    body: "Can't load URL",
                    code: 400
                });
                return;
            }
            // set request start
            state.timestamp = Date.now();
            // load file
            state.request = fetchFn(url, function(response) {
                // update duration
                state.duration = Date.now() - state.timestamp;
                // done!
                state.complete = true;
                // turn blob response into a file
                if (response instanceof Blob) {
                    response = getFileFromBlob(response, response.name || getFilenameFromURL(url));
                }
                api.fire('load', // if has received blob, we go with blob, if no response, we return null
                response instanceof Blob ? response : response ? response.body : null);
            }, function(error) {
                api.fire('error', typeof error === 'string' ? {
                    type: 'error',
                    code: 0,
                    body: error
                } : error);
            }, function(computable, current, total) {
                // collected some meta data already
                if (total) {
                    state.size = total;
                }
                // update duration
                state.duration = Date.now() - state.timestamp;
                // if we can't compute progress, we're not going to fire progress events
                if (!computable) {
                    state.progress = null;
                    return;
                }
                // update progress percentage
                state.progress = current / total;
                // expose
                api.fire('progress', state.progress);
            }, function() {
                api.fire('abort');
            }, function(response) {
                var fileinfo = getFileInfoFromHeaders(typeof response === 'string' ? response : response.headers);
                api.fire('meta', {
                    size: state.size || fileinfo.size,
                    filename: fileinfo.name,
                    source: fileinfo.source
                });
            });
        };
        var api = Object.assign({}, on(), {
            setSource: function setSource(source) {
                return state.source = source;
            },
            getProgress: getProgress,
            abort: abort,
            load: load
        });
        return api;
    };
    var isGet = function isGet(method) {
        return /GET|HEAD/.test(method);
    };
    var sendRequest = function sendRequest(data, url, options) {
        var api = {
            onheaders: function onheaders() {},
            onprogress: function onprogress() {},
            onload: function onload() {},
            ontimeout: function ontimeout() {},
            onerror: function onerror() {},
            onabort: function onabort() {},
            abort: function abort() {
                aborted = true;
                xhr.abort();
            }
        };
        // timeout identifier, only used when timeout is defined
        var aborted = false;
        var headersReceived = false;
        // set default options
        options = Object.assign({
            method: 'POST',
            headers: {},
            withCredentials: false
        }, options);
        // encode url
        url = encodeURI(url);
        // if method is GET, add any received data to url
        if (isGet(options.method) && data) {
            url = '' + url + encodeURIComponent(typeof data === 'string' ? data : JSON.stringify(data));
        }
        // create request
        var xhr = new XMLHttpRequest();
        // progress of load
        var process = isGet(options.method) ? xhr : xhr.upload;
        process.onprogress = function(e) {
            // no progress event when aborted ( onprogress is called once after abort() )
            if (aborted) {
                return;
            }
            api.onprogress(e.lengthComputable, e.loaded, e.total);
        };
        // tries to get header info to the app as fast as possible
        xhr.onreadystatechange = function() {
            // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
            if (xhr.readyState < 2) {
                return;
            }
            // no server response
            if (xhr.readyState === 4 && xhr.status === 0) {
                return;
            }
            if (headersReceived) {
                return;
            }
            headersReceived = true;
            // we've probably received some useful data in response headers
            api.onheaders(xhr);
        };
        // load successful
        xhr.onload = function() {
            // is classified as valid response
            if (xhr.status >= 200 && xhr.status < 300) {
                api.onload(xhr);
            } else {
                api.onerror(xhr);
            }
        };
        // error during load
        xhr.onerror = function() {
            return api.onerror(xhr);
        };
        // request aborted
        xhr.onabort = function() {
            aborted = true;
            api.onabort();
        };
        // request timeout
        xhr.ontimeout = function() {
            return api.ontimeout(xhr);
        };
        // open up open up!
        xhr.open(options.method, url, true);
        // set timeout if defined (do it after open so IE11 plays ball)
        if (isInt(options.timeout)) {
            xhr.timeout = options.timeout;
        }
        // add headers
        Object.keys(options.headers).forEach(function(key) {
            var value = unescape(encodeURIComponent(options.headers[key]));
            xhr.setRequestHeader(key, value);
        });
        // set type of response
        if (options.responseType) {
            xhr.responseType = options.responseType;
        }
        // set credentials
        if (options.withCredentials) {
            xhr.withCredentials = true;
        }
        // let's send our data
        xhr.send(data);
        return api;
    };
    var createResponse = function createResponse(type, code, body, headers) {
        return {
            type: type,
            code: code,
            body: body,
            headers: headers
        };
    };
    var createTimeoutResponse = function createTimeoutResponse(cb) {
        return function(xhr) {
            cb(createResponse('error', 0, 'Timeout', xhr.getAllResponseHeaders()));
        };
    };
    var hasQS = function hasQS(str) {
        return /\?/.test(str);
    };
    var buildURL = function buildURL() {
        var url = '';
        for(var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++){
            parts[_key] = arguments[_key];
        }
        parts.forEach(function(part) {
            url += hasQS(url) && hasQS(part) ? part.replace(/\?/, '&') : part;
        });
        return url;
    };
    var createFetchFunction = function createFetchFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        // custom handler (should also handle file, load, error, progress and abort)
        if (typeof action === 'function') {
            return action;
        }
        // no action supplied
        if (!action || !isString(action.url)) {
            return null;
        }
        // set onload hanlder
        var onload = action.onload || function(res) {
            return res;
        };
        var onerror = action.onerror || function(res) {
            return null;
        };
        // internal handler
        return function(url, load, error, progress, abort, headers) {
            // do local or remote request based on if the url is external
            var request = sendRequest(url, buildURL(apiUrl, action.url), Object.assign({}, action, {
                responseType: 'blob'
            }));
            request.onload = function(xhr) {
                // get headers
                var headers = xhr.getAllResponseHeaders();
                // get filename
                var filename = getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);
                // create response
                load(createResponse('load', xhr.status, action.method === 'HEAD' ? null : getFileFromBlob(onload(xhr.response), filename), headers));
            };
            request.onerror = function(xhr) {
                error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
            };
            request.onheaders = function(xhr) {
                headers(createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders()));
            };
            request.ontimeout = createTimeoutResponse(error);
            request.onprogress = progress;
            request.onabort = abort;
            // should return request
            return request;
        };
    };
    var ChunkStatus = {
        QUEUED: 0,
        COMPLETE: 1,
        PROCESSING: 2,
        ERROR: 3,
        WAITING: 4
    };
    /*
                                                       function signature:
                                                         (file, metadata, load, error, progress, abort, transfer, options) => {
                                                           return {
                                                           abort:() => {}
                                                         }
                                                       }
                                                       */ // apiUrl, action, name, file, metadata, load, error, progress, abort, transfer, options
    var processFileChunked = function processFileChunked(apiUrl, action, name, file, metadata, load, error, progress, abort, transfer, options) {
        // all chunks
        var chunks = [];
        var chunkTransferId = options.chunkTransferId, chunkServer = options.chunkServer, chunkSize = options.chunkSize, chunkRetryDelays = options.chunkRetryDelays;
        // default state
        var state = {
            serverId: chunkTransferId,
            aborted: false
        };
        // set onload handlers
        var ondata = action.ondata || function(fd) {
            return fd;
        };
        var onload = action.onload || function(xhr, method) {
            return method === 'HEAD' ? xhr.getResponseHeader('Upload-Offset') : xhr.response;
        };
        var onerror = action.onerror || function(res) {
            return null;
        };
        // create server hook
        var requestTransferId = function requestTransferId(cb) {
            var formData = new FormData();
            // add metadata under same name
            if (isObject(metadata)) formData.append(name, JSON.stringify(metadata));
            var headers = typeof action.headers === 'function' ? action.headers(file, metadata) : Object.assign({}, action.headers, {
                'Upload-Length': file.size
            });
            var requestParams = Object.assign({}, action, {
                headers: headers
            });
            // send request object
            var request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
            request.onload = function(xhr) {
                return cb(onload(xhr, requestParams.method));
            };
            request.onerror = function(xhr) {
                return error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
            };
            request.ontimeout = createTimeoutResponse(error);
        };
        var requestTransferOffset = function requestTransferOffset(cb) {
            var requestUrl = buildURL(apiUrl, chunkServer.url, state.serverId);
            var headers = typeof action.headers === 'function' ? action.headers(state.serverId) : Object.assign({}, action.headers);
            var requestParams = {
                headers: headers,
                method: 'HEAD'
            };
            var request = sendRequest(null, requestUrl, requestParams);
            request.onload = function(xhr) {
                return cb(onload(xhr, requestParams.method));
            };
            request.onerror = function(xhr) {
                return error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
            };
            request.ontimeout = createTimeoutResponse(error);
        };
        // create chunks
        var lastChunkIndex = Math.floor(file.size / chunkSize);
        for(var i = 0; i <= lastChunkIndex; i++){
            var offset = i * chunkSize;
            var data = file.slice(offset, offset + chunkSize, 'application/offset+octet-stream');
            chunks[i] = {
                index: i,
                size: data.size,
                offset: offset,
                data: data,
                file: file,
                progress: 0,
                retries: _toConsumableArray(chunkRetryDelays),
                status: ChunkStatus.QUEUED,
                error: null,
                request: null,
                timeout: null
            };
        }
        var completeProcessingChunks = function completeProcessingChunks() {
            return load(state.serverId);
        };
        var canProcessChunk = function canProcessChunk(chunk) {
            return chunk.status === ChunkStatus.QUEUED || chunk.status === ChunkStatus.ERROR;
        };
        var processChunk = function processChunk(chunk) {
            // processing is paused, wait here
            if (state.aborted) return;
            // get next chunk to process
            chunk = chunk || chunks.find(canProcessChunk);
            // no more chunks to process
            if (!chunk) {
                // all done?
                if (chunks.every(function(chunk) {
                    return chunk.status === ChunkStatus.COMPLETE;
                })) {
                    completeProcessingChunks();
                }
                // no chunk to handle
                return;
            }
            // now processing this chunk
            chunk.status = ChunkStatus.PROCESSING;
            chunk.progress = null;
            // allow parsing of formdata
            var ondata = chunkServer.ondata || function(fd) {
                return fd;
            };
            var onerror = chunkServer.onerror || function(res) {
                return null;
            };
            // send request object
            var requestUrl = buildURL(apiUrl, chunkServer.url, state.serverId);
            var headers = typeof chunkServer.headers === 'function' ? chunkServer.headers(chunk) : Object.assign({}, chunkServer.headers, {
                'Content-Type': 'application/offset+octet-stream',
                'Upload-Offset': chunk.offset,
                'Upload-Length': file.size,
                'Upload-Name': file.name
            });
            var request = chunk.request = sendRequest(ondata(chunk.data), requestUrl, Object.assign({}, chunkServer, {
                headers: headers
            }));
            request.onload = function() {
                // done!
                chunk.status = ChunkStatus.COMPLETE;
                // remove request reference
                chunk.request = null;
                // start processing more chunks
                processChunks();
            };
            request.onprogress = function(lengthComputable, loaded, total) {
                chunk.progress = lengthComputable ? loaded : null;
                updateTotalProgress();
            };
            request.onerror = function(xhr) {
                chunk.status = ChunkStatus.ERROR;
                chunk.request = null;
                chunk.error = onerror(xhr.response) || xhr.statusText;
                if (!retryProcessChunk(chunk)) {
                    error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
                }
            };
            request.ontimeout = function(xhr) {
                chunk.status = ChunkStatus.ERROR;
                chunk.request = null;
                if (!retryProcessChunk(chunk)) {
                    createTimeoutResponse(error)(xhr);
                }
            };
            request.onabort = function() {
                chunk.status = ChunkStatus.QUEUED;
                chunk.request = null;
                abort();
            };
        };
        var retryProcessChunk = function retryProcessChunk(chunk) {
            // no more retries left
            if (chunk.retries.length === 0) return false;
            // new retry
            chunk.status = ChunkStatus.WAITING;
            clearTimeout(chunk.timeout);
            chunk.timeout = setTimeout(function() {
                processChunk(chunk);
            }, chunk.retries.shift());
            // we're going to retry
            return true;
        };
        var updateTotalProgress = function updateTotalProgress() {
            // calculate total progress fraction
            var totalBytesTransfered = chunks.reduce(function(p, chunk) {
                if (p === null || chunk.progress === null) return null;
                return p + chunk.progress;
            }, 0);
            // can't compute progress
            if (totalBytesTransfered === null) return progress(false, 0, 0);
            // calculate progress values
            var totalSize = chunks.reduce(function(total, chunk) {
                return total + chunk.size;
            }, 0);
            // can update progress indicator
            progress(true, totalBytesTransfered, totalSize);
        };
        // process new chunks
        var processChunks = function processChunks() {
            var totalProcessing = chunks.filter(function(chunk) {
                return chunk.status === ChunkStatus.PROCESSING;
            }).length;
            if (totalProcessing >= 1) return;
            processChunk();
        };
        var abortChunks = function abortChunks() {
            chunks.forEach(function(chunk) {
                clearTimeout(chunk.timeout);
                if (chunk.request) {
                    chunk.request.abort();
                }
            });
        };
        // let's go!
        if (!state.serverId) {
            requestTransferId(function(serverId) {
                // stop here if aborted, might have happened in between request and callback
                if (state.aborted) return;
                // pass back to item so we can use it if something goes wrong
                transfer(serverId);
                // store internally
                state.serverId = serverId;
                processChunks();
            });
        } else {
            requestTransferOffset(function(offset) {
                // stop here if aborted, might have happened in between request and callback
                if (state.aborted) return;
                // mark chunks with lower offset as complete
                chunks.filter(function(chunk) {
                    return chunk.offset < offset;
                }).forEach(function(chunk) {
                    chunk.status = ChunkStatus.COMPLETE;
                    chunk.progress = chunk.size;
                });
                // continue processing
                processChunks();
            });
        }
        return {
            abort: function abort() {
                state.aborted = true;
                abortChunks();
            }
        };
    };
    /*
                                                               function signature:
                                                                 (file, metadata, load, error, progress, abort) => {
                                                                   return {
                                                                   abort:() => {}
                                                                 }
                                                               }
                                                               */ var createFileProcessorFunction = function createFileProcessorFunction(apiUrl, action, name, options) {
        return function(file, metadata, load, error, progress, abort, transfer) {
            // no file received
            if (!file) return;
            // if was passed a file, and we can chunk it, exit here
            var canChunkUpload = options.chunkUploads;
            var shouldChunkUpload = canChunkUpload && file.size > options.chunkSize;
            var willChunkUpload = canChunkUpload && (shouldChunkUpload || options.chunkForce);
            if (file instanceof Blob && willChunkUpload) return processFileChunked(apiUrl, action, name, file, metadata, load, error, progress, abort, transfer, options);
            // set handlers
            var ondata = action.ondata || function(fd) {
                return fd;
            };
            var onload = action.onload || function(res) {
                return res;
            };
            var onerror = action.onerror || function(res) {
                return null;
            };
            var headers = typeof action.headers === 'function' ? action.headers(file, metadata) || {} : Object.assign({}, action.headers);
            var requestParams = Object.assign({}, action, {
                headers: headers
            });
            // create formdata object
            var formData = new FormData();
            // add metadata under same name
            if (isObject(metadata)) {
                formData.append(name, JSON.stringify(metadata));
            }
            // Turn into an array of objects so no matter what the input, we can handle it the same way
            (file instanceof Blob ? [
                {
                    name: null,
                    file: file
                }
            ] : file).forEach(function(item) {
                formData.append(name, item.file, item.name === null ? item.file.name : '' + item.name + item.file.name);
            });
            // send request object
            var request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
            request.onload = function(xhr) {
                load(createResponse('load', xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
            };
            request.onerror = function(xhr) {
                error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
            };
            request.ontimeout = createTimeoutResponse(error);
            request.onprogress = progress;
            request.onabort = abort;
            // should return request
            return request;
        };
    };
    var createProcessorFunction = function createProcessorFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        var name = arguments.length > 2 ? arguments[2] : undefined;
        var options = arguments.length > 3 ? arguments[3] : undefined;
        // custom handler (should also handle file, load, error, progress and abort)
        if (typeof action === 'function') return function() {
            for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                params[_key] = arguments[_key];
            }
            return action.apply(void 0, [
                name
            ].concat(params, [
                options
            ]));
        };
        // no action supplied
        if (!action || !isString(action.url)) return null;
        // internal handler
        return createFileProcessorFunction(apiUrl, action, name, options);
    };
    /*
                                                      function signature:
                                                      (uniqueFileId, load, error) => { }
                                                      */ var createRevertFunction = function createRevertFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        // is custom implementation
        if (typeof action === 'function') {
            return action;
        }
        // no action supplied, return stub function, interface will work, but file won't be removed
        if (!action || !isString(action.url)) {
            return function(uniqueFileId, load) {
                return load();
            };
        }
        // set onload hanlder
        var onload = action.onload || function(res) {
            return res;
        };
        var onerror = action.onerror || function(res) {
            return null;
        };
        // internal implementation
        return function(uniqueFileId, load, error) {
            var request = sendRequest(uniqueFileId, apiUrl + action.url, action // contains method, headers and withCredentials properties
            );
            request.onload = function(xhr) {
                load(createResponse('load', xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
            };
            request.onerror = function(xhr) {
                error(createResponse('error', xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
            };
            request.ontimeout = createTimeoutResponse(error);
            return request;
        };
    };
    var getRandomNumber = function getRandomNumber() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return min + Math.random() * (max - min);
    };
    var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(cb) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var tickMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
        var tickMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
        var timeout = null;
        var start = Date.now();
        var tick = function tick() {
            var runtime = Date.now() - start;
            var delay = getRandomNumber(tickMin, tickMax);
            if (runtime + delay > duration) {
                delay = runtime + delay - duration;
            }
            var progress = runtime / duration;
            if (progress >= 1 || document.hidden) {
                cb(1);
                return;
            }
            cb(progress);
            timeout = setTimeout(tick, delay);
        };
        if (duration > 0) tick();
        return {
            clear: function clear() {
                clearTimeout(timeout);
            }
        };
    };
    var createFileProcessor = function createFileProcessor(processFn, options) {
        var state = {
            complete: false,
            perceivedProgress: 0,
            perceivedPerformanceUpdater: null,
            progress: null,
            timestamp: null,
            perceivedDuration: 0,
            duration: 0,
            request: null,
            response: null
        };
        var allowMinimumUploadDuration = options.allowMinimumUploadDuration;
        var process = function process(file, metadata) {
            var progressFn = function progressFn() {
                // we've not yet started the real download, stop here
                // the request might not go through, for instance, there might be some server trouble
                // if state.progress is null, the server does not allow computing progress and we show the spinner instead
                if (state.duration === 0 || state.progress === null) return;
                // as we're now processing, fire the progress event
                api.fire('progress', api.getProgress());
            };
            var completeFn = function completeFn() {
                state.complete = true;
                api.fire('load-perceived', state.response.body);
            };
            // let's start processing
            api.fire('start');
            // set request start
            state.timestamp = Date.now();
            // create perceived performance progress indicator
            state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(function(progress) {
                state.perceivedProgress = progress;
                state.perceivedDuration = Date.now() - state.timestamp;
                progressFn();
                // if fake progress is done, and a response has been received,
                // and we've not yet called the complete method
                if (state.response && state.perceivedProgress === 1 && !state.complete) {
                    // we done!
                    completeFn();
                }
            }, // random delay as in a list of files you start noticing
            // files uploading at the exact same speed
            allowMinimumUploadDuration ? getRandomNumber(750, 1500) : 0);
            // remember request so we can abort it later
            state.request = processFn(// the file to process
            file, // the metadata to send along
            metadata, // callbacks (load, error, progress, abort, transfer)
            // load expects the body to be a server id if
            // you want to make use of revert
            function(response) {
                // we put the response in state so we can access
                // it outside of this method
                state.response = isObject(response) ? response : {
                    type: 'load',
                    code: 200,
                    body: '' + response,
                    headers: {}
                };
                // update duration
                state.duration = Date.now() - state.timestamp;
                // force progress to 1 as we're now done
                state.progress = 1;
                // actual load is done let's share results
                api.fire('load', state.response.body);
                // we are really done
                // if perceived progress is 1 ( wait for perceived progress to complete )
                // or if server does not support progress ( null )
                if (!allowMinimumUploadDuration || allowMinimumUploadDuration && state.perceivedProgress === 1) {
                    completeFn();
                }
            }, // error is expected to be an object with type, code, body
            function(error) {
                // cancel updater
                state.perceivedPerformanceUpdater.clear();
                // update others about this error
                api.fire('error', isObject(error) ? error : {
                    type: 'error',
                    code: 0,
                    body: '' + error
                });
            }, // actual processing progress
            function(computable, current, total) {
                // update actual duration
                state.duration = Date.now() - state.timestamp;
                // update actual progress
                state.progress = computable ? current / total : null;
                progressFn();
            }, // abort does not expect a value
            function() {
                // stop updater
                state.perceivedPerformanceUpdater.clear();
                // fire the abort event so we can switch visuals
                api.fire('abort', state.response ? state.response.body : null);
            }, // register the id for this transfer
            function(transferId) {
                api.fire('transfer', transferId);
            });
        };
        var abort = function abort() {
            // no request running, can't abort
            if (!state.request) return;
            // stop updater
            state.perceivedPerformanceUpdater.clear();
            // abort actual request
            if (state.request.abort) state.request.abort();
            // if has response object, we've completed the request
            state.complete = true;
        };
        var reset = function reset() {
            abort();
            state.complete = false;
            state.perceivedProgress = 0;
            state.progress = 0;
            state.timestamp = null;
            state.perceivedDuration = 0;
            state.duration = 0;
            state.request = null;
            state.response = null;
        };
        var getProgress = allowMinimumUploadDuration ? function() {
            return state.progress ? Math.min(state.progress, state.perceivedProgress) : null;
        } : function() {
            return state.progress || null;
        };
        var getDuration = allowMinimumUploadDuration ? function() {
            return Math.min(state.duration, state.perceivedDuration);
        } : function() {
            return state.duration;
        };
        var api = Object.assign({}, on(), {
            process: process,
            abort: abort,
            getProgress: getProgress,
            getDuration: getDuration,
            reset: reset
        });
        return api;
    };
    var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
        return name.substring(0, name.lastIndexOf('.')) || name;
    };
    var createFileStub = function createFileStub(source) {
        var data = [
            source.name,
            source.size,
            source.type
        ];
        // is blob or base64, then we need to set the name
        if (source instanceof Blob || isBase64DataURI(source)) {
            data[0] = source.name || getDateString();
        } else if (isBase64DataURI(source)) {
            // if is base64 data uri we need to determine the average size and type
            data[1] = source.length;
            data[2] = getMimeTypeFromBase64DataURI(source);
        } else if (isString(source)) {
            // url
            data[0] = getFilenameFromURL(source);
            data[1] = 0;
            data[2] = 'application/octet-stream';
        }
        return {
            name: data[0],
            size: data[1],
            type: data[2]
        };
    };
    var isFile = function isFile(value) {
        return !!(value instanceof File || value instanceof Blob && value.name);
    };
    var deepCloneObject = function deepCloneObject(src) {
        if (!isObject(src)) return src;
        var target = isArray(src) ? [] : {};
        for(var key in src){
            if (!src.hasOwnProperty(key)) continue;
            var v1 = src[key];
            target[key] = v1 && isObject(v1) ? deepCloneObject(v1) : v1;
        }
        return target;
    };
    var createItem = function createItem() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var serverFileReference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // unique id for this item, is used to identify the item across views
        var id = getUniqueId();
        /**
         * Internal item state
         */ var state = {
            // is archived
            archived: false,
            // if is frozen, no longer fires events
            frozen: false,
            // removed from view
            released: false,
            // original source
            source: null,
            // file model reference
            file: file,
            // id of file on server
            serverFileReference: serverFileReference,
            // id of file transfer on server
            transferId: null,
            // is aborted
            processingAborted: false,
            // current item status
            status: serverFileReference ? ItemStatus.PROCESSING_COMPLETE : ItemStatus.INIT,
            // active processes
            activeLoader: null,
            activeProcessor: null
        };
        // callback used when abort processing is called to link back to the resolve method
        var abortProcessingRequestComplete = null;
        /**
         * Externally added item metadata
         */ var metadata = {};
        // item data
        var setStatus = function setStatus(status) {
            return state.status = status;
        };
        // fire event unless the item has been archived
        var fire = function fire(event) {
            if (state.released || state.frozen) return;
            for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                params[_key - 1] = arguments[_key];
            }
            api.fire.apply(api, [
                event
            ].concat(params));
        };
        // file data
        var getFileExtension = function getFileExtension() {
            return getExtensionFromFilename(state.file.name);
        };
        var getFileType = function getFileType() {
            return state.file.type;
        };
        var getFileSize = function getFileSize() {
            return state.file.size;
        };
        var getFile = function getFile() {
            return state.file;
        };
        //
        // logic to load a file
        //
        var load = function load(source, loader, onload) {
            // remember the original item source
            state.source = source;
            // source is known
            api.fireSync('init');
            // file stub is already there
            if (state.file) {
                api.fireSync('load-skip');
                return;
            }
            // set a stub file object while loading the actual data
            state.file = createFileStub(source);
            // starts loading
            loader.on('init', function() {
                fire('load-init');
            });
            // we'eve received a size indication, let's update the stub
            loader.on('meta', function(meta) {
                // set size of file stub
                state.file.size = meta.size;
                // set name of file stub
                state.file.filename = meta.filename;
                // if has received source, we done
                if (meta.source) {
                    origin = FileOrigin.LIMBO;
                    state.serverFileReference = meta.source;
                    state.status = ItemStatus.PROCESSING_COMPLETE;
                }
                // size has been updated
                fire('load-meta');
            });
            // the file is now loading we need to update the progress indicators
            loader.on('progress', function(progress) {
                setStatus(ItemStatus.LOADING);
                fire('load-progress', progress);
            });
            // an error was thrown while loading the file, we need to switch to error state
            loader.on('error', function(error) {
                setStatus(ItemStatus.LOAD_ERROR);
                fire('load-request-error', error);
            });
            // user or another process aborted the file load (cannot retry)
            loader.on('abort', function() {
                setStatus(ItemStatus.INIT);
                fire('load-abort');
            });
            // done loading
            loader.on('load', function(file) {
                // as we've now loaded the file the loader is no longer required
                state.activeLoader = null;
                // called when file has loaded succesfully
                var success = function success(result) {
                    // set (possibly) transformed file
                    state.file = isFile(result) ? result : state.file;
                    // file received
                    if (origin === FileOrigin.LIMBO && state.serverFileReference) {
                        setStatus(ItemStatus.PROCESSING_COMPLETE);
                    } else {
                        setStatus(ItemStatus.IDLE);
                    }
                    fire('load');
                };
                var error = function error(result) {
                    // set original file
                    state.file = file;
                    fire('load-meta');
                    setStatus(ItemStatus.LOAD_ERROR);
                    fire('load-file-error', result);
                };
                // if we already have a server file reference, we don't need to call the onload method
                if (state.serverFileReference) {
                    success(file);
                    return;
                }
                // no server id, let's give this file the full treatment
                onload(file, success, error);
            });
            // set loader source data
            loader.setSource(source);
            // set as active loader
            state.activeLoader = loader;
            // load the source data
            loader.load();
        };
        var retryLoad = function retryLoad() {
            if (!state.activeLoader) {
                return;
            }
            state.activeLoader.load();
        };
        var abortLoad = function abortLoad() {
            if (state.activeLoader) {
                state.activeLoader.abort();
                return;
            }
            setStatus(ItemStatus.INIT);
            fire('load-abort');
        };
        //
        // logic to process a file
        //
        var process = function process(processor, onprocess) {
            // processing was aborted
            if (state.processingAborted) {
                state.processingAborted = false;
                return;
            }
            // now processing
            setStatus(ItemStatus.PROCESSING);
            // reset abort callback
            abortProcessingRequestComplete = null;
            // if no file loaded we'll wait for the load event
            if (!(state.file instanceof Blob)) {
                api.on('load', function() {
                    process(processor, onprocess);
                });
                return;
            }
            // setup processor
            processor.on('load', function(serverFileReference) {
                // need this id to be able to revert the upload
                state.transferId = null;
                state.serverFileReference = serverFileReference;
            });
            // register transfer id
            processor.on('transfer', function(transferId) {
                // need this id to be able to revert the upload
                state.transferId = transferId;
            });
            processor.on('load-perceived', function(serverFileReference) {
                // no longer required
                state.activeProcessor = null;
                // need this id to be able to rever the upload
                state.transferId = null;
                state.serverFileReference = serverFileReference;
                setStatus(ItemStatus.PROCESSING_COMPLETE);
                fire('process-complete', serverFileReference);
            });
            processor.on('start', function() {
                fire('process-start');
            });
            processor.on('error', function(error) {
                state.activeProcessor = null;
                setStatus(ItemStatus.PROCESSING_ERROR);
                fire('process-error', error);
            });
            processor.on('abort', function(serverFileReference) {
                state.activeProcessor = null;
                // if file was uploaded but processing was cancelled during perceived processor time store file reference
                state.serverFileReference = serverFileReference;
                setStatus(ItemStatus.IDLE);
                fire('process-abort');
                // has timeout so doesn't interfere with remove action
                if (abortProcessingRequestComplete) {
                    abortProcessingRequestComplete();
                }
            });
            processor.on('progress', function(progress) {
                fire('process-progress', progress);
            });
            // when successfully transformed
            var success = function success(file) {
                // if was archived in the mean time, don't process
                if (state.archived) return;
                // process file!
                processor.process(file, Object.assign({}, metadata));
            };
            // something went wrong during transform phase
            var error = console.error;
            // start processing the file
            onprocess(state.file, success, error);
            // set as active processor
            state.activeProcessor = processor;
        };
        var requestProcessing = function requestProcessing() {
            state.processingAborted = false;
            setStatus(ItemStatus.PROCESSING_QUEUED);
        };
        var abortProcessing = function abortProcessing() {
            return new Promise(function(resolve) {
                if (!state.activeProcessor) {
                    state.processingAborted = true;
                    setStatus(ItemStatus.IDLE);
                    fire('process-abort');
                    resolve();
                    return;
                }
                abortProcessingRequestComplete = function abortProcessingRequestComplete() {
                    resolve();
                };
                state.activeProcessor.abort();
            });
        };
        //
        // logic to revert a processed file
        //
        var revert = function revert(revertFileUpload, forceRevert) {
            return new Promise(function(resolve, reject) {
                // a completed upload will have a serverFileReference, a failed chunked upload where
                // getting a serverId succeeded but >=0 chunks have been uploaded will have transferId set
                var serverTransferId = state.serverFileReference !== null ? state.serverFileReference : state.transferId;
                // cannot revert without a server id for this process
                if (serverTransferId === null) {
                    resolve();
                    return;
                }
                // revert the upload (fire and forget)
                revertFileUpload(serverTransferId, function() {
                    // reset file server id and transfer id as now it's not available on the server
                    state.serverFileReference = null;
                    state.transferId = null;
                    resolve();
                }, function(error) {
                    // don't set error state when reverting is optional, it will always resolve
                    if (!forceRevert) {
                        resolve();
                        return;
                    }
                    // oh no errors
                    setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
                    fire('process-revert-error');
                    reject(error);
                });
                // fire event
                setStatus(ItemStatus.IDLE);
                fire('process-revert');
            });
        };
        // exposed methods
        var _setMetadata = function setMetadata(key, value, silent) {
            var keys = key.split('.');
            var root = keys[0];
            var last = keys.pop();
            var data = metadata;
            keys.forEach(function(key) {
                return data = data[key];
            });
            // compare old value against new value, if they're the same, we're not updating
            if (JSON.stringify(data[last]) === JSON.stringify(value)) return;
            // update value
            data[last] = value;
            // fire update
            fire('metadata-update', {
                key: root,
                value: metadata[root],
                silent: silent
            });
        };
        var getMetadata = function getMetadata(key) {
            return deepCloneObject(key ? metadata[key] : metadata);
        };
        var api = Object.assign({
            id: {
                get: function get() {
                    return id;
                }
            },
            origin: {
                get: function get() {
                    return origin;
                },
                set: function set(value) {
                    return origin = value;
                }
            },
            serverId: {
                get: function get() {
                    return state.serverFileReference;
                }
            },
            transferId: {
                get: function get() {
                    return state.transferId;
                }
            },
            status: {
                get: function get() {
                    return state.status;
                }
            },
            filename: {
                get: function get() {
                    return state.file.name;
                }
            },
            filenameWithoutExtension: {
                get: function get() {
                    return getFilenameWithoutExtension(state.file.name);
                }
            },
            fileExtension: {
                get: getFileExtension
            },
            fileType: {
                get: getFileType
            },
            fileSize: {
                get: getFileSize
            },
            file: {
                get: getFile
            },
            relativePath: {
                get: function get() {
                    return state.file._relativePath;
                }
            },
            source: {
                get: function get() {
                    return state.source;
                }
            },
            getMetadata: getMetadata,
            setMetadata: function setMetadata(key, value, silent) {
                if (isObject(key)) {
                    var data = key;
                    Object.keys(data).forEach(function(key) {
                        _setMetadata(key, data[key], value);
                    });
                    return key;
                }
                _setMetadata(key, value, silent);
                return value;
            },
            extend: function extend(name, handler) {
                return itemAPI[name] = handler;
            },
            abortLoad: abortLoad,
            retryLoad: retryLoad,
            requestProcessing: requestProcessing,
            abortProcessing: abortProcessing,
            load: load,
            process: process,
            revert: revert
        }, on(), {
            freeze: function freeze() {
                return state.frozen = true;
            },
            release: function release() {
                return state.released = true;
            },
            released: {
                get: function get() {
                    return state.released;
                }
            },
            archive: function archive() {
                return state.archived = true;
            },
            archived: {
                get: function get() {
                    return state.archived;
                }
            },
            // replace source and file object
            setFile: function setFile(file) {
                return state.file = file;
            }
        });
        // create it here instead of returning it instantly so we can extend it later
        var itemAPI = createObject(api);
        return itemAPI;
    };
    var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
        // just return first index
        if (isEmpty(query)) {
            return 0;
        }
        // invalid queries
        if (!isString(query)) {
            return -1;
        }
        // return item by id (or -1 if not found)
        return items.findIndex(function(item) {
            return item.id === query;
        });
    };
    var getItemById = function getItemById(items, itemId) {
        var index = getItemIndexByQuery(items, itemId);
        if (index < 0) {
            return;
        }
        return items[index] || null;
    };
    var fetchBlob = function fetchBlob(url, load, error, progress, abort, headers) {
        var request = sendRequest(null, url, {
            method: 'GET',
            responseType: 'blob'
        });
        request.onload = function(xhr) {
            // get headers
            var headers = xhr.getAllResponseHeaders();
            // get filename
            var filename = getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);
            // create response
            load(createResponse('load', xhr.status, getFileFromBlob(xhr.response, filename), headers));
        };
        request.onerror = function(xhr) {
            error(createResponse('error', xhr.status, xhr.statusText, xhr.getAllResponseHeaders()));
        };
        request.onheaders = function(xhr) {
            headers(createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders()));
        };
        request.ontimeout = createTimeoutResponse(error);
        request.onprogress = progress;
        request.onabort = abort;
        // should return request
        return request;
    };
    var getDomainFromURL = function getDomainFromURL(url) {
        if (url.indexOf('//') === 0) {
            url = location.protocol + url;
        }
        return url.toLowerCase().replace('blob:', '').replace(/([a-z])?:\/\//, '$1').split('/')[0];
    };
    var isExternalURL = function isExternalURL(url) {
        return (url.indexOf(':') > -1 || url.indexOf('//') > -1) && getDomainFromURL(location.href) !== getDomainFromURL(url);
    };
    var dynamicLabel = function dynamicLabel(label) {
        return function() {
            return isFunction(label) ? label.apply(void 0, arguments) : label;
        };
    };
    var isMockItem = function isMockItem(item) {
        return !isFile(item.file);
    };
    var listUpdated = function listUpdated(dispatch, state) {
        clearTimeout(state.listUpdateTimeout);
        state.listUpdateTimeout = setTimeout(function() {
            dispatch('DID_UPDATE_ITEMS', {
                items: getActiveItems(state.items)
            });
        }, 0);
    };
    var optionalPromise = function optionalPromise(fn) {
        for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            params[_key - 1] = arguments[_key];
        }
        return new Promise(function(resolve) {
            if (!fn) {
                return resolve(true);
            }
            var result = fn.apply(void 0, params);
            if (result == null) {
                return resolve(true);
            }
            if (typeof result === 'boolean') {
                return resolve(result);
            }
            if (typeof result.then === 'function') {
                result.then(resolve);
            }
        });
    };
    var sortItems = function sortItems(state, compare) {
        state.items.sort(function(a, b) {
            return compare(createItemAPI(a), createItemAPI(b));
        });
    };
    // returns item based on state
    var getItemByQueryFromState = function getItemByQueryFromState(state, itemHandler) {
        return function() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = _ref.query, _ref$success = _ref.success, success = _ref$success === void 0 ? function() {} : _ref$success, _ref$failure = _ref.failure, failure = _ref$failure === void 0 ? function() {} : _ref$failure, options = _objectWithoutProperties(_ref, [
                'query',
                'success',
                'failure'
            ]);
            var item = getItemByQuery(state.items, query);
            if (!item) {
                failure({
                    error: createResponse('error', 0, 'Item not found'),
                    file: null
                });
                return;
            }
            itemHandler(item, success, failure, options || {});
        };
    };
    var actions = function actions(dispatch, query, state) {
        return {
            /**
             * Aborts all ongoing processes
             */ ABORT_ALL: function ABORT_ALL() {
                getActiveItems(state.items).forEach(function(item) {
                    item.freeze();
                    item.abortLoad();
                    item.abortProcessing();
                });
            },
            /**
             * Sets initial files
             */ DID_SET_FILES: function DID_SET_FILES(_ref2) {
                var _ref2$value = _ref2.value, value = _ref2$value === void 0 ? [] : _ref2$value;
                // map values to file objects
                var files = value.map(function(file) {
                    return {
                        source: file.source ? file.source : file,
                        options: file.options
                    };
                });
                // loop over files, if file is in list, leave it be, if not, remove
                // test if items should be moved
                var activeItems = getActiveItems(state.items);
                activeItems.forEach(function(item) {
                    // if item not is in new value, remove
                    if (!files.find(function(file) {
                        return file.source === item.source || file.source === item.file;
                    })) {
                        dispatch('REMOVE_ITEM', {
                            query: item,
                            remove: false
                        });
                    }
                });
                // add new files
                activeItems = getActiveItems(state.items);
                files.forEach(function(file, index) {
                    // if file is already in list
                    if (activeItems.find(function(item) {
                        return item.source === file.source || item.file === file.source;
                    })) return;
                    // not in list, add
                    dispatch('ADD_ITEM', Object.assign({}, file, {
                        interactionMethod: InteractionMethod.NONE,
                        index: index
                    }));
                });
            },
            DID_UPDATE_ITEM_METADATA: function DID_UPDATE_ITEM_METADATA(_ref3) {
                var id = _ref3.id, action = _ref3.action, change = _ref3.change;
                // don't do anything
                if (change.silent) return;
                // if is called multiple times in close succession we combined all calls together to save resources
                clearTimeout(state.itemUpdateTimeout);
                state.itemUpdateTimeout = setTimeout(function() {
                    var item = getItemById(state.items, id);
                    // only revert and attempt to upload when we're uploading to a server
                    if (!query('IS_ASYNC')) {
                        // should we update the output data
                        applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                            item: item,
                            query: query,
                            action: action,
                            change: change
                        }).then(function(shouldPrepareOutput) {
                            // plugins determined the output data should be prepared (or not), can be adjusted with beforePrepareOutput hook
                            var beforePrepareFile = query('GET_BEFORE_PREPARE_FILE');
                            if (beforePrepareFile) shouldPrepareOutput = beforePrepareFile(item, shouldPrepareOutput);
                            if (!shouldPrepareOutput) return;
                            dispatch('REQUEST_PREPARE_OUTPUT', {
                                query: id,
                                item: item,
                                success: function success(file) {
                                    dispatch('DID_PREPARE_OUTPUT', {
                                        id: id,
                                        file: file
                                    });
                                }
                            }, true);
                        });
                        return;
                    }
                    // if is local item we need to enable upload button so change can be propagated to server
                    if (item.origin === FileOrigin.LOCAL) {
                        dispatch('DID_LOAD_ITEM', {
                            id: item.id,
                            error: null,
                            serverFileReference: item.source
                        });
                    }
                    // for async scenarios
                    var upload = function upload() {
                        // we push this forward a bit so the interface is updated correctly
                        setTimeout(function() {
                            dispatch('REQUEST_ITEM_PROCESSING', {
                                query: id
                            });
                        }, 32);
                    };
                    var revert = function revert(doUpload) {
                        item.revert(createRevertFunction(state.options.server.url, state.options.server.revert), query('GET_FORCE_REVERT')).then(doUpload ? upload : function() {}).catch(function() {});
                    };
                    var abort = function abort(doUpload) {
                        item.abortProcessing().then(doUpload ? upload : function() {});
                    };
                    // if we should re-upload the file immediately
                    if (item.status === ItemStatus.PROCESSING_COMPLETE) {
                        return revert(state.options.instantUpload);
                    }
                    // if currently uploading, cancel upload
                    if (item.status === ItemStatus.PROCESSING) {
                        return abort(state.options.instantUpload);
                    }
                    if (state.options.instantUpload) {
                        upload();
                    }
                }, 0);
            },
            MOVE_ITEM: function MOVE_ITEM(_ref4) {
                var query = _ref4.query, index = _ref4.index;
                var item = getItemByQuery(state.items, query);
                if (!item) return;
                var currentIndex = state.items.indexOf(item);
                index = limit(index, 0, state.items.length - 1);
                if (currentIndex === index) return;
                state.items.splice(index, 0, state.items.splice(currentIndex, 1)[0]);
            },
            SORT: function SORT(_ref5) {
                var compare = _ref5.compare;
                sortItems(state, compare);
                dispatch('DID_SORT_ITEMS', {
                    items: query('GET_ACTIVE_ITEMS')
                });
            },
            ADD_ITEMS: function ADD_ITEMS(_ref6) {
                var items = _ref6.items, index = _ref6.index, interactionMethod = _ref6.interactionMethod, _ref6$success = _ref6.success, success = _ref6$success === void 0 ? function() {} : _ref6$success, _ref6$failure = _ref6.failure, failure = _ref6$failure === void 0 ? function() {} : _ref6$failure;
                var currentIndex = index;
                if (index === -1 || typeof index === 'undefined') {
                    var insertLocation = query('GET_ITEM_INSERT_LOCATION');
                    var totalItems = query('GET_TOTAL_ITEMS');
                    currentIndex = insertLocation === 'before' ? 0 : totalItems;
                }
                var ignoredFiles = query('GET_IGNORED_FILES');
                var isValidFile = function isValidFile(source) {
                    return isFile(source) ? !ignoredFiles.includes(source.name.toLowerCase()) : !isEmpty(source);
                };
                var validItems = items.filter(isValidFile);
                var promises = validItems.map(function(source) {
                    return new Promise(function(resolve, reject) {
                        dispatch('ADD_ITEM', {
                            interactionMethod: interactionMethod,
                            source: source.source || source,
                            success: resolve,
                            failure: reject,
                            index: currentIndex++,
                            options: source.options || {}
                        });
                    });
                });
                Promise.all(promises).then(success).catch(failure);
            },
            /**
             * @param source
             * @param index
             * @param interactionMethod
             */ ADD_ITEM: function ADD_ITEM(_ref7) {
                var source = _ref7.source, _ref7$index = _ref7.index, index = _ref7$index === void 0 ? -1 : _ref7$index, interactionMethod = _ref7.interactionMethod, _ref7$success = _ref7.success, success = _ref7$success === void 0 ? function() {} : _ref7$success, _ref7$failure = _ref7.failure, failure = _ref7$failure === void 0 ? function() {} : _ref7$failure, _ref7$options = _ref7.options, options = _ref7$options === void 0 ? {} : _ref7$options;
                // if no source supplied
                if (isEmpty(source)) {
                    failure({
                        error: createResponse('error', 0, 'No source'),
                        file: null
                    });
                    return;
                }
                // filter out invalid file items, used to filter dropped directory contents
                if (isFile(source) && state.options.ignoredFiles.includes(source.name.toLowerCase())) {
                    // fail silently
                    return;
                }
                // test if there's still room in the list of files
                if (!hasRoomForItem(state)) {
                    // if multiple allowed, we can't replace
                    // or if only a single item is allowed but we're not allowed to replace it we exit
                    if (state.options.allowMultiple || !state.options.allowMultiple && !state.options.allowReplace) {
                        var error = createResponse('warning', 0, 'Max files');
                        dispatch('DID_THROW_MAX_FILES', {
                            source: source,
                            error: error
                        });
                        failure({
                            error: error,
                            file: null
                        });
                        return;
                    }
                    // let's replace the item
                    // id of first item we're about to remove
                    var _item = getActiveItems(state.items)[0];
                    // if has been processed remove it from the server as well
                    if (_item.status === ItemStatus.PROCESSING_COMPLETE || _item.status === ItemStatus.PROCESSING_REVERT_ERROR) {
                        var forceRevert = query('GET_FORCE_REVERT');
                        _item.revert(createRevertFunction(state.options.server.url, state.options.server.revert), forceRevert).then(function() {
                            if (!forceRevert) return;
                            // try to add now
                            dispatch('ADD_ITEM', {
                                source: source,
                                index: index,
                                interactionMethod: interactionMethod,
                                success: success,
                                failure: failure,
                                options: options
                            });
                        }).catch(function() {}); // no need to handle this catch state for now
                        if (forceRevert) return;
                    }
                    // remove first item as it will be replaced by this item
                    dispatch('REMOVE_ITEM', {
                        query: _item.id
                    });
                }
                // where did the file originate
                var origin = options.type === 'local' ? FileOrigin.LOCAL : options.type === 'limbo' ? FileOrigin.LIMBO : FileOrigin.INPUT;
                // create a new blank item
                var item = createItem(// where did this file come from
                origin, // an input file never has a server file reference
                origin === FileOrigin.INPUT ? null : source, // file mock data, if defined
                options.file);
                // set initial meta data
                Object.keys(options.metadata || {}).forEach(function(key) {
                    item.setMetadata(key, options.metadata[key]);
                });
                // created the item, let plugins add methods
                applyFilters('DID_CREATE_ITEM', item, {
                    query: query,
                    dispatch: dispatch
                });
                // where to insert new items
                var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');
                // adjust index if is not allowed to pick location
                if (!state.options.itemInsertLocationFreedom) {
                    index = itemInsertLocation === 'before' ? -1 : state.items.length;
                }
                // add item to list
                insertItem(state.items, item, index);
                // sort items in list
                if (isFunction(itemInsertLocation) && source) {
                    sortItems(state, itemInsertLocation);
                }
                // get a quick reference to the item id
                var id = item.id;
                // observe item events
                item.on('init', function() {
                    dispatch('DID_INIT_ITEM', {
                        id: id
                    });
                });
                item.on('load-init', function() {
                    dispatch('DID_START_ITEM_LOAD', {
                        id: id
                    });
                });
                item.on('load-meta', function() {
                    dispatch('DID_UPDATE_ITEM_META', {
                        id: id
                    });
                });
                item.on('load-progress', function(progress) {
                    dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', {
                        id: id,
                        progress: progress
                    });
                });
                item.on('load-request-error', function(error) {
                    var mainStatus = dynamicLabel(state.options.labelFileLoadError)(error);
                    // is client error, no way to recover
                    if (error.code >= 400 && error.code < 500) {
                        dispatch('DID_THROW_ITEM_INVALID', {
                            id: id,
                            error: error,
                            status: {
                                main: mainStatus,
                                sub: error.code + ' (' + error.body + ')'
                            }
                        });
                        // reject the file so can be dealt with through API
                        failure({
                            error: error,
                            file: createItemAPI(item)
                        });
                        return;
                    }
                    // is possible server error, so might be possible to retry
                    dispatch('DID_THROW_ITEM_LOAD_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: mainStatus,
                            sub: state.options.labelTapToRetry
                        }
                    });
                });
                item.on('load-file-error', function(error) {
                    dispatch('DID_THROW_ITEM_INVALID', {
                        id: id,
                        error: error.status,
                        status: error.status
                    });
                    failure({
                        error: error.status,
                        file: createItemAPI(item)
                    });
                });
                item.on('load-abort', function() {
                    dispatch('REMOVE_ITEM', {
                        query: id
                    });
                });
                item.on('load-skip', function() {
                    item.on('metadata-update', function(change) {
                        if (!isFile(item.file)) return;
                        dispatch('DID_UPDATE_ITEM_METADATA', {
                            id: id,
                            change: change
                        });
                    });
                    dispatch('COMPLETE_LOAD_ITEM', {
                        query: id,
                        item: item,
                        data: {
                            source: source,
                            success: success
                        }
                    });
                });
                item.on('load', function() {
                    var handleAdd = function handleAdd(shouldAdd) {
                        // no should not add this file
                        if (!shouldAdd) {
                            dispatch('REMOVE_ITEM', {
                                query: id
                            });
                            return;
                        }
                        // now interested in metadata updates
                        item.on('metadata-update', function(change) {
                            dispatch('DID_UPDATE_ITEM_METADATA', {
                                id: id,
                                change: change
                            });
                        });
                        // let plugins decide if the output data should be prepared at this point
                        // means we'll do this and wait for idle state
                        applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                            item: item,
                            query: query
                        }).then(function(shouldPrepareOutput) {
                            // plugins determined the output data should be prepared (or not), can be adjusted with beforePrepareOutput hook
                            var beforePrepareFile = query('GET_BEFORE_PREPARE_FILE');
                            if (beforePrepareFile) shouldPrepareOutput = beforePrepareFile(item, shouldPrepareOutput);
                            var loadComplete = function loadComplete() {
                                dispatch('COMPLETE_LOAD_ITEM', {
                                    query: id,
                                    item: item,
                                    data: {
                                        source: source,
                                        success: success
                                    }
                                });
                                listUpdated(dispatch, state);
                            };
                            // exit
                            if (shouldPrepareOutput) {
                                // wait for idle state and then run PREPARE_OUTPUT
                                dispatch('REQUEST_PREPARE_OUTPUT', {
                                    query: id,
                                    item: item,
                                    success: function success(file) {
                                        dispatch('DID_PREPARE_OUTPUT', {
                                            id: id,
                                            file: file
                                        });
                                        loadComplete();
                                    }
                                }, true);
                                return;
                            }
                            loadComplete();
                        });
                    };
                    // item loaded, allow plugins to
                    // - read data (quickly)
                    // - add metadata
                    applyFilterChain('DID_LOAD_ITEM', item, {
                        query: query,
                        dispatch: dispatch
                    }).then(function() {
                        optionalPromise(query('GET_BEFORE_ADD_FILE'), createItemAPI(item)).then(handleAdd);
                    }).catch(function(e) {
                        if (!e || !e.error || !e.status) return handleAdd(false);
                        dispatch('DID_THROW_ITEM_INVALID', {
                            id: id,
                            error: e.error,
                            status: e.status
                        });
                    });
                });
                item.on('process-start', function() {
                    dispatch('DID_START_ITEM_PROCESSING', {
                        id: id
                    });
                });
                item.on('process-progress', function(progress) {
                    dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
                        id: id,
                        progress: progress
                    });
                });
                item.on('process-error', function(error) {
                    dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: dynamicLabel(state.options.labelFileProcessingError)(error),
                            sub: state.options.labelTapToRetry
                        }
                    });
                });
                item.on('process-revert-error', function(error) {
                    dispatch('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: dynamicLabel(state.options.labelFileProcessingRevertError)(error),
                            sub: state.options.labelTapToRetry
                        }
                    });
                });
                item.on('process-complete', function(serverFileReference) {
                    dispatch('DID_COMPLETE_ITEM_PROCESSING', {
                        id: id,
                        error: null,
                        serverFileReference: serverFileReference
                    });
                    dispatch('DID_DEFINE_VALUE', {
                        id: id,
                        value: serverFileReference
                    });
                });
                item.on('process-abort', function() {
                    dispatch('DID_ABORT_ITEM_PROCESSING', {
                        id: id
                    });
                });
                item.on('process-revert', function() {
                    dispatch('DID_REVERT_ITEM_PROCESSING', {
                        id: id
                    });
                    dispatch('DID_DEFINE_VALUE', {
                        id: id,
                        value: null
                    });
                });
                // let view know the item has been inserted
                dispatch('DID_ADD_ITEM', {
                    id: id,
                    index: index,
                    interactionMethod: interactionMethod
                });
                listUpdated(dispatch, state);
                // start loading the source
                var _ref8 = state.options.server || {}, url = _ref8.url, load = _ref8.load, restore = _ref8.restore, fetch = _ref8.fetch;
                item.load(source, // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
                createFileLoader(origin === FileOrigin.INPUT ? isString(source) && isExternalURL(source) ? fetch ? createFetchFunction(url, fetch) : fetchBlob // remote url
                 : fetchBlob // try to fetch url
                 : origin === FileOrigin.LIMBO ? createFetchFunction(url, restore) // limbo
                 : createFetchFunction(url, load) // local
                ), // called when the file is loaded so it can be piped through the filters
                function(file, success, error) {
                    // let's process the file
                    applyFilterChain('LOAD_FILE', file, {
                        query: query
                    }).then(success).catch(error);
                });
            },
            REQUEST_PREPARE_OUTPUT: function REQUEST_PREPARE_OUTPUT(_ref9) {
                var item = _ref9.item, success = _ref9.success, _ref9$failure = _ref9.failure, failure = _ref9$failure === void 0 ? function() {} : _ref9$failure;
                // error response if item archived
                var err = {
                    error: createResponse('error', 0, 'Item not found'),
                    file: null
                };
                // don't handle archived items, an item could have been archived (load aborted) while waiting to be prepared
                if (item.archived) return failure(err);
                // allow plugins to alter the file data
                applyFilterChain('PREPARE_OUTPUT', item.file, {
                    query: query,
                    item: item
                }).then(function(result) {
                    applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
                        query: query,
                        item: item
                    }).then(function(result) {
                        // don't handle archived items, an item could have been archived (load aborted) while being prepared
                        if (item.archived) return failure(err);
                        // we done!
                        success(result);
                    });
                });
            },
            COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref10) {
                var item = _ref10.item, data = _ref10.data;
                var success = data.success, source = data.source;
                // sort items in list
                var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');
                if (isFunction(itemInsertLocation) && source) {
                    sortItems(state, itemInsertLocation);
                }
                // let interface know the item has loaded
                dispatch('DID_LOAD_ITEM', {
                    id: item.id,
                    error: null,
                    serverFileReference: item.origin === FileOrigin.INPUT ? null : source
                });
                // item has been successfully loaded and added to the
                // list of items so can now be safely returned for use
                success(createItemAPI(item));
                // if this is a local server file we need to show a different state
                if (item.origin === FileOrigin.LOCAL) {
                    dispatch('DID_LOAD_LOCAL_ITEM', {
                        id: item.id
                    });
                    return;
                }
                // if is a temp server file we prevent async upload call here (as the file is already on the server)
                if (item.origin === FileOrigin.LIMBO) {
                    dispatch('DID_COMPLETE_ITEM_PROCESSING', {
                        id: item.id,
                        error: null,
                        serverFileReference: source
                    });
                    dispatch('DID_DEFINE_VALUE', {
                        id: item.id,
                        value: item.serverId || source
                    });
                    return;
                }
                // id we are allowed to upload the file immediately, lets do it
                if (query('IS_ASYNC') && state.options.instantUpload) {
                    dispatch('REQUEST_ITEM_PROCESSING', {
                        query: item.id
                    });
                }
            },
            RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
                // try loading the source one more time
                item.retryLoad();
            }),
            REQUEST_ITEM_PREPARE: getItemByQueryFromState(state, function(item, _success, failure) {
                dispatch('REQUEST_PREPARE_OUTPUT', {
                    query: item.id,
                    item: item,
                    success: function success(file) {
                        dispatch('DID_PREPARE_OUTPUT', {
                            id: item.id,
                            file: file
                        });
                        _success({
                            file: item,
                            output: file
                        });
                    },
                    failure: failure
                }, true);
            }),
            REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(item, success, failure) {
                // cannot be queued (or is already queued)
                var itemCanBeQueuedForProcessing = // waiting for something
                item.status === ItemStatus.IDLE || // processing went wrong earlier
                item.status === ItemStatus.PROCESSING_ERROR;
                // not ready to be processed
                if (!itemCanBeQueuedForProcessing) {
                    var processNow = function processNow() {
                        return dispatch('REQUEST_ITEM_PROCESSING', {
                            query: item,
                            success: success,
                            failure: failure
                        });
                    };
                    var process = function process() {
                        return document.hidden ? processNow() : setTimeout(processNow, 32);
                    };
                    // if already done processing or tried to revert but didn't work, try again
                    if (item.status === ItemStatus.PROCESSING_COMPLETE || item.status === ItemStatus.PROCESSING_REVERT_ERROR) {
                        item.revert(createRevertFunction(state.options.server.url, state.options.server.revert), query('GET_FORCE_REVERT')).then(process).catch(function() {}); // don't continue with processing if something went wrong
                    } else if (item.status === ItemStatus.PROCESSING) {
                        item.abortProcessing().then(process);
                    }
                    return;
                }
                // already queued for processing
                if (item.status === ItemStatus.PROCESSING_QUEUED) return;
                item.requestProcessing();
                dispatch('DID_REQUEST_ITEM_PROCESSING', {
                    id: item.id
                });
                dispatch('PROCESS_ITEM', {
                    query: item,
                    success: success,
                    failure: failure
                }, true);
            }),
            PROCESS_ITEM: getItemByQueryFromState(state, function(item, success, failure) {
                var maxParallelUploads = query('GET_MAX_PARALLEL_UPLOADS');
                var totalCurrentUploads = query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING).length;
                // queue and wait till queue is freed up
                if (totalCurrentUploads === maxParallelUploads) {
                    // queue for later processing
                    state.processingQueue.push({
                        id: item.id,
                        success: success,
                        failure: failure
                    });
                    // stop it!
                    return;
                }
                // if was not queued or is already processing exit here
                if (item.status === ItemStatus.PROCESSING) return;
                var processNext = function processNext() {
                    // process queueud items
                    var queueEntry = state.processingQueue.shift();
                    // no items left
                    if (!queueEntry) return;
                    // get item reference
                    var id = queueEntry.id, success = queueEntry.success, failure = queueEntry.failure;
                    var itemReference = getItemByQuery(state.items, id);
                    // if item was archived while in queue, jump to next
                    if (!itemReference || itemReference.archived) {
                        processNext();
                        return;
                    }
                    // process queued item
                    dispatch('PROCESS_ITEM', {
                        query: id,
                        success: success,
                        failure: failure
                    }, true);
                };
                // we done function
                item.onOnce('process-complete', function() {
                    success(createItemAPI(item));
                    processNext();
                    // if origin is local, and we're instant uploading, trigger remove of original
                    // as revert will remove file from list
                    var server = state.options.server;
                    var instantUpload = state.options.instantUpload;
                    if (instantUpload && item.origin === FileOrigin.LOCAL && isFunction(server.remove)) {
                        var noop = function noop() {};
                        item.origin = FileOrigin.LIMBO;
                        state.options.server.remove(item.source, noop, noop);
                    }
                    // All items processed? No errors?
                    var allItemsProcessed = query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING_COMPLETE).length === state.items.length;
                    if (allItemsProcessed) {
                        dispatch('DID_COMPLETE_ITEM_PROCESSING_ALL');
                    }
                });
                // we error function
                item.onOnce('process-error', function(error) {
                    failure({
                        error: error,
                        file: createItemAPI(item)
                    });
                    processNext();
                });
                // start file processing
                var options = state.options;
                item.process(createFileProcessor(createProcessorFunction(options.server.url, options.server.process, options.name, {
                    chunkTransferId: item.transferId,
                    chunkServer: options.server.patch,
                    chunkUploads: options.chunkUploads,
                    chunkForce: options.chunkForce,
                    chunkSize: options.chunkSize,
                    chunkRetryDelays: options.chunkRetryDelays
                }), {
                    allowMinimumUploadDuration: query('GET_ALLOW_MINIMUM_UPLOAD_DURATION')
                }), // called when the file is about to be processed so it can be piped through the transform filters
                function(file, success, error) {
                    // allow plugins to alter the file data
                    applyFilterChain('PREPARE_OUTPUT', file, {
                        query: query,
                        item: item
                    }).then(function(file) {
                        dispatch('DID_PREPARE_OUTPUT', {
                            id: item.id,
                            file: file
                        });
                        success(file);
                    }).catch(error);
                });
            }),
            RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                dispatch('REQUEST_ITEM_PROCESSING', {
                    query: item
                });
            }),
            REQUEST_REMOVE_ITEM: getItemByQueryFromState(state, function(item) {
                optionalPromise(query('GET_BEFORE_REMOVE_FILE'), createItemAPI(item)).then(function(shouldRemove) {
                    if (!shouldRemove) {
                        return;
                    }
                    dispatch('REMOVE_ITEM', {
                        query: item
                    });
                });
            }),
            RELEASE_ITEM: getItemByQueryFromState(state, function(item) {
                item.release();
            }),
            REMOVE_ITEM: getItemByQueryFromState(state, function(item, success, failure, options) {
                var removeFromView = function removeFromView() {
                    // get id reference
                    var id = item.id;
                    // archive the item, this does not remove it from the list
                    getItemById(state.items, id).archive();
                    // tell the view the item has been removed
                    dispatch('DID_REMOVE_ITEM', {
                        error: null,
                        id: id,
                        item: item
                    });
                    // now the list has been modified
                    listUpdated(dispatch, state);
                    // correctly removed
                    success(createItemAPI(item));
                };
                // if this is a local file and the `server.remove` function has been configured,
                // send source there so dev can remove file from server
                var server = state.options.server;
                if (item.origin === FileOrigin.LOCAL && server && isFunction(server.remove) && options.remove !== false) {
                    dispatch('DID_START_ITEM_REMOVE', {
                        id: item.id
                    });
                    server.remove(item.source, function() {
                        return removeFromView();
                    }, function(status) {
                        dispatch('DID_THROW_ITEM_REMOVE_ERROR', {
                            id: item.id,
                            error: createResponse('error', 0, status, null),
                            status: {
                                main: dynamicLabel(state.options.labelFileRemoveError)(status),
                                sub: state.options.labelTapToRetry
                            }
                        });
                    });
                } else {
                    // if is requesting revert and can revert need to call revert handler (not calling request_ because that would also trigger beforeRemoveHook)
                    if (options.revert && item.origin !== FileOrigin.LOCAL && item.serverId !== null || state.options.chunkUploads && item.file.size > state.options.chunkSize || state.options.chunkUploads && state.options.chunkForce) {
                        item.revert(createRevertFunction(state.options.server.url, state.options.server.revert), query('GET_FORCE_REVERT'));
                    }
                    // can now safely remove from view
                    removeFromView();
                }
            }),
            ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
                item.abortLoad();
            }),
            ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                // test if is already processed
                if (item.serverId) {
                    dispatch('REVERT_ITEM_PROCESSING', {
                        id: item.id
                    });
                    return;
                }
                // abort
                item.abortProcessing().then(function() {
                    var shouldRemove = state.options.instantUpload;
                    if (shouldRemove) {
                        dispatch('REMOVE_ITEM', {
                            query: item.id
                        });
                    }
                });
            }),
            REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                // not instant uploading, revert immediately
                if (!state.options.instantUpload) {
                    dispatch('REVERT_ITEM_PROCESSING', {
                        query: item
                    });
                    return;
                }
                // if we're instant uploading the file will also be removed if we revert,
                // so if a before remove file hook is defined we need to run it now
                var handleRevert = function handleRevert(shouldRevert) {
                    if (!shouldRevert) return;
                    dispatch('REVERT_ITEM_PROCESSING', {
                        query: item
                    });
                };
                var fn = query('GET_BEFORE_REMOVE_FILE');
                if (!fn) {
                    return handleRevert(true);
                }
                var requestRemoveResult = fn(createItemAPI(item));
                if (requestRemoveResult == null) {
                    // undefined or null
                    return handleRevert(true);
                }
                if (typeof requestRemoveResult === 'boolean') {
                    return handleRevert(requestRemoveResult);
                }
                if (typeof requestRemoveResult.then === 'function') {
                    requestRemoveResult.then(handleRevert);
                }
            }),
            REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                item.revert(createRevertFunction(state.options.server.url, state.options.server.revert), query('GET_FORCE_REVERT')).then(function() {
                    var shouldRemove = state.options.instantUpload || isMockItem(item);
                    if (shouldRemove) {
                        dispatch('REMOVE_ITEM', {
                            query: item.id
                        });
                    }
                }).catch(function() {});
            }),
            SET_OPTIONS: function SET_OPTIONS(_ref11) {
                var options = _ref11.options;
                // get all keys passed
                var optionKeys = Object.keys(options);
                // get prioritized keyed to include (remove once not in options object)
                var prioritizedOptionKeys = PrioritizedOptions.filter(function(key) {
                    return optionKeys.includes(key);
                });
                // order the keys, prioritized first, then rest
                var orderedOptionKeys = [].concat(_toConsumableArray(prioritizedOptionKeys), _toConsumableArray(Object.keys(options).filter(function(key) {
                    return !prioritizedOptionKeys.includes(key);
                })));
                // dispatch set event for each option
                orderedOptionKeys.forEach(function(key) {
                    dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
                        value: options[key]
                    });
                });
            }
        };
    };
    var PrioritizedOptions = [
        'server'
    ];
    var formatFilename = function formatFilename(name) {
        return name;
    };
    var createElement$1 = function createElement(tagName) {
        return document.createElement(tagName);
    };
    var text = function text(node, value) {
        var textNode = node.childNodes[0];
        if (!textNode) {
            textNode = document.createTextNode(value);
            node.appendChild(textNode);
        } else if (value !== textNode.nodeValue) {
            textNode.nodeValue = value;
        }
    };
    var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees % 360 - 90) * Math.PI / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians)
        };
    };
    var describeArc = function describeArc(x, y, radius, startAngle, endAngle, arcSweep) {
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        return [
            'M',
            start.x,
            start.y,
            'A',
            radius,
            radius,
            0,
            arcSweep,
            0,
            end.x,
            end.y
        ].join(' ');
    };
    var percentageArc = function percentageArc(x, y, radius, from, to) {
        var arcSweep = 1;
        if (to > from && to - from <= 0.5) {
            arcSweep = 0;
        }
        if (from > to && from - to >= 0.5) {
            arcSweep = 0;
        }
        return describeArc(x, y, radius, Math.min(0.9999, from) * 360, Math.min(0.9999, to) * 360, arcSweep);
    };
    var create = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // start at 0
        props.spin = false;
        props.progress = 0;
        props.opacity = 0;
        // svg
        var svg = createElement('svg');
        root.ref.path = createElement('path', {
            'stroke-width': 2,
            'stroke-linecap': 'round'
        });
        svg.appendChild(root.ref.path);
        root.ref.svg = svg;
        root.appendChild(svg);
    };
    var write = function write(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        if (props.opacity === 0) {
            return;
        }
        if (props.align) {
            root.element.dataset.align = props.align;
        }
        // get width of stroke
        var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);
        // calculate size of ring
        var size = root.rect.element.width * 0.5;
        // ring state
        var ringFrom = 0;
        var ringTo = 0;
        // now in busy mode
        if (props.spin) {
            ringFrom = 0;
            ringTo = 0.5;
        } else {
            ringFrom = 0;
            ringTo = props.progress;
        }
        // get arc path
        var coordinates = percentageArc(size, size, size - ringStrokeWidth, ringFrom, ringTo);
        // update progress bar
        attr(root.ref.path, 'd', coordinates);
        // hide while contains 0 value
        attr(root.ref.path, 'stroke-opacity', props.spin || props.progress > 0 ? 1 : 0);
    };
    var progressIndicator = createView({
        tag: 'div',
        name: 'progress-indicator',
        ignoreRectUpdate: true,
        ignoreRect: true,
        create: create,
        write: write,
        mixins: {
            apis: [
                'progress',
                'spin',
                'align'
            ],
            styles: [
                'opacity'
            ],
            animations: {
                opacity: {
                    type: 'tween',
                    duration: 500
                },
                progress: {
                    type: 'spring',
                    stiffness: 0.95,
                    damping: 0.65,
                    mass: 10
                }
            }
        }
    });
    var create$1 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        root.element.innerHTML = (props.icon || '') + ('<span>' + props.label + '</span>');
        props.isDisabled = false;
    };
    var write$1 = function write(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        var isDisabled = props.isDisabled;
        var shouldDisable = root.query('GET_DISABLED') || props.opacity === 0;
        if (shouldDisable && !isDisabled) {
            props.isDisabled = true;
            attr(root.element, 'disabled', 'disabled');
        } else if (!shouldDisable && isDisabled) {
            props.isDisabled = false;
            root.element.removeAttribute('disabled');
        }
    };
    var fileActionButton = createView({
        tag: 'button',
        attributes: {
            type: 'button'
        },
        ignoreRect: true,
        ignoreRectUpdate: true,
        name: 'file-action-button',
        mixins: {
            apis: [
                'label'
            ],
            styles: [
                'translateX',
                'translateY',
                'scaleX',
                'scaleY',
                'opacity'
            ],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: {
                    type: 'tween',
                    duration: 250
                }
            },
            listeners: true
        },
        create: create$1,
        write: write$1
    });
    var toNaturalFileSize = function toNaturalFileSize(bytes) {
        var decimalSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
        var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _options$labelBytes = options.labelBytes, labelBytes = _options$labelBytes === void 0 ? 'bytes' : _options$labelBytes, _options$labelKilobyt = options.labelKilobytes, labelKilobytes = _options$labelKilobyt === void 0 ? 'KB' : _options$labelKilobyt, _options$labelMegabyt = options.labelMegabytes, labelMegabytes = _options$labelMegabyt === void 0 ? 'MB' : _options$labelMegabyt, _options$labelGigabyt = options.labelGigabytes, labelGigabytes = _options$labelGigabyt === void 0 ? 'GB' : _options$labelGigabyt;
        // no negative byte sizes
        bytes = Math.round(Math.abs(bytes));
        var KB = base;
        var MB = base * base;
        var GB = base * base * base;
        // just bytes
        if (bytes < KB) {
            return bytes + ' ' + labelBytes;
        }
        // kilobytes
        if (bytes < MB) {
            return Math.floor(bytes / KB) + ' ' + labelKilobytes;
        }
        // megabytes
        if (bytes < GB) {
            return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' ' + labelMegabytes;
        }
        // gigabytes
        return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' ' + labelGigabytes;
    };
    var removeDecimalsWhenZero = function removeDecimalsWhenZero(value, decimalCount, separator) {
        return value.toFixed(decimalCount).split('.').filter(function(part) {
            return part !== '0';
        }).join(separator);
    };
    var create$2 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // filename
        var fileName = createElement$1('span');
        fileName.className = 'filepond--file-info-main';
        // hide for screenreaders
        // the file is contained in a fieldset with legend that contains the filename
        // no need to read it twice
        attr(fileName, 'aria-hidden', 'true');
        root.appendChild(fileName);
        root.ref.fileName = fileName;
        // filesize
        var fileSize = createElement$1('span');
        fileSize.className = 'filepond--file-info-sub';
        root.appendChild(fileSize);
        root.ref.fileSize = fileSize;
        // set initial values
        text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
        text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };
    var updateFile = function updateFile(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        text(root.ref.fileSize, toNaturalFileSize(root.query('GET_ITEM_SIZE', props.id), '.', root.query('GET_FILE_SIZE_BASE'), root.query('GET_FILE_SIZE_LABELS', root.query)));
        text(root.ref.fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };
    var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
        var root = _ref3.root, props = _ref3.props;
        // if size is available don't fallback to unknown size message
        if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
            updateFile({
                root: root,
                props: props
            });
            return;
        }
        text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
    };
    var fileInfo = createView({
        name: 'file-info',
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: updateFile,
            DID_UPDATE_ITEM_META: updateFile,
            DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
            DID_THROW_ITEM_INVALID: updateFileSizeOnError
        }),
        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, {
                view: root
            }));
        },
        create: create$2,
        mixins: {
            styles: [
                'translateX',
                'translateY'
            ],
            animations: {
                translateX: 'spring',
                translateY: 'spring'
            }
        }
    });
    var toPercentage = function toPercentage(value) {
        return Math.round(value * 100);
    };
    var create$3 = function create(_ref) {
        var root = _ref.root;
        // main status
        var main = createElement$1('span');
        main.className = 'filepond--file-status-main';
        root.appendChild(main);
        root.ref.main = main;
        // sub status
        var sub = createElement$1('span');
        sub.className = 'filepond--file-status-sub';
        root.appendChild(sub);
        root.ref.sub = sub;
        didSetItemLoadProgress({
            root: root,
            action: {
                progress: null
            }
        });
    };
    var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
        var root = _ref2.root, action = _ref2.action;
        var title = action.progress === null ? root.query('GET_LABEL_FILE_LOADING') : root.query('GET_LABEL_FILE_LOADING') + ' ' + toPercentage(action.progress) + '%';
        text(root.ref.main, title);
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };
    var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
        var root = _ref3.root, action = _ref3.action;
        var title = action.progress === null ? root.query('GET_LABEL_FILE_PROCESSING') : root.query('GET_LABEL_FILE_PROCESSING') + ' ' + toPercentage(action.progress) + '%';
        text(root.ref.main, title);
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };
    var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
        var root = _ref4.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };
    var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
        var root = _ref5.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
    };
    var didCompleteItemProcessing = function didCompleteItemProcessing(_ref6) {
        var root = _ref6.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));
    };
    var clear = function clear(_ref7) {
        var root = _ref7.root;
        text(root.ref.main, '');
        text(root.ref.sub, '');
    };
    var error = function error(_ref8) {
        var root = _ref8.root, action = _ref8.action;
        text(root.ref.main, action.status.main);
        text(root.ref.sub, action.status.sub);
    };
    var fileStatus = createView({
        name: 'file-status',
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: clear,
            DID_REVERT_ITEM_PROCESSING: clear,
            DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
            DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
            DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
            DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
            DID_THROW_ITEM_LOAD_ERROR: error,
            DID_THROW_ITEM_INVALID: error,
            DID_THROW_ITEM_PROCESSING_ERROR: error,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
            DID_THROW_ITEM_REMOVE_ERROR: error
        }),
        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, {
                view: root
            }));
        },
        create: create$3,
        mixins: {
            styles: [
                'translateX',
                'translateY',
                'opacity'
            ],
            animations: {
                opacity: {
                    type: 'tween',
                    duration: 250
                },
                translateX: 'spring',
                translateY: 'spring'
            }
        }
    });
    /**
     * Button definitions for the file view
     */ var Buttons = {
        AbortItemLoad: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
            action: 'ABORT_ITEM_LOAD',
            className: 'filepond--action-abort-item-load',
            align: 'LOAD_INDICATOR_POSITION'
        },
        RetryItemLoad: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
            action: 'RETRY_ITEM_LOAD',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-load',
            align: 'BUTTON_PROCESS_ITEM_POSITION'
        },
        RemoveItem: {
            label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
            action: 'REQUEST_REMOVE_ITEM',
            icon: 'GET_ICON_REMOVE',
            className: 'filepond--action-remove-item',
            align: 'BUTTON_REMOVE_ITEM_POSITION'
        },
        ProcessItem: {
            label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
            action: 'REQUEST_ITEM_PROCESSING',
            icon: 'GET_ICON_PROCESS',
            className: 'filepond--action-process-item',
            align: 'BUTTON_PROCESS_ITEM_POSITION'
        },
        AbortItemProcessing: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
            action: 'ABORT_ITEM_PROCESSING',
            className: 'filepond--action-abort-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION'
        },
        RetryItemProcessing: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
            action: 'RETRY_ITEM_PROCESSING',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION'
        },
        RevertItemProcessing: {
            label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
            action: 'REQUEST_REVERT_ITEM_PROCESSING',
            icon: 'GET_ICON_UNDO',
            className: 'filepond--action-revert-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION'
        }
    };
    // make a list of buttons, we can then remove buttons from this list if they're disabled
    var ButtonKeys = [];
    forin(Buttons, function(key) {
        ButtonKeys.push(key);
    });
    var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
        if (getRemoveIndicatorAligment(root) === 'right') return 0;
        var buttonRect = root.ref.buttonRemoveItem.rect.element;
        return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
    };
    var calculateButtonWidth = function calculateButtonWidth(root) {
        var buttonRect = root.ref.buttonAbortItemLoad.rect.element;
        return buttonRect.width;
    };
    // Force on full pixels so text stays crips
    var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(root) {
        return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
    };
    var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(root) {
        return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
    };
    var getLoadIndicatorAlignment = function getLoadIndicatorAlignment(root) {
        return root.query('GET_STYLE_LOAD_INDICATOR_POSITION');
    };
    var getProcessIndicatorAlignment = function getProcessIndicatorAlignment(root) {
        return root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION');
    };
    var getRemoveIndicatorAligment = function getRemoveIndicatorAligment(root) {
        return root.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION');
    };
    var DefaultStyle = {
        buttonAbortItemLoad: {
            opacity: 0
        },
        buttonRetryItemLoad: {
            opacity: 0
        },
        buttonRemoveItem: {
            opacity: 0
        },
        buttonProcessItem: {
            opacity: 0
        },
        buttonAbortItemProcessing: {
            opacity: 0
        },
        buttonRetryItemProcessing: {
            opacity: 0
        },
        buttonRevertItemProcessing: {
            opacity: 0
        },
        loadProgressIndicator: {
            opacity: 0,
            align: getLoadIndicatorAlignment
        },
        processProgressIndicator: {
            opacity: 0,
            align: getProcessIndicatorAlignment
        },
        processingCompleteIndicator: {
            opacity: 0,
            scaleX: 0.75,
            scaleY: 0.75
        },
        info: {
            translateX: 0,
            translateY: 0,
            opacity: 0
        },
        status: {
            translateX: 0,
            translateY: 0,
            opacity: 0
        }
    };
    var IdleStyle = {
        buttonRemoveItem: {
            opacity: 1
        },
        buttonProcessItem: {
            opacity: 1
        },
        info: {
            translateX: calculateFileInfoOffset
        },
        status: {
            translateX: calculateFileInfoOffset
        }
    };
    var ProcessingStyle = {
        buttonAbortItemProcessing: {
            opacity: 1
        },
        processProgressIndicator: {
            opacity: 1
        },
        status: {
            opacity: 1
        }
    };
    var StyleMap = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                translateX: calculateFileInfoOffset,
                opacity: 1
            }
        },
        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: {
                opacity: 1
            },
            loadProgressIndicator: {
                opacity: 1
            },
            status: {
                opacity: 1
            }
        },
        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: {
                opacity: 1
            },
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                opacity: 1
            }
        },
        DID_START_ITEM_REMOVE: {
            processProgressIndicator: {
                opacity: 1,
                align: getRemoveIndicatorAligment
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                opacity: 0
            }
        },
        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: {
                opacity: 0,
                align: getRemoveIndicatorAligment
            },
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                opacity: 1,
                translateX: calculateFileInfoOffset
            }
        },
        DID_LOAD_ITEM: IdleStyle,
        DID_LOAD_LOCAL_ITEM: {
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                translateX: calculateFileInfoOffset
            }
        },
        DID_START_ITEM_PROCESSING: ProcessingStyle,
        DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: {
                opacity: 1
            },
            info: {
                opacity: 1
            },
            status: {
                opacity: 1
            }
        },
        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: {
                opacity: 1
            },
            buttonRetryItemProcessing: {
                opacity: 1
            },
            status: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            }
        },
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: {
                opacity: 1
            },
            status: {
                opacity: 1
            },
            info: {
                opacity: 1
            }
        },
        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: {
                opacity: 1
            },
            buttonProcessItem: {
                opacity: 1
            },
            info: {
                translateX: calculateFileInfoOffset
            },
            status: {
                opacity: 1
            }
        },
        DID_REVERT_ITEM_PROCESSING: IdleStyle
    };
    // complete indicator view
    var processingCompleteIndicatorView = createView({
        create: function create(_ref) {
            var root = _ref.root;
            root.element.innerHTML = root.query('GET_ICON_DONE');
        },
        name: 'processing-complete-indicator',
        ignoreRect: true,
        mixins: {
            styles: [
                'scaleX',
                'scaleY',
                'opacity'
            ],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                opacity: {
                    type: 'tween',
                    duration: 250
                }
            }
        }
    });
    /**
     * Creates the file view
     */ var create$4 = function create(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        // copy Buttons object
        var LocalButtons = Object.keys(Buttons).reduce(function(prev, curr) {
            prev[curr] = Object.assign({}, Buttons[curr]);
            return prev;
        }, {});
        var id = props.id;
        // allow reverting upload
        var allowRevert = root.query('GET_ALLOW_REVERT');
        // allow remove file
        var allowRemove = root.query('GET_ALLOW_REMOVE');
        // allow processing upload
        var allowProcess = root.query('GET_ALLOW_PROCESS');
        // is instant uploading, need this to determine the icon of the undo button
        var instantUpload = root.query('GET_INSTANT_UPLOAD');
        // is async set up
        var isAsync = root.query('IS_ASYNC');
        // should align remove item buttons
        var alignRemoveItemButton = root.query('GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN');
        // enabled buttons array
        var buttonFilter;
        if (isAsync) {
            if (allowProcess && !allowRevert) {
                // only remove revert button
                buttonFilter = function buttonFilter(key) {
                    return !/RevertItemProcessing/.test(key);
                };
            } else if (!allowProcess && allowRevert) {
                // only remove process button
                buttonFilter = function buttonFilter(key) {
                    return !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(key);
                };
            } else if (!allowProcess && !allowRevert) {
                // remove all process buttons
                buttonFilter = function buttonFilter(key) {
                    return !/Process/.test(key);
                };
            }
        } else {
            // no process controls available
            buttonFilter = function buttonFilter(key) {
                return !/Process/.test(key);
            };
        }
        var enabledButtons = buttonFilter ? ButtonKeys.filter(buttonFilter) : ButtonKeys.concat();
        // update icon and label for revert button when instant uploading
        if (instantUpload && allowRevert) {
            LocalButtons['RevertItemProcessing'].label = 'GET_LABEL_BUTTON_REMOVE_ITEM';
            LocalButtons['RevertItemProcessing'].icon = 'GET_ICON_REMOVE';
        }
        // remove last button (revert) if not allowed
        if (isAsync && !allowRevert) {
            var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
            map.info.translateX = calculateFileHorizontalCenterOffset;
            map.info.translateY = calculateFileVerticalCenterOffset;
            map.status.translateY = calculateFileVerticalCenterOffset;
            map.processingCompleteIndicator = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1
            };
        }
        // should align center
        if (isAsync && !allowProcess) {
            [
                'DID_START_ITEM_PROCESSING',
                'DID_REQUEST_ITEM_PROCESSING',
                'DID_UPDATE_ITEM_PROCESS_PROGRESS',
                'DID_THROW_ITEM_PROCESSING_ERROR'
            ].forEach(function(key) {
                StyleMap[key].status.translateY = calculateFileVerticalCenterOffset;
            });
            StyleMap['DID_THROW_ITEM_PROCESSING_ERROR'].status.translateX = calculateButtonWidth;
        }
        // move remove button to right
        if (alignRemoveItemButton && allowRevert) {
            LocalButtons['RevertItemProcessing'].align = 'BUTTON_REMOVE_ITEM_POSITION';
            var _map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
            _map.info.translateX = calculateFileInfoOffset;
            _map.status.translateY = calculateFileVerticalCenterOffset;
            _map.processingCompleteIndicator = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1
            };
        }
        // show/hide RemoveItem button
        if (!allowRemove) {
            LocalButtons['RemoveItem'].disabled = true;
        }
        // create the button views
        forin(LocalButtons, function(key, definition) {
            // create button
            var buttonView = root.createChildView(fileActionButton, {
                label: root.query(definition.label),
                icon: root.query(definition.icon),
                opacity: 0
            });
            // should be appended?
            if (enabledButtons.includes(key)) {
                root.appendChildView(buttonView);
            }
            // toggle
            if (definition.disabled) {
                buttonView.element.setAttribute('disabled', 'disabled');
                buttonView.element.setAttribute('hidden', 'hidden');
            }
            // add position attribute
            buttonView.element.dataset.align = root.query('GET_STYLE_' + definition.align);
            // add class
            buttonView.element.classList.add(definition.className);
            // handle interactions
            buttonView.on('click', function(e) {
                e.stopPropagation();
                if (definition.disabled) return;
                root.dispatch(definition.action, {
                    query: id
                });
            });
            // set reference
            root.ref['button' + key] = buttonView;
        });
        // checkmark
        root.ref.processingCompleteIndicator = root.appendChildView(root.createChildView(processingCompleteIndicatorView));
        root.ref.processingCompleteIndicator.element.dataset.align = root.query('GET_STYLE_BUTTON_PROCESS_ITEM_POSITION');
        // create file info view
        root.ref.info = root.appendChildView(root.createChildView(fileInfo, {
            id: id
        }));
        // create file status view
        root.ref.status = root.appendChildView(root.createChildView(fileStatus, {
            id: id
        }));
        // add progress indicators
        var loadIndicatorView = root.appendChildView(root.createChildView(progressIndicator, {
            opacity: 0,
            align: root.query('GET_STYLE_LOAD_INDICATOR_POSITION')
        }));
        loadIndicatorView.element.classList.add('filepond--load-indicator');
        root.ref.loadProgressIndicator = loadIndicatorView;
        var progressIndicatorView = root.appendChildView(root.createChildView(progressIndicator, {
            opacity: 0,
            align: root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION')
        }));
        progressIndicatorView.element.classList.add('filepond--process-indicator');
        root.ref.processProgressIndicator = progressIndicatorView;
        // current active styles
        root.ref.activeStyles = [];
    };
    var write$2 = function write(_ref3) {
        var root = _ref3.root, actions = _ref3.actions, props = _ref3.props;
        // route actions
        route({
            root: root,
            actions: actions,
            props: props
        });
        // select last state change action
        var action = actions.concat().filter(function(action) {
            return /^DID_/.test(action.type);
        }).reverse().find(function(action) {
            return StyleMap[action.type];
        });
        // a new action happened, let's get the matching styles
        if (action) {
            // define new active styles
            root.ref.activeStyles = [];
            var stylesToApply = StyleMap[action.type];
            forin(DefaultStyle, function(name, defaultStyles) {
                // get reference to control
                var control = root.ref[name];
                // loop over all styles for this control
                forin(defaultStyles, function(key, defaultValue) {
                    var value = stylesToApply[name] && typeof stylesToApply[name][key] !== 'undefined' ? stylesToApply[name][key] : defaultValue;
                    root.ref.activeStyles.push({
                        control: control,
                        key: key,
                        value: value
                    });
                });
            });
        }
        // apply active styles to element
        root.ref.activeStyles.forEach(function(_ref4) {
            var control = _ref4.control, key = _ref4.key, value = _ref4.value;
            control[key] = typeof value === 'function' ? value(root) : value;
        });
    };
    var route = createRoute({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(_ref5) {
            var root = _ref5.root, action = _ref5.action;
            root.ref.buttonAbortItemProcessing.label = action.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(_ref6) {
            var root = _ref6.root, action = _ref6.action;
            root.ref.buttonAbortItemLoad.label = action.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(_ref7) {
            var root = _ref7.root, action = _ref7.action;
            root.ref.buttonAbortItemRemoval.label = action.value;
        },
        DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref8) {
            var root = _ref8.root;
            root.ref.processProgressIndicator.spin = true;
            root.ref.processProgressIndicator.progress = 0;
        },
        DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref9) {
            var root = _ref9.root;
            root.ref.loadProgressIndicator.spin = true;
            root.ref.loadProgressIndicator.progress = 0;
        },
        DID_START_ITEM_REMOVE: function DID_START_ITEM_REMOVE(_ref10) {
            var root = _ref10.root;
            root.ref.processProgressIndicator.spin = true;
            root.ref.processProgressIndicator.progress = 0;
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(_ref11) {
            var root = _ref11.root, action = _ref11.action;
            root.ref.loadProgressIndicator.spin = false;
            root.ref.loadProgressIndicator.progress = action.progress;
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(_ref12) {
            var root = _ref12.root, action = _ref12.action;
            root.ref.processProgressIndicator.spin = false;
            root.ref.processProgressIndicator.progress = action.progress;
        }
    });
    var file = createView({
        create: create$4,
        write: write$2,
        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, {
                view: root
            }));
        },
        name: 'file'
    });
    /**
     * Creates the file view
     */ var create$5 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // filename
        root.ref.fileName = createElement$1('legend');
        root.appendChild(root.ref.fileName);
        // file appended
        root.ref.file = root.appendChildView(root.createChildView(file, {
            id: props.id
        }));
        // data has moved to data.js
        root.ref.data = false;
    };
    /**
     * Data storage
     */ var didLoadItem = function didLoadItem(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        // updates the legend of the fieldset so screenreaders can better group buttons
        text(root.ref.fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };
    var fileWrapper = createView({
        create: create$5,
        ignoreRect: true,
        write: createRoute({
            DID_LOAD_ITEM: didLoadItem
        }),
        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, {
                view: root
            }));
        },
        tag: 'fieldset',
        name: 'file-wrapper'
    });
    var PANEL_SPRING_PROPS = {
        type: 'spring',
        damping: 0.6,
        mass: 7
    };
    var create$6 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        [
            {
                name: 'top'
            },
            {
                name: 'center',
                props: {
                    translateY: null,
                    scaleY: null
                },
                mixins: {
                    animations: {
                        scaleY: PANEL_SPRING_PROPS
                    },
                    styles: [
                        'translateY',
                        'scaleY'
                    ]
                }
            },
            {
                name: 'bottom',
                props: {
                    translateY: null
                },
                mixins: {
                    animations: {
                        translateY: PANEL_SPRING_PROPS
                    },
                    styles: [
                        'translateY'
                    ]
                }
            }
        ].forEach(function(section) {
            createSection(root, section, props.name);
        });
        root.element.classList.add('filepond--' + props.name);
        root.ref.scalable = null;
    };
    var createSection = function createSection(root, section, className) {
        var viewConstructor = createView({
            name: 'panel-' + section.name + ' filepond--' + className,
            mixins: section.mixins,
            ignoreRectUpdate: true
        });
        var view = root.createChildView(viewConstructor, section.props);
        root.ref[section.name] = root.appendChildView(view);
    };
    var write$3 = function write(_ref2) {
        var root = _ref2.root, props = _ref2.props;
        // update scalable state
        if (root.ref.scalable === null || props.scalable !== root.ref.scalable) {
            root.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
            root.element.dataset.scalable = root.ref.scalable;
        }
        // no height, can't set
        if (!props.height) return;
        // get child rects
        var topRect = root.ref.top.rect.element;
        var bottomRect = root.ref.bottom.rect.element;
        // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
        var height = Math.max(topRect.height + bottomRect.height, props.height);
        // offset center part
        root.ref.center.translateY = topRect.height;
        // scale center part
        // use math ceil to prevent transparent lines because of rounding errors
        root.ref.center.scaleY = (height - topRect.height - bottomRect.height) / 100;
        // offset bottom part
        root.ref.bottom.translateY = height - bottomRect.height;
    };
    var panel = createView({
        name: 'panel',
        read: function read(_ref3) {
            var root = _ref3.root, props = _ref3.props;
            return props.heightCurrent = root.ref.bottom.translateY;
        },
        write: write$3,
        create: create$6,
        ignoreRect: true,
        mixins: {
            apis: [
                'height',
                'heightCurrent',
                'scalable'
            ]
        }
    });
    var createDragHelper = function createDragHelper(items) {
        var itemIds = items.map(function(item) {
            return item.id;
        });
        var prevIndex = undefined;
        return {
            setIndex: function setIndex(index) {
                prevIndex = index;
            },
            getIndex: function getIndex() {
                return prevIndex;
            },
            getItemIndex: function getItemIndex(item) {
                return itemIds.indexOf(item.id);
            }
        };
    };
    var ITEM_TRANSLATE_SPRING = {
        type: 'spring',
        stiffness: 0.75,
        damping: 0.45,
        mass: 10
    };
    var ITEM_SCALE_SPRING = 'spring';
    var StateMap = {
        DID_START_ITEM_LOAD: 'busy',
        DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
        DID_THROW_ITEM_INVALID: 'load-invalid',
        DID_THROW_ITEM_LOAD_ERROR: 'load-error',
        DID_LOAD_ITEM: 'idle',
        DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
        DID_START_ITEM_REMOVE: 'busy',
        DID_START_ITEM_PROCESSING: 'busy processing',
        DID_REQUEST_ITEM_PROCESSING: 'busy processing',
        DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
        DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
        DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
        DID_ABORT_ITEM_PROCESSING: 'cancelled',
        DID_REVERT_ITEM_PROCESSING: 'idle'
    };
    /**
     * Creates the file view
     */ var create$7 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // select
        root.ref.handleClick = function(e) {
            return root.dispatch('DID_ACTIVATE_ITEM', {
                id: props.id
            });
        };
        // set id
        root.element.id = 'filepond--item-' + props.id;
        root.element.addEventListener('click', root.ref.handleClick);
        // file view
        root.ref.container = root.appendChildView(root.createChildView(fileWrapper, {
            id: props.id
        }));
        // file panel
        root.ref.panel = root.appendChildView(root.createChildView(panel, {
            name: 'item-panel'
        }));
        // default start height
        root.ref.panel.height = null;
        // by default not marked for removal
        props.markedForRemoval = false;
        // if not allowed to reorder file items, exit here
        if (!root.query('GET_ALLOW_REORDER')) return;
        // set to idle so shows grab cursor
        root.element.dataset.dragState = 'idle';
        var grab = function grab(e) {
            if (!e.isPrimary) return;
            var removedActivateListener = false;
            var origin = {
                x: e.pageX,
                y: e.pageY
            };
            props.dragOrigin = {
                x: root.translateX,
                y: root.translateY
            };
            props.dragCenter = {
                x: e.offsetX,
                y: e.offsetY
            };
            var dragState = createDragHelper(root.query('GET_ACTIVE_ITEMS'));
            root.dispatch('DID_GRAB_ITEM', {
                id: props.id,
                dragState: dragState
            });
            var drag = function drag(e) {
                if (!e.isPrimary) return;
                e.stopPropagation();
                e.preventDefault();
                props.dragOffset = {
                    x: e.pageX - origin.x,
                    y: e.pageY - origin.y
                };
                // if dragged stop listening to clicks, will re-add when done dragging
                var dist = props.dragOffset.x * props.dragOffset.x + props.dragOffset.y * props.dragOffset.y;
                if (dist > 16 && !removedActivateListener) {
                    removedActivateListener = true;
                    root.element.removeEventListener('click', root.ref.handleClick);
                }
                root.dispatch('DID_DRAG_ITEM', {
                    id: props.id,
                    dragState: dragState
                });
            };
            var drop = function drop(e) {
                if (!e.isPrimary) return;
                props.dragOffset = {
                    x: e.pageX - origin.x,
                    y: e.pageY - origin.y
                };
                reset();
            };
            var cancel = function cancel() {
                reset();
            };
            var reset = function reset() {
                document.removeEventListener('pointercancel', cancel);
                document.removeEventListener('pointermove', drag);
                document.removeEventListener('pointerup', drop);
                root.dispatch('DID_DROP_ITEM', {
                    id: props.id,
                    dragState: dragState
                });
                // start listening to clicks again
                if (removedActivateListener) {
                    setTimeout(function() {
                        return root.element.addEventListener('click', root.ref.handleClick);
                    }, 0);
                }
            };
            document.addEventListener('pointercancel', cancel);
            document.addEventListener('pointermove', drag);
            document.addEventListener('pointerup', drop);
        };
        root.element.addEventListener('pointerdown', grab);
    };
    var route$1 = createRoute({
        DID_UPDATE_PANEL_HEIGHT: function DID_UPDATE_PANEL_HEIGHT(_ref2) {
            var root = _ref2.root, action = _ref2.action;
            root.height = action.height;
        }
    });
    var write$4 = createRoute({
        DID_GRAB_ITEM: function DID_GRAB_ITEM(_ref3) {
            var root = _ref3.root, props = _ref3.props;
            props.dragOrigin = {
                x: root.translateX,
                y: root.translateY
            };
        },
        DID_DRAG_ITEM: function DID_DRAG_ITEM(_ref4) {
            var root = _ref4.root;
            root.element.dataset.dragState = 'drag';
        },
        DID_DROP_ITEM: function DID_DROP_ITEM(_ref5) {
            var root = _ref5.root, props = _ref5.props;
            props.dragOffset = null;
            props.dragOrigin = null;
            root.element.dataset.dragState = 'drop';
        }
    }, function(_ref6) {
        var root = _ref6.root, actions = _ref6.actions, props = _ref6.props, shouldOptimize = _ref6.shouldOptimize;
        if (root.element.dataset.dragState === 'drop') {
            if (root.scaleX <= 1) {
                root.element.dataset.dragState = 'idle';
            }
        }
        // select last state change action
        var action = actions.concat().filter(function(action) {
            return /^DID_/.test(action.type);
        }).reverse().find(function(action) {
            return StateMap[action.type];
        });
        // no need to set same state twice
        if (action && action.type !== props.currentState) {
            // set current state
            props.currentState = action.type;
            // set state
            root.element.dataset.filepondItemState = StateMap[props.currentState] || '';
        }
        // route actions
        var aspectRatio = root.query('GET_ITEM_PANEL_ASPECT_RATIO') || root.query('GET_PANEL_ASPECT_RATIO');
        if (!aspectRatio) {
            route$1({
                root: root,
                actions: actions,
                props: props
            });
            if (!root.height && root.ref.container.rect.element.height > 0) {
                root.height = root.ref.container.rect.element.height;
            }
        } else if (!shouldOptimize) {
            root.height = root.rect.element.width * aspectRatio;
        }
        // sync panel height with item height
        if (shouldOptimize) {
            root.ref.panel.height = null;
        }
        root.ref.panel.height = root.height;
    });
    var item = createView({
        create: create$7,
        write: write$4,
        destroy: function destroy(_ref7) {
            var root = _ref7.root, props = _ref7.props;
            root.element.removeEventListener('click', root.ref.handleClick);
            root.dispatch('RELEASE_ITEM', {
                query: props.id
            });
        },
        tag: 'li',
        name: 'item',
        mixins: {
            apis: [
                'id',
                'interactionMethod',
                'markedForRemoval',
                'spawnDate',
                'dragCenter',
                'dragOrigin',
                'dragOffset'
            ],
            styles: [
                'translateX',
                'translateY',
                'scaleX',
                'scaleY',
                'opacity',
                'height'
            ],
            animations: {
                scaleX: ITEM_SCALE_SPRING,
                scaleY: ITEM_SCALE_SPRING,
                translateX: ITEM_TRANSLATE_SPRING,
                translateY: ITEM_TRANSLATE_SPRING,
                opacity: {
                    type: 'tween',
                    duration: 150
                }
            }
        }
    });
    var getItemsPerRow = function(horizontalSpace, itemWidth) {
        // add one pixel leeway, when using percentages for item width total items can be 1.99 per row
        return Math.max(1, Math.floor((horizontalSpace + 1) / itemWidth));
    };
    var getItemIndexByPosition = function getItemIndexByPosition(view, children, positionInView) {
        if (!positionInView) return;
        var horizontalSpace = view.rect.element.width;
        // const children = view.childViews;
        var l = children.length;
        var last = null;
        // -1, don't move items to accomodate (either add to top or bottom)
        if (l === 0 || positionInView.top < children[0].rect.element.top) return -1;
        // let's get the item width
        var item = children[0];
        var itemRect = item.rect.element;
        var itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
        var itemWidth = itemRect.width + itemHorizontalMargin;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
        // stack
        if (itemsPerRow === 1) {
            for(var index = 0; index < l; index++){
                var child = children[index];
                var childMid = child.rect.outer.top + child.rect.element.height * 0.5;
                if (positionInView.top < childMid) {
                    return index;
                }
            }
            return l;
        }
        // grid
        var itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
        var itemHeight = itemRect.height + itemVerticalMargin;
        for(var _index = 0; _index < l; _index++){
            var indexX = _index % itemsPerRow;
            var indexY = Math.floor(_index / itemsPerRow);
            var offsetX = indexX * itemWidth;
            var offsetY = indexY * itemHeight;
            var itemTop = offsetY - itemRect.marginTop;
            var itemRight = offsetX + itemWidth;
            var itemBottom = offsetY + itemHeight + itemRect.marginBottom;
            if (positionInView.top < itemBottom && positionInView.top > itemTop) {
                if (positionInView.left < itemRight) {
                    return _index;
                } else if (_index !== l - 1) {
                    last = _index;
                } else {
                    last = null;
                }
            }
        }
        if (last !== null) {
            return last;
        }
        return l;
    };
    var dropAreaDimensions = {
        height: 0,
        width: 0,
        get getHeight () {
            return this.height;
        },
        set setHeight (val){
            if (this.height === 0 || val === 0) this.height = val;
        },
        get getWidth () {
            return this.width;
        },
        set setWidth (val){
            if (this.width === 0 || val === 0) this.width = val;
        },
        setDimensions: function setDimensions(height, width) {
            if (this.height === 0 || height === 0) this.height = height;
            if (this.width === 0 || width === 0) this.width = width;
        }
    };
    var create$8 = function create(_ref) {
        var root = _ref.root;
        // need to set role to list as otherwise it won't be read as a list by VoiceOver
        attr(root.element, 'role', 'list');
        root.ref.lastItemSpanwDate = Date.now();
    };
    /**
     * Inserts a new item
     * @param root
     * @param action
     */ var addItemView = function addItemView(_ref2) {
        var root = _ref2.root, action = _ref2.action;
        var id = action.id, index = action.index, interactionMethod = action.interactionMethod;
        root.ref.addIndex = index;
        var now = Date.now();
        var spawnDate = now;
        var opacity = 1;
        if (interactionMethod !== InteractionMethod.NONE) {
            opacity = 0;
            var cooldown = root.query('GET_ITEM_INSERT_INTERVAL');
            var dist = now - root.ref.lastItemSpanwDate;
            spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
        }
        root.ref.lastItemSpanwDate = spawnDate;
        root.appendChildView(root.createChildView(// view type
        item, // props
        {
            spawnDate: spawnDate,
            id: id,
            opacity: opacity,
            interactionMethod: interactionMethod
        }), index);
    };
    var moveItem = function moveItem(item, x, y) {
        var vx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var vy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        // set to null to remove animation while dragging
        if (item.dragOffset) {
            item.translateX = null;
            item.translateY = null;
            item.translateX = item.dragOrigin.x + item.dragOffset.x;
            item.translateY = item.dragOrigin.y + item.dragOffset.y;
            item.scaleX = 1.025;
            item.scaleY = 1.025;
        } else {
            item.translateX = x;
            item.translateY = y;
            if (Date.now() > item.spawnDate) {
                // reveal element
                if (item.opacity === 0) {
                    introItemView(item, x, y, vx, vy);
                }
                // make sure is default scale every frame
                item.scaleX = 1;
                item.scaleY = 1;
                item.opacity = 1;
            }
        }
    };
    var introItemView = function introItemView(item, x, y, vx, vy) {
        if (item.interactionMethod === InteractionMethod.NONE) {
            item.translateX = null;
            item.translateX = x;
            item.translateY = null;
            item.translateY = y;
        } else if (item.interactionMethod === InteractionMethod.DROP) {
            item.translateX = null;
            item.translateX = x - vx * 20;
            item.translateY = null;
            item.translateY = y - vy * 10;
            item.scaleX = 0.8;
            item.scaleY = 0.8;
        } else if (item.interactionMethod === InteractionMethod.BROWSE) {
            item.translateY = null;
            item.translateY = y - 30;
        } else if (item.interactionMethod === InteractionMethod.API) {
            item.translateX = null;
            item.translateX = x - 30;
            item.translateY = null;
        }
    };
    /**
     * Removes an existing item
     * @param root
     * @param action
     */ var removeItemView = function removeItemView(_ref3) {
        var root = _ref3.root, action = _ref3.action;
        var id = action.id;
        // get the view matching the given id
        var view = root.childViews.find(function(child) {
            return child.id === id;
        });
        // if no view found, exit
        if (!view) {
            return;
        }
        // animate view out of view
        view.scaleX = 0.9;
        view.scaleY = 0.9;
        view.opacity = 0;
        // mark for removal
        view.markedForRemoval = true;
    };
    var getItemHeight = function getItemHeight(child) {
        return child.rect.element.height + child.rect.element.marginBottom * 0.5 + child.rect.element.marginTop * 0.5;
    };
    var getItemWidth = function getItemWidth(child) {
        return child.rect.element.width + child.rect.element.marginLeft * 0.5 + child.rect.element.marginRight * 0.5;
    };
    var dragItem = function dragItem(_ref4) {
        var root = _ref4.root, action = _ref4.action;
        var id = action.id, dragState = action.dragState;
        // reference to item
        var item = root.query('GET_ITEM', {
            id: id
        });
        // get the view matching the given id
        var view = root.childViews.find(function(child) {
            return child.id === id;
        });
        var numItems = root.childViews.length;
        var oldIndex = dragState.getItemIndex(item);
        // if no view found, exit
        if (!view) return;
        var dragPosition = {
            x: view.dragOrigin.x + view.dragOffset.x + view.dragCenter.x,
            y: view.dragOrigin.y + view.dragOffset.y + view.dragCenter.y
        };
        // get drag area dimensions
        var dragHeight = getItemHeight(view);
        var dragWidth = getItemWidth(view);
        // get rows and columns (There will always be at least one row and one column if a file is present)
        var cols = Math.floor(root.rect.outer.width / dragWidth);
        if (cols > numItems) cols = numItems;
        // rows are used to find when we have left the preview area bounding box
        var rows = Math.floor(numItems / cols + 1);
        dropAreaDimensions.setHeight = dragHeight * rows;
        dropAreaDimensions.setWidth = dragWidth * cols;
        // get new index of dragged item
        var location1 = {
            y: Math.floor(dragPosition.y / dragHeight),
            x: Math.floor(dragPosition.x / dragWidth),
            getGridIndex: function getGridIndex() {
                if (dragPosition.y > dropAreaDimensions.getHeight || dragPosition.y < 0 || dragPosition.x > dropAreaDimensions.getWidth || dragPosition.x < 0) return oldIndex;
                return this.y * cols + this.x;
            },
            getColIndex: function getColIndex() {
                var items = root.query('GET_ACTIVE_ITEMS');
                var visibleChildren = root.childViews.filter(function(child) {
                    return child.rect.element.height;
                });
                var children = items.map(function(item) {
                    return visibleChildren.find(function(childView) {
                        return childView.id === item.id;
                    });
                });
                var currentIndex = children.findIndex(function(child) {
                    return child === view;
                });
                var dragHeight = getItemHeight(view);
                var l = children.length;
                var idx = l;
                var childHeight = 0;
                var childBottom = 0;
                var childTop = 0;
                for(var i = 0; i < l; i++){
                    childHeight = getItemHeight(children[i]);
                    childTop = childBottom;
                    childBottom = childTop + childHeight;
                    if (dragPosition.y < childBottom) {
                        if (currentIndex > i) {
                            if (dragPosition.y < childTop + dragHeight) {
                                idx = i;
                                break;
                            }
                            continue;
                        }
                        idx = i;
                        break;
                    }
                }
                return idx;
            }
        };
        // get new index
        var index = cols > 1 ? location1.getGridIndex() : location1.getColIndex();
        root.dispatch('MOVE_ITEM', {
            query: view,
            index: index
        });
        // if the index of the item changed, dispatch reorder action
        var currentIndex = dragState.getIndex();
        if (currentIndex === undefined || currentIndex !== index) {
            dragState.setIndex(index);
            if (currentIndex === undefined) return;
            root.dispatch('DID_REORDER_ITEMS', {
                items: root.query('GET_ACTIVE_ITEMS'),
                origin: oldIndex,
                target: index
            });
        }
    };
    /**
     * Setup action routes
     */ var route$2 = createRoute({
        DID_ADD_ITEM: addItemView,
        DID_REMOVE_ITEM: removeItemView,
        DID_DRAG_ITEM: dragItem
    });
    /**
     * Write to view
     * @param root
     * @param actions
     * @param props
     */ var write$5 = function write(_ref5) {
        var root = _ref5.root, props = _ref5.props, actions = _ref5.actions, shouldOptimize = _ref5.shouldOptimize;
        // route actions
        route$2({
            root: root,
            props: props,
            actions: actions
        });
        var dragCoordinates = props.dragCoordinates;
        // available space on horizontal axis
        var horizontalSpace = root.rect.element.width;
        // only draw children that have dimensions
        var visibleChildren = root.childViews.filter(function(child) {
            return child.rect.element.height;
        });
        // sort based on current active items
        var children = root.query('GET_ACTIVE_ITEMS').map(function(item) {
            return visibleChildren.find(function(child) {
                return child.id === item.id;
            });
        }).filter(function(item) {
            return item;
        });
        // get index
        var dragIndex = dragCoordinates ? getItemIndexByPosition(root, children, dragCoordinates) : null;
        // add index is used to reserve the dropped/added item index till the actual item is rendered
        var addIndex = root.ref.addIndex || null;
        // add index no longer needed till possibly next draw
        root.ref.addIndex = null;
        var dragIndexOffset = 0;
        var removeIndexOffset = 0;
        var addIndexOffset = 0;
        if (children.length === 0) return;
        var childRect = children[0].rect.element;
        var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
        var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
        var itemWidth = childRect.width + itemHorizontalMargin;
        var itemHeight = childRect.height + itemVerticalMargin;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
        // stack
        if (itemsPerRow === 1) {
            var offsetY = 0;
            var dragOffset = 0;
            children.forEach(function(child, index) {
                if (dragIndex) {
                    var dist = index - dragIndex;
                    if (dist === -2) {
                        dragOffset = -itemVerticalMargin * 0.25;
                    } else if (dist === -1) {
                        dragOffset = -itemVerticalMargin * 0.75;
                    } else if (dist === 0) {
                        dragOffset = itemVerticalMargin * 0.75;
                    } else if (dist === 1) {
                        dragOffset = itemVerticalMargin * 0.25;
                    } else {
                        dragOffset = 0;
                    }
                }
                if (shouldOptimize) {
                    child.translateX = null;
                    child.translateY = null;
                }
                if (!child.markedForRemoval) {
                    moveItem(child, 0, offsetY + dragOffset);
                }
                var itemHeight = child.rect.element.height + itemVerticalMargin;
                var visualHeight = itemHeight * (child.markedForRemoval ? child.opacity : 1);
                offsetY += visualHeight;
            });
        } else {
            var prevX = 0;
            var prevY = 0;
            children.forEach(function(child, index) {
                if (index === dragIndex) {
                    dragIndexOffset = 1;
                }
                if (index === addIndex) {
                    addIndexOffset += 1;
                }
                if (child.markedForRemoval && child.opacity < 0.5) {
                    removeIndexOffset -= 1;
                }
                var visualIndex = index + addIndexOffset + dragIndexOffset + removeIndexOffset;
                var indexX = visualIndex % itemsPerRow;
                var indexY = Math.floor(visualIndex / itemsPerRow);
                var offsetX = indexX * itemWidth;
                var offsetY = indexY * itemHeight;
                var vectorX = Math.sign(offsetX - prevX);
                var vectorY = Math.sign(offsetY - prevY);
                prevX = offsetX;
                prevY = offsetY;
                if (child.markedForRemoval) return;
                if (shouldOptimize) {
                    child.translateX = null;
                    child.translateY = null;
                }
                moveItem(child, offsetX, offsetY, vectorX, vectorY);
            });
        }
    };
    /**
     * Filters actions that are meant specifically for a certain child of the list
     * @param child
     * @param actions
     */ var filterSetItemActions = function filterSetItemActions(child, actions) {
        return actions.filter(function(action) {
            // if action has an id, filter out actions that don't have this child id
            if (action.data && action.data.id) {
                return child.id === action.data.id;
            }
            // allow all other actions
            return true;
        });
    };
    var list = createView({
        create: create$8,
        write: write$5,
        tag: 'ul',
        name: 'list',
        didWriteView: function didWriteView(_ref6) {
            var root = _ref6.root;
            root.childViews.filter(function(view) {
                return view.markedForRemoval && view.opacity === 0 && view.resting;
            }).forEach(function(view) {
                view._destroy();
                root.removeChildView(view);
            });
        },
        filterFrameActionsForChild: filterSetItemActions,
        mixins: {
            apis: [
                'dragCoordinates'
            ]
        }
    });
    var create$9 = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        root.ref.list = root.appendChildView(root.createChildView(list));
        props.dragCoordinates = null;
        props.overflowing = false;
    };
    var storeDragCoordinates = function storeDragCoordinates(_ref2) {
        var root = _ref2.root, props = _ref2.props, action = _ref2.action;
        if (!root.query('GET_ITEM_INSERT_LOCATION_FREEDOM')) return;
        props.dragCoordinates = {
            left: action.position.scopeLeft - root.ref.list.rect.element.left,
            top: action.position.scopeTop - (root.rect.outer.top + root.rect.element.marginTop + root.rect.element.scrollTop)
        };
    };
    var clearDragCoordinates = function clearDragCoordinates(_ref3) {
        var props = _ref3.props;
        props.dragCoordinates = null;
    };
    var route$3 = createRoute({
        DID_DRAG: storeDragCoordinates,
        DID_END_DRAG: clearDragCoordinates
    });
    var write$6 = function write(_ref4) {
        var root = _ref4.root, props = _ref4.props, actions = _ref4.actions;
        // route actions
        route$3({
            root: root,
            props: props,
            actions: actions
        });
        // current drag position
        root.ref.list.dragCoordinates = props.dragCoordinates;
        // if currently overflowing but no longer received overflow
        if (props.overflowing && !props.overflow) {
            props.overflowing = false;
            // reset overflow state
            root.element.dataset.state = '';
            root.height = null;
        }
        // if is not overflowing currently but does receive overflow value
        if (props.overflow) {
            var newHeight = Math.round(props.overflow);
            if (newHeight !== root.height) {
                props.overflowing = true;
                root.element.dataset.state = 'overflow';
                root.height = newHeight;
            }
        }
    };
    var listScroller = createView({
        create: create$9,
        write: write$6,
        name: 'list-scroller',
        mixins: {
            apis: [
                'overflow',
                'dragCoordinates'
            ],
            styles: [
                'height',
                'translateY'
            ],
            animations: {
                translateY: 'spring'
            }
        }
    });
    var attrToggle = function attrToggle(element, name, state) {
        var enabledValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        if (state) {
            attr(element, name, enabledValue);
        } else {
            element.removeAttribute(name);
        }
    };
    var resetFileInput = function resetFileInput(input) {
        // no value, no need to reset
        if (!input || input.value === '') {
            return;
        }
        try {
            // for modern browsers
            input.value = '';
        } catch (err) {}
        // for IE10
        if (input.value) {
            // quickly append input to temp form and reset form
            var form = createElement$1('form');
            var parentNode = input.parentNode;
            var ref = input.nextSibling;
            form.appendChild(input);
            form.reset();
            // re-inject input where it originally was
            if (ref) {
                parentNode.insertBefore(input, ref);
            } else {
                parentNode.appendChild(input);
            }
        }
    };
    var create$a = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // set id so can be referenced from outside labels
        root.element.id = 'filepond--browser-' + props.id;
        // set name of element (is removed when a value is set)
        attr(root.element, 'name', root.query('GET_NAME'));
        // we have to link this element to the status element
        attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);
        // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
        attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);
        // set configurable props
        setAcceptedFileTypes({
            root: root,
            action: {
                value: root.query('GET_ACCEPTED_FILE_TYPES')
            }
        });
        toggleAllowMultiple({
            root: root,
            action: {
                value: root.query('GET_ALLOW_MULTIPLE')
            }
        });
        toggleDirectoryFilter({
            root: root,
            action: {
                value: root.query('GET_ALLOW_DIRECTORIES_ONLY')
            }
        });
        toggleDisabled({
            root: root
        });
        toggleRequired({
            root: root,
            action: {
                value: root.query('GET_REQUIRED')
            }
        });
        setCaptureMethod({
            root: root,
            action: {
                value: root.query('GET_CAPTURE_METHOD')
            }
        });
        // handle changes to the input field
        root.ref.handleChange = function(e) {
            if (!root.element.value) {
                return;
            }
            // extract files and move value of webkitRelativePath path to _relativePath
            var files = Array.from(root.element.files).map(function(file) {
                file._relativePath = file.webkitRelativePath;
                return file;
            });
            // we add a little delay so the OS file select window can move out of the way before we add our file
            setTimeout(function() {
                // load files
                props.onload(files);
                // reset input, it's just for exposing a method to drop files, should not retain any state
                resetFileInput(root.element);
            }, 250);
        };
        root.element.addEventListener('change', root.ref.handleChange);
    };
    var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
        var root = _ref2.root, action = _ref2.action;
        if (!root.query('GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE')) return;
        attrToggle(root.element, 'accept', !!action.value, action.value ? action.value.join(',') : '');
    };
    var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
        var root = _ref3.root, action = _ref3.action;
        attrToggle(root.element, 'multiple', action.value);
    };
    var toggleDirectoryFilter = function toggleDirectoryFilter(_ref4) {
        var root = _ref4.root, action = _ref4.action;
        attrToggle(root.element, 'webkitdirectory', action.value);
    };
    var toggleDisabled = function toggleDisabled(_ref5) {
        var root = _ref5.root;
        var isDisabled = root.query('GET_DISABLED');
        var doesAllowBrowse = root.query('GET_ALLOW_BROWSE');
        var disableField = isDisabled || !doesAllowBrowse;
        attrToggle(root.element, 'disabled', disableField);
    };
    var toggleRequired = function toggleRequired(_ref6) {
        var root = _ref6.root, action = _ref6.action;
        // want to remove required, always possible
        if (!action.value) {
            attrToggle(root.element, 'required', false);
        } else if (root.query('GET_TOTAL_ITEMS') === 0) {
            attrToggle(root.element, 'required', true);
        }
    };
    var setCaptureMethod = function setCaptureMethod(_ref7) {
        var root = _ref7.root, action = _ref7.action;
        attrToggle(root.element, 'capture', !!action.value, action.value === true ? '' : action.value);
    };
    var updateRequiredStatus = function updateRequiredStatus(_ref8) {
        var root = _ref8.root;
        var element = root.element;
        // always remove the required attribute when more than zero items
        if (root.query('GET_TOTAL_ITEMS') > 0) {
            attrToggle(element, 'required', false);
            attrToggle(element, 'name', false);
        } else {
            // add name attribute
            attrToggle(element, 'name', true, root.query('GET_NAME'));
            // remove any validation messages
            var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
            if (shouldCheckValidity) {
                element.setCustomValidity('');
            }
            // we only add required if the field has been deemed required
            if (root.query('GET_REQUIRED')) {
                attrToggle(element, 'required', true);
            }
        }
    };
    var updateFieldValidityStatus = function updateFieldValidityStatus(_ref9) {
        var root = _ref9.root;
        var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
        if (!shouldCheckValidity) return;
        root.element.setCustomValidity(root.query('GET_LABEL_INVALID_FIELD'));
    };
    var browser = createView({
        tag: 'input',
        name: 'browser',
        ignoreRect: true,
        ignoreRectUpdate: true,
        attributes: {
            type: 'file'
        },
        create: create$a,
        destroy: function destroy(_ref10) {
            var root = _ref10.root;
            root.element.removeEventListener('change', root.ref.handleChange);
        },
        write: createRoute({
            DID_LOAD_ITEM: updateRequiredStatus,
            DID_REMOVE_ITEM: updateRequiredStatus,
            DID_THROW_ITEM_INVALID: updateFieldValidityStatus,
            DID_SET_DISABLED: toggleDisabled,
            DID_SET_ALLOW_BROWSE: toggleDisabled,
            DID_SET_ALLOW_DIRECTORIES_ONLY: toggleDirectoryFilter,
            DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
            DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
            DID_SET_CAPTURE_METHOD: setCaptureMethod,
            DID_SET_REQUIRED: toggleRequired
        })
    });
    var Key = {
        ENTER: 13,
        SPACE: 32
    };
    var create$b = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // create the label and link it to the file browser
        var label = createElement$1('label');
        attr(label, 'for', 'filepond--browser-' + props.id);
        // use for labeling file input (aria-labelledby on file input)
        attr(label, 'id', 'filepond--drop-label-' + props.id);
        // hide the label for screenreaders, the input element will read the contents of the label when it's focussed. If we don't set aria-hidden the screenreader will also navigate the contents of the label separately from the input.
        attr(label, 'aria-hidden', 'true');
        // handle keys
        root.ref.handleKeyDown = function(e) {
            var isActivationKey = e.keyCode === Key.ENTER || e.keyCode === Key.SPACE;
            if (!isActivationKey) return;
            // stops from triggering the element a second time
            e.preventDefault();
            // click link (will then in turn activate file input)
            root.ref.label.click();
        };
        root.ref.handleClick = function(e) {
            var isLabelClick = e.target === label || label.contains(e.target);
            // don't want to click twice
            if (isLabelClick) return;
            // click link (will then in turn activate file input)
            root.ref.label.click();
        };
        // attach events
        label.addEventListener('keydown', root.ref.handleKeyDown);
        root.element.addEventListener('click', root.ref.handleClick);
        // update
        updateLabelValue(label, props.caption);
        // add!
        root.appendChild(label);
        root.ref.label = label;
    };
    var updateLabelValue = function updateLabelValue(label, value) {
        label.innerHTML = value;
        var clickable = label.querySelector('.filepond--label-action');
        if (clickable) {
            attr(clickable, 'tabindex', '0');
        }
        return value;
    };
    var dropLabel = createView({
        name: 'drop-label',
        ignoreRect: true,
        create: create$b,
        destroy: function destroy(_ref2) {
            var root = _ref2.root;
            root.ref.label.addEventListener('keydown', root.ref.handleKeyDown);
            root.element.removeEventListener('click', root.ref.handleClick);
        },
        write: createRoute({
            DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref3) {
                var root = _ref3.root, action = _ref3.action;
                updateLabelValue(root.ref.label, action.value);
            }
        }),
        mixins: {
            styles: [
                'opacity',
                'translateX',
                'translateY'
            ],
            animations: {
                opacity: {
                    type: 'tween',
                    duration: 150
                },
                translateX: 'spring',
                translateY: 'spring'
            }
        }
    });
    var blob = createView({
        name: 'drip-blob',
        ignoreRect: true,
        mixins: {
            styles: [
                'translateX',
                'translateY',
                'scaleX',
                'scaleY',
                'opacity'
            ],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: {
                    type: 'tween',
                    duration: 250
                }
            }
        }
    });
    var addBlob = function addBlob(_ref) {
        var root = _ref.root;
        var centerX = root.rect.element.width * 0.5;
        var centerY = root.rect.element.height * 0.5;
        root.ref.blob = root.appendChildView(root.createChildView(blob, {
            opacity: 0,
            scaleX: 2.5,
            scaleY: 2.5,
            translateX: centerX,
            translateY: centerY
        }));
    };
    var moveBlob = function moveBlob(_ref2) {
        var root = _ref2.root, action = _ref2.action;
        if (!root.ref.blob) {
            addBlob({
                root: root
            });
            return;
        }
        root.ref.blob.translateX = action.position.scopeLeft;
        root.ref.blob.translateY = action.position.scopeTop;
        root.ref.blob.scaleX = 1;
        root.ref.blob.scaleY = 1;
        root.ref.blob.opacity = 1;
    };
    var hideBlob = function hideBlob(_ref3) {
        var root = _ref3.root;
        if (!root.ref.blob) {
            return;
        }
        root.ref.blob.opacity = 0;
    };
    var explodeBlob = function explodeBlob(_ref4) {
        var root = _ref4.root;
        if (!root.ref.blob) {
            return;
        }
        root.ref.blob.scaleX = 2.5;
        root.ref.blob.scaleY = 2.5;
        root.ref.blob.opacity = 0;
    };
    var write$7 = function write(_ref5) {
        var root = _ref5.root, props = _ref5.props, actions = _ref5.actions;
        route$4({
            root: root,
            props: props,
            actions: actions
        });
        var blob = root.ref.blob;
        if (actions.length === 0 && blob && blob.opacity === 0) {
            root.removeChildView(blob);
            root.ref.blob = null;
        }
    };
    var route$4 = createRoute({
        DID_DRAG: moveBlob,
        DID_DROP: explodeBlob,
        DID_END_DRAG: hideBlob
    });
    var drip = createView({
        ignoreRect: true,
        ignoreRectUpdate: true,
        name: 'drip',
        write: write$7
    });
    var setInputFiles = function setInputFiles(element, files) {
        try {
            // Create a DataTransfer instance and add a newly created file
            var dataTransfer = new DataTransfer();
            files.forEach(function(file) {
                if (file instanceof File) {
                    dataTransfer.items.add(file);
                } else {
                    dataTransfer.items.add(new File([
                        file
                    ], file.name, {
                        type: file.type
                    }));
                }
            });
            // Assign the DataTransfer files list to the file input
            element.files = dataTransfer.files;
        } catch (err) {
            return false;
        }
        return true;
    };
    var create$c = function create(_ref) {
        var root = _ref.root;
        return root.ref.fields = {};
    };
    var getField = function getField(root, id) {
        return root.ref.fields[id];
    };
    var syncFieldPositionsWithItems = function syncFieldPositionsWithItems(root) {
        root.query('GET_ACTIVE_ITEMS').forEach(function(item) {
            if (!root.ref.fields[item.id]) return;
            root.element.appendChild(root.ref.fields[item.id]);
        });
    };
    var didReorderItems = function didReorderItems(_ref2) {
        var root = _ref2.root;
        return syncFieldPositionsWithItems(root);
    };
    var didAddItem = function didAddItem(_ref3) {
        var root = _ref3.root, action = _ref3.action;
        var fileItem = root.query('GET_ITEM', action.id);
        var isLocalFile = fileItem.origin === FileOrigin.LOCAL;
        var shouldUseFileInput = !isLocalFile && root.query('SHOULD_UPDATE_FILE_INPUT');
        var dataContainer = createElement$1('input');
        dataContainer.type = shouldUseFileInput ? 'file' : 'hidden';
        dataContainer.name = root.query('GET_NAME');
        dataContainer.disabled = root.query('GET_DISABLED');
        root.ref.fields[action.id] = dataContainer;
        syncFieldPositionsWithItems(root);
    };
    var didLoadItem$1 = function didLoadItem(_ref4) {
        var root = _ref4.root, action = _ref4.action;
        var field = getField(root, action.id);
        if (!field) return;
        // store server ref in hidden input
        if (action.serverFileReference !== null) field.value = action.serverFileReference;
        // store file item in file input
        if (!root.query('SHOULD_UPDATE_FILE_INPUT')) return;
        var fileItem = root.query('GET_ITEM', action.id);
        setInputFiles(field, [
            fileItem.file
        ]);
    };
    var didPrepareOutput = function didPrepareOutput(_ref5) {
        var root = _ref5.root, action = _ref5.action;
        // this timeout pushes the handler after 'load'
        if (!root.query('SHOULD_UPDATE_FILE_INPUT')) return;
        setTimeout(function() {
            var field = getField(root, action.id);
            if (!field) return;
            setInputFiles(field, [
                action.file
            ]);
        }, 0);
    };
    var didSetDisabled = function didSetDisabled(_ref6) {
        var root = _ref6.root;
        root.element.disabled = root.query('GET_DISABLED');
    };
    var didRemoveItem = function didRemoveItem(_ref7) {
        var root = _ref7.root, action = _ref7.action;
        var field = getField(root, action.id);
        if (!field) return;
        if (field.parentNode) field.parentNode.removeChild(field);
        delete root.ref.fields[action.id];
    };
    // only runs for server files. will refuse to update the value if the field
    // is a file field
    var didDefineValue = function didDefineValue(_ref8) {
        var root = _ref8.root, action = _ref8.action;
        var field = getField(root, action.id);
        if (!field) return;
        if (action.value === null) {
            // clear field value
            field.removeAttribute('value');
        } else {
            // set field value
            if (field.type != 'file') {
                field.value = action.value;
            }
        }
        syncFieldPositionsWithItems(root);
    };
    var write$8 = createRoute({
        DID_SET_DISABLED: didSetDisabled,
        DID_ADD_ITEM: didAddItem,
        DID_LOAD_ITEM: didLoadItem$1,
        DID_REMOVE_ITEM: didRemoveItem,
        DID_DEFINE_VALUE: didDefineValue,
        DID_PREPARE_OUTPUT: didPrepareOutput,
        DID_REORDER_ITEMS: didReorderItems,
        DID_SORT_ITEMS: didReorderItems
    });
    var data = createView({
        tag: 'fieldset',
        name: 'data',
        create: create$c,
        write: write$8,
        ignoreRect: true
    });
    var getRootNode = function getRootNode(element) {
        return 'getRootNode' in element ? element.getRootNode() : document;
    };
    var images = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp',
        'webp',
        'svg',
        'tiff'
    ];
    var text$1 = [
        'css',
        'csv',
        'html',
        'txt'
    ];
    var map = {
        zip: 'zip|compressed',
        epub: 'application/epub+zip'
    };
    var guesstimateMimeType = function guesstimateMimeType() {
        var extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        extension = extension.toLowerCase();
        if (images.includes(extension)) {
            return 'image/' + (extension === 'jpg' ? 'jpeg' : extension === 'svg' ? 'svg+xml' : extension);
        }
        if (text$1.includes(extension)) {
            return 'text/' + extension;
        }
        return map[extension] || '';
    };
    var requestDataTransferItems = function requestDataTransferItems(dataTransfer) {
        return new Promise(function(resolve, reject) {
            // try to get links from transfer, if found we'll exit immediately (unless a file is in the dataTransfer as well, this is because Firefox could represent the file as a URL and a file object at the same time)
            var links = getLinks(dataTransfer);
            if (links.length && !hasFiles(dataTransfer)) {
                return resolve(links);
            }
            // try to get files from the transfer
            getFiles(dataTransfer).then(resolve);
        });
    };
    /**
     * Test if datatransfer has files
     */ var hasFiles = function hasFiles(dataTransfer) {
        if (dataTransfer.files) return dataTransfer.files.length > 0;
        return false;
    };
    /**
     * Extracts files from a DataTransfer object
     */ var getFiles = function getFiles(dataTransfer) {
        return new Promise(function(resolve, reject) {
            // get the transfer items as promises
            var promisedFiles = (dataTransfer.items ? Array.from(dataTransfer.items) : [])// only keep file system items (files and directories)
            .filter(function(item) {
                return isFileSystemItem(item);
            })// map each item to promise
            .map(function(item) {
                return getFilesFromItem(item);
            });
            // if is empty, see if we can extract some info from the files property as a fallback
            if (!promisedFiles.length) {
                // TODO: test for directories (should not be allowed)
                // Use FileReader, problem is that the files property gets lost in the process
                resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
                return;
            }
            // done!
            Promise.all(promisedFiles).then(function(returnedFileGroups) {
                // flatten groups
                var files = [];
                returnedFileGroups.forEach(function(group) {
                    files.push.apply(files, group);
                });
                // done (filter out empty files)!
                resolve(files.filter(function(file) {
                    return file;
                }).map(function(file) {
                    if (!file._relativePath) file._relativePath = file.webkitRelativePath;
                    return file;
                }));
            }).catch(console.error);
        });
    };
    var isFileSystemItem = function isFileSystemItem(item) {
        if (isEntry(item)) {
            var entry = getAsEntry(item);
            if (entry) {
                return entry.isFile || entry.isDirectory;
            }
        }
        return item.kind === 'file';
    };
    var getFilesFromItem = function getFilesFromItem(item) {
        return new Promise(function(resolve, reject) {
            if (isDirectoryEntry(item)) {
                getFilesInDirectory(getAsEntry(item)).then(resolve).catch(reject);
                return;
            }
            resolve([
                item.getAsFile()
            ]);
        });
    };
    var getFilesInDirectory = function getFilesInDirectory(entry) {
        return new Promise(function(resolve, reject) {
            var files = [];
            // the total entries to read
            var dirCounter = 0;
            var fileCounter = 0;
            var resolveIfDone = function resolveIfDone() {
                if (fileCounter === 0 && dirCounter === 0) {
                    resolve(files);
                }
            };
            // the recursive function
            var readEntries = function readEntries(dirEntry) {
                dirCounter++;
                var directoryReader = dirEntry.createReader();
                // directories are returned in batches, we need to process all batches before we're done
                var readBatch = function readBatch() {
                    directoryReader.readEntries(function(entries) {
                        if (entries.length === 0) {
                            dirCounter--;
                            resolveIfDone();
                            return;
                        }
                        entries.forEach(function(entry) {
                            // recursively read more directories
                            if (entry.isDirectory) {
                                readEntries(entry);
                            } else {
                                // read as file
                                fileCounter++;
                                entry.file(function(file) {
                                    var correctedFile = correctMissingFileType(file);
                                    if (entry.fullPath) correctedFile._relativePath = entry.fullPath;
                                    files.push(correctedFile);
                                    fileCounter--;
                                    resolveIfDone();
                                });
                            }
                        });
                        // try to get next batch of files
                        readBatch();
                    }, reject);
                };
                // read first batch of files
                readBatch();
            };
            // go!
            readEntries(entry);
        });
    };
    var correctMissingFileType = function correctMissingFileType(file) {
        if (file.type.length) return file;
        var date = file.lastModifiedDate;
        var name = file.name;
        var type = guesstimateMimeType(getExtensionFromFilename(file.name));
        if (!type.length) return file;
        file = file.slice(0, file.size, type);
        file.name = name;
        file.lastModifiedDate = date;
        return file;
    };
    var isDirectoryEntry = function isDirectoryEntry(item) {
        return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
    };
    var isEntry = function isEntry(item) {
        return 'webkitGetAsEntry' in item;
    };
    var getAsEntry = function getAsEntry(item) {
        return item.webkitGetAsEntry();
    };
    /**
     * Extracts links from a DataTransfer object
     */ var getLinks = function getLinks(dataTransfer) {
        var links = [];
        try {
            // look in meta data property
            links = getLinksFromTransferMetaData(dataTransfer);
            if (links.length) {
                return links;
            }
            links = getLinksFromTransferURLData(dataTransfer);
        } catch (e) {
        // nope nope nope (probably IE trouble)
        }
        return links;
    };
    var getLinksFromTransferURLData = function getLinksFromTransferURLData(dataTransfer) {
        var data = dataTransfer.getData('url');
        if (typeof data === 'string' && data.length) {
            return [
                data
            ];
        }
        return [];
    };
    var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(dataTransfer) {
        var data = dataTransfer.getData('text/html');
        if (typeof data === 'string' && data.length) {
            var matches = data.match(/src\s*=\s*"(.+?)"/);
            if (matches) {
                return [
                    matches[1]
                ];
            }
        }
        return [];
    };
    var dragNDropObservers = [];
    var eventPosition = function eventPosition(e) {
        return {
            pageLeft: e.pageX,
            pageTop: e.pageY,
            scopeLeft: e.offsetX || e.layerX,
            scopeTop: e.offsetY || e.layerY
        };
    };
    var createDragNDropClient = function createDragNDropClient(element, scopeToObserve, filterElement) {
        var observer = getDragNDropObserver(scopeToObserve);
        var client = {
            element: element,
            filterElement: filterElement,
            state: null,
            ondrop: function ondrop() {},
            onenter: function onenter() {},
            ondrag: function ondrag() {},
            onexit: function onexit() {},
            onload: function onload() {},
            allowdrop: function allowdrop() {}
        };
        client.destroy = observer.addListener(client);
        return client;
    };
    var getDragNDropObserver = function getDragNDropObserver(element) {
        // see if already exists, if so, return
        var observer = dragNDropObservers.find(function(item) {
            return item.element === element;
        });
        if (observer) {
            return observer;
        }
        // create new observer, does not yet exist for this element
        var newObserver = createDragNDropObserver(element);
        dragNDropObservers.push(newObserver);
        return newObserver;
    };
    var createDragNDropObserver = function createDragNDropObserver(element) {
        var clients = [];
        var routes = {
            dragenter: dragenter,
            dragover: dragover,
            dragleave: dragleave,
            drop: drop
        };
        var handlers = {};
        forin(routes, function(event, createHandler) {
            handlers[event] = createHandler(element, clients);
            element.addEventListener(event, handlers[event], false);
        });
        var observer = {
            element: element,
            addListener: function addListener(client) {
                // add as client
                clients.push(client);
                // return removeListener function
                return function() {
                    // remove client
                    clients.splice(clients.indexOf(client), 1);
                    // if no more clients, clean up observer
                    if (clients.length === 0) {
                        dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);
                        forin(routes, function(event) {
                            element.removeEventListener(event, handlers[event], false);
                        });
                    }
                };
            }
        };
        return observer;
    };
    var elementFromPoint = function elementFromPoint(root, point) {
        if (!('elementFromPoint' in root)) {
            root = document;
        }
        return root.elementFromPoint(point.x, point.y);
    };
    var isEventTarget = function isEventTarget(e, target) {
        // get root
        var root = getRootNode(target);
        // get element at position
        // if root is not actual shadow DOM and does not have elementFromPoint method, use the one on document
        var elementAtPosition = elementFromPoint(root, {
            x: e.pageX - window.pageXOffset,
            y: e.pageY - window.pageYOffset
        });
        // test if target is the element or if one of its children is
        return elementAtPosition === target || target.contains(elementAtPosition);
    };
    var initialTarget = null;
    var setDropEffect = function setDropEffect(dataTransfer, effect) {
        // is in try catch as IE11 will throw error if not
        try {
            dataTransfer.dropEffect = effect;
        } catch (e) {}
    };
    var dragenter = function dragenter(root, clients) {
        return function(e) {
            e.preventDefault();
            initialTarget = e.target;
            clients.forEach(function(client) {
                var element = client.element, onenter = client.onenter;
                if (isEventTarget(e, element)) {
                    client.state = 'enter';
                    // fire enter event
                    onenter(eventPosition(e));
                }
            });
        };
    };
    var dragover = function dragover(root, clients) {
        return function(e) {
            e.preventDefault();
            var dataTransfer = e.dataTransfer;
            requestDataTransferItems(dataTransfer).then(function(items) {
                var overDropTarget = false;
                clients.some(function(client) {
                    var filterElement = client.filterElement, element = client.element, onenter = client.onenter, onexit = client.onexit, ondrag = client.ondrag, allowdrop = client.allowdrop;
                    // by default we can drop
                    setDropEffect(dataTransfer, 'copy');
                    // allow transfer of these items
                    var allowsTransfer = allowdrop(items);
                    // only used when can be dropped on page
                    if (!allowsTransfer) {
                        setDropEffect(dataTransfer, 'none');
                        return;
                    }
                    // targetting this client
                    if (isEventTarget(e, element)) {
                        overDropTarget = true;
                        // had no previous state, means we are entering this client
                        if (client.state === null) {
                            client.state = 'enter';
                            onenter(eventPosition(e));
                            return;
                        }
                        // now over element (no matter if it allows the drop or not)
                        client.state = 'over';
                        // needs to allow transfer
                        if (filterElement && !allowsTransfer) {
                            setDropEffect(dataTransfer, 'none');
                            return;
                        }
                        // dragging
                        ondrag(eventPosition(e));
                    } else {
                        // should be over an element to drop
                        if (filterElement && !overDropTarget) {
                            setDropEffect(dataTransfer, 'none');
                        }
                        // might have just left this client?
                        if (client.state) {
                            client.state = null;
                            onexit(eventPosition(e));
                        }
                    }
                });
            });
        };
    };
    var drop = function drop(root, clients) {
        return function(e) {
            e.preventDefault();
            var dataTransfer = e.dataTransfer;
            requestDataTransferItems(dataTransfer).then(function(items) {
                clients.forEach(function(client) {
                    var filterElement = client.filterElement, element = client.element, ondrop = client.ondrop, onexit = client.onexit, allowdrop = client.allowdrop;
                    client.state = null;
                    // if we're filtering on element we need to be over the element to drop
                    if (filterElement && !isEventTarget(e, element)) return;
                    // no transfer for this client
                    if (!allowdrop(items)) return onexit(eventPosition(e));
                    // we can drop these items on this client
                    ondrop(eventPosition(e), items);
                });
            });
        };
    };
    var dragleave = function dragleave(root, clients) {
        return function(e) {
            if (initialTarget !== e.target) {
                return;
            }
            clients.forEach(function(client) {
                var onexit = client.onexit;
                client.state = null;
                onexit(eventPosition(e));
            });
        };
    };
    var createHopper = function createHopper(scope, validateItems, options) {
        // is now hopper scope
        scope.classList.add('filepond--hopper');
        // shortcuts
        var catchesDropsOnPage = options.catchesDropsOnPage, requiresDropOnElement = options.requiresDropOnElement, _options$filterItems = options.filterItems, filterItems = _options$filterItems === void 0 ? function(items) {
            return items;
        } : _options$filterItems;
        // create a dnd client
        var client = createDragNDropClient(scope, catchesDropsOnPage ? document.documentElement : scope, requiresDropOnElement);
        // current client state
        var lastState = '';
        var currentState = '';
        // determines if a file may be dropped
        client.allowdrop = function(items) {
            // TODO: if we can, throw error to indicate the items cannot by dropped
            return validateItems(filterItems(items));
        };
        client.ondrop = function(position, items) {
            var filteredItems = filterItems(items);
            if (!validateItems(filteredItems)) {
                api.ondragend(position);
                return;
            }
            currentState = 'drag-drop';
            api.onload(filteredItems, position);
        };
        client.ondrag = function(position) {
            api.ondrag(position);
        };
        client.onenter = function(position) {
            currentState = 'drag-over';
            api.ondragstart(position);
        };
        client.onexit = function(position) {
            currentState = 'drag-exit';
            api.ondragend(position);
        };
        var api = {
            updateHopperState: function updateHopperState() {
                if (lastState !== currentState) {
                    scope.dataset.hopperState = currentState;
                    lastState = currentState;
                }
            },
            onload: function onload() {},
            ondragstart: function ondragstart() {},
            ondrag: function ondrag() {},
            ondragend: function ondragend() {},
            destroy: function destroy() {
                // destroy client
                client.destroy();
            }
        };
        return api;
    };
    var listening = false;
    var listeners$1 = [];
    var handlePaste = function handlePaste(e) {
        // if is pasting in input or textarea and the target is outside of a filepond scope, ignore
        var activeEl = document.activeElement;
        if (activeEl && /textarea|input/i.test(activeEl.nodeName)) {
            // test textarea or input is contained in filepond root
            var inScope = false;
            var element = activeEl;
            while(element !== document.body){
                if (element.classList.contains('filepond--root')) {
                    inScope = true;
                    break;
                }
                element = element.parentNode;
            }
            if (!inScope) return;
        }
        requestDataTransferItems(e.clipboardData).then(function(files) {
            // no files received
            if (!files.length) {
                return;
            }
            // notify listeners of received files
            listeners$1.forEach(function(listener) {
                return listener(files);
            });
        });
    };
    var listen = function listen(cb) {
        // can't add twice
        if (listeners$1.includes(cb)) {
            return;
        }
        // add initial listener
        listeners$1.push(cb);
        // setup paste listener for entire page
        if (listening) {
            return;
        }
        listening = true;
        document.addEventListener('paste', handlePaste);
    };
    var unlisten = function unlisten(listener) {
        arrayRemove(listeners$1, listeners$1.indexOf(listener));
        // clean up
        if (listeners$1.length === 0) {
            document.removeEventListener('paste', handlePaste);
            listening = false;
        }
    };
    var createPaster = function createPaster() {
        var cb = function cb(files) {
            api.onload(files);
        };
        var api = {
            destroy: function destroy() {
                unlisten(cb);
            },
            onload: function onload() {}
        };
        listen(cb);
        return api;
    };
    /**
     * Creates the file view
     */ var create$d = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        root.element.id = 'filepond--assistant-' + props.id;
        attr(root.element, 'role', 'status');
        attr(root.element, 'aria-live', 'polite');
        attr(root.element, 'aria-relevant', 'additions');
    };
    var addFilesNotificationTimeout = null;
    var notificationClearTimeout = null;
    var filenames = [];
    var assist = function assist(root, message) {
        root.element.textContent = message;
    };
    var clear$1 = function clear(root) {
        root.element.textContent = '';
    };
    var listModified = function listModified(root, filename, label) {
        var total = root.query('GET_TOTAL_ITEMS');
        assist(root, label + ' ' + filename + ', ' + total + ' ' + (total === 1 ? root.query('GET_LABEL_FILE_COUNT_SINGULAR') : root.query('GET_LABEL_FILE_COUNT_PLURAL')));
        // clear group after set amount of time so the status is not read twice
        clearTimeout(notificationClearTimeout);
        notificationClearTimeout = setTimeout(function() {
            clear$1(root);
        }, 1500);
    };
    var isUsingFilePond = function isUsingFilePond(root) {
        return root.element.parentNode.contains(document.activeElement);
    };
    var itemAdded = function itemAdded(_ref2) {
        var root = _ref2.root, action = _ref2.action;
        if (!isUsingFilePond(root)) {
            return;
        }
        root.element.textContent = '';
        var item = root.query('GET_ITEM', action.id);
        filenames.push(item.filename);
        clearTimeout(addFilesNotificationTimeout);
        addFilesNotificationTimeout = setTimeout(function() {
            listModified(root, filenames.join(', '), root.query('GET_LABEL_FILE_ADDED'));
            filenames.length = 0;
        }, 750);
    };
    var itemRemoved = function itemRemoved(_ref3) {
        var root = _ref3.root, action = _ref3.action;
        if (!isUsingFilePond(root)) {
            return;
        }
        var item = action.item;
        listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
    };
    var itemProcessed = function itemProcessed(_ref4) {
        var root = _ref4.root, action = _ref4.action;
        // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file
        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;
        var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');
        assist(root, filename + ' ' + label);
    };
    var itemProcessedUndo = function itemProcessedUndo(_ref5) {
        var root = _ref5.root, action = _ref5.action;
        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;
        var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');
        assist(root, filename + ' ' + label);
    };
    var itemError = function itemError(_ref6) {
        var root = _ref6.root, action = _ref6.action;
        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;
        // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file
        assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
    };
    var assistant = createView({
        create: create$d,
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: itemAdded,
            DID_REMOVE_ITEM: itemRemoved,
            DID_COMPLETE_ITEM_PROCESSING: itemProcessed,
            DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
            DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,
            DID_THROW_ITEM_REMOVE_ERROR: itemError,
            DID_THROW_ITEM_LOAD_ERROR: itemError,
            DID_THROW_ITEM_INVALID: itemError,
            DID_THROW_ITEM_PROCESSING_ERROR: itemError
        }),
        tag: 'span',
        name: 'assistant'
    });
    var toCamels = function toCamels(string) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
        return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
            return sub.charAt(1).toUpperCase();
        });
    };
    var debounce = function debounce(func) {
        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
        var immidiateOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var last = Date.now();
        var timeout = null;
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            clearTimeout(timeout);
            var dist = Date.now() - last;
            var fn = function fn() {
                last = Date.now();
                func.apply(void 0, args);
            };
            if (dist < interval) {
                // we need to delay by the difference between interval and dist
                // for example: if distance is 10 ms and interval is 16 ms,
                // we need to wait an additional 6ms before calling the function)
                if (!immidiateOnly) {
                    timeout = setTimeout(fn, interval - dist);
                }
            } else {
                // go!
                fn();
            }
        };
    };
    var MAX_FILES_LIMIT = 1000000;
    var prevent = function prevent(e) {
        return e.preventDefault();
    };
    var create$e = function create(_ref) {
        var root = _ref.root, props = _ref.props;
        // Add id
        var id = root.query('GET_ID');
        if (id) {
            root.element.id = id;
        }
        // Add className
        var className = root.query('GET_CLASS_NAME');
        if (className) {
            className.split(' ').filter(function(name) {
                return name.length;
            }).forEach(function(name) {
                root.element.classList.add(name);
            });
        }
        // Field label
        root.ref.label = root.appendChildView(root.createChildView(dropLabel, Object.assign({}, props, {
            translateY: null,
            caption: root.query('GET_LABEL_IDLE')
        })));
        // List of items
        root.ref.list = root.appendChildView(root.createChildView(listScroller, {
            translateY: null
        }));
        // Background panel
        root.ref.panel = root.appendChildView(root.createChildView(panel, {
            name: 'panel-root'
        }));
        // Assistant notifies assistive tech when content changes
        root.ref.assistant = root.appendChildView(root.createChildView(assistant, Object.assign({}, props)));
        // Data
        root.ref.data = root.appendChildView(root.createChildView(data, Object.assign({}, props)));
        // Measure (tests if fixed height was set)
        // DOCTYPE needs to be set for this to work
        root.ref.measure = createElement$1('div');
        root.ref.measure.style.height = '100%';
        root.element.appendChild(root.ref.measure);
        // information on the root height or fixed height status
        root.ref.bounds = null;
        // apply initial style properties
        root.query('GET_STYLES').filter(function(style) {
            return !isEmpty(style.value);
        }).map(function(_ref2) {
            var name = _ref2.name, value = _ref2.value;
            root.element.dataset[name] = value;
        });
        // determine if width changed
        root.ref.widthPrevious = null;
        root.ref.widthUpdated = debounce(function() {
            root.ref.updateHistory = [];
            root.dispatch('DID_RESIZE_ROOT');
        }, 250);
        // history of updates
        root.ref.previousAspectRatio = null;
        root.ref.updateHistory = [];
        // prevent scrolling and zooming on iOS (only if supports pointer events, for then we can enable reorder)
        var canHover = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
        var hasPointerEvents = 'PointerEvent' in window;
        if (root.query('GET_ALLOW_REORDER') && hasPointerEvents && !canHover) {
            root.element.addEventListener('touchmove', prevent, {
                passive: false
            });
            root.element.addEventListener('gesturestart', prevent);
        }
        // add credits
        var credits = root.query('GET_CREDITS');
        var hasCredits = credits.length === 2;
        if (hasCredits) {
            var frag = document.createElement('a');
            frag.className = 'filepond--credits';
            frag.setAttribute('aria-hidden', 'true');
            frag.href = credits[0];
            frag.tabindex = -1;
            frag.target = '_blank';
            frag.rel = 'noopener noreferrer';
            frag.textContent = credits[1];
            root.element.appendChild(frag);
            root.ref.credits = frag;
        }
    };
    var write$9 = function write(_ref3) {
        var root = _ref3.root, props = _ref3.props, actions = _ref3.actions;
        // route actions
        route$5({
            root: root,
            props: props,
            actions: actions
        });
        // apply style properties
        actions.filter(function(action) {
            return /^DID_SET_STYLE_/.test(action.type);
        }).filter(function(action) {
            return !isEmpty(action.data.value);
        }).map(function(_ref4) {
            var type = _ref4.type, data = _ref4.data;
            var name = toCamels(type.substring(8).toLowerCase(), '_');
            root.element.dataset[name] = data.value;
            root.invalidateLayout();
        });
        if (root.rect.element.hidden) return;
        if (root.rect.element.width !== root.ref.widthPrevious) {
            root.ref.widthPrevious = root.rect.element.width;
            root.ref.widthUpdated();
        }
        // get box bounds, we do this only once
        var bounds = root.ref.bounds;
        if (!bounds) {
            bounds = root.ref.bounds = calculateRootBoundingBoxHeight(root);
            // destroy measure element
            root.element.removeChild(root.ref.measure);
            root.ref.measure = null;
        }
        // get quick references to various high level parts of the upload tool
        var _root$ref = root.ref, hopper = _root$ref.hopper, label = _root$ref.label, list = _root$ref.list, panel = _root$ref.panel;
        // sets correct state to hopper scope
        if (hopper) {
            hopper.updateHopperState();
        }
        // bool to indicate if we're full or not
        var aspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
        var totalItems = root.query('GET_TOTAL_ITEMS');
        var maxItems = isMultiItem ? root.query('GET_MAX_FILES') || MAX_FILES_LIMIT : 1;
        var atMaxCapacity = totalItems === maxItems;
        // action used to add item
        var addAction = actions.find(function(action) {
            return action.type === 'DID_ADD_ITEM';
        });
        // if reached max capacity and we've just reached it
        if (atMaxCapacity && addAction) {
            // get interaction type
            var interactionMethod = addAction.data.interactionMethod;
            // hide label
            label.opacity = 0;
            if (isMultiItem) {
                label.translateY = -40;
            } else {
                if (interactionMethod === InteractionMethod.API) {
                    label.translateX = 40;
                } else if (interactionMethod === InteractionMethod.BROWSE) {
                    label.translateY = 40;
                } else {
                    label.translateY = 30;
                }
            }
        } else if (!atMaxCapacity) {
            label.opacity = 1;
            label.translateX = 0;
            label.translateY = 0;
        }
        var listItemMargin = calculateListItemMargin(root);
        var listHeight = calculateListHeight(root);
        var labelHeight = label.rect.element.height;
        var currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;
        var listMarginTop = atMaxCapacity ? list.rect.element.marginTop : 0;
        var listMarginBottom = totalItems === 0 ? 0 : list.rect.element.marginBottom;
        var visualHeight = currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
        var boundsHeight = currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;
        // link list to label bottom position
        list.translateY = Math.max(0, currentLabelHeight - list.rect.element.marginTop) - listItemMargin.top;
        if (aspectRatio) {
            // fixed aspect ratio
            // calculate height based on width
            var width = root.rect.element.width;
            var height = width * aspectRatio;
            // clear history if aspect ratio has changed
            if (aspectRatio !== root.ref.previousAspectRatio) {
                root.ref.previousAspectRatio = aspectRatio;
                root.ref.updateHistory = [];
            }
            // remember this width
            var history = root.ref.updateHistory;
            history.push(width);
            var MAX_BOUNCES = 2;
            if (history.length > MAX_BOUNCES * 2) {
                var l = history.length;
                var bottom = l - 10;
                var bounces = 0;
                for(var i = l; i >= bottom; i--){
                    if (history[i] === history[i - 2]) {
                        bounces++;
                    }
                    if (bounces >= MAX_BOUNCES) {
                        // dont adjust height
                        return;
                    }
                }
            }
            // fix height of panel so it adheres to aspect ratio
            panel.scalable = false;
            panel.height = height;
            // available height for list
            var listAvailableHeight = // the height of the panel minus the label height
            height - currentLabelHeight - // the room we leave open between the end of the list and the panel bottom
            (listMarginBottom - listItemMargin.bottom) - // if we're full we need to leave some room between the top of the panel and the list
            (atMaxCapacity ? listMarginTop : 0);
            if (listHeight.visual > listAvailableHeight) {
                list.overflow = listAvailableHeight;
            } else {
                list.overflow = null;
            }
            // set container bounds (so pushes siblings downwards)
            root.height = height;
        } else if (bounds.fixedHeight) {
            // fixed height
            // fix height of panel
            panel.scalable = false;
            // available height for list
            var _listAvailableHeight = // the height of the panel minus the label height
            bounds.fixedHeight - currentLabelHeight - // the room we leave open between the end of the list and the panel bottom
            (listMarginBottom - listItemMargin.bottom) - // if we're full we need to leave some room between the top of the panel and the list
            (atMaxCapacity ? listMarginTop : 0);
            // set list height
            if (listHeight.visual > _listAvailableHeight) {
                list.overflow = _listAvailableHeight;
            } else {
                list.overflow = null;
            }
        // no need to set container bounds as these are handles by CSS fixed height
        } else if (bounds.cappedHeight) {
            // max-height
            // not a fixed height panel
            var isCappedHeight = visualHeight >= bounds.cappedHeight;
            var panelHeight = Math.min(bounds.cappedHeight, visualHeight);
            panel.scalable = true;
            panel.height = isCappedHeight ? panelHeight : panelHeight - listItemMargin.top - listItemMargin.bottom;
            // available height for list
            var _listAvailableHeight2 = // the height of the panel minus the label height
            panelHeight - currentLabelHeight - // the room we leave open between the end of the list and the panel bottom
            (listMarginBottom - listItemMargin.bottom) - // if we're full we need to leave some room between the top of the panel and the list
            (atMaxCapacity ? listMarginTop : 0);
            // set list height (if is overflowing)
            if (visualHeight > bounds.cappedHeight && listHeight.visual > _listAvailableHeight2) {
                list.overflow = _listAvailableHeight2;
            } else {
                list.overflow = null;
            }
            // set container bounds (so pushes siblings downwards)
            root.height = Math.min(bounds.cappedHeight, boundsHeight - listItemMargin.top - listItemMargin.bottom);
        } else {
            // flexible height
            // not a fixed height panel
            var itemMargin = totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
            panel.scalable = true;
            panel.height = Math.max(labelHeight, visualHeight - itemMargin);
            // set container bounds (so pushes siblings downwards)
            root.height = Math.max(labelHeight, boundsHeight - itemMargin);
        }
        // move credits to bottom
        if (root.ref.credits && panel.heightCurrent) root.ref.credits.style.transform = 'translateY(' + panel.heightCurrent + 'px)';
    };
    var calculateListItemMargin = function calculateListItemMargin(root) {
        var item = root.ref.list.childViews[0].childViews[0];
        return item ? {
            top: item.rect.element.marginTop,
            bottom: item.rect.element.marginBottom
        } : {
            top: 0,
            bottom: 0
        };
    };
    var calculateListHeight = function calculateListHeight(root) {
        var visual = 0;
        var bounds = 0;
        // get file list reference
        var scrollList = root.ref.list;
        var itemList = scrollList.childViews[0];
        var visibleChildren = itemList.childViews.filter(function(child) {
            return child.rect.element.height;
        });
        var children = root.query('GET_ACTIVE_ITEMS').map(function(item) {
            return visibleChildren.find(function(child) {
                return child.id === item.id;
            });
        }).filter(function(item) {
            return item;
        });
        // no children, done!
        if (children.length === 0) return {
            visual: visual,
            bounds: bounds
        };
        var horizontalSpace = itemList.rect.element.width;
        var dragIndex = getItemIndexByPosition(itemList, children, scrollList.dragCoordinates);
        var childRect = children[0].rect.element;
        var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
        var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
        var itemWidth = childRect.width + itemHorizontalMargin;
        var itemHeight = childRect.height + itemVerticalMargin;
        var newItem = typeof dragIndex !== 'undefined' && dragIndex >= 0 ? 1 : 0;
        var removedItem = children.find(function(child) {
            return child.markedForRemoval && child.opacity < 0.45;
        }) ? -1 : 0;
        var verticalItemCount = children.length + newItem + removedItem;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
        // stack
        if (itemsPerRow === 1) {
            children.forEach(function(item) {
                var height = item.rect.element.height + itemVerticalMargin;
                bounds += height;
                visual += height * item.opacity;
            });
        } else {
            bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
            visual = bounds;
        }
        return {
            visual: visual,
            bounds: bounds
        };
    };
    var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(root) {
        var height = root.ref.measureHeight || null;
        var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
        var fixedHeight = height === 0 ? null : height;
        return {
            cappedHeight: cappedHeight,
            fixedHeight: fixedHeight
        };
    };
    var exceedsMaxFiles = function exceedsMaxFiles(root, items) {
        var allowReplace = root.query('GET_ALLOW_REPLACE');
        var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
        var totalItems = root.query('GET_TOTAL_ITEMS');
        var maxItems = root.query('GET_MAX_FILES');
        // total amount of items being dragged
        var totalBrowseItems = items.length;
        // if does not allow multiple items and dragging more than one item
        if (!allowMultiple && totalBrowseItems > 1) {
            root.dispatch('DID_THROW_MAX_FILES', {
                source: items,
                error: createResponse('warning', 0, 'Max files')
            });
            return true;
        }
        // limit max items to one if not allowed to drop multiple items
        maxItems = allowMultiple ? maxItems : 1;
        if (!allowMultiple && allowReplace) {
            // There is only one item, so there is room to replace or add an item
            return false;
        }
        // no more room?
        var hasMaxItems = isInt(maxItems);
        if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
            root.dispatch('DID_THROW_MAX_FILES', {
                source: items,
                error: createResponse('warning', 0, 'Max files')
            });
            return true;
        }
        return false;
    };
    var getDragIndex = function getDragIndex(list, children, position) {
        var itemList = list.childViews[0];
        return getItemIndexByPosition(itemList, children, {
            left: position.scopeLeft - itemList.rect.element.left,
            top: position.scopeTop - (list.rect.outer.top + list.rect.element.marginTop + list.rect.element.scrollTop)
        });
    };
    /**
     * Enable or disable file drop functionality
     */ var toggleDrop = function toggleDrop(root) {
        var isAllowed = root.query('GET_ALLOW_DROP');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.hopper) {
            var hopper = createHopper(root.element, function(items) {
                // allow quick validation of dropped items
                var beforeDropFile = root.query('GET_BEFORE_DROP_FILE') || function() {
                    return true;
                };
                // all items should be validated by all filters as valid
                var dropValidation = root.query('GET_DROP_VALIDATION');
                return dropValidation ? items.every(function(item) {
                    return applyFilters('ALLOW_HOPPER_ITEM', item, {
                        query: root.query
                    }).every(function(result) {
                        return result === true;
                    }) && beforeDropFile(item);
                }) : true;
            }, {
                filterItems: function filterItems(items) {
                    var ignoredFiles = root.query('GET_IGNORED_FILES');
                    return items.filter(function(item) {
                        if (isFile(item)) {
                            return !ignoredFiles.includes(item.name.toLowerCase());
                        }
                        return true;
                    });
                },
                catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
                requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT')
            });
            hopper.onload = function(items, position) {
                // get item children elements and sort based on list sort
                var list = root.ref.list.childViews[0];
                var visibleChildren = list.childViews.filter(function(child) {
                    return child.rect.element.height;
                });
                var children = root.query('GET_ACTIVE_ITEMS').map(function(item) {
                    return visibleChildren.find(function(child) {
                        return child.id === item.id;
                    });
                }).filter(function(item) {
                    return item;
                });
                applyFilterChain('ADD_ITEMS', items, {
                    dispatch: root.dispatch
                }).then(function(queue) {
                    // these files don't fit so stop here
                    if (exceedsMaxFiles(root, queue)) return false;
                    // go
                    root.dispatch('ADD_ITEMS', {
                        items: queue,
                        index: getDragIndex(root.ref.list, children, position),
                        interactionMethod: InteractionMethod.DROP
                    });
                });
                root.dispatch('DID_DROP', {
                    position: position
                });
                root.dispatch('DID_END_DRAG', {
                    position: position
                });
            };
            hopper.ondragstart = function(position) {
                root.dispatch('DID_START_DRAG', {
                    position: position
                });
            };
            hopper.ondrag = debounce(function(position) {
                root.dispatch('DID_DRAG', {
                    position: position
                });
            });
            hopper.ondragend = function(position) {
                root.dispatch('DID_END_DRAG', {
                    position: position
                });
            };
            root.ref.hopper = hopper;
            root.ref.drip = root.appendChildView(root.createChildView(drip));
        } else if (!enabled && root.ref.hopper) {
            root.ref.hopper.destroy();
            root.ref.hopper = null;
            root.removeChildView(root.ref.drip);
        }
    };
    /**
     * Enable or disable browse functionality
     */ var toggleBrowse = function toggleBrowse(root, props) {
        var isAllowed = root.query('GET_ALLOW_BROWSE');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.browser) {
            root.ref.browser = root.appendChildView(root.createChildView(browser, Object.assign({}, props, {
                onload: function onload(items) {
                    applyFilterChain('ADD_ITEMS', items, {
                        dispatch: root.dispatch
                    }).then(function(queue) {
                        // these files don't fit so stop here
                        if (exceedsMaxFiles(root, queue)) return false;
                        // add items!
                        root.dispatch('ADD_ITEMS', {
                            items: queue,
                            index: -1,
                            interactionMethod: InteractionMethod.BROWSE
                        });
                    });
                }
            })), 0);
        } else if (!enabled && root.ref.browser) {
            root.removeChildView(root.ref.browser);
            root.ref.browser = null;
        }
    };
    /**
     * Enable or disable paste functionality
     */ var togglePaste = function togglePaste(root) {
        var isAllowed = root.query('GET_ALLOW_PASTE');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.paster) {
            root.ref.paster = createPaster();
            root.ref.paster.onload = function(items) {
                applyFilterChain('ADD_ITEMS', items, {
                    dispatch: root.dispatch
                }).then(function(queue) {
                    // these files don't fit so stop here
                    if (exceedsMaxFiles(root, queue)) return false;
                    // add items!
                    root.dispatch('ADD_ITEMS', {
                        items: queue,
                        index: -1,
                        interactionMethod: InteractionMethod.PASTE
                    });
                });
            };
        } else if (!enabled && root.ref.paster) {
            root.ref.paster.destroy();
            root.ref.paster = null;
        }
    };
    /**
     * Route actions
     */ var route$5 = createRoute({
        DID_SET_ALLOW_BROWSE: function DID_SET_ALLOW_BROWSE(_ref5) {
            var root = _ref5.root, props = _ref5.props;
            toggleBrowse(root, props);
        },
        DID_SET_ALLOW_DROP: function DID_SET_ALLOW_DROP(_ref6) {
            var root = _ref6.root;
            toggleDrop(root);
        },
        DID_SET_ALLOW_PASTE: function DID_SET_ALLOW_PASTE(_ref7) {
            var root = _ref7.root;
            togglePaste(root);
        },
        DID_SET_DISABLED: function DID_SET_DISABLED(_ref8) {
            var root = _ref8.root, props = _ref8.props;
            toggleDrop(root);
            togglePaste(root);
            toggleBrowse(root, props);
            var isDisabled = root.query('GET_DISABLED');
            if (isDisabled) {
                root.element.dataset.disabled = 'disabled';
            } else {
                // delete root.element.dataset.disabled; <= this does not work on iOS 10
                root.element.removeAttribute('data-disabled');
            }
        }
    });
    var root = createView({
        name: 'root',
        read: function read(_ref9) {
            var root = _ref9.root;
            if (root.ref.measure) {
                root.ref.measureHeight = root.ref.measure.offsetHeight;
            }
        },
        create: create$e,
        write: write$9,
        destroy: function destroy(_ref10) {
            var root = _ref10.root;
            if (root.ref.paster) {
                root.ref.paster.destroy();
            }
            if (root.ref.hopper) {
                root.ref.hopper.destroy();
            }
            root.element.removeEventListener('touchmove', prevent);
            root.element.removeEventListener('gesturestart', prevent);
        },
        mixins: {
            styles: [
                'height'
            ]
        }
    });
    // creates the app
    var createApp = function createApp() {
        var initialOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // let element
        var originalElement = null;
        // get default options
        var defaultOptions = getOptions();
        // create the data store, this will contain all our app info
        var store = createStore(// initial state (should be serializable)
        createInitialState(defaultOptions), // queries
        [
            queries,
            createOptionQueries(defaultOptions)
        ], // action handlers
        [
            actions,
            createOptionActions(defaultOptions)
        ]);
        // set initial options
        store.dispatch('SET_OPTIONS', {
            options: initialOptions
        });
        // kick thread if visibility changes
        var visibilityHandler = function visibilityHandler() {
            if (document.hidden) return;
            store.dispatch('KICK');
        };
        document.addEventListener('visibilitychange', visibilityHandler);
        // re-render on window resize start and finish
        var resizeDoneTimer = null;
        var isResizing = false;
        var isResizingHorizontally = false;
        var initialWindowWidth = null;
        var currentWindowWidth = null;
        var resizeHandler = function resizeHandler() {
            if (!isResizing) {
                isResizing = true;
            }
            clearTimeout(resizeDoneTimer);
            resizeDoneTimer = setTimeout(function() {
                isResizing = false;
                initialWindowWidth = null;
                currentWindowWidth = null;
                if (isResizingHorizontally) {
                    isResizingHorizontally = false;
                    store.dispatch('DID_STOP_RESIZE');
                }
            }, 500);
        };
        window.addEventListener('resize', resizeHandler);
        // render initial view
        var view = root(store, {
            id: getUniqueId()
        });
        //
        // PRIVATE API -------------------------------------------------------------------------------------
        //
        var isResting = false;
        var isHidden = false;
        var readWriteApi = {
            // necessary for update loop
            /**
             * Reads from dom (never call manually)
             * @private
             */ _read: function _read() {
                // test if we're resizing horizontally
                // TODO: see if we can optimize this by measuring root rect
                if (isResizing) {
                    currentWindowWidth = window.innerWidth;
                    if (!initialWindowWidth) {
                        initialWindowWidth = currentWindowWidth;
                    }
                    if (!isResizingHorizontally && currentWindowWidth !== initialWindowWidth) {
                        store.dispatch('DID_START_RESIZE');
                        isResizingHorizontally = true;
                    }
                }
                if (isHidden && isResting) {
                    // test if is no longer hidden
                    isResting = view.element.offsetParent === null;
                }
                // if resting, no need to read as numbers will still all be correct
                if (isResting) return;
                // read view data
                view._read();
                // if is hidden we need to know so we exit rest mode when revealed
                isHidden = view.rect.element.hidden;
            },
            /**
             * Writes to dom (never call manually)
             * @private
             */ _write: function _write(ts) {
                // get all actions from store
                var actions = store.processActionQueue()// filter out set actions (these will automatically trigger DID_SET)
                .filter(function(action) {
                    return !/^SET_/.test(action.type);
                });
                // if was idling and no actions stop here
                if (isResting && !actions.length) return;
                // some actions might trigger events
                routeActionsToEvents(actions);
                // update the view
                isResting = view._write(ts, actions, isResizingHorizontally);
                // will clean up all archived items
                removeReleasedItems(store.query('GET_ITEMS'));
                // now idling
                if (isResting) {
                    store.processDispatchQueue();
                }
            }
        };
        //
        // EXPOSE EVENTS -------------------------------------------------------------------------------------
        //
        var createEvent = function createEvent(name) {
            return function(data) {
                // create default event
                var event = {
                    type: name
                };
                // no data to add
                if (!data) {
                    return event;
                }
                // copy relevant props
                if (data.hasOwnProperty('error')) {
                    event.error = data.error ? Object.assign({}, data.error) : null;
                }
                if (data.status) {
                    event.status = Object.assign({}, data.status);
                }
                if (data.file) {
                    event.output = data.file;
                }
                // only source is available, else add item if possible
                if (data.source) {
                    event.file = data.source;
                } else if (data.item || data.id) {
                    var item = data.item ? data.item : store.query('GET_ITEM', data.id);
                    event.file = item ? createItemAPI(item) : null;
                }
                // map all items in a possible items array
                if (data.items) {
                    event.items = data.items.map(createItemAPI);
                }
                // if this is a progress event add the progress amount
                if (/progress/.test(name)) {
                    event.progress = data.progress;
                }
                // copy relevant props
                if (data.hasOwnProperty('origin') && data.hasOwnProperty('target')) {
                    event.origin = data.origin;
                    event.target = data.target;
                }
                return event;
            };
        };
        var eventRoutes = {
            DID_DESTROY: createEvent('destroy'),
            DID_INIT: createEvent('init'),
            DID_THROW_MAX_FILES: createEvent('warning'),
            DID_INIT_ITEM: createEvent('initfile'),
            DID_START_ITEM_LOAD: createEvent('addfilestart'),
            DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
            DID_LOAD_ITEM: createEvent('addfile'),
            DID_THROW_ITEM_INVALID: [
                createEvent('error'),
                createEvent('addfile')
            ],
            DID_THROW_ITEM_LOAD_ERROR: [
                createEvent('error'),
                createEvent('addfile')
            ],
            DID_THROW_ITEM_REMOVE_ERROR: [
                createEvent('error'),
                createEvent('removefile')
            ],
            DID_PREPARE_OUTPUT: createEvent('preparefile'),
            DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
            DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
            DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
            DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
            DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent('processfiles'),
            DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),
            DID_THROW_ITEM_PROCESSING_ERROR: [
                createEvent('error'),
                createEvent('processfile')
            ],
            DID_REMOVE_ITEM: createEvent('removefile'),
            DID_UPDATE_ITEMS: createEvent('updatefiles'),
            DID_ACTIVATE_ITEM: createEvent('activatefile'),
            DID_REORDER_ITEMS: createEvent('reorderfiles')
        };
        var exposeEvent = function exposeEvent(event) {
            // create event object to be dispatched
            var detail = Object.assign({
                pond: exports1
            }, event);
            delete detail.type;
            view.element.dispatchEvent(new CustomEvent('FilePond:' + event.type, {
                // event info
                detail: detail,
                // event behaviour
                bubbles: true,
                cancelable: true,
                composed: true
            }));
            // event object to params used for `on()` event handlers and callbacks `oninit()`
            var params = [];
            // if is possible error event, make it the first param
            if (event.hasOwnProperty('error')) {
                params.push(event.error);
            }
            // file is always section
            if (event.hasOwnProperty('file')) {
                params.push(event.file);
            }
            // append other props
            var filtered = [
                'type',
                'error',
                'file'
            ];
            Object.keys(event).filter(function(key) {
                return !filtered.includes(key);
            }).forEach(function(key) {
                return params.push(event[key]);
            });
            // on(type, () => { })
            exports1.fire.apply(exports1, [
                event.type
            ].concat(params));
            // oninit = () => {}
            var handler = store.query('GET_ON' + event.type.toUpperCase());
            if (handler) {
                handler.apply(void 0, params);
            }
        };
        var routeActionsToEvents = function routeActionsToEvents(actions) {
            if (!actions.length) return;
            actions.filter(function(action) {
                return eventRoutes[action.type];
            }).forEach(function(action) {
                var routes = eventRoutes[action.type];
                (Array.isArray(routes) ? routes : [
                    routes
                ]).forEach(function(route) {
                    // this isn't fantastic, but because of the stacking of settimeouts plugins can handle the did_load before the did_init
                    if (action.type === 'DID_INIT_ITEM') {
                        exposeEvent(route(action.data));
                    } else {
                        setTimeout(function() {
                            exposeEvent(route(action.data));
                        }, 0);
                    }
                });
            });
        };
        //
        // PUBLIC API -------------------------------------------------------------------------------------
        //
        var setOptions = function setOptions(options) {
            return store.dispatch('SET_OPTIONS', {
                options: options
            });
        };
        var getFile = function getFile(query) {
            return store.query('GET_ACTIVE_ITEM', query);
        };
        var prepareFile = function prepareFile(query) {
            return new Promise(function(resolve, reject) {
                store.dispatch('REQUEST_ITEM_PREPARE', {
                    query: query,
                    success: function success(item) {
                        resolve(item);
                    },
                    failure: function failure(error) {
                        reject(error);
                    }
                });
            });
        };
        var addFile = function addFile(source) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new Promise(function(resolve, reject) {
                addFiles([
                    {
                        source: source,
                        options: options
                    }
                ], {
                    index: options.index
                }).then(function(items) {
                    return resolve(items && items[0]);
                }).catch(reject);
            });
        };
        var isFilePondFile = function isFilePondFile(obj) {
            return obj.file && obj.id;
        };
        var removeFile = function removeFile(query, options) {
            // if only passed options
            if (typeof query === 'object' && !isFilePondFile(query) && !options) {
                options = query;
                query = undefined;
            }
            // request item removal
            store.dispatch('REMOVE_ITEM', Object.assign({}, options, {
                query: query
            }));
            // see if item has been removed
            return store.query('GET_ACTIVE_ITEM', query) === null;
        };
        var addFiles = function addFiles() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return new Promise(function(resolve, reject) {
                var sources = [];
                var options = {};
                // user passed a sources array
                if (isArray(args[0])) {
                    sources.push.apply(sources, args[0]);
                    Object.assign(options, args[1] || {});
                } else {
                    // user passed sources as arguments, last one might be options object
                    var lastArgument = args[args.length - 1];
                    if (typeof lastArgument === 'object' && !(lastArgument instanceof Blob)) {
                        Object.assign(options, args.pop());
                    }
                    // add rest to sources
                    sources.push.apply(sources, args);
                }
                store.dispatch('ADD_ITEMS', {
                    items: sources,
                    index: options.index,
                    interactionMethod: InteractionMethod.API,
                    success: resolve,
                    failure: reject
                });
            });
        };
        var getFiles = function getFiles() {
            return store.query('GET_ACTIVE_ITEMS');
        };
        var processFile = function processFile(query) {
            return new Promise(function(resolve, reject) {
                store.dispatch('REQUEST_ITEM_PROCESSING', {
                    query: query,
                    success: function success(item) {
                        resolve(item);
                    },
                    failure: function failure(error) {
                        reject(error);
                    }
                });
            });
        };
        var prepareFiles = function prepareFiles() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                args[_key2] = arguments[_key2];
            }
            var queries = Array.isArray(args[0]) ? args[0] : args;
            var items = queries.length ? queries : getFiles();
            return Promise.all(items.map(prepareFile));
        };
        var processFiles = function processFiles() {
            for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
                args[_key3] = arguments[_key3];
            }
            var queries = Array.isArray(args[0]) ? args[0] : args;
            if (!queries.length) {
                var files = getFiles().filter(function(item) {
                    return !(item.status === ItemStatus.IDLE && item.origin === FileOrigin.LOCAL) && item.status !== ItemStatus.PROCESSING && item.status !== ItemStatus.PROCESSING_COMPLETE && item.status !== ItemStatus.PROCESSING_REVERT_ERROR;
                });
                return Promise.all(files.map(processFile));
            }
            return Promise.all(queries.map(processFile));
        };
        var removeFiles = function removeFiles() {
            for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
                args[_key4] = arguments[_key4];
            }
            var queries = Array.isArray(args[0]) ? args[0] : args;
            var options;
            if (typeof queries[queries.length - 1] === 'object') {
                options = queries.pop();
            } else if (Array.isArray(args[0])) {
                options = args[1];
            }
            var files = getFiles();
            if (!queries.length) return Promise.all(files.map(function(file) {
                return removeFile(file, options);
            }));
            // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
            var mappedQueries = queries.map(function(query) {
                return isNumber(query) ? files[query] ? files[query].id : null : query;
            }).filter(function(query) {
                return query;
            });
            return mappedQueries.map(function(q) {
                return removeFile(q, options);
            });
        };
        var exports1 = Object.assign({}, on(), {}, readWriteApi, {}, createOptionAPI(store, defaultOptions), {
            /**
                 * Override options defined in options object
                 * @param options
                 */ setOptions: setOptions,
            /**
                 * Load the given file
                 * @param source - the source of the file (either a File, base64 data uri or url)
                 * @param options - object, { index: 0 }
                 */ addFile: addFile,
            /**
                 * Load the given files
                 * @param sources - the sources of the files to load
                 * @param options - object, { index: 0 }
                 */ addFiles: addFiles,
            /**
                 * Returns the file objects matching the given query
                 * @param query { string, number, null }
                 */ getFile: getFile,
            /**
                 * Upload file with given name
                 * @param query { string, number, null  }
                 */ processFile: processFile,
            /**
                 * Request prepare output for file with given name
                 * @param query { string, number, null  }
                 */ prepareFile: prepareFile,
            /**
                 * Removes a file by its name
                 * @param query { string, number, null  }
                 */ removeFile: removeFile,
            /**
                 * Moves a file to a new location in the files list
                 */ moveFile: function moveFile(query, index) {
                return store.dispatch('MOVE_ITEM', {
                    query: query,
                    index: index
                });
            },
            /**
                 * Returns all files (wrapped in public api)
                 */ getFiles: getFiles,
            /**
                 * Starts uploading all files
                 */ processFiles: processFiles,
            /**
                 * Clears all files from the files list
                 */ removeFiles: removeFiles,
            /**
                 * Starts preparing output of all files
                 */ prepareFiles: prepareFiles,
            /**
                 * Sort list of files
                 */ sort: function sort(compare) {
                return store.dispatch('SORT', {
                    compare: compare
                });
            },
            /**
                 * Browse the file system for a file
                 */ browse: function browse() {
                // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
                var input = view.element.querySelector('input[type=file]');
                if (input) {
                    input.click();
                }
            },
            /**
                 * Destroys the app
                 */ destroy: function destroy() {
                // request destruction
                exports1.fire('destroy', view.element);
                // stop active processes (file uploads, fetches, stuff like that)
                // loop over items and depending on states call abort for ongoing processes
                store.dispatch('ABORT_ALL');
                // destroy view
                view._destroy();
                // stop listening to resize
                window.removeEventListener('resize', resizeHandler);
                // stop listening to the visiblitychange event
                document.removeEventListener('visibilitychange', visibilityHandler);
                // dispatch destroy
                store.dispatch('DID_DESTROY');
            },
            /**
                 * Inserts the plugin before the target element
                 */ insertBefore: function insertBefore$1(element) {
                return insertBefore(view.element, element);
            },
            /**
                 * Inserts the plugin after the target element
                 */ insertAfter: function insertAfter$1(element) {
                return insertAfter(view.element, element);
            },
            /**
                 * Appends the plugin to the target element
                 */ appendTo: function appendTo(element) {
                return element.appendChild(view.element);
            },
            /**
                 * Replaces an element with the app
                 */ replaceElement: function replaceElement(element) {
                // insert the app before the element
                insertBefore(view.element, element);
                // remove the original element
                element.parentNode.removeChild(element);
                // remember original element
                originalElement = element;
            },
            /**
                 * Restores the original element
                 */ restoreElement: function restoreElement() {
                if (!originalElement) {
                    return; // no element to restore
                }
                // restore original element
                insertAfter(originalElement, view.element);
                // remove our element
                view.element.parentNode.removeChild(view.element);
                // remove reference
                originalElement = null;
            },
            /**
                 * Returns true if the app root is attached to given element
                 * @param element
                 */ isAttachedTo: function isAttachedTo(element) {
                return view.element === element || originalElement === element;
            },
            /**
                 * Returns the root element
                 */ element: {
                get: function get() {
                    return view.element;
                }
            },
            /**
                 * Returns the current pond status
                 */ status: {
                get: function get() {
                    return store.query('GET_STATUS');
                }
            }
        });
        // Done!
        store.dispatch('DID_INIT');
        // create actual api object
        return createObject(exports1);
    };
    var createAppObject = function createAppObject() {
        var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // default options
        var defaultOptions = {};
        forin(getOptions(), function(key, value) {
            defaultOptions[key] = value[0];
        });
        // set app options
        var app = createApp(Object.assign({}, defaultOptions, {}, customOptions));
        // return the plugin instance
        return app;
    };
    var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    };
    var attributeNameToPropertyName = function attributeNameToPropertyName(attributeName) {
        return toCamels(attributeName.replace(/^data-/, ''));
    };
    var mapObject = function mapObject(object, propertyMap) {
        // remove unwanted
        forin(propertyMap, function(selector, mapping) {
            forin(object, function(property, value) {
                // create regexp shortcut
                var selectorRegExp = new RegExp(selector);
                // tests if
                var matches = selectorRegExp.test(property);
                // no match, skip
                if (!matches) {
                    return;
                }
                // if there's a mapping, the original property is always removed
                delete object[property];
                // should only remove, we done!
                if (mapping === false) {
                    return;
                }
                // move value to new property
                if (isString(mapping)) {
                    object[mapping] = value;
                    return;
                }
                // move to group
                var group = mapping.group;
                if (isObject(mapping) && !object[group]) {
                    object[group] = {};
                }
                object[group][lowerCaseFirstLetter(property.replace(selectorRegExp, ''))] = value;
            });
            // do submapping
            if (mapping.mapping) {
                mapObject(object[mapping.group], mapping.mapping);
            }
        });
    };
    var getAttributesAsObject = function getAttributesAsObject(node) {
        var attributeMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // turn attributes into object
        var attributes = [];
        forin(node.attributes, function(index) {
            attributes.push(node.attributes[index]);
        });
        var output = attributes.filter(function(attribute) {
            return attribute.name;
        }).reduce(function(obj, attribute) {
            var value = attr(node, attribute.name);
            obj[attributeNameToPropertyName(attribute.name)] = value === attribute.name ? true : value;
            return obj;
        }, {});
        // do mapping of object properties
        mapObject(output, attributeMapping);
        return output;
    };
    var createAppAtElement = function createAppAtElement(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // how attributes of the input element are mapped to the options for the plugin
        var attributeMapping = {
            // translate to other name
            '^class$': 'className',
            '^multiple$': 'allowMultiple',
            '^capture$': 'captureMethod',
            '^webkitdirectory$': 'allowDirectoriesOnly',
            // group under single property
            '^server': {
                group: 'server',
                mapping: {
                    '^process': {
                        group: 'process'
                    },
                    '^revert': {
                        group: 'revert'
                    },
                    '^fetch': {
                        group: 'fetch'
                    },
                    '^restore': {
                        group: 'restore'
                    },
                    '^load': {
                        group: 'load'
                    }
                }
            },
            // don't include in object
            '^type$': false,
            '^files$': false
        };
        // add additional option translators
        applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);
        // create final options object by setting options object and then overriding options supplied on element
        var mergedOptions = Object.assign({}, options);
        var attributeOptions = getAttributesAsObject(element.nodeName === 'FIELDSET' ? element.querySelector('input[type=file]') : element, attributeMapping);
        // merge with options object
        Object.keys(attributeOptions).forEach(function(key) {
            if (isObject(attributeOptions[key])) {
                if (!isObject(mergedOptions[key])) {
                    mergedOptions[key] = {};
                }
                Object.assign(mergedOptions[key], attributeOptions[key]);
            } else {
                mergedOptions[key] = attributeOptions[key];
            }
        });
        // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
        // these will then be automatically set to the initial files
        mergedOptions.files = (options.files || []).concat(Array.from(element.querySelectorAll('input:not([type=file])')).map(function(input) {
            return {
                source: input.value,
                options: {
                    type: input.dataset.type
                }
            };
        }));
        // build plugin
        var app = createAppObject(mergedOptions);
        // add already selected files
        if (element.files) {
            Array.from(element.files).forEach(function(file) {
                app.addFile(file);
            });
        }
        // replace the target element
        app.replaceElement(element);
        // expose
        return app;
    };
    // if an element is passed, we create the instance at that element, if not, we just create an up object
    var createApp$1 = function createApp() {
        return isNode(arguments.length <= 0 ? undefined : arguments[0]) ? createAppAtElement.apply(void 0, arguments) : createAppObject.apply(void 0, arguments);
    };
    var PRIVATE_METHODS = [
        'fire',
        '_read',
        '_write'
    ];
    var createAppAPI = function createAppAPI(app) {
        var api = {};
        copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);
        return api;
    };
    /**
     * Replaces placeholders in given string with replacements
     * @param string - "Foo {bar}""
     * @param replacements - { "bar": 10 }
     */ var replaceInString = function replaceInString(string, replacements) {
        return string.replace(/(?:{([a-zA-Z]+)})/g, function(match, group) {
            return replacements[group];
        });
    };
    var createWorker = function createWorker(fn) {
        var workerBlob = new Blob([
            '(',
            fn.toString(),
            ')()'
        ], {
            type: 'application/javascript'
        });
        var workerURL = URL.createObjectURL(workerBlob);
        var worker = new Worker(workerURL);
        return {
            transfer: function transfer(message, cb) {},
            post: function post(message, cb, transferList) {
                var id = getUniqueId();
                worker.onmessage = function(e) {
                    if (e.data.id === id) {
                        cb(e.data.message);
                    }
                };
                worker.postMessage({
                    id: id,
                    message: message
                }, transferList);
            },
            terminate: function terminate() {
                worker.terminate();
                URL.revokeObjectURL(workerURL);
            }
        };
    };
    var loadImage = function loadImage(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(e) {
                reject(e);
            };
            img.src = url;
        });
    };
    var renameFile = function renameFile(file, name) {
        var renamedFile = file.slice(0, file.size, file.type);
        renamedFile.lastModifiedDate = file.lastModifiedDate;
        renamedFile.name = name;
        return renamedFile;
    };
    var copyFile = function copyFile(file) {
        return renameFile(file, file.name);
    };
    // already registered plugins (can't register twice)
    var registeredPlugins = [];
    // pass utils to plugin
    var createAppPlugin = function createAppPlugin(plugin) {
        // already registered
        if (registeredPlugins.includes(plugin)) {
            return;
        }
        // remember this plugin
        registeredPlugins.push(plugin);
        // setup!
        var pluginOutline = plugin({
            addFilter: addFilter,
            utils: {
                Type: Type,
                forin: forin,
                isString: isString,
                isFile: isFile,
                toNaturalFileSize: toNaturalFileSize,
                replaceInString: replaceInString,
                getExtensionFromFilename: getExtensionFromFilename,
                getFilenameWithoutExtension: getFilenameWithoutExtension,
                guesstimateMimeType: guesstimateMimeType,
                getFileFromBlob: getFileFromBlob,
                getFilenameFromURL: getFilenameFromURL,
                createRoute: createRoute,
                createWorker: createWorker,
                createView: createView,
                createItemAPI: createItemAPI,
                loadImage: loadImage,
                copyFile: copyFile,
                renameFile: renameFile,
                createBlob: createBlob,
                applyFilterChain: applyFilterChain,
                text: text,
                getNumericAspectRatioFromString: getNumericAspectRatioFromString
            },
            views: {
                fileActionButton: fileActionButton
            }
        });
        // add plugin options to default options
        extendDefaultOptions(pluginOutline.options);
    };
    // feature detection used by supported() method
    var isOperaMini = function isOperaMini() {
        return Object.prototype.toString.call(window.operamini) === '[object OperaMini]';
    };
    var hasPromises = function hasPromises() {
        return 'Promise' in window;
    };
    var hasBlobSlice = function hasBlobSlice() {
        return 'slice' in Blob.prototype;
    };
    var hasCreateObjectURL = function hasCreateObjectURL() {
        return 'URL' in window && 'createObjectURL' in window.URL;
    };
    var hasVisibility = function hasVisibility() {
        return 'visibilityState' in document;
    };
    var hasTiming = function hasTiming() {
        return 'performance' in window;
    }; // iOS 8.x
    var hasCSSSupports = function hasCSSSupports() {
        return 'supports' in (window.CSS || {});
    }; // use to detect Safari 9+
    var isIE11 = function isIE11() {
        return /MSIE|Trident/.test(window.navigator.userAgent);
    };
    var supported = function() {
        // Runs immediately and then remembers result for subsequent calls
        var isSupported = // Has to be a browser
        isBrowser() && // Can't run on Opera Mini due to lack of everything
        !isOperaMini() && // Require these APIs to feature detect a modern browser
        hasVisibility() && hasPromises() && hasBlobSlice() && hasCreateObjectURL() && hasTiming() && // doesn't need CSSSupports but is a good way to detect Safari 9+ (we do want to support IE11 though)
        (hasCSSSupports() || isIE11());
        return function() {
            return isSupported;
        };
    }();
    /**
     * Plugin internal state (over all instances)
     */ var state = {
        // active app instances, used to redraw the apps and to find the later
        apps: []
    };
    // plugin name
    var name = 'filepond';
    /**
     * Public Plugin methods
     */ var fn = function fn() {};
    exports1.Status = {};
    exports1.FileStatus = {};
    exports1.FileOrigin = {};
    exports1.OptionTypes = {};
    exports1.create = fn;
    exports1.destroy = fn;
    exports1.parse = fn;
    exports1.find = fn;
    exports1.registerPlugin = fn;
    exports1.getOptions = fn;
    exports1.setOptions = fn;
    // if not supported, no API
    if (supported()) {
        // start painter and fire load event
        createPainter(function() {
            state.apps.forEach(function(app) {
                return app._read();
            });
        }, function(ts) {
            state.apps.forEach(function(app) {
                return app._write(ts);
            });
        });
        // fire loaded event so we know when FilePond is available
        var dispatch = function dispatch() {
            // let others know we have area ready
            document.dispatchEvent(new CustomEvent('FilePond:loaded', {
                detail: {
                    supported: supported,
                    create: exports1.create,
                    destroy: exports1.destroy,
                    parse: exports1.parse,
                    find: exports1.find,
                    registerPlugin: exports1.registerPlugin,
                    setOptions: exports1.setOptions
                }
            }));
            // clean up event
            document.removeEventListener('DOMContentLoaded', dispatch);
        };
        if (document.readyState !== 'loading') {
            // move to back of execution queue, FilePond should have been exported by then
            setTimeout(function() {
                return dispatch();
            }, 0);
        } else {
            document.addEventListener('DOMContentLoaded', dispatch);
        }
        // updates the OptionTypes object based on the current options
        var updateOptionTypes = function updateOptionTypes() {
            return forin(getOptions(), function(key, value) {
                exports1.OptionTypes[key] = value[1];
            });
        };
        exports1.Status = Object.assign({}, Status);
        exports1.FileOrigin = Object.assign({}, FileOrigin);
        exports1.FileStatus = Object.assign({}, ItemStatus);
        exports1.OptionTypes = {};
        updateOptionTypes();
        // create method, creates apps and adds them to the app array
        exports1.create = function create() {
            var app = createApp$1.apply(void 0, arguments);
            app.on('destroy', exports1.destroy);
            state.apps.push(app);
            return createAppAPI(app);
        };
        // destroys apps and removes them from the app array
        exports1.destroy = function destroy(hook) {
            // returns true if the app was destroyed successfully
            var indexToRemove = state.apps.findIndex(function(app) {
                return app.isAttachedTo(hook);
            });
            if (indexToRemove >= 0) {
                // remove from apps
                var app = state.apps.splice(indexToRemove, 1)[0];
                // restore original dom element
                app.restoreElement();
                return true;
            }
            return false;
        };
        // parses the given context for plugins (does not include the context element itself)
        exports1.parse = function parse(context) {
            // get all possible hooks
            var matchedHooks = Array.from(context.querySelectorAll('.' + name));
            // filter out already active hooks
            var newHooks = matchedHooks.filter(function(newHook) {
                return !state.apps.find(function(app) {
                    return app.isAttachedTo(newHook);
                });
            });
            // create new instance for each hook
            return newHooks.map(function(hook) {
                return exports1.create(hook);
            });
        };
        // returns an app based on the given element hook
        exports1.find = function find(hook) {
            var app = state.apps.find(function(app) {
                return app.isAttachedTo(hook);
            });
            if (!app) {
                return null;
            }
            return createAppAPI(app);
        };
        // adds a plugin extension
        exports1.registerPlugin = function registerPlugin() {
            for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++){
                plugins[_key] = arguments[_key];
            }
            // register plugins
            plugins.forEach(createAppPlugin);
            // update OptionTypes, each plugin might have extended the default options
            updateOptionTypes();
        };
        exports1.getOptions = function getOptions$1() {
            var opts = {};
            forin(getOptions(), function(key, value) {
                opts[key] = value[0];
            });
            return opts;
        };
        exports1.setOptions = function setOptions$1(opts) {
            if (isObject(opts)) {
                // update existing plugins
                state.apps.forEach(function(app) {
                    app.setOptions(opts);
                });
                // override defaults
                setOptions(opts);
            }
            // return new options
            return exports1.getOptions();
        };
    }
    exports1.supported = supported;
    Object.defineProperty(exports1, '__esModule', {
        value: true
    });
});
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/react-filepond/dist/react-filepond.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * react-filepond v7.1.2
 * A handy FilePond adapter component for React
 * 
 * Copyright (c) 2022 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilePond = exports.FileStatus = exports.registerPlugin = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _filepond = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/filepond/dist/filepond.js [app-client] (ecmascript)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// Import required methods and styles from the FilePond module, should not need anything else
// We need to be able to call the registerPlugin method directly so we can add plugins
exports.registerPlugin = _filepond.registerPlugin;
exports.FileStatus = _filepond.FileStatus;
// Do this once
var isSupported = (0, _filepond.supported)();
// filtered methods
var filteredMethods = [
    "setOptions",
    "on",
    "off",
    "onOnce",
    "appendTo",
    "insertAfter",
    "insertBefore",
    "isAttachedTo",
    "replaceElement",
    "restoreElement",
    "destroy"
];
// The React <FilePond/> wrapper
var FilePond = exports.FilePond = function(_React$Component) {
    _inherits(FilePond, _React$Component);
    function FilePond(props) {
        _classCallCheck(this, FilePond);
        var _this = _possibleConstructorReturn(this, (FilePond.__proto__ || Object.getPrototypeOf(FilePond)).call(this, props));
        _this.allowFilesSync = true;
        return _this;
    }
    // Will setup FilePond instance when mounted
    _createClass(FilePond, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                // clone the input so we can restore it in unmount
                this._input = this._element.querySelector('input[type="file"]');
                this._inputClone = this._input.cloneNode();
                // exit here if not supported
                if (!isSupported) return;
                var options = Object.assign({}, this.props);
                // if onupdate files is defined, make sure setFiles does not cause race condition
                if (options.onupdatefiles) {
                    var cb = options.onupdatefiles;
                    options.onupdatefiles = function(items) {
                        _this2.allowFilesSync = false;
                        cb(items);
                    };
                }
                // Create our pond
                this._pond = (0, _filepond.create)(this._input, options);
                // Reference pond methods to FilePond component instance
                Object.keys(this._pond).filter(function(key) {
                    return !filteredMethods.includes(key);
                }).forEach(function(key) {
                    _this2[key] = _this2._pond[key];
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                // exit when no pond defined
                if (!this._pond) return;
                // This fixed <Strict> errors
                // FilePond destroy is async so we have to move FilePond to a bin element so it can no longer affect current element tree as React unmount / mount is sync
                var bin = document.createElement("div");
                bin.append(this._pond.element);
                bin.id = "foo";
                // now we call destroy so FilePond can start it's destroy logic
                this._pond.destroy();
                this._pond = undefined;
                // we re-add the original file input element so everything is as it was before
                this._element.append(this._inputClone);
            }
        },
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate() {
                if (!this.allowFilesSync) {
                    this.allowFilesSync = true;
                    return false;
                }
                return true;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                // exit when no pond defined
                if (!this._pond) return;
                var options = Object.assign({}, this.props);
                // this is only set onces, on didmount
                delete options.onupdatefiles;
                // update pond options based on new props
                this._pond.setOptions(options);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _props = this.props, id = _props.id, name = _props.name, className = _props.className, allowMultiple = _props.allowMultiple, required = _props.required, captureMethod = _props.captureMethod, acceptedFileTypes = _props.acceptedFileTypes;
                return (0, _react.createElement)("div", {
                    className: "filepond--wrapper",
                    ref: function ref(element) {
                        return _this3._element = element;
                    }
                }, (0, _react.createElement)("input", {
                    type: "file",
                    name: name,
                    id: id,
                    accept: acceptedFileTypes,
                    multiple: allowMultiple,
                    required: required,
                    className: className,
                    capture: captureMethod
                }));
            }
        }
    ]);
    return FilePond;
}(_react2.default.Component);
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>x,
    "Fragment",
    ()=>_,
    "cloneElement",
    ()=>F,
    "createContext",
    ()=>G,
    "createElement",
    ()=>y,
    "createRef",
    ()=>d,
    "h",
    ()=>y,
    "hydrate",
    ()=>E,
    "isValidElement",
    ()=>i,
    "options",
    ()=>l,
    "render",
    ()=>D,
    "toChildArray",
    ()=>j
]);
var n, l, u, i, t, r, o, f, e, c = {}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function v(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function y(l, u, i) {
    var t, r, o, f = {};
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === f[o] && (f[o] = l.defaultProps[o]);
    return p(l, f, t, r, null);
}
function p(n, i, t, r, o) {
    var f = {
        type: n,
        props: i,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++u : o
    };
    return null == o && null != l.vnode && l.vnode(f), f;
}
function d() {
    return {
        current: null
    };
}
function _(n) {
    return n.children;
}
function k(n, l, u, i, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in l || g(n, r, null, u[r], i);
    for(r in l)t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || g(n, r, l[r], u[r], i);
}
function b(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function g(n, l, u, i, t) {
    var r;
    n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u;
    else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for(l in i)u && l in u || b(n.style, l, "");
        if (u) for(l in u)i && u[l] === i[l] || b(n.style, l, u[l]);
    }
    else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? w : m, r) : n.removeEventListener(l, r ? w : m, r);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function m(n) {
    t = !0;
    try {
        return this.l[n.type + !1](l.event ? l.event(n) : n);
    } finally{
        t = !1;
    }
}
function w(n) {
    t = !0;
    try {
        return this.l[n.type + !0](l.event ? l.event(n) : n);
    } finally{
        t = !1;
    }
}
function x(n, l) {
    this.props = n, this.context = l;
}
function A(n, l) {
    if (null == l) return n.__ ? A(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? A(n) : null;
}
function P(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return P(n);
    }
}
function C(n) {
    t ? setTimeout(n) : f(n);
}
function T(n) {
    (!n.__d && (n.__d = !0) && r.push(n) && !$.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || C)($);
}
function $() {
    var n, l, u, i, t, o, f, e;
    for(r.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }); n = r.shift();)n.__d && (l = r.length, i = void 0, t = void 0, f = (o = (u = n).__v).__e, (e = u.__P) && (i = [], (t = h({}, o)).__v = o.__v + 1, M(e, o, t, u.__n, void 0 !== e.ownerSVGElement, null != o.__h ? [
        f
    ] : null, i, null == f ? A(o) : f, o.__h), N(i, o), o.__e != f && P(o)), r.length > l && r.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }));
    $.__r = 0;
}
function H(n, l, u, i, t, r, o, f, e, a) {
    var h, v, y, d, k, b, g, m = i && i.__k || s, w = m.length;
    for(u.__k = [], h = 0; h < l.length; h++)if (null != (d = u.__k[h] = null == (d = l[h]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, {
        children: d
    }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
        if (d.__ = u, d.__b = u.__b + 1, null === (y = m[h]) || y && d.key == y.key && d.type === y.type) m[h] = void 0;
        else for(v = 0; v < w; v++){
            if ((y = m[v]) && d.key == y.key && d.type === y.type) {
                m[v] = void 0;
                break;
            }
            y = null;
        }
        M(n, d, y = y || c, t, r, o, f, e, a), k = d.__e, (v = d.ref) && y.ref != v && (g || (g = []), y.ref && g.push(y.ref, null, d), g.push(v, d.__c || k, d)), null != k ? (null == b && (b = k), "function" == typeof d.type && d.__k === y.__k ? d.__d = e = I(d, e, n) : e = z(n, d, y, m, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = A(y));
    }
    for(u.__e = b, h = w; h--;)null != m[h] && ("function" == typeof u.type && null != m[h].__e && m[h].__e == u.__d && (u.__d = L(i).nextSibling), q(m[h], m[h]));
    if (g) for(h = 0; h < g.length; h++)S(g[h], g[++h], g[++h]);
}
function I(n, l, u) {
    for(var i, t = n.__k, r = 0; t && r < t.length; r++)(i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? I(i, l, u) : z(u, i, i, t, i.__e, l));
    return l;
}
function j(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function(n) {
        j(n, l);
    }) : l.push(n)), l;
}
function z(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function L(n) {
    var l, u, i;
    if (null == n.type || "string" == typeof n.type) return n.__e;
    if (n.__k) {
        for(l = n.__k.length - 1; l >= 0; l--)if ((u = n.__k[l]) && (i = L(u))) return i;
    }
    return null;
}
function M(n, u, i, t, r, o, f, e, c) {
    var s, a, v, y, p, d, k, b, g, m, w, A, P, C, T, $ = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [
        e
    ]), (s = l.__b) && s(u);
    try {
        n: if ("function" == typeof $) {
            if (b = u.props, g = (s = $.contextType) && t[s.__c], m = s ? g ? g.props.value : s.__ : t, i.__c ? k = (a = u.__c = i.__c).__ = a.__E : ("prototype" in $ && $.prototype.render ? u.__c = a = new $(b, m) : (u.__c = a = new x(b, m), a.constructor = $, a.render = B), g && g.sub(a), a.props = b, a.state || (a.state = {}), a.context = m, a.__n = t, v = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != $.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h({}, a.__s)), h(a.__s, $.getDerivedStateFromProps(b, a.__s))), y = a.props, p = a.state, a.__v = u, v) null == $.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);
            else {
                if (null == $.getDerivedStateFromProps && b !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(b, m), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(b, a.__s, m) || u.__v === i.__v) {
                    for(u.__v !== i.__v && (a.props = b, a.state = a.__s, a.__d = !1), u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), w = 0; w < a._sb.length; w++)a.__h.push(a._sb[w]);
                    a._sb = [], a.__h.length && f.push(a);
                    break n;
                }
                null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, m), null != a.componentDidUpdate && a.__h.push(function() {
                    a.componentDidUpdate(y, p, d);
                });
            }
            if (a.context = m, a.props = b, a.__P = n, A = l.__r, P = 0, "prototype" in $ && $.prototype.render) {
                for(a.state = a.__s, a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), C = 0; C < a._sb.length; C++)a.__h.push(a._sb[C]);
                a._sb = [];
            } else do {
                a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), a.state = a.__s;
            }while (a.__d && ++P < 25)
            a.state = a.__s, null != a.getChildContext && (t = h(h({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (d = a.getSnapshotBeforeUpdate(y, p)), T = null != s && s.type === _ && null == s.key ? s.props.children : s, H(n, Array.isArray(T) ? T : [
                T
            ], u, i, t, r, o, f, e, c), a.base = u.__e, u.__h = null, a.__h.length && f.push(a), k && (a.__E = a.__ = null), a.__e = !1;
        } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = O(i.__e, u, i, t, r, o, f, c);
        (s = l.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
    }
}
function N(n, u) {
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function O(l, u, i, t, r, o, f, e) {
    var s, a, h, y = i.props, p = u.props, d = u.type, _ = 0;
    if ("svg" === d && (r = !0), null != o) {
        for(; _ < o.length; _++)if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
            l = s, o[_] = null;
            break;
        }
    }
    if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, e = !1;
    }
    if (null === d) y === p || e && l.data === p || (l.data = p);
    else {
        if (o = o && n.call(l.childNodes), a = (y = i.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
            if (null != o) for(y = {}, _ = 0; _ < l.attributes.length; _++)y[l.attributes[_].name] = l.attributes[_].value;
            (h || a) && (h && (a && h.__html == a.__html || h.__html === l.innerHTML) || (l.innerHTML = h && h.__html || ""));
        }
        if (k(l, p, y, r, e), h) u.__k = [];
        else if (_ = u.props.children, H(l, Array.isArray(_) ? _ : [
            _
        ], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && A(i, 0), e), null != o) for(_ = o.length; _--;)null != o[_] && v(o[_]);
        e || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && g(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && g(l, "checked", _, y.checked, !1));
    }
    return l;
}
function S(n, u, i) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, i);
    }
}
function q(n, u, i) {
    var t, r;
    if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || S(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && q(t[r], u, i || "function" != typeof n.type);
    i || null == n.__e || v(n.__e), n.__ = n.__e = n.__d = void 0;
}
function B(n, l, u) {
    return this.constructor(n, u);
}
function D(u, i, t) {
    var r, o, f;
    l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], M(i, u = (!r && t || i).__k = y(_, null, [
        u
    ]), o || c, c, void 0 !== i.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), N(f, u);
}
function E(n, l) {
    D(n, l, E);
}
function F(l, u, i) {
    var t, r, o, f = h({}, l.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), p(l.type, f, t || l.key, r || l.ref, null);
}
function G(n, l) {
    var u = {
        __c: l = "__cC" + e++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, i;
            return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function() {
                return i;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(function(n) {
                    n.__e = !0, T(n);
                });
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
    __e: function(n, l, u, i) {
        for(var t, r, o; l = l.__;)if ((t = l.__c) && !t.__) try {
            if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, i = function(n) {
    return null != n && void 0 === n.constructor;
}, t = !1, x.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), T(this));
}, x.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), T(this));
}, x.prototype.render = _, r = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $.__r = 0, e = 0;
;
 //# sourceMappingURL=preact.module.js.map
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsx",
    ()=>o,
    "jsxDEV",
    ()=>o,
    "jsxs",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
;
;
var _ = 0;
function o(o, e, n, t, f, l) {
    var s, u, a = {};
    for(u in e)"ref" == u ? s = e[u] : a[u] = e[u];
    var i = {
        type: o,
        props: a,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --_,
        __source: f,
        __self: l
    };
    if ("function" == typeof o && (s = o.defaultProps)) for(u in s)void 0 === a[u] && (a[u] = s[u]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].vnode && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].vnode(i), i;
}
;
 //# sourceMappingURL=jsxRuntime.module.js.map
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    "jsx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsx"],
    "jsxDEV",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"],
    "jsxs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxs"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/@upload-io/upload-api-client-upload-js/dist/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = /******/ function() {
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./src/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                "beginMultipartUpload": function() {
                    return /* reexport */ beginMultipartUpload;
                },
                "completeUploadPart": function() {
                    return /* reexport */ completeUploadPart;
                },
                "getUploadPart": function() {
                    return /* reexport */ getUploadPart;
                },
                "request": function() {
                    return /* reexport */ request;
                }
            });
            ; // CONCATENATED MODULE: ./src/core/request.ts
            /**
 * Request using XHR client
 * @param options The request options from the the service
 * @returns ApiResult
 * @throws ApiError
 */ function _await(value, then, direct) {
                if (direct) {
                    return then ? then(value) : value;
                }
                if (!value || !value.then) {
                    value = Promise.resolve(value);
                }
                return then ? value.then(then) : value;
            }
            function _async(f) {
                return function() {
                    for(var args = [], i = 0; i < arguments.length; i++){
                        args[i] = arguments[i];
                    }
                    try {
                        return Promise.resolve(f.apply(this, args));
                    } catch (e) {
                        return Promise.reject(e);
                    }
                };
            }
            var request = _async(function(config, options) {
                var url = getUrl(config, options);
                return _await(sendRequest(config, options, url), function(response) {
                    var responseBody = getResponseBody(response);
                    var responseHeader = getResponseHeader(response, options.responseHeader);
                    return {
                        url: url,
                        ok: response.status >= 200 && response.status < 300,
                        status: response.status,
                        statusText: response.statusText,
                        body: responseHeader || responseBody
                    };
                });
            });
            var sendRequest = _async(function(config, options, url) {
                var xhr = new XMLHttpRequest();
                xhr.open(options.method, url, true);
                xhr.withCredentials = config.WITH_CREDENTIALS;
                return _await(getHeaders(config, options), function(headers) {
                    headers.forEach(function(value, key) {
                        xhr.setRequestHeader(key, value);
                    });
                    return new Promise(function(resolve) {
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                resolve(xhr);
                            }
                        };
                        xhr.send(getRequestBody(options));
                    });
                });
            });
            var getHeaders = _async(function(config, options) {
                return _await(resolve(options, config.USERNAME), function(username) {
                    return _await(resolve(options, config.PASSWORD), function(password) {
                        return _await(resolve(options, config.HEADERS), function(defaultHeaders) {
                            var headers = new Headers(Object.assign(Object.assign({
                                Accept: contentTypeJson
                            }, defaultHeaders), options.headers));
                            if (isStringWithValue(username) && isStringWithValue(password)) {
                                var credentials = btoa("".concat(username, ":").concat(password));
                                headers.append("Authorization", "Basic ".concat(credentials));
                            }
                            if (options.body) {
                                headers.append(contentType, contentTypeJson);
                            }
                            return headers;
                        });
                    });
                });
            });
            var resolve = _async(function(options, resolver) {
                return typeof resolver === "function" ? resolver(options) : resolver;
            });
            var contentType = "Content-Type";
            var contentTypeJson = "application/json";
            function isDefined(value) {
                return value !== undefined && value !== null;
            }
            function isStringWithValue(value) {
                return typeof value === "string" && value !== "";
            }
            function getQueryString(params) {
                var qs = [];
                Object.keys(params).forEach(function(key) {
                    var value = params[key];
                    if (isDefined(value)) {
                        if (Array.isArray(value)) {
                            value.forEach(function(value) {
                                qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value))));
                            });
                        } else {
                            qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value))));
                        }
                    }
                });
                if (qs.length > 0) {
                    return "?".concat(qs.join("&"));
                }
                return "";
            }
            function getUrl(config, options) {
                var path = options.path.replace(/[:]/g, "_");
                var url = "".concat(config.BASE).concat(path);
                if (options.query) {
                    return "".concat(url).concat(getQueryString(options.query));
                }
                return url;
            }
            function getRequestBody(options) {
                if (options.body) {
                    return JSON.stringify(options.body);
                }
                return undefined;
            }
            function getResponseHeader(xhr, responseHeader) {
                if (responseHeader) {
                    return xhr.getResponseHeader(responseHeader);
                }
                return null;
            }
            function getResponseBody(xhr) {
                var headerValue = xhr.getResponseHeader(contentType);
                if (headerValue) {
                    var isJSON = headerValue.toLowerCase().startsWith(contentTypeJson);
                    if (isJSON) {
                        return JSON.parse(xhr.responseText);
                    } else {
                        return xhr.responseText;
                    }
                }
                return null;
            }
            ; // CONCATENATED MODULE: ./src/services/UploadsService.ts
            function UploadsService_await(value, then, direct) {
                if (direct) {
                    return then ? then(value) : value;
                }
                if (!value || !value.then) {
                    value = Promise.resolve(value);
                }
                return then ? value.then(then) : value;
            }
            /**
 * Finalizes an upload part for an in-progress multipart upload. Required API key type: 'secret_*' or 'public_*'.
 * @param accountId
 * @param uploadId
 * @param uploadPartIndex
 * @param requestBody
 * @returns void
 * @throws ApiError
 */ function UploadsService_async(f) {
                return function() {
                    for(var args = [], i = 0; i < arguments.length; i++){
                        args[i] = arguments[i];
                    }
                    try {
                        return Promise.resolve(f.apply(this, args));
                    } catch (e) {
                        return Promise.reject(e);
                    }
                };
            }
            /**
 * Gets a remaining upload part for an in-progress upload. Required API key type: 'secret_*' or 'public_*'.
 * @param accountId
 * @param uploadId
 * @param uploadPartIndex
 * @returns UploadPartV2 Success.
 * @throws ApiError
 */ var getUploadPart = UploadsService_async(function(config, accountId, uploadId, uploadPartIndex) {
                return request(config, {
                    method: "GET",
                    path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex)
                });
            });
            var completeUploadPart = UploadsService_async(function(config, accountId, uploadId, uploadPartIndex, requestBody) {
                return request(config, {
                    method: "PUT",
                    path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex),
                    body: requestBody
                });
            });
            var beginMultipartUpload = UploadsService_async(function(config, accountId, requestBody) {
                return request(config, {
                    method: "POST",
                    path: "".concat(accounts).concat(accountId).concat(uploads),
                    body: requestBody
                });
            });
            var accounts = "/v2/accounts/";
            var uploads = "/uploads";
            var parts = "/parts/";
            ; // CONCATENATED MODULE: ./src/index.ts
        /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ // Used by upload-js
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition){
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                /******/ }
            /******/ }
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__("./src/index.ts");
/******/ }();
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/progress-smoother/dist/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = /******/ function() {
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./src/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                "ProgressSmoother": function() {
                    return /* reexport */ ProgressSmoother;
                }
            });
            ; // CONCATENATED MODULE: ./src/ProgressSmoother.ts
            function ProgressSmoother(config) {
                var _a, _b;
                var minFinishDuration = 1000; // If set to 0, the download with abruptly move to 100% on the final chunk. This way it smooths over 1000ms.
                var maxForecastFactor = 0.33; // How much to estimate without receiving a single chunk.
                var minSetupTime = (_a = config.minDelayUntilFirstValue) !== null && _a !== void 0 ? _a : 0;
                var minTeardownTime = (_b = config.teardownTime) !== null && _b !== void 0 ? _b : 0;
                var valueIncreaseRatePerSecond = config.valueIncreaseRatePerSecond, averageTimeBetweenValues = config.averageTimeBetweenValues, maxValue = config.maxValue, valueIncreaseDelta = config.valueIncreaseDelta;
                var _lastReading;
                var lastTimeMinus1 = Date.now();
                var lastYieldedValue = 0;
                var movingAverage = 0;
                function returnMonotonic(getValue) {
                    var value = getValue();
                    if (value > lastYieldedValue) {
                        lastYieldedValue = value;
                    }
                    return lastYieldedValue;
                }
                function hasFinished(lastReading) {
                    return lastReading.value === maxValue;
                }
                function fromLastReading(lastReading, now) {
                    if (hasFinished(lastReading)) {
                        var teardownTime = Math.max(minFinishDuration, minTeardownTime);
                        var millisElapsed = now - lastReading.time;
                        var percentageIntoTeardown = millisElapsed / teardownTime;
                        var percentageIntoTeardownCapped = Math.min(1, percentageIntoTeardown);
                        var percentageIntoTeardownEased = easeInQuad(percentageIntoTeardownCapped);
                        var delta = lastReading.value - movingAverage;
                        return movingAverage + delta * percentageIntoTeardownEased;
                    }
                    return calculateEMA(lastReading.value, now, lastTimeMinus1);
                }
                function forecastInitialValue(now) {
                    var maxForecastSize = Math.min(valueIncreaseDelta, maxValue * maxForecastFactor);
                    var maxForecastTransferTime = maxForecastSize / valueIncreaseRatePerSecond * 1000;
                    var maxTwiddleTime = minSetupTime + maxForecastTransferTime;
                    var millisElapsed = now - lastTimeMinus1;
                    var percentageIntoTwiddleTime = millisElapsed / maxTwiddleTime;
                    var percentageIntoTwiddleTimeCapped = Math.min(1, percentageIntoTwiddleTime);
                    return percentageIntoTwiddleTimeCapped * maxForecastSize;
                }
                function alpha(now, lastTime) {
                    var alphaMagicNumber = 3.5; // This just seems to work best, from playing around.
                    return 1 - Math.exp(-(now - lastTime) / (averageTimeBetweenValues * alphaMagicNumber));
                }
                function calculateEMA(value, now, lastTime) {
                    var a = alpha(now, lastTime);
                    return a * value + (1 - a) * movingAverage;
                }
                function easeInQuad(x) {
                    return x * x;
                }
                function setValue(value, nowMaybe) {
                    if (_lastReading !== undefined) {
                        if (hasFinished(_lastReading)) {
                            return;
                        }
                        movingAverage = calculateEMA(_lastReading.value, _lastReading.time, lastTimeMinus1);
                        lastTimeMinus1 = _lastReading.time;
                    }
                    _lastReading = {
                        time: nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now(),
                        value: Math.min(value, maxValue)
                    };
                }
                function smoothedValue(nowMaybe) {
                    return returnMonotonic(function() {
                        var now = nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now();
                        if (_lastReading !== undefined) {
                            return fromLastReading(_lastReading, now);
                        }
                        return forecastInitialValue(now);
                    });
                }
                function smoothedFactor(nowMaybe) {
                    return smoothedValue(nowMaybe) / maxValue;
                }
                return {
                    setValue: setValue,
                    smoothedValue: smoothedValue,
                    smoothedFactor: smoothedFactor
                };
            }
            ; // CONCATENATED MODULE: ./src/index.ts
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition){
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                /******/ }
            /******/ }
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__("./src/index.ts");
/******/ }();
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/upload-js/dist/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = /******/ function() {
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./src/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                "Upload": function() {
                    return /* reexport */ Upload;
                },
                "UploadApiError": function() {
                    return /* reexport */ UploadApiError;
                }
            });
            ; // CONCATENATED MODULE: external "@upload-io/upload-api-client-upload-js"
            var upload_api_client_upload_js_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/@upload-io/upload-api-client-upload-js/dist/main.js [app-client] (ecmascript)");
            ;
            ; // CONCATENATED MODULE: ./src/Mutex.ts
            /**
 * A lightweight mutex. (Other libraries contain too many features and we want to keep the size upload-js down).
 *
 * Characteristics:
 * - Non-reentrant.
 * - Unfair. (Multiple callers awaiting 'acquire' will be granted the mutex in no order.)
 *   - When calling `safe` consecutively with no 'awaits' in-between, the current context will synchronously acquire
 *     the mutex every time.
 */ function _call(body, then, direct) {
                if (direct) {
                    return then ? then(body()) : body();
                }
                try {
                    var result = Promise.resolve(body());
                    return then ? result.then(then) : result;
                } catch (e) {
                    return Promise.reject(e);
                }
            }
            function _rethrow(thrown, value) {
                if (thrown) throw value;
                return value;
            }
            function _finallyRethrows(body, finalizer) {
                try {
                    var result = body();
                } catch (e) {
                    return finalizer(true, e);
                }
                if (result && result.then) {
                    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
                }
                return finalizer(false, result);
            }
            function _empty() {}
            function _awaitIgnored(value, direct) {
                if (!direct) {
                    return value && value.then ? value.then(_empty) : Promise.resolve();
                }
            }
            function _settle(pact, state, value) {
                if (!pact.s) {
                    if (value instanceof _Pact) {
                        if (value.s) {
                            if (state & 1) {
                                state = value.s;
                            }
                            value = value.v;
                        } else {
                            value.o = _settle.bind(null, pact, state);
                            return;
                        }
                    }
                    if (value && value.then) {
                        value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
                        return;
                    }
                    pact.s = state;
                    pact.v = value;
                    var observer = pact.o;
                    if (observer) {
                        observer(pact);
                    }
                }
            }
            var _Pact = /*#__PURE__*/ function() {
                function _Pact() {}
                _Pact.prototype.then = function(onFulfilled, onRejected) {
                    var result = new _Pact();
                    var state = this.s;
                    if (state) {
                        var callback = state & 1 ? onFulfilled : onRejected;
                        if (callback) {
                            try {
                                _settle(result, 1, callback(this.v));
                            } catch (e) {
                                _settle(result, 2, e);
                            }
                            return result;
                        } else {
                            return this;
                        }
                    }
                    this.o = function(_this) {
                        try {
                            var value = _this.v;
                            if (_this.s & 1) {
                                _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
                            } else if (onRejected) {
                                _settle(result, 1, onRejected(value));
                            } else {
                                _settle(result, 2, value);
                            }
                        } catch (e) {
                            _settle(result, 2, e);
                        }
                    };
                    return result;
                };
                return _Pact;
            }();
            function _isSettledPact(thenable) {
                return thenable instanceof _Pact && thenable.s & 1;
            }
            function _for(test, update, body) {
                var stage;
                for(;;){
                    var shouldContinue = test();
                    if (_isSettledPact(shouldContinue)) {
                        shouldContinue = shouldContinue.v;
                    }
                    if (!shouldContinue) {
                        return result;
                    }
                    if (shouldContinue.then) {
                        stage = 0;
                        break;
                    }
                    var result = body();
                    if (result && result.then) {
                        if (_isSettledPact(result)) {
                            result = result.s;
                        } else {
                            stage = 1;
                            break;
                        }
                    }
                    if (update) {
                        var updateValue = update();
                        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
                            stage = 2;
                            break;
                        }
                    }
                }
                var pact = new _Pact();
                var reject = _settle.bind(null, pact, 2);
                (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
                return pact;
                //TURBOPACK unreachable
                ;
                function _resumeAfterBody(value) {
                    result = value;
                    do {
                        if (update) {
                            updateValue = update();
                            if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
                                updateValue.then(_resumeAfterUpdate).then(void 0, reject);
                                return;
                            }
                        }
                        shouldContinue = test();
                        if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
                            _settle(pact, 1, result);
                            return;
                        }
                        if (shouldContinue.then) {
                            shouldContinue.then(_resumeAfterTest).then(void 0, reject);
                            return;
                        }
                        result = body();
                        if (_isSettledPact(result)) {
                            result = result.v;
                        }
                    }while (!result || !result.then)
                    result.then(_resumeAfterBody).then(void 0, reject);
                }
                function _resumeAfterTest(shouldContinue) {
                    if (shouldContinue) {
                        result = body();
                        if (result && result.then) {
                            result.then(_resumeAfterBody).then(void 0, reject);
                        } else {
                            _resumeAfterBody(result);
                        }
                    } else {
                        _settle(pact, 1, result);
                    }
                }
                function _resumeAfterUpdate() {
                    if (shouldContinue = test()) {
                        if (shouldContinue.then) {
                            shouldContinue.then(_resumeAfterTest).then(void 0, reject);
                        } else {
                            _resumeAfterTest(shouldContinue);
                        }
                    } else {
                        _settle(pact, 1, result);
                    }
                }
            }
            function _continue(value, then) {
                return value && value.then ? value.then(then) : then(value);
            }
            function _async(f) {
                return function() {
                    for(var args = [], i = 0; i < arguments.length; i++){
                        args[i] = arguments[i];
                    }
                    try {
                        return Promise.resolve(f.apply(this, args));
                    } catch (e) {
                        return Promise.reject(e);
                    }
                };
            }
            function Mutex() {
                var mutex;
                var resolver;
                var safe = function safe(callback) {
                    return _call(acquire, function() {
                        return _finallyRethrows(callback, function(_wasThrown, _result) {
                            release();
                            return _rethrow(_wasThrown, _result);
                        });
                    });
                };
                var acquire = _async(function() {
                    // Loop necessary for when multiple calls are made to 'acquire' before a 'release' is called, else the call to
                    // 'release' will resume every caller currently waiting on 'acquire'.
                    // eslint-disable-next-line no-unmodified-loop-condition
                    return _continue(_for(function() {
                        return mutex !== undefined;
                    }, void 0, function() {
                        return _awaitIgnored(mutex);
                    }), function() {
                        mutex = new Promise(function(resolve) {
                            resolver = resolve;
                        });
                    });
                });
                var release = function release() {
                    if (resolver === undefined) {
                        throw new Error("Unable to release mutex: already released.");
                    }
                    resolver();
                    resolver = undefined;
                    mutex = undefined;
                };
                return {
                    safe: safe
                };
            }
            ; // CONCATENATED MODULE: external "progress-smoother"
            var external_progress_smoother_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/progress-smoother/dist/main.js [app-client] (ecmascript)");
            ;
            ; // CONCATENATED MODULE: ./src/UploadApiError.ts
            function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _typeof(obj);
            }
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                Object.defineProperty(Constructor, "prototype", {
                    writable: false
                });
                return Constructor;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                Object.defineProperty(subClass, "prototype", {
                    writable: false
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                } else if (call !== void 0) {
                    throw new TypeError("Derived constructors may only return object or undefined");
                }
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }
            function _wrapNativeSuper(Class) {
                var _cache = typeof Map === "function" ? new Map() : undefined;
                _wrapNativeSuper = function _wrapNativeSuper(Class) {
                    if (Class === null || !_isNativeFunction(Class)) return Class;
                    if (typeof Class !== "function") {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    if (typeof _cache !== "undefined") {
                        if (_cache.has(Class)) return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    return _setPrototypeOf(Wrapper, Class);
                };
                return _wrapNativeSuper(Class);
            }
            function _construct(Parent, args, Class) {
                if (_isNativeReflectConstruct()) {
                    _construct = Reflect.construct;
                } else {
                    _construct = function _construct(Parent, args, Class) {
                        var a = [
                            null
                        ];
                        a.push.apply(a, args);
                        var Constructor = Function.bind.apply(Parent, a);
                        var instance = new Constructor();
                        if (Class) _setPrototypeOf(instance, Class.prototype);
                        return instance;
                    };
                }
                return _construct.apply(null, arguments);
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _isNativeFunction(fn) {
                return Function.toString.call(fn).indexOf("[native code]") !== -1;
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var UploadApiError = /*#__PURE__*/ function(_Error) {
                _inherits(UploadApiError, _Error);
                var _super = _createSuper(UploadApiError);
                function UploadApiError(response) {
                    var _this;
                    _classCallCheck(this, UploadApiError);
                    _this = _super.call(this, response.error.message);
                    _this.errorCode = response.error.code;
                    _this.details = response.error.details;
                    return _this;
                }
                return _createClass(UploadApiError);
            }(/*#__PURE__*/ _wrapNativeSuper(Error));
            ; // CONCATENATED MODULE: ./src/Upload.ts
            function Upload_rethrow(thrown, value) {
                if (thrown) throw value;
                return value;
            }
            function Upload_finallyRethrows(body, finalizer) {
                try {
                    var result = body();
                } catch (e) {
                    return finalizer(true, e);
                }
                if (result && result.then) {
                    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
                }
                return finalizer(false, result);
            }
            function _continueIgnored(value) {
                if (value && value.then) {
                    return value.then(Upload_empty);
                }
            }
            function _toConsumableArray(arr) {
                return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }
            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _iterableToArray(iter) {
                if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
            }
            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return _arrayLikeToArray(arr);
            }
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++){
                    arr2[i] = arr[i];
                }
                return arr2;
            }
            function Upload_empty() {}
            var accountIdLength = 7; // Sync with: upload/shared/**/AccountIdUtils
            function Upload_awaitIgnored(value, direct) {
                if (!direct) {
                    return value && value.then ? value.then(Upload_empty) : Promise.resolve();
                }
            }
            var specialApiKeyAccountId = "W142hJk";
            function Upload_async(f) {
                return function() {
                    for(var args = [], i = 0; i < arguments.length; i++){
                        args[i] = arguments[i];
                    }
                    try {
                        return Promise.resolve(f.apply(this, args));
                    } catch (e) {
                        return Promise.reject(e);
                    }
                };
            }
            var specialApiKeys = [
                "free",
                "demo"
            ];
            function _await(value, then, direct) {
                if (direct) {
                    return then ? then(value) : value;
                }
                if (!value || !value.then) {
                    value = Promise.resolve(value);
                }
                return then ? value.then(then) : value;
            }
            var apiKeyPrefix = "public_";
            function Upload_call(body, then, direct) {
                if (direct) {
                    return then ? then(body()) : body();
                }
                try {
                    var result = Promise.resolve(body());
                    return then ? result.then(then) : result;
                } catch (e) {
                    return Promise.reject(e);
                }
            }
            var maxUploadConcurrency = 5;
            function _callIgnored(body, direct) {
                return Upload_call(body, Upload_empty, direct);
            }
            var refreshBeforeExpirySeconds = 20;
            function _catch(body, recover) {
                try {
                    var result = body();
                } catch (e) {
                    return recover(e);
                }
                if (result && result.then) {
                    return result.then(void 0, recover);
                }
                return result;
            }
            var onProgressInterval = 100;
            function _invokeIgnored(body) {
                var result = body();
                if (result && result.then) {
                    return result.then(Upload_empty);
                }
            }
            var retryAuthAfterErrorSeconds = 5;
            var minJwtTtlSeconds = 10;
            var maxJwtTtlSeconds = 2147483; // Max value for window.setTimeout is 2147483647ms -- if we go over this, the timeout fires immediately.
            var accessTokenPathBase = "/api/v1/access_tokens/";
            var logPrefix = "[upload-js] ";
            /**
 * You should instantiate one instance of this class in your web app.
 *
 * Try using:
 *
 *    Upload({apiKey: "free"})
 *
 * If multiple instances exist, then all '*AuthSession' calls will be forwarded to the first instance that had an
 * '*AuthSession' call invoked on it.
 */ function Upload(config) {
                // ----------------
                // READONLY MEMBERS
                // ----------------
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                var accountId;
                var authMutex = Mutex();
                var apiUrl = (_b = (_a = config.internal) === null || _a === void 0 ? void 0 : _a.apiUrl) !== null && _b !== void 0 ? _b : "https://api.bytescale.com";
                var cdnUrl = (_d = (_c = config.internal) === null || _c === void 0 ? void 0 : _c.cdnUrl) !== null && _d !== void 0 ? _d : "https://upcdn.io";
                var authenticateWithApiKey = (_f = (_e = config.internal) === null || _e === void 0 ? void 0 : _e.authenticateWithApiKey) !== null && _f !== void 0 ? _f : true;
                var headers = (_g = config.internal) === null || _g === void 0 ? void 0 : _g.headers;
                var debugMode = config.debug === true;
                var wasCalled = " was called."; // ------------------
                // READ/WRITE MEMBERS
                // ------------------
                var lastAuthSession; // ----------------
                // CONSTRUCTOR
                // ----------------
                if ((config !== null && config !== void 0 ? config : undefined) === undefined) {
                    throw new Error("".concat(logPrefix, "Config parameter required."));
                }
                if (config.debug === true) {
                    console.log("".concat(logPrefix, "Initialized with API key '").concat(config.apiKey, "'"));
                }
                if (((_h = config.apiKey) !== null && _h !== void 0 ? _h : undefined) === undefined) {
                    throw new Error("".concat(logPrefix, "Please provide an API key via the 'apiKey' config parameter."));
                }
                if (config.apiKey.trim() !== config.apiKey) {
                    // We do not support API keys with whitespace (by trimming ourselves) because otherwise we'd need to support this
                    // everywhere in perpetuity (since removing the trimming would be a breaking change).
                    throw new Error("".concat(logPrefix, "API key needs trimming (whitespace detected)."));
                } // Non-api-key authentication is required by Bytescale Dashboard, which uses bearer tokens instead of API keys because
                // the user may not have any active API keys, but might still want to upload files via the Bytescale Dashboard.
                if (((_j = config.internal) === null || _j === void 0 ? void 0 : _j.authenticateWithApiKey) === false) {
                    accountId = config.internal.accountId;
                } else {
                    if (specialApiKeys.includes(config.apiKey)) {
                        accountId = specialApiKeyAccountId;
                    } else {
                        if (!config.apiKey.startsWith(apiKeyPrefix)) {
                            throw new Error("".concat(logPrefix, "API key must begin with \"").concat(apiKeyPrefix, "\"."));
                        }
                        accountId = config.apiKey.substr(apiKeyPrefix.length, accountIdLength);
                        if (accountId.length !== accountIdLength) {
                            throw new Error("".concat(logPrefix, "API key is too short!"));
                        }
                    }
                }
                var accessTokenUrl = "".concat(cdnUrl).concat(accessTokenPathBase).concat(accountId); // ----------------
                // PUBLIC METHODS
                // ----------------
                var beginAuthSession = Upload_async(function(authUrl, authHeaders) {
                    return Upload_awaitIgnored(callAuthMethod(Upload_async(function(x) {
                        return x.beginAuthSession(authUrl, authHeaders);
                    }), Upload_async(function() {
                        debug("'beginAuthSession'".concat(wasCalled)); // Explanation:
                        // - Prevents restarting the auth session on accidental double-calls to 'beginAuthSession': in some users' code,
                        //   this happens accidentally every second, so we want to bail-out if we detect this is occurring.
                        // - We only check 'authUrl' to determine if the 'same call' is being made, since 'authHeaders' is a function
                        //   and therefore its body can be switched-out by the user's code if they desire a change to its behaviour, so
                        //   don't need to call 'beginAuthSession' just to update it.
                        if ((lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.authUrl) === authUrl) {
                            error("'beginAuthSession' already called. Ignoring this call. Hint: call 'endAuthSession' and then 'beginAuthSession' if you want to restart the auth session.");
                            return;
                        }
                        return Upload_call(doEndAuthSession, function() {
                            var authSession = {
                                accessToken: undefined,
                                accessTokenRefreshHandle: undefined,
                                isActive: true,
                                authUrl: authUrl
                            }; // Does not need to be inside the mutex since the environment is single-threaded, and we have not async-yielded
                            // since the mutex from 'endAuthSession' was relinquished (meaning we still have execution,
                            // so we know a) nothing can interject and b) nothing has interjected since the lock was relinquished).
                            lastAuthSession = authSession;
                            return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
                        });
                    })));
                });
                var endAuthSession = Upload_async(function() {
                    return Upload_awaitIgnored(callAuthMethod(Upload_async(function(x) {
                        return x.endAuthSession();
                    }), Upload_async(function() {
                        debug("'endAuthSession'".concat(wasCalled));
                        return _callIgnored(doEndAuthSession);
                    })));
                });
                var uploadFile = Upload_async(function(file) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    debug("'uploadFile'".concat(wasCalled)); // Initial progress (raised immediately and synchronously).
                    var cancellationHandlers = [];
                    var addCancellationHandler = function addCancellationHandler(ca) {
                        cancellationHandlers.push(ca);
                    };
                    var cancel = function cancel() {
                        return cancellationHandlers.forEach(function(x) {
                            return x();
                        });
                    };
                    if (params.onBegin !== undefined) {
                        params.onBegin({
                            cancel: cancel
                        });
                    }
                    return _catch(function() {
                        return _await(beginFileUpload(file, params, addCancellationHandler));
                    }, function(e) {
                        cancel();
                        throw e;
                    });
                });
                var url = function url(filePath, transformationOrParams) {
                    var _a;
                    var defaultSlug = "raw";
                    var params = typeof transformationOrParams === "string" ? {
                        transformation: transformationOrParams
                    } : transformationOrParams;
                    return "".concat(cdnUrl, "/").concat(accountId, "/").concat((_a = params === null || params === void 0 ? void 0 : params.transformation) !== null && _a !== void 0 ? _a : defaultSlug).concat(filePath).concat((params === null || params === void 0 ? void 0 : params.auth) === true ? "?_auth=true" : "");
                };
                var self = {
                    beginAuthSession: beginAuthSession,
                    endAuthSession: endAuthSession,
                    uploadFile: uploadFile,
                    url: url
                }; // ----------------
                // PRIVATE METHODS
                // ----------------
                var doEndAuthSession = Upload_async(function() {
                    return Upload_awaitIgnored(authMutex.safe(Upload_async(function() {
                        if (lastAuthSession === undefined) {
                            return;
                        }
                        var authSession = lastAuthSession;
                        lastAuthSession = undefined;
                        if (authSession.accessTokenRefreshHandle !== undefined) {
                            clearTimeout(authSession.accessTokenRefreshHandle);
                        }
                        authSession.isActive = false;
                        return _callIgnored(deleteAccessToken);
                    })));
                });
                var beginFileUpload = Upload_async(function(file, params, addCancellationHandler) {
                    var progressSmoother = (0, external_progress_smoother_namespaceObject.ProgressSmoother)({
                        maxValue: file.size,
                        teardownTime: 1000,
                        minDelayUntilFirstValue: 2000,
                        valueIncreaseDelta: 200 * 1024,
                        valueIncreaseRatePerSecond: 50 * 1024,
                        averageTimeBetweenValues: 1000 // When running, XHR should (hopefully) report at least every second, regardless of connection speed.
                    });
                    var reportProgress = function reportProgress(stopReportingProgress) {
                        if (params.onProgress === undefined) {
                            stopReportingProgress(); // Important to call this, as outer function awaits this call when the download ends.
                        } else {
                            var bytesSent = progressSmoother.smoothedValue();
                            var bytesTotal = file.size;
                            if (bytesSent === bytesTotal) {
                                stopReportingProgress();
                            }
                            params.onProgress({
                                bytesSent: bytesSent,
                                bytesTotal: bytesTotal,
                                progress: Math.round(bytesSent / bytesTotal * 100)
                            });
                        }
                    };
                    return withProgressReporting(onProgressInterval, reportProgress, Upload_async(function() {
                        var uploadRequest = {
                            path: params.path,
                            metadata: params.metadata,
                            mime: normalizeMimeType(file.type),
                            originalFileName: file.name,
                            protocol: "1.1",
                            size: file.size,
                            tags: params.tags
                        };
                        debug("Initiating file upload. Params = ".concat(JSON.stringify(uploadRequest)));
                        return _await((0, upload_api_client_upload_js_namespaceObject.beginMultipartUpload)(getConfig(), accountId, uploadRequest), function(_beginMultipartUpload) {
                            var uploadMetadata = handleApiResult(_beginMultipartUpload);
                            debug("Initiated file upload. Metadata = ".concat(JSON.stringify(uploadMetadata)));
                            var incUploadIndex = function() {
                                var lastUploadIndex = 0;
                                return function() {
                                    if (lastUploadIndex === uploadMetadata.uploadParts.count - 1) {
                                        return undefined;
                                    }
                                    return ++lastUploadIndex;
                                };
                            }();
                            var nextPartQueue = [
                                uploadMetadata.uploadParts.first
                            ];
                            var getNextPart = Upload_async(function(workerIndex) {
                                var nextPart = nextPartQueue.pop();
                                if (nextPart !== undefined) {
                                    debug("Dequeued part ".concat(nextPart.uploadPartIndex, "."), workerIndex);
                                    return nextPart;
                                }
                                var uploadPartIndex = incUploadIndex();
                                if (uploadPartIndex === undefined) {
                                    debug("No parts remaining.", workerIndex);
                                    return undefined;
                                }
                                debug("Fetching metadata for part ".concat(uploadPartIndex, "."), workerIndex);
                                return _await((0, upload_api_client_upload_js_namespaceObject.getUploadPart)(getConfig(), accountId, uploadMetadata.uploadId, uploadPartIndex), handleApiResult);
                            });
                            var bytesSentByEachWorker = [];
                            var uploadNextPart = function uploadNextPart(workerIndex) {
                                return _await(getNextPart(workerIndex), function(nextPart) {
                                    return _invokeIgnored(function() {
                                        if (nextPart !== undefined) {
                                            var lastBytesSent = 0;
                                            var progress = function progress(_ref) {
                                                var bytesSent = _ref.bytesSent;
                                                if (bytesSentByEachWorker[workerIndex] === undefined) {
                                                    bytesSentByEachWorker[workerIndex] = bytesSent;
                                                } else {
                                                    bytesSentByEachWorker[workerIndex] -= lastBytesSent;
                                                    bytesSentByEachWorker[workerIndex] += bytesSent;
                                                }
                                                lastBytesSent = bytesSent;
                                                var totalBytesSent = bytesSentByEachWorker.reduce(function(a, b) {
                                                    return a + b;
                                                });
                                                progressSmoother.setValue(totalBytesSent);
                                            };
                                            return _await(uploadPart(file, nextPart, progress, addCancellationHandler, workerIndex), function() {
                                                return Upload_awaitIgnored(uploadNextPart(workerIndex));
                                            });
                                        }
                                    });
                                });
                            };
                            return _await(Promise.all(_toConsumableArray(Array(maxUploadConcurrency).keys()).map(function(workerIndex) {
                                return _await(uploadNextPart(workerIndex));
                            })), function() {
                                var uploadedFile = Object.assign({
                                    accountId: accountId,
                                    file: file
                                }, uploadMetadata.file);
                                debug("File upload completed.");
                                return uploadedFile;
                            });
                        });
                    }));
                });
                var putUploadPart = Upload_async(function(url, content, progress, addCancellationHandler) {
                    var xhr = new XMLHttpRequest();
                    var pending = true;
                    addCancellationHandler(function() {
                        if (pending) {
                            xhr.abort();
                        }
                    });
                    return Upload_finallyRethrows(function() {
                        return _await(new Promise(function(resolve, reject) {
                            xhr.upload.addEventListener("progress", function(evt) {
                                if (evt.lengthComputable) {
                                    progress({
                                        bytesSent: evt.loaded,
                                        bytesTotal: evt.total
                                    });
                                }
                            }, false);
                            xhr.addEventListener("load", function() {
                                // Ensure we always report the progress of a finished upload as 100%.
                                progress({
                                    bytesSent: content.size,
                                    bytesTotal: content.size
                                });
                                if (Math.floor(xhr.status / 100) === 2) {
                                    var etag = xhr.getResponseHeader("etag");
                                    if (etag === null || etag === undefined) {
                                        reject(new Error("File upload error: no etag header in upload response."));
                                    } else {
                                        resolve({
                                            etag: etag
                                        });
                                    }
                                } else {
                                    reject(new Error("File upload error: status code ".concat(xhr.status)));
                                }
                            });
                            xhr.onabort = function() {
                                return reject(new Error("File upload cancelled."));
                            };
                            xhr.onerror = function() {
                                return reject(new Error("File upload error."));
                            };
                            xhr.ontimeout = function() {
                                return reject(new Error("File upload timeout."));
                            };
                            xhr.open("PUT", url);
                            xhr.send(content);
                        }));
                    }, function(_wasThrown, _result) {
                        pending = false;
                        return Upload_rethrow(_wasThrown, _result);
                    });
                });
                var uploadPart = Upload_async(function(file, part, progress, addCancellationHandler, workerIndex) {
                    var content = part.range.inclusiveEnd === -1 ? new Blob() : file.slice(part.range.inclusiveStart, part.range.inclusiveEnd + 1);
                    debug("Uploading part ".concat(part.uploadPartIndex, "."), workerIndex);
                    return _await(putUploadPart(part.uploadUrl, content, progress, addCancellationHandler), function(_ref2) {
                        var etag = _ref2.etag;
                        return _await((0, upload_api_client_upload_js_namespaceObject.completeUploadPart)(getConfig(), accountId, part.uploadId, part.uploadPartIndex, {
                            etag: etag
                        }), function(_completeUploadPart) {
                            handleApiResult(_completeUploadPart);
                            debug("Uploaded part ".concat(part.uploadPartIndex, "."), workerIndex);
                        });
                    });
                });
                var withProgressReporting = Upload_async(function(tickInterval, tick, scope) {
                    var whileReportingResolved;
                    var whileReporting = new Promise(function(resolve) {
                        whileReportingResolved = resolve;
                    });
                    var isReporting = true;
                    var stopReporting = function stopReporting() {
                        if (isReporting) {
                            whileReportingResolved();
                            clearInterval(intervalHandle);
                            isReporting = false;
                        }
                    };
                    var intervalHandle = setInterval(function() {
                        return tick(stopReporting);
                    }, tickInterval);
                    return Upload_finallyRethrows(function() {
                        return Upload_call(scope, function(result) {
                            return _await(whileReporting, function() {
                                return result;
                            });
                        });
                    }, function(_wasThrown2, _result2) {
                        stopReporting();
                        return Upload_rethrow(_wasThrown2, _result2);
                    });
                });
                var deleteAccessToken = Upload_async(function() {
                    return Upload_awaitIgnored(deleteNoResponse(accessTokenUrl, {}, true // Required, else CDN response's `Set-Cookie` header will be silently ignored.
                    ));
                });
                /**
   * Calls the given auth method on the canonical auth instance.
   */ var callAuthMethod = Upload_async(function(other, me) {
                    var authInstance = getAuthInstance();
                    return _invokeIgnored(function() {
                        if (authInstance !== self) {
                            // Forward call to global auth instance.
                            return Upload_awaitIgnored(other(authInstance));
                        } else {
                            return _callIgnored(me);
                        }
                    });
                });
                /**
   * Returns a single global instance of Upload.js for all auth calls.
   * If we require multiple instances in the future, we can provide a parameter to disable this behaviour.
   */ var getAuthInstance = function getAuthInstance() {
                    var globalKey = "uploadJsAuthInstance";
                    var globalAuthInstance = window[globalKey];
                    if (globalAuthInstance === undefined) {
                        globalAuthInstance = self;
                        window[globalKey] = self;
                    }
                    return globalAuthInstance;
                };
                var refreshAccessToken = Upload_async(function(authUrl, authHeaders, authSession) {
                    return _continueIgnored(_catch(function() {
                        return Upload_awaitIgnored(authMutex.safe(Upload_async(function() {
                            // Session may have been ended while timer was waiting.
                            if (!authSession.isActive) {
                                return;
                            }
                            return Upload_call(authHeaders, function(_authHeaders) {
                                return _await(getAccessToken(authUrl, _authHeaders), function(token) {
                                    return _await(putJsonGetJson(accessTokenUrl, {}, {
                                        accessToken: token
                                    }, true // Required, else CDN response's `Set-Cookie` header will be silently ignored.
                                    ), function(setTokenResult) {
                                        var desiredTtlSeconds = setTokenResult.ttlSeconds - refreshBeforeExpirySeconds;
                                        if (desiredTtlSeconds < minJwtTtlSeconds) {
                                            warn("JWT expiration is too short: waiting for ".concat(minJwtTtlSeconds, " seconds before refreshing."));
                                        }
                                        authSession.accessToken = setTokenResult.accessToken;
                                        authSession.accessTokenRefreshHandle = window.setTimeout(function() {
                                            refreshAccessToken(authUrl, authHeaders, authSession).then(function() {}, function(e) {
                                                return error("Permanent error when refreshing access token: ".concat(e));
                                            });
                                        }, Math.min(maxJwtTtlSeconds, Math.max(minJwtTtlSeconds, desiredTtlSeconds)) * 1000);
                                    });
                                });
                            });
                        })));
                    }, function(e) {
                        // Use 'error' instead of 'debug' so that the user sees error messages.
                        error("Error when refreshing access token: ".concat(e)); // Perform attempts as part of same promise, rather than via a 'setTimeout' so that the 'beginAuthSession' only
                        // returns once an auth session has been successfully established.
                        return _await(new Promise(function(resolve) {
                            return setTimeout(resolve, retryAuthAfterErrorSeconds * 1000);
                        }), function() {
                            // Todo: is this stack safe?
                            return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
                        });
                    }));
                });
                var putJsonGetJson = Upload_async(function(url, headers, requestBody, withCredentials) {
                    return _await(nonUploadApiRequest({
                        method: "PUT",
                        path: url,
                        headers: headers,
                        body: requestBody
                    }, withCredentials), function(_nonUploadApiRequest) {
                        return _await(handleApiResult(_nonUploadApiRequest));
                    });
                });
                var getAccessToken = Upload_async(function(authUrl, headers) {
                    var endpointName = "Your auth API endpoint";
                    return _await(nonUploadApiRequest({
                        method: "GET",
                        path: authUrl,
                        headers: headers
                    }, false), function(result) {
                        if (!result.ok) {
                            throw new Error("".concat(logPrefix).concat(endpointName, " returned a failed response. Please ensure the endpoint's status code is 200."));
                        }
                        var jwt = result.body;
                        if (typeof jwt !== "string") {
                            // We will receive 'null' if there was no content-type response header.
                            throw new Error("".concat(logPrefix).concat(endpointName, " returned an unsupported response. Please ensure: 1) 'Content-Type: text/plain' is in the HTTP response headers 2) the status code is 200."));
                        }
                        if (jwt.length === 0) {
                            throw new Error("".concat(logPrefix).concat(endpointName, " returned an empty string. Please return a valid JWT instead."));
                        }
                        if (jwt.trim().length !== jwt.length) {
                            // Whitespace can be a nightmare to spot/debug, so we fail early here.
                            throw new Error("".concat(logPrefix).concat(endpointName, " returned whitespace around the JWT, please remove it."));
                        }
                        return jwt;
                    });
                });
                var deleteNoResponse = Upload_async(function(url, headers, withCredentials) {
                    return _await(nonUploadApiRequest({
                        method: "DELETE",
                        path: url,
                        headers: headers
                    }, withCredentials), function(_nonUploadApiRequest2) {
                        handleApiResult(_nonUploadApiRequest2);
                    });
                });
                var handleApiResult = function handleApiResult(result) {
                    var _a;
                    if (result.ok) {
                        return result.body;
                    }
                    var errorResponseMaybe = result.body;
                    if (typeof ((_a = errorResponseMaybe === null || errorResponseMaybe === void 0 ? void 0 : errorResponseMaybe.error) === null || _a === void 0 ? void 0 : _a.code) === "string") {
                        throw new UploadApiError(errorResponseMaybe);
                    }
                    throw new Error("".concat(logPrefix, "Network error. If problem persists, and your network connectivity is healthy, please contact support@bytescale.com and provide: (a) time of failed request in UTC (b) screenshot of failed network response body (c) screenshot of failed network response header (d) browser + version."));
                };
                var nonUploadApiRequest = Upload_async(function(options, withCredentials) {
                    return (0, upload_api_client_upload_js_namespaceObject.request)({
                        BASE: options.path,
                        WITH_CREDENTIALS: withCredentials
                    }, Object.assign(Object.assign({}, options), {
                        path: "" // We set to "" because we're using "BASE" above instead.
                    }));
                });
                var getConfig = function getConfig() {
                    var apiConfig = {
                        BASE: apiUrl,
                        WITH_CREDENTIALS: true
                    };
                    if (authenticateWithApiKey) {
                        apiConfig.USERNAME = "apikey";
                        apiConfig.PASSWORD = config.apiKey;
                    }
                    var accessToken = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken;
                    if (headers !== undefined || accessToken !== undefined) {
                        apiConfig.HEADERS = Upload_async(function() {
                            return _await(headers === undefined ? {} : headers(), function(headersFromConfig) {
                                var accessToken = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken; // Re-fetch as there's been an async boundary so state may have changed.
                                return Object.assign(Object.assign({}, headersFromConfig), accessToken === undefined ? {} : {
                                    "authorization-token": accessToken
                                });
                            }, headers === undefined);
                        });
                    }
                    return apiConfig;
                };
                var normalizeMimeType = function normalizeMimeType(mime) {
                    var normal = mime.toLowerCase();
                    var regex = /^[a-z0-9]+\/[a-z0-9+\-._]+(?:;[^=]+=[^;]+)*$/; // Sync with 'MimeTypeUnboxed' in 'upload/api'.
                    return regex.test(normal) ? normal : undefined;
                };
                var debug = function debug(message, workerIndex) {
                    if (debugMode) {
                        console.log("".concat(logPrefix).concat(message).concat(workerIndex !== undefined ? " (Worker ".concat(workerIndex, ")") : ""));
                    }
                };
                var error = function error(message) {
                    console.error("".concat(logPrefix).concat(message));
                };
                var warn = function warn(message) {
                    console.warn("".concat(logPrefix).concat(message));
                };
                return self;
            }
            ; // CONCATENATED MODULE: ./src/index.ts
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition){
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                /******/ }
            /******/ }
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__("./src/index.ts");
/******/ }();
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/classnames/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/hooks/dist/hooks.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallback",
    ()=>T,
    "useContext",
    ()=>q,
    "useDebugValue",
    ()=>x,
    "useEffect",
    ()=>h,
    "useErrorBoundary",
    ()=>P,
    "useId",
    ()=>V,
    "useImperativeHandle",
    ()=>A,
    "useLayoutEffect",
    ()=>s,
    "useMemo",
    ()=>F,
    "useReducer",
    ()=>y,
    "useRef",
    ()=>_,
    "useState",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
;
var t, r, u, i, o = 0, f = [], c = [], e = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b, a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r, v = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed, l = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__c, m = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount;
function d(t, u) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__h && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__h(r, t, o || u), o = 0;
    var i = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
        __V: c
    }), i.__[t];
}
function p(n) {
    return o = 1, y(B, n);
}
function y(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : B(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        r.u = !0;
        var f = r.shouldComponentUpdate;
        r.shouldComponentUpdate = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !f || f.call(this, n, t, r);
            var i = !1;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
        };
    }
    return o.__N || o.__;
}
function h(u, i) {
    var o = d(t++, 3);
    !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
    var o = d(t++, 4);
    !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
    return o = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t, r) {
    o = 6, s(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function F(n, r) {
    var u = d(t++, 7);
    return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
    return o = 8, F(function() {
        return n;
    }, t);
}
function q(n) {
    var u = r.context[n.__c], i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].useDebugValue && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
    var u = d(t++, 10), i = p();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function V() {
    var n = d(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function b() {
    for(var t; t = f.shift();)if (t.__P && t.__H) try {
        t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
    } catch (r) {
        t.__H.__h = [], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__e(r, t.__v);
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b = function(n) {
    r = null, e && e(n);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed = function(t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].requestAnimationFrame || ((i = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__c = function(t, r) {
    r.some(function(t) {
        try {
            t.__h.forEach(k), t.__h = t.__h.filter(function(n) {
                return !n.__ || w(n);
            });
        } catch (u) {
            r.some(function(n) {
                n.__h && (n.__h = []);
            }), r = [], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__e(u, t.__v);
        }
    }), l && l(t, r);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount = function(t) {
    m && m(t);
    var r, u = t.__c;
    u && u.__H && (u.__H.__.forEach(function(n) {
        try {
            k(n);
        } catch (n) {
            r = n;
        }
    }), u.__H = void 0, r && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t, r = function() {
        clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    g && (t = requestAnimationFrame(r));
}
function k(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function z(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function B(n, t) {
    return "function" == typeof t ? t(n) : t;
}
;
 //# sourceMappingURL=hooks.module.js.map
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/compat/dist/compat.module.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Children",
    ()=>O,
    "PureComponent",
    ()=>w,
    "StrictMode",
    ()=>vn,
    "Suspense",
    ()=>D,
    "SuspenseList",
    ()=>V,
    "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>rn,
    "cloneElement",
    ()=>cn,
    "createFactory",
    ()=>on,
    "createPortal",
    ()=>j,
    "default",
    ()=>bn,
    "findDOMNode",
    ()=>an,
    "flushSync",
    ()=>hn,
    "forwardRef",
    ()=>k,
    "hydrate",
    ()=>q,
    "isValidElement",
    ()=>ln,
    "lazy",
    ()=>M,
    "memo",
    ()=>R,
    "render",
    ()=>Y,
    "startTransition",
    ()=>dn,
    "unmountComponentAtNode",
    ()=>fn,
    "unstable_batchedUpdates",
    ()=>sn,
    "useDeferredValue",
    ()=>pn,
    "useInsertionEffect",
    ()=>yn,
    "useSyncExternalStore",
    ()=>_n,
    "useTransition",
    ()=>mn,
    "version",
    ()=>un
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/hooks/dist/hooks.module.js [app-client] (ecmascript)");
;
;
;
;
function g(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function C(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function E(n, t) {
    return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
    this.props = n;
}
function R(n, e) {
    function r(n) {
        var t = this.props.ref, r = t == n.ref;
        return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
        return this.shouldComponentUpdate = r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function(n, t) {
    return C(this.props, n) || C(this.state, t);
};
var x = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
    function t(t) {
        var e = g({}, t);
        return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var A = function(n, t) {
    return null == n ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(n).map(t));
}, O = {
    map: A,
    forEach: A,
    count: function(n) {
        return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(n).length : 0;
    },
    only: function(n) {
        var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"]
}, T = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__e;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__e = function(n, t, e, r) {
    if (n.then) {
        for(var u, o = t; o = o.__;)if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
    T(n, t, e, r);
};
var I = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount;
function L(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
        "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
        return L(n, t, e);
    })), n;
}
function U(n, t, e) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
        return U(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
    this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
}
function M(n) {
    var e, r, u;
    function o(o) {
        if (e || (e = n()).then(function(n) {
            r = n.default || n;
        }, function(n) {
            u = n;
        }), u) throw u;
        if (!r) throw e;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(r, o);
    }
    return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
    this.u = null, this.o = null;
}
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]).__c = function(n, t) {
    var e = t.__c, r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = F(r.__v), o = !1, i = function() {
        o || (o = !0, e.__R = null, u ? u(l) : l());
    };
    e.__R = i;
    var l = function() {
        if (!--r.__u) {
            if (r.state.__a) {
                var n = r.state.__a;
                r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
            }
            var t;
            for(r.setState({
                __a: r.__b = null
            }); t = r.t.pop();)t.forceUpdate();
        }
    }, c = !0 === t.__h;
    r.__u++ || c || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
}, D.prototype.componentWillUnmount = function() {
    this.t = [];
}, D.prototype.render = function(n, e) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"), o = this.__v.__k[0].__c;
            this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
        }
        this.__b = null;
    }
    var i = e.__a && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, n.fallback);
    return i && (i.__h = null), [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.__a ? null : n.children),
        i
    ];
};
var W = function(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for(e = n.u; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};
function P(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function $(n) {
    var e = this, r = n.i;
    e.componentWillUnmount = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(null, e.l), e.l = null, e.i = null;
    }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), e.i.appendChild(n);
        },
        insertBefore: function(n, t) {
            this.childNodes.push(n), e.i.appendChild(n);
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(P, {
        context: e.context
    }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function j(n, e) {
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])($, {
        __v: n,
        i: e
    });
    return r.containerInfo = e, r;
}
(V.prototype = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]).__a = function(n) {
    var t = this, e = F(t.__v), r = t.o.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, V.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.o.set(t[e], this.u = [
        1,
        0,
        this.u
    ]);
    return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(t, e) {
        W(n, e, t);
    });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, H = "undefined" != typeof document, Z = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};
function Y(n, t, e) {
    return null == t.__k && (t.textContent = ""), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function q(n, t, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"].prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(t) {
    Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"].prototype, t, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + t];
        },
        set: function(n) {
            Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: n
            });
        }
    });
});
var G = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].event;
function J() {}
function K() {
    return this.cancelBubble;
}
function Q() {
    return this.defaultPrevented;
}
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].event = function(n) {
    return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
};
var X, nn = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, tn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].vnode;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].vnode = function(n) {
    var t = n.type, e = n.props, u = e;
    if ("string" == typeof t) {
        var o = -1 === t.indexOf("-");
        for(var i in u = {}, e){
            var l = e[i];
            H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
        }
        "select" == t && u.multiple && Array.isArray(u.value) && (u.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(e.children).forEach(function(n) {
            n.props.selected = -1 != u.value.indexOf(n.props.value);
        })), "select" == t && null != u.defaultValue && (u.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChildArray"])(e.children).forEach(function(n) {
            n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
        })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
    }
    n.$$typeof = z, tn && tn(n);
};
var en = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r = function(n) {
    en && en(n), X = n.__c;
};
var rn = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return X.__n[n.__c].props.value;
            }
        }
    }
}, un = "17.0.2";
function on(n) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"].bind(null, n);
}
function ln(n) {
    return !!n && n.$$typeof === z;
}
function cn(n) {
    return ln(n) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"].apply(null, arguments) : n;
}
function fn(n) {
    return !!n.__k && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(null, n), !0);
}
function an(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var sn = function(n, t) {
    return n(t);
}, hn = function(n, t) {
    return n(t);
}, vn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function dn(n) {
    n();
}
function pn(n) {
    return n;
}
function mn() {
    return [
        !1,
        dn
    ];
}
var yn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function _n(n, t) {
    var e = t(), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        h: {
            __: e,
            v: t
        }
    }), u = r[0].h, o = r[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(function() {
        u.__ = e, u.v = t, E(u.__, t()) || o({
            h: u
        });
    }, [
        n,
        e,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return E(u.__, u.v()) || o({
            h: u
        }), n(function() {
            E(u.__, u.v()) || o({
                h: u
            });
        });
    }, [
        n
    ]), e;
}
var bn = {
    useState: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
    useId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
    useReducer: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"],
    useEffect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"],
    useLayoutEffect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"],
    useInsertionEffect: yn,
    useTransition: mn,
    useDeferredValue: pn,
    useSyncExternalStore: _n,
    startTransition: dn,
    useRef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
    useImperativeHandle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"],
    useMemo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"],
    useCallback: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"],
    useContext: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"],
    useDebugValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"],
    version: "17.0.2",
    Children: O,
    render: Y,
    hydrate: q,
    unmountComponentAtNode: fn,
    createPortal: j,
    createElement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"],
    createContext: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"],
    createFactory: on,
    cloneElement: cn,
    createRef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"],
    Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    isValidElement: ln,
    findDOMNode: an,
    Component: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"],
    PureComponent: w,
    memo: R,
    forwardRef: k,
    flushSync: hn,
    unstable_batchedUpdates: sn,
    StrictMode: vn,
    Suspense: D,
    SuspenseList: V,
    lazy: M,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn
};
;
 //# sourceMappingURL=compat.module.js.map
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/preact/compat/dist/compat.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Children",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Children"],
    "Component",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    "PureComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PureComponent"],
    "StrictMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StrictMode"],
    "Suspense",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Suspense"],
    "SuspenseList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SuspenseList"],
    "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"],
    "cloneElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cloneElement"],
    "createContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"],
    "createFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createFactory"],
    "createPortal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPortal"],
    "createRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "findDOMNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["findDOMNode"],
    "flushSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushSync"],
    "forwardRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["forwardRef"],
    "hydrate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hydrate"],
    "isValidElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidElement"],
    "lazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazy"],
    "memo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["memo"],
    "render",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["render"],
    "startTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["startTransition"],
    "unmountComponentAtNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unmountComponentAtNode"],
    "unstable_batchedUpdates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unstable_batchedUpdates"],
    "useCallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"],
    "useContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"],
    "useDebugValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"],
    "useDeferredValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDeferredValue"],
    "useEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"],
    "useErrorBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useErrorBoundary"],
    "useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
    "useImperativeHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"],
    "useInsertionEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInsertionEffect"],
    "useLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"],
    "useMemo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"],
    "useReducer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"],
    "useRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
    "useState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
    "useSyncExternalStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSyncExternalStore"],
    "useTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTransition"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$compat$2f$dist$2f$compat$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/compat/dist/compat.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/preact/hooks/dist/hooks.module.js [app-client] (ecmascript)");
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/uploader/dist/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/******/ (function() {
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js": function(module1) {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
                var result = -1;
                for(var i = 0; i < stylesInDOM.length; i++){
                    if (stylesInDOM[i].identifier === identifier) {
                        result = i;
                        break;
                    }
                }
                return result;
            }
            function modulesToDom(list, options) {
                var idCountMap = {};
                var identifiers = [];
                for(var i = 0; i < list.length; i++){
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var count = idCountMap[id] || 0;
                    var identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var indexByIdentifier = getIndexByIdentifier(identifier);
                    var obj = {
                        css: item[1],
                        media: item[2],
                        sourceMap: item[3],
                        supports: item[4],
                        layer: item[5]
                    };
                    if (indexByIdentifier !== -1) {
                        stylesInDOM[indexByIdentifier].references++;
                        stylesInDOM[indexByIdentifier].updater(obj);
                    } else {
                        var updater = addElementStyle(obj, options);
                        options.byIndex = i;
                        stylesInDOM.splice(i, 0, {
                            identifier: identifier,
                            updater: updater,
                            references: 1
                        });
                    }
                    identifiers.push(identifier);
                }
                return identifiers;
            }
            function addElementStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);
                var updater = function updater(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                            return;
                        }
                        api.update(obj = newObj);
                    } else {
                        api.remove();
                    }
                };
                return updater;
            }
            module1.exports = function(list, options) {
                options = options || {};
                list = list || [];
                var lastIdentifiers = modulesToDom(list, options);
                return function update(newList) {
                    newList = newList || [];
                    for(var i = 0; i < lastIdentifiers.length; i++){
                        var identifier = lastIdentifiers[i];
                        var index = getIndexByIdentifier(identifier);
                        stylesInDOM[index].references--;
                    }
                    var newLastIdentifiers = modulesToDom(newList, options);
                    for(var _i = 0; _i < lastIdentifiers.length; _i++){
                        var _identifier = lastIdentifiers[_i];
                        var _index = getIndexByIdentifier(_identifier);
                        if (stylesInDOM[_index].references === 0) {
                            stylesInDOM[_index].updater();
                            stylesInDOM.splice(_index, 1);
                        }
                    }
                    lastIdentifiers = newLastIdentifiers;
                };
            };
        /***/ },
        /***/ "./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js": function(module1) {
            /* istanbul ignore next  */ function insertStyleElement(options) {
                if (typeof document === "undefined") {
                    return undefined;
                }
                var element = document.createElement("style");
                options.setAttributes(element, options.attributes);
                options.insert(element, options.options);
                return element;
            }
            module1.exports = insertStyleElement;
        /***/ },
        /***/ "./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js": function(module1, __unused_webpack_exports, __webpack_require__) {
            /* istanbul ignore next  */ function setAttributesWithoutAttributes(styleElement) {
                var nonce = ("TURBOPACK compile-time truthy", 1) ? __webpack_require__.nc : "TURBOPACK unreachable";
                if (nonce) {
                    styleElement.setAttribute("nonce", nonce);
                }
            }
            module1.exports = setAttributesWithoutAttributes;
        /***/ },
        /***/ "./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js": function(module1) {
            /* istanbul ignore next  */ function apply(styleElement, options, obj) {
                var css = "";
                if (obj.supports) {
                    css += "@supports (".concat(obj.supports, ") {");
                }
                if (obj.media) {
                    css += "@media ".concat(obj.media, " {");
                }
                var needLayer = typeof obj.layer !== "undefined";
                if (needLayer) {
                    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
                }
                css += obj.css;
                if (needLayer) {
                    css += "}";
                }
                if (obj.media) {
                    css += "}";
                }
                if (obj.supports) {
                    css += "}";
                } // const sourceMap = obj.sourceMap;
                //
                // if (sourceMap && typeof btoa !== "undefined") {
                //   // This line appears to cause an internal server error from Vercel during builds (at least for the Shopify Vercel
                //   // template, which deploys to Vercel Edge functions), so we simply disable source maps to allow projects that
                //   // use "uploader" to build successfully.
                //   css += '\n/*# sourceMappingURL=data:application/json;base64,';
                //
                //   css += btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                //   css += ' */';
                // }
                // For old IE
                /* istanbul ignore if  */ options.styleTagTransform(css, styleElement, options.options);
            }
            function removeStyleElement(styleElement) {
                // istanbul ignore if
                if (styleElement.parentNode === null) {
                    return false;
                }
                styleElement.parentNode.removeChild(styleElement);
            }
            /* istanbul ignore next  */ function domAPI(options) {
                var styleElement = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        apply(styleElement, options, obj);
                    },
                    remove: function remove() {
                        removeStyleElement(styleElement);
                    }
                };
            }
            module1.exports = domAPI;
        /***/ },
        /***/ "./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js": function(module1) {
            /* istanbul ignore next  */ function styleTagTransform(css, styleElement) {
                if (styleElement === undefined) {
                    return;
                }
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                } else {
                    while(styleElement.firstChild){
                        styleElement.removeChild(styleElement.firstChild);
                    }
                    styleElement.appendChild(document.createTextNode(css));
                }
            }
            module1.exports = styleTagTransform;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__body{overflow:hidden}.uploader--with-modal{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999}.uploader__modal{background:var(--shade-900);border-radius:.5em;z-index:100000;position:relative;overflow:auto;top:-5%;height:60%;width:75%;max-width:65.625em;max-height:41.25em}@media (max-height: 700px){.uploader__modal{top:-1%;height:80%}}@media (max-width: 750px), (max-height: 420px){.uploader__modal{top:0;height:100%;width:100%;max-width:none;max-height:none;border-radius:0}}.uploader__modal__close{position:absolute;right:0;top:0;z-index:2}.uploader__modal__close a{-webkit-transition:0.1s color linear;-o-transition:0.1s color linear;-moz-transition:0.1s color linear;transition:0.1s color linear;color:var(--shade-500);padding:1.125em 1.0625em .8125em .875em;display:inline-block}.uploader__backdrop{content:\" \";background:rgba(0,0,0,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999}.uploader__modal,.uploader__backdrop{opacity:0;-webkit-transition:0.15s opacity linear;-o-transition:0.15s opacity linear;-moz-transition:0.15s opacity linear;transition:0.15s opacity linear}.uploader__modal.show,.uploader__backdrop.show{opacity:1}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader{--btn-text-color: var(--shade-200);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-box-sizing:border-box;box-sizing:border-box;color:var(--shade-100);font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:1;text-align:left;position:static}.uploader__root{position:absolute;left:0;right:0;top:0;bottom:0}.uploader a,.uploader p,.uploader button{font-size:inherit;margin:0}.uploader a{border-bottom:none;padding:0}.uploader svg{margin-bottom:0}.uploader__controls{text-align:center;padding:.9375em}.uploader__controls--space button:not(:last-child){margin-right:0.5em}.uploader a{color:var(--primary-color)}.uploader a,.uploader a:hover,.uploader a:active,.uploader a:focus{text-decoration:underline}.uploader a:hover:not(:disabled):not(.disabled){color:var(--primary-active-color)}.uploader .btn{-webkit-transition:0.1s border-color linear, 0.1s background-color linear;-o-transition:0.1s border-color linear, 0.1s background-color linear;-moz-transition:0.1s border-color linear, 0.1s background-color linear;transition:0.1s border-color linear, 0.1s background-color linear;display:inline-block;font-weight:400;color:var(--btn-text-color);text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:.0625em solid rgba(0,0,0,0);padding:0 1em;line-height:3;border-radius:0.3125em}.uploader .btn,.uploader .btn:hover,.uploader .btn:active,.uploader .btn:focus{text-decoration:none}.uploader .btn:not(:disabled):not(.disabled){cursor:pointer}.uploader .btn:hover:not(:disabled):not(.disabled){color:var(--shade-300)}.uploader .btn--primary{color:var(--shade-900);background-color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn--primary:hover:not(:disabled):not(.disabled){background-color:var(--primary-active-color);border-color:var(--primary-active-color);color:var(--shade-900)}.uploader .btn--primary-outline{color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn.disabled{opacity:0.5;cursor:default}.uploader .btn--file{position:relative;overflow:hidden;margin-bottom:0}.uploader .btn--file__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.uploader .btn--upload{font-size:1.11em;padding:0.2em 1.6em;margin-bottom:1.5em}.uploader .text-secondary{color:var(--shade-400)}.uploader .vcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader .hcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader .nudge-up-1{position:relative;top:-1px}.uploader .ml-0{margin-left:0}.uploader .ml-1{margin-left:.3125em}.uploader .ml-2{margin-left:.4375em}.uploader .ml-3{margin-left:.5em}.uploader .ml-4{margin-left:.625em}.uploader .mr-0{margin-right:0}.uploader .mr-1{margin-right:.3125em}.uploader .mr-2{margin-right:.4375em}.uploader .mr-3{margin-right:.5em}.uploader .mr-4{margin-right:.625em}.uploader .mb-0{margin-bottom:0}.uploader .mb-1{margin-bottom:.3125em}.uploader .mb-2{margin-bottom:.4375em}.uploader .mb-3{margin-bottom:.5em}.uploader .mb-4{margin-bottom:.625em}.uploader .mt-0{margin-top:0}.uploader .mt-1{margin-top:.3125em}.uploader .mt-2{margin-top:.4375em}.uploader .mt-3{margin-top:.5em}.uploader .mt-4{margin-top:.625em}.uploader .mt-5{margin-top:1.25em}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__image-cropper__overlay{position:absolute;background:rgba(255,255,255,0.5)}.uploader__image-cropper__clip{overflow:hidden}.uploader__image-cropper__clip img{max-width:unset}.uploader__image-cropper__clip:before{content:\" \";display:block;background:rgba(255,255,255,0.15);position:absolute;left:-2px;right:-2px;top:-2px;bottom:-2px}.uploader__image-cropper__clip--circular,.uploader__image-cropper__clip--circular:before{border-radius:100%}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__image-editor{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__image-editor img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.uploader__image-editor__header{padding:0.825em 0.8em 0.75em 0.8em}.uploader__image-editor__header--empty-non-modal{min-height:.9375em}.uploader__image-editor__image{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.uploader__image-editor__image-padding{position:absolute;top:0;bottom:0;left:.9375em;right:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader__image-editor__image-inner{max-width:100%;max-height:100%}.uploader__modal .uploader__image-editor__header{padding-top:0;padding-bottom:1.3em;margin-top:-1em}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                "@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.spinner{display:block !important;border:0.275em solid var(--shade-700);border-right-color:transparent;border-radius:50%;-webkit-animation:spinner 0.75s linear infinite;-moz-animation:spinner 0.75s linear infinite;animation:spinner 0.75s linear infinite}.spinner__container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__resizable-square{position:absolute;cursor:move}.uploader__resizable-square__nw,.uploader__resizable-square__ne,.uploader__resizable-square__sw,.uploader__resizable-square__se{width:1em;height:1em;opacity:0.75;background-color:var(--shade-900);border:.0625em solid var(--primary-color);border-radius:100%;position:absolute;display:block !important}.uploader__resizable-square__nw{top:-.5em;left:-.5em;cursor:nw-resize}.uploader__resizable-square__ne{top:-.5em;right:-.5em;cursor:ne-resize}.uploader__resizable-square__sw{bottom:-.5em;left:-.5em;cursor:sw-resize}.uploader__resizable-square__se{bottom:-.5em;right:-.5em;cursor:se-resize}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".progress-icon{display:block}.progress-icon__container{display:inline-block;position:relative}.progress-icon__circle{-webkit-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-o-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-moz-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;stroke:var(--primary-color)}.progress-icon__circle__bg{-webkit-transition:.3s opacity linear;-o-transition:.3s opacity linear;-moz-transition:.3s opacity linear;transition:.3s opacity linear;fill:var(--shade-700)}.progress-icon__circle--error{stroke:var(--error-color)}.progress-icon__thumbnail{-webkit-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-o-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-moz-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-webkit-transition-delay:.3s;-moz-transition-delay:.3s;-o-transition-delay:.3s;transition-delay:.3s;background-repeat:no-repeat;background-position:center center;background-size:contain;opacity:1;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:scale(1, 1);-moz-transform:scale(1, 1);-ms-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1)}.progress-icon__thumbnail--hidden{opacity:0;-webkit-transform:scale(0.1, 0.1);-moz-transform:scale(0.1, 0.1);-ms-transform:scale(0.1, 0.1);-o-transform:scale(0.1, 0.1);transform:scale(0.1, 0.1)}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".breakpoint-md .uploader__submitted-file{max-width:100%;width:100%}.breakpoint-lg .uploader__submitted-file{max-width:50%;width:50%}.breakpoint-xl .uploader__submitted-file{max-width:33.333333%;width:33.333333%}.breakpoint-xl .uploader__submitted-file--loners{max-width:46%;width:46%}.uploader__submitted-file{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:.3125em 0}.uploader__submitted-file__container{margin:0 .3125em;background:var(--shade-800);border-radius:.4375em}.uploader__submitted-file__inner{padding:1.3125em 1.4375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.uploader__submitted-file__text{margin-left:.4375em;margin-right:.5em;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.uploader__submitted-file__action{min-width:4.625em;text-align:right;display:inline-block}.uploader__submitted-file__action--performed{color:var(--shade-300)}.uploader__submitted-file__message{font-size:0.75em;margin-top:0.2em;display:block;line-height:1.1em}.uploader__submitted-file__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;height:1.1em}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__main-screen{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__main-screen__file-list{margin:auto 0;overflow-y:auto;width:100%}.uploader__main-screen__file-list__inner{padding:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader__main-screen__info{color:var(--btn-text-color);text-align:center;padding:1.15em 0}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss": function(module1, __webpack_exports__, __webpack_require__) {
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
                return i[1];
            });
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module1.id,
                ".uploader__widget-base{border-radius:.3125em;position:absolute;top:.9375em;left:.9375em;right:.9375em;bottom:.9375em;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.uploader__widget-base__modal-bg{color:var(--shade-600);position:absolute;z-index:1}.uploader__widget-base__modal-bg--dragging{color:var(--primary-color)}.uploader__widget-base__modal-bg--dragging *{pointer-events:none}.uploader__widget-base__children{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:2;position:absolute;bottom:0;top:0;left:0;right:0}.uploader__widget-base__children--is-modal{top:2.5em}.uploader__widget-base--draggable{border:.125em dashed var(--shade-600)}.uploader__widget-base--dragging{border-color:var(--primary-color)}.uploader__widget-base--dragging *{pointer-events:none}\n",
                ""
            ]);
            // Exports
            /* harmony default export */ __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/runtime/api.js": function(module1) {
            /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
            // eslint-disable-next-line func-names
            module1.exports = function(cssWithMappingToString) {
                var list = []; // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function(item) {
                        var content = cssWithMappingToString(item);
                        if (item[2]) {
                            return "@media ".concat(item[2], " {").concat(content, "}");
                        }
                        return content;
                    }).join('');
                }; // import a list of modules into the list
                // eslint-disable-next-line func-names
                list.i = function(modules, mediaQuery, dedupe) {
                    if (typeof modules === 'string') {
                        // eslint-disable-next-line no-param-reassign
                        modules = [
                            [
                                null,
                                modules,
                                ''
                            ]
                        ];
                    }
                    var alreadyImportedModules = {};
                    if (dedupe) {
                        for(var i = 0; i < this.length; i++){
                            // eslint-disable-next-line prefer-destructuring
                            var id = this[i][0];
                            if (id != null) {
                                alreadyImportedModules[id] = true;
                            }
                        }
                    }
                    for(var _i = 0; _i < modules.length; _i++){
                        var item = [].concat(modules[_i]);
                        if (dedupe && alreadyImportedModules[item[0]]) {
                            continue;
                        }
                        if (mediaQuery) {
                            if (!item[2]) {
                                item[2] = mediaQuery;
                            } else {
                                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                            }
                        }
                        list.push(item);
                    }
                };
                return list;
            };
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = __webpack_module_cache__[moduleId] = {
            /******/ id: moduleId,
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function() {
                return module1['default'];
            } : /******/ function() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, {
                a: getter
            });
            /******/ return getter;
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition){
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                /******/ }
            /******/ }
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    !function() {
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);
        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
            "UploadWidgetResult": function() {
                return /* reexport */ UploadWidgetResult;
            },
            "Uploader": function() {
                return /* reexport */ Uploader;
            },
            "UploaderLocaleEnUs": function() {
                return /* reexport */ UploaderLocaleEnUs;
            }
        });
        ; // CONCATENATED MODULE: external "preact/jsx-runtime"
        var jsx_runtime_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-client] (ecmascript)");
        ;
        ; // CONCATENATED MODULE: external "upload-js"
        var external_upload_js_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/upload-js/dist/main.js [app-client] (ecmascript)");
        ;
        ; // CONCATENATED MODULE: ./src/modules/locales/EN_US.ts
        var UploaderLocaleEnUs = {
            "error!": "Error!",
            "done": "Done",
            "addAnotherFile": "Add another file...",
            "addAnotherImage": "Add another image...",
            "cancel": "cancel",
            "cancelInPreviewWindow": "Cancel",
            "cancelled!": "cancelled",
            "continue": "Continue",
            "customValidationFailed": "Failed to validate file.",
            "crop": "Crop",
            "finish": "Finished",
            "finishIcon": true,
            "image": "Image",
            "maxFilesReached": "Maximum number of files:",
            "maxImagesReached": "Maximum number of images:",
            "maxSize": "File size limit:",
            "next": "Next",
            "of": "of",
            "orDragDropFile": "...or drag and drop a file.",
            "orDragDropFiles": "...or drag and drop files.",
            "orDragDropImage": "...or drag and drop an image.",
            "orDragDropImages": "...or drag and drop images.",
            "pleaseWait": "Please wait...",
            "removed!": "removed",
            "remove": "remove",
            "skip": "Skip",
            "unsupportedFileType": "File type not supported.",
            "uploadFile": "Upload a File",
            "uploadFiles": "Upload a File",
            "uploadImage": "Upload an Image",
            "uploadImages": "Upload an Image",
            "processingFile": "Processing file..."
        };
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetEditor.ts
        var UploadWidgetEditorRequired;
        (function(UploadWidgetEditorRequired) {
            function from(options) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                var cropShape = (_b = (_a = options === null || options === void 0 ? void 0 : options.images) === null || _a === void 0 ? void 0 : _a.cropShape) !== null && _b !== void 0 ? _b : "rect";
                var crop = (_d = (_c = options === null || options === void 0 ? void 0 : options.images) === null || _c === void 0 ? void 0 : _c.crop) !== null && _d !== void 0 ? _d : true;
                return {
                    images: {
                        crop: crop,
                        cropFilePath: (_f = (_e = options === null || options === void 0 ? void 0 : options.images) === null || _e === void 0 ? void 0 : _e.cropFilePath) !== null && _f !== void 0 ? _f : function(originalImage) {
                            return "".concat(originalImage.filePath, ".crop");
                        },
                        cropRatio: cropShape === "circ" ? 1 : (_g = options === null || options === void 0 ? void 0 : options.images) === null || _g === void 0 ? void 0 : _g.cropRatio,
                        cropShape: cropShape,
                        // Prevents introducing a new step for existing users where previously they didn't expect any interruption, but
                        // shows previews for new file types (PDFs) to users who are already expecting interruption for image uploads.
                        // "If at least one editor option is enabled, then previews are enabled by default".
                        preview: (_j = (_h = options === null || options === void 0 ? void 0 : options.images) === null || _h === void 0 ? void 0 : _h.preview) !== null && _j !== void 0 ? _j : crop
                    }
                };
            }
            UploadWidgetEditorRequired.from = from;
        })(UploadWidgetEditorRequired || (UploadWidgetEditorRequired = {}));
        ; // CONCATENATED MODULE: ./src/modules/ColorUtils.ts
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        // Original: https://stackoverflow.com/a/54070620/592768
        // License: https://creativecommons.org/licenses/by-sa/4.0/legalcode
        function rgb2hsv(r, g, b) {
            var v = Math.max(r, g, b);
            var c = v - Math.min(r, g, b); // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            var h = c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c); // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return [
                60 * (h < 0 ? h + 6 : h),
                v && c / v,
                v
            ];
        } // Original: https://stackoverflow.com/a/54024653/592768
        // License: https://creativecommons.org/licenses/by-sa/4.0/legalcode
        function hsv2rgb(h, s, v) {
            var f = function f(n) {
                var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
                return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
            };
            return [
                f(5),
                f(3),
                f(1)
            ];
        } // Original: https://stackoverflow.com/a/5624139/592768
        // License: https://creativecommons.org/licenses/by-sa/4.0/legalcode
        function hexToRgb(hex) {
            // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function(_, r, g, b) {
                return "".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
            });
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (result === null) {
                throw new Error("Invalid color code: ".concat(hex));
            }
            return [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ];
        }
        function highlightColor(hex, amount) {
            var _hexToRgb = hexToRgb(hex), _hexToRgb2 = _slicedToArray(_hexToRgb, 3), r = _hexToRgb2[0], g = _hexToRgb2[1], b = _hexToRgb2[2];
            var _rgb2hsv = rgb2hsv(r, g, b), _rgb2hsv2 = _slicedToArray(_rgb2hsv, 3), h = _rgb2hsv2[0], s = _rgb2hsv2[1], v = _rgb2hsv2[2];
            var clipToFactor = function clipToFactor(x) {
                return Math.min(1, Math.max(0, x));
            };
            var _hsv2rgb$map = hsv2rgb(h, clipToFactor(s + amount * -1), clipToFactor(v / 255 + amount) * 255).map(Math.round), _hsv2rgb$map2 = _slicedToArray(_hsv2rgb$map, 3), rNew = _hsv2rgb$map2[0], gNew = _hsv2rgb$map2[1], bNew = _hsv2rgb$map2[2];
            return "rgb(".concat(rNew, ", ").concat(gNew, ", ").concat(bNew, ")");
        }
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetColors.ts
        var UploaderColorOptionsRequired;
        (function(UploaderColorOptionsRequired) {
            function from(options) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                var primaryDefault = "#377dff";
                var activeDefault = "#528fff";
                var primary = (_a = options === null || options === void 0 ? void 0 : options.primary) !== null && _a !== void 0 ? _a : primaryDefault;
                var active;
                try {
                    active = highlightColor(primary, 0.1);
                } catch (e) {
                    console.error("Invalid hex code '".concat(primary, "', using default colours."));
                    primary = primaryDefault;
                    active = activeDefault;
                }
                return {
                    primary: primary,
                    active: (_b = options === null || options === void 0 ? void 0 : options.active) !== null && _b !== void 0 ? _b : active,
                    error: (_c = options === null || options === void 0 ? void 0 : options.error) !== null && _c !== void 0 ? _c : "#d23f4d",
                    shade100: (_d = options === null || options === void 0 ? void 0 : options.shade100) !== null && _d !== void 0 ? _d : "#333",
                    shade200: (_e = options === null || options === void 0 ? void 0 : options.shade200) !== null && _e !== void 0 ? _e : "#7a7a7a",
                    shade300: (_f = options === null || options === void 0 ? void 0 : options.shade300) !== null && _f !== void 0 ? _f : "#999",
                    shade400: (_g = options === null || options === void 0 ? void 0 : options.shade400) !== null && _g !== void 0 ? _g : "#a5a6a8",
                    shade500: (_h = options === null || options === void 0 ? void 0 : options.shade500) !== null && _h !== void 0 ? _h : "#d3d3d3",
                    shade600: (_j = options === null || options === void 0 ? void 0 : options.shade600) !== null && _j !== void 0 ? _j : "#dddddd",
                    shade700: (_k = options === null || options === void 0 ? void 0 : options.shade700) !== null && _k !== void 0 ? _k : "#f0f0f0",
                    shade800: (_l = options === null || options === void 0 ? void 0 : options.shade800) !== null && _l !== void 0 ? _l : "#f8f8f8",
                    shade900: (_m = options === null || options === void 0 ? void 0 : options.shade900) !== null && _m !== void 0 ? _m : "#fff" // 900 DONE
                };
            }
            UploaderColorOptionsRequired.from = from;
        })(UploaderColorOptionsRequired || (UploaderColorOptionsRequired = {}));
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetFontSize.ts
        var UploadWidgetFontSizeRequired;
        (function(UploadWidgetFontSizeRequired) {
            function from(options) {
                var _a;
                return {
                    base: (_a = options === null || options === void 0 ? void 0 : options.base) !== null && _a !== void 0 ? _a : 16
                };
            }
            UploadWidgetFontSizeRequired.from = from;
        })(UploadWidgetFontSizeRequired || (UploadWidgetFontSizeRequired = {}));
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetFontFamily.ts
        var UploadWidgetFontFamilyRequired;
        (function(UploadWidgetFontFamilyRequired) {
            function from(options) {
                var _a;
                return {
                    base: (_a = options === null || options === void 0 ? void 0 : options.base) !== null && _a !== void 0 ? _a : "-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
                };
            }
            UploadWidgetFontFamilyRequired.from = from;
        })(UploadWidgetFontFamilyRequired || (UploadWidgetFontFamilyRequired = {}));
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetStyles.ts
        var UploadWidgetStylesRequired;
        (function(UploadWidgetStylesRequired) {
            function from(options) {
                return {
                    colors: UploaderColorOptionsRequired.from(options === null || options === void 0 ? void 0 : options.colors),
                    fontFamilies: UploadWidgetFontFamilyRequired.from(options === null || options === void 0 ? void 0 : options.fontFamilies),
                    fontSizes: UploadWidgetFontSizeRequired.from(options === null || options === void 0 ? void 0 : options.fontSizes)
                };
            }
            UploadWidgetStylesRequired.from = from;
        })(UploadWidgetStylesRequired || (UploadWidgetStylesRequired = {}));
        ; // CONCATENATED MODULE: ./src/config/UploadWidgetConfig.ts
        function _await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function _async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        var UploadWidgetConfigRequired;
        (function(UploadWidgetConfigRequired) {
            function from(options) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                var layout = (_a = options.layout) !== null && _a !== void 0 ? _a : "modal";
                var multi = (_b = options.multi) !== null && _b !== void 0 ? _b : options.maxFileCount !== undefined && options.maxFileCount > 1;
                return {
                    container: options.container,
                    editor: UploadWidgetEditorRequired.from(options.editor),
                    layout: layout,
                    locale: Object.assign(Object.assign({}, UploaderLocaleEnUs), options.locale),
                    maxFileCount: options.maxFileCount,
                    maxFileSizeBytes: options.maxFileSizeBytes,
                    metadata: options.metadata,
                    mimeTypes: (_c = options.mimeTypes) === null || _c === void 0 ? void 0 : _c.map(function(x) {
                        return x.trim().toLowerCase();
                    }),
                    multi: multi,
                    onInit: (_d = options.onInit) !== null && _d !== void 0 ? _d : function() {},
                    onUpdate: (_e = options.onUpdate) !== null && _e !== void 0 ? _e : function() {},
                    onPreUpload: _async(function(file) {
                        var onValidate = options.onValidate, onPreUpload = options.onPreUpload;
                        return _await(onValidate === undefined ? {} : onValidate(file), function(_onValidate) {
                            var _Object$assign = Object.assign({}, onValidate === undefined ? _onValidate : {
                                errorMessage: _onValidate
                            });
                            return _await(onPreUpload === undefined ? {} : onPreUpload(file), function(_onPreUpload) {
                                return Object.assign(_Object$assign, _onPreUpload);
                            }, onPreUpload === undefined);
                        }, onValidate === undefined);
                    }),
                    path: options.path,
                    showFinishButton: (_f = options.showFinishButton) !== null && _f !== void 0 ? _f : multi ? layout === "modal" : false,
                    showRemoveButton: (_g = options.showRemoveButton) !== null && _g !== void 0 ? _g : true,
                    styles: UploadWidgetStylesRequired.from(options.styles),
                    tags: (_h = options.tags) !== null && _h !== void 0 ? _h : []
                };
            }
            UploadWidgetConfigRequired.from = from;
        })(UploadWidgetConfigRequired || (UploadWidgetConfigRequired = {}));
        ; // CONCATENATED MODULE: external "preact"
        var external_preact_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
        ;
        ; // CONCATENATED MODULE: ./src/UploadInstanceMaybe.ts
        var UploadInstanceMaybe;
        (function(UploadInstanceMaybe) {
            function isUploadInstance(object) {
                return typeof object.uploadFile === "function";
            }
            UploadInstanceMaybe.isUploadInstance = isUploadInstance;
        })(UploadInstanceMaybe || (UploadInstanceMaybe = {}));
        // EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js
        var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(injectStylesIntoStyleTag);
        // EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js
        var styleDomAPI = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js");
        var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
        // EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js
        var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
        var setAttributesWithoutAttributes_default = /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
        // EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js
        var insertStyleElement = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js");
        var insertStyleElement_default = /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
        // EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js
        var styleTagTransform = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js");
        var styleTagTransform_default = /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss
        var UploadWidgetContainer = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidgetContainer.scss
        var options = {};
        options.styleTagTransform = styleTagTransform_default();
        options.setAttributes = setAttributesWithoutAttributes_default();
        options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        options.domAPI = styleDomAPI_default();
        options.insertStyleElement = insertStyleElement_default();
        var update = injectStylesIntoStyleTag_default()(UploadWidgetContainer.default, options);
        /* harmony default export */ var uploader_UploadWidgetContainer = UploadWidgetContainer.default && UploadWidgetContainer.default.locals ? UploadWidgetContainer.default.locals : undefined;
        ; // CONCATENATED MODULE: external "classnames"
        var external_classnames_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/classnames/index.js [app-client] (ecmascript)");
        ;
        var external_classnames_default = /*#__PURE__*/ __webpack_require__.n(external_classnames_namespaceObject);
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss
        var WidgetBase = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBase.scss
        var WidgetBase_options = {};
        WidgetBase_options.styleTagTransform = styleTagTransform_default();
        WidgetBase_options.setAttributes = setAttributesWithoutAttributes_default();
        WidgetBase_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        WidgetBase_options.domAPI = styleDomAPI_default();
        WidgetBase_options.insertStyleElement = insertStyleElement_default();
        var WidgetBase_update = injectStylesIntoStyleTag_default()(WidgetBase.default, WidgetBase_options);
        /* harmony default export */ var widgetBase_WidgetBase = WidgetBase.default && WidgetBase.default.locals ? WidgetBase.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/assets/svgs/DashedBackgroundSvg.tsx
        var baseWidth = 600;
        var baseHeight = 400;
        var baseNotchSize = 50;
        var DashedBackgroundSvg = function DashedBackgroundSvg(_ref) {
            var className = _ref.className, width = _ref.width, height = _ref.height, notchSize = _ref.notchSize;
            var widthDelta = baseWidth - width;
            var heightDelta = baseHeight - height;
            var notchDelta = baseNotchSize - notchSize;
            return (0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
                width: width,
                height: height,
                className: className,
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsxs)("defs", {
                        children: [
                            (0, jsx_runtime_namespaceObject.jsx)("path", {
                                d: "M76 99h".concat(536 - (widthDelta - notchDelta), "a7 7 0 0 1 7 7v").concat(36 - notchDelta, "a7 7 0 0 0 7 7h").concat(36 - notchDelta, "a7 7 0 0 1 7 7v").concat(336 - (heightDelta - notchDelta), "a7 7 0 0 1-7 7H76a7 7 0 0 1-7-7V106a7 7 0 0 1 7-7Z"),
                                id: "rectWithNotch"
                            }),
                            (0, jsx_runtime_namespaceObject.jsx)("mask", Object.assign({
                                id: "rectWithNotchMask",
                                maskContentUnits: "userSpaceOnUse",
                                maskUnits: "objectBoundingBox",
                                x: "0",
                                y: "0",
                                width: width,
                                height: height,
                                fill: "#fff"
                            }, {
                                children: (0, jsx_runtime_namespaceObject.jsx)("use", {
                                    xlinkHref: "#rectWithNotch"
                                })
                            }))
                        ]
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)("use", {
                        mask: "url(#rectWithNotchMask)",
                        xlinkHref: "#rectWithNotch",
                        transform: "translate(-69 -99)",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "none",
                        fillRule: "evenodd",
                        strokeDasharray: "4"
                    })
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBaseBackground.tsx
        var WidgetBaseBackground = function WidgetBaseBackground(_ref) {
            var closeButtonSize = _ref.closeButtonSize, isDragging = _ref.isDragging, dimensions = _ref.dimensions;
            if (dimensions === undefined) {
                return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
            }
            return (0, jsx_runtime_namespaceObject.jsx)(DashedBackgroundSvg, {
                width: dimensions.width,
                height: dimensions.height,
                notchSize: closeButtonSize,
                className: external_classnames_default()("uploader__widget-base__modal-bg", {
                    "uploader__widget-base__modal-bg--dragging": isDragging
                })
            });
        };
        ; // CONCATENATED MODULE: external "preact/compat"
        var compat_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/preact/compat/dist/compat.module.js [app-client] (ecmascript)");
        ;
        ; // CONCATENATED MODULE: ./src/assets/svgs/utils/ResizedSvg.tsx
        var __rest = undefined && undefined.__rest || function(s, e) {
            var t = {};
            for(var p in s){
                if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            }
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        };
        /**
 * IE11 doesn't like it when setting only width or height, so this utility makes it easier to set both.
 */ var ResizedSvg = function ResizedSvg(_a) {
            var children = _a.children, className = _a.className, originalHeight = _a.originalHeight, originalWidth = _a.originalWidth, style = _a.style, rest = __rest(_a, [
                "children",
                "className",
                "originalHeight",
                "originalWidth",
                "style"
            ]);
            var widthMaybe = rest === null || rest === void 0 ? void 0 : rest.width;
            var heightMaybe = rest === null || rest === void 0 ? void 0 : rest.height;
            return (0, jsx_runtime_namespaceObject.jsx)("svg", Object.assign({
                viewBox: "0 0 ".concat(originalWidth, " ").concat(originalHeight),
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: className,
                style: Object.assign(Object.assign({}, style), heightMaybe !== undefined ? {
                    height: "".concat(heightMaybe, "px"),
                    width: "".concat(heightMaybe * (originalWidth / originalHeight), "px")
                } : widthMaybe !== undefined ? {
                    width: "".concat(widthMaybe, "px"),
                    height: "".concat(widthMaybe * (originalHeight / originalWidth), "px")
                } : {})
            }, {
                children: children
            }));
        };
        ; // CONCATENATED MODULE: ./src/assets/svgs/CloseSvg.tsx
        var CloseSvg = function CloseSvg(_ref) {
            var className = _ref.className, width = _ref.width;
            return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
                originalWidth: 27,
                originalHeight: 26,
                width: width !== null && width !== void 0 ? width : 27,
                className: className
            }, {
                children: (0, jsx_runtime_namespaceObject.jsxs)("g", Object.assign({
                    transform: "rotate(45 6.547 16.13)",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, {
                    children: [
                        (0, jsx_runtime_namespaceObject.jsx)("rect", {
                            x: "7.75",
                            width: "2.5",
                            height: "18",
                            rx: "1.25"
                        }),
                        (0, jsx_runtime_namespaceObject.jsx)("rect", {
                            transform: "rotate(90 9 9)",
                            x: "7.75",
                            width: "2.5",
                            height: "18",
                            rx: "1.25"
                        })
                    ]
                }))
            }));
        };
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss
        var Modal = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss");
        ; // CONCATENATED MODULE: ./src/components/modal/Modal.scss
        var Modal_options = {};
        Modal_options.styleTagTransform = styleTagTransform_default();
        Modal_options.setAttributes = setAttributesWithoutAttributes_default();
        Modal_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        Modal_options.domAPI = styleDomAPI_default();
        Modal_options.insertStyleElement = insertStyleElement_default();
        var Modal_update = injectStylesIntoStyleTag_default()(Modal.default, Modal_options);
        /* harmony default export */ var modal_Modal = Modal.default && Modal.default.locals ? Modal.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/modal/Modal.tsx
        function Modal_slicedToArray(arr, i) {
            return Modal_arrayWithHoles(arr) || Modal_iterableToArrayLimit(arr, i) || Modal_unsupportedIterableToArray(arr, i) || Modal_nonIterableRest();
        }
        function Modal_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Modal_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return Modal_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Modal_arrayLikeToArray(o, minLen);
        }
        function Modal_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function Modal_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function Modal_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var modalTransitionDuration = 250; // Actual CSS transition of 'fade' is 150ms, but we add 100ms for safety.
        var modalCloseButtonSize = 27;
        var modalCloseButtonPadding = 11;
        var Modal_Modal = function Modal(_ref) {
            var children = _ref.children, closeModal = _ref.closeModal;
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Modal_slicedToArray(_useState, 2), isClosed = _useState2[0], setIsClosed = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = Modal_slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1];
            var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = Modal_slicedToArray(_useState5, 2), showModalAsync = _useState6[0], setShowModalAsync = _useState6[1];
            var showModal = visible && !isClosed;
            var doClose = function doClose() {
                setIsClosed(true);
            };
            (0, compat_namespaceObject.useEffect)(function() {
                if (!visible) {
                    setVisible(true);
                }
            }, [
                visible
            ]);
            (0, compat_namespaceObject.useEffect)(function() {
                if (!isClosed) {
                    return;
                }
                var timeout = setTimeout(function() {
                    closeModal();
                }, modalTransitionDuration);
                return function() {
                    return clearTimeout(timeout);
                };
            }, [
                isClosed
            ]);
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                var oldHtmlClass = document.documentElement.className;
                var oldBodyClass = document.body.className;
                document.documentElement.className = "".concat(oldHtmlClass, " uploader__html");
                document.body.className = "".concat(oldBodyClass, " uploader__body");
                return function() {
                    document.documentElement.className = oldHtmlClass;
                    document.body.className = oldBodyClass;
                };
            }, []);
            (0, compat_namespaceObject.useEffect)(function() {
                if (showModal && !showModalAsync) {
                    var f = window.requestAnimationFrame(function() {
                        setShowModalAsync(true);
                    });
                    return function() {
                        return window.cancelAnimationFrame(f);
                    };
                } else if (showModalAsync) {
                    setShowModalAsync(false);
                }
            }, [
                showModal
            ]); // 'onMouseDown' vs 'onClick':
            // When cropping an image, if we start a crop then release the mouse button outside the modal, it appears to register
            // as an 'onClick', so we use 'onMouseDown' to fix this.
            return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    showModal && (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: external_classnames_default()("uploader__backdrop", {
                            show: showModalAsync
                        }),
                        onMouseDown: doClose
                    }),
                    showModal && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                        className: external_classnames_default()("uploader__modal", {
                            show: showModalAsync
                        })
                    }, {
                        children: [
                            children,
                            (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                                className: "uploader__modal__close"
                            }, {
                                children: (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                                    href: "#close",
                                    onClick: function onClick(e) {
                                        e.preventDefault();
                                        doClose();
                                    }
                                }, {
                                    children: (0, jsx_runtime_namespaceObject.jsx)(CloseSvg, {
                                        width: modalCloseButtonSize
                                    })
                                }))
                            }))
                        ]
                    }))
                ]
            });
        };
        ; // CONCATENATED MODULE: ./src/modules/common/UseDimensionsFromElement.ts
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || UseDimensionsFromElement_unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return UseDimensionsFromElement_arrayLikeToArray(arr);
        }
        function UseDimensionsFromElement_slicedToArray(arr, i) {
            return UseDimensionsFromElement_arrayWithHoles(arr) || UseDimensionsFromElement_iterableToArrayLimit(arr, i) || UseDimensionsFromElement_unsupportedIterableToArray(arr, i) || UseDimensionsFromElement_nonIterableRest();
        }
        function UseDimensionsFromElement_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDimensionsFromElement_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UseDimensionsFromElement_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseDimensionsFromElement_arrayLikeToArray(o, minLen);
        }
        function UseDimensionsFromElement_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UseDimensionsFromElement_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UseDimensionsFromElement_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function useElementRef() {
            var _useState = (0, compat_namespaceObject.useState)(undefined), _useState2 = UseDimensionsFromElement_slicedToArray(_useState, 2), element = _useState2[0], setElement = _useState2[1];
            var elementRef = (0, compat_namespaceObject.useCallback)(function(e) {
                setElement(e !== null && e !== void 0 ? e : undefined);
            }, []);
            return [
                element,
                elementRef
            ];
        }
        function getElementDimensionsOnResize(isElementReady, imageSizeDeps) {
            var _useElementRef = useElementRef(), _useElementRef2 = UseDimensionsFromElement_slicedToArray(_useElementRef, 2), element = _useElementRef2[0], elementRef = _useElementRef2[1];
            var dimensions = doGetElementDimensionsOnResize(isElementReady, element, element, imageSizeDeps);
            return [
                dimensions,
                elementRef
            ];
        }
        function getElementDimensionsOnParentResize(isElementReady, imageSizeDeps) {
            var _useElementRef3 = useElementRef(), _useElementRef4 = UseDimensionsFromElement_slicedToArray(_useElementRef3, 2), element = _useElementRef4[0], elementRef = _useElementRef4[1];
            var _useElementRef5 = useElementRef(), _useElementRef6 = UseDimensionsFromElement_slicedToArray(_useElementRef5, 2), parentElement = _useElementRef6[0], parentElementRef = _useElementRef6[1];
            var dimensions = doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps);
            return [
                dimensions,
                elementRef,
                parentElementRef
            ];
        }
        function doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps) {
            // Must be 'undefined' to begin with, as these dimensions will be zero'd if the element isn't ready (i.e. it's an image and hasn't loaded yet).
            // IMPORTANT: do not override 'onload' for an image to achieve this, as we're already setting the attribute elsewhere, so don't want to overwrite the handler.
            var _useState3 = (0, compat_namespaceObject.useState)(undefined), _useState4 = UseDimensionsFromElement_slicedToArray(_useState3, 2), dimensions = _useState4[0], setDimensions = _useState4[1];
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                var updateDimensions = function updateDimensions() {
                    if (isElementReady) {
                        setDimensions(getDimensionsFromElement(element));
                    }
                };
                if (element === undefined || parentElement === undefined) {
                    return;
                }
                var observer = new ResizeObserver(updateDimensions);
                observer.observe(parentElement);
                return function() {
                    return observer.disconnect();
                };
            }, [
                element,
                isElementReady
            ].concat(_toConsumableArray(imageSizeDeps)));
            return dimensions;
        }
        function getDimensionsFromElement(element) {
            if (element === undefined) {
                return undefined;
            }
            var domRect = element.getBoundingClientRect();
            return {
                width: domRect.width,
                height: domRect.height,
                x: element.offsetLeft,
                y: element.offsetTop
            };
        }
        ; // CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBase.tsx
        function WidgetBase_slicedToArray(arr, i) {
            return WidgetBase_arrayWithHoles(arr) || WidgetBase_iterableToArrayLimit(arr, i) || WidgetBase_unsupportedIterableToArray(arr, i) || WidgetBase_nonIterableRest();
        }
        function WidgetBase_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function WidgetBase_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return WidgetBase_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WidgetBase_arrayLikeToArray(o, minLen);
        }
        function WidgetBase_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function WidgetBase_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function WidgetBase_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var WidgetBase_WidgetBase = function WidgetBase(_ref) {
            var children = _ref.children, htmlProps = _ref.htmlProps, isDraggable = _ref.isDraggable, isDragging = _ref.isDragging, layout = _ref.layout;
            var _a, _b;
            var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = WidgetBase_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
            var breakpoints = [
                {
                    width: 650,
                    value: "md"
                },
                {
                    width: 930,
                    value: "lg"
                }
            ];
            var lastBreakpoint = "xl";
            var breakpoint = (_b = dimensions === undefined ? undefined : (_a = breakpoints.find(function(x) {
                return dimensions.width <= x.width;
            })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : lastBreakpoint;
            return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                ref: containerRef,
                className: external_classnames_default()("uploader__widget-base", "breakpoint-".concat(breakpoint), {
                    "uploader__widget-base--draggable": isDraggable === true && layout !== "modal",
                    "uploader__widget-base--dragging": isDragging === true && layout !== "modal"
                })
            }, htmlProps, {
                children: [
                    isDraggable === true && layout === "modal" && (0, jsx_runtime_namespaceObject.jsx)(WidgetBaseBackground, {
                        isDragging: isDragging === true,
                        dimensions: dimensions,
                        closeButtonSize: modalCloseButtonSize + modalCloseButtonPadding
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: external_classnames_default()("uploader__widget-base__children", {
                            "uploader__widget-base__children--is-modal": layout === "modal"
                        })
                    }, {
                        children: children
                    }))
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/assets/svgs/RightSvg.tsx
        var RightSvg = function RightSvg(_ref) {
            var className = _ref.className, width = _ref.width;
            return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
                originalWidth: 13,
                originalHeight: 10,
                width: width !== null && width !== void 0 ? width : 13,
                className: className
            }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("path", {
                    d: "M6.293.293a.999.999 0 0 0 0 1.414L8.586 4H1a1 1 0 0 0 0 2h7.586L6.293 8.293a.999.999 0 1 0 1.414 1.414L12.414 5 7.707.293a.999.999 0 0 0-1.414 0Z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/configError/ConfigError.tsx
        var ConfigError = function ConfigError(_ref) {
            var error = _ref.error, layout = _ref.layout;
            var _a;
            var errorMessage = ((_a = error.message) !== null && _a !== void 0 ? _a : "unknown error").replace("[upload-js] ", "");
            var isApiKeyError = errorMessage.toLowerCase().includes("api key");
            return (0, jsx_runtime_namespaceObject.jsxs)(WidgetBase_WidgetBase, Object.assign({
                layout: layout,
                multi: false
            }, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsx)("h1", {
                        children: isApiKeyError ? "Almost there..." : "Oops!"
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)("p", {
                        children: errorMessage
                    }),
                    isApiKeyError ? (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                        className: "mt-5"
                    }, {
                        children: [
                            (0, jsx_runtime_namespaceObject.jsxs)("a", Object.assign({
                                href: "https://www.bytescale.com/get-started",
                                className: "btn btn--primary-outline"
                            }, {
                                children: [
                                    "Get API Key ",
                                    (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                                        width: 12,
                                        className: "ml-2"
                                    })
                                ]
                            })),
                            " "
                        ]
                    })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {})
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/modules/common/TypeUtils.ts
        function isDefined(object) {
            return object !== undefined;
        }
        function assertUnreachable(_x) {
            throw new Error("Didn't expect to get here: ".concat(JSON.stringify(_x)));
        }
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/UploadButton.tsx
        function UploadButton_slicedToArray(arr, i) {
            return UploadButton_arrayWithHoles(arr) || UploadButton_iterableToArrayLimit(arr, i) || UploadButton_unsupportedIterableToArray(arr, i) || UploadButton_nonIterableRest();
        }
        function UploadButton_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadButton_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UploadButton_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadButton_arrayLikeToArray(o, minLen);
        }
        function UploadButton_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UploadButton_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UploadButton_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var UploadButton = function UploadButton(_ref) {
            var className = _ref.className, options = _ref.options, onUpload = _ref.onUpload, text = _ref.text;
            var _a;
            var _useState = (0, compat_namespaceObject.useState)(Math.random()), _useState2 = UploadButton_slicedToArray(_useState, 1), fileInputKey = _useState2[0];
            var _useState3 = (0, compat_namespaceObject.useState)("uploader__input-".concat(Math.round(Math.random() * 1000000))), _useState4 = UploadButton_slicedToArray(_useState3, 1), inputId = _useState4[0];
            return (0, jsx_runtime_namespaceObject.jsxs)("label", Object.assign({
                className: external_classnames_default()("btn btn--file", className),
                htmlFor: inputId
            }, {
                children: [
                    text,
                    (0, jsx_runtime_namespaceObject.jsx)("input", Object.assign({
                        id: inputId,
                        name: inputId,
                        accept: (_a = options.mimeTypes) === null || _a === void 0 ? void 0 : _a.join(","),
                        type: "file",
                        className: "btn--file__input"
                    }, options.multi ? {
                        multiple: true
                    } : {}, {
                        onChange: function onChange(e) {
                            var _a, _b;
                            var input = e.target;
                            var files = Array.from((_b = (_a = input.files) !== null && _a !== void 0 ? _a : undefined) !== null && _b !== void 0 ? _b : []);
                            if (files.length > 0) {
                                onUpload(files);
                            }
                        }
                    }), fileInputKey)
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderWelcomeScreen.tsx
        var UploaderWelcomeScreen = function UploaderWelcomeScreen(_ref) {
            var addFiles = _ref.addFiles, options = _ref.options, isImageUploader = _ref.isImageUploader;
            var multi = options.multi, locale = options.locale;
            return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
                        options: options,
                        text: isImageUploader ? multi ? locale.uploadImages : locale.uploadImage : multi ? locale.uploadFiles : locale.uploadFile,
                        className: "btn--primary btn--upload",
                        onUpload: addFiles
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)("p", Object.assign({
                        className: "text-secondary mb-0"
                    }, {
                        children: isImageUploader ? multi ? locale.orDragDropImages : locale.orDragDropImage : multi ? locale.orDragDropFiles : locale.orDragDropFile
                    }))
                ]
            });
        };
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss
        var ProgressIcon = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss
        var ProgressIcon_options = {};
        ProgressIcon_options.styleTagTransform = styleTagTransform_default();
        ProgressIcon_options.setAttributes = setAttributesWithoutAttributes_default();
        ProgressIcon_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        ProgressIcon_options.domAPI = styleDomAPI_default();
        ProgressIcon_options.insertStyleElement = insertStyleElement_default();
        var ProgressIcon_update = injectStylesIntoStyleTag_default()(ProgressIcon.default, ProgressIcon_options);
        /* harmony default export */ var fileIcons_ProgressIcon = ProgressIcon.default && ProgressIcon.default.locals ? ProgressIcon.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/ProgressIcon.tsx
        function ProgressIcon_slicedToArray(arr, i) {
            return ProgressIcon_arrayWithHoles(arr) || ProgressIcon_iterableToArrayLimit(arr, i) || ProgressIcon_unsupportedIterableToArray(arr, i) || ProgressIcon_nonIterableRest();
        }
        function ProgressIcon_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ProgressIcon_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return ProgressIcon_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProgressIcon_arrayLikeToArray(o, minLen);
        }
        function ProgressIcon_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function ProgressIcon_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function ProgressIcon_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var progressWheelVanish = 300;
        var progressWheelDelay = 350;
        var ProgressIcon_ProgressIcon = function ProgressIcon(_ref) {
            var height = _ref.height, progress = _ref.progress, onCompleteImageSource = _ref.onCompleteImageSource, isError = _ref.isError;
            var _useState = (0, compat_namespaceObject.useState)(progress === 1), _useState2 = ProgressIcon_slicedToArray(_useState, 2), completed = _useState2[0], setCompleted = _useState2[1];
            var radius = height / 2;
            var stokeWidth = radius * 2;
            var size = stokeWidth * 2;
            var circumference = radius * 2 * Math.PI;
            var strokeDashoffset = circumference - progress * circumference;
            var strokeDasharray = "".concat(circumference, " ").concat(circumference);
            (0, compat_namespaceObject.useEffect)(function() {
                if (progress === 1 && !completed) {
                    var timeout = setTimeout(function() {
                        setCompleted(true);
                    }, progressWheelDelay - 50); // We want to start this _just_ before the wheel finishes
                    return function() {
                        return clearTimeout(timeout);
                    };
                }
            }, [
                progress
            ]);
            return (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                className: "progress-icon__container"
            }, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
                        className: "progress-icon",
                        width: size,
                        height: size
                    }, {
                        children: [
                            (0, jsx_runtime_namespaceObject.jsx)("circle", {
                                className: "progress-icon__circle__bg",
                                strokeWidth: 0,
                                r: size / 2,
                                cx: size / 2,
                                cy: size / 2,
                                style: {
                                    opacity: completed ? 0 : 1
                                }
                            }),
                            (0, jsx_runtime_namespaceObject.jsx)("circle", {
                                className: external_classnames_default()("progress-icon__circle", {
                                    "progress-icon__circle--error": isError
                                }),
                                strokeWidth: completed ? 0 : stokeWidth,
                                fill: "transparent",
                                r: completed ? 0 : radius,
                                cx: stokeWidth,
                                cy: stokeWidth,
                                style: {
                                    strokeDasharray: strokeDasharray,
                                    strokeDashoffset: strokeDashoffset,
                                    opacity: completed ? 0 : 1
                                }
                            })
                        ]
                    })),
                    (0, jsx_runtime_namespaceObject.jsx)("span", {
                        className: external_classnames_default()("progress-icon__thumbnail", {
                            "progress-icon__thumbnail--hidden": !completed
                        }),
                        style: {
                            backgroundImage: "url(".concat(onCompleteImageSource, ")")
                        }
                    })
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Document.svg
        /* harmony default export */ var Document = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTAwIDBIMTVDNyAwIDAgNyAwIDE1djE5MGMwIDggNyAxNSAxNSAxNWgxMzBjOCAwIDE1LTcgMTUtMTVWNjBsLTM1LTI1LTI1LTM1eiIgc3R5bGU9ImZpbGw6IzQyODVmNCIvPjxwYXRoIGQ9Ik00MCAxNjBoODB2LTEwSDQwdjEwem0wIDIwaDYwdi0xMEg0MHYxMHptMC03MHYxMGg4MHYtMTBINDB6bTAgMzBoODB2LTEwSDQwdjEweiIgc3R5bGU9ImZpbGw6I2YxZjFmMSIvPjxwYXRoIGQ9Ik0xMDAgMHY0NWMwIDggNyAxNSAxNSAxNWg0NUwxMDAgMHoiIHN0eWxlPSJmaWxsOiNhMWMyZmEiLz48L3N2Zz4K";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Spreadsheet.svg
        /* harmony default export */ var Spreadsheet = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNXoiIHN0eWxlPSJmaWxsOiM0M2EwNDciLz48cGF0aCBkPSJNMTYwIDUwaC01MFYwbDUwIDUweiIgc3R5bGU9ImZpbGw6I2M4ZTZjOSIvPjxwYXRoIGQ9Im0xMTAgNTAgNTAgNTBWNTBoLTUweiIgc3R5bGU9ImZpbGw6IzJlN2QzMiIvPjxwYXRoIGQ9Ik0xMTUgMTAwSDM1djcwaDkwdi03MGgtMTB6bS03MCAxMGgyMHYxMEg0NXYtMTB6bTAgMjBoMjB2MTBINDV2LTEwem0wIDIwaDIwdjEwSDQ1di0xMHptNzAgMTBINzV2LTEwaDQwdjEwem0wLTIwSDc1di0xMGg0MHYxMHptMC0yMEg3NXYtMTBoNDB2MTB6IiBzdHlsZT0iZmlsbDojZThmNWU5Ii8+PC9zdmc+Cg==";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Slideshow.svg
        /* harmony default export */ var Slideshow = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiNEMzUyMzAiLz48cGF0aCBmaWxsPSIjRkY4NDY0IiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiNCNDQyMjMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIxLjY1OSA5NEgzOC4zMzNDMzMuNzM3IDk0IDMwIDk3LjcyMyAzMCAxMDIuM3Y0NS42NWMwIDQuNTc3IDMuNzM3IDguMyA4LjMzMyA4LjNINzUuODN2OC4zYzAgMS45NTktMS42MTMgMy45NjctNC40MjUgNS41MjQtMy4yNDIgMS43ODgtNy41OTEgMi43NzYtMTIuMjM3IDIuNzc2VjE3N2g0MS42NjR2LTQuMTVjLTQuNjYzIDAtOS4wMTItLjk4NC0xMi4yMzctMi43NzYtMi44MTItMS41NTctNC40MjUtMy41NjUtNC40MjUtNS41MjR2LTguM2gzNy40OTdjNC41OTYgMCA4LjMzMy0zLjcyMyA4LjMzMy04LjNWMTAyLjNjMC00LjU3Ny0zLjczNy04LjMtOC4zMzMtOC4zaC0uMDA4Wm0tMzYuNDggNzguODVINzQuODE3YzMuMjQxLTIuMTkxIDUuMTgzLTUuMDg0IDUuMTgzLTguMyAwIDMuMjE2IDEuOTQyIDYuMTA5IDUuMTgzIDguM2gtLjAwNFpNMzguMzMzIDEwMi4zaDgzLjMyNnYzNy4zNUgzOC4zMzNWMTAyLjNjLS4wMTMgMCAwIDAgMCAwWm0wIDQ1LjY1di00LjE1aDgzLjMyNnY0LjE1SDM4LjMzM1oiLz48cGF0aCBkPSJNNjcuOTg2IDEzNi43Yy4zMzYuMi43MTMuMyAxLjA4NS4zLjMxMSAwIC42MzQtLjA3Ni45MzMtLjIxMmwyNC44NTctMTJBMS45OTMgMS45OTMgMCAwIDAgOTYgMTIzYzAtLjc1Mi0uNDQtMS40NTItMS4xNC0xLjc4OGwtMjQuODU2LTEyYTIuMTQ1IDIuMTQ1IDAgMCAwLTIuMDIyLjA4OEExLjk5MyAxLjk5MyAwIDAgMCA2NyAxMTF2MjRjMCAuNjg4LjM3NyAxLjMzNi45ODIgMS43aC4wMDRabTMuMTYxLTIyLjQ2NEw4OS4yOTcgMTIzbC0xOC4xNSA4Ljc2NFYxMTQuMjM2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Archive.svg
        /* harmony default export */ var Archive = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4NkFCRUIiLz48cGF0aCBmaWxsPSIjQzRENEYxIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3MThGQzMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzkgOTEuNjkxaDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDEwMC44NmgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik00OC4xNjkgMTAwLjg2aDkuMTY5djE4LjMzOGgtOS4xNjl6TTM5IDczLjM1M2gxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA4Mi41MjJoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgNTUuMDE1aDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDY0LjE4NGgxOC4zMzh2OS4xNjlINDguMTY5ek0zOSAzNi42NzZoMTguMzM4djkuMTY5SDM5ek00OC4xNjkgNDUuODQ2aDE4LjMzOHY5LjE2OUg0OC4xNjl6TTM5IDE4LjMzOGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSAyNy41MDdoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgMGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA5LjE2OWgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik01Mi43NTQgMTE3LjAzYzcuNTk2IDAgMTMuNzUzIDYuMTU3IDEzLjc1MyAxMy43NTN2MTMuNzU0YTkuMTcgOS4xNyAwIDAgMS05LjE2OSA5LjE2OUg0OC4xN2E5LjE3IDkuMTcgMCAwIDEtOS4xNjktOS4xN3YtMTMuNzUzYzAtNy41OTYgNi4xNTgtMTMuNzU0IDEzLjc1NC0xMy43NTRabTAgOS4xNjlhNC41ODUgNC41ODUgMCAwIDAtNC41ODUgNC41ODR2OS4xN2E0LjU4NSA0LjU4NSAwIDEgMCA5LjE3IDB2LTkuMTdhNC41ODUgNC41ODUgMCAwIDAtNC41ODUtNC41ODRaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Code.svg
        /* harmony default export */ var Code = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iIzQwNzREMSIvPjxwYXRoIGZpbGw9IiM4RkIwRUEiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iIzQwNjM5RSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48cGF0aCBkPSJNNjkuNjUxIDE2MC4wNjN2LTUuNDE3SDY0LjJjLTMuNDc0IDAtNS43NjYtLjUwMy02Ljg3NC0xLjUwOS0xLjEwOS0xLjAwNi0xLjY2My0yLjIxNy0xLjY2My0zLjYzNCAwLTEuMDUyLjIyOC0yLjY3NC42ODYtNC44NjlsLjg5MS00LjAxMWMuNDgtMi4xNDkuNzItMy44ODYuNzItNS4yMTIgMC0xLjUwOC0uMjU3LTIuODQ1LS43NzEtNC4wMTEtLjUxNS0xLjE2Ni0xLjI4LTIuMjk3LTIuMjk4LTMuMzk0LTEuMDE3LTEuMDk3LTIuNjExLTIuMjE3LTQuNzgyLTMuMzYgMi4xNzEtMS4xNDMgMy43NjUtMi4yNjkgNC43ODItMy4zNzcgMS4wMTgtMS4xMDkgMS43ODMtMi4yNCAyLjI5OC0zLjM5NS41MTQtMS4xNTQuNzcxLTIuNDg1Ljc3MS0zLjk5NCAwLTEuMzI2LS4yNC0zLjA3NC0uNzItNS4yNDZsLS44OTEtNC4wMTFjLS40NTgtMi4xNzItLjY4Ni0zLjc3Mi0uNjg2LTQuOCAwLTEuNDYzLjU2LTIuNjkyIDEuNjgtMy42ODYgMS4xMi0uOTk0IDMuNDA2LTEuNDkxIDYuODU3LTEuNDkxaDUuNDUxVjg5LjE2aC01LjUyYy02LjQyMiAwLTEwLjU2IDEuMDQtMTIuNDExIDMuMTItMS44NTEgMi4wOC0yLjc3NyA0LjQxMS0yLjc3NyA2Ljk5NCAwIDEuMzcyLjE3MSAyLjg2OS41MTQgNC40OTJsLjY1MiAyLjgxMS41ODIgMy4wNTIuNDQ2IDEuODE3Yy4xNi44LjI0IDEuNjIzLjI0IDIuNDY4IDAgMi4yODYtLjc0MyA0LjE4OS0yLjIyOCA1LjcwOS0xLjQ4NiAxLjUyLTQuMDU4IDIuMjgtNy43MTUgMi4yOEgzOC4yOHY1LjQ1MWgzLjE1NGMzLjcwMyAwIDYuMjg2Ljc3MiA3Ljc0OSAyLjMxNSAxLjQ2MyAxLjU0MiAyLjE5NCAzLjQxMSAyLjE5NCA1LjYwNSAwIC44LS4wOCAxLjYzNS0uMjQgMi41MDNsLS40NDYgMS44ODYtLjU4MiAzLjA1MS0uNjUyIDIuODEyYy0uMzQzIDEuNi0uNTE0IDMuMDg1LS41MTQgNC40NTcgMCAyLjYwNi45MjYgNC45MzcgMi43NzcgNi45OTQgMS44NTEgMi4wNTcgNS45ODkgMy4wODYgMTIuNDExIDMuMDg2aDUuNTJabTI3LjI0NiAwYzYuNDIzIDAgMTAuNTY2LTEuMDIzIDEyLjQyOS0zLjA2OSAxLjg2My0yLjA0NSAyLjc5NC00LjM3MSAyLjc5NC02Ljk3NyAwLTEuMzcxLS4xODMtMi44NjgtLjU0OS00LjQ5MWwtLjY1MS0yLjgxMi0uNTgzLTMuMDUxLS40MTEtMS44ODZjLS4xODMtLjgtLjI3NS0xLjYtLjI3NS0yLjQgMC0yLjI4Ni43NDktNC4xOTQgMi4yNDYtNS43MjYgMS40OTctMS41MzEgNC4wNzQtMi4yOTcgNy43MzItMi4yOTdoMy4xMnYtNS40NTFoLTMuMTJjLTMuNzAzIDAtNi4yOTItLjc3Mi03Ljc2Ni0yLjMxNC0xLjQ3NC0xLjU0My0yLjIxMi0zLjQtMi4yMTItNS41NzIgMC0uODIzLjA5Mi0xLjY4LjI3NS0yLjU3MWwuNDExLTEuODE3LjU4My0zLjA1Mi42NTEtMi44MTFjLjM2Ni0xLjYuNTQ5LTMuMDk3LjU0OS00LjQ5MiAwLTIuNTgzLS45MzEtNC45MTQtMi43OTQtNi45OTRzLTYuMDA2LTMuMTItMTIuNDI5LTMuMTJoLTUuNTJ2NS40ODZoNS40NTJjMy40NzQgMCA1Ljc2NS40OTcgNi44NzQgMS40OTEgMS4xMDguOTk0IDEuNjYzIDIuMjEyIDEuNjYzIDMuNjUyIDAgMS4wNTEtLjIyOSAyLjY2Mi0uNjg2IDQuODM0bC0uODkxIDQuMDExYy0uNDM1IDIuMTcyLS42NTIgMy45Mi0uNjUyIDUuMjQ2IDAgMS41MDkuMjQ2IDIuODQuNzM3IDMuOTk0LjQ5MiAxLjE1NSAxLjI0NiAyLjI4NiAyLjI2MyAzLjM5NSAxLjAxNyAxLjEwOCAyLjYxMiAyLjIzNCA0Ljc4MyAzLjM3Ny0yLjE3MSAxLjE0My0zLjc2NiAyLjI2My00Ljc4MyAzLjM2LTEuMDE3IDEuMDk3LTEuNzcxIDIuMjI4LTIuMjYzIDMuMzk0LS40OTEgMS4xNjYtLjczNyAyLjUwMy0uNzM3IDQuMDExIDAgMS4zMjYuMjE3IDMuMDYzLjY1MiA1LjIxMmwuODkxIDQuMDExYy40NTcgMi4xOTUuNjg2IDMuODA2LjY4NiA0LjgzNSAwIDEuNDQtLjU1NSAyLjY2Mi0xLjY2MyAzLjY2OC0xLjEwOSAxLjAwNi0zLjQgMS41MDktNi44NzQgMS41MDloLTUuNDUydjUuNDE3aDUuNTJaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Image.svg
        /* harmony default export */ var svgs_Image = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM0ZDhhZmEiLz48cGF0aCBmaWxsPSIjOTViNmZmIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMzZTcxZTQiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTI3IDE3MUgzM3YtMTguODU3bDI3LjExOC0zMy4wNDkgMzkuNzExIDMzLjA0OUwxMjcgMTQwLjI4OXpNMTMxIDExMC41YzAgOC4wMDktNi40OTEgMTQuNS0xNC41IDE0LjVzLTE0LjUtNi40OTEtMTQuNS0xNC41UzEwOC40OTEgOTYgMTE2LjUgOTZzMTQuNSA2LjQ5MSAxNC41IDE0LjVaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Video.svg
        /* harmony default export */ var Video = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4QzUwRTciLz48cGF0aCBmaWxsPSIjQjM4MEZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3QzNGRDgiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEyNi45NTggMTA0SDMzLjA0MkEyLjA0MiAyLjA0MiAwIDAgMCAzMSAxMDYuMDMxdjYwLjkzOGMwIDEuMTE3LjkxOSAyLjAzMSAyLjA0MiAyLjAzMWg5My45MTZhMi4wNDIgMi4wNDIgMCAwIDAgMi4wNDItMi4wMzFWMTA2LjAzYTIuMDQyIDIuMDQyIDAgMCAwLTIuMDQyLTIuMDMxWm0tNzkuNjI1IDQuMDYzdjguMTI0aC04LjE2NnYtOC4xMjRoOC4xNjZabS04LjE2NiAzNi41NjJoOC4xNjZ2OC4xMjVoLTguMTY2di04LjEyNVptMC00LjA2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wLTEyLjE4N3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wIDM2LjU2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm02NS4zMzMtNC4wNjNoLTQ5di00OC43NWg0OXY0OC43NVptMTYuMzMzLTguMTI1aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg4aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg3aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabS04LjE2NiAzNi41NjN2LTguMTI1aDguMTY2djguMTI1aC04LjE2NlptOC4xNjYtNDguNzVoLTguMTY2di04LjEyNmg4LjE2NnY4LjEyNloiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9zdmc+Cg==";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Audio.svg
        /* harmony default export */ var Audio = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiMwNzkxRkYiLz48cGF0aCBmaWxsPSIjQjNEREZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMwQTdDRDkiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTg5LjQwNSA5NS4wMWM5LjQ4IDIuMDQ1IDE3LjI4MSA2LjkwNCAyMy40MDcgMTQuNTc4IDYuMTI1IDcuNjc0IDkuMTg4IDE2LjQ4IDkuMTg4IDI2LjQxNyAwIDkuOTM3LTMuMDYzIDE4Ljc0My05LjE4OCAyNi40MTYtNi4xMjYgNy42NzQtMTMuOTI4IDEyLjUzNC0yMy40MDcgMTQuNTc5di05LjY0OWM2Ljg1NC0yLjA0NSAxMi40MzEtNS45MTggMTYuNzM0LTExLjYxOCA0LjMwMi01LjcgNi40NTQtMTIuMjc4IDYuNDU0LTE5LjczM3MtMi4xNTItMTQuMDMzLTYuNDU0LTE5LjczM2MtNC4zMDMtNS43LTkuODgtOS41NzMtMTYuNzM0LTExLjYxOFY5NXYuMDFabTExLjU5MiA0MWMwIDguNzctMy44NjQgMTUuMDU1LTExLjU5MiAxOC44NTN2LTM3LjcxMmMzLjIwOCAxLjYwOSA1Ljk0MiA0LjI0IDguMjA0IDcuODk1IDIuMjYxIDMuNjU1IDMuMzkyIDcuMzA5IDMuMzkyIDEwLjk2M2gtLjAwNFpNMzggMTIxLjk3N2gxOC41OTFsMjMuNDA3LTIzLjQ2djc0Ljk3OWwtMjMuNDA3LTIzLjQ2SDM4di0yOC4wNjQuMDA1WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4K";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Unknown.svg
        /* harmony default export */ var Unknown = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iI2M5ZGNmZCIvPjxwYXRoIGZpbGw9IiNFQ0YzRkYiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iI2JjZDRmZSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48L2c+PC9zdmc+Cg==";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/utils/FileIconUtil.tsx
        function getFileIconImageSource(fileName, mime) {
            var _a;
            var fn = fileName.toLowerCase().trim();
            var result = fileExtensionIcons.find(function(x) {
                return x.extensions.some(function(ext) {
                    return fn.endsWith(ext);
                }) || x.mime.some(function(m) {
                    return mime.startsWith(m);
                });
            });
            return (_a = result === null || result === void 0 ? void 0 : result.icon) !== null && _a !== void 0 ? _a : Unknown;
        }
        var fileExtensionIcons = [
            {
                icon: Document,
                extensions: [
                    ".docx",
                    ".doc",
                    ".txt",
                    ".md",
                    ".markdown",
                    ".mkdown",
                    ".mkdn",
                    ".pdf"
                ],
                mime: [
                    "application/x-abiword",
                    "application/msword",
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ]
            },
            {
                icon: Spreadsheet,
                extensions: [
                    ".xlsx",
                    ".xls",
                    ".csv",
                    ".tsv",
                    ".psv"
                ],
                mime: [
                    "application/ms-excel",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                ]
            },
            {
                icon: Slideshow,
                extensions: [
                    ".pptx",
                    ".ppt"
                ],
                mime: [
                    "application/vnd.apple.keynote",
                    "application/ms-powerpoint",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                ]
            },
            {
                icon: Archive,
                extensions: [
                    ".zip",
                    ".tar",
                    ".tar.gz",
                    ".rar"
                ],
                mime: []
            },
            {
                icon: svgs_Image,
                extensions: [],
                mime: [
                    "image/"
                ]
            },
            {
                icon: Video,
                extensions: [],
                mime: [
                    "video/"
                ]
            },
            {
                icon: Audio,
                extensions: [],
                mime: [
                    "audio/"
                ]
            },
            {
                icon: Code,
                extensions: [
                    ".json",
                    ".js",
                    ".ts",
                    ".htm",
                    ".html",
                    ".css",
                    ".sass"
                ],
                mime: []
            }
        ];
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss
        var SubmittedFileComponent = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss
        var SubmittedFileComponent_options = {};
        SubmittedFileComponent_options.styleTagTransform = styleTagTransform_default();
        SubmittedFileComponent_options.setAttributes = setAttributesWithoutAttributes_default();
        SubmittedFileComponent_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        SubmittedFileComponent_options.domAPI = styleDomAPI_default();
        SubmittedFileComponent_options.insertStyleElement = insertStyleElement_default();
        var SubmittedFileComponent_update = injectStylesIntoStyleTag_default()(SubmittedFileComponent.default, SubmittedFileComponent_options);
        /* harmony default export */ var files_SubmittedFileComponent = SubmittedFileComponent.default && SubmittedFileComponent.default.locals ? SubmittedFileComponent.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Error.svg
        /* harmony default export */ var svgs_Error = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNkMjNmNGQiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNiA3LjYpIiBmaWxsPSIjRkZGIj48cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNy40MjUgNy40MjUpIiB4PSI1LjkyNSIgeT0iLTEuNTc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIgcng9IjEuNSIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDcuNDI1IDcuNDI1KSIgeD0iNS45MjUiIHk9Ii0xLjU3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPgo=";
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/hypermedia/Hypermedia.tsx
        var Link = function Link(_ref) {
            var prefix = _ref.prefix, suffix = _ref.suffix, text = _ref.text, url = _ref.url;
            return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    prefix,
                    " ",
                    (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                        href: url,
                        target: "_blank",
                        rel: "noopener"
                    }, {
                        children: text
                    })),
                    " ",
                    suffix
                ]
            });
        };
        function replaceFirstLink(text) {
            var matches = /^(.*?)(https?:\/\/[^\s)]+)(.*?)$/.exec(text);
            if (matches === null) {
                return undefined;
            }
            var prefix = matches[1];
            var url = matches[2];
            var suffix = matches[3];
            return (0, jsx_runtime_namespaceObject.jsx)(Link, {
                text: url,
                url: url,
                prefix: prefix,
                suffix: suffix
            });
        }
        function replaceUploadIo(text) {
            var find = "bytescale";
            var index = text.toLowerCase().indexOf(find);
            if (index === -1) {
                return undefined;
            }
            return (0, jsx_runtime_namespaceObject.jsx)(Link, {
                text: "Bytescale",
                url: "https://www.bytescale.com/pricing",
                prefix: text.substring(0, index),
                suffix: text.substring(index + find.length)
            });
        }
        var Hypermedia = function Hypermedia(_ref2) {
            var text = _ref2.text;
            var _a, _b;
            return (_b = (_a = replaceFirstLink(text)) !== null && _a !== void 0 ? _a : replaceUploadIo(text)) !== null && _b !== void 0 ? _b : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
                children: text
            });
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/files/SubmittedFileComponent.tsx
        function SubmittedFileComponent_slicedToArray(arr, i) {
            return SubmittedFileComponent_arrayWithHoles(arr) || SubmittedFileComponent_iterableToArrayLimit(arr, i) || SubmittedFileComponent_unsupportedIterableToArray(arr, i) || SubmittedFileComponent_nonIterableRest();
        }
        function SubmittedFileComponent_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmittedFileComponent_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return SubmittedFileComponent_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SubmittedFileComponent_arrayLikeToArray(o, minLen);
        }
        function SubmittedFileComponent_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function SubmittedFileComponent_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function SubmittedFileComponent_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        // Keep up-to-date with total animation duration in CSS.
        var removalAnimationTime = 1000;
        var SubmittedFileComponent_SubmittedFileComponent = function SubmittedFileComponent(_ref) {
            var file = _ref.file, fileCount = _ref.fileCount, remove = _ref.remove, locale = _ref.locale, showRemoveButton = _ref.showRemoveButton;
            var _a, _b;
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmittedFileComponent_slicedToArray(_useState, 2), isDelayedRemove = _useState2[0], setIsDelayedRemove = _useState2[1];
            var delayedRemove = function delayedRemove() {
                setIsDelayedRemove(true);
            };
            (0, compat_namespaceObject.useEffect)(function() {
                if (!isDelayedRemove) {
                    return;
                }
                var timeout = setTimeout(function() {
                    remove();
                }, removalAnimationTime);
                return function() {
                    return clearTimeout(timeout);
                };
            }, [
                isDelayedRemove
            ]);
            var progressMargin = 0.02;
            var thumbnail = Unknown;
            var progress = 0;
            var fileName;
            var fileMessage;
            switch(file.type){
                case "preprocessing":
                    progress = 0;
                    fileName = file.file.name;
                    fileMessage = locale.processingFile;
                    break;
                case "uploading":
                    progress = Math.min(file.progress, 1 - progressMargin); // Do not let progress display 100%, as we don't have the MIME type & URL for the thumbnail yet. Plus it's confusing leaving it hanging on 100%.
                    fileName = file.file.name;
                    break;
                case "uploaded":
                    progress = 1;
                    thumbnail = getFileIconImageSource(file.uploadedFile.file.name, file.uploadedFile.mime);
                    fileName = file.uploadedFile.file.name;
                    break;
                case "error":
                    progress = 1;
                    thumbnail = svgs_Error;
                    fileMessage = (_b = (_a = file.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Unexpected error occurred.";
                    fileName = file.file.name;
                    break;
                default:
                    assertUnreachable(file);
            }
            return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: external_classnames_default()("uploader__submitted-file", {
                    "uploader__submitted-file--loners": fileCount <= 2
                })
            }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                    className: "uploader__submitted-file__container"
                }, {
                    children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                        className: "uploader__submitted-file__inner"
                    }, {
                        children: [
                            (0, jsx_runtime_namespaceObject.jsx)(ProgressIcon_ProgressIcon, {
                                progress: Math.max(progressMargin, progress),
                                onCompleteImageSource: thumbnail,
                                height: 15,
                                isError: file.type === "error"
                            }),
                            " ",
                            (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                                className: "uploader__submitted-file__text"
                            }, {
                                children: [
                                    (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                                        className: "uploader__submitted-file__name",
                                        title: fileName
                                    }, {
                                        children: fileName
                                    })),
                                    fileMessage !== undefined && (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                                        className: "uploader__submitted-file__message"
                                    }, {
                                        children: (0, jsx_runtime_namespaceObject.jsx)(Hypermedia, {
                                            text: fileMessage
                                        })
                                    }))
                                ]
                            })),
                            isDelayedRemove ? (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                                className: "uploader__submitted-file__action uploader__submitted-file__action--performed"
                            }, {
                                children: file.type === "uploading" ? locale["cancelled!"] : locale["removed!"]
                            })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
                                children: (showRemoveButton || file.type === "uploading") && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                                    className: "uploader__submitted-file__action",
                                    href: "#remove",
                                    onClick: function onClick(e) {
                                        e.preventDefault();
                                        delayedRemove();
                                    }
                                }, {
                                    children: file.type === "uploading" ? locale.cancel : locale.remove
                                }))
                            })
                        ]
                    }))
                }))
            }));
        };
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss
        var UploaderMainScreen = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderMainScreen.scss
        var UploaderMainScreen_options = {};
        UploaderMainScreen_options.styleTagTransform = styleTagTransform_default();
        UploaderMainScreen_options.setAttributes = setAttributesWithoutAttributes_default();
        UploaderMainScreen_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        UploaderMainScreen_options.domAPI = styleDomAPI_default();
        UploaderMainScreen_options.insertStyleElement = insertStyleElement_default();
        var UploaderMainScreen_update = injectStylesIntoStyleTag_default()(UploaderMainScreen.default, UploaderMainScreen_options);
        /* harmony default export */ var screens_UploaderMainScreen = UploaderMainScreen.default && UploaderMainScreen.default.locals ? UploaderMainScreen.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderMainScreen.tsx
        var UploaderMainScreen_UploaderMainScreen = function UploaderMainScreen(_ref) {
            var addFiles = _ref.addFiles, submittedFiles = _ref.submittedFiles, uploadedFiles = _ref.uploadedFiles, options = _ref.options, _remove = _ref.remove, finalize = _ref.finalize, isImageUploader = _ref.isImageUploader;
            var finishedUploading = submittedFiles.every(function(x) {
                return x.type !== "uploading";
            });
            var canFinish = finishedUploading && uploadedFiles.length > 0;
            var locale = options.locale;
            var hasButtons = options.multi || options.showFinishButton;
            return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "uploader__main-screen"
            }, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: "uploader__main-screen__file-list"
                    }, {
                        children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                            className: "uploader__main-screen__file-list__inner"
                        }, {
                            children: submittedFiles.map(function(file) {
                                return (0, jsx_runtime_namespaceObject.jsx)(SubmittedFileComponent_SubmittedFileComponent, {
                                    file: file,
                                    fileCount: submittedFiles.length,
                                    locale: locale,
                                    remove: function remove() {
                                        return _remove(file.fileIndex);
                                    },
                                    showRemoveButton: options.showRemoveButton
                                }, file.fileIndex);
                            })
                        }))
                    })),
                    hasButtons && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                        className: "uploader__controls"
                    }, {
                        children: [
                            options.multi && (options.maxFileCount === undefined || submittedFiles.length < options.maxFileCount ? (0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
                                options: options,
                                text: isImageUploader ? locale.addAnotherImage : locale.addAnotherFile,
                                onUpload: addFiles
                            }) : (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                                className: "uploader__main-screen__info"
                            }, {
                                children: [
                                    isImageUploader ? locale.maxImagesReached : locale.maxFilesReached,
                                    " ",
                                    options.maxFileCount
                                ]
                            }))),
                            options.showFinishButton && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                                href: "#done",
                                className: external_classnames_default()("btn btn--primary", {
                                    disabled: !canFinish
                                }),
                                onClick: function onClick(e) {
                                    e.preventDefault();
                                    if (canFinish) {
                                        finalize();
                                    }
                                }
                            }, {
                                children: finishedUploading ? (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                                    className: "vcenter hcenter"
                                }, {
                                    children: [
                                        locale.finish,
                                        " ",
                                        locale.finishIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                                            width: 12,
                                            className: "ml-2"
                                        })
                                    ]
                                })) : locale.pleaseWait
                            }))
                        ]
                    }))
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/model/SubmittedFile.ts
        function isUploadedFile(file) {
            return file.type === "uploaded";
        }
        ; // CONCATENATED MODULE: ./src/modules/common/UseDragDrop.ts
        function UseDragDrop_slicedToArray(arr, i) {
            return UseDragDrop_arrayWithHoles(arr) || UseDragDrop_iterableToArrayLimit(arr, i) || UseDragDrop_unsupportedIterableToArray(arr, i) || UseDragDrop_nonIterableRest();
        }
        function UseDragDrop_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDragDrop_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UseDragDrop_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseDragDrop_arrayLikeToArray(o, minLen);
        }
        function UseDragDrop_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UseDragDrop_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UseDragDrop_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function useDragDrop(acceptFiles) {
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseDragDrop_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
            var handleDragEnter = function handleDragEnter(e) {
                e.preventDefault();
                e.stopPropagation();
                setIsDragging(true);
            };
            var handleDragLeave = function handleDragLeave(e) {
                var _a;
                e.preventDefault();
                e.stopPropagation();
                if (e.relatedTarget !== null && ((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) === true) {
                    return;
                }
                setIsDragging(false);
            };
            var handleDragOver = function handleDragOver(e) {
                e.preventDefault();
                e.stopPropagation();
                if (e.dataTransfer !== null) {
                    e.dataTransfer.dropEffect = "copy";
                }
            };
            var handleDrop = function handleDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                setIsDragging(false);
                if (e.dataTransfer !== null) {
                    var files = Array.from(e.dataTransfer.files);
                    if (files.length > 0) {
                        acceptFiles(files);
                    }
                }
            };
            return {
                isDragging: isDragging,
                onDrop: function onDrop(e) {
                    return handleDrop(e);
                },
                onDragOver: function onDragOver(e) {
                    return handleDragOver(e);
                },
                onDragEnter: function onDragEnter(e) {
                    return handleDragEnter(e);
                },
                onDragLeave: function onDragLeave(e) {
                    return handleDragLeave(e);
                }
            };
        }
        ; // CONCATENATED MODULE: ./src/modules/common/FormatUtils.ts
        function humanFileSize(bytes) {
            var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var reference = bytes;
            var thresh = 1024;
            var sep = " ";
            var r = Math.pow(10, dp);
            var units = [
                "B",
                "KB",
                "MB",
                "GB",
                "TB",
                "PB",
                "EB",
                "ZB",
                "YB"
            ];
            var magnitude = 0;
            if (Math.abs(reference) < thresh) {
                return "".concat(reference).concat(sep).concat(units[magnitude]);
            }
            do {
                bytes /= thresh;
                reference /= thresh;
                ++magnitude;
            }while (Math.round(Math.abs(reference) * r) / r >= thresh && magnitude < units.length - 1)
            var number = bytes.toFixed(dp);
            return number + sep + units[magnitude];
        }
        ; // CONCATENATED MODULE: ./src/components/modal/UploadWidgetResult.ts
        var UploadWidgetResult;
        (function(UploadWidgetResult) {
            function from(upload, originalFile, editedFile) {
                var _a;
                var calculateFileUrl = function calculateFileUrl() {
                    if (editedFile === undefined) {
                        // Always return the original file if unedited (could be a ZIP, EXE, etc. so don't run through our image API).
                        return upload.url(originalFile.filePath);
                    } // DO NOT add a width and height etc.
                    // This causes confusion for users, as the expectation is this URL is the image they uploaded, not a resized version
                    // of it, and has parity with the URL for images where the user has decided not to crop (which we simply return a
                    // raw URL for).
                    // The sole purpose of this result is to process CROP files so that they return as images, not JSON files, and to
                    // do nothing more. (Again, for parity with uploading images where the user has decided not to crop.)
                    return upload.url(editedFile.filePath, {
                        transformation: "image"
                    });
                };
                return {
                    editedFile: editedFile,
                    originalFile: originalFile,
                    fileUrl: calculateFileUrl(),
                    filePath: (_a = editedFile === null || editedFile === void 0 ? void 0 : editedFile.filePath) !== null && _a !== void 0 ? _a : originalFile.filePath
                };
            }
            UploadWidgetResult.from = from;
        })(UploadWidgetResult || (UploadWidgetResult = {}));
        ; // CONCATENATED MODULE: ./src/modules/common/Rect.ts
        var RectWithPos;
        (function(RectWithPos) {
            function toCssProps(r) {
                return {
                    width: r.width,
                    height: r.height,
                    left: r.x,
                    top: r.y
                };
            }
            RectWithPos.toCssProps = toCssProps;
        })(RectWithPos || (RectWithPos = {}));
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss
        var ResizableSquare = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss
        var ResizableSquare_options = {};
        ResizableSquare_options.styleTagTransform = styleTagTransform_default();
        ResizableSquare_options.setAttributes = setAttributesWithoutAttributes_default();
        ResizableSquare_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        ResizableSquare_options.domAPI = styleDomAPI_default();
        ResizableSquare_options.insertStyleElement = insertStyleElement_default();
        var ResizableSquare_update = injectStylesIntoStyleTag_default()(ResizableSquare.default, ResizableSquare_options);
        /* harmony default export */ var shapes_ResizableSquare = ResizableSquare.default && ResizableSquare.default.locals ? ResizableSquare.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/common/Draggable.tsx
        function Draggable_slicedToArray(arr, i) {
            return Draggable_arrayWithHoles(arr) || Draggable_iterableToArrayLimit(arr, i) || Draggable_unsupportedIterableToArray(arr, i) || Draggable_nonIterableRest();
        }
        function Draggable_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Draggable_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return Draggable_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Draggable_arrayLikeToArray(o, minLen);
        }
        function Draggable_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function Draggable_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function Draggable_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var Draggable = function Draggable(_ref) {
            var boundary = _ref.boundary, children = _ref.children, className = _ref.className, onMoveCallback = _ref.onMove, style = _ref.style, startingValue = _ref.startingValue, geometryMutatorId = _ref.geometryMutatorId;
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Draggable_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = Draggable_slicedToArray(_useState3, 2), startX = _useState4[0], setStartX = _useState4[1];
            var _useState5 = (0, compat_namespaceObject.useState)(0), _useState6 = Draggable_slicedToArray(_useState5, 2), startY = _useState6[0], setStartY = _useState6[1];
            var _useState7 = (0, compat_namespaceObject.useState)(0), _useState8 = Draggable_slicedToArray(_useState7, 2), lastXDelta = _useState8[0], setLastXDelta = _useState8[1];
            var _useState9 = (0, compat_namespaceObject.useState)(0), _useState10 = Draggable_slicedToArray(_useState9, 2), lastYDelta = _useState10[0], setLastYDelta = _useState10[1];
            var _useState11 = (0, compat_namespaceObject.useState)(startingValue), _useState12 = Draggable_slicedToArray(_useState11, 2), start = _useState12[0], setStart = _useState12[1];
            var clip = function clip(min, max, value) {
                return Math.min(Math.max(value, min), max);
            };
            var clipDimension = function clipDimension(length, value) {
                return clip(length * -1, length, value);
            };
            var setPositionStart = function setPositionStart(e) {
                setStartX(e.pageX);
                setStartY(e.pageY);
            };
            var getPositionDelta = function getPositionDelta(e) {
                return {
                    x: e.pageX - startX + lastXDelta,
                    y: e.pageY - startY + lastYDelta
                };
            };
            var onDown = function onDown(e) {
                e.stopPropagation(); // Required so that if a draggable element exists within another draggable element, when the child element is dragged, the parent element is not.
                e.target.setPointerCapture(e.pointerId);
                setIsDragging(true);
                setPositionStart(e);
                if (startingValue.lastUpdatedBy !== geometryMutatorId) {
                    setLastXDelta(0);
                    setLastYDelta(0);
                    setStart(startingValue);
                }
            };
            var onUp = function onUp(e) {
                setIsDragging(false);
                e.target.releasePointerCapture(e.pointerId);
                var _getPositionDelta = getPositionDelta(e), x = _getPositionDelta.x, y = _getPositionDelta.y;
                setLastYDelta(clipDimension(boundary.height, y));
                setLastXDelta(clipDimension(boundary.width, x));
            };
            var onMove = function onMove(e) {
                if (!isDragging) {
                    return;
                }
                var _getPositionDelta2 = getPositionDelta(e), x = _getPositionDelta2.x, y = _getPositionDelta2.y;
                onMoveCallback(x, y, start);
            };
            var onTouchStart = function onTouchStart(e) {
                // Cancel scrolling on mobile, which causes dragging to immediately halt after it's started.
                e.preventDefault();
            };
            return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: className,
                style: style,
                onPointerDown: onDown,
                onPointerMove: onMove,
                onPointerUp: onUp,
                onPointerCancel: onUp,
                onTouchStart: onTouchStart
            }, {
                children: children
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.tsx
        function ResizableSquare_slicedToArray(arr, i) {
            return ResizableSquare_arrayWithHoles(arr) || ResizableSquare_iterableToArrayLimit(arr, i) || ResizableSquare_unsupportedIterableToArray(arr, i) || ResizableSquare_nonIterableRest();
        }
        function ResizableSquare_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ResizableSquare_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return ResizableSquare_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ResizableSquare_arrayLikeToArray(o, minLen);
        }
        function ResizableSquare_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function ResizableSquare_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function ResizableSquare_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var CornerDragger = function CornerDragger(_ref) {
            var boundary = _ref.boundary, corner = _ref.corner, geometry = _ref.geometry, setGeometry = _ref.setGeometry;
            return (0, jsx_runtime_namespaceObject.jsx)(Draggable, {
                className: "uploader__resizable-square__".concat(corner),
                boundary: boundary,
                geometryMutatorId: corner,
                startingValue: geometry,
                onMove: function onMove(x, y, g) {
                    return setGeometry(corner, {
                        x: corner === "nw" || corner === "sw" ? g.x + x : g.x,
                        y: corner === "nw" || corner === "ne" ? g.y + y : g.y,
                        width: corner === "nw" || corner === "sw" ? g.width - x : g.width + x,
                        height: corner === "nw" || corner === "ne" ? g.height - y : g.height + y
                    });
                }
            });
        };
        var ResizableSquare_ResizableSquare = function ResizableSquare(_ref2) {
            var boundary = _ref2.boundary, ratio = _ref2.ratio, onResized = _ref2.onResized, children = _ref2.children;
            var minSize = 50;
            var adjustedBoundary = {
                width: boundary.width - minSize,
                height: boundary.height - minSize
            };
            var reRatio = function reRatio(g, fixed) {
                if (ratio === undefined) {
                    return Object.assign(Object.assign({}, g), {
                        lastUpdatedBy: fixed
                    });
                }
                var width = Math.min(g.height * ratio, g.width);
                var height = width / ratio;
                return {
                    lastUpdatedBy: fixed,
                    height: height,
                    width: width,
                    x: fixed === "ne" || fixed === "se" ? g.x : fixed === "center" ? g.x + g.width / 2 - width / 2 : g.x + (g.width - width),
                    y: fixed === "sw" || fixed === "se" ? g.y : fixed === "center" ? g.y + g.height / 2 - height / 2 : g.y + (g.height - height)
                };
            };
            var clip = function clip(g) {
                var x = Math.min(boundary.width - minSize, Math.max(0, g.x)); // x is clipped, but width may continue to grow. We should deduct from width the amount that's clipped?
                var y = Math.min(boundary.height - minSize, Math.max(0, g.y));
                var xClip = Math.min(0, g.x);
                var yClip = Math.min(0, g.y);
                return {
                    x: x,
                    y: y,
                    width: Math.max(minSize, Math.min(g.width + xClip, boundary.width - x)),
                    height: Math.max(minSize, Math.min(g.height + yClip, boundary.height - y))
                };
            };
            var clipAndReRatio = function clipAndReRatio(g, fixed) {
                return reRatio(clip(g), fixed);
            };
            var calculateInitialGeometry = function calculateInitialGeometry() {
                return clipAndReRatio({
                    x: 0,
                    y: 0,
                    width: boundary.width,
                    height: boundary.height
                }, "center");
            };
            var _useState = (0, compat_namespaceObject.useState)(calculateInitialGeometry), _useState2 = ResizableSquare_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometryUnsafe = _useState2[1];
            var setGeometry = function setGeometry(corner, set) {
                return setGeometryUnsafe(clipAndReRatio(set, corner));
            };
            var onGeometryChange = function onGeometryChange() {
                var isSameAsBoundary = geometry.x === 0 && geometry.y === 0 && geometry.width === boundary.width && geometry.height === boundary.height;
                onResized(isSameAsBoundary ? undefined : {
                    geometry: geometry,
                    boundary: boundary
                });
            };
            (0, compat_namespaceObject.useLayoutEffect)(onGeometryChange, [
                geometry
            ]);
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                setGeometryUnsafe(calculateInitialGeometry());
                onGeometryChange();
            }, [
                boundary
            ]);
            return (0, jsx_runtime_namespaceObject.jsxs)(Draggable, Object.assign({
                className: "uploader__resizable-square",
                boundary: adjustedBoundary,
                style: RectWithPos.toCssProps(geometry),
                geometryMutatorId: "center",
                startingValue: geometry,
                onMove: function onMove(x, y, g) {
                    return setGeometry("center", {
                        x: g.x + x,
                        y: g.y + y,
                        width: g.width,
                        height: g.height
                    });
                }
            }, {
                children: [
                    children,
                    (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
                        corner: "nw",
                        setGeometry: setGeometry,
                        geometry: geometry,
                        boundary: adjustedBoundary
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
                        corner: "ne",
                        setGeometry: setGeometry,
                        geometry: geometry,
                        boundary: adjustedBoundary
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
                        corner: "se",
                        setGeometry: setGeometry,
                        geometry: geometry,
                        boundary: adjustedBoundary
                    }),
                    (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
                        corner: "sw",
                        setGeometry: setGeometry,
                        geometry: geometry,
                        boundary: adjustedBoundary
                    })
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/modules/MimeUtils.ts
        var isEditableImage = function isEditableImage(originalImage) {
            return originalImage.mime.toLowerCase().startsWith("image/");
        };
        /**
 * Returns 'true' if the file can be rendered as an image (via our Image Processing API), but image editing options
 * should not be shown.
 *
 * IMPORTANT:
 * Must be mutually exclusive with 'isEditableImage' (there's several parts of the code that assume this).
 */ var isReadOnlyImage = function isReadOnlyImage(originalImage) {
            var mime = originalImage.mime.toLowerCase();
            return mime.startsWith("application/pdf") || mime.startsWith("video/");
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/modules/PreviewImageUrlCalculator.ts
        // Do not allow SVGs, as these may include scripts, so a user may unwittingly upload an SVG that captures their own session information.
        var nativelySupportedImages = [
            "image/jpeg",
            "image/gif",
            "image/png",
            "image/webp"
        ];
        function calculateImagePreviewUrl(originalImage) {
            if (isImageNativelySupported(originalImage)) {
                return {
                    url: URL.createObjectURL(originalImage.file),
                    external: false,
                    urlForDimensions: undefined
                };
            } // We use WebP to support transparency, e.g. in SVGs.
            // and use fit=max to enlarge SVGs (as they typically come out very small
            // if left in their native dimensions).
            var enlarge = requiresServeSideEnlargement(originalImage);
            var imageUrl = originalImage.fileUrl.replace("/raw/", "/image/");
            var maxDimension = 1000;
            return {
                url: "".concat(imageUrl, "?f=webp&f2=jpg").concat(enlarge ? "&w=".concat(maxDimension, "&h=").concat(maxDimension, "&fit=max") : ""),
                external: true,
                urlForDimensions: enlarge ? "".concat(imageUrl, "?f=jpg") : undefined
            };
        }
        function isImageNativelySupported(originalImage) {
            return nativelySupportedImages.includes(originalImage.mime);
        }
        /**
 * SVGs can come out very small natively, but can obviously be enlarged without affecting quality, so we enlarge them
 * server-side for the previews.
 * @param originalImage
 */ function requiresServeSideEnlargement(originalImage) {
            return isReadOnlyImage(originalImage) || originalImage.mime === "image/svg+xml";
        }
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss
        var Spinner = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/Spinner.scss
        var Spinner_options = {};
        Spinner_options.styleTagTransform = styleTagTransform_default();
        Spinner_options.setAttributes = setAttributesWithoutAttributes_default();
        Spinner_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        Spinner_options.domAPI = styleDomAPI_default();
        Spinner_options.insertStyleElement = insertStyleElement_default();
        var Spinner_update = injectStylesIntoStyleTag_default()(Spinner.default, Spinner_options);
        /* harmony default export */ var editors_Spinner = Spinner.default && Spinner.default.locals ? Spinner.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/Spinner.tsx
        function Spinner_slicedToArray(arr, i) {
            return Spinner_arrayWithHoles(arr) || Spinner_iterableToArrayLimit(arr, i) || Spinner_unsupportedIterableToArray(arr, i) || Spinner_nonIterableRest();
        }
        function Spinner_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Spinner_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return Spinner_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Spinner_arrayLikeToArray(o, minLen);
        }
        function Spinner_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function Spinner_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function Spinner_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var Spinner_Spinner = function Spinner() {
            var _a, _b;
            var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = Spinner_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
            var relativeSize = 0.5;
            var lowestDim = Math.min((_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _a !== void 0 ? _a : 0, (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _b !== void 0 ? _b : 0);
            var lowestDimCss = "".concat(Math.round(lowestDim * relativeSize), "px");
            return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                "class": "spinner__container",
                ref: containerRef
            }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("div", {
                    className: "spinner",
                    style: {
                        width: lowestDimCss,
                        height: lowestDimCss
                    }
                })
            }));
        };
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss
        var ImageEditorLayout = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss
        var ImageEditorLayout_options = {};
        ImageEditorLayout_options.styleTagTransform = styleTagTransform_default();
        ImageEditorLayout_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageEditorLayout_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        ImageEditorLayout_options.domAPI = styleDomAPI_default();
        ImageEditorLayout_options.insertStyleElement = insertStyleElement_default();
        var ImageEditorLayout_update = injectStylesIntoStyleTag_default()(ImageEditorLayout.default, ImageEditorLayout_options);
        /* harmony default export */ var editors_ImageEditorLayout = ImageEditorLayout.default && ImageEditorLayout.default.locals ? ImageEditorLayout.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorLayout.tsx
        function ImageEditorLayout_slicedToArray(arr, i) {
            return ImageEditorLayout_arrayWithHoles(arr) || ImageEditorLayout_iterableToArrayLimit(arr, i) || ImageEditorLayout_unsupportedIterableToArray(arr, i) || ImageEditorLayout_nonIterableRest();
        }
        function ImageEditorLayout_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageEditorLayout_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return ImageEditorLayout_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageEditorLayout_arrayLikeToArray(o, minLen);
        }
        function ImageEditorLayout_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function ImageEditorLayout_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function ImageEditorLayout_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var ImageEditorLayout_ImageEditorLayout = function ImageEditorLayout(_ref) {
            var actions = _ref.actions, originalImage = _ref.originalImage, header = _ref.header, image = _ref.image, modal = _ref.modal;
            var _useState = (0, compat_namespaceObject.useState)(""), _useState2 = ImageEditorLayout_slicedToArray(_useState, 2), imageUrl = _useState2[0], setImageUrl = _useState2[1]; // Used to determine whether to show the image element or the spinner.
            var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = ImageEditorLayout_slicedToArray(_useState3, 2), imageLoaded = _useState4[0], setImageLoaded = _useState4[1]; // Used to track if the image element is 'loaded' per its onload state.
            var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = ImageEditorLayout_slicedToArray(_useState5, 2), imageLoadedReal = _useState6[0], setImageLoadedReal = _useState6[1];
            var _useState7 = (0, compat_namespaceObject.useState)("uploader__image-editor__image-".concat(Math.round(Math.random() * 100000))), _useState8 = ImageEditorLayout_slicedToArray(_useState7, 1), containerId = _useState8[0];
            var _getElementDimensions = getElementDimensionsOnParentResize(imageLoadedReal, [
                imageUrl,
                imageLoaded
            ]), _getElementDimensions2 = ImageEditorLayout_slicedToArray(_getElementDimensions, 3), imgDimensions = _getElementDimensions2[0], imgRef = _getElementDimensions2[1], containerRef = _getElementDimensions2[2]; // When multiple images are uploaded, the same component instance is used, so we need to update the image with an effect:
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                var _calculateImagePrevie = calculateImagePreviewUrl(originalImage), url = _calculateImagePrevie.url, external = _calculateImagePrevie.external;
                setImageUrl(url);
                setImageLoaded(!external); // Delay for displaying a local image is very short, so don't flash the loader to the user.
                setImageLoadedReal(false); // Image will be unloaded to being with, as we're changing its "src" attribute here.
            }, [
                originalImage.fileUrl
            ]);
            return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "uploader__image-editor"
            }, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: external_classnames_default()({
                            "uploader__image-editor__header": header !== undefined,
                            "uploader__image-editor__header--empty-non-modal": header === undefined && !modal
                        })
                    }, {
                        children: header
                    })),
                    (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: "uploader__image-editor__image",
                        ref: containerRef
                    }, {
                        children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                            className: "uploader__image-editor__image-padding"
                        }, {
                            children: [
                                !imageLoaded && (0, jsx_runtime_namespaceObject.jsx)(Spinner_Spinner, {}),
                                (0, jsx_runtime_namespaceObject.jsx)("img", {
                                    id: containerId,
                                    src: imageUrl,
                                    onLoad: function onLoad() {
                                        setImageLoaded(true);
                                        setImageLoadedReal(true);
                                    },
                                    className: "uploader__image-editor__image-inner",
                                    style: imageLoaded ? {} : {
                                        display: "none"
                                    },
                                    ref: imgRef,
                                    draggable: false
                                }),
                                imgDimensions !== undefined && imageLoaded && image !== undefined && image({
                                    imgDimensions: imgDimensions,
                                    imageUrl: imageUrl
                                })
                            ]
                        }))
                    })),
                    (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: "uploader__image-editor__actions uploader__controls uploader__controls--space"
                    }, {
                        children: actions
                    }))
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorHeader.tsx
        var getImageEditorHeader = function getImageEditorHeader(_ref) {
            var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, options = _ref.options;
            var locale = options.locale;
            var multi = options.multi ? {
                imageIndex: imageIndex,
                imageCount: imageCount
            } : undefined;
            return multi === undefined || multi.imageCount === 1 ? undefined : (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                className: "text-secondary"
            }, {
                children: [
                    locale.image,
                    " ",
                    multi.imageIndex + 1,
                    " ",
                    locale.of,
                    " ",
                    multi.imageCount
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/modules/FormUtils.ts
        function FormUtils_slicedToArray(arr, i) {
            return FormUtils_arrayWithHoles(arr) || FormUtils_iterableToArrayLimit(arr, i) || FormUtils_unsupportedIterableToArray(arr, i) || FormUtils_nonIterableRest();
        }
        function FormUtils_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function FormUtils_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return FormUtils_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FormUtils_arrayLikeToArray(o, minLen);
        }
        function FormUtils_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function FormUtils_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function FormUtils_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var transientFlagTimeout = 1500;
        function useTransientFlag() {
            var _useState = (0, compat_namespaceObject.useState)(undefined), _useState2 = FormUtils_slicedToArray(_useState, 2), onTimeout = _useState2[0], setOnTimeout = _useState2[1];
            var flag = onTimeout !== undefined;
            (0, compat_namespaceObject.useEffect)(function() {
                if (onTimeout !== undefined) {
                    var handle = setTimeout(function() {
                        setOnTimeout(undefined);
                        onTimeout();
                    }, transientFlagTimeout);
                    return function() {
                        return clearTimeout(handle);
                    };
                }
                return function() {};
            }, [
                flag
            ]);
            return [
                flag,
                function(onTimeout) {
                    return setOnTimeout(onTimeout !== null && onTimeout !== void 0 ? onTimeout : function() {});
                }
            ];
        }
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/buttons/SubmitButton.tsx
        function SubmitButton_slicedToArray(arr, i) {
            return SubmitButton_arrayWithHoles(arr) || SubmitButton_iterableToArrayLimit(arr, i) || SubmitButton_unsupportedIterableToArray(arr, i) || SubmitButton_nonIterableRest();
        }
        function SubmitButton_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmitButton_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return SubmitButton_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SubmitButton_arrayLikeToArray(o, minLen);
        }
        function SubmitButton_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function SubmitButton_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function SubmitButton_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var SubmitButton = function SubmitButton(_ref) {
            var busyText = _ref.busyText, idleText = _ref.idleText, locale = _ref.locale, onSubmit = _ref.onSubmit, showIcon = _ref.showIcon;
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmitButton_slicedToArray(_useState, 2), isSubmitting = _useState2[0], setIsSubmitting = _useState2[1];
            var _useTransientFlag = useTransientFlag(), _useTransientFlag2 = SubmitButton_slicedToArray(_useTransientFlag, 2), isError = _useTransientFlag2[0], setIsError = _useTransientFlag2[1];
            var isDisabled = isSubmitting || isError;
            var submitAsync = function submitAsync(e) {
                e.preventDefault();
                setIsSubmitting(true);
                onSubmit().then(function() {}, function(e) {
                    console.error(e);
                    setIsError();
                    setIsSubmitting(false);
                });
            };
            return (0, jsx_runtime_namespaceObject.jsxs)("button", Object.assign({
                disabled: isDisabled,
                onClick: submitAsync,
                className: external_classnames_default()("btn btn--primary", {
                    disabled: isDisabled
                })
            }, {
                children: [
                    isSubmitting ? busyText : isError ? locale["error!"] : idleText,
                    " ",
                    showIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                        width: 12,
                        className: "ml-2"
                    })
                ]
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorButtons.tsx
        function ImageEditorButtons_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function ImageEditorButtons_async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        var ImageEditorButtons = function ImageEditorButtons(_ref) {
            var options = _ref.options, onFinish = _ref.onFinish;
            var locale = options.locale;
            return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    (0, jsx_runtime_namespaceObject.jsx)("button", Object.assign({
                        onClick: function onClick() {
                            onFinish(false).then(function() {}, function(e) {
                                console.error("Unable to cancel upload.", e);
                            });
                        },
                        className: "btn"
                    }, {
                        children: locale.cancelInPreviewWindow
                    })),
                    (0, jsx_runtime_namespaceObject.jsx)(SubmitButton, {
                        onSubmit: ImageEditorButtons_async(function() {
                            return onFinish(true);
                        }),
                        locale: locale,
                        idleText: locale["continue"],
                        busyText: locale.pleaseWait,
                        showIcon: false
                    })
                ]
            });
        };
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss
        var ImageCropper = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss");
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageCropper.scss
        var ImageCropper_options = {};
        ImageCropper_options.styleTagTransform = styleTagTransform_default();
        ImageCropper_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageCropper_options.insert = function insertIntoTarget(element) {
            if (typeof document !== "undefined") {
                document.head.appendChild(element);
            }
        };
        ImageCropper_options.domAPI = styleDomAPI_default();
        ImageCropper_options.insertStyleElement = insertStyleElement_default();
        var ImageCropper_update = injectStylesIntoStyleTag_default()(ImageCropper.default, ImageCropper_options);
        /* harmony default export */ var editors_ImageCropper = ImageCropper.default && ImageCropper.default.locals ? ImageCropper.default.locals : undefined;
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageCropper.tsx
        function ImageCropper_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function _empty() {}
        function _invokeIgnored(body) {
            var result = body();
            if (result && result.then) {
                return result.then(_empty);
            }
        }
        function ImageCropper_async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        function ImageCropper_slicedToArray(arr, i) {
            return ImageCropper_arrayWithHoles(arr) || ImageCropper_iterableToArrayLimit(arr, i) || ImageCropper_unsupportedIterableToArray(arr, i) || ImageCropper_nonIterableRest();
        }
        function ImageCropper_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageCropper_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return ImageCropper_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageCropper_arrayLikeToArray(o, minLen);
        }
        function ImageCropper_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function ImageCropper_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function ImageCropper_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function makeCropJson(originalFilePathRelative, geometry, boundary, nativeImageSize) {
            var scale = nativeImageSize.width / boundary.width;
            return {
                inputPath: originalFilePathRelative,
                pipeline: {
                    steps: [
                        {
                            geometry: {
                                offset: {
                                    x: Math.round(geometry.x * scale),
                                    y: Math.round(geometry.y * scale)
                                },
                                size: {
                                    width: Math.round(geometry.width * scale),
                                    height: Math.round(geometry.height * scale),
                                    type: "widthxheight!"
                                }
                            },
                            type: "crop"
                        }
                    ]
                }
            };
        }
        var ImageCropper_ImageCropper = function ImageCropper(props) {
            var options = props.options, originalImage = props.originalImage, upload = props.upload, onFinish = props.onFinish;
            var _useState = (0, compat_namespaceObject.useState)(undefined), _useState2 = ImageCropper_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometry = _useState2[1];
            var submit = ImageCropper_async(function(keep) {
                var _a;
                return _invokeIgnored(function() {
                    if (!keep || geometry === undefined) {
                        onFinish(keep, undefined);
                    } else {
                        return ImageCropper_await(new Promise(function(resolve) {
                            var _a;
                            var img = new Image();
                            var imgInfo = calculateImagePreviewUrl(originalImage);
                            img.onload = function() {
                                resolve({
                                    width: img.naturalWidth,
                                    height: img.naturalHeight
                                });
                            };
                            img.src = (_a = imgInfo.urlForDimensions) !== null && _a !== void 0 ? _a : imgInfo.url;
                        }), function(nativeImageSize) {
                            var originalImageUploadedName = originalImage.filePath.substring(originalImage.filePath.lastIndexOf("/") + 1);
                            var cropJson = makeCropJson(originalImageUploadedName, geometry.geometry, geometry.boundary, nativeImageSize);
                            var blob = new Blob([
                                JSON.stringify(cropJson)
                            ], {
                                type: "application/json"
                            });
                            return ImageCropper_await(upload.uploadFile({
                                name: "".concat((_a = originalImage.originalFileName) !== null && _a !== void 0 ? _a : "image", ".crop"),
                                type: blob.type,
                                size: blob.size,
                                slice: function slice(start, end) {
                                    return blob.slice(start, end);
                                }
                            }, {
                                path: options.editor.images.cropFilePath(originalImage)
                            }), function(editedFile) {
                                onFinish(keep, editedFile);
                            });
                        });
                    }
                });
            });
            return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
                modal: options.layout === "modal",
                header: getImageEditorHeader(props),
                actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
                    options: options,
                    onFinish: submit
                }),
                image: function image(_ref) {
                    var imgDimensions = _ref.imgDimensions, imageUrl = _ref.imageUrl;
                    var _a, _b, _c, _d;
                    return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                        className: "uploader__image-cropper__overlay",
                        style: RectWithPos.toCssProps(imgDimensions)
                    }, {
                        children: (0, jsx_runtime_namespaceObject.jsx)(ResizableSquare_ResizableSquare, Object.assign({
                            boundary: imgDimensions,
                            onResized: setGeometry,
                            ratio: options.editor.images.cropRatio
                        }, {
                            children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                                className: external_classnames_default()("uploader__image-cropper__clip", {
                                    "uploader__image-cropper__clip--circular": options.editor.images.cropShape === "circ"
                                }),
                                style: {
                                    width: (_a = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.width) !== null && _a !== void 0 ? _a : imgDimensions.width,
                                    height: (_b = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.height) !== null && _b !== void 0 ? _b : imgDimensions.height
                                }
                            }, {
                                children: (0, jsx_runtime_namespaceObject.jsx)("img", {
                                    src: imageUrl,
                                    draggable: false,
                                    style: {
                                        width: imgDimensions.width,
                                        height: imgDimensions.height,
                                        transform: "translateX(".concat(((_c = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.x) !== null && _c !== void 0 ? _c : 0) * -1, "px) translateY(").concat(((_d = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.y) !== null && _d !== void 0 ? _d : 0) * -1, "px)")
                                    }
                                })
                            }))
                        }))
                    }));
                },
                originalImage: originalImage
            });
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImagePreview.tsx
        function ImagePreview_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function ImagePreview_async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        var ImagePreview = function ImagePreview(props) {
            var options = props.options, originalImage = props.originalImage, onFinish = props.onFinish;
            var submit = ImagePreview_async(function(keep) {
                onFinish(keep);
                return ImagePreview_await();
            });
            return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
                modal: options.layout === "modal",
                header: getImageEditorHeader(props),
                actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
                    options: options,
                    onFinish: submit
                }),
                originalImage: originalImage
            });
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditor.tsx
        function canCropImage(options, originalImage) {
            return options.editor.images.crop && isEditableImage(originalImage);
        }
        var ImageEditor = function ImageEditor(_ref) {
            var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, originalImage = _ref.originalImage, upload = _ref.upload, onImageEdited = _ref.onImageEdited, options = _ref.options;
            // Currently we only provide a cropper: it would be good to provide rotation in the future, too, and we can switch between
            // them here.
            return canCropImage(options, originalImage) ? (0, jsx_runtime_namespaceObject.jsx)(ImageCropper_ImageCropper, {
                imageCount: imageCount,
                imageIndex: imageIndex,
                options: options,
                onFinish: onImageEdited,
                upload: upload,
                originalImage: originalImage
            }) : (0, jsx_runtime_namespaceObject.jsx)(ImagePreview, {
                imageCount: imageCount,
                imageIndex: imageIndex,
                options: options,
                onFinish: function onFinish(keep) {
                    return onImageEdited(keep, undefined);
                },
                originalImage: originalImage
            });
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/modules/UseImageList.ts
        function UseImageList_toConsumableArray(arr) {
            return UseImageList_arrayWithoutHoles(arr) || UseImageList_iterableToArray(arr) || UseImageList_unsupportedIterableToArray(arr) || UseImageList_nonIterableSpread();
        }
        function UseImageList_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function UseImageList_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return UseImageList_arrayLikeToArray(arr);
        }
        function UseImageList_slicedToArray(arr, i) {
            return UseImageList_arrayWithHoles(arr) || UseImageList_iterableToArrayLimit(arr, i) || UseImageList_unsupportedIterableToArray(arr, i) || UseImageList_nonIterableRest();
        }
        function UseImageList_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UseImageList_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseImageList_arrayLikeToArray(o, minLen);
        }
        function UseImageList_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UseImageList_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UseImageList_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function useImageList(images) {
            var _useState = (0, compat_namespaceObject.useState)(images[0]), _useState2 = UseImageList_slicedToArray(_useState, 2), currentImage = _useState2[0], setCurrentImage = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = UseImageList_slicedToArray(_useState3, 2), imageIndex = _useState4[0], setImageIndex = _useState4[1];
            var _useState5 = (0, compat_namespaceObject.useState)(images.length), _useState6 = UseImageList_slicedToArray(_useState5, 2), imageCount = _useState6[0], setImageCount = _useState6[1];
            var editingFiles = images.map(function(x) {
                return x.uploadedFile.filePath;
            });
            var currentFile = currentImage.uploadedFile.filePath; // Prevents image being swapped-out mid-edit if an upload that was started _before_ this image finishes _after_ this
            // image has uploaded.
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                var hasFinishedEditing = !editingFiles.includes(currentFile);
                if (hasFinishedEditing) {
                    setCurrentImage(images[0]);
                    setImageIndex(function(i) {
                        return i + 1;
                    });
                }
                setImageCount(imageIndex + images.length);
            }, [
                imageIndex,
                currentFile
            ].concat(UseImageList_toConsumableArray(editingFiles)));
            return {
                currentFile: currentFile,
                imageCount: imageCount,
                imageIndex: imageIndex,
                currentImage: currentImage
            };
        }
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderImageListEditor.tsx
        var UploaderImageListEditor = function UploaderImageListEditor(_ref) {
            var images = _ref.images, _onImageEdited = _ref.onImageEdited, upload = _ref.upload, options = _ref.options;
            var _useImageList = useImageList(images), currentFile = _useImageList.currentFile, imageCount = _useImageList.imageCount, imageIndex = _useImageList.imageIndex, currentImage = _useImageList.currentImage;
            return (0, jsx_runtime_namespaceObject.jsx)(ImageEditor, {
                options: options,
                imageCount: imageCount,
                imageIndex: imageIndex,
                originalImage: currentImage.uploadedFile,
                onImageEdited: function onImageEdited(keep, editedFile) {
                    return _onImageEdited(keep, editedFile, currentImage.fileIndex);
                },
                upload: upload
            }, currentFile);
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/screens/modules/UseShowImageEditor.ts
        function UseShowImageEditor_slicedToArray(arr, i) {
            return UseShowImageEditor_arrayWithHoles(arr) || UseShowImageEditor_iterableToArrayLimit(arr, i) || UseShowImageEditor_unsupportedIterableToArray(arr, i) || UseShowImageEditor_nonIterableRest();
        }
        function UseShowImageEditor_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseShowImageEditor_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UseShowImageEditor_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseShowImageEditor_arrayLikeToArray(o, minLen);
        }
        function UseShowImageEditor_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UseShowImageEditor_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UseShowImageEditor_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function useShowImageEditor(pendingImages, onFileUploadDelay) {
            var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseShowImageEditor_slicedToArray(_useState, 2), showImageScreen = _useState2[0], setShowImageScreen = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(null), _useState4 = UseShowImageEditor_slicedToArray(_useState3, 2), showImageScreenTimeout = _useState4[0], setShowImageScreenTimeout = _useState4[1];
            (0, compat_namespaceObject.useEffect)(function() {
                if (pendingImages.length > 0) {
                    var timeout = setTimeout(function() {
                        setShowImageScreen(true);
                    }, onFileUploadDelay);
                    setShowImageScreenTimeout(timeout);
                    return function() {
                        return clearTimeout(timeout);
                    };
                }
                if (showImageScreen) {
                    setShowImageScreen(false);
                }
                if (showImageScreenTimeout !== null) {
                    clearTimeout(showImageScreenTimeout);
                    setShowImageScreenTimeout(null);
                }
            }, [
                pendingImages.length,
                showImageScreen
            ]);
            return showImageScreen;
        }
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidget.tsx
        function UploadWidget_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function _catch(body, recover) {
            try {
                var result = body();
            } catch (e) {
                return recover(e);
            }
            if (result && result.then) {
                return result.then(void 0, recover);
            }
            return result;
        }
        function _continue(value, then) {
            return value && value.then ? value.then(then) : then(value);
        }
        function UploadWidget_async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function UploadWidget_toConsumableArray(arr) {
            return UploadWidget_arrayWithoutHoles(arr) || UploadWidget_iterableToArray(arr) || UploadWidget_unsupportedIterableToArray(arr) || UploadWidget_nonIterableSpread();
        }
        function UploadWidget_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function UploadWidget_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return UploadWidget_arrayLikeToArray(arr);
        }
        function UploadWidget_slicedToArray(arr, i) {
            return UploadWidget_arrayWithHoles(arr) || UploadWidget_iterableToArrayLimit(arr, i) || UploadWidget_unsupportedIterableToArray(arr, i) || UploadWidget_nonIterableRest();
        }
        function UploadWidget_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UploadWidget_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadWidget_arrayLikeToArray(o, minLen);
        }
        function UploadWidget_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UploadWidget_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function UploadWidget_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var UploadWidget_rest = undefined && undefined.__rest || function(s, e) {
            var t = {};
            for(var p in s){
                if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            }
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        };
        function isValidMimeType(allowedMimeTypes, actualMimeType) {
            if (allowedMimeTypes === undefined || allowedMimeTypes.length === 0) {
                return true;
            }
            var normalize = function normalize(x) {
                return x.trim().toLowerCase();
            };
            var actualNormalized = normalize(actualMimeType);
            return allowedMimeTypes.some(function(x) {
                var requiredNormalized = normalize(x);
                return requiredNormalized === actualNormalized || requiredNormalized.endsWith("*") && actualNormalized.startsWith(requiredNormalized.substring(0, requiredNormalized.length - 1));
            });
        }
        var UploadWidget = function UploadWidget(_ref) {
            var resolve = _ref.resolve, options = _ref.options, upload = _ref.upload;
            var _a;
            var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = UploadWidget_slicedToArray(_useState, 2), setNextSparseFileIndex = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(true), _useState4 = UploadWidget_slicedToArray(_useState3, 2), isInitialUpdate = _useState4[0], setIsInitialUpdate = _useState4[1];
            var _useState5 = (0, compat_namespaceObject.useState)({}), _useState6 = UploadWidget_slicedToArray(_useState5, 2), submittedFiles = _useState6[0], setSubmittedFiles = _useState6[1];
            var submittedFileList = Object.values(submittedFiles).filter(isDefined);
            var uploadedFiles = submittedFileList.filter(isUploadedFile);
            var onFileUploadDelay = progressWheelDelay + (progressWheelVanish - 100); // Allows the animation to finish before closing modal. We add some time to allow the wheel to fade out.
            var multi = options.multi, tags = options.tags, metadata = options.metadata, path = options.path;
            var uploadWidgetResult = uploadedFiles.map(function(x) {
                return UploadWidgetResult.from(upload, x.uploadedFile, x.editedFile);
            });
            var canEditImages = options.editor.images.crop;
            var canPreviewImages = options.editor.images.preview;
            var pendingImages = uploadedFiles.filter(function(x) {
                return !x.isSubmitted && ((canEditImages || canPreviewImages) && isEditableImage(x.uploadedFile) || canPreviewImages && isReadOnlyImage(x.uploadedFile));
            });
            var showImageEditor = useShowImageEditor(pendingImages, onFileUploadDelay);
            var onImageSubmitted = function onImageSubmitted(keep, editedFile, sparseFileIndex) {
                if (!keep) {
                    removeSubmittedFile(sparseFileIndex);
                } else {
                    updateFile(sparseFileIndex, "uploaded", function(file) {
                        return Object.assign(Object.assign({}, file), {
                            editedFile: editedFile,
                            isSubmitted: true
                        });
                    });
                }
            };
            var finalize = function finalize() {
                resolve(uploadWidgetResult);
            }; // We want to use a 'layout effect' since if the cropper has just been closed in 'single file mode', we want to
            // immediately resolve the uploader, rather than momentarily showing the main screen.
            (0, compat_namespaceObject.useLayoutEffect)(function() {
                if (pendingImages.length > 0) {
                    // Do not raise update events until after the images have finished editing.
                    return;
                }
                if (isInitialUpdate) {
                    setIsInitialUpdate(false);
                    return;
                }
                options.onUpdate(uploadWidgetResult); // For inline layouts, if in single-file mode, we never resolve (there is no terminal state): we just allow the
                // user to add/remove their file, and the caller should instead rely on the 'onUpdate' method above.
                var shouldCloseModalImmediatelyAfterUpload = !multi && uploadedFiles.length > 0 && !options.showFinishButton && options.layout === "modal";
                if (shouldCloseModalImmediatelyAfterUpload) {
                    // Just in case the user dragged-and-dropped multiple files.
                    var firstUploadedFile = uploadWidgetResult.slice(0, 1);
                    var doResolve = function doResolve() {
                        return resolve(firstUploadedFile);
                    };
                    var previousScreenWasEditor = uploadedFiles[0].isSubmitted;
                    if (previousScreenWasEditor) {
                        doResolve();
                    } else {
                        var timeout = setTimeout(doResolve, onFileUploadDelay);
                        return function() {
                            return clearTimeout(timeout);
                        };
                    }
                }
            }, [
                pendingImages.length
            ].concat(UploadWidget_toConsumableArray(uploadedFiles.map(function(x) {
                return x.uploadedFile.fileUrl;
            }))));
            var removeSubmittedFile = function removeSubmittedFile(fileIndex) {
                setSubmittedFiles(function(x) {
                    var _a = x, _b = fileIndex, removed = _a[_b], rest = UploadWidget_rest(_a, [
                        _typeof(_b) === "symbol" ? _b : _b + ""
                    ]);
                    if ((removed === null || removed === void 0 ? void 0 : removed.type) === "uploading") {
                        removed.cancel();
                    }
                    return rest;
                });
            };
            var setSubmittedFile = function setSubmittedFile(fileIndex, file) {
                setSubmittedFiles(function(x) {
                    return Object.assign(Object.assign({}, x), _defineProperty({}, fileIndex, file));
                });
            };
            var updateFile = function updateFile(fileIndex, fileType, file) {
                setSubmittedFiles(function(x) {
                    var oldFile = x[fileIndex];
                    if (oldFile === undefined || oldFile.type !== fileType) {
                        return x;
                    }
                    return Object.assign(Object.assign({}, x), _defineProperty({}, fileIndex, file(oldFile)));
                });
            };
            var doUpload = UploadWidget_async(function(file, fileIndex) {
                var _a, _b;
                var raiseError = function raiseError(error) {
                    setSubmittedFile(fileIndex, {
                        file: file,
                        fileIndex: fileIndex,
                        error: error,
                        type: "error"
                    });
                    throw error;
                };
                var maxFileSizeBytes = options.maxFileSizeBytes, mimeTypes = options.mimeTypes, onPreUpload = options.onPreUpload;
                if (maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes) {
                    raiseError(new Error("".concat(options.locale.maxSize, " ").concat(humanFileSize(maxFileSizeBytes))));
                }
                if (!isValidMimeType(mimeTypes, file.type)) {
                    raiseError(new Error(options.locale.unsupportedFileType));
                }
                setSubmittedFile(fileIndex, {
                    file: file,
                    fileIndex: fileIndex,
                    type: "preprocessing"
                });
                var preUploadResult;
                return _continue(_catch(function() {
                    return UploadWidget_await(onPreUpload(file), function(_onPreUpload) {
                        preUploadResult = (_a = _onPreUpload) !== null && _a !== void 0 ? _a : undefined;
                    }); // incase the user returns 'null' instead of undefined.
                }, function(e) {
                    preUploadResult = {
                        errorMessage: options.locale.customValidationFailed
                    };
                    console.error("[uploader] onPreUpload function raised an error.", e);
                }), function() {
                    if ((preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.errorMessage) !== undefined) {
                        raiseError(new Error(preUploadResult.errorMessage));
                    }
                    var fileToUpload = (_b = preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.transformedFile) !== null && _b !== void 0 ? _b : file;
                    return UploadWidget_await(upload.uploadFile(fileToUpload, {
                        path: path,
                        metadata: metadata,
                        tags: tags,
                        onBegin: function onBegin(_ref2) {
                            var cancel = _ref2.cancel;
                            return setSubmittedFile(fileIndex, {
                                // IMPORTANT: use 'setSubmittedFile' as file may already exist in collection as a "validating" file.
                                file: fileToUpload,
                                fileIndex: fileIndex,
                                cancel: cancel,
                                progress: 0,
                                type: "uploading"
                            });
                        },
                        onProgress: function onProgress(_ref3) {
                            var bytesSent = _ref3.bytesSent, bytesTotal = _ref3.bytesTotal;
                            return updateFile(fileIndex, "uploading", function(uploadingFile) {
                                return Object.assign(Object.assign({}, uploadingFile), {
                                    progress: bytesSent / bytesTotal
                                });
                            });
                        }
                    }));
                });
            });
            var addFiles = function addFiles(files) {
                return setNextSparseFileIndex(function(nextSparseFileIndex) {
                    var maxFiles = multi ? options.maxFileCount : 1;
                    var filesToTake = maxFiles === undefined ? files.length : Math.min(files.length, maxFiles - submittedFileList.length); // Ignores subsequent drag-and-drop events for single file uploaders.
                    if (filesToTake <= 0) {
                        return nextSparseFileIndex;
                    }
                    files.slice(0, filesToTake).forEach(function(file, i) {
                        var fileIndex = nextSparseFileIndex + i;
                        doUpload(file, fileIndex).then(function(uploadedFile) {
                            updateFile(fileIndex, "uploading", function() {
                                return {
                                    fileIndex: fileIndex,
                                    uploadedFile: uploadedFile,
                                    editedFile: undefined,
                                    isSubmitted: false,
                                    type: "uploaded"
                                };
                            });
                        }, function(error) {
                            updateFile(fileIndex, "uploading", function(uploadingFile) {
                                return {
                                    fileIndex: fileIndex,
                                    error: error,
                                    file: uploadingFile.file,
                                    type: "error"
                                };
                            });
                        });
                    });
                    return nextSparseFileIndex + files.length;
                });
            };
            var _b = useDragDrop(addFiles), isDragging = _b.isDragging, rootProps = UploadWidget_rest(_b, [
                "isDragging"
            ]);
            var mimeTypes = (_a = options.mimeTypes) !== null && _a !== void 0 ? _a : [];
            var isImageUploader = mimeTypes.length > 0 && mimeTypes.every(function(x) {
                return x.trim().toLowerCase().startsWith("image/");
            });
            return (0, jsx_runtime_namespaceObject.jsx)(WidgetBase_WidgetBase, Object.assign({
                htmlProps: rootProps,
                isDraggable: true,
                isDragging: isDragging,
                layout: options.layout,
                multi: options.multi
            }, {
                children: submittedFileList.length === 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderWelcomeScreen, {
                    options: options,
                    addFiles: addFiles,
                    isImageUploader: isImageUploader
                }) : showImageEditor && pendingImages.length > 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderImageListEditor, {
                    images: pendingImages,
                    onImageEdited: onImageSubmitted,
                    upload: upload,
                    options: options
                }) : (0, jsx_runtime_namespaceObject.jsx)(UploaderMainScreen_UploaderMainScreen, {
                    options: options,
                    addFiles: addFiles,
                    submittedFiles: submittedFileList,
                    uploadedFiles: uploadedFiles,
                    remove: removeSubmittedFile,
                    finalize: finalize,
                    isImageUploader: isImageUploader
                })
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidgetContainer.tsx
        // Put this first, so other components' stylesheets can override the default styles.
        var UploadWidgetContainer_UploadWidgetContainer = function UploadWidgetContainer(_ref) {
            var upload = _ref.upload, resolve = _ref.resolve, reject = _ref.reject, options = _ref.options;
            return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
                children: upload.type === "error" ? (0, jsx_runtime_namespaceObject.jsx)(ConfigError, {
                    error: upload.value,
                    layout: options.layout
                }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidget, {
                    resolve: resolve,
                    reject: reject,
                    options: options,
                    upload: upload.value
                })
            });
        };
        ; // CONCATENATED MODULE: ./src/components/modal/ModalContainer.tsx
        function ModalContainer_slicedToArray(arr, i) {
            return ModalContainer_arrayWithHoles(arr) || ModalContainer_iterableToArrayLimit(arr, i) || ModalContainer_unsupportedIterableToArray(arr, i) || ModalContainer_nonIterableRest();
        }
        function ModalContainer_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ModalContainer_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return ModalContainer_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ModalContainer_arrayLikeToArray(o, minLen);
        }
        function ModalContainer_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function ModalContainer_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function ModalContainer_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var ModalContainer = function ModalContainer(_ref) {
            var widgetProps = _ref.widgetProps;
            // NEVER call without resolving or rejecting the promise, as will cause a hanging promise.
            var _useState = (0, compat_namespaceObject.useState)(true), _useState2 = ModalContainer_slicedToArray(_useState, 2), isOpen = _useState2[0], setIsOpen = _useState2[1];
            var resolve = function resolve(files) {
                widgetProps.resolve(files);
                setIsOpen(false);
            };
            var reject = function reject(error) {
                widgetProps.reject(error);
                setIsOpen(false);
            };
            if (!isOpen) {
                return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
            }
            return (0, jsx_runtime_namespaceObject.jsx)(Modal_Modal, Object.assign({
                closeModal: function closeModal() {
                    return resolve([]);
                }
            }, {
                children: (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetProps, {
                    resolve: resolve,
                    reject: reject
                }))
            }));
        };
        ; // CONCATENATED MODULE: ./src/components/RootContainer.tsx
        function RootContainer_slicedToArray(arr, i) {
            return RootContainer_arrayWithHoles(arr) || RootContainer_iterableToArrayLimit(arr, i) || RootContainer_unsupportedIterableToArray(arr, i) || RootContainer_nonIterableRest();
        }
        function RootContainer_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function RootContainer_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return RootContainer_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RootContainer_arrayLikeToArray(o, minLen);
        }
        function RootContainer_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function RootContainer_iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function RootContainer_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var RootContainer = function RootContainer(_ref) {
            var widgetProps = _ref.widgetProps;
            var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = RootContainer_slicedToArray(_useState, 2), refreshKey = _useState2[0], setRefreshKey = _useState2[1];
            var _useState3 = (0, compat_namespaceObject.useState)(widgetProps.options), _useState4 = RootContainer_slicedToArray(_useState3, 2), options = _useState4[0], setOptions = _useState4[1];
            var widgetPropsUpdated = Object.assign(Object.assign({}, widgetProps), {
                options: options
            });
            (0, compat_namespaceObject.useEffect)(function() {
                options.onInit({
                    close: function close() {
                        widgetProps.resolve([]);
                    },
                    reset: function reset() {
                        setRefreshKey(function(x) {
                            return x + 1;
                        });
                    },
                    updateConfig: function updateConfig(newOptionsPartial) {
                        setOptions(UploadWidgetConfigRequired.from(newOptionsPartial));
                    }
                });
            }, []);
            return (0, jsx_runtime_namespaceObject.jsx)(external_preact_namespaceObject.Fragment, {
                children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                    className: external_classnames_default()("uploader", {
                        "uploader--with-modal": options.layout === "modal"
                    }),
                    style: {
                        "--error-color": options.styles.colors.error,
                        "--primary-color": options.styles.colors.primary,
                        "--primary-active-color": options.styles.colors.active,
                        "--shade-100": options.styles.colors.shade100,
                        "--shade-200": options.styles.colors.shade200,
                        "--shade-300": options.styles.colors.shade300,
                        "--shade-400": options.styles.colors.shade400,
                        "--shade-500": options.styles.colors.shade500,
                        "--shade-600": options.styles.colors.shade600,
                        "--shade-700": options.styles.colors.shade700,
                        "--shade-800": options.styles.colors.shade800,
                        "--shade-900": options.styles.colors.shade900,
                        "--base-font-family": options.styles.fontFamilies.base,
                        "--base-font-size": "".concat(options.styles.fontSizes.base, "px")
                    }
                }, {
                    children: options.layout === "modal" ? (0, jsx_runtime_namespaceObject.jsx)(ModalContainer, {
                        widgetProps: widgetPropsUpdated
                    }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetPropsUpdated))
                }))
            }, refreshKey);
        };
        ; // CONCATENATED MODULE: ./src/modules/UploadManager.ts
        function UploadManager_toConsumableArray(arr) {
            return UploadManager_arrayWithoutHoles(arr) || UploadManager_iterableToArray(arr) || UploadManager_unsupportedIterableToArray(arr) || UploadManager_nonIterableSpread();
        }
        function UploadManager_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadManager_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return UploadManager_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadManager_arrayLikeToArray(o, minLen);
        }
        function UploadManager_iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function UploadManager_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return UploadManager_arrayLikeToArray(arr);
        }
        function UploadManager_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function UploadManager_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function _rethrow(thrown, value) {
            if (thrown) throw value;
            return value;
        }
        function _finallyRethrows(body, finalizer) {
            try {
                var result = body();
            } catch (e) {
                return finalizer(true, e);
            }
            if (result && result.then) {
                return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
            }
            return finalizer(false, result);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        /**
 * Allows all file uploads to be cancelled (e.g. when widget closes).
 */ var UploadManager = /*#__PURE__*/ function() {
            function UploadManager(instance) {
                _classCallCheck(this, UploadManager);
                this.instance = instance;
                this.uploadCancellations = [];
            }
            _createClass(UploadManager, [
                {
                    key: "cancelAll",
                    value: function cancelAll() {
                        this.uploadCancellations.forEach(function(cancel) {
                            return cancel();
                        });
                    }
                },
                {
                    key: "beginAuthSession",
                    value: function beginAuthSession(authUrl, authHeaders) {
                        try {
                            var _this2 = this;
                            return UploadManager_await(_this2.instance.beginAuthSession(authUrl, authHeaders));
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    }
                },
                {
                    key: "endAuthSession",
                    value: function endAuthSession() {
                        try {
                            var _this4 = this;
                            return UploadManager_await(_this4.instance.endAuthSession());
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    }
                },
                {
                    key: "uploadFile",
                    value: function uploadFile(file, params) {
                        try {
                            var _this6 = this;
                            var cancellation;
                            return _finallyRethrows(function() {
                                return UploadManager_await(_this6.instance.uploadFile(file, Object.assign(Object.assign({}, params), {
                                    onBegin: function onBegin(onBeginParams) {
                                        cancellation = onBeginParams.cancel;
                                        _this6.uploadCancellations = [].concat(UploadManager_toConsumableArray(_this6.uploadCancellations), [
                                            cancellation
                                        ]);
                                        if ((params === null || params === void 0 ? void 0 : params.onBegin) !== undefined) {
                                            params.onBegin(onBeginParams);
                                        }
                                    }
                                })));
                            }, function(_wasThrown, _result) {
                                _this6.uploadCancellations = _this6.uploadCancellations.filter(function(x) {
                                    return x !== cancellation;
                                });
                                return _rethrow(_wasThrown, _result);
                            });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    }
                },
                {
                    key: "url",
                    value: function url(filePath, slugOrParams) {
                        return this.instance.url(filePath, slugOrParams);
                    }
                }
            ]);
            return UploadManager;
        }();
        ; // CONCATENATED MODULE: ./src/Uploader.tsx
        function Uploader_await(value, then, direct) {
            if (direct) {
                return then ? then(value) : value;
            }
            if (!value || !value.then) {
                value = Promise.resolve(value);
            }
            return then ? value.then(then) : value;
        }
        function _call(body, then, direct) {
            if (direct) {
                return then ? then(body()) : body();
            }
            try {
                var result = Promise.resolve(body());
                return then ? result.then(then) : result;
            } catch (e) {
                return Promise.reject(e);
            }
        }
        function Uploader_async(f) {
            return function() {
                for(var args = [], i = 0; i < arguments.length; i++){
                    args[i] = arguments[i];
                }
                try {
                    return Promise.resolve(f.apply(this, args));
                } catch (e) {
                    return Promise.reject(e);
                }
            };
        }
        function Uploader(uploadOrConfig) {
            // ----------------
            // READONLY MEMBERS
            // ----------------
            var uploadMaybe; // ----------------
            // CONSTRUCTOR
            // ----------------
            if (UploadInstanceMaybe.isUploadInstance(uploadOrConfig)) {
                uploadMaybe = {
                    type: "upload",
                    value: uploadOrConfig
                };
            } else {
                try {
                    uploadMaybe = {
                        type: "upload",
                        value: (0, external_upload_js_namespaceObject.Upload)(uploadOrConfig)
                    };
                } catch (e) {
                    uploadMaybe = {
                        type: "error",
                        value: e
                    };
                }
            } // ----------------
            // PUBLIC METHODS
            // ----------------
            var open = Uploader_async(function() {
                var optionsMaybe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _a;
                var options = UploadWidgetConfigRequired.from(optionsMaybe); // Important: wait for body first, before using 'querySelector' below.
                return _call(getBody, function(body) {
                    var container = options.container !== undefined ? typeof options.container === "string" ? (_a = document.querySelector(options.container)) !== null && _a !== void 0 ? _a : undefined : options.container : undefined;
                    var widget = document.createElement("div");
                    (container !== null && container !== void 0 ? container : body).appendChild(widget); // Do not refer to 'options' in this file (where possible): move to 'RootContainer' so that it can handle prop updates.
                    widget.className = "uploader__root";
                    var uploadManager;
                    var upload = uploadMaybe;
                    if (uploadMaybe.type === "upload") {
                        uploadManager = new UploadManager(uploadMaybe.value);
                        upload = {
                            type: "upload",
                            value: uploadManager
                        };
                    }
                    return Uploader_await(new Promise(function(resolve, reject) {
                        var props = {
                            upload: upload,
                            resolve: resolve,
                            reject: reject,
                            options: options
                        };
                        (0, external_preact_namespaceObject.render)((0, jsx_runtime_namespaceObject.jsx)(RootContainer, {
                            widgetProps: props
                        }), widget);
                    }), function(uploadedFiles) {
                        widget.remove();
                        uploadManager === null || uploadManager === void 0 ? void 0 : uploadManager.cancelAll(); // Stops in-progress uploads when the widget is closed.
                        return uploadedFiles;
                    });
                });
            }); // ----------------
            // PRIVATE METHODS
            // ----------------
            /**
   * Required when the 'uploader.open()' method is called from within '<head>'.
   */ var getBody = Uploader_async(function() {
                return new Promise(function(resolve) {
                    var attempt = function attempt() {
                        var _a;
                        var bodyMaybe = (_a = document.body) !== null && _a !== void 0 ? _a : undefined;
                        if (bodyMaybe !== undefined) {
                            resolve(bodyMaybe);
                        }
                        setTimeout(attempt, 100);
                    };
                    attempt();
                });
            }); // If this isn't a valid upload instance, then the user will experience errors when attempting to use it as one, but
            // they'll also be aware there's a problem as we'll render one on screen.
            var upload = uploadMaybe.type === "upload" ? uploadMaybe.value : {};
            return Object.assign(Object.assign({}, upload), {
                open: open
            });
        }
        ; // CONCATENATED MODULE: ./src/index.ts
    }();
    module.exports = __webpack_exports__;
/******/ })();
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/lodash.isequal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "object") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "object") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView'), Map = getNative(root, 'Map'), Promise = getNative(root, 'Promise'), Set = getNative(root, 'Set'), WeakMap = getNative(root, 'WeakMap'), nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else {
        data[index][1] = value;
    }
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length){
        this.add(values[index]);
    }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
            return false;
        }
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
        return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
            if (compared) {
                continue;
            }
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                }
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
            }
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
            }
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
                return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
    }
    return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
        return false;
    }
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
        }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
        return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
        }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) {
    getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
        if (ctorString) {
            switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = isEqual;
}),
"[project]/Desktop/dharwin_boilerplate/node_modules/react-uploader/dist/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/******/ (function() {
    /******/ "use strict";
    /******/ // The require scope
    /******/ var __webpack_require__ = {};
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function() {
                return module1['default'];
            } : /******/ function() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, {
                a: getter
            });
            /******/ return getter;
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition){
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                /******/ }
            /******/ }
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ var __webpack_exports__ = {};
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
        "UploadButton": function() {
            return /* reexport */ UploadButton;
        },
        "UploadDropzone": function() {
            return /* reexport */ UploadDropzone;
        }
    });
    ; // CONCATENATED MODULE: external "react"
    var external_react_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
    ;
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
    ; // CONCATENATED MODULE: external "lodash.isequal"
    var external_lodash_isequal_namespaceObject = __turbopack_context__.r("[project]/Desktop/dharwin_boilerplate/node_modules/lodash.isequal/index.js [app-client] (ecmascript)");
    ;
    var external_lodash_isequal_default = /*#__PURE__*/ __webpack_require__.n(external_lodash_isequal_namespaceObject);
    ; // CONCATENATED MODULE: ./src/hooks/UseObjectDep.ts
    function useObjectDep(value) {
        var _a;
        var ref = (0, external_react_namespaceObject.useRef)();
        if (!external_lodash_isequal_default()(value, ref.current)) {
            ref.current = value;
        }
        return (_a = ref.current) !== null && _a !== void 0 ? _a : value;
    }
    ; // CONCATENATED MODULE: ./src/hooks/UseAutoUpdatingOptions.ts
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function useAutoUpdatingOptions(optionsMaybe) {
        var _useState = (0, external_react_namespaceObject.useState)(undefined), _useState2 = _slicedToArray(_useState, 2), methods = _useState2[0], setMethods = _useState2[1];
        var optionsDep = useObjectDep(optionsMaybe !== null && optionsMaybe !== void 0 ? optionsMaybe : {});
        (0, external_react_namespaceObject.useEffect)(function() {
            if (methods !== undefined) {
                methods.updateConfig(optionsMaybe !== null && optionsMaybe !== void 0 ? optionsMaybe : {});
            }
        }, [
            optionsDep,
            methods
        ]);
        return Object.assign(Object.assign({}, optionsMaybe), {
            onInit: function onInit(m) {
                if ((optionsMaybe === null || optionsMaybe === void 0 ? void 0 : optionsMaybe.onInit) !== undefined) {
                    optionsMaybe.onInit(m);
                }
                setMethods(m);
            }
        });
    }
    ; // CONCATENATED MODULE: ./src/UploadButton.tsx
    var UploadButton = function UploadButton(_ref) {
        var uploader = _ref.uploader, options = _ref.options, onComplete = _ref.onComplete, children = _ref.children;
        var autoUpdatingOptions = useAutoUpdatingOptions(options);
        var onClick = function onClick(e) {
            e.preventDefault();
            uploader.open(autoUpdatingOptions).then(function(files) {
                if (onComplete !== undefined) {
                    onComplete(files);
                }
            }, function(error) {
                return console.error("Uploader error.", error);
            });
        };
        return children({
            onClick: onClick
        });
    };
    ; // CONCATENATED MODULE: ./src/hooks/UseElementRef.ts
    function UseElementRef_slicedToArray(arr, i) {
        return UseElementRef_arrayWithHoles(arr) || UseElementRef_iterableToArrayLimit(arr, i) || UseElementRef_unsupportedIterableToArray(arr, i) || UseElementRef_nonIterableRest();
    }
    function UseElementRef_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function UseElementRef_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return UseElementRef_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseElementRef_arrayLikeToArray(o, minLen);
    }
    function UseElementRef_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function UseElementRef_iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function UseElementRef_arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    /**
 * Unlike 'useRef', 'useElementRef' will trigger a rerender when the reference is updated.
 */ function useElementRef() {
        var _useState = (0, external_react_namespaceObject.useState)(undefined), _useState2 = UseElementRef_slicedToArray(_useState, 2), element = _useState2[0], setElement = _useState2[1];
        var elementRef = (0, external_react_namespaceObject.useCallback)(function(e) {
            setElement(e !== null && e !== void 0 ? e : undefined);
        }, []);
        return [
            element,
            elementRef
        ];
    }
    ; // CONCATENATED MODULE: ./src/UploadDropzone.tsx
    function UploadDropzone_slicedToArray(arr, i) {
        return UploadDropzone_arrayWithHoles(arr) || UploadDropzone_iterableToArrayLimit(arr, i) || UploadDropzone_unsupportedIterableToArray(arr, i) || UploadDropzone_nonIterableRest();
    }
    function UploadDropzone_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function UploadDropzone_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return UploadDropzone_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadDropzone_arrayLikeToArray(o, minLen);
    }
    function UploadDropzone_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function UploadDropzone_iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function UploadDropzone_arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    var UploadDropzone = function UploadDropzone(_ref) {
        var uploader = _ref.uploader, options = _ref.options, onComplete = _ref.onComplete, onUpdate = _ref.onUpdate, minWidth = _ref.minWidth, width = _ref.width, height = _ref.height, className = _ref.className;
        var _useElementRef = useElementRef(), _useElementRef2 = UploadDropzone_slicedToArray(_useElementRef, 2), element = _useElementRef2[0], elementRef = _useElementRef2[1];
        var classNameProp = className === undefined ? {} : {
            className: className
        };
        var onUpdateParams = onUpdate === undefined ? {} : {
            onUpdate: onUpdate
        };
        var autoUpdatingOptions = useAutoUpdatingOptions(Object.assign(Object.assign(Object.assign({}, options), onUpdateParams), {
            layout: "inline",
            container: element
        })); // Prevent React warning, while keeping rendering synchronous in the browser.
        if (typeof window !== "undefined") {
            (0, external_react_namespaceObject.useLayoutEffect)(function() {
                if (element !== undefined) {
                    uploader.open(autoUpdatingOptions).then(function(files) {
                        if (onComplete !== undefined) {
                            onComplete(files);
                        }
                    }, function(error) {
                        return console.error("Uploader error.", error);
                    });
                }
            }, [
                element
            ]);
        }
        return /*#__PURE__*/ external_react_default().createElement("div", Object.assign({}, classNameProp, {
            ref: elementRef,
            style: {
                position: "relative",
                width: "100%",
                minWidth: minWidth !== null && minWidth !== void 0 ? minWidth : "280px",
                maxWidth: width !== null && width !== void 0 ? width : "600px",
                height: height !== null && height !== void 0 ? height : "375px"
            }
        }));
    };
    ; // CONCATENATED MODULE: ./src/index.ts
    module.exports = __webpack_exports__;
/******/ })();
}),
]);

//# sourceMappingURL=39735_736b5ab8._.js.map