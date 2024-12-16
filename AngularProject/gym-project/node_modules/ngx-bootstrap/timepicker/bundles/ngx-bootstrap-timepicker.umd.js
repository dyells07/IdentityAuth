(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/timepicker', ['exports', '@angular/core', 'rxjs', 'ngx-bootstrap/mini-ngrx', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].timepicker = {}),global.ng.core,global.rxjs,global.miniNgrx,global.ng.forms,global.ng.common));
}(this, (function (exports,core,rxjs,miniNgrx,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerActions = (function () {
        function TimepickerActions() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.WRITE_VALUE,
                    payload: value
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeHours = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_HOURS,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeMinutes = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_MINUTES,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeSeconds = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_SECONDS,
                    payload: event
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.setTime = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.SET_TIME_UNIT,
                    payload: value
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.updateControls = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.UPDATE_CONTROLS,
                    payload: value
                };
            };
        TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
        TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
        TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
        TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
        TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
        TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
        TimepickerActions.decorators = [
            { type: core.Injectable }
        ];
        return TimepickerActions;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ dex = 10;
    var /** @type {?} */ hoursPerDay = 24;
    var /** @type {?} */ hoursPerDayHalf = 12;
    var /** @type {?} */ minutesPerHour = 60;
    var /** @type {?} */ secondsPerMinute = 60;
    /**
     * @param {?=} value
     * @return {?}
     */
    function isValidDate(value) {
        if (!value) {
            return false;
        }
        if (value instanceof Date && isNaN(value.getHours())) {
            return false;
        }
        if (typeof value === 'string') {
            return isValidDate(new Date(value));
        }
        return true;
    }
    /**
     * @param {?} controls
     * @param {?} newDate
     * @return {?}
     */
    function isValidLimit(controls, newDate) {
        if (controls.min && newDate < controls.min) {
            return false;
        }
        if (controls.max && newDate > controls.max) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function toNumber(value) {
        if (typeof value === 'number') {
            return value;
        }
        return parseInt(value, dex);
    }
    /**
     * @param {?} value
     * @param {?=} isPM
     * @return {?}
     */
    function parseHours(value, isPM) {
        if (isPM === void 0) {
            isPM = false;
        }
        var /** @type {?} */ hour = toNumber(value);
        if (isNaN(hour) ||
            hour < 0 ||
            hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
            return NaN;
        }
        return hour;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseMinutes(value) {
        var /** @type {?} */ minute = toNumber(value);
        if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
            return NaN;
        }
        return minute;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseSeconds(value) {
        var /** @type {?} */ seconds = toNumber(value);
        if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
            return NaN;
        }
        return seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseTime(value) {
        if (typeof value === 'string') {
            return new Date(value);
        }
        return value;
    }
    /**
     * @param {?} value
     * @param {?} diff
     * @return {?}
     */
    function changeTime(value, diff) {
        if (!value) {
            return changeTime(createDate(new Date(), 0, 0, 0), diff);
        }
        var /** @type {?} */ hour = value.getHours();
        var /** @type {?} */ minutes = value.getMinutes();
        var /** @type {?} */ seconds = value.getSeconds();
        if (diff.hour) {
            hour = (hour + toNumber(diff.hour)) % hoursPerDay;
            if (hour < 0) {
                hour += hoursPerDay;
            }
        }
        if (diff.minute) {
            minutes = minutes + toNumber(diff.minute);
        }
        if (diff.seconds) {
            seconds = seconds + toNumber(diff.seconds);
        }
        return createDate(value, hour, minutes, seconds);
    }
    /**
     * @param {?} value
     * @param {?} opts
     * @return {?}
     */
    function setTime(value, opts) {
        var /** @type {?} */ hour = parseHours(opts.hour);
        var /** @type {?} */ minute = parseMinutes(opts.minute);
        var /** @type {?} */ seconds = parseSeconds(opts.seconds) || 0;
        if (opts.isPM) {
            hour += hoursPerDayHalf;
        }
        if (!value) {
            if (!isNaN(hour) && !isNaN(minute)) {
                return createDate(new Date(), hour, minute, seconds);
            }
            return value;
        }
        if (isNaN(hour) || isNaN(minute)) {
            return value;
        }
        return createDate(value, hour, minute, seconds);
    }
    /**
     * @param {?} value
     * @param {?} hours
     * @param {?} minutes
     * @param {?} seconds
     * @return {?}
     */
    function createDate(value, hours, minutes, seconds) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function padNumber(value) {
        var /** @type {?} */ _value = value.toString();
        if (_value.length > 1) {
            return _value;
        }
        return "0" + _value;
    }
    /**
     * @param {?} hours
     * @param {?} isPM
     * @return {?}
     */
    function isHourInputValid(hours, isPM) {
        return !isNaN(parseHours(hours, isPM));
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    function isMinuteInputValid(minutes) {
        return !isNaN(parseMinutes(minutes));
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    function isSecondInputValid(seconds) {
        return !isNaN(parseSeconds(seconds));
    }
    /**
     * @param {?} diff
     * @param {?} max
     * @param {?} min
     * @return {?}
     */
    function isInputLimitValid(diff, max, min) {
        var /** @type {?} */ newDate = changeTime(new Date(), diff);
        if (max && newDate > max) {
            return false;
        }
        if (min && newDate < min) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} hours
     * @param {?=} minutes
     * @param {?=} seconds
     * @param {?=} isPM
     * @return {?}
     */
    function isInputValid(hours, minutes, seconds, isPM) {
        if (minutes === void 0) {
            minutes = '0';
        }
        if (seconds === void 0) {
            seconds = '0';
        }
        return isHourInputValid(hours, isPM)
            && isMinuteInputValid(minutes)
            && isSecondInputValid(seconds);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} state
     * @param {?=} event
     * @return {?}
     */
    function canChangeValue(state, event) {
        if (state.readonlyInput || state.disabled) {
            return false;
        }
        if (event) {
            if (event.source === 'wheel' && !state.mousewheel) {
                return false;
            }
            if (event.source === 'key' && !state.arrowkeys) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeHours(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementHours) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementHours) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeMinutes(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementMinutes) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementMinutes) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeSeconds(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementSeconds) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementSeconds) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function getControlsValue(state) {
        var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
        return {
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondsStep: secondsStep,
            readonlyInput: readonlyInput,
            disabled: disabled,
            mousewheel: mousewheel,
            arrowkeys: arrowkeys,
            showSpinners: showSpinners,
            showMeridian: showMeridian,
            showSeconds: showSeconds,
            meridians: meridians,
            min: min,
            max: max
        };
    }
    /**
     * @param {?} value
     * @param {?} state
     * @return {?}
     */
    function timepickerControls(value, state) {
        var /** @type {?} */ hoursPerDayHalf = 12;
        var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
        var /** @type {?} */ res = {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        };
        if (!value) {
            return res;
        }
        // compare dates
        if (max) {
            var /** @type {?} */ _newHour = changeTime(value, { hour: hourStep });
            res.canIncrementHours = max > _newHour;
            if (!res.canIncrementHours) {
                var /** @type {?} */ _newMinutes = changeTime(value, { minute: minuteStep });
                res.canIncrementMinutes = showSeconds
                    ? max > _newMinutes
                    : max >= _newMinutes;
            }
            if (!res.canIncrementMinutes) {
                var /** @type {?} */ _newSeconds = changeTime(value, { seconds: secondsStep });
                res.canIncrementSeconds = max >= _newSeconds;
            }
            if (value.getHours() < hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
            }
        }
        if (min) {
            var /** @type {?} */ _newHour = changeTime(value, { hour: -hourStep });
            res.canDecrementHours = min < _newHour;
            if (!res.canDecrementHours) {
                var /** @type {?} */ _newMinutes = changeTime(value, { minute: -minuteStep });
                res.canDecrementMinutes = showSeconds
                    ? min < _newMinutes
                    : min <= _newMinutes;
            }
            if (!res.canDecrementMinutes) {
                var /** @type {?} */ _newSeconds = changeTime(value, { seconds: -secondsStep });
                res.canDecrementSeconds = min <= _newSeconds;
            }
            if (value.getHours() >= hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
            }
        }
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Provides default configuration values for timepicker
     */
    var TimepickerConfig = (function () {
        function TimepickerConfig() {
            /**
             * hours change step
             */
            this.hourStep = 1;
            /**
             * hours change step
             */
            this.minuteStep = 5;
            /**
             * seconds changes step
             */
            this.secondsStep = 10;
            /**
             * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
             */
            this.showMeridian = true;
            /**
             * meridian labels based on locale
             */
            this.meridians = ['AM', 'PM'];
            /**
             * if true hours and minutes fields will be readonly
             */
            this.readonlyInput = false;
            /**
             * if true hours and minutes fields will be disabled
             */
            this.disabled = false;
            /**
             * if true scroll inside hours and minutes inputs will change time
             */
            this.mousewheel = true;
            /**
             * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
             */
            this.arrowkeys = true;
            /**
             * if true spinner arrows above and below the inputs will be shown
             */
            this.showSpinners = true;
            /**
             * show seconds in timepicker
             */
            this.showSeconds = false;
            /**
             * show minutes in timepicker
             */
            this.showMinutes = true;
        }
        TimepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return TimepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ initialState = {
        value: null,
        config: new TimepickerConfig(),
        controls: {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        }
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function timepickerReducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case TimepickerActions.WRITE_VALUE: {
                return Object.assign({}, state, { value: action.payload });
            }
            case TimepickerActions.CHANGE_HOURS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeHours(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, { hour: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_MINUTES: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeMinutes(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, { minute: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_SECONDS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeSeconds(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, {
                    seconds: action.payload.step
                });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.SET_TIME_UNIT: {
                if (!canChangeValue(state.config)) {
                    return state;
                }
                var /** @type {?} */ _newTime = setTime(state.value, action.payload);
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.UPDATE_CONTROLS: {
                var /** @type {?} */ _newControlsState = timepickerControls(state.value, action.payload);
                var /** @type {?} */ _newState = {
                    value: state.value,
                    config: action.payload,
                    controls: _newControlsState
                };
                if (state.config.showMeridian !== _newState.config.showMeridian) {
                    if (state.value) {
                        _newState.value = new Date(state.value);
                    }
                }
                return Object.assign({}, state, _newState);
            }
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerStore = (function (_super) {
        __extends(TimepickerStore, _super);
        function TimepickerStore() {
            var _this = this;
            var /** @type {?} */ _dispatcher = new rxjs.BehaviorSubject({
                type: '[mini-ngrx] dispatcher init'
            });
            var /** @type {?} */ state = new miniNgrx.MiniState(initialState, _dispatcher, timepickerReducer);
            _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
            return _this;
        }
        TimepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TimepickerStore.ctorParameters = function () { return []; };
        return TimepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return TimepickerComponent; }),
        multi: true
    };
    var TimepickerComponent = (function () {
        function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
            var _this = this;
            this._store = _store;
            this._timepickerActions = _timepickerActions;
            /**
             * emits true if value is a valid date
             */
            this.isValid = new core.EventEmitter();
            // min\max validation for input fields
            this.invalidHours = false;
            this.invalidMinutes = false;
            this.invalidSeconds = false;
            // control value accessor methods
            // tslint:disable-next-line:no-any
            this.onChange = Function.prototype;
            // tslint:disable-next-line:no-any
            this.onTouched = Function.prototype;
            Object.assign(this, _config);
            this.timepickerSub = _store
                .select(function (state) { return state.value; })
                .subscribe(function (value) {
                // update UI values if date changed
                // update UI values if date changed
                _this._renderTime(value);
                _this.onChange(value);
                _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
            });
            _store
                .select(function (state) { return state.controls; })
                .subscribe(function (controlsState) {
                _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
                Object.assign(_this, controlsState);
                _cd.markForCheck();
            });
        }
        Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
            /** @deprecated - please use `isEditable` instead */
            get: /**
             * @deprecated - please use `isEditable` instead
             * @return {?}
             */ function () {
                return this.showSpinners && !this.readonlyInput;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
            get: /**
             * @return {?}
             */ function () {
                return !(this.readonlyInput || this.disabled);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.resetValidation = /**
         * @return {?}
         */
            function () {
                this.invalidHours = false;
                this.invalidMinutes = false;
                this.invalidSeconds = false;
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.isPM = /**
         * @return {?}
         */
            function () {
                return this.showMeridian && this.meridian === this.meridians[1];
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        TimepickerComponent.prototype.prevDef = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        TimepickerComponent.prototype.wheelSign = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                return Math.sign($event.deltaY) * -1;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        TimepickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeHours = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeMinutes = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeSeconds = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
            };
        /**
         * @param {?} hours
         * @return {?}
         */
        TimepickerComponent.prototype.updateHours = /**
         * @param {?} hours
         * @return {?}
         */
            function (hours) {
                this.resetValidation();
                this.hours = hours;
                var /** @type {?} */ isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
                if (!isValid) {
                    this.invalidHours = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @param {?} minutes
         * @return {?}
         */
        TimepickerComponent.prototype.updateMinutes = /**
         * @param {?} minutes
         * @return {?}
         */
            function (minutes) {
                this.resetValidation();
                this.minutes = minutes;
                var /** @type {?} */ isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
                if (!isValid) {
                    this.invalidMinutes = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @param {?} seconds
         * @return {?}
         */
        TimepickerComponent.prototype.updateSeconds = /**
         * @param {?} seconds
         * @return {?}
         */
            function (seconds) {
                this.resetValidation();
                this.seconds = seconds;
                var /** @type {?} */ isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
                if (!isValid) {
                    this.invalidSeconds = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.isValidLimit = /**
         * @return {?}
         */
            function () {
                return isInputLimitValid({
                    hour: this.hours,
                    minute: this.minutes,
                    seconds: this.seconds,
                    isPM: this.isPM()
                }, this.max, this.min);
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype._updateTime = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ _seconds = this.showSeconds ? this.seconds : void 0;
                var /** @type {?} */ _minutes = this.showMinutes ? this.minutes : void 0;
                if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._store.dispatch(this._timepickerActions.setTime({
                    hour: this.hours,
                    minute: this.minutes,
                    seconds: this.seconds,
                    isPM: this.isPM()
                }));
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.toggleMeridian = /**
         * @return {?}
         */
            function () {
                if (!this.showMeridian || !this.isEditable) {
                    return;
                }
                var /** @type {?} */ _hoursPerDayHalf = 12;
                this._store.dispatch(this._timepickerActions.changeHours({
                    step: _hoursPerDayHalf,
                    source: ''
                }));
            };
        /**
         * Write a new value to the element.
         */
        /**
         * Write a new value to the element.
         * @param {?} obj
         * @return {?}
         */
        TimepickerComponent.prototype.writeValue = /**
         * Write a new value to the element.
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (isValidDate(obj)) {
                    this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
                }
                else if (obj == null) {
                    this._store.dispatch(this._timepickerActions.writeValue(null));
                }
            };
        /**
         * Set the function to be called when the control receives a change event.
         */
        // tslint:disable-next-line:no-any
        /**
         * Set the function to be called when the control receives a change event.
         * @param {?} fn
         * @return {?}
         */
        TimepickerComponent.prototype.registerOnChange = /**
         * Set the function to be called when the control receives a change event.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * Set the function to be called when the control receives a touch event.
         */
        /**
         * Set the function to be called when the control receives a touch event.
         * @param {?} fn
         * @return {?}
         */
        TimepickerComponent.prototype.registerOnTouched = /**
         * Set the function to be called when the control receives a touch event.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param isDisabled
         */
        /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param {?} isDisabled
         * @return {?}
         */
        TimepickerComponent.prototype.setDisabledState = /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.timepickerSub.unsubscribe();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerComponent.prototype._renderTime = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!isValidDate(value)) {
                    this.hours = '';
                    this.minutes = '';
                    this.seconds = '';
                    this.meridian = this.meridians[0];
                    return;
                }
                var /** @type {?} */ _value = parseTime(value);
                var /** @type {?} */ _hoursPerDayHalf = 12;
                var /** @type {?} */ _hours = _value.getHours();
                if (this.showMeridian) {
                    this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
                    _hours = _hours % _hoursPerDayHalf;
                    // should be 12 PM, not 00 PM
                    if (_hours === 0) {
                        _hours = _hoursPerDayHalf;
                    }
                }
                this.hours = padNumber(_hours);
                this.minutes = padNumber(_value.getMinutes());
                this.seconds = padNumber(_value.getUTCSeconds());
            };
        TimepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'timepicker',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                        template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"HH\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"MM\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"SS\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TimepickerComponent.ctorParameters = function () {
            return [
                { type: TimepickerConfig, },
                { type: core.ChangeDetectorRef, },
                { type: TimepickerStore, },
                { type: TimepickerActions, },
            ];
        };
        TimepickerComponent.propDecorators = {
            "hourStep": [{ type: core.Input },],
            "minuteStep": [{ type: core.Input },],
            "secondsStep": [{ type: core.Input },],
            "readonlyInput": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "mousewheel": [{ type: core.Input },],
            "arrowkeys": [{ type: core.Input },],
            "showSpinners": [{ type: core.Input },],
            "showMeridian": [{ type: core.Input },],
            "showMinutes": [{ type: core.Input },],
            "showSeconds": [{ type: core.Input },],
            "meridians": [{ type: core.Input },],
            "min": [{ type: core.Input },],
            "max": [{ type: core.Input },],
            "isValid": [{ type: core.Output },],
        };
        return TimepickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerModule = (function () {
        function TimepickerModule() {
        }
        /**
         * @return {?}
         */
        TimepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TimepickerModule,
                    providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
                };
            };
        TimepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TimepickerComponent],
                        exports: [TimepickerComponent]
                    },] }
        ];
        return TimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TimepickerComponent = TimepickerComponent;
    exports.TimepickerActions = TimepickerActions;
    exports.TimepickerStore = TimepickerStore;
    exports.TimepickerConfig = TimepickerConfig;
    exports.TimepickerModule = TimepickerModule;
    exports.ɵa = TIMEPICKER_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10aW1lcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3RpbWVwaWNrZXIudXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLWNvbnRyb2xzLnV0aWwudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5yZWR1Y2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvcmVkdWNlci90aW1lcGlja2VyLnN0b3JlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQge1xuICBUaW1lQ2hhbmdlRXZlbnQsXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZVxufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQWN0aW9ucyB7XG4gIHN0YXRpYyByZWFkb25seSBXUklURV9WQUxVRSA9ICdbdGltZXBpY2tlcl0gd3JpdGUgdmFsdWUgZnJvbSBuZyBtb2RlbCc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfSE9VUlMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBob3Vycyc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfTUlOVVRFUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIG1pbnV0ZXMnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1NFQ09ORFMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBzZWNvbmRzJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9USU1FX1VOSVQgPSAnW3RpbWVwaWNrZXJdIHNldCB0aW1lIHVuaXQnO1xuICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0NPTlRST0xTID0gJ1t0aW1lcGlja2VyXSB1cGRhdGUgY29udHJvbHMnO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuV1JJVEVfVkFMVUUsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VIb3VycyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZXMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfTUlOVVRFUyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVNlY29uZHMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9TRUNPTkRTLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgc2V0VGltZSh2YWx1ZTogVGltZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlNFVF9USU1FX1VOSVQsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICB1cGRhdGVDb250cm9scyh2YWx1ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuVVBEQVRFX0NPTlRST0xTLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFRpbWUsIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB9IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5jb25zdCBkZXggPSAxMDtcbmNvbnN0IGhvdXJzUGVyRGF5ID0gMjQ7XG5jb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbmNvbnN0IG1pbnV0ZXNQZXJIb3VyID0gNjA7XG5jb25zdCBzZWNvbmRzUGVyTWludXRlID0gNjA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZSh2YWx1ZT86IHN0cmluZyB8IERhdGUpOiBib29sZWFuIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4odmFsdWUuZ2V0SG91cnMoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpc1ZhbGlkRGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTGltaXQoY29udHJvbHM6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSwgbmV3RGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoY29udHJvbHMubWluICYmIG5ld0RhdGUgPCBjb250cm9scy5taW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29udHJvbHMubWF4ICYmIG5ld0RhdGUgPiBjb250cm9scy5tYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSwgZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gIWlzTmFOKHRvTnVtYmVyKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhvdXJzKFxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuICBpc1BNID0gZmFsc2Vcbik6IG51bWJlciB7XG4gIGNvbnN0IGhvdXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChcbiAgICBpc05hTihob3VyKSB8fFxuICAgIGhvdXIgPCAwIHx8XG4gICAgaG91ciA+IChpc1BNID8gaG91cnNQZXJEYXlIYWxmIDogaG91cnNQZXJEYXkpXG4gICkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWludXRlcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWludXRlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAoaXNOYU4obWludXRlKSB8fCBtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IG1pbnV0ZXNQZXJIb3VyKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBtaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlY29uZHModmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHNlY29uZHMgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzIDwgMCB8fCBzZWNvbmRzID4gc2Vjb25kc1Blck1pbnV0ZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaW1lKHZhbHVlOiBEYXRlLCBkaWZmOiBUaW1lKTogRGF0ZSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gY2hhbmdlVGltZShjcmVhdGVEYXRlKG5ldyBEYXRlKCksIDAsIDAsIDApLCBkaWZmKTtcbiAgfVxuXG4gIGxldCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgbGV0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG4gIGxldCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xuXG4gIGlmIChkaWZmLmhvdXIpIHtcbiAgICBob3VyID0gKGhvdXIgKyB0b051bWJlcihkaWZmLmhvdXIpKSAlIGhvdXJzUGVyRGF5O1xuICAgIGlmIChob3VyIDwgMCkge1xuICAgICAgaG91ciArPSBob3Vyc1BlckRheTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlmZi5taW51dGUpIHtcbiAgICBtaW51dGVzID0gbWludXRlcyArIHRvTnVtYmVyKGRpZmYubWludXRlKTtcbiAgfVxuXG4gIGlmIChkaWZmLnNlY29uZHMpIHtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyArIHRvTnVtYmVyKGRpZmYuc2Vjb25kcyk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlcywgc2Vjb25kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaW1lKHZhbHVlOiBEYXRlLCBvcHRzOiBUaW1lKTogRGF0ZSB7XG4gIGxldCBob3VyID0gcGFyc2VIb3VycyhvcHRzLmhvdXIpO1xuICBjb25zdCBtaW51dGUgPSBwYXJzZU1pbnV0ZXMob3B0cy5taW51dGUpO1xuICBjb25zdCBzZWNvbmRzID0gcGFyc2VTZWNvbmRzKG9wdHMuc2Vjb25kcykgfHwgMDtcblxuICBpZiAob3B0cy5pc1BNKSB7XG4gICAgaG91ciArPSBob3Vyc1BlckRheUhhbGY7XG4gIH1cblxuICBpZiAoIXZhbHVlKSB7XG4gICAgaWYgKCFpc05hTihob3VyKSAmJiAhaXNOYU4obWludXRlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURhdGUobmV3IERhdGUoKSwgaG91ciwgbWludXRlLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNOYU4oaG91cikgfHwgaXNOYU4obWludXRlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZShcbiAgdmFsdWU6IERhdGUsXG4gIGhvdXJzOiBudW1iZXIsXG4gIG1pbnV0ZXM6IG51bWJlcixcbiAgc2Vjb25kczogbnVtYmVyXG4pOiBEYXRlIHtcbiAgcmV0dXJuIG5ldyBEYXRlKFxuICAgIHZhbHVlLmdldEZ1bGxZZWFyKCksXG4gICAgdmFsdWUuZ2V0TW9udGgoKSxcbiAgICB2YWx1ZS5nZXREYXRlKCksXG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICAgIHZhbHVlLmdldE1pbGxpc2Vjb25kcygpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWROdW1iZXIodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmIChfdmFsdWUubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYDAke192YWx1ZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIb3VySW5wdXRWYWxpZChob3Vyczogc3RyaW5nLCBpc1BNOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VIb3Vycyhob3VycywgaXNQTSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaW51dGVJbnB1dFZhbGlkKG1pbnV0ZXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlTWludXRlcyhtaW51dGVzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VTZWNvbmRzKHNlY29uZHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5wdXRMaW1pdFZhbGlkKGRpZmY6IFRpbWUsIG1heDogRGF0ZSwgbWluOiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG5ld0RhdGUgPSBjaGFuZ2VUaW1lKG5ldyBEYXRlKCksIGRpZmYpO1xuXG4gIGlmIChtYXggJiYgbmV3RGF0ZSA+IG1heCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaW4gJiYgbmV3RGF0ZSA8IG1pbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dFZhbGlkKFxuICBob3Vyczogc3RyaW5nLFxuICBtaW51dGVzID0gJzAnLFxuICBzZWNvbmRzID0gJzAnLFxuICBpc1BNOiBib29sZWFuXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzSG91cklucHV0VmFsaWQoaG91cnMsIGlzUE0pXG4gICAgJiYgaXNNaW51dGVJbnB1dFZhbGlkKG1pbnV0ZXMpXG4gICAgJiYgaXNTZWNvbmRJbnB1dFZhbGlkKHNlY29uZHMpO1xufVxuIiwiaW1wb3J0IHsgY2hhbmdlVGltZSB9IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XG5pbXBvcnQge1xuICBUaW1lQ2hhbmdlRXZlbnQsXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlVmFsdWUoXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIGV2ZW50PzogVGltZUNoYW5nZUV2ZW50XG4pOiBib29sZWFuIHtcbiAgaWYgKHN0YXRlLnJlYWRvbmx5SW5wdXQgfHwgc3RhdGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAnd2hlZWwnICYmICFzdGF0ZS5tb3VzZXdoZWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ2tleScgJiYgIXN0YXRlLmFycm93a2V5cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlSG91cnMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudEhvdXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRIb3Vycykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlTWludXRlcyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudE1pbnV0ZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRNaW51dGVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VTZWNvbmRzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50U2Vjb25kcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudFNlY29uZHMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xzVmFsdWUoXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGVcbik6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB7XG4gIGNvbnN0IHtcbiAgICBob3VyU3RlcCxcbiAgICBtaW51dGVTdGVwLFxuICAgIHNlY29uZHNTdGVwLFxuICAgIHJlYWRvbmx5SW5wdXQsXG4gICAgZGlzYWJsZWQsXG4gICAgbW91c2V3aGVlbCxcbiAgICBhcnJvd2tleXMsXG4gICAgc2hvd1NwaW5uZXJzLFxuICAgIHNob3dNZXJpZGlhbixcbiAgICBzaG93U2Vjb25kcyxcbiAgICBtZXJpZGlhbnMsXG4gICAgbWluLFxuICAgIG1heFxuICB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICBob3VyU3RlcCxcbiAgICBtaW51dGVTdGVwLFxuICAgIHNlY29uZHNTdGVwLFxuICAgIHJlYWRvbmx5SW5wdXQsXG4gICAgZGlzYWJsZWQsXG4gICAgbW91c2V3aGVlbCxcbiAgICBhcnJvd2tleXMsXG4gICAgc2hvd1NwaW5uZXJzLFxuICAgIHNob3dNZXJpZGlhbixcbiAgICBzaG93U2Vjb25kcyxcbiAgICBtZXJpZGlhbnMsXG4gICAgbWluLFxuICAgIG1heFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXBpY2tlckNvbnRyb2xzKFxuICB2YWx1ZTogRGF0ZSxcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxuKTogVGltZXBpY2tlckNvbnRyb2xzIHtcbiAgY29uc3QgaG91cnNQZXJEYXlIYWxmID0gMTI7XG4gIGNvbnN0IHsgbWluLCBtYXgsIGhvdXJTdGVwLCBtaW51dGVTdGVwLCBzZWNvbmRzU3RlcCwgc2hvd1NlY29uZHMgfSA9IHN0YXRlO1xuICBjb25zdCByZXM6IFRpbWVwaWNrZXJDb250cm9scyA9IHtcbiAgICBjYW5JbmNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5EZWNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5Ub2dnbGVNZXJpZGlhbjogdHJ1ZVxuICB9O1xuXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gY29tcGFyZSBkYXRlc1xuICBpZiAobWF4KSB7XG4gICAgY29uc3QgX25ld0hvdXIgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IGhvdXJTdGVwIH0pO1xuICAgIHJlcy5jYW5JbmNyZW1lbnRIb3VycyA9IG1heCA+IF9uZXdIb3VyO1xuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IG1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWF4ID4gX25ld01pbnV0ZXNcbiAgICAgICAgOiBtYXggPj0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IHNlY29uZHNTdGVwIH0pO1xuICAgICAgcmVzLmNhbkluY3JlbWVudFNlY29uZHMgPSBtYXggPj0gX25ld1NlY29uZHM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPCBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91cnNQZXJEYXlIYWxmIH0pIDwgbWF4O1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW4pIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJTdGVwIH0pO1xuICAgIHJlcy5jYW5EZWNyZW1lbnRIb3VycyA9IG1pbiA8IF9uZXdIb3VyO1xuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IC1taW51dGVTdGVwIH0pO1xuICAgICAgcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMgPSBzaG93U2Vjb25kc1xuICAgICAgICA/IG1pbiA8IF9uZXdNaW51dGVzXG4gICAgICAgIDogbWluIDw9IF9uZXdNaW51dGVzO1xuICAgIH1cblxuICAgIGlmICghcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICAgIGNvbnN0IF9uZXdTZWNvbmRzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBzZWNvbmRzOiAtc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50U2Vjb25kcyA9IG1pbiA8PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA+PSBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJzUGVyRGF5SGFsZiB9KSA+IG1pbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgdGltZXBpY2tlciAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb25maWcge1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgaG91clN0ZXAgPSAxO1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgbWludXRlU3RlcCA9IDU7XG4gIC8qKiBzZWNvbmRzIGNoYW5nZXMgc3RlcCAqL1xuICBzZWNvbmRzU3RlcCA9IDEwO1xuICAvKiogaWYgdHJ1ZSB3b3JrcyBpbiAxMkggbW9kZSBhbmQgZGlzcGxheXMgQU0vUE0uIElmIGZhbHNlIHdvcmtzIGluIDI0SCBtb2RlIGFuZCBoaWRlcyBBTS9QTSAqL1xuICBzaG93TWVyaWRpYW4gPSB0cnVlO1xuICAvKiogbWVyaWRpYW4gbGFiZWxzIGJhc2VkIG9uIGxvY2FsZSAqL1xuICBtZXJpZGlhbnMgPSBbJ0FNJywgJ1BNJ107XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5SW5wdXQgPSBmYWxzZTtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgLyoqIGlmIHRydWUgc2Nyb2xsIGluc2lkZSBob3VycyBhbmQgbWludXRlcyBpbnB1dHMgd2lsbCBjaGFuZ2UgdGltZSAqL1xuICBtb3VzZXdoZWVsID0gdHJ1ZTtcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xuICBhcnJvd2tleXMgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXG4gIHNob3dTcGlubmVycyA9IHRydWU7XG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xuICBzaG93U2Vjb25kcyA9IGZhbHNlO1xuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cbiAgc2hvd01pbnV0ZXMgPSB0cnVlO1xuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBtaW46IERhdGU7XG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIG1heDogRGF0ZTtcbn1cbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcbmltcG9ydCB7XG4gIGNhbkNoYW5nZUhvdXJzLFxuICBjYW5DaGFuZ2VNaW51dGVzLFxuICBjYW5DaGFuZ2VTZWNvbmRzLFxuICBjYW5DaGFuZ2VWYWx1ZSxcbiAgdGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4uL3RpbWVwaWNrZXItY29udHJvbHMudXRpbCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vdGltZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHtcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xuaW1wb3J0IHsgY2hhbmdlVGltZSwgc2V0VGltZSwgaXNWYWxpZExpbWl0IH0gZnJvbSAnLi4vdGltZXBpY2tlci51dGlscyc7XG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vdGltZXBpY2tlci5hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJTdGF0ZSB7XG4gIHZhbHVlOiBEYXRlO1xuICBjb25maWc6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZTtcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9scztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVGltZXBpY2tlclN0YXRlID0ge1xuICB2YWx1ZTogbnVsbCxcbiAgY29uZmlnOiBuZXcgVGltZXBpY2tlckNvbmZpZygpLFxuICBjb250cm9sczoge1xuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhblRvZ2dsZU1lcmlkaWFuOiB0cnVlXG4gIH1cbn07XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuV1JJVEVfVkFMVUU6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogYWN0aW9uLnBheWxvYWQgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlM6IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XG4gICAgICAgICFjYW5DaGFuZ2VIb3VycyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgaG91cjogYWN0aW9uLnBheWxvYWQuc3RlcCB9KTtcblxuICAgICAgaWYgKChzdGF0ZS5jb25maWcubWF4IHx8IHN0YXRlLmNvbmZpZy5taW4pICYmICFpc1ZhbGlkTGltaXQoc3RhdGUuY29uZmlnLCBfbmV3VGltZSkpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfTUlOVVRFUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZU1pbnV0ZXMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7IG1pbnV0ZTogYWN0aW9uLnBheWxvYWQuc3RlcCB9KTtcblxuICAgICAgaWYgKChzdGF0ZS5jb25maWcubWF4IHx8IHN0YXRlLmNvbmZpZy5taW4pICYmICFpc1ZhbGlkTGltaXQoc3RhdGUuY29uZmlnLCBfbmV3VGltZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1NFQ09ORFM6IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XG4gICAgICAgICFjYW5DaGFuZ2VTZWNvbmRzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwge1xuICAgICAgICBzZWNvbmRzOiBhY3Rpb24ucGF5bG9hZC5zdGVwXG4gICAgICB9KTtcblxuICAgICAgaWYgKChzdGF0ZS5jb25maWcubWF4IHx8IHN0YXRlLmNvbmZpZy5taW4pICYmICFpc1ZhbGlkTGltaXQoc3RhdGUuY29uZmlnLCBfbmV3VGltZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuU0VUX1RJTUVfVU5JVDoge1xuICAgICAgaWYgKCFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBzZXRUaW1lKHN0YXRlLnZhbHVlLCBhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5VUERBVEVfQ09OVFJPTFM6IHtcbiAgICAgIGNvbnN0IF9uZXdDb250cm9sc1N0YXRlID0gdGltZXBpY2tlckNvbnRyb2xzKHN0YXRlLnZhbHVlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBjb25zdCBfbmV3U3RhdGU6IFRpbWVwaWNrZXJTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlLFxuICAgICAgICBjb25maWc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBjb250cm9sczogX25ld0NvbnRyb2xzU3RhdGVcbiAgICAgIH07XG5cbiAgICAgIGlmIChzdGF0ZS5jb25maWcuc2hvd01lcmlkaWFuICE9PSBfbmV3U3RhdGUuY29uZmlnLnNob3dNZXJpZGlhbikge1xuICAgICAgICBpZiAoc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICBfbmV3U3RhdGUudmFsdWUgPSBuZXcgRGF0ZShzdGF0ZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBfbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRpbWVwaWNrZXJSZWR1Y2VyLFxuICBUaW1lcGlja2VyU3RhdGUsXG4gIGluaXRpYWxTdGF0ZVxufSBmcm9tICcuL3RpbWVwaWNrZXIucmVkdWNlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aW9uLCBNaW5pU3RvcmUsIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJTdG9yZSBleHRlbmRzIE1pbmlTdG9yZTxUaW1lcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1ttaW5pLW5ncnhdIGRpc3BhdGNoZXIgaW5pdCdcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBNaW5pU3RhdGU8VGltZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIF9kaXNwYXRjaGVyLFxuICAgICAgdGltZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCB0aW1lcGlja2VyUmVkdWNlciwgc3RhdGUpO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1mb3J3YXJkLXJlZiBtYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcbmltcG9ydCB7IGdldENvbnRyb2xzVmFsdWUgfSBmcm9tICcuL3RpbWVwaWNrZXItY29udHJvbHMudXRpbCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbmZpZyc7XG5cbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VTb3VyY2UsXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5pbXBvcnQge1xuICBpc1ZhbGlkRGF0ZSxcbiAgcGFkTnVtYmVyLFxuICBwYXJzZVRpbWUsXG4gIGlzSW5wdXRWYWxpZCxcbiAgaXNIb3VySW5wdXRWYWxpZCxcbiAgaXNNaW51dGVJbnB1dFZhbGlkLFxuICBpc1NlY29uZElucHV0VmFsaWQsXG4gIGlzSW5wdXRMaW1pdFZhbGlkXG59IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3Nvck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBDb250cm9sVmFsdWVBY2Nlc3Nvck1vZGVsID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZXBpY2tlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RJTUVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiwgVGltZXBpY2tlclN0b3JlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmJzLWNoZXZyb24ge1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDlweDtcbiAgICAgIGhlaWdodDogOXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAzcHggMHB4IDAgM3B4O1xuICAgIH1cblxuICAgIC5icy1jaGV2cm9uLXVwIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLmJzLWNoZXZyb24tZG93biB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICB0b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLmJzLXRpbWVwaWNrZXItZmllbGQge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICBgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICAgIFRpbWVwaWNrZXJDb250cm9scyxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95IHtcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBudW1iZXI7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBASW5wdXQoKSBtaW51dGVTdGVwOiBudW1iZXI7XG4gIC8qKiBzZWNvbmRzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIHNlY29uZHNTdGVwOiBudW1iZXI7XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5SW5wdXQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHRoZSB2YWx1ZXMgb2YgaG91cnMgYW5kIG1pbnV0ZXMgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyBvbiB0aGUga2V5Ym9hcmQgKi9cbiAgQElucHV0KCkgYXJyb3drZXlzOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXG4gIEBJbnB1dCgpIHNob3dTcGlubmVyczogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgbWVyaWRpYW4gYnV0dG9uIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgc2hvd01lcmlkaWFuOiBib29sZWFuO1xuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cbiAgQElucHV0KCkgc2hvd01pbnV0ZXM6IGJvb2xlYW47XG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzaG93U2Vjb25kczogYm9vbGVhbjtcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cbiAgQElucHV0KCkgbWVyaWRpYW5zOiBzdHJpbmdbXTtcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgQElucHV0KCkgbWluOiBEYXRlO1xuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG5cbiAgLyoqIGVtaXRzIHRydWUgaWYgdmFsdWUgaXMgYSB2YWxpZCBkYXRlICovXG4gIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHVpIHZhcmlhYmxlc1xuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIHNlY29uZHM6IHN0cmluZztcbiAgbWVyaWRpYW46IHN0cmluZztcblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0VkaXRhYmxlYCBpbnN0ZWFkICovXG4gIGdldCBpc1NwaW5uZXJzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U3Bpbm5lcnMgJiYgIXRoaXMucmVhZG9ubHlJbnB1dDtcbiAgfVxuXG4gIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMucmVhZG9ubHlJbnB1dCB8fCB0aGlzLmRpc2FibGVkKTtcbiAgfVxuXG4gIC8vIG1pblxcbWF4IHZhbGlkYXRpb24gZm9yIGlucHV0IGZpZWxkc1xuICBpbnZhbGlkSG91cnMgPSBmYWxzZTtcbiAgaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgaW52YWxpZFNlY29uZHMgPSBmYWxzZTtcblxuICAvLyB0aW1lIHBpY2tlciBjb250cm9scyBzdGF0ZVxuICBjYW5JbmNyZW1lbnRIb3VyczogYm9vbGVhbjtcbiAgY2FuSW5jcmVtZW50TWludXRlczogYm9vbGVhbjtcbiAgY2FuSW5jcmVtZW50U2Vjb25kczogYm9vbGVhbjtcblxuICBjYW5EZWNyZW1lbnRIb3VyczogYm9vbGVhbjtcbiAgY2FuRGVjcmVtZW50TWludXRlczogYm9vbGVhbjtcbiAgY2FuRGVjcmVtZW50U2Vjb25kczogYm9vbGVhbjtcblxuICBjYW5Ub2dnbGVNZXJpZGlhbjogYm9vbGVhbjtcblxuICAvLyBjb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgdGltZXBpY2tlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jb25maWc6IFRpbWVwaWNrZXJDb25maWcsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9zdG9yZTogVGltZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX3RpbWVwaWNrZXJBY3Rpb25zOiBUaW1lcGlja2VyQWN0aW9uc1xuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuXG4gICAgdGhpcy50aW1lcGlja2VyU3ViID0gX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZhbHVlKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIFVJIHZhbHVlcyBpZiBkYXRlIGNoYW5nZWRcbiAgICAgICAgdGhpcy5fcmVuZGVyVGltZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIF9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5jb250cm9scylcbiAgICAgIC5zdWJzY3JpYmUoKGNvbnRyb2xzU3RhdGU6IFRpbWVwaWNrZXJDb250cm9scykgPT4ge1xuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdChpc0lucHV0VmFsaWQodGhpcy5ob3VycywgdGhpcy5taW51dGVzLCB0aGlzLnNlY29uZHMsIHRoaXMuaXNQTSgpKSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29udHJvbHNTdGF0ZSk7XG4gICAgICAgIF9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuaW52YWxpZEhvdXJzID0gZmFsc2U7XG4gICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICAgIHRoaXMuaW52YWxpZFNlY29uZHMgPSBmYWxzZTtcbiAgfVxuXG4gIGlzUE0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd01lcmlkaWFuICYmIHRoaXMubWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdO1xuICB9XG5cbiAgcHJldkRlZigkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB3aGVlbFNpZ24oJGV2ZW50OiBXaGVlbEV2ZW50SW5pdCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc2lnbigkZXZlbnQuZGVsdGFZKSAqIC0xO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMudXBkYXRlQ29udHJvbHMoZ2V0Q29udHJvbHNWYWx1ZSh0aGlzKSlcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlSG91cnMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlSG91cnMoeyBzdGVwLCBzb3VyY2UgfSkpO1xuICB9XG5cbiAgY2hhbmdlTWludXRlcyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZU1pbnV0ZXMoeyBzdGVwLCBzb3VyY2UgfSlcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlU2Vjb25kcyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZVNlY29uZHMoeyBzdGVwLCBzb3VyY2UgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSG91cnMoaG91cnM6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzSG91cklucHV0VmFsaWQodGhpcy5ob3VycywgdGhpcy5pc1BNKCkpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuaW52YWxpZEhvdXJzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XG4gIH1cblxuICB1cGRhdGVNaW51dGVzKG1pbnV0ZXM6IHN0cmluZykge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcblxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc01pbnV0ZUlucHV0VmFsaWQodGhpcy5taW51dGVzKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRNaW51dGVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XG4gIH1cblxuICB1cGRhdGVTZWNvbmRzKHNlY29uZHM6IHN0cmluZykge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5zZWNvbmRzID0gc2Vjb25kcztcblxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1NlY29uZElucHV0VmFsaWQodGhpcy5zZWNvbmRzKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XG4gIH1cblxuICBpc1ZhbGlkTGltaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzSW5wdXRMaW1pdFZhbGlkKHtcbiAgICAgIGhvdXI6IHRoaXMuaG91cnMsXG4gICAgICBtaW51dGU6IHRoaXMubWludXRlcyxcbiAgICAgIHNlY29uZHM6IHRoaXMuc2Vjb25kcyxcbiAgICAgIGlzUE06IHRoaXMuaXNQTSgpXG4gICAgfSwgdGhpcy5tYXgsIHRoaXMubWluKTtcbiAgfVxuXG4gIF91cGRhdGVUaW1lKCkge1xuICAgIGNvbnN0IF9zZWNvbmRzID0gdGhpcy5zaG93U2Vjb25kcyA/IHRoaXMuc2Vjb25kcyA6IHZvaWQgMDtcbiAgICBjb25zdCBfbWludXRlcyA9IHRoaXMuc2hvd01pbnV0ZXMgPyB0aGlzLm1pbnV0ZXMgOiB2b2lkIDA7XG4gICAgaWYgKCFpc0lucHV0VmFsaWQodGhpcy5ob3VycywgX21pbnV0ZXMsIF9zZWNvbmRzLCB0aGlzLmlzUE0oKSkpIHtcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnNldFRpbWUoe1xuICAgICAgICBob3VyOiB0aGlzLmhvdXJzLFxuICAgICAgICBtaW51dGU6IHRoaXMubWludXRlcyxcbiAgICAgICAgc2Vjb25kczogdGhpcy5zZWNvbmRzLFxuICAgICAgICBpc1BNOiB0aGlzLmlzUE0oKVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlTWVyaWRpYW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3dNZXJpZGlhbiB8fCAhdGhpcy5pc0VkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgX2hvdXJzUGVyRGF5SGFsZiA9IDEyO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlSG91cnMoe1xuICAgICAgICBzdGVwOiBfaG91cnNQZXJEYXlIYWxmLFxuICAgICAgICBzb3VyY2U6ICcnXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IERhdGUpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZERhdGUob2JqKSkge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMud3JpdGVWYWx1ZShwYXJzZVRpbWUob2JqKSkpO1xuICAgIH0gZWxzZSBpZiAob2JqID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgY2hhbmdlIGV2ZW50LlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgc3RhdHVzIGNoYW5nZXMgdG8gb3IgZnJvbSBcImRpc2FibGVkXCIuXG4gICAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUsIGl0IHdpbGwgZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVwaWNrZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlclRpbWUodmFsdWU6IHN0cmluZyB8IERhdGUpOiB2b2lkIHtcbiAgICBpZiAoIWlzVmFsaWREYXRlKHZhbHVlKSkge1xuICAgICAgdGhpcy5ob3VycyA9ICcnO1xuICAgICAgdGhpcy5taW51dGVzID0gJyc7XG4gICAgICB0aGlzLnNlY29uZHMgPSAnJztcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1swXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF92YWx1ZSA9IHBhcnNlVGltZSh2YWx1ZSk7XG4gICAgY29uc3QgX2hvdXJzUGVyRGF5SGFsZiA9IDEyO1xuICAgIGxldCBfaG91cnMgPSBfdmFsdWUuZ2V0SG91cnMoKTtcblxuICAgIGlmICh0aGlzLnNob3dNZXJpZGlhbikge1xuICAgICAgdGhpcy5tZXJpZGlhbiA9IHRoaXMubWVyaWRpYW5zW19ob3VycyA+PSBfaG91cnNQZXJEYXlIYWxmID8gMSA6IDBdO1xuICAgICAgX2hvdXJzID0gX2hvdXJzICUgX2hvdXJzUGVyRGF5SGFsZjtcbiAgICAgIC8vIHNob3VsZCBiZSAxMiBQTSwgbm90IDAwIFBNXG4gICAgICBpZiAoX2hvdXJzID09PSAwKSB7XG4gICAgICAgIF9ob3VycyA9IF9ob3Vyc1BlckRheUhhbGY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3VycyA9IHBhZE51bWJlcihfaG91cnMpO1xuICAgIHRoaXMubWludXRlcyA9IHBhZE51bWJlcihfdmFsdWUuZ2V0TWludXRlcygpKTtcbiAgICB0aGlzLnNlY29uZHMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldFVUQ1NlY29uZHMoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vdGltZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgVGltZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGltZXBpY2tlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUaW1lcGlja2VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaW1lcGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVGltZXBpY2tlckNvbmZpZywgVGltZXBpY2tlckFjdGlvbnMsIFRpbWVwaWNrZXJTdG9yZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsInRzbGliXzEuX19leHRlbmRzIiwiQmVoYXZpb3JTdWJqZWN0IiwiTWluaVN0YXRlIiwiTWluaVN0b3JlIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1FBaUJFLHNDQUFVOzs7O1lBQVYsVUFBVyxLQUFvQjtnQkFDN0IsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsV0FBVztvQkFDbkMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELHVDQUFXOzs7O1lBQVgsVUFBWSxLQUFzQjtnQkFDaEMsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWTtvQkFDcEMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzth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