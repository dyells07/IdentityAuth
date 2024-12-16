import { Directive, forwardRef, HostBinding, HostListener, Input, ChangeDetectorRef, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
const /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonRadioGroupDirective),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
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
ButtonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} group
     * @param {?} renderer
     */
    constructor(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * Current value of radio component or group
     * @return {?}
     */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
        this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onChange(value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
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
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            },] }
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: ButtonRadioGroupDirective, decorators: [{ type: Optional },] },
    { type: Renderer2, },
];
ButtonRadioDirective.propDecorators = {
    "btnRadio": [{ type: Input },],
    "uncheckable": [{ type: Input },],
    "value": [{ type: Input },],
    "disabled": [{ type: Input },],
    "isActive": [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] },],
    "onClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵa, RADIO_CONTROL_VALUE_ACCESSOR as ɵb, RADIO_CONTROL_VALUE_ACCESSOR$1 as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBUT0RPOiBjb25maWc6IGFjdGl2ZUNsYXNzIC0gQ2xhc3MgdG8gYXBwbHkgdG8gdGhlIGNoZWNrZWQgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBZGQgY2hlY2tib3ggZnVuY3Rpb25hbGl0eSB0byBhbnkgZWxlbWVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuQ2hlY2tib3hdJyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xuICBASW5wdXQoKSBidG5DaGVja2JveFRydWUgPSB0cnVlO1xuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIHN0YXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nO1xuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByb3RlY3RlZCBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gdmlldyAtPiBtb2RlbFxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlKCF0aGlzLnN0YXRlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUodGhpcy50cnVlVmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0cnVlVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94VHJ1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWVcbiAgICAgIDogdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJ1ZVZhbHVlID09PSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9Hcm91cF0nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFByb3ZpZGVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBDcmVhdGUgcmFkaW8gYnV0dG9ucyBvciBncm91cHMgb2YgYnV0dG9ucy5cbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8qKiBSYWRpbyBidXR0b24gdmFsdWUsIHdpbGwgYmUgc2V0IHRvIGBuZ01vZGVsYCAqL1xuICBASW5wdXQoKSBidG5SYWRpbzogc3RyaW5nO1xuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gY2FuIGJlIHVuY2hlY2tlZCAqL1xuICBASW5wdXQoKSB1bmNoZWNrYWJsZTogYm9vbGVhbjtcbiAgLyoqIEN1cnJlbnQgdmFsdWUgb2YgcmFkaW8gY29tcG9uZW50IG9yIGdyb3VwICovXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVsbCB8IHN0cmluZykge1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiAgbnVsbCB8IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQgfHwgIXRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnVuY2hlY2thYmxlICYmIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWUgPyB1bmRlZmluZWQgOiB0aGlzLmJ0blJhZGlvO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51bmNoZWNrYWJsZSA9IHR5cGVvZiB0aGlzLnVuY2hlY2thYmxlICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5ncm91cC5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuZ3JvdXAub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkNoZWNrYm94RGlyZWN0aXZlLCBCdXR0b25SYWRpb0RpcmVjdGl2ZSwgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQnV0dG9uc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBWUEsdUJBQWEsK0JBQStCLEdBQWE7SUFDdkQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLHVCQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7OztBQVNGOzs7OzsrQkFFNkIsSUFBSTs7OztnQ0FFSCxLQUFLO3FCQUl6QixLQUFLO3dCQUtRLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUzs7Ozs7SUFJeEMsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFF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