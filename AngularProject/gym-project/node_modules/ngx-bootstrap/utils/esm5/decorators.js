/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
export function OnChange(defaultValue) {
    var /** @type {?} */ sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJkZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxtQkFBbUIsWUFBa0I7SUFDekMscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQzs7SUFHdkIsTUFBTSxDQUFDLHlCQUF5QixNQUFXLEVBQUUsV0FBbUI7UUFDOUQscUJBQU0sSUFBSSxHQUFHLFFBQU0sV0FBVyxVQUFPLENBQUM7UUFDdEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3pDLHNDQUFzQztZQUN0QyxHQUFHOzs7WUFBSDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1lBQ0Qsc0NBQXNDO1lBQ3RDLEdBQUc7Ozs7WUFBSCxVQUFJLEtBQVU7Z0JBQ1oscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyAqL1xuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBPbkNoYW5nZShkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICBjb25zdCBzdWZpeCA9ICdDaGFuZ2UnO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHJldHVybiBmdW5jdGlvbiBPbkNoYW5nZUhhbmRsZXIodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBfa2V5ID0gYCBfXyR7cHJvcGVydHlLZXl9VmFsdWVgO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgZ2V0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzW19rZXldO1xuICAgICAgfSxcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzW19rZXldO1xuICAgICAgICB0aGlzW19rZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChwcmV2VmFsdWUgIT09IHZhbHVlICYmIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0pIHtcbiAgICAgICAgICB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdLmVtaXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG4iXX0=