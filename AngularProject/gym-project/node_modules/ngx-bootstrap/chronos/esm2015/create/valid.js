/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getParsingFlags } from './parsing-flags';
/**
 * @param {?} config
 * @return {?}
 */
export function isValid(config) {
    if (config._isValid == null) {
        const /** @type {?} */ flags = getParsingFlags(config);
        const /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        let /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */
export function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
export function markInvalid(config) {
    config._isValid = false;
    return config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvdmFsaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFbEQsTUFBTSxrQkFBa0IsTUFBeUI7SUFDL0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVCLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsdUJBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBUztZQUN0RixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxxQkFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNsQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ1osQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNuQixDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3JCLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNoQixDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3BCLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsVUFBVSxHQUFHLFVBQVU7Z0JBQ3JCLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQztnQkFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7U0FDL0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1NBQzlCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUN4Qjs7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsTUFBeUIsRUFBRSxLQUE4QjtJQUNyRixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFFRCxNQUFNLHNCQUFzQixNQUF5QjtJQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogYm9vbGVhbiB7XG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgIGNvbnN0IGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyk7XG4gICAgY29uc3QgcGFyc2VkUGFydHMgPSBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICB9KTtcbiAgICBsZXQgaXNOb3dWYWxpZCA9ICFpc05hTihjb25maWcuX2QgJiYgY29uZmlnLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuXG4gICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XG4gICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxuICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKGNvbmZpZykpIHtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcuX2lzVmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIGZsYWdzPzogeyBudWxsSW5wdXQ6IGJvb2xlYW4gfSk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgT2JqZWN0LmFzc2lnbihnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKSwgZmxhZ3MgfHwgeyB1c2VySW52YWxpZGF0ZWQ6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iXX0=