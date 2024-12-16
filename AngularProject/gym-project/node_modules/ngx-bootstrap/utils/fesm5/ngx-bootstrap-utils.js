import { isDevMode } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
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
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
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
var  /**
 * @template T
 */
LinkedList = /** @class */ (function () {
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
        if (position === void 0) { position = this.length; }
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
        if (position === void 0) { position = 0; }
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
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
var Utils = /** @class */ (function () {
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
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
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

export { isBs3, LinkedList, listenToTriggersV2, registerOutsideClick, OnChange, setTheme, Trigger, Utils, win as window, document$1 as document, warnOnce, parseTriggers, listenToTriggers };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2VyLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RyaWdnZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RoZW1lLXByb3ZpZGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2xpbmtlZC1saXN0LmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdXRpbHMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvd2Fybi1vbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRyaWdnZXIge1xuICBvcGVuOiBzdHJpbmc7XG4gIGNsb3NlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wZW46IHN0cmluZywgY2xvc2U/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuY2xvc2UgPSBjbG9zZSB8fCBvcGVuO1xuICB9XG5cbiAgaXNNYW51YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbiA9PT0gJ21hbnVhbCcgfHwgdGhpcy5jbG9zZSA9PT0gJ21hbnVhbCc7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlci5jbGFzcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgdHlwZSBCc0V2ZW50Q2FsbGJhY2sgPSAoZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudDtcbiAgdGFyZ2V0cz86IEhUTUxFbGVtZW50W107XG4gIHRyaWdnZXJzPzogc3RyaW5nO1xuICBvdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xuICBzaG93PzogQnNFdmVudENhbGxiYWNrO1xuICBoaWRlPzogQnNFdmVudENhbGxiYWNrO1xuICB0b2dnbGU/OiBCc0V2ZW50Q2FsbGJhY2s7XG59XG5cbmNvbnN0IERFRkFVTFRfQUxJQVNFUyA9IHtcbiAgaG92ZXI6IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sXG4gIGZvY3VzOiBbJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnXVxufTtcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzOiBzdHJpbmcsIGFsaWFzZXM6IGFueSA9IERFRkFVTFRfQUxJQVNFUyk6IFRyaWdnZXJbXSB7XG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG4gIGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnNcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5tYXAoKHRyaWdnZXI6IHN0cmluZykgPT4gdHJpZ2dlci5zcGxpdCgnOicpKVxuICAgIC5tYXAoKHRyaWdnZXJQYWlyOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcblxuICAgICAgcmV0dXJuIG5ldyBUcmlnZ2VyKGFsaWFzWzBdLCBhbGlhc1sxXSk7XG4gICAgfSk7XG5cbiAgY29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXJQYWlyOiBUcmlnZ2VyKSA9PlxuICAgIHRyaWdnZXJQYWlyLmlzTWFudWFsKClcbiAgKTtcblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG9ubHkgb25lIG1hbnVhbCB0cmlnZ2VyIGlzIGFsbG93ZWQnKTtcbiAgfVxuXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG1hbnVhbCB0cmlnZ2VyIGNhblxcJ3QgYmUgbWl4ZWQgd2l0aCBvdGhlciB0cmlnZ2VycycpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRyaWdnZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2VycyhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnM6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZuOiBCc0V2ZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGbjogQnNFdmVudENhbGxiYWNrKTogRnVuY3Rpb24ge1xuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnModHJpZ2dlcnMpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICBpZiAodHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChyZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHRvZ2dsZUZuKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3Blbiwgc2hvd0ZuKSxcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIGhpZGVGbilcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnNWMihyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKTogRnVuY3Rpb24ge1xuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnMob3B0aW9ucy50cmlnZ2Vycyk7XG4gIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAvLyBkbyBub3RoaW5nXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvLyBhbGwgbGlzdGVuZXJzXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcblxuICAvLyBsYXp5IGxpc3RlbmVycyByZWdpc3RyYXRpb25cbiAgY29uc3QgX3JlZ2lzdGVySGlkZTogRnVuY3Rpb25bXSA9IFtdO1xuICBjb25zdCByZWdpc3RlckhpZGUgPSAoKSA9PiB7XG4gICAgLy8gYWRkIGhpZGUgbGlzdGVuZXJzIHRvIHVucmVnaXN0ZXIgYXJyYXlcbiAgICBfcmVnaXN0ZXJIaWRlLmZvckVhY2goKGZuOiBGdW5jdGlvbikgPT4gbGlzdGVuZXJzLnB1c2goZm4oKSkpO1xuICAgIC8vIHJlZ2lzdGVyIGhpZGUgZXZlbnRzIG9ubHkgb25jZVxuICAgIF9yZWdpc3RlckhpZGUubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvLyByZWdpc3RlciBvcGVuXFxjbG9zZVxcdG9nZ2xlIGxpc3RlbmVyc1xuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgY29uc3QgdXNlVG9nZ2xlID0gdHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlO1xuICAgIGNvbnN0IHNob3dGbiA9IHVzZVRvZ2dsZSA/IG9wdGlvbnMudG9nZ2xlIDogb3B0aW9ucy5zaG93O1xuXG4gICAgaWYgKCF1c2VUb2dnbGUpIHtcbiAgICAgIF9yZWdpc3RlckhpZGUucHVzaCgoKSA9PlxuICAgICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBvcHRpb25zLmhpZGUpXG4gICAgICApO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCAoKSA9PiBzaG93Rm4ocmVnaXN0ZXJIaWRlKSlcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyT3V0c2lkZUNsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub3V0c2lkZUNsaWNrKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQgJiYgb3B0aW9ucy50YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy50YXJnZXRzICYmXG4gICAgICBvcHRpb25zLnRhcmdldHMuc29tZSh0YXJnZXQgPT4gdGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9wdGlvbnMuaGlkZSgpO1xuICB9KTtcbn1cbiIsIi8qdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cbiAqL1xudmFyIHdpbiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8IDxhbnk+e307XG5cbmV4cG9ydCB7IHdpbiBhcyB3aW5kb3cgfTtcbmV4cG9ydCB2YXIgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XG5leHBvcnQgdmFyIGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xuZXhwb3J0IHZhciBnYyA9IHdpblsnZ2MnXSA/ICgpID0+IHdpblsnZ2MnXSgpIDogKCk6IGFueSA9PiBudWxsO1xuZXhwb3J0IHZhciBwZXJmb3JtYW5jZSA9IHdpblsncGVyZm9ybWFuY2UnXSA/IHdpblsncGVyZm9ybWFuY2UnXSA6IG51bGw7XG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW5bJ0V2ZW50J107XG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpblsnTW91c2VFdmVudCddO1xuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW5bJ0tleWJvYXJkRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpblsnRXZlbnRUYXJnZXQnXTtcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luWydIaXN0b3J5J107XG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW5bJ0xvY2F0aW9uJ107XG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpblsnRXZlbnRMaXN0ZW5lciddO1xuIiwiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5cbmxldCBndWVzc2VkVmVyc2lvbjogJ2JzMycgfCAnYnM0JztcblxuZnVuY3Rpb24gX2d1ZXNzQnNWZXJzaW9uKCk6ICdiczMnIHwgJ2JzNCcge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhbkVsLmlubmVyVGV4dCA9ICd0ZXN0IGJzIHZlcnNpb24nO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5FbCk7XG4gIHNwYW5FbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgY29uc3QgcmVjdCA9IHNwYW5FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuRWwpO1xuICBpZiAoIXJlY3QpIHtcbiAgICByZXR1cm4gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gcmVjdC50b3AgPT09IDAgPyAnYnM0JyA6ICdiczMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWU6ICdiczMnIHwgJ2JzNCcpOiB2b2lkIHtcbiAgZ3Vlc3NlZFZlcnNpb24gPSB0aGVtZTtcbn1cblxuLy8gdG9kbzogaW4gbmd4LWJvb3RzdHJhcCwgYnM0IHdpbGwgYmVjYW1lIGEgZGVmYXVsdCBvbmVcbmV4cG9ydCBmdW5jdGlvbiBpc0JzMygpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5fX3RoZW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChndWVzc2VkVmVyc2lvbikge1xuICAgICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcbiAgICB9XG4gICAgZ3Vlc3NlZFZlcnNpb24gPSBfZ3Vlc3NCc1ZlcnNpb24oKTtcblxuICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gd2luZG93Ll9fdGhlbWUgIT09ICdiczQnO1xufVxuIiwiZXhwb3J0IGNsYXNzIExpbmtlZExpc3Q8VD4ge1xuICBsZW5ndGggPSAwO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCBoZWFkOiBhbnk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIHRhaWw6IGFueTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgY3VycmVudDogYW55O1xuICBwcm90ZWN0ZWQgYXNBcnJheTogVFtdID0gW107XG5cbiAgZ2V0KHBvc2l0aW9uOiBudW1iZXIpOiBUIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICB9XG5cbiAgYWRkKHZhbHVlOiBULCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5sZW5ndGgpOiB2b2lkIHtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID4gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbmV4dDogdW5kZWZpbmVkLFxuICAgICAgcHJldmlvdXM6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgIC8vIGZpcnN0IG5vZGVcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBub2RlXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vZGUgaW4gbWlkZGxlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmV2aW91c05vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24gLSAxKTtcbiAgICAgICAgY29uc3QgY3VycmVudE5leHROb2RlID0gY3VycmVudFByZXZpb3VzTm9kZS5uZXh0O1xuXG4gICAgICAgIGN1cnJlbnRQcmV2aW91c05vZGUubmV4dCA9IG5vZGU7XG4gICAgICAgIGN1cnJlbnROZXh0Tm9kZS5wcmV2aW91cyA9IG5vZGU7XG5cbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IGN1cnJlbnRQcmV2aW91c05vZGU7XG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnROZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sZW5ndGgrKztcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlKHBvc2l0aW9uID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAvLyBmaXJzdCBub2RlXG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcblxuICAgICAgaWYgKHRoaXMuaGVhZCkge1xuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxuICAgICAgICB0aGlzLnRhaWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBsYXN0IG5vZGVcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtaWRkbGUgbm9kZVxuICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xuICAgICAgcmVtb3ZlZE5vZGUubmV4dC5wcmV2aW91cyA9IHJlbW92ZWROb2RlLnByZXZpb3VzO1xuICAgICAgcmVtb3ZlZE5vZGUucHJldmlvdXMubmV4dCA9IHJlbW92ZWROb2RlLm5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xuICB9XG5cbiAgc2V0KHBvc2l0aW9uOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5hc0FycmF5O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kQWxsKGZuOiBhbnkpOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe2luZGV4LCB2YWx1ZTogY3VycmVudC52YWx1ZX0pO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIHN0YXJ0XG4gIHB1c2goLi4uYXJnczogVFtdKTogbnVtYmVyIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hZGQoYXJnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHBvcCgpOiBUIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5sZW5ndGggLSAxKTtcblxuICAgIHJldHVybiBsYXN0LnZhbHVlO1xuICB9XG5cbiAgdW5zaGlmdCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xuICAgIGFyZ3MucmV2ZXJzZSgpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XG4gICAgICB0aGlzLmFkZChhcmcsIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgc2hpZnQoKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuaGVhZC52YWx1ZTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGxhc3RJdGVtO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmb3JFYWNoKGZuOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgaW5kZXhPZih2YWx1ZTogVCk6IG51bWJlciB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHNvbWUoZm46IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiAhcmVzdWx0KSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGV2ZXJ5KGZuOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiByZXN1bHQpIHtcbiAgICAgIGlmICghZm4oY3VycmVudC52YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnW0xpbmtlZCBMaXN0XSc7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGZpbmQoZm46IGFueSk6IFQge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQ6IFQ7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdCA9IGN1cnJlbnQudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kSW5kZXgoZm46IGFueSk6IG51bWJlciB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCBnZXROb2RlKHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBvdXRBcnJheTogYW55W10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBvdXRBcnJheS5wdXNoKGN1cnJlbnQudmFsdWUpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgdGhpcy5hc0FycmF5ID0gb3V0QXJyYXk7XG4gIH1cblxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgRU5EXG59XG4iLCIvKnRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyAqL1xuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBPbkNoYW5nZShkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICBjb25zdCBzdWZpeCA9ICdDaGFuZ2UnO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHJldHVybiBmdW5jdGlvbiBPbkNoYW5nZUhhbmRsZXIodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBfa2V5ID0gYCBfXyR7cHJvcGVydHlLZXl9VmFsdWVgO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgZ2V0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzW19rZXldO1xuICAgICAgfSxcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzW19rZXldO1xuICAgICAgICB0aGlzW19rZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChwcmV2VmFsdWUgIT09IHZhbHVlICYmIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0pIHtcbiAgICAgICAgICB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdLmVtaXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG4iLCJpbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2ZhY2FkZS9icm93c2VyJztcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgc3RhdGljIHJlZmxvdyhlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICgoYnM6IGFueSk6IHZvaWQgPT4gYnMpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgfVxuXG4gIC8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi9tYXN0ZXIvc3JjL2Nzcy92YXIvZ2V0U3R5bGVzLmpzXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHN0YXRpYyBnZXRTdHlsZXMoZWxlbTogYW55KTogYW55IHtcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG4gICAgLy8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG4gICAgLy8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG4gICAgbGV0IHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICBpZiAoIXZpZXcgfHwgIXZpZXcub3BlbmVyKSB7XG4gICAgICB2aWV3ID0gd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgX21lc3NhZ2VzSGFzaDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbmNvbnN0IF9oaWRlTXNnID0gdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8ICEoJ3dhcm4nIGluIGNvbnNvbGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9uY2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc0Rldk1vZGUoKSB8fCBfaGlkZU1zZyB8fCBtc2cgaW4gX21lc3NhZ2VzSGFzaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9tZXNzYWdlc0hhc2hbbXNnXSA9IHRydWU7XG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lKi9cbiAgY29uc29sZS53YXJuKG1zZyk7XG59XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxJQUFBO0lBSUUsaUJBQVksSUFBWSxFQUFFLEtBQWM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO0tBQzVCOzs7O0lBRUQsMEJBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxL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