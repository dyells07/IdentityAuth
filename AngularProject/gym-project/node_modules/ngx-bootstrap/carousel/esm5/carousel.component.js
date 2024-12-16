/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { isBs3, LinkedList } from 'ngx-bootstrap/utils';
import { CarouselConfig } from './carousel.config';
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
export { Direction };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        this._slides = new LinkedList();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
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
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
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
        if (force === void 0) { force = false; }
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
        if (force === void 0) { force = false; }
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
        { type: Component, args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig, },
        { type: NgZone, },
    ]; };
    CarouselComponent.propDecorators = {
        "noWrap": [{ type: Input },],
        "noPause": [{ type: Input },],
        "showIndicators": [{ type: Input },],
        "activeSlideChange": [{ type: Output },],
        "activeSlide": [{ type: Input },],
        "interval": [{ type: Input },],
    };
    return CarouselComponent;
}());
export { CarouselComponent };
function CarouselComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CarouselComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CarouselComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CarouselComponent.propDecorators;
    /**
     * If `true` — carousel will not cycle continuously and will have hard stops (prevent looping)
     * @type {?}
     */
    CarouselComponent.prototype.noWrap;
    /**
     * If `true` — will disable pausing on carousel mouse hover
     * @type {?}
     */
    CarouselComponent.prototype.noPause;
    /**
     * If `true` — carousel-indicators are visible
     * @type {?}
     */
    CarouselComponent.prototype.showIndicators;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     * @type {?}
     */
    CarouselComponent.prototype.activeSlideChange;
    /** @type {?} */
    CarouselComponent.prototype.currentInterval;
    /** @type {?} */
    CarouselComponent.prototype._currentActiveSlide;
    /** @type {?} */
    CarouselComponent.prototype._interval;
    /** @type {?} */
    CarouselComponent.prototype._slides;
    /** @type {?} */
    CarouselComponent.prototype.isPlaying;
    /** @type {?} */
    CarouselComponent.prototype.destroyed;
    /** @type {?} */
    CarouselComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQzFELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFxRWpELDJCQUFZLE1BQXNCLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7aUNBNUNoQixJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUM7dUJBb0N6QixJQUFJLFVBQVUsRUFBa0I7eUJBRTFELEtBQUs7UUFPekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7MEJBMUNHLDBDQUFXOzs7O1FBTWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDOzs7Ozs7a0JBUmUsS0FBYTtZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjs7Ozs7MEJBWUMsdUNBQVE7Ozs7Ozs7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O1FBR3hCLFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxF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RSxDQUFDO3lCQUNsQjt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ2Q7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSjs7Ozs7O0lBTUssc0NBQVU7Ozs7O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7O2dCQW5SSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDRnQ0FBd0M7aUJBQ3pDOzs7O2dCQWRRLGNBQWM7Z0JBTFcsTUFBTTs7OzJCQXNCckMsS0FBSzs0QkFFTCxLQUFLO21DQUVMLEtBQUs7c0NBR0wsTUFBTTtnQ0FJTixLQUFLOzZCQWVMLEtBQUs7OzRCQW5FUjs7U0F1Q2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxuLyoqKlxuICogcGF1c2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP3N0cmluZz0naG92ZXInKSAtIGV2ZW50IGdyb3VwIG5hbWUgd2hpY2ggcGF1c2VzXG4gKiB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwsIGlmIGhvdmVyIHBhdXNlcyBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIG9uXG4gKiBtb3VzZWxlYXZlIGtleWJvYXJkIChub3QgeWV0IHN1cHBvcnRlZCkgKD9ib29sZWFuPXRydWUpIC0gaWYgZmFsc2VcbiAqIGNhcm91c2VsIHdpbGwgbm90IHJlYWN0IHRvIGtleWJvYXJkIGV2ZW50c1xuICogbm90ZTogc3dpcGluZyBub3QgeWV0IHN1cHBvcnRlZFxuICovXG4vKioqKlxuICogUHJvYmxlbXM6XG4gKiAxKSBpZiB3ZSBzZXQgYW4gYWN0aXZlIHNsaWRlIHZpYSBtb2RlbCBjaGFuZ2VzLCAuYWN0aXZlIGNsYXNzIHJlbWFpbnMgb24gYVxuICogY3VycmVudCBzbGlkZS5cbiAqIDIpIGlmIHdlIGhhdmUgb25seSBvbmUgc2xpZGUsIHdlIHNob3VsZG4ndCBzaG93IHByZXYvbmV4dCBuYXYgYnV0dG9uc1xuICogMykgaWYgZmlyc3Qgb3IgbGFzdCBzbGlkZSBpcyBhY3RpdmUgYW5kIG5vV3JhcCBpcyB0cnVlLCB0aGVyZSBzaG91bGQgYmVcbiAqIFwiZGlzYWJsZWRcIiBjbGFzcyBvbiB0aGUgbmF2IGJ1dHRvbnMuXG4gKiA0KSBkZWZhdWx0IGludGVydmFsIHNob3VsZCBiZSBlcXVhbCA1MDAwXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMywgTGlua2VkTGlzdCB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgVU5LTk9XTixcbiAgTkVYVCxcbiAgUFJFVlxufVxuXG4vKipcbiAqIEJhc2UgZWxlbWVudCB0byBjcmVhdGUgY2Fyb3VzZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwgd2lsbCBub3QgY3ljbGUgY29udGludW91c2x5IGFuZCB3aWxsIGhhdmUgaGFyZCBzdG9wcyAocHJldmVudCBsb29waW5nKSAqL1xuICBASW5wdXQoKSBub1dyYXA6IGJvb2xlYW47XG4gIC8qKiAgSWYgYHRydWVgIOKAlCB3aWxsIGRpc2FibGUgcGF1c2luZyBvbiBjYXJvdXNlbCBtb3VzZSBob3ZlciAqL1xuICBASW5wdXQoKSBub1BhdXNlOiBib29sZWFuO1xuICAvKiogIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwtaW5kaWNhdG9ycyBhcmUgdmlzaWJsZSAgKi9cbiAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW47XG5cbiAgLyoqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIGFjdGl2ZSBzbGlkZSBoYXMgYmVlbiBjaGFuZ2VkLiBQYXJ0IG9mIHR3by13YXktYmluZGFibGUgWyhhY3RpdmVTbGlkZSldIHByb3BlcnR5ICovXG4gIEBPdXRwdXQoKVxuICBhY3RpdmVTbGlkZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oZmFsc2UpO1xuXG4gIC8qKiBJbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlKHN0YXJ0ZWQgZm9yIDApICovXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmVTbGlkZShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggJiYgaW5kZXggIT09IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkge1xuICAgICAgdGhpcy5fc2VsZWN0KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGF5IG9mIGl0ZW0gY3ljbGluZyBpbiBtaWxsaXNlY29uZHMuIElmIGZhbHNlLCBjYXJvdXNlbCB3b24ndCBjeWNsZVxuICAgKiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICB9XG5cbiAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gIH1cblxuICBnZXQgc2xpZGVzKCk6IFNsaWRlQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXMudG9BcnJheSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQgY3VycmVudEludGVydmFsOiBhbnk7XG4gIHByb3RlY3RlZCBfY3VycmVudEFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9zbGlkZXM6IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+ID0gbmV3IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+KCk7XG4gIHByb3RlY3RlZCBpc1BsYXlpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYXJvdXNlbENvbmZpZywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5ldyBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBmaXJzdCBpbiBjb2xsZWN0aW9uIC0gc2V0IGl0IGFzIGFjdGl2ZVxuICAgKiBhbmQgc3RhcnRzIGF1dG8gY2hhbmdpbmdcbiAgICogQHBhcmFtIHNsaWRlXG4gICAqL1xuICBhZGRTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zbGlkZXMuYWRkKHNsaWRlKTtcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gdm9pZCAwO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzcGVjaWZpZWQgc2xpZGUuIElmIHRoaXMgc2xpZGUgaXMgYWN0aXZlIC0gd2lsbCByb2xsIHRvIGFub3RoZXJcbiAgICogc2xpZGVcbiAgICogQHBhcmFtIHNsaWRlXG4gICAqL1xuICByZW1vdmVTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZW1JbmRleCA9IHRoaXMuX3NsaWRlcy5pbmRleE9mKHNsaWRlKTtcblxuICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPT09IHJlbUluZGV4KSB7XG4gICAgICAvLyByZW1vdmluZyBvZiBhY3RpdmUgc2xpZGVcbiAgICAgIGxldCBuZXh0U2xpZGVJbmRleDogbnVtYmVyID0gdm9pZCAwO1xuICAgICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgc2xpZGUgbGFzdCAtIHdpbGwgcm9sbCB0byBmaXJzdCBzbGlkZSwgaWYgbm9XcmFwIGZsYWcgaXNcbiAgICAgICAgLy8gRkFMU0Ugb3IgdG8gcHJldmlvdXMsIGlmIG5vV3JhcCBpcyBUUlVFIGluIGNhc2UsIGlmIHRoaXMgc2xpZGUgaW5cbiAgICAgICAgLy8gbWlkZGxlIG9mIGNvbGxlY3Rpb24sIGluZGV4IG9mIG5leHQgc2xpZGUgaXMgc2FtZSB0byByZW1vdmVkXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHJlbUluZGV4KVxuICAgICAgICAgID8gcmVtSW5kZXhcbiAgICAgICAgICA6IHRoaXMubm9XcmFwID8gcmVtSW5kZXggLSAxIDogMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xuXG4gICAgICAvLyBwcmV2ZW50cyBleGNlcHRpb24gd2l0aCBjaGFuZ2luZyBzb21lIHZhbHVlIGFmdGVyIGNoZWNraW5nXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0KG5leHRTbGlkZUluZGV4KTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50U2xpZGVJbmRleCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nLCBuZWVkIHRvIGFjdHVhbGl6ZSBpbmRleCBvZiBjdXJyZW50IGFjdGl2ZSBzbGlkZVxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBjdXJyZW50U2xpZGVJbmRleDtcbiAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBuZXh0IHNsaWRlXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xuICAgKi9cbiAgbmV4dFNsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIHByZXZpb3VzIHNsaWRlXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xuICAgKi9cbiAgcHJldmlvdXNTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5QUkVWLCBmb3JjZSk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBzcGVjaWZpZWQgc2xpZGVcbiAgICogQHBhcmFtIGluZGV4OiB7bnVtYmVyfSBpbmRleCBvZiBzbGlkZSwgd2hpY2ggbXVzdCBiZSBzaG93blxuICAgKi9cbiAgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcGxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwYXVzZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm9QYXVzZSkge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbmQgcmV0dXJucyBpbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlXG4gICAqL1xuICBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXMuZmluZEluZGV4KChzbGlkZTogU2xpZGVDb21wb25lbnQpID0+IHNsaWRlLmFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcywgd2hldGhlciB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxhc3QgaW4gY29sbGVjdGlvblxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIGlzTGFzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ICsgMSA+PSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgbmV4dCBzbGlkZSBpbmRleCwgZGVwZW5kaW5nIG9mIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gZGlyZWN0aW9uOiBEaXJlY3Rpb24oVU5LTk9XTnxQUkVWfE5FWFQpXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIFRSVUUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZywgZWxzZSB3aWxsXG4gICAqICAgcmV0dXJuIHVuZGVmaW5lZCBpZiBuZXh0IHNsaWRlIHJlcXVpcmUgd3JhcHBpbmdcbiAgICovXG4gIHByaXZhdGUgZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbjogRGlyZWN0aW9uLCBmb3JjZTogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IG5leHRTbGlkZUluZGV4ID0gMDtcblxuICAgIGlmIChcbiAgICAgICFmb3JjZSAmJlxuICAgICAgKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmXG4gICAgICAgIGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlBSRVYgJiZcbiAgICAgICAgdGhpcy5ub1dyYXApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERpcmVjdGlvbi5ORVhUOlxuICAgICAgICAvLyBpZiB0aGlzIGlzIGxhc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBmb3J3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpXG4gICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgKyAxXG4gICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgZmlyc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBiYWNrd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDBcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIC0gMVxuICAgICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXBcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlXG4gICAgICAgICAgICA6IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNsaWRlSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHNsaWRlLCB3aGljaCBzcGVjaWZpZWQgdGhyb3VnaCBpbmRleCwgYXMgYWN0aXZlXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgIGlmIChjdXJyZW50U2xpZGUpIHtcbiAgICAgIGN1cnJlbnRTbGlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbmV4dFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldChpbmRleCk7XG4gICAgaWYgKG5leHRTbGlkZSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICBuZXh0U2xpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwcml2YXRlIHJlc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbkludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKHRoaXMuaW50ZXJ2YWwpICYmXG4gICAgICAgICAgICAgIG5JbnRlcnZhbCA+IDAgJiZcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZXMubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHByaXZhdGUgcmVzZXRUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB2b2lkIDA7XG4gICAgfVxuICB9XG59XG4iXX0=