(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/chronos'), require('@angular/core'), require('@angular/forms'), require('ngx-bootstrap/utils'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', 'ngx-bootstrap/chronos', '@angular/core', '@angular/forms', 'ngx-bootstrap/utils', '@angular/common', 'rxjs', 'rxjs/operators', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}),global.chronos,global.ng.core,global.ng.forms,global.utils,global.ng.common,global.rxjs,global.rxjs.operators,global.miniNgrx,global.componentLoader,global.positioning));
}(this, (function (exports,chronos,core,forms,utils,common,rxjs,operators,miniNgrx,componentLoader,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateFormatter = (function () {
        function DateFormatter() {
        }
        /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
        DateFormatter.prototype.format = /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
            function (date, format, locale) {
                return chronos.formatDate(date, format, locale);
            };
        return DateFormatter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatePickerInnerComponent = (function () {
        function DatePickerInnerComponent() {
            this.selectionDone = new core.EventEmitter(undefined);
            this.update = new core.EventEmitter(false);
            this.activeDateChange = new core.EventEmitter(undefined);
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
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (isManual === void 0) {
                    isManual = true;
                }
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
            { type: core.Component, args: [{
                        selector: 'datepicker-inner',
                        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        DatePickerInnerComponent.propDecorators = {
            "locale": [{ type: core.Input },],
            "datepickerMode": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "update": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "activeDate": [{ type: core.Input },],
        };
        return DatePickerInnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerConfig = (function () {
        function DatepickerConfig() {
            this.locale = 'en';
            this.datepickerMode = 'day';
            this.startingDay = 0;
            this.yearRange = 20;
            this.minMode = 'day';
            this.maxMode = 'year';
            this.showWeeks = true;
            this.formatDay = 'DD';
            this.formatMonth = 'MMMM';
            this.formatYear = 'YYYY';
            this.formatDayHeader = 'dd';
            this.formatDayTitle = 'MMMM YYYY';
            this.formatMonthTitle = 'YYYY';
            this.onlyCurrentMonth = false;
            this.monthColLimit = 3;
            this.yearColLimit = 5;
            this.shortcutPropagation = false;
        }
        DatepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return DatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return DatePickerComponent; }),
        multi: true
    };
    var DatePickerComponent = (function () {
        function DatePickerComponent(config) {
            /**
             * sets datepicker mode, supports: `day`, `month`, `year`
             */
            this.datepickerMode = 'day';
            /**
             * if false week numbers will be hidden
             */
            this.showWeeks = true;
            this.selectionDone = new core.EventEmitter(undefined);
            /**
             * callback to invoke when the activeDate is changed.
             */
            this.activeDateChange = new core.EventEmitter(undefined);
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
             */ function () {
                return this._activeDate || this._now;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'datepicker',
                        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        DatePickerComponent.ctorParameters = function () {
            return [
                { type: DatepickerConfig, },
            ];
        };
        DatePickerComponent.propDecorators = {
            "datepickerMode": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "activeDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "_datePicker": [{ type: core.ViewChild, args: [DatePickerInnerComponent,] },],
        };
        return DatePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DayPickerComponent = (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /*protected getDaysInMonth(year:number, month:number) {
         return ((month === 1) && (year % 4 === 0) &&
         ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
         }*/
        /**
         * @return {?}
         */
        DayPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepDay = { months: 1 };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ year = this.activeDate.getFullYear();
                    var /** @type {?} */ month = this.activeDate.getMonth();
                    var /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
                    var /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
                    var /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
                    var /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
                    if (numDisplayedFromPreviousMonth > 0) {
                        firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                    }
                    // 42 is the number of days on a six-week calendar
                    var /** @type {?} */ _days = self.getDates(firstDate, 42);
                    var /** @type {?} */ days = [];
                    for (var /** @type {?} */ i = 0; i < 42; i++) {
                        var /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                        _dateObject.secondary = _days[i].getMonth() !== month;
                        _dateObject.uid = this.uniqueId + '-' + i;
                        days[i] = _dateObject;
                    }
                    self.labels = [];
                    for (var /** @type {?} */ j = 0; j < 7; j++) {
                        self.labels[j] = {};
                        self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                        self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
                    }
                    self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
                    self.rows = this.split(days, 7);
                    if (this.showWeeks) {
                        self.weekNumbers = [];
                        var /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                        var /** @type {?} */ numWeeks = self.rows.length;
                        for (var /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                            self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                        }
                    }
                }, 'day');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
                    var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
                    return d1.getTime() - d2.getTime();
                }, 'day');
                this.datePicker.refreshView();
            };
        /**
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
        DayPickerComponent.prototype.getDates = /**
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
            function (startDate, n) {
                var /** @type {?} */ dates = new Array(n);
                var /** @type {?} */ current = new Date(startDate.getTime());
                var /** @type {?} */ i = 0;
                var /** @type {?} */ date;
                while (i < n) {
                    date = new Date(current.getTime());
                    date = this.datePicker.fixTimeZone(date);
                    dates[i++] = date;
                    current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                }
                return dates;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DayPickerComponent.prototype.getISO8601WeekNumber = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ checkDate = new Date(date.getTime());
                // Thursday
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
                var /** @type {?} */ time = checkDate.getTime();
                // Compare with Jan 1
                checkDate.setMonth(0);
                checkDate.setDate(1);
                return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
            };
        DayPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'daypicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        DayPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return DayPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthPickerComponent = (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MonthPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepMonth = { years: 1 };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ months = new Array(12);
                    var /** @type {?} */ year = this.activeDate.getFullYear();
                    var /** @type {?} */ date;
                    for (var /** @type {?} */ i = 0; i < 12; i++) {
                        date = new Date(year, i, 1);
                        date = this.fixTimeZone(date);
                        months[i] = this.createDateObject(date, this.formatMonth);
                        months[i].uid = this.uniqueId + '-' + i;
                    }
                    self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
                    self.rows = this.split(months, self.datePicker.monthColLimit);
                }, 'month');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth());
                    var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth());
                    return d1.getTime() - d2.getTime();
                }, 'month');
                this.datePicker.refreshView();
            };
        MonthPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'monthpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        MonthPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return MonthPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var YearPickerComponent = (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YearPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepYear = { years: this.datePicker.yearRange };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ years = new Array(this.yearRange);
                    var /** @type {?} */ date;
                    var /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
                    for (var /** @type {?} */ i = 0; i < this.yearRange; i++) {
                        date = new Date(start + i, 0, 1);
                        date = this.fixTimeZone(date);
                        years[i] = this.createDateObject(date, this.formatYear);
                        years[i].uid = this.uniqueId + '-' + i;
                    }
                    self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
                    self.rows = this.split(years, self.datePicker.yearColLimit);
                }, 'year');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    return date1.getFullYear() - date2.getFullYear();
                }, 'year');
                this.datePicker.refreshView();
            };
        /**
         * @param {?} year
         * @return {?}
         */
        YearPickerComponent.prototype.getStartingYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                // todo: parseInt
                return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
            };
        YearPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'yearpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        YearPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return YearPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerModule = (function () {
        function DatepickerModule() {
        }
        /**
         * @return {?}
         */
        DatepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
            };
        DatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        declarations: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        exports: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        entryComponents: [DatePickerComponent]
                    },] }
        ];
        return DatepickerModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ BsDatepickerAbstractComponent = (function () {
        function BsDatepickerAbstractComponent() {
            this._customRangesFish = [];
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMinDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMaxDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.setViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
            function (day) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype._stopPropagation = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
            };
        return BsDatepickerAbstractComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = (function () {
        function BsDatepickerConfig() {
            /**
             * CSS class which will be applied to datepicker container,
             * usually used to set color theme
             */
            this.containerClass = 'theme-green';
            // DatepickerRenderOptions
            this.displayMonths = 1;
            /**
             * Allows to hide week numbers in datepicker
             */
            this.showWeekNumbers = true;
            this.dateInputFormat = 'L';
            // range picker
            this.rangeSeparator = ' - ';
            /**
             * Date format for date range input field
             */
            this.rangeInputFormat = 'L';
            // DatepickerFormatOptions
            this.monthTitle = 'MMMM';
            this.yearTitle = 'YYYY';
            this.dayLabel = 'D';
            this.monthLabel = 'MMMM';
            this.yearLabel = 'YYYY';
            this.weekNumbers = 'w';
        }
        BsDatepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerActions = (function () {
        function BsDatepickerActions() {
        }
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.calculate = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.CALCULATE };
            };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.format = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.FORMAT };
            };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.flag = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.FLAG };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.select = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SELECT,
                    payload: date
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.CHANGE_VIEWMODE,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.NAVIGATE_TO,
                    payload: event
                };
            };
        /**
         * @param {?} step
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateStep = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                return {
                    type: BsDatepickerActions.NAVIGATE_OFFSET,
                    payload: step
                };
            };
        /**
         * @param {?} options
         * @return {?}
         */
        BsDatepickerActions.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return {
                    type: BsDatepickerActions.SET_OPTIONS,
                    payload: options
                };
            };
        // date range picker
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.selectRange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: BsDatepickerActions.SELECT_RANGE,
                    payload: value
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.hoverDay = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.HOVER,
                    payload: event.isHovered ? event.cell.date : null
                };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.minDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SET_MIN_DATE,
                    payload: date
                };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.maxDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SET_MAX_DATE,
                    payload: date
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.isDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: BsDatepickerActions.SET_IS_DISABLED,
                    payload: value
                };
            };
        /**
         * @param {?} locale
         * @return {?}
         */
        BsDatepickerActions.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                return {
                    type: BsDatepickerActions.SET_LOCALE,
                    payload: locale
                };
            };
        BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
        BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
        BsDatepickerActions.FLAG = '[datepicker] set flags';
        BsDatepickerActions.SELECT = '[datepicker] select date';
        BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
        BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
        BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
        BsDatepickerActions.HOVER = '[datepicker] hover date';
        BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
        BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
        BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
        BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
        BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
        BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
        BsDatepickerActions.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerActions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsLocaleService = (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: /**
             * @return {?}
             */ function () {
                return this._localeChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale.getValue();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} locale
         * @return {?}
         */
        BsLocaleService.prototype.use = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                if (locale === this.currentLocale) {
                    return;
                }
                this._locale.next(locale);
            };
        BsLocaleService.decorators = [
            { type: core.Injectable }
        ];
        return BsLocaleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerEffects = (function () {
        function BsDatepickerEffects(_actions, _localeService) {
            this._actions = _actions;
            this._localeService = _localeService;
            this._subs = [];
        }
        /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
        BsDatepickerEffects.prototype.init = /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
            function (_bsDatepickerStore) {
                this._store = _bsDatepickerStore;
                return this;
            };
        /** setters */
        /**
         * setters
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setValue = /**
         * setters
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.select(value));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setRangeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.selectRange(value));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMinDate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.minDate(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMaxDate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.maxDate(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.isDisabled(value));
                return this;
            };
        /* Set rendering options */
        /**
         * @param {?} _config
         * @return {?}
         */
        BsDatepickerEffects.prototype.setOptions = /**
         * @param {?} _config
         * @return {?}
         */
            function (_config) {
                var /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
                this._store.dispatch(this._actions.setOptions(_options));
                return this;
            };
        /** view to mode bindings */
        /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setBindings = /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
            function (container) {
                container.daysCalendar = this._store
                    .select(function (state) { return state.flaggedMonths; })
                    .pipe(operators.filter(function (months) { return !!months; }));
                // month calendar
                container.monthsCalendar = this._store
                    .select(function (state) { return state.flaggedMonthsCalendar; })
                    .pipe(operators.filter(function (months) { return !!months; }));
                // year calendar
                container.yearsCalendar = this._store
                    .select(function (state) { return state.yearsCalendarFlagged; })
                    .pipe(operators.filter(function (years) { return !!years; }));
                container.viewMode = this._store.select(function (state) { return state.view.mode; });
                container.options = this._store
                    .select(function (state) { return state.showWeekNumbers; })
                    .pipe(operators.map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
                return this;
            };
        /** event handlers */
        /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setEventHandlers = /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
            function (container) {
                var _this = this;
                container.setViewMode = function (event) {
                    _this._store.dispatch(_this._actions.changeViewMode(event));
                };
                container.navigateTo = function (event) {
                    _this._store.dispatch(_this._actions.navigateStep(event.step));
                };
                container.dayHoverHandler = function (event) {
                    var /** @type {?} */ _cell = (event.cell);
                    if (_cell.isOtherMonth || _cell.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.hoverDay(event));
                    _cell.isHovered = event.isHovered;
                };
                container.monthHoverHandler = function (event) {
                    event.cell.isHovered = event.isHovered;
                };
                container.yearHoverHandler = function (event) {
                    event.cell.isHovered = event.isHovered;
                };
                /** select handlers */
                // container.daySelectHandler = (day: DayViewModel): void => {
                //   if (day.isOtherMonth || day.isDisabled) {
                //     return;
                //   }
                //   this._store.dispatch(this._actions.select(day.date));
                // };
                container.monthSelectHandler = function (event) {
                    if (event.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.navigateTo({
                        unit: { month: chronos.getMonth(event.date) },
                        viewMode: 'day'
                    }));
                };
                container.yearSelectHandler = function (event) {
                    if (event.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.navigateTo({
                        unit: { year: chronos.getFullYear(event.date) },
                        viewMode: 'month'
                    }));
                };
                return this;
            };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
                    _this._store.dispatch(_this._actions.calculate());
                }));
                // format calendar values on month model change
                this._subs.push(this._store
                    .select(function (state) { return state.monthsModel; })
                    .pipe(operators.filter(function (monthModel) { return !!monthModel; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.formattedMonths; })
                    .pipe(operators.filter(function (month) { return !!month; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.selectedDate; })
                    .pipe(operators.filter(function (selectedDate) { return !!selectedDate; }))
                    .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag for date range picker
                this._subs.push(this._store
                    .select(function (state) { return state.selectedRange; })
                    .pipe(operators.filter(function (selectedRange) { return !!selectedRange; }))
                    .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
                // monthsCalendar
                this._subs.push(this._store
                    .select(function (state) { return state.monthsCalendar; })
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // years calendar
                this._subs.push(this._store
                    .select(function (state) { return state.yearsCalendarModel; })
                    .pipe(operators.filter(function (state) { return !!state; }))
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // on hover
                this._subs.push(this._store
                    .select(function (state) { return state.hoveredDate; })
                    .pipe(operators.filter(function (hoveredDate) { return !!hoveredDate; }))
                    .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
                // on locale change
                this._subs.push(this._localeService.localeChange
                    .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
                return this;
            };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.destroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        BsDatepickerEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerEffects.ctorParameters = function () {
            return [
                { type: BsDatepickerActions, },
                { type: BsLocaleService, },
            ];
        };
        return BsDatepickerEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultMonthOptions = {
        width: 7,
        height: 6
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
    var /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
        locale: 'en',
        view: _initialView,
        selectedRange: [],
        monthViewOptions: defaultMonthOptions
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    function getStartingDayOfCalendar(date, options) {
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        var /** @type {?} */ weekDay = chronos.getDay(date);
        var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
    }
    /**
     * @param {?} weekday
     * @param {?} startingDayOffset
     * @return {?}
     */
    function calculateDateOffset(weekday, startingDayOffset) {
        if (startingDayOffset === 0) {
            return weekday;
        }
        var /** @type {?} */ offset = weekday - startingDayOffset % 7;
        return offset < 0 ? offset + 7 : offset;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isMonthDisabled(date, min, max) {
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isYearDisabled(date, min, max) {
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
        return minBound || maxBound;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} options
     * @param {?} fn
     * @return {?}
     */
    function createMatrix(options, fn) {
        var /** @type {?} */ prevValue = options.initialDate;
        var /** @type {?} */ matrix = new Array(options.height);
        for (var /** @type {?} */ i = 0; i < options.height; i++) {
            matrix[i] = new Array(options.width);
            for (var /** @type {?} */ j = 0; j < options.width; j++) {
                matrix[i][j] = fn(prevValue);
                prevValue = chronos.shiftDate(prevValue, options.shift);
            }
        }
        return matrix;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} startingDate
     * @param {?} options
     * @return {?}
     */
    function calcDaysCalendar(startingDate, options) {
        var /** @type {?} */ firstDay = chronos.getFirstDayOfMonth(startingDate);
        var /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
        var /** @type {?} */ matrixOptions = {
            width: options.width,
            height: options.height,
            initialDate: initialDate,
            shift: { day: 1 }
        };
        var /** @type {?} */ daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
        return {
            daysMatrix: daysMatrix,
            month: firstDay
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} daysCalendar
     * @param {?} formatOptions
     * @param {?} monthIndex
     * @return {?}
     */
    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
        return {
            month: daysCalendar.month,
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
                return ({
                    days: week.map(function (date, dayIndex) {
                        return ({
                            date: date,
                            label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
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
    function getWeekNumbers(daysMatrix, format, locale) {
        return daysMatrix.map(function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); });
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    function getShiftedWeekdays(locale) {
        var /** @type {?} */ _locale = chronos.getLocale(locale);
        var /** @type {?} */ weekdays = (_locale.weekdaysShort());
        var /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
        return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} formattedMonth
     * @param {?} options
     * @return {?}
     */
    function flagDaysCalendar(formattedMonth, options) {
        formattedMonth.weeks.forEach(function (week, weekIndex) {
            week.days.forEach(function (day, dayIndex) {
                // datepicker
                var /** @type {?} */ isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                var /** @type {?} */ isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                var /** @type {?} */ isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                var /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                var /** @type {?} */ isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                var /** @type {?} */ isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day');
                // decide update or not
                var /** @type {?} */ newDay = Object.assign({}, day, {
                    isOtherMonth: isOtherMonth,
                    isHovered: isHovered,
                    isSelected: isSelected,
                    isSelectionStart: isSelectionStart,
                    isSelectionEnd: isSelectionEnd,
                    isInRange: isInRange,
                    isDisabled: isDisabled
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
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} mode
     * @return {?}
     */
    function canSwitchMode(mode) {
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ height = 4;
    var /** @type {?} */ width = 3;
    var /** @type {?} */ shift = { month: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */
    function formatMonthsCalendar(viewDate, formatOptions) {
        var /** @type {?} */ initialDate = chronos.startOf(viewDate, 'year');
        var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
            });
        });
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} monthCalendar
     * @param {?} options
     * @return {?}
     */
    function flagMonthsCalendar(monthCalendar, options) {
        monthCalendar.months.forEach(function (months, rowIndex) {
            months.forEach(function (month, monthIndex) {
                var /** @type {?} */ isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    isMonthDisabled(month.date, options.minDate, options.maxDate);
                var /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                    isHovered: isHovered,
                    isDisabled: isDisabled
                });
                if (month.isHovered !== newMonth.isHovered ||
                    month.isDisabled !== newMonth.isDisabled) {
                    monthCalendar.months[rowIndex][monthIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        monthCalendar.hideLeftArrow =
            options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
        monthCalendar.hideRightArrow =
            options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths;
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
        return monthCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ height$1 = 4;
    var /** @type {?} */ width$1 = 4;
    var /** @type {?} */ yearsPerCalendar = height$1 * width$1;
    var /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    var /** @type {?} */ shift$1 = { year: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */
    function formatYearsCalendar(viewDate, formatOptions) {
        var /** @type {?} */ initialDate = chronos.shiftDate(viewDate, { year: initialShift });
        var /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
            });
        });
        var /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
        return {
            years: yearsMatrix,
            monthTitle: '',
            yearTitle: yearTitle
        };
    }
    /**
     * @param {?} yearsMatrix
     * @param {?} formatOptions
     * @return {?}
     */
    function formatYearRangeTitle(yearsMatrix, formatOptions) {
        var /** @type {?} */ from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        var /** @type {?} */ to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
        return from + " - " + to;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} yearsCalendar
     * @param {?} options
     * @return {?}
     */
    function flagYearsCalendar(yearsCalendar, options) {
        yearsCalendar.years.forEach(function (years, rowIndex) {
            years.forEach(function (year, yearIndex) {
                var /** @type {?} */ isHovered = chronos.isSameYear(year.date, options.hoveredYear);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    isYearDisabled(year.date, options.minDate, options.maxDate);
                var /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
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
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        var /** @type {?} */ i = yearsCalendar.years.length - 1;
        var /** @type {?} */ j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
        return yearsCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function bsDatepickerReducer(state, action) {
        if (state === void 0) {
            state = initialDatepickerState;
        }
        switch (action.type) {
            case BsDatepickerActions.CALCULATE: {
                return calculateReducer(state);
            }
            case BsDatepickerActions.FORMAT: {
                return formatReducer(state, action);
            }
            case BsDatepickerActions.FLAG: {
                return flagReducer(state, action);
            }
            case BsDatepickerActions.NAVIGATE_OFFSET: {
                var /** @type {?} */ date = chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
                var /** @type {?} */ newState = {
                    view: {
                        mode: state.view.mode,
                        date: date
                    }
                };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.NAVIGATE_TO: {
                var /** @type {?} */ payload = action.payload;
                var /** @type {?} */ date = chronos.setFullDate(state.view.date, payload.unit);
                var /** @type {?} */ mode = payload.viewMode;
                var /** @type {?} */ newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.CHANGE_VIEWMODE: {
                if (!canSwitchMode(action.payload)) ;
                var /** @type {?} */ date = state.view.date;
                var /** @type {?} */ mode = action.payload;
                var /** @type {?} */ newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.HOVER: {
                return Object.assign({}, state, { hoveredDate: action.payload });
            }
            case BsDatepickerActions.SELECT: {
                var /** @type {?} */ newState = {
                    selectedDate: action.payload,
                    view: state.view
                };
                var /** @type {?} */ mode = state.view.mode;
                var /** @type {?} */ _date = action.payload || state.view.date;
                var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_OPTIONS: {
                var /** @type {?} */ newState = action.payload;
                // preserve view mode
                var /** @type {?} */ mode = state.view.mode;
                var /** @type {?} */ _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                var /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
                        newState.selectedRange = newState.value;
                    }
                    // if new value is a date -> datepicker
                    if (newState.value instanceof Date) {
                        newState.selectedDate = newState.value;
                    }
                    // provided value is not supported :)
                    // need to report it somehow
                }
                return Object.assign({}, state, newState);
            }
            // date range picker
            case BsDatepickerActions.SELECT_RANGE: {
                var /** @type {?} */ newState = {
                    selectedRange: action.payload,
                    view: state.view
                };
                var /** @type {?} */ mode = state.view.mode;
                var /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
                var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_MIN_DATE: {
                return Object.assign({}, state, {
                    minDate: action.payload
                });
            }
            case BsDatepickerActions.SET_MAX_DATE: {
                return Object.assign({}, state, {
                    maxDate: action.payload
                });
            }
            case BsDatepickerActions.SET_IS_DISABLED: {
                return Object.assign({}, state, {
                    isDisabled: action.payload
                });
            }
            default:
                return state;
        }
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function calculateReducer(state) {
        // how many calendars
        var /** @type {?} */ displayMonths = state.displayMonths;
        // use selected date on initial rendering if set
        var /** @type {?} */ viewDate = state.view.date;
        if (state.view.mode === 'day') {
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            var /** @type {?} */ monthsModel = new Array(displayMonths);
            for (var /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            var /** @type {?} */ monthsCalendar = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function formatReducer(state, action) {
        if (state.view.mode === 'day') {
            var /** @type {?} */ formattedMonths = state.monthsModel.map(function (month, monthIndex) {
                return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
            });
            return Object.assign({}, state, { formattedMonths: formattedMonths });
        }
        // how many calendars
        var /** @type {?} */ displayMonths = state.displayMonths;
        // check initial rendering
        // use selected date on initial rendering if set
        var /** @type {?} */ viewDate = state.view.date;
        if (state.view.mode === 'month') {
            var /** @type {?} */ monthsCalendar = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function flagReducer(state, action) {
        if (state.view.mode === 'day') {
            var /** @type {?} */ flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
                return flagDaysCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredDate: state.hoveredDate,
                    selectedDate: state.selectedDate,
                    selectedRange: state.selectedRange,
                    displayMonths: state.displayMonths,
                    monthIndex: monthIndex
                });
            });
            return Object.assign({}, state, { flaggedMonths: flaggedMonths });
        }
        if (state.view.mode === 'month') {
            var /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
                return flagMonthsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredMonth: state.hoveredMonth,
                    displayMonths: state.displayMonths,
                    monthIndex: monthIndex
                });
            });
            return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
                return flagYearsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredYear: state.hoveredYear,
                    displayMonths: state.displayMonths,
                    yearIndex: yearIndex
                });
            });
            return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
        }
        return state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function getFormatOptions(state) {
        return {
            locale: state.locale,
            monthTitle: state.monthTitle,
            yearTitle: state.yearTitle,
            dayLabel: state.dayLabel,
            monthLabel: state.monthLabel,
            yearLabel: state.yearLabel,
            weekNumbers: state.weekNumbers
        };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     * @param {?} viewDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function getViewDate(viewDate, minDate, maxDate) {
        var /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerStore = (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            var /** @type {?} */ _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            var /** @type {?} */ state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        BsDatepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerStore.ctorParameters = function () { return []; };
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerContainerComponent = (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._actions = _actions;
            _this.valueChange = new core.EventEmitter();
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.containerClass = this._config.containerClass;
                this._effects
                    .init(this._store)
                    .setOptions(this._config)
                    .setBindings(this)
                    .setEventHandlers(this)
                    .registerDatepickerSideEffects();
                // todo: move it somewhere else
                // on selected date change
                this._subs.push(this._store
                    .select(function (state) { return state.selectedDate; })
                    .subscribe(function (date) { return _this.valueChange.emit(date); }));
            };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                if (day.isOtherMonth || day.isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.select(day.date));
            };
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDatepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            '(click)': '_stopPropagation($event)',
                            style: 'position: absolute; display: block;',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        }
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
            ];
        };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDirective = (function () {
        function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close datepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the datepicker should be appended to.
             * Currently only supports "body".
             */
            this.container = 'body';
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the datepicker is currently being shown
             * @return {?}
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._datepicker.listen({
                    outsideClick: this.outsideClick,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                this.setConfig();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this._datepickerRef || !this._datepickerRef.instance) {
                    return;
                }
                if (changes["minDate"]) {
                    this._datepickerRef.instance.minDate = this.minDate;
                }
                if (changes["maxDate"]) {
                    this._datepickerRef.instance.maxDate = this.maxDate;
                }
                if (changes["isDisabled"]) {
                    this._datepickerRef.instance.isDisabled = this.isDisabled;
                }
            };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._datepicker.isShown) {
                    return;
                }
                this.setConfig();
                this._datepickerRef = this._datepicker
                    .provide({ provide: BsDatepickerConfig, useValue: this._config })
                    .attach(BsDatepickerContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({ placement: this.placement });
                // if date changes from external source (model -> view)
                this._subs.push(this.bsValueChange.subscribe(function (value) {
                    _this._datepickerRef.instance.value = value;
                }));
                // if date changes from picker (view -> model)
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._datepicker.hide();
                }
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDatepickerDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
            function () {
                this._config = Object.assign({}, this._config, this.bsConfig, {
                    value: this._bsValue,
                    isDisabled: this.isDisabled,
                    minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                    maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
                });
            };
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepicker.dispose();
            };
        BsDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDatepicker]',
                        exportAs: 'bsDatepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDatepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDatepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BsDatepickerInputDirective = (function () {
        function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            });
            // update input value on locale change
            this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            });
        }
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype._setInputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ initialDate = !value ? ''
                    : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* tslint:disable-next-line: no-any*/
                this.writeValue(((event.target)).value);
                this._onChange(this._value);
                this._onTouched();
            };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                var /** @type {?} */ _value = c.value;
                /* tslint:disable-next-line: prefer-switch */
                if (_value === null || _value === undefined || _value === '') {
                    return null;
                }
                if (chronos.isDate(_value)) {
                    var /** @type {?} */ _isDateValid = chronos.isDateValid(_value);
                    if (!_isDateValid) {
                        return { bsDate: { invalid: _value } };
                    }
                    if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                        return { bsDate: { minDate: this._picker.minDate } };
                    }
                    if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
                        return { bsDate: { maxDate: this._picker.maxDate } };
                    }
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!value) {
                    this._value = null;
                }
                else {
                    var /** @type {?} */ _localeKey = this._localeService.currentLocale;
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
                    if (!_locale) {
                        throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                    }
                    this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                }
                this._picker.bsValue = this._value;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._picker.isDisabled = isDisabled;
                if (isDisabled) {
                    this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                this._picker.hide();
            };
        BsDatepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDatepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDatepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerConfig = (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        BsDaterangepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerContainerComponent = (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._actions = _actions;
            _this.valueChange = new core.EventEmitter();
            _this._rangeStack = [];
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setRangeValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.containerClass = this._config.containerClass;
                this._effects
                    .init(this._store)
                    .setOptions(this._config)
                    .setBindings(this)
                    .setEventHandlers(this)
                    .registerDatepickerSideEffects();
                // todo: move it somewhere else
                // on selected date change
                this._subs.push(this._store
                    .select(function (state) { return state.selectedRange; })
                    .subscribe(function (date) { return _this.valueChange.emit(date); }));
            };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                if (day.isOtherMonth || day.isDisabled) {
                    return;
                }
                // if only one date is already selected
                // and user clicks on previous date
                // start selection from new date
                // but if new date is after initial one
                // than finish selection
                if (this._rangeStack.length === 1) {
                    this._rangeStack =
                        day.date >= this._rangeStack[0]
                            ? [this._rangeStack[0], day.date]
                            : [day.date];
                }
                if (this._rangeStack.length === 0) {
                    this._rangeStack = [day.date];
                }
                this._store.dispatch(this._actions.selectRange(this._rangeStack));
                if (this._rangeStack.length === 2) {
                    this._rangeStack = [];
                }
            };
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDaterangepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-daterangepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            '(click)': '_stopPropagation($event)',
                            style: 'position: absolute; display: block;',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        }
                    }] }
        ];
        /** @nocollapse */
        BsDaterangepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
            ];
        };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerDirective = (function () {
        function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close daterangepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the daterangepicker should be appended
             * to. Currently only supports "body".
             */
            this.container = 'body';
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            Object.assign(this, _config);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the daterangepicker is currently being shown
             * @return {?}
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
            set: /**
             * Initial value of daterangepicker
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._datepicker.listen({
                    outsideClick: this.outsideClick,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                this.setConfig();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this._datepickerRef || !this._datepickerRef.instance) {
                    return;
                }
                if (changes["minDate"]) {
                    this._datepickerRef.instance.minDate = this.minDate;
                }
                if (changes["maxDate"]) {
                    this._datepickerRef.instance.maxDate = this.maxDate;
                }
                if (changes["isDisabled"]) {
                    this._datepickerRef.instance.isDisabled = this.isDisabled;
                }
            };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._datepicker.isShown) {
                    return;
                }
                this.setConfig();
                this._datepickerRef = this._datepicker
                    .provide({ provide: BsDatepickerConfig, useValue: this._config })
                    .attach(BsDaterangepickerContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({ placement: this.placement });
                // if date changes from external source (model -> view)
                this._subs.push(this.bsValueChange.subscribe(function (value) {
                    _this._datepickerRef.instance.value = value;
                }));
                // if date changes from picker (view -> model)
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            };
        /**
         * Set config for daterangepicker
         */
        /**
         * Set config for daterangepicker
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.setConfig = /**
         * Set config for daterangepicker
         * @return {?}
         */
            function () {
                this._config = Object.assign({}, this._config, this.bsConfig, {
                    value: this._bsValue,
                    isDisabled: this.isDisabled,
                    minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                    maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
                });
            };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._datepicker.hide();
                }
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepicker.dispose();
            };
        BsDaterangepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDaterangepicker]',
                        exportAs: 'bsDaterangepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDaterangepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDaterangepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BsDaterangepickerInputDirective = (function () {
        function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            });
            // update input value on locale change
            this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            });
        }
        /**
         * @param {?} date
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype._setInputValue = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ range = '';
                if (date) {
                    var /** @type {?} */ start = !date[0] ? ''
                        : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                    var /** @type {?} */ end = !date[1] ? ''
                        : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                    range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
                }
                this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* tslint:disable-next-line: no-any*/
                this.writeValue(((event.target)).value);
                this._onChange(this._value);
                this._onTouched();
            };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                var /** @type {?} */ _value = c.value;
                if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                    return null;
                }
                var /** @type {?} */ _isDateValid = chronos.isDateValid(_value[0]) && chronos.isDateValid(_value[0]);
                if (!_isDateValid) {
                    return { bsDate: { invalid: _value } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
                    return { bsDate: { maxDate: this._picker.maxDate } };
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!value) {
                    this._value = null;
                }
                else {
                    var /** @type {?} */ _localeKey = this._localeService.currentLocale;
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
                    if (!_locale) {
                        throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                    }
                    var /** @type {?} */ _input = [];
                    if (typeof value === 'string') {
                        _input = value.split(this._picker._config.rangeSeparator);
                    }
                    if (Array.isArray(value)) {
                        _input = value;
                    }
                    this._value = ((_input))
                        .map(function (_val) {
                        return chronos.parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
                    })
                        .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
                }
                this._picker.bsValue = this._value;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._picker.isDisabled = isDisabled;
                if (isDisabled) {
                    this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                this._picker.hide();
            };
        BsDaterangepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDaterangepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDaterangepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCalendarLayoutComponent = (function () {
        function BsCalendarLayoutComponent() {
        }
        BsCalendarLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-calendar-layout',
                        template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                    }] }
        ];
        return BsCalendarLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCurrentDateViewComponent = (function () {
        function BsCurrentDateViewComponent() {
        }
        BsCurrentDateViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-current-date',
                        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                    }] }
        ];
        /** @nocollapse */
        BsCurrentDateViewComponent.propDecorators = {
            "title": [{ type: core.Input },],
        };
        return BsCurrentDateViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCustomDatesViewComponent = (function () {
        function BsCustomDatesViewComponent() {
        }
        BsCustomDatesViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-custom-date-view',
                        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BsCustomDatesViewComponent.propDecorators = {
            "isCustomRangeShown": [{ type: core.Input },],
            "ranges": [{ type: core.Input },],
        };
        return BsCustomDatesViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDayDecoratorComponent = (function () {
        function BsDatepickerDayDecoratorComponent() {
        }
        BsDatepickerDayDecoratorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bsDatepickerDayDecorator]',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.disabled]': 'day.isDisabled',
                            '[class.is-highlighted]': 'day.isHovered',
                            '[class.is-other-month]': 'day.isOtherMonth',
                            '[class.in-range]': 'day.isInRange',
                            '[class.select-start]': 'day.isSelectionStart',
                            '[class.select-end]': 'day.isSelectionEnd',
                            '[class.selected]': 'day.isSelected'
                        },
                        template: "{{ day.label }}"
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerDayDecoratorComponent.propDecorators = {
            "day": [{ type: core.Input },],
        };
        return BsDatepickerDayDecoratorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var BsNavigationDirection = {
        UP: 0,
        DOWN: 1,
    };
    BsNavigationDirection[BsNavigationDirection.UP] = "UP";
    BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerNavigationViewComponent = (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
        }
        /**
         * @param {?} down
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.navTo = /**
         * @param {?} down
         * @return {?}
         */
            function (down) {
                this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
            };
        /**
         * @param {?} viewMode
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.view = /**
         * @param {?} viewMode
         * @return {?}
         */
            function (viewMode) {
                this.onViewMode.emit(viewMode);
            };
        BsDatepickerNavigationViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-navigation-view',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerNavigationViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
        };
        return BsDatepickerNavigationViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaysCalendarViewComponent = (function () {
        function BsDaysCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { month: step } });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.selectDay = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onSelect.emit(event);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.hoverDay = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        BsDaysCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-days-calendar-view',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" *ngIf=\"options.showWeekNumbers\">\n            <span>{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDaysCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsDaysCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsMonthCalendarViewComponent = (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { year: step } });
            };
        /**
         * @param {?} month
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.viewMonth = /**
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this.onSelect.emit(month);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.hoverMonth = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        BsMonthCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-month-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsMonthCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsMonthCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsTimepickerViewComponent = (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        BsTimepickerViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-timepicker',
                        template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                    }] }
        ];
        return BsTimepickerViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsYearsCalendarViewComponent = (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
            };
        /**
         * @param {?} year
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.viewYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this.onSelect.emit(year);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.hoverYear = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        BsYearsCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-years-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsYearsCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsYearsCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _exports = [
        BsDatepickerContainerComponent,
        BsDaterangepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerInputDirective,
        BsDaterangepickerDirective
    ];
    var BsDatepickerModule = (function () {
        function BsDatepickerModule() {
            utils.warnOnce("BsDatepickerModule is under development,\n      BREAKING CHANGES are possible,\n      PLEASE, read changelog");
        }
        /**
         * @return {?}
         */
        BsDatepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BsDatepickerModule,
                    providers: [
                        componentLoader.ComponentLoaderFactory,
                        positioning.PositioningService,
                        BsDatepickerStore,
                        BsDatepickerActions,
                        BsDatepickerConfig,
                        BsDaterangepickerConfig,
                        BsDatepickerEffects,
                        BsLocaleService
                    ]
                };
            };
        BsDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: __spread([
                            BsDatepickerDayDecoratorComponent,
                            BsCurrentDateViewComponent,
                            BsDatepickerNavigationViewComponent,
                            BsTimepickerViewComponent,
                            BsCalendarLayoutComponent,
                            BsDaysCalendarViewComponent,
                            BsMonthCalendarViewComponent,
                            BsYearsCalendarViewComponent,
                            BsCustomDatesViewComponent
                        ], _exports),
                        entryComponents: [
                            BsDatepickerContainerComponent,
                            BsDaterangepickerContainerComponent
                        ],
                        exports: _exports
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerModule.ctorParameters = function () { return []; };
        return BsDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.DatePickerComponent = DatePickerComponent;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;
    exports.DateFormatter = DateFormatter;
    exports.DatepickerConfig = DatepickerConfig;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsLocaleService = BsLocaleService;
    exports.ɵm = BsDatepickerAbstractComponent;
    exports.ɵr = BsDatepickerInputDirective;
    exports.ɵs = BsDaterangepickerInputDirective;
    exports.ɵb = DatePickerInnerComponent;
    exports.ɵa = DATEPICKER_CONTROL_VALUE_ACCESSOR;
    exports.ɵp = BsDatepickerActions;
    exports.ɵo = BsDatepickerEffects;
    exports.ɵn = BsDatepickerStore;
    exports.ɵg = BsCalendarLayoutComponent;
    exports.ɵd = BsCurrentDateViewComponent;
    exports.ɵk = BsCustomDatesViewComponent;
    exports.ɵl = BsDatepickerContainerComponent;
    exports.ɵc = BsDatepickerDayDecoratorComponent;
    exports.ɵe = BsDatepickerNavigationViewComponent;
    exports.ɵq = BsDaterangepickerContainerComponent;
    exports.ɵh = BsDaysCalendarViewComponent;
    exports.ɵi = BsMonthCalendarViewComponent;
    exports.ɵf = BsTimepickerViewComponent;
    exports.ɵj = BsYearsCalendarViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGUtZm9ybWF0dGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF5cGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL21vbnRocGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3llYXJwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1sb2NhbGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9fZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci91dGlscy9icy1jYWxlbmRhci11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL21hdHJpeC11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL3ZpZXctbW9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWN1cnJlbnQtZGF0ZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1tb250aHMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy15ZWFycy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdHRlciB7XG4gIGZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0mbHQ7ISZuZGFzaDtuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCImbmRhc2g7Jmd0Oy0tPlxuICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyTW9kZVwiIGNsYXNzPVwid2VsbCB3ZWxsLXNtIGJnLWZhZGVkIHAtYSBjYXJkXCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93V2Vla3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRNb250aDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXREYXlUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXRNb250aFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgeWVhckNvbExpbWl0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xuICBASW5wdXQoKSBkYXlEaXNhYmxlZDogbnVtYmVyW107XG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG4gIEBPdXRwdXQoKSB1cGRhdGU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oZmFsc2UpO1xuICBAT3V0cHV0KCkgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcERheTogYW55ID0ge307XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcE1vbnRoOiBhbnkgPSB7fTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwWWVhcjogYW55ID0ge307XG5cbiAgdW5pcXVlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgbW9kZXM6IHN0cmluZ1tdID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xuICBwcm90ZWN0ZWQgZGF0ZUZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlciA9IG5ldyBEYXRlRm9ybWF0dGVyKCk7XG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgcHJvdGVjdGVkIGFjdGl2ZURhdGVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJEYXk6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJEYXk6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJNb250aDogRnVuY3Rpb247XG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJZZWFyOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyWWVhcjogRnVuY3Rpb247XG5cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XG4gIH1cblxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBmb3JtYXR0ZXIgdmFsdWUgdG8gRGF0ZSBvYmplY3RcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gdG9kbzogdXNlIGRhdGUgZm9yIHVuaXF1ZSB2YWx1ZVxuICAgIHRoaXMudW5pcXVlSWQgPSAgYGRhdGVwaWNrZXItLSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApfWA7XG5cbiAgICBpZiAodGhpcy5pbml0RGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5pbml0RGF0ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzLnJlZnJlc2hWaWV3IHNob3VsZCBiZSBjYWxsZWQgaGVyZSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIG9uIHRoZSBmbHlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC12YXJpYWJsZVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIHRoaXMuY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGNoYW5nZXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBhY3RpdmVEYXRlIGhhcyBiZWVuIHVwZGF0ZSBhbmQgdGhlbiBlbWl0IHRoZSBhY3RpdmVEYXRlQ2hhbmdlIHdpdGggdGhlIG5ldyBkYXRlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChhY3RpdmVEYXRlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoYWN0aXZlRGF0ZSAmJiAhYWN0aXZlRGF0ZS5maXJzdENoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IGFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNWYWx1ZSAmJlxuICAgICAgICBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICBwcmV2aW91c1ZhbHVlLmdldFRpbWUoKSAhPT0gYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUuZ2V0VGltZSgpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDb21wYXJlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5ID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhciA9IGhhbmRsZXI7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGlmIChkYXRlMSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxLCBkYXRlMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuXG4gIHNldFJlZnJlc2hWaWV3SGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhciA9IGhhbmRsZXI7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcikge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZGF0ZUZpbHRlcihkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXQoZGF0ZSwgZm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGlzQWN0aXZlKGRhdGVPYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbXBhcmUoZGF0ZU9iamVjdC5kYXRlLCB0aGlzLmFjdGl2ZURhdGUpID09PSAwKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGNyZWF0ZURhdGVPYmplY3QoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBkYXRlT2JqZWN0OiBhbnkgPSB7fTtcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSBuZXcgRGF0ZShcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgKTtcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGVPYmplY3QuZGF0ZSk7XG4gICAgZGF0ZU9iamVjdC5sYWJlbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBmb3JtYXQpO1xuICAgIGRhdGVPYmplY3Quc2VsZWN0ZWQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpID09PSAwO1xuICAgIGRhdGVPYmplY3QuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XG4gICAgZGF0ZU9iamVjdC5jdXJyZW50ID0gdGhpcy5jb21wYXJlKGRhdGUsIG5ldyBEYXRlKCkpID09PSAwO1xuICAgIGRhdGVPYmplY3QuY3VzdG9tQ2xhc3MgPSB0aGlzLmdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlT2JqZWN0LmRhdGUpO1xuXG4gICAgcmV0dXJuIGRhdGVPYmplY3Q7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHNwbGl0KGFycjogYW55W10sIHNpemU6IG51bWJlcik6IGFueVtdIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3QgYXJyYXlzOiBhbnlbXSA9IFtdO1xuICAgIHdoaWxlIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgYXJyYXlzLnB1c2goYXJyLnNwbGljZSgwLCBzaXplKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5cztcbiAgfVxuXG4gIC8vIEZpeCBhIGhhcmQtcmVwcm9kdWNpYmxlIGJ1ZyB3aXRoIHRpbWV6b25lc1xuICAvLyBUaGUgYnVnIGRlcGVuZHMgb24gT1MsIGJyb3dzZXIsIGN1cnJlbnQgdGltZXpvbmUgYW5kIGN1cnJlbnQgZGF0ZVxuICAvLyBpLmUuXG4gIC8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxNCwgMCwgMSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSxcbiAgLy8gZGF0ZS5nZXRIb3VycygpKTsgY2FuIHJlc3VsdCBpbiBcIjIwMTMgMTEgMzEgMjNcIiBiZWNhdXNlIG9mIHRoZSBidWcuXG4gIGZpeFRpbWVab25lKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblxuICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgaG91cnMgPT09IDIzID8gaG91cnMgKyAyIDogMFxuICAgICk7XG4gIH1cblxuICBzZWxlY3QoZGF0ZTogRGF0ZSwgaXNNYW51YWwgPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICBpZiAoaXNNYW51YWwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGlmIChpc01hbnVhbCkge1xuICAgICAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcbiAgICAgICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgLSAxXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgbW92ZShkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBsZXQgZXhwZWN0ZWRTdGVwOiBhbnk7XG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBEYXk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcE1vbnRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcFllYXI7XG4gICAgfVxuXG4gICAgaWYgKGV4cGVjdGVkU3RlcCkge1xuICAgICAgY29uc3QgeWVhciA9XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC55ZWFycyB8fCAwKTtcbiAgICAgIGNvbnN0IG1vbnRoID1cbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLm1vbnRocyB8fCAwKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcblxuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNb2RlKF9kaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IF9kaXJlY3Rpb24gfHwgMTtcblxuICAgIGlmIChcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1heE1vZGUgJiYgZGlyZWN0aW9uID09PSAxKSB8fFxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSAmJiBkaXJlY3Rpb24gPT09IC0xKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xuICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpICsgZGlyZWN0aW9uXG4gICAgXTtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvLyB0b2RvOiBidWlsZCBhIGhhc2ggb2YgY3VzdG9tIGNsYXNzZXMsIGl0IHdpbGwgd29yayBmYXN0ZXJcbiAgICBjb25zdCBjdXN0b21DbGFzc09iamVjdDoge1xuICAgICAgZGF0ZTogRGF0ZTtcbiAgICAgIG1vZGU6IHN0cmluZztcbiAgICAgIGNsYXp6OiBzdHJpbmc7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICB9ID0gdGhpcy5jdXN0b21DbGFzcy5maW5kKChjdXN0b21DbGFzczogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjdXN0b21DbGFzcy5kYXRlLnZhbHVlT2YoKSA9PT0gZGF0ZS52YWx1ZU9mKCkgJiZcbiAgICAgICAgY3VzdG9tQ2xhc3MubW9kZSA9PT0gdGhpcy5kYXRlcGlja2VyTW9kZVxuICAgICAgKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBjdXN0b21DbGFzc09iamVjdCA9PT0gdW5kZWZpbmVkID8gJycgOiBjdXN0b21DbGFzc09iamVjdC5jbGF6ejtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb21wYXJlRGF0ZURpc2FibGVkKFxuICAgIGRhdGUxRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0sXG4gICAgZGF0ZTI6IERhdGVcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICBsZXQgaXNEYXRlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5kYXRlRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0ZURpc2FibGVkLmZvckVhY2goXG4gICAgICAgIChkaXNhYmxlZERhdGU6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jb21wYXJlRGF0ZURpc2FibGVkKGRpc2FibGVkRGF0ZSwgZGF0ZSkgPT09IDApIHtcbiAgICAgICAgICAgIGlzRGF0ZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF5RGlzYWJsZWQpIHtcbiAgICAgIGlzRGF0ZURpc2FibGVkID1cbiAgICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcbiAgICAgICAgdGhpcy5kYXlEaXNhYmxlZC5pbmRleE9mKGRhdGUuZ2V0RGF5KCkpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzRGF0ZURpc2FibGVkIHx8XG4gICAgICAodGhpcy5taW5EYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1pbkRhdGUpIDwgMCkgfHxcbiAgICAgICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb25maWcge1xuICBsb2NhbGUgPSAnZW4nO1xuICBkYXRlcGlja2VyTW9kZSA9ICdkYXknO1xuICBzdGFydGluZ0RheSA9IDA7XG4gIHllYXJSYW5nZSA9IDIwO1xuICBtaW5Nb2RlID0gJ2RheSc7XG4gIG1heE1vZGUgPSAneWVhcic7XG4gIHNob3dXZWVrcyA9IHRydWU7XG4gIGZvcm1hdERheSA9ICdERCc7XG4gIGZvcm1hdE1vbnRoID0gJ01NTU0nO1xuICBmb3JtYXRZZWFyID0gJ1lZWVknO1xuICBmb3JtYXREYXlIZWFkZXIgPSAnZGQnO1xuICBmb3JtYXREYXlUaXRsZSA9ICdNTU1NIFlZWVknO1xuICBmb3JtYXRNb250aFRpdGxlID0gJ1lZWVknO1xuICBvbmx5Q3VycmVudE1vbnRoID0gZmFsc2U7XG4gIG1vbnRoQ29sTGltaXQgPSAzO1xuICB5ZWFyQ29sTGltaXQgPSA1O1xuICBzaG9ydGN1dFByb3BhZ2F0aW9uID0gZmFsc2U7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUHJvdmlkZXIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkYXRlcGlja2VyLWlubmVyIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICh1cGRhdGUpPVwib25VcGRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2xvY2FsZV09XCJjb25maWcubG9jYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZXBpY2tlck1vZGVdPVwiZGF0ZXBpY2tlck1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpbml0RGF0ZV09XCJpbml0RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21pbk1vZGVdPVwibWluTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21heE1vZGVdPVwibWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3Nob3dXZWVrc109XCJzaG93V2Vla3NcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXldPVwiZm9ybWF0RGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhdPVwiZm9ybWF0TW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRZZWFyXT1cImZvcm1hdFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlIZWFkZXJdPVwiZm9ybWF0RGF5SGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5VGl0bGVdPVwiZm9ybWF0RGF5VGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aFRpdGxlXT1cImZvcm1hdE1vbnRoVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzdGFydGluZ0RheV09XCJzdGFydGluZ0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJ5ZWFyUmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjdXN0b21DbGFzc109XCJjdXN0b21DbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVEaXNhYmxlZF09XCJkYXRlRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXlEaXNhYmxlZF09XCJkYXlEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW29ubHlDdXJyZW50TW9udGhdPVwib25seUN1cnJlbnRNb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3Nob3J0Y3V0UHJvcGFnYXRpb25dPVwic2hvcnRjdXRQcm9wYWdhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgW21vbnRoQ29sTGltaXRdPVwibW9udGhDb2xMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJDb2xMaW1pdF09XCJ5ZWFyQ29sTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25Eb25lKT1cIm9uU2VsZWN0aW9uRG9uZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJvbkFjdGl2ZURhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPGRheXBpY2tlciB0YWJpbmRleD1cIjBcIj48L2RheXBpY2tlcj5cbiAgICAgIDxtb250aHBpY2tlciB0YWJpbmRleD1cIjBcIj48L21vbnRocGlja2VyPlxuICAgICAgPHllYXJwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC95ZWFycGlja2VyPlxuICAgIDwvZGF0ZXBpY2tlci1pbm5lcj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuLyogdHNsaW50OmVuYWJsZTpjb21wb25lbnQtc2VsZWN0b3ItbmFtZSBjb21wb25lbnQtc2VsZWN0b3ItdHlwZSAqL1xuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKiBzZXRzIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgZGF0ZXBpY2tlck1vZGUgPSAnZGF5JztcbiAgLyoqIGRlZmF1bHQgZGF0ZSB0byBzaG93IGlmIGBuZy1tb2RlbGAgdmFsdWUgaXMgbm90IHNwZWNpZmllZCAqL1xuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcbiAgLyoqICBvbGRlc3Qgc2VsZWN0YWJsZSBkYXRlICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKiBsYXRlc3Qgc2VsZWN0YWJsZSBkYXRlICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKiBzZXQgbG93ZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XG4gIC8qKiBzZXRzIHVwcGVyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xuICAvKiogaWYgZmFsc2Ugd2VlayBudW1iZXJzIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIHNob3dXZWVrcyA9IHRydWU7XG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIG1vbnRoICovXG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIG1vbnRoIGluIHllYXIgKi9cbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB5ZWFyIGluIHllYXIgcmFuZ2UgKi9cbiAgQElucHV0KCkgZm9ybWF0WWVhcjogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIGRheSBpbiB3ZWVrIGhlYWRlciAqL1xuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB0aXRsZSB3aGVuIHNlbGVjdGluZyBkYXkgKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB0aXRsZSB3aGVuIHNlbGVjdGluZyBtb250aCAqL1xuICBASW5wdXQoKSBmb3JtYXRNb250aFRpdGxlOiBzdHJpbmc7XG4gIC8qKiBzdGFydGluZyBkYXkgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIHllYXIgc2VsZWN0aW9uICovXG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xuICAvKiogaWYgdHJ1ZSBvbmx5IGRhdGVzIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGggd2lsbCBiZSBzaG93biAqL1xuICBASW5wdXQoKSBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzaG9ydGN1dGBzIGV2ZW50IHByb3BhZ2F0aW9uIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcbiAgLyoqIG51bWJlciBvZiBtb250aHMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiBtb250aCBwaWNrZXIgKi9cbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgeWVhciBwaWNrZXIgKi9cbiAgQElucHV0KCkgeWVhckNvbExpbWl0OiBudW1iZXI7XG4gIC8qKiBhcnJheSBvZiBjdXN0b20gY3NzIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byB0YXJnZXRlZCBkYXRlcyAqL1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xuICAvKiogYXJyYXkgb2YgZGlzYWJsZWQgZGF0ZXMgKi9cbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XG4gIC8qKiBkaXNhYmxlZCBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xuICBASW5wdXQoKSBkYXlEaXNhYmxlZDogbnVtYmVyW107XG5cbiAgLyoqIGN1cnJlbnRseSBhY3RpdmUgZGF0ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9ub3c7XG4gIH1cblxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG5cbiAgLyoqIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBhY3RpdmVEYXRlIGlzIGNoYW5nZWQuICovXG4gIEBPdXRwdXQoKVxuICBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIEBWaWV3Q2hpbGQoRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KVxuICBfZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjb25maWc6IERhdGVwaWNrZXJDb25maWc7XG5cbiAgcHJvdGVjdGVkIF9ub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5jb25maWd1cmVPcHRpb25zKCk7XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKCk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgb25VcGRhdGUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBldmVudDtcbiAgICB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uRG9uZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuICAvLyB0b2RvOiBzdXBwb3J0IG51bGwgdmFsdWVcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci5jb21wYXJlKHZhbHVlLCB0aGlzLl9hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2RhdGVQaWNrZXIuc2VsZWN0KHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsIi8vIEBkZXByZWNhdGVkXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF5cGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknXCIgcm9sZT1cImdyaWRcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwiYWN0aXZlRGF0ZUlkXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPiZsdDs8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCI1ICsgKGRhdGVQaWNrZXIuc2hvd1dlZWtzID8gMSA6IDApXCI+XG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZX1cIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+w6LCgMK6PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPiZndDtcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRoICpuZ0lmPVwiZGF0ZVBpY2tlci5zaG93V2Vla3NcIj48L3RoPlxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBsYWJlbHogb2YgbGFiZWxzXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8c21hbGwgYXJpYS1sYWJlbD1cImxhYmVsei5mdWxsXCI+PGI+e3sgbGFiZWx6LmFiYnIgfX08L2I+PC9zbWFsbD5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJyb3dzXCIgbGV0LXJvd3o9XCIkaW1wbGljaXRcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgPHRyICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgcm93elswXS5zZWNvbmRhcnkgJiYgcm93els2XS5zZWNvbmRhcnkpXCI+XG4gICAgICAgIDx0ZCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCIgY2xhc3M9XCJoNlwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZW0+e3sgd2Vla051bWJlcnNbaW5kZXhdIH19PC9lbT5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkdHogb2Ygcm93elwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBbaWRdPVwiZHR6LnVpZFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLXNtIHt7ZHR6LmN1c3RvbUNsYXNzfX1cIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhKGRhdGVQaWNrZXIub25seUN1cnJlbnRNb250aCAmJiBkdHouc2Vjb25kYXJ5KVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1zZWNvbmRhcnknOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWRlZmF1bHQnOiAhaXNCczR9XCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1tdXRlZCc6IGR0ei5zZWNvbmRhcnkgfHwgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgIGNvbG9yOiAjMjkyYjJjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICB9XG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LW11dGVkIHtcbiAgICAgIGNvbG9yOiAjMjkyYjJjICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF5UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGFiZWxzOiBhbnlbXSA9IFtdO1xuICB0aXRsZTogc3RyaW5nO1xuICByb3dzOiBhbnlbXSA9IFtdO1xuICB3ZWVrTnVtYmVyczogbnVtYmVyW10gPSBbXTtcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XG4gIH1cblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgLypwcm90ZWN0ZWQgZ2V0RGF5c0luTW9udGgoeWVhcjpudW1iZXIsIG1vbnRoOm51bWJlcikge1xuICAgcmV0dXJuICgobW9udGggPT09IDEpICYmICh5ZWFyICUgNCA9PT0gMCkgJiZcbiAgICgoeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApKSkgPyAyOSA6IERBWVNfSU5fTU9OVEhbbW9udGhdO1xuICAgfSovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBEYXkgPSB7IG1vbnRoczogMSB9O1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydGluZ0RheSAtIGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKTtcbiAgICAgIGNvbnN0IG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID1cbiAgICAgICAgZGlmZmVyZW5jZSA+IDAgPyA3IC0gZGlmZmVyZW5jZSA6IC1kaWZmZXJlbmNlO1xuICAgICAgY29uc3QgZmlyc3REYXRlID0gbmV3IERhdGUoZmlyc3REYXlPZk1vbnRoLmdldFRpbWUoKSk7XG5cbiAgICAgIGlmIChudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA+IDApIHtcbiAgICAgICAgZmlyc3REYXRlLnNldERhdGUoLW51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoICsgMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDQyIGlzIHRoZSBudW1iZXIgb2YgZGF5cyBvbiBhIHNpeC13ZWVrIGNhbGVuZGFyXG4gICAgICBjb25zdCBfZGF5czogRGF0ZVtdID0gc2VsZi5nZXREYXRlcyhmaXJzdERhdGUsIDQyKTtcbiAgICAgIGNvbnN0IGRheXM6IGFueVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQyOyBpKyspIHtcbiAgICAgICAgY29uc3QgX2RhdGVPYmplY3QgPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoX2RheXNbaV0sIHRoaXMuZm9ybWF0RGF5KTtcbiAgICAgICAgX2RhdGVPYmplY3Quc2Vjb25kYXJ5ID0gX2RheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGg7XG4gICAgICAgIF9kYXRlT2JqZWN0LnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xuICAgICAgICBkYXlzW2ldID0gX2RhdGVPYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHNlbGYubGFiZWxzID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICBzZWxmLmxhYmVsc1tqXSA9IHt9O1xuICAgICAgICBzZWxmLmxhYmVsc1tqXS5hYmJyID0gdGhpcy5kYXRlRmlsdGVyKFxuICAgICAgICAgIGRheXNbal0uZGF0ZSxcbiAgICAgICAgICB0aGlzLmZvcm1hdERheUhlYWRlclxuICAgICAgICApO1xuICAgICAgICBzZWxmLmxhYmVsc1tqXS5mdWxsID0gdGhpcy5kYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0RGF5VGl0bGUpO1xuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdChkYXlzLCA3KTtcblxuICAgICAgaWYgKHRoaXMuc2hvd1dlZWtzKSB7XG4gICAgICAgIHNlbGYud2Vla051bWJlcnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGh1cnNkYXlJbmRleCA9ICg0ICsgNyAtIHRoaXMuc3RhcnRpbmdEYXkpICUgNztcbiAgICAgICAgY29uc3QgbnVtV2Vla3MgPSBzZWxmLnJvd3MubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBjdXJXZWVrID0gMDsgY3VyV2VlayA8IG51bVdlZWtzOyBjdXJXZWVrKyspIHtcbiAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLnB1c2goXG4gICAgICAgICAgICBzZWxmLmdldElTTzg2MDFXZWVrTnVtYmVyKHNlbGYucm93c1tjdXJXZWVrXVt0aHVyc2RheUluZGV4XS5kYXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAnZGF5Jyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXG4gICAgICBkYXRlMTogRGF0ZSxcbiAgICAgIGRhdGUyOiBEYXRlXG4gICAgKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGQxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKTtcbiAgICAgIGNvbnN0IGQyID0gbmV3IERhdGUoZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpKTtcbiAgICAgIHJldHVybiBkMS5nZXRUaW1lKCkgLSBkMi5nZXRUaW1lKCk7XG4gICAgfSwgJ2RheScpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGF0ZXMoc3RhcnREYXRlOiBEYXRlLCBuOiBudW1iZXIpOiBEYXRlW10ge1xuICAgIGNvbnN0IGRhdGVzOiBEYXRlW10gPSBuZXcgQXJyYXkobik7XG4gICAgbGV0IGN1cnJlbnQgPSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0VGltZSgpKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGRhdGU6IERhdGU7XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoY3VycmVudC5nZXRUaW1lKCkpO1xuICAgICAgZGF0ZSA9IHRoaXMuZGF0ZVBpY2tlci5maXhUaW1lWm9uZShkYXRlKTtcbiAgICAgIGRhdGVzW2krK10gPSBkYXRlO1xuICAgICAgY3VycmVudCA9IG5ldyBEYXRlKFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgKyAxXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SVNPODYwMVdlZWtOdW1iZXIoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgY29uc3QgY2hlY2tEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgIC8vIFRodXJzZGF5XG4gICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSArIDQgLSAoY2hlY2tEYXRlLmdldERheSgpIHx8IDcpKTtcbiAgICBjb25zdCB0aW1lID0gY2hlY2tEYXRlLmdldFRpbWUoKTtcbiAgICAvLyBDb21wYXJlIHdpdGggSmFuIDFcbiAgICBjaGVja0RhdGUuc2V0TW9udGgoMCk7XG4gICAgY2hlY2tEYXRlLnNldERhdGUoMSk7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgodGltZSAtIGNoZWNrRGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRvZG86IGtleSBldmVudHMgaW1wbGVtZW50YXRpb25cbn1cbiIsIi8vIEBkZXByZWNhdGVkXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb250aHBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J21vbnRoJ1wiIHJvbGU9XCJncmlkXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+PC90aD5cbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci5tb250aENvbExpbWl0IC0gMikgPD0gMCkgPyAxIDogZGF0ZVBpY2tlci5tb250aENvbExpbWl0IC0gMlwiPlxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBtYXhNb2RlXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+IFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3d6IG9mIHJvd3NcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2F0dHIuaWRdPVwiZHR6LnVpZFwiIFtuZ0NsYXNzXT1cImR0ei5jdXN0b21DbGFzc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1saW5rJzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQgfHwgKGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopKSwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopfVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtc3VjY2Vzcyc6IGlzQnM0ICYmIGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb250aFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHJvd3M6IGFueVtdID0gW107XG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcbiAgbWF4TW9kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XG4gIH1cblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcE1vbnRoID0geyB5ZWFyczogMSB9O1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IG1vbnRoczogYW55W10gPSBuZXcgQXJyYXkoMTIpO1xuICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBpLCAxKTtcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICAgIG1vbnRoc1tpXSA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChkYXRlLCB0aGlzLmZvcm1hdE1vbnRoKTtcbiAgICAgICAgbW9udGhzW2ldLnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRpdGxlID0gdGhpcy5kYXRlRmlsdGVyKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5mb3JtYXRNb250aFRpdGxlKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQobW9udGhzLCBzZWxmLmRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCk7XG4gICAgfSwgJ21vbnRoJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXG4gICAgICBkYXRlMTogRGF0ZSxcbiAgICAgIGRhdGUyOiBEYXRlXG4gICAgKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGQxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSk7XG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCkpO1xuICAgICAgcmV0dXJuIGQxLmdldFRpbWUoKSAtIGQyLmdldFRpbWUoKTtcbiAgICB9LCAnbW9udGgnKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxufVxuIiwiLy8gQGRlcHJlY2F0ZWRcbi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3llYXJwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZT09PSd5ZWFyJ1wiIHJvbGU9XCJncmlkXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiKChkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDIpIDw9IDApID8gMSA6IGRhdGVQaWNrZXIueWVhckNvbExpbWl0IC0gMlwiPlxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiByb2xlPVwiaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK6PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBkdHogb2Ygcm93elwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBbYXR0ci5pZF09XCJkdHoudWlkXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLWxpbmsnOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCB8fCAoaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eikpLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eil9XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1zdWNjZXNzJzogaXNCczQgJiYgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtc3VjY2VzcyB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFllYXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHJvd3M6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwWWVhciA9IHsgeWVhcnM6IHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCB5ZWFyczogYW55W10gPSBuZXcgQXJyYXkodGhpcy55ZWFyUmFuZ2UpO1xuICAgICAgbGV0IGRhdGU6IERhdGU7XG4gICAgICBjb25zdCBzdGFydCA9IHNlbGYuZ2V0U3RhcnRpbmdZZWFyKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllYXJSYW5nZTsgaSsrKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpO1xuICAgICAgICBkYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlKTtcbiAgICAgICAgeWVhcnNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRZZWFyKTtcbiAgICAgICAgeWVhcnNbaV0udWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3RoaXMueWVhclJhbmdlIC0gMV0ubGFiZWxdLmpvaW4oXG4gICAgICAgICcgLSAnXG4gICAgICApO1xuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdCh5ZWFycywgc2VsZi5kYXRlUGlja2VyLnllYXJDb2xMaW1pdCk7XG4gICAgfSwgJ3llYXInKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcbiAgICAgIGRhdGUxOiBEYXRlLFxuICAgICAgZGF0ZTI6IERhdGVcbiAgICApOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xuICAgIH0sICd5ZWFyJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdGFydGluZ1llYXIoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyB0b2RvOiBwYXJzZUludFxuICAgIHJldHVybiAoXG4gICAgICAoeWVhciAtIDEpIC8gdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSAqIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgKyAxXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RheXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRocGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZZWFyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFycGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUGlja2VySW5uZXJDb21wb25lbnQsXG4gICAgRGF5UGlja2VyQ29tcG9uZW50LFxuICAgIE1vbnRoUGlja2VyQ29tcG9uZW50LFxuICAgIFllYXJQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxuICAgIERheVBpY2tlckNvbXBvbmVudCxcbiAgICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RhdGVQaWNrZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGF0ZXBpY2tlck1vZHVsZSwgcHJvdmlkZXJzOiBbRGF0ZXBpY2tlckNvbmZpZ10gfTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvLyBkYXRlcGlja2VyIGNvbnRhaW5lciBjb21wb25lbnRcbi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG5cbiAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHM7XG4gIF9jdXN0b21SYW5nZXNGaXNoOiBCc0N1c3RvbURhdGVzW10gPSBbXTtcblxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWluRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWF4RGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgeWVhckhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICB5ZWFyU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIF9zdG9wUHJvcGFnYXRpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xufSBmcm9tICcuL21vZGVscyc7XG5cblxuLyoqXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWdcbiAgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1heERhdGU/OiBEYXRlO1xuXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxuICAgKiB1c3VhbGx5IHVzZWQgdG8gc2V0IGNvbG9yIHRoZW1lXG4gICAqL1xuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XG5cbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbiAgZGlzcGxheU1vbnRocyA9IDE7XG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gaGlkZSB3ZWVrIG51bWJlcnMgaW4gZGF0ZXBpY2tlclxuICAgKi9cbiAgc2hvd1dlZWtOdW1iZXJzID0gdHJ1ZTtcblxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XG4gIC8vIHJhbmdlIHBpY2tlclxuICByYW5nZVNlcGFyYXRvciA9ICcgLSAnO1xuICAvKipcbiAgICogRGF0ZSBmb3JtYXQgZm9yIGRhdGUgcmFuZ2UgaW5wdXQgZmllbGRcbiAgICovXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbW9udGhUaXRsZSA9ICdNTU1NJztcbiAgeWVhclRpdGxlID0gJ1lZWVknO1xuICBkYXlMYWJlbCA9ICdEJztcbiAgbW9udGhMYWJlbCA9ICdNTU1NJztcbiAgeWVhckxhYmVsID0gJ1lZWVknO1xuICB3ZWVrTnVtYmVycyA9ICd3Jztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQWN0aW9ucyB7XG4gIHN0YXRpYyByZWFkb25seSBDQUxDVUxBVEUgPSAnW2RhdGVwaWNrZXJdIGNhbGN1bGF0ZSBkYXRlcyBtYXRyaXgnO1xuICBzdGF0aWMgcmVhZG9ubHkgRk9STUFUID0gJ1tkYXRlcGlja2VyXSBmb3JtYXQgZGF0ZXBpY2tlciB2YWx1ZXMnO1xuICBzdGF0aWMgcmVhZG9ubHkgRkxBRyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGZsYWdzJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdbZGF0ZXBpY2tlcl0gc2VsZWN0IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfT0ZGU0VUID0gJ1tkYXRlcGlja2VyXSBzaGlmdCB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfVE8gPSAnW2RhdGVwaWNrZXJdIGNoYW5nZSB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX09QVElPTlMgPSAnW2RhdGVwaWNrZXJdIHVwZGF0ZSByZW5kZXIgb3B0aW9ucyc7XG4gIHN0YXRpYyByZWFkb25seSBIT1ZFUiA9ICdbZGF0ZXBpY2tlcl0gaG92ZXIgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfVklFV01PREUgPSAnW2RhdGVwaWNrZXJdIHN3aXRjaCB2aWV3IG1vZGUnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUlOX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtaW4gZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUFYX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtYXggZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVF9SQU5HRSA9ICdbZGF0ZXJhbmdlcGlja2VyXSBzZWxlY3QgZGF0ZXMgcmFuZ2UnO1xuXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFIH07XG4gIH1cblxuICBmb3JtYXQoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xuICB9XG5cbiAgZmxhZygpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXG4gICAgICBwYXlsb2FkOiBzdGVwXG4gICAgfTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBob3ZlckRheShldmVudDogQ2VsbEhvdmVyRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxuICAgICAgcGF5bG9hZDogZXZlbnQuaXNIb3ZlcmVkID8gZXZlbnQuY2VsbC5kYXRlIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcbiAgICAgIHBheWxvYWQ6IGxvY2FsZVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNMb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdExvY2FsZSA9ICdlbic7XG4gIHByaXZhdGUgX2xvY2FsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9kZWZhdWx0TG9jYWxlKTtcbiAgcHJpdmF0ZSBfbG9jYWxlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9sb2NhbGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IGxvY2FsZSgpOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldFZhbHVlKCk7XG4gIH1cblxuICB1c2UobG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobG9jYWxlID09PSB0aGlzLmN1cnJlbnRMb2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUubmV4dChsb2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmU7XG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIGluaXQoX2JzRGF0ZXBpY2tlclN0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlID0gX2JzRGF0ZXBpY2tlclN0b3JlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogc2V0dGVycyAqL1xuXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QodmFsdWUpKTtcbiAgfVxuXG4gIHNldFJhbmdlVmFsdWUodmFsdWU6IERhdGVbXSk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodmFsdWUpKTtcbiAgfVxuXG4gIHNldE1pbkRhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1pbkRhdGUodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TWF4RGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWF4RGF0ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiBTZXQgcmVuZGVyaW5nIG9wdGlvbnMgKi9cbiAgc2V0T3B0aW9ucyhfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb25zdCBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe2xvY2FsZTogdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlfSwgX2NvbmZpZyk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRPcHRpb25zKF9vcHRpb25zKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiB2aWV3IHRvIG1vZGUgYmluZGluZ3MgKi9cbiAgc2V0QmluZGluZ3MoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnRhaW5lci5kYXlzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXG4gICAgICApO1xuXG4gICAgLy8gbW9udGggY2FsZW5kYXJcbiAgICBjb250YWluZXIubW9udGhzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzQ2FsZW5kYXIpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcbiAgICAgICk7XG5cbiAgICAvLyB5ZWFyIGNhbGVuZGFyXG4gICAgY29udGFpbmVyLnllYXJzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyRmxhZ2dlZClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoeWVhcnMgPT4gISF5ZWFycylcbiAgICAgICk7XG5cbiAgICBjb250YWluZXIudmlld01vZGUgPSB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldy5tb2RlKTtcblxuICAgIGNvbnRhaW5lci5vcHRpb25zID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2hvd1dlZWtOdW1iZXJzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzaG93V2Vla051bWJlcnMgPT4gKHtzaG93V2Vla051bWJlcnN9KSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBldmVudCBoYW5kbGVycyAqL1xuICBzZXRFdmVudEhhbmRsZXJzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb250YWluZXIuc2V0Vmlld01vZGUgPSAoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNoYW5nZVZpZXdNb2RlKGV2ZW50KSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5uYXZpZ2F0ZVRvID0gKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVN0ZXAoZXZlbnQuc3RlcCkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIuZGF5SG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgX2NlbGwgPSBldmVudC5jZWxsIGFzIERheVZpZXdNb2RlbDtcbiAgICAgIGlmIChfY2VsbC5pc090aGVyTW9udGggfHwgX2NlbGwuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaG92ZXJEYXkoZXZlbnQpKTtcbiAgICAgIF9jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm1vbnRoSG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFySG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIC8qKiBzZWxlY3QgaGFuZGxlcnMgKi9cbiAgICAvLyBjb250YWluZXIuZGF5U2VsZWN0SGFuZGxlciA9IChkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQgPT4ge1xuICAgIC8vICAgaWYgKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpIHtcbiAgICAvLyAgICAgcmV0dXJuO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QoZGF5LmRhdGUpKTtcbiAgICAvLyB9O1xuXG4gICAgY29udGFpbmVyLm1vbnRoU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1bml0OiB7bW9udGg6IGdldE1vbnRoKGV2ZW50LmRhdGUpfSxcbiAgICAgICAgICB2aWV3TW9kZTogJ2RheSdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFyU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1bml0OiB7eWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSl9LFxuICAgICAgICAgIHZpZXdNb2RlOiAnbW9udGgnXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3KS5zdWJzY3JpYmUodmlldyA9PiB7XG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2FsY3VsYXRlKCkpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gZm9ybWF0IGNhbGVuZGFyIHZhbHVlcyBvbiBtb250aCBtb2RlbCBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc01vZGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIobW9udGhNb2RlbCA9PiAhIW1vbnRoTW9kZWwpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZvcm1hdCgpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtYXR0ZWRNb250aHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihtb250aCA9PiAhIW1vbnRoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkRGF0ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkRGF0ZSA9PiAhIXNlbGVjdGVkRGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZm9yIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZFJhbmdlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWRSYW5nZSA9PiAhIXNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZFJhbmdlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gbW9udGhzQ2FsZW5kYXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc0NhbGVuZGFyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8geWVhcnMgY2FsZW5kYXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHN0YXRlID0+ICEhc3RhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIG9uIGhvdmVyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ob3ZlcmVkRGF0ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGhvdmVyZWREYXRlID0+ICEhaG92ZXJlZERhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShob3ZlcmVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIG9uIGxvY2FsZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZVxuICAgICAgICAuc3Vic2NyaWJlKGxvY2FsZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldExvY2FsZShsb2NhbGUpKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTW9udGhWaWV3T3B0aW9uc1xufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE1vbnRoT3B0aW9uczogTW9udGhWaWV3T3B0aW9ucyA9IHtcbiAgd2lkdGg6IDcsXG4gIGhlaWdodDogNlxufTtcbiIsImltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERheXNDYWxlbmRhck1vZGVsLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBNb250aFZpZXdPcHRpb25zLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9udGhPcHRpb25zIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSB7XG4gIGRhdGU6IERhdGU7XG4gIG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xufVxuXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RhdGVcbiAgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucywgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMge1xuICAvLyBkYXRlIHBpY2tlclxuICBzZWxlY3RlZERhdGU/OiBEYXRlO1xuICAvLyBkYXRlcmFuZ2UgcGlja2VyXG4gIHNlbGVjdGVkUmFuZ2U/OiBEYXRlW107XG5cbiAgLy8gaW5pdGlhbCBkYXRlIG9mIGNhbGVuZGFyLCB0b2RheSBieSBkZWZhdWx0XG4gIHZpZXc6IEJzRGF0ZXBpY2tlclZpZXdTdGF0ZTtcblxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgLy8gYm91bmRzXG4gIG1pbkRhdGU/OiBEYXRlO1xuICBtYXhEYXRlPzogRGF0ZTtcblxuICBob3ZlcmVkRGF0ZT86IERhdGU7XG4gIGhvdmVyZWRNb250aD86IERhdGU7XG4gIGhvdmVyZWRZZWFyPzogRGF0ZTtcblxuICAvLyBkYXlzIGNhbGVuZGFyXG4gIG1vbnRoc01vZGVsPzogRGF5c0NhbGVuZGFyTW9kZWxbXTtcbiAgZm9ybWF0dGVkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XG4gIGZsYWdnZWRNb250aHM/OiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcblxuICAvLyBtb250aHMgY2FsZW5kYXJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIHllYXJzIGNhbGVuZGFyXG4gIHllYXJzQ2FsZW5kYXJNb2RlbD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgeWVhcnNDYWxlbmRhckZsYWdnZWQ/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG5cbiAgLy8gb3B0aW9uc1xuICBtb250aFZpZXdPcHRpb25zOiBNb250aFZpZXdPcHRpb25zO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcblxuICBkYXlMYWJlbDogc3RyaW5nO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHllYXJMYWJlbDogc3RyaW5nO1xuXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XG59XG5cbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXG4gIHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxuICAgIHNlbGVjdGVkUmFuZ2U6IFtdLFxuICAgIG1vbnRoVmlld09wdGlvbnM6IGRlZmF1bHRNb250aE9wdGlvbnNcbiAgfVxuKTtcbiIsImltcG9ydCB7XG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIHNoaWZ0RGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2Zcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcbiAgaWYgKGlzRmlyc3REYXlPZldlZWsoZGF0ZSwgb3B0aW9ucy5maXJzdERheU9mV2VlaykpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHdlZWtEYXkgPSBnZXREYXkoZGF0ZSk7XG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZShkYXRlLCB7ZGF5OiAtb2Zmc2V0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtkYXk6IG51bWJlciwgc3RhcnRpbmdEYXlPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xuICAgIHJldHVybiB3ZWVrZGF5O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0ID0gd2Vla2RheSAtIHN0YXJ0aW5nRGF5T2Zmc2V0ICUgNztcblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ21vbnRoJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ21vbnRoJyksIG1heCwgJ2RheScpO1xuXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhckRpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuIiwiaW1wb3J0IHsgVGltZVVuaXQsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZU1hdHJpeENiPFQ+ID0gKGRhdGU6IERhdGUpID0+IFQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0cml4T3B0aW9ucyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBpbml0aWFsRGF0ZTogRGF0ZTtcbiAgc2hpZnQ6IFRpbWVVbml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0cml4PFQ+KFxuICBvcHRpb25zOiBNYXRyaXhPcHRpb25zLFxuICBmbjogQ3JlYXRlTWF0cml4Q2I8VD5cbik6IFRbXVtdIHtcbiAgbGV0IHByZXZWYWx1ZSA9IG9wdGlvbnMuaW5pdGlhbERhdGU7XG4gIGNvbnN0IG1hdHJpeDogVFtdW10gPSBuZXcgQXJyYXkob3B0aW9ucy5oZWlnaHQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuaGVpZ2h0OyBpKyspIHtcbiAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXkob3B0aW9ucy53aWR0aCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLndpZHRoOyBqKyspIHtcbiAgICAgIG1hdHJpeFtpXVtqXSA9IGZuKHByZXZWYWx1ZSk7XG4gICAgICBwcmV2VmFsdWUgPSBzaGlmdERhdGUocHJldlZhbHVlLCBvcHRpb25zLnNoaWZ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0cml4O1xufVxuIiwiLy8gdXNlciBhbmQgbW9kZWwgaW5wdXQgc2hvdWxkIGhhbmRsZSBwYXJzaW5nIGFuZCB2YWxpZGF0aW5nIGlucHV0IHZhbHVlc1xuLy8gc2hvdWxkIGFjY2VwdCBzb21lIG9wdGlvbnNcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXG5pbXBvcnQgeyBEYXlzQ2FsZW5kYXJNb2RlbCwgTW9udGhWaWV3T3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRGaXJzdERheU9mTW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXG4gIHN0YXJ0aW5nRGF0ZTogRGF0ZSxcbiAgb3B0aW9uczogTW9udGhWaWV3T3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xuICBjb25zdCBmaXJzdERheSA9IGdldEZpcnN0RGF5T2ZNb250aChzdGFydGluZ0RhdGUpO1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihmaXJzdERheSwgb3B0aW9ucyk7XG5cbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHtcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgIGluaXRpYWxEYXRlLFxuICAgIHNoaWZ0OiB7IGRheTogMSB9XG4gIH07XG4gIGNvbnN0IGRheXNNYXRyaXggPSBjcmVhdGVNYXRyaXg8RGF0ZT4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiBkYXRlKTtcblxuICByZXR1cm4ge1xuICAgIGRheXNNYXRyaXgsXG4gICAgbW9udGg6IGZpcnN0RGF5XG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERheXNDYWxlbmRhcihkYXlzQ2FsZW5kYXI6IERheXNDYWxlbmRhck1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhJbmRleDogbnVtYmVyKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgIG1vbnRoVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgICBmb3JtYXRPcHRpb25zLm1vbnRoVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgd2Vla051bWJlcnM6IGdldFdlZWtOdW1iZXJzKFxuICAgICAgZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgsXG4gICAgICBmb3JtYXRPcHRpb25zLndlZWtOdW1iZXJzLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtkYXlzOiBnZXRTaGlmdGVkV2Vla2RheXMoZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgIHdlZWtzOiBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeC5tYXAoKHdlZWs6IERhdGVbXSwgd2Vla0luZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICBkYXlzOiB3ZWVrLm1hcCgoZGF0ZTogRGF0ZSwgZGF5SW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5kYXlMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgICAgICBtb250aEluZGV4LFxuICAgICAgICB3ZWVrSW5kZXgsXG4gICAgICAgIGRheUluZGV4XG4gICAgICB9KSlcbiAgICB9KSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXJzKGRheXNNYXRyaXg6IERhdGVbXVtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gZGF5c01hdHJpeC5tYXAoXG4gICAgKGRheXM6IERhdGVbXSkgPT4gKGRheXNbMF0gPyBmb3JtYXREYXRlKGRheXNbMF0sIGZvcm1hdCwgbG9jYWxlKSA6ICcnKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hpZnRlZFdlZWtkYXlzKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSk7XG4gIGNvbnN0IHdlZWtkYXlzID0gX2xvY2FsZS53ZWVrZGF5c1Nob3J0KCkgYXMgc3RyaW5nW107XG4gIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gX2xvY2FsZS5maXJzdERheU9mV2VlaygpO1xuXG4gIHJldHVybiBbLi4ud2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLCAuLi53ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlayldO1xufVxuIiwiaW1wb3J0IHtcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGlzU2FtZURheSwgaXNTYW1lTW9udGgsIGlzQWZ0ZXIsIGlzQmVmb3JlLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgaXNNb250aERpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdEYXlzQ2FsZW5kYXIoXG4gIGZvcm1hdHRlZE1vbnRoOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zXG4pOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBmb3JtYXR0ZWRNb250aC53ZWVrcy5mb3JFYWNoKCh3ZWVrOiBXZWVrVmlld01vZGVsLCB3ZWVrSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHdlZWsuZGF5cy5mb3JFYWNoKChkYXk6IERheVZpZXdNb2RlbCwgZGF5SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gZGF0ZXBpY2tlclxuICAgICAgY29uc3QgaXNPdGhlck1vbnRoID0gIWlzU2FtZU1vbnRoKGRheS5kYXRlLCBmb3JtYXR0ZWRNb250aC5tb250aCk7XG5cbiAgICAgIGNvbnN0IGlzSG92ZXJlZCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcbiAgICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgICBjb25zdCBpc1NlbGVjdGlvblN0YXJ0ID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMF0pO1xuICAgICAgY29uc3QgaXNTZWxlY3Rpb25FbmQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVsxXSk7XG5cbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICAoIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKSkgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBpc1NlbGVjdGlvbkVuZDtcblxuICAgICAgY29uc3QgaXNJblJhbmdlID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNEYXRlSW5SYW5nZShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcblxuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICBpc0JlZm9yZShkYXkuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNBZnRlcihkYXkuZGF0ZSwgb3B0aW9ucy5tYXhEYXRlLCAnZGF5Jyk7XG5cbiAgICAgIC8vIGRlY2lkZSB1cGRhdGUgb3Igbm90XG4gICAgICBjb25zdCBuZXdEYXkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcbiAgICAgICAgaXNPdGhlck1vbnRoLFxuICAgICAgICBpc0hvdmVyZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGlzU2VsZWN0aW9uRW5kLFxuICAgICAgICBpc0luUmFuZ2UsXG4gICAgICAgIGlzRGlzYWJsZWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGRheS5pc090aGVyTW9udGggIT09IG5ld0RheS5pc090aGVyTW9udGggfHxcbiAgICAgICAgZGF5LmlzSG92ZXJlZCAhPT0gbmV3RGF5LmlzSG92ZXJlZCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3RlZCAhPT0gbmV3RGF5LmlzU2VsZWN0ZWQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uU3RhcnQgIT09IG5ld0RheS5pc1NlbGVjdGlvblN0YXJ0IHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGlvbkVuZCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uRW5kIHx8XG4gICAgICAgIGRheS5pc0Rpc2FibGVkICE9PSBuZXdEYXkuaXNEaXNhYmxlZCB8fFxuICAgICAgICBkYXkuaXNJblJhbmdlICE9PSBuZXdEYXkuaXNJblJhbmdlXG4gICAgICApIHtcbiAgICAgICAgd2Vlay5kYXlzW2RheUluZGV4XSA9IG5ld0RheTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcbiAgZm9ybWF0dGVkTW9udGguaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocyk7XG5cbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZUxlZnRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IC0xIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4gZm9ybWF0dGVkTW9udGg7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoXG4gIGRhdGU6IERhdGUsXG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXSxcbiAgaG92ZXJlZERhdGU6IERhdGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUgfHwgIXNlbGVjdGVkUmFuZ2VbMF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRSYW5nZVsxXSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IHNlbGVjdGVkUmFuZ2VbMV07XG4gIH1cblxuICBpZiAoaG92ZXJlZERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA+IHNlbGVjdGVkUmFuZ2VbMF0gJiYgZGF0ZSA8PSBob3ZlcmVkRGF0ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhblN3aXRjaE1vZGUobW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgc3RhcnRPZiwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSAzO1xuY29uc3Qgc2hpZnQgPSB7IG1vbnRoOiAxIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc3RhcnRPZih2aWV3RGF0ZSwgJ3llYXInKTtcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XG4gIGNvbnN0IG1vbnRoTWF0cml4ID0gY3JlYXRlTWF0cml4PFxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcbiAgICBkYXRlLFxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMubW9udGhMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIG1vbnRoczogbW9udGhNYXRyaXgsXG4gICAgbW9udGhUaXRsZTogJycsXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgdmlld0RhdGUsXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKVxuICB9O1xufVxuIiwiaW1wb3J0IHsgaXNTYW1lTW9udGgsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQge1xuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdNb250aENhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGhvdmVyZWRNb250aDogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICBtb250aEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnTW9udGhzQ2FsZW5kYXIoXG4gIG1vbnRoQ2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgbW9udGhDYWxlbmRhci5tb250aHMuZm9yRWFjaChcbiAgICAobW9udGhzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIG1vbnRoSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLmhvdmVyZWRNb250aCk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzTW9udGhEaXNhYmxlZChtb250aC5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIG1vbnRoLCB7XG4gICAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICAgIGlzRGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb250aC5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxuICAgICAgICAgIG1vbnRoLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9udGhDYWxlbmRhci5tb250aHNbcm93SW5kZXhdW21vbnRoSW5kZXhdID0gbmV3TW9udGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgbW9udGhDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xuICBtb250aENhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgbW9udGhDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBtb250aENhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIG1vbnRoQ2FsZW5kYXI7XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzaGlmdERhdGUsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuY29uc3QgaGVpZ2h0ID0gNDtcbmNvbnN0IHdpZHRoID0gNDtcbmV4cG9ydCBjb25zdCB5ZWFyc1BlckNhbGVuZGFyID0gaGVpZ2h0ICogd2lkdGg7XG5jb25zdCBpbml0aWFsU2hpZnQgPSAoTWF0aC5mbG9vcih5ZWFyc1BlckNhbGVuZGFyIC8gMikgLSAxKSAqIC0xO1xuY29uc3Qgc2hpZnQgPSB7IHllYXI6IDEgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzQ2FsZW5kYXIoXG4gIHZpZXdEYXRlOiBEYXRlLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IGluaXRpYWxTaGlmdCB9KTtcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XG4gIGNvbnN0IHllYXJzTWF0cml4ID0gY3JlYXRlTWF0cml4PFxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcbiAgICBkYXRlLFxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMueWVhckxhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcbiAgfSkpO1xuICBjb25zdCB5ZWFyVGl0bGUgPSBmb3JtYXRZZWFyUmFuZ2VUaXRsZSh5ZWFyc01hdHJpeCwgZm9ybWF0T3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyczogeWVhcnNNYXRyaXgsXG4gICAgbW9udGhUaXRsZTogJycsXG4gICAgeWVhclRpdGxlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXJSYW5nZVRpdGxlKFxuICB5ZWFyc01hdHJpeDogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGNvbnN0IGZyb20gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4WzBdWzBdLmRhdGUsXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgKTtcbiAgY29uc3QgdG8gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4W2hlaWdodCAtIDFdW3dpZHRoIC0gMV0uZGF0ZSxcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICApO1xuXG4gIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcbn1cbiIsImltcG9ydCB7IGlzU2FtZVllYXIsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBZZWFyc0NhbGVuZGFyVmlld01vZGVsLCBDYWxlbmRhckNlbGxWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZFllYXI6IERhdGU7XG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgeWVhckluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnWWVhcnNDYWxlbmRhcihcbiAgeWVhcnNDYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcbiAgb3B0aW9uczogRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgeWVhcnNDYWxlbmRhci55ZWFycy5mb3JFYWNoKFxuICAgICh5ZWFyczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW10sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHllYXJzLmZvckVhY2goKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgeWVhckluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaXNTYW1lWWVhcih5ZWFyLmRhdGUsIG9wdGlvbnMuaG92ZXJlZFllYXIpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgICBpc1llYXJEaXNhYmxlZCh5ZWFyLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcblxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyB5ZWFyLCB7IGlzSG92ZXJlZCwgaXNEaXNhYmxlZCB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIHllYXJzQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPiAwICYmIG9wdGlvbnMueWVhckluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMueWVhckluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgb3B0aW9ucy55ZWFySW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGogPSB5ZWFyc0NhbGVuZGFyLnllYXJzW2ldLmxlbmd0aCAtIDE7XG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiB5ZWFyc0NhbGVuZGFyO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IGNhbGNEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvY2FsYy1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZvcm1hdERheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnRGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhcic7XG5pbXBvcnQge1xuICBzZXRGdWxsRGF0ZSxcbiAgc2hpZnREYXRlLFxuICBpc0FycmF5LFxuICBpc0RhdGVWYWxpZCxcbiAgc3RhcnRPZixcbiAgZ2V0TG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY2FuU3dpdGNoTW9kZSB9IGZyb20gJy4uL2VuZ2luZS92aWV3LW1vZGUnO1xuaW1wb3J0IHsgZm9ybWF0TW9udGhzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZm9ybWF0LW1vbnRocy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnTW9udGhzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZm9ybWF0WWVhcnNDYWxlbmRhciwgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZmxhZ1llYXJzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQgeyBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBic0RhdGVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURToge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQ6IHtcbiAgICAgIHJldHVybiBmb3JtYXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5GTEFHOiB7XG4gICAgICByZXR1cm4gZmxhZ1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX09GRlNFVDoge1xuICAgICAgY29uc3QgZGF0ZSA9IHNoaWZ0RGF0ZShzdGFydE9mKHN0YXRlLnZpZXcuZGF0ZSwgJ21vbnRoJyksIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgbW9kZTogc3RhdGUudmlldy5tb2RlLFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPOiB7XG4gICAgICBjb25zdCBwYXlsb2FkOiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3QgZGF0ZSA9IHNldEZ1bGxEYXRlKHN0YXRlLnZpZXcuZGF0ZSwgcGF5bG9hZC51bml0KTtcbiAgICAgIGNvbnN0IG1vZGUgPSBwYXlsb2FkLnZpZXdNb2RlO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREU6IHtcbiAgICAgIGlmICghY2FuU3dpdGNoTW9kZShhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IG1vZGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuSE9WRVI6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBob3ZlcmVkRGF0ZTogYWN0aW9uLnBheWxvYWQgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVDoge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfZGF0ZSwgc3RhdGUubWluRGF0ZSwgc3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfT1BUSU9OUzoge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIC8vIHByZXNlcnZlIHZpZXcgbW9kZVxuICAgICAgY29uc3QgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF92aWV3RGF0ZSA9IGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlKSAmJiBuZXdTdGF0ZS52YWx1ZVxuICAgICAgICB8fCBpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSAmJiBpc0RhdGVWYWxpZChuZXdTdGF0ZS52YWx1ZVswXSkgJiYgbmV3U3RhdGUudmFsdWVbMF1cbiAgICAgICAgfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF92aWV3RGF0ZSwgbmV3U3RhdGUubWluRGF0ZSwgbmV3U3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG4gICAgICAvLyB1cGRhdGUgc2VsZWN0ZWQgdmFsdWVcbiAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSkge1xuICAgICAgICAvLyBpZiBuZXcgdmFsdWUgaXMgYXJyYXkgd2Ugd29yayB3aXRoIGRhdGUgcmFuZ2VcbiAgICAgICAgaWYgKGlzQXJyYXkobmV3U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSYW5nZSA9IG5ld1N0YXRlLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGEgZGF0ZSAtPiBkYXRlcGlja2VyXG4gICAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZERhdGUgPSBuZXdTdGF0ZS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQgOilcbiAgICAgICAgLy8gbmVlZCB0byByZXBvcnQgaXQgc29tZWhvd1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0U6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZFJhbmdlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgdmlldzogc3RhdGUudmlld1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWRbMF0gfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1pbkRhdGU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NQVhfREFURToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1heERhdGU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRDoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcbiAgY29uc3QgZGlzcGxheU1vbnRocyA9IHN0YXRlLmRpc3BsYXlNb250aHM7XG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxuICBsZXQgdmlld0RhdGUgPSBzdGF0ZS52aWV3LmRhdGU7XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBzdGF0ZS5tb250aFZpZXdPcHRpb25zLmZpcnN0RGF5T2ZXZWVrID0gZ2V0TG9jYWxlKHN0YXRlLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBtb250aHNNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMDsgbW9udGhJbmRleCA8IGRpc3BsYXlNb250aHM7IG1vbnRoSW5kZXgrKykge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgbW9udGhzTW9kZWxbbW9udGhJbmRleF0gPSBjYWxjRGF5c0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgc3RhdGUubW9udGhWaWV3T3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IG1vbnRoOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNNb2RlbCB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcbiAgICBjb25zdCBtb250aHNDYWxlbmRhciA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDEgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc0NhbGVuZGFyIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XG4gICAgY29uc3QgeWVhcnNDYWxlbmRhck1vZGVsID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuXG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiB5ZWFyc1BlckNhbGVuZGFyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyTW9kZWwgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRNb250aHMgPSBzdGF0ZS5tb250aHNNb2RlbC5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PlxuICAgICAgZm9ybWF0RGF5c0NhbGVuZGFyKG1vbnRoLCBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKSwgbW9udGhJbmRleClcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGZvcm1hdHRlZE1vbnRocyB9KTtcbiAgfVxuXG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xuICBjb25zdCBkaXNwbGF5TW9udGhzID0gc3RhdGUuZGlzcGxheU1vbnRocztcbiAgLy8gY2hlY2sgaW5pdGlhbCByZW5kZXJpbmdcbiAgLy8gdXNlIHNlbGVjdGVkIGRhdGUgb24gaW5pdGlhbCByZW5kZXJpbmcgaWYgc2V0XG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNDYWxlbmRhciB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJykge1xuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIHllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XSA9IGZvcm1hdFllYXJzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDE2IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyTW9kZWwgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZsYWdSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHMgPSBzdGF0ZS5mb3JtYXR0ZWRNb250aHMubWFwKFxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCBtb250aEluZGV4KSA9PlxuICAgICAgICBmbGFnRGF5c0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZERhdGU6IHN0YXRlLmhvdmVyZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc3RhdGUuc2VsZWN0ZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkUmFuZ2U6IHN0YXRlLnNlbGVjdGVkUmFuZ2UsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHNDYWxlbmRhciA9IHN0YXRlLm1vbnRoc0NhbGVuZGFyLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ01vbnRoc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZE1vbnRoOiBzdGF0ZS5ob3ZlcmVkTW9udGgsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIHllYXJJbmRleCkgPT5cbiAgICAgICAgZmxhZ1llYXJzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICB5ZWFySW5kZXhcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICBsb2NhbGU6IHN0YXRlLmxvY2FsZSxcblxuICAgIG1vbnRoVGl0bGU6IHN0YXRlLm1vbnRoVGl0bGUsXG4gICAgeWVhclRpdGxlOiBzdGF0ZS55ZWFyVGl0bGUsXG5cbiAgICBkYXlMYWJlbDogc3RhdGUuZGF5TGFiZWwsXG4gICAgbW9udGhMYWJlbDogc3RhdGUubW9udGhMYWJlbCxcbiAgICB5ZWFyTGFiZWw6IHN0YXRlLnllYXJMYWJlbCxcblxuICAgIHdlZWtOdW1iZXJzOiBzdGF0ZS53ZWVrTnVtYmVyc1xuICB9O1xufVxuXG4vKipcbiAqIGlmIHZpZXcgZGF0ZSBpcyBwcm92aWRlZCAoYnNWYWx1ZXxuZ01vZGVsKSBpdCBzaG91bGQgYmUgc2hvd25cbiAqIGlmIHZpZXcgZGF0ZSBpcyBub3QgcHJvdmlkZXI6XG4gKiBpZiBtaW5EYXRlPmN1cnJlbnREYXRlIChkZWZhdWx0IHZpZXcgdmFsdWUpLCBzaG93IG1pbkRhdGVcbiAqIGlmIG1heERhdGU8Y3VycmVudERhdGUoZGVmYXVsdCB2aWV3IHZhbHVlKSBzaG93IG1heERhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Vmlld0RhdGUodmlld0RhdGU6IERhdGUgfCBEYXRlW10sIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSBBcnJheS5pc0FycmF5KHZpZXdEYXRlKSA/IHZpZXdEYXRlWzBdIDogdmlld0RhdGU7XG5cbiAgaWYgKG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1pbkRhdGU7XG4gIH1cblxuICBpZiAobWF4RGF0ZSAmJiBpc0JlZm9yZShtYXhEYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1heERhdGU7XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPEJzRGF0ZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIGJzRGF0ZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCBic0RhdGVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItY29udGFpbmVyJyxcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogYmxvY2s7JyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC5zZXRPcHRpb25zKHRoaXMuX2NvbmZpZylcbiAgICAgIC8vIGRhdGEgYmluZGluZyB2aWV3IC0tPiBtb2RlbFxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXG4gICAgICAvLyBzZXQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIC5zZXRFdmVudEhhbmRsZXJzKHRoaXMpXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcblxuICAgIC8vIHRvZG86IG1vdmUgaXQgc29tZXdoZXJlIGVsc2VcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgIC5zZWxlY3QoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNlbGVjdGVkRGF0ZSlcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogYW55KSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2VmZmVjdHMuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVwaWNrZXJdJyxcbiAgZXhwb3J0QXM6ICdic0RhdGVwaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnMgPSAnY2xpY2snO1xuICAvKipcbiAgICogQ2xvc2UgZGF0ZXBpY2tlciBvbiBvdXRzaWRlIGNsaWNrXG4gICAqL1xuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBkYXRlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZTtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXBpY2tlclxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGJzVmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZ1xuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBzZXRDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIFByb3ZpZGVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBwYXJzZURhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGdldExvY2FsZSxcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIGlzRGF0ZSxcbiAgaXNEYXRlVmFsaWRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcblxuY29uc3QgQlNfREFURVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXBpY2tlcl1gLFxuICBob3N0OiB7XG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxuICAgICcoa2V5dXAuZXNjKSc6ICdoaWRlKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW0JTX0RBVEVQSUNLRVJfVkFMVUVfQUNDRVNTT1IsIEJTX0RBVEVQSUNLRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC12YXJpYWJsZSAqL1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBfcGlja2VyOiBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRJbnB1dFZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgaW5pdGlhbERhdGUgPSAhdmFsdWUgPyAnJ1xuICAgICAgOiBmb3JtYXREYXRlKHZhbHVlLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSk7XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBpbml0aWFsRGF0ZSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IF92YWx1ZTogRGF0ZSB8IHN0cmluZyA9IGMudmFsdWU7XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1zd2l0Y2ggKi9cbiAgICBpZiAoX3ZhbHVlID09PSBudWxsIHx8IF92YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IF92YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc0RhdGUoX3ZhbHVlKSkge1xuICAgICAgY29uc3QgX2lzRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlKTtcbiAgICAgIGlmICghX2lzRGF0ZVZhbGlkKSB7XG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWUgfSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IG1pbkRhdGU6IHRoaXMuX3BpY2tlci5taW5EYXRlIH0gfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IG1heERhdGU6IHRoaXMuX3BpY2tlci5tYXhEYXRlIH0gfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsaWRhdG9yQ2hhbmdlID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcbiAgICAgIGlmICghX2xvY2FsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VEYXRlKHZhbHVlLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5fcGlja2VyLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7XG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIGRpc3BsYXlNb250aHMgPSAyO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXInLFxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBibG9jazsnLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRSYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XG5cbiAgX3JhbmdlU3RhY2s6IERhdGVbXSA9IFtdO1xuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC8vIHRvZG86IGZpeCB0aGlzLCBzcGxpdCBjb25maWdzXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0ZSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIC8vIGFuZCB1c2VyIGNsaWNrcyBvbiBwcmV2aW91cyBkYXRlXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcbiAgICAvLyB0aGFuIGZpbmlzaCBzZWxlY3Rpb25cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPVxuICAgICAgICBkYXkuZGF0ZSA+PSB0aGlzLl9yYW5nZVN0YWNrWzBdXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXG4gICAgICAgICAgOiBbZGF5LmRhdGVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtkYXkuZGF0ZV07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh0aGlzLl9yYW5nZVN0YWNrKSk7XG5cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBDb21wb25lbnRMb2FkZXIgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVyYW5nZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXJhbmdlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcmFuZ2VwaWNrZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXJhbmdlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZFxuICAgKiB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZVtdO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVyYW5nZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVyYW5nZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgLnNob3coe3BsYWNlbWVudDogdGhpcy5wbGFjZW1lbnR9KTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigocmFuZ2U6IERhdGVbXSkgPT4gcmFuZ2UgJiYgcmFuZ2VbMF0gJiYgISFyYW5nZVsxXSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLl9jb25maWcsXG4gICAgICB0aGlzLmJzQ29uZmlnLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZ1xuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGZvcm1hdERhdGUsIGdldExvY2FsZSwgaXNBZnRlciwgaXNCZWZvcmUsIGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXJhbmdlcGlja2VyXWAsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGVbXTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldElucHV0VmFsdWUoZGF0ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgbGV0IHJhbmdlID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSAhZGF0ZVswXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShkYXRlWzBdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICBjb25zdCBlbmQ6IHN0cmluZyA9ICFkYXRlWzFdID8gJydcbiAgICAgICAgOiBmb3JtYXREYXRlKFxuICAgICAgICAgIGRhdGVbMV0sXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcbiAgICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICAgIHJhbmdlID0gKHN0YXJ0ICYmIGVuZCkgPyBzdGFydCArIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yICsgZW5kIDogJyc7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHJhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBbRGF0ZSwgRGF0ZV0gPSBjLnZhbHVlO1xuXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIGNvbnN0IF9pc0RhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVswXSkgJiYgaXNEYXRlVmFsaWQoX3ZhbHVlWzBdKTtcblxuICAgIGlmICghX2lzRGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlIH0gfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZVswXSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZVsxXSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZVtdIHwgc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcbiAgICAgIGlmICghX2xvY2FsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IF9pbnB1dDogKHN0cmluZ1tdIHwgRGF0ZVtdKSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWUuc3BsaXQodGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWU7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+XG4gICAgICAgICAgcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKSlcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1jYWxlbmRhci1sYXlvdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gY3VycmVudCBkYXRlLCB3aWxsIGJlIGFkZGVkIGluIG5lYXJlc3QgcmVsZWFzZXMgLS0+XG4gICAgPGJzLWN1cnJlbnQtZGF0ZSB0aXRsZT1cImhleSB0aGVyZVwiICpuZ0lmPVwiZmFsc2VcIj48L2JzLWN1cnJlbnQtZGF0ZT5cblxuICAgIDwhLS1uYXZpZ2F0aW9uLS0+XG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItaGVhZFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1ib2R5XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tdGltZXBpY2tlci0tPlxuICAgIDxicy10aW1lcGlja2VyICpuZ0lmPVwiZmFsc2VcIj48L2JzLXRpbWVwaWNrZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1jdXJyZW50LWRhdGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjdXJyZW50LXRpbWVkYXRlXCI+PHNwYW4+e3sgdGl0bGUgfX08L3NwYW4+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJzQ3VzdG9tRGF0ZXMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogRGF0ZSB8IERhdGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY3VzdG9tLWRhdGUtdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zXCI+XG4gICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNcIj57eyByYW5nZS5sYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQ3VzdG9tUmFuZ2VTaG93blwiPkN1c3RvbSBSYW5nZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzQ3VzdG9tUmFuZ2VTaG93bjogdHJ1ZTtcbiAgQElucHV0KCkgcmFuZ2VzOiBCc0N1c3RvbURhdGVzW107XG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlckRheURlY29yYXRvcl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2RheS5pc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmlzLWhpZ2hsaWdodGVkXSc6ICdkYXkuaXNIb3ZlcmVkJyxcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcbiAgICAnW2NsYXNzLmluLXJhbmdlXSc6ICdkYXkuaXNJblJhbmdlJyxcbiAgICAnW2NsYXNzLnNlbGVjdC1zdGFydF0nOiAnZGF5LmlzU2VsZWN0aW9uU3RhcnQnLFxuICAgICdbY2xhc3Muc2VsZWN0LWVuZF0nOiAnZGF5LmlzU2VsZWN0aW9uRW5kJyxcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdkYXkuaXNTZWxlY3RlZCdcbiAgfSxcbiAgdGVtcGxhdGU6IGB7eyBkYXkubGFiZWwgfX1gXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheTogRGF5Vmlld01vZGVsO1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlTGVmdEFycm93XCJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj48c3Bhbj4mbHNhcXVvOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxuICAgICAgICAgICAgKm5nSWY9XCJjYWxlbmRhci5tb250aFRpdGxlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ2aWV3KCdtb250aCcpXCJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiAoY2xpY2spPVwidmlldygneWVhcicpXCJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIueWVhclRpdGxlIH19PC9zcGFuPjwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3dcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8oZmFsc2UpXCI+PHNwYW4+JnJzYXF1bzs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBjYWxlbmRhcjogRGF5c0NhbGVuZGFyVmlld01vZGVsO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25EaXJlY3Rpb24+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBuYXZUbyhkb3duOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcbiAgICApO1xuICB9XG5cbiAgdmlldyh2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdCh2aWV3TW9kZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF5cy1jYWxlbmRhci12aWV3JyxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxuXG4gICAgICA8IS0tZGF5cyBtYXRyaXgtLT5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwiZGF5cyB3ZWVrc1wiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8IS0taWYgc2hvdyB3ZWVrcy0tPlxuICAgICAgICAgIDx0aCAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+PC90aD5cbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2YgY2FsZW5kYXIud2Vla2RheXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwid2Vla2RheVwiPnt7IGNhbGVuZGFyLndlZWtkYXlzW2ldIH19XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgY2FsZW5kYXIud2Vla3M7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ3ZWVrXCIgKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPlxuICAgICAgICAgICAgPHNwYW4+e3sgY2FsZW5kYXIud2Vla051bWJlcnNbaV0gfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiByb2xlPVwiZ3JpZGNlbGxcIj5cbiAgICAgICAgICA8c3BhbiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcbiAgICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdERheShkYXkpXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlckRheShkYXksIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckRheShkYXksIGZhbHNlKVwiPnt7IGRheS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgbW9udGg6IHN0ZXAgfSB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdERheShldmVudDogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGhvdmVyRGF5KGNlbGw6IERheVZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbW9udGgtY2FsZW5kYXItdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxuXG4gICAgICA8dGFibGUgcm9sZT1cImdyaWRcIiBjbGFzcz1cIm1vbnRoc1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGNhbGVuZGFyLm1vbnRoc1wiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2Ygcm93XCIgcm9sZT1cImdyaWRjZWxsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInZpZXdNb250aChtb250aClcIlxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3Zlck1vbnRoKG1vbnRoLCB0cnVlKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyTW9udGgobW9udGgsIGZhbHNlKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJtb250aC5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cIm1vbnRoLmlzSG92ZXJlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbW9udGgubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbFZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgfSB9KTtcbiAgfVxuXG4gIHZpZXdNb250aChtb250aDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KG1vbnRoKTtcbiAgfVxuXG4gIGhvdmVyTW9udGgoY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIj4tPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJob3Vyc1wiIHBsYWNlaG9sZGVyPVwiMDBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWluY3JlYXNlXCI+KzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIj4tPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJtaW51dGVzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzd2l0Y2gtdGltZS1mb3JtYXRcIj57eyBhbXBtIH19XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFzQUFBQUtDQVlBQUFCaThLU0RBQUFCU0VsRVFWUVlWM1hRUFV2RFVCUUc0SE51YWd0VnFjNktnb3VDdjZHSXVJbnRZQkxCOWhjSVFwTFN0Q0FJVjdEWW1wVGNSV2NYcVppbzNWd2MvVUNjL1FFcWZneUtHYnIwSTduUzFFaUhlcVl6UE8vaDVTRDBqYXhVWmptU0xDQitPRmIrVUZJTkZ3QVNBRUFkcHU5Z2FHWFZ5QUhIRlFCa0hwS0hjNmE5ZHpFQ3ZBRHlZOXNxbEFNc0s5VzBqenhEWHFleXRyM21oUWNreFNqaTI3VEpKNS9yUG1JcHdKSnEzSHJ0ZHVyaVlPdXJ2MWE0aTFwNUhuaGtHOU9GeW1pMFJlb08wNWNHd2IrYXl2NGR5c1Z5Z2plRm1zUDA1Zjh3cFpROGZzZHZmbXVZOXpqV1NOcVV0Z1lGVm5PVlJlSUxZb0JGemRRSTUvR0dGek5IaEdiZVpub3BER1UyOXNaYnNjZ2xkbUM5OXczNVZPQVRUeWNJTU1jQlhJZnBTVkd6WmhBNkM4aGgwMGNvbmxuNlZROVRHZ1YzMk9FQUtRQzREckJxN0NKd2QwZ2dSN1ZxL3JQcmZnQitDM3NHeXBZNURBQUFBQUJKUlU1RXJrSmdnZz09XCJcbiAgICAgICAgICBhbHQ9XCJcIj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQge1xuICBhbXBtID0gJ29rJztcbiAgaG91cnMgPSAwO1xuICBtaW51dGVzID0gMDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy15ZWFycy1jYWxlbmRhci12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwieWVhcnNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhci55ZWFyc1wiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlld1llYXIoeWVhcilcIlxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlclllYXIoeWVhciwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlclllYXIoeWVhciwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInllYXIuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1oaWdobGlnaHRlZF09XCJ5ZWFyLmlzSG92ZXJlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgeWVhci5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyB5ZWFyOiBzdGVwICogeWVhcnNQZXJDYWxlbmRhciB9IH0pO1xuICB9XG5cbiAgdmlld1llYXIoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xuICB9XG5cbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuaW1wb3J0IHsgd2Fybk9uY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1cnJlbnQtZGF0ZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuXG5jb25zdCBfZXhwb3J0cyA9IFtcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcblxuICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuXG4gIEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUsXG4gIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxuICAgIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50LFxuICAgIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50LFxuICAgIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50LFxuICAgIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCxcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuICAgIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCxcblxuICAgIC4uLl9leHBvcnRzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBfZXhwb3J0c1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3YXJuT25jZShgQnNEYXRlcGlja2VyTW9kdWxlIGlzIHVuZGVyIGRldmVsb3BtZW50LFxuICAgICAgQlJFQUtJTkcgQ0hBTkdFUyBhcmUgcG9zc2libGUsXG4gICAgICBQTEVBU0UsIHJlYWQgY2hhbmdlbG9nYCk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgIEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgICAgICBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgICAgICBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgICAgICBCc0RhdGVwaWNrZXJFZmZlY3RzLFxuICAgICAgICBCc0xvY2FsZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RGF0ZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiSW5qZWN0YWJsZSIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIlZpZXdDaGlsZCIsImlzQnMzIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpbHRlciIsIm1hcCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiaXNGaXJzdERheU9mV2VlayIsImdldERheSIsInNoaWZ0RGF0ZSIsImlzQmVmb3JlIiwiZW5kT2YiLCJpc0FmdGVyIiwic3RhcnRPZiIsImdldEZpcnN0RGF5T2ZNb250aCIsImdldExvY2FsZSIsImlzU2FtZU1vbnRoIiwiaXNTYW1lRGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJzaGlmdCIsImlzU2FtZVllYXIiLCJzZXRGdWxsRGF0ZSIsImlzRGF0ZVZhbGlkIiwiaXNBcnJheSIsInRzbGliXzEuX19leHRlbmRzIiwiTWluaVN0YXRlIiwiTWluaVN0b3JlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIlZpZXdDb250YWluZXJSZWYiLCJDb21wb25lbnRMb2FkZXJGYWN0b3J5IiwiTkdfVkFMSURBVE9SUyIsImlzRGF0ZSIsInBhcnNlRGF0ZSIsIkhvc3QiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Iiwid2Fybk9uY2UiLCJQb3NpdGlvbmluZ1NlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUVBOzs7Ozs7Ozs7UUFDRSw4QkFBTTs7Ozs7O1lBQU4sVUFBTyxJQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWM7Z0JBQy9DLE9BQU9BLGtCQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6Qzs0QkFMSDtRQU1DOzs7Ozs7QUNMRDs7aUNBZ0RnRCxJQUFJQyxpQkFBWSxDQUFPLFNBQVMsQ0FBQzswQkFDeEMsSUFBSUEsaUJBQVksQ0FBTyxLQUFLLENBQUM7b0NBQ25CLElBQUlBLGlCQUFZLENBQU8sU0FBUyxDQUFDOzsyQkFHbkUsRUFBRTs7NkJBRUEsRUFBRTs7NEJBRUgsRUFBRTt5QkFJVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2lDQUNYLElBQUksYUFBYSxFQUFFOzs4QkFheEQsZ0RBQVU7Ozs7Z0JBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7OztnQkFHMUIsVUFBZSxLQUFXO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjs7Ozs7Ozs7UUFHRCwyQ0FBUTs7O1lBQVI7O2dCQUVFLElBQUksQ0FBQyxRQUFRLEdBQUksaUJBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFHLENBQUM7Z0JBRXBFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO29CQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7aUJBQzlCO2FBQ0Y7Ozs7Ozs7UUFJRCw4Q0FBVzs7OztZQUFYLFVBQVksT0FBc0I7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sZUFBWSxDQUFDO2FBQ3REOzs7Ozs7O1FBSUQsOERBQTJCOzs7O1lBQTNCLFVBQTRCLFVBQWU7Z0JBQ3pDLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtvQkFDekMscUJBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7b0JBQy9DLElBQ0UsYUFBYTt3QkFDYixhQUFhLFlBQVksSUFBSTt3QkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUM3RCxFQUFFO3dCQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUM3QztpQkFDRjthQUNGOzs7Ozs7UUFFRCxvREFBaUI7Ozs7O1lBQWpCLFVBQWtCLE9BQWlCLEVBQUUsSUFBWTtnQkFDL0MsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO29CQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO2lCQUNsQztnQkFFRCxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7aUJBQ3BDO2dCQUVELElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztpQkFDbkM7YUFDRjs7Ozs7O1FBRUQsMENBQU87Ozs7O1lBQVAsVUFBUSxLQUFXLEVBQUUsS0FBVztnQkFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzlDLE9BQU8sU0FBUyxDQUFDO2lCQUNsQjtnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDM0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM3QztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDL0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMvQztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDN0QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDO2FBQ2Y7Ozs7OztRQUVELHdEQUFxQjs7Ozs7WUFBckIsVUFBc0IsT0FBaUIsRUFBRSxJQUFZO2dCQUNuRCxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUM7aUJBQ3RDO2dCQUVELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDcEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztpQkFDeEM7Z0JBRUQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNuQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDO2lCQUN2QzthQUNGOzs7O1FBRUQsOENBQVc7OztZQUFYO2dCQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO29CQUMvRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDOUI7Z0JBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7b0JBQ25FLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2lCQUNoQztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtvQkFDakUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQy9CO2FBQ0Y7Ozs7OztRQUVELDZDQUFVOzs7OztZQUFWLFVBQVcsSUFBVSxFQUFFLE1BQWM7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7Ozs7OztRQUdELDJDQUFROzs7O1lBQVIsVUFBUyxVQUFlO2dCQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7b0JBRW5DLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7Ozs7UUFHRCxtREFBZ0I7Ozs7O1lBQWhCLFVBQWlCLElBQVUsRUFBRSxNQUFjOztnQkFFekMscUJBQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQztnQkFDM0IsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUNmLENBQUM7Z0JBQ0YsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEQsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDakQsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUQsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVyRSxPQUFPLFVBQVUsQ0FBQzthQUNuQjs7Ozs7OztRQUdELHdDQUFLOzs7OztZQUFMLFVBQU0sR0FBVSxFQUFFLElBQVk7O2dCQUU1QixxQkFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO2dCQUN6QixPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUVELE9BQU8sTUFBTSxDQUFDO2FBQ2Y7Ozs7Ozs7Ozs7O1FBUUQsOENBQVc7Ozs7WUFBWCxVQUFZLElBQVU7Z0JBQ3BCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRTlCLE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNkLEtBQUssS0FBSyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQzdCLENBQUM7YUFDSDs7Ozs7O1FBRUQseUNBQU07Ozs7O1lBQU4sVUFBTyxJQUFVLEVBQUUsUUFBZTtnQkFBZix5QkFBQTtvQkFBQSxlQUFlOztnQkFDaEMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNqRDtvQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQ2YsQ0FBQztvQkFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLFFBQVEsRUFBRTt3QkFDWixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzFDO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDZixDQUFDO29CQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BELElBQUksUUFBUSxFQUFFO3dCQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FDNUMsQ0FBQztxQkFDSDtpQkFDRjtnQkFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7Ozs7O1FBRUQsdUNBQUk7Ozs7WUFBSixVQUFLLFNBQWlCOztnQkFFcEIscUJBQUksWUFBaUIsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEtBQUssRUFBRTtvQkFDakMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzdCO2dCQUVELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxPQUFPLEVBQUU7b0JBQ25DLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUMvQjtnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUFFO29CQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDOUI7Z0JBRUQsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLHFCQUFNLElBQUksR0FDUixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLFNBQVMsSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxxQkFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUUzQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QzthQUNGOzs7OztRQUVELDZDQUFVOzs7O1lBQVYsVUFBVyxVQUFrQjtnQkFDM0IscUJBQU0sU0FBUyxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBRWxDLElBQ0UsQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLENBQUM7cUJBQ3ZELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQzNELEVBQUU7b0JBQ0EsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxTQUFTLENBQ3BELENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCOzs7OztRQUVTLHdEQUFxQjs7OztZQUEvQixVQUFnQyxJQUFVO2dCQUExQyxpQkFrQkM7Z0JBakJDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixPQUFPLEVBQUUsQ0FBQztpQkFDWDs7Z0JBRUQscUJBQU0saUJBQWlCLEdBS25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsV0FBZ0I7b0JBQ3pDLFFBQ0UsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUM3QyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxjQUFjLEVBQ3hDO2lCQUNILEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRVQsT0FBTyxpQkFBaUIsS0FBSyxTQUFTLEdBQUcsRUFBRSxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQzthQUN2RTs7Ozs7O1FBRVMsc0RBQW1COzs7OztZQUE3QixVQUNFLGFBQTJDLEVBQzNDLEtBQVc7Z0JBRVgsSUFBSSxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3RELE9BQU8sU0FBUyxDQUFDO2lCQUNsQjtnQkFFRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDMUQ7Z0JBRUQsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQzlELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzVEO2dCQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUM1RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRDtnQkFFRCxPQUFPLFNBQVMsQ0FBQzthQUNsQjs7Ozs7UUFFUyw2Q0FBVTs7OztZQUFwQixVQUFxQixJQUFVO2dCQUEvQixpQkF1QkM7Z0JBdEJDLHFCQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQ3ZCLFVBQUMsWUFBMEM7d0JBQ3pDLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ3RELGNBQWMsR0FBRyxJQUFJLENBQUM7eUJBQ3ZCO3FCQUNGLENBQ0YsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLGNBQWM7d0JBQ1osY0FBYzs0QkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7Z0JBRUQsUUFDRSxjQUFjO3FCQUNiLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckQsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3REO2FBQ0g7O29CQXJYRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSx3TkFLVDtxQkFDRjs7OzsrQkFFRUMsVUFBSzt1Q0FDTEEsVUFBSztvQ0FDTEEsVUFBSztrQ0FDTEEsVUFBSztnQ0FFTEEsVUFBSztnQ0FDTEEsVUFBSztnQ0FDTEEsVUFBSztnQ0FDTEEsVUFBSztrQ0FDTEEsVUFBSztrQ0FDTEEsVUFBSztvQ0FDTEEsVUFBSzttQ0FDTEEsVUFBSzt3Q0FDTEEsVUFBSzt1Q0FDTEEsVUFBSzt5Q0FDTEEsVUFBSzt5Q0FDTEEsVUFBSzs0Q0FDTEEsVUFBSztvQ0FDTEEsVUFBSztzQ0FDTEEsVUFBSztxQ0FDTEEsVUFBSztxQ0FDTEEsVUFBSztvQ0FDTEEsVUFBSztpQ0FDTEEsVUFBSztzQ0FFTEMsV0FBTTsrQkFDTkEsV0FBTTt5Q0FDTkEsV0FBTTttQ0F3Qk5ELFVBQUs7O3VDQTNFUjs7Ozs7OztBQ0FBOzswQkFJVyxJQUFJO2tDQUNJLEtBQUs7K0JBQ1IsQ0FBQzs2QkFDSCxFQUFFOzJCQUNKLEtBQUs7MkJBQ0wsTUFBTTs2QkFDSixJQUFJOzZCQUNKLElBQUk7K0JBQ0YsTUFBTTs4QkFDUCxNQUFNO21DQUNELElBQUk7a0NBQ0wsV0FBVztvQ0FDVCxNQUFNO29DQUNOLEtBQUs7aUNBQ1IsQ0FBQztnQ0FDRixDQUFDO3VDQUNNLEtBQUs7OztvQkFsQjVCRSxlQUFVOzsrQkFGWDs7Ozs7OztBQ0FBLHlCQWFhLGlDQUFpQyxHQUFhO1FBQ3pELE9BQU8sRUFBRUMsdUJBQWlCOztRQUUxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEdBQUEsQ0FBQztRQUNsRCxLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7O1FBdUhBLDZCQUFZLE1BQXdCOzs7O2tDQTVFVixLQUFLOzs7OzZCQVlWLElBQUk7aUNBMkNXLElBQUlOLGlCQUFZLENBQU8sU0FBUyxDQUFDOzs7O29DQUk5QixJQUFJQSxpQkFBWSxDQUNyRCxTQUFTLENBQ1Y7OzRCQU1lLFFBQVEsQ0FBQyxTQUFTOzs2QkFFakIsUUFBUSxDQUFDLFNBQVM7d0JBSVosSUFBSSxJQUFJLEVBQUU7WUFJL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7OEJBakNHLDJDQUFVOzs7OztnQkFDWixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7Z0JBR3ZDLFVBQWUsS0FBVztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDMUI7Ozs7Ozs7UUE2QkQsOENBQWdCOzs7WUFBaEI7Z0JBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDOzs7OztRQUVELHNDQUFROzs7O1lBQVIsVUFBUyxLQUFXO2dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0Qjs7Ozs7UUFFRCw2Q0FBZTs7OztZQUFmLFVBQWdCLEtBQVc7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDOzs7OztRQUVELGdEQUFrQjs7OztZQUFsQixVQUFtQixLQUFXO2dCQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DOzs7Ozs7O1FBR0Qsd0NBQVU7Ozs7WUFBVixVQUFXLEtBQVU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNELE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFdEMsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUNwRDs7Ozs7UUFFRCw4Q0FBZ0I7Ozs7WUFBaEIsVUFBaUIsRUFBYztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDcEI7Ozs7O1FBRUQsK0NBQWlCOzs7O1lBQWpCLFVBQWtCLEVBQWM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCOztvQkEvSkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGtuREFnQ1A7d0JBQ0gsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7cUJBQy9DOzs7Ozt3QkE5Q1EsZ0JBQWdCOzs7O3VDQWtEdEJDLFVBQUs7aUNBRUxBLFVBQUs7Z0NBRUxBLFVBQUs7Z0NBRUxBLFVBQUs7Z0NBRUxBLFVBQUs7Z0NBRUxBLFVBQUs7a0NBRUxBLFVBQUs7a0NBRUxBLFVBQUs7b0NBRUxBLFVBQUs7bUNBRUxBLFVBQUs7d0NBRUxBLFVBQUs7dUNBRUxBLFVBQUs7eUNBRUxBLFVBQUs7b0NBRUxBLFVBQUs7a0NBRUxBLFVBQUs7eUNBRUxBLFVBQUs7NENBRUxBLFVBQUs7c0NBRUxBLFVBQUs7cUNBRUxBLFVBQUs7b0NBRUxBLFVBQUs7cUNBRUxBLFVBQUs7b0NBRUxBLFVBQUs7bUNBR0xBLFVBQUs7c0NBU0xDLFdBQU07eUNBSU5BLFdBQU07b0NBS05JLGNBQVMsU0FBQyx3QkFBd0I7O2tDQTVIckM7Ozs7Ozs7QUNFQTtRQTRGRSw0QkFBWSxVQUFvQzswQkFOaEMsRUFBRTt3QkFFSixFQUFFOytCQUNRLEVBQUU7WUFJeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7UUFFRCxzQkFBSSxxQ0FBSzs7O2dCQUFUO2dCQUNFLE9BQU8sQ0FBQ0MsV0FBSyxFQUFFLENBQUM7YUFDakI7OztXQUFBOzs7Ozs7OztRQU1ELHFDQUFROzs7WUFBUjtnQkFDRSxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDcEMscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzNDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxxQkFBTSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakQscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMvRCxxQkFBTSw2QkFBNkIsR0FDakMsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUNoRCxxQkFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXRELElBQUksNkJBQTZCLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZEOztvQkFHRCxxQkFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ25ELHFCQUFNLElBQUksR0FBVSxFQUFFLENBQUM7b0JBQ3ZCLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzQixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3BFLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQzt3QkFDdEQsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7cUJBQ3ZCO29CQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQzt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQzdEO29CQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzt3QkFDdEIscUJBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQzt3QkFDckQscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUNsQyxLQUFLLHFCQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTs0QkFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNsRSxDQUFDO3lCQUNIO3FCQUNGO2lCQUNGLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRVYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUNoQyxLQUFXLEVBQ1gsS0FBVztvQkFFWCxxQkFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDNUUscUJBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzVFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDcEMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9COzs7Ozs7UUFFUyxxQ0FBUTs7Ozs7WUFBbEIsVUFBbUIsU0FBZSxFQUFFLENBQVM7Z0JBQzNDLHFCQUFNLEtBQUssR0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMscUJBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLHFCQUFJLElBQVUsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDbEIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNuQixDQUFDO2lCQUNIO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7O1FBRVMsaURBQW9COzs7O1lBQTlCLFVBQStCLElBQVU7Z0JBQ3ZDLHFCQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzs7Z0JBRTNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUscUJBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Z0JBRWpDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLFFBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3ZFO2FBQ0g7O29CQWxNRlAsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsbXBHQWlFVDtpQ0FFQyxzTUFTRDtxQkFFRjs7Ozs7O3dCQWxGUSx3QkFBd0I7OztpQ0FKakM7Ozs7Ozs7QUNFQTtRQXlERSw4QkFBWSxVQUFvQzt3QkFKbEMsRUFBRTtZQUtkLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzlCO1FBRUQsc0JBQUksdUNBQUs7OztnQkFBVDtnQkFDRSxPQUFPLENBQUNPLFdBQUssRUFBRSxDQUFDO2FBQ2pCOzs7V0FBQTs7OztRQUVELHVDQUFROzs7WUFBUjtnQkFDRSxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFFekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDcEMscUJBQU0sTUFBTSxHQUFVLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxxQkFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkQscUJBQUksSUFBVSxDQUFDO29CQUVmLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDMUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQ3pDO29CQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQy9ELEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRVosSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUNoQyxLQUFXLEVBQ1gsS0FBVztvQkFFWCxxQkFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxxQkFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3BDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRVosSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMvQjs7b0JBM0ZGUCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSwyMERBbUNUO2lDQUVDLGlGQUlEO3FCQUVGOzs7Ozs7d0JBL0NRLHdCQUF3Qjs7O21DQUxqQzs7Ozs7OztBQ0VBO1FBeURFLDZCQUFZLFVBQW9DO3dCQUZsQyxFQUFFO1lBR2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7UUFFRCxzQkFBSSxzQ0FBSzs7O2dCQUFUO2dCQUNFLE9BQU8sQ0FBQ08sV0FBSyxFQUFFLENBQUM7YUFDakI7OztXQUFBOzs7O1FBRUQsc0NBQVE7OztZQUFSO2dCQUNFLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBRWxCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWhFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0JBQ3BDLHFCQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLHFCQUFJLElBQVUsQ0FBQztvQkFDZixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBRWxFLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDdkMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNqRSxLQUFLLENBQ04sQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzdELEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUNoQyxLQUFXLEVBQ1gsS0FBVztvQkFFWCxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ2xELEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMvQjs7Ozs7UUFFUyw2Q0FBZTs7OztZQUF6QixVQUEwQixJQUFZOztnQkFFcEMsUUFDRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUN0RTthQUNIOztvQkFsR0ZQLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHcxREFvQ1Q7aUNBRUMsaUZBSUQ7cUJBRUY7Ozs7O3dCQWhEUSx3QkFBd0I7OztrQ0FMakM7Ozs7Ozs7QUNBQTs7Ozs7O1FBOEJTLHdCQUFPOzs7WUFBZDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQzthQUN0RTs7b0JBckJGUSxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLEVBQUVDLGlCQUFXLENBQUM7d0JBQ3BDLFlBQVksRUFBRTs0QkFDWixtQkFBbUI7NEJBQ25CLHdCQUF3Qjs0QkFDeEIsa0JBQWtCOzRCQUNsQixvQkFBb0I7NEJBQ3BCLG1CQUFtQjt5QkFDcEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLG1CQUFtQjs0QkFDbkIsd0JBQXdCOzRCQUN4QixrQkFBa0I7NEJBQ2xCLG9CQUFvQjs0QkFDcEIsbUJBQW1CO3lCQUNwQjt3QkFDRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDdkM7OytCQTVCRDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQztBQUVELHNCQTZFeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtvQkFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFFRCxvQkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7QUN6SEQ7O1FBQUE7O3FDQUl1QyxFQUFFOztRQUV2QyxzQkFBSSxrREFBTzs7OztnQkFBWCxVQUFZLEtBQVc7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDOzs7V0FBQTtRQUVELHNCQUFJLGtEQUFPOzs7O2dCQUFYLFVBQVksS0FBVztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7OztXQUFBO1FBRUQsc0JBQUkscURBQVU7Ozs7Z0JBQWQsVUFBZSxLQUFjO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQzs7O1dBQUE7Ozs7O1FBUUQsbURBQVc7Ozs7WUFBWCxVQUFZLEtBQTJCLEtBQVU7Ozs7O1FBRWpELGtEQUFVOzs7O1lBQVYsVUFBVyxLQUF3QixLQUFVOzs7OztRQUU3Qyx1REFBZTs7OztZQUFmLFVBQWdCLEtBQXFCLEtBQVU7Ozs7O1FBRS9DLHlEQUFpQjs7OztZQUFqQixVQUFrQixLQUFxQixLQUFVOzs7OztRQUVqRCx3REFBZ0I7Ozs7WUFBaEIsVUFBaUIsS0FBcUIsS0FBVTs7Ozs7UUFFaEQsd0RBQWdCOzs7O1lBQWhCLFVBQWlCLEdBQWlCLEtBQVU7Ozs7O1FBRTVDLDBEQUFrQjs7OztZQUFsQixVQUFtQixLQUE0QixLQUFVOzs7OztRQUV6RCx5REFBaUI7Ozs7WUFBakIsVUFBa0IsS0FBNEIsS0FBVTs7Ozs7O1FBR3hELHdEQUFnQjs7OztZQUFoQixVQUFpQixLQUFVO2dCQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7NENBNURIO1FBNkRDOzs7Ozs7QUM3REQ7Ozs7Ozs7Ozs7a0NBMkJtQixhQUFhOztpQ0FHZCxDQUFDOzs7O21DQUlDLElBQUk7bUNBRUosR0FBRzs7a0NBRUosS0FBSzs7OztvQ0FJSCxHQUFHOzs4QkFHVCxNQUFNOzZCQUNQLE1BQU07NEJBQ1AsR0FBRzs4QkFDRCxNQUFNOzZCQUNQLE1BQU07K0JBQ0osR0FBRzs7O29CQXhDbEJQLGVBQVU7O2lDQVZYOzs7Ozs7O0FDQUE7Ozs7OztRQThCRSx1Q0FBUzs7O1lBQVQ7Z0JBQ0UsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNoRDs7OztRQUVELG9DQUFNOzs7WUFBTjtnQkFDRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdDOzs7O1FBRUQsa0NBQUk7OztZQUFKO2dCQUNFLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0M7Ozs7O1FBRUQsb0NBQU07Ozs7WUFBTixVQUFPLElBQVU7Z0JBQ2YsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtvQkFDaEMsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQzthQUNIOzs7OztRQUVELDRDQUFjOzs7O1lBQWQsVUFBZSxLQUEyQjtnQkFDeEMsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtvQkFDekMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELHdDQUFVOzs7O1lBQVYsVUFBVyxLQUE0QjtnQkFDckMsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsV0FBVztvQkFDckMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELDBDQUFZOzs7O1lBQVosVUFBYSxJQUFjO2dCQUN6QixPQUFPO29CQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxlQUFlO29CQUN6QyxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDO2FBQ0g7Ozs7O1FBRUQsd0NBQVU7Ozs7WUFBVixVQUFXLE9BQWdDO2dCQUN6QyxPQUFPO29CQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxXQUFXO29CQUNyQyxPQUFPLEVBQUUsT0FBTztpQkFDakIsQ0FBQzthQUNIOzs7Ozs7UUFHRCx5Q0FBVzs7OztZQUFYLFVBQVksS0FBYTtnQkFDdkIsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsWUFBWTtvQkFDdEMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELHNDQUFROzs7O1lBQVIsVUFBUyxLQUFxQjtnQkFDNUIsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsS0FBSztvQkFDL0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtpQkFDbEQsQ0FBQzthQUNIOzs7OztRQUVELHFDQUFPOzs7O1lBQVAsVUFBUSxJQUFVO2dCQUNoQixPQUFPO29CQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxZQUFZO29CQUN0QyxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDO2FBQ0g7Ozs7O1FBRUQscUNBQU87Ozs7WUFBUCxVQUFRLElBQVU7Z0JBQ2hCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7b0JBQ3RDLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUM7YUFDSDs7Ozs7UUFFRCx3Q0FBVTs7OztZQUFWLFVBQVcsS0FBYztnQkFDdkIsT0FBTztvQkFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtvQkFDekMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELHVDQUFTOzs7O1lBQVQsVUFBVSxNQUFjO2dCQUN0QixPQUFPO29CQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO29CQUNwQyxPQUFPLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQzthQUNIO3dDQTFHMkIscUNBQXFDO3FDQUN4Qyx1Q0FBdUM7bUNBQ3pDLHdCQUF3QjtxQ0FDdEIsMEJBQTBCOzhDQUNqQiw4QkFBOEI7MENBQ2xDLCtCQUErQjswQ0FDL0Isb0NBQW9DO29DQUMxQyx5QkFBeUI7OENBQ2YsK0JBQStCOzJDQUVsQywyQkFBMkI7MkNBQzNCLDJCQUEyQjs4Q0FDeEIsOEJBQThCO3lDQUVuQyxvQ0FBb0M7MkNBRWxDLHNDQUFzQzs7b0JBbEJ0RUEsZUFBVTs7a0NBVlg7Ozs7Ozs7QUNBQTs7a0NBSzJCLElBQUk7MkJBQ1gsSUFBSVEsb0JBQWUsQ0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDO2lDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTs7UUFFdkUsc0JBQUksbUNBQU07OztnQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7OztXQUFBO1FBRUQsc0JBQUkseUNBQVk7OztnQkFBaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7V0FBQTtRQUVELHNCQUFJLDBDQUFhOzs7Z0JBQWpCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNoQzs7O1dBQUE7Ozs7O1FBRUQsNkJBQUc7Ozs7WUFBSCxVQUFJLE1BQWM7Z0JBQ2hCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2pDLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0I7O29CQXhCRlIsZUFBVTs7OEJBSFg7Ozs7Ozs7O1FDZ0NFLDZCQUFvQixRQUE2QixFQUM3QjtZQURBLGFBQVEsR0FBUixRQUFRLENBQXFCO1lBQzdCLG1CQUFjLEdBQWQsY0FBYzt5QkFIRixFQUFFO1NBR3FCOzs7OztRQUV2RCxrQ0FBSTs7OztZQUFKLFVBQUssa0JBQXFDO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO2dCQUVqQyxPQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7O1FBSUQsc0NBQVE7Ozs7O1lBQVIsVUFBUyxLQUFXO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ25EOzs7OztRQUVELDJDQUFhOzs7O1lBQWIsVUFBYyxLQUFhO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3hEOzs7OztRQUVELHdDQUFVOzs7O1lBQVYsVUFBVyxLQUFXO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUVuRCxPQUFPLElBQUksQ0FBQzthQUNiOzs7OztRQUVELHdDQUFVOzs7O1lBQVYsVUFBVyxLQUFXO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUVuRCxPQUFPLElBQUksQ0FBQzthQUNiOzs7OztRQUVELHlDQUFXOzs7O1lBQVgsVUFBWSxLQUFjO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUV0RCxPQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7UUFHRCx3Q0FBVTs7OztZQUFWLFVBQVcsT0FBMkI7Z0JBQ3BDLHFCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBRXpELE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7Ozs7UUFHRCx5Q0FBVzs7Ozs7WUFBWCxVQUFZLFNBQXdDO2dCQUNsRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNO3FCQUNqQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsYUFBYSxHQUFBLENBQUM7cUJBQ3BDLElBQUksQ0FDSFMsZ0JBQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUMzQixDQUFDOztnQkFHSixTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNO3FCQUNuQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMscUJBQXFCLEdBQUEsQ0FBQztxQkFDNUMsSUFBSSxDQUNIQSxnQkFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sR0FBQSxDQUFDLENBQzNCLENBQUM7O2dCQUdKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU07cUJBQ2xDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxvQkFBb0IsR0FBQSxDQUFDO3FCQUMzQyxJQUFJLENBQ0hBLGdCQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FDekIsQ0FBQztnQkFFSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDO2dCQUVsRSxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO3FCQUM1QixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsZUFBZSxHQUFBLENBQUM7cUJBQ3RDLElBQUksQ0FDSEMsYUFBRyxDQUFDLFVBQUEsZUFBZSxJQUFJLFFBQUMsRUFBQyxlQUFlLGlCQUFBLEVBQUMsSUFBQyxDQUFDLENBQzVDLENBQUM7Z0JBRUosT0FBTyxJQUFJLENBQUM7YUFDYjs7Ozs7OztRQUdELDhDQUFnQjs7Ozs7WUFBaEIsVUFBaUIsU0FBd0M7Z0JBQXpELGlCQTREQztnQkEzREMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQTJCO29CQUNsRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUMzRCxDQUFDO2dCQUVGLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBQyxLQUF3QjtvQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzlELENBQUM7Z0JBRUYsU0FBUyxDQUFDLGVBQWUsR0FBRyxVQUFDLEtBQXFCO29CQUNoRCxxQkFBTSxLQUFLLElBQUcsS0FBSyxDQUFDLElBQW9CLENBQUEsQ0FBQztvQkFDekMsSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQzFDLE9BQU87cUJBQ1I7b0JBRUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUNuQyxDQUFDO2dCQUVGLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLEtBQXFCO29CQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxDQUFDO2dCQUVGLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFDLEtBQXFCO29CQUNqRCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxDQUFDOzs7Ozs7OztnQkFVRixTQUFTLENBQUMsa0JBQWtCLEdBQUcsVUFBQyxLQUE0QjtvQkFDMUQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO3dCQUNwQixPQUFPO3FCQUNSO29CQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDdkIsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFQyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQzt3QkFDbkMsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCLENBQUMsQ0FDSCxDQUFDO2lCQUNILENBQUM7Z0JBRUYsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQUMsS0FBNEI7b0JBQ3pELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsT0FBTztxQkFDUjtvQkFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7d0JBQ3ZCLElBQUksRUFBRSxFQUFDLElBQUksRUFBRUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUM7d0JBQ3JDLFFBQVEsRUFBRSxPQUFPO3FCQUNsQixDQUFDLENBQ0gsQ0FBQztpQkFDSCxDQUFDO2dCQUVGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7UUFFRCwyREFBNkI7OztZQUE3QjtnQkFBQSxpQkFpRkM7Z0JBaEZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksR0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFDcEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRCxDQUFDLENBQ0gsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsR0FBQSxDQUFDO3FCQUNsQyxJQUFJLENBQ0hILGdCQUFNLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxHQUFBLENBQUMsQ0FDbkM7cUJBQ0EsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDcEUsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGVBQWUsR0FBQSxDQUFDO3FCQUN0QyxJQUFJLENBQ0hBLGdCQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FDekI7cUJBQ0EsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDbEUsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFlBQVksR0FBQSxDQUFDO3FCQUNuQyxJQUFJLENBQ0hBLGdCQUFNLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxHQUFBLENBQUMsQ0FDdkM7cUJBQ0EsU0FBUyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDekUsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGFBQWEsR0FBQSxDQUFDO3FCQUNwQyxJQUFJLENBQ0hBLGdCQUFNLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxDQUFDLENBQUMsYUFBYSxHQUFBLENBQUMsQ0FDekM7cUJBQ0EsU0FBUyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDMUUsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGNBQWMsR0FBQSxDQUFDO3FCQUNyQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQy9ELENBQUM7O2dCQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO3FCQUNSLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxrQkFBa0IsR0FBQSxDQUFDO3FCQUN6QyxJQUFJLENBQ0hBLGdCQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FDekI7cUJBQ0EsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUMvRCxDQUFDOztnQkFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsTUFBTTtxQkFDUixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxHQUFBLENBQUM7cUJBQ2xDLElBQUksQ0FDSEEsZ0JBQU0sQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUEsQ0FBQyxDQUNyQztxQkFDQSxTQUFTLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUN4RSxDQUFDOztnQkFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUM5RSxDQUFDO2dCQUVGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7UUFFRCxxQ0FBTzs7O1lBQVA7O29CQUNFLEtBQWtCLElBQUEsS0FBQUksU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBO3dCQUF2QixJQUFNLEdBQUcsV0FBQTt3QkFDWixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ25COzs7Ozs7Ozs7Ozs7Ozs7O2FBQ0Y7O29CQS9PRmIsZUFBVTs7Ozs7d0JBTEYsbUJBQW1CO3dCQUVuQixlQUFlOzs7a0NBbEJ4Qjs7Ozs7OztBQ0lBLElBQU8scUJBQU0sbUJBQW1CLEdBQXFCO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDOzs7Ozs7QUNHRixJQTREQSxxQkFBTSxZQUFZLEdBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBRTlFLElBQU8scUJBQU0sc0JBQXNCLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQ3BFLElBQUksa0JBQWtCLEVBQUUsRUFDeEI7UUFDRSxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxZQUFZO1FBQ2xCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGdCQUFnQixFQUFFLG1CQUFtQjtLQUN0QyxDQUNGLENBQUM7Ozs7OztBQ2hGRjs7Ozs7QUFVQSxzQ0FBeUMsSUFBVSxFQUNWLE9BQW9DO1FBQzNFLElBQUljLHdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHFCQUFNLE9BQU8sR0FBR0MsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLHFCQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBFLE9BQU9DLGlCQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztLQUN4Qzs7Ozs7O0FBRUQsaUNBQW9DLE9BQWUsRUFBRSxpQkFBeUI7UUFDNUUsSUFBSSxpQkFBaUIsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFFRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUUvQyxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDekM7Ozs7Ozs7QUFFRCw2QkFBZ0MsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO1FBQzlELHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUlDLGdCQUFRLENBQUNDLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUlDLGVBQU8sQ0FBQ0MsZUFBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEUsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDO0tBQzdCOzs7Ozs7O0FBRUQsNEJBQStCLElBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUztRQUM3RCxxQkFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJSCxnQkFBUSxDQUFDQyxhQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxxQkFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJQyxlQUFPLENBQUNDLGVBQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRW5FLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQztLQUM3Qjs7Ozs7O0FDNUNEOzs7Ozs7QUFXQSwwQkFDRSxPQUFzQixFQUN0QixFQUFxQjtRQUVyQixxQkFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNwQyxxQkFBTSxNQUFNLEdBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0IsU0FBUyxHQUFHSixpQkFBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakQ7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Ozs7OztBQ3RCRDs7Ozs7QUFJQSw4QkFDRSxZQUFrQixFQUNsQixPQUF5QjtRQUV6QixxQkFBTSxRQUFRLEdBQUdLLDBCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELHFCQUFNLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFaEUscUJBQU0sYUFBYSxHQUFHO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsV0FBVyxhQUFBO1lBQ1gsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtTQUNsQixDQUFDO1FBQ0YscUJBQU0sVUFBVSxHQUFHLFlBQVksQ0FBTyxhQUFhLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEdBQUEsQ0FBQyxDQUFDO1FBRW5FLE9BQU87WUFDTCxVQUFVLFlBQUE7WUFDVixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO0tBQ0g7Ozs7Ozs7Ozs7OztBQ3BCRCxnQ0FBbUMsWUFBK0IsRUFDL0IsYUFBc0MsRUFDdEMsVUFBa0I7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztZQUN6QixVQUFVLEVBQUUxQixrQkFBVSxDQUNwQixZQUFZLENBQUMsS0FBSyxFQUNsQixhQUFhLENBQUMsVUFBVSxFQUN4QixhQUFhLENBQUMsTUFBTSxDQUNyQjtZQUNELFNBQVMsRUFBRUEsa0JBQVUsQ0FDbkIsWUFBWSxDQUFDLEtBQUssRUFDbEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7WUFDRCxXQUFXLEVBQUUsY0FBYyxDQUN6QixZQUFZLENBQUMsVUFBVSxFQUN2QixhQUFhLENBQUMsV0FBVyxFQUN6QixhQUFhLENBQUMsTUFBTSxDQUNyQjtZQUNELFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2xELEtBQUssRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVksRUFBRSxTQUFpQjtnQkFBSyxRQUFDO29CQUN2RSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVUsRUFBRSxRQUFnQjt3QkFBSyxRQUFDOzRCQUNoRCxJQUFJLE1BQUE7NEJBQ0osS0FBSyxFQUFFQSxrQkFBVSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7NEJBQ3JFLFVBQVUsWUFBQTs0QkFDVixTQUFTLFdBQUE7NEJBQ1QsUUFBUSxVQUFBO3lCQUNUO3FCQUFDLENBQUM7aUJBQ0o7YUFBQyxDQUFDO1NBQ0osQ0FBQztLQUNIOzs7Ozs7O0FBRUQsNEJBQStCLFVBQW9CLEVBQ3BCLE1BQWMsRUFDZCxNQUFjO1FBQzNDLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FDbkIsVUFBQyxJQUFZLElBQUssUUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUMsQ0FDdkUsQ0FBQztLQUNIOzs7OztBQUVELGdDQUFtQyxNQUFjO1FBQy9DLHFCQUFNLE9BQU8sR0FBRzJCLGlCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMscUJBQU0sUUFBUSxJQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQWMsQ0FBQSxDQUFDO1FBQ3JELHFCQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFaEQsZ0JBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRTtLQUNsRjs7Ozs7O0FDakREOzs7OztBQWNBLDhCQUNFLGNBQXFDLEVBQ3JDLE9BQWdDO1FBRWhDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBbUIsRUFBRSxTQUFpQjtZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWlCLEVBQUUsUUFBZ0I7O2dCQUVwRCxxQkFBTSxZQUFZLEdBQUcsQ0FBQ0MsbUJBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbEUscUJBQU0sU0FBUyxHQUNiLENBQUMsWUFBWSxJQUFJQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztnQkFFNUQscUJBQU0sZ0JBQWdCLEdBQ3BCLENBQUMsWUFBWTtvQkFDYixPQUFPLENBQUMsYUFBYTtvQkFDckJBLGlCQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELHFCQUFNLGNBQWMsR0FDbEIsQ0FBQyxZQUFZO29CQUNiLE9BQU8sQ0FBQyxhQUFhO29CQUNyQkEsaUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFaEQscUJBQU0sVUFBVSxHQUNkLENBQUMsQ0FBQyxZQUFZLElBQUlBLGlCQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUMzRCxnQkFBZ0I7b0JBQ2hCLGNBQWMsQ0FBQztnQkFFakIscUJBQU0sU0FBUyxHQUNiLENBQUMsWUFBWTtvQkFDYixPQUFPLENBQUMsYUFBYTtvQkFDckIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXRFLHFCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtvQkFDbEJQLGdCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztvQkFDMUNFLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7O2dCQUc1QyxxQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFO29CQUNwQyxZQUFZLGNBQUE7b0JBQ1osU0FBUyxXQUFBO29CQUNULFVBQVUsWUFBQTtvQkFDVixnQkFBZ0Isa0JBQUE7b0JBQ2hCLGNBQWMsZ0JBQUE7b0JBQ2QsU0FBUyxXQUFBO29CQUNULFVBQVUsWUFBQTtpQkFDWCxDQUFDLENBQUM7Z0JBRUgsSUFDRSxHQUFHLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxZQUFZO29CQUN4QyxHQUFHLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxTQUFTO29CQUNsQyxHQUFHLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxVQUFVO29CQUNwQyxHQUFHLENBQUMsZ0JBQWdCLEtBQUssTUFBTSxDQUFDLGdCQUFnQjtvQkFDaEQsR0FBRyxDQUFDLGNBQWMsS0FBSyxNQUFNLENBQUMsY0FBYztvQkFDNUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxNQUFNLENBQUMsVUFBVTtvQkFDcEMsR0FBRyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsU0FDM0IsRUFBRTtvQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztpQkFDOUI7YUFDRixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7O1FBR0gsY0FBYyxDQUFDLGFBQWE7WUFDMUIsT0FBTyxDQUFDLFVBQVU7aUJBQ2pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLGNBQWMsQ0FBQyxjQUFjO1lBQzNCLE9BQU8sQ0FBQyxVQUFVO2lCQUNqQixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhO29CQUN6QyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdEQsY0FBYyxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FDL0NILGlCQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQzlDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztRQUNGLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQ2hEQSxpQkFBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDN0MsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBRUYsT0FBTyxjQUFjLENBQUM7S0FDdkI7Ozs7Ozs7SUFFRCx1QkFDRSxJQUFVLEVBQ1YsYUFBcUIsRUFDckIsV0FBaUI7UUFFakIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7Ozs7OztBQ3ZIRCwyQkFBOEIsSUFBMEI7UUFDdEQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0FDQ0QsSUFHQSxxQkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLHFCQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEIscUJBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFM0Isa0NBQ0UsUUFBYyxFQUNkLGFBQXNDO1FBRXRDLHFCQUFNLFdBQVcsR0FBR0ksZUFBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxxQkFBTSxhQUFhLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO1FBQzVELHFCQUFNLFdBQVcsR0FBRyxZQUFZLENBRTlCLGFBQWEsRUFBRSxVQUFBLElBQUk7WUFBSSxRQUFDO2dCQUN4QixJQUFJLE1BQUE7Z0JBQ0osS0FBSyxFQUFFekIsa0JBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3hFO1NBQUMsQ0FBQyxDQUFDO1FBRUosT0FBTztZQUNMLE1BQU0sRUFBRSxXQUFXO1lBQ25CLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFQSxrQkFBVSxDQUNuQixRQUFRLEVBQ1IsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7U0FDRixDQUFDO0tBQ0g7Ozs7OztBQ2xDRDs7Ozs7QUFnQkEsZ0NBQ0UsYUFBc0MsRUFDdEMsT0FBaUM7UUFFakMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLFVBQUMsTUFBK0IsRUFBRSxRQUFnQjtZQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBNEIsRUFBRSxVQUFrQjtnQkFDOUQscUJBQU0sU0FBUyxHQUFHNEIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEUscUJBQU0sVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVO29CQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUscUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLFNBQVMsS0FBSyxFQUFFO29CQUM1QyxTQUFTLFdBQUE7b0JBQ1QsVUFBVSxZQUFBO2lCQUNYLENBQUMsQ0FBQztnQkFDSCxJQUNFLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVM7b0JBQ3RDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLFVBQ2hDLEVBQUU7b0JBQ0EsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7aUJBQ3ZEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FDRixDQUFDOztRQUdGLGFBQWEsQ0FBQyxhQUFhO1lBQ3pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6RSxhQUFhLENBQUMsY0FBYztZQUMxQixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhO2dCQUMxQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRW5ELGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQzdDUCxpQkFBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDeEQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBQ0YsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUNBLGlCQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdkQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7S0FDdEI7Ozs7OztBQ3ZERCxJQUdBLHFCQUFNUyxRQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLHFCQUFNQyxPQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLElBQU8scUJBQU0sZ0JBQWdCLEdBQUdELFFBQU0sR0FBR0MsT0FBSyxDQUFDO0lBQy9DLHFCQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLHFCQUFNQyxPQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7OztBQUUxQixpQ0FDRSxRQUFjLEVBQ2QsYUFBc0M7UUFFdEMscUJBQU0sV0FBVyxHQUFHWCxpQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLHFCQUFNLGFBQWEsR0FBRyxFQUFFLEtBQUssU0FBQSxFQUFFLE1BQU0sVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLEtBQUssU0FBQSxFQUFFLENBQUM7UUFDNUQscUJBQU0sV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYSxFQUFFLFVBQUEsSUFBSTtZQUFJLFFBQUM7Z0JBQ3hCLElBQUksTUFBQTtnQkFDSixLQUFLLEVBQUVyQixrQkFBVSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDdkU7U0FBQyxDQUFDLENBQUM7UUFDSixxQkFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRW5FLE9BQU87WUFDTCxLQUFLLEVBQUUsV0FBVztZQUNsQixVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsV0FBQTtTQUNWLENBQUM7S0FDSDs7Ozs7O0lBRUQsOEJBQ0UsV0FBc0MsRUFDdEMsYUFBc0M7UUFFdEMscUJBQU0sSUFBSSxHQUFHQSxrQkFBVSxDQUNyQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN0QixhQUFhLENBQUMsU0FBUyxFQUN2QixhQUFhLENBQUMsTUFBTSxDQUNyQixDQUFDO1FBQ0YscUJBQU0sRUFBRSxHQUFHQSxrQkFBVSxDQUNuQixXQUFXLENBQUM4QixRQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE9BQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3ZDLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCLENBQUM7UUFFRixPQUFVLElBQUksV0FBTSxFQUFJLENBQUM7S0FDMUI7Ozs7OztBQ25ERDs7Ozs7QUFhQSwrQkFDRSxhQUFxQyxFQUNyQyxPQUFpQztRQUVqQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDekIsVUFBQyxLQUE4QixFQUFFLFFBQWdCO1lBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUEyQixFQUFFLFNBQWlCO2dCQUMzRCxxQkFBTSxTQUFTLEdBQUdFLGtCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdELHFCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtvQkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRTlELHFCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxTQUFTLElBQUksRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsSUFDRSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO29CQUNyQyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUMvQixFQUFFO29CQUNBLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDO2lCQUNyRDthQUNGLENBQUMsQ0FBQztTQUNKLENBQ0YsQ0FBQzs7UUFHRixhQUFhLENBQUMsYUFBYTtZQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdkUsYUFBYSxDQUFDLGNBQWM7WUFDMUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYTtnQkFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVsRCxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUM3Q1osaUJBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztRQUNGLHFCQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekMscUJBQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUM5Q0EsaUJBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUN0RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztLQUN0Qjs7Ozs7O0FDeEREOzs7OztBQXdCQSxpQ0FBb0MsS0FBOEIsRUFDOUIsTUFBYztRQURkLHNCQUFBO1lBQUEsOEJBQThCOztRQUVoRSxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLEtBQUssbUJBQW1CLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLE9BQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNyQztZQUVELEtBQUssbUJBQW1CLENBQUMsSUFBSSxFQUFFO2dCQUM3QixPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbkM7WUFFRCxLQUFLLG1CQUFtQixDQUFDLGVBQWUsRUFBRTtnQkFDeEMscUJBQU0sSUFBSSxHQUFHQSxpQkFBUyxDQUFDSSxlQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRSxxQkFBTSxRQUFRLEdBQUc7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7d0JBQ3JCLElBQUksTUFBQTtxQkFDTDtpQkFDRixDQUFDO2dCQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsS0FBSyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLHFCQUFNLE9BQU8sR0FBMEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFFdEQscUJBQU0sSUFBSSxHQUFHUyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEQscUJBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLHFCQUFNLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsQ0FBQztnQkFFMUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDM0M7WUFFRCxLQUFLLG1CQUFtQixDQUFDLGVBQWUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FFbkM7Z0JBQ0QscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixxQkFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDNUIscUJBQU0sUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRSxDQUFDO2dCQUUxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMzQztZQUVELEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFO2dCQUM5QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNsRTtZQUVELEtBQUssbUJBQW1CLENBQUMsTUFBTSxFQUFFO2dCQUMvQixxQkFBTSxRQUFRLEdBQUc7b0JBQ2YsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPO29CQUM1QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7aUJBQ2pCLENBQUM7Z0JBRUYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEQscUJBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlELFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDO2dCQUUvQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMzQztZQUVELEtBQUssbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxxQkFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Z0JBRWhDLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IscUJBQU0sU0FBUyxHQUFHQyxtQkFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSzt1QkFDMURDLGVBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUlELG1CQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3VCQUM5RSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIscUJBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDOztnQkFFL0IsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFOztvQkFFbEIsSUFBSUMsZUFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDM0IsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3FCQUN6Qzs7b0JBR0QsSUFBSSxRQUFRLENBQUMsS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDbEMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3FCQUN4Qzs7O2lCQUlGO2dCQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDOztZQUdELEtBQUssbUJBQW1CLENBQUMsWUFBWSxFQUFFO2dCQUNyQyxxQkFBTSxRQUFRLEdBQUc7b0JBQ2YsYUFBYSxFQUFFLE1BQU0sQ0FBQyxPQUFPO29CQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7aUJBQ2pCLENBQUM7Z0JBRUYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyRSxxQkFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7Z0JBRS9CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsS0FBSyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUM5QixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQzNCLENBQUMsQ0FBQzthQUNKO1lBRUQ7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7U0FDaEI7S0FDRjs7Ozs7SUFFRCwwQkFBMEIsS0FBd0I7O1FBRWhELHFCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDOztRQUUxQyxxQkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFL0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDN0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBR1QsaUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakYscUJBQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLEtBQUsscUJBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFOztnQkFFakUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGdCQUFnQixDQUN4QyxRQUFRLEVBQ1IsS0FBSyxDQUFDLGdCQUFnQixDQUN2QixDQUFDO2dCQUNGLFFBQVEsR0FBR04saUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDL0IscUJBQU0sY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELEtBQ0UscUJBQUksYUFBYSxHQUFHLENBQUMsRUFDckIsYUFBYSxHQUFHLGFBQWEsRUFDN0IsYUFBYSxFQUFFLEVBQ2Y7O2dCQUVBLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxvQkFBb0IsQ0FDbEQsUUFBUSxFQUNSLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO2dCQUNGLFFBQVEsR0FBR0EsaUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3QztZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzlCLHFCQUFNLGtCQUFrQixHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXBELEtBQ0UscUJBQUksYUFBYSxHQUFHLENBQUMsRUFDckIsYUFBYSxHQUFHLGFBQWEsRUFDN0IsYUFBYSxFQUFFLEVBQ2Y7O2dCQUVBLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxHQUFHLG1CQUFtQixDQUNyRCxRQUFRLEVBQ1IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7Z0JBQ0YsUUFBUSxHQUFHQSxpQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7YUFDNUQ7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGtCQUFrQixvQkFBQSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUVELHVCQUF1QixLQUF3QixFQUN4QixNQUFjO1FBQ25DLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQzdCLHFCQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxVQUFVO2dCQUM5RCxPQUFBLGtCQUFrQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUM7YUFBQSxDQUMvRCxDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxlQUFlLGlCQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ3REOztRQUdELHFCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDOzs7UUFHMUMscUJBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRS9CLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQy9CLHFCQUFNLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRCxLQUNFLHFCQUFJLGFBQWEsR0FBRyxDQUFDLEVBQ3JCLGFBQWEsR0FBRyxhQUFhLEVBQzdCLGFBQWEsRUFBRSxFQUNmOztnQkFFQSxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsb0JBQW9CLENBQ2xELFFBQVEsRUFDUixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztnQkFDRixRQUFRLEdBQUdBLGlCQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDN0M7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUM5QixxQkFBTSxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxLQUNFLHFCQUFJLGFBQWEsR0FBRyxDQUFDLEVBQ3JCLGFBQWEsR0FBRyxhQUFhLEVBQzdCLGFBQWEsRUFBRSxFQUNmOztnQkFFQSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxtQkFBbUIsQ0FDckQsUUFBUSxFQUNSLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO2dCQUNGLFFBQVEsR0FBR0EsaUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLG9CQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRUQscUJBQXFCLEtBQXdCLEVBQ3hCLE1BQWM7UUFDakMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDN0IscUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUM3QyxVQUFDLGNBQWMsRUFBRSxVQUFVO2dCQUN6QixPQUFBLGdCQUFnQixDQUFDLGNBQWMsRUFBRTtvQkFDL0IsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO29CQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO29CQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7b0JBQ2hDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtvQkFDbEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO29CQUNsQyxVQUFVLFlBQUE7aUJBQ1gsQ0FBQzthQUFBLENBQ0wsQ0FBQztZQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDL0IscUJBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3BELFVBQUMsY0FBYyxFQUFFLFVBQVU7Z0JBQ3pCLE9BQUEsa0JBQWtCLENBQUMsY0FBYyxFQUFFO29CQUNqQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7b0JBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7b0JBQ2hDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtvQkFDbEMsVUFBVSxZQUFBO2lCQUNYLENBQUM7YUFBQSxDQUNMLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzlCLHFCQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ3ZELFVBQUMsY0FBYyxFQUFFLFNBQVM7Z0JBQ3hCLE9BQUEsaUJBQWlCLENBQUMsY0FBYyxFQUFFO29CQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7b0JBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7b0JBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtvQkFDbEMsU0FBUyxXQUFBO2lCQUNWLENBQUM7YUFBQSxDQUNMLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLG9CQUFvQixzQkFBQSxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBRUQsMEJBQTBCLEtBQXdCO1FBQ2hELE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFFcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUUxQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUUxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDL0IsQ0FBQztLQUNIOzs7Ozs7Ozs7OztJQVFELHFCQUFxQixRQUF1QixFQUFFLE9BQWEsRUFBRSxPQUFhO1FBQ3hFLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFL0QsSUFBSSxPQUFPLElBQUlHLGVBQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxPQUFPLElBQUlGLGdCQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM5QyxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7Ozs7UUNoV3NDZSxxQ0FBNEI7UUFDakU7WUFBQSxpQkFVQztZQVRDLHFCQUFNLFdBQVcsR0FBRyxJQUFJeEIsb0JBQWUsQ0FBUztnQkFDOUMsSUFBSSxFQUFFLDhCQUE4QjthQUNyQyxDQUFDLENBQUM7WUFDSCxxQkFBTSxLQUFLLEdBQUcsSUFBSXlCLGtCQUFTLENBQ3pCLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7WUFDRixRQUFBLGtCQUFNLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsU0FBQzs7U0FDaEQ7O29CQVpGakMsZUFBVTs7OztnQ0FOWDtNQU91Q2tDLGtCQUFTOzs7Ozs7O1FDY0lGLGtEQUE2QjtRQVEvRSx3Q0FDVSxTQUNBLFFBQ0EsVUFDUixRQUE2QjtZQUovQixZQU1FLGlCQUFPLFNBRVI7WUFQUyxhQUFPLEdBQVAsT0FBTztZQUNQLFlBQU0sR0FBTixNQUFNO1lBQ04sY0FBUSxHQUFSLFFBQVE7Z0NBTmdCLElBQUlwQyxpQkFBWSxFQUFROzBCQUVsQyxFQUFFO1lBUXhCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztTQUMxQjtRQWRELHNCQUFJLGlEQUFLOzs7O2dCQUFULFVBQVUsS0FBVztnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7OztXQUFBOzs7O1FBY0QsaURBQVE7OztZQUFSO2dCQUFBLGlCQXFCQztnQkFwQkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBRWpCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDO3FCQUVqQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7cUJBQ3RCLDZCQUE2QixFQUFFLENBQUM7OztnQkFJbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBRVIsTUFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxDQUFDLFlBQVksR0FBQSxDQUFDO3FCQUUxQyxTQUFTLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQ3pELENBQUM7YUFDSDs7Ozs7UUFFRCx5REFBZ0I7Ozs7WUFBaEIsVUFBaUIsR0FBaUI7Z0JBQ2hDLElBQUksR0FBRyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO29CQUN0QyxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3REOzs7O1FBRUQsb0RBQVc7OztZQUFYOztvQkFDRSxLQUFrQixJQUFBLEtBQUFpQixTQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUE7d0JBQXZCLElBQU0sR0FBRyxXQUFBO3dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDbkI7Ozs7Ozs7Ozs7Ozs7OztnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDOzthQUN6Qjs7b0JBaEVGaEIsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUNuRCx3eUVBQXdDO3dCQUN4QyxJQUFJLEVBQUU7NEJBQ0osU0FBUyxFQUFFLDBCQUEwQjs0QkFDckMsS0FBSyxFQUFFLHFDQUFxQzs0QkFDNUMsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsWUFBWSxFQUFFLFVBQVU7eUJBQ3pCO3FCQUNGOzs7Ozt3QkFqQlEsa0JBQWtCO3dCQUlsQixpQkFBaUI7d0JBRmpCLG1CQUFtQjt3QkFDbkIsbUJBQW1COzs7NkNBTjVCO01BcUJvRCw2QkFBNkI7Ozs7Ozs7UUM4RS9FLCtCQUFtQixPQUEyQixFQUNsQyxXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsR0FBMkI7WUFKcEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7Ozs7NkJBbEZZLFFBQVE7Ozs7OzRCQUs5QyxPQUFPOzs7O2dDQUlILElBQUk7Ozs7OzZCQUtQLE1BQU07Ozs7aUNBNkRtQixJQUFJRCxpQkFBWSxFQUFFO3lCQUU5QixFQUFFOztZQVdsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUNqQyxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQzNDOzhCQTVFRyx5Q0FBTTs7Ozs7Z0JBQ1IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzs7Ozs7Z0JBR2xDLFVBQVcsS0FBYztnQkFDdkIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGOzs7OzhCQWtCRywwQ0FBTzs7Ozs7MEJBQUMsS0FBVztnQkFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDM0IsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1FBNkNqQyx3Q0FBUTs7O1lBQVI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixJQUFJLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQTtpQkFDeEIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjs7Ozs7UUFFRCwyQ0FBVzs7OztZQUFYLFVBQVksT0FBc0I7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3pELE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxPQUFPLGFBQVU7b0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNyRDtnQkFFRCxJQUFJLE9BQU8sYUFBVTtvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ3JEO2dCQUVELElBQUksT0FBTyxnQkFBYTtvQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzNEO2FBQ0Y7Ozs7Ozs7Ozs7UUFNRCxvQ0FBSTs7Ozs7WUFBSjtnQkFBQSxpQkE0QkM7Z0JBM0JDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO3FCQUNuQyxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztxQkFDOUQsTUFBTSxDQUFDLDhCQUE4QixDQUFDO3FCQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQkFDbEIsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDOztnQkFHckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFXO29CQUN2QyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUM1QyxDQUFDLENBQ0gsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVc7b0JBQzdELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2IsQ0FBQyxDQUNILENBQUM7YUFDSDs7Ozs7Ozs7OztRQU1ELG9DQUFJOzs7OztZQUFKO2dCQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN6Qjs7b0JBQ0QsS0FBa0IsSUFBQSxLQUFBaUIsU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBO3dCQUF2QixJQUFNLEdBQUcsV0FBQTt3QkFDWixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ25COzs7Ozs7Ozs7Ozs7Ozs7O2FBQ0Y7Ozs7Ozs7Ozs7UUFNRCxzQ0FBTTs7Ozs7WUFBTjtnQkFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BCO2dCQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiOzs7Ozs7OztRQUtELHlDQUFTOzs7O1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDL0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87aUJBQ2hFLENBQUMsQ0FBQzthQUNKOzs7O1FBRUQsMkNBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDNUI7O29CQTlNRnNCLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsY0FBYztxQkFDekI7Ozs7O3dCQUxRLGtCQUFrQjt3QkFOQUMsZUFBVTt3QkFDUkMsY0FBUzt3QkFBaUJDLHFCQUFnQjt3QkFFN0NDLHNDQUFzQjs7OztrQ0FhN0N6QyxVQUFLO2lDQUtMQSxVQUFLO3FDQUlMQSxVQUFLO2tDQUtMQSxVQUFLOytCQUtMQSxVQUFLO2dDQWlCTEMsV0FBTTtpQ0FLTkEsV0FBTTtnQ0FNTkQsVUFBSztpQ0FZTEEsVUFBSzttQ0FJTEEsVUFBSztnQ0FJTEEsVUFBSztnQ0FJTEEsVUFBSztzQ0FJTEMsV0FBTTs7b0NBNUZUOzs7Ozs7O0FDQUEsSUFnQ0EscUJBQU0sNEJBQTRCLEdBQWE7UUFDN0MsT0FBTyxFQUFFRSx1QkFBaUI7O1FBRTFCLFdBQVcsRUFBRUMsZUFBVSxDQUFDLGNBQU0sT0FBQSwwQkFBMEIsR0FBQSxDQUFDO1FBQ3pELEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQztJQUVGLHFCQUFNLHVCQUF1QixHQUFhO1FBQ3hDLE9BQU8sRUFBRXNDLG1CQUFhOztRQUV0QixXQUFXLEVBQUV0QyxlQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixHQUFBLENBQUM7UUFDekQsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOztRQW1CQSxvQ0FBNEIsU0FDUixnQkFDQSxXQUNBLFFBQ0E7WUFKcEIsaUJBb0JDO1lBcEIyQixZQUFPLEdBQVAsT0FBTztZQUNmLG1CQUFjLEdBQWQsY0FBYztZQUNkLGNBQVMsR0FBVCxTQUFTO1lBQ1QsV0FBTSxHQUFOLE1BQU07WUFDTixvQkFBZSxHQUFmLGVBQWU7NkJBVmYsUUFBUSxDQUFDLFNBQVM7OEJBQ2pCLFFBQVEsQ0FBQyxTQUFTO29DQUVaLFFBQVEsQ0FBQyxTQUFTOztZQVMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFXO2dCQUMvQyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEtBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO29CQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjtnQkFDRCxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JDLENBQUMsQ0FBQzs7WUFHSCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDLENBQUMsQ0FBQztTQUNKOzs7OztRQUVELG1EQUFjOzs7O1lBQWQsVUFBZSxLQUFXO2dCQUN4QixxQkFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRTtzQkFDM0JQLGtCQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUUvRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDN0U7Ozs7O1FBRUQsNkNBQVE7Ozs7WUFBUixVQUFTLEtBQVk7O2dCQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxDQUFDLE1BQWEsR0FBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjs7Ozs7UUFFRCw2Q0FBUTs7OztZQUFSLFVBQVMsQ0FBa0I7Z0JBQ3pCLHFCQUFNLE1BQU0sR0FBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Z0JBR3RDLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7b0JBQzVELE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVELElBQUk4QyxjQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2xCLHFCQUFNLFlBQVksR0FBR1gsbUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO3FCQUN4QztvQkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUliLGdCQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUMxRixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztxQkFDdEQ7b0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJRSxlQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUN6RixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztxQkFDdEQ7aUJBQ0Y7YUFDRjs7Ozs7UUFFRCw4REFBeUI7Ozs7WUFBekIsVUFBMEIsRUFBYztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzthQUM1Qjs7Ozs7UUFFRCwrQ0FBVTs7OztZQUFWLFVBQVcsS0FBb0I7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLHFCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztvQkFDckQscUJBQU0sT0FBTyxHQUFHRyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQ2IsY0FBVyxVQUFVLGdFQUEwRCxDQUNoRixDQUFDO3FCQUNIO29CQUNELElBQUksQ0FBQyxNQUFNLEdBQUdvQixpQkFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDekc7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQzs7Ozs7UUFFRCxxREFBZ0I7Ozs7WUFBaEIsVUFBaUIsVUFBbUI7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDckMsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUUvRSxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZFOzs7OztRQUVELHFEQUFnQjs7OztZQUFoQixVQUFpQixFQUFjO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUNyQjs7Ozs7UUFFRCxzREFBaUI7Ozs7WUFBakIsVUFBa0IsRUFBYztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDdEI7Ozs7UUFFRCwyQ0FBTTs7O1lBQU47Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25COzs7O1FBRUQseUNBQUk7OztZQUFKO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7O29CQTFIRlAsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLElBQUksRUFBRTs0QkFDSixVQUFVLEVBQUUsa0JBQWtCOzRCQUM5QixhQUFhLEVBQUUsUUFBUTs0QkFDdkIsUUFBUSxFQUFFLFVBQVU7eUJBQ3JCO3dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHVCQUF1QixDQUFDO3FCQUNuRTs7Ozs7d0JBekJRLHFCQUFxQix1QkFrQ2ZRLFNBQUk7d0JBakNWLGVBQWU7d0JBdkJ0Qk4sY0FBUzt3QkFKVEQsZUFBVTt3QkFGVlEsc0JBQWlCOzs7eUNBRG5COzs7Ozs7OztRQ0k2Q1osMkNBQWtCOzs7O2tDQUU3QyxDQUFDOzs7O29CQUhsQmhDLGVBQVU7O3NDQUhYO01BSTZDLGtCQUFrQjs7Ozs7OztRQ2dCTmdDLHVEQUE2QjtRQVVwRiw2Q0FDVSxTQUNBLFFBQ0EsVUFDUixRQUE2QjtZQUovQixZQU1FLGlCQUFPLFNBRVI7WUFQUyxhQUFPLEdBQVAsT0FBTztZQUNQLFlBQU0sR0FBTixNQUFNO1lBQ04sY0FBUSxHQUFSLFFBQVE7Z0NBUEosSUFBSXBDLGlCQUFZLEVBQVU7Z0NBRWxCLEVBQUU7MEJBQ0EsRUFBRTtZQVF4QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7U0FDMUI7UUFoQkQsc0JBQUksc0RBQUs7Ozs7Z0JBQVQsVUFBVSxLQUFhO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQzs7O1dBQUE7Ozs7UUFnQkQsc0RBQVE7OztZQUFSO2dCQUFBLGlCQW9CQztnQkFuQkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBR2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDO3FCQUVqQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7cUJBQ3RCLDZCQUE2QixFQUFFLENBQUM7OztnQkFJbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07cUJBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGFBQWEsR0FBQSxDQUFDO3FCQUNwQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQ2xELENBQUM7YUFDSDs7Ozs7UUFFRCw4REFBZ0I7Ozs7WUFBaEIsVUFBaUIsR0FBaUI7Z0JBQ2hDLElBQUksR0FBRyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO29CQUN0QyxPQUFPO2lCQUNSOzs7Ozs7Z0JBT0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxXQUFXO3dCQUNkLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7OEJBQzNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDOzhCQUMvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEI7Z0JBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUVsRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0Y7Ozs7UUFFRCx5REFBVzs7O1lBQVg7O29CQUNFLEtBQWtCLElBQUEsS0FBQWlCLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxnQkFBQTt3QkFBdkIsSUFBTSxHQUFHLFdBQUE7d0JBQ1osR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUNuQjs7Ozs7Ozs7Ozs7Ozs7O2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7O2FBQ3pCOztvQkF0RkZoQixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDhCQUE4Qjt3QkFDeEMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7d0JBQ25ELHd5RUFBd0M7d0JBQ3hDLElBQUksRUFBRTs0QkFDSixTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxLQUFLLEVBQUUscUNBQXFDOzRCQUM1QyxJQUFJLEVBQUUsUUFBUTs0QkFDZCxZQUFZLEVBQUUsVUFBVTt5QkFDekI7cUJBQ0Y7Ozs7O3dCQWpCUSxrQkFBa0I7d0JBSWxCLGlCQUFpQjt3QkFGakIsbUJBQW1CO3dCQUNuQixtQkFBbUI7OztrREFMNUI7TUFvQnlELDZCQUE2Qjs7Ozs7OztRQzRGcEYsb0NBQW1CLE9BQWdDLEVBQ3ZDLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGlCQUFtQyxFQUNuQyxHQUEyQjtZQUpwQixZQUFPLEdBQVAsT0FBTyxDQUF5Qjs7Ozs2QkFsRk8sUUFBUTs7Ozs7NEJBSzlDLE9BQU87Ozs7Z0NBSUgsSUFBSTs7Ozs7NkJBS1AsTUFBTTs7OztpQ0E2RHFCLElBQUlELGlCQUFZLEVBQUU7eUJBRWhDLEVBQUU7WUFVbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUNqQyxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVixDQUFDO1lBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQzNDOzhCQTNFRyw4Q0FBTTs7Ozs7Z0JBQ1IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzs7Ozs7Z0JBR2xDLFVBQVcsS0FBYztnQkFDdkIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGOzs7OzhCQWtCRywrQ0FBTzs7Ozs7MEJBQUMsS0FBYTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDM0IsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1FBNENqQyw2Q0FBUTs7O1lBQVI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixJQUFJLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQTtpQkFDeEIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjs7Ozs7UUFFRCxnREFBVzs7OztZQUFYLFVBQVksT0FBc0I7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3pELE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxPQUFPLGFBQVU7b0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNyRDtnQkFFRCxJQUFJLE9BQU8sYUFBVTtvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ3JEO2dCQUVELElBQUksT0FBTyxnQkFBYTtvQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzNEO2FBQ0Y7Ozs7Ozs7Ozs7UUFNRCx5Q0FBSTs7Ozs7WUFBSjtnQkFBQSxpQkFnQ0M7Z0JBL0JDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO3FCQUNuQyxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztxQkFDOUQsTUFBTSxDQUFDLG1DQUFtQyxDQUFDO3FCQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQkFDbEIsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDOztnQkFHckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFhO29CQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUM1QyxDQUFDLENBQ0gsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVztxQkFDckMsSUFBSSxDQUNIYSxnQkFBTSxDQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FDM0Q7cUJBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBYTtvQkFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQ0wsQ0FBQzthQUNIOzs7Ozs7OztRQUtELDhDQUFTOzs7O1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQixFQUFFLEVBQ0YsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsUUFBUSxFQUNiO29CQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDL0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87aUJBQ2hFLENBQ0YsQ0FBQzthQUNIOzs7Ozs7Ozs7O1FBTUQseUNBQUk7Ozs7O1lBQUo7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3pCOztvQkFDRCxLQUFrQixJQUFBLEtBQUFJLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxnQkFBQTt3QkFBdkIsSUFBTSxHQUFHLFdBQUE7d0JBQ1osR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUNuQjs7Ozs7Ozs7Ozs7Ozs7OzthQUNGOzs7Ozs7Ozs7O1FBTUQsMkNBQU07Ozs7O1lBQU47Z0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNwQjtnQkFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjs7OztRQUVELGdEQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzVCOztvQkF2TkZzQixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtxQkFDOUI7Ozs7O3dCQVZRLHVCQUF1Qjt3QkFYOUJDLGVBQVU7d0JBT1ZDLGNBQVM7d0JBRVRDLHFCQUFnQjt3QkFLVEMsc0NBQXNCOzs7O2tDQWE1QnpDLFVBQUs7aUNBS0xBLFVBQUs7cUNBSUxBLFVBQUs7a0NBS0xBLFVBQUs7K0JBS0xBLFVBQUs7Z0NBaUJMQyxXQUFNO2lDQUtOQSxXQUFNO2dDQU1ORCxVQUFLO2lDQVlMQSxVQUFLO21DQUlMQSxVQUFLO2dDQUlMQSxVQUFLO2dDQUlMQSxVQUFLO3NDQUlMQyxXQUFNOzt5Q0F6R1Q7Ozs7Ozs7QUNBQSxJQXFCQSxxQkFBTSxpQ0FBaUMsR0FBYTtRQUNsRCxPQUFPLEVBQUVFLHVCQUFpQjs7UUFFMUIsV0FBVyxFQUFFQyxlQUFVLENBQUMsY0FBTSxPQUFBLCtCQUErQixHQUFBLENBQUM7UUFDOUQsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDO0lBRUYscUJBQU0sNEJBQTRCLEdBQWE7UUFDN0MsT0FBTyxFQUFFc0MsbUJBQWE7O1FBRXRCLFdBQVcsRUFBRXRDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQStCLEdBQUEsQ0FBQztRQUM5RCxLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7O1FBb0JBLHlDQUE0QixTQUNSLGdCQUNBLFdBQ0EsUUFDQTtZQUpwQixpQkFvQkM7WUFwQjJCLFlBQU8sR0FBUCxPQUFPO1lBQ2YsbUJBQWMsR0FBZCxjQUFjO1lBQ2QsY0FBUyxHQUFULFNBQVM7WUFDVCxXQUFNLEdBQU4sTUFBTTtZQUNOLG9CQUFlLEdBQWYsZUFBZTs2QkFWZixRQUFRLENBQUMsU0FBUzs4QkFDakIsUUFBUSxDQUFDLFNBQVM7b0NBRVosUUFBUSxDQUFDLFNBQVM7O1lBUzNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWE7Z0JBQ2pELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ25CO2dCQUNELEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckMsQ0FBQyxDQUFDOztZQUdILElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDekMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEMsQ0FBQyxDQUFDO1NBQ0o7Ozs7O1FBRUQsd0RBQWM7Ozs7WUFBZCxVQUFlLElBQVk7Z0JBQ3pCLHFCQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLEVBQUU7b0JBQ1IscUJBQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7MEJBQy9CUCxrQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUNsQyxDQUFDO29CQUNKLHFCQUFNLEdBQUcsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFOzBCQUM3QkEsa0JBQVUsQ0FDVixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUNsQyxDQUFDO29CQUNKLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lCQUNqRjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkU7Ozs7O1FBRUQsa0RBQVE7Ozs7WUFBUixVQUFTLEtBQVk7O2dCQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxDQUFDLE1BQWEsR0FBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjs7Ozs7UUFFRCxrREFBUTs7OztZQUFSLFVBQVMsQ0FBa0I7Z0JBQ3pCLHFCQUFNLE1BQU0sR0FBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFckMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQ29DLGVBQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0QsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBR0QscUJBQU0sWUFBWSxHQUFHRCxtQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxtQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNqQixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7aUJBQ3hDO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSWIsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQzdGLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUN0RDtnQkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUlFLGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUN0RDthQUNGOzs7OztRQUVELG1FQUF5Qjs7OztZQUF6QixVQUEwQixFQUFjO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2FBQzVCOzs7OztRQUVELG9EQUFVOzs7O1lBQVYsVUFBVyxLQUFzQjtnQkFBakMsaUJBNkJDO2dCQTVCQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7b0JBQ3JELHFCQUFNLE9BQU8sR0FBR0csaUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDWixNQUFNLElBQUksS0FBSyxDQUNiLGNBQVcsVUFBVSxnRUFBMEQsQ0FDaEYsQ0FBQztxQkFDSDtvQkFFRCxxQkFBSSxNQUFNLEdBQXdCLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7d0JBQzdCLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUMzRDtvQkFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3hCLE1BQU0sR0FBRyxLQUFLLENBQUM7cUJBQ2hCO29CQUdELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxNQUFrQjt5QkFDOUIsR0FBRyxDQUFDLFVBQUMsSUFBWTt3QkFDaEIsT0FBQW9CLGlCQUFTLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztxQkFBQSxDQUFDO3lCQUMxRixHQUFHLENBQUMsVUFBQyxJQUFVLElBQUssUUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBQyxDQUFDLENBQUM7aUJBQy9EO2dCQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEM7Ozs7O1FBRUQsMERBQWdCOzs7O1lBQWhCLFVBQWlCLFVBQW1CO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQ3JDLElBQUksVUFBVSxFQUFFO29CQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFFL0UsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN2RTs7Ozs7O1FBR0QsMERBQWdCOzs7O1lBQWhCLFVBQWlCLEVBQWM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCOzs7Ozs7UUFHRCwyREFBaUI7Ozs7WUFBakIsVUFBa0IsRUFBYztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDdEI7Ozs7UUFFRCxnREFBTTs7O1lBQU47Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25COzs7O1FBRUQsOENBQUk7OztZQUFKO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7O29CQXJKRlAsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLElBQUksRUFBRTs0QkFDSixVQUFVLEVBQUUsa0JBQWtCOzRCQUM5QixhQUFhLEVBQUUsUUFBUTs0QkFDdkIsUUFBUSxFQUFFLFVBQVU7eUJBQ3JCO3dCQUNELFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLDRCQUE0QixDQUFDO3FCQUM3RTs7Ozs7d0JBMUJRLDBCQUEwQix1QkFtQ3BCUSxTQUFJO3dCQWxDVixlQUFlO3dCQVp0Qk4sY0FBUzt3QkFKVEQsZUFBVTt3QkFGVlEsc0JBQWlCOzs7OENBRG5COzs7Ozs7O0FDQUE7Ozs7b0JBRUMvQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLDZjQWVUO3FCQUNGOzt3Q0FwQkQ7Ozs7Ozs7QUNBQTs7OztvQkFFQ0EsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxnRUFBOEQ7cUJBQ3pFOzs7OzhCQUVFQyxVQUFLOzt5Q0FQUjs7Ozs7OztBQ0FBOzs7O29CQU9DRCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLGdOQUtUO3dCQUNELGVBQWUsRUFBRWdELDRCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7OzJDQUVFL0MsVUFBSzsrQkFDTEEsVUFBSzs7eUNBbkJSOzs7Ozs7O0FDQUE7Ozs7b0JBR0NELGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsNEJBQTRCO3dCQUN0QyxlQUFlLEVBQUVnRCw0QkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxJQUFJLEVBQUU7NEJBQ0osa0JBQWtCLEVBQUUsZ0JBQWdCOzRCQUNwQyx3QkFBd0IsRUFBRSxlQUFlOzRCQUN6Qyx3QkFBd0IsRUFBRSxrQkFBa0I7NEJBQzVDLGtCQUFrQixFQUFFLGVBQWU7NEJBQ25DLHNCQUFzQixFQUFFLHNCQUFzQjs0QkFDOUMsb0JBQW9CLEVBQUUsb0JBQW9COzRCQUMxQyxrQkFBa0IsRUFBRSxnQkFBZ0I7eUJBQ3JDO3dCQUNELFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCOzs7OzRCQUVFL0MsVUFBSzs7Z0RBbEJSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7OzhCQW1EeUIsSUFBSUYsaUJBQVksRUFBeUI7OEJBQ3pDLElBQUlBLGlCQUFZLEVBQXdCOzs7Ozs7UUFFL0QsbURBQUs7Ozs7WUFBTCxVQUFNLElBQWE7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FDN0QsQ0FBQzthQUNIOzs7OztRQUVELGtEQUFJOzs7O1lBQUosVUFBSyxRQUE4QjtnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7O29CQWpERkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwrQkFBK0I7d0JBQ3pDLGVBQWUsRUFBRWdELDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLFFBQVEsRUFBRSwycENBOEJUO3FCQUNGOzs7O2lDQUVFL0MsVUFBSzttQ0FFTEMsV0FBTTttQ0FDTkEsV0FBTTs7a0RBcERUOzs7Ozs7O0FDQUE7OzhCQTZEeUIsSUFBSUgsaUJBQVksRUFBcUI7OEJBQ3JDLElBQUlBLGlCQUFZLEVBQXdCOzRCQUUxQyxJQUFJQSxpQkFBWSxFQUFnQjsyQkFDakMsSUFBSUEsaUJBQVksRUFBa0I7Ozs7OztRQUV0RCxnREFBVTs7OztZQUFWLFVBQVcsS0FBNEI7Z0JBQ3JDLHFCQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEOzs7OztRQUVELG9EQUFjOzs7O1lBQWQsVUFBZSxLQUEyQjtnQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7Ozs7O1FBRUQsK0NBQVM7Ozs7WUFBVCxVQUFVLEtBQW1CO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjs7Ozs7O1FBRUQsOENBQVE7Ozs7O1lBQVIsVUFBUyxJQUFrQixFQUFFLFNBQWtCO2dCQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQzthQUN4Qzs7b0JBbEVGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjs7d0JBRWpDLFFBQVEsRUFBRSx1dUNBb0NUO3FCQUNGOzs7O2lDQUVFQyxVQUFLO2dDQUNMQSxVQUFLO21DQUVMQyxXQUFNO21DQUNOQSxXQUFNO2lDQUVOQSxXQUFNO2dDQUNOQSxXQUFNOzswQ0FqRVQ7Ozs7Ozs7QUNBQTs7OEJBd0N5QixJQUFJSCxpQkFBWSxFQUFxQjs4QkFDckMsSUFBSUEsaUJBQVksRUFBd0I7NEJBRTFDLElBQUlBLGlCQUFZLEVBQXlCOzJCQUMxQyxJQUFJQSxpQkFBWSxFQUFrQjs7Ozs7O1FBRXRELGlEQUFVOzs7O1lBQVYsVUFBVyxLQUE0QjtnQkFDckMscUJBQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDaEQ7Ozs7O1FBRUQsZ0RBQVM7Ozs7WUFBVCxVQUFVLEtBQTRCO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjs7Ozs7O1FBRUQsaURBQVU7Ozs7O1lBQVYsVUFBVyxJQUEyQixFQUFFLFNBQWtCO2dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQzthQUN4Qzs7Ozs7UUFFRCxxREFBYzs7OztZQUFkLFVBQWUsS0FBMkI7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCOztvQkFuREZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsc3pCQXVCVDtxQkFDRjs7OztpQ0FFRUMsVUFBSzttQ0FFTEMsV0FBTTttQ0FDTkEsV0FBTTtpQ0FFTkEsV0FBTTtnQ0FDTkEsV0FBTTs7MkNBNUNUOzs7Ozs7O0FDQ0E7O3dCQXlCUyxJQUFJO3lCQUNILENBQUM7MkJBQ0MsQ0FBQzs7O29CQXpCWkYsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsa3FDQWtCVDtxQkFDRjs7d0NBeEJEOzs7Ozs7O0FDQUE7OzhCQXlDeUIsSUFBSUQsaUJBQVksRUFBcUI7OEJBQ3JDLElBQUlBLGlCQUFZLEVBQXdCOzRCQUUxQyxJQUFJQSxpQkFBWSxFQUF5QjsyQkFDMUMsSUFBSUEsaUJBQVksRUFBa0I7Ozs7OztRQUV0RCxpREFBVTs7OztZQUFWLFVBQVcsS0FBNEI7Z0JBQ3JDLHFCQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ25FOzs7OztRQUVELCtDQUFROzs7O1lBQVIsVUFBUyxJQUEyQjtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7Ozs7OztRQUVELGdEQUFTOzs7OztZQUFULFVBQVUsSUFBMkIsRUFBRSxTQUFrQjtnQkFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7YUFDeEM7Ozs7O1FBRUQscURBQWM7Ozs7WUFBZCxVQUFlLEtBQTJCO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3Qjs7b0JBbkRGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDB5QkF1QlQ7cUJBQ0Y7Ozs7aUNBRUVDLFVBQUs7bUNBRUxDLFdBQU07bUNBQ05BLFdBQU07aUNBRU5BLFdBQU07Z0NBQ05BLFdBQU07OzJDQTdDVDs7Ozs7OztJQzZCQSxxQkFBTSxRQUFRLEdBQUc7UUFDZiw4QkFBOEI7UUFDOUIsbUNBQW1DO1FBRW5DLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsK0JBQStCO1FBQy9CLDBCQUEwQjtLQUMzQixDQUFDOztRQTBCQTtZQUNFK0MsY0FBUSxDQUFDLDhHQUVnQixDQUFDLENBQUM7U0FDNUI7Ozs7UUFFTSwwQkFBTzs7O1lBQWQ7Z0JBQ0UsT0FBTztvQkFDTCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUU7d0JBQ1RQLHNDQUFzQjt3QkFDdEJRLDhCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2hCO2lCQUNGLENBQUM7YUFDSDs7b0JBNUNGMUMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixZQUFZOzRCQUNWLGlDQUFpQzs0QkFDakMsMEJBQTBCOzRCQUMxQixtQ0FBbUM7NEJBQ25DLHlCQUF5Qjs0QkFFekIseUJBQXlCOzRCQUN6QiwyQkFBMkI7NEJBQzNCLDRCQUE0Qjs0QkFDNUIsNEJBQTRCOzRCQUU1QiwwQkFBMEI7MkJBRXZCLFFBQVEsQ0FDWjt3QkFDRCxlQUFlLEVBQUU7NEJBQ2YsOEJBQThCOzRCQUM5QixtQ0FBbUM7eUJBQ3BDO3dCQUNELE9BQU8sRUFBRSxRQUFRO3FCQUNsQjs7OztpQ0E5REQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==