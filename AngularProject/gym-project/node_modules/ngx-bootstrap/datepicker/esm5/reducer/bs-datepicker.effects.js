/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { BsLocaleService } from '../bs-locale.service';
import { filter, map } from 'rxjs/operators';
var BsDatepickerEffects = /** @class */ (function () {
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
            .pipe(filter(function (months) { return !!months; }));
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .pipe(filter(function (months) { return !!months; }));
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .pipe(filter(function (years) { return !!years; }));
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .pipe(map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
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
            var /** @type {?} */ _cell = /** @type {?} */ (event.cell);
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
                unit: { month: getMonth(event.date) },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { year: getFullYear(event.date) },
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
            .pipe(filter(function (monthModel) { return !!monthModel; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .pipe(filter(function (month) { return !!month; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .pipe(filter(function (selectedDate) { return !!selectedDate; }))
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .pipe(filter(function (selectedRange) { return !!selectedRange; }))
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .pipe(filter(function (state) { return !!state; }))
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .pipe(filter(function (hoveredDate) { return !!hoveredDate; }))
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
            for (var _a = tslib_1.__values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDatepickerEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions, },
        { type: BsLocaleService, },
    ]; };
    return BsDatepickerEffects;
}());
export { BsDatepickerEffects };
function BsDatepickerEffects_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerEffects.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerEffects.ctorParameters;
    /** @type {?} */
    BsDatepickerEffects.prototype.viewMode;
    /** @type {?} */
    BsDatepickerEffects.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.options;
    /** @type {?} */
    BsDatepickerEffects.prototype._store;
    /** @type {?} */
    BsDatepickerEffects.prototype._subs;
    /** @type {?} */
    BsDatepickerEffects.prototype._actions;
    /** @type {?} */
    BsDatepickerEffects.prototype._localeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFjOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBYTNDLDZCQUFvQixRQUE2QixFQUM3QjtRQURBLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYztxQkFIRixFQUFFO0tBR3FCOzs7OztJQUV2RCxrQ0FBSTs7OztJQUFKLFVBQUssa0JBQXFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFakMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsY0FBYzs7Ozs7O0lBRWQsc0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLEtBQWE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN4RDs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsS0FBVztRQUNwQixJ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QSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQixDQUFDO2FBQ2xDLElBQUksQ0FDSCxNQUFNLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFiLENBQWEsQ0FBQyxDQUNyQzthQUNBLFNBQVMsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUN4RSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTthQUM3QixTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQzlFLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxxQ0FBTzs7O0lBQVA7O1lBQ0UsR0FBRyxDQUFDLENBQWMsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUE7Z0JBQXZCLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7OztLQUNGOztnQkEvT0YsVUFBVTs7OztnQkFMRixtQkFBbUI7Z0JBRW5CLGVBQWU7OzhCQWxCeEI7O1NBc0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuLi9icy1sb2NhbGUuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xuXG4gIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZTtcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UpIHt9XG5cbiAgaW5pdChfYnNEYXRlcGlja2VyU3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUgPSBfYnNEYXRlcGlja2VyU3RvcmU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBzZXR0ZXJzICovXG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdCh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0UmFuZ2VWYWx1ZSh2YWx1ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0TWluRGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWluRGF0ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYXhEYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5tYXhEYXRlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERpc2FibGVkKHZhbHVlOiBib29sZWFuKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5pc0Rpc2FibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIFNldCByZW5kZXJpbmcgb3B0aW9ucyAqL1xuICBzZXRPcHRpb25zKF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnN0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7bG9jYWxlOiB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGV9LCBfY29uZmlnKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldE9wdGlvbnMoX29wdGlvbnMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIHZpZXcgdG8gbW9kZSBiaW5kaW5ncyAqL1xuICBzZXRCaW5kaW5ncyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29udGFpbmVyLmRheXNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHMpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcbiAgICAgICk7XG5cbiAgICAvLyBtb250aCBjYWxlbmRhclxuICAgIGNvbnRhaW5lci5tb250aHNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHNDYWxlbmRhcilcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxuICAgICAgKTtcblxuICAgIC8vIHllYXIgY2FsZW5kYXJcbiAgICBjb250YWluZXIueWVhcnNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJGbGFnZ2VkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcih5ZWFycyA9PiAhIXllYXJzKVxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lci52aWV3TW9kZSA9IHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3Lm1vZGUpO1xuXG4gICAgY29udGFpbmVyLm9wdGlvbnMgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zaG93V2Vla051bWJlcnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHNob3dXZWVrTnVtYmVycyA9PiAoe3Nob3dXZWVrTnVtYmVyc30pKVxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIGV2ZW50IGhhbmRsZXJzICovXG4gIHNldEV2ZW50SGFuZGxlcnMoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnRhaW5lci5zZXRWaWV3TW9kZSA9IChldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2hhbmdlVmlld01vZGUoZXZlbnQpKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm5hdmlnYXRlVG8gPSAoZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm5hdmlnYXRlU3RlcChldmVudC5zdGVwKSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5kYXlIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBfY2VsbCA9IGV2ZW50LmNlbGwgYXMgRGF5Vmlld01vZGVsO1xuICAgICAgaWYgKF9jZWxsLmlzT3RoZXJNb250aCB8fCBfY2VsbC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5ob3ZlckRheShldmVudCkpO1xuICAgICAgX2NlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubW9udGhIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnllYXJIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgLyoqIHNlbGVjdCBoYW5kbGVycyAqL1xuICAgIC8vIGNvbnRhaW5lci5kYXlTZWxlY3RIYW5kbGVyID0gKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgLy8gICBpZiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCkge1xuICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xuICAgIC8vIH07XG5cbiAgICBjb250YWluZXIubW9udGhTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHttb250aDogZ2V0TW9udGgoZXZlbnQuZGF0ZSl9LFxuICAgICAgICAgIHZpZXdNb2RlOiAnZGF5J1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnllYXJTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHt5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKX0sXG4gICAgICAgICAgdmlld01vZGU6ICdtb250aCdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcpLnN1YnNjcmliZSh2aWV3ID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jYWxjdWxhdGUoKSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBmb3JtYXQgY2FsZW5kYXIgdmFsdWVzIG9uIG1vbnRoIG1vZGVsIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzTW9kZWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihtb250aE1vZGVsID0+ICEhbW9udGhNb2RlbClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZm9ybWF0KCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm1hdHRlZE1vbnRocylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKG1vbnRoID0+ICEhbW9udGgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWREYXRlID0+ICEhc2VsZWN0ZWREYXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBmb3IgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZFJhbmdlID0+ICEhc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkUmFuZ2UgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBtb250aHNDYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzQ2FsZW5kYXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyB5ZWFycyBjYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc3RhdGUgPT4gISFzdGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gaG92ZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmhvdmVyZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoaG92ZXJlZERhdGUgPT4gISFob3ZlcmVkRGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGhvdmVyZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlXG4gICAgICAgIC5zdWJzY3JpYmUobG9jYWxlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0TG9jYWxlKGxvY2FsZSkpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=