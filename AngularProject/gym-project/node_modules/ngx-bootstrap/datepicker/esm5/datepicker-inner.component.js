/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateFormatter } from './date-formatter';
var DatePickerInnerComponent = /** @class */ (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
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
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes["activeDate"]);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = /**
     * @param {?} activeDate
     * @return {?}
     */
    function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            var /** @type {?} */ previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setCompareHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compare = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.dateFilter = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isActive = /**
     * @param {?} dateObject
     * @return {?}
     */
    function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.createDateObject = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    DatePickerInnerComponent.prototype.split = /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    function (arr, size) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.fixTimeZone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    DatePickerInnerComponent.prototype.select = /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.move = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    /**
     * @param {?} _direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.toggleMode = /**
     * @param {?} _direction
     * @return {?}
     */
    function (_direction) {
        var /** @type {?} */ direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.getCustomClassForDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var /** @type {?} */ customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compareDateDisabled = /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        var /** @type {?} */ isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DatePickerInnerComponent.propDecorators = {
        "locale": [{ type: Input },],
        "datepickerMode": [{ type: Input },],
        "startingDay": [{ type: Input },],
        "yearRange": [{ type: Input },],
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
        "onlyCurrentMonth": [{ type: Input },],
        "shortcutPropagation": [{ type: Input },],
        "customClass": [{ type: Input },],
        "monthColLimit": [{ type: Input },],
        "yearColLimit": [{ type: Input },],
        "dateDisabled": [{ type: Input },],
        "dayDisabled": [{ type: Input },],
        "initDate": [{ type: Input },],
        "selectionDone": [{ type: Output },],
        "update": [{ type: Output },],
        "activeDateChange": [{ type: Output },],
        "activeDate": [{ type: Input },],
    };
    return DatePickerInnerComponent;
}());
export { DatePickerInnerComponent };
function DatePickerInnerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DatePickerInnerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DatePickerInnerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DatePickerInnerComponent.propDecorators;
    /** @type {?} */
    DatePickerInnerComponent.prototype.locale;
    /** @type {?} */
    DatePickerInnerComponent.prototype.datepickerMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.startingDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearRange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.showWeeks;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayHeader;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonthTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.onlyCurrentMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.shortcutPropagation;
    /** @type {?} */
    DatePickerInnerComponent.prototype.customClass;
    /** @type {?} */
    DatePickerInnerComponent.prototype.monthColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dateDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.initDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.selectionDone;
    /** @type {?} */
    DatePickerInnerComponent.prototype.update;
    /** @type {?} */
    DatePickerInnerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.uniqueId;
    /** @type {?} */
    DatePickerInnerComponent.prototype.modes;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dateFormatter;
    /** @type {?} */
    DatePickerInnerComponent.prototype._activeDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.selectedDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.activeDateId;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs2QkFzQ0QsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDO3NCQUN4QyxJQUFJLFlBQVksQ0FBTyxLQUFLLENBQUM7Z0NBQ25CLElBQUksWUFBWSxDQUFPLFNBQVMsQ0FBQzs7dUJBR25FLEVBQUU7O3lCQUVBLEVBQUU7O3dCQUVILEVBQUU7cUJBSVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs2QkFDWCxJQUFJLGFBQWEsRUFBRTs7MEJBYXhELGdEQUFVOzs7OztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7UUFHMUIsVUFBZSxLQUFXO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7O0lBRUQsMkNBQTJDOzs7O0lBQzNDLDJDQUFROzs7SUFBUjs7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFJLGlCQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBRyxDQUFDO1FBRXBFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FB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LENBQUM7U0FDaEQ7UUFFRCxNQUFNLENBQUMsQ0FDTCxjQUFjO1lBQ2QsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDdkQsQ0FBQztLQUNIOztnQkFyWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx3TkFLVDtpQkFDRjs7OzsyQkFFRSxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUVMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztvQ0FDTCxLQUFLO21DQUNMLEtBQUs7cUNBQ0wsS0FBSztxQ0FDTCxLQUFLO3dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7a0NBRUwsTUFBTTsyQkFDTixNQUFNO3FDQUNOLE1BQU07K0JBd0JOLEtBQUs7O21DQTNFUjs7U0F1QmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0mbHQ7ISZuZGFzaDtuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCImbmRhc2g7Jmd0Oy0tPlxuICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyTW9kZVwiIGNsYXNzPVwid2VsbCB3ZWxsLXNtIGJnLWZhZGVkIHAtYSBjYXJkXCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93V2Vla3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRNb250aDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXREYXlUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRNb250aFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgeWVhckNvbExpbWl0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xuICBASW5wdXQoKSBkYXlEaXNhYmxlZDogbnVtYmVyW107XG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG4gIEBPdXRwdXQoKSB1cGRhdGU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oZmFsc2UpO1xuICBAT3V0cHV0KCkgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcERheTogYW55ID0ge307XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcE1vbnRoOiBhbnkgPSB7fTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwWWVhcjogYW55ID0ge307XG5cbiAgdW5pcXVlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgbW9kZXM6IHN0cmluZ1tdID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xuICBwcm90ZWN0ZWQgZGF0ZUZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlciA9IG5ldyBEYXRlRm9ybWF0dGVyKCk7XG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgcHJvdGVjdGVkIGFjdGl2ZURhdGVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJEYXk6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJEYXk6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJNb250aDogRnVuY3Rpb247XG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJZZWFyOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyWWVhcjogRnVuY3Rpb247XG5cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XG4gIH1cblxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBmb3JtYXR0ZXIgdmFsdWUgdG8gRGF0ZSBvYmplY3RcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gdG9kbzogdXNlIGRhdGUgZm9yIHVuaXF1ZSB2YWx1ZVxuICAgIHRoaXMudW5pcXVlSWQgPSAgYGRhdGVwaWNrZXItLSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApfWA7XG5cbiAgICBpZiAodGhpcy5pbml0RGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5pbml0RGF0ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzLnJlZnJlc2hWaWV3IHNob3VsZCBiZSBjYWxsZWQgaGVyZSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIG9uIHRoZSBmbHlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC12YXJpYWJsZVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIHRoaXMuY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGNoYW5nZXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBhY3RpdmVEYXRlIGhhcyBiZWVuIHVwZGF0ZSBhbmQgdGhlbiBlbWl0IHRoZSBhY3RpdmVEYXRlQ2hhbmdlIHdpdGggdGhlIG5ldyBkYXRlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChhY3RpdmVEYXRlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoYWN0aXZlRGF0ZSAmJiAhYWN0aXZlRGF0ZS5maXJzdENoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IGFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNWYWx1ZSAmJlxuICAgICAgICBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICBwcmV2aW91c1ZhbHVlLmdldFRpbWUoKSAhPT0gYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUuZ2V0VGltZSgpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDb21wYXJlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5ID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhciA9IGhhbmRsZXI7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGlmIChkYXRlMSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuXG4gIHNldFJlZnJlc2hWaWV3SGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhciA9IGhhbmRsZXI7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcikge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZGF0ZUZpbHRlcihkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXQoZGF0ZSwgZm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGlzQWN0aXZlKGRhdGVPYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbXBhcmUoZGF0ZU9iamVjdC5kYXRlLCB0aGlzLmFjdGl2ZURhdGUpID09PSAwKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGNyZWF0ZURhdGVPYmplY3QoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBkYXRlT2JqZWN0OiBhbnkgPSB7fTtcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSBuZXcgRGF0ZShcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgKTtcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGVPYmplY3QuZGF0ZSk7XG4gICAgZGF0ZU9iamVjdC5sYWJlbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBmb3JtYXQpO1xuICAgIGRhdGVPYmplY3Quc2VsZWN0ZWQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpID09PSAwO1xuICAgIGRhdGVPYmplY3QuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XG4gICAgZGF0ZU9iamVjdC5jdXJyZW50ID0gdGhpcy5jb21wYXJlKGRhdGUsIG5ldyBEYXRlKCkpID09PSAwO1xuICAgIGRhdGVPYmplY3QuY3VzdG9tQ2xhc3MgPSB0aGlzLmdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlT2JqZWN0LmRhdGUpO1xuXG4gICAgcmV0dXJuIGRhdGVPYmplY3Q7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHNwbGl0KGFycjogYW55W10sIHNpemU6IG51bWJlcik6IGFueVtdIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3QgYXJyYXlzOiBhbnlbXSA9IFtdO1xuICAgIHdoaWxlIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgYXJyYXlzLnB1c2goYXJyLnNwbGljZSgwLCBzaXplKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5cztcbiAgfVxuXG4gIC8vIEZpeCBhIGhhcmQtcmVwcm9kdWNpYmxlIGJ1ZyB3aXRoIHRpbWV6b25lc1xuICAvLyBUaGUgYnVnIGRlcGVuZHMgb24gT1MsIGJyb3dzZXIsIGN1cnJlbnQgdGltZXpvbmUgYW5kIGN1cnJlbnQgZGF0ZVxuICAvLyBpLmUuXG4gIC8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxNCwgMCwgMSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSxcbiAgLy8gZGF0ZS5nZXRIb3VycygpKTsgY2FuIHJlc3VsdCBpbiBcIjIwMTMgMTEgMzEgMjNcIiBiZWNhdXNlIG9mIHRoZSBidWcuXG4gIGZpeFRpbWVab25lKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblxuICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgaG91cnMgPT09IDIzID8gaG91cnMgKyAyIDogMFxuICAgICk7XG4gIH1cblxuICBzZWxlY3QoZGF0ZTogRGF0ZSwgaXNNYW51YWwgPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICBpZiAoaXNNYW51YWwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGlmIChpc01hbnVhbCkge1xuICAgICAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcbiAgICAgICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgLSAxXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgbW92ZShkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBsZXQgZXhwZWN0ZWRTdGVwOiBhbnk7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBEYXk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcE1vbnRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcFllYXI7XG4gICAgfVxuXG4gICAgaWYgKGV4cGVjdGVkU3RlcCkge1xuICAgICAgY29uc3QgeWVhciA9XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC55ZWFycyB8fCAwKTtcbiAgICAgIGNvbnN0IG1vbnRoID1cbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLm1vbnRocyB8fCAwKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcblxuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNb2RlKF9kaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IF9kaXJlY3Rpb24gfHwgMTtcblxuICAgIGlmIChcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1heE1vZGUgJiYgZGlyZWN0aW9uID09PSAxKSB8fFxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSAmJiBkaXJlY3Rpb24gPT09IC0xKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xuICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpICsgZGlyZWN0aW9uXG4gICAgXTtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvLyB0b2RvOiBidWlsZCBhIGhhc2ggb2YgY3VzdG9tIGNsYXNzZXMsIGl0IHdpbGwgd29yayBmYXN0ZXJcbiAgICBjb25zdCBjdXN0b21DbGFzc09iamVjdDoge1xuICAgICAgZGF0ZTogRGF0ZTtcbiAgICAgIG1vZGU6IHN0cmluZztcbiAgICAgIGNsYXp6OiBzdHJpbmc7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICB9ID0gdGhpcy5jdXN0b21DbGFzcy5maW5kKChjdXN0b21DbGFzczogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjdXN0b21DbGFzcy5kYXRlLnZhbHVlT2YoKSA9PT0gZGF0ZS52YWx1ZU9mKCkgJiZcbiAgICAgICAgY3VzdG9tQ2xhc3MubW9kZSA9PT0gdGhpcy5kYXRlcGlja2VyTW9kZVxuICAgICAgKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBjdXN0b21DbGFzc09iamVjdCA9PT0gdW5kZWZpbmVkID8gJycgOiBjdXN0b21DbGFzc09iamVjdC5jbGF6ejtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb21wYXJlRGF0ZURpc2FibGVkKFxuICAgIGRhdGUxRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0sXG4gICAgZGF0ZTI6IERhdGVcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICBsZXQgaXNEYXRlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5kYXRlRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0ZURpc2FibGVkLmZvckVhY2goXG4gICAgICAgIChkaXNhYmxlZERhdGU6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jb21wYXJlRGF0ZURpc2FibGVkKGRpc2FibGVkRGF0ZSwgZGF0ZSkgPT09IDApIHtcbiAgICAgICAgICAgIGlzRGF0ZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF5RGlzYWJsZWQpIHtcbiAgICAgIGlzRGF0ZURpc2FibGVkID1cbiAgICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcbiAgICAgICAgdGhpcy5kYXlEaXNhYmxlZC5pbmRleE9mKGRhdGUuZ2V0RGF5KCkpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzRGF0ZURpc2FibGVkIHx8XG4gICAgICAodGhpcy5taW5EYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1pbkRhdGUpIDwgMCkgfHxcbiAgICAgICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==