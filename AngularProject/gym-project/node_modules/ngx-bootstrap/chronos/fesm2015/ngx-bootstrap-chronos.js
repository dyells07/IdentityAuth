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
    let /** @type {?} */ k;
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
    const /** @type {?} */ coercedNumber = +argumentForCoercion;
    let /** @type {?} */ value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ aliases = {};
const /** @type {?} */ _mapUnits = {
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
    const /** @type {?} */ lowerCase = unit.toLowerCase();
    let /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
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
    const /** @type {?} */ normalizedInput = {};
    let /** @type {?} */ normalizedProp;
    let /** @type {?} */ prop;
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
const /** @type {?} */ YEAR = 0;
const /** @type {?} */ MONTH = 1;
const /** @type {?} */ DATE = 2;
const /** @type {?} */ HOUR = 3;
const /** @type {?} */ MINUTE = 4;
const /** @type {?} */ SECOND = 5;
const /** @type {?} */ MILLISECOND = 6;
const /** @type {?} */ WEEK = 7;
const /** @type {?} */ WEEKDAY = 8;

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
    const /** @type {?} */ absNumber = `${Math.abs(num)}`;
    const /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    const /** @type {?} */ sign = num >= 0;
    const /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    const /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ formatFunctions = {};
let /** @type {?} */ formatTokenFunctions = {};
// tslint:disable-next-line
const /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
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
    const /** @type {?} */ array = format.match(formattingTokens);
    const /** @type {?} */ length = array.length;
    const /** @type {?} */ formatArr = new Array(length);
    for (let /** @type {?} */ i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset = 0) {
        let /** @type {?} */ output = '';
        for (let /** @type {?} */ j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? (/** @type {?} */ (formatArr[j])).call(null, date, { format, locale, isUTC, offset })
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
    const /** @type {?} */ date = new Date(Date.UTC.apply(null, arguments));
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
function createDate(y, m = 0, d = 1, h = 0, M = 0, s = 0, ms = 0) {
    const /** @type {?} */ date = new Date(y, m, d, h, M, s, ms);
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
function getHours(date, isUTC = false) {
    return isUTC ? date.getUTCHours() : date.getHours();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMinutes(date, isUTC = false) {
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getSeconds(date, isUTC = false) {
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMilliseconds(date, isUTC = false) {
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
function getDay(date, isUTC = false) {
    return isUTC ? date.getUTCDay() : date.getDay();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDate(date, isUTC = false) {
    return isUTC ? date.getUTCDate() : date.getDate();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMonth(date, isUTC = false) {
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getFullYear(date, isUTC = false) {
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
const /** @type {?} */ match1 = /\d/; //       0 - 9
const /** @type {?} */ match2 = /\d\d/; //      00 - 99
const /** @type {?} */ match3 = /\d{3}/; //     000 - 999
const /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
const /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
const /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
const /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
const /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
const /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
const /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
const /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
const /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
const /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
const /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
const /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
const /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
const /** @type {?} */ regexes = {};
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
    const /** @type {?} */ _strict = false;
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
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
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
const /** @type {?} */ tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addParseToken(token, callback) {
    const /** @type {?} */ _token = isString(token) ? [token] : token;
    let /** @type {?} */ func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        let /** @type {?} */ i;
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
        const /** @type {?} */ y = getFullYear(date, opts.isUTC);
        return y <= 9999 ? y.toString(10) : `+${y}`;
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
    const /** @type {?} */ modMonth = mod(month, 12);
    const /** @type {?} */ _year = year + (month - modMonth) / 12;
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
        const /** @type {?} */ month = config._locale.monthsParse(input, token, config._strict);
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
const /** @type {?} */ defaultTimeUnit = {
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
    const /** @type {?} */ _unit = Object.assign({}, defaultTimeUnit, unit);
    const /** @type {?} */ year = date.getFullYear() + (_unit.year || 0);
    const /** @type {?} */ month = date.getMonth() + (_unit.month || 0);
    let /** @type {?} */ day = date.getDate() + (_unit.day || 0);
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
    const /** @type {?} */ dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
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
    const /** @type {?} */ _date = cloneDate(date);
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
        setLocaleDayOfWeek(_date, 0, { isUTC });
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
    let /** @type {?} */ _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    const /** @type {?} */ start = startOf(date, _unit, isUTC);
    const /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    const /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
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
    const /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
    const /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
    const /** @type {?} */ someDate = date1 - date2;
    const /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
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
    const /** @type {?} */ fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    const /** @type {?} */ fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
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
    const /** @type {?} */ localWeekday = (7 + weekday - dow) % 7;
    const /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
    const /** @type {?} */ dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    let /** @type {?} */ resYear;
    let /** @type {?} */ resDayOfYear;
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
    const /** @type {?} */ weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    const /** @type {?} */ week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    let /** @type {?} */ resWeek;
    let /** @type {?} */ resYear;
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
    const /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
    const /** @type {?} */ weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
const /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
const /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
const /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
const /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
const /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
const /** @type {?} */ defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
const /** @type {?} */ defaultOrdinal = '%d';
const /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
const /** @type {?} */ defaultMonthsShortRegex = matchWord;
const /** @type {?} */ defaultMonthsRegex = matchWord;
class Locale {
    /**
     * @param {?} config
     */
    constructor(config) {
        if (!!config) {
            this.set(config);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        let /** @type {?} */ confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            const /** @type {?} */ prop = config[/** @type {?} */ (confKey)];
            const /** @type {?} */ key = /** @type {?} */ ((isFunction(prop) ? confKey : `_${confKey}`));
            this[key] = /** @type {?} */ (prop);
        }
        this._config = config;
    }
    /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    calendar(key, date, now) {
        const /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(null, date, now) : output;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    longDateFormat(key) {
        const /** @type {?} */ format = this._longDateFormat[key];
        const /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    /**
     * @return {?}
     */
    get invalidDate() {
        return this._invalidDate;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set invalidDate(val) {
        this._invalidDate = val;
    }
    /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    ordinal(num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str;
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    relativeTime(num, withoutSuffix, str, isFuture) {
        const /** @type {?} */ output = this._relativeTime[str];
        return (isFunction(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    }
    /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    pastFuture(diff, output) {
        const /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    months(date, format, isUTC = false) {
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
        }
        const /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date, isUTC)];
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC = false) {
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
        }
        const /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date, isUTC)];
    }
    /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    monthsParse(monthName, format, strict) {
        let /** @type {?} */ date;
        let /** @type {?} */ regex;
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
        let /** @type {?} */ i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                const /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                const /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp(`^${_months}$`, 'i');
                this._shortMonthsParse[i] = new RegExp(`^${_shortMonths}$`, 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = `^${this.months(date, '', true)}|^${this.monthsShort(date, '', true)}`;
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && (/** @type {?} */ (this._longMonthsParse[i])).test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && (/** @type {?} */ (this._shortMonthsParse[i])).test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    monthsRegex(isStrict) {
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
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    monthsShortRegex(isStrict) {
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
    }
    /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    week(date, isUTC) {
        return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
    }
    /**
     * @return {?}
     */
    firstDayOfWeek() {
        return this._week.dow;
    }
    /**
     * @return {?}
     */
    firstDayOfYear() {
        return this._week.doy;
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdays(date, format, isUTC) {
        if (!date) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
        }
        const /** @type {?} */ _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDay(date, isUTC)];
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdaysMin(date, format, isUTC) {
        return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdaysShort(date, format, isUTC) {
        return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
    }
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    weekdaysParse(weekdayName, format, strict) {
        let /** @type {?} */ i;
        let /** @type {?} */ regex;
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
            const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(`^${this.weekdays(date, '', true).replace('.', '\.?')}$`, 'i');
                this._shortWeekdaysParse[i] = new RegExp(`^${this.weekdaysShort(date, '', true).replace('.', '\.?')}$`, 'i');
                this._minWeekdaysParse[i] = new RegExp(`^${this.weekdaysMin(date, '', true).replace('.', '\.?')}$`, 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = `^${this.weekdays(date, '', true)}|^${this.weekdaysShort(date, '', true)}|^${this.weekdaysMin(date, '', true)}`;
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
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    weekdaysRegex(isStrict) {
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
    }
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    weekdaysShortRegex(isStrict) {
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
    }
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    weekdaysMinRegex(isStrict) {
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
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    }
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    formatLongDate(key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        const /** @type {?} */ format = this._longDateFormat[key];
        const /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (val) => {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    /**
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    handleMonthStrictParse(monthName, format, strict) {
        const /** @type {?} */ llc = monthName.toLocaleLowerCase();
        let /** @type {?} */ i;
        let /** @type {?} */ ii;
        let /** @type {?} */ mom;
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
                ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
        return ii !== -1 ? ii : null;
    }
    /**
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    handleWeekStrictParse(weekdayName, format, strict) {
        let /** @type {?} */ ii;
        const /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            let /** @type {?} */ i;
            for (i = 0; i < 7; ++i) {
                const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
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
    }
    /**
     * @return {?}
     */
    computeMonthsParse() {
        const /** @type {?} */ shortPieces = [];
        const /** @type {?} */ longPieces = [];
        const /** @type {?} */ mixedPieces = [];
        let /** @type {?} */ date;
        let /** @type {?} */ i;
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
        this._monthsRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(`^(${longPieces.join('|')})`, 'i');
        this._monthsShortStrictRegex = new RegExp(`^(${shortPieces.join('|')})`, 'i');
    }
    /**
     * @return {?}
     */
    computeWeekdaysParse() {
        const /** @type {?} */ minPieces = [];
        const /** @type {?} */ shortPieces = [];
        const /** @type {?} */ longPieces = [];
        const /** @type {?} */ mixedPieces = [];
        let /** @type {?} */ i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            const /** @type {?} */ minp = this.weekdaysMin(date);
            const /** @type {?} */ shortp = this.weekdaysShort(date);
            const /** @type {?} */ longp = this.weekdays(date);
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
        this._weekdaysRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(`^(${longPieces.join('|')})`, 'i');
        this._weekdaysShortStrictRegex = new RegExp(`^(${shortPieces.join('|')})`, 'i');
        this._weekdaysMinStrictRegex = new RegExp(`^(${minPieces.join('|')})`, 'i');
    }
}
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
const /** @type {?} */ defaultCalendar = {
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
const /** @type {?} */ defaultInvalidDate = 'Invalid date';
const /** @type {?} */ defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
const /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
const /** @type {?} */ defaultRelativeTime = {
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
const /** @type {?} */ baseConfig = {
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
    const /** @type {?} */ len = Math.min(array1.length, array2.length);
    const /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
    let /** @type {?} */ diffs = 0;
    let /** @type {?} */ i;
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
function getWeek(date, locale = getLocale(), isUTC) {
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
function getWeekYear(date, locale = getLocale(), isUTC) {
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
function getQuarter(date, isUTC = false) {
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
        let /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        let /** @type {?} */ sign = '+';
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
const /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    const /** @type {?} */ matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    const /** @type {?} */ chunk = matches[matches.length - 1];
    const /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    const /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    const /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function cloneWithOffset(input, date, config = {}) {
    if (!config._isUTC) {
        return input;
    }
    const /** @type {?} */ res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    const /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
    const /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
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
function getUTCOffset(date, config = {}) {
    const /** @type {?} */ _offset = config._offset || 0;
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
    let /** @type {?} */ token;
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
        array[MILLISECOND] = toInt(parseFloat(`0.${input}`) * 1000);
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
        const /** @type {?} */ _h = hFormat(date, opts.isUTC);
        const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return `${_h}${_mm}`;
    });
    addFormatToken('hmmss', null, null, function (date, opts) {
        const /** @type {?} */ _h = hFormat(date, opts.isUTC);
        const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        const /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return `${_h}${_mm}${_ss}`;
    });
    addFormatToken('Hmm', null, null, function (date, opts) {
        const /** @type {?} */ _H = getHours(date, opts.isUTC);
        const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return `${_H}${_mm}`;
    });
    addFormatToken('Hmmss', null, null, function (date, opts) {
        const /** @type {?} */ _H = getHours(date, opts.isUTC);
        const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        const /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return `${_H}${_mm}${_ss}`;
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
        const /** @type {?} */ kInput = toInt(input);
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
        const /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmmss', function (input, array, config) {
        const /** @type {?} */ pos1 = input.length - 4;
        const /** @type {?} */ pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('Hmm', function (input, array, config) {
        const /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    });
    addParseToken('Hmmss', function (input, array, config) {
        const /** @type {?} */ pos1 = input.length - 4;
        const /** @type {?} */ pos2 = input.length - 2;
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
const /** @type {?} */ locales = {};
const /** @type {?} */ localeFamilies = {};
let /** @type {?} */ globalLocale;
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
    let /** @type {?} */ next;
    let /** @type {?} */ locale;
    let /** @type {?} */ i = 0;
    while (i < names.length) {
        const /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        let /** @type {?} */ j = split.length;
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
    const /** @type {?} */ res = Object.assign({}, parentConfig);
    for (const /** @type {?} */ childProp in childConfig) {
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
    let /** @type {?} */ parentProp;
    for (parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[/** @type {?} */ (parentProp)])) {
            // make sure changes to properties don't modify parent config
            res[/** @type {?} */ (parentProp)] = Object.assign({}, res[/** @type {?} */ (parentProp)]);
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
        console.error(`Khronos locale error: please load locale "${name}" before using it`);
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
    let /** @type {?} */ data;
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
    let /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name, config });
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
    let /** @type {?} */ _config = config;
    if (_config != null) {
        let /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        const /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        const /** @type {?} */ locale = new Locale(_config);
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
    const /** @type {?} */ _key = isArray(key) ? key : [key];
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
    if (locales[`en`]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        /**
         * @param {?} num
         * @return {?}
         */
        ordinal(num) {
            const /** @type {?} */ b = num % 10;
            const /** @type {?} */ output = toInt((num % 100) / 10) === 1
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
const /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
const ɵ0 = (mem, order) => {
    mem[order] = true;
    return mem;
};
const /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
function isDurationValid(duration) {
    const /** @type {?} */ durationKeys = Object.keys(duration);
    if (durationKeys
        .some((key) => {
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
    let /** @type {?} */ unitHasDecimal = false;
    for (let /** @type {?} */ i = 0; i < ordering.length; ++i) {
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
    let /** @type {?} */ milliseconds = dur._milliseconds;
    let /** @type {?} */ days = dur._days;
    let /** @type {?} */ months = dur._months;
    const /** @type {?} */ data = dur._data;
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
    const /** @type {?} */ seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    const /** @type {?} */ minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    const /** @type {?} */ hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    const /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    const /** @type {?} */ years = absFloor(months / 12);
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
let /** @type {?} */ round = Math.round;
const /** @type {?} */ thresholds = {
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
    const /** @type {?} */ duration = createDuration(posNegDuration).abs();
    const /** @type {?} */ seconds = round(duration.as('s'));
    const /** @type {?} */ minutes = round(duration.as('m'));
    const /** @type {?} */ hours = round(duration.as('h'));
    const /** @type {?} */ days = round(duration.as('d'));
    const /** @type {?} */ months = round(duration.as('M'));
    const /** @type {?} */ years = round(duration.as('y'));
    const /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
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
    const /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
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
class Duration {
    /**
     * @param {?} duration
     * @param {?=} config
     */
    constructor(duration, config = {}) {
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        const /** @type {?} */ normalizedInput = duration;
        const /** @type {?} */ years = normalizedInput.year || 0;
        const /** @type {?} */ quarters = normalizedInput.quarter || 0;
        const /** @type {?} */ months = normalizedInput.month || 0;
        const /** @type {?} */ weeks = normalizedInput.week || 0;
        const /** @type {?} */ days = normalizedInput.day || 0;
        const /** @type {?} */ hours = normalizedInput.hours || 0;
        const /** @type {?} */ minutes = normalizedInput.minutes || 0;
        const /** @type {?} */ seconds = normalizedInput.seconds || 0;
        const /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
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
    isValid() {
        return this._isValid;
    }
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    humanize(withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        const /** @type {?} */ locale = this.localeData();
        let /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    }
    /**
     * @return {?}
     */
    localeData() {
        return this._locale;
    }
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    locale(localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    }
    /**
     * @return {?}
     */
    abs() {
        const /** @type {?} */ mathAbs = Math.abs;
        const /** @type {?} */ data = this._data;
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
    }
    /**
     * @param {?} _units
     * @return {?}
     */
    as(_units) {
        if (!this.isValid()) {
            return NaN;
        }
        let /** @type {?} */ days;
        let /** @type {?} */ months;
        const /** @type {?} */ milliseconds = this._milliseconds;
        const /** @type {?} */ units = normalizeUnits(_units);
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
                throw new Error(`Unknown unit ${units}`);
        }
    }
    /**
     * @return {?}
     */
    valueOf() {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    }
}
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
        const /** @type {?} */ flags = getParsingFlags(config);
        const /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        let /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
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
const /** @type {?} */ extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
const /** @type {?} */ basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
const /** @type {?} */ tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
const /** @type {?} */ isoDates = [
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
const /** @type {?} */ isoTimes = [
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
const /** @type {?} */ aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
const /** @type {?} */ obsOffsets = {
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
const /** @type {?} */ rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
/**
 * @param {?} config
 * @return {?}
 */
function configFromISO(config) {
    if (!isString(config._i)) {
        return config;
    }
    const /** @type {?} */ input = config._i;
    const /** @type {?} */ match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    let /** @type {?} */ allowTime;
    let /** @type {?} */ dateFormat;
    let /** @type {?} */ timeFormat;
    let /** @type {?} */ tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    let /** @type {?} */ i;
    let /** @type {?} */ l;
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
    const /** @type {?} */ result = [
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
    const /** @type {?} */ year = parseInt(yearStr, 10);
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
        const /** @type {?} */ weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
        const /** @type {?} */ weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
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
        const /** @type {?} */ hm = parseInt(numOffset, 10);
        const /** @type {?} */ m = hm % 100;
        const /** @type {?} */ h = (hm - m) / 100;
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
    const /** @type {?} */ match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return markInvalid(config);
    }
    const /** @type {?} */ parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
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
    const /** @type {?} */ matched = aspNetJsonRegex.exec(config._i);
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
function formatDate(date, format, locale, isUTC, offset = 0) {
    const /** @type {?} */ _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
    }
    const /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    const /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
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
function formatMoment(date, _format, locale, isUTC, offset = 0) {
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    const /** @type {?} */ format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
function expandFormat(_format, locale) {
    let /** @type {?} */ format = _format;
    let /** @type {?} */ i = 5;
    const /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    const /** @type {?} */ replaceLongDateFormatTokens = (input) => {
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
    const /** @type {?} */ nowValue = new Date();
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
    const /** @type {?} */ input = [];
    let /** @type {?} */ i;
    let /** @type {?} */ date;
    let /** @type {?} */ currentDate;
    let /** @type {?} */ expectedWeekday;
    let /** @type {?} */ yearToUse;
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
    let /** @type {?} */ w, /** @type {?} */ weekYear, /** @type {?} */ week, /** @type {?} */ weekday, /** @type {?} */ dow, /** @type {?} */ doy, /** @type {?} */ temp, /** @type {?} */ weekdayOverflow;
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
        const /** @type {?} */ curWeek = weekOfYear(new Date(), dow, doy);
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
    let /** @type {?} */ overflow;
    const /** @type {?} */ a = config._a;
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
const /** @type {?} */ ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
const /** @type {?} */ RFC_2822 = 'RFC_2822';
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
    let /** @type {?} */ input = config._i.toString();
    let /** @type {?} */ totalParsedInputLength = 0;
    const /** @type {?} */ inputLength = input.length;
    const /** @type {?} */ tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    let /** @type {?} */ i;
    let /** @type {?} */ token;
    let /** @type {?} */ parsedInput;
    let /** @type {?} */ skipped;
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
    let /** @type {?} */ hour = _hour;
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
    const /** @type {?} */ isPm = locale.isPM(meridiem);
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
    let /** @type {?} */ tempConfig;
    let /** @type {?} */ bestMoment;
    let /** @type {?} */ scoreToBeat;
    let /** @type {?} */ currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    let /** @type {?} */ i;
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
    const /** @type {?} */ input = config._i;
    if (isObject(input)) {
        const /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            .map(obj => isString(obj) ? parseInt(obj, 10) : obj);
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
    const /** @type {?} */ res = checkOverflow(prepareConfig(config));
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
    let /** @type {?} */ input = config._i;
    const /** @type {?} */ format = config._f;
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
    const /** @type {?} */ input = config._i;
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
        const /** @type {?} */ _arr = input.slice(0);
        config._a = _arr.map(obj => isString(obj) ? parseInt(obj, 10) : obj);
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
    const /** @type {?} */ config = {};
    let /** @type {?} */ _input = input;
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
    const /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
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
function isAfter(date1, date2, units = 'milliseconds') {
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
function isBefore(date1, date2, units = 'milliseconds') {
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
const /** @type {?} */ aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
const /** @type {?} */ isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
function createDuration(input, key, config = {}) {
    const /** @type {?} */ duration = convertDuration(input, key);
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
        return key ? { [key]: input } : { milliseconds: input };
    }
    if (isString(input)) {
        let /** @type {?} */ match = aspNetRegex.exec(input);
        if (match) {
            const /** @type {?} */ sign = (match[1] === '-') ? -1 : 1;
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
            const /** @type {?} */ sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
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
        const /** @type {?} */ diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
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
    const /** @type {?} */ res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function positiveMomentsDifference(base, other) {
    const /** @type {?} */ res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    const /** @type {?} */ _basePlus = add(cloneDate(base), res.months, 'month');
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
    let /** @type {?} */ res;
    const /** @type {?} */ _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
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
    const /** @type {?} */ dur = createDuration(val, period);
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
    const /** @type {?} */ dur = createDuration(val, period);
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
    const /** @type {?} */ milliseconds = duration._milliseconds;
    const /** @type {?} */ days = absRound(duration._days);
    const /** @type {?} */ months = absRound(duration._months);
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
        const /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
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
    const /** @type {?} */ _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    const /** @type {?} */ _weekDay = locale.weekdaysParse(input);
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
function parseIsoWeekday(input, locale = getLocale()) {
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
function setDayOfWeek(date, input, locale = getLocale(), isUTC) {
    const /** @type {?} */ day = getDay(date, isUTC);
    const /** @type {?} */ _input = parseWeekday(input, locale);
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
function getLocaleDayOfWeek(date, locale = getLocale(), isUTC) {
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setLocaleDayOfWeek(date, input, opts = {}) {
    const /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
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
function setISODayOfWeek(date, input, opts = {}) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    const /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
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
const /** @type {?} */ symbolMap = {
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
const /** @type {?} */ numberMap = {
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
const /** @type {?} */ pluralForm = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
const /** @type {?} */ plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
const /** @type {?} */ pluralize = function (u) {
    return function (num, withoutSuffix) {
        const /** @type {?} */ f = pluralForm(num);
        let /** @type {?} */ str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return (/** @type {?} */ (str)).replace(/%d/i, num.toString());
    };
};
const /** @type {?} */ months = [
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
const /** @type {?} */ arLocale = {
    abbr: 'ar',
    months,
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return 'م' === input;
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
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
const /** @type {?} */ bgLocale = {
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
        const /** @type {?} */ number = Number(_num);
        let /** @type {?} */ lastDigit = number % 10, /** @type {?} */
        last2Digits = number % 100;
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
const /** @type {?} */ months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
const /** @type {?} */ monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
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
    const /** @type {?} */ result = num + ' ';
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
const /** @type {?} */ csLocale = {
    abbr: 'cs',
    months: months$1,
    monthsShort,
    monthsParse: (function (months, monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months$1, monthsShort)),
    shortMonthsParse: (function (monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse: (function (months) {
        let /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ daLocale = {
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
    const /** @type {?} */ format = {
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
const /** @type {?} */ deLocale = {
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
const /** @type {?} */ enGbLocale = {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        const /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'th' :
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
let /** @type {?} */ monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */
monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
let /** @type {?} */ monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
let /** @type {?} */ monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
const /** @type {?} */ esDoLocale = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse,
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
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
let /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */
monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
let /** @type {?} */ monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
let /** @type {?} */ monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
const /** @type {?} */ esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
let /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
let /** @type {?} */ monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
const /** @type {?} */ esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */
numbersFuture = [
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
const /** @type {?} */ fiLocale = {
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
const /** @type {?} */ frLocale = {
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
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        const /** @type {?} */ num = Number(_num);
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
let /** @type {?} */ monthsShortDot$3 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */
monthsShort$4 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
let /** @type {?} */ monthsParse$2 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
let /** @type {?} */ monthsRegex$2 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
const /** @type {?} */ glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ heLocale = {
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
        /**
         * @param {?} num
         * @return {?}
         */
        hh(num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        /**
         * @param {?} num
         * @return {?}
         */
        dd(num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        /**
         * @param {?} num
         * @return {?}
         */
        MM(num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        /**
         * @param {?} num
         * @return {?}
         */
        yy(num) {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
let /** @type {?} */ symbolMap$1 = {
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
}, /** @type {?} */
numberMap$1 = {
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
const /** @type {?} */ hiLocale = {
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
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$1[match];
        });
    },
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap$1[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
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
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
let /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
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
const /** @type {?} */ huLocale = {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ idLocale = {
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
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
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
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
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
const /** @type {?} */ itLocale = {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
        /**
         * @param {?} num
         * @return {?}
         */
        future(num) {
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
const /** @type {?} */ jaLocale = {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === '午後';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
    /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    ordinal(num, period) {
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
const /** @type {?} */ koLocale = {
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
const /** @type {?} */ units = {
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
    let /** @type {?} */ result = num + ' ';
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
const /** @type {?} */ ltLocale = {
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
    /**
     * @param {?} num
     * @return {?}
     */
    ordinal(num) {
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
const /** @type {?} */ mnLocale = {
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
const /** @type {?} */ nbLocale = {
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
let /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
let /** @type {?} */ monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
let /** @type {?} */ monthsParse$3 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
let /** @type {?} */ monthsRegex$3 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
const /** @type {?} */ nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
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
let /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */
monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
let /** @type {?} */ monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
let /** @type {?} */ monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
const /** @type {?} */ nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
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
let /** @type {?} */ monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
let /** @type {?} */ monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
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
    let /** @type {?} */ result = num + ' ';
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
const /** @type {?} */ plLocale = {
    abbr: 'pl',
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    months(date, format, isUTC) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ ptBrLocale = {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
    let /** @type {?} */ format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    let /** @type {?} */ separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
const /** @type {?} */ roLocale = {
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
    let /** @type {?} */ forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
    let /** @type {?} */ format = {
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
let /** @type {?} */ monthsParse$5 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
const /** @type {?} */ ruLocale = {
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
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        nextWeek(date, now) {
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
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        lastWeek(date, now) {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(дня|вечера)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        const /** @type {?} */ num = Number(_num);
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
const /** @type {?} */ months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
const /** @type {?} */ monthsShort$5 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
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
    const /** @type {?} */ result = num + ' ';
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
const /** @type {?} */ skLocale = {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ slLocale = {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
const /** @type {?} */ svLocale = {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        let /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'e' :
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
const /** @type {?} */ thLocale = {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === 'หลังเที่ยง';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
let /** @type {?} */ suffixes = {
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
const /** @type {?} */ trLocale = {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        if (num === 0) {
            // special case for zero
            return num + '\'ıncı';
        }
        let /** @type {?} */ a = num % 10, /** @type {?} */
        b = num % 100 - a, /** @type {?} */
        c = num >= 100 ? 100 : null;
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
const /** @type {?} */ zhCnLocale = {
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
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
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
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        let /** @type {?} */ hm = hour * 100 + minute;
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
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        const /** @type {?} */ num = Number(_num);
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

export { add, subtract, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, parseDate, formatDate, listLocales, getLocale, updateLocale, defineLocale, getSetGlobalLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale, createDate as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy90eXBlLWNoZWNrcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2FsaWFzZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9jb25zdGFudHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy96ZXJvLWZpbGwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9mb3JtYXQvZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2RhdGUtZnJvbS1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzL2RhdGUtZ2V0dGVycy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3JlZ2V4LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvcGFyc2UvdG9rZW4udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9wcmlvcml0aWVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLW1vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL3BhcnNpbmctZmxhZ3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy95ZWFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvbW9udGgudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLXNldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvY2xvbmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9zdGFydC1lbmQtb2YudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9kYXktb2YteWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9sb2NhbGUvbG9jYWxlLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2NhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzL2NvbXBhcmUtYXJyYXlzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvd2Vlay50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsteWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3RpbWV6b25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvdGltZXN0YW1wLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvc2Vjb25kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcXVhcnRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL29mZnNldC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21pbnV0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21pbGxpc2Vjb25kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvaG91ci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtY2VpbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2J1YmJsZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2h1bWFuaXplLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY29uc3RydWN0b3IudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2NoZWNrLW92ZXJmbG93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tb2JqZWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tYW55dGhpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvbG9jYWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtcm91bmQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWNvbXBhcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9jcmVhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9tb21lbnQvYWRkLXN1YnRyYWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXdlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2FyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9iZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vY3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2RhLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZW4tZ2IudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLWRvLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMtdXMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2ZpLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9mci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZ2wudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2hlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9oaS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaHUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2lkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9pdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vamEudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2tvLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9sdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbW4udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25iLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ubC1iZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbmwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3BsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9wdC1ici50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcm8udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3J1LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zay50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc2wudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3N2LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi90aC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vdHIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3poLWNuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG46IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChuICUgeCArIHgpICUgeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFic0Zsb29yKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bSA8IDAgPyBNYXRoLmNlaWwobnVtKSB8fCAwIDogTWF0aC5mbG9vcihudW0pO1xufVxuXG4iLCJpbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHN0cjogYW55KTogc3RyIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZVZhbGlkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRhdGUgJiYgZGF0ZS5nZXRUaW1lICYmICFpc05hTihkYXRlLmdldFRpbWUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuOiBhbnkpOiBmbiBpcyBGdW5jdGlvbiB7XG4gIHJldHVybiAoXG4gICAgZm4gaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlPzogYW55KTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5PFQ+KGlucHV0PzogYW55KTogaW5wdXQgaXMgVFtdIHtcbiAgcmV0dXJuIChcbiAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICApO1xufVxuXG4vLyBUT0RPOiByZXR1cm5lZCB0eXBlIHNob3VsZCBiZSBjaGFuZ2VkIHRvIFwiYiBpcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5cIlxuLy8gYWZ0ZXIgdXBkYXRlIHRvIHR5cGVzY3JpcHQgMy4xLjEgKGlzc3VlIDQ3MjgpXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcDxUPihhOiBUIC8qb2JqZWN0Ki8sIGI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Q8VD4oaW5wdXQ6IGFueSAvKm9iamVjdCovKTogaW5wdXQgaXMgVCB7XG4gIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAvLyBpbnB1dCAhPSBudWxsXG4gIHJldHVybiAoXG4gICAgaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICByZXR1cm4gKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwKTtcbiAgfVxuICBsZXQgaztcbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50PFQ+KGFyZ3VtZW50Rm9yQ29lcmNpb246IHN0cmluZyB8IG51bWJlciB8IFQpOiBudW1iZXIge1xuICBjb25zdCBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb247XG4gIGxldCB2YWx1ZSA9IDA7XG5cbiAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbmV4cG9ydCB0eXBlIEV4dGVuZGVkVW5pdE9mVGltZSA9IFVuaXRPZlRpbWUgfCAnZGF0ZScgfCAnd2VlaycgfCAnaXNvV2VlaycgfCAnZGF5T2ZZZWFyJyB8XG4gICd3ZWVrZGF5JyB8ICdpc29XZWVrZGF5JyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJyB8ICdtaW51dGUnIHwgJ2hvdXInIHwgJ3F1YXJ0ZXInIHwgJ3dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcic7XG5cbmNvbnN0IF9tYXBVbml0czogeyBba2V5OiBzdHJpbmddOiBVbml0T2ZUaW1lIH0gPSB7XG4gIGRhdGU6ICdkYXknLFxuICBob3VyOiAnaG91cnMnLFxuICBtaW51dGU6ICdtaW51dGVzJyxcbiAgc2Vjb25kOiAnc2Vjb25kcycsXG4gIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyh1bml0OiBFeHRlbmRlZFVuaXRPZlRpbWUsIHNob3J0aGFuZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgbGV0IF91bml0ID0gdW5pdDtcbiAgaWYgKGxvd2VyQ2FzZSBpbiBfbWFwVW5pdHMpIHtcbiAgICBfdW5pdCA9IF9tYXBVbml0c1tsb3dlckNhc2VdO1xuICB9XG4gIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbYCR7bG93ZXJDYXNlfXNgXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IF91bml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHM6IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHVuaXRzKSA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IERhdGVPYmplY3Qge1xuICBjb25zdCBub3JtYWxpemVkSW5wdXQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgbGV0IG5vcm1hbGl6ZWRQcm9wO1xuICBsZXQgcHJvcDtcblxuICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkSW5wdXQgYXMgYW55O1xufVxuIiwiLy8gcGxhY2UgaW4gbmV3IERhdGUoW2FycmF5XSlcbmV4cG9ydCBjb25zdCBZRUFSID0gMDtcbmV4cG9ydCBjb25zdCBNT05USCA9IDE7XG5leHBvcnQgY29uc3QgREFURSA9IDI7XG5leHBvcnQgY29uc3QgSE9VUiA9IDM7XG5leHBvcnQgY29uc3QgTUlOVVRFID0gNDtcbmV4cG9ydCBjb25zdCBTRUNPTkQgPSA1O1xuZXhwb3J0IGNvbnN0IE1JTExJU0VDT05EID0gNjtcbmV4cG9ydCBjb25zdCBXRUVLID0gNztcbmV4cG9ydCBjb25zdCBXRUVLREFZID0gODtcbiIsImV4cG9ydCBmdW5jdGlvbiB6ZXJvRmlsbChudW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNpZ24/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgYWJzTnVtYmVyID0gYCR7TWF0aC5hYnMobnVtKX1gO1xuICBjb25zdCB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGg7XG4gIGNvbnN0IHNpZ24gPSBudW0gPj0gMDtcbiAgY29uc3QgX3NpZ24gPSBzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJztcbiAgLy8gdG9kbzogdGhpcyBpcyBjcmF6eSBzbG93XG4gIGNvbnN0IF96ZXJvcyA9IE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiAoX3NpZ24gKyBfemVyb3MgKyBhYnNOdW1iZXIpO1xufVxuIiwiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIERhdGVGb3JtYXR0ZXJGbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGxldCBmb3JtYXRGdW5jdGlvbnM6IHtcbiAgW2tleTogc3RyaW5nXTogKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nO1xufSA9IHt9O1xuZXhwb3J0IGxldCBmb3JtYXRUb2tlbkZ1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBEYXRlRm9ybWF0dGVyRm4gfSA9IHt9O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBjb25zdCBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGVkOiBbc3RyaW5nLCBudW1iZXIsIGJvb2xlYW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gY2FsbGJhY2s7XG4gIH1cblxuICBpZiAocGFkZGVkKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHplcm9GaWxsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9yZGluYWwpIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUub3JkaW5hbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdDogc3RyaW5nKTpcbiAgKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nIHtcblxuICBjb25zdCBhcnJheTogc3RyaW5nW10gPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2Vucyk7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBjb25zdCBmb3JtYXRBcnI6IHN0cmluZ1tdIHwgRGF0ZUZvcm1hdHRlckZuW10gPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm9ybWF0QXJyW2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXG4gICAgICA/IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxuICAgICAgOiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDOiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oZm9ybWF0QXJyW2pdKVxuICAgICAgICA/IChmb3JtYXRBcnJbal0gYXMgRGF0ZUZvcm1hdHRlckZuKS5jYWxsKG51bGwsIGRhdGUsIHtmb3JtYXQsIGxvY2FsZSwgaXNVVEMsIG9mZnNldH0pXG4gICAgICAgIDogZm9ybWF0QXJyW2pdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICB9XG5cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUoeT86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPzogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcblxuICAvLyB0aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZSh5PzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zID0gMCk6IERhdGUge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpO1xuXG4gIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeSk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0hvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW51dGVzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vjb25kcyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENTZWNvbmRzKCkgOiBkYXRlLmdldFNlY29uZHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSA6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0RheSgpIDogZGF0ZS5nZXREYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNb250aCgpIDogZGF0ZS5nZXRNb250aCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFllYXIoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXhUaW1lKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5peChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RGF5T2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gIHJldHVybiBjcmVhdGVEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSxcbiAgICBkYXRlLmdldEhvdXJzKCksXG4gICAgZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgZGF0ZS5nZXRTZWNvbmRzKClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gX2RheXNJbk1vbnRoKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9kYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggKyAxLCAwKSkuZ2V0VVRDRGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJzdERheU9mV2VlayhkYXRlOiBEYXRlLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBkYXRlLmdldERheSgpID09PSBmaXJzdERheU9mV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1NhbWVZZWFyKGRhdGUxLCBkYXRlMikgJiYgZ2V0TW9udGgoZGF0ZTEpID09PSBnZXRNb250aChkYXRlMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVZZWFyKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlMSkgPT09IGdldEZ1bGxZZWFyKGRhdGUyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGlzU2FtZVllYXIoZGF0ZTEsIGRhdGUyKSAmJlxuICAgIGlzU2FtZU1vbnRoKGRhdGUxLCBkYXRlMikgJiZcbiAgICBnZXREYXRlKGRhdGUxKSA9PT0gZ2V0RGF0ZShkYXRlMilcbiAgKTtcbn1cbiIsImltcG9ydCB7IGhhc093blByb3AsIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IG1hdGNoMSA9IC9cXGQvOyAgICAgICAgICAgIC8vICAgICAgIDAgLSA5XG5leHBvcnQgY29uc3QgbWF0Y2gyID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMyA9IC9cXGR7M30vOyAgICAgICAgIC8vICAgICAwMDAgLSA5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDQgPSAvXFxkezR9LzsgICAgICAgICAvLyAgICAwMDAwIC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNiA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzIgPSAvXFxkXFxkPy87ICAgICAgICAgLy8gICAgICAgMCAtIDk5XG5leHBvcnQgY29uc3QgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vOyAgICAgLy8gICAgIDk5OSAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzMgPSAvXFxkezEsM30vOyAgICAgICAvLyAgICAgICAwIC0gOTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5cbmV4cG9ydCBjb25zdCBtYXRjaFVuc2lnbmVkID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxuZXhwb3J0IGNvbnN0IG1hdGNoU2lnbmVkID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxuXG5leHBvcnQgY29uc3QgbWF0Y2hPZmZzZXQgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuZXhwb3J0IGNvbnN0IG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcblxuZXhwb3J0IGNvbnN0IG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LzsgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcblxuLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXG4vLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBjb25zdCBtYXRjaFdvcmQgPSAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaTtcblxuZXhwb3J0IHR5cGUgUmVnRXhwVG9rZW5GbiA9IChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpID0+IFJlZ0V4cDtcbmNvbnN0IHJlZ2V4ZXM6IHtba2V5OiBzdHJpbmddOiBSZWdFeHBUb2tlbkZufSA9IHt9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHAgfCBSZWdFeHBUb2tlbkZuLCBzdHJpY3RSZWdleD86IFJlZ0V4cCk6IHZvaWQge1xuICBpZiAoaXNGdW5jdGlvbihyZWdleCkpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IHJlZ2V4O1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVnZXhlc1t0b2tlbl0gPSBmdW5jdGlvbiAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSB7XG4gICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuOiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgY29uc3QgX3N0cmljdCA9IGZhbHNlO1xuICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgfVxuXG4gIHJldHVybiByZWdleGVzW3Rva2VuXShfc3RyaWN0LCBsb2NhbGUpO1xufVxuXG4vLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG5mdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gcmVnZXhFc2NhcGUoc3RyXG4gICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcbiAgICAucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpID0+IHAxIHx8IHAyIHx8IHAzIHx8IHA0KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVQYXJzZVRva2VuRm4gfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHRva2Vuczoge1trZXk6IHN0cmluZ106IERhdGVQYXJzZVRva2VuRm59ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZVRva2VuKHRva2VuOiBzdHJpbmcgfCBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4gfCBudW1iZXIpIHtcbiAgY29uc3QgX3Rva2VuID0gaXNTdHJpbmcodG9rZW4pID8gW3Rva2VuXSA6IHRva2VuO1xuICBsZXQgZnVuYyA9IGNhbGxiYWNrO1xuXG4gIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc0FycmF5PHN0cmluZz4oX3Rva2VuKSAmJiBpc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IF90b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdG9rZW5zW190b2tlbltpXV0gPSBmdW5jO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4odG9rZW46IHN0cmluZ1tdLCBjYWxsYmFjazogRGF0ZVBhcnNlVG9rZW5Gbik6IHZvaWQge1xuICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgX3Rva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgX3Rva2VuKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuOiBzdHJpbmcsIGlucHV0OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImNvbnN0IHByaW9yaXRpZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0UHJpb3JpdHkodW5pdDogc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyKTogdm9pZCB7XG4gIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gIGNvbnN0IHVuaXRzID0gW107XG4gIGxldCB1bml0O1xuICBmb3IgKHVuaXQgaW4gdW5pdHNPYmopIHtcbiAgICBpZiAodW5pdHNPYmouaGFzT3duUHJvcGVydHkodW5pdCkpIHtcbiAgICAgIHVuaXRzLnB1c2goeyB1bml0LCBwcmlvcml0eTogcHJpb3JpdGllc1t1bml0XSB9KTtcbiAgICB9XG4gIH1cbiAgdW5pdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVuaXRzO1xufVxuKi9cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERBVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZNb250aCgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyLCBmYWxzZV0sICdEbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldERhdGUoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xuXG4vLyBQUklPUk9JVFlcbiAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdEJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2UgfHwgbG9jYWxlLl9vcmRpbmFsUGFyc2U7XG4gIH0pO1xuXG4gIGFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xuICBhZGRQYXJzZVRva2VuKFxuICAgICdEbycsXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xufVxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcsIERhdGVQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk6IERhdGVQYXJzaW5nRmxhZ3Mge1xuICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gIHJldHVybiB7XG4gICAgZW1wdHk6IGZhbHNlLFxuICAgIHVudXNlZFRva2VuczogW10sXG4gICAgdW51c2VkSW5wdXQ6IFtdLFxuICAgIG92ZXJmbG93OiAtMixcbiAgICBjaGFyc0xlZnRPdmVyOiAwLFxuICAgIG51bGxJbnB1dDogZmFsc2UsXG4gICAgaW52YWxpZE1vbnRoOiBudWxsLFxuICAgIGludmFsaWRGb3JtYXQ6IGZhbHNlLFxuICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgaXNvOiBmYWxzZSxcbiAgICBwYXJzZWREYXRlUGFydHM6IFtdLFxuICAgIG1lcmlkaWVtOiBudWxsLFxuICAgIHJmYzI4MjI6IGZhbHNlLFxuICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdGbGFncyB7XG4gIGlmIChjb25maWcuX3BmID09IG51bGwpIHtcbiAgICBjb25maWcuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5fcGY7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgWUVBUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBnZXRZZWFyKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0WWVhcigpIHtcbiAgYWRkRm9ybWF0VG9rZW4oJ1knLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgeSA9IGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpO1xuXG4gICAgcmV0dXJuIHkgPD0gOTk5OSA/IHkudG9TdHJpbmcoMTApIDogYCske3l9YDtcbiAgfSk7XG5cbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWScsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0RnVsbFllYXIoZGF0ZSwgb3B0cy5pc1VUQykgJSAxMDApLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWVlZJywgNCwgZmFsc2VdLCBudWxsLCBnZXRZZWFyKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWVlZWScsIDUsIGZhbHNlXSwgbnVsbCwgZ2V0WWVhcik7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIG51bGwsIGdldFllYXIpO1xuXG4gIC8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3llYXInLCAneScpO1xuXG4gIC8vIFBSSU9SSVRJRVNcblxuICBhZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuICAvLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbiAgYWRkUmVnZXhUb2tlbignWVknLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1lZWVknLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcbiAgYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGFycmF5W1lFQVJdID0gaW5wdXQubGVuZ3RoID09PSAyID8gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyB0b2RvOiB0aGlzIGlzIGR1cGxpY2F0ZSwgc291cmNlIGluIGRhdGUtZ2V0dGVycy50c1xuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIGNvbnN0IG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XG4gIGNvbnN0IF95ZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIHJldHVybiBtb2RNb250aCA9PT0gMVxuICAgID8gaXNMZWFwWWVhcihfeWVhcikgPyAyOSA6IDI4XG4gICAgOiAoMzEgLSBtb2RNb250aCAlIDcgJSAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNb250aCgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignTScsIFsnTU0nLCAyLCBmYWxzZV0sICdNbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNb250aChkYXRlLCBvcHRzLmlzVVRDKSArIDEpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ01NTScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1vbnRoc1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ01NTU0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tb250aHMoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ01NJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdNTU0nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuXG4gIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG4gIGFkZFBhcnNlVG9rZW4oXG4gICAgWydNTU0nLCAnTU1NTSddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBjb25zdCBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgICBpZiAobW9udGggIT0gbnVsbCkge1xuICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9ICEhaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xufVxuIiwiaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBpc0xlYXBZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbmNvbnN0IGRlZmF1bHRUaW1lVW5pdDogVGltZVVuaXQgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAwLFxuICBkYXk6IDAsXG4gIGhvdXI6IDAsXG4gIG1pbnV0ZTogMCxcbiAgc2Vjb25kczogMFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0RGF0ZShkYXRlOiBEYXRlLCB1bml0OiBUaW1lVW5pdCk6IERhdGUge1xuICBjb25zdCBfdW5pdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRUaW1lVW5pdCwgdW5pdCk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAoX3VuaXQueWVhciB8fCAwKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAoX3VuaXQubW9udGggfHwgMCk7XG4gIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSArIChfdW5pdC5kYXkgfHwgMCk7XG4gIGlmIChfdW5pdC5tb250aCAmJiAhX3VuaXQuZGF5KSB7XG4gICAgZGF5ID0gTWF0aC5taW4oZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgeWVhcixcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgZGF0ZS5nZXRIb3VycygpICsgKF91bml0LmhvdXIgfHwgMCksXG4gICAgZGF0ZS5nZXRNaW51dGVzKCkgKyAoX3VuaXQubWludXRlIHx8IDApLFxuICAgIGRhdGUuZ2V0U2Vjb25kcygpICsgKF91bml0LnNlY29uZHMgfHwgMClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZ1bGxEYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XG4gIHJldHVybiBjcmVhdGVEYXRlKFxuICAgIGdldE51bShkYXRlLmdldEZ1bGxZZWFyKCksIHVuaXQueWVhciksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TW9udGgoKSwgdW5pdC5tb250aCksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RGF0ZSgpLCB1bml0LmRheSksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0SG91cnMoKSwgdW5pdC5ob3VyKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNaW51dGVzKCksIHVuaXQubWludXRlKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRTZWNvbmRzKCksIHVuaXQuc2Vjb25kcyksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHVuaXQubWlsbGlzZWNvbmRzKVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXROdW0oZGVmOiBudW1iZXIsIG51bT86IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBpc051bWJlcihudW0pID8gbnVtIDogZGVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RnVsbFllYXIoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IF9tb250aCA9IGdldE1vbnRoKGRhdGUsIGlzVVRDKTtcbiAgY29uc3QgX2RhdGUgPSBnZXREYXRlKGRhdGUsIGlzVVRDKTtcbiAgY29uc3QgX3llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyk7XG4gIGlmIChpc0xlYXBZZWFyKF95ZWFyKSAmJiBfbW9udGggPT09IDEgJiYgX2RhdGUgPT09IDI5KSB7XG4gICAgY29uc3QgX2RheXNJbk1vbnRoID0gZGF5c0luTW9udGgodmFsdWUsIF9tb250aCk7XG4gICAgaXNVVEMgPyBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCBfbW9udGgsIF9kYXlzSW5Nb250aCkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlLCBfbW9udGgsIF9kYXlzSW5Nb250aCk7XG4gIH1cblxuICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUpIDogZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb250aChkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZGF5T2ZNb250aCA9IE1hdGgubWluKGdldERhdGUoZGF0ZSksIGRheXNJbk1vbnRoKGdldEZ1bGxZZWFyKGRhdGUpLCB2YWx1ZSkpO1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTW9udGgodmFsdWUsIGRheU9mTW9udGgpIDogZGF0ZS5zZXRNb250aCh2YWx1ZSwgZGF5T2ZNb250aCk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXkoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENEYXRlKHZhbHVlKSA6IGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIb3VycyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlKSA6IGRhdGUuc2V0SG91cnModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWludXRlcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbnV0ZXModmFsdWUpIDogZGF0ZS5zZXRNaW51dGVzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlY29uZHMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENTZWNvbmRzKHZhbHVlKSA6IGRhdGUuc2V0U2Vjb25kcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaWxsaXNlY29uZHMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpIDogZGF0ZS5zZXRNaWxsaXNlY29uZHModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlcik6IERhdGUge1xuICBkYXRlLnNldFRpbWUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuIiwiLy8gZmFzdGVzdCB3YXkgdG8gY2xvbmUgZGF0ZVxuLy8gaHR0cHM6Ly9qc3BlcmYuY29tL2Nsb25lLWRhdGUtb2JqZWN0MlxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRGF0ZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTogc3dpdGNoLWRlZmF1bHRcbmltcG9ydCB7IFRpbWVVbml0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgc2V0RGF0ZSwgc2V0RnVsbERhdGUsIHNldEhvdXJzLCBzZXRNaWxsaXNlY29uZHMsIHNldE1pbnV0ZXMsIHNldE1vbnRoLCBzZXRTZWNvbmRzLFxuICBzaGlmdERhdGVcbn0gZnJvbSAnLi9kYXRlLXNldHRlcnMnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7IHNldElTT0RheU9mV2Vlaywgc2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0IH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBfZGF0ZSA9IGNsb25lRGF0ZShkYXRlKTtcbiAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xuICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgc2V0TW9udGgoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAncXVhcnRlcic6XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgc2V0RGF0ZShfZGF0ZSwgMSwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICdpc29XZWVrJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgc2V0SG91cnMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgc2V0TWludXRlcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHNldFNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICBzZXRNaWxsaXNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgfVxuXG4gIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxuICBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XG4gICAgc2V0TG9jYWxlRGF5T2ZXZWVrKF9kYXRlLCAwLCB7aXNVVEN9KTtcbiAgfVxuICBpZiAodW5pdCA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgc2V0SVNPRGF5T2ZXZWVrKF9kYXRlLCAxKTtcbiAgfVxuXG4gIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcbiAgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xuICAgIHNldE1vbnRoKF9kYXRlLCBNYXRoLmZsb29yKGdldE1vbnRoKF9kYXRlLCBpc1VUQykgLyAzKSAqIDMsIGlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBfZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBsZXQgX3VuaXQgPSB1bml0O1xuICAvLyAnZGF0ZScgaXMgYW4gYWxpYXMgZm9yICdkYXknLCBzbyBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBzdWNoLlxuICBpZiAoX3VuaXQgPT09ICdkYXRlJykge1xuICAgIF91bml0ID0gJ2RheSc7XG4gIH1cblxuICBjb25zdCBzdGFydCA9IHN0YXJ0T2YoZGF0ZSwgX3VuaXQsIGlzVVRDKTtcbiAgY29uc3QgX3N0ZXAgPSBhZGQoc3RhcnQsIDEsIF91bml0ID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiBfdW5pdCwgaXNVVEMpO1xuICBjb25zdCByZXMgPSBzdWJ0cmFjdChfc3RlcCwgMSwgJ21pbGxpc2Vjb25kcycsIGlzVVRDKTtcblxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8zLCBtYXRjaDMgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZZZWFyKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzLCBmYWxzZV0sICdERERvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbiAgYWRkUmVnZXhUb2tlbignREREJywgbWF0Y2gxdG8zKTtcbiAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gIGFkZFBhcnNlVG9rZW4oXG4gICAgWydEREQnLCAnRERERCddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgZGF0ZTEgPSArc3RhcnRPZihkYXRlLCAnZGF5JywgaXNVVEMpO1xuICBjb25zdCBkYXRlMiA9ICtzdGFydE9mKGRhdGUsICd5ZWFyJywgaXNVVEMpO1xuICBjb25zdCBzb21lRGF0ZSA9IGRhdGUxIC0gZGF0ZTI7XG4gIGNvbnN0IG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQoc29tZURhdGUgLyBvbmVEYXkpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheU9mWWVhcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIGRheU9mWWVhciksICdkYXknKTtcbn1cbiIsIi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyXG4gKiBAcGFyYW0ge251bWJlcn0gZG93IC0gc3RhcnQtb2YtZmlyc3Qtd2Vla1xuICogQHBhcmFtIHtudW1iZXJ9IGRveSAtIHN0YXJ0LW9mLXllYXJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSAnLi9kYXktb2YteWVhcic7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyOiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICBjb25zdCBmd2QgPSBkb3cgLSBkb3kgKyA3O1xuICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gIGNvbnN0IGZ3ZGx3ID0gKGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdyArIDcpICUgNztcblxuICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcbmV4cG9ydCBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla3MoXG4gIHllYXI6IG51bWJlcixcbiAgd2VlazogbnVtYmVyLFxuICB3ZWVrZGF5OiBudW1iZXIsXG4gIGRvdzogbnVtYmVyLFxuICBkb3k6IG51bWJlclxuKTogeyB5ZWFyOiBudW1iZXI7IGRheU9mWWVhcjogbnVtYmVyIH0ge1xuICBjb25zdCBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNztcbiAgY29uc3Qgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQ7XG4gIGxldCByZXNZZWFyOiBudW1iZXI7XG4gIGxldCByZXNEYXlPZlllYXI6IG51bWJlcjtcblxuICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcbiAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XG4gICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gIH0gZWxzZSB7XG4gICAgcmVzWWVhciA9IHllYXI7XG4gICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiByZXNZZWFyLFxuICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrT2ZZZWFyKGRhdGU6IERhdGUsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogeyB3ZWVrOiBudW1iZXI7IHllYXI6IG51bWJlciB9IHtcbiAgY29uc3Qgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KTtcbiAgY29uc3Qgd2VlayA9IE1hdGguZmxvb3IoKGdldERheU9mWWVhcihkYXRlLCBpc1VUQykgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDE7XG4gIGxldCByZXNXZWVrOiBudW1iZXI7XG4gIGxldCByZXNZZWFyOiBudW1iZXI7XG5cbiAgaWYgKHdlZWsgPCAxKSB7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSAtIDE7XG4gICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XG4gIH0gZWxzZSBpZiAod2VlayA+IHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgZG93LCBkb3kpKSB7XG4gICAgcmVzV2VlayA9IHdlZWsgLSB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KTtcbiAgICByZXNZZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpICsgMTtcbiAgfSBlbHNlIHtcbiAgICByZXNZZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpO1xuICAgIHJlc1dlZWsgPSB3ZWVrO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3ZWVrOiByZXNXZWVrLFxuICAgIHllYXI6IHJlc1llYXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXI6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSk7XG4gIGNvbnN0IHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG5cbiAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50IG1heC1saW5lLWxlbmd0aCBjeWNsb21hdGljLWNvbXBsZXhpdHlcblxuaW1wb3J0IHsgd2Vla09mWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldERheSwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgbWF0Y2hXb3JkLCByZWdleEVzY2FwZSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IHNldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVPcHRpb25zRm9ybWF0IHtcbiAgZm9ybWF0OiBzdHJpbmdbXTtcbiAgc3RhbmRhbG9uZTogc3RyaW5nW107XG4gIGlzRm9ybWF0PzogUmVnRXhwO1xufVxuXG5leHBvcnQgdHlwZSBMb2NhbGVPcHRpb25zID0gc3RyaW5nW10gfCBMb2NhbGVPcHRpb25zRm9ybWF0O1xuXG5jb25zdCBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNb250aHMgPSAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPSAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvbmdEYXRlRm9ybWF0OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIExUUzogJ2g6bW06c3MgQScsXG4gIExUOiAnaDptbSBBJyxcbiAgTDogJ01NL0REL1lZWVknLFxuICBMTDogJ01NTU0gRCwgWVlZWScsXG4gIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSdcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3JkaW5hbCA9ICclZCc7XG5leHBvcnQgY29uc3QgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xuXG5jb25zdCBkZWZhdWx0TW9udGhzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbmNvbnN0IGRlZmF1bHRNb250aHNSZWdleCA9IG1hdGNoV29yZDtcblxuZXhwb3J0IHR5cGUgT3JkaW5hbERhdGVGbiA9IChudW06IG51bWJlciwgdG9rZW4/OiBzdHJpbmcpID0+IHN0cmluZztcbmV4cG9ydCB0eXBlIFBsdXJhbGl6ZURhdGVGbiA9IChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk/OiBzdHJpbmcsIGlzRnV0dXJlPzogYm9vbGVhbikgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZURhdGEge1xuICBhYmJyPzogc3RyaW5nO1xuICBwYXJlbnRMb2NhbGU/OiBzdHJpbmc7XG5cbiAgbW9udGhzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICBtb250aHNTaG9ydD86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgbW9udGhzUGFyc2VFeGFjdD86IGJvb2xlYW47XG5cbiAgd2Vla2RheXM/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIHdlZWtkYXlzU2hvcnQ/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c01pbj86IHN0cmluZ1tdIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIHdlZWtkYXlzUGFyc2VFeGFjdD86IGJvb2xlYW47XG5cbiAgbG9uZ0RhdGVGb3JtYXQ/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNhbGVuZGFyPzoge1xuICAgIFtrZXk6IHN0cmluZ106IChzdHJpbmdcbiAgICAgIHwgKChkYXRlOiBEYXRlLCBub3c/OiBEYXRlKSA9PiBzdHJpbmcpXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHwgKChkYXlPZldlZWs6IG51bWJlciwgaXNOZXh0V2VlazogYm9vbGVhbikgPT4gc3RyaW5nKSlcbiAgfTtcbiAgcmVsYXRpdmVUaW1lPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBQbHVyYWxpemVEYXRlRm4gfTtcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZT86IFJlZ0V4cDtcbiAgb3JkaW5hbD86IHN0cmluZyB8IE9yZGluYWxEYXRlRm47XG5cbiAgd2Vlaz86IHsgZG93PzogbnVtYmVyOyBkb3k/OiBudW1iZXIgfTtcblxuICBpbnZhbGlkRGF0ZT86IHN0cmluZztcblxuICBtb250aHNSZWdleD86IFJlZ0V4cDtcbiAgbW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcbiAgbW9udGhzU2hvcnRSZWdleD86IFJlZ0V4cDtcbiAgbW9udGhzU3RyaWN0UmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg/OiBSZWdFeHA7XG4gIGxvbmdNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuICBzaG9ydE1vbnRoc1BhcnNlPzogUmVnRXhwW107XG5cbiAgbWVyaWRpZW1QYXJzZT86IFJlZ0V4cDtcblxuICBtZXJpZGllbUhvdXI/KGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlcjtcblxuICBwcmVwYXJzZT8oc3RyOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgcG9zdGZvcm1hdD8oc3RyOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmc7XG5cbiAgbWVyaWRpZW0/KGhvdXI6IG51bWJlciwgbWludXRlPzogbnVtYmVyLCBpc0xvd2VyPzogYm9vbGVhbik6IHN0cmluZztcblxuICBpc1BNPyhpbnB1dDogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsZSB7XG4gIHBhcmVudExvY2FsZT86IExvY2FsZTtcbiAgX2FiYnI6IHN0cmluZztcbiAgX2NvbmZpZzogTG9jYWxlRGF0YTtcbiAgbWVyaWRpZW1Ib3VyOiAoaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKSA9PiBudW1iZXI7XG5cbiAgX2ludmFsaWREYXRlOiBzdHJpbmc7XG4gIF93ZWVrOiB7IGRvdzogbnVtYmVyOyBkb3k6IG51bWJlciB9O1xuICBfZGF5T2ZNb250aE9yZGluYWxQYXJzZTogUmVnRXhwO1xuICBfb3JkaW5hbFBhcnNlOiBSZWdFeHA7XG4gIF9tZXJpZGllbVBhcnNlOiBSZWdFeHA7XG5cbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHByaXZhdGUgX3JlbGF0aXZlVGltZTogeyBmdXR1cmU6IHN0cmluZzsgcGFzdDogc3RyaW5nIH07XG4gIHByaXZhdGUgX21vbnRoczogTG9jYWxlT3B0aW9ucztcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnQ6IExvY2FsZU9wdGlvbnM7XG4gIHByaXZhdGUgX21vbnRoc1JlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzU3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnRTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNQYXJzZTogUmVnRXhwW107XG4gIHByaXZhdGUgX2xvbmdNb250aHNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfc2hvcnRNb250aHNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2VFeGFjdDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlRXhhY3Q6IGJvb2xlYW47XG4gIHByaXZhdGUgX3dlZWtkYXlzUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzTWluUmVnZXg6IFJlZ0V4cDtcblxuICBwcml2YXRlIF93ZWVrZGF5c1N0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c01pblN0cmljdFJlZ2V4OiBSZWdFeHA7XG5cbiAgcHJpdmF0ZSBfd2Vla2RheXM6IExvY2FsZU9wdGlvbnM7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnQ6IHN0cmluZ1tdO1xuICBwcml2YXRlIF93ZWVrZGF5c01pbjogc3RyaW5nW107XG4gIHByaXZhdGUgX3dlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX21pbldlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX3Nob3J0V2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfZnVsbFdlZWtkYXlzUGFyc2U6IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9sb25nRGF0ZUZvcm1hdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBwcml2YXRlIF9vcmRpbmFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBMb2NhbGVEYXRhKSB7XG4gICAgaWYgKCEhY29uZmlnKSB7XG4gICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHNldChjb25maWc6IExvY2FsZURhdGEpOiB2b2lkIHtcbiAgICBsZXQgY29uZktleTtcbiAgICBmb3IgKGNvbmZLZXkgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25mS2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3AgPSBjb25maWdbY29uZktleSBhcyBrZXlvZiBMb2NhbGVEYXRhXTtcbiAgICAgIGNvbnN0IGtleSA9IChpc0Z1bmN0aW9uKHByb3ApID8gY29uZktleSA6IGBfJHtjb25mS2V5fWApIGFzIGtleW9mIExvY2FsZTtcblxuICAgICAgdGhpc1trZXldID0gcHJvcCBhcyBhbnk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgY2FsZW5kYXIoa2V5OiBzdHJpbmcsIGRhdGU6IERhdGUsIG5vdzogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhci5zYW1lRWxzZTtcblxuICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChudWxsLCBkYXRlLCBub3cpIDogb3V0cHV0O1xuICB9XG5cbiAgbG9uZ0RhdGVGb3JtYXQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIGNvbnN0IGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCBmdW5jdGlvbiAodmFsOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgfVxuXG4gIGdldCBpbnZhbGlkRGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbiAgfVxuXG4gIHNldCBpbnZhbGlkRGF0ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ludmFsaWREYXRlID0gdmFsO1xuICB9XG5cbiAgb3JkaW5hbChudW06IG51bWJlciwgdG9rZW4/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtLnRvU3RyaW5nKDEwKSk7XG4gIH1cblxuICBwcmVwYXJzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJlbGF0aXZlVGltZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJdO1xuXG4gICAgcmV0dXJuIChpc0Z1bmN0aW9uKG91dHB1dCkpID9cbiAgICAgIG91dHB1dChudW0sIHdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpIDpcbiAgICAgIG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoMTApKTtcbiAgfVxuXG4gIHBhc3RGdXR1cmUoZGlmZjogbnVtYmVyLCBvdXRwdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG4gIH1cblxuICAvKiogTW9udGhzICovXG4gIG1vbnRocygpOiBzdHJpbmdbXTtcbiAgbW9udGhzKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICBtb250aHMoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEMgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzKVxuICAgICAgICA/IHRoaXMuX21vbnRoc1xuICAgICAgICA6IHRoaXMuX21vbnRocy5zdGFuZGFsb25lO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9ICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICA/ICdmb3JtYXQnXG4gICAgICA6ICdzdGFuZGFsb25lJztcblxuICAgIHJldHVybiB0aGlzLl9tb250aHNba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgbW9udGhzU2hvcnQoKTogc3RyaW5nW107XG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgbW9udGhzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEMgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzU2hvcnQpXG4gICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRcbiAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydC5zdGFuZGFsb25lO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzU2hvcnQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJztcblxuICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFtrZXldW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICBtb250aHNQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgZGF0ZTtcbiAgICBsZXQgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIGkpKTtcbiAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICBjb25zdCBfbW9udGhzID0gdGhpcy5tb250aHMoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnJyk7XG4gICAgICAgIGNvbnN0IF9zaG9ydE1vbnRocyA9IHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnJyk7XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke19tb250aHN9JGAsICdpJyk7XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfc2hvcnRNb250aHN9JGAsICdpJyk7XG4gICAgICB9XG4gICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgcmVnZXggPSBgXiR7dGhpcy5tb250aHMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKX1gO1xuICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgIH1cbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTU0nICYmICh0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiAodGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSBhcyBSZWdFeHApLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vbnRoc1JlZ2V4KGlzU3RyaWN0OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVNb250aHNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIH1cblxuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICB9XG5cbiAgbW9udGhzU2hvcnRSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xuICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICB9XG5cbiAgLyoqIFdlZWsgKi9cbiAgd2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSwgaXNVVEMpLndlZWs7XG4gIH1cblxuICBmaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbiAgfVxuXG4gIGZpcnN0RGF5T2ZZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xuICB9XG5cbiAgLyoqIERheSBvZiBXZWVrICovXG4gIHdlZWtkYXlzKCk6IHN0cmluZ1tdO1xuICB3ZWVrZGF5cyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgd2Vla2RheXMoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5cylcbiAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xuICAgICAgICA6IHRoaXMuX3dlZWtkYXlzLnN0YW5kYWxvbmU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5cykpIHtcbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1tnZXREYXkoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICBjb25zdCBfa2V5ID0gdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpXG4gICAgICA/ICdmb3JtYXQnXG4gICAgICA6ICdzdGFuZGFsb25lJztcblxuICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1tfa2V5XVtnZXREYXkoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIHdlZWtkYXlzTWluKCk6IHN0cmluZ1tdO1xuICB3ZWVrZGF5c01pbihkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgd2Vla2RheXNNaW4oZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiBkYXRlID8gdGhpcy5fd2Vla2RheXNNaW5bZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c01pbjtcbiAgfVxuXG4gIHdlZWtkYXlzU2hvcnQoKTogc3RyaW5nW107XG4gIHdlZWtkYXlzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiBkYXRlID8gdGhpcy5fd2Vla2RheXNTaG9ydFtnZXREYXkoZGF0ZSwgaXNVVEMpXSA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XG4gIH1cblxuXG4gIC8vIHByb3RvLndlZWtkYXlzUGFyc2UgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzUGFyc2U7XG4gIHdlZWtkYXlzUGFyc2Uod2Vla2RheU5hbWU/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlV2Vla1N0cmljdFBhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAvLyBmaXg6IGhlcmUgaXMgdGhlIGlzc3VlXG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c01pbihkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgcmVnZXggPSBgXiR7dGhpcy53ZWVrZGF5cyhkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMud2Vla2RheXNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpfWA7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNBcnJheTxSZWdFeHA+KHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlKVxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9taW5XZWVrZGF5c1BhcnNlKVxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX3dlZWtkYXlzUGFyc2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkZCcgJiYgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkJyAmJiB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvdG8ud2Vla2RheXNSZWdleCAgICAgICA9ICAgICAgICB3ZWVrZGF5c1JlZ2V4O1xuICB3ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0OiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIC8vIHByb3RvLndlZWtkYXlzU2hvcnRSZWdleCAgPSAgICAgICAgd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAvLyBwcm90by53ZWVrZGF5c01pblJlZ2V4ICAgID0gICAgICAgIHdlZWtkYXlzTWluUmVnZXg7XG5cblxuICB3ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgfVxuICB9XG5cbiAgd2Vla2RheXNNaW5SZWdleChpc1N0cmljdD86IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgfVxuICB9XG5cbiAgaXNQTShpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xuICB9XG5cbiAgbWVyaWRpZW0oaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyLCBpc0xvd2VyOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICB9XG5cbiAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICB9XG5cbiAgZm9ybWF0TG9uZ0RhdGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0ID8gdGhpcy5fbG9uZ0RhdGVGb3JtYXQgOiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQ7XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W1xuICAgICAga2V5XG4gICAgICBdID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb250aFN0cmljdFBhcnNlKG1vbnRoTmFtZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGxldCBpO1xuICAgIGxldCBpaTtcbiAgICBsZXQgbW9tO1xuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgIG1vbSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRocyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfVxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcbiAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgfVxuXG4gICAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcblxuICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICB9XG5cbiAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcbiAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gaWk7XG4gICAgfVxuICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcblxuICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZywgc3RyaWN0OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgaWk7XG4gICAgY29uc3QgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuXG4gICAgICBsZXQgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihkYXRlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMoZGF0ZSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXNQYXJzZSlcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlKVxuICAgICAgfHwgIWlzQXJyYXk8c3RyaW5nPih0aGlzLl9taW5XZWVrZGF5c1BhcnNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xuICAgIGNvbnN0IHNob3J0UGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGxvbmdQaWVjZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbWl4ZWRQaWVjZXM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGRhdGU7XG5cbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICBkYXRlID0gbmV3IERhdGUoMjAwMCwgaSk7XG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycpKTtcbiAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhkYXRlLCAnJykpO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhkYXRlLCAnJykpO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2xvbmdQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7c2hvcnRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlV2Vla2RheXNQYXJzZSgpIHtcbiAgICBjb25zdCBtaW5QaWVjZXMgPSBbXTtcbiAgICBjb25zdCBzaG9ydFBpZWNlcyA9IFtdO1xuICAgIGNvbnN0IGxvbmdQaWVjZXMgPSBbXTtcbiAgICBjb25zdCBtaXhlZFBpZWNlcyA9IFtdO1xuXG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAvLyBsZXQgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xuICAgICAgY29uc3QgbWlucCA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSk7XG4gICAgICBjb25zdCBzaG9ydHAgPSB0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSk7XG4gICAgICBjb25zdCBsb25ncCA9IHRoaXMud2Vla2RheXMoZGF0ZSk7XG4gICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcbiAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21peGVkUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7c2hvcnRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWluUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbXBMZW5SZXYoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gIHNhbWVEYXk6ICdbVG9kYXkgYXRdIExUJyxcbiAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXG4gIGxhc3REYXk6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gIHNhbWVFbHNlOiAnTCdcbn07XG4iLCJpbXBvcnQge1xuICBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCwgZGVmYXVsdE9yZGluYWwsXG4gIExvY2FsZURhdGFcbn0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZGVmYXVsdENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICBkb3k6IDYgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2k7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVsYXRpdmVUaW1lOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgZnV0dXJlIDogJ2luICVzJyxcbiAgcGFzdCAgIDogJyVzIGFnbycsXG4gIHMgIDogJ2EgZmV3IHNlY29uZHMnLFxuICBzcyA6ICclZCBzZWNvbmRzJyxcbiAgbSAgOiAnYSBtaW51dGUnLFxuICBtbSA6ICclZCBtaW51dGVzJyxcbiAgaCAgOiAnYW4gaG91cicsXG4gIGhoIDogJyVkIGhvdXJzJyxcbiAgZCAgOiAnYSBkYXknLFxuICBkZCA6ICclZCBkYXlzJyxcbiAgTSAgOiAnYSBtb250aCcsXG4gIE1NIDogJyVkIG1vbnRocycsXG4gIHkgIDogJ2EgeWVhcicsXG4gIHl5IDogJyVkIHllYXJzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGJhc2VDb25maWc6IExvY2FsZURhdGEgPSB7XG4gIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXG4gIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXG4gIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZVxufTtcbiIsIi8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXJyYXlzPFQ+KGFycmF5MTogVFtdLCBhcnJheTI6IFRbXSwgZG9udENvbnZlcnQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCk7XG4gIGNvbnN0IGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCk7XG4gIGxldCBkaWZmcyA9IDA7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKVxuICAgICAgfHwgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xuICAgICAgZGlmZnMrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgd2Vla09mWWVhciB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWVrKCkge1xuICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyLCBmYWxzZV0sICd3bycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldFdlZWsoZGF0ZSwgb3B0cy5sb2NhbGUpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDIsIGZhbHNlXSwgJ1dvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRJU09XZWVrKGRhdGUpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcbiAgYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuLy8gUFJJT1JJVElFU1xuXG4gIGFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ3cnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCd3dycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsndycsICd3dycsICdXJywgJ1dXJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2VlayAoaW5wdXQpIHtcbi8vICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4vLyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpKTogRGF0ZSB7XG4gIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIGxvY2FsZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSB3ZWVrKSAqIDcsICdkYXknKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBsb2NhbGUud2VlayhkYXRlLCBpc1VUQyk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09XZWVrIChpbnB1dCkge1xuLy8gICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2Vlaztcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IHdlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gd2VlaykgKiA3LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIDEsIDQsIGlzVVRDKS53ZWVrO1xufVxuXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBwYXJzZVR3b0RpZ2l0WWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBkYXlPZlllYXJGcm9tV2Vla3MsIHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldElTT1dlZWssIGdldFdlZWsgfSBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IHsgZ2V0SVNPRGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IHNldERhdGUsIHNldEZ1bGxZZWFyLCBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyRm4sIERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gRk9STUFUVElOR1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlZWtZZWFyKCkge1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ2dnJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAvLyByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xuICAgICAgcmV0dXJuIChnZXRXZWVrWWVhcihkYXRlLCBvcHRzLmxvY2FsZSkgJSAxMDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnR0cnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgLy8gcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbiAgICAgIHJldHVybiAoZ2V0SVNPV2Vla1llYXIoZGF0ZSkgJSAxMDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICApO1xuXG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgX2dldFdlZWtZZWFyRm9ybWF0Q2IpO1xuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgX2dldElTT1dlZWtZZWFyRm9ybWF0Q2IpO1xuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcbiAgYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrWWVhcicsIDEpO1xuXG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuICBhZGRSZWdleFRva2VuKCdnJywgbWF0Y2hTaWduZWQpO1xuICBhZGRSZWdleFRva2VuKCdHRycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2dnZ2cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICBhZGRSZWdleFRva2VuKCdnZ2dnZycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLFxuICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9KTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsIGdldHRlcjogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoLCBmYWxzZV0sIG51bGwsIGdldHRlcik7XG59XG5cbmZ1bmN0aW9uIF9nZXRXZWVrWWVhckZvcm1hdENiKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldElTT1dlZWtZZWFyKGRhdGUpLnRvU3RyaW5nKCk7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIgfCBEYXRlIHtcbiAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyKGRhdGUsXG4gICAgaW5wdXQsXG4gICAgLy8gdGhpcy53ZWVrKCksXG4gICAgZ2V0V2VlayhkYXRlLCBsb2NhbGUsIGlzVVRDKSxcbiAgICAvLyB0aGlzLndlZWtkYXkoKSxcbiAgICBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgbG9jYWxlLCBpc1VUQyksXG4gICAgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksXG4gICAgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCksXG4gICAgaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIGxvY2FsZS5maXJzdERheU9mV2VlaygpLCBsb2NhbGUuZmlyc3REYXlPZlllYXIoKSwgaXNVVEMpLnllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIgfCBEYXRlIHtcbiAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyKGRhdGUsIGlucHV0LCBnZXRJU09XZWVrKGRhdGUsIGlzVVRDKSwgZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIGlzVVRDKSwgMSwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCAxLCA0LCBpc1VUQykueWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbikge1xuICByZXR1cm4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCAxLCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtzSW5ZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKSk6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGxvY2FsZS5maXJzdERheU9mV2VlaygpLCBsb2NhbGUuZmlyc3REYXlPZlllYXIoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIHdlZWs6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIgfCBEYXRlIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBnZXRXZWVrWWVhcihkYXRlLCB2b2lkIDAsIGlzVVRDKTtcbiAgfVxuXG4gIGNvbnN0IHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgY29uc3QgX3dlZWsgPSB3ZWVrID4gd2Vla3NUYXJnZXQgPyB3ZWVrc1RhcmdldCA6IHdlZWs7XG5cbiAgcmV0dXJuIHNldFdlZWtBbGwoZGF0ZSwgaW5wdXQsIF93ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG59XG5cbmZ1bmN0aW9uIHNldFdlZWtBbGwoZGF0ZTogRGF0ZSwgd2Vla1llYXI6IG51bWJlciwgd2VlazogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IERhdGUge1xuICBjb25zdCBkYXlPZlllYXJEYXRhID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gIGNvbnN0IF9kYXRlID0gY3JlYXRlVVRDRGF0ZShkYXlPZlllYXJEYXRhLnllYXIsIDAsIGRheU9mWWVhckRhdGEuZGF5T2ZZZWFyKTtcbiAgc2V0RnVsbFllYXIoZGF0ZSwgZ2V0RnVsbFllYXIoX2RhdGUsIHRydWUpLCB0cnVlKTtcbiAgc2V0TW9udGgoZGF0ZSwgZ2V0TW9udGgoX2RhdGUsIHRydWUpLCB0cnVlKTtcbiAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIHRvZG86IGFkZCBzdXBwb3J0IGZvciB0aW1lem9uZXNcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lem9uZSgpIHtcbiAgLy8gRk9STUFUVElOR1xuICBhZGRGb3JtYXRUb2tlbigneicsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMuaXNVVEMgPyAnVVRDJyA6ICcnO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ3p6JywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbiAgICB9XG4gICk7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVBYmJyKGlzVVRDOiBib29sZWFuKSB7XG4gIHJldHVybiBpc1VUQyA/ICdVVEMnIDogJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lTmFtZShpc1VUQzogYm9vbGVhbikge1xuICByZXR1cm4gaXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgdW5peCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaFNpZ25lZCwgbWF0Y2hUaW1lc3RhbXAgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VufSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VGltZXN0YW1wKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdYJywgbnVsbCwgbnVsbCwgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVuaXgoZGF0ZSlcbiAgICAgIC50b1N0cmluZygxMCk7XG4gIH0pO1xuICBhZGRGb3JtYXRUb2tlbigneCcsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKVxuICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xuICBhZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuXG4gIGFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGdldFNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlY29uZCgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3NlY29uZCcsICdzJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdzZWNvbmQnLCAxNSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdzJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFBhcnNlVG9rZW4oWydzJywgJ3NzJ10sIFNFQ09ORCk7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFF1YXJ0ZXIoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ1EnLCBudWxsLCAnUW8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRRdWFydGVyKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdxdWFydGVyJywgJ1EnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuICBhZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmNlaWwoKGdldE1vbnRoKGRhdGUsIGlzVVRDKSArIDEpIC8gMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRRdWFydGVyKGRhdGU6IERhdGUsIHF1YXJ0ZXI6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIHJldHVybiBzZXRNb250aChkYXRlLCAocXVhcnRlciAtIDEpICogMyArIGdldE1vbnRoKGRhdGUsIGlzVVRDKSAlIDMsIGlzVVRDKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGxcbi8vICAgICA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKVxuLy8gICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcbi8vIH1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgbWF4LWxpbmUtbGVuZ3RoXG4vLyBGT1JNQVRUSU5HXG5cbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaE9mZnNldCwgbWF0Y2hTaG9ydE9mZnNldCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5cbmZ1bmN0aW9uIGFkZE9mZnNldEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgY29uZmlnKTogc3RyaW5nIHtcbiAgICBsZXQgb2Zmc2V0ID0gZ2V0VVRDT2Zmc2V0KGRhdGUsIHtfaXNVVEM6IGNvbmZpZy5pc1VUQywgX29mZnNldDogY29uZmlnLm9mZnNldH0pO1xuICAgIGxldCBzaWduID0gJysnO1xuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgc2lnbiA9ICctJztcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbiArIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgKyBzZXBhcmF0b3IgKyB6ZXJvRmlsbCh+fihvZmZzZXQpICUgNjAsIDIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPZmZzZXQoKSB7XG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaJywgJzonKTtcbiAgYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICBhZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcbiAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbi8vIEhFTFBFUlNcblxuLy8gdGltZXpvbmUgY2h1bmtlclxuLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4vLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cbmNvbnN0IGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXI6IFJlZ0V4cCwgc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtYXRjaGVzID0gKHN0ciB8fCAnJykubWF0Y2gobWF0Y2hlcik7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwYXJ0cyA9IGNodW5rLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAnMCcsICcwJ107XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApICogNjAgKyB0b0ludChwYXJ0c1syXSk7XG4gIGNvbnN0IF9taW4gPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuXG4gIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IF9taW47XG59XG5cbi8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0OiBEYXRlLCBkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcbiAgaWYgKCFjb25maWcuX2lzVVRDKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgcmVzID0gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0b2RvOiBpbnB1dC5fZCAtIHJlcy5fZCArICgocmVzLl9vZmZzZXQgfHwgMCkgLSAoaW5wdXQuX29mZnNldCB8fCAwKSkqNjAwMDBcbiAgY29uc3Qgb2Zmc2V0RGlmZiA9IChjb25maWcuX29mZnNldCB8fCAwKSAqIDYwMDAwO1xuICBjb25zdCBkaWZmID0gaW5wdXQudmFsdWVPZigpIC0gcmVzLnZhbHVlT2YoKSArIG9mZnNldERpZmY7XG4gIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgcmVzLnNldFRpbWUocmVzLnZhbHVlT2YoKSArIGRpZmYpO1xuICAvLyB0b2RvOiBhZGQgdGltZXpvbmUgaGFuZGxpbmdcbiAgLy8gaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgcmV0dXJuIC1NYXRoLnJvdW5kKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xufVxuXG4vLyBIT09LU1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbi8vIHRvZG86IGl0J3MgZnJvbSBtb21lbnQgdGltZXpvbmVzXG4vLyBob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4vLyB9O1xuXG4vLyBNT01FTlRTXG5cbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbi8vXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFVUQ09mZnNldChkYXRlOiBEYXRlLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBudW1iZXIge1xuICBjb25zdCBfb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcblxuICByZXR1cm4gY29uZmlnLl9pc1VUQyA/IF9vZmZzZXQgOiBnZXREYXRlT2Zmc2V0KGRhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VVRDT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuLCBrZWVwTWludXRlcz86IGJvb2xlYW4sIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xuICBjb25zdCBvZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xuICBsZXQgbG9jYWxBZGp1c3Q7XG4gIGxldCBfaW5wdXQgPSBpbnB1dDtcbiAgbGV0IF9kYXRlID0gZGF0ZTtcblxuICBpZiAoaXNTdHJpbmcoX2lucHV0KSkge1xuICAgIF9pbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgX2lucHV0KTtcbiAgICBpZiAoX2lucHV0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gX2RhdGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzTnVtYmVyKF9pbnB1dCkgJiYgTWF0aC5hYnMoX2lucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xuICAgIF9pbnB1dCA9IF9pbnB1dCAqIDYwO1xuICB9XG5cbiAgaWYgKCFjb25maWcuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQoX2RhdGUpO1xuICB9XG4gIGNvbmZpZy5fb2Zmc2V0ID0gX2lucHV0O1xuICBjb25maWcuX2lzVVRDID0gdHJ1ZTtcbiAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICBfZGF0ZSA9IGFkZChfZGF0ZSwgbG9jYWxBZGp1c3QsICdtaW51dGVzJyk7XG4gIH1cbiAgaWYgKG9mZnNldCAhPT0gX2lucHV0KSB7XG4gICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgX2RhdGUgPSBhZGQoX2RhdGUsIF9pbnB1dCAtIG9mZnNldCwgJ21pbnV0ZXMnLCBjb25maWcuX2lzVVRDKTtcbiAgICAgIC8vIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKF9pbnB1dCAtIG9mZnNldCwgJ20nKSwgMSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIC8vIHRvZG86IGFkZCB0aW1lem9uZSBoYW5kbGluZ1xuICAgICAgLy8gaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0Wm9uZShpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICB9XG5cbiAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gIH1cbn1cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyhkYXRlOiBEYXRlLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IERhdGUge1xuICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIGtlZXBMb2NhbFRpbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuXG4gIHJldHVybiAoZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgMCkpXG4gICAgfHwgZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgNSkpKTtcbn1cblxuLypleHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKSB7XG4gIGlmICh0aGlzLl9pc1VUQykge1xuICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn0qL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XG4gIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCBjb25maWcuX3R6bSwgZmFsc2UsIHRydWUsIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uc3QgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCBpbnB1dCk7XG4gICAgaWYgKHRab25lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgdFpvbmUsIGZhbHNlLCBmYWxzZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIHRydWUsIGZhbHNlLCBjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldChkYXRlOiBEYXRlLCBpbnB1dD86IERhdGUpIHtcbiAgY29uc3QgX2lucHV0ID0gaW5wdXQgPyBnZXRVVENPZmZzZXQoaW5wdXQsIHsgX2lzVVRDOiBmYWxzZSB9KSA6IDA7XG5cbiAgcmV0dXJuIChnZXRVVENPZmZzZXQoZGF0ZSkgLSBfaW5wdXQpICUgNjAgPT09IDA7XG59XG5cblxuLy8gREVQUkVDQVRFRFxuLypleHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xuICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICB9XG5cbiAgY29uc3QgYyA9IHt9O1xuXG4gIGNvcHlDb25maWcoYywgdGhpcyk7XG4gIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gIGlmIChjLl9hKSB7XG4gICAgY29uc3Qgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn0qL1xuXG4vLyBpbiBLaHJvbm9zXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsKCkge1xuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGMoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xufSovXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0TWludXRlcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNSU5VVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWludXRlKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnbWludXRlJywgJ20nKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ21pbnV0ZScsIDE0KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ20nLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2Vcbi8vIEZPUk1BVFRJTkdcblxuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSwgbWF0Y2gxdG8zLCBtYXRjaDIsIG1hdGNoMywgbWF0Y2hVbnNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IE1JTExJU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0TWlsbGlzZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1pbGxpc2Vjb25kKCkge1xuICBhZGRGb3JtYXRUb2tlbignUycsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh+fihnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgLyAxMDApKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1MnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh+fihnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgLyAxMCkpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1MnLCAzLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTUycsIDQsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTJywgNSwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTUycsIDYsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTUycsIDcsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1NTJywgOCwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDAwKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1NTUycsIDksIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwMDApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignUycsIG1hdGNoMXRvMywgbWF0Y2gxKTtcbiAgYWRkUmVnZXhUb2tlbignU1MnLCBtYXRjaDF0bzMsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxuICBsZXQgdG9rZW47XG4gIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludChwYXJzZUZsb2F0KGAwLiR7aW5wdXR9YCkgKiAxMDAwKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XG4gIH1cbi8vIE1PTUVOVFNcbn1cbiIsImltcG9ydCB7IGdldEhvdXJzLCBnZXRNaW51dGVzLCBnZXRTZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyLCBtYXRjaDN0bzQsIG1hdGNoNXRvNiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBIT1VSLCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIb3VyKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGZ1bmN0aW9uIGhGb3JtYXQoZGF0ZTogRGF0ZSwgaXNVVEM6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRIb3VycyhkYXRlLCBpc1VUQykgJSAxMiB8fCAxMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtGb3JtYXQoZGF0ZTogRGF0ZSwgaXNVVEM6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRIb3VycyhkYXRlLCBpc1VUQykgfHwgMjQ7XG4gIH1cblxuICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4ga0Zvcm1hdChkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignaG1tJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgICAgcmV0dXJuIGAke19ofSR7X21tfWA7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdobW1zcycsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgY29uc3QgX2ggPSBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG4gICAgICBjb25zdCBfc3MgPSB6ZXJvRmlsbChnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgICAgcmV0dXJuIGAke19ofSR7X21tfSR7X3NzfWA7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdIbW0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IF9IID0gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgICAgcmV0dXJuIGAke19IfSR7X21tfWA7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdIbW1zcycsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuICAgICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICAgIHJldHVybiBgJHtfSH0ke19tbX0ke19zc31gO1xuICAgIH1cbiAgKTtcblxuICBmdW5jdGlvbiBtZXJpZGllbSh0b2tlbjogc3RyaW5nLCBsb3dlcmNhc2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgbnVsbCwgbnVsbCxcbiAgICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1lcmlkaWVtKGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpLCBnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCBsb3dlcmNhc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBtZXJpZGllbSgnYScsIHRydWUpO1xuICBtZXJpZGllbSgnQScsIGZhbHNlKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnaG91cicsICdoJyk7XG5cbi8vIFBSSU9SSVRZXG4gIGFkZFVuaXRQcmlvcml0eSgnaG91cicsIDEzKTtcblxuXG4vLyBQQVJTSU5HXG5cbiAgZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG4gIH1cblxuICBhZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0EnLCBtYXRjaE1lcmlkaWVtKTtcbiAgYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdrJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdraycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuICBhZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuICBhZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuICBhZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbiAgYWRkUGFyc2VUb2tlbihcbiAgICBbJ2snLCAna2snXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgY29uc3Qga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xuICAgICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG4gIGFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgY29uc3QgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uc3QgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxufVxuIiwiLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xuaW1wb3J0IHsgTG9jYWxlLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vbG9jYWxlLmRlZmF1bHRzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY29tcGFyZUFycmF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbXBhcmUtYXJyYXlzJztcblxuaW1wb3J0IHsgaW5pdFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7IGluaXRXZWVrWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWsteWVhcic7XG5pbXBvcnQgeyBpbml0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgaW5pdFRpbWV6b25lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xuaW1wb3J0IHsgaW5pdFRpbWVzdGFtcCB9IGZyb20gJy4uL3VuaXRzL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBpbml0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcbmltcG9ydCB7IGluaXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XG5pbXBvcnQgeyBpbml0T2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGluaXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xuaW1wb3J0IHsgaW5pdE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xuaW1wb3J0IHsgaW5pdE1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaW5pdEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcbmltcG9ydCB7IGluaXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XG5pbXBvcnQgeyBpbml0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgaW5pdERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xuXG5jb25zdCBsb2NhbGVzOiB7IFtrZXk6IHN0cmluZ106IExvY2FsZSB9ID0ge307XG5jb25zdCBsb2NhbGVGYW1pbGllczogeyBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBjb25maWc6IExvY2FsZURhdGF9W10gfSA9IHt9O1xubGV0IGdsb2JhbExvY2FsZTogTG9jYWxlO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsXG4vLyBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG5mdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXM6IHN0cmluZ1tdKTogTG9jYWxlIHtcbiAgbGV0IG5leHQ7XG4gIGxldCBsb2NhbGU7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgIGxldCBqID0gc3BsaXQubGVuZ3RoO1xuICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICB9XG4gICAgICBpZiAobmV4dCAmJiBuZXh0Lmxlbmd0aCA+PSBqICYmIGNvbXBhcmVBcnJheXMoc3BsaXQsIG5leHQsIHRydWUpID49IGogLSAxKSB7XG4gICAgICAgIC8vIHRoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgai0tO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWc6IExvY2FsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnOiBMb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHJlczogTG9jYWxlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudENvbmZpZyk7XG5cbiAgZm9yIChjb25zdCBjaGlsZFByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AoY2hpbGRDb25maWcsIGNoaWxkUHJvcCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pKSB7XG4gICAgICByZXNbY2hpbGRQcm9wXSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgcGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgY2hpbGRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1tjaGlsZFByb3BdICE9IG51bGwpIHtcbiAgICAgIHJlc1tjaGlsZFByb3BdID0gY2hpbGRDb25maWdbY2hpbGRQcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHJlc1tjaGlsZFByb3BdO1xuICAgIH1cbiAgfVxuICBsZXQgcGFyZW50UHJvcDtcbiAgZm9yIChwYXJlbnRQcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgIGlmIChcbiAgICAgIGhhc093blByb3AocGFyZW50Q29uZmlnLCBwYXJlbnRQcm9wKSAmJlxuICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSlcbiAgICApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lOiBzdHJpbmcpOiBMb2NhbGUge1xuICAvLyBubyB3YXkhXG4gIC8qIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICB0cnkge1xuICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICB2YXIgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgIH0gY2F0Y2ggKGUpIHt9XG4gICB9Ki9cbiAgaWYgKCFsb2NhbGVzW25hbWVdKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc29sZS5lcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmcge1xuICBsZXQgZGF0YTogTG9jYWxlO1xuXG4gIGlmIChrZXkpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSkge1xuICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdsb2JhbExvY2FsZSAmJiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgIGdsb2JhbExvY2FsZSA9IGdldExvY2FsZSgnZW4nKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICB9XG4gICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHsgbmFtZSwgY29uZmlnIH0pO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgbGV0IF9jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKF9jb25maWcgIT0gbnVsbCkge1xuICAgIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgIC8vIE1FUkdFXG4gICAgY29uc3QgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgX2NvbmZpZyk7XG4gICAgY29uc3QgbG9jYWxlID0gbmV3IExvY2FsZShfY29uZmlnKTtcbiAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10pOiBMb2NhbGUge1xuICBzZXREZWZhdWx0TG9jYWxlKCk7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICB9XG4gIC8vIGxldCBsb2NhbGU7XG4gIGNvbnN0IF9rZXkgPSBpc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcblxuICByZXR1cm4gY2hvb3NlTG9jYWxlKF9rZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoKTogdm9pZCB7XG4gIGlmIChsb2NhbGVzW2BlbmBdKSB7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IGIgPSBudW0gJSAxMDtcbiAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgPyAndGgnXG4gICAgICAgICAgOiBiID09PSAxID8gJ3N0JyA6IGIgPT09IDIgPyAnbmQnIDogYiA9PT0gMyA/ICdyZCcgOiAndGgnO1xuXG4gICAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICAgIH1cbiAgfSk7XG5cbiAgaW5pdFdlZWsoKTtcbiAgaW5pdFdlZWtZZWFyKCk7XG4gIGluaXRZZWFyKCk7XG4gIGluaXRUaW1lem9uZSgpO1xuICBpbml0VGltZXN0YW1wKCk7XG4gIGluaXRTZWNvbmQoKTtcbiAgaW5pdFF1YXJ0ZXIoKTtcbiAgaW5pdE9mZnNldCgpO1xuICBpbml0TW9udGgoKTtcbiAgaW5pdE1pbnV0ZSgpO1xuICBpbml0TWlsbGlzZWNvbmQoKTtcbiAgaW5pdEhvdXIoKTtcbiAgaW5pdERheU9mWWVhcigpO1xuICBpbml0RGF5T2ZXZWVrKCk7XG4gIGluaXREYXlPZk1vbnRoKCk7XG59XG4iLCJpbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG9yZGVyaW5nOiAoa2V5b2YgRGF0ZU9iamVjdClbXSA9IFsneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXTtcbmNvbnN0IG9yZGVyaW5nSGFzaCA9IG9yZGVyaW5nLnJlZHVjZSgobWVtOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgb3JkZXIpID0+IHtcbiAgbWVtW29yZGVyXSA9IHRydWU7XG5cbiAgcmV0dXJuIG1lbTtcbn0sIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0Pik6IGJvb2xlYW4ge1xuICBjb25zdCBkdXJhdGlvbktleXMgPSBPYmplY3Qua2V5cyhkdXJhdGlvbik7XG4gIGlmIChkdXJhdGlvbktleXNcbiAgICAgIC5zb21lKChrZXk6IGtleW9mIERhdGVPYmplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChrZXkgaW4gb3JkZXJpbmdIYXNoKVxuICAgICAgICAgICYmIGR1cmF0aW9uW2tleV0gPT09IG51bGxcbiAgICAgICAgICB8fCBpc05hTihkdXJhdGlvbltrZXldKTtcbiAgICAgIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGZvciAobGV0IGtleSBpbiBkdXJhdGlvbikge1xuICAvLyAgIGlmICghKGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiYgKGR1cmF0aW9uW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4oZHVyYXRpb25ba2V5XSkpKSkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGxldCB1bml0SGFzRGVjaW1hbCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSkge1xuICAgICAgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcbiAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dICE9PSB0b0ludChkdXJhdGlvbltvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XG4vLyAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKCk6IER1cmF0aW9uIHtcbi8vICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG4vLyB9XG4iLCJleHBvcnQgZnVuY3Rpb24gYWJzQ2VpbCAobnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguZmxvb3IobnVtYmVyKSA6IE1hdGguY2VpbChudW1iZXIpO1xufVxuIiwiaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgYWJzQ2VpbCB9IGZyb20gJy4uL3V0aWxzL2Ficy1jZWlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShkdXI6IER1cmF0aW9uKTogRHVyYXRpb24ge1xuICBsZXQgbWlsbGlzZWNvbmRzID0gZHVyLl9taWxsaXNlY29uZHM7XG4gIGxldCBkYXlzID0gZHVyLl9kYXlzO1xuICBsZXQgbW9udGhzID0gZHVyLl9tb250aHM7XG4gIGNvbnN0IGRhdGEgPSBkdXIuX2RhdGE7XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxuICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgaWYgKCEoKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xuICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICBkYXlzID0gMDtcbiAgICBtb250aHMgPSAwO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxuICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcblxuICBjb25zdCBzZWNvbmRzID0gYWJzRmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gIGRhdGEuc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICBjb25zdCBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgZGF0YS5taW51dGVzID0gbWludXRlcyAlIDYwO1xuXG4gIGNvbnN0IGhvdXJzID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgZGF0YS5ob3VycyA9IGhvdXJzICUgMjQ7XG5cbiAgZGF5cyArPSBhYnNGbG9vcihob3VycyAvIDI0KTtcblxuICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXG4gIGNvbnN0IG1vbnRoc0Zyb21EYXlzID0gYWJzRmxvb3IoZGF5c1RvTW9udGhzKGRheXMpKTtcbiAgbW9udGhzICs9IG1vbnRoc0Zyb21EYXlzO1xuICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XG5cbiAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICBjb25zdCB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgbW9udGhzICU9IDEyO1xuXG4gIGRhdGEuZGF5ID0gZGF5cztcbiAgZGF0YS5tb250aCA9IG1vbnRocztcbiAgZGF0YS55ZWFyID0geWVhcnM7XG5cbiAgcmV0dXJuIGR1cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNUb01vbnRocyhkYXk6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gIHJldHVybiBkYXkgKiA0ODAwIC8gMTQ2MDk3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzVG9EYXlzKG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcbiAgcmV0dXJuIG1vbnRoICogMTQ2MDk3IC8gNDgwMDtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmxldCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCB0aHJlc2hvbGRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICBzczogNDQsICAgICAgICAgLy8gYSBmZXcgc2Vjb25kcyB0byBzZWNvbmRzXG4gIHM6IDQ1LCAgICAgICAgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gIG06IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxuICBoOiAyMiwgICAgICAgICAvLyBob3VycyB0byBkYXlcbiAgZDogMjYsICAgICAgICAgLy8gZGF5cyB0byBtb250aFxuICBNOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxufTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgaXNGdXR1cmU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bSB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKHBvc05lZ0R1cmF0aW9uOiBEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xuICBjb25zdCBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xuICBjb25zdCBtaW51dGVzID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gIGNvbnN0IGhvdXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSk7XG4gIGNvbnN0IGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgY29uc3QgbW9udGhzID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gIGNvbnN0IHllYXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSk7XG5cbiAgY29uc3QgYTogW3N0cmluZ10gfCBbc3RyaW5nLCBudW1iZXJdID1cbiAgICBzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10gfHxcbiAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxuICAgIG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSB8fFxuICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgaG91cnMgPD0gMSAmJiBbJ2gnXSB8fFxuICAgIGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gfHxcbiAgICBkYXlzIDw9IDEgJiYgWydkJ10gfHxcbiAgICBkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxuICAgIG1vbnRocyA8PSAxICYmIFsnTSddIHx8XG4gICAgbW9udGhzIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdIHx8XG4gICAgeWVhcnMgPD0gMSAmJiBbJ3knXSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gIGNvbnN0IGI6IFtzdHJpbmcsIG51bWJlciB8IHN0cmluZywgYm9vbGVhbiwgYm9vbGVhbiwgTG9jYWxlXSA9XG4gICAgW2FbMF0sIGFbMV0sIHdpdGhvdXRTdWZmaXgsICtwb3NOZWdEdXJhdGlvbiA+IDAsIGxvY2FsZV07XG4gIC8vIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAvLyBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgLy8gYVs0XSA9IGxvY2FsZTtcblxuICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYik7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uOiBhbnkpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xuICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJvdW5kO1xuICB9XG4gIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gIH1cbiAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xuICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplKHdpdGhTdWZmaXgpIHtcbi8vICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuLy8gICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuLy8gICB9XG4vL1xuLy8gICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbi8vICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcbi8vXG4vLyAgIGlmICh3aXRoU3VmZml4KSB7XG4vLyAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuLy8gfVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc0R1cmF0aW9uVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGJ1YmJsZSwgZGF5c1RvTW9udGhzLCBtb250aHNUb0RheXMgfSBmcm9tICcuL2J1YmJsZSc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgcmVsYXRpdmVUaW1lIH0gZnJvbSAnLi9odW1hbml6ZSc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uIHtcbiAgX21pbGxpc2Vjb25kczogbnVtYmVyO1xuICBfZGF5czogbnVtYmVyO1xuICBfbW9udGhzOiBudW1iZXI7XG4gIF9kYXRhOiBQYXJ0aWFsPERhdGVPYmplY3Q+ID0ge307XG4gIF9sb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpO1xuICBfaXNWYWxpZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0PiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnICYmIGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZSgpO1xuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKTtcbiAgICBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBkdXJhdGlvbjtcbiAgICBjb25zdCB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDA7XG4gICAgY29uc3QgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwO1xuICAgIGNvbnN0IG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwO1xuICAgIGNvbnN0IHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMDtcbiAgICBjb25zdCBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwO1xuICAgIGNvbnN0IGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXJzIHx8IDA7XG4gICAgY29uc3QgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGVzIHx8IDA7XG4gICAgY29uc3Qgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmRzIHx8IDA7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kcyB8fCAwO1xuXG4gICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xuXG4gICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcbiAgICAgIHNlY29uZHMgKiAxMDAwICtcbiAgICAgIG1pbnV0ZXMgKiA2MCAqIDEwMDAgKyAvLyAxMDAwICogNjBcbiAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vIHVzaW5nIDEwMDAgKiA2MCAqIDYwXG4gICAgLy8gaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xuICAgICAgd2Vla3MgKiA3O1xuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAvLyBpdCBzZXBhcmF0ZWx5LlxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xuICAgICAgcXVhcnRlcnMgKiAzICtcbiAgICAgIHllYXJzICogMTI7XG5cbiAgICAvLyB0aGlzLl9kYXRhID0ge307XG5cbiAgICAvLyB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgIC8vIHRoaXMuX2J1YmJsZSgpO1xuICAgIHJldHVybiBidWJibGUodGhpcyk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuICB9XG5cbiAgaHVtYW5pemUod2l0aFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihgVE9ETzogaW1wbGVtZW50YCk7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgIGlmICh3aXRoU3VmZml4KSB7XG4gICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgfVxuXG4gIGxvY2FsZURhdGEoKTogTG9jYWxlIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgbG9jYWxlKCk6IHN0cmluZztcbiAgbG9jYWxlKGxvY2FsZUtleTogc3RyaW5nKTogRHVyYXRpb247XG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcpOiBEdXJhdGlvbiB8IHN0cmluZyB7XG4gICAgaWYgKCFsb2NhbGVLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZUtleSkgfHwgdGhpcy5fbG9jYWxlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIGFicygpOiBEdXJhdGlvbiB7XG4gICAgY29uc3QgbWF0aEFicyA9IE1hdGguYWJzO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG5cbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgdGhpcy5fZGF5cyA9IG1hdGhBYnModGhpcy5fZGF5cyk7XG4gICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICBkYXRhLnNlY29uZHMgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgIGRhdGEuaG91cnMgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgIGRhdGEubW9udGggPSBtYXRoQWJzKGRhdGEubW9udGgpO1xuICAgIGRhdGEueWVhciA9IG1hdGhBYnMoZGF0YS55ZWFyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXMoX3VuaXRzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIGxldCBkYXlzO1xuICAgIGxldCBtb250aHM7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgY29uc3QgdW5pdHMgPSBub3JtYWxpemVVbml0cyhfdW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG5cbiAgICAgIHJldHVybiB1bml0cyA9PT0gJ21vbnRoJyA/IG1vbnRocyA6IG1vbnRocyAvIDEyO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgIGNhc2UgJ3dlZWsnICAgOlxuICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICBjYXNlICdkYXknICAgIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgIGNhc2UgJ2hvdXJzJyAgIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICBjYXNlICdtaW51dGVzJyA6XG4gICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgIGNhc2UgJ3NlY29uZHMnIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRheXMgKiA4NjRlNSkgKyBtaWxsaXNlY29uZHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdW5pdCAke3VuaXRzfWApO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlT2YgKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmo6IGFueSk6IG9iaiBpcyBEdXJhdGlvbiB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBib29sZWFuIHtcbiAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgY29uc3QgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKTtcbiAgICBjb25zdCBwYXJzZWRQYXJ0cyA9IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaTogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gaSAhPSBudWxsO1xuICAgIH0pO1xuICAgIGxldCBpc05vd1ZhbGlkID0gIWlzTmFOKGNvbmZpZy5fZCAmJiBjb25maWcuX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxuICAgICAgIWZsYWdzLndlZWtkYXlNaXNtYXRjaCAmJlxuICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcbiAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcbiAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG5cbiAgICBpZiAoY29uZmlnLl9zdHJpY3QpIHtcbiAgICAgIGlzTm93VmFsaWQgPSBpc05vd1ZhbGlkICYmXG4gICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4oY29uZmlnKSkge1xuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5faXNWYWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgZmxhZ3M/OiB7IG51bGxJbnB1dDogYm9vbGVhbiB9KTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICBPYmplY3QuYXNzaWduKGdldFBhcnNpbmdGbGFncyhjb25maWcpLCBmbGFncyB8fCB7IHVzZXJJbnZhbGlkYXRlZDogdHJ1ZSB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0ludmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBtYXJrSW52YWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuLy8gaXNvIDg2MDEgcmVnZXhcbi8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBiYXNpY0lzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcblxuY29uc3QgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LztcblxuY29uc3QgaXNvRGF0ZXM6IFtzdHJpbmcsIFJlZ0V4cCwgYm9vbGVhbl1bXSA9IFtcbiAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkLywgdHJ1ZV0sXG4gIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC8sIHRydWVdLFxuICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvLCB0cnVlXSxcbiAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vLCB0cnVlXSxcbiAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS8sIHRydWVdLFxuICBbJ1lZWVlNTUREJywgL1xcZHs4fS8sIHRydWVdLFxuICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXG4gIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9LywgdHJ1ZV0sXG4gIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gIFsnWVlZWURERCcsIC9cXGR7N30vLCB0cnVlXVxuXTtcblxuLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xuY29uc3QgaXNvVGltZXM6IFtzdHJpbmcsIFJlZ0V4cF1bXSA9IFtcbiAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICBbJ0hIJywgL1xcZFxcZC9dXG5dO1xuXG5jb25zdCBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pO1xuXG5jb25zdCBvYnNPZmZzZXRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICBVVDogMCxcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MFxufTtcblxuLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLztcblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXRcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmICghaXNTdHJpbmcoY29uZmlnLl9pKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgY29uc3QgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoaW5wdXQpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhpbnB1dCk7XG5cblxuICBsZXQgYWxsb3dUaW1lO1xuICBsZXQgZGF0ZUZvcm1hdDtcbiAgbGV0IHRpbWVGb3JtYXQ7XG4gIGxldCB0ekZvcm1hdDtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcbiAgbGV0IGk7XG4gIGxldCBsO1xuICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XG4gICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgaWYgKG1hdGNoWzNdKSB7XG4gICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICB9XG4gIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGlmIChtYXRjaFs0XSkge1xuICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICB9XG5cbiAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XG5cbiAgcmV0dXJuIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKHllYXJTdHI6IHN0cmluZywgbW9udGhTdHI6IHN0cmluZywgZGF5U3RyOiBzdHJpbmcsIGhvdXJTdHI6IHN0cmluZywgbWludXRlU3RyOiBzdHJpbmcsIHNlY29uZFN0cjogc3RyaW5nKTogRGF0ZUFycmF5IHtcbiAgY29uc3QgcmVzdWx0ID0gW1xuICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxuICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcbiAgICBwYXJzZUludChkYXlTdHIsIDEwKSxcbiAgICBwYXJzZUludChob3VyU3RyLCAxMCksXG4gICAgcGFyc2VJbnQobWludXRlU3RyLCAxMClcbiAgXTtcblxuICBpZiAoc2Vjb25kU3RyKSB7XG4gICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcblxuICByZXR1cm4geWVhciA8PSA0OSA/IHllYXIgKyAyMDAwIDogeWVhcjtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csICcgJylcbiAgICAucmVwbGFjZSgvKFxcc1xccyspL2csICcgJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1dlZWtkYXkod2Vla2RheVN0cjogc3RyaW5nLCBwYXJzZWRJbnB1dDogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogYm9vbGVhbiB7XG4gIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW50ZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgIGNvbnN0IHdlZWtkYXlQcm92aWRlZCA9IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cik7XG4gICAgY29uc3Qgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKHBhcnNlZElucHV0WzBdLCBwYXJzZWRJbnB1dFsxXSwgcGFyc2VkSW5wdXRbMl0pLmdldERheSgpO1xuICAgIGlmICh3ZWVrZGF5UHJvdmlkZWQgIT09IHdlZWtkYXlBY3R1YWwpIHtcbiAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0OiBzdHJpbmcsIG1pbGl0YXJ5T2Zmc2V0OiBzdHJpbmcsIG51bU9mZnNldDogc3RyaW5nKSB7XG4gIGlmIChvYnNPZmZzZXQpIHtcbiAgICByZXR1cm4gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XG4gICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKTtcbiAgICBjb25zdCBtID0gaG0gJSAxMDA7XG4gICAgY29uc3QgaCA9IChobSAtIG0pIC8gMTAwO1xuXG4gICAgcmV0dXJuIGggKiA2MCArIG07XG4gIH1cbn1cblxuLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmICghaXNTdHJpbmcoY29uZmlnLl9pKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdCBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG1hcmtJbnZhbGlkKGNvbmZpZyk7XG4gIH1cblxuICBjb25zdCBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MobWF0Y2hbNF0sIG1hdGNoWzNdLCBtYXRjaFsyXSwgbWF0Y2hbNV0sIG1hdGNoWzZdLCBtYXRjaFs3XSk7XG4gIGlmICghY2hlY2tXZWVrZGF5KG1hdGNoWzFdLCBwYXJzZWRBcnJheSwgY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25maWcuX2EgPSBwYXJzZWRBcnJheTtcbiAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xuXG4gIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcbiAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcblxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5yZmMyODIyID0gdHJ1ZTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdCBvciBmYWxsYmFja1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuXG4gIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIHRvZG86IHVwZGF0ZSBsb2dpYyBwcm9jZXNzaW5nXG4gIC8vIGlzSVNPIC0+IGNvbmZpZ0Zyb21JU09cbiAgLy8gaXNSRkMgLT4gY29uZmlnRnJvbVJGQ1xuXG4gIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xuICAvLyBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xufVxuXG4vLyBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcbi8vICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuLy8gICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuLy8gICAgICdkaXNjb3VyYWdlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGFuIHVwY29taW5nIG1ham9yIHJlbGVhc2UuIFBsZWFzZSByZWZlciB0byAnICtcbi8vICAgICAnaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXG4vLyAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xuLy8gICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuLy8gICAgIH1cbi8vICk7XG4iLCIvLyBtb21lbnQuanNcbi8vIHZlcnNpb24gOiAyLjE4LjFcbi8vIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vIGxpY2Vuc2UgOiBNSVRcbi8vIG1vbWVudGpzLmNvbVxuXG5pbXBvcnQgJy4vdW5pdHMvaW5kZXgnO1xuaW1wb3J0IHsgZm9ybWF0RnVuY3Rpb25zLCBtYWtlRm9ybWF0RnVuY3Rpb24gfSBmcm9tICcuL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQgfSBmcm9tICcuL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZywgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUgfHwgJ2VuJyk7XG4gIGlmICghX2xvY2FsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBMb2NhbGUgXCIke2xvY2FsZX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdCB8fCAoaXNVVEMgPyAgJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nIDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gZm9ybWF0TW9tZW50KGRhdGUsIF9mb3JtYXQsIF9sb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xuXG4gIGlmICghb3V0cHV0KSB7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBfbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KGRhdGU6IERhdGUsIF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlLmludmFsaWREYXRlO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KF9mb3JtYXQsIGxvY2FsZSk7XG4gIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKGRhdGUsIGxvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQgPSBfZm9ybWF0O1xuICBsZXQgaSA9IDU7XG4gIGNvbnN0IGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbiAgY29uc3QgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zID0gKGlucHV0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdExvbmdEYXRlKGlucHV0KSB8fCBpbnB1dDtcbiAgfTtcblxuICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIGkgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQ7XG59XG4iLCIvLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHM8VD4oYT86IFQsIGI/OiBULCBjPzogVCk6IFQge1xuICBpZiAoYSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaWYgKGIgIT0gbnVsbCkge1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgcmV0dXJuIGM7XG59XG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBNT05USCwgU0VDT05ELCBZRUFSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGRheU9mWWVhckZyb21XZWVrcywgd2Vla09mWWVhciwgd2Vla3NJblllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vdXRpbHMvZGVmYXVsdHMnO1xuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlQXJyYXkge1xuICBjb25zdCBub3dWYWx1ZSA9IG5ldyBEYXRlKCk7XG5cbiAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRVVENNb250aCgpLCBub3dWYWx1ZS5nZXRVVENEYXRlKCldO1xuICB9XG5cbiAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbi8vIHRoZSBhcnJheSBzaG91bGQgbWlycm9yIHRoZSBwYXJhbWV0ZXJzIGJlbG93XG4vLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbi8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBpbnB1dCA9IFtdO1xuICBsZXQgaTtcbiAgbGV0IGRhdGU7XG4gIGxldCBjdXJyZW50RGF0ZTtcbiAgbGV0IGV4cGVjdGVkV2Vla2RheTtcbiAgbGV0IHllYXJUb1VzZTtcblxuICBpZiAoY29uZmlnLl9kKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gIC8vIGNvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gIH1cblxuICAvLyBpZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gIGlmIChjb25maWcuX2RheU9mWWVhciAhPSBudWxsKSB7XG4gICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHwgY29uZmlnLl9kYXlPZlllYXIgPT09IDApIHtcbiAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgfVxuXG4gICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpKTtcbiAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xuICB9XG5cbiAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSAoY29uZmlnLl9hW2ldID09IG51bGwpID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XG4gIH1cblxuICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gIGlmIChjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxuICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDApIHtcbiAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XG4gIH1cblxuICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xuICBleHBlY3RlZFdlZWtkYXkgPSBjb25maWcuX3VzZVVUQyA/IGNvbmZpZy5fZC5nZXRVVENEYXkoKSA6IGNvbmZpZy5fZC5nZXREYXkoKTtcblxuICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgfVxuXG4gIGlmIChjb25maWcuX25leHREYXkpIHtcbiAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICBpZiAoY29uZmlnLl93ICYmIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheSkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xuXG4gIHcgPSBjb25maWcuX3c7XG4gIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICBkb3cgPSAxO1xuICAgIGRveSA9IDQ7XG5cbiAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcbiAgICAvLyBjcmVhdGUgbm93KS5cbiAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuR0csIGNvbmZpZy5fYVtZRUFSXSwgd2Vla09mWWVhcihuZXcgRGF0ZSgpLCAxLCA0KS55ZWFyKTtcbiAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICBjb25zdCBjdXJXZWVrID0gd2Vla09mWWVhcihuZXcgRGF0ZSgpLCBkb3csIGRveSk7XG5cbiAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB3ZWVrLlxuICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcbiAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcbiAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICB3ZWVrZGF5ID0gZG93O1xuICAgIH1cbiAgfVxuICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIE1PTlRILCBTRUNPTkQsIFdFRUssIFdFRUtEQVksIFlFQVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja092ZXJmbG93KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCBvdmVyZmxvdztcbiAgY29uc3QgYSA9IGNvbmZpZy5fYTtcblxuICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5vdmVyZmxvdyA9PT0gLTIpIHtcbiAgICAvLyB0b2RvOiBmaXggdGhpcyBzaCp0XG4gICAgb3ZlcmZsb3cgPVxuICAgICAgYVtNT05USF0gPCAwIHx8IGFbTU9OVEhdID4gMTEgPyBNT05USCA6XG4gICAgICAgIGFbREFURV0gPCAxIHx8IGFbREFURV0gPiBkYXlzSW5Nb250aChhW1lFQVJdLCBhW01PTlRIXSkgPyBEQVRFIDpcbiAgICAgICAgICBhW0hPVVJdIDwgMCB8fCBhW0hPVVJdID4gMjQgfHwgKGFbSE9VUl0gPT09IDI0ICYmIChhW01JTlVURV0gIT09IDAgfHwgYVtTRUNPTkRdICE9PSAwIHx8IGFbTUlMTElTRUNPTkRdICE9PSAwKSkgPyBIT1VSIDpcbiAgICAgICAgICAgIGFbTUlOVVRFXSA8IDAgfHwgYVtNSU5VVEVdID4gNTkgPyBNSU5VVEUgOlxuICAgICAgICAgICAgICBhW1NFQ09ORF0gPCAwIHx8IGFbU0VDT05EXSA+IDU5ID8gU0VDT05EIDpcbiAgICAgICAgICAgICAgICBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XG4gICAgICAgICAgICAgICAgICAtMTtcblxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XG4gICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgfVxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgIG92ZXJmbG93ID0gV0VFSztcbiAgICB9XG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XG4gICAgfVxuXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21JU08sIGNvbmZpZ0Zyb21SRkMyODIyIH0gZnJvbSAnLi9mcm9tLXN0cmluZyc7XG5pbXBvcnQgeyBleHBhbmRGb3JtYXQgfSBmcm9tICcuLi9mb3JtYXQnO1xuaW1wb3J0IHsgZm9ybWF0dGluZ1Rva2VucywgZm9ybWF0VG9rZW5GdW5jdGlvbnMgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGlzQXJyYXksIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0UGFyc2VSZWdleEZvclRva2VuIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBIT1VSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgY2hlY2tPdmVyZmxvdyB9IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbi8vIGhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5leHBvcnQgY29uc3QgSVNPXzg2MDEgPSAnSVNPXzg2MDEnO1xuXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgUkZDIDI4MjIgZm9ybVxuLy8gaG9va3MuUkZDXzI4MjIgPSBmdW5jdGlvbiAoKSB7fTtcbmV4cG9ydCBjb25zdCBSRkNfMjgyMiA9ICdSRkNfMjgyMic7XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gIGlmIChjb25maWcuX2YgPT09IElTT184NjAxKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgfVxuICBpZiAoY29uZmlnLl9mID09PSBSRkNfMjgyMikge1xuICAgIHJldHVybiBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICB9XG4gIGNvbmZpZy5fYSA9IFtdO1xuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgaWYgKGlzQXJyYXkoY29uZmlnLl9mKSB8fCAoIWNvbmZpZy5faSAmJiBjb25maWcuX2kgIT09IDApKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIFRoaXMgYXJyYXkgaXMgdXNlZCB0byBtYWtlIGEgRGF0ZSwgZWl0aGVyIHdpdGggYG5ldyBEYXRlYCBvciBgRGF0ZS5VVENgXG5cbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pLnRvU3RyaW5nKCk7XG4gIGxldCB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMDtcbiAgY29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IHRva2VucyA9IGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcblxuICBsZXQgaTtcbiAgbGV0IHRva2VuO1xuICBsZXQgcGFyc2VkSW5wdXQ7XG4gIGxldCBza2lwcGVkO1xuICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgcGFyc2VkSW5wdXQgPSAoaW5wdXQubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcuX2xvY2FsZSkpIHx8IFtdKVswXTtcbiAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgIHNraXBwZWQgPSBpbnB1dC5zdWJzdHIoMCwgaW5wdXQuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgfVxuICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZShpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XG4gICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICB9XG4gICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfVxuXG4gICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPSBpbnB1dExlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChpbnB1dCk7XG4gIH1cblxuICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICBpZiAoY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxuICAgIGNvbmZpZy5fYVtIT1VSXSA+IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdm9pZCAwO1xuICB9XG5cbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucGFyc2VkRGF0ZVBhcnRzID0gY29uZmlnLl9hLnNsaWNlKDApO1xuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gIC8vIGhhbmRsZSBtZXJpZGllbVxuICBjb25maWcuX2FbSE9VUl0gPSBtZXJpZGllbUZpeFdyYXAoY29uZmlnLl9sb2NhbGUsIGNvbmZpZy5fYVtIT1VSXSwgY29uZmlnLl9tZXJpZGllbSk7XG5cbiAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG5cbiAgcmV0dXJuIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbn1cblxuXG5mdW5jdGlvbiBtZXJpZGllbUZpeFdyYXAobG9jYWxlOiBMb2NhbGUsIF9ob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgaG91ciA9IF9ob3VyO1xuXG4gIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgLy8gbm90aGluZyB0byBkb1xuICAgIHJldHVybiBob3VyO1xuICB9XG5cbiAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xuICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgfVxuXG4gIGlmIChsb2NhbGUuaXNQTSA9PSBudWxsKSB7XG4gICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cbiAgLy8gRmFsbGJhY2tcbiAgY29uc3QgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgaWYgKGlzUG0gJiYgaG91ciA8IDEyKSB7XG4gICAgaG91ciArPSAxMjtcbiAgfVxuXG4gIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xuICAgIGhvdXIgPSAwO1xuICB9XG5cbiAgcmV0dXJuIGhvdXI7XG59XG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCB0ZW1wQ29uZmlnO1xuICBsZXQgYmVzdE1vbWVudDtcbiAgbGV0IHNjb3JlVG9CZWF0O1xuICBsZXQgY3VycmVudFNjb3JlO1xuXG4gIGlmICghY29uZmlnLl9mIHx8IGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG4gIH1cblxuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgdGVtcENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgIH1cbiAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgLy8gb3IgdG9rZW5zXG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKGNvbmZpZy5fZCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbnN0IGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dCBhcyBhbnkpO1xuICAgIGNvbmZpZy5fYSA9IFtpLnllYXIsIGkubW9udGgsIGkuZGF5LCBpLmhvdXJzLCBpLm1pbnV0ZXMsIGkuc2Vjb25kcywgaS5taWxsaXNlY29uZHNdXG4gICAgLy8gdG9kbzogb2Jzb2xldGUgLT4gcmVtb3ZlIGl0XG4gICAgICAubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBpc0FycmF5LCBpc0RhdGUsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNPYmplY3RFbXB0eSwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuL2Nsb25lJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tT2JqZWN0IH0gZnJvbSAnLi9mcm9tLW9iamVjdCc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCByZXMgPSBjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSk7XG4gIC8vIHRvZG86IHJlbW92ZSwgaW4gbW9tZW50LmpzIGl0J3MgbmV2ZXIgY2FsbGVkIGN1eiBvZiBtb21lbnQgY29uc3RydWN0b3JcbiAgcmVzLl9kID0gbmV3IERhdGUocmVzLl9kICE9IG51bGwgPyByZXMuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgaWYgKCFpc1ZhbGlkKE9iamVjdC5hc3NpZ24oe30sIHJlcywge19pc1ZhbGlkOiBudWxsfSkpKSB7XG4gICAgcmVzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgfVxuICAvLyB0b2RvOiB1cGRhdGUgb2Zmc2V0XG4gIC8qaWYgKHJlcy5fbmV4dERheSkge1xuICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgIHJlcy5fZCA9IGFkZChyZXMuX2QsIDEsICdkYXknKTtcbiAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gIH0qL1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgY29uc3QgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnLCB7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgfVxuXG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgY29uZmlnLl9kID0gY2xvbmVEYXRlKGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIHJlY3Vyc2lvblxuXG4gIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XG4gIH1cblxuICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgpO1xuICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc0FycmF5PHN0cmluZyB8IG51bWJlcj4oaW5wdXQpICYmIGlucHV0Lmxlbmd0aCkge1xuICAgIGNvbnN0IF9hcnI6IChzdHJpbmcgfCBudW1iZXIpW10gPSBpbnB1dC5zbGljZSgwKTtcbiAgICBjb25maWcuX2EgPSBfYXJyLm1hcChvYmogPT4gaXNTdHJpbmcob2JqKSA/IHBhcnNlSW50KG9iaiwgMTApIDogb2JqKTtcbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyhpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fTtcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xuXG4gIC8vIHBhcmFtcyBzd2l0Y2ggLT4gc2tpcDsgdGVzdCBpdCB3ZWxsXG4gIC8vIGlmIChsb2NhbGVLZXkgPT09IHRydWUgfHwgbG9jYWxlS2V5ID09PSBmYWxzZSkge1xuICAvLyAgICAgc3RyaWN0ID0gbG9jYWxlS2V5O1xuICAvLyAgICAgbG9jYWxlS2V5ID0gdW5kZWZpbmVkO1xuICAvLyB9XG5cbiAgLy8gdG9kbzogZmFpbCBmYXN0IGFuZCByZXR1cm4gbm90IHZhbGlkIGRhdGVcbiAgaWYgKChpc09iamVjdChfaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoX2lucHV0KSkgfHwgKGlzQXJyYXkoX2lucHV0KSAmJiBfaW5wdXQubGVuZ3RoID09PSAwKSkge1xuICAgIF9pbnB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgLy8gY29uZmlnLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICBjb25maWcuX3VzZVVUQyA9IGNvbmZpZy5faXNVVEMgPSBpc1VUQztcbiAgY29uZmlnLl9sID0gbG9jYWxlS2V5O1xuICBjb25maWcuX2kgPSBfaW5wdXQ7XG4gIGNvbmZpZy5fZiA9IGZvcm1hdDtcbiAgY29uZmlnLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsT3JVVEMgfSBmcm9tICcuL2Zyb20tYW55dGhpbmcnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XG5pbXBvcnQgeyBpc0RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUoaW5wdXQ6IERhdGVJbnB1dCwgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUtleT86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgY29uZmlnID0gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xuXG4gIHJldHVybiBjb25maWcuX2Q7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWJzUm91bmQobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtIDwgMCA/IE1hdGgucm91bmQobnVtICogLTEpICogLTEgOiBNYXRoLnJvdW5kKG51bSk7XG59XG4iLCJpbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZW5kT2YsIHN0YXJ0T2YgfSBmcm9tICcuL3N0YXJ0LWVuZC1vZic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FmdGVyKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID4gZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGUyLnZhbHVlT2YoKSA8IHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JlZm9yZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA8IGRhdGUyLnZhbHVlT2YoKTtcbiAgfVxuXG4gIHJldHVybiBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKSA8IGRhdGUyLnZhbHVlT2YoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbihcbiAgZGF0ZTogRGF0ZSxcbiAgZnJvbTogRGF0ZSxcbiAgdG86IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lLFxuICBpbmNsdXNpdml0eSA9ICcoKSdcbik6IGJvb2xlYW4ge1xuICBjb25zdCBsZWZ0Qm91bmQgPVxuICAgIGluY2x1c2l2aXR5WzBdID09PSAnKCdcbiAgICAgID8gaXNBZnRlcihkYXRlLCBmcm9tLCB1bml0cylcbiAgICAgIDogIWlzQmVmb3JlKGRhdGUsIGZyb20sIHVuaXRzKTtcbiAgY29uc3QgcmlnaHRCb3VuZCA9XG4gICAgaW5jbHVzaXZpdHlbMV0gPT09ICcpJ1xuICAgICAgPyBpc0JlZm9yZShkYXRlLCB0bywgdW5pdHMpXG4gICAgICA6ICFpc0FmdGVyKGRhdGUsIHRvLCB1bml0cyk7XG5cbiAgcmV0dXJuIGxlZnRCb3VuZCAmJiByaWdodEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID09PSBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dE1zID0gZGF0ZTIudmFsdWVPZigpO1xuXG4gIHJldHVybiAoXG4gICAgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmXG4gICAgaW5wdXRNcyA8PSBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JBZnRlcihcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0cz86IFVuaXRPZlRpbWVcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNTYW1lKGRhdGUxLCBkYXRlMiwgdW5pdHMpIHx8IGlzQWZ0ZXIoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckJlZm9yZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0cz86IFVuaXRPZlRpbWVcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNTYW1lKGRhdGUxLCBkYXRlMiwgdW5pdHMpIHx8IGlzQmVmb3JlKGRhdGUxLCBkYXRlMiwgdW5pdHMpO1xufVxuIiwiLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBhYnNSb3VuZCB9IGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcblxuY29uc3QgYXNwTmV0UmVnZXggPSAvXihcXC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKylcXDooXFxkKykoPzpcXDooXFxkKykoXFwuXFxkKik/KT8kLztcblxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbi8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbi8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgaXNvUmVnZXggPSAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvO1xuXG5leHBvcnQgdHlwZSBEdXJhdGlvbklucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRHVyYXRpb24gfCBQYXJ0aWFsPERhdGVPYmplY3Q+IHwgeyBmcm9tOiBEYXRlOyB0bzogRGF0ZSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQ/OiBEdXJhdGlvbklucHV0LCBrZXk/OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSkge1xuICBjb25zdCBkdXJhdGlvbiA9IGNvbnZlcnREdXJhdGlvbihpbnB1dCwga2V5KTtcbiAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcblxuICByZXR1cm4gbmV3IER1cmF0aW9uKGR1cmF0aW9uLCBjb25maWcpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24oaW5wdXQ6IGFueSwga2V5OiBzdHJpbmcpOiBQYXJ0aWFsPERhdGVPYmplY3Q+IHtcbiAgLy8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgIHJldHVybiB7XG4gICAgICBtaWxsaXNlY29uZHM6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICBkYXk6IGlucHV0Ll9kYXlzLFxuICAgICAgbW9udGg6IGlucHV0Ll9tb250aHNcbiAgICB9O1xuICB9XG4gIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBkdXJhdGlvbiA9IHt9O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiBpbnB1dCB9IDogeyBtaWxsaXNlY29uZHM6IGlucHV0IH07XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgbGV0IG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IDAsXG4gICAgICAgIGRheTogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgaG91cnM6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXG4gICAgICAgIG1pbnV0ZXM6IHRvSW50KG1hdGNoW01JTlVURV0pICogc2lnbixcbiAgICAgICAgc2Vjb25kczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxuICAgICAgICAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcbiAgICAgICAgbWlsbGlzZWNvbmRzOiB0b0ludChhYnNSb3VuZCh0b0ludChtYXRjaFtNSUxMSVNFQ09ORF0pICogMTAwMCkpICogc2lnblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogKG1hdGNoWzFdID09PSAnKycpID8gMSA6IDE7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgbW9udGg6IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgd2VlazogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICBkYXk6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgaG91cnM6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgbWludXRlczogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICBzZWNvbmRzOiBwYXJzZUlzbyhtYXRjaFs4XSwgc2lnbilcbiAgICAgIH07XG4gICAgfVxuXG4gIH1cblxuICBpZiAoaXNPYmplY3Q8e2Zyb206IGFueTsgdG86IGFueX0+KGlucHV0KSAmJiAoJ2Zyb20nIGluIGlucHV0IHx8ICd0bycgaW4gaW5wdXQpKSB7XG4gICAgY29uc3QgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKHBhcnNlRGF0ZShpbnB1dC5mcm9tKSwgcGFyc2VEYXRlKGlucHV0LnRvKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWlsbGlzZWNvbmRzOiBkaWZmUmVzLm1pbGxpc2Vjb25kcyxcbiAgICAgIG1vbnRoOiBkaWZmUmVzLm1vbnRoc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaW5wdXQ7XG59XG5cbi8vIGNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuLy8gY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGludmFsaWQ7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvKGlucDogc3RyaW5nLCBzaWduOiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICBjb25zdCByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG5cbiAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xufVxuXG5mdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XG4gIGNvbnN0IHJlcyA9IHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcblxuICByZXMubW9udGhzID0gZ2V0TW9udGgob3RoZXIpIC0gZ2V0TW9udGgoYmFzZSkgK1xuICAgIChnZXRGdWxsWWVhcihvdGhlcikgLSBnZXRGdWxsWWVhcihiYXNlKSkgKiAxMjtcbiAgY29uc3QgX2Jhc2VQbHVzID0gYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJyk7XG4gIGlmIChpc0FmdGVyKF9iYXNlUGx1cywgb3RoZXIpKSB7XG4gICAgLS1yZXMubW9udGhzO1xuICB9XG5cbiAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJykpO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XG4gIGlmICghKGlzRGF0ZVZhbGlkKGJhc2UpICYmIGlzRGF0ZVZhbGlkKG90aGVyKSkpIHtcbiAgICByZXR1cm4geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuICB9XG5cbiAgbGV0IHJlcztcbiAgY29uc3QgX290aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlLCB7X29mZnNldDogYmFzZS5nZXRUaW1lem9uZU9mZnNldCgpfSk7XG4gIGlmIChpc0JlZm9yZShiYXNlLCBfb3RoZXIpKSB7XG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBfb3RoZXIpO1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoX290aGVyLCBiYXNlKTtcbiAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0TW9udGgsIGdldFRpbWUgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0TW9udGgsIHNldFRpbWUgfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7IFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoZGF0ZTogRGF0ZSwgdmFsOiBudW1iZXIsIHBlcmlvZDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcblxuICByZXR1cm4gYWRkU3VidHJhY3QoZGF0ZSwgZHVyLCAxLCBpc1VUQyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIC0xLCBpc1VUQyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0cmFjdChkYXRlOiBEYXRlLCBkdXJhdGlvbjogRHVyYXRpb24sIGlzQWRkaW5nOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzO1xuICBjb25zdCBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpO1xuICBjb25zdCBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcbiAgLy8gY29uc3QgX3VwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcblxuICBpZiAobW9udGhzKSB7XG4gICAgc2V0TW9udGgoZGF0ZSwgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICsgbW9udGhzICogaXNBZGRpbmcsIGlzVVRDKTtcbiAgfVxuICBpZiAoZGF5cykge1xuICAgIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShkYXRlLCBpc1VUQykgKyBkYXlzICogaXNBZGRpbmcsIGlzVVRDKTtcbiAgfVxuICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgc2V0VGltZShkYXRlLCBnZXRUaW1lKGRhdGUpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xuICB9XG5cbiAgcmV0dXJuIGNsb25lRGF0ZShkYXRlKTtcbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lcyBzdXBwb3J0XG4gIC8vIGlmIChfdXBkYXRlT2Zmc2V0KSB7XG4gIC8vICAgaG9va3MudXBkYXRlT2Zmc2V0KGRhdGUsIGRheXMgfHwgbW9udGhzKTtcbiAgLy8gfVxufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mV2VlaygpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignZCcsIG51bGwsICdkbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c01pbihkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5cyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdlJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgICAgLy8gcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignRScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldElTT0RheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbiAgYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbiAgYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuLy8gUFJJT1JJVFlcbiAgYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG4gIGFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignZCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcblxuICBhZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG5cbiAgYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuICBhZGRSZWdleFRva2VuKCdkZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ2RkJywgJ2RkZCcsICdkZGRkJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuKSB7XG4gICAgICBjb25zdCB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSAhIWlucHV0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ2QnLCAnZScsICdFJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICB3ZWVrW3Rva2VuXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG5cbi8vIEhFTFBFUlNcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSk6IG51bWJlciB7XG4gIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgX251bSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gIGlmICghaXNOYU4oX251bSkpIHtcbiAgICByZXR1cm4gX251bTtcbiAgfVxuXG4gIGNvbnN0IF93ZWVrRGF5ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICBpZiAoaXNOdW1iZXIoX3dlZWtEYXkpKSB7XG4gICAgcmV0dXJuIF93ZWVrRGF5O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQ6IHN0cmluZyB8IG51bWJlciwgbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKSk6IG51bWJlciB7XG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICB9XG5cbiAgcmV0dXJuIGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGlzVVRDPzogYm9vbGVhbjsgbG9jYWxlOiBMb2NhbGUgfSk6IERhdGUgfCBudW1iZXIge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGdldERheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBzZXREYXlPZldlZWsoZGF0ZSwgaW5wdXQsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGRheSA9IGdldERheShkYXRlLCBpc1VUQyk7XG4gIGNvbnN0IF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIF9pbnB1dCAtIGRheSwgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHRvZG86IHV0Y1xuLy8gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gKGdldERheShkYXRlLCBpc1VUQykgKyA3IC0gbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCkpICUgNztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZTsgaXNVVEM/OiBib29sZWFuIH0gPSB7fSk6IERhdGUge1xuICBjb25zdCB3ZWVrZGF5ID0gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIGlucHV0IC0gd2Vla2RheSwgJ2RheScpO1xufVxuXG5cbi8vIGdldFNldElTT0RheU9mV2Vla1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0RheU9mV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0RGF5KGRhdGUsIGlzVVRDKSB8fCA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlIH0gPSB7fSk6IERhdGUge1xuICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICBjb25zdCB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBvcHRzLmxvY2FsZSk7XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBnZXREYXlPZldlZWsoZGF0ZSkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBcmFiaWMgW2FyXVxuLy8hIGF1dGhvciA6IEFiZGVsIFNhaWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hYmRlbHNhaWRcbi8vISBhdXRob3IgOiBBaG1lZCBFbGtoYXRpYlxuLy8hIGF1dGhvciA6IGZvcmFiaSBodHRwczovL2dpdGh1Yi5jb20vZm9yYWJpXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuY29uc3Qgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgMTogJ8OZwqEnLFxuICAyOiAnw5nCoicsXG4gIDM6ICfDmcKjJyxcbiAgNDogJ8OZwqQnLFxuICA1OiAnw5nCpScsXG4gIDY6ICfDmcKmJyxcbiAgNzogJ8OZwqcnLFxuICA4OiAnw5nCqCcsXG4gIDk6ICfDmcKpJyxcbiAgMDogJ8OZwqAnXG59O1xuY29uc3QgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ8OZwqEnOiAnMScsXG4gICfDmcKiJzogJzInLFxuICAnw5nCoyc6ICczJyxcbiAgJ8OZwqQnOiAnNCcsXG4gICfDmcKlJzogJzUnLFxuICAnw5nCpic6ICc2JyxcbiAgJ8OZwqcnOiAnNycsXG4gICfDmcKoJzogJzgnLFxuICAnw5nCqSc6ICc5JyxcbiAgJ8OZwqAnOiAnMCdcbn07XG5jb25zdCBwbHVyYWxGb3JtID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bSA9PT0gMCA/IDAgOiBudW0gPT09IDEgPyAxIDogbnVtID09PSAyID8gMiA6IG51bSAlIDEwMCA+PSAzICYmIG51bSAlIDEwMCA8PSAxMCA/IDMgOiBudW0gJSAxMDAgPj0gMTEgPyA0IDogNTtcbn07XG5jb25zdCBwbHVyYWxzOiB7W2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gPSB7XG4gIHM6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwqvDmMKnw5nChsOZworDmMKpJywgJ8OYwqvDmMKnw5nChsOZworDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKrw5jCp8OZwobDmcKKw5jCqsOYwqfDmcKGJywgJ8OYwqvDmMKnw5nChsOZworDmMKqw5nCisOZwoYnXSwgJyVkIMOYwqvDmcKIw5jCp8OZwoYnLCAnJWQgw5jCq8OYwqfDmcKGw5nCisOYwqknLCAnJWQgw5jCq8OYwqfDmcKGw5nCisOYwqknXSxcbiAgbTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwq/DmcKCw5nCisOZwoLDmMKqw5jCp8OZwoYnLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqrDmcKKw5nChiddLCAnJWQgw5jCr8OZwoLDmMKnw5jCpsOZwoInLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknXSxcbiAgaDogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCs8OYwqfDmMK5w5jCqScsICfDmMKzw5jCp8OYwrnDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKzw5jCp8OYwrnDmMKqw5jCp8OZwoYnLCAnw5jCs8OYwqfDmMK5w5jCqsOZworDmcKGJ10sICclZCDDmMKzw5jCp8OYwrnDmMKnw5jCqicsICclZCDDmMKzw5jCp8OYwrnDmMKpJywgJyVkIMOYwrPDmMKnw5jCucOYwqknXSxcbiAgZDogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5nCisOZwojDmcKFJywgJ8OZworDmcKIw5nChSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmcKKw5nCiMOZwoXDmMKnw5nChicsICfDmcKKw5nCiMOZwoXDmcKKw5nChiddLCAnJWQgw5jCo8OZworDmMKnw5nChScsICclZCDDmcKKw5nCiMOZwoXDmcKLw5jCpycsICclZCDDmcKKw5nCiMOZwoUnXSxcbiAgTTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCtMOZwofDmMKxJywgJ8OYwrTDmcKHw5jCsSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmMK0w5nCh8OYwrHDmMKnw5nChicsICfDmMK0w5nCh8OYwrHDmcKKw5nChiddLCAnJWQgw5jCo8OYwrTDmcKHw5jCsScsICclZCDDmMK0w5nCh8OYwrHDmMKnJywgJyVkIMOYwrTDmcKHw5jCsSddLFxuICB5OiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMK5w5jCp8OZwoUnLCAnw5jCucOYwqfDmcKFIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OYwrnDmMKnw5nChcOYwqfDmcKGJywgJ8OYwrnDmMKnw5nChcOZworDmcKGJ10sICclZCDDmMKjw5jCucOZwojDmMKnw5nChScsICclZCDDmMK5w5jCp8OZwoXDmcKLw5jCpycsICclZCDDmMK5w5jCp8OZwoUnXVxufTtcbmNvbnN0IHBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh1OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3QgZiA9IHBsdXJhbEZvcm0obnVtKTtcbiAgICBsZXQgc3RyID0gcGx1cmFsc1t1XVtwbHVyYWxGb3JtKG51bSldO1xuICAgIGlmIChmID09PSAyKSB7XG4gICAgICBzdHIgPSBzdHJbd2l0aG91dFN1ZmZpeCA/IDAgOiAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHN0ciBhcyBzdHJpbmcpLnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygpKTtcbiAgfTtcbn07XG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gW1xuICAnw5nCisOZwobDmMKnw5nCisOYwrEnLFxuICAnw5nCgcOYwqjDmMKxw5jCp8OZworDmMKxJyxcbiAgJ8OZwoXDmMKnw5jCscOYwrMnLFxuICAnw5jCo8OYwqjDmMKxw5nCisOZwoQnLFxuICAnw5nChcOYwqfDmcKKw5nCiCcsXG4gICfDmcKKw5nCiMOZwobDmcKKw5nCiCcsXG4gICfDmcKKw5nCiMOZwoTDmcKKw5nCiCcsXG4gICfDmMKjw5jCusOYwrPDmMK3w5jCsycsXG4gICfDmMKzw5jCqMOYwqrDmcKFw5jCqMOYwrEnLFxuICAnw5jCo8OZwoPDmMKqw5nCiMOYwqjDmMKxJyxcbiAgJ8OZwobDmcKIw5nCgcOZwoXDmMKow5jCsScsXG4gICfDmMKvw5nCisOYwrPDmcKFw5jCqMOYwrEnXG5dO1xuXG5leHBvcnQgY29uc3QgYXJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdhcicsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQ6IG1vbnRocyxcbiAgd2Vla2RheXM6ICfDmMKnw5nChMOYwqPDmMKtw5jCr1/DmMKnw5nChMOYwqXDmMKrw5nChsOZworDmcKGX8OYwqfDmcKEw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqfDmcKEw5jCo8OYwrHDmMKow5jCucOYwqfDmMKhX8OYwqfDmcKEw5jCrsOZwoXDmcKKw5jCs1/DmMKnw5nChMOYwqzDmcKFw5jCucOYwqlfw5jCp8OZwoTDmMKzw5jCqMOYwqonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDmMKjw5jCrcOYwq9fw5jCpcOYwqvDmcKGw5nCisOZwoZfw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqPDmMKxw5jCqMOYwrnDmMKnw5jCoV/DmMKuw5nChcOZworDmMKzX8OYwqzDmcKFw5jCucOYwqlfw5jCs8OYwqjDmMKqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OYwq1fw5nChl/DmMKrX8OYwrFfw5jCrl/DmMKsX8OYwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0QvXFx1MjAwRk0vXFx1MjAwRllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OYwrV8w5nChS8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gJ8OZwoUnID09PSBpbnB1dDtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDmMK1JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDmcKFJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDmMKnw5nChMOZworDmcKIw5nChSDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbmV4dERheTogJ1vDmMK6w5jCr8OZwovDmMKnIMOYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8OYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBsYXN0RGF5OiAnW8OYwqPDmcKFw5jCsyDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdkZGRkIFvDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDmMKow5jCucOYwq8gJXMnLFxuICAgIHBhc3Q6ICfDmcKFw5nChsOYwrAgJXMnLFxuICAgIHM6IHBsdXJhbGl6ZSgncycpLFxuICAgIHNzOiBwbHVyYWxpemUoJ3MnKSxcbiAgICBtOiBwbHVyYWxpemUoJ20nKSxcbiAgICBtbTogcGx1cmFsaXplKCdtJyksXG4gICAgaDogcGx1cmFsaXplKCdoJyksXG4gICAgaGg6IHBsdXJhbGl6ZSgnaCcpLFxuICAgIGQ6IHBsdXJhbGl6ZSgnZCcpLFxuICAgIGRkOiBwbHVyYWxpemUoJ2QnKSxcbiAgICBNOiBwbHVyYWxpemUoJ00nKSxcbiAgICBNTTogcGx1cmFsaXplKCdNJyksXG4gICAgeTogcGx1cmFsaXplKCd5JyksXG4gICAgeXk6IHBsdXJhbGl6ZSgneScpXG4gIH0sXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vDmcKhw5nCosOZwqPDmcKkw5nCpcOZwqbDmcKnw5nCqMOZwqnDmcKgXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoL8OYwowvZywgJywnKTtcbiAgfSxcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgvLC9nLCAnw5jCjCcpO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogMTIgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgS2hyb25vcyB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQnVsZ2FyaWFuIFtiZ11cbi8vISBhdXRob3IgOiBJc2tyZW4gSXZvdiBDaGVybmV2IDogaHR0cHM6Ly9naXRodWIuY29tL2ljaGVybmV2XG4vLyEgYXV0aG9yIDogS3VuYWwgTWFyd2FoYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ3YWhhaGFcbi8vISBhdXRob3IgOiBNYXR0IEdyYW5kZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Z3JhbmRlXG4vLyEgYXV0aG9yIDogSXNhYWMgQ2FtYnJvbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2FtYnJvblxuLy8hIGF1dGhvciA6IFZlbmVsaW4gTWFuY2hldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS92bWFuY2hldlxuXG5leHBvcnQgY29uc3QgYmdMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdiZycsXG4gIG1vbnRoczogJ8ORwo/DkMK9w5HCg8OQwrDDkcKAw5DCuF/DkcKEw5DCtcOQwrLDkcKAw5HCg8OQwrDDkcKAw5DCuF/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgMOQwrjDkMK7X8OQwrzDkMKww5DCuV/DkcKOw5DCvcOQwrhfw5HCjsOQwrvDkMK4X8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgl/DkcKBw5DCtcOQwr/DkcKCw5DCtcOQwrzDkMKyw5HCgMOQwrhfw5DCvsOQwrrDkcKCw5DCvsOQwrzDkMKyw5HCgMOQwrhfw5DCvcOQwr7DkMK1w5DCvMOQwrLDkcKAw5DCuF/DkMK0w5DCtcOQwrrDkMK1w5DCvMOQwrLDkcKAw5DCuCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDkcKPw5DCvcORwoBfw5HChMOQwrXDkMKyX8OQwrzDkMKww5HCgF/DkMKww5DCv8ORwoBfw5DCvMOQwrDDkMK5X8ORwo7DkMK9w5DCuF/DkcKOw5DCu8OQwrhfw5DCsMOQwrLDkMKzX8ORwoHDkMK1w5DCv1/DkMK+w5DCusORwoJfw5DCvcOQwr7DkMK1X8OQwrTDkMK1w5DCuicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfDkMK9w5DCtcOQwrTDkMK1w5DCu8ORwo9fw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8OQwr3DkMK4w5DCul/DkMKyw5HCgsOQwr7DkcKAw5DCvcOQwrjDkMK6X8ORwoHDkcKAw5HCj8OQwrTDkMKwX8ORwofDkMK1w5HCgsOQwrLDkcKKw5HCgMORwoLDkcKKw5DCul/DkMK/w5DCtcORwoLDkcKKw5DCul/DkcKBw5HCisOQwrHDkMK+w5HCgsOQwrAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDkMK9w5DCtcOQwrRfw5DCv8OQwr7DkMK9X8OQwrLDkcKCw5DCvl/DkcKBw5HCgMORwo9fw5HCh8OQwrXDkcKCX8OQwr/DkMK1w5HCgl/DkcKBw5HCisOQwrEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5DCvcOQwrRfw5DCv8OQwr1fw5DCssORwoJfw5HCgcORwoBfw5HCh8ORwoJfw5DCv8ORwoJfw5HCgcOQwrEnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnRC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OQwpTDkMK9w5DCtcORwoEgw5DCsl0gTFQnLFxuICAgIG5leHREYXk6ICdbw5DCo8ORwoLDkcKAw5DCtSDDkMKyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDkMKyXSBMVCcsXG4gICAgbGFzdERheTogJ1vDkMKSw5HCh8OQwrXDkcKAw5DCsCDDkMKyXSBMVCcsXG4gICAgbGFzdFdlZWs6IGZ1bmN0aW9uIChkOiBhbnkpIHtcblxuICAgICAgc3dpdGNoIChkKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK4w5DCt8OQwrzDkMK4w5DCvcOQwrDDkMK7w5DCsMORwoLDkMKwXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwrjDkMK3w5DCvMOQwrjDkMK9w5DCsMOQwrvDkMK4w5HCj10gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDkcKBw5DCu8OQwrXDkMK0ICVzJyxcbiAgICBwYXN0OiAnw5DCv8ORwoDDkMK1w5DCtMOQwrggJXMnLFxuICAgIHM6ICfDkMK9w5HCj8OQwrrDkMK+w5DCu8OQwrrDkMK+IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMOQwrgnLFxuICAgIHNzOiAnJWQgw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5DCuCcsXG4gICAgbTogJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5DCsCcsXG4gICAgbW06ICclZCDDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrgnLFxuICAgIGg6ICfDkcKHw5DCsMORwoEnLFxuICAgIGhoOiAnJWQgw5HCh8OQwrDDkcKBw5DCsCcsXG4gICAgZDogJ8OQwrTDkMK1w5DCvScsXG4gICAgZGQ6ICclZCDDkMK0w5DCvcOQwrgnLFxuICAgIE06ICfDkMK8w5DCtcORwoHDkMK1w5HChicsXG4gICAgTU06ICclZCDDkMK8w5DCtcORwoHDkMK1w5HChsOQwrAnLFxuICAgIHk6ICfDkMKzw5DCvsOQwrTDkMK4w5DCvcOQwrAnLFxuICAgIHl5OiAnJWQgw5DCs8OQwr7DkMK0w5DCuMOQwr3DkMK4J1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKMOQwrXDkMKyfMOQwrXDkMK9fMORwoLDkMK4fMOQwrLDkMK4fMORwoDDkMK4fMOQwrzDkMK4KS8sXG4gIG9yZGluYWw6IGZ1bmN0aW9uIChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuXG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKF9udW0pO1xuXG4gICAgbGV0IGxhc3REaWdpdCA9IG51bWJlciAlIDEwLFxuICAgICAgbGFzdDJEaWdpdHMgPSBudW1iZXIgJSAxMDA7XG5cbiAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMK1w5DCsic7XG4gICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCtcOQwr0nO1xuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkcKCw5DCuCc7XG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrLDkMK4JztcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5HCgMOQwrgnO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCvMOQwrgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkcKCw5DCuCc7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ3plY2ggW2NzXVxuLy8hIGF1dGhvciA6IHBldHJiZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL3BldHJiZWxhXG5cbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSAnbGVkZW5fw4PCum5vcl9iw4XCmWV6ZW5fZHViZW5fa3bDhMKbdGVuX8OEwo1lcnZlbl/DhMKNZXJ2ZW5lY19zcnBlbl96w4PCocOFwpnDg8KtX8OFwpnDg8KtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpO1xuY29uc3QgbW9udGhzU2hvcnQ6IHN0cmluZ1tdID0gJ2xlZF/Dg8K6bm9fYsOFwpllX2R1Yl9rdsOEwptfw4TCjXZuX8OEwo12Y19zcnBfesODwqHDhcKZX8OFwpnDg8Ktal9saXNfcHJvJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gbnVtICsgJyAnO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6ICAvLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDg8KhciBzZWt1bmQnIDogJ3DDg8KhciBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzogLy8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdtJzogIC8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAoaXNGdXR1cmUgPyAnbWludXR1JyA6ICdtaW51dG91Jyk7XG4gICAgY2FzZSAnbW0nOiAvLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbnV0eScgOiAnbWludXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWludXRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2gnOiAgLy8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnaG9kaW5hJyA6IChpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnKTtcbiAgICBjYXNlICdoaCc6IC8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2RpbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdob2RpbmFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnZCc6ICAvLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2RlbicgOiAnZG5lbSc7XG4gICAgY2FzZSAnZGQnOiAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2RueScgOiAnZG7Dg8KtJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2RueSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnTSc6ICAvLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ23DhMKbc8ODwq1jJyA6ICdtw4TCm3PDg8KtY2VtJztcbiAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbcOEwptzw4PCrWNlJyA6ICdtw4TCm3PDg8KtY8OFwq8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbcOEwptzw4PCrWNpJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICd5JzogIC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tlbSc7XG4gICAgY2FzZSAneXknOiAvLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Jva3knIDogJ2xldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdsZXR5JztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3NMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdjcycsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQsXG4gIG1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocywgbW9udGhzU2hvcnQpIHtcbiAgICBsZXQgaSwgX21vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIHVzZSBjdXN0b20gcGFyc2VyIHRvIHNvbHZlIHByb2JsZW0gd2l0aCBKdWx5ICjDhMKNZXJ2ZW5lYylcbiAgICAgIF9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyR8XicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9tb250aHNQYXJzZTtcbiAgfShtb250aHMsIG1vbnRoc1Nob3J0KSksXG4gIHNob3J0TW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzU2hvcnQpIHtcbiAgICBsZXQgaSwgX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX3Nob3J0TW9udGhzUGFyc2U7XG4gIH0obW9udGhzU2hvcnQpKSxcbiAgbG9uZ01vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocykge1xuICAgIGxldCBpLCBfbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIF9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9sb25nTW9udGhzUGFyc2U7XG4gIH0obW9udGhzKSksXG4gIHdlZWtkYXlzOiAnbmVkw4TCm2xlX3BvbmTDhMKbbMODwq1fw4PCunRlcsODwr1fc3TDhcKZZWRhX8OEwo10dnJ0ZWtfcMODwqF0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmVfcG9fw4PCunRfc3Rfw4TCjXRfcMODwqFfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fw4PCunRfc3Rfw4TCjXRfcMODwqFfc28nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXG4gICAgbDogJ0QuIE0uIFlZWVknXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tkbmVzIHZdIExUJyxcbiAgICBuZXh0RGF5OiAnW3rDg8KtdHJhIHZdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZMOEwptsaSB2XSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ZlIHN0w4XCmWVkdSB2XSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gJ1t2ZSDDhMKNdHZydGVrIHZdIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3YgcMODwqF0ZWsgdl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgdl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSB2XSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBuZWTDhMKbbGkgdl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwqldIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc3TDhcKZZWR1IHZdIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHNvYm90dSB2XSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAncMOFwpllZCAlcycsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEYW5pc2ggKERlbm1hcmspIFtkYV1cbi8vISBhdXRob3IgOiBQZXIgSGFuc2VuIDogaHR0cHM6Ly9naXRodWIuY29tL3BlcmhwXG5cbmV4cG9ydCBjb25zdCBkYUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2RhJyxcbiAgbW9udGhzIDogJ0phbnVhcl9GZWJydWFyX01hcnRzX0FwcmlsX01hal9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWFqX0p1bl9KdWxfQXVnX1NlcF9Pa3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnU8ODwrhuZGFnX01hbmRhZ19UaXJzZGFnX09uc2RhZ19Ub3JzZGFnX0ZyZWRhZ19Mw4PCuHJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnU8ODwrhuX01hbl9UaXJfT25zX1Rvcl9GcmVfTMODwrhyJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTw4PCuF9NYV9UaV9Pbl9Ub19Gcl9Mw4PCuCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICBMVCA6ICdISDptbScsXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgIExMIDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgIExMTEwgOiAnZGRkZCBbZC5dIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgICBzYW1lRGF5IDogJ1tpIGRhZyBrbC5dIExUJyxcbiAgICAgIG5leHREYXkgOiAnW2kgbW9yZ2VuIGtsLl0gTFQnLFxuICAgICAgbmV4dFdlZWsgOiAncMODwqUgZGRkZCBba2wuXSBMVCcsXG4gICAgICBsYXN0RGF5IDogJ1tpIGfDg8KlciBrbC5dIExUJyxcbiAgICAgIGxhc3RXZWVrIDogJ1tpXSBkZGRkW3Mga2wuXSBMVCcsXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICBmdXR1cmUgOiAnb20gJXMnLFxuICAgICAgcGFzdCA6ICclcyBzaWRlbicsXG4gICAgICBzIDogJ2bDg8KlIHNla3VuZGVyJyxcbiAgICAgIG0gOiAnZXQgbWludXQnLFxuICAgICAgbW0gOiAnJWQgbWludXR0ZXInLFxuICAgICAgaCA6ICdlbiB0aW1lJyxcbiAgICAgIGhoIDogJyVkIHRpbWVyJyxcbiAgICAgIGQgOiAnZW4gZGFnJyxcbiAgICAgIGRkIDogJyVkIGRhZ2UnLFxuICAgICAgTSA6ICdlbiBtw4PCpW5lZCcsXG4gICAgICBNTSA6ICclZCBtw4PCpW5lZGVyJyxcbiAgICAgIHkgOiAnZXQgw4PCpXInLFxuICAgICAgeXkgOiAnJWQgw4PCpXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiBbZGVdXG4vLyEgYXV0aG9yIDogbGx1Y2hzIDogaHR0cHM6Ly9naXRodWIuY29tL2xsdWNoc1xuLy8hIGF1dGhvcjogTWVuZWxpb24gRWxlbnPDg8K6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDogTWlrb2xhaiBEYWRlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWlrMDFhalxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nXSB9ID0ge1xuICAgICdtJzogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgICAnaCc6IFsnZWluZSBTdHVuZGUnLCAnZWluZXIgU3R1bmRlJ10sXG4gICAgJ2QnOiBbJ2VpbiBUYWcnLCAnZWluZW0gVGFnJ10sXG4gICAgJ2RkJzogW251bSArICcgVGFnZScsIG51bSArICcgVGFnZW4nXSxcbiAgICAnTSc6IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gICAgJ01NJzogW251bSArICcgTW9uYXRlJywgbnVtICsgJyBNb25hdGVuJ10sXG4gICAgJ3knOiBbJ2VpbiBKYWhyJywgJ2VpbmVtIEphaHInXSxcbiAgICAneXknOiBbbnVtICsgJyBKYWhyZScsIG51bSArICcgSmFocmVuJ11cbiAgfTtcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xufVxuXG5leHBvcnQgY29uc3QgZGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdkZScsXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03Dg8KkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnSmFuLl9GZWIuX03Dg8KkcnpfQXByLl9NYWlfSnVuaV9KdWxpX0F1Zy5fU2VwLl9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1NvLl9Nby5fRGkuX01pLl9Eby5fRnIuX1NhLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2hldXRlIHVtXSBMVCBbVWhyXScsXG4gICAgc2FtZUVsc2U6ICdMJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0RGF5OiAnW2dlc3Rlcm4gdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAndm9yICVzJyxcbiAgICBzOiAnZWluIHBhYXIgU2VrdW5kZW4nLFxuICAgIHNzOiAnJWQgU2VrdW5kZW4nLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06ICclZCBNaW51dGVuJyxcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGhoOiAnJWQgU3R1bmRlbicsXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSkgW2VuLWdiXVxuLy8hIGF1dGhvciA6IENocmlzIEdlZHJpbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2dlZHJpbVxuXG5leHBvcnQgY29uc3QgZW5HYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VuLWdiJyxcbiAgbW9udGhzIDogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ0REL01NL1lZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgIHBhc3QgOiAnJXMgYWdvJyxcbiAgICBzIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgIHNzIDogJyVkIHNlY29uZHMnLFxuICAgIG0gOiAnYSBtaW51dGUnLFxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgIGggOiAnYW4gaG91cicsXG4gICAgaGggOiAnJWQgaG91cnMnLFxuICAgIGQgOiAnYSBkYXknLFxuICAgIGRkIDogJyVkIGRheXMnLFxuICAgIE0gOiAnYSBtb250aCcsXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcbiAgICB5IDogJ2EgeWVhcicsXG4gICAgeXkgOiAnJWQgeWVhcnMnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdHxuZHxyZHx0aCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGNvbnN0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggKERvbWluaWNhbiBSZXB1YmxpYykgW2VzLWRvXVxuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15lbmUvaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXAvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kaWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlfGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgZXNEb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VzLWRvJyxcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw4PCqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdoOm1tIEEnLFxuICAgIExUUzogJ2g6bW06c3MgQScsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgaDptbSBBJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIGg6bW0gQSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbaG95IGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdoYWNlICVzJyxcbiAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGHDg8KxbycsXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3BhbmlzaCBbZXNdXG4vLyEgYXV0aG9yIDogSnVsaW8gTmFwdXLDg8KtIDogaHR0cHM6Ly9naXRodWIuY29tL2p1bGlvbmNcblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eZW5lL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2VwL2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGljL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZXxlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IGVzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXMnLFxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH1cblxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmUpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw4PCqS5fanVlLl92aWUuX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbYXllciBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcODwrFvJyxcbiAgICB5eTogJyVkIGHDg8Kxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTcGFuaXNoIChVbml0ZWQgU3RhdGVzKSBbZXMtdXNdXG4vLyEgYXV0aG9yIDogYnVzdHRhIDogaHR0cHM6Ly9naXRodWIuY29tL2J1c3R0YVxuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmV4cG9ydCBjb25zdCBlc1VzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXMtdXMnLFxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw4PCqS5fanVlLl92aWUuX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ2g6bW0gQScsXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgTEw6ICdNTU1NIFtkZV0gRCBbZGVdIFlZWVknLFxuICAgIExMTDogJ01NTU0gW2RlXSBEIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBNTU1NIFtkZV0gRCBbZGVdIFlZWVkgaDptbSBBJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcODwrFvJyxcbiAgICB5eTogJyVkIGHDg8Kxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9maS5qc1xuXG52YXIgbnVtYmVyc1Bhc3QgPSAnbm9sbGEgeWtzaSBrYWtzaSBrb2xtZSBuZWxqw4PCpCB2aWlzaSBrdXVzaSBzZWl0c2Vtw4PCpG4ga2FoZGVrc2FuIHloZGVrc8ODwqRuJy5zcGxpdCgnICcpLFxuICBudW1iZXJzRnV0dXJlID0gW1xuICAgICdub2xsYScsICd5aGRlbicsICdrYWhkZW4nLCAna29sbWVuJywgJ25lbGrDg8KkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcbiAgICBudW1iZXJzUGFzdFs3XSwgbnVtYmVyc1Bhc3RbOF0sIG51bWJlcnNQYXN0WzldXG4gIF07XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ211dXRhbWFuIHNla3VubmluJyA6ICdtdXV0YW1hIHNla3VudGknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdzZWt1bm5pbicgOiAnc2VrdW50aWEnO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aSc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAnbWludXV0aW4nIDogJ21pbnV1dHRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpJztcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8KkJztcbiAgICBjYXNlICdkZCc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8Kkw4PCpCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXNpJztcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXR0YSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3NpJztcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3R0YSc7XG4gICAgICBicmVhaztcbiAgfVxuICByZXN1bHQgPSB2ZXJiYWxOdW1iZXIobnVtLCBpc0Z1dHVyZSkgKyAnICcgKyByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHZlcmJhbE51bWJlcihudW06IG51bWJlciwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIG51bSA8IDEwID8gKGlzRnV0dXJlID8gbnVtYmVyc0Z1dHVyZVtudW1dIDogbnVtYmVyc1Bhc3RbbnVtXSkgOiBudW07XG59XG5cbmV4cG9ydCBjb25zdCBmaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2ZpJyxcbiAgbW9udGhzOiAndGFtbWlrdXVfaGVsbWlrdXVfbWFhbGlza3V1X2h1aHRpa3V1X3RvdWtva3V1X2tlc8ODwqRrdXVfaGVpbsODwqRrdXVfZWxva3V1X3N5eXNrdXVfbG9rYWt1dV9tYXJyYXNrdXVfam91bHVrdXUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAndGFtbWlfaGVsbWlfbWFhbGlzX2h1aHRpX3RvdWtvX2tlc8ODwqRfaGVpbsODwqRfZWxvX3N5eXNfbG9rYV9tYXJyYXNfam91bHUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnc3VubnVudGFpX21hYW5hbnRhaV90aWlzdGFpX2tlc2tpdmlpa2tvX3RvcnN0YWlfcGVyamFudGFpX2xhdWFudGFpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISC5tbScsXG4gICAgTFRTOiAnSEgubW0uc3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0RvIE1NTU1bdGFdIFlZWVknLFxuICAgIExMTDogJ0RvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIGw6ICdELk0uWVlZWScsXG4gICAgbGw6ICdEbyBNTU0gWVlZWScsXG4gICAgbGxsOiAnRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBsbGxsOiAnZGRkLCBEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1t0w4PCpG7Dg8Kkw4PCpG5dIFtrbG9dIExUJyxcbiAgICBuZXh0RGF5OiAnW2h1b21lbm5hXSBba2xvXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtrbG9dIExUJyxcbiAgICBsYXN0RGF5OiAnW2VpbGVuXSBba2xvXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbdmlpbWVdIGRkZGRbbmFdIFtrbG9dIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHDDg8Kkw4PCpHN0w4PCpCcsXG4gICAgcGFzdDogJyVzIHNpdHRlbicsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBGcmVuY2ggW2ZyXVxuLy8hIGF1dGhvciA6IEpvaG4gRmlzY2hlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qZnJvZmZpY2VcblxuZXhwb3J0IGNvbnN0IGZyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZnInLFxuICBtb250aHM6ICdqYW52aWVyX2bDg8KpdnJpZXJfbWFyc19hdnJpbF9tYWlfanVpbl9qdWlsbGV0X2Fvw4PCu3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMODwqljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFudi5fZsODwql2ci5fbWFyc19hdnIuX21haV9qdWluX2p1aWwuX2Fvw4PCu3Rfc2VwdC5fb2N0Ll9ub3YuX2TDg8KpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkaV9sdV9tYV9tZV9qZV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbQXVqb3VyZMOiwoDCmWh1aSDDg8KgXSBMVCcsXG4gICAgbmV4dERheTogJ1tEZW1haW4gw4PCoF0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoF0gTFQnLFxuICAgIGxhc3REYXk6ICdbSGllciDDg8KgXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdkZGRkIFtkZXJuaWVyIMODwqBdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2RhbnMgJXMnLFxuICAgIHBhc3Q6ICdpbCB5IGEgJXMnLFxuICAgIHM6ICdxdWVscXVlcyBzZWNvbmRlcycsXG4gICAgc3M6ICclZCBzZWNvbmRlcycsXG4gICAgbTogJ3VuZSBtaW51dGUnLFxuICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgaDogJ3VuZSBoZXVyZScsXG4gICAgaGg6ICclZCBoZXVyZXMnLFxuICAgIGQ6ICd1biBqb3VyJyxcbiAgICBkZDogJyVkIGpvdXJzJyxcbiAgICBNOiAndW4gbW9pcycsXG4gICAgTU06ICclZCBtb2lzJyxcbiAgICB5OiAndW4gYW4nLFxuICAgIHl5OiAnJWQgYW5zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8KS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAvLyBUT0RPOiBSZXR1cm4gJ2UnIHdoZW4gZGF5IG9mIG1vbnRoID4gMS4gTW92ZSB0aGlzIGNhc2UgaW5zaWRlXG4gICAgICAvLyBibG9jayBmb3IgbWFzY3VsaW5lIHdvcmRzIGJlbG93LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8zMzc1XG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJycpO1xuXG4gICAgICAvLyBXb3JkcyB3aXRoIG1hc2N1bGluZSBncmFtbWF0aWNhbCBnZW5kZXI6IG1vaXMsIHRyaW1lc3RyZSwgam91clxuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnUSc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ2VyJyA6ICdlJyk7XG5cbiAgICAgIC8vIFdvcmRzIHdpdGggZmVtaW5pbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBzZW1haW5lXG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdyZScgOiAnZScpO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cbi8vISBhdXRob3IgOiBEYXLDg8KtbyBCZWlyw4PCsyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlub2JyYXZvXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICd4YW4uX2ZlYi5fbWFyLl9hYnIuX21haS5feHXDg8KxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAneGFuX2ZlYl9tYXJfYWJyX21haV94dcODwrFfeHVsX2Fnb19zZXRfb3V0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXnhhbi9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1haS9pLCAvXnh1w4PCsS9pLCAvXnh1bC9pLCAvXmFnby9pLCAvXnNldC9pLCAvXm91dC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvfHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcODwrFcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgZ2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdnbCcsXG4gIG1vbnRoczogJ3hhbmVpcm9fZmVicmVpcm9fbWFyem9fYWJyaWxfbWFpb194dcODwrFvX3h1bGxvX2Fnb3N0b19zZXRlbWJyb19vdXR1YnJvX25vdmVtYnJvX2RlY2VtYnJvJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH1cblxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXih4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDg8KxXFwuP3x4dWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvdXRcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuc19tYXJ0ZXNfbcODwqlyY29yZXNfeG92ZXNfdmVucmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX23Dg8Kpci5feG92Ll92ZW4uX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbcODwqlfeG9fdmVfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2hveGUgw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW4gw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnZGRkZCBbw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbb250ZSDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbb10gZGRkZCBbcGFzYWRvIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnZmFpICVzJyxcbiAgICBzOiAndW5zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmhhIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGFubycsXG4gICAgeXk6ICclZCBhbm9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIZWJyZXcgW2hlXVxuLy8hIGF1dGhvciA6IFRvbWVyIENvaGVuIDogaHR0cHM6Ly9naXRodWIuY29tL3RvbWVyXG4vLyEgYXV0aG9yIDogTW9zaGUgU2ltYW50b3YgOiBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcG1lbnRJTFxuLy8hIGF1dGhvciA6IFRhbCBBdGVyIDogaHR0cHM6Ly9naXRodWIuY29tL1RhbEF0ZXJcblxuZXhwb3J0IGNvbnN0IGhlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaGUnLFxuICBtb250aHM6ICfDl8KZw5fCoMOXwpXDl8KQw5fCqF/Dl8Kkw5fCkcOXwqjDl8KVw5fCkMOXwqhfw5fCnsOXwqjDl8KlX8OXwpDDl8Kkw5fCqMOXwpnDl8KcX8OXwp7Dl8KQw5fCmV/Dl8KZw5fClcOXwqDDl8KZX8OXwpnDl8KVw5fCnMOXwplfw5fCkMOXwpXDl8KSw5fClcOXwqHDl8KYX8OXwqHDl8Kkw5fCmMOXwp7Dl8KRw5fCqF/Dl8KQw5fClcOXwqfDl8KYw5fClcOXwpHDl8KoX8OXwqDDl8KVw5fCkcOXwp7Dl8KRw5fCqF/Dl8KTw5fCpsOXwp7Dl8KRw5fCqCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDl8KZw5fCoMOXwpXDl8KzX8OXwqTDl8KRw5fCqMOXwrNfw5fCnsOXwqjDl8KlX8OXwpDDl8Kkw5fCqMOXwrNfw5fCnsOXwpDDl8KZX8OXwpnDl8KVw5fCoMOXwplfw5fCmcOXwpXDl8Kcw5fCmV/Dl8KQw5fClcOXwpLDl8KzX8OXwqHDl8Kkw5fCmMOXwrNfw5fCkMOXwpXDl8Knw5fCs1/Dl8Kgw5fClcOXwpHDl8KzX8OXwpPDl8Kmw5fCnsOXwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnw5fCqMOXwpDDl8Kpw5fClcOXwp9fw5fCqcOXwqDDl8KZX8OXwqnDl8Kcw5fCmcOXwqnDl8KZX8OXwqjDl8KRw5fCmcOXwqLDl8KZX8OXwpfDl8Kew5fCmcOXwqnDl8KZX8OXwqnDl8KZw5fCqcOXwplfw5fCqcOXwpHDl8KqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw5fCkMOXwrNfw5fCkcOXwrNfw5fCksOXwrNfw5fCk8OXwrNfw5fClMOXwrNfw5fClcOXwrNfw5fCqcOXwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5fCkF/Dl8KRX8OXwpJfw5fCk1/Dl8KUX8OXwpVfw5fCqScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbw5fCkV1NTU1NIFlZWVknLFxuICAgIExMTDogJ0QgW8OXwpFdTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbw5fCkV1NTU1NIFlZWVkgSEg6bW0nLFxuICAgIGw6ICdEL00vWVlZWScsXG4gICAgbGw6ICdEIE1NTSBZWVlZJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkLCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5fClMOXwpnDl8KVw5fCnSDDl8KRw5bCvl1MVCcsXG4gICAgbmV4dERheTogJ1vDl8Kew5fCl8OXwqggw5fCkcOWwr5dTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5fCkcOXwqnDl8Kiw5fClF0gTFQnLFxuICAgIGxhc3REYXk6ICdbw5fCkMOXwqrDl8Kew5fClcOXwpwgw5fCkcOWwr5dTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OXwpHDl8KZw5fClcOXwp1dIGRkZGQgW8OXwpTDl8KQw5fCl8OXwqjDl8KVw5fCnyDDl8KRw5fCqcOXwqLDl8KUXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDl8KRw5fCosOXwpXDl8KTICVzJyxcbiAgICBwYXN0OiAnw5fCnMOXwqTDl8Kgw5fCmSAlcycsXG4gICAgczogJ8OXwp7Dl8Khw5fCpMOXwqggw5fCqcOXwqDDl8KZw5fClcOXwqonLFxuICAgIHNzOiAnJWQgw5fCqcOXwqDDl8KZw5fClcOXwqonLFxuICAgIG06ICfDl8KTw5fCp8OXwpQnLFxuICAgIG1tOiAnJWQgw5fCk8OXwqfDl8KVw5fCqicsXG4gICAgaDogJ8OXwqnDl8Kiw5fClCcsXG4gICAgaGgobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwqnDl8Kiw5fCqsOXwpnDl8KZw5fCnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCosOXwpXDl8KqJztcbiAgICB9LFxuICAgIGQ6ICfDl8KZw5fClcOXwp0nLFxuICAgIGRkKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8KZw5fClcOXwp7Dl8KZw5fCmcOXwp0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCmcOXwp7Dl8KZw5fCnSc7XG4gICAgfSxcbiAgICBNOiAnw5fCl8OXwpXDl8KTw5fCqScsXG4gICAgTU0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwpfDl8KVw5fCk8OXwqnDl8KZw5fCmcOXwp0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCl8OXwpXDl8KTw5fCqcOXwpnDl8KdJztcbiAgICB9LFxuICAgIHk6ICfDl8Kpw5fCoMOXwpQnLFxuICAgIHl5KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8Kpw5fCoMOXwqrDl8KZw5fCmcOXwp0nO1xuICAgICAgfSBlbHNlIGlmIChudW0gJSAxMCA9PT0gMCAmJiBudW0gIT09IDEwKSB7XG4gICAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kgw5fClCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCoMOXwpnDl8KdJztcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/Dl8KQw5fCl8OXwpRcIsOXwqZ8w5fCnMOXwqTDl8Kgw5fClFwiw5fCpnzDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCnMOXwqTDl8Kgw5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdfMOXwpzDl8Kkw5fCoMOXwpXDl8KqIMOXwpHDl8KVw5fCp8OXwqh8w5fCkcOXwpHDl8KVw5fCp8OXwqh8w5fCkcOXwqLDl8Kow5fCkS9pLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eKMOXwpDDl8KXw5fClFwiw5fCpnzDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCkcOXwqLDl8Kow5fCkSkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA1KSB7XG4gICAgICByZXR1cm4gJ8OXwpzDl8Kkw5fCoMOXwpXDl8KqIMOXwpHDl8KVw5fCp8OXwqgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICByZXR1cm4gJ8OXwpHDl8KRw5fClcOXwqfDl8KoJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw5fCnMOXwqTDl8Kgw5fClFwiw5fCpicgOiAnw5fCnMOXwqTDl8Kgw5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxOCkge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw5fCkMOXwpfDl8KUXCLDl8KmJyA6ICfDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp0nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OXwpHDl8Kiw5fCqMOXwpEnO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIaW5kaSBbaGldXG4vLyEgYXV0aG9yIDogTWF5YW5rIFNpbmdoYWwgOiBodHRwczovL2dpdGh1Yi5jb20vbWF5YW5rc2luZ2hhbFxuXG5sZXQgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAxOiAnw6DCpcKnJyxcbiAgICAyOiAnw6DCpcKoJyxcbiAgICAzOiAnw6DCpcKpJyxcbiAgICA0OiAnw6DCpcKqJyxcbiAgICA1OiAnw6DCpcKrJyxcbiAgICA2OiAnw6DCpcKsJyxcbiAgICA3OiAnw6DCpcKtJyxcbiAgICA4OiAnw6DCpcKuJyxcbiAgICA5OiAnw6DCpcKvJyxcbiAgICAwOiAnw6DCpcKmJ1xuICB9LFxuICBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICfDoMKlwqcnOiAnMScsXG4gICAgJ8OgwqXCqCc6ICcyJyxcbiAgICAnw6DCpcKpJzogJzMnLFxuICAgICfDoMKlwqonOiAnNCcsXG4gICAgJ8OgwqXCqyc6ICc1JyxcbiAgICAnw6DCpcKsJzogJzYnLFxuICAgICfDoMKlwq0nOiAnNycsXG4gICAgJ8OgwqXCric6ICc4JyxcbiAgICAnw6DCpcKvJzogJzknLFxuICAgICfDoMKlwqYnOiAnMCdcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGhpTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaGknLFxuICBtb250aHM6ICfDoMKkwpzDoMKkwqjDoMKkwrXDoMKkwrDDoMKlwoBfw6DCpMKrw6DCpMK8w6DCpMKww6DCpMK1w6DCpMKww6DCpcKAX8OgwqTCrsOgwqTCvsOgwqTCsMOgwqXCjcOgwqTCml/DoMKkwoXDoMKkwqrDoMKlwo3DoMKkwrDDoMKlwojDoMKkwrJfw6DCpMKuw6DCpMKIX8OgwqTCnMOgwqXCgsOgwqTCqF/DoMKkwpzDoMKlwoHDoMKkwrLDoMKkwr7DoMKkwohfw6DCpMKFw6DCpMKXw6DCpMK4w6DCpcKNw6DCpMKkX8OgwqTCuMOgwqTCv8OgwqTCpMOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsF/DoMKkwoXDoMKkwpXDoMKlwo3DoMKkwp/DoMKlwoLDoMKkwqzDoMKkwrBfw6DCpMKow6DCpMK1w6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwX8OgwqTCpsOgwqTCv8OgwqTCuMOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDoMKkwpzDoMKkwqguX8OgwqTCq8OgwqTCvMOgwqTCsC5fw6DCpMKuw6DCpMK+w6DCpMKww6DCpcKNw6DCpMKaX8OgwqTChcOgwqTCqsOgwqXCjcOgwqTCsMOgwqXCiC5fw6DCpMKuw6DCpMKIX8OgwqTCnMOgwqXCgsOgwqTCqF/DoMKkwpzDoMKlwoHDoMKkwrIuX8OgwqTChcOgwqTCly5fw6DCpMK4w6DCpMK/w6DCpMKkLl/DoMKkwoXDoMKkwpXDoMKlwo3DoMKkwp/DoMKlwoIuX8OgwqTCqMOgwqTCtS5fw6DCpMKmw6DCpMK/w6DCpMK4Licuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfDoMKkwrDDoMKkwrXDoMKkwr/DoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK4w6DCpcKLw6DCpMKuw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCrsOgwqTCgsOgwqTCl8OgwqTCssOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwqzDoMKlwoHDoMKkwqfDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKXw6DCpcKBw6DCpMKww6DCpcKCw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCtsOgwqXCgcOgwqTClcOgwqXCjcOgwqTCsMOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrbDoMKkwqjDoMKkwr/DoMKkwrXDoMKkwr7DoMKkwrAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMKkwrDDoMKkwrXDoMKkwr9fw6DCpMK4w6DCpcKLw6DCpMKuX8OgwqTCrsOgwqTCgsOgwqTCl8OgwqTCsl/DoMKkwqzDoMKlwoHDoMKkwqdfw6DCpMKXw6DCpcKBw6DCpMKww6DCpcKCX8OgwqTCtsOgwqXCgcOgwqTClcOgwqXCjcOgwqTCsF/DoMKkwrbDoMKkwqjDoMKkwr8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw6DCpMKwX8OgwqTCuMOgwqXCi1/DoMKkwq7DoMKkwoJfw6DCpMKsw6DCpcKBX8OgwqTCl8OgwqXCgV/DoMKkwrbDoMKlwoFfw6DCpMK2Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChycsXG4gICAgTFRTOiAnQSBoOm1tOnNzIMOgwqTCrMOgwqTCnMOgwqXChycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZLCBBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDoMKkwobDoMKkwpxdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OgwqTClcOgwqTCsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxuICAgIGxhc3REYXk6ICdbw6DCpMKVw6DCpMKyXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbw6DCpMKqw6DCpMK/w6DCpMKbw6DCpMKyw6DCpcKHXSBkZGRkLCBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyDDoMKkwq7DoMKlwofDoMKkwoInLFxuICAgIHBhc3Q6ICclcyDDoMKkwqrDoMKkwrnDoMKkwrLDoMKlwocnLFxuICAgIHM6ICfDoMKkwpXDoMKlwoHDoMKkwpsgw6DCpMK5w6DCpcKAIMOgwqTClcOgwqXCjcOgwqTCt8OgwqTCoycsXG4gICAgc3M6ICclZCDDoMKkwrjDoMKlwofDoMKkwpXDoMKkwoLDoMKkwqEnLFxuICAgIG06ICfDoMKkwo/DoMKkwpUgw6DCpMKuw6DCpMK/w6DCpMKow6DCpMKfJyxcbiAgICBtbTogJyVkIMOgwqTCrsOgwqTCv8OgwqTCqMOgwqTCnycsXG4gICAgaDogJ8OgwqTCj8OgwqTClSDDoMKkwpjDoMKkwoLDoMKkwp/DoMKkwr4nLFxuICAgIGhoOiAnJWQgw6DCpMKYw6DCpMKCw6DCpMKfw6DCpcKHJyxcbiAgICBkOiAnw6DCpMKPw6DCpMKVIMOgwqTCpsOgwqTCv8OgwqTCqCcsXG4gICAgZGQ6ICclZCDDoMKkwqbDoMKkwr/DoMKkwqgnLFxuICAgIE06ICfDoMKkwo/DoMKkwpUgw6DCpMKuw6DCpMK5w6DCpcKAw6DCpMKow6DCpcKHJyxcbiAgICBNTTogJyVkIMOgwqTCrsOgwqTCucOgwqXCgMOgwqTCqMOgwqXChycsXG4gICAgeTogJ8OgwqTCj8OgwqTClSDDoMKkwrXDoMKkwrDDoMKlwo3DoMKkwrcnLFxuICAgIHl5OiAnJWQgw6DCpMK1w6DCpMKww6DCpcKNw6DCpMK3J1xuICB9LFxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bw6DCpcKnw6DCpcKow6DCpcKpw6DCpcKqw6DCpcKrw6DCpcKsw6DCpcKtw6DCpcKuw6DCpcKvw6DCpcKmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9LFxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9LFxuICAvLyBIaW5kaSBub3RhdGlvbiBmb3IgbWVyaWRpZW1zIGFyZSBxdWl0ZSBmdXp6eSBpbiBwcmFjdGljZS4gV2hpbGUgdGhlcmUgZXhpc3RzXG4gIC8vIGEgcmlnaWQgbm90aW9uIG9mIGEgJ1BhaGFyJyBpdCBpcyBub3QgdXNlZCBhcyByaWdpZGx5IGluIG1vZGVybiBIaW5kaS5cbiAgbWVyaWRpZW1QYXJzZTogL8OgwqTCsMOgwqTCvsOgwqTCpHzDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrl8w6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwfMOgwqTCtsOgwqTCvsOgwqTCri8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCsMOgwqTCvsOgwqTCpCcpIHtcbiAgICAgIHJldHVybiBob3VyIDwgNCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuScpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrAnKSB7XG4gICAgICByZXR1cm4gaG91ciA+PSAxMCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCtsOgwqTCvsOgwqTCricpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgIHJldHVybiAnw6DCpMKww6DCpMK+w6DCpMKkJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgcmV0dXJuICfDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrknO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICByZXR1cm4gJ8OgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMjApIHtcbiAgICAgIHJldHVybiAnw6DCpMK2w6DCpMK+w6DCpMKuJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDoMKkwrDDoMKkwr7DoMKkwqQnO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEh1bmdhcmlhbiBbaHVdXG4vLyEgYXV0aG9yIDogQWRhbSBCcnVubmVyIDogaHR0cHM6Ly9naXRodWIuY29tL2FkYW1icnVubmVyXG5cbmxldCB3ZWVrRW5kaW5ncyA9ICd2YXPDg8Khcm5hcCBow4PCqXRmw4XCkW4ga2VkZGVuIHN6ZXJkw4PCoW4gY3PDg8K8dMODwrZydMODwrZrw4PCtm4gcMODwqludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICduw4PCqWjDg8KhbnkgbcODwqFzb2RwZXJjJyA6ICduw4PCqWjDg8KhbnkgbcODwqFzb2RwZXJjZSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIG51bSArICgoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnIG3Dg8Khc29kcGVyYycgOiAnIG3Dg8Khc29kcGVyY2UnKTtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwrNyYScgOiAnIMODwrNyw4PCoWphJyk7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KzcmEnIDogJyDDg8KzcsODwqFqYScpO1xuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDg8KzbmFwJyA6ICcgaMODwrNuYXBqYScpO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMODwrNuYXAnIDogJyBow4PCs25hcGphJyk7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCqXYnIDogJyDDg8KpdmUnKTtcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwql2JyA6ICcgw4PCqXZlJyk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gKGlzRnV0dXJlID8gJycgOiAnW23Dg8K6bHRdICcpICsgJ1snICsgd2Vla0VuZGluZ3NbZ2V0RGF5T2ZXZWVrKGRhdGUpXSArICddIExUWy1rb3JdJztcbn1cblxuZXhwb3J0IGNvbnN0IGh1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaHUnLFxuICBtb250aHMgOiAnamFudcODwqFyX2ZlYnJ1w4PCoXJfbcODwqFyY2l1c1/Dg8KhcHJpbGlzX23Dg8KhanVzX2rDg8K6bml1c19qw4PCumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w4PCs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw4PCoXJjX8ODwqFwcl9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWdfc3plcHRfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ3Zhc8ODwqFybmFwX2jDg8KpdGbDhcKRX2tlZGRfc3plcmRhX2Nzw4PCvHTDg8K2cnTDg8K2a19ww4PCqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMODwql0X2tlZGRfc3plX2Nzw4PCvHRfcMODwqluX3N6bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdIOm1tJyxcbiAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkRELicsXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXG4gICAgTExMIDogJ1lZWVkuIE1NTU0gRC4gSDptbScsXG4gICAgTExMTCA6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xuICB9LFxuICBtZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZGUnIDogJ0RFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXG4gICAgbmV4dERheSA6ICdbaG9sbmFwXSBMVFsta29yXScsXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIHRydWUpO1xuICAgIH0sXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXG4gICAgbGFzdFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIGZhbHNlKTtcbiAgICB9LFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgbcODwrpsdmEnLFxuICAgIHBhc3QgOiAnJXMnLFxuICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgc3MgOiB0cmFuc2xhdGUsXG4gICAgbSA6IHRyYW5zbGF0ZSxcbiAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICBoIDogdHJhbnNsYXRlLFxuICAgIGhoIDogdHJhbnNsYXRlLFxuICAgIGQgOiB0cmFuc2xhdGUsXG4gICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgTSA6IHRyYW5zbGF0ZSxcbiAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICB5IDogdHJhbnNsYXRlLFxuICAgIHl5IDogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSW5kb25lc2lhIFtpZF1cbi8vISBhdXRob3IgOiBSb215IEt1c3VtYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ya3VzdW1hXG4vLyEgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9ibG9iL2RldmVsb3AvbG9jYWxlL2lkLmpzXG5cbmV4cG9ydCBjb25zdCBpZExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2lkJyxcbiAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFyZXRfQXByaWxfTWVpX0p1bmlfSnVsaV9BZ3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWVpX0p1bl9KdWxfQWdzX1NlcF9Pa3RfTm92X0Rlcycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnTWluZ2d1X1NlbmluX1NlbGFzYV9SYWJ1X0thbWlzX0p1bWF0X1NhYnR1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JhYl9LYW1fSnVtX1NhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnTWdfU25fU2xfUmJfS21fSm1fU2InLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hILm1tJyxcbiAgICBMVFMgOiAnSEgubW0uc3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9wYWdpfHNpYW5nfHNvcmV8bWFsYW0vLFxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIGhvdXIgPSAwO1xuICAgIH1cbiAgICBpZiAobWVyaWRpZW0gPT09ICdwYWdpJykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NpYW5nJykge1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzb3JlJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzIDwgMTEpIHtcbiAgICAgIHJldHVybiAncGFnaSc7XG4gICAgfSBlbHNlIGlmIChob3VycyA8IDE1KSB7XG4gICAgICByZXR1cm4gJ3NpYW5nJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcbiAgICAgIHJldHVybiAnc29yZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbWFsYW0nO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbSGFyaSBpbmkgcHVrdWxdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tCZXNvayBwdWt1bF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW3B1a3VsXSBMVCcsXG4gICAgbGFzdERheSA6ICdbS2VtYXJpbiBwdWt1bF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ2RkZGQgW2xhbHUgcHVrdWxdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ2RhbGFtICVzJyxcbiAgICBwYXN0IDogJyVzIHlhbmcgbGFsdScsXG4gICAgcyA6ICdiZWJlcmFwYSBkZXRpaycsXG4gICAgc3MgOiAnJWQgZGV0aWsnLFxuICAgIG0gOiAnc2VtZW5pdCcsXG4gICAgbW0gOiAnJWQgbWVuaXQnLFxuICAgIGggOiAnc2VqYW0nLFxuICAgIGhoIDogJyVkIGphbScsXG4gICAgZCA6ICdzZWhhcmknLFxuICAgIGRkIDogJyVkIGhhcmknLFxuICAgIE0gOiAnc2VidWxhbicsXG4gICAgTU0gOiAnJWQgYnVsYW4nLFxuICAgIHkgOiAnc2V0YWh1bicsXG4gICAgeXkgOiAnJWQgdGFodW4nXG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEl0YWxpYW4gW2l0XVxuLy8hIGF1dGhvciA6IExvcmVuem8gOiBodHRwczovL2dpdGh1Yi5jb20vYWxpZW1cbi8vISBhdXRob3I6IE1hdHRpYSBMYXJlbnRpczogaHR0cHM6Ly9naXRodWIuY29tL25vc3RhbGdpYXpcblxuZXhwb3J0IGNvbnN0IGl0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaXQnLFxuICBtb250aHM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnZG9tZW5pY2FfbHVuZWTDg8KsX21hcnRlZMODwqxfbWVyY29sZWTDg8KsX2dpb3ZlZMODwqxfdmVuZXJkw4PCrF9zYWJhdG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb21fbHVuX21hcl9tZXJfZ2lvX3Zlbl9zYWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWVfZ2lfdmVfc2EnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tPZ2dpIGFsbGVdIExUJyxcbiAgICBuZXh0RGF5OiAnW0RvbWFuaSBhbGxlXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFthbGxlXSBMVCcsXG4gICAgbGFzdERheTogJ1tJZXJpIGFsbGVdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbGEgc2NvcnNhXSBkZGRkIFthbGxlXSBMVCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbbG8gc2NvcnNvXSBkZGRkIFthbGxlXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKCgvXlswLTldLiskLykudGVzdChudW0udG9TdHJpbmcoMTApKSA/ICd0cmEnIDogJ2luJykgKyAnICcgKyBudW07XG4gICAgfSxcbiAgICBwYXN0OiAnJXMgZmEnLFxuICAgIHM6ICdhbGN1bmkgc2Vjb25kaScsXG4gICAgc3M6ICclZCBzZWNvbmRpJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0aScsXG4gICAgaDogJ3VuXFwnb3JhJyxcbiAgICBoaDogJyVkIG9yZScsXG4gICAgZDogJ3VuIGdpb3JubycsXG4gICAgZGQ6ICclZCBnaW9ybmknLFxuICAgIE06ICd1biBtZXNlJyxcbiAgICBNTTogJyVkIG1lc2knLFxuICAgIHk6ICd1biBhbm5vJyxcbiAgICB5eTogJyVkIGFubmknXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEphcGFuZXNlIFtqYV1cbi8vISBhdXRob3IgOiBMSSBMb25nIDogaHR0cHM6Ly9naXRodWIuY29tL2JhcnlvblxuXG5leHBvcnQgY29uc3QgamFMb2NhbGU6IExvY2FsZURhdGEgPSAge1xuICBhYmJyOiAnamEnLFxuICBtb250aHMgOiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJzHDpsKcwohfMsOmwpzCiF8zw6bCnMKIXzTDpsKcwohfNcOmwpzCiF82w6bCnMKIXzfDpsKcwohfOMOmwpzCiF85w6bCnMKIXzEww6bCnMKIXzExw6bCnMKIXzEyw6bCnMKIJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICfDpsKXwqXDpsKbwpzDpsKXwqVfw6bCnMKIw6bCm8Kcw6bCl8KlX8OnwoHCq8OmwpvCnMOmwpfCpV/DpsKwwrTDpsKbwpzDpsKXwqVfw6bCnMKow6bCm8Kcw6bCl8KlX8OpwofCkcOmwpvCnMOmwpfCpV/DpcKcwp/DpsKbwpzDpsKXwqUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnw6bCl8KlX8OmwpzCiF/Dp8KBwqtfw6bCsMK0X8OmwpzCqF/DqcKHwpFfw6XCnMKfJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICfDpsKXwqVfw6bCnMKIX8OnwoHCq1/DpsKwwrRfw6bCnMKoX8OpwofCkV/DpcKcwp8nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnWVlZWS9NTS9ERCcsXG4gICAgTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcbiAgICBMTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tJyxcbiAgICBMTExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbSBkZGRkJyxcbiAgICBsIDogJ1lZWVkvTU0vREQnLFxuICAgIGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgbGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXG4gICAgbGxsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0gZGRkZCdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8Olwo3CiMOlwonCjXzDpcKNwojDpcK+wowvaSxcbiAgaXNQTSAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfDpcKNwojDpcK+wownO1xuICB9LFxuICBtZXJpZGllbSAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDpcKNwojDpcKJwo0nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8Olwo3CiMOlwr7CjCc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1vDpMK7worDpsKXwqVdIExUJyxcbiAgICBuZXh0RGF5IDogJ1vDpsKYwo7DpsKXwqVdIExUJyxcbiAgICBuZXh0V2VlayA6ICdbw6bCncKlw6nCgMKxXWRkZGQgTFQnLFxuICAgIGxhc3REYXkgOiAnW8OmwpjCqMOmwpfCpV0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1vDpcKJwo3DqcKAwrFdZGRkZCBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfcOmwpfCpS8sXG4gIG9yZGluYWwgKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpfCpSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXPDpcK+wownLFxuICAgIHBhc3QgOiAnJXPDpcKJwo0nLFxuICAgIHMgOiAnw6bClcKww6fCp8KSJyxcbiAgICBzcyA6ICclZMOnwqfCkicsXG4gICAgbSA6ICcxw6XCiMKGJyxcbiAgICBtbSA6ICclZMOlwojChicsXG4gICAgaCA6ICcxw6bCmcKCw6nClsKTJyxcbiAgICBoaCA6ICclZMOmwpnCgsOpwpbCkycsXG4gICAgZCA6ICcxw6bCl8KlJyxcbiAgICBkZCA6ICclZMOmwpfCpScsXG4gICAgTSA6ICcxw6PCg8K2w6bCnMKIJyxcbiAgICBNTSA6ICclZMOjwoPCtsOmwpzCiCcsXG4gICAgeSA6ICcxw6XCucK0JyxcbiAgICB5eSA6ICclZMOlwrnCtCdcbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLb3JlYW4gW2tvXVxuLy8hIGF1dGhvciA6IEt5dW5nd29vaywgUGFyayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9reXVuZ3cwMGtcbi8vISBhdXRob3IgOiBKZWVleXVsIExlZSA8amVlZXl1bEBnbWFpbC5jb20+XG5cbmV4cG9ydCBjb25zdCBrb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2tvJyxcbiAgbW9udGhzIDogJzHDrMKbwpRfMsOswpvClF8zw6zCm8KUXzTDrMKbwpRfNcOswpvClF82w6zCm8KUXzfDrMKbwpRfOMOswpvClF85w6zCm8KUXzEww6zCm8KUXzExw6zCm8KUXzEyw6zCm8KUJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICcxw6zCm8KUXzLDrMKbwpRfM8OswpvClF80w6zCm8KUXzXDrMKbwpRfNsOswpvClF83w6zCm8KUXzjDrMKbwpRfOcOswpvClF8xMMOswpvClF8xMcOswpvClF8xMsOswpvClCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnw6zCncK8w6zCmsKUw6zCncK8X8OswpvClMOswprClMOswp3CvF/DrcKZwpTDrMKawpTDrMKdwrxfw6zCiMKYw6zCmsKUw6zCncK8X8OrwqrCqcOswprClMOswp3CvF/DqsK4wojDrMKawpTDrMKdwrxfw63ChsKgw6zCmsKUw6zCncK8Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ8Oswp3CvF/DrMKbwpRfw63CmcKUX8OswojCmF/Dq8Kqwqlfw6rCuMKIX8OtwobCoCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnw6zCncK8X8OswpvClF/DrcKZwpRfw6zCiMKYX8OrwqrCqV/DqsK4wohfw63ChsKgJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdBIGg6bW0nLFxuICAgIExUUyA6ICdBIGg6bW06c3MnLFxuICAgIEwgOiAnWVlZWS5NTS5ERCcsXG4gICAgTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwnLFxuICAgIExMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxuICAgIExMTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgZGRkZCBBIGg6bW0nLFxuICAgIGwgOiAnWVlZWS5NTS5ERCcsXG4gICAgbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwnLFxuICAgIGxsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxuICAgIGxsbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgZGRkZCBBIGg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnw6zCmMKkw6vCisKYIExUJyxcbiAgICBuZXh0RGF5IDogJ8OrwoLCtMOswp3CvCBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgbGFzdERheSA6ICfDrMKWwrTDrMKgwpwgTFQnLFxuICAgIGxhc3RXZWVrIDogJ8OswqfCgMOrwoLCnMOswqPCvCBkZGRkIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIMOtwpvChCcsXG4gICAgcGFzdCA6ICclcyDDrMKgwoQnLFxuICAgIHMgOiAnw6vCqsKHIMOswrTCiCcsXG4gICAgc3MgOiAnJWTDrMK0wognLFxuICAgIG0gOiAnMcOrwrbChCcsXG4gICAgbW0gOiAnJWTDq8K2woQnLFxuICAgIGggOiAnw63ClcKcIMOswovCnMOqwrDChCcsXG4gICAgaGggOiAnJWTDrMKLwpzDqsKwwoQnLFxuICAgIGQgOiAnw63ClcKYw6vCo8KoJyxcbiAgICBkZCA6ICclZMOswp3CvCcsXG4gICAgTSA6ICfDrcKVwpwgw6vCi8KsJyxcbiAgICBNTSA6ICclZMOrwovCrCcsXG4gICAgeSA6ICfDrMKdwrwgw6vChcKEJyxcbiAgICB5eSA6ICclZMOrwoXChCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfSjDrMKdwrx8w6zCm8KUfMOswqPCvCkvLFxuICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8Oswp3CvCc7XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKbwpQnO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKjwrwnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbVBhcnNlIDogL8OswpjCpMOswqDChHzDrMKYwqTDrcKbwoQvLFxuICBpc1BNIDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuID09PSAnw6zCmMKkw63Cm8KEJztcbiAgfSxcbiAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc1VwcGVyKSB7XG4gICAgcmV0dXJuIGhvdXIgPCAxMiA/ICfDrMKYwqTDrMKgwoQnIDogJ8OswpjCpMOtwpvChCc7XG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IExpdGh1YW5pYW4gW2x0XVxuLy8hIGF1dGhvciA6IFN0YW5pc2xhdmFzIEd1ayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9peG9zdGVyXG5cbmNvbnN0IHVuaXRzID0ge1xuICBzcyA6ICdzZWt1bmTDhMKXX3Nla3VuZMOFwr5pw4XCs19zZWt1bmRlcycsXG4gIG0gOiAnbWludXTDhMKXX21pbnV0w4TCl3NfbWludXTDhMKZJyxcbiAgbW06ICdtaW51dMOEwpdzX21pbnXDhMKNacOFwrNfbWludXRlcycsXG4gIGggOiAndmFsYW5kYV92YWxhbmRvc192YWxhbmTDhMKFJyxcbiAgaGg6ICd2YWxhbmRvc192YWxhbmTDhcKzX3ZhbGFuZGFzJyxcbiAgZCA6ICdkaWVuYV9kaWVub3NfZGllbsOEwoUnLFxuICBkZDogJ2RpZW5vc19kaWVuw4XCs19kaWVuYXMnLFxuICBNIDogJ23DhMKXbnVvX23DhMKXbmVzaW9fbcOEwpduZXPDhMKvJyxcbiAgTU06ICdtw4TCl25lc2lhaV9tw4TCl25lc2nDhcKzX23DhMKXbmVzaXVzJyxcbiAgeSA6ICdtZXRhaV9tZXTDhcKzX21ldHVzJyxcbiAgeXk6ICdtZXRhaV9tZXTDhcKzX21ldHVzJ1xufTtcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNlY29uZHMobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kw4TCl3MnO1xuICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ2tlbGnDhcKzIHNla3VuZMOFwr5pw4XCsycgOiAna2VsaWFzIHNla3VuZGVzJztcbiAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlU2luZ3VsYXIobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1zKGtleSlbMF0gOiAoaXNGdXR1cmUgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XG59XG5mdW5jdGlvbiBzcGVjaWFsKG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMCB8fCAobnVtID4gMTAgJiYgbnVtIDwgMjApO1xufVxuZnVuY3Rpb24gZm9ybXMoa2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHVuaXRzW2tleV0uc3BsaXQoJ18nKTtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XG4gIGlmIChudW0gPT09IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyB0cmFuc2xhdGVTaW5ndWxhcihudW0sIHdpdGhvdXRTdWZmaXgsIGtleVswXSwgaXNGdXR1cmUpO1xuICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMF0pO1xuICB9IGVsc2Uge1xuICAgICAgaWYgKGlzRnV0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIGZvcm1zKGtleSlbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsdExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2x0JyxcbiAgbW9udGhzIDoge1xuICAgIGZvcm1hdDogJ3NhdXNpb192YXNhcmlvX2tvdm9fYmFsYW5kw4XCvmlvX2dlZ3XDhcK+w4TCl3NfYmlyw4XCvmVsaW9fbGllcG9zX3J1Z3Bqw4XCq8OEwo1pb19ydWdzw4TCl2pvX3NwYWxpb19sYXBrcmnDhMKNaW9fZ3J1b2TDhcK+aW8nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ3NhdXNpc192YXNhcmlzX2tvdmFzX2JhbGFuZGlzX2dlZ3XDhcK+w4TCl19iaXLDhcK+ZWxpc19saWVwYV9ydWdwasOFwqt0aXNfcnVnc8OEwpdqaXNfc3BhbGlzX2xhcGtyaXRpc19ncnVvZGlzJy5zcGxpdCgnXycpLFxuICAgIGlzRm9ybWF0OiAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NP3xNTU1NPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrRFtvRF0/L1xuICB9LFxuICBtb250aHNTaG9ydCA6ICdzYXVfdmFzX2tvdl9iYWxfZ2VnX2Jpcl9saWVfcmdwX3Jnc19zcGFfbGFwX2dyZCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiB7XG4gICAgICBmb3JtYXQ6ICdzZWttYWRpZW7DhMKvX3Bpcm1hZGllbsOEwq9fYW50cmFkaWVuw4TCr190cmXDhMKNaWFkaWVuw4TCr19rZXR2aXJ0YWRpZW7DhMKvX3Blbmt0YWRpZW7DhMKvX8OFwqFlw4XCoXRhZGllbsOEwq8nLnNwbGl0KCdfJyksXG4gICAgICBzdGFuZGFsb25lOiAnc2VrbWFkaWVuaXNfcGlybWFkaWVuaXNfYW50cmFkaWVuaXNfdHJlw4TCjWlhZGllbmlzX2tldHZpcnRhZGllbmlzX3Blbmt0YWRpZW5pc1/DhcKhZcOFwqF0YWRpZW5pcycuc3BsaXQoJ18nKSxcbiAgICAgIGlzRm9ybWF0OiAvZGRkZCBISDptbS9cbiAgfSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTZWtfUGlyX0FudF9UcmVfS2V0X1Blbl/DhcKgZcOFwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1NfUF9BX1RfS19Qbl/DhcKgJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICBMIDogJ1lZWVktTU0tREQnLFxuICAgICAgTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgIExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICBMTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkZCwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIGwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICBsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxuICAgICAgbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIGxsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGQsIEhIOm1tIFt2YWwuXSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgICBzYW1lRGF5IDogJ1vDhcKgaWFuZGllbl0gTFQnLFxuICAgICAgbmV4dERheSA6ICdbUnl0b2pdIExUJyxcbiAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFQnLFxuICAgICAgbGFzdERheSA6ICdbVmFrYXJdIExUJyxcbiAgICAgIGxhc3RXZWVrIDogJ1tQcmHDhMKXanVzw4TCr10gZGRkZCBMVCcsXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICBmdXR1cmUgOiAncG8gJXMnLFxuICAgICAgcGFzdCA6ICdwcmllw4XCoSAlcycsXG4gICAgICBzIDogdHJhbnNsYXRlU2Vjb25kcyxcbiAgICAgIHNzIDogdHJhbnNsYXRlLFxuICAgICAgbSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgICBoIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgIGQgOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIGRkIDogdHJhbnNsYXRlLFxuICAgICAgTSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgICB5IDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICB5eSA6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tb2ppLyxcbiAgb3JkaW5hbChudW0pIHtcbiAgICAgIHJldHVybiBudW0gKyAnLW9qaSc7XG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBNb25nb2xpYW4gW21uXVxuLy8hIGF1dGhvciA6IEphdmtobGFudHVncyBOeWFtZG9yaiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXZraGFhbmo3XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfDkcKFw5HCjcOQwrTDkcKFw5HCjcOQwr0gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyA6ICfDkcKFw5HCjcOQwrTDkcKFw5HCjcOQwr0gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi8OQwr0nO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyA6ICcgw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi8OQwr0nKTtcbiAgICBjYXNlICdtJzpcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOQwrzDkMK4w5DCvcORwoPDkcKCJyA6ICcgw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKLw5DCvScpO1xuICAgIGNhc2UgJ2gnOlxuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5HChsOQwrDDkMKzJyA6ICcgw5HChsOQwrDDkMKzw5DCuMOQwrnDkMK9Jyk7XG4gICAgY2FzZSAnZCc6XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDk8Kpw5DCtMOTwqnDkcKAJyA6ICcgw5PCqcOQwrTDkcKAw5DCuMOQwrnDkMK9Jyk7XG4gICAgY2FzZSAnTSc6XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkcKBw5DCsMORwoAnIDogJyDDkcKBw5DCsMORwoDDkcKLw5DCvScpO1xuICAgIGNhc2UgJ3knOlxuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5DCtsOQwrjDkMK7JyA6ICcgw5DCtsOQwrjDkMK7w5DCuMOQwrnDkMK9Jyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtbkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ21uJyxcbiAgbW9udGhzOiAnw5DCncORwo3DkMKzw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKlw5DCvsORwpHDkcKAw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKTw5HCg8ORwoDDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClMOTwqnDkcKAw5PCqcOQwrLDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwqLDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCl8ORwoPDkcKAw5DCs8OQwrDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpTDkMK+w5DCu8OQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCncOQwrDDkMK5w5DCvMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClcORwoHDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCssOQwrDDkMK9IMOQwr3DkcKNw5DCs8OQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKyw5DCsMOQwr0gw5HChcOQwr7DkcKRw5HCgMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoAnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnMSDDkcKBw5DCsMORwoBfMiDDkcKBw5DCsMORwoBfMyDDkcKBw5DCsMORwoBfNCDDkcKBw5DCsMORwoBfNSDDkcKBw5DCsMORwoBfNiDDkcKBw5DCsMORwoBfNyDDkcKBw5DCsMORwoBfOCDDkcKBw5DCsMORwoBfOSDDkcKBw5DCsMORwoBfMTAgw5HCgcOQwrDDkcKAXzExIMORwoHDkMKww5HCgF8xMiDDkcKBw5DCsMORwoAnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnw5DCncORwo/DkMK8X8OQwpTDkMKww5DCssOQwrDDkMKwX8OQwpzDkcKPw5DCs8OQwrzDkMKww5HCgF/DkMKbw5HChcOQwrDDkMKzw5DCssOQwrBfw5DCn8OSwq/DkcKAw5HCjcOQwrJfw5DCkcOQwrDDkMKww5HCgcOQwrDDkMK9X8OQwpHDkcKPw5DCvMOQwrHDkMKwJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw5DCncORwo/DkMK8X8OQwpTDkMKww5DCsl/DkMKcw5HCj8OQwrNfw5DCm8ORwoXDkMKwX8OQwp/DksKvw5HCgF/DkMKRw5DCsMOQwrBfw5DCkcORwo/DkMK8Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OQwp3DkcKPX8OQwpTDkMKwX8OQwpzDkcKPX8OQwpvDkcKFX8OQwp/DksKvX8OQwpHDkMKwX8OQwpHDkcKPJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdZWVlZLU1NLUREJyxcbiAgICBMTDogJ1lZWVkgw5DCvsOQwr3DkcKLIE1NTU3DkcKLw5DCvSBEJyxcbiAgICBMTEw6ICdZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIFlZWVkgw5DCvsOQwr3DkcKLIE1NTU3DkcKLw5DCvSBEIEhIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw5LCrsOTwqh8w5LCrsOQwqUvaSxcbiAgaXNQTTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAnw5LCrsOQwqUnO1xuICB9LFxuICBtZXJpZGllbTogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAnw5LCrsOTwqgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OSwq7DkMKlJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDk8Kow5DCvcOTwqnDk8Kpw5DCtMOTwqnDkcKAXSBMVCcsXG4gICAgbmV4dERheTogJ1vDkMKcw5DCsMORwoDDkMKzw5DCsMOQwrDDkcKIXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbw5DCmMORwoDDkcKNw5HChV0gZGRkZCBMVCcsXG4gICAgbGFzdERheTogJ1vDk8Kow5HCh8OQwrjDkMKzw5DCtMOTwqnDkcKAXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbw5PCqMOQwr3DkMKzw5PCqcORwoDDkcKBw5PCqcOQwr1dIGRkZGQgTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgw5DCtMOQwrDDkcKAw5DCsMOQwrAnLFxuICAgIHBhc3Q6ICclcyDDk8Kpw5DCvMOQwr3Dk8KpJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0gw5PCqcOQwrTDk8Kpw5HCgC8sXG4gIG9yZGluYWw6IGZ1bmN0aW9uIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICcgw5PCqcOQwrTDk8Kpw5HCgCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdFxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTm9yd2VnaWFuIEJva23Dg8KlbCBbbmJdXG4vLyEgYXV0aG9ycyA6IEVzcGVuIEhvdmxhbmRzZGFsIDogaHR0cHM6Ly9naXRodWIuY29tL3JleHhhcnNcbi8vISAgICAgICAgICAgU2lndXJkIEdhcnRtYW5uIDogaHR0cHM6Ly9naXRodWIuY29tL3NpZ3VyZGdhXG5cbmV4cG9ydCBjb25zdCBuYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ25iJyxcbiAgbW9udGhzOiAnamFudWFyX2ZlYnJ1YXJfbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW4uX2ZlYi5fbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVzLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdzw4PCuG5kYWdfbWFuZGFnX3RpcnNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDg8K4cmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3PDg8K4Ll9tYS5fdGkuX29uLl90by5fZnIuX2zDg8K4Licuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdzw4PCuF9tYV90aV9vbl90b19mcl9sw4PCuCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbaSBkYWcga2wuXSBMVCcsXG4gICAgbmV4dERheTogJ1tpIG1vcmdlbiBrbC5dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsLl0gTFQnLFxuICAgIGxhc3REYXk6ICdbaSBnw4PCpXIga2wuXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZm9ycmlnZV0gZGRkZCBba2wuXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvbSAlcycsXG4gICAgcGFzdDogJyVzIHNpZGVuJyxcbiAgICBzOiAnbm9lbiBzZWt1bmRlcicsXG4gICAgc3M6ICclZCBzZWt1bmRlcicsXG4gICAgbTogJ2V0dCBtaW51dHQnLFxuICAgIG1tOiAnJWQgbWludXR0ZXInLFxuICAgIGg6ICdlbiB0aW1lJyxcbiAgICBoaDogJyVkIHRpbWVyJyxcbiAgICBkOiAnZW4gZGFnJyxcbiAgICBkZDogJyVkIGRhZ2VyJyxcbiAgICBNOiAnZW4gbcODwqVuZWQnLFxuICAgIE1NOiAnJWQgbcODwqVuZWRlcicsXG4gICAgeTogJ2V0dCDDg8KlcicsXG4gICAgeXk6ICclZCDDg8KlcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IER1dGNoIChCZWxnaXVtKSBbbmwtYmVdXG4vLyEgYXV0aG9yIDogSm9yaXMgUsODwrZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXG4vLyEgYXV0aG9yIDogSmFjb2IgTWlkZGFnIDogaHR0cHM6Ly9naXRodWIuY29tL21pZGRhZ2pcblxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKTtcbmxldCBtb250aHNTaG9ydFdpdGhvdXREb3RzID0gJ2phbl9mZWJfbXJ0X2Fwcl9tZWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15qYW4vaSwgL15mZWIvaSwgL15tYWFydHxtcnQuPyQvaSwgL15hcHIvaSwgL15tZWkkL2ksIC9eanVuW2kuXT8kL2ksIC9eanVsW2kuXT8kL2ksIC9eYXVnL2ksIC9ec2VwL2ksIC9eb2t0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxhcHJpbHxtZWl8YXByaWx8anVbbmxdaXxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcnxqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgbmxCZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ25sLWJlJyxcbiAgbW9udGhzOiAnamFudWFyaV9mZWJydWFyaV9tYWFydF9hcHJpbF9tZWlfanVuaV9qdWxpX2F1Z3VzdHVzX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHM7XG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG5cbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxtZWl8anVbbmxdaXxhcHJpbHxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oamFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xtZWl8anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXG5cbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuXG4gIHdlZWtkYXlzOiAnem9uZGFnX21hYW5kYWdfZGluc2RhZ193b2Vuc2RhZ19kb25kZXJkYWdfdnJpamRhZ196YXRlcmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3pvLl9tYS5fZGkuX3dvLl9kby5fdnIuX3phLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbdmFuZGFhZyBvbV0gTFQnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtvbV0gTFQnLFxuICAgIGxhc3REYXk6ICdbZ2lzdGVyZW4gb21dIExUJyxcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvdmVyICVzJyxcbiAgICBwYXN0OiAnJXMgZ2VsZWRlbicsXG4gICAgczogJ2VlbiBwYWFyIHNlY29uZGVuJyxcbiAgICBzczogJyVkIHNlY29uZGVuJyxcbiAgICBtOiAnw4PCqcODwqluIG1pbnV1dCcsXG4gICAgbW06ICclZCBtaW51dGVuJyxcbiAgICBoOiAnw4PCqcODwqluIHV1cicsXG4gICAgaGg6ICclZCB1dXInLFxuICAgIGQ6ICfDg8Kpw4PCqW4gZGFnJyxcbiAgICBkZDogJyVkIGRhZ2VuJyxcbiAgICBNOiAnw4PCqcODwqluIG1hYW5kJyxcbiAgICBNTTogJyVkIG1hYW5kZW4nLFxuICAgIHk6ICfDg8Kpw4PCqW4gamFhcicsXG4gICAgeXk6ICclZCBqYWFyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3RlfGRlKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgcmV0dXJuIG51bSArICgobnVtID09PSAxIHx8IG51bSA9PT0gOCB8fCBudW0gPj0gMjApID8gJ3N0ZScgOiAnZGUnKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IER1dGNoIFtubF1cbi8vISBhdXRob3IgOiBKb3JpcyBSw4PCtmxpbmcgOiBodHRwczovL2dpdGh1Yi5jb20vam9yaXNyb2xpbmdcbi8vISBhdXRob3IgOiBKYWNvYiBNaWRkYWcgOiBodHRwczovL2dpdGh1Yi5jb20vbWlkZGFnalxuXG5sZXQgbW9udGhzU2hvcnRXaXRoRG90cyA9ICdqYW4uX2ZlYi5fbXJ0Ll9hcHIuX21laV9qdW4uX2p1bC5fYXVnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydFdpdGhvdXREb3RzID0gJ2phbl9mZWJfbXJ0X2Fwcl9tZWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15qYW4vaSwgL15mZWIvaSwgL15tYWFydHxtcnQuPyQvaSwgL15hcHIvaSwgL15tZWkkL2ksIC9eanVuW2kuXT8kL2ksIC9eanVsW2kuXT8kL2ksIC9eYXVnL2ksIC9ec2VwL2ksIC9eb2t0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxhcHJpbHxtZWl8YXByaWx8anVbbmxdaXxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcnxqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgbmxMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdubCcsXG4gIG1vbnRocyA6ICdqYW51YXJpX2ZlYnJ1YXJpX21hYXJ0X2FwcmlsX21laV9qdW5pX2p1bGlfYXVndXN0dXNfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHM7XG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG5cbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxtZWl8anVbbmxdaXxhcHJpbHxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oamFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xtZWl8anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXG5cbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlIDogbW9udGhzUGFyc2UsXG5cbiAgd2Vla2RheXMgOiAnem9uZGFnX21hYW5kYWdfZGluc2RhZ193b2Vuc2RhZ19kb25kZXJkYWdfdnJpamRhZ196YXRlcmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICd6by5fbWEuX2RpLl93by5fZG8uX3ZyLl96YS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ3pvX21hX2RpX3dvX2RvX3ZyX3phJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ0RELU1NLVlZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEwgOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheTogJ1t2YW5kYWFnIG9tXSBMVCcsXG4gICAgbmV4dERheTogJ1ttb3JnZW4gb21dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW29tXSBMVCcsXG4gICAgbGFzdERheTogJ1tnaXN0ZXJlbiBvbV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2FmZ2Vsb3Blbl0gZGRkZCBbb21dIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnb3ZlciAlcycsXG4gICAgcGFzdCA6ICclcyBnZWxlZGVuJyxcbiAgICBzIDogJ2VlbiBwYWFyIHNlY29uZGVuJyxcbiAgICBzcyA6ICclZCBzZWNvbmRlbicsXG4gICAgbSA6ICfDg8Kpw4PCqW4gbWludXV0JyxcbiAgICBtbSA6ICclZCBtaW51dGVuJyxcbiAgICBoIDogJ8ODwqnDg8KpbiB1dXInLFxuICAgIGhoIDogJyVkIHV1cicsXG4gICAgZCA6ICfDg8Kpw4PCqW4gZGFnJyxcbiAgICBkZCA6ICclZCBkYWdlbicsXG4gICAgTSA6ICfDg8Kpw4PCqW4gbWFhbmQnLFxuICAgIE1NIDogJyVkIG1hYW5kZW4nLFxuICAgIHkgOiAnw4PCqcODwqluIGphYXInLFxuICAgIHl5IDogJyVkIGphYXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgb3JkaW5hbCAoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgcmV0dXJuIG51bSArICgobnVtID09PSAxIHx8IG51bSA9PT0gOCB8fCBudW0gPj0gMjApID8gJ3N0ZScgOiAnZGUnKTtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFBvbGlzaCBbcGxdXG4vLyEgYXV0aG9yIDogUmFmYWwgSGlyc3ogOiBodHRwczovL2dpdGh1Yi5jb20vZXZvTFxuXG5sZXQgbW9udGhzTm9taW5hdGl2ZSA9ICdzdHljemXDhcKEX2x1dHlfbWFyemVjX2t3aWVjaWXDhcKEX21hal9jemVyd2llY19saXBpZWNfc2llcnBpZcOFwoRfd3J6ZXNpZcOFwoRfcGHDhcK6ZHppZXJuaWtfbGlzdG9wYWRfZ3J1ZHppZcOFwoQnLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU3ViamVjdGl2ZSA9ICdzdHljem5pYV9sdXRlZ29fbWFyY2Ffa3dpZXRuaWFfbWFqYV9jemVyd2NhX2xpcGNhX3NpZXJwbmlhX3dyemXDhcKbbmlhX3Bhw4XCumR6aWVybmlrYV9saXN0b3BhZGFfZ3J1ZG5pYScuc3BsaXQoJ18nKTtcblxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAobnVtICUgMTAgPCA1KSAmJiAobnVtICUgMTAgPiAxKSAmJiAoKH5+KG51bSAvIDEwKSAlIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gbnVtICsgJyAnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2VrdW5kJyk7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogJ21pbnV0w4TCmSc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdnb2R6aW5hJyA6ICdnb2R6aW7DhMKZJztcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2dvZHppbnknIDogJ2dvZHppbicpO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWllc2nDhMKFY2UnIDogJ21pZXNpw4TCmWN5Jyk7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdsYXRhJyA6ICdsYXQnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGxMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdwbCcsXG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICcnKSB7XG4gICAgICAvLyBIYWNrOiBpZiBmb3JtYXQgZW1wdHkgd2Uga25vdyB0aGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGVcbiAgICAgIC8vIFJlZ0V4cCBieSBtb21lbnQuIEdpdmUgdGhlbiBiYWNrIGJvdGggdmFsaWQgZm9ybXMgb2YgbW9udGhzXG4gICAgICAvLyBpbiBSZWdFeHAgcmVhZHkgZm9ybWF0LlxuICAgICAgcmV0dXJuICcoJyArIG1vbnRoc1N1YmplY3RpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICd8JyArIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICcpJztcbiAgICB9IGVsc2UgaWYgKC9EIE1NTU0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1N1YmplY3RpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1Nob3J0OiAnc3R5X2x1dF9tYXJfa3dpX21hal9jemVfbGlwX3NpZV93cnpfcGHDhcK6X2xpc19ncnUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnbmllZHppZWxhX3BvbmllZHppYcOFwoJla193dG9yZWtfw4XCm3JvZGFfY3p3YXJ0ZWtfcGnDhMKFdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25kel9wb25fd3Rfw4XCm3JfY3p3X3B0X3NvYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdOZF9Qbl9XdF/DhcKacl9Del9QdF9Tbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tEemnDhcKbIG9dIExUJyxcbiAgICBuZXh0RGF5OiAnW0p1dHJvIG9dIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tXIG5pZWR6aWVsw4TCmSBvXSBMVCc7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW1dlIHd0b3JlayBvXSBMVCc7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW1cgw4XCm3JvZMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1tXIHNvYm90w4TCmSBvXSBMVCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1tXXSBkZGRkIFtvXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0RGF5OiAnW1djem9yYWogb10gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIG5pZWR6aWVsw4TCmSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSDDhcKbcm9kw4TCmSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBzb2JvdMOEwpkgb10gTFQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoJ5XSBkZGRkIFtvXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAnJXMgdGVtdScsXG4gICAgczogJ2tpbGthIHNla3VuZCcsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiAnMSBkemllw4XChCcsXG4gICAgZGQ6ICclZCBkbmknLFxuICAgIE06ICdtaWVzacOEwoVjJyxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6ICdyb2snLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBQb3J0dWd1ZXNlIChCcmF6aWwpIFtwdC1icl1cbi8vISBhdXRob3IgOiBDYWlvIFJpYmVpcm8gUGVyZWlyYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jYWlvLXJpYmVpcm8tcGVyZWlyYVxuXG5leHBvcnQgY29uc3QgcHRCckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3B0LWJyJyxcbiAgbW9udGhzOiAnSmFuZWlyb19GZXZlcmVpcm9fTWFyw4PCp29fQWJyaWxfTWFpb19KdW5ob19KdWxob19BZ29zdG9fU2V0ZW1icm9fT3V0dWJyb19Ob3ZlbWJyb19EZXplbWJybycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdKYW5fRmV2X01hcl9BYnJfTWFpX0p1bl9KdWxfQWdvX1NldF9PdXRfTm92X0Rleicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdEb21pbmdvX1NlZ3VuZGEtZmVpcmFfVGVyw4PCp2EtZmVpcmFfUXVhcnRhLWZlaXJhX1F1aW50YS1mZWlyYV9TZXh0YS1mZWlyYV9Tw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdEb21fU2VnX1Rlcl9RdWFfUXVpX1NleF9Tw4PCoWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnRG9fMsOCwqpfM8OCwqpfNMOCwqpfNcOCwqpfNsOCwqpfU8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8ODwqBzXSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw4PCoHNdIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbSG9qZSDDg8Kgc10gTFQnLFxuICAgIG5leHREYXk6ICdbQW1hbmjDg8KjIMODwqBzXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDg8Kgc10gTFQnLFxuICAgIGxhc3REYXk6ICdbT250ZW0gw4PCoHNdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gKGdldERheU9mV2VlayhkYXRlKSA9PT0gMCB8fCBnZXREYXlPZldlZWsoZGF0ZSkgPT09IDYpID9cbiAgICAgICAgJ1vDg8KabHRpbW9dIGRkZGQgW8ODwqBzXSBMVCcgOiAvLyBTYXR1cmRheSArIFN1bmRheVxuICAgICAgICAnW8ODwppsdGltYV0gZGRkZCBbw4PCoHNdIExUJzsgLy8gTW9uZGF5IC0gRnJpZGF5XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VtICVzJyxcbiAgICBwYXN0OiAnJXMgYXRyw4PCoXMnLFxuICAgIHM6ICdwb3Vjb3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1bSBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VtYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW0gZGlhJyxcbiAgICBkZDogJyVkIGRpYXMnLFxuICAgIE06ICd1bSBtw4PCqnMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1bSBhbm8nLFxuICAgIHl5OiAnJWQgYW5vcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronXG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyAhIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gISBsb2NhbGUgOiBSb21hbmlhbiBbcm9dXG4vLyEgYXV0aG9yIDogVmxhZCBHdXJkaWdhIDogaHR0cHM6Ly9naXRodWIuY29tL2d1cmRpZ2Fcbi8vISBhdXRob3IgOiBWYWxlbnRpbiBBZ2FjaGkgOiBodHRwczovL2dpdGh1Yi5jb20vYXZhbHlcbi8vICEgYXV0aG9yIDogRWFybGUgd2hpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS81ZWFybGVcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0OiB7W2tleTpzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHNzOiAnc2VjdW5kZScsXG4gICAgbW06ICdtaW51dGUnLFxuICAgIGhoOiAnb3JlJyxcbiAgICBkZDogJ3ppbGUnLFxuICAgIE1NOiAnbHVuaScsXG4gICAgeXk6ICdhbmknXG4gIH07XG5cbiAgbGV0IHNlcGFyYXRvciA9ICcgJztcbiAgaWYgKG51bSAlIDEwMCA+PSAyMCB8fCAobnVtID49IDEwMCAmJiBudW0gJSAxMDAgPT09IDApKSB7XG4gICAgc2VwYXJhdG9yID0gJyBkZSAnO1xuICB9XG4gIHJldHVybiBudW0gKyBzZXBhcmF0b3IgKyBmb3JtYXRba2V5XTtcbn1cblxuXG5leHBvcnQgY29uc3Qgcm9Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdybycsXG4gIG1vbnRoczogJ2lhbnVhcmllX2ZlYnJ1YXJpZV9tYXJ0aWVfYXByaWxpZV9tYWlfaXVuaWVfaXVsaWVfYXVndXN0X3NlcHRlbWJyaWVfb2N0b21icmllX25vaWVtYnJpZV9kZWNlbWJyaWUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnaWFuLl9mZWJyLl9tYXJ0Ll9hcHIuX21haV9pdW4uX2l1bC5fYXVnLl9zZXB0Ll9vY3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdkdW1pbmljw4TCg19sdW5pX21hcsOIwptpX21pZXJjdXJpX2pvaV92aW5lcmlfc8ODwqJtYsOEwoN0w4TCgycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0R1bV9MdW5fTWFyX01pZV9Kb2lfVmluX1PDg8KibScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEdV9MdV9NYV9NaV9Kb19WaV9Tw4PCoicuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2F6aSBsYV0gTFQnLFxuICAgIG5leHREYXk6ICdbbcODwqJpbmUgbGFdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2xhXSBMVCcsXG4gICAgbGFzdERheTogJ1tpZXJpIGxhXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdwZXN0ZSAlcycsXG4gICAgcGFzdDogJyVzIMODwq5uIHVybcOEwoMnLFxuICAgIHM6ICdjw4PConRldmEgc2VjdW5kZScsXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbTogJ3VuIG1pbnV0JyxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAnbyBvcsOEwoMnLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICdvIHppJyxcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBNOiAnbyBsdW7DhMKDJyxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICB5OiAndW4gYW4nLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBSdXNzaWFuIFtydV1cbi8vISBhdXRob3IgOiBWaWt0b3JtaW5hdG9yIDogaHR0cHM6Ly9naXRodWIuY29tL1Zpa3Rvcm1pbmF0b3Jcbi8vISBBdXRob3IgOiBNZW5lbGlvbiBFbGVuc8ODwrpsZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDogw5DCmsOQwr7DkcKAw5DCtcOQwr3DkMKxw5DCtcORwoDDkMKzIMOQwpzDkMKww5HCgMOQwrogOiBodHRwczovL2dpdGh1Yi5jb20vc29ja2V0cGFpclxuXG5mdW5jdGlvbiBwbHVyYWwod29yZDogc3RyaW5nLCBudW06IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBmb3JtcyA9IHdvcmQuc3BsaXQoJ18nKTtcbiAgcmV0dXJuIG51bSAlIDEwID09PSAxICYmIG51bSAlIDEwMCAhPT0gMTEgPyBmb3Jtc1swXSA6IChudW0gJSAxMCA+PSAyICYmIG51bSAlIDEwIDw9IDQgJiYgKG51bSAlIDEwMCA8IDEwIHx8IG51bSAlIDEwMCA+PSAyMCkgPyBmb3Jtc1sxXSA6IGZvcm1zWzJdKTtcbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICBzczogd2l0aG91dFN1ZmZpeCA/ICfDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMKwX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwotfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyA6ICfDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKDX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwotfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyxcbiAgICBtbTogd2l0aG91dFN1ZmZpeCA/ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrBfw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKLX8OQwrzDkMK4w5DCvcORwoPDkcKCJyA6ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsORwoNfw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKLX8OQwrzDkMK4w5DCvcORwoPDkcKCJyxcbiAgICBoaDogJ8ORwofDkMKww5HCgV/DkcKHw5DCsMORwoHDkMKwX8ORwofDkMKww5HCgcOQwr7DkMKyJyxcbiAgICBkZDogJ8OQwrTDkMK1w5DCvcORwoxfw5DCtMOQwr3DkcKPX8OQwrTDkMK9w5DCtcOQwrknLFxuICAgIE1NOiAnw5DCvMOQwrXDkcKBw5HCj8ORwoZfw5DCvMOQwrXDkcKBw5HCj8ORwobDkMKwX8OQwrzDkMK1w5HCgcORwo/DkcKGw5DCtcOQwrInLFxuICAgIHl5OiAnw5DCs8OQwr7DkMK0X8OQwrPDkMK+w5DCtMOQwrBfw5DCu8OQwrXDkcKCJ1xuICB9O1xuICBpZiAoa2V5ID09PSAnbScpIHtcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrAnIDogJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCgyc7XG4gIH1cbiAgcmV0dXJuIG51bSArICcgJyArIHBsdXJhbChmb3JtYXRba2V5XSwgK251bSk7XG59XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXsORwo/DkMK9w5DCsi9pLCAvXsORwoTDkMK1w5DCsi9pLCAvXsOQwrzDkMKww5HCgC9pLCAvXsOQwrDDkMK/w5HCgC9pLCAvXsOQwrzDkMKwW8OQwrnDkcKPXS9pLCAvXsOQwrjDkcKOw5DCvS9pLCAvXsOQwrjDkcKOw5DCuy9pLCAvXsOQwrDDkMKyw5DCsy9pLCAvXsORwoHDkMK1w5DCvS9pLCAvXsOQwr7DkMK6w5HCgi9pLCAvXsOQwr3DkMK+w5HCjy9pLCAvXsOQwrTDkMK1w5DCui9pXTtcblxuLy8gaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvcnVsZXMvMTM5LXByb3AgOiDDgsKnIDEwM1xuLy8gw5DCocOQwr7DkMK6w5HCgMOQwrDDkcKJw5DCtcOQwr3DkMK4w5HCjyDDkMK8w5DCtcORwoHDkcKPw5HChsOQwrXDkMKyOiBodHRwOi8vbmV3LmdyYW1vdGEucnUvc3ByYXZrYS9idXJvL3NlYXJjaC1hbnN3ZXI/cz0yNDI2Mzdcbi8vIENMRFIgZGF0YTogICAgICAgICAgaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8yOC9zdW1tYXJ5L3J1Lmh0bWwjMTc1M1xuZXhwb3J0IGNvbnN0IHJ1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncnUnLFxuICBtb250aHM6IHtcbiAgICBmb3JtYXQ6ICfDkcKPw5DCvcOQwrLDkMKww5HCgMORwo9fw5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7w5HCj1/DkMK8w5DCsMORwoDDkcKCw5DCsF/DkMKww5DCv8ORwoDDkMK1w5DCu8ORwo9fw5DCvMOQwrDDkcKPX8OQwrjDkcKOw5DCvcORwo9fw5DCuMORwo7DkMK7w5HCj1/DkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwX8ORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoDDkcKPX8OQwr7DkMK6w5HCgsORwo/DkMKxw5HCgMORwo9fw5DCvcOQwr7DkcKPw5DCscORwoDDkcKPX8OQwrTDkMK1w5DCusOQwrDDkMKxw5HCgMORwo8nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ8ORwo/DkMK9w5DCssOQwrDDkcKAw5HCjF/DkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrvDkcKMX8OQwrzDkMKww5HCgMORwoJfw5DCsMOQwr/DkcKAw5DCtcOQwrvDkcKMX8OQwrzDkMKww5DCuV/DkMK4w5HCjsOQwr3DkcKMX8OQwrjDkcKOw5DCu8ORwoxfw5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCX8ORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoDDkcKMX8OQwr7DkMK6w5HCgsORwo/DkMKxw5HCgMORwoxfw5DCvcOQwr7DkcKPw5DCscORwoDDkcKMX8OQwrTDkMK1w5DCusOQwrDDkMKxw5HCgMORwownLnNwbGl0KCdfJylcbiAgfSxcbiAgbW9udGhzU2hvcnQ6IHtcbiAgICAvLyDDkMK/w5DCviBDTERSIMOQwrjDkMK8w5DCtcOQwr3DkMK9w5DCviBcIsOQwrjDkcKOw5DCuy5cIiDDkMK4IFwiw5DCuMORwo7DkMK9LlwiLCDDkMK9w5DCviDDkMK6w5DCsMOQwrrDkMK+w5DCuSDDkcKBw5DCvMORwovDkcKBw5DCuyDDkMK8w5DCtcOQwr3DkcKPw5HCgsORwowgw5DCscORwoPDkMK6w5DCssORwoMgw5DCvcOQwrAgw5HCgsOQwr7DkcKHw5DCusORwoMgP1xuICAgIGZvcm1hdDogJ8ORwo/DkMK9w5DCsi5fw5HChMOQwrXDkMKyw5HCgC5fw5DCvMOQwrDDkcKALl/DkMKww5DCv8ORwoAuX8OQwrzDkMKww5HCj1/DkMK4w5HCjsOQwr3DkcKPX8OQwrjDkcKOw5DCu8ORwo9fw5DCsMOQwrLDkMKzLl/DkcKBw5DCtcOQwr3DkcKCLl/DkMK+w5DCusORwoIuX8OQwr3DkMK+w5HCj8OQwrEuX8OQwrTDkMK1w5DCui4nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ8ORwo/DkMK9w5DCsi5fw5HChMOQwrXDkMKyw5HCgC5fw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoAuX8OQwrzDkMKww5DCuV/DkMK4w5HCjsOQwr3DkcKMX8OQwrjDkcKOw5DCu8ORwoxfw5DCsMOQwrLDkMKzLl/DkcKBw5DCtcOQwr3DkcKCLl/DkMK+w5DCusORwoIuX8OQwr3DkMK+w5HCj8OQwrEuX8OQwrTDkMK1w5DCui4nLnNwbGl0KCdfJylcbiAgfSxcbiAgd2Vla2RheXM6IHtcbiAgICBzdGFuZGFsb25lOiAnw5DCssOQwr7DkcKBw5DCusORwoDDkMK1w5HCgcOQwrXDkMK9w5HCjMOQwrVfw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8ORwozDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMOQwrXDkMK0w5DCsF/DkcKHw5DCtcORwoLDkMKyw5DCtcORwoDDkMKzX8OQwr/DkcKPw5HCgsOQwr3DkMK4w5HChsOQwrBfw5HCgcORwoPDkMKxw5DCscOQwr7DkcKCw5DCsCcuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXQ6ICfDkMKyw5DCvsORwoHDkMK6w5HCgMOQwrXDkcKBw5DCtcOQwr3DkcKMw5DCtV/DkMK/w5DCvsOQwr3DkMK1w5DCtMOQwrXDkMK7w5HCjMOQwr3DkMK4w5DCul/DkMKyw5HCgsOQwr7DkcKAw5DCvcOQwrjDkMK6X8ORwoHDkcKAw5DCtcOQwrTDkcKDX8ORwofDkMK1w5HCgsOQwrLDkMK1w5HCgMOQwrNfw5DCv8ORwo/DkcKCw5DCvcOQwrjDkcKGw5HCg1/DkcKBw5HCg8OQwrHDkMKxw5DCvsORwoLDkcKDJy5zcGxpdCgnXycpLFxuICAgIGlzRm9ybWF0OiAvXFxbID9bw5DCksOQwrJdID8oPzrDkMK/w5HCgMOQwr7DkcKIw5DCu8ORwoPDkcKOfMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkcKDw5HCjnzDkcKNw5HCgsORwoMpPyA/XFxdID9kZGRkL1xuICB9LFxuICB3ZWVrZGF5c1Nob3J0OiAnw5DCssORwoFfw5DCv8OQwr1fw5DCssORwoJfw5HCgcORwoBfw5HCh8ORwoJfw5DCv8ORwoJfw5HCgcOQwrEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5DCssORwoFfw5DCv8OQwr1fw5DCssORwoJfw5HCgcORwoBfw5HCh8ORwoJfw5DCv8ORwoJfw5HCgcOQwrEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcblxuICAvLyDDkMK/w5DCvsOQwrvDkMK9w5HCi8OQwrUgw5DCvcOQwrDDkMK3w5DCssOQwrDDkMK9w5DCuMORwo8gw5HCgSDDkMK/w5DCsMOQwrTDkMK1w5DCtsOQwrDDkMK8w5DCuCwgw5DCv8OQwr4gw5HCgsORwoDDkMK4IMOQwrHDkcKDw5DCusOQwrLDkcKLLCDDkMK0w5DCu8ORwo8gw5DCvcOQwrXDkMK6w5DCvsORwoLDkMK+w5HCgMORwovDkcKFLCDDkMK/w5DCviA0IMOQwrHDkcKDw5DCusOQwrLDkcKLLCDDkcKBw5DCvsOQwrrDkcKAw5DCsMORwonDkMK1w5DCvcOQwrjDkcKPIMORwoEgw5HCgsOQwr7DkcKHw5DCusOQwr7DkMK5IMOQwrggw5DCscOQwrXDkMK3IMORwoLDkMK+w5HCh8OQwrrDkMK4XG4gIG1vbnRoc1JlZ2V4OiAvXijDkcKPw5DCvcOQwrLDkMKww5HCgFvDkcKMw5HCj118w5HCj8OQwr3DkMKyXFwuP3zDkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrtbw5HCjMORwo9dfMORwoTDkMK1w5DCssORwoA/XFwuP3zDkMK8w5DCsMORwoDDkcKCw5DCsD98w5DCvMOQwrDDkcKAXFwuP3zDkMKww5DCv8ORwoDDkMK1w5DCu1vDkcKMw5HCj118w5DCsMOQwr/DkcKAXFwuP3zDkMK8w5DCsFvDkMK5w5HCj118w5DCuMORwo7DkMK9W8ORwozDkcKPXXzDkMK4w5HCjsOQwr1cXC4/fMOQwrjDkcKOw5DCu1vDkcKMw5HCj118w5DCuMORwo7DkMK7XFwuP3zDkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwP3zDkMKww5DCssOQwrNcXC4/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMORwoHDkMK1w5DCvcORwoI/XFwuP3zDkMK+w5DCusORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr7DkMK6w5HCglxcLj98w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr3DkMK+w5HCj8OQwrE/XFwuP3zDkMK0w5DCtcOQwrrDkMKww5DCscORwoBbw5HCjMORwo9dfMOQwrTDkMK1w5DCulxcLj8pL2ksXG5cbiAgLy8gw5DCusOQwr7DkMK/w5DCuMORwo8gw5DCv8ORwoDDkMK1w5DCtMORwovDkMK0w5HCg8ORwonDkMK1w5DCs8OQwr5cbiAgbW9udGhzU2hvcnRSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCjMORwo9dfMORwo/DkMK9w5DCslxcLj98w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwozDkcKPXXzDkcKEw5DCtcOQwrLDkcKAP1xcLj98w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrzDkMKww5HCgFxcLj98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCjMORwo9dfMOQwrDDkMK/w5HCgFxcLj98w5DCvMOQwrBbw5DCucORwo9dfMOQwrjDkcKOw5DCvVvDkcKMw5HCj118w5DCuMORwo7DkMK9XFwuP3zDkMK4w5HCjsOQwrtbw5HCjMORwo9dfMOQwrjDkcKOw5DCu1xcLj98w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5DCsMOQwrLDkMKzXFwuP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkcKBw5DCtcOQwr3DkcKCP1xcLj98w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK+w5DCusORwoJcXC4/fMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK9w5DCvsORwo/DkMKxP1xcLj98w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwozDkcKPXXzDkMK0w5DCtcOQwrpcXC4/KS9pLFxuXG4gIC8vIMOQwr/DkMK+w5DCu8OQwr3DkcKLw5DCtSDDkMK9w5DCsMOQwrfDkMKyw5DCsMOQwr3DkMK4w5HCjyDDkcKBIMOQwr/DkMKww5DCtMOQwrXDkMK2w5DCsMOQwrzDkMK4XG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXijDkcKPw5DCvcOQwrLDkMKww5HCgFvDkcKPw5HCjF18w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwo/DkcKMXXzDkMK8w5DCsMORwoDDkcKCw5DCsD98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCj8ORwoxdfMOQwrzDkMKwW8ORwo/DkMK5XXzDkMK4w5HCjsOQwr1bw5HCj8ORwoxdfMOQwrjDkcKOw5DCu1vDkcKPw5HCjF18w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwo/DkcKMXXzDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwo/DkcKMXSkvaSxcblxuICAvLyDDkMKSw5HCi8ORwoDDkMKww5DCtsOQwrXDkMK9w5DCuMOQwrUsIMOQwrrDkMK+w5HCgsOQwr7DkcKAw5DCvsOQwrUgw5HCgcOQwr7DkMK+w5HCgsOQwrLDkMK1w5HCgcORwoLDkMKyw5HCg8OQwrXDkcKCIMORwoLDkMK+w5DCu8ORwozDkMK6w5DCviDDkcKBw5DCvsOQwrrDkcKAw5DCsMORwonDkcKRw5DCvcOQwr3DkcKLw5DCvCDDkcKEw5DCvsORwoDDkMK8w5DCsMOQwrxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14ow5HCj8OQwr3DkMKyXFwufMORwoTDkMK1w5DCssORwoA/XFwufMOQwrzDkMKww5HCgFvDkcKCLl18w5DCsMOQwr/DkcKAXFwufMOQwrzDkMKwW8ORwo/DkMK5XXzDkMK4w5HCjsOQwr1bw5HCjMORwo8uXXzDkMK4w5HCjsOQwrtbw5HCjMORwo8uXXzDkMKww5DCssOQwrNcXC58w5HCgcOQwrXDkMK9w5HCgj9cXC58w5DCvsOQwrrDkcKCXFwufMOQwr3DkMK+w5HCj8OQwrE/XFwufMOQwrTDkMK1w5DCulxcLikvaSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZIMOQwrMuJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDDkMKzLiwgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIMOQwrMuLCBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5DCocOQwrXDkMKzw5DCvsOQwrTDkMK9w5HCjyDDkMKyXSBMVCcsXG4gICAgbmV4dERheTogJ1vDkMKXw5DCsMOQwrLDkcKCw5HCgMOQwrAgw5DCsl0gTFQnLFxuICAgIGxhc3REYXk6ICdbw5DCksORwofDkMK1w5HCgMOQwrAgw5DCsl0gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xuICAgICAgaWYgKGdldFdlZWsobm93KSAhPT0gZ2V0V2VlayhkYXRlKSkge1xuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5HCgcOQwrvDkMK1w5DCtMORwoPDkcKOw5HCicOQwrXDkMK1XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkMK4w5DCuV0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5HCg8ORwo5dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xuICAgICAgICAgIHJldHVybiAnW8OQwpLDkMK+XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdbw5DCkl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5DCvsOQwrVdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKLw5DCuV0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8ORwoPDkcKOXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSw5DCvl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnW8OQwpJdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDkcKHw5DCtcORwoDDkMK1w5DCtyAlcycsXG4gICAgcGFzdDogJyVzIMOQwr3DkMKww5DCt8OQwrDDkMK0JyxcbiAgICBzOiAnw5DCvcOQwrXDkcKBw5DCusOQwr7DkMK7w5HCjMOQwrrDkMK+IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcsXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAnw5HCh8OQwrDDkcKBJyxcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBkOiAnw5DCtMOQwrXDkMK9w5HCjCcsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ8OQwrzDkMK1w5HCgcORwo/DkcKGJyxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICB5OiAnw5DCs8OQwr7DkMK0JyxcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw5DCvcOQwr7DkcKHw5DCuHzDkcKDw5HCgsORwoDDkMKwfMOQwrTDkMK9w5HCj3zDkMKyw5DCtcORwofDkMK1w5HCgMOQwrAvaSxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiAvXijDkMK0w5DCvcORwo98w5DCssOQwrXDkcKHw5DCtcORwoDDkMKwKSQvLnRlc3QoaW5wdXQpO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgIHJldHVybiAnw5DCvcOQwr7DkcKHw5DCuCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAnw5HCg8ORwoLDkcKAw5DCsCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgIHJldHVybiAnw5DCtMOQwr3DkcKPJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDkMKyw5DCtcORwofDkMK1w5HCgMOQwrAnO1xuICAgIH1cbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjDkMK5fMOQwrPDkMK+fMORwo8pLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkMK5JztcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkMKzw5DCvic7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkcKPJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNsb3ZhayBbc2tdXG4vLyEgYXV0aG9yIDogSm96ZWYgUGHDhcK+aW4gOiBodHRwczovL2dpdGh1Yi5jb20vYXRpcmlzXG5cbmNvbnN0IG1vbnRocyA9ICdqYW51w4PCoXJfZmVicnXDg8Khcl9tYXJlY19hcHLDg8KtbF9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWd1c3Rfc2VwdGVtYmVyX29rdMODwrNiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyk7XG5jb25zdCBtb250aHNTaG9ydCA9ICdqYW5fZmViX21hcl9hcHJfbcODwqFqX2rDg8K6bl9qw4PCumxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAobnVtID4gMSkgJiYgKG51bSA8IDUpICYmICh+fihudW0gLyAxMCkgIT09IDEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IHJlc3VsdCA9IG51bSArICcgJztcblxuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOi8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncMODwqFyIHNla8ODwrpuZCcgOiAncMODwqFyIHNla3VuZGFtaSc7XG4gICAgY2FzZSAnc3MnOi8vIDkgc2Vjb25kcyAvIGluIDkgc2Vjb25kcyAvIDkgc2Vjb25kcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2Vrw4PCum5kJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ20nOi8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbsODwrp0YScgOiAoaXNGdXR1cmUgPyAnbWluw4PCunR1JyA6ICdtaW7Dg8K6dG91Jyk7XG4gICAgY2FzZSAnbW0nOi8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWluw4PCunR5JyA6ICdtaW7Dg8K6dCcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWluw4PCunRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2gnOi8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XG4gICAgY2FzZSAnaGgnOi8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2TDg8KtbicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnaG9kaW5hbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2QnOi8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGXDhcKIJyA6ICdkw4XCiG9tJztcbiAgICBjYXNlICdkZCc6Ly8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbmknIDogJ2Ruw4PCrScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnZMOFwohhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ00nOi8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnbWVzaWFjJyA6ICdtZXNpYWNvbSc7XG4gICAgY2FzZSAnTU0nOi8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWVzaWFjZScgOiAnbWVzaWFjb3YnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21lc2lhY21pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICd5JzovLyBhIHllYXIgLyBpbiBhIHllYXIgLyBhIHllYXIgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3JvaycgOiAncm9rb20nO1xuICAgIGNhc2UgJ3l5JzovLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Jva3knIDogJ3Jva292Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdyb2ttaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNrTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnc2snLFxuICBtb250aHMsXG4gIG1vbnRoc1Nob3J0LFxuICB3ZWVrZGF5czogJ25lZGXDhMK+YV9wb25kZWxva191dG9yb2tfc3RyZWRhX8OFwqF0dnJ0b2tfcGlhdG9rX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lX3BvX3V0X3N0X8OFwqF0X3BpX3NvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3V0X3N0X8OFwqF0X3BpX3NvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIGw6ICdELiBNLiBZWVlZJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZG5lcyBvXSBMVCcsXG4gICAgbmV4dERheTogJ1t6YWp0cmEgb10gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3YgbmVkZcOEwr51IG9dIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbdiBzdHJlZHUgb10gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuICdbdm8gw4XCoXR2cnRvayBvXSBMVCc7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1t2IHBpYXRvayBvXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1t2IHNvYm90dSBvXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0RGF5OiAnW3bDhMKNZXJhIG9dIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwrogbmVkZcOEwr51IG9dIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwrogc3RyZWR1IG9dIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwrogc29ib3R1IG9dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnbyAlcycsXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTbG92ZW5pYW4gW3NsXVxuLy8hIGF1dGhvciA6IG1paGFuIDogaHR0cHM6Ly9naXRodWIuY29tL21paGFuXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHZhciByZXN1bHQgPSBudW1iZXIgKyAnICc7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICduZWthaiBzZWt1bmQnIDogJ25la2FqIHNla3VuZGFtaSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICdzZWt1bmRvJyA6ICdzZWt1bmRpJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZGknIDogJ3Nla3VuZGFoJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRlJyA6ICdzZWt1bmRhaCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmQnIDogJ3Nla3VuZCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZW5hIG1pbnV0YScgOiAnZW5vIG1pbnV0byc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogJ21pbnV0byc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dGknIDogJ21pbnV0YW1hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dGUnIDogJ21pbnV0YW1pJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0JyA6ICdtaW51dGFtaSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZW5hIHVyYScgOiAnZW5vIHVybyc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICd1cmEnIDogJ3Vybyc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cmknIDogJ3VyYW1hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cmUnIDogJ3VyYW1pJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyJyA6ICd1cmFtaSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gZGFuJyA6ICdlbmltIGRuZW0nO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZGFuJyA6ICdkbmVtJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RuaScgOiAnZG5ldm9tYSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZpJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnTSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBtZXNlYycgOiAnZW5pbSBtZXNlY2VtJztcbiAgICBjYXNlICdNTSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjJyA6ICdtZXNlY2VtJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjYScgOiAnbWVzZWNlbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjZScgOiAnbWVzZWNpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjZXYnIDogJ21lc2VjaSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW5vIGxldG8nIDogJ2VuaW0gbGV0b20nO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0bycgOiAnbGV0b20nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0aScgOiAnbGV0b21hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRhJyA6ICdsZXRpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldCcgOiAnbGV0aSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzbExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3NsJyxcbiAgbW9udGhzOiAnamFudWFyX2ZlYnJ1YXJfbWFyZWNfYXByaWxfbWFqX2p1bmlqX2p1bGlqX2F2Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW4uX2ZlYi5fbWFyLl9hcHIuX21hai5fanVuLl9qdWwuX2F2Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICduZWRlbGphX3BvbmVkZWxqZWtfdG9yZWtfc3JlZGFfw4TCjWV0cnRla19wZXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZWQuX3Bvbi5fdG9yLl9zcmUuX8OEwo1ldC5fcGV0Ll9zb2IuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3RvX3NyX8OEwo1lX3BlX3NvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tkYW5lcyBvYl0gTFQnLFxuICAgIG5leHREYXk6ICdbanV0cmkgb2JdIExUJyxcblxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbbmVkZWxqb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbc3JlZG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NvYm90b10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFtvYl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYWogb2JdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuam9dIFtuZWRlbGpvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbc3JlZG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuam9dIFtzb2JvdG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuamldIGRkZGQgW29iXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8OEwo1leiAlcycsXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxuICAgIHM6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgc3M6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGhoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5OiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHl5OiBwcm9jZXNzUmVsYXRpdmVUaW1lXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3dlZGlzaCBbc3ZdXG4vLyEgYXV0aG9yIDogSmVucyBBbG0gOiBodHRwczovL2dpdGh1Yi5jb20vdWxtdXNcblxuZXhwb3J0IGNvbnN0IHN2TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnc3YnLFxuICBtb250aHM6ICdqYW51YXJpX2ZlYnJ1YXJpX21hcnNfYXByaWxfbWFqX2p1bmlfanVsaV9hdWd1c3RpX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbl9mZWJfbWFyX2Fwcl9tYWpfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ3PDg8K2bmRhZ19tw4PCpW5kYWdfdGlzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw4PCtnJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdzw4PCtm5fbcODwqVuX3Rpc19vbnNfdG9yX2ZyZV9sw4PCtnInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc8ODwrZfbcODwqVfdGlfb25fdG9fZnJfbMODwrYnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdZWVlZLU1NLUREJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxuICAgIGxsbDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxuICAgIGxsbGw6ICdkZGQgRCBNTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0lkYWddIExUJyxcbiAgICBuZXh0RGF5OiAnW0ltb3Jnb25dIExUJyxcbiAgICBsYXN0RGF5OiAnW0lnw4PCpXJdIExUJyxcbiAgICBuZXh0V2VlazogJ1tQw4PCpV0gZGRkZCBMVCcsXG4gICAgbGFzdFdlZWs6ICdbSV0gZGRkZFtzXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvbSAlcycsXG4gICAgcGFzdDogJ2bDg8K2ciAlcyBzZWRhbicsXG4gICAgczogJ27Dg8KlZ3JhIHNla3VuZGVyJyxcbiAgICBzczogJyVkIHNla3VuZGVyJyxcbiAgICBtOiAnZW4gbWludXQnLFxuICAgIG1tOiAnJWQgbWludXRlcicsXG4gICAgaDogJ2VuIHRpbW1lJyxcbiAgICBoaDogJyVkIHRpbW1hcicsXG4gICAgZDogJ2VuIGRhZycsXG4gICAgZGQ6ICclZCBkYWdhcicsXG4gICAgTTogJ2VuIG3Dg8KlbmFkJyxcbiAgICBNTTogJyVkIG3Dg8KlbmFkZXInLFxuICAgIHk6ICdldHQgw4PCpXInLFxuICAgIHl5OiAnJWQgw4PCpXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlfGEpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBsZXQgYiA9IG51bSAlIDEwLFxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnZScgOlxuICAgICAgICAoYiA9PT0gMSkgPyAnYScgOlxuICAgICAgICAgIChiID09PSAyKSA/ICdhJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAnZScgOiAnZSc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbi8vIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gbG9jYWxlIDogVGhhaSBbdGhdXG4vLyBhdXRob3IgOiBXYXRjaGFyYXBvbCBTYW5pdHdvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vdHVtaXRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5leHBvcnQgY29uc3QgdGhMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd0aCcsXG4gIG1vbnRoczogJ8OgwrjCocOgwrjCgcOgwrjCo8OgwrjCssOgwrjChMOgwrjCoV/DoMK4woHDoMK4wrjDoMK4wqHDoMK4wqDDoMK4wrLDoMK4wp7DoMK4wrHDoMK4wpnDoMK4wpjDoMK5woxfw6DCuMKhw6DCuMK1w6DCuMKZw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrnCgMOgwrjCocOgwrjCqcOgwrjCssOgwrjCosOgwrjCmV/DoMK4wp7DoMK4wqTDoMK4wqnDoMK4wqDDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKhw6DCuMK0w6DCuMKWw6DCuMK4w6DCuMKZw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCgcOgwrjCo8OgwrjCgcOgwrjCjsOgwrjCssOgwrjChMOgwrjCoV/DoMK4wqrDoMK4wrTDoMK4wofDoMK4wqvDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKBw6DCuMKxw6DCuMKZw6DCuMKiw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjClcOgwrjCuMOgwrjCpcOgwrjCssOgwrjChMOgwrjCoV/DoMK4wp7DoMK4wqTDoMK4wqjDoMK4wojDoMK4wrTDoMK4woHDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKYw6DCuMKxw6DCuMKZw6DCuMKnw6DCuMKyw6DCuMKEw6DCuMKhJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ8OgwrjCoS7DoMK4woQuX8OgwrjCgS7DoMK4wp4uX8OgwrjCocOgwrjCtS7DoMK4woQuX8OgwrnCgMOgwrjCoS7DoMK4wqIuX8OgwrjCni7DoMK4woQuX8OgwrjCocOgwrjCtC7DoMK4wqIuX8OgwrjCgS7DoMK4woQuX8OgwrjCqi7DoMK4woQuX8OgwrjCgS7DoMK4wqIuX8OgwrjClS7DoMK4woQuX8OgwrjCni7DoMK4wqIuX8OgwrjCmC7DoMK4woQuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ8OgwrjCrcOgwrjCssOgwrjCl8OgwrjCtMOgwrjClcOgwrjCosOgwrnCjF/DoMK4wojDoMK4wrHDoMK4wpnDoMK4wpfDoMK4wqPDoMK5woxfw6DCuMKtw6DCuMKxw6DCuMKHw6DCuMKEw6DCuMKyw6DCuMKjX8OgwrjCnsOgwrjCuMOgwrjCmF/DoMK4wp7DoMK4wqTDoMK4wqvDoMK4wrHDoMK4wqrDoMK4wprDoMK4wpTDoMK4wrVfw6DCuMKow6DCuMK4w6DCuMKBw6DCuMKjw6DCucKMX8OgwrnCgMOgwrjCqsOgwrjCssOgwrjCo8OgwrnCjCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OgwrjCrcOgwrjCssOgwrjCl8OgwrjCtMOgwrjClcOgwrjCosOgwrnCjF/DoMK4wojDoMK4wrHDoMK4wpnDoMK4wpfDoMK4wqPDoMK5woxfw6DCuMKtw6DCuMKxw6DCuMKHw6DCuMKEw6DCuMKyw6DCuMKjX8OgwrjCnsOgwrjCuMOgwrjCmF/DoMK4wp7DoMK4wqTDoMK4wqvDoMK4wrHDoMK4wqpfw6DCuMKow6DCuMK4w6DCuMKBw6DCuMKjw6DCucKMX8OgwrnCgMOgwrjCqsOgwrjCssOgwrjCo8OgwrnCjCcuc3BsaXQoJ18nKSwgLy8geWVzLCB0aHJlZSBjaGFyYWN0ZXJzIGRpZmZlcmVuY2VcbiAgd2Vla2RheXNNaW46ICfDoMK4wq3DoMK4wrIuX8OgwrjCiC5fw6DCuMKtLl/DoMK4wp4uX8OgwrjCnsOgwrjCpC5fw6DCuMKoLl/DoMK4wqouJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyIEg6bW0nLFxuICAgIExMTEw6ICfDoMK4wqfDoMK4wrHDoMK4wplkZGRkw6DCuMKXw6DCuMK1w6DCucKIIEQgTU1NTSBZWVlZIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsiBIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw6DCuMKBw6DCucKIw6DCuMKtw6DCuMKZw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHfMOgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChy8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfDoMK4wqvDoMK4wqXDoMK4wrHDoMK4wofDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocnO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8OgwrjCgcOgwrnCiMOgwrjCrcOgwrjCmcOgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDoMK4wqfDoMK4wrHDoMK4wpnDoMK4wpnDoMK4wrXDoMK5wokgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbmV4dERheTogJ1vDoMK4wp7DoMK4wqPDoMK4wrjDoMK5wojDoMK4wofDoMK4wpnDoMK4wrXDoMK5wokgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkW8OgwrjCq8OgwrjCmcOgwrnCicOgwrjCsiDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcbiAgICBsYXN0RGF5OiAnW8OgwrnCgMOgwrjCocOgwrjCt8OgwrnCiMOgwrjCrcOgwrjCp8OgwrjCssOgwrjCmcOgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcbiAgICBsYXN0V2VlazogJ1vDoMK4wqfDoMK4wrHDoMK4wpldZGRkZFvDoMK4wpfDoMK4wrXDoMK5wojDoMK5woHDoMK4wqXDoMK5wonDoMK4wqcgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDoMK4wq3DoMK4wrXDoMK4woEgJXMnLFxuICAgIHBhc3Q6ICclc8OgwrjCl8OgwrjCtcOgwrnCiMOgwrnCgcOgwrjCpcOgwrnCicOgwrjCpycsXG4gICAgczogJ8OgwrnChMOgwrjCocOgwrnCiMOgwrjCgcOgwrjCtcOgwrnCiMOgwrjCp8OgwrjCtMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXG4gICAgc3M6ICclZCDDoMK4wqfDoMK4wrTDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIG06ICcxIMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXG4gICAgbW06ICclZCDDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIGg6ICcxIMOgwrjCisOgwrjCscOgwrnCiMOgwrjCp8OgwrnCgsOgwrjCocOgwrjChycsXG4gICAgaGg6ICclZCDDoMK4worDoMK4wrHDoMK5wojDoMK4wqfDoMK5woLDoMK4wqHDoMK4wocnLFxuICAgIGQ6ICcxIMOgwrjCp8OgwrjCscOgwrjCmScsXG4gICAgZGQ6ICclZCDDoMK4wqfDoMK4wrHDoMK4wpknLFxuICAgIE06ICcxIMOgwrnCgMOgwrjClMOgwrjCt8OgwrjCrcOgwrjCmScsXG4gICAgTU06ICclZCDDoMK5woDDoMK4wpTDoMK4wrfDoMK4wq3DoMK4wpknLFxuICAgIHk6ICcxIMOgwrjCm8OgwrjCtScsXG4gICAgeXk6ICclZCDDoMK4wpvDoMK4wrUnXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFR1cmtpc2ggW3RyXVxuLy8hIGF1dGhvcnMgOiBFcmhhbiBHdW5kb2dhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9lcmhhbmd1bmRvZ2FuLFxuLy8hICAgICAgICAgICBCdXJhayBZacOEwp9pdCBLYXlhOiBodHRwczovL2dpdGh1Yi5jb20vQllLXG5cbmxldCBzdWZmaXhlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgMTogJ1xcJ2luY2knLFxuICA1OiAnXFwnaW5jaScsXG4gIDg6ICdcXCdpbmNpJyxcbiAgNzA6ICdcXCdpbmNpJyxcbiAgODA6ICdcXCdpbmNpJyxcbiAgMjogJ1xcJ25jaScsXG4gIDc6ICdcXCduY2knLFxuICAyMDogJ1xcJ25jaScsXG4gIDUwOiAnXFwnbmNpJyxcbiAgMzogJ1xcJ8ODwrxuY8ODwrwnLFxuICA0OiAnXFwnw4PCvG5jw4PCvCcsXG4gIDEwMDogJ1xcJ8ODwrxuY8ODwrwnLFxuICA2OiAnXFwnbmPDhMKxJyxcbiAgOTogJ1xcJ3VuY3UnLFxuICAxMDogJ1xcJ3VuY3UnLFxuICAzMDogJ1xcJ3VuY3UnLFxuICA2MDogJ1xcJ8OEwrFuY8OEwrEnLFxuICA5MDogJ1xcJ8OEwrFuY8OEwrEnXG59O1xuXG5leHBvcnQgY29uc3QgdHJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd0cicsXG4gIG1vbnRoczogJ09jYWtfw4XCnnViYXRfTWFydF9OaXNhbl9NYXnDhMKxc19IYXppcmFuX1RlbW11el9Bw4TCn3VzdG9zX0V5bMODwrxsX0VraW1fS2Fzw4TCsW1fQXJhbMOEwrFrJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ09jYV/DhcKedWJfTWFyX05pc19NYXlfSGF6X1RlbV9Bw4TCn3VfRXlsX0VraV9LYXNfQXJhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ1BhemFyX1BhemFydGVzaV9TYWzDhMKxX8ODwodhcsOFwp9hbWJhX1BlcsOFwp9lbWJlX0N1bWFfQ3VtYXJ0ZXNpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnUGF6X1B0c19TYWxfw4PCh2FyX1Blcl9DdW1fQ3RzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ1B6X1B0X1NhX8ODwodhX1BlX0N1X0N0Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2J1Z8ODwrxuIHNhYXRdIExUJyxcbiAgICBuZXh0RGF5OiAnW3lhcsOEwrFuIHNhYXRdIExUJyxcbiAgICBuZXh0V2VlazogJ1tnZWxlY2VrXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgbGFzdERheTogJ1tkw4PCvG5dIExUJyxcbiAgICBsYXN0V2VlazogJ1tnZcODwqdlbl0gZGRkZCBbc2FhdF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgc29ucmEnLFxuICAgIHBhc3Q6ICclcyDDg8K2bmNlJyxcbiAgICBzOiAnYmlya2HDg8KnIHNhbml5ZScsXG4gICAgc3M6ICclZCBzYW5peWUnLFxuICAgIG06ICdiaXIgZGFraWthJyxcbiAgICBtbTogJyVkIGRha2lrYScsXG4gICAgaDogJ2JpciBzYWF0JyxcbiAgICBoaDogJyVkIHNhYXQnLFxuICAgIGQ6ICdiaXIgZ8ODwrxuJyxcbiAgICBkZDogJyVkIGfDg8K8bicsXG4gICAgTTogJ2JpciBheScsXG4gICAgTU06ICclZCBheScsXG4gICAgeTogJ2JpciB5w4TCsWwnLFxuICAgIHl5OiAnJWQgecOEwrFsJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0nKGluY2l8bmNpfMODwrxuY8ODwrx8bmPDhMKxfHVuY3V8w4TCsW5jw4TCsSkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGlmIChudW0gPT09IDApIHsgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xuICAgICAgcmV0dXJuIG51bSArICdcXCfDhMKxbmPDhMKxJztcbiAgICB9XG4gICAgbGV0IGEgPSBudW0gJSAxMCxcbiAgICAgIGIgPSBudW0gJSAxMDAgLSBhLFxuICAgICAgYyA9IG51bSA+PSAxMDAgPyAxMDAgOiBudWxsO1xuICAgIHJldHVybiBudW0gKyAoc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0gfHwgc3VmZml4ZXNbY10pO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDaGluZXNlIChDaGluYSkgW3poLWNuXVxuLy8hIGF1dGhvciA6IHN1dXBpYyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdXVwaWNcbi8vISBhdXRob3IgOiBaZW5vIFplbmcgOiBodHRwczovL2dpdGh1Yi5jb20vemVub3plbmdcblxuZXhwb3J0IGNvbnN0IHpoQ25Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd6aC1jbicsXG4gIG1vbnRoczogJ8OkwrjCgMOmwpzCiF/DpMK6wozDpsKcwohfw6TCuMKJw6bCnMKIX8OlwpvCm8OmwpzCiF/DpMK6wpTDpsKcwohfw6XChcKtw6bCnMKIX8OkwrjCg8OmwpzCiF/DpcKFwqvDpsKcwohfw6TCucKdw6bCnMKIX8Olwo3CgcOmwpzCiF/DpcKNwoHDpMK4woDDpsKcwohfw6XCjcKBw6TCusKMw6bCnMKIJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJzHDpsKcwohfMsOmwpzCiF8zw6bCnMKIXzTDpsKcwohfNcOmwpzCiF82w6bCnMKIXzfDpsKcwohfOMOmwpzCiF85w6bCnMKIXzEww6bCnMKIXzExw6bCnMKIXzEyw6bCnMKIJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ8OmwpjCn8OmwpzCn8OmwpfCpV/DpsKYwp/DpsKcwp/DpMK4woBfw6bCmMKfw6bCnMKfw6TCusKMX8OmwpjCn8OmwpzCn8OkwrjCiV/DpsKYwp/DpsKcwp/DpcKbwptfw6bCmMKfw6bCnMKfw6TCusKUX8OmwpjCn8OmwpzCn8OlwoXCrScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OlwpHCqMOmwpfCpV/DpcKRwqjDpMK4woBfw6XCkcKow6TCusKMX8OlwpHCqMOkwrjCiV/DpcKRwqjDpcKbwptfw6XCkcKow6TCusKUX8OlwpHCqMOlwoXCrScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDpsKXwqVfw6TCuMKAX8OkwrrCjF/DpMK4wolfw6XCm8KbX8OkwrrClF/DpcKFwq0nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdZWVlZL01NL0REJyxcbiAgICBMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgTExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlQWjDp8KCwrltbcOlwojChicsXG4gICAgTExMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpWRkZGRBaMOnwoLCuW1tw6XCiMKGJyxcbiAgICBsOiAnWVlZWS9NL0QnLFxuICAgIGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcbiAgICBsbGw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxuICAgIGxsbGw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqVkZGRkIEhIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw6XCh8KMw6bCmcKofMOmwpfCqcOkwrjCinzDpMK4worDpcKNwoh8w6TCuMKtw6XCjcKIfMOkwrjCi8Olwo3CiHzDpsKZwprDpMK4woovLFxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIGhvdXIgPSAwO1xuICAgIH1cbiAgICBpZiAobWVyaWRpZW0gPT09ICfDpcKHwozDpsKZwqgnIHx8IG1lcmlkaWVtID09PSAnw6bCl8Kpw6TCuMKKJyB8fFxuICAgICAgbWVyaWRpZW0gPT09ICfDpMK4worDpcKNwognKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6TCuMKLw6XCjcKIJyB8fCBtZXJpZGllbSA9PT0gJ8OmwpnCmsOkwrjCiicpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICfDpMK4wq3DpcKNwognXG4gICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBsZXQgaG0gPSBob3VyICogMTAwICsgbWludXRlO1xuICAgIGlmIChobSA8IDYwMCkge1xuICAgICAgcmV0dXJuICfDpcKHwozDpsKZwqgnO1xuICAgIH0gZWxzZSBpZiAoaG0gPCA5MDApIHtcbiAgICAgIHJldHVybiAnw6bCl8Kpw6TCuMKKJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTEzMCkge1xuICAgICAgcmV0dXJuICfDpMK4worDpcKNwognO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxMjMwKSB7XG4gICAgICByZXR1cm4gJ8OkwrjCrcOlwo3CiCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDE4MDApIHtcbiAgICAgIHJldHVybiAnw6TCuMKLw6XCjcKIJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDpsKZwprDpMK4woonO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OkwrvCisOlwqTCqV1MVCcsXG4gICAgbmV4dERheTogJ1vDpsKYwo7DpcKkwqldTFQnLFxuICAgIG5leHRXZWVrOiAnW8OkwrjCi11kZGRkTFQnLFxuICAgIGxhc3REYXk6ICdbw6bCmMKow6XCpMKpXUxUJyxcbiAgICBsYXN0V2VlazogJ1vDpMK4wopdZGRkZExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSjDpsKXwqV8w6bCnMKIfMOlwpHCqCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kKSB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDpsKXwqUnO1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCnMKIJztcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6XCkcKoJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICB9XG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzw6XChsKFJyxcbiAgICBwYXN0OiAnJXPDpcKJwo0nLFxuICAgIHM6ICfDpcKHwqDDp8KnwpInLFxuICAgIHNzOiAnJWQgw6fCp8KSJyxcbiAgICBtOiAnMSDDpcKIwobDqcKSwp8nLFxuICAgIG1tOiAnJWQgw6XCiMKGw6nCksKfJyxcbiAgICBoOiAnMSDDpcKwwo/DpsKXwrYnLFxuICAgIGhoOiAnJWQgw6XCsMKPw6bCl8K2JyxcbiAgICBkOiAnMSDDpcKkwqknLFxuICAgIGRkOiAnJWQgw6XCpMKpJyxcbiAgICBNOiAnMSDDpMK4wqrDpsKcwognLFxuICAgIE1NOiAnJWQgw6TCuMKqw6bCnMKIJyxcbiAgICB5OiAnMSDDpcK5wrQnLFxuICAgIHl5OiAnJWQgw6XCucK0J1xuICB9LFxuICB3ZWVrOiB7XG4gICAgLy8gR0IvVCA3NDA4LTE5OTTDo8KAworDpsKVwrDDpsKNwq7DpcKFwoPDpcKSwozDpMK6wqTDpsKNwqLDpsKgwrzDpcK8wo/DgsK3w6TCv8Khw6bCgcKvw6TCusKkw6bCjcKiw4LCt8OmwpfCpcOmwpzCn8OlwpLCjMOmwpfCtsOpwpfCtMOowqHCqMOnwqTCusOmwrPClcOjwoDCi8OkwrjCjklTTyA4NjAxOjE5ODjDp8KtwonDpsKVwohcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl0sIm5hbWVzIjpbImRheXNJbk1vbnRoIiwibW9udGhzIiwibW9udGhzU2hvcnQiLCJtb250aHNTaG9ydERvdCIsIm1vbnRoc1BhcnNlIiwibW9udGhzUmVnZXgiLCJ0cmFuc2xhdGUiLCJzeW1ib2xNYXAiLCJudW1iZXJNYXAiLCJtb250aHNTaG9ydFdpdGhEb3RzIiwibW9udGhzU2hvcnRXaXRob3V0RG90cyIsInBsdXJhbCIsInJlbGF0aXZlVGltZVdpdGhQbHVyYWwiLCJwcm9jZXNzUmVsYXRpdmVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxhQUFvQixDQUFTLEVBQUUsQ0FBUztJQUN0QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3hCOzs7OztBQUVELGtCQUF5QixHQUFXO0lBQ2xDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hEOzs7Ozs7QUNSRDs7OztBQUVBLGtCQUF5QixHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELGdCQUF1QixLQUFVO0lBQy9CLE9BQU8sS0FBSyxZQUFZLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZUFBZSxDQUFDO0NBQzNGOzs7OztBQU1ELHFCQUE0QixJQUFVO0lBQ3BDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Q0FDdkQ7Ozs7O0FBRUQsb0JBQTJCLEVBQU87SUFDaEMsUUFDRSxFQUFFLFlBQVksUUFBUTtRQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEs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