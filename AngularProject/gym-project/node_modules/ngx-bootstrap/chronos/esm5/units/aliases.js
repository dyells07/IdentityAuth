/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
var /** @type {?} */ aliases = {};
var /** @type {?} */ _mapUnits = {
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
    var /** @type {?} */ lowerCase = unit.toLowerCase();
    var /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
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
    var /** @type {?} */ normalizedInput = {};
    var /** @type {?} */ normalizedProp;
    var /** @type {?} */ prop;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHNUQscUJBQU0sT0FBTyxHQUE4QixFQUFFLENBQUM7QUFLOUMscUJBQU0sU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx1QkFBdUIsSUFBd0IsRUFBRSxTQUFpQjtJQUN0RSxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUksU0FBUyxNQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQzVFOzs7OztBQUVELE1BQU0seUJBQXlCLEtBQXdCO0lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztDQUNyRjs7Ozs7QUFFRCxNQUFNLCtCQUErQixXQUFzQztJQUN6RSxxQkFBTSxlQUFlLEdBQThCLEVBQUUsQ0FBQztJQUN0RCxxQkFBSSxjQUFjLENBQUM7SUFDbkIscUJBQUksSUFBSSxDQUFDO0lBRVQsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7S0FDRjtJQUVELE1BQU0sbUJBQUMsZUFBc0IsRUFBQztDQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc093blByb3AsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG5leHBvcnQgdHlwZSBFeHRlbmRlZFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lIHwgJ2RhdGUnIHwgJ3dlZWsnIHwgJ2lzb1dlZWsnIHwgJ2RheU9mWWVhcicgfFxuICAnd2Vla2RheScgfCAnaXNvV2Vla2RheScgfCAnc2Vjb25kJyB8ICdtaWxsaXNlY29uZCcgfCAnbWludXRlJyB8ICdob3VyJyB8ICdxdWFydGVyJyB8ICd3ZWVrWWVhcicgfCAnaXNvV2Vla1llYXInO1xuXG5jb25zdCBfbWFwVW5pdHM6IHsgW2tleTogc3RyaW5nXTogVW5pdE9mVGltZSB9ID0ge1xuICBkYXRlOiAnZGF5JyxcbiAgaG91cjogJ2hvdXJzJyxcbiAgbWludXRlOiAnbWludXRlcycsXG4gIHNlY29uZDogJ3NlY29uZHMnLFxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0QWxpYXModW5pdDogRXh0ZW5kZWRVbml0T2ZUaW1lLCBzaG9ydGhhbmQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gIGxldCBfdW5pdCA9IHVuaXQ7XG4gIGlmIChsb3dlckNhc2UgaW4gX21hcFVuaXRzKSB7XG4gICAgX3VuaXQgPSBfbWFwVW5pdHNbbG93ZXJDYXNlXTtcbiAgfVxuICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2Ake2xvd2VyQ2FzZX1zYF0gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSBfdW5pdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIHJldHVybiBpc1N0cmluZyh1bml0cykgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBEYXRlT2JqZWN0IHtcbiAgY29uc3Qgbm9ybWFsaXplZElucHV0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGxldCBub3JtYWxpemVkUHJvcDtcbiAgbGV0IHByb3A7XG5cbiAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZElucHV0IGFzIGFueTtcbn1cbiJdfQ==