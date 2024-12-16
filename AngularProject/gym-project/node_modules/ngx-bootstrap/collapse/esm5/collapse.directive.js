/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    CollapseDirective.propDecorators = {
        "collapsed": [{ type: Output },],
        "expanded": [{ type: Output },],
        "display": [{ type: HostBinding, args: ['style.display',] },],
        "isExpanded": [{ type: HostBinding, args: ['class.in',] }, { type: HostBinding, args: ['class.show',] }, { type: HostBinding, args: ['attr.aria-expanded',] },],
        "isCollapsed": [{ type: HostBinding, args: ['attr.aria-hidden',] },],
        "isCollapse": [{ type: HostBinding, args: ['class.collapse',] },],
        "isCollapsing": [{ type: HostBinding, args: ['class.collapsing',] },],
        "collapse": [{ type: Input },],
    };
    return CollapseDirective;
}());
export { CollapseDirective };
function CollapseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CollapseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CollapseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CollapseDirective.propDecorators;
    /**
     * This event fires as soon as content collapses
     * @type {?}
     */
    CollapseDirective.prototype.collapsed;
    /**
     * This event fires as soon as content becomes visible
     * @type {?}
     */
    CollapseDirective.prototype.expanded;
    /** @type {?} */
    CollapseDirective.prototype.display;
    /** @type {?} */
    CollapseDirective.prototype.isExpanded;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsed;
    /** @type {?} */
    CollapseDirective.prototype.isCollapse;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsing;
    /** @type {?} */
    CollapseDirective.prototype._el;
    /** @type {?} */
    CollapseDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7SUF5Q3JCLDJCQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7eUJBN0J4QixJQUFJLFlBQVksRUFBRTs7Ozt3QkFHbkIsSUFBSSxZQUFZLEVBQUU7OzBCQU83QyxJQUFJOzsyQkFFOEIsS0FBSzs7MEJBRVIsSUFBSTs7NEJBRUEsS0FBSztLQWFnQjswQkFUakUsdUNBQVE7Ozs7UUFLWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7Ozs7a0JBUFksS0FBYztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O0lBU2hCLG1EQUFtRDs7Ozs7SUFDbkQsa0NBQU07Ozs7SUFBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtLQUNGO0lBRUQsc0NBQXNDOzs7OztJQUN0QyxnQ0FBSTs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7SUFFRCxnREFBZ0Q7Ozs7O0lBQ2hELGdDQUFJOzs7O0lBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixVQUFVLEVBQ1YsU0FBUyxDQUNWLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBZEMsVUFBVTtnQkFLVixTQUFTOzs7OEJBYVIsTUFBTTs2QkFHTixNQUFNOzRCQUVOLFdBQVcsU0FBQyxlQUFlOytCQUUzQixXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsWUFBWSxjQUN4QixXQUFXLFNBQUMsb0JBQW9CO2dDQUdoQyxXQUFXLFNBQUMsa0JBQWtCOytCQUU5QixXQUFXLFNBQUMsZ0JBQWdCO2lDQUU1QixXQUFXLFNBQUMsa0JBQWtCOzZCQUc5QixLQUFLOzs0QkF4Q1I7O1NBa0JhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IGFkZCBhbmltYXRpb25zIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvOTk0NyBzb2x2ZWRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGNvbGxhcHNlcyAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXk6IHN0cmluZztcbiAgLy8gc2hvd25cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgaXNFeHBhbmRlZCA9IHRydWU7XG4gIC8vIGhpZGRlblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAvLyBzdGFsZSBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNlJykgaXNDb2xsYXBzZSA9IHRydWU7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNpbmcnKSBpc0NvbGxhcHNpbmcgPSBmYWxzZTtcblxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBnZXQgY29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbGxhcHNlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgc2hvdyBjb2xsYXBzZWQgY29udGVudCAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvLyB0aGlzLmhlaWdodCA9ICdhdXRvJztcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ292ZXJmbG93JyxcbiAgICAgICd2aXNpYmxlJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xuICB9XG59XG4iXX0=