/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { add, subtract } from '../index';
import { getDate, getFullYear, getHours, getMilliseconds, getMinutes, getMonth, getSeconds } from '../utils/date-getters';
import { setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds } from '../utils/date-setters';
import { cloneDate } from '../create/clone';
import { isArray, isBoolean, isDate, isDateValid, isFunction, isNumber, isObject, isString, isUndefined } from '../utils/type-checks';
import { formatDate } from '../format';
import { ISO_8601, RFC_2822 } from '../create/from-string-and-format';
import { getDateOffset, getUTCOffset, hasAlignedHourOffset, isDaylightSavingTime, setOffsetToParsedOffset, setUTCOffset } from '../units/offset';
import { isLeapYear, parseTwoDigitYear } from '../units/year';
import { isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore } from '../utils/date-compare';
import { daysInMonth } from '../units/month';
import { getDayOfWeek, getISODayOfWeek, getLocaleDayOfWeek, parseWeekday, setDayOfWeek, setISODayOfWeek, setLocaleDayOfWeek } from '../units/day-of-week';
import { getISOWeek, getWeek, setISOWeek, setWeek } from '../units/week';
import { getISOWeeksInYear, getISOWeekYear, getSetISOWeekYear, getSetWeekYear, getWeeksInYear, getWeekYear } from '../units/week-year';
import { endOf, startOf } from '../utils/start-end-of';
import { getQuarter, setQuarter } from '../units/quarter';
import { getDayOfYear, setDayOfYear } from '../units/day-of-year';
import { getZoneAbbr, getZoneName } from '../units/timezone';
import { diff } from '../moment/diff';
import { calendar } from '../moment/calendar';
import { defineLocale, getLocale, getSetGlobalLocale, listLocales } from '../locale/locales';
import { max, min } from '../moment/min-max';
import { isDuration } from '../duration/constructor';
import { createLocalOrUTC } from '../create/from-anything';
import { createDuration } from '../duration/create';
export var /** @type {?} */ moment = (/** @type {?} */ (_moment));
/**
 * @record
 */
export function MomentFn() { }
function MomentFn_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (input?: DateInput | Khronos, format?: string | string[], localeKey?: string | boolean, strict?: boolean, isUTC?: boolean): Khronos;
    */
    /** @type {?} */
    MomentFn.prototype.ISO_8601;
    /** @type {?} */
    MomentFn.prototype.RFC_2822;
    /** @type {?} */
    MomentFn.prototype.utc;
    /** @type {?} */
    MomentFn.prototype.parseZone;
    /** @type {?} */
    MomentFn.prototype.unix;
    /** @type {?} */
    MomentFn.prototype.locale;
    /** @type {?} */
    MomentFn.prototype.duration;
    /** @type {?} */
    MomentFn.prototype.defineLocale;
    /** @type {?} */
    MomentFn.prototype.parseTwoDigitYear;
    /** @type {?} */
    MomentFn.prototype.isDate;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.relativeTimeThreshold;
    /** @type {?} */
    MomentFn.prototype.relativeTimeThreshold;
    /** @type {?} */
    MomentFn.prototype.min;
    /** @type {?} */
    MomentFn.prototype.max;
    /** @type {?} */
    MomentFn.prototype.localeData;
    /** @type {?} */
    MomentFn.prototype.updateLocale;
    /** @type {?} */
    MomentFn.prototype.calendarFormat;
    /** @type {?} */
    MomentFn.prototype.calendarFormat;
    /** @type {?} */
    MomentFn.prototype.invalid;
    /** @type {?} */
    MomentFn.prototype.locales;
    /** @type {?} */
    MomentFn.prototype.updateOffset;
}
/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function _moment(input, format, localeKey, strict, isUTC) {
    if (input instanceof Khronos) {
        var /** @type {?} */ _date = input.clone();
        return isUTC ? _date.utc() : _date;
    }
    if (isBoolean(localeKey)) {
        return new Khronos(input, format, null, localeKey, isUTC);
    }
    return new Khronos(input, format, localeKey, strict, isUTC);
}
moment.utc = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true);
};
moment.parseZone = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true).parseZone();
};
moment.locale = getSetGlobalLocale;
moment.localeData = function (key) {
    if (key instanceof Khronos) {
        return key.localeData();
    }
    return getLocale(key);
};
// moment.utc = createUTC;
moment.unix = function (inp) { return new Khronos(inp * 1000); };
moment.ISO_8601 = ISO_8601;
moment.RFC_2822 = RFC_2822;
moment.defineLocale = defineLocale;
moment.parseTwoDigitYear = parseTwoDigitYear;
moment.isDate = isDate;
moment.invalid = function _invalid() {
    return new Khronos(new Date(NaN));
};
// duration(inp?: Duration | DateInput | Khronos, unit?: MomentUnitOfTime): Duration;
moment.duration = function (input, unit) {
    var /** @type {?} */ _unit = mapUnitOfTime(unit);
    if (isDate(input)) {
        throw new Error('todo implement');
    }
    if (input == null) {
        return createDuration();
    }
    if (isDuration(input)) {
        return createDuration(input, _unit, { _locale: input._locale });
    }
    if (isString(input) || isNumber(input) || isDuration(input) || isObject(input)) {
        return createDuration(input, _unit);
    }
    throw new Error('todo implement');
};
moment.min = function _min() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var /** @type {?} */ _firstArg = dates[0];
    var /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var /** @type {?} */ _date = min.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
};
moment.max = function _max() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var /** @type {?} */ _firstArg = dates[0];
    var /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var /** @type {?} */ _date = max.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
};
moment.locales = function () {
    return listLocales();
};
/**
 * @record
 */
export function MomentInputObject() { }
function MomentInputObject_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MomentInputObject.prototype.years;
    /** @type {?|undefined} */
    MomentInputObject.prototype.year;
    /** @type {?|undefined} */
    MomentInputObject.prototype.y;
    /** @type {?|undefined} */
    MomentInputObject.prototype.months;
    /** @type {?|undefined} */
    MomentInputObject.prototype.month;
    /** @type {?|undefined} */
    MomentInputObject.prototype.M;
    /** @type {?|undefined} */
    MomentInputObject.prototype.days;
    /** @type {?|undefined} */
    MomentInputObject.prototype.day;
    /** @type {?|undefined} */
    MomentInputObject.prototype.d;
    /** @type {?|undefined} */
    MomentInputObject.prototype.dates;
    /** @type {?|undefined} */
    MomentInputObject.prototype.date;
    /** @type {?|undefined} */
    MomentInputObject.prototype.D;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hours;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hour;
    /** @type {?|undefined} */
    MomentInputObject.prototype.h;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minutes;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minute;
    /** @type {?|undefined} */
    MomentInputObject.prototype.m;
    /** @type {?|undefined} */
    MomentInputObject.prototype.seconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.second;
    /** @type {?|undefined} */
    MomentInputObject.prototype.s;
    /** @type {?|undefined} */
    MomentInputObject.prototype.milliseconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.millisecond;
    /** @type {?|undefined} */
    MomentInputObject.prototype.ms;
    /** @type {?|undefined} */
    MomentInputObject.prototype.w;
    /** @type {?|undefined} */
    MomentInputObject.prototype.week;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weeks;
    /** @type {?|undefined} */
    MomentInputObject.prototype.Q;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarter;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarters;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weekYear;
}
var /** @type {?} */ _unitsPriority = {
    year: 1,
    month: 8,
    week: 5,
    isoWeek: 5,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    hours: 13,
    weekYear: 1,
    isoWeekYear: 1,
    quarter: 7,
    date: 9,
    dayOfYear: 4,
    minutes: 14,
    seconds: 15,
    milliseconds: 16
};
// todo: do I need 2 mappers?
var /** @type {?} */ _timeHashMap = {
    y: 'year',
    years: 'year',
    year: 'year',
    M: 'month',
    months: 'month',
    month: 'month',
    w: 'week',
    weeks: 'week',
    week: 'week',
    d: 'day',
    days: 'day',
    day: 'day',
    date: 'date',
    dates: 'date',
    D: 'date',
    h: 'hours',
    hour: 'hours',
    hours: 'hours',
    m: 'minutes',
    minute: 'minutes',
    minutes: 'minutes',
    s: 'seconds',
    second: 'seconds',
    seconds: 'seconds',
    ms: 'milliseconds',
    millisecond: 'milliseconds',
    milliseconds: 'milliseconds',
    quarter: 'quarter',
    quarters: 'quarter',
    q: 'quarter',
    Q: 'quarter',
    isoWeek: 'isoWeek',
    isoWeeks: 'isoWeek',
    W: 'isoWeek',
    weekYear: 'weekYear',
    weekYears: 'weekYear',
    gg: 'weekYears',
    isoWeekYear: 'isoWeekYear',
    isoWeekYears: 'isoWeekYear',
    GG: 'isoWeekYear',
    dayOfYear: 'dayOfYear',
    dayOfYears: 'dayOfYear',
    DDD: 'dayOfYear',
    weekday: 'weekday',
    weekdays: 'weekday',
    e: 'weekday',
    isoWeekday: 'isoWeekday',
    isoWeekdays: 'isoWeekday',
    E: 'isoWeekday'
};
/**
 * @param {?} period
 * @return {?}
 */
