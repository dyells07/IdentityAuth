(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].rating = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return RatingComponent; }),
        multi: true
    };
    var RatingComponent = (function () {
        function RatingComponent(changeDetection) {
            this.changeDetection = changeDetection;
            /**
             * number of icons
             */
            this.max = 5;
            /**
             * fired when icon selected, $event:number equals to selected rating
             */
            this.onHover = new core.EventEmitter();
            /**
             * fired when icon selected, $event:number equals to previous rating value
             */
            this.onLeave = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onChange = Function.prototype;
            // tslint:disable-next-line:no-any
            this.onTouched = Function.prototype;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        RatingComponent.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ([37, 38, 39, 40].indexOf(event.which) === -1) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                var /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
                this.rate(this.value + sign);
            };
        /**
         * @return {?}
         */
        RatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.max = typeof this.max !== 'undefined' ? this.max : 5;
                this.titles =
                    typeof this.titles !== 'undefined' && this.titles.length > 0
                        ? this.titles
                        : [];
                this.range = this.buildTemplateObjects(this.max);
            };
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value % 1 !== value) {
                    this.value = Math.round(value);
                    this.preValue = value;
                    this.changeDetection.markForCheck();
                    return;
                }
                this.preValue = value;
                this.value = value;
                this.changeDetection.markForCheck();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.enter = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.readonly) {
                    this.value = value;
                    this.changeDetection.markForCheck();
                    this.onHover.emit(value);
                }
            };
        /**
         * @return {?}
         */
        RatingComponent.prototype.reset = /**
         * @return {?}
         */
            function () {
                this.value = this.preValue;
                this.changeDetection.markForCheck();
                this.onLeave.emit(this.value);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        RatingComponent.prototype.registerOnChange = /**
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
        RatingComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.rate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.readonly && value >= 0 && value <= this.range.length) {
                    this.writeValue(value);
                    this.onChange(value);
                }
            };
        /**
         * @param {?} max
         * @return {?}
         */
        RatingComponent.prototype.buildTemplateObjects = /**
         * @param {?} max
         * @return {?}
         */
            function (max) {
                var /** @type {?} */ result = [];
                for (var /** @type {?} */ i = 0; i < max; i++) {
                    result.push({
                        index: i,
                        title: this.titles[i] || i + 1
                    });
                }
                return result;
            };
        RatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'rating',
                        template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                        providers: [RATING_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        RatingComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        RatingComponent.propDecorators = {
            "max": [{ type: core.Input },],
            "readonly": [{ type: core.Input },],
            "titles": [{ type: core.Input },],
            "customTemplate": [{ type: core.Input },],
            "onHover": [{ type: core.Output },],
            "onLeave": [{ type: core.Output },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return RatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RatingModule = (function () {
        function RatingModule() {
        }
        /**
         * @return {?}
         */
        RatingModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: RatingModule,
                    providers: []
                };
            };
        RatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [RatingComponent],
                        exports: [RatingComponent]
                    },] }
        ];
        return RatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.RatingComponent = RatingComponent;
    exports.RatingModule = RatingModule;
    exports.ɵa = RATING_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1yYXRpbmcudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZiwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjY2Vzc29yQ29udGVudCwgUmF0aW5nUmVzdWx0cyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBBY2Nlc3NvckNvbnRlbnQgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1JBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBudW1iZXIgb2YgaWNvbnMgKi9cbiAgQElucHV0KCkgbWF4ID0gNTtcbiAgLyoqIGlmIHRydWUgd2lsbCBub3QgcmVhY3Qgb24gYW55IHVzZXIgZXZlbnRzICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICAvKiogYXJyYXkgb2YgaWNvbnMgdGl0bGVzLCBkZWZhdWx0OiAoW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXSkgKi9cbiAgQElucHV0KCkgdGl0bGVzOiBzdHJpbmdbXTtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgaWNvbnMgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gc2VsZWN0ZWQgcmF0aW5nICovXG4gIEBPdXRwdXQoKSBvbkhvdmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gcHJldmlvdXMgcmF0aW5nIHZhbHVlICovXG4gIEBPdXRwdXQoKSBvbkxlYXZlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcmFuZ2U6IFJhdGluZ1Jlc3VsdHNbXTtcbiAgdmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHByZVZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGV2ZW50LndoaWNoKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNpZ24gPSBldmVudC53aGljaCA9PT0gMzggfHwgZXZlbnQud2hpY2ggPT09IDM5ID8gMSA6IC0xO1xuICAgIHRoaXMucmF0ZSh0aGlzLnZhbHVlICsgc2lnbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1heCA9IHR5cGVvZiB0aGlzLm1heCAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heCA6IDU7XG4gICAgdGhpcy50aXRsZXMgPVxuICAgICAgdHlwZW9mIHRoaXMudGl0bGVzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnRpdGxlcy5sZW5ndGggPiAwXG4gICAgICAgID8gdGhpcy50aXRsZXNcbiAgICAgICAgOiBbXTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyh0aGlzLm1heCk7XG4gIH1cblxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAlIDEgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJlVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlbnRlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMub25Ib3Zlci5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmVWYWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uTGVhdmUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHJhdGUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFkb25seSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IHRoaXMucmFuZ2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkVGVtcGxhdGVPYmplY3RzKG1heDogbnVtYmVyKTogUmF0aW5nUmVzdWx0c1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IFJhdGluZ1Jlc3VsdHNbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZXNbaV0gfHwgaSArIDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUmF0aW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JhdGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSYXRpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBWWEsNkJBQTZCLEdBQW9CO1FBQzVELE9BQU8sRUFBRUEsdUJBQWlCOztRQUUxQixX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