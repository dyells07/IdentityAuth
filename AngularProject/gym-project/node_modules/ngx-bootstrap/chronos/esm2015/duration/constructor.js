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
export class Duration {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9jb25zdHJ1Y3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxNQUFNOzs7OztJQVFKLFlBQVksUUFBNkIsRUFBRSxTQUE0QixFQUFFO3FCQUo1QyxFQUFFO3VCQUNiLFNBQVMsRUFBRTtRQUkzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUV2RCx1QkFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4Qyx1QkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDOUMsdUJBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFDLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4Qyx1QkFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsdUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FB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L2xvY2FsZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc0R1cmF0aW9uVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGJ1YmJsZSwgZGF5c1RvTW9udGhzLCBtb250aHNUb0RheXMgfSBmcm9tICcuL2J1YmJsZSc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgcmVsYXRpdmVUaW1lIH0gZnJvbSAnLi9odW1hbml6ZSc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uIHtcbiAgX21pbGxpc2Vjb25kczogbnVtYmVyO1xuICBfZGF5czogbnVtYmVyO1xuICBfbW9udGhzOiBudW1iZXI7XG4gIF9kYXRhOiBQYXJ0aWFsPERhdGVPYmplY3Q+ID0ge307XG4gIF9sb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpO1xuICBfaXNWYWxpZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0PiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnICYmIGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZSgpO1xuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKTtcbiAgICBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBkdXJhdGlvbjtcbiAgICBjb25zdCB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDA7XG4gICAgY29uc3QgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwO1xuICAgIGNvbnN0IG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwO1xuICAgIGNvbnN0IHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMDtcbiAgICBjb25zdCBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwO1xuICAgIGNvbnN0IGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXJzIHx8IDA7XG4gICAgY29uc3QgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGVzIHx8IDA7XG4gICAgY29uc3Qgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmRzIHx8IDA7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kcyB8fCAwO1xuXG4gICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xuXG4gICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcbiAgICAgIHNlY29uZHMgKiAxMDAwICtcbiAgICAgIG1pbnV0ZXMgKiA2MCAqIDEwMDAgKyAvLyAxMDAwICogNjBcbiAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vIHVzaW5nIDEwMDAgKiA2MCAqIDYwXG4gICAgLy8gaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xuICAgICAgd2Vla3MgKiA3O1xuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAvLyBpdCBzZXBhcmF0ZWx5LlxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xuICAgICAgcXVhcnRlcnMgKiAzICtcbiAgICAgIHllYXJzICogMTI7XG5cbiAgICAvLyB0aGlzLl9kYXRhID0ge307XG5cbiAgICAvLyB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgIC8vIHRoaXMuX2J1YmJsZSgpO1xuICAgIHJldHVybiBidWJibGUodGhpcyk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuICB9XG5cbiAgaHVtYW5pemUod2l0aFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihgVE9ETzogaW1wbGVtZW50YCk7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgIGlmICh3aXRoU3VmZml4KSB7XG4gICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgfVxuXG4gIGxvY2FsZURhdGEoKTogTG9jYWxlIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgbG9jYWxlKCk6IHN0cmluZztcbiAgbG9jYWxlKGxvY2FsZUtleTogc3RyaW5nKTogRHVyYXRpb247XG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcpOiBEdXJhdGlvbiB8IHN0cmluZyB7XG4gICAgaWYgKCFsb2NhbGVLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZUtleSkgfHwgdGhpcy5fbG9jYWxlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIGFicygpOiBEdXJhdGlvbiB7XG4gICAgY29uc3QgbWF0aEFicyA9IE1hdGguYWJzO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG5cbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgdGhpcy5fZGF5cyA9IG1hdGhBYnModGhpcy5fZGF5cyk7XG4gICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICBkYXRhLnNlY29uZHMgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgIGRhdGEuaG91cnMgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgIGRhdGEubW9udGggPSBtYXRoQWJzKGRhdGEubW9udGgpO1xuICAgIGRhdGEueWVhciA9IG1hdGhBYnMoZGF0YS55ZWFyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXMoX3VuaXRzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIGxldCBkYXlzO1xuICAgIGxldCBtb250aHM7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgY29uc3QgdW5pdHMgPSBub3JtYWxpemVVbml0cyhfdW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG5cbiAgICAgIHJldHVybiB1bml0cyA9PT0gJ21vbnRoJyA/IG1vbnRocyA6IG1vbnRocyAvIDEyO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgIGNhc2UgJ3dlZWsnICAgOlxuICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICBjYXNlICdkYXknICAgIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgIGNhc2UgJ2hvdXJzJyAgIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICBjYXNlICdtaW51dGVzJyA6XG4gICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgIGNhc2UgJ3NlY29uZHMnIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRheXMgKiA4NjRlNSkgKyBtaWxsaXNlY29uZHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdW5pdCAke3VuaXRzfWApO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlT2YgKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmo6IGFueSk6IG9iaiBpcyBEdXJhdGlvbiB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbn1cbiJdfQ==