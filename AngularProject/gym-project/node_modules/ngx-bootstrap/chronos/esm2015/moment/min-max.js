/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isArray, isDateValid } from '../utils/type-checks';
import { isAfter, isBefore } from '../utils/date-compare';
/**
 * @param {?} fn
 * @param {?} dates
 * @return {?}
 */
function pickBy(fn, dates) {
    let /** @type {?} */ _dates;
    const /** @type {?} */ _firstArg = dates[0];
    if (isArray(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (isArray(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    let /** @type {?} */ res = _dates[0];
    for (let /** @type {?} */ i = 1; i < _dates.length; ++i) {
        // if (!moments[i].isValid() || moments[i][fn](res)) {
        if (!isDateValid(_dates[i]) || fn.call(null, _dates[i], res)) {
            res = _dates[i];
        }
    }
    return res;
}
/**
 * @param {...?} args
 * @return {?}
 */
export function min(...args) {
    // const args = [].slice.call(arguments, 0);
    return pickBy(isBefore, args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function max(...args) {
    // const args = [].slice.call(arguments, 0);
    return pickBy(isAfter, args);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLW1heC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9taW4tbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUUxRCxnQkFBZ0IsRUFBWSxFQUFFLEtBQXdCO0lBQ3BELHFCQUFJLE1BQWMsQ0FBQztJQUNuQix1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUNwQjtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBQ0QscUJBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7O1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaOzs7OztBQUdELE1BQU0sY0FBYyxHQUFHLElBQVk7O0lBR2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQy9COzs7OztBQUVELE1BQU0sY0FBYyxHQUFHLElBQVk7O0lBR2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbi8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbi8vXG4vLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4vLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuaW1wb3J0IHsgaXNBcnJheSwgaXNEYXRlVmFsaWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5cbmZ1bmN0aW9uIHBpY2tCeShmbjogRnVuY3Rpb24sIGRhdGVzOiBEYXRlW10gfCBEYXRlW11bXSk6IERhdGUge1xuICBsZXQgX2RhdGVzOiBEYXRlW107XG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xuICBpZiAoaXNBcnJheTxEYXRlPihfZmlyc3RBcmcpICYmIGRhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIF9kYXRlcyA9IF9maXJzdEFyZztcbiAgfSBlbHNlIGlmIChpc0FycmF5PERhdGU+KGRhdGVzKSkge1xuICAgIF9kYXRlcyA9IGRhdGVzO1xuICB9XG5cbiAgaWYgKCFfZGF0ZXMgfHwgIV9kYXRlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfVxuICBsZXQgcmVzID0gX2RhdGVzWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IF9kYXRlcy5sZW5ndGg7ICsraSkge1xuICAgIC8vIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgIGlmICghaXNEYXRlVmFsaWQoX2RhdGVzW2ldKSB8fCBmbi5jYWxsKG51bGwsIF9kYXRlc1tpXSwgcmVzKSkge1xuICAgICAgcmVzID0gX2RhdGVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5leHBvcnQgZnVuY3Rpb24gbWluKC4uLmFyZ3M6IERhdGVbXSk6IERhdGUge1xuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gIHJldHVybiBwaWNrQnkoaXNCZWZvcmUsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4KC4uLmFyZ3M6IERhdGVbXSk6IERhdGUge1xuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gIHJldHVybiBwaWNrQnkoaXNBZnRlciwgYXJncyk7XG59XG4iXX0=