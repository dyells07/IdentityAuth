/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getLocale } from '../locale/locales';
import { isDurationValid } from './valid';
import { bubble, daysToMonths, monthsToDays } from './bubble';
import { normalizeUnits } from '../units/aliases';
import { relativeTime } from './humanize';
import { toInt } from '../utils/type-checks';
var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
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
export { Duration };
function Duration_tsickle_Closure_declarations() {
    /** @type {?} */
    Duration.prototype._milliseconds;
    /** @type {?} */
    Duration.prototype._days;
    /** @type {?} */
    Duration.prototype._months;
    /** @type {?} */
    Duration.prototype._data;
    /** @type {?} */
    Duration.prototype._locale;
    /** @type {?} */
    Duration.prototype._isValid;
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isDuration(obj) {
    return obj instanceof Duration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9jb25zdHJ1Y3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxJQUFBO0lBUUUsa0JBQVksUUFBNkIsRUFBRSxNQUE4QjtRQUE5Qix1QkFBQSxFQUFBLFdBQThCO3FCQUo1QyxFQUFFO3VCQUNiLFNBQVMsRUFBRTtRQUkzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUV2RCxxQkFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDOUMscUJBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFDLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FB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akMsTUFBTSxDQUFDLEdBQUcsWUFBWSxRQUFRLENBQUM7Q0FDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzRHVyYXRpb25WYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgYnViYmxlLCBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUgfSBmcm9tICcuL2h1bWFuaXplJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuICBfbWlsbGlzZWNvbmRzOiBudW1iZXI7XG4gIF9kYXlzOiBudW1iZXI7XG4gIF9tb250aHM6IG51bWJlcjtcbiAgX2RhdGE6IFBhcnRpYWw8RGF0ZU9iamVjdD4gPSB7fTtcbiAgX2xvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCk7XG4gIF9pc1ZhbGlkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcgJiYgY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XG4gICAgLy8gY29uc3Qgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IGR1cmF0aW9uO1xuICAgIGNvbnN0IHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMDtcbiAgICBjb25zdCBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDA7XG4gICAgY29uc3QgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDA7XG4gICAgY29uc3Qgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwO1xuICAgIGNvbnN0IGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDA7XG4gICAgY29uc3QgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91cnMgfHwgMDtcbiAgICBjb25zdCBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZXMgfHwgMDtcbiAgICBjb25zdCBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZHMgfHwgMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRzIHx8IDA7XG5cbiAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgc2Vjb25kcyAqIDEwMDAgK1xuICAgICAgbWludXRlcyAqIDYwICogMTAwMCArIC8vIDEwMDAgKiA2MFxuICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy8gdXNpbmcgMTAwMCAqIDYwICogNjBcbiAgICAvLyBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgeWVhcnMgKiAxMjtcblxuICAgIC8vIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIC8vIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgLy8gdGhpcy5fYnViYmxlKCk7XG4gICAgcmV0dXJuIGJ1YmJsZSh0aGlzKTtcbiAgfVxuXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4gIH1cblxuICBodW1hbml6ZSh3aXRoU3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBpbXBsZW1lbnRgKTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuICB9XG5cbiAgbG9jYWxlRGF0YSgpOiBMb2NhbGUge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBsb2NhbGUoKTogc3RyaW5nO1xuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcpOiBEdXJhdGlvbjtcbiAgbG9jYWxlKGxvY2FsZUtleT86IHN0cmluZyk6IER1cmF0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoIWxvY2FsZUtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KSB8fCB0aGlzLl9sb2NhbGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgYWJzKCk6IER1cmF0aW9uIHtcbiAgICBjb25zdCBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aCA9IG1hdGhBYnMoZGF0YS5tb250aCk7XG4gICAgZGF0YS55ZWFyID0gbWF0aEFicyhkYXRhLnllYXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcyhfdW5pdHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgbGV0IGRheXM7XG4gICAgbGV0IG1vbnRocztcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICBjb25zdCB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKF91bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcblxuICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgY2FzZSAnd2VlaycgICA6XG4gICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgIGNhc2UgJ2RheScgICAgOlxuICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgY2FzZSAnaG91cnMnICAgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgIGNhc2UgJ21pbnV0ZXMnIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgY2FzZSAnc2Vjb25kcycgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1bml0ICR7dW5pdHN9YCk7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVPZiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iajogYW55KTogb2JqIGlzIER1cmF0aW9uIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuIl19