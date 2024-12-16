/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
var /** @type {?} */ tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
    var /** @type {?} */ _token = isString(token) ? [token] : token;
    var /** @type {?} */ func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        var /** @type {?} */ i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
export function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEcscUJBQU0sTUFBTSxHQUFzQyxFQUFFLENBQUM7Ozs7OztBQUVyRCxNQUFNLHdCQUF3QixLQUF3QixFQUFFLFFBQW1DO0lBQ3pGLHFCQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBRXBCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2YsQ0FBQztLQUNIO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFTLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQscUJBQUksQ0FBQyxTQUFBLENBQUM7UUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGO0NBQ0Y7Ozs7OztBQUVELE1BQU0sNEJBQTRCLEtBQWUsRUFBRSxRQUEwQjtJQUMzRSxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUIsRUFBRSxNQUFjO1FBQ3ZHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7QUFHRCxNQUFNLGtDQUFrQyxLQUFhLEVBQUUsS0FBYSxFQUFFLE1BQXlCO0lBQzdGLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRDtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB0b2tlbnM6IHtba2V5OiBzdHJpbmddOiBEYXRlUGFyc2VUb2tlbkZufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XG4gIGNvbnN0IF90b2tlbiA9IGlzU3RyaW5nKHRva2VuKSA/IFt0b2tlbl0gOiB0b2tlbjtcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcblxuICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcblxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iXX0=