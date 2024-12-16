/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { formatDate, getLocale } from 'ngx-bootstrap/chronos';
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
export function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
            return ({
                days: week.map(function (date, dayIndex) {
                    return ({
                        date: date,
                        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                        monthIndex: monthIndex,
                        weekIndex: weekIndex,
                        dayIndex: dayIndex
                    });
                })
            });
        })
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
export function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? formatDate(days[0], format, locale) : ''); });
}
/**
 * @param {?} locale
 * @return {?}
 */
export function getShiftedWeekdays(locale) {
    var /** @type {?} */ _locale = getLocale(locale);
    var /** @type {?} */ weekdays = /** @type {?} */ (_locale.weekdaysShort());
    var /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
    return tslib_1.__spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRheXMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTlELE1BQU0sNkJBQTZCLFlBQStCLEVBQy9CLGFBQXNDLEVBQ3RDLFVBQWtCO0lBQ25ELE1BQU0sQ0FBQztRQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztRQUN6QixVQUFVLEVBQUUsVUFBVSxDQUNwQixZQUFZLENBQUMsS0FBSyxFQUNsQixhQUFhLENBQUMsVUFBVSxFQUN4QixhQUFhLENBQUMsTUFBTSxDQUNyQjtRQUNELFNBQVMsRUFBRSxVQUFVLENBQ25CLFlBQVksQ0FBQyxLQUFLLEVBQ2xCLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO1FBQ0QsV0FBVyxFQUFFLGNBQWMsQ0FDekIsWUFBWSxDQUFDLFVBQVUsRUFDdkIsYUFBYSxDQUFDLFdBQVcsRUFDekIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7UUFDRCxRQUFRLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxLQUFLLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFZLEVBQUUsU0FBaUI7WUFBSyxPQUFBLENBQUM7Z0JBQ3ZFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBVSxFQUFFLFFBQWdCO29CQUFLLE9BQUEsQ0FBQzt3QkFDaEQsSUFBSSxNQUFBO3dCQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQzt3QkFDckUsVUFBVSxZQUFBO3dCQUNWLFNBQVMsV0FBQTt3QkFDVCxRQUFRLFVBQUE7cUJBQ1QsQ0FBQztnQkFOK0MsQ0FNL0MsQ0FBQzthQUNKLENBQUM7UUFSc0UsQ0FRdEUsQ0FBQztLQUNKLENBQUM7Q0FDSDs7Ozs7OztBQUVELE1BQU0seUJBQXlCLFVBQW9CLEVBQ3BCLE1BQWMsRUFDZCxNQUFjO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNuQixVQUFDLElBQVksSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQXBELENBQW9ELENBQ3ZFLENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLDZCQUE2QixNQUFjO0lBQy9DLHFCQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMscUJBQU0sUUFBUSxxQkFBRyxPQUFPLENBQUMsYUFBYSxFQUFjLENBQUEsQ0FBQztJQUNyRCxxQkFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRWhELE1BQU0sa0JBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRTtDQUNsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJNb2RlbCxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRMb2NhbGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF5c0NhbGVuZGFyKGRheXNDYWxlbmRhcjogRGF5c0NhbGVuZGFyTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aEluZGV4OiBudW1iZXIpOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgbW9udGhUaXRsZTogZm9ybWF0RGF0ZShcbiAgICAgIGRheXNDYWxlbmRhci5tb250aCxcbiAgICAgIGZvcm1hdE9wdGlvbnMubW9udGhUaXRsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKSxcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKSxcbiAgICB3ZWVrTnVtYmVyczogZ2V0V2Vla051bWJlcnMoXG4gICAgICBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeCxcbiAgICAgIGZvcm1hdE9wdGlvbnMud2Vla051bWJlcnMsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgd2Vla2RheXM6IGdldFNoaWZ0ZWRXZWVrZGF5cyhmb3JtYXRPcHRpb25zLmxvY2FsZSksXG4gICAgd2Vla3M6IGRheXNDYWxlbmRhci5kYXlzTWF0cml4Lm1hcCgod2VlazogRGF0ZVtdLCB3ZWVrSW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgIGRheXM6IHdlZWsubWFwKChkYXRlOiBEYXRlLCBkYXlJbmRleDogbnVtYmVyKSA9PiAoe1xuICAgICAgICBkYXRlLFxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLmRheUxhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSksXG4gICAgICAgIG1vbnRoSW5kZXgsXG4gICAgICAgIHdlZWtJbmRleCxcbiAgICAgICAgZGF5SW5kZXhcbiAgICAgIH0pKVxuICAgIH0pKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcnMoZGF5c01hdHJpeDogRGF0ZVtdW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBkYXlzTWF0cml4Lm1hcChcbiAgICAoZGF5czogRGF0ZVtdKSA9PiAoZGF5c1swXSA/IGZvcm1hdERhdGUoZGF5c1swXSwgZm9ybWF0LCBsb2NhbGUpIDogJycpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGlmdGVkV2Vla2RheXMobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlKTtcbiAgY29uc3Qgd2Vla2RheXMgPSBfbG9jYWxlLndlZWtkYXlzU2hvcnQoKSBhcyBzdHJpbmdbXTtcbiAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBfbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCk7XG5cbiAgcmV0dXJuIFsuLi53ZWVrZGF5cy5zbGljZShmaXJzdERheU9mV2VlayksIC4uLndlZWtkYXlzLnNsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKV07XG59XG4iXX0=