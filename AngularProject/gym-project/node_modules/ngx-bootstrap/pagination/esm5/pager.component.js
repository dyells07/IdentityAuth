/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
export var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PagerComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PagerComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PagerComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PagerComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PaginationConfig, },
        { type: ChangeDetectorRef, },
    ]; };
    PagerComponent.propDecorators = {
        "align": [{ type: Input },],
        "maxSize": [{ type: Input },],
        "boundaryLinks": [{ type: Input },],
        "directionLinks": [{ type: Input },],
        "firstText": [{ type: Input },],
        "previousText": [{ type: Input },],
        "nextText": [{ type: Input },],
        "lastText": [{ type: Input },],
        "rotate": [{ type: Input },],
        "pageBtnClass": [{ type: Input },],
        "disabled": [{ type: Input },],
        "numPages": [{ type: Output },],
        "pageChanged": [{ type: Output },],
        "itemsPerPage": [{ type: Input },],
        "totalItems": [{ type: Input },],
    };
    return PagerComponent;
}());
export { PagerComponent };
function PagerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PagerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PagerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PagerComponent.propDecorators;
    /** @type {?} */
    PagerComponent.prototype.config;
    /**
     * if `true` aligns each link to the sides of pager
     * @type {?}
     */
    PagerComponent.prototype.align;
    /**
     * limit number for page links in pager
     * @type {?}
     */
    PagerComponent.prototype.maxSize;
    /**
     * if false first and last buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.boundaryLinks;
    /**
     * if false previous and next buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.directionLinks;
    /**
     * first button text
     * @type {?}
     */
    PagerComponent.prototype.firstText;
    /**
     * previous button text
     * @type {?}
     */
    PagerComponent.prototype.previousText;
    /**
     * next button text
     * @type {?}
     */
    PagerComponent.prototype.nextText;
    /**
     * last button text
     * @type {?}
     */
    PagerComponent.prototype.lastText;
    /**
     * if true current page will in the middle of pages list
     * @type {?}
     */
    PagerComponent.prototype.rotate;
    /**
     * add class to <code><li\></code>
     * @type {?}
     */
    PagerComponent.prototype.pageBtnClass;
    /**
     * if true pagination component will be disabled
     * @type {?}
     */
    PagerComponent.prototype.disabled;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     * @type {?}
     */
    PagerComponent.prototype.numPages;
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     * @type {?}
     */
    PagerComponent.prototype.pageChanged;
    /** @type {?} */
    PagerComponent.prototype.onChange;
    /** @type {?} */
    PagerComponent.prototype.onTouched;
    /** @type {?} */
    PagerComponent.prototype.classMap;
    /** @type {?} */
    PagerComponent.prototype.pages;
    /** @type {?} */
    PagerComponent.prototype._itemsPerPage;
    /** @type {?} */
    PagerComponent.prototype._totalItems;
    /** @type {?} */
    PagerComponent.prototype._totalPages;
    /** @type {?} */
    PagerComponent.prototype.inited;
    /** @type {?} */
    PagerComponent.prototype._page;
    /** @type {?} */
    PagerComponent.prototype.elementRef;
    /** @type {?} */
    PagerComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsicGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxNQUFNLENBQUMscUJBQU0sNEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLHdCQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkExRVEsSUFBSSxZQUFZLEVBQVU7Ozs7OzJCQUt2QixJQUFJLFlBQVksRUFBb0I7d0JBdUR2RSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7c0JBUVgsS0FBSztxQkFDTixDQUFDO1FBS2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQ2pFLENBQUM7U0FD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QUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckM7O2dCQXhRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLDJpQkFBcUM7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQzs7OztnQkExQkMsVUFBVTtnQkFXSCxnQkFBZ0I7Z0JBYnZCLGlCQUFpQjs7OzBCQWdDaEIsS0FBSzs0QkFFTCxLQUFLO2tDQUVMLEtBQUs7bUNBRUwsS0FBSzs4QkFHTCxLQUFLO2lDQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7aUNBR0wsS0FBSzs2QkFHTCxLQUFLOzZCQUdMLE1BQU07Z0NBSU4sTUFBTTtpQ0FJTixLQUFLOytCQVdMLEtBQUs7O3lCQTlFUjs7U0E4QmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFBBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcblxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0b1xuICAgKiBvYmplY3Qgd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLiBJZiB2YWx1ZSBsZXNzIHRoYW4gMSB3aWxsIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIG9uZSBwYWdlICovXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXNQZXJQYWdlO1xuICB9XG5cbiAgc2V0IGl0ZW1zUGVyUGFnZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcbiAgfVxuXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsSXRlbXMgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcbiAgfVxuXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2O1xuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IHZhbHVlIHx8IDE7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICBpZiAoX3ByZXZpb3VzID09PSB0aGlzLl9wYWdlIHx8IHR5cGVvZiBfcHJldmlvdXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjbGFzc01hcDogc3RyaW5nO1xuICBwYWdlczogUGFnZXNNb2RlbFtdO1xuXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxJdGVtczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhZ2luYXRpb25Db25maWcubWFpbiwgcGFnaW5hdGlvbkNvbmZpZy5wYWdlcilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgIH1cbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxuICAgIHRoaXMubWF4U2l6ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5yb3RhdGUgPVxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xuXG4gICAgLy8gYmFzZSBjbGFzc1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICAvLyB0aGlzIGNsYXNzXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XG4gIH1cblxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHt0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKSwgMSk7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhTaXplICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVmlzaWJsZSBwYWdlcyBhcmUgcGFnaW5hdGVkIHdpdGggbWF4U2l6ZVxuICAgICAgICBzdGFydFBhZ2UgPVxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGxpbmtzIHRvIG1vdmUgYmV0d2VlbiBwYWdlIHNldHNcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZVNldCA9IHRoaXMubWFrZVBhZ2Uoc3RhcnRQYWdlIC0gMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlU2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvLyBiYXNlIGNsYXNzXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9XG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcbiAgICAgICAgPyAxXG4gICAgICAgIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcblxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICB9XG59XG4iXX0=