function mapUnitOfTime(period) {
    return /** @type {?} */ (_timeHashMap[period]);
}
/**
 * @param {?} obj
 * @return {?}
 */
function mapMomentInputObject(obj) {
    var /** @type {?} */ _res = {};
    return Object.keys(obj)
        .reduce(function (res, key) {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }, _res);
}
var Khronos = /** @class */ (function () {
    function Khronos(input, format, localeKey, strict, isUTC, offset) {
        if (strict === void 0) { strict = false; }
        if (isUTC === void 0) { isUTC = false; }
        this._date = new Date();
        this._isUTC = false;
        // locale will be needed to format invalid date message
        this._locale = getLocale(localeKey);
        // parse invalid input
        if (input === '' || input === null || (isNumber(input) && isNaN(input))) {
            this._date = new Date(NaN);
            return this;
        }
        this._isUTC = isUTC;
        if (this._isUTC) {
            this._offset = 0;
        }
        if (offset || offset === 0) {
            this._offset = offset;
        }
        this._isStrict = strict;
        this._format = format;
        if (!input && input !== 0 && !format) {
            this._date = new Date();
            return this;
        }
        if (isDate(input)) {
            this._date = cloneDate(input);
            return this;
        }
        // this._date = parseDate(input, format, localeKey, strict, isUTC);
        var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        this._date = config._d;
        this._offset = isNumber(config._offset) ? config._offset : this._offset;
        this._isUTC = config._isUTC;
        this._isStrict = config._strict;
        this._format = config._f;
        this._tzm = config._tzm;
    }
    /**
     * @return {?}
     */
    Khronos.prototype._toConfig = /**
     * @return {?}
     */
    function () {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Khronos.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (isUndefined(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        var /** @type {?} */ newLocaleData = getLocale(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    // Basic
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.add = /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = add(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (isNumber(val)) {
            this._date = add(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            var /** @type {?} */ _mapped_1 = mapMomentInputObject(val);
            Object.keys(_mapped_1)
                .forEach(function (key) { return add(_this._date, _mapped_1[key], key); });
        }
        return this;
    };
    // fixme: for some reason here 'null' for time is fine
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    Khronos.prototype.calendar = /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    function (time, formats) {
        var /** @type {?} */ _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        var /** @type {?} */ _offset = (this._offset || 0) - (_time._offset || 0);
        var /** @type {?} */ _config = Object.assign(this._toConfig(), { _offset: _offset });
        return calendar(this._date, _time._date, formats, this._locale, _config);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    };
    /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    Khronos.prototype.diff = /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    function (b, unitOfTime, precise) {
        var /** @type {?} */ unit = mapUnitOfTime(unitOfTime);
        var /** @type {?} */ _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return diff(this._date, _b.toDate(), unit, precise, this._toConfig());
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.endOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        var /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = endOf(this._date, _per, this._isUTC);
        return this;
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    Khronos.prototype.format = /**
     * @param {?=} format
     * @return {?}
     */
    function (format) {
        return formatDate(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    };
    // todo: implement
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.from = /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (time, withoutSuffix) {
        var /** @type {?} */ _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return createDuration({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    };
    /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.fromNow = /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    };
    /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    Khronos.prototype.to = /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    function (inp, suffix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    Khronos.prototype.toNow = /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    function (withoutPrefix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.subtract = /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = subtract(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (isNumber(val)) {
            this._date = subtract(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            var /** @type {?} */ _mapped_2 = mapMomentInputObject(val);
            Object.keys(_mapped_2)
                .forEach(function (key) { return subtract(_this._date, _mapped_2[key], key); });
        }
        return this;
    };
    /**
     * @param {?} period
     * @return {?}
     */
    Khronos.prototype.get = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        var /** @type {?} */ unit = mapUnitOfTime(period);
        switch (unit) {
            case 'year':
                return this.year();
            case 'month':
                return this.month();
            // | 'week'
            case 'date':
                return this.date();
            case 'day':
                return this.day();
            case 'hours':
                return this.hours();
            case 'minutes':
                return this.minutes();
            case 'seconds':
                return this.seconds();
            case 'milliseconds':
                return this.milliseconds();
            case 'week':
                return this.week();
            case 'isoWeek':
                return this.isoWeek();
            case 'weekYear':
                return this.weekYear();
            case 'isoWeekYear':
                return this.isoWeekYear();
            case 'weekday':
                return this.weekday();
            case 'isoWeekday':
                return this.isoWeekday();
            case 'quarter':
                return this.quarter();
            default:
                throw new Error("Unknown moment.get('" + period + "')");
        }
    };
    /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.set = /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    function (period, input) {
        var _this = this;
        if (isString(period)) {
            var /** @type {?} */ unit = mapUnitOfTime(period);
            switch (unit) {
                case 'year':
                    return this.year(input);
                case 'month':
                    return this.month(input);
                // | 'week'
                case 'day':
                    return this.day(input);
                case 'date':
                    return this.date(input);
                case 'hours':
                    return this.hours(input);
                case 'minutes':
                    return this.minutes(input);
                case 'seconds':
                    return this.seconds(input);
                case 'milliseconds':
                    return this.milliseconds(input);
                case 'week':
                    return this.week(input);
                case 'isoWeek':
                    return this.isoWeek(input);
                case 'weekYear':
                    return this.weekYear(input);
                case 'isoWeekYear':
                    return this.isoWeekYear(input);
                case 'weekday':
                    return this.weekday(input);
                case 'isoWeekday':
                    return this.isoWeekday(input);
                case 'quarter':
                    return this.quarter(input);
                default:
                    throw new Error("Unknown moment.get('" + period + "')");
            }
        }
        if (isObject(period)) {
            var /** @type {?} */ _mapped_3 = mapMomentInputObject(period);
            Object.keys(_mapped_3)
                .sort(function (a, b) {
                return _unitsPriority[a] - _unitsPriority[b];
            })
                .forEach(function (key) { return _this.set(key, _mapped_3[key]); });
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toISOString = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return null;
        }
        if (getFullYear(this._date, true) < 0 || getFullYear(this._date, true) > 9999) {
            return this.format('YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        }
        return this.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.inspect = /**
     * @return {?}
     */
    function () {
        throw new Error('TODO: implement');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this.toISOString();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toDate = /**
     * @return {?}
     */
    function () {
        return new Date(this.valueOf());
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toObject = /**
     * @return {?}
     */
    function () {
        return {
            // years: getFullYear(this._date, this._isUTC),
            // months: getMonth(this._date, this._isUTC),
            year: getFullYear(this._date, this._isUTC),
            month: getMonth(this._date, this._isUTC),
            date: getDate(this._date, this._isUTC),
            hours: getHours(this._date, this._isUTC),
            minutes: getMinutes(this._date, this._isUTC),
            seconds: getSeconds(this._date, this._isUTC),
            milliseconds: getMilliseconds(this._date, this._isUTC)
        };
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    };
    // Dates boolean algebra
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isAfter = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBefore(this.toDate(), date.toDate(), _unit);
    };
    /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    Khronos.prototype.isBetween = /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    function (from, to, unit, inclusivity) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBetween(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSame = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSame(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrAfter = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrBefore(this._date, date.toDate(), _unit);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isDateValid(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.unix = /**
     * @return {?}
     */
    function () {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    };
    /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utcOffset = /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (b, keepLocalTime) {
        var /** @type {?} */ _config = this._toConfig();
        if (!b && b !== 0) {
            return getUTCOffset(this._date, _config);
        }
        this._date = setUTCOffset(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utc = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.local = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this._date), 'm');
            }
        }
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.parseZone = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ _config = this._toConfig();
        this._date = setOffsetToParsedOffset(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.hasAlignedHourOffset = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return hasAlignedHourOffset(this._date, input ? input._date : void 0);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isDST = /**
     * @return {?}
     */
    function () {
        return isDaylightSavingTime(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLocal = /**
     * @return {?}
     */
    function () {
        return !this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtcOffset = /**
     * @return {?}
     */
    function () {
        return this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUTC = /**
     * @return {?}
     */
    function () {
        return this.isUtc();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtc = /**
     * @return {?}
     */
    function () {
        return this._isUTC && this._offset === 0;
    };
    // Timezone
    /**
     * @return {?}
     */
    Khronos.prototype.zoneAbbr = /**
     * @return {?}
     */
    function () {
        return getZoneAbbr(this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.zoneName = /**
     * @return {?}
     */
    function () {
        return getZoneName(this._isUTC);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    Khronos.prototype.year = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        if (!year && year !== 0) {
            return getFullYear(this._date, this._isUTC);
        }
        this._date = cloneDate(setFullYear(this._date, year));
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getWeekYear(this._date, this._locale, this.isUTC());
        }
        var /** @type {?} */ date = getSetWeekYear(this._date, val, this._locale, this.isUTC());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeekYear(this._date, this.isUTC());
        }
        var /** @type {?} */ date = getSetISOWeekYear(this._date, val, this.isUtc());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLeapYear = /**
     * @return {?}
     */
    function () {
        return isLeapYear(getFullYear(this.toDate(), this.isUTC()));
    };
    /**
     * @param {?=} month
     * @return {?}
     */
    Khronos.prototype.month = /**
     * @param {?=} month
     * @return {?}
     */
    function (month) {
        if (!month && month !== 0) {
            return getMonth(this._date, this._isUTC);
        }
        var /** @type {?} */ _month = month;
        if (isString(month)) {
            var /** @type {?} */ locale = this._locale || getLocale();
            _month = locale.monthsParse(month);
        }
        if (isNumber(_month)) {
            this._date = cloneDate(setMonth(this._date, _month, this._isUTC));
        }
        return this;
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hour = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        return this.hours(hours);
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hours = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        if (!hours && hours !== 0) {
            return getHours(this._date, this._isUTC);
        }
        this._date = cloneDate(setHours(this._date, hours, this._isUTC));
        return this;
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minute = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        return this.minutes(minutes);
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minutes = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        if (!minutes && minutes !== 0) {
            return getMinutes(this._date, this._isUTC);
        }
        this._date = cloneDate(setMinutes(this._date, minutes, this._isUTC));
        return this;
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.second = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        return this.seconds(seconds);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.seconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getSeconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setSeconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} ms
     * @return {?}
     */
    Khronos.prototype.millisecond = /**
     * @param {?=} ms
     * @return {?}
     */
    function (ms) {
        return this.milliseconds(ms);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.milliseconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getMilliseconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setMilliseconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    Khronos.prototype.date = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (!date && date !== 0) {
            return getDate(this._date, this._isUTC);
        }
        this._date = cloneDate(setDate(this._date, date, this._isUTC));
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.day = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getDayOfWeek(this._date, this._isUTC);
        }
        var /** @type {?} */ _input = input;
        if (isString(input)) {
            _input = parseWeekday(input, this._locale);
        }
        if (isNumber(_input)) {
            this._date = setDayOfWeek(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getLocaleDayOfWeek(this._date, this._locale, this._isUTC);
        }
        this._date = setLocaleDayOfWeek(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISODayOfWeek(this._date);
        }
        this._date = setISODayOfWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.dayOfYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getDayOfYear(this._date);
        }
        this._date = setDayOfYear(this._date, val);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.week = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getWeek(this._date, this._locale);
        }
        this._date = setWeek(this._date, input, this._locale);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.weeks = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return this.week(input);
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeek = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeek(this._date);
        }
        this._date = setISOWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeeks = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.isoWeek(val);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.weeksInYear = /**
     * @return {?}
     */
    function () {
        return getWeeksInYear(this._date, this._isUTC, this._locale);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isoWeeksInYear = /**
     * @return {?}
     */
    function () {
        return getISOWeeksInYear(this._date, this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.daysInMonth = /**
     * @return {?}
     */
    function () {
        return daysInMonth(getFullYear(this._date, this._isUTC), getMonth(this._date, this._isUTC));
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarter = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getQuarter(this._date, this._isUTC);
        }
        this._date = setQuarter(this._date, val, this._isUTC);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarters = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.quarter(val);
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.startOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        var /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = startOf(this._date, _per, this._isUTC);
        return this;
    };
    return Khronos;
}());
export { Khronos };
function Khronos_tsickle_Closure_declarations() {
    /** @type {?} */
    Khronos.prototype._date;
    /** @type {?} */
    Khronos.prototype._isUTC;
    /** @type {?} */
    Khronos.prototype._isStrict;
    /** @type {?} */
    Khronos.prototype._locale;
    /** @type {?} */
    Khronos.prototype._format;
    /** @type {?} */
    Khronos.prototype._offset;
    /** @type {?} */
    Khronos.prototype._tzm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ0ZXN0L2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBYSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUNMLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFFbEYsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQ3JFLFVBQVUsRUFDWCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFDeEUsV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFLE9BQU8sRUFDTCxhQUFhLEVBQ2IsWUFBWSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUNqRixZQUFZLEVBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVH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Ozs7SUFLRCx5QkFBTzs7OztJQUFQLFVBQVEsR0FBWTtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFLRCwwQkFBUTs7OztJQUFSLFVBQVMsR0FBWTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCx5QkFBTzs7OztJQUFQLFVBQVEsTUFBeUI7UUFDL0IscUJBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO2tCQXRxQ0g7SUF3cUNDLENBQUE7QUEzd0JELG1CQTJ3QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggbWF4LWZpbGUtbGluZS1jb3VudFxuaW1wb3J0IHsgYWRkLCBwYXJzZURhdGUsIHN1YnRyYWN0IH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0RGF0ZSwgZ2V0RnVsbFllYXIsIGdldEhvdXJzLCBnZXRNaWxsaXNlY29uZHMsIGdldE1pbnV0ZXMsIGdldE1vbnRoLCBnZXRTZWNvbmRzLFxuICBnZXRVbml4VGltZVxufSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHtcbiAgc2V0RGF0ZSwgc2V0RnVsbFllYXIsIHNldEhvdXJzLCBzZXRNaWxsaXNlY29uZHMsIHNldE1pbnV0ZXMsIHNldE1vbnRoLFxuICBzZXRTZWNvbmRzXG59IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLCBpc0RhdGUsIGlzRGF0ZVZhbGlkLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLFxuICBpc1VuZGVmaW5lZFxufSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vZm9ybWF0JztcbmltcG9ydCB7IElTT184NjAxLCBSRkNfMjgyMiB9IGZyb20gJy4uL2NyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHtcbiAgZ2V0RGF0ZU9mZnNldCxcbiAgZ2V0VVRDT2Zmc2V0LCBoYXNBbGlnbmVkSG91ck9mZnNldCwgaXNEYXlsaWdodFNhdmluZ1RpbWUsIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0LFxuICBzZXRVVENPZmZzZXRcbn0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGlzTGVhcFllYXIsIHBhcnNlVHdvRGlnaXRZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNCZXR3ZWVuLCBpc1NhbWUsIGlzU2FtZU9yQWZ0ZXIsIGlzU2FtZU9yQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHtcbiAgZ2V0RGF5T2ZXZWVrLCBnZXRJU09EYXlPZldlZWssIGdldExvY2FsZURheU9mV2VlaywgcGFyc2VXZWVrZGF5LCBzZXREYXlPZldlZWssIHNldElTT0RheU9mV2VlayxcbiAgc2V0TG9jYWxlRGF5T2ZXZWVrXG59IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldElTT1dlZWssIGdldFdlZWssIHNldElTT1dlZWssIHNldFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7XG4gIGdldElTT1dlZWtzSW5ZZWFyLCBnZXRJU09XZWVrWWVhciwgZ2V0U2V0SVNPV2Vla1llYXIsIGdldFNldFdlZWtZZWFyLCBnZXRXZWVrc0luWWVhcixcbiAgZ2V0V2Vla1llYXJcbn0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcbmltcG9ydCB7IGVuZE9mLCBzdGFydE9mIH0gZnJvbSAnLi4vdXRpbHMvc3RhcnQtZW5kLW9mJztcbmltcG9ydCB7IGdldFF1YXJ0ZXIsIHNldFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcbmltcG9ydCB7IGdldERheU9mWWVhciwgc2V0RGF5T2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgZ2V0Wm9uZUFiYnIsIGdldFpvbmVOYW1lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4uL21vbWVudC9kaWZmJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY2FsZW5kYXIsIENhbGVuZGFyU3BlYyB9IGZyb20gJy4uL21vbWVudC9jYWxlbmRhcic7XG5pbXBvcnQgeyBkZWZpbmVMb2NhbGUsIGdldExvY2FsZSwgZ2V0U2V0R2xvYmFsTG9jYWxlLCBsaXN0TG9jYWxlcyB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSAnLi4vbW9tZW50L21pbi1tYXgnO1xuaW1wb3J0IHsgRHVyYXRpb24sIGlzRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi4vY3JlYXRlL2Zyb20tYW55dGhpbmcnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuXG5leHBvcnQgdHlwZSBEYXRlSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEYXRlIHwgc3RyaW5nW10gfCBEYXRlQXJyYXkgfCBNb21lbnRJbnB1dE9iamVjdDtcblxuZXhwb3J0IGNvbnN0IG1vbWVudDogTW9tZW50Rm4gPSAoX21vbWVudCBhcyBNb21lbnRGbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9tZW50Rm4ge1xuICAoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogS2hyb25vcztcblxuICBJU09fODYwMTogc3RyaW5nO1xuICBSRkNfMjgyMjogc3RyaW5nO1xuXG4gIHV0YyhpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcztcblxuICBwYXJzZVpvbmUoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3M7XG5cbiAgdW5peChudW06IG51bWJlcik6IEtocm9ub3M7XG5cbiAgbG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdLCB2YWx1ZXM/OiBMb2NhbGVEYXRhKTogc3RyaW5nO1xuXG4gIGR1cmF0aW9uKGlucD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbjtcblxuICBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlO1xuXG4gIHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0OiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgaXNEYXRlKGlucHV0PzogYW55KTogaW5wdXQgaXMgRGF0ZTtcblxuICBtb250aHMoKTogc3RyaW5nW107XG5cbiAgbW9udGhzKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgbW9udGhzKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgbW9udGhzKGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xuXG4gIG1vbnRoc1Nob3J0KGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgbW9udGhzU2hvcnQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICBtb250aHNTaG9ydChmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5cyhpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXMoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzU2hvcnQoKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNTaG9ydChpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzU2hvcnQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c1Nob3J0KGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzTWluKCk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzTWluKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNNaW4oZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c01pbihmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4pOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgcmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nKTogbnVtYmVyIHwgYm9vbGVhbjtcblxuICByZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBib29sZWFuO1xuXG4gIG1pbiguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcztcblxuICBtYXgoLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3M7XG5cbiAgbG9jYWxlRGF0YShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBMb2NhbGU7XG5cbiAgdXBkYXRlTG9jYWxlKGxhbmd1YWdlOiBzdHJpbmcsIGxvY2FsZVNwZWM/OiBMb2NhbGVEYXRhKTogTG9jYWxlO1xuXG4gIGNhbGVuZGFyRm9ybWF0KG06IERhdGUsIG5vdzogRGF0ZSk6IHN0cmluZztcblxuICAvLyB0b2RvOiByZW1vdmUgdGhpc1xuICBjYWxlbmRhckZvcm1hdChtOiBLaHJvbm9zLCBub3c6IEtocm9ub3MpOiBzdHJpbmc7XG5cbiAgLy8gdG9kbzogaW1wbGVtZW50XG4gIGludmFsaWQoKTogS2hyb25vcztcblxuICBsb2NhbGVzKCk6IHN0cmluZ1tdO1xuXG4gIC8vIHRvZG86IGltcGxlbWVudFxuICB1cGRhdGVPZmZzZXQobTogS2hyb25vcywga2VlcFRpbWU/OiBib29sZWFuKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gX21vbWVudChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBLaHJvbm9zIHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgS2hyb25vcykge1xuICAgIGNvbnN0IF9kYXRlID0gaW5wdXQuY2xvbmUoKTtcblxuICAgIHJldHVybiBpc1VUQyA/IF9kYXRlLnV0YygpIDogX2RhdGU7XG4gIH1cblxuICBpZiAoaXNCb29sZWFuKGxvY2FsZUtleSkpIHtcbiAgICByZXR1cm4gbmV3IEtocm9ub3MoaW5wdXQsIGZvcm1hdCwgbnVsbCwgbG9jYWxlS2V5LCBpc1VUQyk7XG4gIH1cblxuICByZXR1cm4gbmV3IEtocm9ub3MoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcbn1cblxubW9tZW50LnV0YyA9IChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3MgPT4ge1xuICByZXR1cm4gX21vbWVudChpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgdHJ1ZSk7XG59O1xuXG5tb21lbnQucGFyc2Vab25lID0gKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcyA9PiB7XG4gIHJldHVybiBfbW9tZW50KGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCB0cnVlKS5wYXJzZVpvbmUoKTtcbn07XG5cbm1vbWVudC5sb2NhbGUgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XG5tb21lbnQubG9jYWxlRGF0YSA9IChrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBMb2NhbGUgPT4ge1xuICBpZiAoa2V5IGluc3RhbmNlb2YgS2hyb25vcykge1xuICAgIHJldHVybiBrZXkubG9jYWxlRGF0YSgpO1xuICB9XG5cbiAgcmV0dXJuIGdldExvY2FsZShrZXkpO1xufTtcblxuLy8gbW9tZW50LnV0YyA9IGNyZWF0ZVVUQztcbm1vbWVudC51bml4ID0gKGlucDogbnVtYmVyKSA9PiBuZXcgS2hyb25vcyhpbnAgKiAxMDAwKTtcbm1vbWVudC5JU09fODYwMSA9IElTT184NjAxO1xubW9tZW50LlJGQ18yODIyID0gUkZDXzI4MjI7XG5tb21lbnQuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xubW9tZW50LnBhcnNlVHdvRGlnaXRZZWFyID0gcGFyc2VUd29EaWdpdFllYXI7XG5tb21lbnQuaXNEYXRlID0gaXNEYXRlO1xubW9tZW50LmludmFsaWQgPSBmdW5jdGlvbiBfaW52YWxpZCgpOiBLaHJvbm9zIHtcbiAgcmV0dXJuIG5ldyBLaHJvbm9zKG5ldyBEYXRlKE5hTikpO1xufTtcblxuLy8gZHVyYXRpb24oaW5wPzogRHVyYXRpb24gfCBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IER1cmF0aW9uO1xubW9tZW50LmR1cmF0aW9uID0gKGlucHV0PzogRHVyYXRpb24gfCBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IER1cmF0aW9uID0+IHtcbiAgY29uc3QgX3VuaXQgPSBtYXBVbml0T2ZUaW1lKHVuaXQpO1xuICBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndG9kbyBpbXBsZW1lbnQnKTtcbiAgfVxuXG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKCk7XG4gIH1cblxuICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oaW5wdXQsIF91bml0LCB7IF9sb2NhbGU6IGlucHV0Ll9sb2NhbGUgfSk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpIHx8IGlzTnVtYmVyKGlucHV0KSB8fCBpc0R1cmF0aW9uKGlucHV0KSB8fCBpc09iamVjdDxEYXRlT2JqZWN0PihpbnB1dCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oaW5wdXQsIF91bml0KTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcigndG9kbyBpbXBsZW1lbnQnKTtcbn07XG5cbm1vbWVudC5taW4gPSBmdW5jdGlvbiBfbWluKC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zIHtcbiAgY29uc3QgX2ZpcnN0QXJnID0gZGF0ZXNbMF07XG4gIGNvbnN0IF9kYXRlcyA9IChpc0FycmF5KF9maXJzdEFyZykgPyBfZmlyc3RBcmcgOiBkYXRlcylcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgLm1hcCgoZGF0ZTogS2hyb25vcykgPT4gX21vbWVudChkYXRlKSlcbiAgICAubWFwKGRhdGUgPT4gZGF0ZS50b0RhdGUoKSk7XG5cbiAgY29uc3QgX2RhdGUgPSBtaW4oLi4uX2RhdGVzKTtcblxuICByZXR1cm4gbmV3IEtocm9ub3MoX2RhdGUpO1xufTtcblxubW9tZW50Lm1heCA9IGZ1bmN0aW9uIF9tYXgoLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3Mge1xuICBjb25zdCBfZmlyc3RBcmcgPSBkYXRlc1swXTtcbiAgY29uc3QgX2RhdGVzID0gKGlzQXJyYXkoX2ZpcnN0QXJnKSA/IF9maXJzdEFyZyA6IGRhdGVzKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAubWFwKChkYXRlOiBLaHJvbm9zKSA9PiBfbW9tZW50KGRhdGUpKVxuICAgIC5tYXAoZGF0ZSA9PiBkYXRlLnRvRGF0ZSgpKTtcblxuICBjb25zdCBfZGF0ZSA9IG1heCguLi5fZGF0ZXMpO1xuXG4gIHJldHVybiBuZXcgS2hyb25vcyhfZGF0ZSk7XG59O1xuXG5tb21lbnQubG9jYWxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gIHJldHVybiBsaXN0TG9jYWxlcygpO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNb21lbnRJbnB1dE9iamVjdCB7XG4gIHllYXJzPzogbnVtYmVyO1xuICB5ZWFyPzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuXG4gIG1vbnRocz86IG51bWJlcjtcbiAgbW9udGg/OiBudW1iZXI7XG4gIE0/OiBudW1iZXI7XG5cbiAgZGF5cz86IG51bWJlcjtcbiAgZGF5PzogbnVtYmVyO1xuICBkPzogbnVtYmVyO1xuXG4gIGRhdGVzPzogbnVtYmVyO1xuICBkYXRlPzogbnVtYmVyO1xuICBEPzogbnVtYmVyO1xuXG4gIGhvdXJzPzogbnVtYmVyO1xuICBob3VyPzogbnVtYmVyO1xuICBoPzogbnVtYmVyO1xuXG4gIG1pbnV0ZXM/OiBudW1iZXI7XG4gIG1pbnV0ZT86IG51bWJlcjtcbiAgbT86IG51bWJlcjtcblxuICBzZWNvbmRzPzogbnVtYmVyO1xuICBzZWNvbmQ/OiBudW1iZXI7XG4gIHM/OiBudW1iZXI7XG5cbiAgbWlsbGlzZWNvbmRzPzogbnVtYmVyO1xuICBtaWxsaXNlY29uZD86IG51bWJlcjtcbiAgbXM/OiBudW1iZXI7XG5cbiAgdz86IG51bWJlcjtcbiAgd2Vlaz86IG51bWJlcjtcbiAgd2Vla3M/OiBudW1iZXI7XG5cbiAgUT86IG51bWJlcjtcbiAgcXVhcnRlcj86IG51bWJlcjtcbiAgcXVhcnRlcnM/OiBudW1iZXI7XG5cbiAgd2Vla1llYXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIE1vbWVudFVuaXRPZlRpbWUgPSAoXG4gICd5ZWFyJyB8ICd5ZWFycycgfCAneScgfFxuICAnbW9udGgnIHwgJ21vbnRocycgfCAnTScgfFxuICAnd2VlaycgfCAnd2Vla3MnIHwgJ3cnIHxcbiAgJ2RheScgfCAnZGF5cycgfCAnZCcgfFxuICAnaG91cicgfCAnaG91cnMnIHwgJ2gnIHxcbiAgJ21pbnV0ZScgfCAnbWludXRlcycgfCAnbScgfFxuICAnc2Vjb25kJyB8ICdzZWNvbmRzJyB8ICdzJyB8XG4gICdtaWxsaXNlY29uZCcgfCAnbWlsbGlzZWNvbmRzJyB8ICdtcycgfFxuICAncScgfCAncXVhcnRlcicgfCAncXVhcnRlcnMnIHwgJ1EnIHxcbiAgJ2lzb1dlZWsnIHwgJ2lzb1dlZWtzJyB8ICdXJyB8XG4gICdkYXRlJyB8ICdkYXRlcycgfCAnRCdcbiAgKTtcblxuZXhwb3J0IHR5cGUgTW9tZW50QWxsID0gTW9tZW50VW5pdE9mVGltZSB8XG4gICd3ZWVrWWVhcicgfCAnd2Vla1llYXJzJyB8ICdnZycgfFxuICAnaXNvV2Vla1llYXInIHwgJ2lzb1dlZWtZZWFycycgfCAnR0cnIHxcbiAgJ2RheU9mWWVhcicgfCAnZGF5T2ZZZWFycycgfCAnREREJyB8XG4gICd3ZWVrZGF5JyB8ICd3ZWVrZGF5cycgfCAnZScgfFxuICAnaXNvV2Vla2RheScgfCAnaXNvV2Vla2RheXMnIHwgJ0UnO1xuXG5jb25zdCBfdW5pdHNQcmlvcml0eToge1trZXkgaW4gVW5pdE9mVGltZV06IG51bWJlcn0gPSB7XG4gIHllYXI6IDEsXG4gIG1vbnRoOiA4LFxuICB3ZWVrOiA1LFxuICBpc29XZWVrOiA1LFxuICBkYXk6IDExLFxuICB3ZWVrZGF5OiAxMSxcbiAgaXNvV2Vla2RheTogMTEsXG4gIGhvdXJzOiAxMyxcbiAgd2Vla1llYXI6IDEsXG4gIGlzb1dlZWtZZWFyOiAxLFxuICBxdWFydGVyOiA3LFxuICBkYXRlOiA5LFxuICBkYXlPZlllYXI6IDQsXG4gIG1pbnV0ZXM6IDE0LFxuICBzZWNvbmRzOiAxNSxcbiAgbWlsbGlzZWNvbmRzOiAxNlxufTtcblxuLy8gdG9kbzogZG8gSSBuZWVkIDIgbWFwcGVycz9cbmNvbnN0IF90aW1lSGFzaE1hcDogeyBba2V5IGluIE1vbWVudEFsbF06IFVuaXRPZlRpbWUgfCBzdHJpbmcgfSA9IHtcbiAgeTogJ3llYXInLFxuICB5ZWFyczogJ3llYXInLFxuICB5ZWFyOiAneWVhcicsXG4gIE06ICdtb250aCcsXG4gIG1vbnRoczogJ21vbnRoJyxcbiAgbW9udGg6ICdtb250aCcsXG4gIHc6ICd3ZWVrJyxcbiAgd2Vla3M6ICd3ZWVrJyxcbiAgd2VlazogJ3dlZWsnLFxuXG4gIGQ6ICdkYXknLFxuICBkYXlzOiAnZGF5JyxcbiAgZGF5OiAnZGF5JyxcblxuICBkYXRlOiAnZGF0ZScsXG4gIGRhdGVzOiAnZGF0ZScsXG4gIEQ6ICdkYXRlJyxcblxuICBoOiAnaG91cnMnLFxuICBob3VyOiAnaG91cnMnLFxuICBob3VyczogJ2hvdXJzJyxcbiAgbTogJ21pbnV0ZXMnLFxuICBtaW51dGU6ICdtaW51dGVzJyxcbiAgbWludXRlczogJ21pbnV0ZXMnLFxuICBzOiAnc2Vjb25kcycsXG4gIHNlY29uZDogJ3NlY29uZHMnLFxuICBzZWNvbmRzOiAnc2Vjb25kcycsXG4gIG1zOiAnbWlsbGlzZWNvbmRzJyxcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnLFxuICBtaWxsaXNlY29uZHM6ICdtaWxsaXNlY29uZHMnLFxuICBxdWFydGVyOiAncXVhcnRlcicsXG4gIHF1YXJ0ZXJzOiAncXVhcnRlcicsXG4gIHE6ICdxdWFydGVyJyxcbiAgUTogJ3F1YXJ0ZXInLFxuICBpc29XZWVrOiAnaXNvV2VlaycsXG4gIGlzb1dlZWtzOiAnaXNvV2VlaycsXG4gIFc6ICdpc29XZWVrJyxcbiAgd2Vla1llYXI6ICd3ZWVrWWVhcicsXG4gIHdlZWtZZWFyczogJ3dlZWtZZWFyJyxcbiAgZ2c6ICd3ZWVrWWVhcnMnLFxuICBpc29XZWVrWWVhcjogJ2lzb1dlZWtZZWFyJyxcbiAgaXNvV2Vla1llYXJzOiAnaXNvV2Vla1llYXInLFxuICBHRzogJ2lzb1dlZWtZZWFyJyxcbiAgZGF5T2ZZZWFyOiAnZGF5T2ZZZWFyJyxcbiAgZGF5T2ZZZWFyczogJ2RheU9mWWVhcicsXG4gIERERDogJ2RheU9mWWVhcicsXG4gIHdlZWtkYXk6ICd3ZWVrZGF5JyxcbiAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcbiAgZTogJ3dlZWtkYXknLFxuICBpc29XZWVrZGF5OiAnaXNvV2Vla2RheScsXG4gIGlzb1dlZWtkYXlzOiAnaXNvV2Vla2RheScsXG4gIEU6ICdpc29XZWVrZGF5J1xufTtcblxuZnVuY3Rpb24gbWFwVW5pdE9mVGltZShwZXJpb2Q6IE1vbWVudEFsbCk6IFVuaXRPZlRpbWUge1xuICByZXR1cm4gX3RpbWVIYXNoTWFwW3BlcmlvZF0gYXMgVW5pdE9mVGltZTtcbn1cblxuZnVuY3Rpb24gbWFwTW9tZW50SW5wdXRPYmplY3Qob2JqOiBNb21lbnRJbnB1dE9iamVjdCk6IHtba2V5IGluIFVuaXRPZlRpbWVdPzogbnVtYmVyfSB7XG4gIGNvbnN0IF9yZXM6IHtba2V5IGluIFVuaXRPZlRpbWVdPzogbnVtYmVyfSA9IHt9O1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopXG4gICAgLnJlZHVjZSgocmVzLCBrZXk6IGtleW9mIE1vbWVudElucHV0T2JqZWN0KSA9PiB7XG4gICAgICByZXNbbWFwVW5pdE9mVGltZShrZXkpXSA9IG9ialtrZXldO1xuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIF9yZXMpO1xufVxuXG5leHBvcnQgY2xhc3MgS2hyb25vcyB7XG4gIF9kYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgX2lzVVRDID0gZmFsc2U7XG4gIF9pc1N0cmljdDogYm9vbGVhbjtcbiAgX2xvY2FsZTogTG9jYWxlO1xuICBfZm9ybWF0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgX29mZnNldDogbnVtYmVyO1xuICBfdHptOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaW5wdXQ/OiBEYXRlSW5wdXQsXG4gICAgICAgICAgICAgIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICAgICAgICBsb2NhbGVLZXk/OiBzdHJpbmcsXG4gICAgICAgICAgICAgIHN0cmljdCA9IGZhbHNlLFxuICAgICAgICAgICAgICBpc1VUQyA9IGZhbHNlLFxuICAgICAgICAgICAgICBvZmZzZXQ/OiBudW1iZXIpIHtcbiAgICAvLyBsb2NhbGUgd2lsbCBiZSBuZWVkZWQgdG8gZm9ybWF0IGludmFsaWQgZGF0ZSBtZXNzYWdlXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZUtleSk7XG4gICAgLy8gcGFyc2UgaW52YWxpZCBpbnB1dFxuICAgIGlmIChpbnB1dCA9PT0gJycgfHwgaW5wdXQgPT09IG51bGwgfHwgKGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoTmFOKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5faXNVVEMgPSBpc1VUQztcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgIHRoaXMuX29mZnNldCA9IDA7XG4gICAgfVxuICAgIGlmIChvZmZzZXQgfHwgb2Zmc2V0ID09PSAwKSB7XG4gICAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgfVxuICAgIHRoaXMuX2lzU3RyaWN0ID0gc3RyaWN0O1xuICAgIHRoaXMuX2Zvcm1hdCA9IGZvcm1hdDtcblxuICAgIGlmICghaW5wdXQgJiYgaW5wdXQgIT09IDAgJiYgIWZvcm1hdCkge1xuICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKGlucHV0KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fZGF0ZSA9IHBhcnNlRGF0ZShpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xuICAgIGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcbiAgICB0aGlzLl9kYXRlID0gY29uZmlnLl9kO1xuICAgIHRoaXMuX29mZnNldCA9IGlzTnVtYmVyKGNvbmZpZy5fb2Zmc2V0KSA/IGNvbmZpZy5fb2Zmc2V0IDogdGhpcy5fb2Zmc2V0O1xuICAgIHRoaXMuX2lzVVRDID0gY29uZmlnLl9pc1VUQztcbiAgICB0aGlzLl9pc1N0cmljdCA9IGNvbmZpZy5fc3RyaWN0O1xuICAgIHRoaXMuX2Zvcm1hdCA9IGNvbmZpZy5fZjtcbiAgICB0aGlzLl90em0gPSBjb25maWcuX3R6bTtcbiAgfVxuXG4gIF90b0NvbmZpZygpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHsgX2lzVVRDOiB0aGlzLl9pc1VUQywgX2xvY2FsZTogdGhpcy5fbG9jYWxlLCBfb2Zmc2V0OiB0aGlzLl9vZmZzZXQsIF90em06IHRoaXMuX3R6bSB9O1xuICB9XG5cbiAgLy8gTG9jYWxlXG4gIGxvY2FsZSgpOiBzdHJpbmc7XG4gIGxvY2FsZShsb2NhbGVLZXk6IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IEtocm9ub3M7XG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBLaHJvbm9zIHwgc3RyaW5nIHtcbiAgICBpZiAoaXNVbmRlZmluZWQobG9jYWxlS2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBpZiAobG9jYWxlS2V5IGluc3RhbmNlb2YgS2hyb25vcykge1xuICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlS2V5Ll9sb2NhbGU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUobG9jYWxlS2V5KTtcbiAgICBpZiAobmV3TG9jYWxlRGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9jYWxlRGF0YSgpOiBMb2NhbGUge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICAvLyBCYXNpY1xuXG4gIGFkZCh2YWw6IG51bWJlciB8IHN0cmluZyB8IE1vbWVudElucHV0T2JqZWN0LCBwZXJpb2Q/OiBVbml0T2ZUaW1lIHwgTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xuICAgIGlmIChpc1N0cmluZyh2YWwpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gYWRkKHRoaXMuX2RhdGUsIHBhcnNlSW50KHZhbCwgMTApLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcih2YWwpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gYWRkKHRoaXMuX2RhdGUsIHZhbCwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHZhbCkpIHtcbiAgICAgIGNvbnN0IF9tYXBwZWQgPSBtYXBNb21lbnRJbnB1dE9iamVjdCh2YWwpO1xuICAgICAgT2JqZWN0LmtleXMoX21hcHBlZClcbiAgICAgICAgLmZvckVhY2goKGtleTogVW5pdE9mVGltZSkgPT4gYWRkKHRoaXMuX2RhdGUsIF9tYXBwZWRba2V5XSwga2V5KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmaXhtZTogZm9yIHNvbWUgcmVhc29uIGhlcmUgJ251bGwnIGZvciB0aW1lIGlzIGZpbmVcbiAgY2FsZW5kYXIodGltZT86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdHM/OiBDYWxlbmRhclNwZWMpOiBzdHJpbmcge1xuICAgIGNvbnN0IF90aW1lID0gdGltZSBpbnN0YW5jZW9mIEtocm9ub3MgPyB0aW1lIDogbmV3IEtocm9ub3ModGltZSB8fCBuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBfb2Zmc2V0ID0gKHRoaXMuX29mZnNldCB8fCAwKSAtIChfdGltZS5fb2Zmc2V0IHx8IDApO1xuICAgIGNvbnN0IF9jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuX3RvQ29uZmlnKCksIHsgX29mZnNldCB9KTtcblxuICAgIHJldHVybiBjYWxlbmRhcih0aGlzLl9kYXRlLCBfdGltZS5fZGF0ZSxcbiAgICAgIGZvcm1hdHMsIHRoaXMuX2xvY2FsZSwgX2NvbmZpZyk7XG4gIH1cblxuICBjbG9uZSgpOiBLaHJvbm9zIHtcbiAgICBjb25zdCBsb2NhbGVLZXkgPSB0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLl9hYmJyIHx8ICdlbic7XG5cbiAgICAvLyByZXR1cm4gbmV3IEtocm9ub3MoY2xvbmVEYXRlKHRoaXMuX2RhdGUpLCB0aGlzLl9mb3JtYXQsIGxvY2FsZUtleSwgdGhpcy5faXNTdHJpY3QsIHRoaXMuX2lzVVRDKTtcbiAgICAvLyBmYWlscyBpZiBpc1VUQyBhbmQgb2Zmc2V0XG4gICAgLy8gcmV0dXJuIG5ldyBLaHJvbm9zKG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKSxcbiAgICByZXR1cm4gbmV3IEtocm9ub3ModGhpcy5fZGF0ZSxcbiAgICAgIHRoaXMuX2Zvcm1hdCxcbiAgICAgIGxvY2FsZUtleSxcbiAgICAgIHRoaXMuX2lzU3RyaWN0LFxuICAgICAgdGhpcy5faXNVVEMsXG4gICAgICB0aGlzLl9vZmZzZXQpO1xuICB9XG5cbiAgZGlmZihiOiBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0T2ZUaW1lPzogTW9tZW50VW5pdE9mVGltZSwgcHJlY2lzZT86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IHVuaXQgPSBtYXBVbml0T2ZUaW1lKHVuaXRPZlRpbWUpO1xuICAgIGNvbnN0IF9iID0gYiBpbnN0YW5jZW9mIEtocm9ub3MgPyBiIDogbmV3IEtocm9ub3MoYik7XG4gICAgLy8gY29uc3Qgem9uZURlbHRhID0gKF9iLnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSk7XG4gICAgLy8gY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLl90b0NvbmZpZygpLCB7XG4gICAgLy8gICBfb2Zmc2V0OiAwLFxuICAgIC8vICAgX2lzVVRDOiB0cnVlLFxuICAgIC8vICAgX3pvbmVEZWx0YTogem9uZURlbHRhXG4gICAgLy8gfSk7XG4gICAgLy8gcmV0dXJuIGRpZmYobmV3IERhdGUodGhpcy52YWx1ZU9mKCkpLCBuZXcgRGF0ZShfYi52YWx1ZU9mKCkpLCB1bml0LCBwcmVjaXNlLCBjb25maWcpO1xuXG4gICAgcmV0dXJuIGRpZmYodGhpcy5fZGF0ZSwgX2IudG9EYXRlKCksIHVuaXQsIHByZWNpc2UsIHRoaXMuX3RvQ29uZmlnKCkpO1xuICB9XG5cbiAgZW5kT2YocGVyaW9kPzogTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xuICAgIGNvbnN0IF9wZXIgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XG4gICAgdGhpcy5fZGF0ZSA9IGVuZE9mKHRoaXMuX2RhdGUsIF9wZXIsIHRoaXMuX2lzVVRDKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9ybWF0KGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUodGhpcy5fZGF0ZSwgZm9ybWF0LCB0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLl9hYmJyLCB0aGlzLl9pc1VUQywgdGhpcy5fb2Zmc2V0KTtcbiAgfVxuXG4gIC8vIHRvZG86IGltcGxlbWVudFxuICBmcm9tKHRpbWU/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCB3aXRob3V0U3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3QgX3RpbWUgPSBfbW9tZW50KHRpbWUpO1xuICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBfdGltZS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IHRvOiB0aGlzLnRvRGF0ZSgpLCBmcm9tOiBfdGltZS50b0RhdGUoKSB9KVxuICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXG4gICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlO1xuICB9XG5cbiAgZnJvbU5vdyh3aXRob3V0U3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbShuZXcgRGF0ZSgpLCB3aXRob3V0U3VmZml4KTtcbiAgfVxuXG4gIHRvKGlucDogRGF0ZUlucHV0IHwgS2hyb25vcywgc3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBJbXBsZW1lbnRgKTtcbiAgfVxuXG4gIHRvTm93KHdpdGhvdXRQcmVmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IEltcGxlbWVudGApO1xuICB9XG5cbiAgc3VidHJhY3QodmFsOiBudW1iZXIgfCBzdHJpbmcgfCBNb21lbnRJbnB1dE9iamVjdCwgcGVyaW9kPzogVW5pdE9mVGltZSB8IE1vbWVudFVuaXRPZlRpbWUpOiBLaHJvbm9zIHtcbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IHN1YnRyYWN0KHRoaXMuX2RhdGUsIHBhcnNlSW50KHZhbCwgMTApLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIodmFsKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IHN1YnRyYWN0KHRoaXMuX2RhdGUsIHZhbCwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHZhbCkpIHtcbiAgICAgIGNvbnN0IF9tYXBwZWQgPSBtYXBNb21lbnRJbnB1dE9iamVjdCh2YWwpO1xuICAgICAgT2JqZWN0LmtleXMoX21hcHBlZClcbiAgICAgICAgLmZvckVhY2goKGtleTogVW5pdE9mVGltZSkgPT4gc3VidHJhY3QodGhpcy5fZGF0ZSwgX21hcHBlZFtrZXldLCBrZXkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChwZXJpb2Q6IE1vbWVudEFsbCk6IG51bWJlciB7XG4gICAgaWYgKHBlcmlvZCA9PT0gJ2RheU9mWWVhcicpIHtcbiAgICAgIHJldHVybiB0aGlzLmRheU9mWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaXQgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcigpO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICByZXR1cm4gdGhpcy5tb250aCgpO1xuICAgICAgLy8gfCAnd2VlaydcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlKCk7XG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKTtcbiAgICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKTtcbiAgICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgICByZXR1cm4gdGhpcy5taW51dGVzKCk7XG4gICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kcygpO1xuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmRzKCk7XG4gICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMud2VlaygpO1xuICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWsoKTtcbiAgICAgIGNhc2UgJ3dlZWtZZWFyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKTtcbiAgICAgIGNhc2UgJ2lzb1dlZWtZZWFyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKTtcbiAgICAgIGNhc2UgJ3dlZWtkYXknOlxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrZGF5KCk7XG4gICAgICBjYXNlICdpc29XZWVrZGF5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheSgpO1xuICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgIHJldHVybiB0aGlzLnF1YXJ0ZXIoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb21lbnQuZ2V0KCcke3BlcmlvZH0nKWApO1xuICAgIH1cbiAgfVxuXG4gIHNldChwZXJpb2Q6IE1vbWVudEFsbCB8IE1vbWVudElucHV0T2JqZWN0LCBpbnB1dD86IG51bWJlcik6IEtocm9ub3Mge1xuXG4gICAgaWYgKGlzU3RyaW5nKHBlcmlvZCkpIHtcbiAgICAgIGNvbnN0IHVuaXQgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XG4gICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMueWVhcihpbnB1dCk7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb250aChpbnB1dCk7XG4gICAgICAgIC8vIHwgJ3dlZWsnXG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KGlucHV0KTtcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZShpbnB1dCk7XG4gICAgICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3VycyhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZXMoaW5wdXQpO1xuICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKGlucHV0KTtcbiAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZHMoaW5wdXQpO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrKGlucHV0KTtcbiAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2VlayhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ3dlZWtZZWFyJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrWWVhcihpbnB1dCk7XG4gICAgICAgIGNhc2UgJ2lzb1dlZWtZZWFyJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcihpbnB1dCk7XG4gICAgICAgIGNhc2UgJ3dlZWtkYXknOlxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWtkYXkoaW5wdXQpO1xuICAgICAgICBjYXNlICdpc29XZWVrZGF5JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrZGF5KGlucHV0KTtcbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucXVhcnRlcihpbnB1dCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vbWVudC5nZXQoJyR7cGVyaW9kfScpYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0PE1vbWVudElucHV0T2JqZWN0PihwZXJpb2QpKSB7XG4gICAgICBjb25zdCBfbWFwcGVkID0gbWFwTW9tZW50SW5wdXRPYmplY3QocGVyaW9kKTtcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uKGE6IFVuaXRPZlRpbWUsIGI6IFVuaXRPZlRpbWUpOiBudW1iZXIge1xuICAgICAgICAgIHJldHVybiBfdW5pdHNQcmlvcml0eVthXSAtIF91bml0c1ByaW9yaXR5W2JdO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiB0aGlzLnNldChrZXksIF9tYXBwZWRba2V5XSkpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbiAgfVxuXG4gIHRvSVNPU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRydWUpIDwgMCB8fCBnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0cnVlKSA+IDk5OTkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCgnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XG4gICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgfVxuXG4gIGluc3BlY3QoKTogc3RyaW5nIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IGltcGxlbWVudCcpO1xuICB9XG5cbiAgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgfVxuXG4gIHRvRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xuICB9XG5cbiAgdG9PYmplY3QoKToge1trZXkgaW4gTW9tZW50VW5pdE9mVGltZV0/OiBudW1iZXJ9IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8geWVhcnM6IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIC8vIG1vbnRoczogZ2V0TW9udGgodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuXG4gICAgICB5ZWFyOiBnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBtb250aDogZ2V0TW9udGgodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgZGF0ZTogZ2V0RGF0ZSh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBob3VyczogZ2V0SG91cnModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgbWludXRlczogZ2V0TWludXRlcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBzZWNvbmRzOiBnZXRTZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIG1pbGxpc2Vjb25kczogZ2V0TWlsbGlzZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKVxuICAgIH07XG4gIH1cblxuICB0b0FycmF5KCk6IERhdGVBcnJheSB7XG4gICAgcmV0dXJuIFt0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSwgdGhpcy5ob3VyKCksIHRoaXMubWludXRlKCksIHRoaXMuc2Vjb25kKCksIHRoaXMubWlsbGlzZWNvbmQoKV07XG4gIH1cblxuXG4gIC8vIERhdGVzIGJvb2xlYW4gYWxnZWJyYVxuXG4gIGlzQWZ0ZXIoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzQWZ0ZXIodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xuICB9XG5cbiAgaXNCZWZvcmUoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzQmVmb3JlKHRoaXMudG9EYXRlKCksIGRhdGUudG9EYXRlKCksIF91bml0KTtcbiAgfVxuXG4gIGlzQmV0d2Vlbihmcm9tOiBLaHJvbm9zLCB0bzogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUsIGluY2x1c2l2aXR5Pzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc0JldHdlZW4odGhpcy50b0RhdGUoKSwgZnJvbS50b0RhdGUoKSwgdG8udG9EYXRlKCksIF91bml0LCBpbmNsdXNpdml0eSk7XG4gIH1cblxuICBpc1NhbWUoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzU2FtZSh0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XG4gIH1cblxuICBpc1NhbWVPckFmdGVyKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc1NhbWVPckFmdGVyKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcbiAgfVxuXG4gIGlzU2FtZU9yQmVmb3JlKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc1NhbWVPckJlZm9yZSh0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0RhdGVWYWxpZCh0aGlzLl9kYXRlKTtcbiAgfVxuXG4gIHZhbHVlT2YoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS52YWx1ZU9mKCkgLSAoKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwKTtcbiAgfVxuXG4gIHVuaXgoKTogbnVtYmVyIHtcbiAgICAvLyByZXR1cm4gZ2V0VW5peFRpbWUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgfVxuXG5cbiAgLy8gT2Zmc2V0XG5cbiAgdXRjT2Zmc2V0KCk6IG51bWJlcjtcbiAgdXRjT2Zmc2V0KGI6IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBLaHJvbm9zO1xuICB1dGNPZmZzZXQoYj86IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBudW1iZXIgfCBLaHJvbm9zIHtcbiAgICBjb25zdCBfY29uZmlnID0gdGhpcy5fdG9Db25maWcoKTtcblxuICAgIGlmICghYiAmJiBiICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0VVRDT2Zmc2V0KHRoaXMuX2RhdGUsIF9jb25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRVVENPZmZzZXQodGhpcy5fZGF0ZSwgYiwga2VlcExvY2FsVGltZSwgZmFsc2UsIF9jb25maWcpO1xuXG4gICAgdGhpcy5fb2Zmc2V0ID0gX2NvbmZpZy5fb2Zmc2V0O1xuICAgIHRoaXMuX2lzVVRDID0gX2NvbmZpZy5faXNVVEM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHV0YyhrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IEtocm9ub3Mge1xuICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgfVxuXG4gIGxvY2FsKGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogS2hyb25vcyB7XG4gICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzLl9kYXRlKSwgJ20nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBhcnNlWm9uZShpbnB1dD86IHN0cmluZyk6IEtocm9ub3Mge1xuICAgIGNvbnN0IF9jb25maWcgPSB0aGlzLl90b0NvbmZpZygpO1xuICAgIHRoaXMuX2RhdGUgPSBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCh0aGlzLl9kYXRlLCBpbnB1dCwgX2NvbmZpZyk7XG5cbiAgICB0aGlzLl9vZmZzZXQgPSBfY29uZmlnLl9vZmZzZXQ7XG4gICAgdGhpcy5faXNVVEMgPSBfY29uZmlnLl9pc1VUQztcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQ/OiBLaHJvbm9zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0FsaWduZWRIb3VyT2Zmc2V0KHRoaXMuX2RhdGUsIGlucHV0ID8gaW5wdXQuX2RhdGUgOiB2b2lkIDApO1xuICB9XG5cbiAgaXNEU1QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRGF5bGlnaHRTYXZpbmdUaW1lKHRoaXMuX2RhdGUpO1xuICB9XG5cbiAgaXNMb2NhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuX2lzVVRDO1xuICB9XG5cbiAgaXNVdGNPZmZzZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDO1xuICB9XG5cbiAgaXNVVEMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNVdGMoKTtcbiAgfVxuXG4gIGlzVXRjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDA7XG4gIH1cblxuICAvLyBUaW1lem9uZVxuXG4gIHpvbmVBYmJyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFpvbmVBYmJyKHRoaXMuX2lzVVRDKTtcbiAgfVxuXG4gIHpvbmVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFpvbmVOYW1lKHRoaXMuX2lzVVRDKTtcbiAgfVxuXG4gIC8vIFllYXJcblxuICB5ZWFyKCk6IG51bWJlcjtcbiAgeWVhcih5ZWFyOiBudW1iZXIpOiBLaHJvbm9zO1xuICB5ZWFyKHllYXI/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXllYXIgJiYgeWVhciAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHllYXIpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2Vla1llYXIoKTogbnVtYmVyO1xuICB3ZWVrWWVhcih2YWw6IG51bWJlcik6IEtocm9ub3M7XG4gIHdlZWtZZWFyKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldFdlZWtZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2xvY2FsZSwgdGhpcy5pc1VUQygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlID0gZ2V0U2V0V2Vla1llYXIodGhpcy5fZGF0ZSwgdmFsLCB0aGlzLl9sb2NhbGUsIHRoaXMuaXNVVEMoKSk7XG4gICAgaWYgKGlzRGF0ZShkYXRlKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc29XZWVrWWVhcigpOiBudW1iZXIgO1xuICBpc29XZWVrWWVhcih2YWw6IG51bWJlcik6IEtocm9ub3MgO1xuICBpc29XZWVrWWVhcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRJU09XZWVrWWVhcih0aGlzLl9kYXRlLCB0aGlzLmlzVVRDKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSBnZXRTZXRJU09XZWVrWWVhcih0aGlzLl9kYXRlLCB2YWwsIHRoaXMuaXNVdGMoKSk7XG5cbiAgICBpZiAoaXNEYXRlKGRhdGUpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzTGVhcFllYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIoZ2V0RnVsbFllYXIodGhpcy50b0RhdGUoKSwgdGhpcy5pc1VUQygpKSk7XG4gIH1cblxuICAvLyBNb250aFxuXG4gIG1vbnRoKCk6IG51bWJlcjtcbiAgbW9udGgobW9udGg6IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3M7XG4gIG1vbnRoKG1vbnRoPzogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFtb250aCAmJiBtb250aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICBsZXQgX21vbnRoID0gbW9udGg7XG5cbiAgICBpZiAoaXNTdHJpbmcobW9udGgpKSB7XG4gICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XG4gICAgICBfbW9udGggPSBsb2NhbGUubW9udGhzUGFyc2UobW9udGgpO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihfbW9udGgpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1vbnRoKHRoaXMuX2RhdGUsIF9tb250aCwgdGhpcy5faXNVVEMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBob3VyKCk6IG51bWJlcjtcbiAgaG91cihob3VyczogbnVtYmVyKTogS2hyb25vcztcbiAgaG91cihob3Vycz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKGhvdXJzKTtcbiAgfVxuXG4gIGhvdXJzKCk6IG51bWJlcjtcbiAgaG91cnMoaG91cnM6IG51bWJlcik6IEtocm9ub3M7XG4gIGhvdXJzKGhvdXJzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFob3VycyAmJiBob3VycyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldEhvdXJzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldEhvdXJzKHRoaXMuX2RhdGUsIGhvdXJzLCB0aGlzLl9pc1VUQykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgbWludXRlKCk6IG51bWJlcjtcbiAgbWludXRlKG1pbnV0ZXM6IG51bWJlcik6IEtocm9ub3M7XG4gIG1pbnV0ZShtaW51dGVzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWludXRlcyhtaW51dGVzKTtcbiAgfVxuXG4gIG1pbnV0ZXMoKTogbnVtYmVyO1xuICBtaW51dGVzKG1pbnV0ZXM6IG51bWJlcik6IEtocm9ub3M7XG4gIG1pbnV0ZXMobWludXRlcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghbWludXRlcyAmJiBtaW51dGVzICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0TWludXRlcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRNaW51dGVzKHRoaXMuX2RhdGUsIG1pbnV0ZXMsIHRoaXMuX2lzVVRDKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBzZWNvbmQoKTogbnVtYmVyO1xuICBzZWNvbmQoc2Vjb25kczogbnVtYmVyKTogS2hyb25vcztcbiAgc2Vjb25kKHNlY29uZHM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zZWNvbmRzKHNlY29uZHMpO1xuICB9XG5cbiAgc2Vjb25kcygpOiBudW1iZXI7XG4gIHNlY29uZHMoc2Vjb25kczogbnVtYmVyKTogS2hyb25vcztcbiAgc2Vjb25kcyhzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFzZWNvbmRzICYmIHNlY29uZHMgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRTZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldFNlY29uZHModGhpcy5fZGF0ZSwgc2Vjb25kcywgdGhpcy5faXNVVEMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIG1pbGxpc2Vjb25kKCk6IG51bWJlcjtcbiAgbWlsbGlzZWNvbmQobXM6IG51bWJlcik6IEtocm9ub3M7XG4gIG1pbGxpc2Vjb25kKG1zPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmRzKG1zKTtcbiAgfVxuXG4gIG1pbGxpc2Vjb25kcygpOiBudW1iZXI7XG4gIG1pbGxpc2Vjb25kcyhzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBtaWxsaXNlY29uZHMoc2Vjb25kcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghc2Vjb25kcyAmJiBzZWNvbmRzICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0TWlsbGlzZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1pbGxpc2Vjb25kcyh0aGlzLl9kYXRlLCBzZWNvbmRzLCB0aGlzLl9pc1VUQykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEYXlcblxuICBkYXRlKCk6IG51bWJlcjtcbiAgZGF0ZShkYXRlOiBudW1iZXIpOiBLaHJvbm9zO1xuICBkYXRlKGRhdGU/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIWRhdGUgJiYgZGF0ZSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldERhdGUodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0RGF0ZSh0aGlzLl9kYXRlLCBkYXRlLCB0aGlzLl9pc1VUQykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYXkoKTogbnVtYmVyIDtcbiAgZGF5KGlucHV0OiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIDtcbiAgZGF5KGlucHV0PzogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldERheU9mV2Vlayh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgbGV0IF9pbnB1dCA9IGlucHV0O1xuXG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgICAgX2lucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLl9sb2NhbGUpO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihfaW5wdXQpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gc2V0RGF5T2ZXZWVrKHRoaXMuX2RhdGUsIF9pbnB1dCwgdGhpcy5fbG9jYWxlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWVrZGF5KCk6IG51bWJlciA7XG4gIHdlZWtkYXkodmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcbiAgd2Vla2RheSh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsodGhpcy5fZGF0ZSwgdGhpcy5fbG9jYWxlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldExvY2FsZURheU9mV2Vlayh0aGlzLl9kYXRlLCB2YWwsIHsgbG9jYWxlOiB0aGlzLl9sb2NhbGUsIGlzVVRDOiB0aGlzLl9pc1VUQyB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNvV2Vla2RheSgpOiBudW1iZXIgO1xuICBpc29XZWVrZGF5KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyA7XG4gIGlzb1dlZWtkYXkodmFsPzogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKHRoaXMuX2RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRJU09EYXlPZldlZWsodGhpcy5fZGF0ZSwgdmFsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGF5T2ZZZWFyKCk6IG51bWJlcjtcbiAgZGF5T2ZZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcztcbiAgZGF5T2ZZZWFyKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldERheU9mWWVhcih0aGlzLl9kYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0RGF5T2ZZZWFyKHRoaXMuX2RhdGUsIHZhbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFdlZWtcblxuICB3ZWVrKCk6IG51bWJlcjtcbiAgd2VlayhpbnB1dDogbnVtYmVyKTogS2hyb25vcztcbiAgd2VlayhpbnB1dD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghaW5wdXQgJiYgaW5wdXQgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRXZWVrKHRoaXMuX2RhdGUsIHRoaXMuX2xvY2FsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldFdlZWsodGhpcy5fZGF0ZSwgaW5wdXQsIHRoaXMuX2xvY2FsZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICB3ZWVrcygpOiBudW1iZXI7XG4gIHdlZWtzKGlucHV0OiBudW1iZXIpOiBLaHJvbm9zO1xuICB3ZWVrcyhpbnB1dD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndlZWsoaW5wdXQpO1xuICB9XG5cbiAgaXNvV2VlaygpOiBudW1iZXIgO1xuICBpc29XZWVrKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XG4gIGlzb1dlZWsodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0SVNPV2Vlayh0aGlzLl9kYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0SVNPV2Vlayh0aGlzLl9kYXRlLCB2YWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgaXNvV2Vla3MoKTogbnVtYmVyIDtcbiAgaXNvV2Vla3ModmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcbiAgaXNvV2Vla3ModmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaXNvV2Vlayh2YWwpO1xuICB9XG5cbiAgd2Vla3NJblllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0V2Vla3NJblllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMsIHRoaXMuX2xvY2FsZSk7XG4gIH1cblxuICBpc29XZWVrc0luWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRJU09XZWVrc0luWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gIH1cblxuXG4gIGRheXNJbk1vbnRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSwgZ2V0TW9udGgodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpKTtcbiAgfVxuXG5cbiAgcXVhcnRlcigpOiBudW1iZXI7XG4gIHF1YXJ0ZXIodmFsOiBudW1iZXIpOiBLaHJvbm9zO1xuICBxdWFydGVyKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldFF1YXJ0ZXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRRdWFydGVyKHRoaXMuX2RhdGUsIHZhbCwgdGhpcy5faXNVVEMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgcXVhcnRlcnMoKTogbnVtYmVyO1xuICBxdWFydGVycyh2YWw6IG51bWJlcik6IEtocm9ub3M7XG4gIHF1YXJ0ZXJzKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnF1YXJ0ZXIodmFsKTtcbiAgfVxuXG4gIHN0YXJ0T2YocGVyaW9kPzogTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xuICAgIGNvbnN0IF9wZXIgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XG4gICAgdGhpcy5fZGF0ZSA9IHN0YXJ0T2YodGhpcy5fZGF0ZSwgX3BlciwgdGhpcy5faXNVVEMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuIl19