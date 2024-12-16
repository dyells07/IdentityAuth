/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
export var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.propDecorators = {
        "btnCheckboxTrue": [{ type: Input },],
        "btnCheckboxFalse": [{ type: Input },],
        "state": [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] },],
        "onClick": [{ type: HostListener, args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());
export { ButtonCheckboxDirective };
function ButtonCheckboxDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ButtonCheckboxDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ButtonCheckboxDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ButtonCheckboxDirective.propDecorators;
    /**
     * Truthy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxTrue;
    /**
     * Falsy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxFalse;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.state;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.value;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.isDisabled;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.onChange;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHFCQUFNLCtCQUErQixHQUFhO0lBQ3ZELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7Ozs7Ozs7OytCQVcyQixJQUFJOzs7O2dDQUVILEtBQUs7cUJBSXpCLEtBQUs7d0JBS1EsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTOzs7OztJQUl4Qyx5Q0FBTzs7OztRQUNMLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHNUIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QztJQUVELHNCQUFjLDhDQUFTOzs7O1FBQXZCO1lBQ0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXO2dCQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7Z0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDVjs7O09BQUE7SUFFRCxzQkFBYywrQ0FBVTs7OztRQUF4QjtZQUNFLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO2dCQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNYOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDNUQ7SUFFRCx1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7OztJQUNoQiw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN2RDs7Ozs7SUFFRCxrREFBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7OztvQ0FHRSxLQUFLO3FDQUVMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjs0QkFVL0IsWUFBWSxTQUFDLE9BQU87O2tDQTVDdkI7O1NBMkJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gVE9ETzogY29uZmlnOiBhY3RpdmVDbGFzcyAtIENsYXNzIHRvIGFwcGx5IHRvIHRoZSBjaGVja2VkIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQWRkIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHkgdG8gYW55IGVsZW1lbnRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2J0bkNoZWNrYm94XScsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBUcnV0aHkgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgYnRuQ2hlY2tib3hUcnVlID0gdHJ1ZTtcbiAgLyoqIEZhbHN5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94RmFsc2UgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxuICBzdGF0ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZztcbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIHZpZXcgLT4gbW9kZWxcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlKHRoaXMudHJ1ZVZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdHJ1ZVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlXG4gICAgICA6IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZhbHNlVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hGYWxzZVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zdGF0ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRydWVWYWx1ZSA9PT0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=