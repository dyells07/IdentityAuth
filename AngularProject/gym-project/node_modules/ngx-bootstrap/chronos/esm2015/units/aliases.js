/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
const /** @type {?} */ aliases = {};
const /** @type {?} */ _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */
export function addUnitAlias(unit, shorthand) {
    const /** @type {?} */ lowerCase = unit.toLowerCase();
    let /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
export function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
export function normalizeObjectUnits(inputObject) {
    const /** @type {?} */ normalizedInput = {};
    let /** @type {?} */ normalizedProp;
    let /** @type {?} */ prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return /** @type {?} */ (normalizedInput);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHNUQsdUJBQU0sT0FBTyxHQUE4QixFQUFFLENBQUM7QUFLOUMsdUJBQU0sU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx1QkFBdUIsSUFBd0IsRUFBRSxTQUFpQjtJQUN0RSx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7Q0FDNUU7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsS0FBd0I7SUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0NBQ3JGOzs7OztBQUVELE1BQU0sK0JBQStCLFdBQXNDO0lBQ3pFLHVCQUFNLGVBQWUsR0FBOEIsRUFBRSxDQUFDO0lBQ3RELHFCQUFJLGNBQWMsQ0FBQztJQUNuQixxQkFBSSxJQUFJLENBQUM7SUFFVCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FDRjtLQUNGO0lBRUQsTUFBTSxtQkFBQyxlQUFzQixFQUFDO0NBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbmV4cG9ydCB0eXBlIEV4dGVuZGVkVW5pdE9mVGltZSA9IFVuaXRPZlRpbWUgfCAnZGF0ZScgfCAnd2VlaycgfCAnaXNvV2VlaycgfCAnZGF5T2ZZZWFyJyB8XG4gICd3ZWVrZGF5JyB8ICdpc29XZWVrZGF5JyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJyB8ICdtaW51dGUnIHwgJ2hvdXInIHwgJ3F1YXJ0ZXInIHwgJ3dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcic7XG5cbmNvbnN0IF9tYXBVbml0czogeyBba2V5OiBzdHJpbmddOiBVbml0T2ZUaW1lIH0gPSB7XG4gIGRhdGU6ICdkYXknLFxuICBob3VyOiAnaG91cnMnLFxuICBtaW51dGU6ICdtaW51dGVzJyxcbiAgc2Vjb25kOiAnc2Vjb25kcycsXG4gIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyh1bml0OiBFeHRlbmRlZFVuaXRPZlRpbWUsIHNob3J0aGFuZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgbGV0IF91bml0ID0gdW5pdDtcbiAgaWYgKGxvd2VyQ2FzZSBpbiBfbWFwVW5pdHMpIHtcbiAgICBfdW5pdCA9IF9tYXBVbml0c1tsb3dlckNhc2VdO1xuICB9XG4gIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbYCR7bG93ZXJDYXNlfXNgXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IF91bml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHM6IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHVuaXRzKSA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IERhdGVPYmplY3Qge1xuICBjb25zdCBub3JtYWxpemVkSW5wdXQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgbGV0IG5vcm1hbGl6ZWRQcm9wO1xuICBsZXQgcHJvcDtcblxuICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkSW5wdXQgYXMgYW55O1xufVxuIl19