(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tabs', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tabs = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgTranscludeDirective = (function () {
        function NgTranscludeDirective(viewRef) {
            this.viewRef = viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            /* tslint:disable-next-line:no-any */
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[ngTransclude]'
                    },] }
        ];
        /** @nocollapse */
        NgTranscludeDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, },
            ];
        };
        NgTranscludeDirective.propDecorators = {
            "ngTransclude": [{ type: core.Input },],
        };
        return NgTranscludeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsetConfig = (function () {
        function TabsetConfig() {
            /**
             * provides default navigation context class: 'tabs' or 'pills'
             */
            this.type = 'tabs';
        }
        TabsetConfig.decorators = [
            { type: core.Injectable }
        ];
        return TabsetConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsetComponent = (function () {
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
             */ function () {
                return this._vertical;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._justified;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (options === void 0) {
                    options = { reselect: true, emit: true };
                }
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
            { type: core.Component, args: [{
                        selector: 'tabset',
                        template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        TabsetComponent.ctorParameters = function () {
            return [
                { type: TabsetConfig, },
                { type: core.Renderer2, },
            ];
        };
        TabsetComponent.propDecorators = {
            "vertical": [{ type: core.Input },],
            "justified": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "clazz": [{ type: core.HostBinding, args: ['class.tab-container',] },],
        };
        return TabsetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabDirective = (function () {
        function TabDirective(tabset, elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            /**
             * fired when tab became active, $event:Tab equals to selected instance of Tab component
             */
            this.select = new core.EventEmitter();
            /**
             * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
             */
            this.deselect = new core.EventEmitter();
            /**
             * fired before tab will be removed, $event:Tab equals to instance of removed tab
             */
            this.removed = new core.EventEmitter();
            this.addClass = true;
            this.tabset = tabset;
            this.tabset.addTab(this);
        }
        Object.defineProperty(TabDirective.prototype, "customClass", {
            get: /**
             * if set, will be added to the tab's class attribute. Multiple classes are supported.
             * @return {?}
             */ function () {
                return this._customClass;
            },
            set: /**
             * @param {?} customClass
             * @return {?}
             */ function (customClass) {
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
             */ function () {
                return this._active;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */ function (active) {
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
            { type: core.Directive, args: [{ selector: 'tab, [tab]' },] }
        ];
        /** @nocollapse */
        TabDirective.ctorParameters = function () {
            return [
                { type: TabsetComponent, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        TabDirective.propDecorators = {
            "heading": [{ type: core.Input },],
            "id": [{ type: core.HostBinding, args: ['attr.id',] }, { type: core.Input },],
            "disabled": [{ type: core.Input },],
            "removable": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
            "select": [{ type: core.Output },],
            "deselect": [{ type: core.Output },],
            "removed": [{ type: core.Output },],
            "addClass": [{ type: core.HostBinding, args: ['class.tab-pane',] },],
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
    var TabHeadingDirective = (function () {
        /* tslint:disable-next-line:no-any */
        function TabHeadingDirective(templateRef, tab) {
            tab.headingRef = templateRef;
        }
        TabHeadingDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tabHeading]' },] }
        ];
        /** @nocollapse */
        TabHeadingDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef, },
                { type: TabDirective, },
            ];
        };
        return TabHeadingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.TabDirective = TabDirective;
    exports.TabHeadingDirective = TabHeadingDirective;
    exports.TabsetComponent = TabsetComponent;
    exports.TabsetConfig = TabsetConfig;
    exports.TabsModule = TabsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL25nLXRyYW5zY2x1ZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYnNldC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFiLWhlYWRpbmcuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB7XG4gIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgcHJvdGVjdGVkIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHByb3RlY3RlZCBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xuICAgIGlmICh0ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy52aWV3UmVmID0gdmlld1JlZjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFic2V0Q29uZmlnIHtcbiAgLyoqIHByb3ZpZGVzIGRlZmF1bHQgbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xuICB0eXBlID0gJ3RhYnMnO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcbi8vIHRvZG86IGZpeD8gbWl4aW5nIHN0YXRpYyBhbmQgZHluYW1pYyB0YWJzIHBvc2l0aW9uIHRhYnMgaW4gb3JkZXIgb2YgY3JlYXRpb25cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzZXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBpZiB0cnVlIHRhYnMgd2lsbCBiZSBwbGFjZWQgdmVydGljYWxseSAqL1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLyoqIGlmIHRydWUgdGFicyBmaWxsIHRoZSBjb250YWluZXIgYW5kIGhhdmUgYSBjb25zaXN0ZW50IHdpZHRoICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZmllZDtcbiAgfVxuICBzZXQganVzdGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fanVzdGlmaWVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cbiAgQElucHV0KClcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWNvbnRhaW5lcicpIGNsYXp6ID0gdHJ1ZTtcblxuICB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfanVzdGlmaWVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFRhYnNldENvbmZpZywgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBhZGRUYWIodGFiOiBUYWJEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHR5cGVvZiB0YWIuYWN0aXZlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIHJlbW92ZVRhYihcbiAgICB0YWI6IFRhYkRpcmVjdGl2ZSxcbiAgICBvcHRpb25zID0geyByZXNlbGVjdDogdHJ1ZSwgZW1pdDogdHJ1ZSB9XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICBpZiAoaW5kZXggPT09IC0xIHx8IHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2VsZWN0IGEgbmV3IHRhYiBpZiB0aGUgdGFiIHRvIGJlIHJlbW92ZWQgaXMgc2VsZWN0ZWQgYW5kIG5vdCBkZXN0cm95ZWRcbiAgICBpZiAob3B0aW9ucy5yZXNlbGVjdCAmJiB0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gdGhpcy5nZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXgpO1xuICAgICAgdGhpcy50YWJzW25ld0FjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5lbWl0KSB7XG4gICAgICB0YWIucmVtb3ZlZC5lbWl0KHRhYik7XG4gICAgfVxuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDw9IHRhYnNMZW5ndGg7IHN0ZXAgKz0gMSkge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gaW5kZXggLSBzdGVwO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xuICAgICAgaWYgKHRoaXMudGFic1twcmV2SW5kZXhdICYmICF0aGlzLnRhYnNbcHJldkluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFic1tuZXh0SW5kZXhdICYmICF0aGlzLnRhYnNbbmV4dEluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKCF0aGlzLnRhYnNbaV0uZGlzYWJsZWQgJiYgaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICAnbmF2LXN0YWNrZWQnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICduYXYtanVzdGlmaWVkJzogdGhpcy5qdXN0aWZpZWQsXG4gICAgICBbYG5hdi0ke3RoaXMudHlwZX1gXTogdHJ1ZVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0YWIsIFt0YWJdJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiB0YWIgaWQuIFRoZSBzYW1lIGlkIHdpdGggc3VmZml4ICctbGluaycgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyAmbHQ7bGkmZ3Q7IGVsZW1lbnQgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcbiAgfVxuXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3MgPyBjdXN0b21DbGFzcy50cmltKCkgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcbiAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQsICRldmVudDpUYWIgZXF1YWxzIHRvIGluc3RhbmNlIG9mIHJlbW92ZWQgdGFiICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2N1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzLCB7IHJlc2VsZWN0OiBmYWxzZSwgZW1pdDogZmFsc2UgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcblxuLyoqIFNob3VsZCBiZSB1c2VkIHRvIG1hcmsgPG5nLXRlbXBsYXRlPiBlbGVtZW50IGFzIGEgdGVtcGxhdGUgZm9yIHRhYiBoZWFkaW5nICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdGFiSGVhZGluZ10nIH0pXG5leHBvcnQgY2xhc3MgVGFiSGVhZGluZ0RpcmVjdGl2ZSB7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgdGFiOiBUYWJEaXJlY3RpdmUpIHtcbiAgICB0YWIuaGVhZGluZ1JlZiA9IHRlbXBsYXRlUmVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZy10cmFuc2NsdWRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJIZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItaGVhZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdUcmFuc2NsdWRlRGlyZWN0aXZlLFxuICAgIFRhYkRpcmVjdGl2ZSxcbiAgICBUYWJzZXRDb21wb25lbnQsXG4gICAgVGFiSGVhZGluZ0RpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYnNldENvbXBvbmVudCxcbiAgICBUYWJIZWFkaW5nRGlyZWN0aXZlLFxuICAgIE5nVHJhbnNjbHVkZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhYnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUYWJzZXRDb25maWddXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJSZW5kZXJlcjIiLCJIb3N0QmluZGluZyIsIkV2ZW50RW1pdHRlciIsIkVsZW1lbnRSZWYiLCJPdXRwdXQiLCJUZW1wbGF0ZVJlZiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUEwQkUsK0JBQVksT0FBeUI7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OEJBZEcsK0NBQVk7Ozs7Z0JBUWhCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQjs7Ozs7O3NCQVZnQixXQUE2QjtnQkFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pDLElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzlDOzs7Ozs7b0JBaEJKQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7Ozs7O3dCQUp1Q0MscUJBQWdCOzs7O3FDQVlyREMsVUFBSzs7b0NBWlI7Ozs7Ozs7QUNBQTs7Ozs7d0JBS1MsTUFBTTs7O29CQUhkQyxlQUFVOzsyQkFGWDs7Ozs7OztBQ0FBO1FBbURFLHlCQUFZLE1B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