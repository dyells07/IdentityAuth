/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isSameYear, shiftDate } from 'ngx-bootstrap/chronos';
import { isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagYearsCalendarOptions() { }
function FlagYearsCalendarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.hoveredYear;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.yearIndex;
}
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
export function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            const /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    const /** @type {?} */ i = yearsCalendar.years.length - 1;
    const /** @type {?} */ j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy15ZWFycy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVELE1BQU0sNEJBQ0osYUFBcUMsRUFDckMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLENBQUMsS0FBOEIsRUFBRSxRQUFnQixFQUFFLEVBQUU7UUFDbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQTJCLEVBQUUsU0FBaUIsRUFBRSxFQUFFO1lBQy9ELHVCQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0QsdUJBQU0sVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5RCx1QkFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDeEUsRUFBRSxDQUFDLENBQ0QsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsU0FBUztnQkFDckMsSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDckQ7U0FDRixDQUFDLENBQUM7S0FDSixDQUNGLENBQUM7O0lBR0YsYUFBYSxDQUFDLGFBQWE7UUFDekIsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZFLGFBQWEsQ0FBQyxjQUFjO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWE7WUFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVsRCxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUM3QyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFDRix1QkFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLHVCQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3RELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1NhbWVZZWFyLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCwgQ2FsZW5kYXJDZWxsVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdZZWFyc0NhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGhvdmVyZWRZZWFyOiBEYXRlO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIHllYXJJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ1llYXJzQ2FsZW5kYXIoXG4gIHllYXJzQ2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdZZWFyc0NhbGVuZGFyT3B0aW9uc1xuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIHllYXJzQ2FsZW5kYXIueWVhcnMuZm9yRWFjaChcbiAgICAoeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB5ZWFycy5mb3JFYWNoKCh5ZWFyOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIHllYXJJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZVllYXIoeWVhci5kYXRlLCBvcHRpb25zLmhvdmVyZWRZZWFyKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgICAgICAgaXNZZWFyRGlzYWJsZWQoeWVhci5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XG5cbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8geWVhciwgeyBpc0hvdmVyZWQsIGlzRGlzYWJsZWQgfSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB5ZWFyLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XG4gICAgICAgICAgeWVhci5pc0Rpc2FibGVkICE9PSBuZXdNb250aC5pc0Rpc2FibGVkXG4gICAgICAgICkge1xuICAgICAgICAgIHllYXJzQ2FsZW5kYXIueWVhcnNbcm93SW5kZXhdW3llYXJJbmRleF0gPSBuZXdNb250aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xuICB5ZWFyc0NhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMueWVhckluZGV4ID4gMCAmJiBvcHRpb25zLnllYXJJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xuICB5ZWFyc0NhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLnllYXJJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgIG9wdGlvbnMueWVhckluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xuXG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZUxlZnRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBjb25zdCBpID0geWVhcnNDYWxlbmRhci55ZWFycy5sZW5ndGggLSAxO1xuICBjb25zdCBqID0geWVhcnNDYWxlbmRhci55ZWFyc1tpXS5sZW5ndGggLSAxO1xuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbaV1bal0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4geWVhcnNDYWxlbmRhcjtcbn1cbiJdfQ==