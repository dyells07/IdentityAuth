/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: Injectable }
    ];
    return DraggableItemService;
}());
export { DraggableItemService };
function DraggableItemService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DraggableItemService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DraggableItemService.ctorParameters;
    /** @type {?} */
    DraggableItemService.prototype.draggableItem;
    /** @type {?} */
    DraggableItemService.prototype.onCapture;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozt5QkFPZSxJQUFJLE9BQU8sRUFBaUI7Ozs7OztJQUV4RSx3Q0FBUzs7OztJQUFULFVBQVUsSUFBbUI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7Ozs7SUFFRCxzQ0FBTzs7O0lBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7O0lBRUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxhQUFxQixFQUFFLFFBQWdCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pELGFBQWEsZUFBQTtnQkFDYixDQUFDLEVBQUUsUUFBUTthQUNaLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Z0JBOUJGLFVBQVU7OytCQUpYOztTQUthLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUl0ZW1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnZ2FibGVJdGVtOiBEcmFnZ2FibGVJdGVtO1xuXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcblxuICBkcmFnU3RhcnQoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XG4gIH1cblxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBjYXB0dXJlSXRlbShvdmVyWm9uZUluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpOiBEcmFnZ2FibGVJdGVtIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXggIT09IG92ZXJab25lSW5kZXgpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5sYXN0Wm9uZUluZGV4ID0gdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCA9IG92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLm9uQ2FwdHVyZS5uZXh0KHRoaXMuZHJhZ2dhYmxlSXRlbSk7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRyYWdnYWJsZUl0ZW0sIHtcbiAgICAgICAgb3ZlclpvbmVJbmRleCxcbiAgICAgICAgaTogbmV3SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBvbkNhcHR1cmVJdGVtKCk6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLm9uQ2FwdHVyZTtcbiAgfVxufVxuIl19