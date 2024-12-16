(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/carousel', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].carousel = {}),global.ng.core,global.utils,global.ng.common));
}(this, (function (exports,core,utils,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CarouselConfig = (function () {
        function CarouselConfig() {
            /**
             * Default interval of auto changing of slides
             */
            this.interval = 5000;
            /**
             * Is loop of auto changing of slides can be paused
             */
            this.noPause = false;
            /**
             * Is slides can wrap from the last to the first slide
             */
            this.noWrap = false;
            /**
             * Show carousel-indicators
             */
            this.showIndicators = true;
        }
        CarouselConfig.decorators = [
            { type: core.Injectable }
        ];
        return CarouselConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var Direction = {
        UNKNOWN: 0,
        NEXT: 1,
        PREV: 2,
    };
    Direction[Direction.UNKNOWN] = "UNKNOWN";
    Direction[Direction.NEXT] = "NEXT";
    Direction[Direction.PREV] = "PREV";
    /**
     * Base element to create carousel
     */
    var CarouselComponent = (function () {
        function CarouselComponent(config, ngZone) {
            this.ngZone = ngZone;
            /**
             * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
             */
            this.activeSlideChange = new core.EventEmitter(false);
            this._slides = new utils.LinkedList();
            this.destroyed = false;
            Object.assign(this, config);
        }
        Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentActiveSlide;
            },
            set: /**
             * Index of currently displayed slide(started for 0)
             * @param {?} index
             * @return {?}
             */ function (index) {
                if (this._slides.length && index !== this._currentActiveSlide) {
                    this._select(index);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "interval", {
            get: /**
             * Delay of item cycling in milliseconds. If false, carousel won't cycle
             * automatically.
             * @return {?}
             */ function () {
                return this._interval;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._interval = value;
                this.restartTimer();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "slides", {
            get: /**
             * @return {?}
             */ function () {
                return this._slides.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CarouselComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroyed = true;
            };
        /**
         * Adds new slide. If this slide is first in collection - set it as active
         * and starts auto changing
         * @param slide
         */
        /**
         * Adds new slide. If this slide is first in collection - set it as active
         * and starts auto changing
         * @param {?} slide
         * @return {?}
         */
        CarouselComponent.prototype.addSlide = /**
         * Adds new slide. If this slide is first in collection - set it as active
         * and starts auto changing
         * @param {?} slide
         * @return {?}
         */
            function (slide) {
                this._slides.add(slide);
                if (this._slides.length === 1) {
                    this._currentActiveSlide = void 0;
                    this.activeSlide = 0;
                    this.play();
                }
            };
        /**
         * Removes specified slide. If this slide is active - will roll to another
         * slide
         * @param slide
         */
        /**
         * Removes specified slide. If this slide is active - will roll to another
         * slide
         * @param {?} slide
         * @return {?}
         */
        CarouselComponent.prototype.removeSlide = /**
         * Removes specified slide. If this slide is active - will roll to another
         * slide
         * @param {?} slide
         * @return {?}
         */
            function (slide) {
                var _this = this;
                var /** @type {?} */ remIndex = this._slides.indexOf(slide);
                if (this._currentActiveSlide === remIndex) {
                    // removing of active slide
                    var /** @type {?} */ nextSlideIndex_1 = void 0;
                    if (this._slides.length > 1) {
                        // if this slide last - will roll to first slide, if noWrap flag is
                        // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                        // middle of collection, index of next slide is same to removed
                        // if this slide last - will roll to first slide, if noWrap flag is
                        // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                        // middle of collection, index of next slide is same to removed
                        nextSlideIndex_1 = !this.isLast(remIndex)
                            ? remIndex
                            : this.noWrap ? remIndex - 1 : 0;
                    }
                    this._slides.remove(remIndex);
                    // prevents exception with changing some value after checking
                    setTimeout(function () {
                        _this._select(nextSlideIndex_1);
                    }, 0);
                }
                else {
                    this._slides.remove(remIndex);
                    var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
                    setTimeout(function () {
                        // after removing, need to actualize index of current active slide
                        // after removing, need to actualize index of current active slide
                        _this._currentActiveSlide = currentSlideIndex_1;
                        _this.activeSlideChange.emit(_this._currentActiveSlide);
                    }, 0);
                }
            };
        /**
         * Rolling to next slide
         * @param force: {boolean} if true - will ignore noWrap flag
         */
        /**
         * Rolling to next slide
         * @param {?=} force
         * @return {?}
         */
        CarouselComponent.prototype.nextSlide = /**
         * Rolling to next slide
         * @param {?=} force
         * @return {?}
         */
            function (force) {
                if (force === void 0) {
                    force = false;
                }
                this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            };
        /**
         * Rolling to previous slide
         * @param force: {boolean} if true - will ignore noWrap flag
         */
        /**
         * Rolling to previous slide
         * @param {?=} force
         * @return {?}
         */
        CarouselComponent.prototype.previousSlide = /**
         * Rolling to previous slide
         * @param {?=} force
         * @return {?}
         */
            function (force) {
                if (force === void 0) {
                    force = false;
                }
                this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            };
        /**
         * Rolling to specified slide
         * @param index: {number} index of slide, which must be shown
         */
        /**
         * Rolling to specified slide
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype.selectSlide = /**
         * Rolling to specified slide
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.activeSlide = index;
            };
        /**
         * Starts a auto changing of slides
         */
        /**
         * Starts a auto changing of slides
         * @return {?}
         */
        CarouselComponent.prototype.play = /**
         * Starts a auto changing of slides
         * @return {?}
         */
            function () {
                if (!this.isPlaying) {
                    this.isPlaying = true;
                    this.restartTimer();
                }
            };
        /**
         * Stops a auto changing of slides
         */
        /**
         * Stops a auto changing of slides
         * @return {?}
         */
        CarouselComponent.prototype.pause = /**
         * Stops a auto changing of slides
         * @return {?}
         */
            function () {
                if (!this.noPause) {
                    this.isPlaying = false;
                    this.resetTimer();
                }
            };
        /**
         * Finds and returns index of currently displayed slide
         */
        /**
         * Finds and returns index of currently displayed slide
         * @return {?}
         */
        CarouselComponent.prototype.getCurrentSlideIndex = /**
         * Finds and returns index of currently displayed slide
         * @return {?}
         */
            function () {
                return this._slides.findIndex(function (slide) { return slide.active; });
            };
        /**
         * Defines, whether the specified index is last in collection
         * @param index
         */
        /**
         * Defines, whether the specified index is last in collection
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype.isLast = /**
         * Defines, whether the specified index is last in collection
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index + 1 >= this._slides.length;
            };
        /**
         * Defines next slide index, depending of direction
         * @param {?} direction
         * @param {?} force
         * @return {?}
         */
        CarouselComponent.prototype.findNextSlideIndex = /**
         * Defines next slide index, depending of direction
         * @param {?} direction
         * @param {?} force
         * @return {?}
         */
            function (direction, force) {
                var /** @type {?} */ nextSlideIndex = 0;
                if (!force &&
                    (this.isLast(this.activeSlide) &&
                        direction !== Direction.PREV &&
                        this.noWrap)) {
                    return void 0;
                }
                switch (direction) {
                    case Direction.NEXT:
                        // if this is last slide, not force, looping is disabled
                        // and need to going forward - select current slide, as a next
                        nextSlideIndex = !this.isLast(this._currentActiveSlide)
                            ? this._currentActiveSlide + 1
                            : !force && this.noWrap ? this._currentActiveSlide : 0;
                        break;
                    case Direction.PREV:
                        // if this is first slide, not force, looping is disabled
                        // and need to going backward - select current slide, as a next
                        nextSlideIndex =
                            this._currentActiveSlide > 0
                                ? this._currentActiveSlide - 1
                                : !force && this.noWrap
                                    ? this._currentActiveSlide
                                    : this._slides.length - 1;
                        break;
                    default:
                        throw new Error('Unknown direction');
                }
                return nextSlideIndex;
            };
        /**
         * Sets a slide, which specified through index, as active
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype._select = /**
         * Sets a slide, which specified through index, as active
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (isNaN(index)) {
                    this.pause();
                    return;
                }
                var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
                if (currentSlide) {
                    currentSlide.active = false;
                }
                var /** @type {?} */ nextSlide = this._slides.get(index);
                if (nextSlide) {
                    this._currentActiveSlide = index;
                    nextSlide.active = true;
                    this.activeSlide = index;
                    this.activeSlideChange.emit(index);
                }
            };
        /**
         * Starts loop of auto changing of slides
         * @return {?}
         */
        CarouselComponent.prototype.restartTimer = /**
         * Starts loop of auto changing of slides
         * @return {?}
         */
            function () {
                var _this = this;
                this.resetTimer();
                var /** @type {?} */ interval = +this.interval;
                if (!isNaN(interval) && interval > 0) {
                    this.currentInterval = this.ngZone.runOutsideAngular(function () {
                        return setInterval(function () {
                            var /** @type {?} */ nInterval = +_this.interval;
                            _this.ngZone.run(function () {
                                if (_this.isPlaying &&
                                    !isNaN(_this.interval) &&
                                    nInterval > 0 &&
                                    _this.slides.length) {
                                    _this.nextSlide();
                                }
                                else {
                                    _this.pause();
                                }
                            });
                        }, interval);
                    });
                }
            };
        /**
         * Stops loop of auto changing of slides
         * @return {?}
         */
        CarouselComponent.prototype.resetTimer = /**
         * Stops loop of auto changing of slides
         * @return {?}
         */
            function () {
                if (this.currentInterval) {
                    clearInterval(this.currentInterval);
                    this.currentInterval = void 0;
                }
            };
        CarouselComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'carousel',
                        template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CarouselComponent.ctorParameters = function () {
            return [
                { type: CarouselConfig, },
                { type: core.NgZone, },
            ];
        };
        CarouselComponent.propDecorators = {
            "noWrap": [{ type: core.Input },],
            "noPause": [{ type: core.Input },],
            "showIndicators": [{ type: core.Input },],
            "activeSlideChange": [{ type: core.Output },],
            "activeSlide": [{ type: core.Input },],
            "interval": [{ type: core.Input },],
        };
        return CarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SlideComponent = (function () {
        function SlideComponent(carousel) {
            /**
             * Wraps element by appropriate CSS classes
             */
            this.addClass = true;
            this.carousel = carousel;
        }
        /** Fires changes in container collection after adding a new slide instance */
        /**
         * Fires changes in container collection after adding a new slide instance
         * @return {?}
         */
        SlideComponent.prototype.ngOnInit = /**
         * Fires changes in container collection after adding a new slide instance
         * @return {?}
         */
            function () {
                this.carousel.addSlide(this);
            };
        /** Fires changes in container collection after removing of this slide instance */
        /**
         * Fires changes in container collection after removing of this slide instance
         * @return {?}
         */
        SlideComponent.prototype.ngOnDestroy = /**
         * Fires changes in container collection after removing of this slide instance
         * @return {?}
         */
            function () {
                this.carousel.removeSlide(this);
            };
        SlideComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'slide',
                        template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        host: {
                            '[attr.aria-hidden]': '!active'
                        }
                    }] }
        ];
        /** @nocollapse */
        SlideComponent.ctorParameters = function () {
            return [
                { type: CarouselComponent, },
            ];
        };
        SlideComponent.propDecorators = {
            "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
            "addClass": [{ type: core.HostBinding, args: ['class.item',] }, { type: core.HostBinding, args: ['class.carousel-item',] },],
        };
        return SlideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CarouselModule = (function () {
        function CarouselModule() {
        }
        /**
         * @return {?}
         */
        CarouselModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CarouselModule, providers: [] };
            };
        CarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SlideComponent, CarouselComponent],
                        exports: [SlideComponent, CarouselComponent],
                        providers: [CarouselConfig]
                    },] }
        ];
        return CarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.SlideComponent = SlideComponent;
    exports.CarouselConfig = CarouselConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jYXJvdXNlbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9zbGlkZS5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29uZmlnIHtcbiAgLyoqIERlZmF1bHQgaW50ZXJ2YWwgb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgKi9cbiAgaW50ZXJ2YWwgPSA1MDAwO1xuXG4gIC8qKiBJcyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzIGNhbiBiZSBwYXVzZWQgKi9cbiAgbm9QYXVzZSA9IGZhbHNlO1xuXG4gIC8qKiBJcyBzbGlkZXMgY2FuIHdyYXAgZnJvbSB0aGUgbGFzdCB0byB0aGUgZmlyc3Qgc2xpZGUgKi9cbiAgbm9XcmFwID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgY2Fyb3VzZWwtaW5kaWNhdG9ycyAqL1xuICBzaG93SW5kaWNhdG9ycyA9IHRydWU7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vKioqXG4gKiBwYXVzZSAobm90IHlldCBzdXBwb3J0ZWQpICg/c3RyaW5nPSdob3ZlcicpIC0gZXZlbnQgZ3JvdXAgbmFtZSB3aGljaCBwYXVzZXNcbiAqIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCwgaWYgaG92ZXIgcGF1c2VzIG9uIG1vdXNlZW50ZXIgYW5kIHJlc3VtZXMgb25cbiAqIG1vdXNlbGVhdmUga2V5Ym9hcmQgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP2Jvb2xlYW49dHJ1ZSkgLSBpZiBmYWxzZVxuICogY2Fyb3VzZWwgd2lsbCBub3QgcmVhY3QgdG8ga2V5Ym9hcmQgZXZlbnRzXG4gKiBub3RlOiBzd2lwaW5nIG5vdCB5ZXQgc3VwcG9ydGVkXG4gKi9cbi8qKioqXG4gKiBQcm9ibGVtczpcbiAqIDEpIGlmIHdlIHNldCBhbiBhY3RpdmUgc2xpZGUgdmlhIG1vZGVsIGNoYW5nZXMsIC5hY3RpdmUgY2xhc3MgcmVtYWlucyBvbiBhXG4gKiBjdXJyZW50IHNsaWRlLlxuICogMikgaWYgd2UgaGF2ZSBvbmx5IG9uZSBzbGlkZSwgd2Ugc2hvdWxkbid0IHNob3cgcHJldi9uZXh0IG5hdiBidXR0b25zXG4gKiAzKSBpZiBmaXJzdCBvciBsYXN0IHNsaWRlIGlzIGFjdGl2ZSBhbmQgbm9XcmFwIGlzIHRydWUsIHRoZXJlIHNob3VsZCBiZVxuICogXCJkaXNhYmxlZFwiIGNsYXNzIG9uIHRoZSBuYXYgYnV0dG9ucy5cbiAqIDQpIGRlZmF1bHQgaW50ZXJ2YWwgc2hvdWxkIGJlIGVxdWFsIDUwMDBcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzLCBMaW5rZWRMaXN0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBVTktOT1dOLFxuICBORVhULFxuICBQUkVWXG59XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IHRvIGNyZWF0ZSBjYXJvdXNlbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogSWYgYHRydWVgIMOiwoDClCBjYXJvdXNlbCB3aWxsIG5vdCBjeWNsZSBjb250aW51b3VzbHkgYW5kIHdpbGwgaGF2ZSBoYXJkIHN0b3BzIChwcmV2ZW50IGxvb3BpbmcpICovXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcbiAgLyoqICBJZiBgdHJ1ZWAgw6LCgMKUIHdpbGwgZGlzYWJsZSBwYXVzaW5nIG9uIGNhcm91c2VsIG1vdXNlIGhvdmVyICovXG4gIEBJbnB1dCgpIG5vUGF1c2U6IGJvb2xlYW47XG4gIC8qKiAgSWYgYHRydWVgIMOiwoDClCBjYXJvdXNlbC1pbmRpY2F0b3JzIGFyZSB2aXNpYmxlICAqL1xuICBASW5wdXQoKSBzaG93SW5kaWNhdG9yczogYm9vbGVhbjtcblxuICAvKiogV2lsbCBiZSBlbWl0dGVkIHdoZW4gYWN0aXZlIHNsaWRlIGhhcyBiZWVuIGNoYW5nZWQuIFBhcnQgb2YgdHdvLXdheS1iaW5kYWJsZSBbKGFjdGl2ZVNsaWRlKV0gcHJvcGVydHkgKi9cbiAgQE91dHB1dCgpXG4gIGFjdGl2ZVNsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPihmYWxzZSk7XG5cbiAgLyoqIEluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGUoc3RhcnRlZCBmb3IgMCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhY3RpdmVTbGlkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGU7XG4gIH1cblxuICAvKipcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlXG4gICAqIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XG4gICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIGdldCBzbGlkZXMoKTogU2xpZGVDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy50b0FycmF5KCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcbiAgcHJvdGVjdGVkIF9jdXJyZW50QWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9pbnRlcnZhbDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3NsaWRlczogTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4gPSBuZXcgTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4oKTtcbiAgcHJvdGVjdGVkIGlzUGxheWluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IENhcm91c2VsQ29uZmlnLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlXG4gICAqIGFuZCBzdGFydHMgYXV0byBjaGFuZ2luZ1xuICAgKiBAcGFyYW0gc2xpZGVcbiAgICovXG4gIGFkZFNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NsaWRlcy5hZGQoc2xpZGUpO1xuICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSB2b2lkIDA7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gMDtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHNwZWNpZmllZCBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBhY3RpdmUgLSB3aWxsIHJvbGwgdG8gYW5vdGhlclxuICAgKiBzbGlkZVxuICAgKiBAcGFyYW0gc2xpZGVcbiAgICovXG4gIHJlbW92ZVNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gcmVtSW5kZXgpIHtcbiAgICAgIC8vIHJlbW92aW5nIG9mIGFjdGl2ZSBzbGlkZVxuICAgICAgbGV0IG5leHRTbGlkZUluZGV4OiBudW1iZXIgPSB2b2lkIDA7XG4gICAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBzbGlkZSBsYXN0IC0gd2lsbCByb2xsIHRvIGZpcnN0IHNsaWRlLCBpZiBub1dyYXAgZmxhZyBpc1xuICAgICAgICAvLyBGQUxTRSBvciB0byBwcmV2aW91cywgaWYgbm9XcmFwIGlzIFRSVUUgaW4gY2FzZSwgaWYgdGhpcyBzbGlkZSBpblxuICAgICAgICAvLyBtaWRkbGUgb2YgY29sbGVjdGlvbiwgaW5kZXggb2YgbmV4dCBzbGlkZSBpcyBzYW1lIHRvIHJlbW92ZWRcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpXG4gICAgICAgICAgPyByZW1JbmRleFxuICAgICAgICAgIDogdGhpcy5ub1dyYXAgPyByZW1JbmRleCAtIDEgOiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XG5cbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3QobmV4dFNsaWRlSW5kZXgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gYWZ0ZXIgcmVtb3ZpbmcsIG5lZWQgdG8gYWN0dWFsaXplIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIHNsaWRlXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIG5leHQgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBuZXh0U2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uTkVYVCwgZm9yY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gcHJldmlvdXMgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBwcmV2aW91c1NsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLlBSRVYsIGZvcmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIHNwZWNpZmllZCBzbGlkZVxuICAgKiBAcGFyYW0gaW5kZXg6IHtudW1iZXJ9IGluZGV4IG9mIHNsaWRlLCB3aGljaCBtdXN0IGJlIHNob3duXG4gICAqL1xuICBzZWxlY3RTbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwbGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHBhdXNlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcbiAgICovXG4gIGdldEN1cnJlbnRTbGlkZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy5maW5kSW5kZXgoKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzLCB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgbGFzdCBpbiBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgaXNMYXN0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5kZXggKyAxID49IHRoaXMuX3NsaWRlcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyBuZXh0IHNsaWRlIGluZGV4LCBkZXBlbmRpbmcgb2YgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSBkaXJlY3Rpb246IERpcmVjdGlvbihVTktOT1dOfFBSRVZ8TkVYVClcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgVFJVRSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnLCBlbHNlIHdpbGxcbiAgICogICByZXR1cm4gdW5kZWZpbmVkIGlmIG5leHQgc2xpZGUgcmVxdWlyZSB3cmFwcGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBmaW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSAwO1xuXG4gICAgaWYgKFxuICAgICAgIWZvcmNlICYmXG4gICAgICAodGhpcy5pc0xhc3QodGhpcy5hY3RpdmVTbGlkZSkgJiZcbiAgICAgICAgZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uUFJFViAmJlxuICAgICAgICB0aGlzLm5vV3JhcClcbiAgICApIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLk5FWFQ6XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgbGFzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGZvcndhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSlcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSArIDFcbiAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcCA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA6IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEaXJlY3Rpb24uUFJFVjpcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBmaXJzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGJhY2t3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9XG4gICAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID4gMFxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgLSAxXG4gICAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcFxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGVcbiAgICAgICAgICAgIDogdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGRpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2xpZGVJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc2xpZGUsIHdoaWNoIHNwZWNpZmllZCB0aHJvdWdoIGluZGV4LCBhcyBhY3RpdmVcbiAgICogQHBhcmFtIGluZGV4XG4gICAqL1xuICBwcml2YXRlIF9zZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpc05hTihpbmRleCkpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSkge1xuICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KGluZGV4KTtcbiAgICBpZiAobmV4dFNsaWRlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgICAgIG5leHRTbGlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHByaXZhdGUgcmVzdGFydFRpbWVyKCkge1xuICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgIGNvbnN0IGludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XG4gICAgaWYgKCFpc05hTihpbnRlcnZhbCkgJiYgaW50ZXJ2YWwgPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBuSW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyAmJlxuICAgICAgICAgICAgICAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiZcbiAgICAgICAgICAgICAgbkludGVydmFsID4gMCAmJlxuICAgICAgICAgICAgICB0aGlzLnNsaWRlcy5sZW5ndGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLm5leHRTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFhY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBJcyBjdXJyZW50IHNsaWRlIGFjdGl2ZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0nKVxuICBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cbiAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XG4gIH1cblxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciBhZGRpbmcgYSBuZXcgc2xpZGUgaW5zdGFuY2UgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIHJlbW92aW5nIG9mIHRoaXMgc2xpZGUgaW5zdGFuY2UgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1NsaWRlQ29tcG9uZW50LCBDYXJvdXNlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTbGlkZUNvbXBvbmVudCwgQ2Fyb3VzZWxDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtDYXJvdXNlbENvbmZpZ11cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQ2Fyb3VzZWxNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJMaW5rZWRMaXN0IiwiaXNCczMiLCJDb21wb25lbnQiLCJOZ1pvbmUiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7NEJBS2EsSUFBSTs7OzsyQkFHTCxLQUFLOzs7OzBCQUdOLEtBQUs7Ozs7a0NBR0csSUFBSTs7O29CQVp0QkEsZUFBVTs7NkJBRlg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDNkZFLDJCQUFZLE1BQXNCLEVBQVUsTUFBYztZQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7cUNBNUNoQixJQUFJQyxp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