/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export class TabDirective {
    /**
     * @param {?} tabset
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(tabset, elementRef, renderer) {
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
    /**
     * if set, will be added to the tab's class attribute. Multiple classes are supported.
     * @return {?}
     */
    get customClass() {
        return this._customClass;
    }
    /**
     * @param {?} customClass
     * @return {?}
     */
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : null;
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /**
     * tab active state toggle
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
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
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'tab, [tab]' },] }
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: TabsetComponent, },
    { type: ElementRef, },
    { type: Renderer2, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE1BQU07Ozs7OztJQTRFSixZQUNFLE1BQXVCLEVBQ2hCLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFROzs7O3NCQWpCOEIsSUFBSSxZQUFZLEVBQUU7Ozs7d0JBRWhCLElBQUksWUFBWSxFQUFFOzs7O3VCQUVuQixJQUFJLFlBQVksRUFBRTt3QkFFeEIsSUFBSTtRQWE1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7Ozs7UUF2RUcsV0FBVztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7Ozs7SUFHM0IsSUFBSSxXQUFXLENBQUMsV0FBbUI7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUU1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2pFLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O1FBS0csTUFBTTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7Ozs7SUFHdEIsSUFBSSxNQUFNLENBQUMsTUFBZTtRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDO1NBQ1I7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7YUFDdkI7WUFFRCxNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUM3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDcEI7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQTBCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ2pDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDL0Q7OztZQTVGRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzs7O1lBRjVCLGVBQWU7WUFIdEIsVUFBVTtZQUNWLFNBQVM7Ozt3QkFPUixLQUFLO21CQUVMLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7eUJBRUwsS0FBSzswQkFFTCxLQUFLOzRCQUVMLEtBQUs7dUJBc0JMLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7dUJBNEJMLE1BQU07eUJBRU4sTUFBTTt3QkFFTixNQUFNO3lCQUVOLFdBQVcsU0FBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAndGFiLCBbdGFiXScgfSlcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiB0YWIgaGVhZGVyIHRleHQgKi9cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICAvKiogdGFiIGlkLiBUaGUgc2FtZSBpZCB3aXRoIHN1ZmZpeCAnLWxpbmsnIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgJmx0O2xpJmd0OyBlbGVtZW50ICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xuICBASW5wdXQoKSByZW1vdmFibGU6IGJvb2xlYW47XG4gIC8qKiBpZiBzZXQsIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRhYidzIGNsYXNzIGF0dHJpYnV0ZS4gTXVsdGlwbGUgY2xhc3NlcyBhcmUgc3VwcG9ydGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ2xhc3M7XG4gIH1cblxuICBzZXQgY3VzdG9tQ2xhc3MoY3VzdG9tQ2xhc3M6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzID8gY3VzdG9tQ2xhc3MudHJpbSgpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgPT09IGFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuZGlzYWJsZWQgJiYgYWN0aXZlKSB8fCAhYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdC5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzKTtcbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKHRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XG4gICAgICBpZiAodGFiICE9PSB0aGlzKSB7XG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGluYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBkZXNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBpbnN0YW5jZSBvZiByZW1vdmVkIHRhYiAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGhlYWRpbmdSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIHRhYnNldDogVGFic2V0Q29tcG9uZW50O1xuICBwcm90ZWN0ZWQgX2FjdGl2ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhYnNldDogVGFic2V0Q29tcG9uZW50LFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMudGFic2V0ID0gdGFic2V0O1xuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZhYmxlID0gdGhpcy5yZW1vdmFibGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcywgeyByZXNlbGVjdDogZmFsc2UsIGVtaXQ6IGZhbHNlIH0pO1xuICB9XG59XG4iXX0=