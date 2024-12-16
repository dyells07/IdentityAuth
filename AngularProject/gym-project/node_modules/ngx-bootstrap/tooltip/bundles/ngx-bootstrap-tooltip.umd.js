(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('rxjs'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tooltip', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'rxjs', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tooltip = {}),global.ng.core,global.utils,global.componentLoader,global.rxjs,global.ng.common,global.positioning));
}(this, (function (exports,core,utils,componentLoader,rxjs,common,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default values provider for tooltip
     */
    var TooltipConfig = (function () {
        function TooltipConfig() {
            /**
             * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
             */
            this.placement = 'top';
            /**
             * array of event names which triggers tooltip opening
             */
            this.triggers = 'hover focus';
        }
        TooltipConfig.decorators = [
            { type: core.Injectable }
        ];
        return TooltipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipContainerComponent = (function () {
        function TooltipContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
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
        TooltipContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.classMap = { in: false, fade: false };
                this.classMap[this.placement] = true;
                this.classMap["tooltip-" + this.placement] = true;
                this.classMap["in"] = true;
                if (this.animation) {
                    this.classMap["fade"] = true;
                }
                if (this.containerClass) {
                    this.classMap[this.containerClass] = true;
                }
            };
        TooltipContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-tooltip-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line
                        host: {
                            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            role: 'tooltip'
                        },
                        template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                        styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      margin-left: -6px;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      margin-top: -6px;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TooltipContainerComponent.ctorParameters = function () {
            return [
                { type: TooltipConfig, },
            ];
        };
        return TooltipContainerComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipDirective = (function () {
        function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /**
             * Fired when tooltip content changes
             */
            /* tslint:disable-next-line:no-any */
            this.tooltipChange = new core.EventEmitter();
            /**
             * Css class for tooltip container
             */
            this.containerClass = '';
            /**
             * @deprecated - removed, will be added to configuration
             */
            this.tooltipAnimation = true;
            /**
             * @deprecated
             */
            this.tooltipFadeDuration = 150;
            /**
             * @deprecated
             */
            this.tooltipStateChanged = new core.EventEmitter();
            this._tooltip = cis
                .createLoader(this._elementRef, _viewContainerRef, this._renderer)
                .provide({ provide: TooltipConfig, useValue: config });
            Object.assign(this, config);
            this.onShown = this._tooltip.onShown;
            this.onHidden = this._tooltip.onHidden;
        }
        Object.defineProperty(TooltipDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the tooltip is currently being shown
             * @return {?}
             */ function () {
                return this._tooltip.isShown;
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
        Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
            set: /**
             * @deprecated - please use `tooltip` instead
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
                this.tooltip = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_placement", {
            set: /**
             * @deprecated - please use `placement` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
                this.placement = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                return this.isOpen;
            },
            set: /**
             * @deprecated - please use `isOpen` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                this.isOpen = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_enable", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                return this.isDisabled;
            },
            set: /**
             * @deprecated - please use `isDisabled` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                this.isDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                return this.container === 'body';
            },
            set: /**
             * @deprecated - please use `container="body"` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                this.container = value ? 'body' : this.container;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
            set: /**
             * @deprecated - will replaced with customClass
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipClass deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
            set: /**
             * @deprecated - removed
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipContext deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
                this.delay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
            get: /**
             * @deprecated -  please use `triggers` instead
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                return this.triggers;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                this.triggers = (value || '').toString();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._tooltip.listen({
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                /* tslint:disable-next-line:no-any */
                this.tooltipChange.subscribe(function (value) {
                    if (!value) {
                        _this._tooltip.hide();
                    }
                });
            };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.toggle = /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.show = /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen ||
                    this.isDisabled ||
                    this._delayTimeoutId ||
                    !this.tooltip) {
                    return;
                }
                var /** @type {?} */ showTooltip = function () {
                    if (_this._delayTimeoutId) {
                        _this._delayTimeoutId = undefined;
                    }
                    _this._tooltip
                        .attach(TooltipContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _this.placement })
                        .show({
                        content: _this.tooltip,
                        placement: _this.placement,
                        containerClass: _this.containerClass
                    });
                };
                var /** @type {?} */ cancelDelayedTooltipShowing = function () {
                    if (_this._tooltipCancelShowFn) {
                        _this._tooltipCancelShowFn();
                    }
                };
                if (this.delay) {
                    var /** @type {?} */ _timer_1 = rxjs.timer(this.delay).subscribe(function () {
                        showTooltip();
                        cancelDelayedTooltipShowing();
                    });
                    if (this.triggers) {
                        var /** @type {?} */ triggers = utils.parseTriggers(this.triggers);
                        this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                            _timer_1.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    }
                }
                else {
                    showTooltip();
                }
            };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.hide = /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._delayTimeoutId) {
                    clearTimeout(this._delayTimeoutId);
                    this._delayTimeoutId = undefined;
                }
                if (!this._tooltip.isShown) {
                    return;
                }
                this._tooltip.instance.classMap["in"] = false;
                setTimeout(function () {
                    _this._tooltip.hide();
                }, this.tooltipFadeDuration);
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._tooltip.dispose();
            };
        TooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tooltip], [tooltipHtml]',
                        exportAs: 'bs-tooltip'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: TooltipConfig, },
            ];
        };
        TooltipDirective.propDecorators = {
            "tooltip": [{ type: core.Input },],
            "tooltipChange": [{ type: core.Output },],
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "containerClass": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "delay": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "htmlContent": [{ type: core.Input, args: ['tooltipHtml',] },],
            "_placement": [{ type: core.Input, args: ['tooltipPlacement',] },],
            "_isOpen": [{ type: core.Input, args: ['tooltipIsOpen',] },],
            "_enable": [{ type: core.Input, args: ['tooltipEnable',] },],
            "_appendToBody": [{ type: core.Input, args: ['tooltipAppendToBody',] },],
            "tooltipAnimation": [{ type: core.Input },],
            "_popupClass": [{ type: core.Input, args: ['tooltipClass',] },],
            "_tooltipContext": [{ type: core.Input, args: ['tooltipContext',] },],
            "_tooltipPopupDelay": [{ type: core.Input, args: ['tooltipPopupDelay',] },],
            "tooltipFadeDuration": [{ type: core.Input },],
            "_tooltipTrigger": [{ type: core.Input, args: ['tooltipTrigger',] },],
            "tooltipStateChanged": [{ type: core.Output },],
        };
        __decorate([
            utils.OnChange(),
            __metadata("design:type", Object)
        ], TooltipDirective.prototype, "tooltip", void 0);
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipModule = (function () {
        function TooltipModule() {
        }
        /**
         * @return {?}
         */
        TooltipModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TooltipModule,
                    providers: [TooltipConfig, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        TooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TooltipDirective, TooltipContainerComponent],
                        exports: [TooltipDirective],
                        entryComponents: [TooltipContainerComponent]
                    },] }
        ];
        return TooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TooltipContainerComponent = TooltipContainerComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;
    exports.TooltipConfig = TooltipConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCB2YWx1ZXMgcHJvdmlkZXIgZm9yIHRvb2x0aXAgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29uZmlnIHtcbiAgLyoqIHRvb2x0aXAgcGxhY2VtZW50LCBzdXBwb3J0ZWQgcG9zaXRpb25zOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JyAqL1xuICBwbGFjZW1lbnQgPSAndG9wJztcbiAgLyoqIGFycmF5IG9mIGV2ZW50IG5hbWVzIHdoaWNoIHRyaWdnZXJzIHRvb2x0aXAgb3BlbmluZyAqL1xuICB0cmlnZ2VycyA9ICdob3ZlciBmb2N1cyc7XG4gIC8qKiBhIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIiAqL1xuICBjb250YWluZXI6IHN0cmluZztcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy10b29sdGlwLWNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzpcbiAgICAgICdcInRvb2x0aXAgaW4gdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy10b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXG4gICAgcm9sZTogJ3Rvb2x0aXAnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC50b29sdGlwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIDpob3N0LmJzLXRvb2x0aXAtdG9wIC5hcnJvdywgOmhvc3QuYnMtdG9vbHRpcC1ib3R0b20gLmFycm93IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICAgIH1cbiAgICA6aG9zdC5icy10b29sdGlwLWxlZnQgLmFycm93LCA6aG9zdC5icy10b29sdGlwLXJpZ2h0IC5hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3cgYXJyb3dcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbYHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH1gXSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5jb250YWluZXJDbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCBkZXByZWNhdGlvbiAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBPbkNoYW5nZSwgd2Fybk9uY2UsIHBhcnNlVHJpZ2dlcnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXSwgW3Rvb2x0aXBIdG1sXScsXG4gIGV4cG9ydEFzOiAnYnMtdG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHRvb2x0aXAuXG4gICAqL1xuICBAT25DaGFuZ2UoKVxuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcC5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSHRtbCcpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IGh0bWxDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBIdG1sIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0b29sdGlwYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy50b29sdGlwID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JylcbiAgc2V0IF9wbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcElzT3BlbicpXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgX2lzT3BlbigpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfZW5hYmxlKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXG4gIHNldCBfYXBwZW5kVG9Cb2R5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG4gICAgdGhpcy5jb250YWluZXIgPSB2YWx1ZSA/ICdib2R5JyA6IHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IF9hcHBlbmRUb0JvZHkoKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgPT09ICdib2R5JztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQsIHdpbGwgYmUgYWRkZWQgdG8gY29uZmlndXJhdGlvbiAqL1xuICBASW5wdXQoKSB0b29sdGlwQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSB3aWxsIHJlcGxhY2VkIHdpdGggY3VzdG9tQ2xhc3MgKi9cbiAgQElucHV0KCd0b29sdGlwQ2xhc3MnKVxuICBzZXQgX3BvcHVwQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ2xhc3MgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBDb250ZXh0JylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgX3Rvb2x0aXBDb250ZXh0KHZhbHVlOiBhbnkpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENvbnRleHQgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgndG9vbHRpcFBvcHVwRGVsYXknKVxuICBzZXQgX3Rvb2x0aXBQb3B1cERlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFBvcHVwRGVsYXkgaXMgZGVwcmVjYXRlZCwgdXNlIGBkZWxheWAgaW5zdGVhZCcpO1xuICAgIHRoaXMuZGVsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKSB0b29sdGlwRmFkZUR1cmF0aW9uID0gMTUwO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtICBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBUcmlnZ2VyJylcbiAgZ2V0IF90b29sdGlwVHJpZ2dlcigpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlcnM7XG4gIH1cblxuICBzZXQgX3Rvb2x0aXBUcmlnZ2VyKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRyaWdnZXJzID0gKHZhbHVlIHx8ICcnKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBPdXRwdXQoKVxuICB0b29sdGlwU3RhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogbnVtYmVyIHwgYW55O1xuICBwcm90ZWN0ZWQgX3Rvb2x0aXBDYW5jZWxTaG93Rm46IEZ1bmN0aW9uO1xuXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIGNvbmZpZzogVG9vbHRpcENvbmZpZ1xuICApIHtcblxuICAgIHRoaXMuX3Rvb2x0aXAgPSBjaXNcbiAgICAgIC5jcmVhdGVMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3Rvb2x0aXAub25IaWRkZW47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICAgIHRoaXMudG9vbHRpcENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5pc09wZW4gfHxcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCB8fFxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHxcbiAgICAgICF0aGlzLnRvb2x0aXBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9vbHRpcFxuICAgICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnRvb2x0aXAsXG4gICAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzc1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgIGNvbnN0IF90aW1lciA9IHRpbWVyKHRoaXMuZGVsYXkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnRyaWdnZXJzKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0aGlzLnRyaWdnZXJzKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbiA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRyaWdnZXJzWzBdLmNsb3NlLCAoKSA9PiB7XG4gICAgICAgICAgX3RpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdG9vbHRpcC5pbnN0YW5jZS5jbGFzc01hcC5pbiA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XG4gICAgfSwgdGhpcy50b29sdGlwRmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9vbHRpcERpcmVjdGl2ZSwgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb29sdGlwRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG9vbHRpcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1Rvb2x0aXBDb25maWcsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFdmVudEVtaXR0ZXIiLCJ3YXJuT25jZSIsInRpbWVyIiwicGFyc2VUcmlnZ2VycyIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiT25DaGFuZ2UiLCJQb3NpdGlvbmluZ1NlcnZpY2UiLCJOZ01vZHVsZSIsIkNv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