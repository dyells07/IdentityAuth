/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
export function OnChange(defaultValue) {
    const /** @type {?} */ sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        const /** @type {?} */ _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get() {
                return this[_key];
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                const /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJkZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxtQkFBbUIsWUFBa0I7SUFDekMsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQzs7SUFHdkIsTUFBTSxDQUFDLHlCQUF5QixNQUFXLEVBQUUsV0FBbUI7UUFDOUQsdUJBQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxPQUFPLENBQUM7UUFDdEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFOzs7O1lBRXpDLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjs7Ozs7WUFFRCxHQUFHLENBQUMsS0FBVTtnQkFDWix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtTQUNGLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzICovXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlKGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gIGNvbnN0IHN1Zml4ID0gJ0NoYW5nZSc7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIE9uQ2hhbmdlSGFuZGxlcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICBnZXQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNbX2tleV07XG4gICAgICB9LFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXNbX2tleV07XG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gdmFsdWUgJiYgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XSkge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0uZW1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbiJdfQ==