(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/pagination', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].pagination = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Provides default values for Pagination and pager components
     */
    var PaginationConfig = (function () {
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
            { type: core.Injectable }
        ];
        return PaginationConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return PagerComponent; }),
        multi: true
    };
    var PagerComponent = (function () {
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /**
             * fired when total pages count changes, $event:number equals to total pages count
             */
            this.numPages = new core.EventEmitter();
            /**
             * fired when page was changed, $event:{page, itemsPerPage} equals to
             * object with current page index and number of items per page
             */
            this.pageChanged = new core.EventEmitter();
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
             */ function () {
                return this._itemsPerPage;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._totalItems;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalPages;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                return ((this))[key + "Text"] || this.config[key + "Text"];
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
            { type: core.Component, args: [{
                        selector: 'pager',
                        template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                        providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        PagerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: PaginationConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        PagerComponent.propDecorators = {
            "align": [{ type: core.Input },],
            "maxSize": [{ type: core.Input },],
            "boundaryLinks": [{ type: core.Input },],
            "directionLinks": [{ type: core.Input },],
            "firstText": [{ type: core.Input },],
            "previousText": [{ type: core.Input },],
            "nextText": [{ type: core.Input },],
            "lastText": [{ type: core.Input },],
            "rotate": [{ type: core.Input },],
            "pageBtnClass": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "numPages": [{ type: core.Output },],
            "pageChanged": [{ type: core.Output },],
            "itemsPerPage": [{ type: core.Input },],
            "totalItems": [{ type: core.Input },],
        };
        return PagerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return PaginationComponent; }),
        multi: true
    };
    var PaginationComponent = (function () {
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /**
             * fired when total pages count changes, $event:number equals to total pages count
             */
            this.numPages = new core.EventEmitter();
            /**
             * fired when page was changed, $event:{page, itemsPerPage} equals to object
             * with current page index and number of items per page
             */
            this.pageChanged = new core.EventEmitter();
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
             */ function () {
                return this._itemsPerPage;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._totalItems;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalPages;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                return ((this))[key + "Text"] || this.config[key + "Text"];
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
            { type: core.Component, args: [{
                        selector: 'pagination',
                        template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                        providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        PaginationComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: PaginationConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        PaginationComponent.propDecorators = {
            "align": [{ type: core.Input },],
            "maxSize": [{ type: core.Input },],
            "boundaryLinks": [{ type: core.Input },],
            "directionLinks": [{ type: core.Input },],
            "firstText": [{ type: core.Input },],
            "previousText": [{ type: core.Input },],
            "nextText": [{ type: core.Input },],
            "lastText": [{ type: core.Input },],
            "rotate": [{ type: core.Input },],
            "pageBtnClass": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "numPages": [{ type: core.Output },],
            "pageChanged": [{ type: core.Output },],
            "itemsPerPage": [{ type: core.Input },],
            "totalItems": [{ type: core.Input },],
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PaginationModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.PagerComponent = PagerComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.PaginationModule = PaginationModule;
    exports.PaginationConfig = PaginationConfig;
    exports.ɵa = PAGER_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = PAGINATION_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBzcGxpdFxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciBQYWdpbmF0aW9uIGFuZCBwYWdlciBjb21wb25lbnRzICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbmZpZyB7XG4gIG1haW46IENvbmZpZ01vZGVsID0ge1xuICAgIG1heFNpemU6IHZvaWQgMCxcbiAgICBpdGVtc1BlclBhZ2U6IDEwLFxuICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxuICAgIGRpcmVjdGlvbkxpbmtzOiB0cnVlLFxuICAgIGZpcnN0VGV4dDogJ0ZpcnN0JyxcbiAgICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXG4gICAgbmV4dFRleHQ6ICdOZXh0JyxcbiAgICBsYXN0VGV4dDogJ0xhc3QnLFxuICAgIHBhZ2VCdG5DbGFzczogJycsXG4gICAgcm90YXRlOiB0cnVlXG4gIH07XG4gIHBhZ2VyOiBQYWdlck1vZGVsID0ge1xuICAgIGl0ZW1zUGVyUGFnZTogMTUsXG4gICAgcHJldmlvdXNUZXh0OiAnw4LCqyBQcmV2aW91cycsXG4gICAgbmV4dFRleHQ6ICdOZXh0IMOCwrsnLFxuICAgIHBhZ2VCdG5DbGFzczogJycsXG4gICAgYWxpZ246IHRydWVcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFBBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcblxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0b1xuICAgKiBvYmplY3Qgd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLiBJZiB2YWx1ZSBsZXNzIHRoYW4gMSB3aWxsIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIG9uZSBwYWdlICovXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXNQZXJQYWdlO1xuICB9XG5cbiAgc2V0IGl0ZW1zUGVyUGFnZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcbiAgfVxuXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsSXRlbXMgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcbiAgfVxuXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2O1xuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IHZhbHVlIHx8IDE7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICBpZiAoX3ByZXZpb3VzID09PSB0aGlzLl9wYWdlIHx8IHR5cGVvZiBfcHJldmlvdXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjbGFzc01hcDogc3RyaW5nO1xuICBwYWdlczogUGFnZXNNb2RlbFtdO1xuXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxJdGVtczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhZ2luYXRpb25Db25maWcubWFpbiwgcGFnaW5hdGlvbkNvbmZpZy5wYWdlcilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgIH1cbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxuICAgIHRoaXMubWF4U2l6ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5yb3RhdGUgPVxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xuXG4gICAgLy8gYmFzZSBjbGFzc1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICAvLyB0aGlzIGNsYXNzXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XG4gIH1cblxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHt0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKSwgMSk7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhTaXplICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVmlzaWJsZSBwYWdlcyBhcmUgcGFnaW5hdGVkIHdpdGggbWF4U2l6ZVxuICAgICAgICBzdGFydFBhZ2UgPVxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGxpbmtzIHRvIG1vdmUgYmV0d2VlbiBwYWdlIHNldHNcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZVNldCA9IHRoaXMubWFrZVBhZ2Uoc3RhcnRQYWdlIC0gMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlU2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvLyBiYXNlIGNsYXNzXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9XG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcbiAgICAgICAgPyAxXG4gICAgICAgIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcblxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUNoYW5nZWRFdmVudCB7XG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnaW5hdGlvbkNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQQUdJTkFUSU9OX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgY29uZmlnOiBDb25maWdNb2RlbDtcbiAgLyoqIGlmIGB0cnVlYCBhbGlnbnMgZWFjaCBsaW5rIHRvIHRoZSBzaWRlcyBvZiBwYWdlciAqL1xuICBASW5wdXQoKSBhbGlnbjogYm9vbGVhbjtcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XG4gIC8qKiBpZiBmYWxzZSBmaXJzdCBhbmQgbGFzdCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XG4gIC8qKiBpZiBmYWxzZSBwcmV2aW91cyBhbmQgbmV4dCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuICAvLyBsYWJlbHNcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIGZpcnN0VGV4dDogc3RyaW5nO1xuICAvKiogcHJldmlvdXMgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgcHJldmlvdXNUZXh0OiBzdHJpbmc7XG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIG5leHRUZXh0OiBzdHJpbmc7XG4gIC8qKiBsYXN0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIGxhc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIGN1cnJlbnQgcGFnZSB3aWxsIGluIHRoZSBtaWRkbGUgb2YgcGFnZXMgbGlzdCAqL1xuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XG4gIC8vIGNzc1xuICAvKiogYWRkIGNsYXNzIHRvIDxjb2RlPjxsaVxcPjwvY29kZT4gKi9cbiAgQElucHV0KCkgcGFnZUJ0bkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIGlmIHRydWUgcGFnaW5hdGlvbiBjb21wb25lbnQgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xuICBAT3V0cHV0KCkgbnVtUGFnZXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG8gb2JqZWN0XG4gICAqIHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcblxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xuICBASW5wdXQoKVxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xuICB9XG5cbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xuICB9XG5cbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNsYXNzTWFwOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XG5cbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKHBhZ2luYXRpb25Db25maWcubWFpbik7XG4gICAgfVxuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgIH1cbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxuICAgIHRoaXMubWF4U2l6ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5yb3RhdGUgPVxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xuXG4gICAgLy8gYmFzZSBjbGFzc1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICAvLyB0aGlzIGNsYXNzXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XG4gIH1cblxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKFxuICAgIG51bTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBhY3RpdmU6IGJvb2xlYW5cbiAgKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHsgdGV4dCwgbnVtYmVyOiBudW0sIGFjdGl2ZSB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9XG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8vIGJhc2UgY2xhc3NcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxuICAgICAgICA/IDFcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBQYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2VyQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhZ2VyQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsIHByb3ZpZGVyczogW1BhZ2luYXRpb25Db25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozt3QkFPc0I7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0JBQ2YsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixNQUFNLEVBQUUsSUFBSTthQUNiO3lCQUNtQjtnQkFDbEIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJO2FBQ1o7OztvQkFwQkZBLGVBQVU7OytCQU5YOzs7Ozs7O0FDQUEseUJBa0JhLDRCQUE0QixHQUFhO1FBQ3BELE9BQU8sRUFBRUMsdUJBQWlCOztRQUUxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxHQUFBLENBQUM7UUFDN0MsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOztRQTRHQSx3QkFBb0IsVUFBc0IsRUFDOUIsZ0JBQWtDLEVBQzFCO1lBRkEsZUFBVSxHQUFWLFVBQVUs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