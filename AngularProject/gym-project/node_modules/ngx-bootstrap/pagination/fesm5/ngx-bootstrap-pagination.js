import { Injectable, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: Injectable }
    ];
    return PaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
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
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
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
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
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
    Object.defineProperty(PaginationComponent.prototype, "page", {
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
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
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
    PaginationComponent.prototype.writeValue = /**
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
    PaginationComponent.prototype.getText = /**
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
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
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
    PaginationComponent.prototype.registerOnTouched = /**
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
    PaginationComponent.prototype.selectPage = /**
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
    PaginationComponent.prototype.makePage = /**
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
    PaginationComponent.prototype.getPages = /**
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
    PaginationComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PaginationConfig, },
        { type: ChangeDetectorRef, },
    ]; };
    PaginationComponent.propDecorators = {
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
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @return {?}
     */
    PaginationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                },] }
    ];
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, PAGER_CONTROL_VALUE_ACCESSOR as ɵa, PAGINATION_CONTROL_VALUE_ACCESSOR as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIFBhZ2luYXRpb24gYW5kIHBhZ2VyIGNvbXBvbmVudHMgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgbWFpbjogQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4U2l6ZTogdm9pZCAwLFxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxuICAgIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICByb3RhdGU6IHRydWVcbiAgfTtcbiAgcGFnZXI6IFBhZ2VyTW9kZWwgPSB7XG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcbiAgICBwcmV2aW91c1RleHQ6ICfDgsKrIFByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQgw4LCuycsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICBhbGlnbjogdHJ1ZVxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcbiAgLy8gbGFiZWxzXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICAvLyBjc3NcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xuXG4gIC8qKiBpZiB0cnVlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvXG4gICAqIG9iamVjdCB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcblxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xuICBASW5wdXQoKVxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xuICB9XG5cbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xuICB9XG5cbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNsYXNzTWFwOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XG5cbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFnaW5hdGlvbkNvbmZpZy5tYWluLCBwYWdpbmF0aW9uQ29uZmlnLnBhZ2VyKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UobnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge3RleHQsIG51bWJlcjogbnVtLCBhY3RpdmV9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9XG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8vIGJhc2UgY2xhc3NcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxuICAgICAgICA/IDFcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcblxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0byBvYmplY3RcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XG4gIH1cblxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XG4gIH1cblxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY2xhc3NNYXA6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcblxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMocGFnaW5hdGlvbkNvbmZpZy5tYWluKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UoXG4gICAgbnVtOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGFjdGl2ZTogYm9vbGVhblxuICApOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XG5cbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcblxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcbiAgICAgICAgc3RhcnRQYWdlID1cbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcblxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cblxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLy8gYmFzZSBjbGFzc1xuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXG4gICAgICAgID8gMVxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IFBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbUGFnaW5hdGlvbkNvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7O29CQU9zQjtZQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsWUFBWSxFQUFFLFVBQVU7WUFDeEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtxQkFDbUI7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWjs7O2dCQXBCRixVQUFVOzsyQkFOWDs7Ozs7OztBQ0FBLHFCQWtCYSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEdBQUEsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLHdCQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkExRVEsSUFBSSxZQUFZLEVBQVU7Ozs7OzJCQUt2QixJQUFJLFlBQVksRUFBb0I7d0JBdUR2RSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7c0JBUVgsS0FBSztxQkFDTixDQUFDO1FBS2pCLElBQUksQ0FBQyxVQUFVLEdBQUcs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