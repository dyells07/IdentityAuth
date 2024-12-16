import { Injectable, Component, ChangeDetectionStrategy, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { isBs3, OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { __decorate, __metadata } from 'tslib';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return TooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
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
        { type: Component, args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig, },
    ]; };
    return TooltipContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
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
        this.tooltipStateChanged = new EventEmitter();
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
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
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
         */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
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
         */
        function (value) {
            warnOnce('tooltipClass deprecated');
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
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
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
            var /** @type {?} */ _timer_1 = timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var /** @type {?} */ triggers = parseTriggers(this.triggers);
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
        { type: Directive, args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: Renderer2, },
        { type: ElementRef, },
        { type: ComponentLoaderFactory, },
        { type: TooltipConfig, },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: Input },],
        "tooltipChange": [{ type: Output },],
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "containerClass": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "delay": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "htmlContent": [{ type: Input, args: ['tooltipHtml',] },],
        "_placement": [{ type: Input, args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: Input, args: ['tooltipIsOpen',] },],
        "_enable": [{ type: Input, args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: Input, args: ['tooltipAppendToBody',] },],
        "tooltipAnimation": [{ type: Input },],
        "_popupClass": [{ type: Input, args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: Input, args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: Input, args: ['tooltipPopupDelay',] },],
        "tooltipFadeDuration": [{ type: Input },],
        "_tooltipTrigger": [{ type: Input, args: ['tooltipTrigger',] },],
        "tooltipStateChanged": [{ type: Output },],
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
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
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    TooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0b29sdGlwICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbmZpZyB7XG4gIC8qKiB0b29sdGlwIHBsYWNlbWVudCwgc3VwcG9ydGVkIHBvc2l0aW9uczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgKi9cbiAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gIC8qKiBhcnJheSBvZiBldmVudCBuYW1lcyB3aGljaCB0cmlnZ2VycyB0b29sdGlwIG9wZW5pbmcgKi9cbiAgdHJpZ2dlcnMgPSAnaG92ZXIgZm9jdXMnO1xuICAvKiogYSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIgKi9cbiAgY29udGFpbmVyOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6XG4gICAgICAnXCJ0b29sdGlwIGluIHRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxuICAgIHJvbGU6ICd0b29sdGlwJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QudG9vbHRpcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICA6aG9zdC5icy10b29sdGlwLXRvcCAuYXJyb3csIDpob3N0LmJzLXRvb2x0aXAtYm90dG9tIC5hcnJvdyB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgICB9XG4gICAgOmhvc3QuYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdywgOmhvc3QuYnMtdG9vbHRpcC1yaWdodCAuYXJyb3cge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIH1cbiAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93IGFycm93XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcbiAgcGxhY2VtZW50OiBzdHJpbmc7XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIGFuaW1hdGlvbjogYm9vbGVhbjtcblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFRvb2x0aXBDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgaW46IGZhbHNlLCBmYWRlOiBmYWxzZSB9O1xuICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcbiAgICB0aGlzLmNsYXNzTWFwW2B0b29sdGlwLSR7dGhpcy5wbGFjZW1lbnR9YF0gPSB0cnVlO1xuXG4gICAgdGhpcy5jbGFzc01hcC5pbiA9IHRydWU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwLmZhZGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMuY29udGFpbmVyQ2xhc3NdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50IGRlcHJlY2F0aW9uICovXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE9uQ2hhbmdlLCB3YXJuT25jZSwgcGFyc2VUcmlnZ2VycyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cbiAgQE91dHB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciB0b29sdGlwIGNvbnRhaW5lclxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBIdG1sJylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgaHRtbENvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQbGFjZW1lbnQgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCcpO1xuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJylcbiAgc2V0IF9pc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwSXNPcGVuIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwRW5hYmxlJylcbiAgc2V0IF9lbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IF9lbmFibGUoKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwQXBwZW5kVG9Cb2R5JylcbiAgc2V0IF9hcHBlbmRUb0JvZHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZShcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXG4gICAgKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHZhbHVlID8gJ2JvZHknIDogdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBnZXQgX2FwcGVuZFRvQm9keSgpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZShcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCwgd2lsbCBiZSBhZGRlZCB0byBjb25maWd1cmF0aW9uICovXG4gIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb24gPSB0cnVlO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHdpbGwgcmVwbGFjZWQgd2l0aCBjdXN0b21DbGFzcyAqL1xuICBASW5wdXQoJ3Rvb2x0aXBDbGFzcycpXG4gIHNldCBfcG9wdXBDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDbGFzcyBkZXByZWNhdGVkJyk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkICovXG4gIEBJbnB1dCgndG9vbHRpcENvbnRleHQnKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCBfdG9vbHRpcENvbnRleHQodmFsdWU6IGFueSkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ29udGV4dCBkZXByZWNhdGVkJyk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCd0b29sdGlwUG9wdXBEZWxheScpXG4gIHNldCBfdG9vbHRpcFBvcHVwRGVsYXkodmFsdWU6IG51bWJlcikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUG9wdXBEZWxheSBpcyBkZXByZWNhdGVkLCB1c2UgYGRlbGF5YCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5kZWxheSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIHRvb2x0aXBGYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcFRyaWdnZXInKVxuICBnZXQgX3Rvb2x0aXBUcmlnZ2VyKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy50cmlnZ2VycztcbiAgfVxuXG4gIHNldCBfdG9vbHRpcFRyaWdnZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuICAgIHRoaXMudHJpZ2dlcnMgPSAodmFsdWUgfHwgJycpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQE91dHB1dCgpXG4gIHRvb2x0aXBTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBudW1iZXIgfCBhbnk7XG4gIHByb3RlY3RlZCBfdG9vbHRpcENhbmNlbFNob3dGbjogRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSBfdG9vbHRpcDogQ29tcG9uZW50TG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnXG4gICkge1xuXG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXG4gICAgICApXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gICAgdGhpcy50b29sdGlwQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzT3BlbiB8fFxuICAgICAgdGhpcy5pc0Rpc2FibGVkIHx8XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCB8fFxuICAgICAgIXRoaXMudG9vbHRpcFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90b29sdGlwXG4gICAgICAgIC5hdHRhY2goVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgICAgLnNob3coe1xuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4pIHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudHJpZ2dlcnMpIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpO1xuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJpZ2dlcnNbMF0uY2xvc2UsICgpID0+IHtcbiAgICAgICAgICBfdGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICB9LCB0aGlzLnRvb2x0aXBGYWRlRHVyYXRpb24pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5kaXNwb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rvb2x0aXBEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb29sdGlwTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVG9vbHRpcENvbmZpZywgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7eUJBTWMsS0FBSzs7Ozt3QkFFTixhQUFhOzs7Z0JBTHpCLFVBQVU7O3dCQUhYOzs7Ozs7O0FDQUE7SUFpREUsbUNBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7SUFORCxzQkFBSSw0Q0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxLQUFLLEVBQUUsQ0FBQztTQUNoQjs7O09BQUE7Ozs7SUFNRCxtREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBVyxJQUFJLENBQUMsU0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLFNBQU0sSUFBSSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxXQUFRLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7S0FDRjs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQ1AsOEdB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