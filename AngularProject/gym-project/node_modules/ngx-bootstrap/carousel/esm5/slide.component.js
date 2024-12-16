/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        "addClass": [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());
export { SlideComponent };
function SlideComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SlideComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SlideComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SlideComponent.propDecorators;
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     */
    SlideComponent.prototype.carousel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQTJCdkQsd0JBQVksUUFBMkI7Ozs7d0JBTDVCLElBQUk7UUFNYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjtJQUVELDhFQUE4RTs7Ozs7SUFDOUUsaUNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBRUQsa0ZBQWtGOzs7OztJQUNsRixvQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSx1R0FJVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsU0FBUztxQkFDaEM7aUJBQ0Y7Ozs7Z0JBWlEsaUJBQWlCOzs7MkJBZXZCLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7NkJBSUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsV0FBVyxTQUFDLHFCQUFxQjs7eUJBN0JwQzs7U0FxQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFhY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBJcyBjdXJyZW50IHNsaWRlIGFjdGl2ZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0nKVxuICBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cbiAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XG4gIH1cblxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciBhZGRpbmcgYSBuZXcgc2xpZGUgaW5zdGFuY2UgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIHJlbW92aW5nIG9mIHRoaXMgc2xpZGUgaW5zdGFuY2UgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcbiAgfVxufVxuIl19