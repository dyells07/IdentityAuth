/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
function NavigationViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
function CalendarCellViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
function DayViewModel_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelected;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
function WeekViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekViewModel.prototype.days;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
function DaysCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
function MonthsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
function YearsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
function DaysCalendarModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
function MonthViewOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
function DatepickerFormatOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
function DatepickerRenderOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";
/**
 * @record
 */
export function BsNavigationEvent() { }
function BsNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
function BsViewNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
function CellHoverEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IHR5cGUgQnNEYXRlcGlja2VyVmlld01vZGUgPSAnZGF5JyB8ICdtb250aCcgfCAneWVhcic7XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG5hdmlnYXRpb24gYmFyIHNldHRpbmdzXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aFRpdGxlOiBzdHJpbmc7XG4gIHllYXJUaXRsZTogc3RyaW5nO1xuICBoaWRlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgaGlkZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xuICBkaXNhYmxlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgZGlzYWJsZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB7XG4gIGRhdGU6IERhdGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICBpc0hvdmVyZWQ/OiBib29sZWFuO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBkYXlzIG1hdHJpeDogZGF5IGNlbGwgdmlldyBtb2RlbFxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3TW9kZWwgZXh0ZW5kcyBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xuICBpc090aGVyTW9udGg/OiBib29sZWFuO1xuICBpc0luUmFuZ2U/OiBib29sZWFuO1xuICBpc1NlbGVjdGlvblN0YXJ0PzogYm9vbGVhbjtcbiAgaXNTZWxlY3Rpb25FbmQ/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcbiAgLy8gZGF5IGluZGV4XG4gIG1vbnRoSW5kZXg/OiBudW1iZXI7XG4gIHdlZWtJbmRleD86IG51bWJlcjtcbiAgZGF5SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdNb2RlbCB7XG4gIGRheXM6IERheVZpZXdNb2RlbFtdO1xufVxuXG4vLyB0b2RvOiBzcGxpdCBuYXZpZ2F0aW9uIHNldHRpbmdzXG5leHBvcnQgaW50ZXJmYWNlIERheXNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICB3ZWVrczogV2Vla1ZpZXdNb2RlbFtdO1xuICAvLyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gIG1vbnRoOiBEYXRlO1xuICB3ZWVrTnVtYmVyczogc3RyaW5nW107XG4gIHdlZWtkYXlzOiBzdHJpbmdbXTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gbW9udGhzIGNhbGVuZGFyXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIGV4dGVuZHMgTmF2aWdhdGlvblZpZXdNb2RlbCB7XG4gIG1vbnRoczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8geWVhcnMgY2FsZW5kYXJcbmV4cG9ydCBpbnRlcmZhY2UgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICB5ZWFyczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuXG4vLyBtYXRoIG1vZGVsXG4vKiogKioqKioqKioqKioqKioqICovXG5cbi8vIGRheXMgRGF0ZSdzIGFycmF5XG5leHBvcnQgaW50ZXJmYWNlIERheXNDYWxlbmRhck1vZGVsIHtcbiAgZGF5c01hdHJpeDogRGF0ZVtdW107XG4gIG1vbnRoOiBEYXRlO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBzb21lIGZ1bmMgb3B0aW9uc1xuZXhwb3J0IGludGVyZmFjZSBNb250aFZpZXdPcHRpb25zIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgZmlyc3REYXlPZldlZWs/OiBudW1iZXI7XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIHJlbmRlcmluZyBvcHRpb25zXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcblxuICBkYXlMYWJlbDogc3RyaW5nO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHllYXJMYWJlbDogc3RyaW5nO1xuXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMge1xuICBzaG93V2Vla051bWJlcnM/OiBib29sZWFuO1xuICBkaXNwbGF5TW9udGhzPzogbnVtYmVyO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBldmVudHNcbi8qKiAqKioqKioqKioqKioqKiogKi9cbmV4cG9ydCBlbnVtIEJzTmF2aWdhdGlvbkRpcmVjdGlvbiB7XG4gIFVQLFxuICBET1dOXG59XG5cbi8vIHVzZWQgZm9yIG5hdmlnYXRpb24gZXZlbnRzLCB0byBjaGFuZ2UgdmlldyBkYXRlIGluIHN0YXRlXG5leHBvcnQgaW50ZXJmYWNlIEJzTmF2aWdhdGlvbkV2ZW50IHtcbiAgZGlyZWN0aW9uPzogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uO1xuICBzdGVwPzogVGltZVVuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnNWaWV3TmF2aWdhdGlvbkV2ZW50IHtcbiAgdW5pdD86IFRpbWVVbml0O1xuICB2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbEhvdmVyRXZlbnQge1xuICBjZWxsOiBDYWxlbmRhckNlbGxWaWV3TW9kZWw7XG4gIGlzSG92ZXJlZDogYm9vbGVhbjtcbn1cbiJdfQ==