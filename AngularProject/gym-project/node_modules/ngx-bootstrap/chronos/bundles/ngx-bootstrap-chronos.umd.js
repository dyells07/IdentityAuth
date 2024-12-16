(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/chronos', ['exports'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].chronos = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} n
     * @param {?} x
     * @return {?}
     */
    function mod(n, x) {
        return (n % x + x) % x;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    function absFloor(num) {
        return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function isString(str) {
        return typeof str === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isDate(value) {
        return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function isDateValid(date) {
        return date && date.getTime && !isNaN(date.getTime());
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function isFunction(fn) {
        return (fn instanceof Function ||
            Object.prototype.toString.call(fn) === '[object Function]');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    function isNumber(value) {
        return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
    }
    /**
     * @template T
     * @param {?=} input
     * @return {?}
     */
    function isArray(input) {
        return (input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]');
    }
    /**
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function hasOwnProp(a /*object*/, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    /**
     * @template T
     * @param {?} input
     * @return {?}
     */
    function isObject(input /*object*/) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (input != null && Object.prototype.toString.call(input) === '[object Object]');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        }
        var /** @type {?} */ k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function isUndefined(input) {
        return input === void 0;
    }
    /**
     * @template T
     * @param {?} argumentForCoercion
     * @return {?}
     */
    function toInt(argumentForCoercion) {
        var /** @type {?} */ coercedNumber = +argumentForCoercion;
        var /** @type {?} */ value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aliases = {};
    var /** @type {?} */ _mapUnits = {
        date: 'day',
        hour: 'hours',
        minute: 'minutes',
        second: 'seconds',
        millisecond: 'milliseconds'
    };
    /**
     * @param {?} unit
     * @param {?} shorthand
     * @return {?}
     */
    function addUnitAlias(unit, shorthand) {
        var /** @type {?} */ lowerCase = unit.toLowerCase();
        var /** @type {?} */ _unit = unit;
        if (lowerCase in _mapUnits) {
            _unit = _mapUnits[lowerCase];
        }
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
    }
    /**
     * @param {?} units
     * @return {?}
     */
    function normalizeUnits(units) {
        return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    /**
     * @param {?} inputObject
     * @return {?}
     */
    function normalizeObjectUnits(inputObject) {
        var /** @type {?} */ normalizedInput = {};
        var /** @type {?} */ normalizedProp;
        var /** @type {?} */ prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return /** @type {?} */ (normalizedInput);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // place in new Date([array])
    var /** @type {?} */ YEAR = 0;
    var /** @type {?} */ MONTH = 1;
    var /** @type {?} */ DATE = 2;
    var /** @type {?} */ HOUR = 3;
    var /** @type {?} */ MINUTE = 4;
    var /** @type {?} */ SECOND = 5;
    var /** @type {?} */ MILLISECOND = 6;
    var /** @type {?} */ WEEK = 7;
    var /** @type {?} */ WEEKDAY = 8;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} targetLength
     * @param {?=} forceSign
     * @return {?}
     */
    function zeroFill(num, targetLength, forceSign) {
        var /** @type {?} */ absNumber = "" + Math.abs(num);
        var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
        var /** @type {?} */ sign = num >= 0;
        var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
        // todo: this is crazy slow
        var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
        return (_sign + _zeros + absNumber);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ formatFunctions = {};
    var /** @type {?} */ formatTokenFunctions = {};
    // tslint:disable-next-line
    var /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    /**
     * @param {?} token
     * @param {?} padded
     * @param {?} ordinal
     * @param {?} callback
     * @return {?}
     */
    function addFormatToken(token, padded, ordinal, callback) {
        if (token) {
            formatTokenFunctions[token] = callback;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function (date, opts) {
                return opts.locale.ordinal(callback.apply(null, arguments), token);
            };
        }
    }
    /**
     * @param {?} format
     * @return {?}
     */
    function makeFormatFunction(format) {
        var /** @type {?} */ array = format.match(formattingTokens);
        var /** @type {?} */ length = array.length;
        var /** @type {?} */ formatArr = new Array(length);
        for (var /** @type {?} */ i = 0; i < length; i++) {
            formatArr[i] = formatTokenFunctions[array[i]]
                ? formatTokenFunctions[array[i]]
                : removeFormattingTokens(array[i]);
        }
        return function (date, locale, isUTC, offset) {
            if (offset === void 0) {
                offset = 0;
            }
            var /** @type {?} */ output = '';
            for (var /** @type {?} */ j = 0; j < length; j++) {
                output += isFunction(formatArr[j])
                    ? ((formatArr[j])).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                    : formatArr[j];
            }
            return output;
        };
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @return {?}
     */
    function createUTCDate(y, m, d) {
        var /** @type {?} */ date = new Date(Date.UTC.apply(null, arguments));
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @param {?=} h
     * @param {?=} M
     * @param {?=} s
     * @param {?=} ms
     * @return {?}
     */
    function createDate(y, m, d, h, M, s, ms) {
        if (m === void 0) {
            m = 0;
        }
        if (d === void 0) {
            d = 1;
        }
        if (h === void 0) {
            h = 0;
        }
        if (M === void 0) {
            M = 0;
        }
        if (s === void 0) {
            s = 0;
        }
        if (ms === void 0) {
            ms = 0;
        }
        var /** @type {?} */ date = new Date(y, m, d, h, M, s, ms);
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getHours(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCHours() : date.getHours();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMinutes(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMinutes() : date.getMinutes();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getSeconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCSeconds() : date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMilliseconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getTime(date) {
        return date.getTime();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDay(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDay() : date.getDay();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDate(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDate() : date.getDate();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMonth(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMonth() : date.getMonth();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getFullYear(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCFullYear() : date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function unix(date) {
        return Math.floor(date.valueOf() / 1000);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getFirstDayOfMonth(date) {
        return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function isFirstDayOfWeek(date, firstDayOfWeek) {
        return date.getDay() === firstDayOfWeek;
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameMonth(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameYear(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return getFullYear(date1) === getFullYear(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameDay(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return (isSameYear(date1, date2) &&
            isSameMonth(date1, date2) &&
            getDate(date1) === getDate(date2));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ match1 = /\d/; //       0 - 9
    var /** @type {?} */ match2 = /\d\d/; //      00 - 99
    var /** @type {?} */ match3 = /\d{3}/; //     000 - 999
    var /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
    var /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
    var /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
    var /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
    var /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
    var /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
    var /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
    var /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
    var /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
    var /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    var /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    // tslint:disable-next-line
    var /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var /** @type {?} */ regexes = {};
    /**
     * @param {?} token
     * @param {?} regex
     * @param {?=} strictRegex
     * @return {?}
     */
    function addRegexToken(token, regex, strictRegex) {
        if (isFunction(regex)) {
            regexes[token] = regex;
            return;
        }
        regexes[token] = function (isStrict, locale) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }
    /**
     * @param {?} token
     * @param {?} locale
     * @return {?}
     */
    function getParseRegexForToken(token, locale) {
        var /** @type {?} */ _strict = false;
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](_strict, locale);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function unescapeFormat(str) {
        // tslint:disable-next-line
        return regexEscape(str
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ tokens = {};
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addParseToken(token, callback) {
        var /** @type {?} */ _token = isString(token) ? [token] : token;
        var /** @type {?} */ func = callback;
        if (isNumber(callback)) {
            func = function (input, array, config) {
                array[callback] = toInt(input);
                return config;
            };
        }
        if (isArray(_token) && isFunction(func)) {
            var /** @type {?} */ i = void 0;
            for (i = 0; i < _token.length; i++) {
                tokens[_token[i]] = func;
            }
        }
    }
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, _token) {
            config._w = config._w || {};
            return callback(input, config._w, config, _token);
        });
    }
    /**
     * @param {?} token
     * @param {?} input
     * @param {?} config
     * @return {?}
     */
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /*
    export function getPrioritizedUnits(unitsObj) {
      const units = [];
      let unit;
      for (unit in unitsObj) {
        if (unitsObj.hasOwnProperty(unit)) {
          units.push({ unit, priority: priorities[unit] });
        }
      }
      units.sort(function (a, b) {
        return a.priority - b.priority;
      });

      return units;
    }
    */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfMonth() {
        // FORMATTING
        addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
            return getDate(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('date', 'D');
        // PARSING
        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
            return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
        });
        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array, config) {
            array[DATE] = toInt(input.match(match1to2)[0]);
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function getParsingFlags(config) {
        if (config._pf == null) {
            config._pf = defaultParsingFlags();
        }
        return config._pf;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function getYear(date, opts) {
        return getFullYear(date, opts.isUTC).toString();
    }
    /**
     * @return {?}
     */
    function initYear() {
        addFormatToken('Y', null, null, function (date, opts) {
            var /** @type {?} */ y = getFullYear(date, opts.isUTC);
            return y <= 9999 ? y.toString(10) : "+" + y;
        });
        addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
            return (getFullYear(date, opts.isUTC) % 100).toString(10);
        });
        addFormatToken(null, ['YYYY', 4, false], null, getYear);
        addFormatToken(null, ['YYYYY', 5, false], null, getYear);
        addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
        // ALIASES
        addUnitAlias('year', 'y');
        // PARSING
        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);
        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array, config) {
            array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
            return config;
        });
        addParseToken('YY', function (input, array, config) {
            array[YEAR] = parseTwoDigitYear(input);
            return config;
        });
        addParseToken('Y', function (input, array, config) {
            array[YEAR] = parseInt(input, 10);
            return config;
        });
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function parseTwoDigitYear(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function daysInMonth$1(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var /** @type {?} */ modMonth = mod(month, 12);
        var /** @type {?} */ _year = year + (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(_year) ? 29 : 28
            : (31 - modMonth % 7 % 2);
    }
    /**
     * @return {?}
     */
    function initMonth() {
        // FORMATTING
        addFormatToken('M', ['MM', 2, false], 'Mo', function (date, opts) {
            return (getMonth(date, opts.isUTC) + 1).toString(10);
        });
        addFormatToken('MMM', null, null, function (date, opts) {
            return opts.locale.monthsShort(date, opts.format, opts.isUTC);
        });
        addFormatToken('MMMM', null, null, function (date, opts) {
            return opts.locale.months(date, opts.format, opts.isUTC);
        });
        // ALIASES
        addUnitAlias('month', 'M');
        // PARSING
        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
            return locale.monthsRegex(isStrict);
        });
        addParseToken(['M', 'MM'], function (input, array, config) {
            array[MONTH] = toInt(input) - 1;
            return config;
        });
        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
            var /** @type {?} */ month = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (month != null) {
                array[MONTH] = month;
            }
            else {
                getParsingFlags(config).invalidMonth = !!input;
            }
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultTimeUnit = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        seconds: 0
    };
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function shiftDate(date, unit) {
        var /** @type {?} */ _unit = Object.assign({}, defaultTimeUnit, unit);
        var /** @type {?} */ year = date.getFullYear() + (_unit.year || 0);
        var /** @type {?} */ month = date.getMonth() + (_unit.month || 0);
        var /** @type {?} */ day = date.getDate() + (_unit.day || 0);
        if (_unit.month && !_unit.day) {
            day = Math.min(day, daysInMonth$1(year, month));
        }
        return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function setFullDate(date, unit) {
        return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
    }
    /**
     * @param {?} def
     * @param {?=} num
     * @return {?}
     */
    function getNum(def, num) {
        return isNumber(num) ? num : def;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMonth(date, value, isUTC) {
        var /** @type {?} */ dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
        isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setHours(date, value, isUTC) {
        isUTC ? date.setUTCHours(value) : date.setHours(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMinutes(date, value, isUTC) {
        isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setSeconds(date, value, isUTC) {
        isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMilliseconds(date, value, isUTC) {
        isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setDate(date, value, isUTC) {
        isUTC ? date.setUTCDate(value) : date.setDate(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function setTime(date, value) {
        date.setTime(value);
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @return {?}
     */
    function cloneDate(date) {
        return new Date(date.getTime());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function startOf(date, unit, isUTC) {
        var /** @type {?} */ _date = cloneDate(date);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (unit) {
            case 'year':
                setMonth(_date, 0, isUTC);
            /* falls through */
            case 'quarter':
            case 'month':
                setDate(_date, 1, isUTC);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                setHours(_date, 0, isUTC);
            /* falls through */
            case 'hours':
                setMinutes(_date, 0, isUTC);
            /* falls through */
            case 'minutes':
                setSeconds(_date, 0, isUTC);
            /* falls through */
            case 'seconds':
                setMilliseconds(_date, 0, isUTC);
        }
        // weeks are a special case
        if (unit === 'week') {
            setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
        }
        if (unit === 'isoWeek') {
            setISODayOfWeek(_date, 1);
        }
        // quarters are also special
        if (unit === 'quarter') {
            setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
        }
        return _date;
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function endOf(date, unit, isUTC) {
        var /** @type {?} */ _unit = unit;
        // 'date' is an alias for 'day', so it should be considered as such.
        if (_unit === 'date') {
            _unit = 'day';
        }
        var /** @type {?} */ start = startOf(date, _unit, isUTC);
        var /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
        var /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfYear() {
        // FORMATTING
        addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
            return getDayOfYear(date)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('dayOfYear', 'DDD');
        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
            config._dayOfYear = toInt(input);
            return config;
        });
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfYear(date, isUTC) {
        var /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
        var /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
        var /** @type {?} */ someDate = date1 - date2;
        var /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
        return Math.round(someDate / oneDay) + 1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        var /** @type {?} */ fwd = dow - doy + 7;
        // first-week day local weekday -- which local weekday is fwd
        var /** @type {?} */ fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
        return -fwdlw + fwd - 1;
    }
    /**
     * @param {?} year
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var /** @type {?} */ localWeekday = (7 + weekday - dow) % 7;
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
        var /** @type {?} */ resYear;
        var /** @type {?} */ resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        }
        else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        }
        else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    /**
     * @param {?} date
     * @param {?} dow
     * @param {?} doy
     * @param {?=} isUTC
     * @return {?}
     */
    function weekOfYear(date, dow, doy, isUTC) {
        var /** @type {?} */ weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
        var /** @type {?} */ week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
        var /** @type {?} */ resWeek;
        var /** @type {?} */ resYear;
        if (week < 1) {
            resYear = getFullYear(date, isUTC) - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        }
        else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
            resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
            resYear = getFullYear(date, isUTC) + 1;
        }
        else {
            resYear = getFullYear(date, isUTC);
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function weeksInYear(year, dow, doy) {
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    var /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    var /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    var /** @type {?} */ defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    var /** @type {?} */ defaultOrdinal = '%d';
    var /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    var /** @type {?} */ defaultMonthsShortRegex = matchWord;
    var /** @type {?} */ defaultMonthsRegex = matchWord;
    var Locale = (function () {
        function Locale(config) {
            if (!!config) {
                this.set(config);
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        Locale.prototype.set = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var /** @type {?} */ confKey;
                for (confKey in config) {
                    if (!config.hasOwnProperty(confKey)) {
                        continue;
                    }
                    var /** @type {?} */ prop = config[(confKey)];
                    var /** @type {?} */ key = ((isFunction(prop) ? confKey : "_" + confKey));
                    this[key] = /** @type {?} */ (prop);
                }
                this._config = config;
            };
        /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        Locale.prototype.calendar = /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
            function (key, date, now) {
                var /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
                return isFunction(output) ? output.call(null, date, now) : output;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.longDateFormat = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        Object.defineProperty(Locale.prototype, "invalidDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._invalidDate;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._invalidDate = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
        Locale.prototype.ordinal = /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
            function (num, token) {
                return this._ordinal.replace('%d', num.toString(10));
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.preparse = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.postformat = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
        Locale.prototype.relativeTime = /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
            function (num, withoutSuffix, str, isFuture) {
                var /** @type {?} */ output = this._relativeTime[str];
                return (isFunction(output)) ?
                    output(num, withoutSuffix, str, isFuture) :
                    output.replace(/%d/i, num.toString(10));
            };
        /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
        Locale.prototype.pastFuture = /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
            function (diff, output) {
                var /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
                return isFunction(format) ? format(output) : format.replace(/%s/i, output);
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.months = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._months)
                        ? this._months
                        : this._months.standalone;
                }
                if (isArray(this._months)) {
                    return this._months[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                    ? 'format'
                    : 'standalone';
                return this._months[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.monthsShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._monthsShort)
                        ? this._monthsShort
                        : this._monthsShort.standalone;
                }
                if (isArray(this._monthsShort)) {
                    return this._monthsShort[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
                return this._monthsShort[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.monthsParse = /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ date;
                var /** @type {?} */ regex;
                if (this._monthsParseExact) {
                    return this.handleMonthStrictParse(monthName, format, strict);
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                }
                // TODO: add sorting
                // Sorting makes sure if one month (or abbr) is a prefix of another
                // see sorting in computeMonthsParse
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(Date.UTC(2000, i));
                    if (strict && !this._longMonthsParse[i]) {
                        var /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                        var /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                        this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                        this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
                    }
                    if (!strict && !this._monthsParse[i]) {
                        regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    // test the regex
                    if (strict && format === 'MMMM' && ((this._longMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (strict && format === 'MMM' && ((this._shortMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (!strict && this._monthsParse[i].test(monthName)) {
                        return i;
                    }
                }
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsStrictRegex;
                    }
                    return this._monthsRegex;
                }
                if (!hasOwnProp(this, '_monthsRegex')) {
                    this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ?
                    this._monthsStrictRegex : this._monthsRegex;
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsShortRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsShortStrictRegex;
                    }
                    return this._monthsShortRegex;
                }
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                    this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ?
                    this._monthsShortStrictRegex : this._monthsShortRegex;
            };
        /** Week */
        /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.week = /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, isUTC) {
                return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfWeek = /**
         * @return {?}
         */
            function () {
                return this._week.dow;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfYear = /**
         * @return {?}
         */
            function () {
                return this._week.doy;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdays = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (!date) {
                    return isArray(this._weekdays)
                        ? this._weekdays
                        : this._weekdays.standalone;
                }
                if (isArray(this._weekdays)) {
                    return this._weekdays[getDay(date, isUTC)];
                }
                var /** @type {?} */ _key = this._weekdays.isFormat.test(format)
                    ? 'format'
                    : 'standalone';
                return this._weekdays[_key][getDay(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysMin = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
            };
        // proto.weekdaysParse  =        localeWeekdaysParse;
        /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.weekdaysParse = /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ i;
                var /** @type {?} */ regex;
                if (this._weekdaysParseExact) {
                    return this.handleWeekStrictParse(weekdayName, format, strict);
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = [];
                }
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // fix: here is the issue
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    if (strict && !this._fullWeekdaysParse[i]) {
                        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
                    }
                    if (!this._weekdaysParse[i]) {
                        regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    if (!isArray(this._fullWeekdaysParse)
                        || !isArray(this._shortWeekdaysParse)
                        || !isArray(this._minWeekdaysParse)
                        || !isArray(this._weekdaysParse)) {
                        return;
                    }
                    // test the regex
                    if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                }
            };
        // proto.weekdaysRegex       =        weekdaysRegex;
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysStrictRegex;
                    }
                    else {
                        return this._weekdaysRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this._weekdaysRegex = matchWord;
                    }
                    return this._weekdaysStrictRegex && isStrict ?
                        this._weekdaysStrictRegex : this._weekdaysRegex;
                }
            };
        // proto.weekdaysShortRegex  =        weekdaysShortRegex;
        // proto.weekdaysMinRegex    =        weekdaysMinRegex;
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysShortRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysShortStrictRegex;
                    }
                    else {
                        return this._weekdaysShortRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                        this._weekdaysShortRegex = matchWord;
                    }
                    return this._weekdaysShortStrictRegex && isStrict ?
                        this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                }
            };
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysMinRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysMinStrictRegex;
                    }
                    else {
                        return this._weekdaysMinRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                        this._weekdaysMinRegex = matchWord;
                    }
                    return this._weekdaysMinStrictRegex && isStrict ?
                        this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                }
            };
        /**
         * @param {?} input
         * @return {?}
         */
        Locale.prototype.isPM = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
                // Using charAt should be more compatible.
                return input.toLowerCase().charAt(0) === 'p';
            };
        /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
        Locale.prototype.meridiem = /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
            function (hours, minutes, isLower) {
                if (hours > 11) {
                    return isLower ? 'pm' : 'PM';
                }
                return isLower ? 'am' : 'AM';
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.formatLongDate = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.handleMonthStrictParse = /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ llc = monthName.toLocaleLowerCase();
                var /** @type {?} */ i;
                var /** @type {?} */ ii;
                var /** @type {?} */ mom;
                if (!this._monthsParse) {
                    // this is not used
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (i = 0; i < 12; ++i) {
                        mom = new Date(2000, i);
                        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
                    }
                }
                if (strict) {
                    if (format === 'MMM') {
                        ii = ((this._shortMonthsParse)).indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                if (format === 'MMM') {
                    ii = ((this._shortMonthsParse)).indexOf(llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                ii = ((this._longMonthsParse)).indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = ((this._shortMonthsParse)).indexOf(llc);
                return ii !== -1 ? ii : null;
            };
        /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
        Locale.prototype.handleWeekStrictParse = /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ ii;
                var /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    var /** @type {?} */ i = void 0;
                    for (i = 0; i < 7; ++i) {
                        var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                        this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                        this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                        this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
                    }
                }
                if (!isArray(this._weekdaysParse)
                    || !isArray(this._shortWeekdaysParse)
                    || !isArray(this._minWeekdaysParse)) {
                    return;
                }
                if (strict) {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
                else {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeMonthsParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ date;
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(2000, i);
                    shortPieces.push(this.monthsShort(date, ''));
                    longPieces.push(this.months(date, ''));
                    mixedPieces.push(this.months(date, ''));
                    mixedPieces.push(this.monthsShort(date, ''));
                }
                // Sorting makes sure if one month (or abbr) is a prefix of another it
                // will match the longer piece.
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 12; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                }
                for (i = 0; i < 24; i++) {
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeWeekdaysParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ minPieces = [];
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ i;
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // let mom = createUTC([2000, 1]).day(i);
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    var /** @type {?} */ minp = this.weekdaysMin(date);
                    var /** @type {?} */ shortp = this.weekdaysShort(date);
                    var /** @type {?} */ longp = this.weekdays(date);
                    minPieces.push(minp);
                    shortPieces.push(shortp);
                    longPieces.push(longp);
                    mixedPieces.push(minp);
                    mixedPieces.push(shortp);
                    mixedPieces.push(longp);
                }
                // Sorting makes sure if one weekday (or abbr) is a prefix of another it
                // will match the longer piece.
                minPieces.sort(cmpLenRev);
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 7; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
                this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
            };
        return Locale;
    }());
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultInvalidDate = 'Invalid date';
    var /** @type {?} */ defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    };
    var /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    var /** @type {?} */ defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    var /** @type {?} */ baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} array1
     * @param {?} array2
     * @param {?} dontConvert
     * @return {?}
     */
    function compareArrays(array1, array2, dontConvert) {
        var /** @type {?} */ len = Math.min(array1.length, array2.length);
        var /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
        var /** @type {?} */ diffs = 0;
        var /** @type {?} */ i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i])
                || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initWeek() {
        addFormatToken('w', ['ww', 2, false], 'wo', function (date, opts) {
            return getWeek(date, opts.locale)
                .toString(10);
        });
        addFormatToken('W', ['WW', 2, false], 'Wo', function (date) {
            return getISOWeek(date)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W');
        // PARSING
        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);
        addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
            return config;
        });
        // export function getSetWeek (input) {
        //   var week = this.localeData().week(this);
        //   return input == null ? week : this.add((input - week) * 7, 'd');
        // }
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return locale.week(date, isUTC);
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeek(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).week;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initWeekYear() {
        addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
            // return this.weekYear() % 100;
            return (getWeekYear(date, opts.locale) % 100).toString();
        });
        addFormatToken(null, ['GG', 2, false], null, function (date) {
            // return this.isoWeekYear() % 100;
            return (getISOWeekYear(date) % 100).toString();
        });
        addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
        addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
        addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
        addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
        // ALIASES
        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG');
        // PARSING
        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);
        addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
            return config;
        });
        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
            week[token] = parseTwoDigitYear(input);
            return config;
        });
    }
    /**
     * @param {?} token
     * @param {?} getter
     * @return {?}
     */
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(null, [token, token.length, false], null, getter);
    }
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function _getWeekYearFormatCb(date, opts) {
        return getWeekYear(date, opts.locale).toString();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function _getISOWeekYearFormatCb(date) {
        return getISOWeekYear(date).toString();
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeekYear(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeekYear(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).year;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initTimezone() {
        // FORMATTING
        addFormatToken('z', null, null, function (date, opts) {
            return opts.isUTC ? 'UTC' : '';
        });
        addFormatToken('zz', null, null, function (date, opts) {
            return opts.isUTC ? 'Coordinated Universal Time' : '';
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initTimestamp() {
        // FORMATTING
        addFormatToken('X', null, null, function (date) {
            return unix(date)
                .toString(10);
        });
        addFormatToken('x', null, null, function (date) {
            return date.valueOf()
                .toString(10);
        });
        // PARSING
        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
            config._d = new Date(parseFloat(input) * 1000);
            return config;
        });
        addParseToken('x', function (input, array, config) {
            config._d = new Date(toInt(input));
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initSecond() {
        // FORMATTING
        addFormatToken('s', ['ss', 2, false], null, function (date, opts) {
            return getSeconds(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('second', 's');
        // PARSING
        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initQuarter() {
        // FORMATTING
        addFormatToken('Q', null, 'Qo', function (date, opts) {
            return getQuarter(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('quarter', 'Q');
        // PARSING
        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array, config) {
            array[MONTH] = (toInt(input) - 1) * 3;
            return config;
        });
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getQuarter(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return Math.ceil((getMonth(date, isUTC) + 1) / 3);
    }
    // export function getSetQuarter(input) {
    //   return input == null
    //     ? Math.ceil((this.month() + 1) / 3)
    //     : this.month((input - 1) * 3 + this.month() % 3);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} token
     * @param {?} separator
     * @return {?}
     */
    function addOffsetFormatToken(token, separator) {
        addFormatToken(token, null, null, function (date, config) {
            var /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
            var /** @type {?} */ sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }
    /**
     * @return {?}
     */
    function initOffset() {
        addOffsetFormatToken('Z', ':');
        addOffsetFormatToken('ZZ', '');
        // PARSING
        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
            return config;
        });
    }
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
    /**
     * @param {?} matcher
     * @param {?} str
     * @return {?}
     */
    function offsetFromString(matcher, str) {
        var /** @type {?} */ matches = (str || '').match(matcher);
        if (matches === null) {
            return null;
        }
        var /** @type {?} */ chunk = matches[matches.length - 1];
        var /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
        var /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
        var /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
        return minutes === 0 ? 0 : _min;
    }
    /**
     * @param {?} input
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function cloneWithOffset(input, date, config) {
        if (config === void 0) {
            config = {};
        }
        if (!config._isUTC) {
            return input;
        }
        var /** @type {?} */ res = cloneDate(date);
        // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
        var /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
        var /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
        // Use low-level api, because this fn is low-level api.
        res.setTime(res.valueOf() + diff);
        // todo: add timezone handling
        // hooks.updateOffset(res, false);
        return res;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getDateOffset(date) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(date.getTimezoneOffset() / 15) * 15;
    }
    /**
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function getUTCOffset(date, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ _offset = config._offset || 0;
        return config._isUTC ? _offset : getDateOffset(date);
    }
    // DEPRECATED
    /*export function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      const c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
          compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }*/
    // in Khronos
    /*export function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    export function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    export function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }*/

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initMinute() {
        // FORMATTING
        addFormatToken('m', ['mm', 2, false], null, function (date, opts) {
            return getMinutes(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('minute', 'm');
        // PARSING
        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initMillisecond() {
        addFormatToken('S', null, null, function (date, opts) {
            return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
        });
        addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
            return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
        });
        addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC)).toString(10);
        });
        addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
        });
        addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
        });
        addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
        });
        addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
        });
        addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
        });
        addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
        });
        // ALIASES
        addUnitAlias('millisecond', 'ms');
        // PARSING
        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);
        var /** @type {?} */ token;
        for (token = 'SSSS'; token.length <= 9; token += 'S') {
            addRegexToken(token, matchUnsigned);
        }
        /**
         * @param {?} input
         * @param {?} array
         * @param {?} config
         * @return {?}
         */
        function parseMs(input, array, config) {
            array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
            return config;
        }
        for (token = 'S'; token.length <= 9; token += 'S') {
            addParseToken(token, parseMs);
        }
        // MOMENTS
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initHour() {
        /**
         * @param {?} date
         * @param {?} isUTC
         * @return {?}
         */
        function hFormat(date, isUTC) {
            return getHours(date, isUTC) % 12 || 12;
        }
        /**
         * @param {?} date
         * @param {?} isUTC
         * @return {?}
         */
        function kFormat(date, isUTC) {
            return getHours(date, isUTC) || 24;
        }
        addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
            return getHours(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
            return hFormat(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
            return kFormat(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('hmm', null, null, function (date, opts) {
            var /** @type {?} */ _h = hFormat(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            return "" + _h + _mm;
        });
        addFormatToken('hmmss', null, null, function (date, opts) {
            var /** @type {?} */ _h = hFormat(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
            return "" + _h + _mm + _ss;
        });
        addFormatToken('Hmm', null, null, function (date, opts) {
            var /** @type {?} */ _H = getHours(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            return "" + _H + _mm;
        });
        addFormatToken('Hmmss', null, null, function (date, opts) {
            var /** @type {?} */ _H = getHours(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
            return "" + _H + _mm + _ss;
        });
        /**
         * @param {?} token
         * @param {?} lowercase
         * @return {?}
         */
        function meridiem(token, lowercase) {
            addFormatToken(token, null, null, function (date, opts) {
                return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
            });
        }
        meridiem('a', true);
        meridiem('A', false);
        // ALIASES
        addUnitAlias('hour', 'h');
        /**
         * @param {?} isStrict
         * @param {?} locale
         * @return {?}
         */
        function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
        }
        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);
        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);
        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
            var /** @type {?} */ kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
            return config;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
            return config;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('hmm', function (input, array, config) {
            var /** @type {?} */ pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('hmmss', function (input, array, config) {
            var /** @type {?} */ pos1 = input.length - 4;
            var /** @type {?} */ pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('Hmm', function (input, array, config) {
            var /** @type {?} */ pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            return config;
        });
        addParseToken('Hmmss', function (input, array, config) {
            var /** @type {?} */ pos1 = input.length - 4;
            var /** @type {?} */ pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ locales = {};
    var /** @type {?} */ localeFamilies = {};
    var /** @type {?} */ globalLocale;
    /**
     * @param {?} key
     * @return {?}
     */
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    /**
     * @param {?} names
     * @return {?}
     */
    function chooseLocale(names) {
        var /** @type {?} */ next;
        var /** @type {?} */ locale;
        var /** @type {?} */ i = 0;
        while (i < names.length) {
            var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
            var /** @type {?} */ j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    // the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }
    /**
     * @param {?} parentConfig
     * @param {?} childConfig
     * @return {?}
     */
    function mergeConfigs(parentConfig, childConfig) {
        var /** @type {?} */ res = Object.assign({}, parentConfig);
        for (var /** @type {?} */ childProp in childConfig) {
            if (!hasOwnProp(childConfig, childProp)) {
                continue;
            }
            if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
                res[childProp] = {};
                Object.assign(res[childProp], parentConfig[childProp]);
                Object.assign(res[childProp], childConfig[childProp]);
            }
            else if (childConfig[childProp] != null) {
                res[childProp] = childConfig[childProp];
            }
            else {
                delete res[childProp];
            }
        }
        var /** @type {?} */ parentProp;
        for (parentProp in parentConfig) {
            if (hasOwnProp(parentConfig, parentProp) &&
                !hasOwnProp(childConfig, parentProp) &&
                isObject(parentConfig[(parentProp)])) {
                // make sure changes to properties don't modify parent config
                res[(parentProp)] = Object.assign({}, res[(parentProp)]);
            }
        }
        return res;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function loadLocale(name) {
        // no way!
        /* var oldLocale = null;
           // TODO: Find a better way to register and load all the locales in Node
           if (!locales[name] && (typeof module !== 'undefined') &&
             module && module.exports) {
             try {
               oldLocale = globalLocale._abbr;
               var aliasedRequire = require;
               aliasedRequire('./locale/' + name);
               getSetGlobalLocale(oldLocale);
             } catch (e) {}
           }*/
        if (!locales[name]) {
            // tslint:disable-next-line
            console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
            // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @param {?=} values
     * @return {?}
     */
    function getSetGlobalLocale(key, values) {
        var /** @type {?} */ data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else if (isString(key)) {
                data = defineLocale(key, values);
            }
            if (data) {
                globalLocale = data;
            }
        }
        return globalLocale && globalLocale._abbr;
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function defineLocale(name, config) {
        if (config === null) {
            // useful for testing
            delete locales[name];
            globalLocale = getLocale('en');
            return null;
        }
        if (!config) {
            return;
        }
        var /** @type {?} */ parentConfig = baseConfig;
        config.abbr = name;
        if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            }
            else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({ name: name, config: config });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }
        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);
        return locales[name];
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function updateLocale(name, config) {
        var /** @type {?} */ _config = config;
        if (_config != null) {
            var /** @type {?} */ parentConfig = baseConfig;
            // MERGE
            var /** @type {?} */ tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            _config = mergeConfigs(parentConfig, _config);
            var /** @type {?} */ locale = new Locale(_config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        }
        else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                }
                else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    function getLocale(key) {
        setDefaultLocale();
        if (!key) {
            return globalLocale;
        }
        // let locale;
        var /** @type {?} */ _key = isArray(key) ? key : [key];
        return chooseLocale(_key);
    }
    /**
     * @return {?}
     */
    function listLocales() {
        return Object.keys(locales);
    }
    /**
     * @return {?}
     */
    function setDefaultLocale() {
        if (locales["en"]) {
            return undefined;
        }
        getSetGlobalLocale('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                var /** @type {?} */ b = num % 10;
                var /** @type {?} */ output = toInt((num % 100) / 10) === 1
                    ? 'th'
                    : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                return num + output;
            }
        });
        initWeek();
        initWeekYear();
        initYear();
        initTimezone();
        initTimestamp();
        initSecond();
        initQuarter();
        initOffset();
        initMonth();
        initMinute();
        initMillisecond();
        initHour();
        initDayOfYear();
        initDayOfWeek();
        initDayOfMonth();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
    var ɵ0 = function (mem, order) {
        mem[order] = true;
        return mem;
    };
    var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
    /**
     * @param {?} duration
     * @return {?}
     */
    function isDurationValid(duration) {
        var /** @type {?} */ durationKeys = Object.keys(duration);
        if (durationKeys
            .some(function (key) {
            return (key in orderingHash)
                && duration[key] === null
                || isNaN(duration[key]);
        })) {
            return false;
        }
        // for (let key in duration) {
        //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
        //     return false;
        //   }
        // }
        var /** @type {?} */ unitHasDecimal = false;
        for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
            if (duration[ordering[i]]) {
                // only allow non-integers for smallest unit
                if (unitHasDecimal) {
                    return false;
                }
                if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @return {?}
     */
    function absCeil(number) {
        return number < 0 ? Math.floor(number) : Math.ceil(number);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} dur
     * @return {?}
     */
    function bubble(dur) {
        var /** @type {?} */ milliseconds = dur._milliseconds;
        var /** @type {?} */ days = dur._days;
        var /** @type {?} */ months = dur._months;
        var /** @type {?} */ data = dur._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        var /** @type {?} */ seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        var /** @type {?} */ minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        var /** @type {?} */ hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        var /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        var /** @type {?} */ years = absFloor(months / 12);
        months %= 12;
        data.day = days;
        data.month = months;
        data.year = years;
        return dur;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    function daysToMonths(day) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return day * 4800 / 146097;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    function monthsToDays(month) {
        // the reverse of daysToMonths
        return month * 146097 / 4800;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ round = Math.round;
    var /** @type {?} */ thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11 // months to year
    };
    /**
     * @param {?} str
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} isFuture
     * @param {?} locale
     * @return {?}
     */
    function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
    }
    /**
     * @param {?} posNegDuration
     * @param {?} withoutSuffix
     * @param {?} locale
     * @return {?}
     */
    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var /** @type {?} */ duration = createDuration(posNegDuration).abs();
        var /** @type {?} */ seconds = round(duration.as('s'));
        var /** @type {?} */ minutes = round(duration.as('m'));
        var /** @type {?} */ hours = round(duration.as('h'));
        var /** @type {?} */ days = round(duration.as('d'));
        var /** @type {?} */ months = round(duration.as('M'));
        var /** @type {?} */ years = round(duration.as('y'));
        var /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
            seconds < thresholds["s"] && ['ss', seconds] ||
            minutes <= 1 && ['m'] ||
            minutes < thresholds["m"] && ['mm', minutes] ||
            hours <= 1 && ['h'] ||
            hours < thresholds["h"] && ['hh', hours] ||
            days <= 1 && ['d'] ||
            days < thresholds["d"] && ['dd', days] ||
            months <= 1 && ['M'] ||
            months < thresholds["M"] && ['MM', months] ||
            years <= 1 && ['y'] || ['yy', years];
        var /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
        // a[2] = withoutSuffix;
        // a[3] = +posNegDuration > 0;
        // a[4] = locale;
        return substituteTimeAgo.apply(null, b);
    }
    // export function humanize(withSuffix) {
    //   if (!this.isValid()) {
    //     return this.localeData().invalidDate();
    //   }
    //
    //   const locale = this.localeData();
    //   let output = relativeTime(this, !withSuffix, locale);
    //
    //   if (withSuffix) {
    //     output = locale.pastFuture(+this, output);
    //   }
    //
    //   return locale.postformat(output);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Duration = (function () {
        function Duration(duration, config) {
            if (config === void 0) {
                config = {};
            }
            this._data = {};
            this._locale = getLocale();
            this._locale = config && config._locale || getLocale();
            // const normalizedInput = normalizeObjectUnits(duration);
            var /** @type {?} */ normalizedInput = duration;
            var /** @type {?} */ years = normalizedInput.year || 0;
            var /** @type {?} */ quarters = normalizedInput.quarter || 0;
            var /** @type {?} */ months = normalizedInput.month || 0;
            var /** @type {?} */ weeks = normalizedInput.week || 0;
            var /** @type {?} */ days = normalizedInput.day || 0;
            var /** @type {?} */ hours = normalizedInput.hours || 0;
            var /** @type {?} */ minutes = normalizedInput.minutes || 0;
            var /** @type {?} */ seconds = normalizedInput.seconds || 0;
            var /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
            this._isValid = isDurationValid(normalizedInput);
            // representation for dateAddRemove
            this._milliseconds = +milliseconds +
                seconds * 1000 +
                minutes * 60 * 1000 + // 1000 * 60
                // 1000 * 60
                hours * 1000 * 60 * 60; // using 1000 * 60 * 60
            // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +days +
                weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +months +
                quarters * 3 +
                years * 12;
            // this._data = {};
            // this._locale = getLocale();
            // this._bubble();
            return bubble(this);
        }
        /**
         * @return {?}
         */
        Duration.prototype.isValid = /**
         * @return {?}
         */
            function () {
                return this._isValid;
            };
        /**
         * @param {?=} withSuffix
         * @return {?}
         */
        Duration.prototype.humanize = /**
         * @param {?=} withSuffix
         * @return {?}
         */
            function (withSuffix) {
                // throw new Error(`TODO: implement`);
                if (!this.isValid()) {
                    return this.localeData().invalidDate;
                }
                var /** @type {?} */ locale = this.localeData();
                var /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
                if (withSuffix) {
                    output = locale.pastFuture(+this, output);
                }
                return locale.postformat(output);
            };
        /**
         * @return {?}
         */
        Duration.prototype.localeData = /**
         * @return {?}
         */
            function () {
                return this._locale;
            };
        /**
         * @param {?=} localeKey
         * @return {?}
         */
        Duration.prototype.locale = /**
         * @param {?=} localeKey
         * @return {?}
         */
            function (localeKey) {
                if (!localeKey) {
                    return this._locale._abbr;
                }
                this._locale = getLocale(localeKey) || this._locale;
                return this;
            };
        /**
         * @return {?}
         */
        Duration.prototype.abs = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ mathAbs = Math.abs;
                var /** @type {?} */ data = this._data;
                this._milliseconds = mathAbs(this._milliseconds);
                this._days = mathAbs(this._days);
                this._months = mathAbs(this._months);
                data.milliseconds = mathAbs(data.milliseconds);
                data.seconds = mathAbs(data.seconds);
                data.minutes = mathAbs(data.minutes);
                data.hours = mathAbs(data.hours);
                data.month = mathAbs(data.month);
                data.year = mathAbs(data.year);
                return this;
            };
        /**
         * @param {?} _units
         * @return {?}
         */
        Duration.prototype.as = /**
         * @param {?} _units
         * @return {?}
         */
            function (_units) {
                if (!this.isValid()) {
                    return NaN;
                }
                var /** @type {?} */ days;
                var /** @type {?} */ months;
                var /** @type {?} */ milliseconds = this._milliseconds;
                var /** @type {?} */ units = normalizeUnits(_units);
                if (units === 'month' || units === 'year') {
                    days = this._days + milliseconds / 864e5;
                    months = this._months + daysToMonths(days);
                    return units === 'month' ? months : months / 12;
                }
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                    case 'week':
                        return days / 7 + milliseconds / 6048e5;
                    case 'day':
                        return days + milliseconds / 864e5;
                    case 'hours':
                        return days * 24 + milliseconds / 36e5;
                    case 'minutes':
                        return days * 1440 + milliseconds / 6e4;
                    case 'seconds':
                        return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'milliseconds':
                        return Math.floor(days * 864e5) + milliseconds;
                    default:
                        throw new Error("Unknown unit " + units);
                }
            };
        /**
         * @return {?}
         */
        Duration.prototype.valueOf = /**
         * @return {?}
         */
            function () {
                if (!this.isValid()) {
                    return NaN;
                }
                return (this._milliseconds +
                    this._days * 864e5 +
                    (this._months % 12) * 2592e6 +
                    toInt(this._months / 12) * 31536e6);
            };
        return Duration;
    }());
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDuration(obj) {
        return obj instanceof Duration;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function isValid(config) {
        if (config._isValid == null) {
            var /** @type {?} */ flags = getParsingFlags(config);
            var /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (config._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(config)) {
                config._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return config._isValid;
    }
    /**
     * @param {?} config
     * @param {?=} flags
     * @return {?}
     */
    function createInvalid(config, flags) {
        config._d = new Date(NaN);
        Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function markInvalid(config) {
        config._isValid = false;
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    // tslint:disable-next-line
    var /** @type {?} */ extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    // tslint:disable-next-line
    var /** @type {?} */ basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var /** @type {?} */ tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var /** @type {?} */ isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/, true],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/, true],
        ['YYYYMMDD', /\d{8}/, true],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/, true]
    ];
    // iso time formats and regexes
    var /** @type {?} */ isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];
    var /** @type {?} */ aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    var /** @type {?} */ obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    // tslint:disable-next-line
    var /** @type {?} */ rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromISO(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
        var /** @type {?} */ allowTime;
        var /** @type {?} */ dateFormat;
        var /** @type {?} */ timeFormat;
        var /** @type {?} */ tzFormat;
        if (!match) {
            config._isValid = false;
            return config;
        }
        // getParsingFlags(config).iso = true;
        var /** @type {?} */ i;
        var /** @type {?} */ l;
        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return config;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return config;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return config;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            }
            else {
                config._isValid = false;
                return config;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        return configFromStringAndFormat(config);
    }
    /**
     * @param {?} yearStr
     * @param {?} monthStr
     * @param {?} dayStr
     * @param {?} hourStr
     * @param {?} minuteStr
     * @param {?} secondStr
     * @return {?}
     */
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var /** @type {?} */ result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }
        return result;
    }
    /**
     * @param {?} yearStr
     * @return {?}
     */
    function untruncateYear(yearStr) {
        var /** @type {?} */ year = parseInt(yearStr, 10);
        return year <= 49 ? year + 2000 : year;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function preprocessRFC2822(str) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return str
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ').trim();
    }
    /**
     * @param {?} weekdayStr
     * @param {?} parsedInput
     * @param {?} config
     * @return {?}
     */
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var /** @type {?} */ weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
            var /** @type {?} */ weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} obsOffset
     * @param {?} militaryOffset
     * @param {?} numOffset
     * @return {?}
     */
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        }
        else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        }
        else {
            var /** @type {?} */ hm = parseInt(numOffset, 10);
            var /** @type {?} */ m = hm % 100;
            var /** @type {?} */ h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromRFC2822(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ match = rfc2822.exec(preprocessRFC2822(config._i));
        if (!match) {
            return markInvalid(config);
        }
        var /** @type {?} */ parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return config;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromString(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return config;
        }
        // todo: update logic processing
        // isISO -> configFromISO
        // isRFC -> configFromRFC
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        // Final attempt, use Input Fallback
        // hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    // hooks.createFromInputFallback = deprecate(
    //     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    //     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    //     'discouraged and will be removed in an upcoming major release. Please refer to ' +
    //     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    //     function (config) {
    //         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    //     }
    // );

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatDate(date, format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        var /** @type {?} */ _locale = getLocale(locale || 'en');
        if (!_locale) {
            throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
        }
        var /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
        var /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
        if (!output) {
            return output;
        }
        return _locale.postformat(output);
    }
    /**
     * @param {?} date
     * @param {?} _format
     * @param {?} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatMoment(date, _format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        if (!isDateValid(date)) {
            return locale.invalidDate;
        }
        var /** @type {?} */ format = expandFormat(_format, locale);
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](date, locale, isUTC, offset);
    }
    /**
     * @param {?} _format
     * @param {?} locale
     * @return {?}
     */
    function expandFormat(_format, locale) {
        var /** @type {?} */ format = _format;
        var /** @type {?} */ i = 5;
        var /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
        var /** @type {?} */ replaceLongDateFormatTokens = function (input) {
            return locale.formatLongDate(input) || input;
        };
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?=} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function currentDateArray(config) {
        var /** @type {?} */ nowValue = new Date();
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromArray(config) {
        var /** @type {?} */ input = [];
        var /** @type {?} */ i;
        var /** @type {?} */ date;
        var /** @type {?} */ currentDate;
        var /** @type {?} */ expectedWeekday;
        var /** @type {?} */ yearToUse;
        if (config._d) {
            return config;
        }
        currentDate = currentDateArray(config);
        // compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        // if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
        // check for mismatching day of week
        if (config._w && typeof config._w["d"] !== 'undefined' && config._w["d"] !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function dayOfYearFromWeekInfo(config) {
        var /** @type {?} */ w, /** @type {?} */ weekYear, /** @type {?} */ week, /** @type {?} */ weekday, /** @type {?} */ dow, /** @type {?} */ doy, /** @type {?} */ temp, /** @type {?} */ weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        }
        else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var /** @type {?} */ curWeek = weekOfYear(new Date(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            }
            else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            }
            else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        }
        else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        }
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function checkOverflow(config) {
        var /** @type {?} */ overflow;
        var /** @type {?} */ a = config._a;
        if (a && getParsingFlags(config).overflow === -2) {
            // todo: fix this sh*t
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;
            if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }
            getParsingFlags(config).overflow = overflow;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // constant that refers to the ISO standard
    // hooks.ISO_8601 = function () {};
    var /** @type {?} */ ISO_8601 = 'ISO_8601';
    // constant that refers to the RFC 2822 form
    // hooks.RFC_2822 = function () {};
    var /** @type {?} */ RFC_2822 = 'RFC_2822';
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === ISO_8601) {
            return configFromISO(config);
        }
        if (config._f === RFC_2822) {
            return configFromRFC2822(config);
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        if (isArray(config._f) || (!config._i && config._i !== 0)) {
            return config;
        }
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var /** @type {?} */ input = config._i.toString();
        var /** @type {?} */ totalParsedInputLength = 0;
        var /** @type {?} */ inputLength = input.length;
        var /** @type {?} */ tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        var /** @type {?} */ i;
        var /** @type {?} */ token;
        var /** @type {?} */ parsedInput;
        var /** @type {?} */ skipped;
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
            if (parsedInput) {
                skipped = input.substr(0, input.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
        if (input.length > 0) {
            getParsingFlags(config).unusedInput.push(input);
        }
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        return checkOverflow(config);
    }
    /**
     * @param {?} locale
     * @param {?} _hour
     * @param {?} meridiem
     * @return {?}
     */
    function meridiemFixWrap(locale, _hour, meridiem) {
        var /** @type {?} */ hour = _hour;
        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        }
        if (locale.isPM == null) {
            // this is not supposed to happen
            return hour;
        }
        // Fallback
        var /** @type {?} */ isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndArray(config) {
        var /** @type {?} */ tempConfig;
        var /** @type {?} */ bestMoment;
        var /** @type {?} */ scoreToBeat;
        var /** @type {?} */ currentScore;
        if (!config._f || config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            return createInvalid(config);
        }
        var /** @type {?} */ i;
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = Object.assign({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            // or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        return Object.assign(config, bestMoment || tempConfig);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromObject(config) {
        if (config._d) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        if (isObject(input)) {
            var /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
            config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
                .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        }
        return configFromArray(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function createFromConfig(config) {
        var /** @type {?} */ res = checkOverflow(prepareConfig(config));
        // todo: remove, in moment.js it's never called cuz of moment constructor
        res._d = new Date(res._d != null ? res._d.getTime() : NaN);
        if (!isValid(Object.assign({}, res, { _isValid: null }))) {
            res._d = new Date(NaN);
        }
        // todo: update offset
        /*if (res._nextDay) {
            // Adding is smart enough around DST
            res._d = add(res._d, 1, 'day');
            res._nextDay = undefined;
          }*/
        return res;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function prepareConfig(config) {
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || (format === undefined && input === '')) {
            return createInvalid(config, { nullInput: true });
        }
        if (isString(input)) {
            config._i = input = config._locale.preparse(input);
        }
        if (isDate(input)) {
            config._d = cloneDate(input);
            return config;
        }
        // todo: add check for recursion
        if (isArray(format)) {
            configFromStringAndArray(config);
        }
        else if (format) {
            configFromStringAndFormat(config);
        }
        else {
            configFromInput(config);
        }
        if (!isValid(config)) {
            config._d = null;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromInput(config) {
        var /** @type {?} */ input = config._i;
        if (isUndefined(input)) {
            config._d = new Date();
        }
        else if (isDate(input)) {
            config._d = cloneDate(input);
        }
        else if (isString(input)) {
            configFromString(config);
        }
        else if (isArray(input) && input.length) {
            var /** @type {?} */ _arr = input.slice(0);
            config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
            configFromArray(config);
        }
        else if (isObject(input)) {
            configFromObject(config);
        }
        else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        }
        else {
            //   hooks.createFromInputFallback(config);
            return createInvalid(config);
        }
        return config;
    }
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
        var /** @type {?} */ config = {};
        var /** @type {?} */ _input = input;
        // params switch -> skip; test it well
        // if (localeKey === true || localeKey === false) {
        //     strict = localeKey;
        //     localeKey = undefined;
        // }
        // todo: fail fast and return not valid date
        if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
            _input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        // config._isAMomentObject = true;
        config._useUTC = config._isUTC = isUTC;
        config._l = localeKey;
        config._i = _input;
        config._f = format;
        config._strict = strict;
        return createFromConfig(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function parseDate(input, format, localeKey, strict, isUTC) {
        if (isDate(input)) {
            return input;
        }
        var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        return config._d;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @return {?}
     */
    function absRound(num) {
        return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isAfter(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() > date2.valueOf();
        }
        return date2.valueOf() < startOf(date1, units).valueOf();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isBefore(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() < date2.valueOf();
        }
        return endOf(date1, units).valueOf() < date2.valueOf();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    // tslint:disable-next-line
    var /** @type {?} */ isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    /**
     * @param {?=} input
     * @param {?=} key
     * @param {?=} config
     * @return {?}
     */
    function createDuration(input, key, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ duration = convertDuration(input, key);
        // matching against regexp is expensive, do it on demand
        return new Duration(duration, config);
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    function convertDuration(input, key) {
        // checks for null or undefined
        if (input == null) {
            return {};
        }
        if (isDuration(input)) {
            return {
                milliseconds: input._milliseconds,
                day: input._days,
                month: input._months
            };
        }
        if (isNumber(input)) {
            // duration = {};
            return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
        }
        if (isString(input)) {
            var /** @type {?} */ match = aspNetRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : 1;
                return {
                    year: 0,
                    day: toInt(match[DATE]) * sign,
                    hours: toInt(match[HOUR]) * sign,
                    minutes: toInt(match[MINUTE]) * sign,
                    seconds: toInt(match[SECOND]) * sign,
                    // the millisecond decimal point is included in the match
                    milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
                };
            }
            match = isoRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
                return {
                    year: parseIso(match[2], sign),
                    month: parseIso(match[3], sign),
                    week: parseIso(match[4], sign),
                    day: parseIso(match[5], sign),
                    hours: parseIso(match[6], sign),
                    minutes: parseIso(match[7], sign),
                    seconds: parseIso(match[8], sign)
                };
            }
        }
        if (isObject(input) && ('from' in input || 'to' in input)) {
            var /** @type {?} */ diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
            return {
                milliseconds: diffRes.milliseconds,
                month: diffRes.months
            };
        }
        return input;
        var _a;
    }
    /**
     * @param {?} inp
     * @param {?} sign
     * @return {?}
     */
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var /** @type {?} */ res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function positiveMomentsDifference(base, other) {
        var /** @type {?} */ res = { milliseconds: 0, months: 0 };
        res.months = getMonth(other) - getMonth(base) +
            (getFullYear(other) - getFullYear(base)) * 12;
        var /** @type {?} */ _basePlus = add(cloneDate(base), res.months, 'month');
        if (isAfter(_basePlus, other)) {
            --res.months;
        }
        res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
        return res;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function momentsDifference(base, other) {
        if (!(isDateValid(base) && isDateValid(other))) {
            return { milliseconds: 0, months: 0 };
        }
        var /** @type {?} */ res;
        var /** @type {?} */ _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
        if (isBefore(base, _other)) {
            res = positiveMomentsDifference(base, _other);
        }
        else {
            res = positiveMomentsDifference(_other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function add(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, 1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function subtract(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, -1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} duration
     * @param {?} isAdding
     * @param {?=} isUTC
     * @return {?}
     */
    function addSubtract(date, duration, isAdding, isUTC) {
        var /** @type {?} */ milliseconds = duration._milliseconds;
        var /** @type {?} */ days = absRound(duration._days);
        var /** @type {?} */ months = absRound(duration._months);
        // todo: add timezones support
        // const _updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
            setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
        }
        if (days) {
            setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
        }
        if (milliseconds) {
            setTime(date, getTime(date) + milliseconds * isAdding);
        }
        return cloneDate(date);
        // todo: add timezones support
        // if (_updateOffset) {
        //   hooks.updateOffset(date, days || months);
        // }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfWeek() {
        // FORMATTING
        addFormatToken('d', null, 'do', function (date, opts) {
            return getDay(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('dd', null, null, function (date, opts) {
            return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
        });
        addFormatToken('ddd', null, null, function (date, opts) {
            return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
        });
        addFormatToken('dddd', null, null, function (date, opts) {
            return opts.locale.weekdays(date, opts.format, opts.isUTC);
        });
        addFormatToken('e', null, null, function (date, opts) {
            return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
                .toString(10);
            // return getDay(date, opts.isUTC).toString(10);
        });
        addFormatToken('E', null, null, function (date, opts) {
            return getISODayOfWeek(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E');
        // PARSING
        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
        });
        addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
            var /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
            // if we didn't get a weekday name, mark the date as invalid
            if (weekday != null) {
                week["d"] = weekday;
            }
            else {
                getParsingFlags(config).invalidWeekday = !!input;
            }
            return config;
        });
        addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
            week[token] = toInt(input);
            return config;
        });
    }
    /**
     * @param {?} input
     * @param {?} locale
     * @return {?}
     */
    function parseWeekday(input, locale) {
        if (!isString(input)) {
            return input;
        }
        var /** @type {?} */ _num = parseInt(input, 10);
        if (!isNaN(_num)) {
            return _num;
        }
        var /** @type {?} */ _weekDay = locale.weekdaysParse(input);
        if (isNumber(_weekDay)) {
            return _weekDay;
        }
        return null;
    }
    /**
     * @param {?} input
     * @param {?=} locale
     * @return {?}
     */
    function parseIsoWeekday(input, locale) {
        if (locale === void 0) {
            locale = getLocale();
        }
        if (isString(input)) {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNumber(input) && isNaN(input) ? null : input;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function setDayOfWeek(date, input, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        var /** @type {?} */ day = getDay(date, isUTC);
        var /** @type {?} */ _input = parseWeekday(input, locale);
        return add(date, _input - day, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfWeek(date, isUTC) {
        return getDay(date, isUTC);
    }
    /**
     * ****************************************
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getLocaleDayOfWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setLocaleDayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        var /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
        return add(date, input - weekday, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISODayOfWeek(date, isUTC) {
        return getDay(date, isUTC) || 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setISODayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        var /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
        return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    var /** @type {?} */ symbolMap = {
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩',
        0: '٠'
    };
    var /** @type {?} */ numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };
    var /** @type {?} */ pluralForm = function (num) {
        return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
    };
    var /** @type {?} */ plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    };
    var /** @type {?} */ pluralize = function (u) {
        return function (num, withoutSuffix) {
            var /** @type {?} */ f = pluralForm(num);
            var /** @type {?} */ str = plurals[u][pluralForm(num)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return ((str)).replace(/%d/i, num.toString());
        };
    };
    var /** @type {?} */ months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];
    var /** @type {?} */ arLocale = {
        abbr: 'ar',
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/\u200FM/\u200FYYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return 'م' === input;
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            }
            else {
                return 'م';
            }
        },
        calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: pluralize('s'),
            ss: pluralize('s'),
            m: pluralize('m'),
            mm: pluralize('m'),
            h: pluralize('h'),
            hh: pluralize('h'),
            d: pluralize('d'),
            dd: pluralize('d'),
            M: pluralize('M'),
            MM: pluralize('M'),
            y: pluralize('y'),
            yy: pluralize('y')
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Bulgarian [bg]
    //! author : Iskren Ivov Chernev : https://github.com/ichernev
    //! author : Kunal Marwaha : https://github.com/marwahaha
    //! author : Matt Grande : https://github.com/mattgrande
    //! author : Isaac Cambron : https://github.com/icambron
    //! author : Venelin Manchev : https://github.com/vmanchev
    var /** @type {?} */ bgLocale = {
        abbr: 'bg',
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function (d) {
                switch (d) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (_num) {
            var /** @type {?} */ number = Number(_num);
            var /** @type {?} */ lastDigit = number % 10, /** @type {?} */ last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            }
            else if (last2Digits === 0) {
                return number + '-ен';
            }
            else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            }
            else if (lastDigit === 1) {
                return number + '-ви';
            }
            else if (lastDigit === 2) {
                return number + '-ри';
            }
            else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            }
            else {
                return number + '-ти';
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    var /** @type {?} */ months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
    var /** @type {?} */ monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'sekundy' : 'sekund');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'minuty' : 'minut');
                }
                else {
                    return result + 'minutami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'hodiny' : 'hodin');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'dny' : 'dní');
                }
                else {
                    return result + 'dny';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'měsíce' : 'měsíců');
                }
                else {
                    return result + 'měsíci';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'roky' : 'let');
                }
                else {
                    return result + 'lety';
                }
        }
    }
    var /** @type {?} */ csLocale = {
        abbr: 'cs',
        months: months$1,
        monthsShort: monthsShort,
        monthsParse: (function (months, monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months$1, monthsShort)),
        shortMonthsParse: (function (monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(monthsShort)),
        longMonthsParse: (function (months) {
            var /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(months$1)),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format
    //! moment.js locale configuration
    //! locale : Danish (Denmark) [da]
    //! author : Per Hansen : https://github.com/perhp
    var /** @type {?} */ daLocale = {
        abbr: 'da',
        months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
        weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
        weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
        weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-key-quotes
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [num + ' Tage', num + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [num + ' Monate', num + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [num + ' Jahre', num + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    var /** @type {?} */ deLocale = {
        abbr: 'de',
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    var /** @type {?} */ enGbLocale = {
        abbr: 'en-gb',
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    var /** @type {?} */ monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esDoLocale = {
        abbr: 'es-do',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$1[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc
    var /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esLocale = {
        abbr: 'es',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$1;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$2[getMonth(date, isUTC)];
            }
            return monthsShortDot$1[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex$1,
        monthsShortRegex: monthsRegex$1,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$1,
        longMonthsParse: monthsParse$1,
        shortMonthsParse: monthsParse$1,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (United States) [es-us]
    //! author : bustta : https://github.com/bustta
    var /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    var /** @type {?} */ monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ esUsLocale = {
        abbr: 'es-us',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$2;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$3[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot$2[getMonth(date, isUTC)];
            }
        },
        monthsParseExact: true,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM [de] D [de] YYYY',
            LLL: 'MMMM [de] D [de] YYYY h:mm A',
            LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    // https://github.com/moment/moment/blob/develop/locale/fi.js
    var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */ numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$1(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(num, isFuture) + ' ' + result;
        return result;
    }
    /**
     * @param {?} num
     * @param {?} isFuture
     * @return {?}
     */
    function verbalNumber(num, isFuture) {
        return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
    }
    var /** @type {?} */ fiLocale = {
        abbr: 'fi',
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: translate$1,
            ss: translate$1,
            m: translate$1,
            mm: translate$1,
            h: translate$1,
            hh: translate$1,
            d: translate$1,
            dd: translate$1,
            M: translate$1,
            MM: translate$1,
            y: translate$1,
            yy: translate$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice
    var /** @type {?} */ frLocale = {
        abbr: 'fr',
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return num + (num === 1 ? 'er' : '');
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return num + (num === 1 ? 'er' : 'e');
                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return num + (num === 1 ? 're' : 'e');
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Darío Beiró : https://github.com/quinobravo
    var /** @type {?} */ monthsShortDot$3 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */ monthsShort$4 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$2 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$2 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ glLocale = {
        abbr: 'gl',
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$3;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$4[getMonth(date, isUTC)];
            }
            return monthsShortDot$3[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex$2,
        monthsShortRegex: monthsRegex$2,
        monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
        monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$2,
        longMonthsParse: monthsParse$2,
        shortMonthsParse: monthsParse$2,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'fai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter
    var /** @type {?} */ heLocale = {
        abbr: 'he',
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שעתיים';
                }
                return num + ' שעות';
            },
            d: 'יום',
            dd: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'יומיים';
                }
                return num + ' ימים';
            },
            M: 'חודש',
            MM: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'חודשיים';
                }
                return num + ' חודשים';
            },
            y: 'שנה',
            yy: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שנתיים';
                }
                else if (num % 10 === 0 && num !== 10) {
                    return num + ' שנה';
                }
                return num + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            }
            else if (hour < 10) {
                return 'בבוקר';
            }
            else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            }
            else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            }
            else {
                return 'בערב';
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    var /** @type {?} */ symbolMap$1 = {
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
        0: '०'
    }, /** @type {?} */ numberMap$1 = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };
    var /** @type {?} */ hiLocale = {
        abbr: 'hi',
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष'
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$1[match];
            });
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap$1[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            }
            else if (meridiem === 'सुबह') {
                return hour;
            }
            else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            }
            else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            }
            else if (hour < 10) {
                return 'सुबह';
            }
            else if (hour < 17) {
                return 'दोपहर';
            }
            else if (hour < 20) {
                return 'शाम';
            }
            else {
                return 'रात';
            }
        },
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$2(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    /**
     * @param {?} date
     * @param {?} isFuture
     * @return {?}
     */
    function week(date, isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
    }
    var /** @type {?} */ huLocale = {
        abbr: 'hu',
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            }
            else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, true);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, false);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: translate$2,
            ss: translate$2,
            m: translate$2,
            mm: translate$2,
            h: translate$2,
            hh: translate$2,
            d: translate$2,
            dd: translate$2,
            M: translate$2,
            MM: translate$2,
            y: translate$2,
            yy: translate$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Indonesia [id]
    //! author : Romy Kusuma : https://github.com/rkusuma
    //! reference: https://github.com/moment/moment/blob/develop/locale/id.js
    var /** @type {?} */ idLocale = {
        abbr: 'id',
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            }
            else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            }
            else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            }
            else if (hours < 15) {
                return 'siang';
            }
            else if (hours < 19) {
                return 'sore';
            }
            else {
                return 'malam';
            }
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz
    var /** @type {?} */ itLocale = {
        abbr: 'it',
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: 'un\'ora',
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon
    var /** @type {?} */ jaLocale = {
        abbr: 'ja',
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 HH:mm dddd',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日 HH:mm dddd'
        },
        meridiemParse: /午前|午後/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === '午後';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            }
            else {
                return '午後';
            }
        },
        calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: '[来週]dddd LT',
            lastDay: '[昨日] LT',
            lastWeek: '[前週]dddd LT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: /**
         * @param {?} num
         * @param {?} period
         * @return {?}
         */ function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                default:
                    return num.toString(10);
            }
        },
        relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>
    var /** @type {?} */ koLocale = {
        abbr: 'ko',
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '일';
                case 'M':
                    return num + '월';
                case 'w':
                case 'W':
                    return num + '주';
                default:
                    return num.toString(10);
            }
        },
        meridiemParse: /오전|오후/,
        isPM: function (token) {
            return token === '오후';
        },
        meridiem: function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Stanislavas Guk : https://github.com/ixoster
    var /** @type {?} */ units = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus'
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translateSeconds(num, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        }
        else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translateSingular(num, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    function special(num) {
        return num % 10 === 0 || (num > 10 && num < 20);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    function forms(key) {
        return units[key].split('_');
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$3(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        if (num === 1) {
            return result + translateSingular(num, withoutSuffix, key[0], isFuture);
        }
        else if (withoutSuffix) {
            return result + (special(num) ? forms(key)[1] : forms(key)[0]);
        }
        else {
            if (isFuture) {
                return result + forms(key)[1];
            }
            else {
                return result + (special(num) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var /** @type {?} */ ltLocale = {
        abbr: 'lt',
        months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: translateSeconds,
            ss: translate$3,
            m: translateSingular,
            mm: translate$3,
            h: translateSingular,
            hh: translate$3,
            d: translateSingular,
            dd: translate$3,
            M: translateSingular,
            MM: translate$3,
            y: translateSingular,
            yy: translate$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */ function (num) {
            return num + '-oji';
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$4(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return num + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return num + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return num + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return num + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return num + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return num.toString(10);
        }
    }
    var /** @type {?} */ mnLocale = {
        abbr: 'mn',
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (input) {
            return input === 'ҮХ';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            }
            else {
                return 'ҮХ';
            }
        },
        calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: translate$4,
            ss: translate$4,
            m: translate$4,
            mm: translate$4,
            h: translate$4,
            hh: translate$4,
            d: translate$4,
            dd: translate$4,
            M: translate$4,
            MM: translate$4,
            y: translate$4,
            yy: translate$4
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + ' өдөр';
                default:
                    return num.toString(10);
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Norwegian Bokmål [nb]
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga
    var /** @type {?} */ nbLocale = {
        abbr: 'nb',
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
    var /** @type {?} */ monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$3 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$3 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlBeLocale = {
        abbr: 'nl-be',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$3,
        monthsShortRegex: monthsRegex$3,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$3,
        longMonthsParse: monthsParse$3,
        shortMonthsParse: monthsParse$3,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */ monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlLocale = {
        abbr: 'nl',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots$1;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$1[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots$1[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$4,
        monthsShortRegex: monthsRegex$4,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$4,
        longMonthsParse: monthsParse$4,
        shortMonthsParse: monthsParse$4,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    var /** @type {?} */ monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
    var /** @type {?} */ monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$1(num) {
        return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function translate$5(num, withoutSuffix, key) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 'ss':
                return result + (plural$1(num) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural$1(num) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix ? 'godzina' : 'godzinę';
            case 'hh':
                return result + (plural$1(num) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural$1(num) ? 'lata' : 'lat');
        }
    }
    var /** @type {?} */ plLocale = {
        abbr: 'pl',
        months: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsNominative;
            }
            else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
            }
            else if (/D MMMM/.test(format)) {
                return monthsSubjective[getMonth(date, isUTC)];
            }
            else {
                return monthsNominative[getMonth(date, isUTC)];
            }
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W niedzielę o] LT';
                    case 2:
                        return '[We wtorek o] LT';
                    case 3:
                        return '[W środę o] LT';
                    case 6:
                        return '[W sobotę o] LT';
                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: translate$5,
            m: translate$5,
            mm: translate$5,
            h: translate$5,
            hh: translate$5,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: translate$5,
            y: 'rok',
            yy: translate$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
    var /** @type {?} */ ptBrLocale = {
        abbr: 'pt-br',
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'em %s',
            past: '%s atrás',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: 'secunde',
            mm: 'minute',
            hh: 'ore',
            dd: 'zile',
            MM: 'luni',
            yy: 'ani'
        };
        var /** @type {?} */ separator = ' ';
        if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
            separator = ' de ';
        }
        return num + separator + format[key];
    }
    var /** @type {?} */ roLocale = {
        abbr: 'ro',
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: relativeTimeWithPlural,
            m: 'un minut',
            mm: relativeTimeWithPlural,
            h: 'o oră',
            hh: relativeTimeWithPlural,
            d: 'o zi',
            dd: relativeTimeWithPlural,
            M: 'o lună',
            MM: relativeTimeWithPlural,
            y: 'un an',
            yy: relativeTimeWithPlural
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} word
     * @param {?} num
     * @return {?}
     */
    function plural$2(word, num) {
        var /** @type {?} */ forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural$1(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        return num + ' ' + plural$2(format[key], +num);
    }
    var /** @type {?} */ monthsParse$5 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var /** @type {?} */ ruLocale = {
        abbr: 'ru',
        months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse$5,
        longMonthsParse: monthsParse$5,
        shortMonthsParse: monthsParse$5,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
            sameDay: '[Сегодня в] LT',
            nextDay: '[Завтра в] LT',
            lastDay: '[Вчера в] LT',
            nextWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В следующее] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            lastWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В прошлое] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: relativeTimeWithPlural$1,
            m: relativeTimeWithPlural$1,
            mm: relativeTimeWithPlural$1,
            h: 'час',
            hh: relativeTimeWithPlural$1,
            d: 'день',
            dd: relativeTimeWithPlural$1,
            M: 'месяц',
            MM: relativeTimeWithPlural$1,
            y: 'год',
            yy: relativeTimeWithPlural$1
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            }
            else if (hour < 12) {
                return 'утра';
            }
            else if (hour < 17) {
                return 'дня';
            }
            else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return num + '-й';
                case 'D':
                    return num + '-го';
                case 'w':
                case 'W':
                    return num + '-я';
                default:
                    return num.toString(10);
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Jozef Pažin : https://github.com/atiris
    var /** @type {?} */ months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
    var /** @type {?} */ monthsShort$5 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$3(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$6(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'minúty' : 'minút');
                }
                else {
                    return result + 'minútami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'hodiny' : 'hodín');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'dni' : 'dní');
                }
                else {
                    return result + 'dňami';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
                }
                else {
                    return result + 'mesiacmi';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'roky' : 'rokov');
                }
                else {
                    return result + 'rokmi';
                }
        }
    }
    var /** @type {?} */ skLocale = {
        abbr: 'sk',
        months: months$2,
        monthsShort: monthsShort$5,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'o %s',
            past: 'pred %s',
            s: translate$6,
            ss: translate$6,
            m: translate$6,
            mm: translate$6,
            h: translate$6,
            hh: translate$6,
            d: translate$6,
            dd: translate$6,
            M: translate$6,
            MM: translate$6,
            y: translate$6,
            yy: translate$6
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                }
                else {
                    result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                }
                else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                }
                else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                }
                else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }
    var /** @type {?} */ slLocale = {
        abbr: 'sl',
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: processRelativeTime$1,
            ss: processRelativeTime$1,
            m: processRelativeTime$1,
            mm: processRelativeTime$1,
            h: processRelativeTime$1,
            hh: processRelativeTime$1,
            d: processRelativeTime$1,
            dd: processRelativeTime$1,
            M: processRelativeTime$1,
            MM: processRelativeTime$1,
            y: processRelativeTime$1,
            yy: processRelativeTime$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus
    var /** @type {?} */ svLocale = {
        abbr: 'sv',
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                        (b === 3) ? 'e' : 'e';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    var /** @type {?} */ thLocale = {
        abbr: 'th',
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        // yes, three characters difference
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            }
            else {
                return 'หลังเที่ยง';
            }
        },
        calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK
    var /** @type {?} */ suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };
    var /** @type {?} */ trLocale = {
        abbr: 'tr',
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl'
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            if (num === 0) {
                // special case for zero
                return num + '\'ıncı';
            }
            var /** @type {?} */ a = num % 10, /** @type {?} */ b = num % 100 - a, /** @type {?} */ c = num >= 100 ? 100 : null;
            return num + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    var /** @type {?} */ zhCnLocale = {
        abbr: 'zh-cn',
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
                return hour;
            }
            else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
            else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            var /** @type {?} */ hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            }
            else if (hm < 900) {
                return '早上';
            }
            else if (hm < 1130) {
                return '上午';
            }
            else if (hm < 1230) {
                return '中午';
            }
            else if (hm < 1800) {
                return '下午';
            }
            else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                case 'M':
                    return num + '月';
                case 'w':
                case 'W':
                    return num + '周';
                default:
                    return num.toString();
            }
        },
        relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.add = add;
    exports.subtract = subtract;
    exports.getDay = getDay;
    exports.isFirstDayOfWeek = isFirstDayOfWeek;
    exports.isSameYear = isSameYear;
    exports.isSameDay = isSameDay;
    exports.isSameMonth = isSameMonth;
    exports.getFullYear = getFullYear;
    exports.getFirstDayOfMonth = getFirstDayOfMonth;
    exports.getMonth = getMonth;
    exports.parseDate = parseDate;
    exports.formatDate = formatDate;
    exports.listLocales = listLocales;
    exports.getLocale = getLocale;
    exports.updateLocale = updateLocale;
    exports.defineLocale = defineLocale;
    exports.getSetGlobalLocale = getSetGlobalLocale;
    exports.isAfter = isAfter;
    exports.isBefore = isBefore;
    exports.isArray = isArray;
    exports.isDateValid = isDateValid;
    exports.isDate = isDate;
    exports.shiftDate = shiftDate;
    exports.setFullDate = setFullDate;
    exports.endOf = endOf;
    exports.startOf = startOf;
    exports.arLocale = arLocale;
    exports.bgLocale = bgLocale;
    exports.csLocale = csLocale;
    exports.daLocale = daLocale;
    exports.deLocale = deLocale;
    exports.enGbLocale = enGbLocale;
    exports.esDoLocale = esDoLocale;
    exports.esLocale = esLocale;
    exports.esUsLocale = esUsLocale;
    exports.fiLocale = fiLocale;
    exports.frLocale = frLocale;
    exports.glLocale = glLocale;
    exports.heLocale = heLocale;
    exports.hiLocale = hiLocale;
    exports.huLocale = huLocale;
    exports.idLocale = idLocale;
    exports.itLocale = itLocale;
    exports.jaLocale = jaLocale;
    exports.koLocale = koLocale;
    exports.ltLocale = ltLocale;
    exports.mnLocale = mnLocale;
    exports.nbLocale = nbLocale;
    exports.nlBeLocale = nlBeLocale;
    exports.nlLocale = nlLocale;
    exports.plLocale = plLocale;
    exports.ptBrLocale = ptBrLocale;
    exports.roLocale = roLocale;
    exports.ruLocale = ruLocale;
    exports.skLocale = skLocale;
    exports.slLocale = slLocale;
    exports.svLocale = svLocale;
    exports.thLocale = thLocale;
    exports.trLocale = trLocale;
    exports.zhCnLocale = zhCnLocale;
    exports.ɵa = createDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvdHlwZS1jaGVja3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9hbGlhc2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvY29uc3RhbnRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvemVyby1maWxsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0L2Zvcm1hdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWdldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9wYXJzZS9yZWdleC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3Rva2VuLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcHJpb3JpdGllcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi1tb250aC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMveWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Nsb25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvc3RhcnQtZW5kLW9mLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGUuZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9jb21wYXJlLWFycmF5cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy90aW1lem9uZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3RpbWVzdGFtcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3NlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3F1YXJ0ZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9vZmZzZXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taW51dGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taWxsaXNlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2hvdXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9sb2NhbGUvbG9jYWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLWNlaWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9idWJibGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9odW1hbml6ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2NvbnN0cnVjdG9yLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9jaGVjay1vdmVyZmxvdy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLW9iamVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2xvY2FsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLXJvdW5kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1jb21wYXJlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY3JlYXRlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbW9tZW50L2FkZC1zdWJ0cmFjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi13ZWVrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9hci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vYmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2NzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9kYS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VuLWdiLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy1kby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLXVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9maS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZnIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2dsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9oZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaGkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2h1LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9pZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2phLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9rby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbHQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL21uLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9uYi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbmwtYmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25sLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9wbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcHQtYnIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3JvLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ydS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc2sudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3NsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zdi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vdGgudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3RyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi96aC1jbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAobiAlIHggKyB4KSAlIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnNGbG9vcihudW06IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW0gPCAwID8gTWF0aC5jZWlsKG51bSkgfHwgMCA6IE1hdGguZmxvb3IobnVtKTtcbn1cblxuIiwiaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzdHI6IGFueSk6IHN0ciBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIERhdGUge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZTogYW55KTogdmFsdWUgaXMgYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVWYWxpZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gIHJldHVybiBkYXRlICYmIGRhdGUuZ2V0VGltZSAmJiAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmbjogYW55KTogZm4gaXMgRnVuY3Rpb24ge1xuICByZXR1cm4gKFxuICAgIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZT86IGFueSk6IHZhbHVlIGlzIG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheTxUPihpbnB1dD86IGFueSk6IGlucHV0IGlzIFRbXSB7XG4gIHJldHVybiAoXG4gICAgaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgKTtcbn1cblxuLy8gVE9ETzogcmV0dXJuZWQgdHlwZSBzaG91bGQgYmUgY2hhbmdlZCB0byBcImIgaXMgRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+XCJcbi8vIGFmdGVyIHVwZGF0ZSB0byB0eXBlc2NyaXB0IDMuMS4xIChpc3N1ZSA0NzI4KVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3A8VD4oYTogVCAvKm9iamVjdCovLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0PFQ+KGlucHV0OiBhbnkgLypvYmplY3QqLyk6IGlucHV0IGlzIFQge1xuICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcbiAgLy8gaW5wdXQgIT0gbnVsbFxuICByZXR1cm4gKFxuICAgIGlucHV0ICE9IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgcmV0dXJuIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMCk7XG4gIH1cbiAgbGV0IGs7XG4gIGZvciAoayBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0ludDxUPihhcmd1bWVudEZvckNvZXJjaW9uOiBzdHJpbmcgfCBudW1iZXIgfCBUKTogbnVtYmVyIHtcbiAgY29uc3QgY29lcmNlZE51bWJlciA9ICthcmd1bWVudEZvckNvZXJjaW9uO1xuICBsZXQgdmFsdWUgPSAwO1xuXG4gIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IGhhc093blByb3AsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG5leHBvcnQgdHlwZSBFeHRlbmRlZFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lIHwgJ2RhdGUnIHwgJ3dlZWsnIHwgJ2lzb1dlZWsnIHwgJ2RheU9mWWVhcicgfFxuICAnd2Vla2RheScgfCAnaXNvV2Vla2RheScgfCAnc2Vjb25kJyB8ICdtaWxsaXNlY29uZCcgfCAnbWludXRlJyB8ICdob3VyJyB8ICdxdWFydGVyJyB8ICd3ZWVrWWVhcicgfCAnaXNvV2Vla1llYXInO1xuXG5jb25zdCBfbWFwVW5pdHM6IHsgW2tleTogc3RyaW5nXTogVW5pdE9mVGltZSB9ID0ge1xuICBkYXRlOiAnZGF5JyxcbiAgaG91cjogJ2hvdXJzJyxcbiAgbWludXRlOiAnbWludXRlcycsXG4gIHNlY29uZDogJ3NlY29uZHMnLFxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0QWxpYXModW5pdDogRXh0ZW5kZWRVbml0T2ZUaW1lLCBzaG9ydGhhbmQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gIGxldCBfdW5pdCA9IHVuaXQ7XG4gIGlmIChsb3dlckNhc2UgaW4gX21hcFVuaXRzKSB7XG4gICAgX3VuaXQgPSBfbWFwVW5pdHNbbG93ZXJDYXNlXTtcbiAgfVxuICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2Ake2xvd2VyQ2FzZX1zYF0gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSBfdW5pdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIHJldHVybiBpc1N0cmluZyh1bml0cykgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBEYXRlT2JqZWN0IHtcbiAgY29uc3Qgbm9ybWFsaXplZElucHV0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGxldCBub3JtYWxpemVkUHJvcDtcbiAgbGV0IHByb3A7XG5cbiAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZElucHV0IGFzIGFueTtcbn1cbiIsIi8vIHBsYWNlIGluIG5ldyBEYXRlKFthcnJheV0pXG5leHBvcnQgY29uc3QgWUVBUiA9IDA7XG5leHBvcnQgY29uc3QgTU9OVEggPSAxO1xuZXhwb3J0IGNvbnN0IERBVEUgPSAyO1xuZXhwb3J0IGNvbnN0IEhPVVIgPSAzO1xuZXhwb3J0IGNvbnN0IE1JTlVURSA9IDQ7XG5leHBvcnQgY29uc3QgU0VDT05EID0gNTtcbmV4cG9ydCBjb25zdCBNSUxMSVNFQ09ORCA9IDY7XG5leHBvcnQgY29uc3QgV0VFSyA9IDc7XG5leHBvcnQgY29uc3QgV0VFS0RBWSA9IDg7XG4iLCJleHBvcnQgZnVuY3Rpb24gemVyb0ZpbGwobnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VTaWduPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IGFic051bWJlciA9IGAke01hdGguYWJzKG51bSl9YDtcbiAgY29uc3QgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoO1xuICBjb25zdCBzaWduID0gbnVtID49IDA7XG4gIGNvbnN0IF9zaWduID0gc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLSc7XG4gIC8vIHRvZG86IHRoaXMgaXMgY3Jhenkgc2xvd1xuICBjb25zdCBfemVyb3MgPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKTtcblxuICByZXR1cm4gKF9zaWduICsgX3plcm9zICsgYWJzTnVtYmVyKTtcbn1cbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBEYXRlRm9ybWF0dGVyRm4gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBsZXQgZm9ybWF0RnVuY3Rpb25zOiB7XG4gIFtrZXk6IHN0cmluZ106IChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZztcbn0gPSB7fTtcbmV4cG9ydCBsZXQgZm9ybWF0VG9rZW5GdW5jdGlvbnM6IHsgW2tleTogc3RyaW5nXTogRGF0ZUZvcm1hdHRlckZuIH0gPSB7fTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgY29uc3QgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRlZDogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xuXG4gIGlmICh0b2tlbikge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaWYgKHBhZGRlZCkge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB6ZXJvRmlsbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChvcmRpbmFsKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm9yZGluYWwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQ6IHN0cmluZyk6XG4gIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZyB7XG5cbiAgY29uc3QgYXJyYXk6IHN0cmluZ1tdID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZm9ybWF0QXJyOiBzdHJpbmdbXSB8IERhdGVGb3JtYXR0ZXJGbltdID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZvcm1hdEFycltpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxuICAgICAgPyBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cbiAgICAgIDogcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGZvcm1hdEFycltqXSlcbiAgICAgICAgPyAoZm9ybWF0QXJyW2pdIGFzIERhdGVGb3JtYXR0ZXJGbikuY2FsbChudWxsLCBkYXRlLCB7Zm9ybWF0LCBsb2NhbGUsIGlzVVRDLCBvZmZzZXR9KVxuICAgICAgICA6IGZvcm1hdEFycltqXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHk/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD86IG51bWJlcik6IERhdGUge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG5cbiAgLy8gdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoeT86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE0gPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtcyA9IDApOiBEYXRlIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcblxuICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0RnVsbFllYXIoKSkpIHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWludXRlcyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDU2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXkoKSA6IGRhdGUuZ2V0RGF5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0RhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxZZWFyKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml4VGltZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKGRhdGUudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdERheU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRNb250aCgpLFxuICAgIDEsXG4gICAgZGF0ZS5nZXRIb3VycygpLFxuICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgIGRhdGUuZ2V0U2Vjb25kcygpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIF9kYXlzSW5Nb250aChkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZGF5c0luTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlyc3REYXlPZldlZWsoZGF0ZTogRGF0ZSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gZGF0ZS5nZXREYXkoKSA9PT0gZmlyc3REYXlPZldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmIGdldE1vbnRoKGRhdGUxKSA9PT0gZ2V0TW9udGgoZGF0ZTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lWWVhcihkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZ2V0RnVsbFllYXIoZGF0ZTEpID09PSBnZXRGdWxsWWVhcihkYXRlMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBpc1NhbWVZZWFyKGRhdGUxLCBkYXRlMikgJiZcbiAgICBpc1NhbWVNb250aChkYXRlMSwgZGF0ZTIpICYmXG4gICAgZ2V0RGF0ZShkYXRlMSkgPT09IGdldERhdGUoZGF0ZTIpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCBtYXRjaDEgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxuZXhwb3J0IGNvbnN0IG1hdGNoMiA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbmV4cG9ydCBjb25zdCBtYXRjaDMgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG5leHBvcnQgY29uc3QgbWF0Y2g0ID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDYgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8yID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxuZXhwb3J0IGNvbnN0IG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNCA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG5leHBvcnQgY29uc3QgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbmV4cG9ydCBjb25zdCBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxuZXhwb3J0IGNvbnN0IG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbmV4cG9ydCBjb25zdCBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbmV4cG9ydCBjb25zdCBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgY29uc3QgbWF0Y2hXb3JkID0gL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2k7XG5cbmV4cG9ydCB0eXBlIFJlZ0V4cFRva2VuRm4gPSAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSA9PiBSZWdFeHA7XG5jb25zdCByZWdleGVzOiB7W2tleTogc3RyaW5nXTogUmVnRXhwVG9rZW5Gbn0gPSB7fTtcblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbjogc3RyaW5nLCByZWdleDogUmVnRXhwIHwgUmVnRXhwVG9rZW5Gbiwgc3RyaWN0UmVnZXg/OiBSZWdFeHApOiB2b2lkIHtcbiAgaWYgKGlzRnVuY3Rpb24ocmVnZXgpKSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSByZWdleDtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlZ2V4ZXNbdG9rZW5dID0gZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkge1xuICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbjogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gIGNvbnN0IF9zdHJpY3QgPSBmYWxzZTtcbiAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oX3N0cmljdCwgbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuIHJlZ2V4RXNjYXBlKHN0clxuICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSA9PiBwMSB8fCBwMiB8fCBwMyB8fCBwNClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB0b2tlbnM6IHtba2V5OiBzdHJpbmddOiBEYXRlUGFyc2VUb2tlbkZufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XG4gIGNvbnN0IF90b2tlbiA9IGlzU3RyaW5nKHRva2VuKSA/IFt0b2tlbl0gOiB0b2tlbjtcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcblxuICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcblxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJjb25zdCBwcmlvcml0aWVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xuICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICBjb25zdCB1bml0cyA9IFtdO1xuICBsZXQgdW5pdDtcbiAgZm9yICh1bml0IGluIHVuaXRzT2JqKSB7XG4gICAgaWYgKHVuaXRzT2JqLmhhc093blByb3BlcnR5KHVuaXQpKSB7XG4gICAgICB1bml0cy5wdXNoKHsgdW5pdCwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdW5pdF0gfSk7XG4gICAgfVxuICB9XG4gIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gIH0pO1xuXG4gIHJldHVybiB1bml0cztcbn1cbiovXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mTW9udGgoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMiwgZmFsc2VdLCAnRG8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXREYXRlKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuLy8gUFJJT1JPSVRZXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbiAgYWRkUGFyc2VUb2tlbihcbiAgICAnRG8nLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnLCBEYXRlUGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcblxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcbiAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICByZXR1cm4ge1xuICAgIGVtcHR5OiBmYWxzZSxcbiAgICB1bnVzZWRUb2tlbnM6IFtdLFxuICAgIHVudXNlZElucHV0OiBbXSxcbiAgICBvdmVyZmxvdzogLTIsXG4gICAgY2hhcnNMZWZ0T3ZlcjogMCxcbiAgICBudWxsSW5wdXQ6IGZhbHNlLFxuICAgIGludmFsaWRNb250aDogbnVsbCxcbiAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcbiAgICB1c2VySW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgIGlzbzogZmFsc2UsXG4gICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcbiAgICBtZXJpZGllbTogbnVsbCxcbiAgICByZmMyODIyOiBmYWxzZSxcbiAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nRmxhZ3Mge1xuICBpZiAoY29uZmlnLl9wZiA9PSBudWxsKSB7XG4gICAgY29uZmlnLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWcuX3BmO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGdldEZ1bGxZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IFlFQVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gZ2V0WWVhcihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFllYXIoKSB7XG4gIGFkZEZvcm1hdFRva2VuKCdZJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHkgPSBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKTtcblxuICAgIHJldHVybiB5IDw9IDk5OTkgPyB5LnRvU3RyaW5nKDEwKSA6IGArJHt5fWA7XG4gIH0pO1xuXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVknLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpICUgMTAwKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWScsIDQsIGZhbHNlXSwgbnVsbCwgZ2V0WWVhcik7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWVknLCA1LCBmYWxzZV0sIG51bGwsIGdldFllYXIpO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZWScsIDYsIHRydWVdLCBudWxsLCBnZXRZZWFyKTtcblxuICAvLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCd5ZWFyJywgJ3knKTtcblxuICAvLyBQUklPUklUSUVTXG5cbiAgYWRkVW5pdFByaW9yaXR5KCd5ZWFyJywgMSk7XG5cbiAgLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ1lZJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdZWVlZJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICBhZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG4gIGFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XG4gIGFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtZRUFSXSA9IGlucHV0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGFycmF5W1lFQVJdID0gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBpc0xlYXBZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gdG9kbzogdGhpcyBpcyBkdXBsaWNhdGUsIHNvdXJjZSBpbiBkYXRlLWdldHRlcnMudHNcbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICBjb25zdCBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICBjb25zdCBfeWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcblxuICByZXR1cm4gbW9kTW9udGggPT09IDFcbiAgICA/IGlzTGVhcFllYXIoX3llYXIpID8gMjkgOiAyOFxuICAgIDogKDMxIC0gbW9kTW9udGggJSA3ICUgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9udGgoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMiwgZmFsc2VdLCAnTW8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TW9udGgoZGF0ZSwgb3B0cy5pc1VUQykgKyAxKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdNTU0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tb250aHNTaG9ydChkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUubW9udGhzKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnbW9udGgnLCAnTScpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ00nLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuICBhZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFxuICAgIFsnTU1NJywgJ01NTU0nXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgY29uc3QgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gbW9udGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSAhIWlucHV0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cbiIsImltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4vdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgaXNMZWFwWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG5jb25zdCBkZWZhdWx0VGltZVVuaXQ6IFRpbWVVbml0ID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMCxcbiAgZGF5OiAwLFxuICBob3VyOiAwLFxuICBtaW51dGU6IDAsXG4gIHNlY29uZHM6IDBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdERhdGUoZGF0ZTogRGF0ZSwgdW5pdDogVGltZVVuaXQpOiBEYXRlIHtcbiAgY29uc3QgX3VuaXQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VGltZVVuaXQsIHVuaXQpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgKF91bml0LnllYXIgfHwgMCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgKF91bml0Lm1vbnRoIHx8IDApO1xuICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgKyAoX3VuaXQuZGF5IHx8IDApO1xuICBpZiAoX3VuaXQubW9udGggJiYgIV91bml0LmRheSkge1xuICAgIGRheSA9IE1hdGgubWluKGRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKFxuICAgIHllYXIsXG4gICAgbW9udGgsXG4gICAgZGF5LFxuICAgIGRhdGUuZ2V0SG91cnMoKSArIChfdW5pdC5ob3VyIHx8IDApLFxuICAgIGRhdGUuZ2V0TWludXRlcygpICsgKF91bml0Lm1pbnV0ZSB8fCAwKSxcbiAgICBkYXRlLmdldFNlY29uZHMoKSArIChfdW5pdC5zZWNvbmRzIHx8IDApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsRGF0ZShkYXRlOiBEYXRlLCB1bml0OiBUaW1lVW5pdCk6IERhdGUge1xuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICBnZXROdW0oZGF0ZS5nZXRGdWxsWWVhcigpLCB1bml0LnllYXIpLFxuICAgIGdldE51bShkYXRlLmdldE1vbnRoKCksIHVuaXQubW9udGgpLFxuICAgIGdldE51bShkYXRlLmdldERhdGUoKSwgdW5pdC5kYXkpLFxuICAgIGdldE51bShkYXRlLmdldEhvdXJzKCksIHVuaXQuaG91ciksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TWludXRlcygpLCB1bml0Lm1pbnV0ZSksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0U2Vjb25kcygpLCB1bml0LnNlY29uZHMpLFxuICAgIGdldE51bShkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB1bml0Lm1pbGxpc2Vjb25kcylcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0TnVtKGRlZjogbnVtYmVyLCBudW0/OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaXNOdW1iZXIobnVtKSA/IG51bSA6IGRlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZ1bGxZZWFyKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBfbW9udGggPSBnZXRNb250aChkYXRlLCBpc1VUQyk7XG4gIGNvbnN0IF9kYXRlID0gZ2V0RGF0ZShkYXRlLCBpc1VUQyk7XG4gIGNvbnN0IF95ZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpO1xuICBpZiAoaXNMZWFwWWVhcihfeWVhcikgJiYgX21vbnRoID09PSAxICYmIF9kYXRlID09PSAyOSkge1xuICAgIGNvbnN0IF9kYXlzSW5Nb250aCA9IGRheXNJbk1vbnRoKHZhbHVlLCBfbW9udGgpO1xuICAgIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSwgX21vbnRoLCBfZGF5c0luTW9udGgpIDogZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgX21vbnRoLCBfZGF5c0luTW9udGgpO1xuICB9XG5cbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9udGgoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGRheU9mTW9udGggPSBNYXRoLm1pbihnZXREYXRlKGRhdGUpLCBkYXlzSW5Nb250aChnZXRGdWxsWWVhcihkYXRlKSwgdmFsdWUpKTtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKSA6IGRhdGUuc2V0TW9udGgodmFsdWUsIGRheU9mTW9udGgpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5KGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SG91cnMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSkgOiBkYXRlLnNldEhvdXJzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbnV0ZXMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlKSA6IGRhdGUuc2V0TWludXRlcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWNvbmRzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDU2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldFNlY29uZHModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWlsbGlzZWNvbmRzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWlsbGlzZWNvbmRzKHZhbHVlKSA6IGRhdGUuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGUoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENEYXRlKHZhbHVlKSA6IGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaW1lKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIpOiBEYXRlIHtcbiAgZGF0ZS5zZXRUaW1lKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cbiIsIi8vIGZhc3Rlc3Qgd2F5IHRvIGNsb25lIGRhdGVcbi8vIGh0dHBzOi8vanNwZXJmLmNvbS9jbG9uZS1kYXRlLW9iamVjdDJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZURhdGUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6IHN3aXRjaC1kZWZhdWx0XG5pbXBvcnQgeyBUaW1lVW5pdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIHNldERhdGUsIHNldEZ1bGxEYXRlLCBzZXRIb3Vycywgc2V0TWlsbGlzZWNvbmRzLCBzZXRNaW51dGVzLCBzZXRNb250aCwgc2V0U2Vjb25kcyxcbiAgc2hpZnREYXRlXG59IGZyb20gJy4vZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzZXRJU09EYXlPZldlZWssIHNldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX2RhdGUgPSBjbG9uZURhdGUoZGF0ZSk7XG4gIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcbiAgLy8gdG8gdXRpbGl6ZSBmYWxsaW5nIHRocm91Z2ggdGhlIGNhc2VzLlxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHNldE1vbnRoKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHNldERhdGUoX2RhdGUsIDEsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHNldEhvdXJzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHNldE1pbnV0ZXMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICBzZXRTZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgc2V0TWlsbGlzZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XG4gIH1cblxuICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcbiAgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xuICAgIHNldExvY2FsZURheU9mV2VlayhfZGF0ZSwgMCwge2lzVVRDfSk7XG4gIH1cbiAgaWYgKHVuaXQgPT09ICdpc29XZWVrJykge1xuICAgIHNldElTT0RheU9mV2VlayhfZGF0ZSwgMSk7XG4gIH1cblxuICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gIGlmICh1bml0ID09PSAncXVhcnRlcicpIHtcbiAgICBzZXRNb250aChfZGF0ZSwgTWF0aC5mbG9vcihnZXRNb250aChfZGF0ZSwgaXNVVEMpIC8gMykgKiAzLCBpc1VUQyk7XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgbGV0IF91bml0ID0gdW5pdDtcbiAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cbiAgaWYgKF91bml0ID09PSAnZGF0ZScpIHtcbiAgICBfdW5pdCA9ICdkYXknO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSBzdGFydE9mKGRhdGUsIF91bml0LCBpc1VUQyk7XG4gIGNvbnN0IF9zdGVwID0gYWRkKHN0YXJ0LCAxLCBfdW5pdCA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogX3VuaXQsIGlzVVRDKTtcbiAgY29uc3QgcmVzID0gc3VidHJhY3QoX3N0ZXAsIDEsICdtaWxsaXNlY29uZHMnLCBpc1VUQyk7XG5cbiAgcmV0dXJuIHJlcztcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBzdGFydE9mIH0gZnJvbSAnLi4vdXRpbHMvc3RhcnQtZW5kLW9mJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMywgbWF0Y2gzIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mWWVhcigpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgMywgZmFsc2VdLCAnREREbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0REREQnLCBtYXRjaDMpO1xuICBhZGRQYXJzZVRva2VuKFxuICAgIFsnREREJywgJ0REREQnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IGRhdGUxID0gK3N0YXJ0T2YoZGF0ZSwgJ2RheScsIGlzVVRDKTtcbiAgY29uc3QgZGF0ZTIgPSArc3RhcnRPZihkYXRlLCAneWVhcicsIGlzVVRDKTtcbiAgY29uc3Qgc29tZURhdGUgPSBkYXRlMSAtIGRhdGUyO1xuICBjb25zdCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHNvbWVEYXRlIC8gb25lRGF5KSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXlPZlllYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlcik6IERhdGUge1xuICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSBkYXlPZlllYXIpLCAnZGF5Jyk7XG59XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geWVhclxuICogQHBhcmFtIHtudW1iZXJ9IGRvdyAtIHN0YXJ0LW9mLWZpcnN0LXdlZWtcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3kgLSBzdGFydC1vZi15ZWFyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gJy4vZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG5mdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhcjogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgY29uc3QgZndkID0gZG93IC0gZG95ICsgNztcbiAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICBjb25zdCBmd2RsdyA9IChjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cgKyA3KSAlIDc7XG5cbiAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKFxuICB5ZWFyOiBudW1iZXIsXG4gIHdlZWs6IG51bWJlcixcbiAgd2Vla2RheTogbnVtYmVyLFxuICBkb3c6IG51bWJlcixcbiAgZG95OiBudW1iZXJcbik6IHsgeWVhcjogbnVtYmVyOyBkYXlPZlllYXI6IG51bWJlciB9IHtcbiAgY29uc3QgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDc7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0O1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuICBsZXQgcmVzRGF5T2ZZZWFyOiBudW1iZXI7XG5cbiAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2Uge1xuICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogcmVzWWVhcixcbiAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla09mWWVhcihkYXRlOiBEYXRlLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IHsgd2VlazogbnVtYmVyOyB5ZWFyOiBudW1iZXIgfSB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gIGNvbnN0IHdlZWsgPSBNYXRoLmZsb29yKChnZXREYXlPZlllYXIoZGF0ZSwgaXNVVEMpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxO1xuICBsZXQgcmVzV2VlazogbnVtYmVyO1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuXG4gIGlmICh3ZWVrIDwgMSkge1xuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgLSAxO1xuICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KSkge1xuICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSArIDE7XG4gIH0gZWxzZSB7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgICByZXNXZWVrID0gd2VlaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2VlazogcmVzV2VlayxcbiAgICB5ZWFyOiByZXNZZWFyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyOiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuXG4gIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCBtYXgtbGluZS1sZW5ndGggY3ljbG9tYXRpYy1jb21wbGV4aXR5XG5cbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXREYXksIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBzZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlT3B0aW9uc0Zvcm1hdCB7XG4gIGZvcm1hdDogc3RyaW5nW107XG4gIHN0YW5kYWxvbmU6IHN0cmluZ1tdO1xuICBpc0Zvcm1hdD86IFJlZ0V4cDtcbn1cblxuZXhwb3J0IHR5cGUgTG9jYWxlT3B0aW9ucyA9IHN0cmluZ1tdIHwgTG9jYWxlT3B0aW9uc0Zvcm1hdDtcblxuY29uc3QgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICBMVFM6ICdoOm1tOnNzIEEnLFxuICBMVDogJ2g6bW0gQScsXG4gIEw6ICdNTS9ERC9ZWVlZJyxcbiAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuY29uc3QgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5jb25zdCBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbmV4cG9ydCB0eXBlIE9yZGluYWxEYXRlRm4gPSAobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKSA9PiBzdHJpbmc7XG5leHBvcnQgdHlwZSBQbHVyYWxpemVEYXRlRm4gPSAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Pzogc3RyaW5nLCBpc0Z1dHVyZT86IGJvb2xlYW4pID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVEYXRhIHtcbiAgYWJicj86IHN0cmluZztcbiAgcGFyZW50TG9jYWxlPzogc3RyaW5nO1xuXG4gIG1vbnRocz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgbW9udGhzU2hvcnQ/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIG1vbnRoc1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIHdlZWtkYXlzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1Nob3J0Pzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNNaW4/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIGxvbmdEYXRlRm9ybWF0PzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICBjYWxlbmRhcj86IHtcbiAgICBba2V5OiBzdHJpbmddOiAoc3RyaW5nXG4gICAgICB8ICgoZGF0ZTogRGF0ZSwgbm93PzogRGF0ZSkgPT4gc3RyaW5nKVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICB8ICgoZGF5T2ZXZWVrOiBudW1iZXIsIGlzTmV4dFdlZWs6IGJvb2xlYW4pID0+IHN0cmluZykpXG4gIH07XG4gIHJlbGF0aXZlVGltZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgUGx1cmFsaXplRGF0ZUZuIH07XG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U/OiBSZWdFeHA7XG4gIG9yZGluYWw/OiBzdHJpbmcgfCBPcmRpbmFsRGF0ZUZuO1xuXG4gIHdlZWs/OiB7IGRvdz86IG51bWJlcjsgZG95PzogbnVtYmVyIH07XG5cbiAgaW52YWxpZERhdGU/OiBzdHJpbmc7XG5cbiAgbW9udGhzUmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1BhcnNlPzogUmVnRXhwW107XG4gIG1vbnRoc1Nob3J0UmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1N0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBsb25nTW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcbiAgc2hvcnRNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuXG4gIG1lcmlkaWVtUGFyc2U/OiBSZWdFeHA7XG5cbiAgbWVyaWRpZW1Ib3VyPyhob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgcHJlcGFyc2U/KHN0cjogc3RyaW5nKTogc3RyaW5nO1xuXG4gIHBvc3Rmb3JtYXQ/KHN0cjogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1lcmlkaWVtPyhob3VyOiBudW1iZXIsIG1pbnV0ZT86IG51bWJlciwgaXNMb3dlcj86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgaXNQTT8oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbGUge1xuICBwYXJlbnRMb2NhbGU/OiBMb2NhbGU7XG4gIF9hYmJyOiBzdHJpbmc7XG4gIF9jb25maWc6IExvY2FsZURhdGE7XG4gIG1lcmlkaWVtSG91cjogKGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZykgPT4gbnVtYmVyO1xuXG4gIF9pbnZhbGlkRGF0ZTogc3RyaW5nO1xuICBfd2VlazogeyBkb3c6IG51bWJlcjsgZG95OiBudW1iZXIgfTtcbiAgX2RheU9mTW9udGhPcmRpbmFsUGFyc2U6IFJlZ0V4cDtcbiAgX29yZGluYWxQYXJzZTogUmVnRXhwO1xuICBfbWVyaWRpZW1QYXJzZTogUmVnRXhwO1xuXG4gIHByaXZhdGUgX2NhbGVuZGFyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwcml2YXRlIF9yZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBzdHJpbmc7IHBhc3Q6IHN0cmluZyB9O1xuICBwcml2YXRlIF9tb250aHM6IExvY2FsZU9wdGlvbnM7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF9tb250aHNSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTaG9ydFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1N0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2U6IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9sb25nTW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX3Nob3J0TW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX21vbnRoc1BhcnNlRXhhY3Q6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZUV4YWN0OiBib29sZWFuO1xuICBwcml2YXRlIF93ZWVrZGF5c1JlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c01pblJlZ2V4OiBSZWdFeHA7XG5cbiAgcHJpdmF0ZSBfd2Vla2RheXNTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5TdHJpY3RSZWdleDogUmVnRXhwO1xuXG4gIHByaXZhdGUgX3dlZWtkYXlzOiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9taW5XZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9zaG9ydFdlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX2Z1bGxXZWVrZGF5c1BhcnNlOiBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbG9uZ0RhdGVGb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgcHJpdmF0ZSBfb3JkaW5hbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTG9jYWxlRGF0YSkge1xuICAgIGlmICghIWNvbmZpZykge1xuICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBzZXQoY29uZmlnOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgbGV0IGNvbmZLZXk7XG4gICAgZm9yIChjb25mS2V5IGluIGNvbmZpZykge1xuICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkoY29uZktleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9wID0gY29uZmlnW2NvbmZLZXkgYXMga2V5b2YgTG9jYWxlRGF0YV07XG4gICAgICBjb25zdCBrZXkgPSAoaXNGdW5jdGlvbihwcm9wKSA/IGNvbmZLZXkgOiBgXyR7Y29uZktleX1gKSBhcyBrZXlvZiBMb2NhbGU7XG5cbiAgICAgIHRoaXNba2V5XSA9IHByb3AgYXMgYW55O1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNhbGVuZGFyKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXIuc2FtZUVsc2U7XG5cbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobnVsbCwgZGF0ZSwgbm93KSA6IG91dHB1dDtcbiAgfVxuXG4gIGxvbmdEYXRlRm9ybWF0KGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gIH1cblxuICBnZXQgaW52YWxpZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gIH1cblxuICBzZXQgaW52YWxpZERhdGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnZhbGlkRGF0ZSA9IHZhbDtcbiAgfVxuXG4gIG9yZGluYWwobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyXTtcblxuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XG4gICAgICBvdXRwdXQobnVtLCB3aXRob3V0U3VmZml4LCBzdHIsIGlzRnV0dXJlKSA6XG4gICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKDEwKSk7XG4gIH1cblxuICBwYXN0RnV0dXJlKGRpZmY6IG51bWJlciwgb3V0cHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcblxuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xuICB9XG5cbiAgLyoqIE1vbnRocyAqL1xuICBtb250aHMoKTogc3RyaW5nW107XG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgbW9udGhzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocylcbiAgICAgICAgPyB0aGlzLl9tb250aHNcbiAgICAgICAgOiB0aGlzLl9tb250aHMuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocykpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzW2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnQuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgbW9udGhzUGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGRhdGU7XG4gICAgbGV0IHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCBpKSk7XG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgY29uc3QgX21vbnRocyA9IHRoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBjb25zdCBfc2hvcnRNb250aHMgPSB0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfbW9udGhzfSRgLCAnaScpO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X3Nob3J0TW9udGhzfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9YDtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICB9XG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiAodGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgKHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb250aHNSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgfVxuXG4gIC8qKiBXZWVrICovXG4gIHdlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3ksIGlzVVRDKS53ZWVrO1xuICB9XG5cbiAgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gIH1cblxuICBmaXJzdERheU9mWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgfVxuXG4gIC8qKiBEYXkgb2YgV2VlayAqL1xuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpXG4gICAgICAgID8gdGhpcy5fd2Vla2RheXNcbiAgICAgICAgOiB0aGlzLl93ZWVrZGF5cy5zdGFuZGFsb25lO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgY29uc3QgX2tleSA9IHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbX2tleV1bZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXNNaW4oZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzTWluKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzTWluW2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNNaW47XG4gIH1cblxuICB3ZWVrZGF5c1Nob3J0KCk6IHN0cmluZ1tdO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICB9XG5cblxuICAvLyBwcm90by53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuICB3ZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBpO1xuICAgIGxldCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gZml4OiBoZXJlIGlzIHRoZSBpc3N1ZVxuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKX1gO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fbWluV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl93ZWVrZGF5c1BhcnNlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHByb3RvLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcbiAgd2Vla2RheXNSZWdleChpc1N0cmljdDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG4gIH1cblxuICAvLyBwcm90by53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgLy8gcHJvdG8ud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xuXG5cbiAgd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIGlzUE0oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcbiAgfVxuXG4gIG1lcmlkaWVtKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgaXNMb3dlcjogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgfVxuXG4gIGZvcm1hdExvbmdEYXRlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdCA/IHRoaXMuX2xvbmdEYXRlRm9ybWF0IDogZGVmYXVsdExvbmdEYXRlRm9ybWF0O1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtcbiAgICAgIGtleVxuICAgICAgXSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWk7XG4gICAgbGV0IG1vbTtcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICBtb20gPSBuZXcgRGF0ZSgyMDAwLCBpKTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpaTtcbiAgICAgIH1cblxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGlpO1xuICAgIH1cbiAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGlpO1xuICAgIGNvbnN0IGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgbGV0IGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKGRhdGUsICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzUGFyc2UpXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fbWluV2Vla2RheXNQYXJzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICBjb25zdCBzaG9ydFBpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1peGVkUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBkYXRlO1xuXG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xuICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XG4gICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgY29uc3QgbWluUGllY2VzID0gW107XG4gICAgY29uc3Qgc2hvcnRQaWVjZXMgPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzID0gW107XG4gICAgY29uc3QgbWl4ZWRQaWVjZXMgPSBbXTtcblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gbGV0IG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgIGNvbnN0IG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpO1xuICAgICAgY29uc3Qgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpO1xuICAgICAgY29uc3QgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKGRhdGUpO1xuICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21pblBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY21wTGVuUmV2KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdENhbGVuZGFyID0ge1xuICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxuICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICBzYW1lRWxzZTogJ0wnXG59O1xuIiwiaW1wb3J0IHtcbiAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsIGRlZmF1bHRPcmRpbmFsLFxuICBMb2NhbGVEYXRhXG59IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGRlZmF1bHRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgZG95OiA2IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlbGF0aXZlVGltZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gIGZ1dHVyZSA6ICdpbiAlcycsXG4gIHBhc3QgICA6ICclcyBhZ28nLFxuICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgc3MgOiAnJWQgc2Vjb25kcycsXG4gIG0gIDogJ2EgbWludXRlJyxcbiAgbW0gOiAnJWQgbWludXRlcycsXG4gIGggIDogJ2FuIGhvdXInLFxuICBoaCA6ICclZCBob3VycycsXG4gIGQgIDogJ2EgZGF5JyxcbiAgZGQgOiAnJWQgZGF5cycsXG4gIE0gIDogJ2EgbW9udGgnLFxuICBNTSA6ICclZCBtb250aHMnLFxuICB5ICA6ICdhIHllYXInLFxuICB5eSA6ICclZCB5ZWFycydcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnOiBMb2NhbGVEYXRhID0ge1xuICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2Vcbn07XG4iLCIvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4vdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5czxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10sIGRvbnRDb252ZXJ0OiBib29sZWFuKSB7XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpO1xuICBjb25zdCBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpO1xuICBsZXQgZGlmZnMgPSAwO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSlcbiAgICAgIHx8ICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSkpIHtcbiAgICAgIGRpZmZzKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2VlaygpIHtcbiAgYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMiwgZmFsc2VdLCAnd28nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRXZWVrKGRhdGUsIG9wdHMubG9jYWxlKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyLCBmYWxzZV0sICdXbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SVNPV2VlayhkYXRlKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG4gIGFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrJywgNSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1cnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ3cnLCAnd3cnLCAnVycsICdXVyddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWsgKGlucHV0KSB7XG4vLyAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuLy8gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0V2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSk6IERhdGUge1xuICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBsb2NhbGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gd2VlaykgKiA3LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gbG9jYWxlLndlZWsoZGF0ZSwgaXNVVEMpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayAoaW5wdXQpIHtcbi8vICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4vLyAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElTT1dlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlcik6IERhdGUge1xuICBjb25zdCB3ZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIHdlZWspICogNywgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCAxLCA0LCBpc1VUQykud2Vlaztcbn1cblxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgcGFyc2VUd29EaWdpdFllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgZGF5T2ZZZWFyRnJvbVdlZWtzLCB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBnZXRJU09XZWVrLCBnZXRXZWVrIH0gZnJvbSAnLi93ZWVrJztcbmltcG9ydCB7IGdldElTT0RheU9mV2VlaywgZ2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRGdWxsWWVhciwgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlckZuLCBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWVrWWVhcigpIHtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydnZycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgLy8gcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbiAgICAgIHJldHVybiAoZ2V0V2Vla1llYXIoZGF0ZSwgb3B0cy5sb2NhbGUpICUgMTAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ0dHJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIC8vIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCkgJSAxMDA7XG4gICAgICByZXR1cm4gKGdldElTT1dlZWtZZWFyKGRhdGUpICUgMTAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgKTtcblxuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgX2dldFdlZWtZZWFyRm9ybWF0Q2IpO1xuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsIF9nZXRXZWVrWWVhckZvcm1hdENiKTtcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKTtcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG4gIGFkZFVuaXRBbGlhcygnaXNvV2Vla1llYXInLCAnR0cnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XG4gIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignRycsIG1hdGNoU2lnbmVkKTtcbiAgYWRkUmVnZXhUb2tlbignZycsIG1hdGNoU2lnbmVkKTtcbiAgYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2dnJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdHR0dHJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICBhZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICBhZGRSZWdleFRva2VuKCdHR0dHRycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSxcbiAgICBmdW5jdGlvbiAoaW5wdXQsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWcsIHRva2VuKSB7XG4gICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSk7XG5cbiAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBnZXR0ZXI6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbdG9rZW4sIHRva2VuLmxlbmd0aCwgZmFsc2VdLCBudWxsLCBnZXR0ZXIpO1xufVxuXG5mdW5jdGlvbiBfZ2V0V2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRXZWVrWWVhcihkYXRlLCBvcHRzLmxvY2FsZSkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gX2dldElTT1dlZWtZZWFyRm9ybWF0Q2IoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRJU09XZWVrWWVhcihkYXRlKS50b1N0cmluZygpO1xufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLFxuICAgIGlucHV0LFxuICAgIC8vIHRoaXMud2VlaygpLFxuICAgIGdldFdlZWsoZGF0ZSwgbG9jYWxlLCBpc1VUQyksXG4gICAgLy8gdGhpcy53ZWVrZGF5KCksXG4gICAgZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIGxvY2FsZSwgaXNVVEMpLFxuICAgIGxvY2FsZS5maXJzdERheU9mV2VlaygpLFxuICAgIGxvY2FsZS5maXJzdERheU9mWWVhcigpLFxuICAgIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCksIGlzVVRDKS55ZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLCBpbnB1dCwgZ2V0SVNPV2VlayhkYXRlLCBpc1VUQyksIGdldElTT0RheU9mV2VlayhkYXRlLCBpc1VUQyksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgMSwgNCwgaXNVVEMpLnllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgMSwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBudW1iZXIge1xuICByZXR1cm4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCB3ZWVrOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0V2Vla1llYXIoZGF0ZSwgdm9pZCAwLCBpc1VUQyk7XG4gIH1cblxuICBjb25zdCB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gIGNvbnN0IF93ZWVrID0gd2VlayA+IHdlZWtzVGFyZ2V0ID8gd2Vla3NUYXJnZXQgOiB3ZWVrO1xuXG4gIHJldHVybiBzZXRXZWVrQWxsKGRhdGUsIGlucHV0LCBfd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xufVxuXG5mdW5jdGlvbiBzZXRXZWVrQWxsKGRhdGU6IERhdGUsIHdlZWtZZWFyOiBudW1iZXIsIHdlZWs6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheTogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3QgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICBjb25zdCBfZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG4gIHNldEZ1bGxZZWFyKGRhdGUsIGdldEZ1bGxZZWFyKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XG4gIHNldE1vbnRoKGRhdGUsIGdldE1vbnRoKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XG4gIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyB0b2RvOiBhZGQgc3VwcG9ydCBmb3IgdGltZXpvbmVzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VGltZXpvbmUoKSB7XG4gIC8vIEZPUk1BVFRJTkdcbiAgYWRkRm9ybWF0VG9rZW4oJ3onLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmlzVVRDID8gJ1VUQycgOiAnJztcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCd6eicsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMuaXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG4gICAgfVxuICApO1xufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lQWJicihpc1VUQzogYm9vbGVhbikge1xuICByZXR1cm4gaXNVVEMgPyAnVVRDJyA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZU5hbWUoaXNVVEM6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGlzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHVuaXggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hTaWduZWQsIG1hdGNoVGltZXN0YW1wIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbn0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWVzdGFtcCgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignWCcsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB1bml4KGRhdGUpXG4gICAgICAudG9TdHJpbmcoMTApO1xuICB9KTtcbiAgYWRkRm9ybWF0VG9rZW4oJ3gnLCBudWxsLCBudWxsLCBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKClcbiAgICAgIC50b1N0cmluZygxMCk7XG4gIH0pO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbiAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcblxuICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0KSAqIDEwMDApO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRTZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTZWNvbmQoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNT05USCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRRdWFydGVyKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdRJywgbnVsbCwgJ1FvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0UXVhcnRlcihkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbiAgYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWFydGVyKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5jZWlsKChnZXRNb250aChkYXRlLCBpc1VUQykgKyAxKSAvIDMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UXVhcnRlcihkYXRlOiBEYXRlLCBxdWFydGVyOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICByZXR1cm4gc2V0TW9udGgoZGF0ZSwgKHF1YXJ0ZXIgLSAxKSAqIDMgKyBnZXRNb250aChkYXRlLCBpc1VUQykgJSAzLCBpc1VUQyk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXRRdWFydGVyKGlucHV0KSB7XG4vLyAgIHJldHVybiBpbnB1dCA9PSBudWxsXG4vLyAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcbi8vICAgICA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgdGhpcy5tb250aCgpICUgMyk7XG4vLyB9XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIG1heC1saW5lLWxlbmd0aFxuLy8gRk9STUFUVElOR1xuXG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hPZmZzZXQsIG1hdGNoU2hvcnRPZmZzZXQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuXG5mdW5jdGlvbiBhZGRPZmZzZXRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyk6IHZvaWQge1xuICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKGRhdGU6IERhdGUsIGNvbmZpZyk6IHN0cmluZyB7XG4gICAgbGV0IG9mZnNldCA9IGdldFVUQ09mZnNldChkYXRlLCB7X2lzVVRDOiBjb25maWcuaXNVVEMsIF9vZmZzZXQ6IGNvbmZpZy5vZmZzZXR9KTtcbiAgICBsZXQgc2lnbiA9ICcrJztcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0T2Zmc2V0KCkge1xuICBhZGRPZmZzZXRGb3JtYXRUb2tlbignWicsICc6Jyk7XG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaWicsICcnKTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xufVxuXG4vLyBIRUxQRVJTXG5cbi8vIHRpbWV6b25lIGNodW5rZXJcbi8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG5jb25zdCBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyOiBSZWdFeHAsIHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgbWF0Y2hlcyA9IChzdHIgfHwgJycpLm1hdGNoKG1hdGNoZXIpO1xuXG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjaHVuayA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcGFydHMgPSBjaHVuay5tYXRjaChjaHVua09mZnNldCkgfHwgWyctJywgJzAnLCAnMCddO1xuICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKSAqIDYwICsgdG9JbnQocGFydHNbMl0pO1xuICBjb25zdCBfbWluID0gcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcblxuICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBfbWluO1xufVxuXG4vLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dDogRGF0ZSwgZGF0ZTogRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XG4gIGlmICghY29uZmlnLl9pc1VUQykge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGNsb25lRGF0ZShkYXRlKTtcbiAgLy8gdG9kbzogaW5wdXQuX2QgLSByZXMuX2QgKyAoKHJlcy5fb2Zmc2V0IHx8IDApIC0gKGlucHV0Ll9vZmZzZXQgfHwgMCkpKjYwMDAwXG4gIGNvbnN0IG9mZnNldERpZmYgPSAoY29uZmlnLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcbiAgY29uc3QgZGlmZiA9IGlucHV0LnZhbHVlT2YoKSAtIHJlcy52YWx1ZU9mKCkgKyBvZmZzZXREaWZmO1xuICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gIHJlcy5zZXRUaW1lKHJlcy52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXG4gIC8vIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcblxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gIHJldHVybiAtTWF0aC5yb3VuZChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcbn1cblxuLy8gSE9PS1NcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxuLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXG4vLyB0b2RvOiBpdCdzIGZyb20gbW9tZW50IHRpbWV6b25lc1xuLy8gaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuLy8gfTtcblxuLy8gTU9NRU5UU1xuXG4vLyBrZWVwTG9jYWxUaW1lID0gdHJ1ZSBtZWFucyBvbmx5IGNoYW5nZSB0aGUgdGltZXpvbmUsIHdpdGhvdXRcbi8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4vLyA1OjMxOjI2ICswMjAwIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IHdpdGggb2Zmc2V0XG4vLyArMDIwMCwgc28gd2UgYWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCwgdG8gYmUgdmFsaWQuXG4vL1xuLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXG4vLyBmcm9tIHRoZSBhY3R1YWwgcmVwcmVzZW50ZWQgdGltZS4gVGhhdCBpcyB3aHkgd2UgY2FsbCB1cGRhdGVPZmZzZXRcbi8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbi8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxuLy8gdGhlcmUgaXMgbm8gc3VjaCB0aW1lIGluIHRoZSBnaXZlbiB0aW1lem9uZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogbnVtYmVyIHtcbiAgY29uc3QgX29mZnNldCA9IGNvbmZpZy5fb2Zmc2V0IHx8IDA7XG5cbiAgcmV0dXJuIGNvbmZpZy5faXNVVEMgPyBfb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldChkYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVUQ09mZnNldChkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbiwga2VlcE1pbnV0ZXM/OiBib29sZWFuLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcbiAgY29uc3Qgb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcbiAgbGV0IGxvY2FsQWRqdXN0O1xuICBsZXQgX2lucHV0ID0gaW5wdXQ7XG4gIGxldCBfZGF0ZSA9IGRhdGU7XG5cbiAgaWYgKGlzU3RyaW5nKF9pbnB1dCkpIHtcbiAgICBfaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIF9pbnB1dCk7XG4gICAgaWYgKF9pbnB1dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF9kYXRlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc051bWJlcihfaW5wdXQpICYmIE1hdGguYWJzKF9pbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICBfaW5wdXQgPSBfaW5wdXQgKiA2MDtcbiAgfVxuXG4gIGlmICghY29uZmlnLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XG4gICAgbG9jYWxBZGp1c3QgPSBnZXREYXRlT2Zmc2V0KF9kYXRlKTtcbiAgfVxuICBjb25maWcuX29mZnNldCA9IF9pbnB1dDtcbiAgY29uZmlnLl9pc1VUQyA9IHRydWU7XG4gIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgX2RhdGUgPSBhZGQoX2RhdGUsIGxvY2FsQWRqdXN0LCAnbWludXRlcycpO1xuICB9XG4gIGlmIChvZmZzZXQgIT09IF9pbnB1dCkge1xuICAgIGlmICgha2VlcExvY2FsVGltZSB8fCBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgIF9kYXRlID0gYWRkKF9kYXRlLCBfaW5wdXQgLSBvZmZzZXQsICdtaW51dGVzJywgY29uZmlnLl9pc1VUQyk7XG4gICAgICAvLyBhZGRTdWJ0cmFjdCh0aGlzLCBjcmVhdGVEdXJhdGlvbihfaW5wdXQgLSBvZmZzZXQsICdtJyksIDEsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCFjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgIGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAvLyB0b2RvOiBhZGQgdGltZXpvbmUgaGFuZGxpbmdcbiAgICAgIC8vIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgIGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFpvbmUoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgfVxuXG4gICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC10aGlzLnV0Y09mZnNldCgpO1xuICB9XG59XG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMoZGF0ZTogRGF0ZSwga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBEYXRlIHtcbiAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCAwLCBrZWVwTG9jYWxUaW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lKGRhdGU6IERhdGUpOiBib29sZWFuIHtcblxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSA+IGdldFVUQ09mZnNldChzZXRNb250aChjbG9uZURhdGUoZGF0ZSksIDApKVxuICAgIHx8IGdldFVUQ09mZnNldChkYXRlKSA+IGdldFVUQ09mZnNldChzZXRNb250aChjbG9uZURhdGUoZGF0ZSksIDUpKSk7XG59XG5cbi8qZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbikge1xuICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59Ki9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xuICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgY29uZmlnLl90em0sIGZhbHNlLCB0cnVlLCBjb25maWcpO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbnN0IHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgaW5wdXQpO1xuICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIHRab25lLCBmYWxzZSwgZmFsc2UsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCAwLCB0cnVlLCBmYWxzZSwgY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ/OiBEYXRlKSB7XG4gIGNvbnN0IF9pbnB1dCA9IGlucHV0ID8gZ2V0VVRDT2Zmc2V0KGlucHV0LCB7IF9pc1VUQzogZmFsc2UgfSkgOiAwO1xuXG4gIHJldHVybiAoZ2V0VVRDT2Zmc2V0KGRhdGUpIC0gX2lucHV0KSAlIDYwID09PSAwO1xufVxuXG5cbi8vIERFUFJFQ0FURURcbi8qZXhwb3J0IGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCgpIHtcbiAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgfVxuXG4gIGNvbnN0IGMgPSB7fTtcblxuICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xuICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICBpZiAoYy5fYSkge1xuICAgIGNvbnN0IG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG59Ki9cblxuLy8gaW4gS2hyb25vc1xuLypleHBvcnQgZnVuY3Rpb24gaXNMb2NhbCgpIHtcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1V0Y09mZnNldCgpIHtcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjKCkge1xuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcbn0qL1xuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGdldE1pbnV0ZXMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1pbnV0ZSgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdtJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXG4vLyBGT1JNQVRUSU5HXG5cbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEsIG1hdGNoMXRvMywgbWF0Y2gyLCBtYXRjaDMsIG1hdGNoVW5zaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBNSUxMSVNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldE1pbGxpc2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNaWxsaXNlY29uZCgpIHtcbiAgYWRkRm9ybWF0VG9rZW4oJ1MnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAofn4oZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpIC8gMTAwKSkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAofn4oZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpIC8gMTApKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTJywgMywgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1MnLCA0LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTUycsIDUsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1MnLCA2LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1MnLCA3LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTUycsIDgsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTU1MnLCA5LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMDAwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ1NTJywgbWF0Y2gxdG8zLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdTU1MnLCBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbiAgbGV0IHRva2VuO1xuICBmb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1zKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQocGFyc2VGbG9hdChgMC4ke2lucHV0fWApICogMTAwMCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xuICB9XG4vLyBNT01FTlRTXG59XG4iLCJpbXBvcnQgeyBnZXRIb3VycywgZ2V0TWludXRlcywgZ2V0U2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiwgbWF0Y2gzdG80LCBtYXRjaDV0bzYgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgSE9VUiwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SG91cigpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBmdW5jdGlvbiBoRm9ybWF0KGRhdGU6IERhdGUsIGlzVVRDOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpICUgMTIgfHwgMTI7XG4gIH1cblxuICBmdW5jdGlvbiBrRm9ybWF0KGRhdGU6IERhdGUsIGlzVVRDOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpIHx8IDI0O1xuICB9XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGtGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2htbScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgY29uc3QgX2ggPSBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICAgIHJldHVybiBgJHtfaH0ke19tbX1gO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignaG1tc3MnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IF9oID0gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuICAgICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICAgIHJldHVybiBgJHtfaH0ke19tbX0ke19zc31gO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignSG1tJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfSCA9IGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICAgIHJldHVybiBgJHtfSH0ke19tbX1gO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IF9IID0gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcbiAgICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X0h9JHtfbW19JHtfc3N9YDtcbiAgICB9XG4gICk7XG5cbiAgZnVuY3Rpb24gbWVyaWRpZW0odG9rZW46IHN0cmluZywgbG93ZXJjYXNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIG51bGwsIG51bGwsXG4gICAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tZXJpZGllbShnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKSwgZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgbG93ZXJjYXNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbWVyaWRpZW0oJ2EnLCB0cnVlKTtcbiAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4vLyBQUklPUklUWVxuICBhZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cblxuLy8gUEFSU0lOR1xuXG4gIGZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLl9tZXJpZGllbVBhcnNlO1xuICB9XG5cbiAgYWRkUmVnZXhUb2tlbignYScsIG1hdGNoTWVyaWRpZW0pO1xuICBhZGRSZWdleFRva2VuKCdBJywgbWF0Y2hNZXJpZGllbSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0gnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdoJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignaycsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbiAgYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuICBhZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuICBhZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbiAgYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG4gIGFkZFBhcnNlVG9rZW4oXG4gICAgWydrJywgJ2trJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGNvbnN0IGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xuICBhZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdIbW1zcycsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgY29uc3QgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG5cbn1cbiIsIi8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2xvY2FsZS5kZWZhdWx0cyc7XG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNvbXBhcmVBcnJheXMgfSBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XG5cbmltcG9ydCB7IGluaXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5pbXBvcnQgeyBpbml0V2Vla1llYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xuaW1wb3J0IHsgaW5pdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGluaXRUaW1lem9uZSB9IGZyb20gJy4uL3VuaXRzL3RpbWV6b25lJztcbmltcG9ydCB7IGluaXRUaW1lc3RhbXAgfSBmcm9tICcuLi91bml0cy90aW1lc3RhbXAnO1xuaW1wb3J0IHsgaW5pdFNlY29uZCB9IGZyb20gJy4uL3VuaXRzL3NlY29uZCc7XG5pbXBvcnQgeyBpbml0UXVhcnRlciB9IGZyb20gJy4uL3VuaXRzL3F1YXJ0ZXInO1xuaW1wb3J0IHsgaW5pdE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpbml0TWludXRlIH0gZnJvbSAnLi4vdW5pdHMvbWludXRlJztcbmltcG9ydCB7IGluaXRNaWxsaXNlY29uZCB9IGZyb20gJy4uL3VuaXRzL21pbGxpc2Vjb25kJztcbmltcG9ydCB7IGluaXRNb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IGluaXRIb3VyIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XG5pbXBvcnQgeyBpbml0RGF5T2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgaW5pdERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGluaXREYXlPZk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLW1vbnRoJztcblxuY29uc3QgbG9jYWxlczogeyBba2V5OiBzdHJpbmddOiBMb2NhbGUgfSA9IHt9O1xuY29uc3QgbG9jYWxlRmFtaWxpZXM6IHsgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgY29uZmlnOiBMb2NhbGVEYXRhfVtdIH0gPSB7fTtcbmxldCBnbG9iYWxMb2NhbGU6IExvY2FsZTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xufVxuXG4vLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LFxuLy8gYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzOiBzdHJpbmdbXSk6IExvY2FsZSB7XG4gIGxldCBuZXh0O1xuICBsZXQgbG9jYWxlO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICBjb25zdCBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcbiAgICBsZXQgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgfVxuICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAvLyB0aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGotLTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnOiBMb2NhbGVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZzogTG9jYWxlRGF0YSkge1xuICBjb25zdCByZXM6IExvY2FsZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRDb25maWcpO1xuXG4gIGZvciAoY29uc3QgY2hpbGRQcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBjaGlsZFByb3ApKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1tjaGlsZFByb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1tjaGlsZFByb3BdKSkge1xuICAgICAgcmVzW2NoaWxkUHJvcF0gPSB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIHBhcmVudENvbmZpZ1tjaGlsZFByb3BdKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbY2hpbGRQcm9wXSAhPSBudWxsKSB7XG4gICAgICByZXNbY2hpbGRQcm9wXSA9IGNoaWxkQ29uZmlnW2NoaWxkUHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSByZXNbY2hpbGRQcm9wXTtcbiAgICB9XG4gIH1cbiAgbGV0IHBhcmVudFByb3A7XG4gIGZvciAocGFyZW50UHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwYXJlbnRQcm9wKSAmJlxuICAgICAgaXNPYmplY3QocGFyZW50Q29uZmlnW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pXG4gICAgKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZTogc3RyaW5nKTogTG9jYWxlIHtcbiAgLy8gbm8gd2F5IVxuICAvKiB2YXIgb2xkTG9jYWxlID0gbnVsbDtcbiAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgdHJ5IHtcbiAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICB9IGNhdGNoIChlKSB7fVxuICAgfSovXG4gIGlmICghbG9jYWxlc1tuYW1lXSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUuZXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBLaHJvbm9zIGxvY2FsZSBlcnJvcjogcGxlYXNlIGxvYWQgbG9jYWxlIFwiJHtuYW1lfVwiIGJlZm9yZSB1c2luZyBpdGApO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIGxvY2FsZSBhbmQgdGhlbiBzZXQgdGhlIGdsb2JhbCBsb2NhbGUuICBJZlxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbi8vIGxvY2FsZSBrZXkuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdLCB2YWx1ZXM/OiBMb2NhbGVEYXRhKTogc3RyaW5nIHtcbiAgbGV0IGRhdGE6IExvY2FsZTtcblxuICBpZiAoa2V5KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnbG9iYWxMb2NhbGUgJiYgZ2xvYmFsTG9jYWxlLl9hYmJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZSB7XG4gIGlmIChjb25maWcgPT09IG51bGwpIHtcbiAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICBnbG9iYWxMb2NhbGUgPSBnZXRMb2NhbGUoJ2VuJyk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xuICAgICAgfVxuICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7IG5hbWUsIGNvbmZpZyB9KTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXG4gIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcblxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZSB7XG4gIGxldCBfY29uZmlnID0gY29uZmlnO1xuXG4gIGlmIChfY29uZmlnICE9IG51bGwpIHtcbiAgICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAvLyBNRVJHRVxuICAgIGNvbnN0IHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICB9XG4gICAgX2NvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIF9jb25maWcpO1xuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBMb2NhbGUoX2NvbmZpZyk7XG4gICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcblxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdKTogTG9jYWxlIHtcbiAgc2V0RGVmYXVsdExvY2FsZSgpO1xuXG4gIGlmICgha2V5KSB7XG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgfVxuICAvLyBsZXQgbG9jYWxlO1xuICBjb25zdCBfa2V5ID0gaXNBcnJheShrZXkpID8ga2V5IDogW2tleV07XG5cbiAgcmV0dXJuIGNob29zZUxvY2FsZShfa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsZXMpO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxlKCk6IHZvaWQge1xuICBpZiAobG9jYWxlc1tgZW5gXSkge1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgb3JkaW5hbChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBjb25zdCBiID0gbnVtICUgMTA7XG4gICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICB0b0ludCgobnVtICUgMTAwKSAvIDEwKSA9PT0gMVxuICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgIDogYiA9PT0gMSA/ICdzdCcgOiBiID09PSAyID8gJ25kJyA6IGIgPT09IDMgPyAncmQnIDogJ3RoJztcblxuICAgICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgICB9XG4gIH0pO1xuXG4gIGluaXRXZWVrKCk7XG4gIGluaXRXZWVrWWVhcigpO1xuICBpbml0WWVhcigpO1xuICBpbml0VGltZXpvbmUoKTtcbiAgaW5pdFRpbWVzdGFtcCgpO1xuICBpbml0U2Vjb25kKCk7XG4gIGluaXRRdWFydGVyKCk7XG4gIGluaXRPZmZzZXQoKTtcbiAgaW5pdE1vbnRoKCk7XG4gIGluaXRNaW51dGUoKTtcbiAgaW5pdE1pbGxpc2Vjb25kKCk7XG4gIGluaXRIb3VyKCk7XG4gIGluaXREYXlPZlllYXIoKTtcbiAgaW5pdERheU9mV2VlaygpO1xuICBpbml0RGF5T2ZNb250aCgpO1xufVxuIiwiaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBvcmRlcmluZzogKGtleW9mIERhdGVPYmplY3QpW10gPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ107XG5jb25zdCBvcmRlcmluZ0hhc2ggPSBvcmRlcmluZy5yZWR1Y2UoKG1lbTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0sIG9yZGVyKSA9PiB7XG4gIG1lbVtvcmRlcl0gPSB0cnVlO1xuXG4gIHJldHVybiBtZW07XG59LCB7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQoZHVyYXRpb246IFBhcnRpYWw8RGF0ZU9iamVjdD4pOiBib29sZWFuIHtcbiAgY29uc3QgZHVyYXRpb25LZXlzID0gT2JqZWN0LmtleXMoZHVyYXRpb24pO1xuICBpZiAoZHVyYXRpb25LZXlzXG4gICAgICAuc29tZSgoa2V5OiBrZXlvZiBEYXRlT2JqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiAoa2V5IGluIG9yZGVyaW5nSGFzaClcbiAgICAgICAgICAmJiBkdXJhdGlvbltrZXldID09PSBudWxsXG4gICAgICAgICAgfHwgaXNOYU4oZHVyYXRpb25ba2V5XSk7XG4gICAgICB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBmb3IgKGxldCBrZXkgaW4gZHVyYXRpb24pIHtcbiAgLy8gICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChkdXJhdGlvbltrZXldID09IG51bGwgfHwgIWlzTmFOKGR1cmF0aW9uW2tleV0pKSkpIHtcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBsZXQgdW5pdEhhc0RlY2ltYWwgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcmluZy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0pIHtcbiAgICAgIC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSAhPT0gdG9JbnQoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKCkge1xuLy8gICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbi8vIH1cbi8vXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCgpOiBEdXJhdGlvbiB7XG4vLyAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xuLy8gfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFic0NlaWwgKG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmZsb29yKG51bWJlcikgOiBNYXRoLmNlaWwobnVtYmVyKTtcbn1cbiIsImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGFic0NlaWwgfSBmcm9tICcuLi91dGlscy9hYnMtY2VpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWJibGUoZHVyOiBEdXJhdGlvbik6IER1cmF0aW9uIHtcbiAgbGV0IG1pbGxpc2Vjb25kcyA9IGR1ci5fbWlsbGlzZWNvbmRzO1xuICBsZXQgZGF5cyA9IGR1ci5fZGF5cztcbiAgbGV0IG1vbnRocyA9IGR1ci5fbW9udGhzO1xuICBjb25zdCBkYXRhID0gZHVyLl9kYXRhO1xuXG4gIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKSkpIHtcbiAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgZGF5cyA9IDA7XG4gICAgbW9udGhzID0gMDtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgY29uc3Qgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgY29uc3QgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICBjb25zdCBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xuXG4gIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICBjb25zdCBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgY29uc3QgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gIG1vbnRocyAlPSAxMjtcblxuICBkYXRhLmRheSA9IGRheXM7XG4gIGRhdGEubW9udGggPSBtb250aHM7XG4gIGRhdGEueWVhciA9IHllYXJzO1xuXG4gIHJldHVybiBkdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzVG9Nb250aHMoZGF5OiBudW1iZXIpOiBudW1iZXIge1xuICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICByZXR1cm4gZGF5ICogNDgwMCAvIDE0NjA5Nztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gIHJldHVybiBtb250aCAqIDE0NjA5NyAvIDQ4MDA7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5sZXQgcm91bmQgPSBNYXRoLnJvdW5kO1xuY29uc3QgdGhyZXNob2xkczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgc3M6IDQ0LCAgICAgICAgIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICBzOiA0NSwgICAgICAgICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICBtOiA0NSwgICAgICAgICAvLyBtaW51dGVzIHRvIGhvdXJcbiAgaDogMjIsICAgICAgICAgLy8gaG91cnMgdG8gZGF5XG4gIGQ6IDI2LCAgICAgICAgIC8vIGRheXMgdG8gbW9udGhcbiAgTTogMTEgICAgICAgICAgLy8gbW9udGhzIHRvIHllYXJcbn07XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9tZW50LmZuLmZyb20sIG1vbWVudC5mbi5mcm9tTm93LCBhbmQgbW9tZW50LmR1cmF0aW9uLmZuLmh1bWFuaXplXG5mdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHI6ICdmdXR1cmUnIHwgJ3Bhc3QnLCBudW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGlzRnV0dXJlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xuICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW0gfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHIsIGlzRnV0dXJlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShwb3NOZWdEdXJhdGlvbjogRHVyYXRpb24sIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgY29uc3QgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCk7XG4gIGNvbnN0IHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKTtcbiAgY29uc3QgbWludXRlcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpO1xuICBjb25zdCBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xuICBjb25zdCBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSk7XG4gIGNvbnN0IG1vbnRocyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpO1xuICBjb25zdCB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xuXG4gIGNvbnN0IGE6IFtzdHJpbmddIHwgW3N0cmluZywgbnVtYmVyXSA9XG4gICAgc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdIHx8XG4gICAgc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10gfHxcbiAgICBtaW51dGVzIDw9IDEgJiYgWydtJ10gfHxcbiAgICBtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSB8fFxuICAgIGhvdXJzIDw9IDEgJiYgWydoJ10gfHxcbiAgICBob3VycyA8IHRocmVzaG9sZHMuaCAmJiBbJ2hoJywgaG91cnNdIHx8XG4gICAgZGF5cyA8PSAxICYmIFsnZCddIHx8XG4gICAgZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10gfHxcbiAgICBtb250aHMgPD0gMSAmJiBbJ00nXSB8fFxuICAgIG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSB8fFxuICAgIHllYXJzIDw9IDEgJiYgWyd5J10gfHwgWyd5eScsIHllYXJzXTtcblxuICBjb25zdCBiOiBbc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIGJvb2xlYW4sIGJvb2xlYW4sIExvY2FsZV0gPVxuICAgIFthWzBdLCBhWzFdLCB3aXRob3V0U3VmZml4LCArcG9zTmVnRHVyYXRpb24gPiAwLCBsb2NhbGVdO1xuICAvLyBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgLy8gYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XG4gIC8vIGFbNF0gPSBsb2NhbGU7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGIpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcocm91bmRpbmdGdW5jdGlvbjogYW55KTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcbiAgaWYgKHJvdW5kaW5nRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByb3VuZDtcbiAgfVxuICBpZiAodHlwZW9mKHJvdW5kaW5nRnVuY3Rpb24pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgYSB0aHJlc2hvbGQgZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZywgbGltaXQ6IG51bWJlcik6IGJvb2xlYW4gfCBudW1iZXIge1xuICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICB9XG4gIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICBpZiAodGhyZXNob2xkID09PSAncycpIHtcbiAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBodW1hbml6ZSh3aXRoU3VmZml4KSB7XG4vLyAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbi8vICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbi8vICAgfVxuLy9cbi8vICAgY29uc3QgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4vLyAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XG4vL1xuLy8gICBpZiAod2l0aFN1ZmZpeCkge1xuLy8gICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbi8vIH1cbiIsImltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgaXNEdXJhdGlvblZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBidWJibGUsIGRheXNUb01vbnRocywgbW9udGhzVG9EYXlzIH0gZnJvbSAnLi9idWJibGUnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IHJlbGF0aXZlVGltZSB9IGZyb20gJy4vaHVtYW5pemUnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvbiB7XG4gIF9taWxsaXNlY29uZHM6IG51bWJlcjtcbiAgX2RheXM6IG51bWJlcjtcbiAgX21vbnRoczogbnVtYmVyO1xuICBfZGF0YTogUGFydGlhbDxEYXRlT2JqZWN0PiA9IHt9O1xuICBfbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKTtcbiAgX2lzVmFsaWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZHVyYXRpb246IFBhcnRpYWw8RGF0ZU9iamVjdD4sIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSkge1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZyAmJiBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoKTtcbiAgICAvLyBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbik7XG4gICAgY29uc3Qgbm9ybWFsaXplZElucHV0ID0gZHVyYXRpb247XG4gICAgY29uc3QgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwO1xuICAgIGNvbnN0IHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMDtcbiAgICBjb25zdCBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMDtcbiAgICBjb25zdCB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IDA7XG4gICAgY29uc3QgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMDtcbiAgICBjb25zdCBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VycyB8fCAwO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlcyB8fCAwO1xuICAgIGNvbnN0IHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kcyB8fCAwO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZHMgfHwgMDtcblxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXG4gICAgICBzZWNvbmRzICogMTAwMCArXG4gICAgICBtaW51dGVzICogNjAgKiAxMDAwICsgLy8gMTAwMCAqIDYwXG4gICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvLyB1c2luZyAxMDAwICogNjAgKiA2MFxuICAgIC8vIGluc3RlYWQgb2YgMzZlNSB0byBhdm9pZCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzI5NzhcbiAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcbiAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgIHdlZWtzICogNztcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICtcbiAgICAgIHF1YXJ0ZXJzICogMyArXG4gICAgICB5ZWFycyAqIDEyO1xuXG4gICAgLy8gdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgLy8gdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG5cbiAgICAvLyB0aGlzLl9idWJibGUoKTtcbiAgICByZXR1cm4gYnViYmxlKHRoaXMpO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbiAgfVxuXG4gIGh1bWFuaXplKHdpdGhTdWZmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IGltcGxlbWVudGApO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XG5cbiAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gIH1cblxuICBsb2NhbGVEYXRhKCk6IExvY2FsZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGxvY2FsZSgpOiBzdHJpbmc7XG4gIGxvY2FsZShsb2NhbGVLZXk6IHN0cmluZyk6IER1cmF0aW9uO1xuICBsb2NhbGUobG9jYWxlS2V5Pzogc3RyaW5nKTogRHVyYXRpb24gfCBzdHJpbmcge1xuICAgIGlmICghbG9jYWxlS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH1cblxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGVLZXkpIHx8IHRoaXMuX2xvY2FsZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuICBhYnMoKTogRHVyYXRpb24ge1xuICAgIGNvbnN0IG1hdGhBYnMgPSBNYXRoLmFicztcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhO1xuXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgIHRoaXMuX21vbnRocyA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcblxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgIGRhdGEubWludXRlcyA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICBkYXRhLm1vbnRoID0gbWF0aEFicyhkYXRhLm1vbnRoKTtcbiAgICBkYXRhLnllYXIgPSBtYXRoQWJzKGRhdGEueWVhcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzKF91bml0czogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBsZXQgZGF5cztcbiAgICBsZXQgbW9udGhzO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgIGNvbnN0IHVuaXRzID0gbm9ybWFsaXplVW5pdHMoX3VuaXRzKTtcblxuICAgIGlmICh1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuXG4gICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICBjYXNlICd3ZWVrJyAgIDpcbiAgICAgICAgcmV0dXJuIGRheXMgLyA3ICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xuICAgICAgY2FzZSAnZGF5JyAgICA6XG4gICAgICAgIHJldHVybiBkYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICBjYXNlICdob3VycycgICA6XG4gICAgICAgIHJldHVybiBkYXlzICogMjQgKyBtaWxsaXNlY29uZHMgLyAzNmU1O1xuICAgICAgY2FzZSAnbWludXRlcycgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICBjYXNlICdzZWNvbmRzJyA6XG4gICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHVuaXQgJHt1bml0c31gKTtcbiAgICB9XG4gIH1cblxuICB2YWx1ZU9mICgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcbiAgICAgICh0aGlzLl9tb250aHMgJSAxMikgKiAyNTkyZTYgK1xuICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb24ob2JqOiBhbnkpOiBvYmogaXMgRHVyYXRpb24ge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XG59XG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogYm9vbGVhbiB7XG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgIGNvbnN0IGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyk7XG4gICAgY29uc3QgcGFyc2VkUGFydHMgPSBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICB9KTtcbiAgICBsZXQgaXNOb3dWYWxpZCA9ICFpc05hTihjb25maWcuX2QgJiYgY29uZmlnLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuXG4gICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XG4gICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxuICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKGNvbmZpZykpIHtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcuX2lzVmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIGZsYWdzPzogeyBudWxsSW5wdXQ6IGJvb2xlYW4gfSk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgT2JqZWN0LmFzc2lnbihnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKSwgZmxhZ3MgfHwgeyB1c2VySW52YWxpZGF0ZWQ6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCwgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgbWFya0ludmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5cbi8vIGlzbyA4NjAxIHJlZ2V4XG4vLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgZXh0ZW5kZWRJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgYmFzaWNJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG5cbmNvbnN0IHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy87XG5cbmNvbnN0IGlzb0RhdGVzOiBbc3RyaW5nLCBSZWdFeHAsIGJvb2xlYW5dW10gPSBbXG4gIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC8sIHRydWVdLFxuICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcbiAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkLywgdHJ1ZV0sXG4gIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcbiAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9LywgdHJ1ZV0sXG4gIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vLCB0cnVlXSxcbiAgWydZWVlZTU1ERCcsIC9cXGR7OH0vLCB0cnVlXSxcbiAgLy8gWVlZWU1NIGlzIE5PVCBhbGxvd2VkIGJ5IHRoZSBzdGFuZGFyZFxuICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS8sIHRydWVdLFxuICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICBbJ1lZWVlEREQnLCAvXFxkezd9LywgdHJ1ZV1cbl07XG5cbi8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbmNvbnN0IGlzb1RpbWVzOiBbc3RyaW5nLCBSZWdFeHBdW10gPSBbXG4gIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgWydISCcsIC9cXGRcXGQvXVxuXTtcblxuY29uc3QgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKChcXC0/XFxkKykvaTtcblxuY29uc3Qgb2JzT2Zmc2V0czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgVVQ6IDAsXG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjBcbn07XG5cbi8vIFJGQyAyODIyIHJlZ2V4OiBGb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjc2VjdGlvbi0zLjNcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksP1xccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoWystXVxcZHs0fSkpJC87XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XG4gIGNvbnN0IG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKGlucHV0KSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoaW5wdXQpO1xuXG5cbiAgbGV0IGFsbG93VGltZTtcbiAgbGV0IGRhdGVGb3JtYXQ7XG4gIGxldCB0aW1lRm9ybWF0O1xuICBsZXQgdHpGb3JtYXQ7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XG4gIGxldCBpO1xuICBsZXQgbDtcbiAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xuICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGlmIChtYXRjaFszXSkge1xuICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xuICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXG4gICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgfVxuICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpZiAobWF0Y2hbNF0pIHtcbiAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xuICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuXG4gIHJldHVybiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyh5ZWFyU3RyOiBzdHJpbmcsIG1vbnRoU3RyOiBzdHJpbmcsIGRheVN0cjogc3RyaW5nLCBob3VyU3RyOiBzdHJpbmcsIG1pbnV0ZVN0cjogc3RyaW5nLCBzZWNvbmRTdHI6IHN0cmluZyk6IERhdGVBcnJheSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtcbiAgICB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSxcbiAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXG4gICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgcGFyc2VJbnQoaG91clN0ciwgMTApLFxuICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApXG4gIF07XG5cbiAgaWYgKHNlY29uZFN0cikge1xuICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXJTdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XG5cbiAgcmV0dXJuIHllYXIgPD0gNDkgPyB5ZWFyICsgMjAwMCA6IHllYXI7XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCAnICcpXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHI6IHN0cmluZywgcGFyc2VkSW5wdXQ6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIC8vIFRPRE86IFJlcGxhY2UgdGhlIHZhbmlsbGEgSlMgRGF0ZSBvYmplY3Qgd2l0aCBhbiBpbmRlcGVudGVudCBkYXktb2Ytd2VlayBjaGVjay5cbiAgICBjb25zdCB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpO1xuICAgIGNvbnN0IHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShwYXJzZWRJbnB1dFswXSwgcGFyc2VkSW5wdXRbMV0sIHBhcnNlZElucHV0WzJdKS5nZXREYXkoKTtcbiAgICBpZiAod2Vla2RheVByb3ZpZGVkICE9PSB3ZWVrZGF5QWN0dWFsKSB7XG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldDogc3RyaW5nLCBtaWxpdGFyeU9mZnNldDogc3RyaW5nLCBudW1PZmZzZXQ6IHN0cmluZykge1xuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxpdGFyeU9mZnNldCkge1xuICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhtID0gcGFyc2VJbnQobnVtT2Zmc2V0LCAxMCk7XG4gICAgY29uc3QgbSA9IGhtICUgMTAwO1xuICAgIGNvbnN0IGggPSAoaG0gLSBtKSAvIDEwMDtcblxuICAgIHJldHVybiBoICogNjAgKyBtO1xuICB9XG59XG5cbi8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tUkZDMjgyMihjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSk7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBtYXJrSW52YWxpZChjb25maWcpO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkQXJyYXkgPSBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKG1hdGNoWzRdLCBtYXRjaFszXSwgbWF0Y2hbMl0sIG1hdGNoWzVdLCBtYXRjaFs2XSwgbWF0Y2hbN10pO1xuICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XG4gIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcblxuICBjb25maWcuX2QgPSBjcmVhdGVVVENEYXRlLmFwcGx5KG51bGwsIGNvbmZpZy5fYSk7XG4gIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG5cbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXQgb3IgZmFsbGJhY2tcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmICghaXNTdHJpbmcoY29uZmlnLl9pKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdCBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcblxuICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyB0b2RvOiB1cGRhdGUgbG9naWMgcHJvY2Vzc2luZ1xuICAvLyBpc0lTTyAtPiBjb25maWdGcm9tSVNPXG4gIC8vIGlzUkZDIC0+IGNvbmZpZ0Zyb21SRkNcblxuICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcbiAgLy8gaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbn1cblxuLy8gaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4vLyAgICAgJ3ZhbHVlIHByb3ZpZGVkIGlzIG5vdCBpbiBhIHJlY29nbml6ZWQgUkZDMjgyMiBvciBJU08gZm9ybWF0LiBtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZSgpLCAnICtcbi8vICAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gUkZDMjgyMi9JU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcbi8vICAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXG4vLyAgICAgJ2h0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxuLy8gICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbi8vICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbi8vICAgICB9XG4vLyApO1xuIiwiLy8gbW9tZW50LmpzXG4vLyB2ZXJzaW9uIDogMi4xOC4xXG4vLyBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyBsaWNlbnNlIDogTUlUXG4vLyBtb21lbnRqcy5jb21cblxuaW1wb3J0ICcuL3VuaXRzL2luZGV4JztcbmltcG9ydCB7IGZvcm1hdEZ1bmN0aW9ucywgbWFrZUZvcm1hdEZ1bmN0aW9uIH0gZnJvbSAnLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGlzRGF0ZVZhbGlkIH0gZnJvbSAnLi91dGlscy90eXBlLWNoZWNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlIHx8ICdlbicpO1xuICBpZiAoIV9sb2NhbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgTG9jYWxlIFwiJHtsb2NhbGV9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IF9mb3JtYXQgPSBmb3JtYXQgfHwgKGlzVVRDID8gICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJyA6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicpO1xuXG4gIGNvbnN0IG91dHB1dCA9IGZvcm1hdE1vbWVudChkYXRlLCBfZm9ybWF0LCBfbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcblxuICBpZiAoIW91dHB1dCkge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gX2xvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChkYXRlOiBEYXRlLCBfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuICBpZiAoIWlzRGF0ZVZhbGlkKGRhdGUpKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5pbnZhbGlkRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdCA9IGV4cGFuZEZvcm1hdChfZm9ybWF0LCBsb2NhbGUpO1xuICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShkYXRlLCBsb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0ID0gX2Zvcm1hdDtcbiAgbGV0IGkgPSA1O1xuICBjb25zdCBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG4gIGNvbnN0IHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyA9IChpbnB1dDogYW55KSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXRMb25nRGF0ZShpbnB1dCkgfHwgaW5wdXQ7XG4gIH07XG5cbiAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICBpIC09IDE7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0O1xufVxuIiwiLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzPFQ+KGE/OiBULCBiPzogVCwgYz86IFQpOiBUIHtcbiAgaWYgKGEgIT0gbnVsbCkge1xuICAgIHJldHVybiBhO1xuICB9XG4gIGlmIChiICE9IG51bGwpIHtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIHJldHVybiBjO1xufVxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgTU9OVEgsIFNFQ09ORCwgWUVBUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBkYXlPZlllYXJGcm9tV2Vla3MsIHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uL3V0aWxzL2RlZmF1bHRzJztcblxuZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZUFycmF5IHtcbiAgY29uc3Qgbm93VmFsdWUgPSBuZXcgRGF0ZSgpO1xuXG4gIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgIHJldHVybiBbbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0VVRDTW9udGgoKSwgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpXTtcbiAgfVxuXG4gIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbn1cblxuLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4vLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgaW5wdXQgPSBbXTtcbiAgbGV0IGk7XG4gIGxldCBkYXRlO1xuICBsZXQgY3VycmVudERhdGU7XG4gIGxldCBleHBlY3RlZFdlZWtkYXk7XG4gIGxldCB5ZWFyVG9Vc2U7XG5cbiAgaWYgKGNvbmZpZy5fZCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAvLyBjb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xuICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICB9XG5cbiAgLy8gaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICBpZiAoY29uZmlnLl9kYXlPZlllYXIgIT0gbnVsbCkge1xuICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xuXG4gICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpIHx8IGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwKSB7XG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKSk7XG4gICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gY3VycmVudCBkYXRlLlxuICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gIC8vICogaWYgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgb25seSB5ZWFyXG4gIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgfVxuXG4gIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxuICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICBpZiAoY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwKSB7XG4gICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICB9XG5cbiAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gY3JlYXRlVVRDRGF0ZSA6IGNyZWF0ZURhdGUpLmFwcGx5KG51bGwsIGlucHV0KTtcbiAgZXhwZWN0ZWRXZWVrZGF5ID0gY29uZmlnLl91c2VVVEMgPyBjb25maWcuX2QuZ2V0VVRDRGF5KCkgOiBjb25maWcuX2QuZ2V0RGF5KCk7XG5cbiAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gIC8vIHdpdGggcGFyc2Vab25lLlxuICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gIH1cblxuICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgbWlzbWF0Y2hpbmcgZGF5IG9mIHdlZWtcbiAgaWYgKGNvbmZpZy5fdyAmJiB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmIGNvbmZpZy5fdy5kICE9PSBleHBlY3RlZFdlZWtkYXkpIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdztcblxuICB3ID0gY29uZmlnLl93O1xuICBpZiAody5HRyAhPSBudWxsIHx8IHcuVyAhPSBudWxsIHx8IHcuRSAhPSBudWxsKSB7XG4gICAgZG93ID0gMTtcbiAgICBkb3kgPSA0O1xuXG4gICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXG4gICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgLy8gY3JlYXRlIG5vdykuXG4gICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LkdHLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIobmV3IERhdGUoKSwgMSwgNCkueWVhcik7XG4gICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgaWYgKHdlZWtkYXkgPCAxIHx8IHdlZWtkYXkgPiA3KSB7XG4gICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgY29uc3QgY3VyV2VlayA9IHdlZWtPZlllYXIobmV3IERhdGUoKSwgZG93LCBkb3kpO1xuXG4gICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICB3ZWVrID0gZGVmYXVsdHMody53LCBjdXJXZWVrLndlZWspO1xuXG4gICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcbiAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgd2Vla2RheSA9IGRvdztcbiAgICB9XG4gIH1cbiAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBNT05USCwgU0VDT05ELCBXRUVLLCBXRUVLREFZLCBZRUFSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgb3ZlcmZsb3c7XG4gIGNvbnN0IGEgPSBjb25maWcuX2E7XG5cbiAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgLy8gdG9kbzogZml4IHRoaXMgc2gqdFxuICAgIG92ZXJmbG93ID1cbiAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExID8gTU9OVEggOlxuICAgICAgICBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pID8gREFURSA6XG4gICAgICAgICAgYVtIT1VSXSA8IDAgfHwgYVtIT1VSXSA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XG4gICAgICAgICAgICBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5ID8gTUlOVVRFIDpcbiAgICAgICAgICAgICAgYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OSA/IFNFQ09ORCA6XG4gICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5ID8gTUlMTElTRUNPTkQgOlxuICAgICAgICAgICAgICAgICAgLTE7XG5cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xuICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgIH1cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgfVxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjb25maWdGcm9tSVNPLCBjb25maWdGcm9tUkZDMjgyMiB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgZXhwYW5kRm9ybWF0IH0gZnJvbSAnLi4vZm9ybWF0JztcbmltcG9ydCB7IGZvcm1hdHRpbmdUb2tlbnMsIGZvcm1hdFRva2VuRnVuY3Rpb25zIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldFBhcnNlUmVnZXhGb3JUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFRpbWVUb0FycmF5RnJvbVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgSE9VUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG4vLyBob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0IGNvbnN0IElTT184NjAxID0gJ0lTT184NjAxJztcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbi8vIGhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XG5leHBvcnQgY29uc3QgUkZDXzI4MjIgPSAnUkZDXzI4MjInO1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xuICBpZiAoY29uZmlnLl9mID09PSBJU09fODYwMSkge1xuICAgIHJldHVybiBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gIH1cbiAgaWYgKGNvbmZpZy5fZiA9PT0gUkZDXzI4MjIpIHtcbiAgICByZXR1cm4gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgfVxuICBjb25maWcuX2EgPSBbXTtcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xuXG4gIGlmIChpc0FycmF5KGNvbmZpZy5fZikgfHwgKCFjb25maWcuX2kgJiYgY29uZmlnLl9pICE9PSAwKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuXG4gIGxldCBpbnB1dCA9IGNvbmZpZy5faS50b1N0cmluZygpO1xuICBsZXQgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG4gIGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRGb3JtYXQoY29uZmlnLl9mLCBjb25maWcuX2xvY2FsZSkubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG5cbiAgbGV0IGk7XG4gIGxldCB0b2tlbjtcbiAgbGV0IHBhcnNlZElucHV0O1xuICBsZXQgc2tpcHBlZDtcbiAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIHBhcnNlZElucHV0ID0gKGlucHV0Lm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnLl9sb2NhbGUpKSB8fCBbXSlbMF07XG4gICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICBza2lwcGVkID0gaW5wdXQuc3Vic3RyKDAsIGlucHV0LmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgIH1cbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoaW5wdXQuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGgpO1xuICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgfVxuICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID0gaW5wdXRMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICBpZiAoaW5wdXQubGVuZ3RoID4gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goaW5wdXQpO1xuICB9XG5cbiAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgaWYgKGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICBjb25maWcuX2FbSE9VUl0gPiAwKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHZvaWQgMDtcbiAgfVxuXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKGNvbmZpZy5fbG9jYWxlLCBjb25maWcuX2FbSE9VUl0sIGNvbmZpZy5fbWVyaWRpZW0pO1xuXG4gIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuXG4gIHJldHVybiBjaGVja092ZXJmbG93KGNvbmZpZyk7XG59XG5cblxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZTogTG9jYWxlLCBfaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKTogbnVtYmVyIHtcbiAgbGV0IGhvdXIgPSBfaG91cjtcblxuICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICByZXR1cm4gaG91cjtcbiAgfVxuXG4gIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gIH1cblxuICBpZiAobG9jYWxlLmlzUE0gPT0gbnVsbCkge1xuICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgIHJldHVybiBob3VyO1xuICB9XG4gIC8vIEZhbGxiYWNrXG4gIGNvbnN0IGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgIGhvdXIgKz0gMTI7XG4gIH1cblxuICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICBob3VyID0gMDtcbiAgfVxuXG4gIHJldHVybiBob3VyO1xufVxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgdGVtcENvbmZpZztcbiAgbGV0IGJlc3RNb21lbnQ7XG4gIGxldCBzY29yZVRvQmVhdDtcbiAgbGV0IGN1cnJlbnRTY29yZTtcblxuICBpZiAoIWNvbmZpZy5fZiB8fCBjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG5cbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xuICB9XG5cbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgIHRlbXBDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICB9XG4gICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgIC8vIG9yIHRva2Vuc1xuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgaWYgKHNjb3JlVG9CZWF0ID09IG51bGwgfHwgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQpIHtcbiAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplT2JqZWN0VW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmIChjb25maWcuX2QpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XG4gIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICBjb25zdCBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXQgYXMgYW55KTtcbiAgICBjb25maWcuX2EgPSBbaS55ZWFyLCBpLm1vbnRoLCBpLmRheSwgaS5ob3VycywgaS5taW51dGVzLCBpLnNlY29uZHMsIGkubWlsbGlzZWNvbmRzXVxuICAgIC8vIHRvZG86IG9ic29sZXRlIC0+IHJlbW92ZSBpdFxuICAgICAgLm1hcChvYmogPT4gaXNTdHJpbmcob2JqKSA/IHBhcnNlSW50KG9iaiwgMTApIDogb2JqKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgaXNBcnJheSwgaXNEYXRlLCBpc051bWJlciwgaXNPYmplY3QsIGlzT2JqZWN0RW1wdHksIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheSB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi9jbG9uZSc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nIH0gZnJvbSAnLi9mcm9tLXN0cmluZyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbU9iamVjdCB9IGZyb20gJy4vZnJvbS1vYmplY3QnO1xuaW1wb3J0IHsgY2hlY2tPdmVyZmxvdyB9IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgcmVzID0gY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpO1xuICAvLyB0b2RvOiByZW1vdmUsIGluIG1vbWVudC5qcyBpdCdzIG5ldmVyIGNhbGxlZCBjdXogb2YgbW9tZW50IGNvbnN0cnVjdG9yXG4gIHJlcy5fZCA9IG5ldyBEYXRlKHJlcy5fZCAhPSBudWxsID8gcmVzLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gIGlmICghaXNWYWxpZChPYmplY3QuYXNzaWduKHt9LCByZXMsIHtfaXNWYWxpZDogbnVsbH0pKSkge1xuICAgIHJlcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgLy8gdG9kbzogdXBkYXRlIG9mZnNldFxuICAvKmlmIChyZXMuX25leHREYXkpIHtcbiAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICByZXMuX2QgPSBhZGQocmVzLl9kLCAxLCAnZGF5Jyk7XG4gICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICB9Ki9cblxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgaW5wdXQgPSBjb25maWcuX2k7XG4gIGNvbnN0IGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xuXG4gIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZywgeyBudWxsSW5wdXQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gIH1cblxuICBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciByZWN1cnNpb25cblxuICBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICB9XG5cbiAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcbiAgICBjb25maWcuX2QgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoKTtcbiAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgY29uZmlnLl9kID0gY2xvbmVEYXRlKGlucHV0KTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoaXNBcnJheTxzdHJpbmcgfCBudW1iZXI+KGlucHV0KSAmJiBpbnB1dC5sZW5ndGgpIHtcbiAgICBjb25zdCBfYXJyOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gaW5wdXQuc2xpY2UoMCk7XG4gICAgY29uZmlnLl9hID0gX2Fyci5tYXAob2JqID0+IGlzU3RyaW5nKG9iaikgPyBwYXJzZUludChvYmosIDEwKSA6IG9iaik7XG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICB9IGVsc2Uge1xuICAgIC8vICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQ6IERhdGVJbnB1dCwgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge307XG4gIGxldCBfaW5wdXQgPSBpbnB1dDtcblxuICAvLyBwYXJhbXMgc3dpdGNoIC0+IHNraXA7IHRlc3QgaXQgd2VsbFxuICAvLyBpZiAobG9jYWxlS2V5ID09PSB0cnVlIHx8IGxvY2FsZUtleSA9PT0gZmFsc2UpIHtcbiAgLy8gICAgIHN0cmljdCA9IGxvY2FsZUtleTtcbiAgLy8gICAgIGxvY2FsZUtleSA9IHVuZGVmaW5lZDtcbiAgLy8gfVxuXG4gIC8vIHRvZG86IGZhaWwgZmFzdCBhbmQgcmV0dXJuIG5vdCB2YWxpZCBkYXRlXG4gIGlmICgoaXNPYmplY3QoX2lucHV0KSAmJiBpc09iamVjdEVtcHR5KF9pbnB1dCkpIHx8IChpc0FycmF5KF9pbnB1dCkgJiYgX2lucHV0Lmxlbmd0aCA9PT0gMCkpIHtcbiAgICBfaW5wdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gIC8vIGNvbmZpZy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgY29uZmlnLl91c2VVVEMgPSBjb25maWcuX2lzVVRDID0gaXNVVEM7XG4gIGNvbmZpZy5fbCA9IGxvY2FsZUtleTtcbiAgY29uZmlnLl9pID0gX2lucHV0O1xuICBjb25maWcuX2YgPSBmb3JtYXQ7XG4gIGNvbmZpZy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi9mcm9tLWFueXRoaW5nJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcblxuICByZXR1cm4gY29uZmlnLl9kO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFic1JvdW5kKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bSA8IDAgPyBNYXRoLnJvdW5kKG51bSAqIC0xKSAqIC0xIDogTWF0aC5yb3VuZChudW0pO1xufVxuIiwiaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGVuZE9mLCBzdGFydE9mIH0gZnJvbSAnLi9zdGFydC1lbmQtb2YnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBZnRlcihcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA+IGRhdGUyLnZhbHVlT2YoKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlMi52YWx1ZU9mKCkgPCBzdGFydE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPCBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICByZXR1cm4gZW5kT2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCkgPCBkYXRlMi52YWx1ZU9mKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4oXG4gIGRhdGU6IERhdGUsXG4gIGZyb206IERhdGUsXG4gIHRvOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSxcbiAgaW5jbHVzaXZpdHkgPSAnKCknXG4pOiBib29sZWFuIHtcbiAgY29uc3QgbGVmdEJvdW5kID1cbiAgICBpbmNsdXNpdml0eVswXSA9PT0gJygnXG4gICAgICA/IGlzQWZ0ZXIoZGF0ZSwgZnJvbSwgdW5pdHMpXG4gICAgICA6ICFpc0JlZm9yZShkYXRlLCBmcm9tLCB1bml0cyk7XG4gIGNvbnN0IHJpZ2h0Qm91bmQgPVxuICAgIGluY2x1c2l2aXR5WzFdID09PSAnKSdcbiAgICAgID8gaXNCZWZvcmUoZGF0ZSwgdG8sIHVuaXRzKVxuICAgICAgOiAhaXNBZnRlcihkYXRlLCB0bywgdW5pdHMpO1xuXG4gIHJldHVybiBsZWZ0Qm91bmQgJiYgcmlnaHRCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA9PT0gZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRNcyA9IGRhdGUyLnZhbHVlT2YoKTtcblxuICByZXR1cm4gKFxuICAgIHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJlxuICAgIGlucHV0TXMgPD0gZW5kT2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM/OiBVbml0T2ZUaW1lXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzU2FtZShkYXRlMSwgZGF0ZTIsIHVuaXRzKSB8fCBpc0FmdGVyKGRhdGUxLCBkYXRlMiwgdW5pdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM/OiBVbml0T2ZUaW1lXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzU2FtZShkYXRlMSwgZGF0ZTIsIHVuaXRzKSB8fCBpc0JlZm9yZShkYXRlMSwgZGF0ZTIsIHVuaXRzKTtcbn1cbiIsIi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuaW1wb3J0IHsgRHVyYXRpb24sIGlzRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGlzRGF0ZVZhbGlkLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwYXJzZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5cbmNvbnN0IGFzcE5ldFJlZ2V4ID0gL14oXFwtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XG5cbi8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4vLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGlzb1JlZ2V4ID0gL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuZXhwb3J0IHR5cGUgRHVyYXRpb25JbnB1dCA9IHN0cmluZyB8IG51bWJlciB8IER1cmF0aW9uIHwgUGFydGlhbDxEYXRlT2JqZWN0PiB8IHsgZnJvbTogRGF0ZTsgdG86IERhdGUgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0PzogRHVyYXRpb25JbnB1dCwga2V5Pzogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcbiAgY29uc3QgZHVyYXRpb24gPSBjb252ZXJ0RHVyYXRpb24oaW5wdXQsIGtleSk7XG4gIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG5cbiAgcmV0dXJuIG5ldyBEdXJhdGlvbihkdXJhdGlvbiwgY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY29udmVydER1cmF0aW9uKGlucHV0OiBhbnksIGtleTogc3RyaW5nKTogUGFydGlhbDxEYXRlT2JqZWN0PiB7XG4gIC8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcbiAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWlsbGlzZWNvbmRzOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgZGF5OiBpbnB1dC5fZGF5cyxcbiAgICAgIG1vbnRoOiBpbnB1dC5fbW9udGhzXG4gICAgfTtcbiAgfVxuICBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgLy8gZHVyYXRpb24gPSB7fTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogaW5wdXQgfSA6IHsgbWlsbGlzZWNvbmRzOiBpbnB1dCB9O1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGxldCBtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiAwLFxuICAgICAgICBkYXk6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXG4gICAgICAgIGhvdXJzOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICBtaW51dGVzOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgIHNlY29uZHM6IHRvSW50KG1hdGNoW1NFQ09ORF0pICogc2lnbixcbiAgICAgICAgLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIG1pbGxpc2Vjb25kczogdG9JbnQoYWJzUm91bmQodG9JbnQobWF0Y2hbTUlMTElTRUNPTkRdKSAqIDEwMDApKSAqIHNpZ25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgbWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IChtYXRjaFsxXSA9PT0gJysnKSA/IDEgOiAxO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXG4gICAgICAgIG1vbnRoOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXG4gICAgICAgIHdlZWs6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgZGF5OiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXG4gICAgICAgIGhvdXJzOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXG4gICAgICAgIG1pbnV0ZXM6IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgc2Vjb25kczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pXG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbiAgaWYgKGlzT2JqZWN0PHtmcm9tOiBhbnk7IHRvOiBhbnl9PihpbnB1dCkgJiYgKCdmcm9tJyBpbiBpbnB1dCB8fCAndG8nIGluIGlucHV0KSkge1xuICAgIGNvbnN0IGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShwYXJzZURhdGUoaW5wdXQuZnJvbSksIHBhcnNlRGF0ZShpbnB1dC50bykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGxpc2Vjb25kczogZGlmZlJlcy5taWxsaXNlY29uZHMsXG4gICAgICBtb250aDogZGlmZlJlcy5tb250aHNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGlucHV0O1xufVxuXG4vLyBjcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcbi8vIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBpbnZhbGlkO1xuXG5mdW5jdGlvbiBwYXJzZUlzbyhpbnA6IHN0cmluZywgc2lnbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgY29uc3QgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuXG4gIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xuICBjb25zdCByZXMgPSB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG5cbiAgcmVzLm1vbnRocyA9IGdldE1vbnRoKG90aGVyKSAtIGdldE1vbnRoKGJhc2UpICtcbiAgICAoZ2V0RnVsbFllYXIob3RoZXIpIC0gZ2V0RnVsbFllYXIoYmFzZSkpICogMTI7XG4gIGNvbnN0IF9iYXNlUGx1cyA9IGFkZChjbG9uZURhdGUoYmFzZSksIHJlcy5tb250aHMsICdtb250aCcpO1xuICBpZiAoaXNBZnRlcihfYmFzZVBsdXMsIG90aGVyKSkge1xuICAgIC0tcmVzLm1vbnRocztcbiAgfVxuXG4gIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArKGFkZChjbG9uZURhdGUoYmFzZSksIHJlcy5tb250aHMsICdtb250aCcpKTtcblxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xuICBpZiAoIShpc0RhdGVWYWxpZChiYXNlKSAmJiBpc0RhdGVWYWxpZChvdGhlcikpKSB7XG4gICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcbiAgfVxuXG4gIGxldCByZXM7XG4gIGNvbnN0IF9vdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSwge19vZmZzZXQ6IGJhc2UuZ2V0VGltZXpvbmVPZmZzZXQoKX0pO1xuICBpZiAoaXNCZWZvcmUoYmFzZSwgX290aGVyKSkge1xuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgX290aGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKF9vdGhlciwgYmFzZSk7XG4gICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5pbXBvcnQgeyBhYnNSb3VuZCB9IGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGdldERhdGUsIGdldE1vbnRoLCBnZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IHNldERhdGUsIHNldE1vbnRoLCBzZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGRhdGU6IERhdGUsIHZhbDogbnVtYmVyLCBwZXJpb2Q6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG5cbiAgcmV0dXJuIGFkZFN1YnRyYWN0KGRhdGUsIGR1ciwgMSwgaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QoZGF0ZTogRGF0ZSwgdmFsOiBudW1iZXIsIHBlcmlvZDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcblxuICByZXR1cm4gYWRkU3VidHJhY3QoZGF0ZSwgZHVyLCAtMSwgaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3VidHJhY3QoZGF0ZTogRGF0ZSwgZHVyYXRpb246IER1cmF0aW9uLCBpc0FkZGluZzogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcztcbiAgY29uc3QgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKTtcbiAgY29uc3QgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lcyBzdXBwb3J0XG4gIC8vIGNvbnN0IF91cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgaWYgKG1vbnRocykge1xuICAgIHNldE1vbnRoKGRhdGUsIGdldE1vbnRoKGRhdGUsIGlzVVRDKSArIG1vbnRocyAqIGlzQWRkaW5nLCBpc1VUQyk7XG4gIH1cbiAgaWYgKGRheXMpIHtcbiAgICBzZXREYXRlKGRhdGUsIGdldERhdGUoZGF0ZSwgaXNVVEMpICsgZGF5cyAqIGlzQWRkaW5nLCBpc1VUQyk7XG4gIH1cbiAgaWYgKG1pbGxpc2Vjb25kcykge1xuICAgIHNldFRpbWUoZGF0ZSwgZ2V0VGltZShkYXRlKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgfVxuXG4gIHJldHVybiBjbG9uZURhdGUoZGF0ZSk7XG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZXMgc3VwcG9ydFxuICAvLyBpZiAoX3VwZGF0ZU9mZnNldCkge1xuICAvLyAgIGhvb2tzLnVwZGF0ZU9mZnNldChkYXRlLCBkYXlzIHx8IG1vbnRocyk7XG4gIC8vIH1cbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXlPZldlZWsoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2QnLCBudWxsLCAnZG8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2RkJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUud2Vla2RheXNNaW4oZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZGRkJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUud2Vla2RheXNTaG9ydChkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkZGRkJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUud2Vla2RheXMoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldExvY2FsZURheU9mV2VlayhkYXRlLCBvcHRzLmxvY2FsZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICAgIC8vIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ0UnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRJU09EYXlPZldlZWsoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ2RheScsICdkJyk7XG4gIGFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG4gIGFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbi8vIFBSSU9SSVRZXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XG4gIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2QnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignRScsIG1hdGNoMXRvMik7XG5cbiAgYWRkUmVnZXhUb2tlbignZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG4gIH0pO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2RkZCcsIGZ1bmN0aW9uKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcbiAgYWRkUmVnZXhUb2tlbignZGRkZCcsIGZ1bmN0aW9uKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG5cbiAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgWydkZCcsICdkZGQnLCAnZGRkZCddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbikge1xuICAgICAgY29uc3Qgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gISFpbnB1dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG5cbiAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgWydkJywgJ2UnLCAnRSddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xufVxuXG4vLyBIRUxQRVJTXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQ6IHN0cmluZyB8IG51bWJlciwgbG9jYWxlOiBMb2NhbGUpOiBudW1iZXIge1xuICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIGNvbnN0IF9udW0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICBpZiAoIWlzTmFOKF9udW0pKSB7XG4gICAgcmV0dXJuIF9udW07XG4gIH1cblxuICBjb25zdCBfd2Vla0RheSA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgaWYgKGlzTnVtYmVyKF93ZWVrRGF5KSkge1xuICAgIHJldHVybiBfd2Vla0RheTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBudW1iZXIge1xuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgfVxuXG4gIHJldHVybiBpc051bWJlcihpbnB1dCkgJiYgaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgb3B0czogeyBpc1VUQz86IGJvb2xlYW47IGxvY2FsZTogTG9jYWxlIH0pOiBEYXRlIHwgbnVtYmVyIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBnZXREYXlPZldlZWsoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gIH1cblxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGlucHV0LCBvcHRzLmxvY2FsZSwgb3B0cy5pc1VUQyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkYXkgPSBnZXREYXkoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCBfaW5wdXQgLSBkYXksICdkYXknKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0RGF5KGRhdGUsIGlzVVRDKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyB0b2RvOiB1dGNcbi8vIGdldFNldExvY2FsZURheU9mV2Vla1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIChnZXREYXkoZGF0ZSwgaXNVVEMpICsgNyAtIGxvY2FsZS5maXJzdERheU9mV2VlaygpKSAlIDc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgb3B0czogeyBsb2NhbGU/OiBMb2NhbGU7IGlzVVRDPzogYm9vbGVhbiB9ID0ge30pOiBEYXRlIHtcbiAgY29uc3Qgd2Vla2RheSA9IGdldExvY2FsZURheU9mV2VlayhkYXRlLCBvcHRzLmxvY2FsZSwgb3B0cy5pc1VUQyk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCBpbnB1dCAtIHdlZWtkYXksICdkYXknKTtcbn1cblxuXG4vLyBnZXRTZXRJU09EYXlPZldlZWtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXlPZldlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQykgfHwgNztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElTT0RheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyIHwgc3RyaW5nLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZSB9ID0ge30pOiBEYXRlIHtcbiAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgY29uc3Qgd2Vla2RheSA9IHBhcnNlSXNvV2Vla2RheShpbnB1dCwgb3B0cy5sb2NhbGUpO1xuXG4gIHJldHVybiBzZXREYXlPZldlZWsoZGF0ZSwgZ2V0RGF5T2ZXZWVrKGRhdGUpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQXJhYmljIFthcl1cbi8vISBhdXRob3IgOiBBYmRlbCBTYWlkOiBodHRwczovL2dpdGh1Yi5jb20vYWJkZWxzYWlkXG4vLyEgYXV0aG9yIDogQWhtZWQgRWxraGF0aWJcbi8vISBhdXRob3IgOiBmb3JhYmkgaHR0cHM6Ly9naXRodWIuY29tL2ZvcmFiaVxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmNvbnN0IHN5bWJvbE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gIDE6ICfDmcKhJyxcbiAgMjogJ8OZwqInLFxuICAzOiAnw5nCoycsXG4gIDQ6ICfDmcKkJyxcbiAgNTogJ8OZwqUnLFxuICA2OiAnw5nCpicsXG4gIDc6ICfDmcKnJyxcbiAgODogJ8OZwqgnLFxuICA5OiAnw5nCqScsXG4gIDA6ICfDmcKgJ1xufTtcbmNvbnN0IG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICfDmcKhJzogJzEnLFxuICAnw5nCoic6ICcyJyxcbiAgJ8OZwqMnOiAnMycsXG4gICfDmcKkJzogJzQnLFxuICAnw5nCpSc6ICc1JyxcbiAgJ8OZwqYnOiAnNicsXG4gICfDmcKnJzogJzcnLFxuICAnw5nCqCc6ICc4JyxcbiAgJ8OZwqknOiAnOScsXG4gICfDmcKgJzogJzAnXG59O1xuY29uc3QgcGx1cmFsRm9ybSA9IGZ1bmN0aW9uIChudW06IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW0gPT09IDAgPyAwIDogbnVtID09PSAxID8gMSA6IG51bSA9PT0gMiA/IDIgOiBudW0gJSAxMDAgPj0gMyAmJiBudW0gJSAxMDAgPD0gMTAgPyAzIDogbnVtICUgMTAwID49IDExID8gNCA6IDU7XG59O1xuY29uc3QgcGx1cmFsczoge1trZXk6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZywgW3N0cmluZywgc3RyaW5nXSwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ119ID0ge1xuICBzOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMKrw5jCp8OZwobDmcKKw5jCqScsICfDmMKrw5jCp8OZwobDmcKKw5jCqSDDmcKIw5jCp8OYwq3DmMKvw5jCqScsIFsnw5jCq8OYwqfDmcKGw5nCisOYwqrDmMKnw5nChicsICfDmMKrw5jCp8OZwobDmcKKw5jCqsOZworDmcKGJ10sICclZCDDmMKrw5nCiMOYwqfDmcKGJywgJyVkIMOYwqvDmMKnw5nChsOZworDmMKpJywgJyVkIMOYwqvDmMKnw5nChsOZworDmMKpJ10sXG4gIG06IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwq/DmcKCw5nCisOZwoLDmMKpJywgJ8OYwq/DmcKCw5nCisOZwoLDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKvw5nCgsOZworDmcKCw5jCqsOYwqfDmcKGJywgJ8OYwq/DmcKCw5nCisOZwoLDmMKqw5nCisOZwoYnXSwgJyVkIMOYwq/DmcKCw5jCp8OYwqbDmcKCJywgJyVkIMOYwq/DmcKCw5nCisOZwoLDmMKpJywgJyVkIMOYwq/DmcKCw5nCisOZwoLDmMKpJ10sXG4gIGg6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwrPDmMKnw5jCucOYwqknLCAnw5jCs8OYwqfDmMK5w5jCqSDDmcKIw5jCp8OYwq3DmMKvw5jCqScsIFsnw5jCs8OYwqfDmMK5w5jCqsOYwqfDmcKGJywgJ8OYwrPDmMKnw5jCucOYwqrDmcKKw5nChiddLCAnJWQgw5jCs8OYwqfDmMK5w5jCp8OYwqonLCAnJWQgw5jCs8OYwqfDmMK5w5jCqScsICclZCDDmMKzw5jCp8OYwrnDmMKpJ10sXG4gIGQ6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOZworDmcKIw5nChScsICfDmcKKw5nCiMOZwoUgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5nCisOZwojDmcKFw5jCp8OZwoYnLCAnw5nCisOZwojDmcKFw5nCisOZwoYnXSwgJyVkIMOYwqPDmcKKw5jCp8OZwoUnLCAnJWQgw5nCisOZwojDmcKFw5nCi8OYwqcnLCAnJWQgw5nCisOZwojDmcKFJ10sXG4gIE06IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwrTDmcKHw5jCsScsICfDmMK0w5nCh8OYwrEgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5jCtMOZwofDmMKxw5jCp8OZwoYnLCAnw5jCtMOZwofDmMKxw5nCisOZwoYnXSwgJyVkIMOYwqPDmMK0w5nCh8OYwrEnLCAnJWQgw5jCtMOZwofDmMKxw5jCpycsICclZCDDmMK0w5nCh8OYwrEnXSxcbiAgeTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCucOYwqfDmcKFJywgJ8OYwrnDmMKnw5nChSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmMK5w5jCp8OZwoXDmMKnw5nChicsICfDmMK5w5jCp8OZwoXDmcKKw5nChiddLCAnJWQgw5jCo8OYwrnDmcKIw5jCp8OZwoUnLCAnJWQgw5jCucOYwqfDmcKFw5nCi8OYwqcnLCAnJWQgw5jCucOYwqfDmcKFJ11cbn07XG5jb25zdCBwbHVyYWxpemUgPSBmdW5jdGlvbiAodTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IGYgPSBwbHVyYWxGb3JtKG51bSk7XG4gICAgbGV0IHN0ciA9IHBsdXJhbHNbdV1bcGx1cmFsRm9ybShudW0pXTtcbiAgICBpZiAoZiA9PT0gMikge1xuICAgICAgc3RyID0gc3RyW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChzdHIgYXMgc3RyaW5nKS5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoKSk7XG4gIH07XG59O1xuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgJ8OZworDmcKGw5jCp8OZworDmMKxJyxcbiAgJ8OZwoHDmMKow5jCscOYwqfDmcKKw5jCsScsXG4gICfDmcKFw5jCp8OYwrHDmMKzJyxcbiAgJ8OYwqPDmMKow5jCscOZworDmcKEJyxcbiAgJ8OZwoXDmMKnw5nCisOZwognLFxuICAnw5nCisOZwojDmcKGw5nCisOZwognLFxuICAnw5nCisOZwojDmcKEw5nCisOZwognLFxuICAnw5jCo8OYwrrDmMKzw5jCt8OYwrMnLFxuICAnw5jCs8OYwqjDmMKqw5nChcOYwqjDmMKxJyxcbiAgJ8OYwqPDmcKDw5jCqsOZwojDmMKow5jCsScsXG4gICfDmcKGw5nCiMOZwoHDmcKFw5jCqMOYwrEnLFxuICAnw5jCr8OZworDmMKzw5nChcOYwqjDmMKxJ1xuXTtcblxuZXhwb3J0IGNvbnN0IGFyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnYXInLFxuICBtb250aHMsXG4gIG1vbnRoc1Nob3J0OiBtb250aHMsXG4gIHdlZWtkYXlzOiAnw5jCp8OZwoTDmMKjw5jCrcOYwq9fw5jCp8OZwoTDmMKlw5jCq8OZwobDmcKKw5nChl/DmMKnw5nChMOYwqvDmcKEw5jCp8OYwqvDmMKnw5jCoV/DmMKnw5nChMOYwqPDmMKxw5jCqMOYwrnDmMKnw5jCoV/DmMKnw5nChMOYwq7DmcKFw5nCisOYwrNfw5jCp8OZwoTDmMKsw5nChcOYwrnDmMKpX8OYwqfDmcKEw5jCs8OYwqjDmMKqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw5jCo8OYwq3DmMKvX8OYwqXDmMKrw5nChsOZworDmcKGX8OYwqvDmcKEw5jCp8OYwqvDmMKnw5jCoV/DmMKjw5jCscOYwqjDmMK5w5jCp8OYwqFfw5jCrsOZwoXDmcKKw5jCs1/DmMKsw5nChcOYwrnDmMKpX8OYwrPDmMKow5jCqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDmMKtX8OZwoZfw5jCq1/DmMKxX8OYwq5fw5jCrF/DmMKzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdEL1xcdTIwMEZNL1xcdTIwMEZZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DmMK1fMOZwoUvLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuICfDmcKFJyA9PT0gaW5wdXQ7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAnw5jCtSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw5nChSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5jCp8OZwoTDmcKKw5nCiMOZwoUgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxuICAgIG5leHREYXk6ICdbw5jCusOYwq/DmcKLw5jCpyDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbGFzdERheTogJ1vDmMKjw5nChcOYwrMgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnZGRkZCBbw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw5jCqMOYwrnDmMKvICVzJyxcbiAgICBwYXN0OiAnw5nChcOZwobDmMKwICVzJyxcbiAgICBzOiBwbHVyYWxpemUoJ3MnKSxcbiAgICBzczogcGx1cmFsaXplKCdzJyksXG4gICAgbTogcGx1cmFsaXplKCdtJyksXG4gICAgbW06IHBsdXJhbGl6ZSgnbScpLFxuICAgIGg6IHBsdXJhbGl6ZSgnaCcpLFxuICAgIGhoOiBwbHVyYWxpemUoJ2gnKSxcbiAgICBkOiBwbHVyYWxpemUoJ2QnKSxcbiAgICBkZDogcGx1cmFsaXplKCdkJyksXG4gICAgTTogcGx1cmFsaXplKCdNJyksXG4gICAgTU06IHBsdXJhbGl6ZSgnTScpLFxuICAgIHk6IHBsdXJhbGl6ZSgneScpLFxuICAgIHl5OiBwbHVyYWxpemUoJ3knKVxuICB9LFxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bw5nCocOZwqLDmcKjw5nCpMOZwqXDmcKmw5nCp8OZwqjDmcKpw5nCoF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICB9KS5yZXBsYWNlKC/DmMKML2csICcsJyk7XG4gIH0sXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoLywvZywgJ8OYwownKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogNiwgLy8gU2F0dXJkYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDEyICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IEtocm9ub3MgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEJ1bGdhcmlhbiBbYmddXG4vLyEgYXV0aG9yIDogSXNrcmVuIEl2b3YgQ2hlcm5ldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2hlcm5ldlxuLy8hIGF1dGhvciA6IEt1bmFsIE1hcndhaGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWFyd2FoYWhhXG4vLyEgYXV0aG9yIDogTWF0dCBHcmFuZGUgOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGdyYW5kZVxuLy8hIGF1dGhvciA6IElzYWFjIENhbWJyb24gOiBodHRwczovL2dpdGh1Yi5jb20vaWNhbWJyb25cbi8vISBhdXRob3IgOiBWZW5lbGluIE1hbmNoZXYgOiBodHRwczovL2dpdGh1Yi5jb20vdm1hbmNoZXZcblxuZXhwb3J0IGNvbnN0IGJnTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnYmcnLFxuICBtb250aHM6ICfDkcKPw5DCvcORwoPDkMKww5HCgMOQwrhfw5HChMOQwrXDkMKyw5HCgMORwoPDkMKww5HCgMOQwrhfw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoDDkMK4w5DCu1/DkMK8w5DCsMOQwrlfw5HCjsOQwr3DkMK4X8ORwo7DkMK7w5DCuF/DkMKww5DCssOQwrPDkcKDw5HCgcORwoJfw5HCgcOQwrXDkMK/w5HCgsOQwrXDkMK8w5DCssORwoDDkMK4X8OQwr7DkMK6w5HCgsOQwr7DkMK8w5DCssORwoDDkMK4X8OQwr3DkMK+w5DCtcOQwrzDkMKyw5HCgMOQwrhfw5DCtMOQwrXDkMK6w5DCtcOQwrzDkMKyw5HCgMOQwrgnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnw5HCj8OQwr3DkcKAX8ORwoTDkMK1w5DCsl/DkMK8w5DCsMORwoBfw5DCsMOQwr/DkcKAX8OQwrzDkMKww5DCuV/DkcKOw5DCvcOQwrhfw5HCjsOQwrvDkMK4X8OQwrDDkMKyw5DCs1/DkcKBw5DCtcOQwr9fw5DCvsOQwrrDkcKCX8OQwr3DkMK+w5DCtV/DkMK0w5DCtcOQwronLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnw5DCvcOQwrXDkMK0w5DCtcOQwrvDkcKPX8OQwr/DkMK+w5DCvcOQwrXDkMK0w5DCtcOQwrvDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMORwo/DkMK0w5DCsF/DkcKHw5DCtcORwoLDkMKyw5HCisORwoDDkcKCw5HCisOQwrpfw5DCv8OQwrXDkcKCw5HCisOQwrpfw5HCgcORworDkMKxw5DCvsORwoLDkMKwJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw5DCvcOQwrXDkMK0X8OQwr/DkMK+w5DCvV/DkMKyw5HCgsOQwr5fw5HCgcORwoDDkcKPX8ORwofDkMK1w5HCgl/DkMK/w5DCtcORwoJfw5HCgcORworDkMKxJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OQwr3DkMK0X8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0QuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDkMKUw5DCvcOQwrXDkcKBIMOQwrJdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OQwqPDkcKCw5HCgMOQwrUgw5DCsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5DCsl0gTFQnLFxuICAgIGxhc3REYXk6ICdbw5DCksORwofDkMK1w5HCgMOQwrAgw5DCsl0gTFQnLFxuICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoZDogYW55KSB7XG5cbiAgICAgIHN3aXRjaCAoZCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCuMOQwrfDkMK8w5DCuMOQwr3DkMKww5DCu8OQwrDDkcKCw5DCsF0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK4w5DCt8OQwrzDkMK4w5DCvcOQwrDDkMK7w5DCuMORwo9dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw5HCgcOQwrvDkMK1w5DCtCAlcycsXG4gICAgcGFzdDogJ8OQwr/DkcKAw5DCtcOQwrTDkMK4ICVzJyxcbiAgICBzOiAnw5DCvcORwo/DkMK6w5DCvsOQwrvDkMK6w5DCviDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMK4JyxcbiAgICBzczogJyVkIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMOQwrgnLFxuICAgIG06ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrAnLFxuICAgIG1tOiAnJWQgw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMK4JyxcbiAgICBoOiAnw5HCh8OQwrDDkcKBJyxcbiAgICBoaDogJyVkIMORwofDkMKww5HCgcOQwrAnLFxuICAgIGQ6ICfDkMK0w5DCtcOQwr0nLFxuICAgIGRkOiAnJWQgw5DCtMOQwr3DkMK4JyxcbiAgICBNOiAnw5DCvMOQwrXDkcKBw5DCtcORwoYnLFxuICAgIE1NOiAnJWQgw5DCvMOQwrXDkcKBw5DCtcORwobDkMKwJyxcbiAgICB5OiAnw5DCs8OQwr7DkMK0w5DCuMOQwr3DkMKwJyxcbiAgICB5eTogJyVkIMOQwrPDkMK+w5DCtMOQwrjDkMK9w5DCuCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjDkMK1w5DCsnzDkMK1w5DCvXzDkcKCw5DCuHzDkMKyw5DCuHzDkcKAw5DCuHzDkMK8w5DCuCkvLFxuICBvcmRpbmFsOiBmdW5jdGlvbiAoX251bTogbnVtYmVyKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IG51bWJlciA9IE51bWJlcihfbnVtKTtcblxuICAgIGxldCBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcbiAgICAgIGxhc3QyRGlnaXRzID0gbnVtYmVyICUgMTAwO1xuXG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCtcOQwrInO1xuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPT09IDApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrXDkMK9JztcbiAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID4gMTAgJiYgbGFzdDJEaWdpdHMgPCAyMCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5HCgsOQwrgnO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAxKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMKyw5DCuCc7XG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDIpIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoDDkMK4JztcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gNyB8fCBsYXN0RGlnaXQgPT09IDgpIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrzDkMK4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5HCgsOQwrgnO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEN6ZWNoIFtjc11cbi8vISBhdXRob3IgOiBwZXRyYmVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRyYmVsYVxuXG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gJ2xlZGVuX8ODwrpub3JfYsOFwpllemVuX2R1YmVuX2t2w4TCm3Rlbl/DhMKNZXJ2ZW5fw4TCjWVydmVuZWNfc3JwZW5fesODwqHDhcKZw4PCrV/DhcKZw4PCrWplbl9saXN0b3BhZF9wcm9zaW5lYycuc3BsaXQoJ18nKTtcbmNvbnN0IG1vbnRoc1Nob3J0OiBzdHJpbmdbXSA9ICdsZWRfw4PCum5vX2LDhcKZZV9kdWJfa3bDhMKbX8OEwo12bl/DhMKNdmNfc3JwX3rDg8Khw4XCmV/DhcKZw4PCrWpfbGlzX3Bybycuc3BsaXQoJ18nKTtcblxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAobnVtID4gMSkgJiYgKG51bSA8IDUpICYmICh+fihudW0gLyAxMCkgIT09IDEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IHJlc3VsdCA9IG51bSArICcgJztcblxuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOiAgLy8gYSBmZXcgc2Vjb25kcyAvIGluIGEgZmV3IHNlY29uZHMgLyBhIGZldyBzZWNvbmRzIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdww4PCoXIgc2VrdW5kJyA6ICdww4PCoXIgc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6IC8vIDkgc2Vjb25kcyAvIGluIDkgc2Vjb25kcyAvIDkgc2Vjb25kcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2VrdW5kJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Nla3VuZGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnbSc6ICAvLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogKGlzRnV0dXJlID8gJ21pbnV0dScgOiAnbWludXRvdScpO1xuICAgIGNhc2UgJ21tJzogLy8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbnV0YW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdoJzogIC8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XG4gICAgY2FzZSAnaGgnOiAvLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kaW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnaG9kaW5hbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2QnOiAgLy8gYSBkYXkgLyBpbiBhIGRheSAvIGEgZGF5IGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdkZW4nIDogJ2RuZW0nO1xuICAgIGNhc2UgJ2RkJzogLy8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbnknIDogJ2Ruw4PCrScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkbnknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ00nOiAgLy8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdtw4TCm3PDg8KtYycgOiAnbcOEwptzw4PCrWNlbSc7XG4gICAgY2FzZSAnTU0nOiAvLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ23DhMKbc8ODwq1jZScgOiAnbcOEwptzw4PCrWPDhcKvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23DhMKbc8ODwq1jaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAneSc6ICAvLyBhIHllYXIgLyBpbiBhIHllYXIgLyBhIHllYXIgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3JvaycgOiAncm9rZW0nO1xuICAgIGNhc2UgJ3l5JzogLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdsZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbGV0eSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnY3MnLFxuICBtb250aHMsXG4gIG1vbnRoc1Nob3J0LFxuICBtb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHMsIG1vbnRoc1Nob3J0KSB7XG4gICAgbGV0IGksIF9tb250aHNQYXJzZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyB1c2UgY3VzdG9tIHBhcnNlciB0byBzb2x2ZSBwcm9ibGVtIHdpdGggSnVseSAow4TCjWVydmVuZWMpXG4gICAgICBfbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckfF4nICsgbW9udGhzU2hvcnRbaV0gKyAnJCcsICdpJyk7XG4gICAgfVxuICAgIHJldHVybiBfbW9udGhzUGFyc2U7XG4gIH0obW9udGhzLCBtb250aHNTaG9ydCkpLFxuICBzaG9ydE1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRoc1Nob3J0KSB7XG4gICAgbGV0IGksIF9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIF9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9zaG9ydE1vbnRoc1BhcnNlO1xuICB9KG1vbnRoc1Nob3J0KSksXG4gIGxvbmdNb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHMpIHtcbiAgICBsZXQgaSwgX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBfbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJCcsICdpJyk7XG4gICAgfVxuICAgIHJldHVybiBfbG9uZ01vbnRoc1BhcnNlO1xuICB9KG1vbnRocykpLFxuICB3ZWVrZGF5czogJ25lZMOEwptsZV9wb25kw4TCm2zDg8KtX8ODwrp0ZXLDg8K9X3N0w4XCmWVkYV/DhMKNdHZydGVrX3DDg8KhdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lX3BvX8ODwrp0X3N0X8OEwo10X3DDg8KhX3NvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX8ODwrp0X3N0X8OEwo10X3DDg8KhX3NvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIGw6ICdELiBNLiBZWVlZJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZG5lcyB2XSBMVCcsXG4gICAgbmV4dERheTogJ1t6w4PCrXRyYSB2XSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbdiBuZWTDhMKbbGkgdl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1t2ZSBzdMOFwpllZHUgdl0gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuICdbdmUgw4TCjXR2cnRlayB2XSBMVCc7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1t2IHDDg8KhdGVrIHZdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IHZdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmEgdl0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3UgbmVkw4TCm2xpIHZdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8KpXSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHN0w4XCmWVkdSB2XSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbdl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBzb2JvdHUgdl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJ3DDhcKZZWQgJXMnLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRGFuaXNoIChEZW5tYXJrKSBbZGFdXG4vLyEgYXV0aG9yIDogUGVyIEhhbnNlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXJocFxuXG5leHBvcnQgY29uc3QgZGFMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdkYScsXG4gIG1vbnRocyA6ICdKYW51YXJfRmVicnVhcl9NYXJ0c19BcHJpbF9NYWpfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01hal9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ1PDg8K4bmRhZ19NYW5kYWdfVGlyc2RhZ19PbnNkYWdfVG9yc2RhZ19GcmVkYWdfTMODwrhyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ1PDg8K4bl9NYW5fVGlyX09uc19Ub3JfRnJlX0zDg8K4cicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU8ODwrhfTWFfVGlfT25fVG9fRnJfTMODwrgnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgTExMIDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgICBMTExMIDogJ2RkZGQgW2QuXSBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgICAgc2FtZURheSA6ICdbaSBkYWcga2wuXSBMVCcsXG4gICAgICBuZXh0RGF5IDogJ1tpIG1vcmdlbiBrbC5dIExUJyxcbiAgICAgIG5leHRXZWVrIDogJ3DDg8KlIGRkZGQgW2tsLl0gTFQnLFxuICAgICAgbGFzdERheSA6ICdbaSBnw4PCpXIga2wuXSBMVCcsXG4gICAgICBsYXN0V2VlayA6ICdbaV0gZGRkZFtzIGtsLl0gTFQnLFxuICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgZnV0dXJlIDogJ29tICVzJyxcbiAgICAgIHBhc3QgOiAnJXMgc2lkZW4nLFxuICAgICAgcyA6ICdmw4PCpSBzZWt1bmRlcicsXG4gICAgICBtIDogJ2V0IG1pbnV0JyxcbiAgICAgIG1tIDogJyVkIG1pbnV0dGVyJyxcbiAgICAgIGggOiAnZW4gdGltZScsXG4gICAgICBoaCA6ICclZCB0aW1lcicsXG4gICAgICBkIDogJ2VuIGRhZycsXG4gICAgICBkZCA6ICclZCBkYWdlJyxcbiAgICAgIE0gOiAnZW4gbcODwqVuZWQnLFxuICAgICAgTU0gOiAnJWQgbcODwqVuZWRlcicsXG4gICAgICB5IDogJ2V0IMODwqVyJyxcbiAgICAgIHl5IDogJyVkIMODwqVyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsIDogJyVkLicsXG4gIHdlZWsgOiB7XG4gICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBHZXJtYW4gW2RlXVxuLy8hIGF1dGhvciA6IGxsdWNocyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9sbHVjaHNcbi8vISBhdXRob3I6IE1lbmVsaW9uIEVsZW5zw4PCumxlOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuLy8hIGF1dGhvciA6IE1pa29sYWogRGFkZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL21pazAxYWpcblxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZ10gfSA9IHtcbiAgICAnbSc6IFsnZWluZSBNaW51dGUnLCAnZWluZXIgTWludXRlJ10sXG4gICAgJ2gnOiBbJ2VpbmUgU3R1bmRlJywgJ2VpbmVyIFN0dW5kZSddLFxuICAgICdkJzogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICAgICdkZCc6IFtudW0gKyAnIFRhZ2UnLCBudW0gKyAnIFRhZ2VuJ10sXG4gICAgJ00nOiBbJ2VpbiBNb25hdCcsICdlaW5lbSBNb25hdCddLFxuICAgICdNTSc6IFtudW0gKyAnIE1vbmF0ZScsIG51bSArICcgTW9uYXRlbiddLFxuICAgICd5JzogWydlaW4gSmFocicsICdlaW5lbSBKYWhyJ10sXG4gICAgJ3l5JzogW251bSArICcgSmFocmUnLCBudW0gKyAnIEphaHJlbiddXG4gIH07XG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZGUnLFxuICBtb250aHM6ICdKYW51YXJfRmVicnVhcl9Nw4PCpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw4PCpHJ6X0Fwci5fTWFpX0p1bmlfSnVsaV9BdWcuX1NlcC5fT2t0Ll9Ob3YuX0Rlei4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdTby5fTW8uX0RpLl9NaS5fRG8uX0ZyLl9TYS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1toZXV0ZSB1bV0gTFQgW1Vocl0nLFxuICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgbmV4dERheTogJ1ttb3JnZW4gdW1dIExUIFtVaHJdJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW3VtXSBMVCBbVWhyXScsXG4gICAgbGFzdERheTogJ1tnZXN0ZXJuIHVtXSBMVCBbVWhyXScsXG4gICAgbGFzdFdlZWs6ICdbbGV0enRlbl0gZGRkZCBbdW1dIExUIFtVaHJdJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgcGFzdDogJ3ZvciAlcycsXG4gICAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcbiAgICBzczogJyVkIFNla3VuZGVuJyxcbiAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG1tOiAnJWQgTWludXRlbicsXG4gICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoaDogJyVkIFN0dW5kZW4nLFxuICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5OiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHl5OiBwcm9jZXNzUmVsYXRpdmVUaW1lXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRW5nbGlzaCAoVW5pdGVkIEtpbmdkb20pIFtlbi1nYl1cbi8vISBhdXRob3IgOiBDaHJpcyBHZWRyaW0gOiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNnZWRyaW1cblxuZXhwb3J0IGNvbnN0IGVuR2JMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdlbi1nYicsXG4gIG1vbnRocyA6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxuICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ2luICVzJyxcbiAgICBwYXN0IDogJyVzIGFnbycsXG4gICAgcyA6ICdhIGZldyBzZWNvbmRzJyxcbiAgICBzcyA6ICclZCBzZWNvbmRzJyxcbiAgICBtIDogJ2EgbWludXRlJyxcbiAgICBtbSA6ICclZCBtaW51dGVzJyxcbiAgICBoIDogJ2FuIGhvdXInLFxuICAgIGhoIDogJyVkIGhvdXJzJyxcbiAgICBkIDogJ2EgZGF5JyxcbiAgICBkZCA6ICclZCBkYXlzJyxcbiAgICBNIDogJ2EgbW9udGgnLFxuICAgIE1NIDogJyVkIG1vbnRocycsXG4gICAgeSA6ICdhIHllYXInLFxuICAgIHl5IDogJyVkIHllYXJzJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3R8bmR8cmR8dGgpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBjb25zdCBiID0gbnVtICUgMTAsXG4gICAgICBvdXRwdXQgPSAofn4obnVtICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTcGFuaXNoIChEb21pbmljYW4gUmVwdWJsaWMpIFtlcy1kb11cblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eZW5lL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2VwL2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGljL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZXxlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IGVzRG9Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdlcy1kbycsXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSkvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9taV9qdV92aV9zw4PCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnaDptbSBBJyxcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIGg6bW0gQScsXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW21hw4PCsWFuYSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbYXllciBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbcGFzYWRvIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnaGFjZSAlcycsXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMODwq1hJyxcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1biBhw4PCsW8nLFxuICAgIHl5OiAnJWQgYcODwrFvcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggW2VzXVxuLy8hIGF1dGhvciA6IEp1bGlvIE5hcHVyw4PCrSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpb25jXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBlc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VzJyxcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9XG5cbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw4PCqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdoYWNlICVzJyxcbiAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGHDg8KxbycsXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoVW5pdGVkIFN0YXRlcykgW2VzLXVzXVxuLy8hIGF1dGhvciA6IGJ1c3R0YSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9idXN0dGFcblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpO1xubGV0IG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpO1xuXG5leHBvcnQgY29uc3QgZXNVc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VzLXVzJyxcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw4PCqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdoOm1tIEEnLFxuICAgIExUUzogJ2g6bW06c3MgQScsXG4gICAgTDogJ01NL0REL1lZWVknLFxuICAgIExMOiAnTU1NTSBbZGVdIEQgW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdNTU1NIFtkZV0gRCBbZGVdIFlZWVkgaDptbSBBJyxcbiAgICBMTExMOiAnZGRkZCwgTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbaG95IGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdoYWNlICVzJyxcbiAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGHDg8KxbycsXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvZmkuanNcblxudmFyIG51bWJlcnNQYXN0ID0gJ25vbGxhIHlrc2kga2Frc2kga29sbWUgbmVsasODwqQgdmlpc2kga3V1c2kgc2VpdHNlbcODwqRuIGthaGRla3NhbiB5aGRla3PDg8Kkbicuc3BsaXQoJyAnKSxcbiAgbnVtYmVyc0Z1dHVyZSA9IFtcbiAgICAnbm9sbGEnLCAneWhkZW4nLCAna2FoZGVuJywgJ2tvbG1lbicsICduZWxqw4PCpG4nLCAndmlpZGVuJywgJ2t1dWRlbicsXG4gICAgbnVtYmVyc1Bhc3RbN10sIG51bWJlcnNQYXN0WzhdLCBudW1iZXJzUGFzdFs5XVxuICBdO1xuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtdXV0YW1hbiBzZWt1bm5pbicgOiAnbXV1dGFtYSBzZWt1bnRpJztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAnc2VrdW5uaW4nIDogJ3Nla3VudGlhJztcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGknO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aWEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aSc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aWEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAncMODwqRpdsODwqRuJyA6ICdww4PCpGl2w4PCpCc7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAncMODwqRpdsODwqRuJyA6ICdww4PCpGl2w4PCpMODwqQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTSc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXVzaSc7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXV0dGEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW9zaSc7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW90dGEnO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmVzdWx0ID0gdmVyYmFsTnVtYmVyKG51bSwgaXNGdXR1cmUpICsgJyAnICsgcmVzdWx0O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB2ZXJiYWxOdW1iZXIobnVtOiBudW1iZXIsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiBudW0gPCAxMCA/IChpc0Z1dHVyZSA/IG51bWJlcnNGdXR1cmVbbnVtXSA6IG51bWJlcnNQYXN0W251bV0pIDogbnVtO1xufVxuXG5leHBvcnQgY29uc3QgZmlMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdmaScsXG4gIG1vbnRoczogJ3RhbW1pa3V1X2hlbG1pa3V1X21hYWxpc2t1dV9odWh0aWt1dV90b3Vrb2t1dV9rZXPDg8Kka3V1X2hlaW7Dg8Kka3V1X2Vsb2t1dV9zeXlza3V1X2xva2FrdXVfbWFycmFza3V1X2pvdWx1a3V1Jy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ3RhbW1pX2hlbG1pX21hYWxpc19odWh0aV90b3Vrb19rZXPDg8KkX2hlaW7Dg8KkX2Vsb19zeXlzX2xva2FfbWFycmFzX2pvdWx1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ3N1bm51bnRhaV9tYWFuYW50YWlfdGlpc3RhaV9rZXNraXZpaWtrb190b3JzdGFpX3BlcmphbnRhaV9sYXVhbnRhaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEgubW0nLFxuICAgIExUUzogJ0hILm1tLnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEbyBNTU1NW3RhXSBZWVlZJyxcbiAgICBMTEw6ICdEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgTExMTDogJ2RkZGQsIERvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBsOiAnRC5NLllZWVknLFxuICAgIGxsOiAnRG8gTU1NIFlZWVknLFxuICAgIGxsbDogJ0RvIE1NTSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgbGxsbDogJ2RkZCwgRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbdMODwqRuw4PCpMODwqRuXSBba2xvXSBMVCcsXG4gICAgbmV4dERheTogJ1todW9tZW5uYV0gW2tsb10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBba2xvXSBMVCcsXG4gICAgbGFzdERheTogJ1tlaWxlbl0gW2tsb10gTFQnLFxuICAgIGxhc3RXZWVrOiAnW3ZpaW1lXSBkZGRkW25hXSBba2xvXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyBww4PCpMODwqRzdMODwqQnLFxuICAgIHBhc3Q6ICclcyBzaXR0ZW4nLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRnJlbmNoIFtmcl1cbi8vISBhdXRob3IgOiBKb2huIEZpc2NoZXIgOiBodHRwczovL2dpdGh1Yi5jb20vamZyb2ZmaWNlXG5cbmV4cG9ydCBjb25zdCBmckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2ZyJyxcbiAgbW9udGhzOiAnamFudmllcl9mw4PCqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8ODwrt0X3NlcHRlbWJyZV9vY3RvYnJlX25vdmVtYnJlX2TDg8KpY2VtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbnYuX2bDg8KpdnIuX21hcnNfYXZyLl9tYWlfanVpbl9qdWlsLl9hb8ODwrt0X3NlcHQuX29jdC5fbm92Ll9kw4PCqWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ2RpbWFuY2hlX2x1bmRpX21hcmRpX21lcmNyZWRpX2pldWRpX3ZlbmRyZWRpX3NhbWVkaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RpbS5fbHVuLl9tYXIuX21lci5famV1Ll92ZW4uX3NhbS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZGlfbHVfbWFfbWVfamVfdmVfc2EnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0F1am91cmTDosKAwplodWkgw4PCoF0gTFQnLFxuICAgIG5leHREYXk6ICdbRGVtYWluIMODwqBdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8ODwqBdIExUJyxcbiAgICBsYXN0RGF5OiAnW0hpZXIgw4PCoF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnZGRkZCBbZGVybmllciDDg8KgXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdkYW5zICVzJyxcbiAgICBwYXN0OiAnaWwgeSBhICVzJyxcbiAgICBzOiAncXVlbHF1ZXMgc2Vjb25kZXMnLFxuICAgIHNzOiAnJWQgc2Vjb25kZXMnLFxuICAgIG06ICd1bmUgbWludXRlJyxcbiAgICBtbTogJyVkIG1pbnV0ZXMnLFxuICAgIGg6ICd1bmUgaGV1cmUnLFxuICAgIGhoOiAnJWQgaGV1cmVzJyxcbiAgICBkOiAndW4gam91cicsXG4gICAgZGQ6ICclZCBqb3VycycsXG4gICAgTTogJ3VuIG1vaXMnLFxuICAgIE1NOiAnJWQgbW9pcycsXG4gICAgeTogJ3VuIGFuJyxcbiAgICB5eTogJyVkIGFucydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGVyfCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgLy8gVE9ETzogUmV0dXJuICdlJyB3aGVuIGRheSBvZiBtb250aCA+IDEuIE1vdmUgdGhpcyBjYXNlIGluc2lkZVxuICAgICAgLy8gYmxvY2sgZm9yIG1hc2N1bGluZSB3b3JkcyBiZWxvdy5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMzM3NVxuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ2VyJyA6ICcnKTtcblxuICAgICAgLy8gV29yZHMgd2l0aCBtYXNjdWxpbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBtb2lzLCB0cmltZXN0cmUsIGpvdXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdlcicgOiAnZScpO1xuXG4gICAgICAvLyBXb3JkcyB3aXRoIGZlbWluaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogc2VtYWluZVxuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAncmUnIDogJ2UnKTtcbiAgICB9XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBHYWxpY2lhbiBbZ2xdXG4vLyEgYXV0aG9yIDogRGFyw4PCrW8gQmVpcsODwrMgOiBodHRwczovL2dpdGh1Yi5jb20vcXVpbm9icmF2b1xuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAneGFuLl9mZWIuX21hci5fYWJyLl9tYWkuX3h1w4PCsS5feHVsLl9hZ28uX3NldC5fb3V0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0ID0gJ3hhbl9mZWJfbWFyX2Ficl9tYWlfeHXDg8KxX3h1bF9hZ29fc2V0X291dF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL154YW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL154dcODwrEvaSwgL154dWwvaSwgL15hZ28vaSwgL15zZXQvaSwgL15vdXQvaSwgL15ub3YvaSwgL15kZWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXih4YW5laXJvfGZlYnJlaXJvfG1hcnpvfGFicmlsfG1haW98eHXDg8Kxb3x4dWxsb3xhZ29zdG98c2V0ZW1icm98b3V0dWJyb3xub3ZlbWJyb3xkZWNlbWJyb3x4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDg8KxXFwuP3x4dWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvdXRcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IGdsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZ2wnLFxuICBtb250aHM6ICd4YW5laXJvX2ZlYnJlaXJvX21hcnpvX2FicmlsX21haW9feHXDg8Kxb194dWxsb19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZWNlbWJybycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9XG5cbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXih4YW5laXJvfGZlYnJlaXJvfG1hcnpvfGFicmlsfG1haW98eHXDg8Kxb3x4dWxsb3xhZ29zdG98c2V0ZW1icm98b3V0dWJyb3xub3ZlbWJyb3xkZWNlbWJybykvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oeGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w4PCsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bnNfbWFydGVzX23Dg8KpcmNvcmVzX3hvdmVzX3ZlbnJlc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tw4PCqXIuX3hvdi5fdmVuLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX23Dg8KpX3hvX3ZlX3PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tob3hlIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW21hw4PCsWFuIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW8ODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW29udGUgw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW29dIGRkZGQgW3Bhc2FkbyDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2ZhaSAlcycsXG4gICAgczogJ3VucyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5oYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMODwq1hJyxcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1biBhbm8nLFxuICAgIHl5OiAnJWQgYW5vcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSGVicmV3IFtoZV1cbi8vISBhdXRob3IgOiBUb21lciBDb2hlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS90b21lclxuLy8hIGF1dGhvciA6IE1vc2hlIFNpbWFudG92IDogaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BtZW50SUxcbi8vISBhdXRob3IgOiBUYWwgQXRlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9UYWxBdGVyXG5cbmV4cG9ydCBjb25zdCBoZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2hlJyxcbiAgbW9udGhzOiAnw5fCmcOXwqDDl8KVw5fCkMOXwqhfw5fCpMOXwpHDl8Kow5fClcOXwpDDl8KoX8OXwp7Dl8Kow5fCpV/Dl8KQw5fCpMOXwqjDl8KZw5fCnF/Dl8Kew5fCkMOXwplfw5fCmcOXwpXDl8Kgw5fCmV/Dl8KZw5fClcOXwpzDl8KZX8OXwpDDl8KVw5fCksOXwpXDl8Khw5fCmF/Dl8Khw5fCpMOXwpjDl8Kew5fCkcOXwqhfw5fCkMOXwpXDl8Knw5fCmMOXwpXDl8KRw5fCqF/Dl8Kgw5fClcOXwpHDl8Kew5fCkcOXwqhfw5fCk8OXwqbDl8Kew5fCkcOXwqgnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnw5fCmcOXwqDDl8KVw5fCs1/Dl8Kkw5fCkcOXwqjDl8KzX8OXwp7Dl8Kow5fCpV/Dl8KQw5fCpMOXwqjDl8KzX8OXwp7Dl8KQw5fCmV/Dl8KZw5fClcOXwqDDl8KZX8OXwpnDl8KVw5fCnMOXwplfw5fCkMOXwpXDl8KSw5fCs1/Dl8Khw5fCpMOXwpjDl8KzX8OXwpDDl8KVw5fCp8OXwrNfw5fCoMOXwpXDl8KRw5fCs1/Dl8KTw5fCpsOXwp7Dl8KzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ8OXwqjDl8KQw5fCqcOXwpXDl8KfX8OXwqnDl8Kgw5fCmV/Dl8Kpw5fCnMOXwpnDl8Kpw5fCmV/Dl8Kow5fCkcOXwpnDl8Kiw5fCmV/Dl8KXw5fCnsOXwpnDl8Kpw5fCmV/Dl8Kpw5fCmcOXwqnDl8KZX8OXwqnDl8KRw5fCqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OXwpDDl8KzX8OXwpHDl8KzX8OXwpLDl8KzX8OXwpPDl8KzX8OXwpTDl8KzX8OXwpXDl8KzX8OXwqnDl8KzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OXwpBfw5fCkV/Dl8KSX8OXwpNfw5fClF/Dl8KVX8OXwqknLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW8OXwpFdTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIFvDl8KRXU1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW8OXwpFdTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBsOiAnRC9NL1lZWVknLFxuICAgIGxsOiAnRCBNTU0gWVlZWScsXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXG4gICAgbGxsbDogJ2RkZCwgRCBNTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OXwpTDl8KZw5fClcOXwp0gw5fCkcOWwr5dTFQnLFxuICAgIG5leHREYXk6ICdbw5fCnsOXwpfDl8KoIMOXwpHDlsK+XUxUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8OXwpHDl8Kpw5fCosOXwpRdIExUJyxcbiAgICBsYXN0RGF5OiAnW8OXwpDDl8Kqw5fCnsOXwpXDl8KcIMOXwpHDlsK+XUxUJyxcbiAgICBsYXN0V2VlazogJ1vDl8KRw5fCmcOXwpXDl8KdXSBkZGRkIFvDl8KUw5fCkMOXwpfDl8Kow5fClcOXwp8gw5fCkcOXwqnDl8Kiw5fClF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw5fCkcOXwqLDl8KVw5fCkyAlcycsXG4gICAgcGFzdDogJ8OXwpzDl8Kkw5fCoMOXwpkgJXMnLFxuICAgIHM6ICfDl8Kew5fCocOXwqTDl8KoIMOXwqnDl8Kgw5fCmcOXwpXDl8KqJyxcbiAgICBzczogJyVkIMOXwqnDl8Kgw5fCmcOXwpXDl8KqJyxcbiAgICBtOiAnw5fCk8OXwqfDl8KUJyxcbiAgICBtbTogJyVkIMOXwpPDl8Knw5fClcOXwqonLFxuICAgIGg6ICfDl8Kpw5fCosOXwpQnLFxuICAgIGhoKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8Kpw5fCosOXwqrDl8KZw5fCmcOXwp0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCqcOXwqLDl8KVw5fCqic7XG4gICAgfSxcbiAgICBkOiAnw5fCmcOXwpXDl8KdJyxcbiAgICBkZChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAnw5fCmcOXwpXDl8Kew5fCmcOXwpnDl8KdJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnIMOXwpnDl8Kew5fCmcOXwp0nO1xuICAgIH0sXG4gICAgTTogJ8OXwpfDl8KVw5fCk8OXwqknLFxuICAgIE1NKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8KXw5fClcOXwpPDl8Kpw5fCmcOXwpnDl8KdJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnIMOXwpfDl8KVw5fCk8OXwqnDl8KZw5fCnSc7XG4gICAgfSxcbiAgICB5OiAnw5fCqcOXwqDDl8KUJyxcbiAgICB5eShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAnw5fCqcOXwqDDl8Kqw5fCmcOXwpnDl8KdJztcbiAgICAgIH0gZWxzZSBpZiAobnVtICUgMTAgPT09IDAgJiYgbnVtICE9PSAxMCkge1xuICAgICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCoMOXwpQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCqcOXwqDDl8KZw5fCnSc7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw5fCkMOXwpfDl8KUXCLDl8KmfMOXwpzDl8Kkw5fCoMOXwpRcIsOXwqZ8w5fCkMOXwpfDl8Kow5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdfMOXwpzDl8Kkw5fCoMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8Kcw5fCpMOXwqDDl8KVw5fCqiDDl8KRw5fClcOXwqfDl8KofMOXwpHDl8KRw5fClcOXwqfDl8KofMOXwpHDl8Kiw5fCqMOXwpEvaSxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiAvXijDl8KQw5fCl8OXwpRcIsOXwqZ8w5fCkMOXwpfDl8Kow5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdfMOXwpHDl8Kiw5fCqMOXwpEpJC8udGVzdChpbnB1dCk7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNSkge1xuICAgICAgcmV0dXJuICfDl8Kcw5fCpMOXwqDDl8KVw5fCqiDDl8KRw5fClcOXwqfDl8KoJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgcmV0dXJuICfDl8KRw5fCkcOXwpXDl8Knw5fCqCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ8OXwpzDl8Kkw5fCoMOXwpRcIsOXwqYnIDogJ8OXwpzDl8Kkw5fCoMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnSc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTgpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ8OXwpDDl8KXw5fClFwiw5fCpicgOiAnw5fCkMOXwpfDl8Kow5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDl8KRw5fCosOXwqjDl8KRJztcbiAgICB9XG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSGluZGkgW2hpXVxuLy8hIGF1dGhvciA6IE1heWFuayBTaW5naGFsIDogaHR0cHM6Ly9naXRodWIuY29tL21heWFua3NpbmdoYWxcblxubGV0IHN5bWJvbE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgMTogJ8OgwqXCpycsXG4gICAgMjogJ8OgwqXCqCcsXG4gICAgMzogJ8OgwqXCqScsXG4gICAgNDogJ8OgwqXCqicsXG4gICAgNTogJ8OgwqXCqycsXG4gICAgNjogJ8OgwqXCrCcsXG4gICAgNzogJ8OgwqXCrScsXG4gICAgODogJ8OgwqXCricsXG4gICAgOTogJ8OgwqXCrycsXG4gICAgMDogJ8OgwqXCpidcbiAgfSxcbiAgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAnw6DCpcKnJzogJzEnLFxuICAgICfDoMKlwqgnOiAnMicsXG4gICAgJ8OgwqXCqSc6ICczJyxcbiAgICAnw6DCpcKqJzogJzQnLFxuICAgICfDoMKlwqsnOiAnNScsXG4gICAgJ8OgwqXCrCc6ICc2JyxcbiAgICAnw6DCpcKtJzogJzcnLFxuICAgICfDoMKlwq4nOiAnOCcsXG4gICAgJ8OgwqXCryc6ICc5JyxcbiAgICAnw6DCpcKmJzogJzAnXG4gIH07XG5cbmV4cG9ydCBjb25zdCBoaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2hpJyxcbiAgbW9udGhzOiAnw6DCpMKcw6DCpMKow6DCpMK1w6DCpMKww6DCpcKAX8OgwqTCq8OgwqTCvMOgwqTCsMOgwqTCtcOgwqTCsMOgwqXCgF/DoMKkwq7DoMKkwr7DoMKkwrDDoMKlwo3DoMKkwppfw6DCpMKFw6DCpMKqw6DCpcKNw6DCpMKww6DCpcKIw6DCpMKyX8OgwqTCrsOgwqTCiF/DoMKkwpzDoMKlwoLDoMKkwqhfw6DCpMKcw6DCpcKBw6DCpMKyw6DCpMK+w6DCpMKIX8OgwqTChcOgwqTCl8OgwqTCuMOgwqXCjcOgwqTCpF/DoMKkwrjDoMKkwr/DoMKkwqTDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrBfw6DCpMKFw6DCpMKVw6DCpcKNw6DCpMKfw6DCpcKCw6DCpMKsw6DCpMKwX8OgwqTCqMOgwqTCtcOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsF/DoMKkwqbDoMKkwr/DoMKkwrjDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrAnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnw6DCpMKcw6DCpMKoLl/DoMKkwqvDoMKkwrzDoMKkwrAuX8OgwqTCrsOgwqTCvsOgwqTCsMOgwqXCjcOgwqTCml/DoMKkwoXDoMKkwqrDoMKlwo3DoMKkwrDDoMKlwoguX8OgwqTCrsOgwqTCiF/DoMKkwpzDoMKlwoLDoMKkwqhfw6DCpMKcw6DCpcKBw6DCpMKyLl/DoMKkwoXDoMKkwpcuX8OgwqTCuMOgwqTCv8OgwqTCpC5fw6DCpMKFw6DCpMKVw6DCpcKNw6DCpMKfw6DCpcKCLl/DoMKkwqjDoMKkwrUuX8OgwqTCpsOgwqTCv8OgwqTCuC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnw6DCpMKww6DCpMK1w6DCpMK/w6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCuMOgwqXCi8OgwqTCrsOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwq7DoMKkwoLDoMKkwpfDoMKkwrLDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKsw6DCpcKBw6DCpMKnw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCl8OgwqXCgcOgwqTCsMOgwqXCgsOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrbDoMKlwoHDoMKkwpXDoMKlwo3DoMKkwrDDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK2w6DCpMKow6DCpMK/w6DCpMK1w6DCpMK+w6DCpMKwJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw6DCpMKww6DCpMK1w6DCpMK/X8OgwqTCuMOgwqXCi8OgwqTCrl/DoMKkwq7DoMKkwoLDoMKkwpfDoMKkwrJfw6DCpMKsw6DCpcKBw6DCpMKnX8OgwqTCl8OgwqXCgcOgwqTCsMOgwqXCgl/DoMKkwrbDoMKlwoHDoMKkwpXDoMKlwo3DoMKkwrBfw6DCpMK2w6DCpMKow6DCpMK/Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OgwqTCsF/DoMKkwrjDoMKlwotfw6DCpMKuw6DCpMKCX8OgwqTCrMOgwqXCgV/DoMKkwpfDoMKlwoFfw6DCpMK2w6DCpcKBX8OgwqTCticuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0EgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnLFxuICAgIExUUzogJ0EgaDptbTpzcyDDoMKkwqzDoMKkwpzDoMKlwocnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSwgQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChycsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw6DCpMKGw6DCpMKcXSBMVCcsXG4gICAgbmV4dERheTogJ1vDoMKkwpXDoMKkwrJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQsIExUJyxcbiAgICBsYXN0RGF5OiAnW8OgwqTClcOgwqTCsl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OgwqTCqsOgwqTCv8OgwqTCm8OgwqTCssOgwqXCh10gZGRkZCwgTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgw6DCpMKuw6DCpcKHw6DCpMKCJyxcbiAgICBwYXN0OiAnJXMgw6DCpMKqw6DCpMK5w6DCpMKyw6DCpcKHJyxcbiAgICBzOiAnw6DCpMKVw6DCpcKBw6DCpMKbIMOgwqTCucOgwqXCgCDDoMKkwpXDoMKlwo3DoMKkwrfDoMKkwqMnLFxuICAgIHNzOiAnJWQgw6DCpMK4w6DCpcKHw6DCpMKVw6DCpMKCw6DCpMKhJyxcbiAgICBtOiAnw6DCpMKPw6DCpMKVIMOgwqTCrsOgwqTCv8OgwqTCqMOgwqTCnycsXG4gICAgbW06ICclZCDDoMKkwq7DoMKkwr/DoMKkwqjDoMKkwp8nLFxuICAgIGg6ICfDoMKkwo/DoMKkwpUgw6DCpMKYw6DCpMKCw6DCpMKfw6DCpMK+JyxcbiAgICBoaDogJyVkIMOgwqTCmMOgwqTCgsOgwqTCn8OgwqXChycsXG4gICAgZDogJ8OgwqTCj8OgwqTClSDDoMKkwqbDoMKkwr/DoMKkwqgnLFxuICAgIGRkOiAnJWQgw6DCpMKmw6DCpMK/w6DCpMKoJyxcbiAgICBNOiAnw6DCpMKPw6DCpMKVIMOgwqTCrsOgwqTCucOgwqXCgMOgwqTCqMOgwqXChycsXG4gICAgTU06ICclZCDDoMKkwq7DoMKkwrnDoMKlwoDDoMKkwqjDoMKlwocnLFxuICAgIHk6ICfDoMKkwo/DoMKkwpUgw6DCpMK1w6DCpMKww6DCpcKNw6DCpMK3JyxcbiAgICB5eTogJyVkIMOgwqTCtcOgwqTCsMOgwqXCjcOgwqTCtydcbiAgfSxcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW8OgwqXCp8OgwqXCqMOgwqXCqcOgwqXCqsOgwqXCq8OgwqXCrMOgwqXCrcOgwqXCrsOgwqXCr8OgwqXCpl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICB9KTtcbiAgfSxcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICB9KTtcbiAgfSxcbiAgLy8gSGluZGkgbm90YXRpb24gZm9yIG1lcmlkaWVtcyBhcmUgcXVpdGUgZnV6enkgaW4gcHJhY3RpY2UuIFdoaWxlIHRoZXJlIGV4aXN0c1xuICAvLyBhIHJpZ2lkIG5vdGlvbiBvZiBhICdQYWhhcicgaXQgaXMgbm90IHVzZWQgYXMgcmlnaWRseSBpbiBtb2Rlcm4gSGluZGkuXG4gIG1lcmlkaWVtUGFyc2U6IC/DoMKkwrDDoMKkwr7DoMKkwqR8w6DCpMK4w6DCpcKBw6DCpMKsw6DCpMK5fMOgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsHzDoMKkwrbDoMKkwr7DoMKkwq4vLFxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIGhvdXIgPSAwO1xuICAgIH1cbiAgICBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrDDoMKkwr7DoMKkwqQnKSB7XG4gICAgICByZXR1cm4gaG91ciA8IDQgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrknKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwJykge1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTAgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrbDoMKkwr7DoMKkwq4nKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICByZXR1cm4gJ8OgwqTCsMOgwqTCvsOgwqTCpCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgIHJldHVybiAnw6DCpMK4w6DCpcKBw6DCpMKsw6DCpMK5JztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgcmV0dXJuICfDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrAnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICByZXR1cm4gJ8OgwqTCtsOgwqTCvsOgwqTCric7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw6DCpMKww6DCpMK+w6DCpMKkJztcbiAgICB9XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIdW5nYXJpYW4gW2h1XVxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxuXG5sZXQgd2Vla0VuZGluZ3MgPSAndmFzw4PCoXJuYXAgaMODwql0ZsOFwpFuIGtlZGRlbiBzemVyZMODwqFuIGNzw4PCvHTDg8K2cnTDg8K2a8ODwrZuIHDDg8KpbnRla2VuIHN6b21iYXRvbicuc3BsaXQoJyAnKTtcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnbsODwqlow4PCoW55IG3Dg8Khc29kcGVyYycgOiAnbsODwqlow4PCoW55IG3Dg8Khc29kcGVyY2UnO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBudW0gKyAoKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJyBtw4PCoXNvZHBlcmMnIDogJyBtw4PCoXNvZHBlcmNlJyk7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KzcmEnIDogJyDDg8KzcsODwqFqYScpO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCs3JhJyA6ICcgw4PCs3LDg8KhamEnKTtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow4PCs25hcCcgOiAnIGjDg8KzbmFwamEnKTtcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDg8KzbmFwJyA6ICcgaMODwrNuYXBqYScpO1xuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwql2JyA6ICcgw4PCqXZlJyk7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KpdicgOiAnIMODwql2ZScpO1xuICB9XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIHdlZWsoZGF0ZTogRGF0ZSwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChpc0Z1dHVyZSA/ICcnIDogJ1ttw4PCumx0XSAnKSArICdbJyArIHdlZWtFbmRpbmdzW2dldERheU9mV2VlayhkYXRlKV0gKyAnXSBMVFsta29yXSc7XG59XG5cbmV4cG9ydCBjb25zdCBodUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2h1JyxcbiAgbW9udGhzIDogJ2phbnXDg8Khcl9mZWJydcODwqFyX23Dg8KhcmNpdXNfw4PCoXByaWxpc19tw4PCoWp1c19qw4PCum5pdXNfasODwrpsaXVzX2F1Z3VzenR1c19zemVwdGVtYmVyX29rdMODwrNiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbcODwqFyY1/Dg8KhcHJfbcODwqFqX2rDg8K6bl9qw4PCumxfYXVnX3N6ZXB0X29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICd2YXPDg8Khcm5hcF9ow4PCqXRmw4XCkV9rZWRkX3N6ZXJkYV9jc8ODwrx0w4PCtnJ0w4PCtmtfcMODwqludGVrX3N6b21iYXQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAndmFzX2jDg8KpdF9rZWRkX3N6ZV9jc8ODwrx0X3DDg8Kpbl9zem8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ3ZfaF9rX3N6ZV9jc19wX3N6bycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSDptbScsXG4gICAgTFRTIDogJ0g6bW06c3MnLFxuICAgIEwgOiAnWVlZWS5NTS5ERC4nLFxuICAgIExMIDogJ1lZWVkuIE1NTU0gRC4nLFxuICAgIExMTCA6ICdZWVlZLiBNTU1NIEQuIEg6bW0nLFxuICAgIExMTEwgOiAnWVlZWS4gTU1NTSBELiwgZGRkZCBIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvZGV8ZHUvaSxcbiAgaXNQTSAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd1JztcbiAgfSxcbiAgbWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzIDwgMTIpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2RlJyA6ICdERSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2R1JyA6ICdEVSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1ttYV0gTFRbLWtvcl0nLFxuICAgIG5leHREYXkgOiAnW2hvbG5hcF0gTFRbLWtvcl0nLFxuICAgIG5leHRXZWVrIChkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gd2VlayhkYXRlLCB0cnVlKTtcbiAgICB9LFxuICAgIGxhc3REYXkgOiAnW3RlZ25hcF0gTFRbLWtvcl0nLFxuICAgIGxhc3RXZWVrIChkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gd2VlayhkYXRlLCBmYWxzZSk7XG4gICAgfSxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIG3Dg8K6bHZhJyxcbiAgICBwYXN0IDogJyVzJyxcbiAgICBzIDogdHJhbnNsYXRlLFxuICAgIHNzIDogdHJhbnNsYXRlLFxuICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgaCA6IHRyYW5zbGF0ZSxcbiAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICBkIDogdHJhbnNsYXRlLFxuICAgIGRkIDogdHJhbnNsYXRlLFxuICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgeSA6IHRyYW5zbGF0ZSxcbiAgICB5eSA6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsIDogJyVkLicsXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEluZG9uZXNpYSBbaWRdXG4vLyEgYXV0aG9yIDogUm9teSBLdXN1bWEgOiBodHRwczovL2dpdGh1Yi5jb20vcmt1c3VtYVxuLy8hIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9pZC5qc1xuXG5leHBvcnQgY29uc3QgaWRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdpZCcsXG4gIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hcmV0X0FwcmlsX01laV9KdW5pX0p1bGlfQWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01laV9KdW5fSnVsX0Fnc19TZXBfT2t0X05vdl9EZXMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ01pbmdndV9TZW5pbl9TZWxhc2FfUmFidV9LYW1pc19KdW1hdF9TYWJ0dScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdNaW5fU2VuX1NlbF9SYWJfS2FtX0p1bV9TYWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ01nX1NuX1NsX1JiX0ttX0ptX1NiJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISC5tbScsXG4gICAgTFRTIDogJ0hILm1tLnNzJyxcbiAgICBMIDogJ0REL01NL1lZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbScsXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvcGFnaXxzaWFuZ3xzb3JlfG1hbGFtLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzaWFuZycpIHtcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc29yZScgfHwgbWVyaWRpZW0gPT09ICdtYWxhbScpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICByZXR1cm4gJ3BhZ2knO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgcmV0dXJuICdzaWFuZyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA8IDE5KSB7XG4gICAgICByZXR1cm4gJ3NvcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21hbGFtJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW0hhcmkgaW5pIHB1a3VsXSBMVCcsXG4gICAgbmV4dERheSA6ICdbQmVzb2sgcHVrdWxdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFtwdWt1bF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW0tlbWFyaW4gcHVrdWxdIExUJyxcbiAgICBsYXN0V2VlayA6ICdkZGRkIFtsYWx1IHB1a3VsXSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdkYWxhbSAlcycsXG4gICAgcGFzdCA6ICclcyB5YW5nIGxhbHUnLFxuICAgIHMgOiAnYmViZXJhcGEgZGV0aWsnLFxuICAgIHNzIDogJyVkIGRldGlrJyxcbiAgICBtIDogJ3NlbWVuaXQnLFxuICAgIG1tIDogJyVkIG1lbml0JyxcbiAgICBoIDogJ3NlamFtJyxcbiAgICBoaCA6ICclZCBqYW0nLFxuICAgIGQgOiAnc2VoYXJpJyxcbiAgICBkZCA6ICclZCBoYXJpJyxcbiAgICBNIDogJ3NlYnVsYW4nLFxuICAgIE1NIDogJyVkIGJ1bGFuJyxcbiAgICB5IDogJ3NldGFodW4nLFxuICAgIHl5IDogJyVkIHRhaHVuJ1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBJdGFsaWFuIFtpdF1cbi8vISBhdXRob3IgOiBMb3JlbnpvIDogaHR0cHM6Ly9naXRodWIuY29tL2FsaWVtXG4vLyEgYXV0aG9yOiBNYXR0aWEgTGFyZW50aXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub3N0YWxnaWF6XG5cbmV4cG9ydCBjb25zdCBpdExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2l0JyxcbiAgbW9udGhzOiAnZ2VubmFpb19mZWJicmFpb19tYXJ6b19hcHJpbGVfbWFnZ2lvX2dpdWdub19sdWdsaW9fYWdvc3RvX3NldHRlbWJyZV9vdHRvYnJlX25vdmVtYnJlX2RpY2VtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2dlbl9mZWJfbWFyX2Fwcl9tYWdfZ2l1X2x1Z19hZ29fc2V0X290dF9ub3ZfZGljJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ2RvbWVuaWNhX2x1bmVkw4PCrF9tYXJ0ZWTDg8KsX21lcmNvbGVkw4PCrF9naW92ZWTDg8KsX3ZlbmVyZMODwqxfc2FiYXRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tX2x1bl9tYXJfbWVyX2dpb192ZW5fc2FiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21lX2dpX3ZlX3NhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbT2dnaSBhbGxlXSBMVCcsXG4gICAgbmV4dERheTogJ1tEb21hbmkgYWxsZV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbYWxsZV0gTFQnLFxuICAgIGxhc3REYXk6ICdbSWVyaSBhbGxlXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW2xhIHNjb3JzYV0gZGRkZCBbYWxsZV0gTFQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnW2xvIHNjb3Jzb10gZGRkZCBbYWxsZV0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmUobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICgoL15bMC05XS4rJC8pLnRlc3QobnVtLnRvU3RyaW5nKDEwKSkgPyAndHJhJyA6ICdpbicpICsgJyAnICsgbnVtO1xuICAgIH0sXG4gICAgcGFzdDogJyVzIGZhJyxcbiAgICBzOiAnYWxjdW5pIHNlY29uZGknLFxuICAgIHNzOiAnJWQgc2Vjb25kaScsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dGknLFxuICAgIGg6ICd1blxcJ29yYScsXG4gICAgaGg6ICclZCBvcmUnLFxuICAgIGQ6ICd1biBnaW9ybm8nLFxuICAgIGRkOiAnJWQgZ2lvcm5pJyxcbiAgICBNOiAndW4gbWVzZScsXG4gICAgTU06ICclZCBtZXNpJyxcbiAgICB5OiAndW4gYW5ubycsXG4gICAgeXk6ICclZCBhbm5pJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBKYXBhbmVzZSBbamFdXG4vLyEgYXV0aG9yIDogTEkgTG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJ5b25cblxuZXhwb3J0IGNvbnN0IGphTG9jYWxlOiBMb2NhbGVEYXRhID0gIHtcbiAgYWJicjogJ2phJyxcbiAgbW9udGhzIDogJzHDpsKcwohfMsOmwpzCiF8zw6bCnMKIXzTDpsKcwohfNcOmwpzCiF82w6bCnMKIXzfDpsKcwohfOMOmwpzCiF85w6bCnMKIXzEww6bCnMKIXzExw6bCnMKIXzEyw6bCnMKIJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnw6bCl8Klw6bCm8Kcw6bCl8KlX8OmwpzCiMOmwpvCnMOmwpfCpV/Dp8KBwqvDpsKbwpzDpsKXwqVfw6bCsMK0w6bCm8Kcw6bCl8KlX8OmwpzCqMOmwpvCnMOmwpfCpV/DqcKHwpHDpsKbwpzDpsKXwqVfw6XCnMKfw6bCm8Kcw6bCl8KlJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ8OmwpfCpV/DpsKcwohfw6fCgcKrX8OmwrDCtF/DpsKcwqhfw6nCh8KRX8OlwpzCnycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnw6bCl8KlX8OmwpzCiF/Dp8KBwqtfw6bCsMK0X8OmwpzCqF/DqcKHwpFfw6XCnMKfJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkvTU0vREQnLFxuICAgIExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgTExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXG4gICAgTExMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0gZGRkZCcsXG4gICAgbCA6ICdZWVlZL01NL0REJyxcbiAgICBsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxuICAgIGxsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxuICAgIGxsbGwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tIGRkZGQnXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DpcKNwojDpcKJwo18w6XCjcKIw6XCvsKML2ksXG4gIGlzUE0gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAnw6XCjcKIw6XCvsKMJztcbiAgfSxcbiAgbWVyaWRpZW0gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAnw6XCjcKIw6XCicKNJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDpcKNwojDpcK+wownO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbw6TCu8KKw6bCl8KlXSBMVCcsXG4gICAgbmV4dERheSA6ICdbw6bCmMKOw6bCl8KlXSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnW8Omwp3CpcOpwoDCsV1kZGRkIExUJyxcbiAgICBsYXN0RGF5IDogJ1vDpsKYwqjDpsKXwqVdIExUJyxcbiAgICBsYXN0V2VlayA6ICdbw6XCicKNw6nCgMKxXWRkZGQgTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn3DpsKXwqUvLFxuICBvcmRpbmFsIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDpsKXwqUnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzw6XCvsKMJyxcbiAgICBwYXN0IDogJyVzw6XCicKNJyxcbiAgICBzIDogJ8OmwpXCsMOnwqfCkicsXG4gICAgc3MgOiAnJWTDp8KnwpInLFxuICAgIG0gOiAnMcOlwojChicsXG4gICAgbW0gOiAnJWTDpcKIwoYnLFxuICAgIGggOiAnMcOmwpnCgsOpwpbCkycsXG4gICAgaGggOiAnJWTDpsKZwoLDqcKWwpMnLFxuICAgIGQgOiAnMcOmwpfCpScsXG4gICAgZGQgOiAnJWTDpsKXwqUnLFxuICAgIE0gOiAnMcOjwoPCtsOmwpzCiCcsXG4gICAgTU0gOiAnJWTDo8KDwrbDpsKcwognLFxuICAgIHkgOiAnMcOlwrnCtCcsXG4gICAgeXkgOiAnJWTDpcK5wrQnXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogS29yZWFuIFtrb11cbi8vISBhdXRob3IgOiBLeXVuZ3dvb2ssIFBhcmsgOiBodHRwczovL2dpdGh1Yi5jb20va3l1bmd3MDBrXG4vLyEgYXV0aG9yIDogSmVlZXl1bCBMZWUgPGplZWV5dWxAZ21haWwuY29tPlxuXG5leHBvcnQgY29uc3Qga29Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdrbycsXG4gIG1vbnRocyA6ICcxw6zCm8KUXzLDrMKbwpRfM8OswpvClF80w6zCm8KUXzXDrMKbwpRfNsOswpvClF83w6zCm8KUXzjDrMKbwpRfOcOswpvClF8xMMOswpvClF8xMcOswpvClF8xMsOswpvClCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnMcOswpvClF8yw6zCm8KUXzPDrMKbwpRfNMOswpvClF81w6zCm8KUXzbDrMKbwpRfN8OswpvClF84w6zCm8KUXznDrMKbwpRfMTDDrMKbwpRfMTHDrMKbwpRfMTLDrMKbwpQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ8Oswp3CvMOswprClMOswp3CvF/DrMKbwpTDrMKawpTDrMKdwrxfw63CmcKUw6zCmsKUw6zCncK8X8OswojCmMOswprClMOswp3CvF/Dq8KqwqnDrMKawpTDrMKdwrxfw6rCuMKIw6zCmsKUw6zCncK8X8OtwobCoMOswprClMOswp3CvCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICfDrMKdwrxfw6zCm8KUX8OtwpnClF/DrMKIwphfw6vCqsKpX8OqwrjCiF/DrcKGwqAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ8Oswp3CvF/DrMKbwpRfw63CmcKUX8OswojCmF/Dq8Kqwqlfw6rCuMKIX8OtwobCoCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnQSBoOm1tJyxcbiAgICBMVFMgOiAnQSBoOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkuTU0uREQnLFxuICAgIExMIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8JyxcbiAgICBMTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgQSBoOm1tJyxcbiAgICBMTExMIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IGRkZGQgQSBoOm1tJyxcbiAgICBsIDogJ1lZWVkuTU0uREQnLFxuICAgIGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8JyxcbiAgICBsbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgQSBoOm1tJyxcbiAgICBsbGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IGRkZGQgQSBoOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ8OswpjCpMOrworCmCBMVCcsXG4gICAgbmV4dERheSA6ICfDq8KCwrTDrMKdwrwgTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgTFQnLFxuICAgIGxhc3REYXkgOiAnw6zClsK0w6zCoMKcIExUJyxcbiAgICBsYXN0V2VlayA6ICfDrMKnwoDDq8KCwpzDrMKjwrwgZGRkZCBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclcyDDrcKbwoQnLFxuICAgIHBhc3QgOiAnJXMgw6zCoMKEJyxcbiAgICBzIDogJ8OrwqrChyDDrMK0wognLFxuICAgIHNzIDogJyVkw6zCtMKIJyxcbiAgICBtIDogJzHDq8K2woQnLFxuICAgIG1tIDogJyVkw6vCtsKEJyxcbiAgICBoIDogJ8OtwpXCnCDDrMKLwpzDqsKwwoQnLFxuICAgIGhoIDogJyVkw6zCi8Kcw6rCsMKEJyxcbiAgICBkIDogJ8OtwpXCmMOrwqPCqCcsXG4gICAgZGQgOiAnJWTDrMKdwrwnLFxuICAgIE0gOiAnw63ClcKcIMOrwovCrCcsXG4gICAgTU0gOiAnJWTDq8KLwqwnLFxuICAgIHkgOiAnw6zCncK8IMOrwoXChCcsXG4gICAgeXkgOiAnJWTDq8KFwoQnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn0ow6zCncK8fMOswpvClHzDrMKjwrwpLyxcbiAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKdwrwnO1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCm8KUJztcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCo8K8JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW1QYXJzZSA6IC/DrMKYwqTDrMKgwoR8w6zCmMKkw63Cm8KELyxcbiAgaXNQTSA6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ8OswpjCpMOtwpvChCc7XG4gIH0sXG4gIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNVcHBlcikge1xuICAgIHJldHVybiBob3VyIDwgMTIgPyAnw6zCmMKkw6zCoMKEJyA6ICfDrMKYwqTDrcKbwoQnO1xuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMaXRodWFuaWFuIFtsdF1cbi8vISBhdXRob3IgOiBTdGFuaXNsYXZhcyBHdWsgOiBodHRwczovL2dpdGh1Yi5jb20vaXhvc3RlclxuXG5jb25zdCB1bml0cyA9IHtcbiAgc3MgOiAnc2VrdW5kw4TCl19zZWt1bmTDhcK+acOFwrNfc2VrdW5kZXMnLFxuICBtIDogJ21pbnV0w4TCl19taW51dMOEwpdzX21pbnV0w4TCmScsXG4gIG1tOiAnbWludXTDhMKXc19taW51w4TCjWnDhcKzX21pbnV0ZXMnLFxuICBoIDogJ3ZhbGFuZGFfdmFsYW5kb3NfdmFsYW5kw4TChScsXG4gIGhoOiAndmFsYW5kb3NfdmFsYW5kw4XCs192YWxhbmRhcycsXG4gIGQgOiAnZGllbmFfZGllbm9zX2RpZW7DhMKFJyxcbiAgZGQ6ICdkaWVub3NfZGllbsOFwrNfZGllbmFzJyxcbiAgTSA6ICdtw4TCl251b19tw4TCl25lc2lvX23DhMKXbmVzw4TCrycsXG4gIE1NOiAnbcOEwpduZXNpYWlfbcOEwpduZXNpw4XCs19tw4TCl25lc2l1cycsXG4gIHkgOiAnbWV0YWlfbWV0w4XCs19tZXR1cycsXG4gIHl5OiAnbWV0YWlfbWV0w4XCs19tZXR1cydcbn07XG5mdW5jdGlvbiB0cmFuc2xhdGVTZWNvbmRzKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgIHJldHVybiAna2VsaW9zIHNla3VuZMOEwpdzJztcbiAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpw4XCsyBzZWt1bmTDhcK+acOFwrMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpbmd1bGFyKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtcyhrZXkpWzBdIDogKGlzRnV0dXJlID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xufVxuZnVuY3Rpb24gc3BlY2lhbChudW06IG51bWJlcikge1xuICByZXR1cm4gbnVtICUgMTAgPT09IDAgfHwgKG51bSA+IDEwICYmIG51bSA8IDIwKTtcbn1cbmZ1bmN0aW9uIGZvcm1zKGtleTogc3RyaW5nKSB7XG4gIHJldHVybiB1bml0c1trZXldLnNwbGl0KCdfJyk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBsZXQgcmVzdWx0ID0gbnVtICsgJyAnO1xuICBpZiAobnVtID09PSAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtLCB3aXRob3V0U3VmZml4LCBrZXlbMF0sIGlzRnV0dXJlKTtcbiAgfSBlbHNlIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzBdKTtcbiAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0Z1dHVyZSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQgKyBmb3JtcyhrZXkpWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbHRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdsdCcsXG4gIG1vbnRocyA6IHtcbiAgICBmb3JtYXQ6ICdzYXVzaW9fdmFzYXJpb19rb3ZvX2JhbGFuZMOFwr5pb19nZWd1w4XCvsOEwpdzX2JpcsOFwr5lbGlvX2xpZXBvc19ydWdwasOFwqvDhMKNaW9fcnVnc8OEwpdqb19zcGFsaW9fbGFwa3Jpw4TCjWlvX2dydW9kw4XCvmlvJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICdzYXVzaXNfdmFzYXJpc19rb3Zhc19iYWxhbmRpc19nZWd1w4XCvsOEwpdfYmlyw4XCvmVsaXNfbGllcGFfcnVncGrDhcKrdGlzX3J1Z3PDhMKXamlzX3NwYWxpc19sYXBrcml0aXNfZ3J1b2Rpcycuc3BsaXQoJ18nKSxcbiAgICBpc0Zvcm1hdDogL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT98TU1NTT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK0Rbb0RdPy9cbiAgfSxcbiAgbW9udGhzU2hvcnQgOiAnc2F1X3Zhc19rb3ZfYmFsX2dlZ19iaXJfbGllX3JncF9yZ3Nfc3BhX2xhcF9ncmQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDoge1xuICAgICAgZm9ybWF0OiAnc2VrbWFkaWVuw4TCr19waXJtYWRpZW7DhMKvX2FudHJhZGllbsOEwq9fdHJlw4TCjWlhZGllbsOEwq9fa2V0dmlydGFkaWVuw4TCr19wZW5rdGFkaWVuw4TCr1/DhcKhZcOFwqF0YWRpZW7DhMKvJy5zcGxpdCgnXycpLFxuICAgICAgc3RhbmRhbG9uZTogJ3Nla21hZGllbmlzX3Bpcm1hZGllbmlzX2FudHJhZGllbmlzX3RyZcOEwo1pYWRpZW5pc19rZXR2aXJ0YWRpZW5pc19wZW5rdGFkaWVuaXNfw4XCoWXDhcKhdGFkaWVuaXMnLnNwbGl0KCdfJyksXG4gICAgICBpc0Zvcm1hdDogL2RkZGQgSEg6bW0vXG4gIH0sXG4gIHdlZWtkYXlzU2hvcnQgOiAnU2VrX1Bpcl9BbnRfVHJlX0tldF9QZW5fw4XCoGXDhcKhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTX1BfQV9UX0tfUG5fw4XCoCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICBMVCA6ICdISDptbScsXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgTCA6ICdZWVlZLU1NLUREJyxcbiAgICAgIExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICBMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxuICAgICAgTExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZGQsIEhIOm1tIFt2YWwuXScsXG4gICAgICBsIDogJ1lZWVktTU0tREQnLFxuICAgICAgbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgIGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICBsbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkLCBISDptbSBbdmFsLl0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgICAgc2FtZURheSA6ICdbw4XCoGlhbmRpZW5dIExUJyxcbiAgICAgIG5leHREYXkgOiAnW1J5dG9qXSBMVCcsXG4gICAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcbiAgICAgIGxhc3REYXkgOiAnW1Zha2FyXSBMVCcsXG4gICAgICBsYXN0V2VlayA6ICdbUHJhw4TCl2p1c8OEwq9dIGRkZGQgTFQnLFxuICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgZnV0dXJlIDogJ3BvICVzJyxcbiAgICAgIHBhc3QgOiAncHJpZcOFwqEgJXMnLFxuICAgICAgcyA6IHRyYW5zbGF0ZVNlY29uZHMsXG4gICAgICBzcyA6IHRyYW5zbGF0ZSxcbiAgICAgIG0gOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgaCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgaGggOiB0cmFuc2xhdGUsXG4gICAgICBkIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBkZCA6IHRyYW5zbGF0ZSxcbiAgICAgIE0gOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIE1NIDogdHJhbnNsYXRlLFxuICAgICAgeSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgeXkgOiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LW9qaS8sXG4gIG9yZGluYWwobnVtKSB7XG4gICAgICByZXR1cm4gbnVtICsgJy1vamknO1xuICB9LFxuICB3ZWVrIDoge1xuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTW9uZ29saWFuIFttbl1cbi8vISBhdXRob3IgOiBKYXZraGxhbnR1Z3MgTnlhbWRvcmogOiBodHRwczovL2dpdGh1Yi5jb20vamF2a2hhYW5qN1xuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9JztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9Jyk7XG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnIMOQwrzDkMK4w5DCvcORwoPDkcKCw5HCi8OQwr0nKTtcbiAgICBjYXNlICdoJzpcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwobDkMKww5DCsycgOiAnIMORwobDkMKww5DCs8OQwrjDkMK5w5DCvScpO1xuICAgIGNhc2UgJ2QnOlxuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5PCqcOQwrTDk8Kpw5HCgCcgOiAnIMOTwqnDkMK0w5HCgMOQwrjDkMK5w5DCvScpO1xuICAgIGNhc2UgJ00nOlxuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5HCgcOQwrDDkcKAJyA6ICcgw5HCgcOQwrDDkcKAw5HCi8OQwr0nKTtcbiAgICBjYXNlICd5JzpcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOQwrbDkMK4w5DCuycgOiAnIMOQwrbDkMK4w5DCu8OQwrjDkMK5w5DCvScpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbW5Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdtbicsXG4gIG1vbnRoczogJ8OQwp3DkcKNw5DCs8OQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCpcOQwr7DkcKRw5HCgMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCk8ORwoPDkcKAw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpTDk8Kpw5HCgMOTwqnDkMKyw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKiw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpfDkcKDw5HCgMOQwrPDkMKww5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKUw5DCvsOQwrvDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwp3DkMKww5DCucOQwrzDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpXDkcKBw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrLDkMKww5DCvSDDkMK9w5HCjcOQwrPDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCssOQwrDDkMK9IMORwoXDkMK+w5HCkcORwoDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJzEgw5HCgcOQwrDDkcKAXzIgw5HCgcOQwrDDkcKAXzMgw5HCgcOQwrDDkcKAXzQgw5HCgcOQwrDDkcKAXzUgw5HCgcOQwrDDkcKAXzYgw5HCgcOQwrDDkcKAXzcgw5HCgcOQwrDDkcKAXzggw5HCgcOQwrDDkcKAXzkgw5HCgcOQwrDDkcKAXzEwIMORwoHDkMKww5HCgF8xMSDDkcKBw5DCsMORwoBfMTIgw5HCgcOQwrDDkcKAJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ8OQwp3DkcKPw5DCvF/DkMKUw5DCsMOQwrLDkMKww5DCsF/DkMKcw5HCj8OQwrPDkMK8w5DCsMORwoBfw5DCm8ORwoXDkMKww5DCs8OQwrLDkMKwX8OQwp/DksKvw5HCgMORwo3DkMKyX8OQwpHDkMKww5DCsMORwoHDkMKww5DCvV/DkMKRw5HCj8OQwrzDkMKxw5DCsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OQwp3DkcKPw5DCvF/DkMKUw5DCsMOQwrJfw5DCnMORwo/DkMKzX8OQwpvDkcKFw5DCsF/DkMKfw5LCr8ORwoBfw5DCkcOQwrDDkMKwX8OQwpHDkcKPw5DCvCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDkMKdw5HCj1/DkMKUw5DCsF/DkMKcw5HCj1/DkMKbw5HChV/DkMKfw5LCr1/DkMKRw5DCsF/DkMKRw5HCjycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCcsXG4gICAgTExMOiAnWVlZWSDDkMK+w5DCvcORwosgTU1NTcORwovDkMK9IEQgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OSwq7Dk8KofMOSwq7DkMKlL2ksXG4gIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ8OSwq7DkMKlJztcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8OSwq7Dk8KoJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDksKuw5DCpSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5PCqMOQwr3Dk8Kpw5PCqcOQwrTDk8Kpw5HCgF0gTFQnLFxuICAgIG5leHREYXk6ICdbw5DCnMOQwrDDkcKAw5DCs8OQwrDDkMKww5HCiF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW8OQwpjDkcKAw5HCjcORwoVdIGRkZGQgTFQnLFxuICAgIGxhc3REYXk6ICdbw5PCqMORwofDkMK4w5DCs8OQwrTDk8Kpw5HCgF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OTwqjDkMK9w5DCs8OTwqnDkcKAw5HCgcOTwqnDkMK9XSBkZGRkIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIMOQwrTDkMKww5HCgMOQwrDDkMKwJyxcbiAgICBwYXN0OiAnJXMgw5PCqcOQwrzDkMK9w5PCqScsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9IMOTwqnDkMK0w5PCqcORwoAvLFxuICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnIMOTwqnDkMK0w5PCqcORwoAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXRcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE5vcndlZ2lhbiBCb2ttw4PCpWwgW25iXVxuLy8hIGF1dGhvcnMgOiBFc3BlbiBIb3ZsYW5kc2RhbCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZXh4YXJzXG4vLyEgICAgICAgICAgIFNpZ3VyZCBHYXJ0bWFubiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaWd1cmRnYVxuXG5leHBvcnQgY29uc3QgbmJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICduYicsXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcnNfYXByaWxfbWFpX2p1bmlfanVsaV9hdWd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVzZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hcnNfYXByaWxfbWFpX2p1bmlfanVsaV9hdWcuX3NlcC5fb2t0Ll9ub3YuX2Rlcy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnc8ODwrhuZGFnX21hbmRhZ190aXJzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw4PCuHJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdzw4PCuC5fbWEuX3RpLl9vbi5fdG8uX2ZyLl9sw4PCuC4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc8ODwrhfbWFfdGlfb25fdG9fZnJfbMODwrgnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2kgZGFnIGtsLl0gTFQnLFxuICAgIG5leHREYXk6ICdbaSBtb3JnZW4ga2wuXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtrbC5dIExUJyxcbiAgICBsYXN0RGF5OiAnW2kgZ8ODwqVyIGtsLl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2ZvcnJpZ2VdIGRkZGQgW2tsLl0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb20gJXMnLFxuICAgIHBhc3Q6ICclcyBzaWRlbicsXG4gICAgczogJ25vZW4gc2VrdW5kZXInLFxuICAgIHNzOiAnJWQgc2VrdW5kZXInLFxuICAgIG06ICdldHQgbWludXR0JyxcbiAgICBtbTogJyVkIG1pbnV0dGVyJyxcbiAgICBoOiAnZW4gdGltZScsXG4gICAgaGg6ICclZCB0aW1lcicsXG4gICAgZDogJ2VuIGRhZycsXG4gICAgZGQ6ICclZCBkYWdlcicsXG4gICAgTTogJ2VuIG3Dg8KlbmVkJyxcbiAgICBNTTogJyVkIG3Dg8KlbmVkZXInLFxuICAgIHk6ICdldHQgw4PCpXInLFxuICAgIHl5OiAnJWQgw4PCpXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEdXRjaCAoQmVsZ2l1bSkgW25sLWJlXVxuLy8hIGF1dGhvciA6IEpvcmlzIFLDg8K2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXG5cbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sQmVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdubC1iZScsXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcblxuICB3ZWVrZGF5czogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICd6by5fbWEuX2RpLl93by5fZG8uX3ZyLl96YS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb3ZlciAlcycsXG4gICAgcGFzdDogJyVzIGdlbGVkZW4nLFxuICAgIHM6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3M6ICclZCBzZWNvbmRlbicsXG4gICAgbTogJ8ODwqnDg8KpbiBtaW51dXQnLFxuICAgIG1tOiAnJWQgbWludXRlbicsXG4gICAgaDogJ8ODwqnDg8KpbiB1dXInLFxuICAgIGhoOiAnJWQgdXVyJyxcbiAgICBkOiAnw4PCqcODwqluIGRhZycsXG4gICAgZGQ6ICclZCBkYWdlbicsXG4gICAgTTogJ8ODwqnDg8KpbiBtYWFuZCcsXG4gICAgTU06ICclZCBtYWFuZGVuJyxcbiAgICB5OiAnw4PCqcODwqluIGphYXInLFxuICAgIHl5OiAnJWQgamFhcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHJldHVybiBudW0gKyAoKG51bSA9PT0gMSB8fCBudW0gPT09IDggfHwgbnVtID49IDIwKSA/ICdzdGUnIDogJ2RlJyk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEdXRjaCBbbmxdXG4vLyEgYXV0aG9yIDogSm9yaXMgUsODwrZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXG4vLyEgYXV0aG9yIDogSmFjb2IgTWlkZGFnIDogaHR0cHM6Ly9naXRodWIuY29tL21pZGRhZ2pcblxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbmwnLFxuICBtb250aHMgOiAnamFudWFyaV9mZWJydWFyaV9tYWFydF9hcHJpbF9tZWlfanVuaV9qdWxpX2F1Z3VzdHVzX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCAoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxuXG4gIHdlZWtkYXlzIDogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC1NTS1ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXk6ICdbdmFuZGFhZyBvbV0gTFQnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtvbV0gTFQnLFxuICAgIGxhc3REYXk6ICdbZ2lzdGVyZW4gb21dIExUJyxcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ292ZXIgJXMnLFxuICAgIHBhc3QgOiAnJXMgZ2VsZWRlbicsXG4gICAgcyA6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3MgOiAnJWQgc2Vjb25kZW4nLFxuICAgIG0gOiAnw4PCqcODwqluIG1pbnV1dCcsXG4gICAgbW0gOiAnJWQgbWludXRlbicsXG4gICAgaCA6ICfDg8Kpw4PCqW4gdXVyJyxcbiAgICBoaCA6ICclZCB1dXInLFxuICAgIGQgOiAnw4PCqcODwqluIGRhZycsXG4gICAgZGQgOiAnJWQgZGFnZW4nLFxuICAgIE0gOiAnw4PCqcODwqluIG1hYW5kJyxcbiAgICBNTSA6ICclZCBtYWFuZGVuJyxcbiAgICB5IDogJ8ODwqnDg8KpbiBqYWFyJyxcbiAgICB5eSA6ICclZCBqYWFyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3RlfGRlKS8sXG4gIG9yZGluYWwgKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHJldHVybiBudW0gKyAoKG51bSA9PT0gMSB8fCBudW0gPT09IDggfHwgbnVtID49IDIwKSA/ICdzdGUnIDogJ2RlJyk7XG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBQb2xpc2ggW3BsXVxuLy8hIGF1dGhvciA6IFJhZmFsIEhpcnN6IDogaHR0cHM6Ly9naXRodWIuY29tL2V2b0xcblxubGV0IG1vbnRoc05vbWluYXRpdmUgPSAnc3R5Y3plw4XChF9sdXR5X21hcnplY19rd2llY2llw4XChF9tYWpfY3plcndpZWNfbGlwaWVjX3NpZXJwaWXDhcKEX3dyemVzaWXDhcKEX3Bhw4XCumR6aWVybmlrX2xpc3RvcGFkX2dydWR6aWXDhcKEJy5zcGxpdCgnXycpO1xubGV0IG1vbnRoc1N1YmplY3RpdmUgPSAnc3R5Y3puaWFfbHV0ZWdvX21hcmNhX2t3aWV0bmlhX21hamFfY3plcndjYV9saXBjYV9zaWVycG5pYV93cnplw4XCm25pYV9wYcOFwrpkemllcm5pa2FfbGlzdG9wYWRhX2dydWRuaWEnLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSAlIDEwIDwgNSkgJiYgKG51bSAlIDEwID4gMSkgJiYgKCh+fihudW0gLyAxMCkgJSAxMCkgIT09IDEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dMOEwpknO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZ29kemluYScgOiAnZ29kemluw4TCmSc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdnb2R6aW55JyA6ICdnb2R6aW4nKTtcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pZXNpw4TChWNlJyA6ICdtaWVzacOEwpljeScpO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbGF0YScgOiAnbGF0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncGwnLFxuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNOb21pbmF0aXZlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnJykge1xuICAgICAgLy8gSGFjazogaWYgZm9ybWF0IGVtcHR5IHdlIGtub3cgdGhpcyBpcyB1c2VkIHRvIGdlbmVyYXRlXG4gICAgICAvLyBSZWdFeHAgYnkgbW9tZW50LiBHaXZlIHRoZW4gYmFjayBib3RoIHZhbGlkIGZvcm1zIG9mIG1vbnRoc1xuICAgICAgLy8gaW4gUmVnRXhwIHJlYWR5IGZvcm1hdC5cbiAgICAgIHJldHVybiAnKCcgKyBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnfCcgKyBtb250aHNOb21pbmF0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnKSc7XG4gICAgfSBlbHNlIGlmICgvRCBNTU1NLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNOb21pbmF0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuICBtb250aHNTaG9ydDogJ3N0eV9sdXRfbWFyX2t3aV9tYWpfY3plX2xpcF9zaWVfd3J6X3Bhw4XCul9saXNfZ3J1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ25pZWR6aWVsYV9wb25pZWR6aWHDhcKCZWtfd3RvcmVrX8OFwptyb2RhX2N6d2FydGVrX3Bpw4TChXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZHpfcG9uX3d0X8OFwptyX2N6d19wdF9zb2InLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnTmRfUG5fV3Rfw4XCmnJfQ3pfUHRfU28nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbRHppw4XCmyBvXSBMVCcsXG4gICAgbmV4dERheTogJ1tKdXRybyBvXSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbVyBuaWVkemllbMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1tXZSB3dG9yZWsgb10gTFQnO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1tXIMOFwptyb2TDhMKZIG9dIExUJztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyBzb2JvdMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbV10gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1tXY3pvcmFqIG9dIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBuaWVkemllbMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgw4XCm3JvZMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgc29ib3TDhMKZIG9dIExUJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCeV0gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJyVzIHRlbXUnLFxuICAgIHM6ICdraWxrYSBzZWt1bmQnLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogJzEgZHppZcOFwoQnLFxuICAgIGRkOiAnJWQgZG5pJyxcbiAgICBNOiAnbWllc2nDhMKFYycsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiAncm9rJyxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUG9ydHVndWVzZSAoQnJhemlsKSBbcHQtYnJdXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcblxuZXhwb3J0IGNvbnN0IHB0QnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdwdC1icicsXG4gIG1vbnRoczogJ0phbmVpcm9fRmV2ZXJlaXJvX01hcsODwqdvX0FicmlsX01haW9fSnVuaG9fSnVsaG9fQWdvc3RvX1NldGVtYnJvX091dHVicm9fTm92ZW1icm9fRGV6ZW1icm8nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnSmFuX0Zldl9NYXJfQWJyX01haV9KdW5fSnVsX0Fnb19TZXRfT3V0X05vdl9EZXonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnRG9taW5nb19TZWd1bmRhLWZlaXJhX1RlcsODwqdhLWZlaXJhX1F1YXJ0YS1mZWlyYV9RdWludGEtZmVpcmFfU2V4dGEtZmVpcmFfU8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnRG9tX1NlZ19UZXJfUXVhX1F1aV9TZXhfU8ODwqFiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ0RvXzLDgsKqXzPDgsKqXzTDgsKqXzXDgsKqXzbDgsKqX1PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDg8Kgc10gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8ODwqBzXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0hvamUgw4PCoHNdIExUJyxcbiAgICBuZXh0RGF5OiAnW0FtYW5ow4PCoyDDg8Kgc10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoHNdIExUJyxcbiAgICBsYXN0RGF5OiAnW09udGVtIMODwqBzXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDAgfHwgZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSA2KSA/XG4gICAgICAgICdbw4PCmmx0aW1vXSBkZGRkIFvDg8Kgc10gTFQnIDogLy8gU2F0dXJkYXkgKyBTdW5kYXlcbiAgICAgICAgJ1vDg8KabHRpbWFdIGRkZGQgW8ODwqBzXSBMVCc7IC8vIE1vbmRheSAtIEZyaWRheVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbSAlcycsXG4gICAgcGFzdDogJyVzIGF0csODwqFzJyxcbiAgICBzOiAncG91Y29zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW0gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bWEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VtIGRpYScsXG4gICAgZGQ6ICclZCBkaWFzJyxcbiAgICBNOiAndW0gbcODwqpzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW0gYW5vJyxcbiAgICB5eTogJyVkIGFub3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6J1xufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8gISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vICEgbG9jYWxlIDogUm9tYW5pYW4gW3JvXVxuLy8hIGF1dGhvciA6IFZsYWQgR3VyZGlnYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ndXJkaWdhXG4vLyEgYXV0aG9yIDogVmFsZW50aW4gQWdhY2hpIDogaHR0cHM6Ly9naXRodWIuY29tL2F2YWx5XG4vLyAhIGF1dGhvciA6IEVhcmxlIHdoaXRlOiBodHRwczovL2dpdGh1Yi5jb20vNWVhcmxlXG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdDoge1trZXk6c3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICBzczogJ3NlY3VuZGUnLFxuICAgIG1tOiAnbWludXRlJyxcbiAgICBoaDogJ29yZScsXG4gICAgZGQ6ICd6aWxlJyxcbiAgICBNTTogJ2x1bmknLFxuICAgIHl5OiAnYW5pJ1xuICB9O1xuXG4gIGxldCBzZXBhcmF0b3IgPSAnICc7XG4gIGlmIChudW0gJSAxMDAgPj0gMjAgfHwgKG51bSA+PSAxMDAgJiYgbnVtICUgMTAwID09PSAwKSkge1xuICAgIHNlcGFyYXRvciA9ICcgZGUgJztcbiAgfVxuICByZXR1cm4gbnVtICsgc2VwYXJhdG9yICsgZm9ybWF0W2tleV07XG59XG5cblxuZXhwb3J0IGNvbnN0IHJvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncm8nLFxuICBtb250aHM6ICdpYW51YXJpZV9mZWJydWFyaWVfbWFydGllX2FwcmlsaWVfbWFpX2l1bmllX2l1bGllX2F1Z3VzdF9zZXB0ZW1icmllX29jdG9tYnJpZV9ub2llbWJyaWVfZGVjZW1icmllJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2lhbi5fZmVici5fbWFydC5fYXByLl9tYWlfaXVuLl9pdWwuX2F1Zy5fc2VwdC5fb2N0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZHVtaW5pY8OEwoNfbHVuaV9tYXLDiMKbaV9taWVyY3VyaV9qb2lfdmluZXJpX3PDg8KibWLDhMKDdMOEwoMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdEdW1fTHVuX01hcl9NaWVfSm9pX1Zpbl9Tw4PCom0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnRHVfTHVfTWFfTWlfSm9fVmlfU8ODwqInLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1themkgbGFdIExUJyxcbiAgICBuZXh0RGF5OiAnW23Dg8KiaW5lIGxhXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtsYV0gTFQnLFxuICAgIGxhc3REYXk6ICdbaWVyaSBsYV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2Zvc3RhXSBkZGRkIFtsYV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAncGVzdGUgJXMnLFxuICAgIHBhc3Q6ICclcyDDg8KubiB1cm3DhMKDJyxcbiAgICBzOiAnY8ODwqJ0ZXZhIHNlY3VuZGUnLFxuICAgIHNzOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG06ICd1biBtaW51dCcsXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgaDogJ28gb3LDhMKDJyxcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBkOiAnbyB6aScsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ28gbHVuw4TCgycsXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgeTogJ3VuIGFuJyxcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUnVzc2lhbiBbcnVdXG4vLyEgYXV0aG9yIDogVmlrdG9ybWluYXRvciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9WaWt0b3JtaW5hdG9yXG4vLyEgQXV0aG9yIDogTWVuZWxpb24gRWxlbnPDg8K6bGUgOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuLy8hIGF1dGhvciA6IMOQwprDkMK+w5HCgMOQwrXDkMK9w5DCscOQwrXDkcKAw5DCsyDDkMKcw5DCsMORwoDDkMK6IDogaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldHBhaXJcblxuZnVuY3Rpb24gcGx1cmFsKHdvcmQ6IHN0cmluZywgbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgZm9ybXMgPSB3b3JkLnNwbGl0KCdfJyk7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiAobnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApID8gZm9ybXNbMV0gOiBmb3Jtc1syXSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgc3M6IHdpdGhvdXRTdWZmaXggPyAnw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5DCsF/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCg1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcsXG4gICAgbW06IHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKDX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicsXG4gICAgaGg6ICfDkcKHw5DCsMORwoFfw5HCh8OQwrDDkcKBw5DCsF/DkcKHw5DCsMORwoHDkMK+w5DCsicsXG4gICAgZGQ6ICfDkMK0w5DCtcOQwr3DkcKMX8OQwrTDkMK9w5HCj1/DkMK0w5DCvcOQwrXDkMK5JyxcbiAgICBNTTogJ8OQwrzDkMK1w5HCgcORwo/DkcKGX8OQwrzDkMK1w5HCgcORwo/DkcKGw5DCsF/DkMK8w5DCtcORwoHDkcKPw5HChsOQwrXDkMKyJyxcbiAgICB5eTogJ8OQwrPDkMK+w5DCtF/DkMKzw5DCvsOQwrTDkMKwX8OQwrvDkMK1w5HCgidcbiAgfTtcbiAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwJyA6ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsORwoMnO1xuICB9XG4gIHJldHVybiBudW0gKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW0pO1xufVxuXG5sZXQgbW9udGhzUGFyc2UgPSBbL17DkcKPw5DCvcOQwrIvaSwgL17DkcKEw5DCtcOQwrIvaSwgL17DkMK8w5DCsMORwoAvaSwgL17DkMKww5DCv8ORwoAvaSwgL17DkMK8w5DCsFvDkMK5w5HCj10vaSwgL17DkMK4w5HCjsOQwr0vaSwgL17DkMK4w5HCjsOQwrsvaSwgL17DkMKww5DCssOQwrMvaSwgL17DkcKBw5DCtcOQwr0vaSwgL17DkMK+w5DCusORwoIvaSwgL17DkMK9w5DCvsORwo8vaSwgL17DkMK0w5DCtcOQwrovaV07XG5cbi8vIGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL3J1bGVzLzEzOS1wcm9wIDogw4LCpyAxMDNcbi8vIMOQwqHDkMK+w5DCusORwoDDkMKww5HCicOQwrXDkMK9w5DCuMORwo8gw5DCvMOQwrXDkcKBw5HCj8ORwobDkMK1w5DCsjogaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvYnVyby9zZWFyY2gtYW5zd2VyP3M9MjQyNjM3XG4vLyBDTERSIGRhdGE6ICAgICAgICAgIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMjgvc3VtbWFyeS9ydS5odG1sIzE3NTNcbmV4cG9ydCBjb25zdCBydUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3J1JyxcbiAgbW9udGhzOiB7XG4gICAgZm9ybWF0OiAnw5HCj8OQwr3DkMKyw5DCsMORwoDDkcKPX8ORwoTDkMK1w5DCssORwoDDkMKww5DCu8ORwo9fw5DCvMOQwrDDkcKAw5HCgsOQwrBfw5DCsMOQwr/DkcKAw5DCtcOQwrvDkcKPX8OQwrzDkMKww5HCj1/DkMK4w5HCjsOQwr3DkcKPX8OQwrjDkcKOw5DCu8ORwo9fw5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsF/DkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAw5HCj1/DkMK+w5DCusORwoLDkcKPw5DCscORwoDDkcKPX8OQwr3DkMK+w5HCj8OQwrHDkcKAw5HCj1/DkMK0w5DCtcOQwrrDkMKww5DCscORwoDDkcKPJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICfDkcKPw5DCvcOQwrLDkMKww5HCgMORwoxfw5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7w5HCjF/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgMOQwrXDkMK7w5HCjF/DkMK8w5DCsMOQwrlfw5DCuMORwo7DkMK9w5HCjF/DkMK4w5HCjsOQwrvDkcKMX8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgl/DkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAw5HCjF/DkMK+w5DCusORwoLDkcKPw5DCscORwoDDkcKMX8OQwr3DkMK+w5HCj8OQwrHDkcKAw5HCjF/DkMK0w5DCtcOQwrrDkMKww5DCscORwoDDkcKMJy5zcGxpdCgnXycpXG4gIH0sXG4gIG1vbnRoc1Nob3J0OiB7XG4gICAgLy8gw5DCv8OQwr4gQ0xEUiDDkMK4w5DCvMOQwrXDkMK9w5DCvcOQwr4gXCLDkMK4w5HCjsOQwrsuXCIgw5DCuCBcIsOQwrjDkcKOw5DCvS5cIiwgw5DCvcOQwr4gw5DCusOQwrDDkMK6w5DCvsOQwrkgw5HCgcOQwrzDkcKLw5HCgcOQwrsgw5DCvMOQwrXDkMK9w5HCj8ORwoLDkcKMIMOQwrHDkcKDw5DCusOQwrLDkcKDIMOQwr3DkMKwIMORwoLDkMK+w5HCh8OQwrrDkcKDID9cbiAgICBmb3JtYXQ6ICfDkcKPw5DCvcOQwrIuX8ORwoTDkMK1w5DCssORwoAuX8OQwrzDkMKww5HCgC5fw5DCsMOQwr/DkcKALl/DkMK8w5DCsMORwo9fw5DCuMORwo7DkMK9w5HCj1/DkMK4w5HCjsOQwrvDkcKPX8OQwrDDkMKyw5DCsy5fw5HCgcOQwrXDkMK9w5HCgi5fw5DCvsOQwrrDkcKCLl/DkMK9w5DCvsORwo/DkMKxLl/DkMK0w5DCtcOQwrouJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICfDkcKPw5DCvcOQwrIuX8ORwoTDkMK1w5DCssORwoAuX8OQwrzDkMKww5HCgMORwoJfw5DCsMOQwr/DkcKALl/DkMK8w5DCsMOQwrlfw5DCuMORwo7DkMK9w5HCjF/DkMK4w5HCjsOQwrvDkcKMX8OQwrDDkMKyw5DCsy5fw5HCgcOQwrXDkMK9w5HCgi5fw5DCvsOQwrrDkcKCLl/DkMK9w5DCvsORwo/DkMKxLl/DkMK0w5DCtcOQwrouJy5zcGxpdCgnXycpXG4gIH0sXG4gIHdlZWtkYXlzOiB7XG4gICAgc3RhbmRhbG9uZTogJ8OQwrLDkMK+w5HCgcOQwrrDkcKAw5DCtcORwoHDkMK1w5DCvcORwozDkMK1X8OQwr/DkMK+w5DCvcOQwrXDkMK0w5DCtcOQwrvDkcKMw5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkMK1w5DCtMOQwrBfw5HCh8OQwrXDkcKCw5DCssOQwrXDkcKAw5DCs1/DkMK/w5HCj8ORwoLDkMK9w5DCuMORwobDkMKwX8ORwoHDkcKDw5DCscOQwrHDkMK+w5HCgsOQwrAnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0OiAnw5DCssOQwr7DkcKBw5DCusORwoDDkMK1w5HCgcOQwrXDkMK9w5HCjMOQwrVfw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8ORwozDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMOQwrXDkMK0w5HCg1/DkcKHw5DCtcORwoLDkMKyw5DCtcORwoDDkMKzX8OQwr/DkcKPw5HCgsOQwr3DkMK4w5HChsORwoNfw5HCgcORwoPDkMKxw5DCscOQwr7DkcKCw5HCgycuc3BsaXQoJ18nKSxcbiAgICBpc0Zvcm1hdDogL1xcWyA/W8OQwpLDkMKyXSA/KD86w5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjnzDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5HCg8ORwo58w5HCjcORwoLDkcKDKT8gP1xcXSA/ZGRkZC9cbiAgfSxcbiAgd2Vla2RheXNTaG9ydDogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG5cbiAgLy8gw5DCv8OQwr7DkMK7w5DCvcORwovDkMK1IMOQwr3DkMKww5DCt8OQwrLDkMKww5DCvcOQwrjDkcKPIMORwoEgw5DCv8OQwrDDkMK0w5DCtcOQwrbDkMKww5DCvMOQwrgsIMOQwr/DkMK+IMORwoLDkcKAw5DCuCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5DCtMOQwrvDkcKPIMOQwr3DkMK1w5DCusOQwr7DkcKCw5DCvsORwoDDkcKLw5HChSwgw5DCv8OQwr4gNCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5DCtcOQwr3DkMK4w5HCjyDDkcKBIMORwoLDkMK+w5HCh8OQwrrDkMK+w5DCuSDDkMK4IMOQwrHDkMK1w5DCtyDDkcKCw5DCvsORwofDkMK6w5DCuFxuICBtb250aHNSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCjMORwo9dfMORwo/DkMK9w5DCslxcLj98w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwozDkcKPXXzDkcKEw5DCtcOQwrLDkcKAP1xcLj98w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrzDkMKww5HCgFxcLj98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCjMORwo9dfMOQwrDDkMK/w5HCgFxcLj98w5DCvMOQwrBbw5DCucORwo9dfMOQwrjDkcKOw5DCvVvDkcKMw5HCj118w5DCuMORwo7DkMK9XFwuP3zDkMK4w5HCjsOQwrtbw5HCjMORwo9dfMOQwrjDkcKOw5DCu1xcLj98w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5DCsMOQwrLDkMKzXFwuP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkcKBw5DCtcOQwr3DkcKCP1xcLj98w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK+w5DCusORwoJcXC4/fMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK9w5DCvsORwo/DkMKxP1xcLj98w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwozDkcKPXXzDkMK0w5DCtcOQwrpcXC4/KS9pLFxuXG4gIC8vIMOQwrrDkMK+w5DCv8OQwrjDkcKPIMOQwr/DkcKAw5DCtcOQwrTDkcKLw5DCtMORwoPDkcKJw5DCtcOQwrPDkMK+XG4gIG1vbnRoc1Nob3J0UmVnZXg6IC9eKMORwo/DkMK9w5DCssOQwrDDkcKAW8ORwozDkcKPXXzDkcKPw5DCvcOQwrJcXC4/fMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKMw5HCj118w5HChMOQwrXDkMKyw5HCgD9cXC4/fMOQwrzDkMKww5HCgMORwoLDkMKwP3zDkMK8w5DCsMORwoBcXC4/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwozDkcKPXXzDkMKww5DCv8ORwoBcXC4/fMOQwrzDkMKwW8OQwrnDkcKPXXzDkMK4w5HCjsOQwr1bw5HCjMORwo9dfMOQwrjDkcKOw5DCvVxcLj98w5DCuMORwo7DkMK7W8ORwozDkcKPXXzDkMK4w5HCjsOQwrtcXC4/fMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMOQwrDDkMKyw5DCs1xcLj98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5HCgcOQwrXDkMK9w5HCgj9cXC4/fMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvsOQwrrDkcKCXFwuP3zDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvcOQwr7DkcKPw5DCsT9cXC4/fMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKMw5HCj118w5DCtMOQwrXDkMK6XFwuPykvaSxcblxuICAvLyDDkMK/w5DCvsOQwrvDkMK9w5HCi8OQwrUgw5DCvcOQwrDDkMK3w5DCssOQwrDDkMK9w5DCuMORwo8gw5HCgSDDkMK/w5DCsMOQwrTDkMK1w5DCtsOQwrDDkMK8w5DCuFxuICBtb250aHNTdHJpY3RSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCj8ORwoxdfMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKPw5HCjF18w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwo/DkcKMXXzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwo/DkcKMXXzDkMK4w5HCjsOQwrtbw5HCj8ORwoxdfMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKPw5HCjF0pL2ksXG5cbiAgLy8gw5DCksORwovDkcKAw5DCsMOQwrbDkMK1w5DCvcOQwrjDkMK1LCDDkMK6w5DCvsORwoLDkMK+w5HCgMOQwr7DkMK1IMORwoHDkMK+w5DCvsORwoLDkMKyw5DCtcORwoHDkcKCw5DCssORwoPDkMK1w5HCgiDDkcKCw5DCvsOQwrvDkcKMw5DCusOQwr4gw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5HCkcOQwr3DkMK9w5HCi8OQwrwgw5HChMOQwr7DkcKAw5DCvMOQwrDDkMK8XG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKMORwo/DkMK9w5DCslxcLnzDkcKEw5DCtcOQwrLDkcKAP1xcLnzDkMK8w5DCsMORwoBbw5HCgi5dfMOQwrDDkMK/w5HCgFxcLnzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwozDkcKPLl18w5DCuMORwo7DkMK7W8ORwozDkcKPLl18w5DCsMOQwrLDkMKzXFwufMORwoHDkMK1w5DCvcORwoI/XFwufMOQwr7DkMK6w5HCglxcLnzDkMK9w5DCvsORwo/DkMKxP1xcLnzDkMK0w5DCtcOQwrpcXC4pL2ksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWSDDkMKzLicsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgw5DCsy4sIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSDDkMKzLiwgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OQwqHDkMK1w5DCs8OQwr7DkMK0w5DCvcORwo8gw5DCsl0gTFQnLFxuICAgIG5leHREYXk6ICdbw5DCl8OQwrDDkMKyw5HCgsORwoDDkMKwIMOQwrJdIExUJyxcbiAgICBsYXN0RGF5OiAnW8OQwpLDkcKHw5DCtcORwoDDkMKwIMOQwrJdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkMK1w5DCtV0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5DCuMOQwrldIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5HCgcOQwrvDkMK1w5DCtMORwoPDkcKOw5HCicORwoPDkcKOXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSw5DCvl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnW8OQwpJdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSwgbm93OiBEYXRlKSB7XG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XG4gICAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8OQwr7DkMK1XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5HCi8OQwrldIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuICdbw5DCksOQwr5dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw5HCh8OQwrXDkcKAw5DCtcOQwrcgJXMnLFxuICAgIHBhc3Q6ICclcyDDkMK9w5DCsMOQwrfDkMKww5DCtCcsXG4gICAgczogJ8OQwr3DkMK1w5HCgcOQwrrDkMK+w5DCu8ORwozDkMK6w5DCviDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnLFxuICAgIHNzOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgaDogJ8ORwofDkMKww5HCgScsXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgZDogJ8OQwrTDkMK1w5DCvcORwownLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIE06ICfDkMK8w5DCtcORwoHDkcKPw5HChicsXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgeTogJ8OQwrPDkMK+w5DCtCcsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OQwr3DkMK+w5HCh8OQwrh8w5HCg8ORwoLDkcKAw5DCsHzDkMK0w5DCvcORwo98w5DCssOQwrXDkcKHw5DCtcORwoDDkMKwL2ksXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14ow5DCtMOQwr3DkcKPfMOQwrLDkMK1w5HCh8OQwrXDkcKAw5DCsCkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICByZXR1cm4gJ8OQwr3DkMK+w5HCh8OQwrgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8ORwoPDkcKCw5HCgMOQwrAnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICByZXR1cm4gJ8OQwrTDkMK9w5HCjyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw5DCssOQwrXDkcKHw5DCtcORwoDDkMKwJztcbiAgICB9XG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0ow5DCuXzDkMKzw5DCvnzDkcKPKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5DCuSc7XG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5DCs8OQwr4nO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5HCjyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTbG92YWsgW3NrXVxuLy8hIGF1dGhvciA6IEpvemVmIFBhw4XCvmluIDogaHR0cHM6Ly9naXRodWIuY29tL2F0aXJpc1xuXG5jb25zdCBtb250aHMgPSAnamFudcODwqFyX2ZlYnJ1w4PCoXJfbWFyZWNfYXByw4PCrWxfbcODwqFqX2rDg8K6bl9qw4PCumxfYXVndXN0X3NlcHRlbWJlcl9va3TDg8KzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpO1xuY29uc3QgbW9udGhzU2hvcnQgPSAnamFuX2ZlYl9tYXJfYXByX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzovLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDg8KhciBzZWvDg8K6bmQnIDogJ3DDg8KhciBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzovLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla8ODwrpuZCcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdtJzovLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW7Dg8K6dGEnIDogKGlzRnV0dXJlID8gJ21pbsODwrp0dScgOiAnbWluw4PCunRvdScpO1xuICAgIGNhc2UgJ21tJzovLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbsODwrp0eScgOiAnbWluw4PCunQnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbsODwrp0YW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdoJzovLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xuICAgIGNhc2UgJ2hoJzovLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kw4PCrW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdkJzovLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2Rlw4XCiCcgOiAnZMOFwohvbSc7XG4gICAgY2FzZSAnZGQnOi8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZG5pJyA6ICdkbsODwq0nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2TDhcKIYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdNJzovLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ21lc2lhYycgOiAnbWVzaWFjb20nO1xuICAgIGNhc2UgJ01NJzovLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21lc2lhY2UnIDogJ21lc2lhY292Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtZXNpYWNtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAneSc6Ly8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva29tJztcbiAgICBjYXNlICd5eSc6Ly8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdyb2tvdicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAncm9rbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBza0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3NrJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydCxcbiAgd2Vla2RheXM6ICduZWRlw4TCvmFfcG9uZGVsb2tfdXRvcm9rX3N0cmVkYV/DhcKhdHZydG9rX3BpYXRva19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBsOiAnRC4gTS4gWVlZWSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RuZXMgb10gTFQnLFxuICAgIG5leHREYXk6ICdbemFqdHJhIG9dIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZGXDhMK+dSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3Ygc3RyZWR1IG9dIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnW3ZvIMOFwqF0dnJ0b2sgb10gTFQnO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdiBwaWF0b2sgb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSBvXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IG5lZGXDhMK+dSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHN0cmVkdSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHNvYm90dSBvXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ28gJXMnLFxuICAgIHBhc3Q6ICdwcmVkICVzJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU2xvdmVuaWFuIFtzbF1cbi8vISBhdXRob3IgOiBtaWhhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWhhblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlcjogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbmVrYWogc2VrdW5kJyA6ICduZWthaiBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnc2VrdW5kbycgOiAnc2VrdW5kaSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRpJyA6ICdzZWt1bmRhaCc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kZScgOiAnc2VrdW5kYWgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kJyA6ICdzZWt1bmQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSBtaW51dGEnIDogJ2VubyBtaW51dG8nO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dG8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRpJyA6ICdtaW51dGFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRlJyA6ICdtaW51dGFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dCcgOiAnbWludXRhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSB1cmEnIDogJ2VubyB1cm8nO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAndXJhJyA6ICd1cm8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJpJyA6ICd1cmFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJlJyA6ICd1cmFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cicgOiAndXJhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIGRhbicgOiAnZW5pbSBkbmVtJztcbiAgICBjYXNlICdkZCc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RhbicgOiAnZG5lbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZvbWEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2aSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gbWVzZWMnIDogJ2VuaW0gbWVzZWNlbSc7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlYycgOiAnbWVzZWNlbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2EnIDogJ21lc2VjZW1hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2UnIDogJ21lc2VjaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2V2JyA6ICdtZXNlY2knO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VubyBsZXRvJyA6ICdlbmltIGxldG9tJztcbiAgICBjYXNlICd5eSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldG8nIDogJ2xldG9tJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGknIDogJ2xldG9tYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0YScgOiAnbGV0aSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXQnIDogJ2xldGknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzbCcsXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hci5fYXByLl9tYWouX2p1bi5fanVsLl9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnbmVkZWxqYV9wb25lZGVsamVrX3RvcmVrX3NyZWRhX8OEwo1ldHJ0ZWtfcGV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmVkLl9wb24uX3Rvci5fc3JlLl/DhMKNZXQuX3BldC5fc29iLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb190b19zcl/DhMKNZV9wZV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZGFuZXMgb2JdIExUJyxcbiAgICBuZXh0RGF5OiAnW2p1dHJpIG9iXSBMVCcsXG5cbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW25lZGVsam9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzb2JvdG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb2JdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmFqIG9iXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbbmVkZWxqb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbc29ib3RvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmppXSBkZGRkIFtvYl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDhMKNZXogJXMnLFxuICAgIHBhc3Q6ICdwcmVkICVzJyxcbiAgICBzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHNzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFN3ZWRpc2ggW3N2XVxuLy8hIGF1dGhvciA6IEplbnMgQWxtIDogaHR0cHM6Ly9naXRodWIuY29tL3VsbXVzXG5cbmV4cG9ydCBjb25zdCBzdkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3N2JyxcbiAgbW9udGhzOiAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdzw4PCtm5kYWdfbcODwqVuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMODwrZyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8ODwrZuX23Dg8Klbl90aXNfb25zX3Rvcl9mcmVfbMODwrZyJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3PDg8K2X23Dg8KlX3RpX29uX3RvX2ZyX2zDg8K2Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkIEQgTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tJZGFnXSBMVCcsXG4gICAgbmV4dERheTogJ1tJbW9yZ29uXSBMVCcsXG4gICAgbGFzdERheTogJ1tJZ8ODwqVyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbUMODwqVdIGRkZGQgTFQnLFxuICAgIGxhc3RXZWVrOiAnW0ldIGRkZGRbc10gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb20gJXMnLFxuICAgIHBhc3Q6ICdmw4PCtnIgJXMgc2VkYW4nLFxuICAgIHM6ICduw4PCpWdyYSBzZWt1bmRlcicsXG4gICAgc3M6ICclZCBzZWt1bmRlcicsXG4gICAgbTogJ2VuIG1pbnV0JyxcbiAgICBtbTogJyVkIG1pbnV0ZXInLFxuICAgIGg6ICdlbiB0aW1tZScsXG4gICAgaGg6ICclZCB0aW1tYXInLFxuICAgIGQ6ICdlbiBkYWcnLFxuICAgIGRkOiAnJWQgZGFnYXInLFxuICAgIE06ICdlbiBtw4PCpW5hZCcsXG4gICAgTU06ICclZCBtw4PCpW5hZGVyJyxcbiAgICB5OiAnZXR0IMODwqVyJyxcbiAgICB5eTogJyVkIMODwqVyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXxhKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgbGV0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ2UnIDpcbiAgICAgICAgKGIgPT09IDEpID8gJ2EnIDpcbiAgICAgICAgICAoYiA9PT0gMikgPyAnYScgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ2UnIDogJ2UnO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG4vLyBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIGxvY2FsZSA6IFRoYWkgW3RoXVxuLy8gYXV0aG9yIDogV2F0Y2hhcmFwb2wgU2FuaXR3b25nIDogaHR0cHM6Ly9naXRodWIuY29tL3R1bWl0XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IHRoTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndGgnLFxuICBtb250aHM6ICfDoMK4wqHDoMK4woHDoMK4wqPDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKBw6DCuMK4w6DCuMKhw6DCuMKgw6DCuMKyw6DCuMKew6DCuMKxw6DCuMKZw6DCuMKYw6DCucKMX8OgwrjCocOgwrjCtcOgwrjCmcOgwrjCssOgwrjChMOgwrjCoV/DoMK5woDDoMK4wqHDoMK4wqnDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKew6DCuMKkw6DCuMKpw6DCuMKgw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCocOgwrjCtMOgwrjClsOgwrjCuMOgwrjCmcOgwrjCssOgwrjCosOgwrjCmV/DoMK4woHDoMK4wqPDoMK4woHDoMK4wo7DoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKqw6DCuMK0w6DCuMKHw6DCuMKrw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCgcOgwrjCscOgwrjCmcOgwrjCosOgwrjCssOgwrjCosOgwrjCmV/DoMK4wpXDoMK4wrjDoMK4wqXDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKew6DCuMKkw6DCuMKow6DCuMKIw6DCuMK0w6DCuMKBw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCmMOgwrjCscOgwrjCmcOgwrjCp8OgwrjCssOgwrjChMOgwrjCoScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDoMK4wqEuw6DCuMKELl/DoMK4woEuw6DCuMKeLl/DoMK4wqHDoMK4wrUuw6DCuMKELl/DoMK5woDDoMK4wqEuw6DCuMKiLl/DoMK4wp4uw6DCuMKELl/DoMK4wqHDoMK4wrQuw6DCuMKiLl/DoMK4woEuw6DCuMKELl/DoMK4wqouw6DCuMKELl/DoMK4woEuw6DCuMKiLl/DoMK4wpUuw6DCuMKELl/DoMK4wp4uw6DCuMKiLl/DoMK4wpguw6DCuMKELicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfDoMK4wq3DoMK4wrLDoMK4wpfDoMK4wrTDoMK4wpXDoMK4wqLDoMK5woxfw6DCuMKIw6DCuMKxw6DCuMKZw6DCuMKXw6DCuMKjw6DCucKMX8OgwrjCrcOgwrjCscOgwrjCh8OgwrjChMOgwrjCssOgwrjCo1/DoMK4wp7DoMK4wrjDoMK4wphfw6DCuMKew6DCuMKkw6DCuMKrw6DCuMKxw6DCuMKqw6DCuMKaw6DCuMKUw6DCuMK1X8OgwrjCqMOgwrjCuMOgwrjCgcOgwrjCo8OgwrnCjF/DoMK5woDDoMK4wqrDoMK4wrLDoMK4wqPDoMK5wownLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMK4wq3DoMK4wrLDoMK4wpfDoMK4wrTDoMK4wpXDoMK4wqLDoMK5woxfw6DCuMKIw6DCuMKxw6DCuMKZw6DCuMKXw6DCuMKjw6DCucKMX8OgwrjCrcOgwrjCscOgwrjCh8OgwrjChMOgwrjCssOgwrjCo1/DoMK4wp7DoMK4wrjDoMK4wphfw6DCuMKew6DCuMKkw6DCuMKrw6DCuMKxw6DCuMKqX8OgwrjCqMOgwrjCuMOgwrjCgcOgwrjCo8OgwrnCjF/DoMK5woDDoMK4wqrDoMK4wrLDoMK4wqPDoMK5wownLnNwbGl0KCdfJyksIC8vIHllcywgdGhyZWUgY2hhcmFjdGVycyBkaWZmZXJlbmNlXG4gIHdlZWtkYXlzTWluOiAnw6DCuMKtw6DCuMKyLl/DoMK4woguX8OgwrjCrS5fw6DCuMKeLl/DoMK4wp7DoMK4wqQuX8OgwrjCqC5fw6DCuMKqLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsiBIOm1tJyxcbiAgICBMTExMOiAnw6DCuMKnw6DCuMKxw6DCuMKZZGRkZMOgwrjCl8OgwrjCtcOgwrnCiCBEIE1NTU0gWVlZWSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrIgSDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OgwrjCgcOgwrnCiMOgwrjCrcOgwrjCmcOgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjCh3zDoMK4wqvDoMK4wqXDoMK4wrHDoMK4wofDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocvLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAnw6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDoMK4woHDoMK5wojDoMK4wq3DoMK4wpnDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw6DCuMKnw6DCuMKxw6DCuMKZw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIG5leHREYXk6ICdbw6DCuMKew6DCuMKjw6DCuMK4w6DCucKIw6DCuMKHw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZFvDoMK4wqvDoMK4wpnDoMK5wonDoMK4wrIgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbGFzdERheTogJ1vDoMK5woDDoMK4wqHDoMK4wrfDoMK5wojDoMK4wq3DoMK4wqfDoMK4wrLDoMK4wpnDoMK4wpnDoMK4wrXDoMK5wokgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbw6DCuMKnw6DCuMKxw6DCuMKZXWRkZGRbw6DCuMKXw6DCuMK1w6DCucKIw6DCucKBw6DCuMKlw6DCucKJw6DCuMKnIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw6DCuMKtw6DCuMK1w6DCuMKBICVzJyxcbiAgICBwYXN0OiAnJXPDoMK4wpfDoMK4wrXDoMK5wojDoMK5woHDoMK4wqXDoMK5wonDoMK4wqcnLFxuICAgIHM6ICfDoMK5woTDoMK4wqHDoMK5wojDoMK4woHDoMK4wrXDoMK5wojDoMK4wqfDoMK4wrTDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIHNzOiAnJWQgw6DCuMKnw6DCuMK0w6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBtOiAnMSDDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIG1tOiAnJWQgw6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBoOiAnMSDDoMK4worDoMK4wrHDoMK5wojDoMK4wqfDoMK5woLDoMK4wqHDoMK4wocnLFxuICAgIGhoOiAnJWQgw6DCuMKKw6DCuMKxw6DCucKIw6DCuMKnw6DCucKCw6DCuMKhw6DCuMKHJyxcbiAgICBkOiAnMSDDoMK4wqfDoMK4wrHDoMK4wpknLFxuICAgIGRkOiAnJWQgw6DCuMKnw6DCuMKxw6DCuMKZJyxcbiAgICBNOiAnMSDDoMK5woDDoMK4wpTDoMK4wrfDoMK4wq3DoMK4wpknLFxuICAgIE1NOiAnJWQgw6DCucKAw6DCuMKUw6DCuMK3w6DCuMKtw6DCuMKZJyxcbiAgICB5OiAnMSDDoMK4wpvDoMK4wrUnLFxuICAgIHl5OiAnJWQgw6DCuMKbw6DCuMK1J1xuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBUdXJraXNoIFt0cl1cbi8vISBhdXRob3JzIDogRXJoYW4gR3VuZG9nYW4gOiBodHRwczovL2dpdGh1Yi5jb20vZXJoYW5ndW5kb2dhbixcbi8vISAgICAgICAgICAgQnVyYWsgWWnDhMKfaXQgS2F5YTogaHR0cHM6Ly9naXRodWIuY29tL0JZS1xuXG5sZXQgc3VmZml4ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdcXCdpbmNpJyxcbiAgNTogJ1xcJ2luY2knLFxuICA4OiAnXFwnaW5jaScsXG4gIDcwOiAnXFwnaW5jaScsXG4gIDgwOiAnXFwnaW5jaScsXG4gIDI6ICdcXCduY2knLFxuICA3OiAnXFwnbmNpJyxcbiAgMjA6ICdcXCduY2knLFxuICA1MDogJ1xcJ25jaScsXG4gIDM6ICdcXCfDg8K8bmPDg8K8JyxcbiAgNDogJ1xcJ8ODwrxuY8ODwrwnLFxuICAxMDA6ICdcXCfDg8K8bmPDg8K8JyxcbiAgNjogJ1xcJ25jw4TCsScsXG4gIDk6ICdcXCd1bmN1JyxcbiAgMTA6ICdcXCd1bmN1JyxcbiAgMzA6ICdcXCd1bmN1JyxcbiAgNjA6ICdcXCfDhMKxbmPDhMKxJyxcbiAgOTA6ICdcXCfDhMKxbmPDhMKxJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndHInLFxuICBtb250aHM6ICdPY2FrX8OFwp51YmF0X01hcnRfTmlzYW5fTWF5w4TCsXNfSGF6aXJhbl9UZW1tdXpfQcOEwp91c3Rvc19FeWzDg8K8bF9Fa2ltX0thc8OEwrFtX0FyYWzDhMKxaycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdPY2Ffw4XCnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcOEwp91X0V5bF9Fa2lfS2FzX0FyYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2Fsw4TCsV/Dg8KHYXLDhcKfYW1iYV9QZXLDhcKfZW1iZV9DdW1hX0N1bWFydGVzaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1Bhel9QdHNfU2FsX8ODwodhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdQel9QdF9TYV/Dg8KHYV9QZV9DdV9DdCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tidWfDg8K8biBzYWF0XSBMVCcsXG4gICAgbmV4dERheTogJ1t5YXLDhMKxbiBzYWF0XSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbZ2VsZWNla10gZGRkZCBbc2FhdF0gTFQnLFxuICAgIGxhc3REYXk6ICdbZMODwrxuXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZ2XDg8KnZW5dIGRkZGQgW3NhYXRdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHNvbnJhJyxcbiAgICBwYXN0OiAnJXMgw4PCtm5jZScsXG4gICAgczogJ2Jpcmthw4PCpyBzYW5peWUnLFxuICAgIHNzOiAnJWQgc2FuaXllJyxcbiAgICBtOiAnYmlyIGRha2lrYScsXG4gICAgbW06ICclZCBkYWtpa2EnLFxuICAgIGg6ICdiaXIgc2FhdCcsXG4gICAgaGg6ICclZCBzYWF0JyxcbiAgICBkOiAnYmlyIGfDg8K8bicsXG4gICAgZGQ6ICclZCBnw4PCvG4nLFxuICAgIE06ICdiaXIgYXknLFxuICAgIE1NOiAnJWQgYXknLFxuICAgIHk6ICdiaXIgecOEwrFsJyxcbiAgICB5eTogJyVkIHnDhMKxbCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9JyhpbmNpfG5jaXzDg8K8bmPDg8K8fG5jw4TCsXx1bmN1fMOEwrFuY8OEwrEpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBpZiAobnVtID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgIHJldHVybiBudW0gKyAnXFwnw4TCsW5jw4TCsSc7XG4gICAgfVxuICAgIGxldCBhID0gbnVtICUgMTAsXG4gICAgICBiID0gbnVtICUgMTAwIC0gYSxcbiAgICAgIGMgPSBudW0gPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICByZXR1cm4gbnVtICsgKHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoQ2hpbmEpIFt6aC1jbl1cbi8vISBhdXRob3IgOiBzdXVwaWMgOiBodHRwczovL2dpdGh1Yi5jb20vc3V1cGljXG4vLyEgYXV0aG9yIDogWmVubyBaZW5nIDogaHR0cHM6Ly9naXRodWIuY29tL3plbm96ZW5nXG5cbmV4cG9ydCBjb25zdCB6aENuTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnemgtY24nLFxuICBtb250aHM6ICfDpMK4woDDpsKcwohfw6TCusKMw6bCnMKIX8OkwrjCicOmwpzCiF/DpcKbwpvDpsKcwohfw6TCusKUw6bCnMKIX8OlwoXCrcOmwpzCiF/DpMK4woPDpsKcwohfw6XChcKrw6bCnMKIX8OkwrnCncOmwpzCiF/DpcKNwoHDpsKcwohfw6XCjcKBw6TCuMKAw6bCnMKIX8Olwo3CgcOkwrrCjMOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfDpsKYwp/DpsKcwp/DpsKXwqVfw6bCmMKfw6bCnMKfw6TCuMKAX8OmwpjCn8OmwpzCn8OkwrrCjF/DpsKYwp/DpsKcwp/DpMK4wolfw6bCmMKfw6bCnMKfw6XCm8KbX8OmwpjCn8OmwpzCn8OkwrrClF/DpsKYwp/DpsKcwp/DpcKFwq0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDpcKRwqjDpsKXwqVfw6XCkcKow6TCuMKAX8OlwpHCqMOkwrrCjF/DpcKRwqjDpMK4wolfw6XCkcKow6XCm8KbX8OlwpHCqMOkwrrClF/DpcKRwqjDpcKFwq0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw6bCl8KlX8OkwrjCgF/DpMK6woxfw6TCuMKJX8OlwpvCm1/DpMK6wpRfw6XChcKtJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS9NTS9ERCcsXG4gICAgTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxuICAgIExMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpUFow6fCgsK5bW3DpcKIwoYnLFxuICAgIExMTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqVkZGRkQWjDp8KCwrltbcOlwojChicsXG4gICAgbDogJ1lZWVkvTS9EJyxcbiAgICBsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgbGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tJyxcbiAgICBsbGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlZGRkZCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OlwofCjMOmwpnCqHzDpsKXwqnDpMK4wop8w6TCuMKKw6XCjcKIfMOkwrjCrcOlwo3CiHzDpMK4wovDpcKNwoh8w6bCmcKaw6TCuMKKLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAnw6XCh8KMw6bCmcKoJyB8fCBtZXJpZGllbSA9PT0gJ8OmwpfCqcOkwrjCiicgfHxcbiAgICAgIG1lcmlkaWVtID09PSAnw6TCuMKKw6XCjcKIJykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OkwrjCi8Olwo3CiCcgfHwgbWVyaWRpZW0gPT09ICfDpsKZwprDpMK4woonKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAnw6TCuMKtw6XCjcKIJ1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgbGV0IGhtID0gaG91ciAqIDEwMCArIG1pbnV0ZTtcbiAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgIHJldHVybiAnw6XCh8KMw6bCmcKoJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XG4gICAgICByZXR1cm4gJ8OmwpfCqcOkwrjCiic7XG4gICAgfSBlbHNlIGlmIChobSA8IDExMzApIHtcbiAgICAgIHJldHVybiAnw6TCuMKKw6XCjcKIJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTIzMCkge1xuICAgICAgcmV0dXJuICfDpMK4wq3DpcKNwognO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XG4gICAgICByZXR1cm4gJ8OkwrjCi8Olwo3CiCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw6bCmcKaw6TCuMKKJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDpMK7worDpcKkwqldTFQnLFxuICAgIG5leHREYXk6ICdbw6bCmMKOw6XCpMKpXUxUJyxcbiAgICBuZXh0V2VlazogJ1vDpMK4wotdZGRkZExUJyxcbiAgICBsYXN0RGF5OiAnW8OmwpjCqMOlwqTCqV1MVCcsXG4gICAgbGFzdFdlZWs6ICdbw6TCuMKKXWRkZGRMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0ow6bCl8KlfMOmwpzCiHzDpcKRwqgpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZCkge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCl8KlJztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpzCiCc7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OlwpHCqCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclc8OlwobChScsXG4gICAgcGFzdDogJyVzw6XCicKNJyxcbiAgICBzOiAnw6XCh8Kgw6fCp8KSJyxcbiAgICBzczogJyVkIMOnwqfCkicsXG4gICAgbTogJzEgw6XCiMKGw6nCksKfJyxcbiAgICBtbTogJyVkIMOlwojChsOpwpLCnycsXG4gICAgaDogJzEgw6XCsMKPw6bCl8K2JyxcbiAgICBoaDogJyVkIMOlwrDCj8OmwpfCticsXG4gICAgZDogJzEgw6XCpMKpJyxcbiAgICBkZDogJyVkIMOlwqTCqScsXG4gICAgTTogJzEgw6TCuMKqw6bCnMKIJyxcbiAgICBNTTogJyVkIMOkwrjCqsOmwpzCiCcsXG4gICAgeTogJzEgw6XCucK0JyxcbiAgICB5eTogJyVkIMOlwrnCtCdcbiAgfSxcbiAgd2Vlazoge1xuICAgIC8vIEdCL1QgNzQwOC0xOTk0w6PCgMKKw6bClcKww6bCjcKuw6XChcKDw6XCksKMw6TCusKkw6bCjcKiw6bCoMK8w6XCvMKPw4LCt8Okwr/CocOmwoHCr8OkwrrCpMOmwo3CosOCwrfDpsKXwqXDpsKcwp/DpcKSwozDpsKXwrbDqcKXwrTDqMKhwqjDp8KkwrrDpsKzwpXDo8KAwovDpMK4wo5JU08gODYwMToxOTg4w6fCrcKJw6bClcKIXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkYXlzSW5Nb250aCIsIm1vbnRocyIsIm1vbnRoc1Nob3J0IiwibW9udGhzU2hvcnREb3QiLCJtb250aHNQYXJzZSIsIm1vbnRoc1JlZ2V4IiwidHJhbnNsYXRlIiwic3ltYm9sTWFwIiwibnVtYmVyTWFwIiwibW9udGhzU2hvcnRXaXRoRG90cyIsIm1vbnRoc1Nob3J0V2l0aG91dERvdHMiLCJwbHVyYWwiLCJyZWxhdGl2ZVRpbWVXaXRoUGx1cmFsIiwicHJvY2Vzc1JlbGF0aXZlVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQW9CLENBQVMsRUFBRSxDQUFTO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7O0FBRUQsc0JBQXlCLEdBQVc7UUFDbEMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEQ7Ozs7OztBQ1JEOzs7O0FBRUEsc0JBQXlCLEdBQVE7UUFDL0IsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7S0FDaEM7Ozs7O0FBRUQsb0JBQXVCLEtBQVU7UUFDL0IsT0FBTyxLQUFLLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxlQUFlLENBQUM7S0FDM0Y7Ozs7O0FBTUQseUJBQTRCLElBQVU7UUFDcEMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUN2RDs7Ozs7QUFFRCx3QkFBMkIsRUFBTztRQUNoQyxRQUNFLEVBQUUsWUFBWSxRQUFRO1lBQ3RCLE1BQU0sQ0FBQyxTQUFT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