/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { absFloor } from '../utils';
/**
 * @param {?} str
 * @return {?}
 */
export function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isBoolean(value) {
    return value === true || value === false;
}
/**
 * @param {?} date
 * @return {?}
 */
export function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
export function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
export function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
export function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
export function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    let /** @type {?} */ k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} input
 * @return {?}
 */
export function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
export function toInt(argumentForCoercion) {
    const /** @type {?} */ coercedNumber = +argumentForCoercion;
    let /** @type {?} */ value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1dGlscy90eXBlLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFFcEMsTUFBTSxtQkFBbUIsR0FBUTtJQUMvQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELE1BQU0saUJBQWlCLEtBQVU7SUFDL0IsTUFBTSxDQUFDLEtBQUssWUFBWSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGVBQWUsQ0FBQztDQUMzRjs7Ozs7QUFFRCxNQUFNLG9CQUFvQixLQUFVO0lBQ2xDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUM7Q0FDMUM7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVTtJQUNwQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Q0FDdkQ7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsRUFBTztJQUNoQyxNQUFNLENBQUMsQ0FDTCxFQUFFLFlBQVksUUFBUTtRQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssbUJBQW1CLENBQzNELENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLG1CQUFtQixLQUFXO0lBQ2xDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0NBQ2pHOzs7Ozs7QUFFRCxNQUFNLGtCQUFxQixLQUFXO0lBQ3BDLE1BQU0sQ0FBQyxDQUNMLEtBQUssWUFBWSxLQUFLO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FDM0QsQ0FBQztDQUNIOzs7Ozs7O0FBSUQsTUFBTSxxQkFBd0IsQ0FBSSxhQUFhLENBQVM7SUFDdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbkQ7Ozs7OztBQUVELE1BQU0sbUJBQXNCLEtBQVU7OztJQUdwQyxNQUFNLENBQUMsQ0FDTCxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FDN0UsQ0FBQztDQUNIOzs7OztBQUVELE1BQU0sd0JBQXdCLEdBQVE7SUFDcEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEO0lBQ0QscUJBQUksQ0FBQyxDQUFDO0lBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYjs7Ozs7QUFHRCxNQUFNLHNCQUFzQixLQUFVO0lBQ3BDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7Q0FDekI7Ozs7OztBQUVELE1BQU0sZ0JBQW1CLG1CQUF3QztJQUMvRCx1QkFBTSxhQUFhLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMzQyxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDakM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHN0cjogYW55KTogc3RyIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZVZhbGlkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRhdGUgJiYgZGF0ZS5nZXRUaW1lICYmICFpc05hTihkYXRlLmdldFRpbWUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuOiBhbnkpOiBmbiBpcyBGdW5jdGlvbiB7XG4gIHJldHVybiAoXG4gICAgZm4gaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlPzogYW55KTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5PFQ+KGlucHV0PzogYW55KTogaW5wdXQgaXMgVFtdIHtcbiAgcmV0dXJuIChcbiAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICApO1xufVxuXG4vLyBUT0RPOiByZXR1cm5lZCB0eXBlIHNob3VsZCBiZSBjaGFuZ2VkIHRvIFwiYiBpcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5cIlxuLy8gYWZ0ZXIgdXBkYXRlIHRvIHR5cGVzY3JpcHQgMy4xLjEgKGlzc3VlIDQ3MjgpXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcDxUPihhOiBUIC8qb2JqZWN0Ki8sIGI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Q8VD4oaW5wdXQ6IGFueSAvKm9iamVjdCovKTogaW5wdXQgaXMgVCB7XG4gIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAvLyBpbnB1dCAhPSBudWxsXG4gIHJldHVybiAoXG4gICAgaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICByZXR1cm4gKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwKTtcbiAgfVxuICBsZXQgaztcbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50PFQ+KGFyZ3VtZW50Rm9yQ29lcmNpb246IHN0cmluZyB8IG51bWJlciB8IFQpOiBudW1iZXIge1xuICBjb25zdCBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb247XG4gIGxldCB2YWx1ZSA9IDA7XG5cbiAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl19