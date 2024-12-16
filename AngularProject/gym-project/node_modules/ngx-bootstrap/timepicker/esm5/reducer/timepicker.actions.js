/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var TimepickerActions = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return TimepickerActions;
}());
export { TimepickerActions };
function TimepickerActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerActions.ctorParameters;
    /** @type {?} */
    TimepickerActions.WRITE_VALUE;
    /** @type {?} */
    TimepickerActions.CHANGE_HOURS;
    /** @type {?} */
    TimepickerActions.CHANGE_MINUTES;
    /** @type {?} */
    TimepickerActions.CHANGE_SECONDS;
    /** @type {?} */
    TimepickerActions.SET_TIME_UNIT;
    /** @type {?} */
    TimepickerActions.UPDATE_CONTROLS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBaUJ6QyxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBb0I7UUFDN0IsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLEtBQXNCO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZO1lBQ3BDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxLQUFzQjtRQUNsQyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsS0FBc0I7UUFDbEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQVc7UUFDakIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGFBQWE7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLEtBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxlQUFlO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIO29DQS9DNkIsd0NBQXdDO3FDQUN2QywyQkFBMkI7dUNBQ3pCLDZCQUE2Qjt1Q0FDN0IsNkJBQTZCO3NDQUM5Qiw0QkFBNEI7d0NBQzFCLDhCQUE4Qjs7Z0JBUGpFLFVBQVU7OzRCQVJYOztTQVNhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VFdmVudCxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lXG59IGZyb20gJy4uL3RpbWVwaWNrZXIubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJBY3Rpb25zIHtcbiAgc3RhdGljIHJlYWRvbmx5IFdSSVRFX1ZBTFVFID0gJ1t0aW1lcGlja2VyXSB3cml0ZSB2YWx1ZSBmcm9tIG5nIG1vZGVsJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9IT1VSUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIGhvdXJzJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9NSU5VVEVTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgbWludXRlcyc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU0VDT05EUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIHNlY29uZHMnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX1RJTUVfVU5JVCA9ICdbdGltZXBpY2tlcl0gc2V0IHRpbWUgdW5pdCc7XG4gIHN0YXRpYyByZWFkb25seSBVUERBVEVfQ09OVFJPTFMgPSAnW3RpbWVwaWNrZXJdIHVwZGF0ZSBjb250cm9scyc7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRSxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZUhvdXJzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX0hPVVJTLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlTWludXRlcyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9NSU5VVEVTLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlU2Vjb25kcyhldmVudDogVGltZUNoYW5nZUV2ZW50KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1NFQ09ORFMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBzZXRUaW1lKHZhbHVlOiBUaW1lKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuU0VUX1RJTUVfVU5JVCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2xzKHZhbHVlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5VUERBVEVfQ09OVFJPTFMsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==