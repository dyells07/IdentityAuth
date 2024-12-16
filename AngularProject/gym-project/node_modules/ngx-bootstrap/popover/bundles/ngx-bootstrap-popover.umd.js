(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/popover', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].popover = {}),global.ng.core,global.utils,global.componentLoader,global.ng.common,global.positioning));
}(this, (function (exports,core,utils,componentLoader,common,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Configuration service for the Popover directive.
     * You can inject this service, typically in your root component, and customize
     * the values of its properties in order to provide default values for all the
     * popovers used in the application.
     */
    var PopoverConfig = (function () {
        function PopoverConfig() {
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
             */
            this.placement = 'top';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            this.outsideClick = false;
        }
        PopoverConfig.decorators = [
            { type: core.Injectable }
        ];
        return PopoverConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PopoverContainerComponent = (function () {
        function PopoverContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        PopoverContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'popover-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line
                        host: {
                            '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            role: 'tooltip',
                            style: 'display:block;'
                        },
                        template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -8px;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -8px;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        PopoverContainerComponent.ctorParameters = function () {
            return [
                { type: PopoverConfig, },
            ];
        };
        PopoverContainerComponent.propDecorators = {
            "placement": [{ type: core.Input },],
            "title": [{ type: core.Input },],
        };
        return PopoverContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * A lightweight, extensible directive for fancy popover creation.
     */
    var PopoverDirective = (function () {
        function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
            /**
             * Close popover on outside click
             */
            this.outsideClick = false;
            /**
             * Css class for popover container
             */
            this.containerClass = '';
            this._isInited = false;
            this._popover = cis
                .createLoader(_elementRef, _viewContainerRef, _renderer)
                .provide({ provide: PopoverConfig, useValue: _config });
            Object.assign(this, _config);
            this.onShown = this._popover.onShown;
            this.onHidden = this._popover.onHidden;
            // fix: no focus on button on Mac OS #1795
            if (typeof window !== 'undefined') {
                _elementRef.nativeElement.addEventListener('click', function () {
                    try {
                        _elementRef.nativeElement.focus();
                    }
                    catch (err) {
                        return;
                    }
                });
            }
        }
        Object.defineProperty(PopoverDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                return this._popover.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.show = /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this._popover.isShown || !this.popover) {
                    return;
                }
                this._popover
                    .attach(PopoverContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({
                    content: this.popover,
                    context: this.popoverContext,
                    placement: this.placement,
                    title: this.popoverTitle,
                    containerClass: this.containerClass
                });
                this.isOpen = true;
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.hide = /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._popover.hide();
                    this.isOpen = false;
                }
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // fix: seems there are an issue with `routerLinkActive`
                // which result in duplicated call ngOnInit without call to ngOnDestroy
                // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
                if (this._isInited) {
                    return;
                }
                this._isInited = true;
                this._popover.listen({
                    triggers: this.triggers,
                    outsideClick: this.outsideClick,
                    show: function () { return _this.show(); }
                });
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._popover.dispose();
            };
        PopoverDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
        ];
        /** @nocollapse */
        PopoverDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: PopoverConfig, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        PopoverDirective.propDecorators = {
            "popover": [{ type: core.Input },],
            "popoverContext": [{ type: core.Input },],
            "popoverTitle": [{ type: core.Input },],
            "placement": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "containerClass": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
        };
        return PopoverDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PopoverModule = (function () {
        function PopoverModule() {
        }
        /**
         * @return {?}
         */
        PopoverModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: PopoverModule,
                    providers: [PopoverConfig, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        PopoverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PopoverDirective, PopoverContainerComponent],
                        exports: [PopoverDirective],
                        entryComponents: [PopoverContainerComponent]
                    },] }
        ];
        return PopoverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;
    exports.PopoverConfig = PopoverConfig;
    exports.PopoverContainerComponent = PopoverContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3BvdmVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyL3BvcG92ZXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgUG9wb3ZlciBkaXJlY3RpdmUuXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplXG4gKiB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGVcbiAqIHBvcG92ZXJzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbmZpZyB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImF1dG9cIlxuICAgKi9cbiAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICB0cmlnZ2VycyA9ICdjbGljayc7XG5cbiAgb3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIGNvbnRhaW5lcjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOlxuICAgICAgJ1wicG9wb3ZlciBpbiBwb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnIWlzQnMzJyxcbiAgICByb2xlOiAndG9vbHRpcCcsXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrOydcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0LmJzLXBvcG92ZXItdG9wIC5hcnJvdywgOmhvc3QuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIH1cbiAgICA6aG9zdC5icy1wb3BvdmVyLWxlZnQgLmFycm93LCA6aG9zdC5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LFxuICBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQSBsaWdodHdlaWdodCwgZXh0ZW5zaWJsZSBkaXJlY3RpdmUgZm9yIGZhbmN5IHBvcG92ZXIgY3JlYXRpb24uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3BvcG92ZXJdJywgZXhwb3J0QXM6ICdicy1wb3BvdmVyJ30pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBASW5wdXQoKSBwb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ29udGV4dCB0byBiZSB1c2VkIGlmIHBvcG92ZXIgaXMgYSB0ZW1wbGF0ZS5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDb250ZXh0OiBhbnk7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyVGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYXV0byc7XG4gIC8qKlxuICAgKiBDbG9zZSBwb3BvdmVyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IGZhbHNlO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgcG9wb3ZlciBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wb3BvdmVyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHByaXZhdGUgX3BvcG92ZXI6IENvbXBvbmVudExvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfaXNJbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBfY29uZmlnOiBQb3BvdmVyQ29uZmlnLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9wb3BvdmVyID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICBfZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIF9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFBvcG92ZXJDb25maWcsIHVzZVZhbHVlOiBfY29uZmlnfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9wb3BvdmVyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3BvcG92ZXIub25IaWRkZW47XG5cbiAgICAvLyBmaXg6IG5vIGZvY3VzIG9uIGJ1dHRvbiBvbiBNYWMgT1MgIzE3OTVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BvcG92ZXIuaXNTaG93biB8fCAhdGhpcy5wb3BvdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlclxuICAgICAgLmF0dGFjaChQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucG9wb3ZlcixcbiAgICAgICAgY29udGV4dDogdGhpcy5wb3BvdmVyQ29udGV4dCxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgdGl0bGU6IHRoaXMucG9wb3ZlclRpdGxlLFxuICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzc1xuICAgICAgfSk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9wb3BvdmVyLmhpZGUoKTtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxuICAgIC8vIHdoaWNoIHJlc3VsdCBpbiBkdXBsaWNhdGVkIGNhbGwgbmdPbkluaXQgd2l0aG91dCBjYWxsIHRvIG5nT25EZXN0cm95XG4gICAgLy8gcmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcC9pc3N1ZXMvMTg4NVxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XG5cbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcG9wb3Zlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BvcG92ZXJEaXJlY3RpdmUsIFBvcG92ZXJDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9wb3ZlckRpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BvcG92ZXJDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBvcG92ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtQb3BvdmVyQ29uZmlnLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJpc0JzMyIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiSW5wdXQiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJPdXRwdXQiLCJQb3NpdGlvbmluZ1NlcnZpY2UiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs2QkFhYyxLQUFLOzs7Ozs0QkFLTixPQUFPO2dDQUVILEtBQUs7OztvQkFackJBLGVBQVU7OzRCQVJYOzs7Ozs7O0FDQUE7UUFz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