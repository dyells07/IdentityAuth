/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DraggableItemService {
    constructor() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    dragStart(item) {
        this.draggableItem = item;
    }
    /**
     * @return {?}
     */
    getItem() {
        return this.draggableItem;
    }
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    /**
     * @return {?}
     */
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.decorators = [
    { type: Injectable }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsTUFBTTs7eUJBR3dDLElBQUksT0FBTyxFQUFpQjs7Ozs7O0lBRXhFLFNBQVMsQ0FBQyxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQUVELE9BQU87UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQXFCLEVBQUUsUUFBZ0I7UUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekQsYUFBYTtnQkFDYixDQUFDLEVBQUUsUUFBUTthQUNaLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7OztZQTlCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSXRlbVNlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdnYWJsZUl0ZW06IERyYWdnYWJsZUl0ZW07XG5cbiAgcHJpdmF0ZSBvbkNhcHR1cmU6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4gPSBuZXcgU3ViamVjdDxEcmFnZ2FibGVJdGVtPigpO1xuXG4gIGRyYWdTdGFydChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldEl0ZW0oKTogRHJhZ2dhYmxlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0ge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gb3ZlclpvbmVJbmRleCkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtLmxhc3Rab25lSW5kZXggPSB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ID0gb3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMub25DYXB0dXJlLm5leHQodGhpcy5kcmFnZ2FibGVJdGVtKTtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZHJhZ2dhYmxlSXRlbSwge1xuICAgICAgICBvdmVyWm9uZUluZGV4LFxuICAgICAgICBpOiBuZXdJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIG9uQ2FwdHVyZUl0ZW0oKTogU3ViamVjdDxEcmFnZ2FibGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMub25DYXB0dXJlO1xuICB9XG59XG4iXX0=