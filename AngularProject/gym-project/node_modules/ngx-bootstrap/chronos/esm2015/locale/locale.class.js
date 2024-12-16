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
const /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
export const /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
export const /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
export const /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
export const /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
export const /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
export const /** @type {?} */ defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
export const /** @type {?} */ defaultOrdinal = '%d';
export const /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
const /** @type {?} */ defaultMonthsShortRegex = matchWord;
const /** @type {?} */ defaultMonthsRegex = matchWord;
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
export class Locale {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibG9jYWxlL2xvY2FsZS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXBELHVCQUFNLGdCQUFnQixHQUFHLCtCQUErQixDQUFDO0FBQ3pELE1BQU0sQ0FBQyx1QkFBTSxtQkFBbUIsR0FBRyx1RkFBdUYsQ0FBQyxLQUFLLENBQzlILEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHVCQUFNLHdCQUF3QixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FDN0YsR0FBRyxDQUNKLENBQUM7QUFDRixNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQUcsMERBQTBELENBQUMsS0FBSyxDQUNuRyxHQUFHLENBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyx1QkFBTSwwQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQzNFLEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHVCQUFNLHdCQUF3QixHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxRSxNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQWdDO0lBQ2hFLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osQ0FBQyxFQUFFLFlBQVk7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LWZpbGUtbGluZS1jb3VudCBtYXgtbGluZS1sZW5ndGggY3ljbG9tYXRpYy1jb21wbGV4aXR5XG5cbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXREYXksIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBzZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlT3B0aW9uc0Zvcm1hdCB7XG4gIGZvcm1hdDogc3RyaW5nW107XG4gIHN0YW5kYWxvbmU6IHN0cmluZ1tdO1xuICBpc0Zvcm1hdD86IFJlZ0V4cDtcbn1cblxuZXhwb3J0IHR5cGUgTG9jYWxlT3B0aW9ucyA9IHN0cmluZ1tdIHwgTG9jYWxlT3B0aW9uc0Zvcm1hdDtcblxuY29uc3QgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICBMVFM6ICdoOm1tOnNzIEEnLFxuICBMVDogJ2g6bW0gQScsXG4gIEw6ICdNTS9ERC9ZWVlZJyxcbiAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuY29uc3QgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5jb25zdCBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbmV4cG9ydCB0eXBlIE9yZGluYWxEYXRlRm4gPSAobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKSA9PiBzdHJpbmc7XG5leHBvcnQgdHlwZSBQbHVyYWxpemVEYXRlRm4gPSAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Pzogc3RyaW5nLCBpc0Z1dHVyZT86IGJvb2xlYW4pID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVEYXRhIHtcbiAgYWJicj86IHN0cmluZztcbiAgcGFyZW50TG9jYWxlPzogc3RyaW5nO1xuXG4gIG1vbnRocz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgbW9udGhzU2hvcnQ/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIG1vbnRoc1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIHdlZWtkYXlzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1Nob3J0Pzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNNaW4/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIGxvbmdEYXRlRm9ybWF0PzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICBjYWxlbmRhcj86IHtcbiAgICBba2V5OiBzdHJpbmddOiAoc3RyaW5nXG4gICAgICB8ICgoZGF0ZTogRGF0ZSwgbm93PzogRGF0ZSkgPT4gc3RyaW5nKVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICB8ICgoZGF5T2ZXZWVrOiBudW1iZXIsIGlzTmV4dFdlZWs6IGJvb2xlYW4pID0+IHN0cmluZykpXG4gIH07XG4gIHJlbGF0aXZlVGltZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgUGx1cmFsaXplRGF0ZUZuIH07XG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U/OiBSZWdFeHA7XG4gIG9yZGluYWw/OiBzdHJpbmcgfCBPcmRpbmFsRGF0ZUZuO1xuXG4gIHdlZWs/OiB7IGRvdz86IG51bWJlcjsgZG95PzogbnVtYmVyIH07XG5cbiAgaW52YWxpZERhdGU/OiBzdHJpbmc7XG5cbiAgbW9udGhzUmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1BhcnNlPzogUmVnRXhwW107XG4gIG1vbnRoc1Nob3J0UmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1N0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBsb25nTW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcbiAgc2hvcnRNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuXG4gIG1lcmlkaWVtUGFyc2U/OiBSZWdFeHA7XG5cbiAgbWVyaWRpZW1Ib3VyPyhob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgcHJlcGFyc2U/KHN0cjogc3RyaW5nKTogc3RyaW5nO1xuXG4gIHBvc3Rmb3JtYXQ/KHN0cjogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1lcmlkaWVtPyhob3VyOiBudW1iZXIsIG1pbnV0ZT86IG51bWJlciwgaXNMb3dlcj86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgaXNQTT8oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbGUge1xuICBwYXJlbnRMb2NhbGU/OiBMb2NhbGU7XG4gIF9hYmJyOiBzdHJpbmc7XG4gIF9jb25maWc6IExvY2FsZURhdGE7XG4gIG1lcmlkaWVtSG91cjogKGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZykgPT4gbnVtYmVyO1xuXG4gIF9pbnZhbGlkRGF0ZTogc3RyaW5nO1xuICBfd2VlazogeyBkb3c6IG51bWJlcjsgZG95OiBudW1iZXIgfTtcbiAgX2RheU9mTW9udGhPcmRpbmFsUGFyc2U6IFJlZ0V4cDtcbiAgX29yZGluYWxQYXJzZTogUmVnRXhwO1xuICBfbWVyaWRpZW1QYXJzZTogUmVnRXhwO1xuXG4gIHByaXZhdGUgX2NhbGVuZGFyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwcml2YXRlIF9yZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBzdHJpbmc7IHBhc3Q6IHN0cmluZyB9O1xuICBwcml2YXRlIF9tb250aHM6IExvY2FsZU9wdGlvbnM7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF9tb250aHNSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTaG9ydFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1N0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2U6IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9sb25nTW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX3Nob3J0TW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX21vbnRoc1BhcnNlRXhhY3Q6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZUV4YWN0OiBib29sZWFuO1xuICBwcml2YXRlIF93ZWVrZGF5c1JlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c01pblJlZ2V4OiBSZWdFeHA7XG5cbiAgcHJpdmF0ZSBfd2Vla2RheXNTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5TdHJpY3RSZWdleDogUmVnRXhwO1xuXG4gIHByaXZhdGUgX3dlZWtkYXlzOiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9taW5XZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9zaG9ydFdlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX2Z1bGxXZWVrZGF5c1BhcnNlOiBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbG9uZ0RhdGVGb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgcHJpdmF0ZSBfb3JkaW5hbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTG9jYWxlRGF0YSkge1xuICAgIGlmICghIWNvbmZpZykge1xuICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBzZXQoY29uZmlnOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgbGV0IGNvbmZLZXk7XG4gICAgZm9yIChjb25mS2V5IGluIGNvbmZpZykge1xuICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkoY29uZktleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9wID0gY29uZmlnW2NvbmZLZXkgYXMga2V5b2YgTG9jYWxlRGF0YV07XG4gICAgICBjb25zdCBrZXkgPSAoaXNGdW5jdGlvbihwcm9wKSA/IGNvbmZLZXkgOiBgXyR7Y29uZktleX1gKSBhcyBrZXlvZiBMb2NhbGU7XG5cbiAgICAgIHRoaXNba2V5XSA9IHByb3AgYXMgYW55O1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNhbGVuZGFyKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXIuc2FtZUVsc2U7XG5cbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobnVsbCwgZGF0ZSwgbm93KSA6IG91dHB1dDtcbiAgfVxuXG4gIGxvbmdEYXRlRm9ybWF0KGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gIH1cblxuICBnZXQgaW52YWxpZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gIH1cblxuICBzZXQgaW52YWxpZERhdGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnZhbGlkRGF0ZSA9IHZhbDtcbiAgfVxuXG4gIG9yZGluYWwobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyXTtcblxuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XG4gICAgICBvdXRwdXQobnVtLCB3aXRob3V0U3VmZml4LCBzdHIsIGlzRnV0dXJlKSA6XG4gICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKDEwKSk7XG4gIH1cblxuICBwYXN0RnV0dXJlKGRpZmY6IG51bWJlciwgb3V0cHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcblxuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xuICB9XG5cbiAgLyoqIE1vbnRocyAqL1xuICBtb250aHMoKTogc3RyaW5nW107XG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgbW9udGhzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocylcbiAgICAgICAgPyB0aGlzLl9tb250aHNcbiAgICAgICAgOiB0aGlzLl9tb250aHMuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocykpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzW2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnQuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgbW9udGhzUGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGRhdGU7XG4gICAgbGV0IHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCBpKSk7XG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgY29uc3QgX21vbnRocyA9IHRoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBjb25zdCBfc2hvcnRNb250aHMgPSB0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfbW9udGhzfSRgLCAnaScpO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X3Nob3J0TW9udGhzfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9YDtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICB9XG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiAodGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgKHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb250aHNSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgfVxuXG4gIC8qKiBXZWVrICovXG4gIHdlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3ksIGlzVVRDKS53ZWVrO1xuICB9XG5cbiAgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gIH1cblxuICBmaXJzdERheU9mWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgfVxuXG4gIC8qKiBEYXkgb2YgV2VlayAqL1xuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpXG4gICAgICAgID8gdGhpcy5fd2Vla2RheXNcbiAgICAgICAgOiB0aGlzLl93ZWVrZGF5cy5zdGFuZGFsb25lO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgY29uc3QgX2tleSA9IHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbX2tleV1bZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXNNaW4oZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzTWluKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzTWluW2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNNaW47XG4gIH1cblxuICB3ZWVrZGF5c1Nob3J0KCk6IHN0cmluZ1tdO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICB9XG5cblxuICAvLyBwcm90by53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuICB3ZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBpO1xuICAgIGxldCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gZml4OiBoZXJlIGlzIHRoZSBpc3N1ZVxuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKX1gO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fbWluV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl93ZWVrZGF5c1BhcnNlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHByb3RvLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcbiAgd2Vla2RheXNSZWdleChpc1N0cmljdDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG4gIH1cblxuICAvLyBwcm90by53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgLy8gcHJvdG8ud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xuXG5cbiAgd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIGlzUE0oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcbiAgfVxuXG4gIG1lcmlkaWVtKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgaXNMb3dlcjogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgfVxuXG4gIGZvcm1hdExvbmdEYXRlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdCA/IHRoaXMuX2xvbmdEYXRlRm9ybWF0IDogZGVmYXVsdExvbmdEYXRlRm9ybWF0O1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtcbiAgICAgIGtleVxuICAgICAgXSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWk7XG4gICAgbGV0IG1vbTtcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICBtb20gPSBuZXcgRGF0ZSgyMDAwLCBpKTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpaTtcbiAgICAgIH1cblxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGlpO1xuICAgIH1cbiAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGlpO1xuICAgIGNvbnN0IGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgbGV0IGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKGRhdGUsICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzUGFyc2UpXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fbWluV2Vla2RheXNQYXJzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICBjb25zdCBzaG9ydFBpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1peGVkUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBkYXRlO1xuXG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xuICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XG4gICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgY29uc3QgbWluUGllY2VzID0gW107XG4gICAgY29uc3Qgc2hvcnRQaWVjZXMgPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzID0gW107XG4gICAgY29uc3QgbWl4ZWRQaWVjZXMgPSBbXTtcblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gbGV0IG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgIGNvbnN0IG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpO1xuICAgICAgY29uc3Qgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpO1xuICAgICAgY29uc3QgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKGRhdGUpO1xuICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21pblBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY21wTGVuUmV2KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG59XG4iXX0=