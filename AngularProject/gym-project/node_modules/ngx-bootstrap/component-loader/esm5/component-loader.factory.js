/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
var ComponentLoaderFactory = /** @class */ (function () {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: NgZone, },
        { type: Injector, },
        { type: PositioningService, },
        { type: ApplicationRef, },
    ]; };
    return ComponentLoaderFactory;
}());
export { ComponentLoaderFactory };
function ComponentLoaderFactory_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ComponentLoaderFactory.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ComponentLoaderFactory.ctorParameters;
    /** @type {?} */
    ComponentLoaderFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    ComponentLoaderFactory.prototype._ngZone;
    /** @type {?} */
    ComponentLoaderFactory.prototype._injector;
    /** @type {?} */
    ComponentLoaderFactory.prototype._posService;
    /** @type {?} */
    ComponentLoaderFactory.prototype._applicationRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUFFLHdCQUF3QixFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQzFFLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBSTdELGdDQUFvQix5QkFBbUQsRUFDbkQsU0FDQSxXQUNBLGFBQ0E7UUFKQSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxvQkFBZSxHQUFmLGVBQWU7S0FBb0I7SUFFdkQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILDZDQUFZOzs7Ozs7OztJQUFaLFVBQWdCLFdBQXVCLEVBQ3ZCLGlCQUFtQyxFQUNuQyxTQUFvQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQ3hCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUNYLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7S0FDSDs7Z0JBM0JGLFVBQVU7Ozs7Z0JBTk8sd0JBQXdCO2dCQUN4QyxNQUFNO2dCQUQ0RCxRQUFRO2dCQUluRSxrQkFBa0I7Z0JBSnpCLGNBQWM7O2lDQURoQjs7U0FRYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvcixcbiAgTmdab25lLCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWZcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBfcmVuZGVyZXJcbiAgICovXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXIsXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIHRoaXMuX2luamVjdG9yLFxuICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgdGhpcy5fbmdab25lLFxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYsXG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlXG4gICAgKTtcbiAgfVxufVxuIl19