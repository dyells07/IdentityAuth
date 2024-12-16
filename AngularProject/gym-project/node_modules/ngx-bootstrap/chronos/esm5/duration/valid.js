/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { toInt } from '../utils/type-checks';
var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = function (mem, order) {
    mem[order] = true;
    return mem;
};
var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    var /** @type {?} */ durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    var /** @type {?} */ unitHasDecimal = false;
    for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
// export function isValid() {
//   return this._isValid;
// }
//
// export function createInvalid(): Duration {
//   return createDuration(NaN);
// }
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSzdDLHFCQUFNLFFBQVEsR0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzdGLFVBQUMsR0FBK0IsRUFBRSxLQUFLO0lBQzFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaO0FBSkQscUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBSWpDLEVBQUUsQ0FBQyxDQUFDOzs7OztBQUVQLE1BQU0sMEJBQTBCLFFBQTZCO0lBQzNELHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLFlBQVk7U0FDWCxJQUFJLENBQUMsVUFBQyxHQUFxQjtRQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDO2VBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJO2VBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFPRCxxQkFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUxQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2Q7WUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG9yZGVyaW5nOiAoa2V5b2YgRGF0ZU9iamVjdClbXSA9IFsneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXTtcbmNvbnN0IG9yZGVyaW5nSGFzaCA9IG9yZGVyaW5nLnJlZHVjZSgobWVtOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgb3JkZXIpID0+IHtcbiAgbWVtW29yZGVyXSA9IHRydWU7XG5cbiAgcmV0dXJuIG1lbTtcbn0sIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0Pik6IGJvb2xlYW4ge1xuICBjb25zdCBkdXJhdGlvbktleXMgPSBPYmplY3Qua2V5cyhkdXJhdGlvbik7XG4gIGlmIChkdXJhdGlvbktleXNcbiAgICAgIC5zb21lKChrZXk6IGtleW9mIERhdGVPYmplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChrZXkgaW4gb3JkZXJpbmdIYXNoKVxuICAgICAgICAgICYmIGR1cmF0aW9uW2tleV0gPT09IG51bGxcbiAgICAgICAgICB8fCBpc05hTihkdXJhdGlvbltrZXldKTtcbiAgICAgIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGZvciAobGV0IGtleSBpbiBkdXJhdGlvbikge1xuICAvLyAgIGlmICghKGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiYgKGR1cmF0aW9uW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4oZHVyYXRpb25ba2V5XSkpKSkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGxldCB1bml0SGFzRGVjaW1hbCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSkge1xuICAgICAgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcbiAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dICE9PSB0b0ludChkdXJhdGlvbltvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XG4vLyAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKCk6IER1cmF0aW9uIHtcbi8vICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG4vLyB9XG4iXX0=