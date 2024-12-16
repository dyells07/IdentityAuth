(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/utils', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].utils = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var Trigger = (function () {
        function Trigger(open, close) {
            this.open = open;
            this.close = close || open;
        }
        /**
         * @return {?}
         */
        Trigger.prototype.isManual = /**
         * @return {?}
         */
            function () {
                return this.open === 'manual' || this.close === 'manual';
            };
        return Trigger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
    };
    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */
    function parseTriggers(triggers, aliases) {
        if (aliases === void 0) {
            aliases = DEFAULT_ALIASES;
        }
        var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
        if (trimmedTriggers.length === 0) {
            return [];
        }
        var /** @type {?} */ parsedTriggers = trimmedTriggers
            .split(/\s+/)
            .map(function (trigger) { return trigger.split(':'); })
            .map(function (triggerPair) {
            var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
            return new Trigger(alias[0], alias[1]);
        });
        var /** @type {?} */ manualTriggers = parsedTriggers.filter(function (triggerPair) {
            return triggerPair.isManual();
        });
        if (manualTriggers.length > 1) {
            throw new Error('Triggers parse error: only one manual trigger is allowed');
        }
        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
            throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }
        return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */
    function listenToTriggers(renderer, /* tslint:disable-next-line: no-any */ 
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
        var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ listeners = [];
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        parsedTriggers.forEach(function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(target, trigger.open, toggleFn));
                return;
            }
            listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function listenToTriggersV2(renderer, options) {
        var /** @type {?} */ parsedTriggers = parseTriggers(options.triggers);
        var /** @type {?} */ target = options.target;
        // do nothing
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        // all listeners
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ listeners = [];
        // lazy listeners registration
        var /** @type {?} */ _registerHide = [];
        var /** @type {?} */ registerHide = function () {
            // add hide listeners to unregister array
            _registerHide.forEach(function (fn) { return listeners.push(fn()); });
            // register hide events only once
            _registerHide.length = 0;
        };
        // register open\close\toggle listeners
        parsedTriggers.forEach(function (trigger) {
            var /** @type {?} */ useToggle = trigger.open === trigger.close;
            var /** @type {?} */ showFn = useToggle ? options.toggle : options.show;
            if (!useToggle) {
                _registerHide.push(function () {
                    return renderer.listen(target, trigger.close, options.hide);
                });
            }
            listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function registerOutsideClick(renderer, options) {
        if (!options.outsideClick) {
            return Function.prototype;
        }
        /* tslint:disable-next-line: no-any */
        return renderer.listen('document', 'click', function (event) {
            if (options.target && options.target.contains(event.target)) {
                return undefined;
            }
            if (options.targets &&
                options.targets.some(function (target) { return target.contains(event.target); })) {
                return undefined;
            }
            options.hide();
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /*tslint:disable */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     */
    var /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
    var /** @type {?} */ document$1 = win.document;
    var /** @type {?} */ location = win.location;
    var /** @type {?} */ gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
    var /** @type {?} */ performance = win['performance'] ? win['performance'] : null;
    var /** @type {?} */ Event = win['Event'];
    var /** @type {?} */ MouseEvent = win['MouseEvent'];
    var /** @type {?} */ KeyboardEvent = win['KeyboardEvent'];
    var /** @type {?} */ EventTarget = win['EventTarget'];
    var /** @type {?} */ History = win['History'];
    var /** @type {?} */ Location = win['Location'];
    var /** @type {?} */ EventListener = win['EventListener'];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ guessedVersion;
    /**
     * @return {?}
     */
    function _guessBsVersion() {
        if (typeof document === 'undefined') {
            return null;
        }
        var /** @type {?} */ spanEl = document.createElement('span');
        spanEl.innerText = 'test bs version';
        document.body.appendChild(spanEl);
        spanEl.classList.add('d-none');
        var /** @type {?} */ rect = spanEl.getBoundingClientRect();
        document.body.removeChild(spanEl);
        if (!rect) {
            return 'bs3';
        }
        return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    function setTheme(theme) {
        guessedVersion = theme;
    }
    /**
     * @return {?}
     */
    function isBs3() {
        if (typeof win === 'undefined') {
            return true;
        }
        if (typeof win.__theme === 'undefined') {
            if (guessedVersion) {
                return guessedVersion === 'bs3';
            }
            guessedVersion = _guessBsVersion();
            return guessedVersion === 'bs3';
        }
        return win.__theme !== 'bs4';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ LinkedList = (function () {
        function LinkedList() {
            this.length = 0;
            this.asArray = [];
        }
        /**
         * @param {?} position
         * @return {?}
         */
        LinkedList.prototype.get = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    return void 0;
                }
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < position; index++) {
                    current = current.next;
                }
                return current.value;
            };
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */
        LinkedList.prototype.add = /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */
            function (value, position) {
                if (position === void 0) {
                    position = this.length;
                }
                if (position < 0 || position > this.length) {
                    throw new Error('Position is out of the list');
                }
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ node = {
                    value: value,
                    next: undefined,
                    previous: undefined
                };
                if (this.length === 0) {
                    this.head = node;
                    this.tail = node;
                    this.current = node;
                }
                else {
                    if (position === 0) {
                        // first node
                        node.next = this.head;
                        this.head.previous = node;
                        this.head = node;
                    }
                    else if (position === this.length) {
                        // last node
                        this.tail.next = node;
                        node.previous = this.tail;
                        this.tail = node;
                    }
                    else {
                        // node in middle
                        var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                        var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                        currentPreviousNode.next = node;
                        currentNextNode.previous = node;
                        node.previous = currentPreviousNode;
                        node.next = currentNextNode;
                    }
                }
                this.length++;
                this.createInternalArrayRepresentation();
            };
        /**
         * @param {?=} position
         * @return {?}
         */
        LinkedList.prototype.remove = /**
         * @param {?=} position
         * @return {?}
         */
            function (position) {
                if (position === void 0) {
                    position = 0;
                }
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                if (position === 0) {
                    // first node
                    this.head = this.head.next;
                    if (this.head) {
                        // there is no second node
                        this.head.previous = undefined;
                    }
                    else {
                        // there is no second node
                        this.tail = undefined;
                    }
                }
                else if (position === this.length - 1) {
                    // last node
                    this.tail = this.tail.previous;
                    this.tail.next = undefined;
                }
                else {
                    // middle node
                    var /** @type {?} */ removedNode = this.getNode(position);
                    removedNode.next.previous = removedNode.previous;
                    removedNode.previous.next = removedNode.next;
                }
                this.length--;
                this.createInternalArrayRepresentation();
            };
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */
        LinkedList.prototype.set = /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */
            function (position, value) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                var /** @type {?} */ node = this.getNode(position);
                node.value = value;
                this.createInternalArrayRepresentation();
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.toArray = /**
         * @return {?}
         */
            function () {
                return this.asArray;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.findAll = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ result = [];
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result.push({ index: index, value: current.value });
                    }
                    current = current.next;
                }
                return result;
            };
        // Array methods overriding start
        /**
         * @param {...?} args
         * @return {?}
         */
        LinkedList.prototype.push = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                /* tslint:disable-next-line: no-any*/
                args.forEach(function (arg) {
                    _this.add(arg);
                });
                return this.length;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.pop = /**
         * @return {?}
         */
            function () {
                if (this.length === 0) {
                    return undefined;
                }
                var /** @type {?} */ last = this.tail;
                this.remove(this.length - 1);
                return last.value;
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        LinkedList.prototype.unshift = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args.reverse();
                /* tslint:disable-next-line: no-any*/
                args.forEach(function (arg) {
                    _this.add(arg, 0);
                });
                return this.length;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.shift = /**
         * @return {?}
         */
            function () {
                if (this.length === 0) {
                    return undefined;
                }
                var /** @type {?} */ lastItem = this.head.value;
                this.remove();
                return lastItem;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.forEach = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    fn(current.value, index);
                    current = current.next;
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LinkedList.prototype.indexOf = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ position = 0;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (current.value === value) {
                        position = index;
                        break;
                    }
                    current = current.next;
                }
                return position;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.some = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result = false;
                while (current && !result) {
                    if (fn(current.value)) {
                        result = true;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.every = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result = true;
                while (current && result) {
                    if (!fn(current.value)) {
                        result = false;
                    }
                    current = current.next;
                }
                return result;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.toString = /**
         * @return {?}
         */
            function () {
                return '[Linked List]';
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.find = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result = current.value;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.findIndex = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result = index;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} position
         * @return {?}
         */
        LinkedList.prototype.getNode = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < position; index++) {
                    current = current.next;
                }
                return current;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.createInternalArrayRepresentation = /**
         * @return {?}
         */
            function () {
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ outArray = [];
                var /** @type {?} */ current = this.head;
                while (current) {
                    outArray.push(current.value);
                    current = current.next;
                }
                this.asArray = outArray;
            };
        return LinkedList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} defaultValue
     * @return {?}
     */
    function OnChange(defaultValue) {
        var /** @type {?} */ sufix = 'Change';
        /* tslint:disable-next-line: no-any */
        return function OnChangeHandler(target, propertyKey) {
            var /** @type {?} */ _key = " __" + propertyKey + "Value";
            Object.defineProperty(target, propertyKey, {
                /* tslint:disable-next-line: no-any */
                get: /**
                 * @return {?}
                 */ function () {
                    return this[_key];
                },
                /* tslint:disable-next-line: no-any */
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    var /** @type {?} */ prevValue = this[_key];
                    this[_key] = value;
                    if (prevValue !== value && this[propertyKey + sufix]) {
                        this[propertyKey + sufix].emit(value);
                    }
                }
            });
        };
    }
    /* tslint:enable */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Utils = (function () {
        function Utils() {
        }
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} element
         * @return {?}
         */
        Utils.reflow = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /* tslint:disable-next-line: no-any */
                (function (bs) { return bs; })(element.offsetHeight);
            };
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} elem
         * @return {?}
         */
        Utils.getStyles = /**
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                // IE throws on elements created in popups
                // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                var /** @type {?} */ view = elem.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = win;
                }
                return view.getComputedStyle(elem);
            };
        return Utils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _messagesHash = {};
    var /** @type {?} */ _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */
    function warnOnce(msg) {
        if (!core.isDevMode() || _hideMsg || msg in _messagesHash) {
            return;
        }
        _messagesHash[msg] = true;
        /*tslint:disable-next-line*/
        console.warn(msg);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.isBs3 = isBs3;
    exports.LinkedList = LinkedList;
    exports.listenToTriggersV2 = listenToTriggersV2;
    exports.registerOutsideClick = registerOutsideClick;
    exports.OnChange = OnChange;
    exports.setTheme = setTheme;
    exports.Trigger = Trigger;
    exports.Utils = Utils;
    exports.window = win;
    exports.document = document$1;
    exports.warnOnce = warnOnce;
    exports.parseTriggers = parseTriggers;
    exports.listenToTriggers = listenToTriggers;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdHJpZ2dlci5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2Vycy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9mYWNhZGUvYnJvd3Nlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90aGVtZS1wcm92aWRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9saW5rZWQtbGlzdC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3V0aWxzLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3dhcm4tb25jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbmV4cG9ydCBjbGFzcyBUcmlnZ2VyIHtcbiAgb3Blbjogc3RyaW5nO1xuICBjbG9zZT86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcGVuOiBzdHJpbmcsIGNsb3NlPzogc3RyaW5nKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmNsb3NlID0gY2xvc2UgfHwgb3BlbjtcbiAgfVxuXG4gIGlzTWFudWFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4gPT09ICdtYW51YWwnIHx8IHRoaXMuY2xvc2UgPT09ICdtYW51YWwnO1xuICB9XG59XG4iLCIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXIuY2xhc3MnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IHR5cGUgQnNFdmVudENhbGxiYWNrID0gKGV2ZW50PzogYW55KSA9PiBib29sZWFuIHwgdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5PcHRpb25zIHtcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQ7XG4gIHRhcmdldHM/OiBIVE1MRWxlbWVudFtdO1xuICB0cmlnZ2Vycz86IHN0cmluZztcbiAgb3V0c2lkZUNsaWNrPzogYm9vbGVhbjtcbiAgc2hvdz86IEJzRXZlbnRDYWxsYmFjaztcbiAgaGlkZT86IEJzRXZlbnRDYWxsYmFjaztcbiAgdG9nZ2xlPzogQnNFdmVudENhbGxiYWNrO1xufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxuICBmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J11cbn07XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nLCBhbGlhc2VzOiBhbnkgPSBERUZBVUxUX0FMSUFTRVMpOiBUcmlnZ2VyW10ge1xuICBjb25zdCB0cmltbWVkVHJpZ2dlcnMgPSAodHJpZ2dlcnMgfHwgJycpLnRyaW0oKTtcblxuICBpZiAodHJpbW1lZFRyaWdnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gdHJpbW1lZFRyaWdnZXJzXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKCh0cmlnZ2VyOiBzdHJpbmcpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcbiAgICAubWFwKCh0cmlnZ2VyUGFpcjogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IGFsaWFzID0gYWxpYXNlc1t0cmlnZ2VyUGFpclswXV0gfHwgdHJpZ2dlclBhaXI7XG5cbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xuICAgIH0pO1xuXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT5cbiAgICB0cmlnZ2VyUGFpci5pc01hbnVhbCgpXG4gICk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XG4gIH1cblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Rm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm46IEJzRXZlbnRDYWxsYmFjayk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBoaWRlRm4pXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzVjIocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKG9wdGlvbnMudHJpZ2dlcnMpO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLy8gYWxsIGxpc3RlbmVyc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgLy8gbGF6eSBsaXN0ZW5lcnMgcmVnaXN0cmF0aW9uXG4gIGNvbnN0IF9yZWdpc3RlckhpZGU6IEZ1bmN0aW9uW10gPSBbXTtcbiAgY29uc3QgcmVnaXN0ZXJIaWRlID0gKCkgPT4ge1xuICAgIC8vIGFkZCBoaWRlIGxpc3RlbmVycyB0byB1bnJlZ2lzdGVyIGFycmF5XG4gICAgX3JlZ2lzdGVySGlkZS5mb3JFYWNoKChmbjogRnVuY3Rpb24pID0+IGxpc3RlbmVycy5wdXNoKGZuKCkpKTtcbiAgICAvLyByZWdpc3RlciBoaWRlIGV2ZW50cyBvbmx5IG9uY2VcbiAgICBfcmVnaXN0ZXJIaWRlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLy8gcmVnaXN0ZXIgb3BlblxcY2xvc2VcXHRvZ2dsZSBsaXN0ZW5lcnNcbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGNvbnN0IHVzZVRvZ2dsZSA9IHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZTtcbiAgICBjb25zdCBzaG93Rm4gPSB1c2VUb2dnbGUgPyBvcHRpb25zLnRvZ2dsZSA6IG9wdGlvbnMuc2hvdztcblxuICAgIGlmICghdXNlVG9nZ2xlKSB7XG4gICAgICBfcmVnaXN0ZXJIaWRlLnB1c2goKCkgPT5cbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgb3B0aW9ucy5oaWRlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgKCkgPT4gc2hvd0ZuKHJlZ2lzdGVySGlkZSkpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck91dHNpZGVDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVDbGljaykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG4iLCIvKnRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbnZhciB3aW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCA8YW55Pnt9O1xuXG5leHBvcnQgeyB3aW4gYXMgd2luZG93IH07XG5leHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCB2YXIgZ2MgPSB3aW5bJ2djJ10gPyAoKSA9PiB3aW5bJ2djJ10oKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luWydFdmVudCddO1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW5bJ01vdXNlRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW5bJ0V2ZW50VGFyZ2V0J107XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpblsnSGlzdG9yeSddO1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW5bJ0V2ZW50TGlzdGVuZXInXTtcbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuXG5sZXQgZ3Vlc3NlZFZlcnNpb246ICdiczMnIHwgJ2JzNCc7XG5cbmZ1bmN0aW9uIF9ndWVzc0JzVmVyc2lvbigpOiAnYnMzJyB8ICdiczQnIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5FbC5pbm5lclRleHQgPSAndGVzdCBicyB2ZXJzaW9uJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuRWwpO1xuICBzcGFuRWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIGNvbnN0IHJlY3QgPSBzcGFuRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbkVsKTtcbiAgaWYgKCFyZWN0KSB7XG4gICAgcmV0dXJuICdiczMnO1xuICB9XG5cbiAgcmV0dXJuIHJlY3QudG9wID09PSAwID8gJ2JzNCcgOiAnYnMzJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lOiAnYnMzJyB8ICdiczQnKTogdm9pZCB7XG4gIGd1ZXNzZWRWZXJzaW9uID0gdGhlbWU7XG59XG5cbi8vIHRvZG86IGluIG5neC1ib290c3RyYXAsIGJzNCB3aWxsIGJlY2FtZSBhIGRlZmF1bHQgb25lXG5leHBvcnQgZnVuY3Rpb24gaXNCczMoKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuX190aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZ3Vlc3NlZFZlcnNpb24pIHtcbiAgICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XG4gICAgfVxuICAgIGd1ZXNzZWRWZXJzaW9uID0gX2d1ZXNzQnNWZXJzaW9uKCk7XG5cbiAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5fX3RoZW1lICE9PSAnYnM0Jztcbn1cbiIsImV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0PFQ+IHtcbiAgbGVuZ3RoID0gMDtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgaGVhZDogYW55O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCB0YWlsOiBhbnk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIGN1cnJlbnQ6IGFueTtcbiAgcHJvdGVjdGVkIGFzQXJyYXk6IFRbXSA9IFtdO1xuXG4gIGdldChwb3NpdGlvbjogbnVtYmVyKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgfVxuXG4gIGFkZCh2YWx1ZTogVCwgcG9zaXRpb246IG51bWJlciA9IHRoaXMubGVuZ3RoKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBub2RlOiBhbnkgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgIHByZXZpb3VzOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgICAvLyBmaXJzdCBub2RlXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3Qgbm9kZVxuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub2RlIGluIG1pZGRsZVxuICAgICAgICBjb25zdCBjdXJyZW50UHJldmlvdXNOb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXh0Tm9kZSA9IGN1cnJlbnRQcmV2aW91c05vZGUubmV4dDtcblxuICAgICAgICBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQgPSBub2RlO1xuICAgICAgICBjdXJyZW50TmV4dE5vZGUucHJldmlvdXMgPSBub2RlO1xuXG4gICAgICAgIG5vZGUucHJldmlvdXMgPSBjdXJyZW50UHJldmlvdXNOb2RlO1xuICAgICAgICBub2RlLm5leHQgPSBjdXJyZW50TmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHJlbW92ZShwb3NpdGlvbiA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgLy8gZmlyc3Qgbm9kZVxuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG5cbiAgICAgIGlmICh0aGlzLmhlYWQpIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcbiAgICAgICAgdGhpcy50YWlsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gbGFzdCBub2RlXG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlkZGxlIG5vZGVcbiAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcbiAgICAgIHJlbW92ZWROb2RlLm5leHQucHJldmlvdXMgPSByZW1vdmVkTm9kZS5wcmV2aW91cztcbiAgICAgIHJlbW92ZWROb2RlLnByZXZpb3VzLm5leHQgPSByZW1vdmVkTm9kZS5uZXh0O1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoLS07XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHNldChwb3NpdGlvbjogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICB0b0FycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuYXNBcnJheTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZmluZEFsbChmbjogYW55KTogYW55W10ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtpbmRleCwgdmFsdWU6IGN1cnJlbnQudmFsdWV9KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBzdGFydFxuICBwdXNoKC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWRkKGFyZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBwb3AoKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsYXN0ID0gdGhpcy50YWlsO1xuICAgIHRoaXMucmVtb3ZlKHRoaXMubGVuZ3RoIC0gMSk7XG5cbiAgICByZXR1cm4gbGFzdC52YWx1ZTtcbiAgfVxuXG4gIHVuc2hpZnQoLi4uYXJnczogVFtdKTogbnVtYmVyIHtcbiAgICBhcmdzLnJldmVyc2UoKTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hZGQoYXJnLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHNoaWZ0KCk6IFQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLmhlYWQudmFsdWU7XG4gICAgdGhpcy5yZW1vdmUoKTtcblxuICAgIHJldHVybiBsYXN0SXRlbTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZm9yRWFjaChmbjogYW55KTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBmbihjdXJyZW50LnZhbHVlLCBpbmRleCk7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIGluZGV4T2YodmFsdWU6IFQpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzb21lKGZuOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBldmVyeShmbjogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgcmVzdWx0KSB7XG4gICAgICBpZiAoIWZuKGN1cnJlbnQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1tMaW5rZWQgTGlzdF0nO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kKGZuOiBhbnkpOiBUIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0OiBUO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50LnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZmluZEluZGV4KGZuOiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0ID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgZ2V0Tm9kZShwb3NpdGlvbjogbnVtYmVyKTogYW55IHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3Qgb3V0QXJyYXk6IGFueVtdID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgb3V0QXJyYXkucHVzaChjdXJyZW50LnZhbHVlKTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHRoaXMuYXNBcnJheSA9IG91dEFycmF5O1xuICB9XG5cbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIEVORFxufVxuIiwiLyp0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXMgKi9cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2UoZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcbiAgY29uc3Qgc3VmaXggPSAnQ2hhbmdlJztcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gZnVuY3Rpb24gT25DaGFuZ2VIYW5kbGVyKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgX2tleSA9IGAgX18ke3Byb3BlcnR5S2V5fVZhbHVlYDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIGdldCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpc1tfa2V5XTtcbiAgICAgIH0sXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpc1tfa2V5XTtcbiAgICAgICAgdGhpc1tfa2V5XSA9IHZhbHVlO1xuICAgICAgICBpZiAocHJldlZhbHVlICE9PSB2YWx1ZSAmJiB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdKSB7XG4gICAgICAgICAgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XS5lbWl0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuIiwiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHN0YXRpYyByZWZsb3coZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IF9tZXNzYWdlc0hhc2g6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5jb25zdCBfaGlkZU1zZyA9IHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAhKCd3YXJuJyBpbiBjb25zb2xlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PbmNlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghaXNEZXZNb2RlKCkgfHwgX2hpZGVNc2cgfHwgbXNnIGluIF9tZXNzYWdlc0hhc2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfbWVzc2FnZXNIYXNoW21zZ10gPSB0cnVlO1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXG4gIGNvbnNvbGUud2Fybihtc2cpO1xufVxuIl0sIm5hbWVzIjpbImRvY3VtZW50Iiwid2luZG93IiwiaXNEZXZNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUtBLFFBQUE7UUFJRSxpQkFBWSxJQUFZLEVBQUUsS0FBYztZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7U0FDNUI7Ozs7UUFFRCwwQkFBUTs7O1lBQVI7Z0JBQ0Us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