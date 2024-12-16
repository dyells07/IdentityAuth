(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/progressbar', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].progressbar = {}),global.ng.core,global.utils,global.ng.common));
}(this, (function (exports,core,utils,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarConfig = (function () {
        function ProgressbarConfig() {
            /**
             * if `true` changing value of progress bar will be animated
             */
            this.animate = false;
            /**
             * maximum total value of progress element
             */
            this.max = 100;
        }
        ProgressbarConfig.decorators = [
            { type: core.Injectable }
        ];
        return ProgressbarConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarComponent = (function () {
        function ProgressbarComponent(config) {
            this.isStacked = false;
            this.addClass = true;
            /* tslint:disable-next-line:no-any */
            this.bars = [];
            this._max = 100;
            Object.assign(this, config);
        }
        Object.defineProperty(ProgressbarComponent.prototype, "animate", {
            set: /**
             * if `true` changing value of progress bar will be animated
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._animate = value;
                this.bars.forEach(function (b) {
                    b.animate = value;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "striped", {
            set: /**
             * If `true`, striped classes are applied
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._striped = value;
                this.bars.forEach(function (b) {
                    b.striped = value;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "value", {
            set: /**
             * current value of progress bar. Could be a number or array of objects
             * like {"value":15,"type":"info","label":"15 %"}
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                this.isStacked = Array.isArray(value);
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "max", {
            get: /**
             * maximum total value of progress element
             * @return {?}
             */ function () {
                return this._max;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._max = v;
                this.bars.forEach(function (bar) {
                    bar.recalculatePercentage();
                });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} bar
         * @return {?}
         */
        ProgressbarComponent.prototype.addBar = /**
         * @param {?} bar
         * @return {?}
         */
            function (bar) {
                bar.animate = this._animate;
                bar.striped = this._striped;
                this.bars.push(bar);
            };
        /**
         * @param {?} bar
         * @return {?}
         */
        ProgressbarComponent.prototype.removeBar = /**
         * @param {?} bar
         * @return {?}
         */
            function (bar) {
                this.bars.splice(this.bars.indexOf(bar), 1);
            };
        ProgressbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'progressbar',
                        template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                        styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        ProgressbarComponent.ctorParameters = function () {
            return [
                { type: ProgressbarConfig, },
            ];
        };
        ProgressbarComponent.propDecorators = {
            "animate": [{ type: core.Input },],
            "striped": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "max": [{ type: core.HostBinding, args: ['attr.max',] }, { type: core.Input },],
            "addClass": [{ type: core.HostBinding, args: ['class.progress',] },],
        };
        return ProgressbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BarComponent = (function () {
        function BarComponent(progress) {
            this.percent = 0;
            this.progress = progress;
        }
        Object.defineProperty(BarComponent.prototype, "value", {
            get: /**
             * current value of progress bar
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                if (!v && v !== 0) {
                    return;
                }
                this._value = v;
                this.recalculatePercentage();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BarComponent.prototype, "setBarWidth", {
            get: /**
             * @return {?}
             */ function () {
                this.recalculatePercentage();
                return this.percent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BarComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.progress.addBar(this);
            };
        /**
         * @return {?}
         */
        BarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.progress.removeBar(this);
            };
        /**
         * @return {?}
         */
        BarComponent.prototype.recalculatePercentage = /**
         * @return {?}
         */
            function () {
                this.percent = +(this.value / this.progress.max * 100).toFixed(2);
                var /** @type {?} */ totalPercentage = this.progress.bars
                    .reduce(function (total, bar) {
                    return total + bar.percent;
                }, 0);
                if (totalPercentage > 100) {
                    this.percent -= totalPercentage - 100;
                }
            };
        BarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bar',
                        template: "<ng-content></ng-content>\n",
                        host: {
                            role: 'progressbar',
                            'aria-valuemin': '0',
                            '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                            '[class.progress-bar-animated]': '!isBs3 && animate',
                            '[class.progress-bar-striped]': 'striped',
                            '[class.active]': 'isBs3 && animate',
                            '[attr.aria-valuenow]': 'value',
                            '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                            '[attr.aria-valuemax]': 'max',
                            '[style.height.%]': '"100"'
                        }
                    }] }
        ];
        /** @nocollapse */
        BarComponent.ctorParameters = function () {
            return [
                { type: ProgressbarComponent, decorators: [{ type: core.Host },] },
            ];
        };
        BarComponent.propDecorators = {
            "type": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "setBarWidth": [{ type: core.HostBinding, args: ['style.width.%',] },],
        };
        return BarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarModule = (function () {
        function ProgressbarModule() {
        }
        /**
         * @return {?}
         */
        ProgressbarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
            };
        ProgressbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [BarComponent, ProgressbarComponent],
                        exports: [BarComponent, ProgressbarComponent]
                    },] }
        ];
        return ProgressbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BarComponent = BarComponent;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.ProgressbarModule = ProgressbarModule;
    exports.ProgressbarConfig = ProgressbarConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbmZpZyB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cbiAgYW5pbWF0ZTogQm9vbGVhbiA9IGZhbHNlO1xuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIG1heCA9IDEwMDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbmZpZyB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29uZmlnJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzc2JhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZSA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuYW5pbWF0ZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIC8qKiBJZiBgdHJ1ZWAsIHN0cmlwZWQgY2xhc3NlcyBhcmUgYXBwbGllZCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3RyaXBlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0cmlwZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiLnN0cmlwZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhci4gQ291bGQgYmUgYSBudW1iZXIgb3IgYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBsaWtlIHtcInZhbHVlXCI6MTUsXCJ0eXBlXCI6XCJpbmZvXCIsXCJsYWJlbFwiOlwiMTUgJVwifVxuICAgKi9cbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IGFueVtdKSB7XG4gICAgdGhpcy5pc1N0YWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGlzU3RhY2tlZCA9IGZhbHNlO1xuICBfc3RyaXBlZDogYm9vbGVhbjtcbiAgX2FuaW1hdGU6IGJvb2xlYW47XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgX3ZhbHVlOiBudW1iZXIgfCBhbnlbXTtcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgLyoqIG1heGltdW0gdG90YWwgdmFsdWUgb2YgcHJvZ3Jlc3MgZWxlbWVudCAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcbiAgQElucHV0KClcbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHY7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGJhcjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByb2dyZXNzJykgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgYmFyczogQmFyQ29tcG9uZW50W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFByb2dyZXNzYmFyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG4gIGFkZEJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGJhci5hbmltYXRlID0gdGhpcy5fYW5pbWF0ZTtcbiAgICBiYXIuc3RyaXBlZCA9IHRoaXMuX3N0cmlwZWQ7XG5cbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuICB9XG5cbiAgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihiYXIpLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbi8vIHRvZG86IG51bWJlciBwaXBlXG4vLyB0b2RvOiB1c2UgcXVlcnkgZnJvbSBwcm9ncmVzcz9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAnW2NsYXNzXSc6ICdcInByb2dyZXNzLWJhciBcIiArICh0eXBlID8gXCJwcm9ncmVzcy1iYXItXCIgKyB0eXBlICsgXCIgYmctXCIgKyB0eXBlIDogXCJcIiknLFxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItc3RyaXBlZF0nOiAnc3RyaXBlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQnMzICYmIGFuaW1hdGUnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdwZXJjZW50ID8gcGVyY2VudC50b0ZpeGVkKDApICsgXCIlXCIgOiBcIlwiJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbWF4OiBudW1iZXI7XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHY6IG51bWJlcikge1xuICAgIGlmICghdiAmJiB2ICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC4lJylcbiAgZ2V0IHNldEJhcldpZHRoKCkge1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xuICB9XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgc3RyaXBlZDogYm9vbGVhbjtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgcGVyY2VudCA9IDA7XG4gIHByb2dyZXNzOiBQcm9ncmVzc2JhckNvbXBvbmVudDtcblxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzLmFkZEJhcih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZ3Jlc3MucmVtb3ZlQmFyKHRoaXMpO1xuICB9XG5cbiAgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGVyY2VudCA9ICsodGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4ICogMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xuICAgICAgfSwgMCk7XG5cbiAgICBpZiAodG90YWxQZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2Jhck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBQcm9ncmVzc2Jhck1vZHVsZSwgcHJvdmlkZXJzOiBbUHJvZ3Jlc3NiYXJDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiaXNCczMiLCJDb21wb25lbnQiLCJJbnB1dCIsIkhvc3RCaW5kaW5nIiwiSG9zdCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OzJCQUtxQixLQUFLOzs7O3VCQUVsQixHQUFHOzs7b0JBTFZBLGVBQVU7O2dDQUZYOzs7Ozs7O0FDQUE7UUE0RUUsOEJBQVksTUFBeUI7NkJBOUJ6QixLQUFLOzRCQXVCeUIsSUFBSTs7d0JBR3ZCLEVBQUU7d0JBRVIsR0FBRztZQUdsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3Qjs4QkExREcseUNBQU87Ozs7OzBCQUFDLEtBQWM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQWU7b0JBQ2hDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUNuQixDQUFDLENBQUM7Ozs7OzhCQUlELHlDQUFPOzs7OzswQkFBQyxLQUFjO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFlO29CQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FB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