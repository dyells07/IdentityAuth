/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isSameDay, isSameMonth, isAfter, isBefore, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagDaysCalendarOptions() { }
function FlagDaysCalendarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.hoveredDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedRange;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.monthIndex;
}
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
export function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((week, weekIndex) => {
        week.days.forEach((day, dayIndex) => {
            // datepicker
            const /** @type {?} */ isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            const /** @type {?} */ isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            const /** @type {?} */ isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            const /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            const /** @type {?} */ isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            const /** @type {?} */ isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day');
            // decide update or not
            const /** @type {?} */ newDay = Object.assign({}, day, {
                isOtherMonth,
                isHovered,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isInRange,
                isDisabled
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0QsTUFBTSwyQkFDSixjQUFxQyxFQUNyQyxPQUFnQztJQUVoQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQW1CLEVBQUUsU0FBaUIsRUFBRSxFQUFFO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBaUIsRUFBRSxRQUFnQixFQUFFLEVBQUU7O1lBRXhELHVCQUFNLFlBQVksR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsRSx1QkFBTSxTQUFTLEdBQ2IsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUU1RCx1QkFBTSxnQkFBZ0IsR0FDcEIsQ0FBQyxZQUFZO2dCQUNiLE9BQU8sQ0FBQyxhQUFhO2dCQUNyQixTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsdUJBQU0sY0FBYyxHQUNsQixDQUFDLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLGFBQWE7Z0JBQ3JCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENB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ZDtJQUVELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1RDtJQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQztLQUN2RDtJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpc1NhbWVEYXksIGlzU2FtZU1vbnRoLCBpc0FmdGVyLCBpc0JlZm9yZSwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGlzTW9udGhEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnRGF5c0NhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGhvdmVyZWREYXRlOiBEYXRlO1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICBtb250aEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnRGF5c0NhbGVuZGFyKFxuICBmb3JtYXR0ZWRNb250aDogRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnRGF5c0NhbGVuZGFyT3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgZm9ybWF0dGVkTW9udGgud2Vla3MuZm9yRWFjaCgod2VlazogV2Vla1ZpZXdNb2RlbCwgd2Vla0luZGV4OiBudW1iZXIpID0+IHtcbiAgICB3ZWVrLmRheXMuZm9yRWFjaCgoZGF5OiBEYXlWaWV3TW9kZWwsIGRheUluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIGRhdGVwaWNrZXJcbiAgICAgIGNvbnN0IGlzT3RoZXJNb250aCA9ICFpc1NhbWVNb250aChkYXkuZGF0ZSwgZm9ybWF0dGVkTW9udGgubW9udGgpO1xuXG4gICAgICBjb25zdCBpc0hvdmVyZWQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG4gICAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25TdGFydCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzBdKTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uRW5kID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMV0pO1xuXG4gICAgICBjb25zdCBpc1NlbGVjdGVkID1cbiAgICAgICAgKCFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSkpIHx8XG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQ7XG5cbiAgICAgIGNvbnN0IGlzSW5SYW5nZSA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzRGF0ZUluUmFuZ2UoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG5cbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgaXNCZWZvcmUoZGF5LmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgJ2RheScpIHx8XG4gICAgICAgIGlzQWZ0ZXIoZGF5LmRhdGUsIG9wdGlvbnMubWF4RGF0ZSwgJ2RheScpO1xuXG4gICAgICAvLyBkZWNpZGUgdXBkYXRlIG9yIG5vdFxuICAgICAgY29uc3QgbmV3RGF5ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG4gICAgICAgIGlzT3RoZXJNb250aCxcbiAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0LFxuICAgICAgICBpc1NlbGVjdGlvbkVuZCxcbiAgICAgICAgaXNJblJhbmdlLFxuICAgICAgICBpc0Rpc2FibGVkXG4gICAgICB9KTtcblxuICAgICAgaWYgKFxuICAgICAgICBkYXkuaXNPdGhlck1vbnRoICE9PSBuZXdEYXkuaXNPdGhlck1vbnRoIHx8XG4gICAgICAgIGRheS5pc0hvdmVyZWQgIT09IG5ld0RheS5pc0hvdmVyZWQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0ZWQgIT09IG5ld0RheS5pc1NlbGVjdGVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGlvblN0YXJ0ICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25FbmQgIT09IG5ld0RheS5pc1NlbGVjdGlvbkVuZCB8fFxuICAgICAgICBkYXkuaXNEaXNhYmxlZCAhPT0gbmV3RGF5LmlzRGlzYWJsZWQgfHxcbiAgICAgICAgZGF5LmlzSW5SYW5nZSAhPT0gbmV3RGF5LmlzSW5SYW5nZVxuICAgICAgKSB7XG4gICAgICAgIHdlZWsuZGF5c1tkYXlJbmRleF0gPSBuZXdEYXk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xuICBmb3JtYXR0ZWRNb250aC5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAob3B0aW9ucy5tb250aEluZGV4ID4gMCAmJiBvcHRpb25zLm1vbnRoSW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocyk7XG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAob3B0aW9ucy5tb250aEluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xuXG4gIGZvcm1hdHRlZE1vbnRoLmRpc2FibGVMZWZ0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGZvcm1hdHRlZE1vbnRoLmRpc2FibGVSaWdodEFycm93ID0gaXNNb250aERpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZE1vbnRoO1xufVxuXG5mdW5jdGlvbiBpc0RhdGVJblJhbmdlKFxuICBkYXRlOiBEYXRlLFxuICBzZWxlY3RlZFJhbmdlOiBEYXRlW10sXG4gIGhvdmVyZWREYXRlOiBEYXRlXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlIHx8ICFzZWxlY3RlZFJhbmdlWzBdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUmFuZ2VbMV0pIHtcbiAgICByZXR1cm4gZGF0ZSA+IHNlbGVjdGVkUmFuZ2VbMF0gJiYgZGF0ZSA8PSBzZWxlY3RlZFJhbmdlWzFdO1xuICB9XG5cbiAgaWYgKGhvdmVyZWREYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gaG92ZXJlZERhdGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=