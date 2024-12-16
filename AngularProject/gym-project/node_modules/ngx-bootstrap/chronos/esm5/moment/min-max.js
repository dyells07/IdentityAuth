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
    var /** @type {?} */ _dates;
    var /** @type {?} */ _firstArg = dates[0];
    if (isArray(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (isArray(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    var /** @type {?} */ res = _dates[0];
    for (var /** @type {?} */ i = 1; i < _dates.length; ++i) {
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
export function min() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(isBefore, args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function max() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(isAfter, args);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLW1heC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9taW4tbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUUxRCxnQkFBZ0IsRUFBWSxFQUFFLEtBQXdCO0lBQ3BELHFCQUFJLE1BQWMsQ0FBQztJQUNuQixxQkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUNwQjtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBQ0QscUJBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7O1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaOzs7OztBQUdELE1BQU07SUFBYyxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLHlCQUFlOzs7SUFHakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDL0I7Ozs7O0FBRUQsTUFBTTtJQUFjLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYseUJBQWU7OztJQUdqQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4vLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4vL1xuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xuXG5mdW5jdGlvbiBwaWNrQnkoZm46IEZ1bmN0aW9uLCBkYXRlczogRGF0ZVtdIHwgRGF0ZVtdW10pOiBEYXRlIHtcbiAgbGV0IF9kYXRlczogRGF0ZVtdO1xuICBjb25zdCBfZmlyc3RBcmcgPSBkYXRlc1swXTtcbiAgaWYgKGlzQXJyYXk8RGF0ZT4oX2ZpcnN0QXJnKSAmJiBkYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICBfZGF0ZXMgPSBfZmlyc3RBcmc7XG4gIH0gZWxzZSBpZiAoaXNBcnJheTxEYXRlPihkYXRlcykpIHtcbiAgICBfZGF0ZXMgPSBkYXRlcztcbiAgfVxuXG4gIGlmICghX2RhdGVzIHx8ICFfZGF0ZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gIH1cbiAgbGV0IHJlcyA9IF9kYXRlc1swXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBfZGF0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICBpZiAoIWlzRGF0ZVZhbGlkKF9kYXRlc1tpXSkgfHwgZm4uY2FsbChudWxsLCBfZGF0ZXNbaV0sIHJlcykpIHtcbiAgICAgIHJlcyA9IF9kYXRlc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuZXhwb3J0IGZ1bmN0aW9uIG1pbiguLi5hcmdzOiBEYXRlW10pOiBEYXRlIHtcbiAgLy8gY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICByZXR1cm4gcGlja0J5KGlzQmVmb3JlLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heCguLi5hcmdzOiBEYXRlW10pOiBEYXRlIHtcbiAgLy8gY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICByZXR1cm4gcGlja0J5KGlzQWZ0ZXIsIGFyZ3MpO1xufVxuIl19