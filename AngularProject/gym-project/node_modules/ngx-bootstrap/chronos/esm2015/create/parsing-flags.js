/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
export function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy1mbGFncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7SUFFRSxNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsS0FBSztRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsZUFBZSxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxLQUFLO0tBQ3ZCLENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLDBCQUEwQixNQUF5QjtJQUN2RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO0tBQ3BDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZywgRGF0ZVBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTogRGF0ZVBhcnNpbmdGbGFncyB7XG4gIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cbiAgcmV0dXJuIHtcbiAgICBlbXB0eTogZmFsc2UsXG4gICAgdW51c2VkVG9rZW5zOiBbXSxcbiAgICB1bnVzZWRJbnB1dDogW10sXG4gICAgb3ZlcmZsb3c6IC0yLFxuICAgIGNoYXJzTGVmdE92ZXI6IDAsXG4gICAgbnVsbElucHV0OiBmYWxzZSxcbiAgICBpbnZhbGlkTW9udGg6IG51bGwsXG4gICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXG4gICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICBpc286IGZhbHNlLFxuICAgIHBhcnNlZERhdGVQYXJ0czogW10sXG4gICAgbWVyaWRpZW06IG51bGwsXG4gICAgcmZjMjgyMjogZmFsc2UsXG4gICAgd2Vla2RheU1pc21hdGNoOiBmYWxzZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcbiAgaWYgKGNvbmZpZy5fcGYgPT0gbnVsbCkge1xuICAgIGNvbmZpZy5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnLl9wZjtcbn1cbiJdfQ==