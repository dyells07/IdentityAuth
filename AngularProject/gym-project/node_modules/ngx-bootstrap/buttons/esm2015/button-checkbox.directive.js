/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
export const /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
export class ButtonCheckboxDirective {
    constructor() {
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
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    /**
     * @return {?}
     */
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    /**
     * @return {?}
     */
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHVCQUFNLCtCQUErQixHQUFhO0lBQ3ZELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDdEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOzs7O0FBU0YsTUFBTTs7Ozs7K0JBRXVCLElBQUk7Ozs7Z0NBRUgsS0FBSztxQkFJekIsS0FBSzt3QkFLUSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7Ozs7O0lBSXhDLE9BQU87UUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzVCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBYyxTQUFTO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVztZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNWOzs7O0lBRUQsSUFBYyxVQUFVO1FBQ3RCLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDWDs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDNUQ7Ozs7O0lBSUQsVUFBVSxDQUFDLEtBQThCO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDdkQ7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztnQ0FHRSxLQUFLO2lDQUVMLEtBQUs7c0JBRUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjt3QkFVL0IsWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFRPRE86IGNvbmZpZzogYWN0aXZlQ2xhc3MgLSBDbGFzcyB0byBhcHBseSB0byB0aGUgY2hlY2tlZCBidXR0b25zXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25DaGVja2JveERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEFkZCBjaGVja2JveCBmdW5jdGlvbmFsaXR5IHRvIGFueSBlbGVtZW50XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tidG5DaGVja2JveF0nLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25DaGVja2JveERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAvKiogVHJ1dGh5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94VHJ1ZSA9IHRydWU7XG4gIC8qKiBGYWxzeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xuICBASW5wdXQoKSBidG5DaGVja2JveEZhbHNlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcbiAgc3RhdGUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyB2aWV3IC0+IG1vZGVsXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoIXRoaXMuc3RhdGUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZSh0aGlzLnRydWVWYWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHRydWVWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hUcnVlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLmJ0bkNoZWNrYm94VHJ1ZVxuICAgICAgOiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBmYWxzZVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveEZhbHNlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLmJ0bkNoZWNrYm94RmFsc2VcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RhdGUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIC8vIG1vZGVsIC0+IHZpZXdcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy50cnVlVmFsdWUgPT09IHZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19