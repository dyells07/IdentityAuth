/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
var TimepickerStore = /** @class */ (function (_super) {
    tslib_1.__extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        var /** @type {?} */ state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(MiniStore));
export { TimepickerStore };
function TimepickerStore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerStore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerStore.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixZQUFZLEVBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBR2xDLDJDQUEwQjtJQUM3RDtRQUFBLGlCQVVDO1FBVEMscUJBQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFTO1lBQzlDLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gscUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUN6QixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsUUFBQSxrQkFBTSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQUM7O0tBQzlDOztnQkFaRixVQUFVOzs7OzBCQVZYO0VBV3FDLFNBQVM7U0FBakMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRpbWVwaWNrZXJSZWR1Y2VyLFxuICBUaW1lcGlja2VyU3RhdGUsXG4gIGluaXRpYWxTdGF0ZVxufSBmcm9tICcuL3RpbWVwaWNrZXIucmVkdWNlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aW9uLCBNaW5pU3RvcmUsIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJTdG9yZSBleHRlbmRzIE1pbmlTdG9yZTxUaW1lcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1ttaW5pLW5ncnhdIGRpc3BhdGNoZXIgaW5pdCdcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBNaW5pU3RhdGU8VGltZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIF9kaXNwYXRjaGVyLFxuICAgICAgdGltZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCB0aW1lcGlja2VyUmVkdWNlciwgc3RhdGUpO1xuICB9XG59XG4iXX0=