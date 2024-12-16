/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
export var /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        get: /**
         * currently active date
         * @return {?}
         */
        function () {
            return this._activeDate || this._now;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.configureOptions = /**
     * @return {?}
     */
    function () {
        Object.assign(this, this.config);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onUpdate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onSelectionDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDone.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onActiveDateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig, },
    ]; };
    DatePickerComponent.propDecorators = {
        "datepickerMode": [{ type: Input },],
        "initDate": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "minMode": [{ type: Input },],
        "maxMode": [{ type: Input },],
        "showWeeks": [{ type: Input },],
        "formatDay": [{ type: Input },],
        "formatMonth": [{ type: Input },],
        "formatYear": [{ type: Input },],
        "formatDayHeader": [{ type: Input },],
        "formatDayTitle": [{ type: Input },],
        "formatMonthTitle": [{ type: Input },],
        "startingDay": [{ type: Input },],
        "yearRange": [{ type: Input },],
        "onlyCurrentMonth": [{ type: Input },],
        "shortcutPropagation": [{ type: Input },],
        "monthColLimit": [{ type: Input },],
        "yearColLimit": [{ type: Input },],
        "customClass": [{ type: Input },],
        "dateDisabled": [{ type: Input },],
        "dayDisabled": [{ type: Input },],
        "activeDate": [{ type: Input },],
        "selectionDone": [{ type: Output },],
        "activeDateChange": [{ type: Output },],
        "_datePicker": [{ type: ViewChild, args: [DatePickerInnerComponent,] },],
    };
    return DatePickerComponent;
}());
export { DatePickerComponent };
function DatePickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DatePickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DatePickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DatePickerComponent.propDecorators;
    /**
     * sets datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.datepickerMode;
    /**
     * default date to show if `ng-model` value is not specified
     * @type {?}
     */
    DatePickerComponent.prototype.initDate;
    /**
     * oldest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.minDate;
    /**
     * latest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.maxDate;
    /**
     * set lower datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.minMode;
    /**
     * sets upper datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.maxMode;
    /**
     * if false week numbers will be hidden
     * @type {?}
     */
    DatePickerComponent.prototype.showWeeks;
    /**
     * format of day in month
     * @type {?}
     */
    DatePickerComponent.prototype.formatDay;
    /**
     * format of month in year
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonth;
    /**
     * format of year in year range
     * @type {?}
     */
    DatePickerComponent.prototype.formatYear;
    /**
     * format of day in week header
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayHeader;
    /**
     * format of title when selecting day
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayTitle;
    /**
     * format of title when selecting month
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonthTitle;
    /**
     * starting day of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.startingDay;
    /**
     * number of years displayed in year selection
     * @type {?}
     */
    DatePickerComponent.prototype.yearRange;
    /**
     * if true only dates from the currently displayed month will be shown
     * @type {?}
     */
    DatePickerComponent.prototype.onlyCurrentMonth;
    /**
     * if true shortcut`s event propagation will be disabled
     * @type {?}
     */
    DatePickerComponent.prototype.shortcutPropagation;
    /**
     * number of months displayed in a single row of month picker
     * @type {?}
     */
    DatePickerComponent.prototype.monthColLimit;
    /**
     * number of years displayed in a single row of year picker
     * @type {?}
     */
    DatePickerComponent.prototype.yearColLimit;
    /**
     * array of custom css classes to be applied to targeted dates
     * @type {?}
     */
    DatePickerComponent.prototype.customClass;
    /**
     * array of disabled dates
     * @type {?}
     */
    DatePickerComponent.prototype.dateDisabled;
    /**
     * disabled days of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerComponent.prototype.selectionDone;
    /**
     * callback to invoke when the activeDate is changed.
     * @type {?}
     */
    DatePickerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerComponent.prototype._datePicker;
    /** @type {?} */
    DatePickerComponent.prototype.onChange;
    /** @type {?} */
    DatePickerComponent.prototype.onTouched;
    /** @type {?} */
    DatePickerComponent.prototype.config;
    /** @type {?} */
    DatePickerComponent.prototype._now;
    /** @type {?} */
    DatePickerComponent.prototype._activeDate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLENBQUMscUJBQU0saUNBQWlDLEdBQWE7SUFDekQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOztJQXVIQSw2QkFBWSxNQUF3Qjs7Ozs4QkE1RVYsS0FBSzs7Ozt5QkFZVixJQUFJOzZCQTJDVyxJQUFJLFlBQVksQ0FBTyxTQUFTLENBQUM7Ozs7Z0NBSTlCLElBQUksWUFBWSxDQUNyRCxTQUFTLENBQ1Y7O3dCQU1lLFFBQVEsQ0FBQyxTQUFTOzt5QkFFakIsUUFBUSxDQUFDLFNBQVM7b0JBSVosSUFBSSxJQUFJLEVBQUU7UUFJL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7MEJBakNHLDJDQUFVOzs7Ozs7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7UUFHdkMsVUFBZSxLQUFXO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7Ozs7O0lBNkJELDhDQUFnQjs7O0lBQWhCO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELHNDQUFROzs7O0lBQVIsVUFBUyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7O0lBRUQsNkNBQWU7Ozs7SUFBZixVQUFnQixLQUFXO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7OztJQUVELGdEQUFrQjs7OztJQUFsQixVQUFtQixLQUFXO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7SUFDRCwyQkFBMkI7SUFDM0IscUNBQXFDOzs7OztJQUNyQyx3Q0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDO1NBQ1I7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRDLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBYztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Z0JBL0pGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGtuREFnQ1A7b0JBQ0gsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOzs7O2dCQTlDUSxnQkFBZ0I7OzttQ0FrRHRCLEtBQUs7NkJBRUwsS0FBSzs0QkFFTCxLQUFLOzRCQUVMLEtBQUs7NEJBRUwsS0FBSzs0QkFFTCxLQUFLOzhCQUVMLEtBQUs7OEJBRUwsS0FBSztnQ0FFTCxLQUFLOytCQUVMLEtBQUs7b0NBRUwsS0FBSzttQ0FFTCxLQUFLO3FDQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxLQUFLO3FDQUVMLEtBQUs7d0NBRUwsS0FBSztrQ0FFTCxLQUFLO2lDQUVMLEtBQUs7Z0NBRUwsS0FBSztpQ0FFTCxLQUFLO2dDQUVMLEtBQUs7K0JBR0wsS0FBSztrQ0FTTCxNQUFNO3FDQUlOLE1BQU07Z0NBS04sU0FBUyxTQUFDLHdCQUF3Qjs7OEJBNUhyQzs7U0EyRGEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGF0ZXBpY2tlci1pbm5lciBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwiY29uZmlnLmxvY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVwaWNrZXJNb2RlXT1cImRhdGVwaWNrZXJNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGVdPVwiaW5pdERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5Nb2RlXT1cIm1pbk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhNb2RlXT1cIm1heE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG93V2Vla3NdPVwic2hvd1dlZWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5XT1cImZvcm1hdERheVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoXT1cImZvcm1hdE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0WWVhcl09XCJmb3JtYXRZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5SGVhZGVyXT1cImZvcm1hdERheUhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheVRpdGxlXT1cImZvcm1hdERheVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhUaXRsZV09XCJmb3JtYXRNb250aFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXldPVwic3RhcnRpbmdEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwieWVhclJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VzdG9tQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRGlzYWJsZWRdPVwiZGF0ZURpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF5RGlzYWJsZWRdPVwiZGF5RGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtvbmx5Q3VycmVudE1vbnRoXT1cIm9ubHlDdXJyZW50TW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG9ydGN1dFByb3BhZ2F0aW9uXT1cInNob3J0Y3V0UHJvcGFnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIFttb250aENvbExpbWl0XT1cIm1vbnRoQ29sTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyQ29sTGltaXRdPVwieWVhckNvbExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uRG9uZSk9XCJvblNlbGVjdGlvbkRvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxkYXlwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9kYXlwaWNrZXI+XG4gICAgICA8bW9udGhwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cbiAgICAgIDx5ZWFycGlja2VyIHRhYmluZGV4PVwiMFwiPjwveWVhcnBpY2tlcj5cbiAgICA8L2RhdGVwaWNrZXItaW5uZXI+XG4gICAgYCxcbiAgcHJvdmlkZXJzOiBbREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogc2V0cyBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XG4gIC8qKiBkZWZhdWx0IGRhdGUgdG8gc2hvdyBpZiBgbmctbW9kZWxgIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQgKi9cbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XG4gIC8qKiAgb2xkZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKiogbGF0ZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKiogc2V0IGxvd2VyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xuICAvKiogc2V0cyB1cHBlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcbiAgLyoqIGlmIGZhbHNlIHdlZWsgbnVtYmVycyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBzaG93V2Vla3MgPSB0cnVlO1xuICAvKiogZm9ybWF0IG9mIGRheSBpbiBtb250aCAqL1xuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBtb250aCBpbiB5ZWFyICovXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgeWVhciBpbiB5ZWFyIHJhbmdlICovXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gd2VlayBoZWFkZXIgKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgZGF5ICovXG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgbW9udGggKi9cbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xuICAvKiogc3RhcnRpbmcgZGF5IG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiB5ZWFyIHNlbGVjdGlvbiAqL1xuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcbiAgLyoqIGlmIHRydWUgb25seSBkYXRlcyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgc2hvcnRjdXRgcyBldmVudCBwcm9wYWdhdGlvbiB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XG4gIC8qKiBudW1iZXIgb2YgbW9udGhzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgbW9udGggcGlja2VyICovXG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIHllYXIgcGlja2VyICovXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xuICAvKiogYXJyYXkgb2YgY3VzdG9tIGNzcyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgdG8gdGFyZ2V0ZWQgZGF0ZXMgKi9cbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcbiAgLyoqIGFycmF5IG9mIGRpc2FibGVkIGRhdGVzICovXG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xuICAvKiogZGlzYWJsZWQgZGF5cyBvZiB0aGUgd2VlayBmcm9tIDAtNiAoMD1TdW5kYXksIC4uLiwgNj1TYXR1cmRheSkgKi9cbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xuXG4gIC8qKiBjdXJyZW50bHkgYWN0aXZlIGRhdGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fbm93O1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuXG4gIC8qKiBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYWN0aXZlRGF0ZSBpcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KClcbiAgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudClcbiAgX2RhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnO1xuXG4gIHByb3RlY3RlZCBfbm93OiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZXZlbnQ7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gIH1cblxuICBvblNlbGVjdGlvbkRvbmUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkFjdGl2ZURhdGVDaGFuZ2UoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgLy8gdG9kbzogc3VwcG9ydCBudWxsIHZhbHVlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVQaWNrZXIuY29tcGFyZSh2YWx1ZSwgdGhpcy5fYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=