(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/sortable', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].sortable = {}),global.ng.core,global.rxjs,global.ng.forms,global.ng.common));
}(this, (function (exports,core,rxjs,forms,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DraggableItemService = (function () {
        function DraggableItemService() {
            this.onCapture = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        return DraggableItemService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableComponent = (function () {
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
            this.onChange = new core.EventEmitter();
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
             */ function () {
                return this._items;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'bs-sortable',
                        exportAs: 'bs-sortable',
                        template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return SortableComponent; }),
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        SortableComponent.ctorParameters = function () {
            return [
                { type: DraggableItemService, },
            ];
        };
        SortableComponent.propDecorators = {
            "fieldName": [{ type: core.Input },],
            "wrapperClass": [{ type: core.Input },],
            "wrapperStyle": [{ type: core.Input },],
            "itemClass": [{ type: core.Input },],
            "itemStyle": [{ type: core.Input },],
            "itemActiveClass": [{ type: core.Input },],
            "itemActiveStyle": [{ type: core.Input },],
            "placeholderClass": [{ type: core.Input },],
            "placeholderStyle": [{ type: core.Input },],
            "placeholderItem": [{ type: core.Input },],
            "itemTemplate": [{ type: core.Input },],
            "onChange": [{ type: core.Output },],
        };
        return SortableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableModule = (function () {
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
            { type: core.NgModule, args: [{
                        declarations: [SortableComponent],
                        imports: [common.CommonModule],
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

    exports.SortableModule = SortableModule;
    exports.SortableComponent = SortableComponent;
    exports.DraggableItemService = DraggableItemService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zb3J0YWJsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvc29ydGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL3NvcnRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUl0ZW1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnZ2FibGVJdGVtOiBEcmFnZ2FibGVJdGVtO1xuXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcblxuICBkcmFnU3RhcnQoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XG4gIH1cblxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBjYXB0dXJlSXRlbShvdmVyWm9uZUluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpOiBEcmFnZ2FibGVJdGVtIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXggIT09IG92ZXJab25lSW5kZXgpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5sYXN0Wm9uZUluZGV4ID0gdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCA9IG92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLm9uQ2FwdHVyZS5uZXh0KHRoaXMuZHJhZ2dhYmxlSXRlbSk7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRyYWdnYWJsZUl0ZW0sIHtcbiAgICAgICAgb3ZlclpvbmVJbmRleCxcbiAgICAgICAgaTogbmV3SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBvbkNhcHR1cmVJdGVtKCk6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLm9uQ2FwdHVyZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtc29ydGFibGUnLFxuICBleHBvcnRBczogJ2JzLXNvcnRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbjxkaXZcbiAgICBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NcIlxuICAgIFtuZ1N0eWxlXT1cIndyYXBwZXJTdHlsZVwiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICAoZHJhZ292ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJvcCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgKG1vdXNlbGVhdmUpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIj5cbiAgPGRpdlxuICAgICAgICAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NcIlxuICAgICAgICBbbmdTdHlsZV09XCJwbGFjZWhvbGRlclN0eWxlXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgMClcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgID57e3BsYWNlaG9sZGVySXRlbX19PC9kaXY+XG4gICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiWyBpdGVtQ2xhc3MsIGkgPT09IGFjdGl2ZUl0ZW0gPyBpdGVtQWN0aXZlQ2xhc3MgOiAnJyBdXCJcbiAgICAgICAgW25nU3R5bGVdPVwiZ2V0SXRlbVN0eWxlKGkgPT09IGFjdGl2ZUl0ZW0pXCJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgIChkcmFnc3RhcnQpPVwib25JdGVtRHJhZ3N0YXJ0KCRldmVudCwgaXRlbSwgaSlcIlxuICAgICAgICAoZHJhZ2VuZCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIGkpXCJcbiAgICAgICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgYXJpYS1kcm9wZWZmZWN0PVwibW92ZVwiXG4gICAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJpID09PSBhY3RpdmVJdGVtXCJcbiAgICA+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZSB8fCBkZWZJdGVtVGVtcGxhdGVcIlxuICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgaW5kZXg6IGl9XCI+PC9uZy10ZW1wbGF0ZT48L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2RlZkl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj57e2l0ZW0udmFsdWV9fTwvbmctdGVtcGxhdGU+ICBcbmAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU29ydGFibGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFpvbmVJbmRleCA9IDA7XG4gIC8qKiBmaWVsZCBuYW1lIGlmIGlucHV0IGFycmF5IGNvbnNpc3RzIG9mIG9iamVjdHMgKi9cbiAgQElucHV0KCkgZmllbGROYW1lOiBzdHJpbmc7XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGl0ZW1zIHdyYXBwZXIgKi9cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBhY3RpdmUgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQWN0aXZlQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBhY3RpdmUgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQWN0aXZlU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogcGxhY2Vob2xkZXIgaXRlbSB3aGljaCB3aWxsIGJlIHNob3duIGlmIGNvbGxlY3Rpb24gaXMgZW1wdHkgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJJdGVtID0gJyc7XG5cbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLiBUZW1wbGF0ZSB2YXJpYWJsZXM6IGl0ZW0gYW5kIGluZGV4OyAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIGZpcmVkIG9uIGFycmF5IGNoYW5nZSAocmVvcmRlcmluZywgaW5zZXJ0LCByZW1vdmUpLCBzYW1lIGFzIDxjb2RlPm5nTW9kZWxDaGFuZ2U8L2NvZGU+LlxuICAgKiAgUmV0dXJucyBuZXcgaXRlbXMgY29sbGVjdGlvbiBhcyBhIHBheWxvYWQuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIHNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xuICBhY3RpdmVJdGVtID0gLTE7XG5cbiAgZ2V0IGl0ZW1zKCk6IFNvcnRhYmxlSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXModmFsdWU6IFNvcnRhYmxlSXRlbVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICBjb25zdCBvdXQgPSB0aGlzLml0ZW1zLm1hcCgoeDogU29ydGFibGVJdGVtKSA9PiB4LmluaXREYXRhKTtcbiAgICB0aGlzLm9uQ2hhbmdlZChvdXQpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChvdXQpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIG9uQ2hhbmdlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIHByaXZhdGUgdHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlO1xuICBwcml2YXRlIGN1cnJlbnRab25lSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXRlbXM6IFNvcnRhYmxlSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zZmVyOiBEcmFnZ2FibGVJdGVtU2VydmljZSkge1xuICAgIHRoaXMudHJhbnNmZXIgPSB0cmFuc2ZlcjtcbiAgICB0aGlzLmN1cnJlbnRab25lSW5kZXggPSBTb3J0YWJsZUNvbXBvbmVudC5nbG9iYWxab25lSW5kZXgrKztcbiAgICB0aGlzLnRyYW5zZmVyXG4gICAgICAub25DYXB0dXJlSXRlbSgpXG4gICAgICAuc3Vic2NyaWJlKChpdGVtOiBEcmFnZ2FibGVJdGVtKSA9PiB0aGlzLm9uRHJvcChpdGVtKSk7XG4gIH1cblxuICBvbkl0ZW1EcmFnc3RhcnQoXG4gICAgZXZlbnQ6IERyYWdFdmVudCxcbiAgICBpdGVtOiBTb3J0YWJsZUl0ZW0sXG4gICAgaTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMudHJhbnNmZXIuZHJhZ1N0YXJ0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbSxcbiAgICAgIGksXG4gICAgICBpbml0aWFsSW5kZXg6IGksXG4gICAgICBsYXN0Wm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXgsXG4gICAgICBvdmVyWm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIG9uSXRlbURyYWdvdmVyKGV2ZW50OiBEcmFnRXZlbnQsIGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkcmFnSXRlbSA9IHRoaXMudHJhbnNmZXIuY2FwdHVyZUl0ZW0oXG4gICAgICB0aGlzLmN1cnJlbnRab25lSW5kZXgsXG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aFxuICAgICk7XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIGxldCBuZXdBcnJheTogYW55W10gPSBbXTtcblxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIG5ld0FycmF5ID0gW2RyYWdJdGVtLml0ZW1dO1xuICAgIH0gZWxzZSBpZiAoZHJhZ0l0ZW0uaSA+IGkpIHtcbiAgICAgIG5ld0FycmF5ID0gW1xuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIGkpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGRyYWdJdGVtLmkgKyAxKVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5kcmFnZ2VkSXRlbS5pIDwgaVxuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEsIGkgKyAxKSxcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcbiAgICBkcmFnSXRlbS5pID0gaTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpO1xuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgY2FuY2VsRXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkgfHwgIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkRyb3AoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGl0ZW0gJiZcbiAgICAgIGl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4ICYmXG4gICAgICBpdGVtLmxhc3Rab25lSW5kZXggPT09IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgICkge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKFxuICAgICAgICAoeDogU29ydGFibGVJdGVtLCBpOiBudW1iZXIpID0+IGkgIT09IGl0ZW0uaVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSh1bmRlZmluZWQpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAtMTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICB0aGlzLml0ZW1zID0gdmFsdWUubWFwKCh4OiBhbnksIGk6IG51bWJlcikgPT4gKHtcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIGluaXREYXRhOiB4LFxuICAgICAgICB2YWx1ZTogdGhpcy5maWVsZE5hbWUgPyB4W3RoaXMuZmllbGROYW1lXSA6IHhcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSAhdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0SXRlbVN0eWxlKGlzQWN0aXZlOiBib29sZWFuKToge30ge1xuICAgIHJldHVybiBpc0FjdGl2ZVxuICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW1TdHlsZSwgdGhpcy5pdGVtQWN0aXZlU3R5bGUpXG4gICAgICA6IHRoaXMuaXRlbVN0eWxlO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHByaXZhdGUgaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBpdCBpcyBuZWNlc3NhcnkgZm9yIG1vemlsbGFcbiAgICAvLyBkYXRhIHR5cGUgc2hvdWxkIGJlICdUZXh0JyBpbnN0ZWFkIG9mICd0ZXh0L3BsYWluJyB0byBrZWVwIGNvbXBhdGliaWxpdHlcbiAgICAvLyB3aXRoIElFXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCAncGxhY2Vob2xkZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU29ydGFibGVJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgaW5pdERhdGE6IGFueTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTb3J0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU29ydGFibGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1NvcnRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTb3J0YWJsZU1vZHVsZSwgcHJvdmlkZXJzOiBbRHJhZ2dhYmxlSXRlbVNlcnZpY2VdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQXVHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7QUMxSUQ7OzZCQVE4QyxJQUFJQSxZQUFPLEVBQWlCOzs7Ozs7UUFFeEUsd0NBQVM7Ozs7WUFBVCxVQUFVLElBQW1CO2dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUMzQjs7OztRQUVELHNDQUFPOzs7WUFBUDtnQkFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0I7Ozs7OztRQUVELDBDQUFXOzs7OztZQUFYLFVBQVksYUFBcUIsRUFBRSxRQUFnQjtnQkFDakQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsS0FBSyxhQUFhLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO29CQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUN6RCxhQUFhLGVBQUE7d0JBQ2IsQ0FBQyxFQUFFLFFBQVE7cUJBQ1osQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQjs7OztRQUVELDRDQUFhOzs7WUFBYjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7O29CQTlCRkMsZUFBVTs7bUNBSlg7Ozs7Ozs7O1FDMkhFLDJCQUFZLFFBQThCO1lBQTFDLGlCQU1DOzs7O2dDQWpFdUIsRUFBRTs7OztnQ0FHeUIsRUFBRTs7Ozs2QkFHaEMsRUFBRTs7Ozs2QkFHeUIsRUFBRTs7OzttQ0FHdkIsRUFBRTs7OzttQ0FHeUIsRUFBRTs7OztvQ0FHNUIsRUFBRTs7OztvQ0FHeUIsRUFBRTs7OzttQ0FHOUIsRUFBRTs7Ozs7NEJBVWEsSUFBSUMsaUJBQVksRUFBUzttQ0FFakQsS0FBSzs4QkFDVixDQUFDLENBQUM7OzZCQWNFLFFBQVEsQ0FBQyxTQUFTOzs2QkFFbEIsUUFBUSxDQUFDLFNBQVM7WUFPakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRO2lCQUNWLGFBQWEsRUFBRTtpQkFDZixTQUFTLENBQUMsVUFBQyxJQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDMUQ7UUExQkQsc0JBQUksb0NBQUs7OztnQkFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEI7Ozs7Z0JBRUQsVUFBVSxLQUFxQjtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQWUsSUFBSyxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUEsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6Qjs7O1dBUEE7Ozs7Ozs7UUEwQkQsMkNBQWU7Ozs7OztZQUFmLFVBQ0UsS0FBZ0IsRUFDaEIsSUFBa0IsRUFDbEIsQ0FBUztnQkFFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3RCLEtBQUssT0FBQTtvQkFDTCxJQUFJLE1BQUE7b0JBQ0osQ0FBQyxHQUFBO29CQUNELFlBQVksRUFBRSxDQUFDO29CQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO29CQUNwQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtpQkFDckMsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztRQUVELDBDQUFjOzs7OztZQUFkLFVBQWUsS0FBZ0IsRUFBRSxDQUFTO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDNUIsT0FBTztpQkFDUjtnQkFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDbEIsQ0FBQzs7Z0JBR0YscUJBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUN0QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVCO3FCQUFNLElBQUksUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pCLFFBQVEsWUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QixRQUFRLENBQUMsSUFBSTt1QkFDVixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNwQyxDQUFDO2lCQUNIO3FCQUFNOztvQkFFTCxRQUFRLFlBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDMUMsUUFBUSxDQUFDLElBQUk7dUJBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMzQixDQUFDO2lCQUNIO2dCQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN0QixRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDL0I7Ozs7O1FBRUQsdUNBQVc7Ozs7WUFBWCxVQUFZLEtBQWdCO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDdEMsT0FBTztpQkFDUjtnQkFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7Ozs7O1FBRUQsa0NBQU07Ozs7WUFBTixVQUFPLElBQW1CO2dCQUN4QixJQUNFLElBQUk7b0JBQ0osSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsZ0JBQWdCO29CQUM1QyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxnQkFDOUIsRUFBRTtvQkFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUM1QixVQUFDLENBQWUsRUFBRSxDQUFTLElBQUssT0FBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBQSxDQUM3QyxDQUFDO29CQUNGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDOzs7OztRQUVELDJDQUFlOzs7O1lBQWYsVUFBZ0IsS0FBZ0I7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdEI7Ozs7O1FBRUQsNENBQWdCOzs7O1lBQWhCLFVBQWlCLFFBQW9CO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUMzQjs7Ozs7UUFFRCw2Q0FBaUI7Ozs7WUFBakIsVUFBa0IsUUFBb0I7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzNCOzs7Ozs7UUFHRCxzQ0FBVTs7OztZQUFWLFVBQVcsS0FBWTtnQkFBdkIsaUJBWUM7Z0JBWEMsSUFBSSxLQUFLLEVBQUU7O29CQUVULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFTO3dCQUFLLFFBQUM7NEJBQzdDLEVBQUUsRUFBRSxDQUFDOzRCQUNMLFFBQVEsRUFBRSxDQUFDOzRCQUNYLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzt5QkFDOUM7cUJBQUMsQ0FBQyxDQUFDO2lCQUNMO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjs7OztRQUVELGtEQUFzQjs7O1lBQXRCO2dCQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUM1Qzs7Ozs7UUFFRCx3Q0FBWTs7OztZQUFaLFVBQWEsUUFBaUI7Z0JBQzVCLE9BQU8sUUFBUTtzQkFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7c0JBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUM7YUFDcEI7Ozs7O1FBR08sOENBQWtCOzs7O3NCQUFDLEtBQWdCOzs7O2dCQUl6QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7OzRDQTlMbkIsQ0FBQzs7b0JBOUNuQ0MsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHN2Q0FnQ1g7d0JBQ0MsU0FBUyxFQUFFOzRCQUNUO2dDQUNFLE9BQU8sRUFBRUMsdUJBQWlCO2dDQUMxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEdBQUEsQ0FBQztnQ0FDaEQsS0FBSyxFQUFFLElBQUk7NkJBQ1o7eUJBQ0Y7cUJBQ0Y7Ozs7O3dCQTlDUSxvQkFBb0I7Ozs7a0NBbUQxQkMsVUFBSztxQ0FHTEEsVUFBSztxQ0FHTEEsVUFBSztrQ0FHTEEsVUFBSztrQ0FHTEEsVUFBSzt3Q0FHTEEsVUFBSzt3Q0FHTEEsVUFBSzt5Q0FHTEEsVUFBSzt5Q0FHTEEsVUFBSzt3Q0FHTEEsVUFBSztxQ0FJTEEsVUFBSztpQ0FNTEMsV0FBTTs7Z0NBbEdUOzs7Ozs7O0FDQUE7Ozs7OztRQVlTLHNCQUFPOzs7WUFBZDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7YUFDeEU7O29CQVJGQyxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ2pDLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDN0I7OzZCQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9