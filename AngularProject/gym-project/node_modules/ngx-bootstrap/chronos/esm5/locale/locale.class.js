/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:max-file-line-count max-line-length cyclomatic-complexity
import { weekOfYear } from '../units/week-calendar-utils';
import { hasOwnProp, isArray, isFunction } from '../utils/type-checks';
import { getDay, getMonth } from '../utils/date-getters';
import { matchWord, regexEscape } from '../parse/regex';
import { setDayOfWeek } from '../units/day-of-week';
/**
 * @record
 */
export function LocaleOptionsFormat() { }
function LocaleOptionsFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    LocaleOptionsFormat.prototype.format;
    /** @type {?} */
    LocaleOptionsFormat.prototype.standalone;
    /** @type {?|undefined} */
    LocaleOptionsFormat.prototype.isFormat;
}
var /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
export var /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
export var /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
export var /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
export var /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
export var /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
export var /** @type {?} */ defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
export var /** @type {?} */ defaultOrdinal = '%d';
export var /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var /** @type {?} */ defaultMonthsShortRegex = matchWord;
var /** @type {?} */ defaultMonthsRegex = matchWord;
/**
 * @record
 */
export function LocaleData() { }
function LocaleData_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    LocaleData.prototype.abbr;
    /** @type {?|undefined} */
    LocaleData.prototype.parentLocale;
    /** @type {?|undefined} */
    LocaleData.prototype.months;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShort;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsParseExact;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdays;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysShort;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysMin;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysParseExact;
    /** @type {?|undefined} */
    LocaleData.prototype.longDateFormat;
    /** @type {?|undefined} */
    LocaleData.prototype.calendar;
    /** @type {?|undefined} */
    LocaleData.prototype.relativeTime;
    /** @type {?|undefined} */
    LocaleData.prototype.dayOfMonthOrdinalParse;
    /** @type {?|undefined} */
    LocaleData.prototype.ordinal;
    /** @type {?|undefined} */
    LocaleData.prototype.week;
    /** @type {?|undefined} */
    LocaleData.prototype.invalidDate;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShortRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsStrictRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShortStrictRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.longMonthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.shortMonthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiemParse;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiemHour;
    /** @type {?|undefined} */
    LocaleData.prototype.preparse;
    /** @type {?|undefined} */
    LocaleData.prototype.postformat;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiem;
    /** @type {?|undefined} */
    LocaleData.prototype.isPM;
}
var Locale = /** @class */ (function () {
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
            var /** @type {?} */ prop = config[/** @type {?} */ (confKey)];
            var /** @type {?} */ key = /** @type {?} */ ((isFunction(prop) ? confKey : "_" + confKey));
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
         */
        function () {
            return this._invalidDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        if (isUTC === void 0) { isUTC = false; }
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
        if (isUTC === void 0) { isUTC = false; }
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
export { Locale };
function Locale_tsickle_Closure_declarations() {
    /** @type {?} */
    Locale.prototype.parentLocale;
    /** @type {?} */
    Locale.prototype._abbr;
    /** @type {?} */
    Locale.prototype._config;
    /** @type {?} */
    Locale.prototype.meridiemHour;
    /** @type {?} */
    Locale.prototype._invalidDate;
    /** @type {?} */
    Locale.prototype._week;
    /** @type {?} */
    Locale.prototype._dayOfMonthOrdinalParse;
    /** @type {?} */
    Locale.prototype._ordinalParse;
    /** @type {?} */
    Locale.prototype._meridiemParse;
    /** @type {?} */
    Locale.prototype._calendar;
    /** @type {?} */
    Locale.prototype._relativeTime;
    /** @type {?} */
    Locale.prototype._months;
    /** @type {?} */
    Locale.prototype._monthsShort;
    /** @type {?} */
    Locale.prototype._monthsRegex;
    /** @type {?} */
    Locale.prototype._monthsShortRegex;
    /** @type {?} */
    Locale.prototype._monthsStrictRegex;
    /** @type {?} */
    Locale.prototype._monthsShortStrictRegex;
    /** @type {?} */
    Locale.prototype._monthsParse;
    /** @type {?} */
    Locale.prototype._longMonthsParse;
    /** @type {?} */
    Locale.prototype._shortMonthsParse;
    /** @type {?} */
    Locale.prototype._monthsParseExact;
    /** @type {?} */
    Locale.prototype._weekdaysParseExact;
    /** @type {?} */
    Locale.prototype._weekdaysRegex;
    /** @type {?} */
    Locale.prototype._weekdaysShortRegex;
    /** @type {?} */
    Locale.prototype._weekdaysMinRegex;
    /** @type {?} */
    Locale.prototype._weekdaysStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdaysShortStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdaysMinStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdays;
    /** @type {?} */
    Locale.prototype._weekdaysShort;
    /** @type {?} */
    Locale.prototype._weekdaysMin;
    /** @type {?} */
    Locale.prototype._weekdaysParse;
    /** @type {?} */
    Locale.prototype._minWeekdaysParse;
    /** @type {?} */
    Locale.prototype._shortWeekdaysParse;
    /** @type {?} */
    Locale.prototype._fullWeekdaysParse;
    /** @type {?} */
    Locale.prototype._longDateFormat;
    /** @type {?} */
    Locale.prototype._ordinal;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function cmpLenRev(a, b) {
    return b.length - a.length;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibG9jYWxlL2xvY2FsZS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXBELHFCQUFNLGdCQUFnQixHQUFHLCtCQUErQixDQUFDO0FBQ3pELE1BQU0sQ0FBQyxxQkFBTSxtQkFBbUIsR0FBRyx1RkFBdUYsQ0FBQyxLQUFLLENBQzlILEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHFCQUFNLHdCQUF3QixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FDN0YsR0FBRyxDQUNKLENBQUM7QUFDRixNQUFNLENBQUMscUJBQU0scUJBQXFCLEdBQUcsMERBQTBELENBQUMsS0FBSyxDQUNuRyxHQUFHLENBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxxQkFBTSwwQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQzNFLEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHFCQUFNLHdCQUF3QixHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxRSxNQUFNLENBQUMscUJBQU0scUJBQXFCLEdBQWdDO0lBQ2hFLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osQ0FBQyxFQUFFLFlBQVk7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RyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7aUJBL3RCaEY7SUFpdUJDLENBQUE7QUEvbkJELGtCQStuQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBUyxFQUFFLENBQVM7SUFDckMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztDQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgbWF4LWxpbmUtbGVuZ3RoIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuXG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBtYXRjaFdvcmQsIHJlZ2V4RXNjYXBlIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgc2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZU9wdGlvbnNGb3JtYXQge1xuICBmb3JtYXQ6IHN0cmluZ1tdO1xuICBzdGFuZGFsb25lOiBzdHJpbmdbXTtcbiAgaXNGb3JtYXQ/OiBSZWdFeHA7XG59XG5cbmV4cG9ydCB0eXBlIExvY2FsZU9wdGlvbnMgPSBzdHJpbmdbXSB8IExvY2FsZU9wdGlvbnNGb3JtYXQ7XG5cbmNvbnN0IE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy87XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPSAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQ6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgTFRTOiAnaDptbTpzcyBBJyxcbiAgTFQ6ICdoOm1tIEEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcmRpbmFsID0gJyVkJztcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbmNvbnN0IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuY29uc3QgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuXG5leHBvcnQgdHlwZSBPcmRpbmFsRGF0ZUZuID0gKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZykgPT4gc3RyaW5nO1xuZXhwb3J0IHR5cGUgUGx1cmFsaXplRGF0ZUZuID0gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT86IHN0cmluZywgaXNGdXR1cmU/OiBib29sZWFuKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlRGF0YSB7XG4gIGFiYnI/OiBzdHJpbmc7XG4gIHBhcmVudExvY2FsZT86IHN0cmluZztcblxuICBtb250aHM/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIG1vbnRoc1Nob3J0PzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICBtb250aHNQYXJzZUV4YWN0PzogYm9vbGVhbjtcblxuICB3ZWVrZGF5cz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNTaG9ydD86IHN0cmluZ1tdIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIHdlZWtkYXlzTWluPzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNQYXJzZUV4YWN0PzogYm9vbGVhbjtcblxuICBsb25nRGF0ZUZvcm1hdD86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY2FsZW5kYXI/OiB7XG4gICAgW2tleTogc3RyaW5nXTogKHN0cmluZ1xuICAgICAgfCAoKGRhdGU6IERhdGUsIG5vdz86IERhdGUpID0+IHN0cmluZylcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgfCAoKGRheU9mV2VlazogbnVtYmVyLCBpc05leHRXZWVrOiBib29sZWFuKSA9PiBzdHJpbmcpKVxuICB9O1xuICByZWxhdGl2ZVRpbWU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IFBsdXJhbGl6ZURhdGVGbiB9O1xuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlPzogUmVnRXhwO1xuICBvcmRpbmFsPzogc3RyaW5nIHwgT3JkaW5hbERhdGVGbjtcblxuICB3ZWVrPzogeyBkb3c/OiBudW1iZXI7IGRveT86IG51bWJlciB9O1xuXG4gIGludmFsaWREYXRlPzogc3RyaW5nO1xuXG4gIG1vbnRoc1JlZ2V4PzogUmVnRXhwO1xuICBtb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuICBtb250aHNTaG9ydFJlZ2V4PzogUmVnRXhwO1xuICBtb250aHNTdHJpY3RSZWdleD86IFJlZ0V4cDtcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleD86IFJlZ0V4cDtcbiAgbG9uZ01vbnRoc1BhcnNlPzogUmVnRXhwW107XG4gIHNob3J0TW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcblxuICBtZXJpZGllbVBhcnNlPzogUmVnRXhwO1xuXG4gIG1lcmlkaWVtSG91cj8oaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKTogbnVtYmVyO1xuXG4gIHByZXBhcnNlPyhzdHI6IHN0cmluZyk6IHN0cmluZztcblxuICBwb3N0Zm9ybWF0PyhzdHI6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZztcblxuICBtZXJpZGllbT8oaG91cjogbnVtYmVyLCBtaW51dGU/OiBudW1iZXIsIGlzTG93ZXI/OiBib29sZWFuKTogc3RyaW5nO1xuXG4gIGlzUE0/KGlucHV0OiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxlIHtcbiAgcGFyZW50TG9jYWxlPzogTG9jYWxlO1xuICBfYWJicjogc3RyaW5nO1xuICBfY29uZmlnOiBMb2NhbGVEYXRhO1xuICBtZXJpZGllbUhvdXI6IChob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpID0+IG51bWJlcjtcblxuICBfaW52YWxpZERhdGU6IHN0cmluZztcbiAgX3dlZWs6IHsgZG93OiBudW1iZXI7IGRveTogbnVtYmVyIH07XG4gIF9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBSZWdFeHA7XG4gIF9vcmRpbmFsUGFyc2U6IFJlZ0V4cDtcbiAgX21lcmlkaWVtUGFyc2U6IFJlZ0V4cDtcblxuICBwcml2YXRlIF9jYWxlbmRhcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHJpdmF0ZSBfcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogc3RyaW5nOyBwYXN0OiBzdHJpbmcgfTtcbiAgcHJpdmF0ZSBfbW9udGhzOiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF9tb250aHNTaG9ydDogTG9jYWxlT3B0aW9ucztcbiAgcHJpdmF0ZSBfbW9udGhzUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnRSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1BhcnNlOiBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbG9uZ01vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9zaG9ydE1vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9tb250aHNQYXJzZUV4YWN0OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzUGFyc2VFeGFjdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2Vla2RheXNSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5SZWdleDogUmVnRXhwO1xuXG4gIHByaXZhdGUgX3dlZWtkYXlzU3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg6IFJlZ0V4cDtcblxuICBwcml2YXRlIF93ZWVrZGF5czogTG9jYWxlT3B0aW9ucztcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydDogc3RyaW5nW107XG4gIHByaXZhdGUgX3dlZWtkYXlzTWluOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbWluV2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfc2hvcnRXZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9mdWxsV2Vla2RheXNQYXJzZTogUmVnRXhwW107XG4gIHByaXZhdGUgX2xvbmdEYXRlRm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIHByaXZhdGUgX29yZGluYWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IExvY2FsZURhdGEpIHtcbiAgICBpZiAoISFjb25maWcpIHtcbiAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgc2V0KGNvbmZpZzogTG9jYWxlRGF0YSk6IHZvaWQge1xuICAgIGxldCBjb25mS2V5O1xuICAgIGZvciAoY29uZktleSBpbiBjb25maWcpIHtcbiAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KGNvbmZLZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvcCA9IGNvbmZpZ1tjb25mS2V5IGFzIGtleW9mIExvY2FsZURhdGFdO1xuICAgICAgY29uc3Qga2V5ID0gKGlzRnVuY3Rpb24ocHJvcCkgPyBjb25mS2V5IDogYF8ke2NvbmZLZXl9YCkgYXMga2V5b2YgTG9jYWxlO1xuXG4gICAgICB0aGlzW2tleV0gPSBwcm9wIGFzIGFueTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBjYWxlbmRhcihrZXk6IHN0cmluZywgZGF0ZTogRGF0ZSwgbm93OiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyLnNhbWVFbHNlO1xuXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG51bGwsIGRhdGUsIG5vdykgOiBvdXRwdXQ7XG4gIH1cblxuICBsb25nRGF0ZUZvcm1hdChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWw6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICB9XG5cbiAgZ2V0IGludmFsaWREYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xuICB9XG5cbiAgc2V0IGludmFsaWREYXRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW52YWxpZERhdGUgPSB2YWw7XG4gIH1cblxuICBvcmRpbmFsKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW0udG9TdHJpbmcoMTApKTtcbiAgfVxuXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBzdHI6ICdmdXR1cmUnIHwgJ3Bhc3QnLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cl07XG5cbiAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xuICAgICAgb3V0cHV0KG51bSwgd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSkgOlxuICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgcGFzdEZ1dHVyZShkaWZmOiBudW1iZXIsIG91dHB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG5cbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbiAgfVxuXG4gIC8qKiBNb250aHMgKi9cbiAgbW9udGhzKCk6IHN0cmluZ1tdO1xuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIG1vbnRocyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpXG4gICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgIDogdGhpcy5fbW9udGhzLnN0YW5kYWxvbmU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdClcbiAgICAgID8gJ2Zvcm1hdCdcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1trZXldW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICBtb250aHNTaG9ydCgpOiBzdHJpbmdbXTtcbiAgbW9udGhzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxuICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0LnN0YW5kYWxvbmU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIG1vbnRoc1BhcnNlKG1vbnRoTmFtZTogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBkYXRlO1xuICAgIGxldCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb250aFN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgaSkpO1xuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgIGNvbnN0IF9tb250aHMgPSB0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgY29uc3QgX3Nob3J0TW9udGhzID0gdGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X21vbnRoc30kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke19zaG9ydE1vbnRoc30kYCwgJ2knKTtcbiAgICAgIH1cbiAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICByZWdleCA9IGBeJHt0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycsIHRydWUpfWA7XG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgfVxuICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgKHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSBhcyBSZWdFeHApLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU0nICYmICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW9udGhzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XG4gIH1cblxuICBtb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVNb250aHNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gIH1cblxuICAvKiogV2VlayAqL1xuICB3ZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95LCBpc1VUQykud2VlaztcbiAgfVxuXG4gIGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xuICB9XG5cbiAgZmlyc3REYXlPZlllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XG4gIH1cblxuICAvKiogRGF5IG9mIFdlZWsgKi9cbiAgd2Vla2RheXMoKTogc3RyaW5nW107XG4gIHdlZWtkYXlzKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5cyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKVxuICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXG4gICAgICAgIDogdGhpcy5fd2Vla2RheXMuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW2dldERheShkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIGNvbnN0IF9rZXkgPSB0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdClcbiAgICAgID8gJ2Zvcm1hdCdcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW19rZXldW2dldERheShkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgd2Vla2RheXNNaW4oKTogc3RyaW5nW107XG4gIHdlZWtkYXlzTWluKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5c01pbihkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c01pbltnZXREYXkoZGF0ZSwgaXNVVEMpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xuICB9XG5cbiAgd2Vla2RheXNTaG9ydCgpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgd2Vla2RheXNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbiAgfVxuXG5cbiAgLy8gcHJvdG8ud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcbiAgd2Vla2RheXNQYXJzZSh3ZWVrZGF5TmFtZT86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgaTtcbiAgICBsZXQgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIC8vIGZpeDogaGVyZSBpcyB0aGUgaXNzdWVcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5cyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICByZWdleCA9IGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c01pbihkYXRlLCAnJywgdHJ1ZSl9YDtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0FycmF5PFJlZ0V4cD4odGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlKVxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fd2Vla2RheXNQYXJzZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGRkJyAmJiB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZCcgJiYgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBwcm90by53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XG4gIHdlZWtkYXlzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvdG8ud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XG4gIC8vIHByb3RvLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcblxuXG4gIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdD86IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICB9XG4gIH1cblxuICB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICB9XG4gIH1cblxuICBpc1BNKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCc7XG4gIH1cblxuICBtZXJpZGllbShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIGlzTG93ZXI6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH1cblxuICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gIH1cblxuICBmb3JtYXRMb25nRGF0ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPyB0aGlzLl9sb25nRGF0ZUZvcm1hdCA6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIGNvbnN0IGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRbXG4gICAgICBrZXlcbiAgICAgIF0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgbGV0IGk7XG4gICAgbGV0IGlpO1xuICAgIGxldCBtb207XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyArK2kpIHtcbiAgICAgICAgbW9tID0gbmV3IERhdGUoMjAwMCwgaSk7XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9XG4gICAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcblxuICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaWk7XG4gICAgICB9XG5cbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgIH1cblxuICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBpaTtcbiAgICB9XG4gICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV2Vla1N0cmljdFBhcnNlKHdlZWtkYXlOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBpaTtcbiAgICBjb25zdCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgIGxldCBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhkYXRlLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5c1BhcnNlKVxuICAgICAgfHwgIWlzQXJyYXk8c3RyaW5nPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTW9udGhzUGFyc2UoKSB7XG4gICAgY29uc3Qgc2hvcnRQaWVjZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbG9uZ1BpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtaXhlZFBpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgZGF0ZTtcblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSgyMDAwLCBpKTtcbiAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xuICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycpKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21peGVkUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVXZWVrZGF5c1BhcnNlKCkge1xuICAgIGNvbnN0IG1pblBpZWNlcyA9IFtdO1xuICAgIGNvbnN0IHNob3J0UGllY2VzID0gW107XG4gICAgY29uc3QgbG9uZ1BpZWNlcyA9IFtdO1xuICAgIGNvbnN0IG1peGVkUGllY2VzID0gW107XG5cbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIC8vIGxldCBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XG4gICAgICBjb25zdCBtaW5wID0gdGhpcy53ZWVrZGF5c01pbihkYXRlKTtcbiAgICAgIGNvbnN0IHNob3J0cCA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKTtcbiAgICAgIGNvbnN0IGxvbmdwID0gdGhpcy53ZWVrZGF5cyhkYXRlKTtcbiAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2xvbmdQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaW5QaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcExlblJldihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xufVxuIl19