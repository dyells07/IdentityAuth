/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { diff } from './diff';
import { cloneWithOffset } from '../units/offset';
import { isFunction, isString } from '../utils/type-checks';
import { cloneDate } from '../create/clone';
import { startOf } from '../utils/start-end-of';
import { formatDate } from '../format';
import { getLocale } from '../locale/locales';
/**
 * @record
 */
export function CalendarSpec() { }
function CalendarSpec_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameElse;
    /* TODO: handle strange member:
    [x: string]: CalendarSpecVal | void;
    */
}
/**
 * @param {?} date
 * @param {?} now
 * @param {?} config
 * @return {?}
 */
export function getCalendarFormat(date, now, config) {
    const /** @type {?} */ _diff = diff(date, now, 'day', true, config);
    switch (true) {
        case _diff < -6: return 'sameElse';
        case _diff < -1: return 'lastWeek';
        case _diff < 0: return 'lastDay';
        case _diff < 1: return 'sameDay';
        case _diff < 2: return 'nextDay';
        case _diff < 7: return 'nextWeek';
        default: return 'sameElse';
    }
}
/**
 * @param {?} date
 * @param {?} time
 * @param {?} formats
 * @param {?=} locale
 * @param {?=} config
 * @return {?}
 */
export function calendar(date, time, formats, locale = getLocale(), config = {}) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    const /** @type {?} */ now = time;
    const /** @type {?} */ sod = startOf(cloneWithOffset(now, date, config), 'day', config._isUTC);
    const /** @type {?} */ format = getCalendarFormat(date, sod, { _isUTC: true, _offset: 0 }) || 'sameElse';
    let /** @type {?} */ output;
    if (formats) {
        const /** @type {?} */ _format = formats[format];
        if (isString(_format)) {
            output = _format;
        }
        if (isFunction(_format)) {
            output = _format.call(null, date, now);
        }
    }
    if (!output) {
        output = locale.calendar(format, date, cloneDate(now));
    }
    return formatDate(date, output, config._locale._abbr, config._isUTC, config._offset);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJtb21lbnQvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCOUMsTUFBTSw0QkFBNEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxNQUF5QjtJQUNoRix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25DLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xDLFNBQVMsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUM1QjtDQUNGOzs7Ozs7Ozs7QUFFRCxNQUFNLG1CQUFtQixJQUFVLEVBQ1YsSUFBVSxFQUNWLE9BQXFCLEVBQ3JCLFNBQWlCLFNBQVMsRUFBRSxFQUM1QixTQUE0QixFQUFFOzs7SUFHckQsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQztJQUNqQix1QkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFHLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0UsdUJBQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQztJQUV0RixxQkFBSSxNQUFNLENBQUM7SUFDWCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1osdUJBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7S0FDRjtJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDdEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzdGFydE9mIH0gZnJvbSAnLi4vdXRpbHMvc3RhcnQtZW5kLW9mJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhclNwZWNWYWwgPSBzdHJpbmcgfCAoKG0/OiBEYXRlSW5wdXQsIG5vdz86IERhdGUpID0+IHN0cmluZyk7XG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyU3BlYyB7XG4gIHNhbWVEYXk/OiBDYWxlbmRhclNwZWNWYWw7XG4gIG5leHREYXk/OiBDYWxlbmRhclNwZWNWYWw7XG4gIGxhc3REYXk/OiBDYWxlbmRhclNwZWNWYWw7XG4gIG5leHRXZWVrPzogQ2FsZW5kYXJTcGVjVmFsO1xuICBsYXN0V2Vlaz86IENhbGVuZGFyU3BlY1ZhbDtcbiAgc2FtZUVsc2U/OiBDYWxlbmRhclNwZWNWYWw7XG5cbiAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyBtaWdodCBiZSB1c2VkIHdpdGggbW9tZW50LmNhbGVuZGFyRm9ybWF0XG4gIFt4OiBzdHJpbmddOiBDYWxlbmRhclNwZWNWYWwgfCB2b2lkOyAvLyB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KGRhdGU6IERhdGUsIG5vdzogRGF0ZSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZykge1xuICBjb25zdCBfZGlmZiA9IGRpZmYoZGF0ZSwgbm93LCAnZGF5JywgdHJ1ZSwgY29uZmlnKTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIF9kaWZmIDwgLTY6IHJldHVybiAnc2FtZUVsc2UnO1xuICAgIGNhc2UgX2RpZmYgPCAtMTogcmV0dXJuICdsYXN0V2Vlayc7XG4gICAgY2FzZSBfZGlmZiA8IDA6IHJldHVybiAnbGFzdERheSc7XG4gICAgY2FzZSBfZGlmZiA8IDE6IHJldHVybiAnc2FtZURheSc7XG4gICAgY2FzZSBfZGlmZiA8IDI6IHJldHVybiAnbmV4dERheSc7XG4gICAgY2FzZSBfZGlmZiA8IDc6IHJldHVybiAnbmV4dFdlZWsnO1xuICAgIGRlZmF1bHQ6IHJldHVybiAnc2FtZUVsc2UnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxlbmRhcihkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0czogQ2FsZW5kYXJTcGVjLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogc3RyaW5nIHtcbiAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXG4gIGNvbnN0IG5vdyA9IHRpbWU7XG4gIGNvbnN0IHNvZCA9IHN0YXJ0T2YoY2xvbmVXaXRoT2Zmc2V0KG5vdywgZGF0ZSwgIGNvbmZpZyksICdkYXknLCBjb25maWcuX2lzVVRDKTtcbiAgY29uc3QgZm9ybWF0ID0gZ2V0Q2FsZW5kYXJGb3JtYXQoZGF0ZSwgc29kLCB7X2lzVVRDOiB0cnVlLCBfb2Zmc2V0OiAwfSkgfHwgJ3NhbWVFbHNlJztcblxuICBsZXQgb3V0cHV0O1xuICBpZiAoZm9ybWF0cykge1xuICAgIGNvbnN0IF9mb3JtYXQgPSBmb3JtYXRzW2Zvcm1hdF07XG4gICAgaWYgKGlzU3RyaW5nKF9mb3JtYXQpKSB7XG4gICAgICBvdXRwdXQgPSBfZm9ybWF0O1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihfZm9ybWF0KSkge1xuICAgICAgb3V0cHV0ID0gX2Zvcm1hdC5jYWxsKG51bGwsIGRhdGUsIG5vdyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBsb2NhbGUuY2FsZW5kYXIoZm9ybWF0LCBkYXRlLCBjbG9uZURhdGUobm93KSk7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBvdXRwdXQsIGNvbmZpZy5fbG9jYWxlLl9hYmJyLCBjb25maWcuX2lzVVRDLCBjb25maWcuX29mZnNldCk7XG59XG4iXX0=