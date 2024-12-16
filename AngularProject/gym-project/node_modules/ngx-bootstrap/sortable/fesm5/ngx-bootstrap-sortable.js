import { Injectable, Component, Input, Output, EventEmitter, forwardRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { __spread } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableComponent = /** @class */ (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            var /** @type {?} */ out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragstart = /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragover = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var /** @type {?} */ dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = __spread(this.items.slice(0, i), [
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableComponent.prototype.onDrop = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.resetActiveItem = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onChanged = callback;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    SortableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map(function (x, i) {
                return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                });
            });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    /**
     * @return {?}
     */
    SortableComponent.prototype.updatePlaceholderState = /**
     * @return {?}
     */
    function () {
        this.showPlaceholder = !this._items.length;
    };
    /**
     * @param {?} isActive
     * @return {?}
     */
    SortableComponent.prototype.getItemStyle = /**
     * @param {?} isActive
     * @return {?}
     */
    function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.initDragstartEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService, },
    ]; };
    SortableComponent.propDecorators = {
        "fieldName": [{ type: Input },],
        "wrapperClass": [{ type: Input },],
        "wrapperStyle": [{ type: Input },],
        "itemClass": [{ type: Input },],
        "itemStyle": [{ type: Input },],
        "itemActiveClass": [{ type: Input },],
        "itemActiveStyle": [{ type: Input },],
        "placeholderClass": [{ type: Input },],
        "placeholderStyle": [{ type: Input },],
        "placeholderItem": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "onChange": [{ type: Output },],
    };
    return SortableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    SortableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SortableComponent],
                    imports: [CommonModule],
                    exports: [SortableComponent]
                },] }
    ];
    return SortableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { SortableModule, SortableComponent, DraggableItemService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zb3J0YWJsZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9zb3J0YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSXRlbVNlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdnYWJsZUl0ZW06IERyYWdnYWJsZUl0ZW07XG5cbiAgcHJpdmF0ZSBvbkNhcHR1cmU6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4gPSBuZXcgU3ViamVjdDxEcmFnZ2FibGVJdGVtPigpO1xuXG4gIGRyYWdTdGFydChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldEl0ZW0oKTogRHJhZ2dhYmxlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0ge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gb3ZlclpvbmVJbmRleCkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtLmxhc3Rab25lSW5kZXggPSB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ID0gb3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMub25DYXB0dXJlLm5leHQodGhpcy5kcmFnZ2FibGVJdGVtKTtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZHJhZ2dhYmxlSXRlbSwge1xuICAgICAgICBvdmVyWm9uZUluZGV4LFxuICAgICAgICBpOiBuZXdJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIG9uQ2FwdHVyZUl0ZW0oKTogU3ViamVjdDxEcmFnZ2FibGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMub25DYXB0dXJlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuPGRpdlxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIlxuICAgIChkcmFnb3Zlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgIChkcm9wKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAobW91c2VsZWF2ZSk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPlxuICA8ZGl2XG4gICAgICAgICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc1wiXG4gICAgICAgIFtuZ1N0eWxlXT1cInBsYWNlaG9sZGVyU3R5bGVcIlxuICAgICAgICAoZHJhZ292ZXIpPVwib25JdGVtRHJhZ292ZXIoJGV2ZW50LCAwKVwiXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgPnt7cGxhY2Vob2xkZXJJdGVtfX08L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIlxuICAgICAgICBbbmdDbGFzc109XCJbIGl0ZW1DbGFzcywgaSA9PT0gYWN0aXZlSXRlbSA/IGl0ZW1BY3RpdmVDbGFzcyA6ICcnIF1cIlxuICAgICAgICBbbmdTdHlsZV09XCJnZXRJdGVtU3R5bGUoaSA9PT0gYWN0aXZlSXRlbSlcIlxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgKGRyYWdzdGFydCk9XCJvbkl0ZW1EcmFnc3RhcnQoJGV2ZW50LCBpdGVtLCBpKVwiXG4gICAgICAgIChkcmFnZW5kKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgaSlcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgICAgICBhcmlhLWRyb3BlZmZlY3Q9XCJtb3ZlXCJcbiAgICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImkgPT09IGFjdGl2ZUl0ZW1cIlxuICAgID48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlIHx8IGRlZkl0ZW1UZW1wbGF0ZVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aXRlbTppdGVtLCBpbmRleDogaX1cIj48L25nLXRlbXBsYXRlPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmSXRlbVRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPnt7aXRlbS52YWx1ZX19PC9uZy10ZW1wbGF0ZT4gIFxuYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3J0YWJsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgZ2xvYmFsWm9uZUluZGV4ID0gMDtcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xuICBASW5wdXQoKSBmaWVsZE5hbWU6IHN0cmluZztcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cbiAgQElucHV0KCkgaXRlbVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcblxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogZmlyZWQgb24gYXJyYXkgY2hhbmdlIChyZW9yZGVyaW5nLCBpbnNlcnQsIHJlbW92ZSksIHNhbWUgYXMgPGNvZGU+bmdNb2RlbENoYW5nZTwvY29kZT4uXG4gICAqICBSZXR1cm5zIG5ldyBpdGVtcyBjb2xsZWN0aW9uIGFzIGEgcGF5bG9hZC5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XG4gIGFjdGl2ZUl0ZW0gPSAtMTtcblxuICBnZXQgaXRlbXMoKTogU29ydGFibGVJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyh2YWx1ZTogU29ydGFibGVJdGVtW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIGNvbnN0IG91dCA9IHRoaXMuaXRlbXMubWFwKCh4OiBTb3J0YWJsZUl0ZW0pID0+IHguaW5pdERhdGEpO1xuICAgIHRoaXMub25DaGFuZ2VkKG91dCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG91dCk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgb25DaGFuZ2VkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcHJpdmF0ZSB0cmFuc2ZlcjogRHJhZ2dhYmxlSXRlbVNlcnZpY2U7XG4gIHByaXZhdGUgY3VycmVudFpvbmVJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9pdGVtczogU29ydGFibGVJdGVtW107XG5cbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XG4gICAgdGhpcy50cmFuc2ZlciA9IHRyYW5zZmVyO1xuICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCA9IFNvcnRhYmxlQ29tcG9uZW50Lmdsb2JhbFpvbmVJbmRleCsrO1xuICAgIHRoaXMudHJhbnNmZXJcbiAgICAgIC5vbkNhcHR1cmVJdGVtKClcbiAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IERyYWdnYWJsZUl0ZW0pID0+IHRoaXMub25Ecm9wKGl0ZW0pKTtcbiAgfVxuXG4gIG9uSXRlbURyYWdzdGFydChcbiAgICBldmVudDogRHJhZ0V2ZW50LFxuICAgIGl0ZW06IFNvcnRhYmxlSXRlbSxcbiAgICBpOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtLFxuICAgICAgaSxcbiAgICAgIGluaXRpYWxJbmRleDogaSxcbiAgICAgIGxhc3Rab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25JdGVtRHJhZ292ZXIoZXZlbnQ6IERyYWdFdmVudCwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcbiAgICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XG4gICAgfSBlbHNlIGlmIChkcmFnSXRlbS5pID4gaSkge1xuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoaSwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXG4gICAgICBuZXdBcnJheSA9IFtcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgwLCBkcmFnSXRlbS5pKSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGkgKyAxKVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcyA9IG5ld0FycmF5O1xuICAgIGRyYWdJdGVtLmkgPSBpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGk7XG4gICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gIH1cblxuICBjYW5jZWxFdmVudChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaXRlbSAmJlxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcbiAgICAgIGl0ZW0ubGFzdFpvbmVJbmRleCA9PT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4XG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXG4gICAgICAgICh4OiBTb3J0YWJsZUl0ZW0sIGk6IG51bWJlcikgPT4gaSAhPT0gaXRlbS5pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKHVuZGVmaW5lZCk7XG4gIH1cblxuICByZXNldEFjdGl2ZUl0ZW0oZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IC0xO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VkID0gY2FsbGJhY2s7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHRoaXMuaXRlbXMgPSB2YWx1ZS5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PiAoe1xuICAgICAgICBpZDogaSxcbiAgICAgICAgaW5pdERhdGE6IHgsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpZWxkTmFtZSA/IHhbdGhpcy5maWVsZE5hbWVdIDogeFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9ICF0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBnZXRJdGVtU3R5bGUoaXNBY3RpdmU6IGJvb2xlYW4pOiB7fSB7XG4gICAgcmV0dXJuIGlzQWN0aXZlXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcbiAgICAgIDogdGhpcy5pdGVtU3R5bGU7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBpbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGl0IGlzIG5lY2Vzc2FyeSBmb3IgbW96aWxsYVxuICAgIC8vIGRhdGEgdHlwZSBzaG91bGQgYmUgJ1RleHQnIGluc3RlYWQgb2YgJ3RleHQvcGxhaW4nIHRvIGtlZXAgY29tcGF0aWJpbGl0eVxuICAgIC8vIHdpdGggSUVcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTb3J0YWJsZUl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBpbml0RGF0YTogYW55O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTb3J0YWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbU29ydGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNvcnRhYmxlTW9kdWxlLCBwcm92aWRlcnM6IFtEcmFnZ2FibGVJdGVtU2VydmljZV0gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7eUJBUThDLElBQUksT0FBTyxFQUFpQjs7Ozs7O0lBRXhFLHdDQUFTOzs7O0lBQVQsVUFBVSxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQUVELHNDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7O0lBRUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxhQUFxQixFQUFFLFFBQWdCO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN6RCxhQUFhLGVBQUE7Z0JBQ2IsQ0FBQyxFQUFFLFFBQVE7YUFDWixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Z0JBOUJGLFVBQVU7OytCQUpYOzs7Ozs7OztJQzJIRSwyQkFBWSxRQUE4QjtRQUExQyxpQkFNQzs7Ozs0QkFqRXVCLEVBQUU7Ozs7NEJBR3lCLEVBQUU7Ozs7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