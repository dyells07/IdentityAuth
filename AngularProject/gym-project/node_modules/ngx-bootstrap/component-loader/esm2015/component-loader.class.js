/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggersV2, registerOutsideClick } from 'ngx-bootstrap/utils';
import { ContentRef } from './content-ref.class';
/**
 * @template T
 */
export class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    /**
     * @return {?}
     */
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            const /** @type {?} */ injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
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
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        const /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
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
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        const /** @type {?} */ hide = (this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide());
        const /** @type {?} */ show = (this._listenOpts.show = (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        });
        const /** @type {?} */ toggle = (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    /**
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    }
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    attachInline(vRef, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    /**
     * @return {?}
     */
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            const /** @type {?} */ target = this._componentRef.location.nativeElement;
            setTimeout(() => {
                this._globalListener = registerOutsideClick(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: () => this._listenOpts.hide()
                });
            });
        }
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
            if (!this._componentRef) {
                return;
            }
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        });
    }
    /**
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    _getContentRef(/* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    content, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    context, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    initialState) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                const /** @type {?} */ _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            const /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            const /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            const /** @type {?} */ modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            const /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
function ComponentLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /** @type {?} */
    ComponentLoader.prototype._inlineViewRef;
    /** @type {?} */
    ComponentLoader.prototype._providers;
    /** @type {?} */
    ComponentLoader.prototype._componentFactory;
    /** @type {?} */
    ComponentLoader.prototype._zoneSubscription;
    /** @type {?} */
    ComponentLoader.prototype._contentRef;
    /** @type {?} */
    ComponentLoader.prototype._innerComponent;
    /** @type {?} */
    ComponentLoader.prototype._unregisterListenersFn;
    /** @type {?} */
    ComponentLoader.prototype._isHiding;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    ComponentLoader.prototype.container;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    ComponentLoader.prototype.triggers;
    /** @type {?} */
    ComponentLoader.prototype._listenOpts;
    /** @type {?} */
    ComponentLoader.prototype._globalListener;
    /** @type {?} */
    ComponentLoader.prototype._viewContainerRef;
    /** @type {?} */
    ComponentLoader.prototype._renderer;
    /** @type {?} */
    ComponentLoader.prototype._elementRef;
    /** @type {?} */
    ComponentLoader.prototype._injector;
    /** @type {?} */
    ComponentLoader.prototype._componentFactoryResolver;
    /** @type {?} */
    ComponentLoader.prototype._ngZone;
    /** @type {?} */
    ComponentLoader.prototype._applicationRef;
    /** @type {?} */
    ComponentLoader.prototype._posService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFLTCxVQUFVLEVBRVYsWUFBWSxFQUNaLFFBQVEsRUFJUixXQUFXLEVBR1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSWpELE1BQU07Ozs7Ozs7Ozs7Ozs7O2dCQTBETSxtQkFDQSxXQUNBLGFBQ0EsV0FDQSwyQkFDQSxTQUNBLGlCQUNBO1FBUEEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixjQUFTLEdBQVQsU0FBUztRQUNULGdCQUFXLEdBQVgsV0FBVztRQUNYLGNBQVMsR0FBVCxTQUFTO1FBQ1QsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQUN6QixZQUFPLEdBQVAsT0FBTztRQUNQLG9CQUFlLEdBQWYsZUFBZTtRQUNmLGdCQUFXLEdBQVgsV0FBVzs0QkFoRWMsSUFBSSxZQUFZLEVBQUU7O3VCQUV4QixJQUFJLFlBQVksRUFBRTs7NEJBRWIsSUFBSSxZQUFZLEVBQUU7d0JBQ2xCLElBQUksWUFBWSxFQUFFOzBCQU1iLEVBQUU7eUJBZ0JyQixLQUFLOzJCQW9CWSxFQUFFOytCQUNiLFFBQVEsQ0FBQyxTQUFTOzs7OztJQTdCNUMsSUFBSSxPQUFPO1FBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzdCOzs7OztJQTBDRCxNQUFNLENB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QUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2RCxNQUFNLENBQUMsSUFBSSxVQUFVLENBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ3ZDLFlBQVksQ0FBQyxRQUFRLEVBQ3JCLFlBQVksQ0FDYixDQUFDO1NBQ0g7UUFFRCxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Q0FFdEUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxuLy8gdG9kbzogbWVyZ2UgZXZlbnRzIG9uU2hvdywgb25TaG93biwgZXRjLi4uXG4vLyB0b2RvOiBhZGQgZ2xvYmFsIHBvc2l0aW9uaW5nIGNvbmZpZ3VyYXRpb24/XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBsaXN0ZW5Ub1RyaWdnZXJzVjIsIHJlZ2lzdGVyT3V0c2lkZUNsaWNrIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBMaXN0ZW5PcHRpb25zIH0gZnJvbSAnLi9saXN0ZW4tb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlcjxUPiB7XG4gIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5zdGFuY2U6IFQ7XG4gIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcbiAgX2lubGluZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxUPjtcblxuICBwcml2YXRlIF9wcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmO1xuICBwcml2YXRlIF9pbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIHByaXZhdGUgX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbjogRnVuY3Rpb247XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNIaWRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgY29tcG9uZW50LiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaG1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByaXZhdGUgY29udGFpbmVyOiBzdHJpbmcgfCBFbGVtZW50UmVmIHwgYW55O1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBwcml2YXRlIHRyaWdnZXJzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lciA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogRG8gbm90IHVzZSB0aGlzIGRpcmVjdGx5LCBpdCBzaG91bGQgYmUgaW5zdGFuY2VkIHZpYVxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBUeXBlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGJlaGF2aW91cjogdG8gdGFyZ2V0IGVsZW1lbnQsIGBib2R5YCwgY3VzdG9tIGVsZW1lbnRcbiAgdG8oY29udGFpbmVyPzogc3RyaW5nKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lcjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcG9zaXRpb24ob3B0cz86IFBvc2l0aW9uaW5nT3B0aW9ucyk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5hdHRhY2htZW50ID0gb3B0cy5hdHRhY2htZW50IHx8IHRoaXMuYXR0YWNobWVudDtcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3ZpZGUocHJvdmlkZXI6IFN0YXRpY1Byb3ZpZGVyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRvZG86IGFwcGVuZENoaWxkIHRvIGVsZW1lbnQgb3IgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcilcblxuICBzaG93KG9wdHM6IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRleHQ/OiBhbnk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGluaXRpYWxTdGF0ZT86IGFueTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge31cbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcblxuICAgIHRoaXMuX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk7XG4gICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMub25CZWZvcmVTaG93LmVtaXQoKTtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSB0aGlzLl9nZXRDb250ZW50UmVmKG9wdHMuY29udGVudCwgb3B0cy5jb250ZXh0LCBvcHRzLmluaXRpYWxTdGF0ZSk7XG5cbiAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAvLyB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAvLyAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeSwgMCwgaW5qZWN0b3IsIHRoaXMuX2NvbnRlbnRSZWYubm9kZXMpO1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UsIG9wdHMpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyIGFzIHN0cmluZylcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgbmVlZCB0byBtYW51YWxseSBpbnZva2UgY2hhbmdlIGRldGVjdGlvbiBzaW5jZSBldmVudHMgcmVnaXN0ZXJlZFxuICAgICAgLy8gdmlhXG4gICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxuICAgICAgLy8gT25QdXNoIHN0cmF0ZWd5XG4gICAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgaGlkZSgpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLm9uQmVmb3JlSGlkZS5lbWl0KHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRFbCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbXBvbmVudEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29tcG9uZW50RWwpO1xuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmICYmIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbnRlbnRSZWYgPSBudWxsO1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcblxuICAgIHRoaXMub25IaWRkZW4uZW1pdCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xuICAgICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKCk7XG4gICAgfVxuICB9XG5cbiAgbGlzdGVuKGxpc3Rlbk9wdHM6IExpc3Rlbk9wdGlvbnMpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2sgPSBsaXN0ZW5PcHRzLm91dHNpZGVDbGljaztcbiAgICBsaXN0ZW5PcHRzLnRhcmdldCA9IGxpc3Rlbk9wdHMudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGhpZGUgPSAodGhpcy5fbGlzdGVuT3B0cy5oaWRlID0gKCkgPT5cbiAgICAgIGxpc3Rlbk9wdHMuaGlkZSA/IGxpc3Rlbk9wdHMuaGlkZSgpIDogdm9pZCB0aGlzLmhpZGUoKSk7XG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgbGlzdGVuT3B0cy5zaG93ID8gbGlzdGVuT3B0cy5zaG93KHJlZ2lzdGVySGlkZSkgOiB0aGlzLnNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICAgIHJlZ2lzdGVySGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKHJlZ2lzdGVySGlkZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XG4gICAgICB0YXJnZXQ6IGxpc3Rlbk9wdHMudGFyZ2V0LFxuICAgICAgdHJpZ2dlcnM6IGxpc3Rlbk9wdHMudHJpZ2dlcnMsXG4gICAgICBzaG93LFxuICAgICAgaGlkZSxcbiAgICAgIHRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaElubGluZShcbiAgICB2UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxuICApOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX2lubGluZVZpZXdSZWYgPSB2UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWdpc3Rlck91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAhdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHdoeTogc2hvdWxkIHJ1biBhZnRlciBmaXJzdCBldmVudCBidWJibGVcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICAgIG91dHNpZGVDbGljazogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2ssXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRJbm5lckNvbXBvbmVudCgpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9pbm5lckNvbXBvbmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRleHQ/OiBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGluaXRpYWxTdGF0ZT86IGFueVxuICApOiBDb250ZW50UmVmIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgY29uc3QgX3ZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XG4gICAgICAgIF92aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xuICAgICAgfVxuICAgICAgY29uc3Qgdmlld1JlZiA9IGNvbnRlbnQuY3JlYXRlRW1iZWRkZWRWaWV3KHt9KTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29udGVudFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbW9kYWxDb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycyxcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIGluaXRpYWxTdGF0ZSk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihcbiAgICAgICAgW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dLFxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXG4gICAgICAgIGNvbXBvbmVudFJlZlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1t0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGAke2NvbnRlbnR9YCldXSk7XG4gIH1cbn1cbiJdfQ==