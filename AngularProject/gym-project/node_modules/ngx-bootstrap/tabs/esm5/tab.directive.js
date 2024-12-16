/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
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
export { TabDirective };
function TabDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabDirective.propDecorators;
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element
     * @type {?}
     */
    TabDirective.prototype.id;
    /**
     * if true tab can not be activated
     * @type {?}
     */
    TabDirective.prototype.disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.select;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed, $event:Tab equals to instance of removed tab
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /** @type {?} */
    TabDirective.prototype._active;
    /** @type {?} */
    TabDirective.prototype._customClass;
    /** @type {?} */
    TabDirective.prototype.elementRef;
    /** @type {?} */
    TabDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQStFbkQsc0JBQ0UsTUFBdUIsRUFDaEIsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7Ozs7c0JBakI4QixJQUFJLFlBQVksRUFBRTs7Ozt3QkFFaEIsSUFBSSxZQUFZLEVBQUU7Ozs7dUJBRW5CLElBQUksWUFBWSxFQUFFO3dCQUV4QixJQUFJO1FBYTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzBCQXZFRyxxQ0FBVzs7Ozs7O1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Ozs7OztRQUczQixVQUFnQixXQUFtQjtZQUFuQyxpQkFjQztZQWJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFnQjtvQkFDbkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ3BFLENBQUMsQ0FBQzthQUNKO1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFnQjtvQkFDbkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ2pFLENBQUMsQ0FBQzthQUNKO1NBQ0Y7Ozs7MEJBS0csZ0NBQU07Ozs7OztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7Ozs7UUFHdEIsVUFBVyxNQUFlO1lBQTFCLGlCQW9CQztZQW5CQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQzthQUNSO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztpQkFDdkI7Z0JBRUQsTUFBTSxDQUFDO2FBQ1I7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFpQjtnQkFDekMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNwQjthQUNGLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBMEJELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNqQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDL0Q7O2dCQTVGRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzs7O2dCQUY1QixlQUFlO2dCQUh0QixVQUFVO2dCQUNWLFNBQVM7Ozs0QkFPUixLQUFLO3VCQUVMLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7NkJBRUwsS0FBSzs4QkFFTCxLQUFLO2dDQUVMLEtBQUs7MkJBc0JMLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7MkJBNEJMLE1BQU07NkJBRU4sTUFBTTs0QkFFTixNQUFNOzZCQUVOLFdBQVcsU0FBQyxnQkFBZ0I7O3VCQW5GL0I7O1NBZWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0YWIsIFt0YWJdJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiB0YWIgaWQuIFRoZSBzYW1lIGlkIHdpdGggc3VmZml4ICctbGluaycgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyAmbHQ7bGkmZ3Q7IGVsZW1lbnQgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcbiAgfVxuXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3MgPyBjdXN0b21DbGFzcy50cmltKCkgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcbiAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQsICRldmVudDpUYWIgZXF1YWxzIHRvIGluc3RhbmNlIG9mIHJlbW92ZWQgdGFiICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2N1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzLCB7IHJlc2VsZWN0OiBmYWxzZSwgZW1pdDogZmFsc2UgfSk7XG4gIH1cbn1cbiJdfQ==