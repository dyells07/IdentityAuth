import { Directive, Input, TemplateRef, ViewContainerRef, Injectable, Component, HostBinding, Renderer2, EventEmitter, Output, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    NgTranscludeDirective.propDecorators = {
        "ngTransclude": [{ type: Input },],
    };
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: Injectable }
    ];
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            var /** @type {?} */ prevIndex = index - step;
            var /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig, },
        { type: Renderer2, },
    ]; };
    TabsetComponent.propDecorators = {
        "vertical": [{ type: Input },],
        "justified": [{ type: Input },],
        "type": [{ type: Input },],
        "clazz": [{ type: HostBinding, args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'tab, [tab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    TabDirective.propDecorators = {
        "heading": [{ type: Input },],
        "id": [{ type: HostBinding, args: ['attr.id',] }, { type: Input },],
        "disabled": [{ type: Input },],
        "removable": [{ type: Input },],
        "customClass": [{ type: Input },],
        "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        "select": [{ type: Output },],
        "deselect": [{ type: Output },],
        "removed": [{ type: Output },],
        "addClass": [{ type: HostBinding, args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[tabHeading]' },] }
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: TabDirective, },
    ]; };
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    TabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        NgTranscludeDirective,
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective
                    ],
                    exports: [
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective,
                        NgTranscludeDirective
                    ]
                },] }
    ];
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzZXQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWItaGVhZGluZy5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIHtcbiAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcm90ZWN0ZWQgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHJvdGVjdGVkIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb25maWcge1xuICAvKiogcHJvdmlkZXMgZGVmYXVsdCBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXG4gIHR5cGUgPSAndGFicyc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG4vLyB0b2RvOiBhZGQgYWN0aXZlIGV2ZW50IHRvIHRhYlxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFic2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xuICB9XG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qdXN0aWZpZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xuXG4gIHRhYnM6IFRhYkRpcmVjdGl2ZVtdID0gW107XG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gIHByb3RlY3RlZCBpc0Rlc3Ryb3llZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVGFic2V0Q29uZmlnLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgdGFiLmFjdGl2ZSA9IHRoaXMudGFicy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHRhYi5hY3RpdmUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcmVtb3ZlVGFiKFxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxuICAgIG9wdGlvbnMgPSB7IHJlc2VsZWN0OiB0cnVlLCBlbWl0OiB0cnVlIH1cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxuICAgIGlmIChvcHRpb25zLnJlc2VsZWN0ICYmIHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcbiAgICAgIHRhYi5yZW1vdmVkLmVtaXQodGFiKTtcbiAgICB9XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgICduYXYtc3RhY2tlZCc6IHRoaXMudmVydGljYWwsXG4gICAgICAnZmxleC1jb2x1bW4nOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcbiAgICAgIFtgbmF2LSR7dGhpcy50eXBlfWBdOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RhYiwgW3RhYl0nIH0pXG5leHBvcnQgY2xhc3MgVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcbiAgLyoqIHRhYiBpZC4gVGhlIHNhbWUgaWQgd2l0aCBzdWZmaXggJy1saW5rJyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nICZsdDtsaSZndDsgZWxlbWVudCAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBub3QgYmUgYWN0aXZhdGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cbiAgQElucHV0KCkgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHRyaWJ1dGUuIE11bHRpcGxlIGNsYXNzZXMgYXJlIHN1cHBvcnRlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNsYXNzO1xuICB9XG5cbiAgc2V0IGN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcyA/IGN1c3RvbUNsYXNzLnRyaW0oKSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlID09PSBhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKCh0YWI6IFRhYkRpcmVjdGl2ZSkgPT4ge1xuICAgICAgaWYgKHRhYiAhPT0gdGhpcykge1xuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCBiZWZvcmUgdGFiIHdpbGwgYmUgcmVtb3ZlZCwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gaW5zdGFuY2Ugb2YgcmVtb3ZlZCB0YWIgKi9cbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLXBhbmUnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuXG4vKiogU2hvdWxkIGJlIHVzZWQgdG8gbWFyayA8bmctdGVtcGxhdGU+IGVsZW1lbnQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGFiIGhlYWRpbmcgKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0YWJIZWFkaW5nXScgfSlcbmV4cG9ydCBjbGFzcyBUYWJIZWFkaW5nRGlyZWN0aXZlIHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB0YWI6IFRhYkRpcmVjdGl2ZSkge1xuICAgIHRhYi5oZWFkaW5nUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgfSBmcm9tICcuL25nLXRyYW5zY2x1ZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYkhlYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1oZWFkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUsXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYnNldENvbXBvbmVudCxcbiAgICBUYWJIZWFkaW5nRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJEaXJlY3RpdmUsXG4gICAgVGFic2V0Q29tcG9uZW50LFxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmUsXG4gICAgTmdUcmFuc2NsdWRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFic01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RhYnNldENvbmZpZ11cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBMEJFLCtCQUFZLE9BQXlCO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzBCQWRHLCtDQUFZOzs7OztRQVFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7Ozs7O2tCQVZnQixXQUE2QjtZQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlDOzs7Ozs7Z0JBaEJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFKdUMsZ0JBQWdCOzs7aUNBWXJELEtBQUs7O2dDQVpSOzs7Ozs7O0FDQUE7Ozs7O29CQUtTLE1BQU07OztnQkFIZCxVQUFVOzt1QkFGWDs7Ozs7OztBQ0FBO0lBbURFLHlCQUFZLE1BQW9CLEVBQVUsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkFWakIsSUFBSTtvQkFFekIsRUFBRTt3QkFDYyxFQUFFO1FBUXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOzBCQXhDRyxxQ0FBUTs7Ozs7O1lBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7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