(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/component-loader', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap']['component-loader'] = {}),global.ng.core,global.utils,global.positioning));
}(this, (function (exports,core,utils,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ BsComponentRef = (function () {
        function BsComponentRef() {
        }
        return BsComponentRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var ContentRef = (function () {
        function ContentRef(/* tslint:disable-next-line: no-any */ 
        /* tslint:disable-next-line: no-any */
        nodes, viewRef, /* tslint:disable-next-line: no-any */ 
        /* tslint:disable-next-line: no-any */
        componentRef) {
            this.nodes = nodes;
            this.viewRef = viewRef;
            this.componentRef = componentRef;
        }
        return ContentRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ComponentLoader = (function () {
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._injector = _injector;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._applicationRef = _applicationRef;
            this._posService = _posService;
            this.onBeforeShow = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onShown = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onBeforeHide = new core.EventEmitter();
            this.onHidden = new core.EventEmitter();
            this._providers = [];
            this._isHiding = false;
            this._listenOpts = {};
            this._globalListener = Function.prototype;
        }
        Object.defineProperty(ComponentLoader.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                if (this._isHiding) {
                    return false;
                }
                return !!this._componentRef;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} compType
         * @return {?}
         */
        ComponentLoader.prototype.attach = /**
         * @param {?} compType
         * @return {?}
         */
            function (compType) {
                this._componentFactory = this._componentFactoryResolver
                    .resolveComponentFactory(compType);
                return this;
            };
        // todo: add behaviour: to target element, `body`, custom element
        /**
         * @param {?=} container
         * @return {?}
         */
        ComponentLoader.prototype.to = /**
         * @param {?=} container
         * @return {?}
         */
            function (container) {
                this.container = container || this.container;
                return this;
            };
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.position = /**
         * @param {?=} opts
         * @return {?}
         */
            function (opts) {
                this.attachment = opts.attachment || this.attachment;
                this._elementRef = ((opts.target)) || this._elementRef;
                return this;
            };
        /**
         * @param {?} provider
         * @return {?}
         */
        ComponentLoader.prototype.provide = /**
         * @param {?} provider
         * @return {?}
         */
            function (provider) {
                this._providers.push(provider);
                return this;
            };
        // todo: appendChild to element or document.querySelector(this.container)
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.show = /**
         * @param {?=} opts
         * @return {?}
         */
            function (opts) {
                if (opts === void 0) {
                    opts = {};
                }
                this._subscribePositioning();
                this._innerComponent = null;
                if (!this._componentRef) {
                    this.onBeforeShow.emit();
                    this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
                    var /** @type {?} */ injector = core.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
                    this._applicationRef.attachView(this._componentRef.hostView);
                    // this._componentRef = this._viewContainerRef
                    //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
                    this.instance = this._componentRef.instance;
                    Object.assign(this._componentRef.instance, opts);
                    if (this.container instanceof core.ElementRef) {
                        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    if (this.container === 'body' && typeof document !== 'undefined') {
                        document
                            .querySelector(/** @type {?} */ (this.container))
                            .appendChild(this._componentRef.location.nativeElement);
                    }
                    if (!this.container &&
                        this._elementRef &&
                        this._elementRef.nativeElement.parentElement) {
                        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    // we need to manually invoke change detection since events registered
                    // via
                    // Renderer::listen() are not picked up by change detection with the
                    // OnPush strategy
                    if (this._contentRef.componentRef) {
                        this._innerComponent = this._contentRef.componentRef.instance;
                        this._contentRef.componentRef.changeDetectorRef.markForCheck();
                        this._contentRef.componentRef.changeDetectorRef.detectChanges();
                    }
                    this._componentRef.changeDetectorRef.markForCheck();
                    this._componentRef.changeDetectorRef.detectChanges();
                    this.onShown.emit(this._componentRef.instance);
                }
                this._registerOutsideClick();
                return this._componentRef;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (!this._componentRef) {
                    return this;
                }
                this.onBeforeHide.emit(this._componentRef.instance);
                var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
                componentEl.parentNode.removeChild(componentEl);
                if (this._contentRef.componentRef) {
                    this._contentRef.componentRef.destroy();
                }
                this._componentRef.destroy();
                if (this._viewContainerRef && this._contentRef.viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                }
                if (this._contentRef.viewRef) {
                    this._contentRef.viewRef.destroy();
                }
                this._contentRef = null;
                this._componentRef = null;
                this._removeGlobalListener();
                this.onHidden.emit();
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                    return;
                }
                this.show();
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.dispose = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                }
                this._unsubscribePositioning();
                if (this._unregisterListenersFn) {
                    this._unregisterListenersFn();
                }
            };
        /**
         * @param {?} listenOpts
         * @return {?}
         */
        ComponentLoader.prototype.listen = /**
         * @param {?} listenOpts
         * @return {?}
         */
            function (listenOpts) {
                var _this = this;
                this.triggers = listenOpts.triggers || this.triggers;
                this._listenOpts.outsideClick = listenOpts.outsideClick;
                listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
                var /** @type {?} */ hide = (this._listenOpts.hide = function () {
                    return listenOpts.hide ? listenOpts.hide() : void _this.hide();
                });
                var /** @type {?} */ show = (this._listenOpts.show = function (registerHide) {
                    listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
                    registerHide();
                });
                var /** @type {?} */ toggle = function (registerHide) {
                    _this.isShown ? hide() : show(registerHide);
                };
                this._unregisterListenersFn = utils.listenToTriggersV2(this._renderer, {
                    target: listenOpts.target,
                    triggers: listenOpts.triggers,
                    show: show,
                    hide: hide,
                    toggle: toggle
                });
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._removeGlobalListener = /**
         * @return {?}
         */
            function () {
                if (this._globalListener) {
                    this._globalListener();
                    this._globalListener = null;
                }
            };
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
        ComponentLoader.prototype.attachInline = /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
            function (vRef, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            template) {
                this._inlineViewRef = vRef.createEmbeddedView(template);
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._registerOutsideClick = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._componentRef || !this._componentRef.location) {
                    return;
                }
                // why: should run after first event bubble
                if (this._listenOpts.outsideClick) {
                    var /** @type {?} */ target_1 = this._componentRef.location.nativeElement;
                    setTimeout(function () {
                        _this._globalListener = utils.registerOutsideClick(_this._renderer, {
                            targets: [target_1, _this._elementRef.nativeElement],
                            outsideClick: _this._listenOpts.outsideClick,
                            hide: function () { return _this._listenOpts.hide(); }
                        });
                    });
                }
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.getInnerComponent = /**
         * @return {?}
         */
            function () {
                return this._innerComponent;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._subscribePositioning = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._zoneSubscription || !this.attachment) {
                    return;
                }
                this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
                    if (!_this._componentRef) {
                        return;
                    }
                    _this._posService.position({
                        element: _this._componentRef.location,
                        target: _this._elementRef,
                        attachment: _this.attachment,
                        appendToBody: _this.container === 'body'
                    });
                });
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._unsubscribePositioning = /**
         * @return {?}
         */
            function () {
                if (!this._zoneSubscription) {
                    return;
                }
                this._zoneSubscription.unsubscribe();
                this._zoneSubscription = null;
            };
        /**
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */
        ComponentLoader.prototype._getContentRef = /**
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */
            function (/* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            content, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            context, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            initialState) {
                if (!content) {
                    return new ContentRef([]);
                }
                if (content instanceof core.TemplateRef) {
                    if (this._viewContainerRef) {
                        var /** @type {?} */ _viewRef = this._viewContainerRef
                            .createEmbeddedView(content, context);
                        _viewRef.markForCheck();
                        return new ContentRef([_viewRef.rootNodes], _viewRef);
                    }
                    var /** @type {?} */ viewRef = content.createEmbeddedView({});
                    this._applicationRef.attachView(viewRef);
                    return new ContentRef([viewRef.rootNodes], viewRef);
                }
                if (typeof content === 'function') {
                    var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
                    var /** @type {?} */ modalContentInjector = core.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
                    Object.assign(componentRef.instance, initialState);
                    this._applicationRef.attachView(componentRef.hostView);
                    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
                }
                return new ContentRef([[this._renderer.createText("" + content)]]);
            };
        return ComponentLoader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLoaderFactory = (function () {
        function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._injector = _injector;
            this._posService = _posService;
            this._applicationRef = _applicationRef;
        }
        /**
         *
         * @param _elementRef
         * @param _viewContainerRef
         * @param _renderer
         */
        /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
        ComponentLoaderFactory.prototype.createLoader = /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
            function (_elementRef, _viewContainerRef, _renderer) {
                return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
            };
        ComponentLoaderFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ComponentLoaderFactory.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
                { type: core.NgZone, },
                { type: core.Injector, },
                { type: positioning.PositioningService, },
                { type: core.ApplicationRef, },
            ];
        };
        return ComponentLoaderFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsComponentRef = BsComponentRef;
    exports.ComponentLoader = ComponentLoader;
    exports.ComponentLoaderFactory = ComponentLoaderFactory;
    exports.ContentRef = ContentRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb21wb25lbnQtbG9hZGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2JzLWNvbXBvbmVudC1yZWYuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb250ZW50LXJlZi5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEJzQ29tcG9uZW50UmVmPFQ+IHtcbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+O1xuICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xufVxuIiwiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRSZWYge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBub2RlczogYW55W107XG4gIHZpZXdSZWY/OiBWaWV3UmVmO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIG5vZGVzOiBhbnlbXSxcbiAgICB2aWV3UmVmPzogVmlld1JlZixcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+XG4gICkge1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxuLy8gdG9kbzogbWVyZ2UgZXZlbnRzIG9uU2hvdywgb25TaG93biwgZXRjLi4uXG4vLyB0b2RvOiBhZGQgZ2xvYmFsIHBvc2l0aW9uaW5nIGNvbmZpZ3VyYXRpb24/XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBsaXN0ZW5Ub1RyaWdnZXJzVjIsIHJlZ2lzdGVyT3V0c2lkZUNsaWNrIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBMaXN0ZW5PcHRpb25zIH0gZnJvbSAnLi9saXN0ZW4tb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlcjxUPiB7XG4gIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5zdGFuY2U6IFQ7XG4gIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcbiAgX2lubGluZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxUPjtcblxuICBwcml2YXRlIF9wcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmO1xuICBwcml2YXRlIF9pbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIHByaXZhdGUgX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbjogRnVuY3Rpb247XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNIaWRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgY29tcG9uZW50LiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaG1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByaXZhdGUgY29udGFpbmVyOiBzdHJpbmcgfCBFbGVtZW50UmVmIHwgYW55O1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBwcml2YXRlIHRyaWdnZXJzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lciA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogRG8gbm90IHVzZSB0aGlzIGRpcmVjdGx5LCBpdCBzaG91bGQgYmUgaW5zdGFuY2VkIHZpYVxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBUeXBlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGJlaGF2aW91cjogdG8gdGFyZ2V0IGVsZW1lbnQsIGBib2R5YCwgY3VzdG9tIGVsZW1lbnRcbiAgdG8oY29udGFpbmVyPzogc3RyaW5nKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lcjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcG9zaXRpb24ob3B0cz86IFBvc2l0aW9uaW5nT3B0aW9ucyk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5hdHRhY2htZW50ID0gb3B0cy5hdHRhY2htZW50IHx8IHRoaXMuYXR0YWNobWVudDtcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3ZpZGUocHJvdmlkZXI6IFN0YXRpY1Byb3ZpZGVyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRvZG86IGFwcGVuZENoaWxkIHRvIGVsZW1lbnQgb3IgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcilcblxuICBzaG93KG9wdHM6IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRleHQ/OiBhbnk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGluaXRpYWxTdGF0ZT86IGFueTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge31cbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcblxuICAgIHRoaXMuX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk7XG4gICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMub25CZWZvcmVTaG93LmVtaXQoKTtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSB0aGlzLl9nZXRDb250ZW50UmVmKG9wdHMuY29udGVudCwgb3B0cy5jb250ZXh0LCBvcHRzLmluaXRpYWxTdGF0ZSk7XG5cbiAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAvLyB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAvLyAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeSwgMCwgaW5qZWN0b3IsIHRoaXMuX2NvbnRlbnRSZWYubm9kZXMpO1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UsIG9wdHMpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyIGFzIHN0cmluZylcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgbmVlZCB0byBtYW51YWxseSBpbnZva2UgY2hhbmdlIGRldGVjdGlvbiBzaW5jZSBldmVudHMgcmVnaXN0ZXJlZFxuICAgICAgLy8gdmlhXG4gICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxuICAgICAgLy8gT25QdXNoIHN0cmF0ZWd5XG4gICAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgaGlkZSgpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLm9uQmVmb3JlSGlkZS5lbWl0KHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRFbCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbXBvbmVudEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29tcG9uZW50RWwpO1xuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmICYmIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbnRlbnRSZWYgPSBudWxsO1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcblxuICAgIHRoaXMub25IaWRkZW4uZW1pdCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xuICAgICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKCk7XG4gICAgfVxuICB9XG5cbiAgbGlzdGVuKGxpc3Rlbk9wdHM6IExpc3Rlbk9wdGlvbnMpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2sgPSBsaXN0ZW5PcHRzLm91dHNpZGVDbGljaztcbiAgICBsaXN0ZW5PcHRzLnRhcmdldCA9IGxpc3Rlbk9wdHMudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGhpZGUgPSAodGhpcy5fbGlzdGVuT3B0cy5oaWRlID0gKCkgPT5cbiAgICAgIGxpc3Rlbk9wdHMuaGlkZSA/IGxpc3Rlbk9wdHMuaGlkZSgpIDogdm9pZCB0aGlzLmhpZGUoKSk7XG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgbGlzdGVuT3B0cy5zaG93ID8gbGlzdGVuT3B0cy5zaG93KHJlZ2lzdGVySGlkZSkgOiB0aGlzLnNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICAgIHJlZ2lzdGVySGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKHJlZ2lzdGVySGlkZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XG4gICAgICB0YXJnZXQ6IGxpc3Rlbk9wdHMudGFyZ2V0LFxuICAgICAgdHJpZ2dlcnM6IGxpc3Rlbk9wdHMudHJpZ2dlcnMsXG4gICAgICBzaG93LFxuICAgICAgaGlkZSxcbiAgICAgIHRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaElubGluZShcbiAgICB2UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxuICApOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX2lubGluZVZpZXdSZWYgPSB2UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWdpc3Rlck91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAhdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHdoeTogc2hvdWxkIHJ1biBhZnRlciBmaXJzdCBldmVudCBidWJibGVcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICAgIG91dHNpZGVDbGljazogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2ssXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRJbm5lckNvbXBvbmVudCgpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9pbm5lckNvbXBvbmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRleHQ/OiBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGluaXRpYWxTdGF0ZT86IGFueVxuICApOiBDb250ZW50UmVmIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgY29uc3QgX3ZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XG4gICAgICAgIF92aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xuICAgICAgfVxuICAgICAgY29uc3Qgdmlld1JlZiA9IGNvbnRlbnQuY3JlYXRlRW1iZWRkZWRWaWV3KHt9KTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29udGVudFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbW9kYWxDb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycyxcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIGluaXRpYWxTdGF0ZSk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihcbiAgICAgICAgW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dLFxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXG4gICAgICAgIGNvbXBvbmVudFJlZlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1t0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGAke2NvbnRlbnR9YCldXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxuICBOZ1pvbmUsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcG9zU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBfZWxlbWVudFJlZlxuICAgKiBAcGFyYW0gX3ZpZXdDb250YWluZXJSZWZcbiAgICogQHBhcmFtIF9yZW5kZXJlclxuICAgKi9cbiAgY3JlYXRlTG9hZGVyPFQ+KF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRMb2FkZXI8VD4oXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlcixcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgdGhpcy5faW5qZWN0b3IsXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICB0aGlzLl9uZ1pvbmUsXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZixcbiAgICAgIHRoaXMuX3Bvc1NlcnZpY2VcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiSW5qZWN0b3IiLCJFbGVtZW50UmVmIiwibGlzdGVuVG9UcmlnZ2Vyc1YyIiwicmVnaXN0ZXJPdXRzaWRlQ2xpY2siLCJUZW1wbGF0ZVJlZiIsIkluamVjdGFibGUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJOZ1pvbmUiLCJQb3NpdGlvbmluZ1NlcnZpY2UiLCJBcHBsaWNhdGlvblJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztRQUFBOzs7NkJBRkE7UUFLQzs7Ozs7Ozs7OztBQ0VELFFBQUE7UUFPRTs7UUFFRSxLQUFZLEVBQ1osT0FBaUI7O1FBRWpCLFlBQWdDO1lBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQ2xDO3lCQXhCSDtRQXlCQzs7Ozs7O0FDckJEOzs7QUFzQkE7O1FBQUE7aUNBMERZLG1CQUNBLFdBQ0EsYUFDQSxXQUNBLDJCQUNBLFNBQ0EsaUJBQ0E7WUFQQSxzQkFBaUIsR0FBakIsaUJBQWlCO1lBQ2pCLGNBQVMsR0FBVCxTQUFTO1lBQ1QsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsY0FBUyxHQUFULFNBQVM7WUFDVCw4QkFBeUIsR0FBekIseUJBQXlCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPO1lBQ1Asb0JBQWUsR0FBZixlQUFlO1lBQ2YsZ0JBQVcsR0FBWCxXQUFXO2dDQWhFYyxJQUFJQSxpQkFBWSxFQUFFOzsyQkFFeEIsSUFBSUEsaUJBQVksRUFBRTs7Z0NBRWIsSUFBSUEsaUJBQVksRUFBRTs0QkFDbEIsSUFBSUEsaUJB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