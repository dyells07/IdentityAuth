/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
/* tslint:enable */
export class SortableComponent {
    /**
     * @param {?} transfer
     */
    constructor(transfer) {
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
            .subscribe((item) => this.onDrop(item));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._items = value;
        const /** @type {?} */ out = this.items.map((x) => x.initData);
        this.onChanged(out);
        this.onChange.emit(out);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        const /** @type {?} */ dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        let /** @type {?} */ newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((x, i) => i !== item.i);
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map((x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    /**
     * @return {?}
     */
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>  
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SortableComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
SortableComponent.ctorParameters = () => [
    { type: DraggableItemService, },
];
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
function SortableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SortableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SortableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SortableComponent.propDecorators;
    /** @type {?} */
    SortableComponent.globalZoneIndex;
    /**
     * field name if input array consists of objects
     * @type {?}
     */
    SortableComponent.prototype.fieldName;
    /**
     * class name for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperClass;
    /**
     * style object for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperStyle;
    /**
     * class name for item
     * @type {?}
     */
    SortableComponent.prototype.itemClass;
    /**
     * style object for item
     * @type {?}
     */
    SortableComponent.prototype.itemStyle;
    /**
     * class name for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveClass;
    /**
     * style object for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveStyle;
    /**
     * class name for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderClass;
    /**
     * style object for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderStyle;
    /**
     * placeholder item which will be shown if collection is empty
     * @type {?}
     */
    SortableComponent.prototype.placeholderItem;
    /**
     * used to specify a custom item template. Template variables: item and index;
     * @type {?}
     */
    SortableComponent.prototype.itemTemplate;
    /**
     * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
     *  Returns new items collection as a payload.
     * @type {?}
     */
    SortableComponent.prototype.onChange;
    /** @type {?} */
    SortableComponent.prototype.showPlaceholder;
    /** @type {?} */
    SortableComponent.prototype.activeItem;
    /** @type {?} */
    SortableComponent.prototype.onTouched;
    /** @type {?} */
    SortableComponent.prototype.onChanged;
    /** @type {?} */
    SortableComponent.prototype.transfer;
    /** @type {?} */
    SortableComponent.prototype.currentZoneIndex;
    /** @type {?} */
    SortableComponent.prototype._items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS8iLCJzb3VyY2VzIjpbInNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdoRTtBQTZDQSxNQUFNOzs7O0lBaUVKLFlBQVksUUFBOEI7Ozs7NEJBM0RsQixFQUFFOzs7OzRCQUd5QixFQUFFOzs7O3lCQUdoQyxFQUFFOzs7O3lCQUd5QixFQUFFOzs7OytCQUd2QixFQUFFOzs7OytCQUd5QixFQUFFOzs7O2dDQUc1QixFQUFFOzs7O2dDQUd5QixFQUFFOzs7OytCQUc5QixFQUFFOzs7Ozt3QkFVYSxJQUFJLFlBQVksRUFBUzsrQkFFakQsS0FBSzswQkFDVixDQUFDLENBQUM7O3lCQWNFLFFBQVEsQ0FBQyxTQUFTOzt5QkFFbEIsUUFBUSxDQUFDLFNBQVM7UUFPakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRO2FBQ1YsYUFBYSxFQUFFO2FBQ2YsU0FBUyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7O0lBMUJELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHVCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7Ozs7Ozs7SUFtQkQsZUFBZSxDQUNiLEtBQWdCLEVBQ2hCLElBQWtCLEVBQ2xCLENBQVM7UUFFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3RCLEtBQUs7WUFDTCxJQUFJO1lBQ0osQ0FBQztZQUNELFlBQVksRUFBRSxDQUFDO1lBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDckMsQ0FBQyxDQUFDO0tBQ0o7Ozs7OztJQUVELGNBQWMsQ0FBQyxLQUFnQixFQUFFLENBQVM7UUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUM7U0FDUjtRQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2Qix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2xCLENBQUM7O1FBR0YscUJBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUV6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFFBQVEsR0FBRztnQkFDVCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJO2dCQUNiLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEMsQ0FBQztTQUNIO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBRU4sUUFBUSxHQUFHO2dCQUNULEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsUUFBUSxDQUFDLElBQUk7Z0JBQ2IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWdCO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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S0FBSzswQkFHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSztpQ0FHTCxLQUFLO2lDQUdMLEtBQUs7Z0NBR0wsS0FBSzs2QkFJTCxLQUFLO3lCQU1MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuPGRpdlxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIlxuICAgIChkcmFnb3Zlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgIChkcm9wKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAobW91c2VsZWF2ZSk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPlxuICA8ZGl2XG4gICAgICAgICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc1wiXG4gICAgICAgIFtuZ1N0eWxlXT1cInBsYWNlaG9sZGVyU3R5bGVcIlxuICAgICAgICAoZHJhZ292ZXIpPVwib25JdGVtRHJhZ292ZXIoJGV2ZW50LCAwKVwiXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgPnt7cGxhY2Vob2xkZXJJdGVtfX08L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIlxuICAgICAgICBbbmdDbGFzc109XCJbIGl0ZW1DbGFzcywgaSA9PT0gYWN0aXZlSXRlbSA/IGl0ZW1BY3RpdmVDbGFzcyA6ICcnIF1cIlxuICAgICAgICBbbmdTdHlsZV09XCJnZXRJdGVtU3R5bGUoaSA9PT0gYWN0aXZlSXRlbSlcIlxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgKGRyYWdzdGFydCk9XCJvbkl0ZW1EcmFnc3RhcnQoJGV2ZW50LCBpdGVtLCBpKVwiXG4gICAgICAgIChkcmFnZW5kKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgaSlcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgICAgICBhcmlhLWRyb3BlZmZlY3Q9XCJtb3ZlXCJcbiAgICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImkgPT09IGFjdGl2ZUl0ZW1cIlxuICAgID48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlIHx8IGRlZkl0ZW1UZW1wbGF0ZVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aXRlbTppdGVtLCBpbmRleDogaX1cIj48L25nLXRlbXBsYXRlPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmSXRlbVRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPnt7aXRlbS52YWx1ZX19PC9uZy10ZW1wbGF0ZT4gIFxuYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3J0YWJsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgZ2xvYmFsWm9uZUluZGV4ID0gMDtcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xuICBASW5wdXQoKSBmaWVsZE5hbWU6IHN0cmluZztcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cbiAgQElucHV0KCkgaXRlbVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcblxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogZmlyZWQgb24gYXJyYXkgY2hhbmdlIChyZW9yZGVyaW5nLCBpbnNlcnQsIHJlbW92ZSksIHNhbWUgYXMgPGNvZGU+bmdNb2RlbENoYW5nZTwvY29kZT4uXG4gICAqICBSZXR1cm5zIG5ldyBpdGVtcyBjb2xsZWN0aW9uIGFzIGEgcGF5bG9hZC5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XG4gIGFjdGl2ZUl0ZW0gPSAtMTtcblxuICBnZXQgaXRlbXMoKTogU29ydGFibGVJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyh2YWx1ZTogU29ydGFibGVJdGVtW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIGNvbnN0IG91dCA9IHRoaXMuaXRlbXMubWFwKCh4OiBTb3J0YWJsZUl0ZW0pID0+IHguaW5pdERhdGEpO1xuICAgIHRoaXMub25DaGFuZ2VkKG91dCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG91dCk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgb25DaGFuZ2VkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcHJpdmF0ZSB0cmFuc2ZlcjogRHJhZ2dhYmxlSXRlbVNlcnZpY2U7XG4gIHByaXZhdGUgY3VycmVudFpvbmVJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9pdGVtczogU29ydGFibGVJdGVtW107XG5cbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XG4gICAgdGhpcy50cmFuc2ZlciA9IHRyYW5zZmVyO1xuICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCA9IFNvcnRhYmxlQ29tcG9uZW50Lmdsb2JhbFpvbmVJbmRleCsrO1xuICAgIHRoaXMudHJhbnNmZXJcbiAgICAgIC5vbkNhcHR1cmVJdGVtKClcbiAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IERyYWdnYWJsZUl0ZW0pID0+IHRoaXMub25Ecm9wKGl0ZW0pKTtcbiAgfVxuXG4gIG9uSXRlbURyYWdzdGFydChcbiAgICBldmVudDogRHJhZ0V2ZW50LFxuICAgIGl0ZW06IFNvcnRhYmxlSXRlbSxcbiAgICBpOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtLFxuICAgICAgaSxcbiAgICAgIGluaXRpYWxJbmRleDogaSxcbiAgICAgIGxhc3Rab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25JdGVtRHJhZ292ZXIoZXZlbnQ6IERyYWdFdmVudCwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcbiAgICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XG4gICAgfSBlbHNlIGlmIChkcmFnSXRlbS5pID4gaSkge1xuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoaSwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXG4gICAgICBuZXdBcnJheSA9IFtcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgwLCBkcmFnSXRlbS5pKSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGkgKyAxKVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcyA9IG5ld0FycmF5O1xuICAgIGRyYWdJdGVtLmkgPSBpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGk7XG4gICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gIH1cblxuICBjYW5jZWxFdmVudChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaXRlbSAmJlxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcbiAgICAgIGl0ZW0ubGFzdFpvbmVJbmRleCA9PT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4XG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXG4gICAgICAgICh4OiBTb3J0YWJsZUl0ZW0sIGk6IG51bWJlcikgPT4gaSAhPT0gaXRlbS5pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKHVuZGVmaW5lZCk7XG4gIH1cblxuICByZXNldEFjdGl2ZUl0ZW0oZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IC0xO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VkID0gY2FsbGJhY2s7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHRoaXMuaXRlbXMgPSB2YWx1ZS5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PiAoe1xuICAgICAgICBpZDogaSxcbiAgICAgICAgaW5pdERhdGE6IHgsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpZWxkTmFtZSA/IHhbdGhpcy5maWVsZE5hbWVdIDogeFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9ICF0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBnZXRJdGVtU3R5bGUoaXNBY3RpdmU6IGJvb2xlYW4pOiB7fSB7XG4gICAgcmV0dXJuIGlzQWN0aXZlXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcbiAgICAgIDogdGhpcy5pdGVtU3R5bGU7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBpbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGl0IGlzIG5lY2Vzc2FyeSBmb3IgbW96aWxsYVxuICAgIC8vIGRhdGEgdHlwZSBzaG91bGQgYmUgJ1RleHQnIGluc3RlYWQgb2YgJ3RleHQvcGxhaW4nIHRvIGtlZXAgY29tcGF0aWJpbGl0eVxuICAgIC8vIHdpdGggSUVcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTb3J0YWJsZUl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBpbml0RGF0YTogYW55O1xufVxuIl19