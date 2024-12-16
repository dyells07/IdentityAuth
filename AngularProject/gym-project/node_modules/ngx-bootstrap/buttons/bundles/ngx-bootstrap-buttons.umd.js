(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/buttons', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].buttons = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // TODO: config: activeClass - Class to apply to the checked buttons
    var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
        multi: true
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = (function () {
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
             */ function () {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[btnCheckbox]',
                        providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonCheckboxDirective.propDecorators = {
            "btnCheckboxTrue": [{ type: core.Input },],
            "btnCheckboxFalse": [{ type: core.Input },],
            "state": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] },],
            "onClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return ButtonCheckboxDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioGroupDirective; }),
        multi: true
    };
    /**
     * A group of radio buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioGroupDirective = (function () {
        function ButtonRadioGroupDirective(cdr) {
            this.cdr = cdr;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioGroupDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioGroupDirective.prototype.registerOnChange = /**
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
        ButtonRadioGroupDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        ButtonRadioGroupDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnRadioGroup]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioGroupDirective.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        return ButtonRadioGroupDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
        multi: true
    };
    /**
     * Create radio buttons or groups of buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioDirective = (function () {
        function ButtonRadioDirective(el, cdr, group, renderer) {
            this.el = el;
            this.cdr = cdr;
            this.group = group;
            this.renderer = renderer;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        Object.defineProperty(ButtonRadioDirective.prototype, "value", {
            get: /**
             * Current value of radio component or group
             * @return {?}
             */ function () {
                return this.group ? this.group.value : this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this.group) {
                    this.group.value = value;
                    return;
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
            get: /**
             * If `true` — radio button is disabled
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = disabled;
                this.setDisabledState(disabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.btnRadio === this.value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
                    return;
                }
                this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
                this._onChange(this.value);
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.uncheckable = typeof this.uncheckable !== 'undefined';
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this.onTouched();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioDirective.prototype._onChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.group) {
                    this.group.onTouched();
                    this.group.onChange(value);
                    return;
                }
                this.onTouched();
                this.onChange(value);
            };
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioDirective.prototype.registerOnChange = /**
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
        ButtonRadioDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} disabled
         * @return {?}
         */
        ButtonRadioDirective.prototype.setDisabledState = /**
         * @param {?} disabled
         * @return {?}
         */
            function (disabled) {
                if (disabled) {
                    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
            };
        ButtonRadioDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnRadio]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
                { type: ButtonRadioGroupDirective, decorators: [{ type: core.Optional },] },
                { type: core.Renderer2, },
            ];
        };
        ButtonRadioDirective.propDecorators = {
            "btnRadio": [{ type: core.Input },],
            "uncheckable": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "isActive": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] },],
            "onClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return ButtonRadioDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonsModule = (function () {
        function ButtonsModule() {
        }
        /**
         * @return {?}
         */
        ButtonsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ButtonsModule, providers: [] };
            };
        ButtonsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                        exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                    },] }
        ];
        return ButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.ButtonRadioGroupDirective = ButtonRadioGroupDirective;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.ɵa = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = RADIO_CONTROL_VALUE_ACCESSOR;
    exports.ɵc = RADIO_CONTROL_VALUE_ACCESSOR$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gVE9ETzogY29uZmlnOiBhY3RpdmVDbGFzcyAtIENsYXNzIHRvIGFwcGx5IHRvIHRoZSBjaGVja2VkIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQWRkIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHkgdG8gYW55IGVsZW1lbnRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2J0bkNoZWNrYm94XScsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBUcnV0aHkgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgYnRuQ2hlY2tib3hUcnVlID0gdHJ1ZTtcbiAgLyoqIEZhbHN5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94RmFsc2UgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxuICBzdGF0ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZztcbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIHZpZXcgLT4gbW9kZWxcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlKHRoaXMudHJ1ZVZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdHJ1ZVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlXG4gICAgICA6IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZhbHNlVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hGYWxzZVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zdGF0ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRydWVWYWx1ZSA9PT0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQSBncm91cCBvZiByYWRpbyBidXR0b25zLlxuICogQSB2YWx1ZSBvZiBhIHNlbGVjdGVkIGJ1dHRvbiBpcyBib3VuZCB0byBhIHZhcmlhYmxlIHNwZWNpZmllZCB2aWEgbmdNb2RlbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2J0blJhZGlvR3JvdXBdJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQ3JlYXRlIHJhZGlvIGJ1dHRvbnMgb3IgZ3JvdXBzIG9mIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9dJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9EaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKiogUmFkaW8gYnV0dG9uIHZhbHVlLCB3aWxsIGJlIHNldCB0byBgbmdNb2RlbGAgKi9cbiAgQElucHV0KCkgYnRuUmFkaW86IHN0cmluZztcbiAgLyoqIElmIGB0cnVlYCDDosKAwpQgcmFkaW8gYnV0dG9uIGNhbiBiZSB1bmNoZWNrZWQgKi9cbiAgQElucHV0KCkgdW5jaGVja2FibGU6IGJvb2xlYW47XG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHJhZGlvIGNvbXBvbmVudCBvciBncm91cCAqL1xuICBASW5wdXQoKSBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLnZhbHVlIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IG51bGwgfCBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5ncm91cC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCDDosKAwpQgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZTogIG51bGwgfCBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZ3JvdXA6IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLmRpc2FibGVkIHx8ICF0aGlzLnVuY2hlY2thYmxlICYmIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlID8gdW5kZWZpbmVkIDogdGhpcy5idG5SYWRpbztcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudW5jaGVja2FibGUgPSB0eXBlb2YgdGhpcy51bmNoZWNrYWJsZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIF9vbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgIHRoaXMuZ3JvdXAub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLmdyb3VwLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tY2hlY2tib3guZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvblJhZGlvRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsIEJ1dHRvblJhZGlvRGlyZWN0aXZlLCBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEJ1dHRvbnNNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkRpcmVjdGl2ZSIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IiLCJFbGVtZW50UmVmIiwiT3B0aW9uYWwiLCJSZW5kZXJlcjIiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBWUEseUJBQWEsK0JBQStCLEdBQWE7UUFDdkQsT0FBTyxFQUFFQSx1QkFBaUI7O1FBRTFCLFdBQVcsRUFBRUMsZUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBdUIsR0FBQSxDQUFDO1FBQ3RELEtBQUssRUFBRSxJQUFJ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