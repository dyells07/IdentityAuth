import { Injectable, Component, ElementRef, HostListener, Renderer2, Directive, EventEmitter, Input, Output, ViewContainerRef, RendererFactory2, NgModule } from '@angular/core';
import { isBs3, Utils, document as document$1, window as window$1 } from 'ngx-bootstrap/utils';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: Injectable }
    ];
    return BsModalRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
var /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    ModalContainerComponent.propDecorators = {
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            if (!isBs3()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: CLASS_NAME.BACKDROP }
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    return ModalBackdropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TRANSITION_DURATION = 300;
var /** @type {?} */ BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new EventEmitter();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new EventEmitter();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new EventEmitter();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        window$1.clearTimeout(this.timerHideModal);
        window$1.clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = window$1.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            Utils.reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, CLASS_NAME.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = window$1.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /**
     * Events tricks
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = /**
     * Events tricks
     * @return {?}
     */
    function () {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document$1.body.clientWidth < window$1.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(window$1
            .getComputedStyle(document$1.body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        document$1.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document$1.body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document$1.body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ViewContainerRef, },
        { type: Renderer2, },
        { type: ComponentLoaderFactory, },
    ]; };
    ModalDirective.propDecorators = {
        "config": [{ type: Input },],
        "onShow": [{ type: Output },],
        "onShown": [{ type: Output },],
        "onHide": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onShown = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHide = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    // tslint:disable-next-line:no-any
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    BsModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    BsModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ bsModalRef = new BsModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    BsModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.removeBackdrop = /**
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BsModalService.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._createLoaders = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.removeLoaders = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    BsModalService.prototype.copyEvent = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: RendererFactory2, },
        { type: ComponentLoaderFactory, },
    ]; };
    return BsModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    };
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsModalRef, ModalBackdropOptions, ModalContainerComponent, ModalBackdropComponent, ModalOptions, ModalDirective, ModalModule, BsModalService, CLASS_NAME as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC1yZWYuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5vcHRpb25zLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL2JzLW1vZGFsLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIGEgY29tcG9uZW50IGluc2lkZSB0aGUgbW9kYWwuIE51bGwgaWYgbW9kYWwncyBiZWVuIGNyZWF0ZWQgd2l0aCBUZW1wbGF0ZVJlZlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb250ZW50PzogYW55IHwgbnVsbDtcblxuICAvKipcbiAgICogSGlkZXMgdGhlIG1vZGFsXG4gICAqL1xuICBoaWRlOiAoKSA9PiB2b2lkID0gRnVuY3Rpb247XG59XG4iLCJleHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcE9wdGlvbnMge1xuICBhbmltYXRlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbEJhY2tkcm9wT3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXNzTmFtZSwgRGlzbWlzc1JlYXNvbnMsIFNlbGVjdG9yLCBUcmFuc2l0aW9uRHVyYXRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksXG4gICAqICBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNb2RhbCBkYXRhXG4gICAqL1xuICBpbml0aWFsU3RhdGU/OiBPYmplY3Q7XG59XG5cblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogZmFsc2UsXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBjbGFzczogJycsXG4gIGFuaW1hdGVkOiB0cnVlLFxuICBpbml0aWFsU3RhdGU6IHt9XG59O1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsIC8vIGJzM1xuICBTSE9XOiAnc2hvdycgLy8gYnM0XG59O1xuXG5leHBvcnQgY29uc3QgU0VMRUNUT1I6IFNlbGVjdG9yID0ge1xuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OUzogVHJhbnNpdGlvbkR1cmF0aW9ucyA9IHtcbiAgTU9EQUw6IDMwMCxcbiAgQkFDS0RST1A6IDE1MFxufTtcblxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUzogRGlzbWlzc1JlYXNvbnMgPSB7XG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICBFU0M6ICdlc2MnXG59O1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDTEFTU19OQU1FLFxuICBESVNNSVNTX1JFQVNPTlMsXG4gIE1vZGFsT3B0aW9ucyxcbiAgVFJBTlNJVElPTl9EVVJBVElPTlNcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3NdPVwiJ21vZGFsLWRpYWxvZycgKyAoY29uZmlnLmNsYXNzID8gJyAnICsgY29uZmlnLmNsYXNzIDogJycpXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbW9kYWwnLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICdbYXR0ci5hcmlhLW1vZGFsXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25maWc6IE1vZGFsT3B0aW9ucztcbiAgaXNTaG93biA9IGZhbHNlO1xuICBsZXZlbDogbnVtYmVyO1xuICBpc0FuaW1hdGVkOiBib29sZWFuO1xuICBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2U7XG4gIHByaXZhdGUgaXNNb2RhbEhpZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIENMQVNTX05BTUUuRkFERVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZGlzcGxheScsXG4gICAgICAnYmxvY2snXG4gICAgKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xuICAgICAgKTtcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDApO1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAodGhpcy5ic01vZGFsU2VydmljZS5nZXRNb2RhbHNDb3VudCgpID09PSAxKSB7XG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5zZXRTY3JvbGxiYXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmlnbm9yZUJhY2tkcm9wQ2xpY2sgfHxcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ic01vZGFsU2VydmljZS5zZXREaXNtaXNzUmVhc29uKERJU01JU1NfUkVBU09OUy5CQUNLUkRPUCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcua2V5Ym9hcmQgJiZcbiAgICAgIHRoaXMubGV2ZWwgPT09IHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKVxuICAgICkge1xuICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5zZXREaXNtaXNzUmVhc29uKERJU01JU1NfUkVBU09OUy5FU0MpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01vZGFsSGlkaW5nIHx8ICF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc01vZGFsSGlkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIGlzQnMzKCkgPyBDTEFTU19OQU1FLklOIDogQ0xBU1NfTkFNRS5TSE9XXG4gICAgKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgICBkb2N1bWVudCAmJlxuICAgICAgICBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgICB9XG4gICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmhpZGUodGhpcy5sZXZlbCk7XG4gICAgICB0aGlzLmlzTW9kYWxIaWRpbmcgPSBmYWxzZTtcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5NT0RBTCA6IDApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENMQVNTX05BTUUgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgaXNCczMsIFV0aWxzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cblxuLyoqIFRoaXMgY29tcG9uZW50IHdpbGwgYmUgYWRkZWQgYXMgYmFja2dyb3VuZCBsYXlvdXQgZm9yIG1vZGFscyBpZiBlbmFibGVkICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1tb2RhbC1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiAnICcsXG4gIGhvc3Q6IHsgY2xhc3M6IENMQVNTX05BTUUuQkFDS0RST1AgfVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0ZWQ7XG4gIH1cblxuICBzZXQgaXNBbmltYXRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQW5pbWF0ZWQgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLkZBREV9YCwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd247XG4gIH1cblxuICBzZXQgaXNTaG93bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzU2hvd24gPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBgJHtDTEFTU19OQU1FLklOfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBgJHtDTEFTU19OQU1FLklOfWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNCczMoKSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgYCR7Q0xBU1NfTkFNRS5TSE9XfWBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgYCR7Q0xBU1NfTkFNRS5TSE9XfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIHByb3RlY3RlZCBfaXNBbmltYXRlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pc1Nob3duID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGAke0NMQVNTX05BTUUuRkFERX1gXG4gICAgICApO1xuICAgICAgVXRpbHMucmVmbG93KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xuLy8gdG9kbzogc2hvdWxkIHdlIHN1cHBvcnQgZW5mb3JjZSBmb2N1cyBpbj9cbi8vIHRvZG86IGluIG9yaWdpbmFsIGJzIHRoZXJlIGFyZSB3YXMgYSB3YXkgdG8gcHJldmVudCBtb2RhbCBmcm9tIHNob3dpbmdcbi8vIHRvZG86IG9yaWdpbmFsIG1vZGFsIGhhZCByZXNpemUgZXZlbnRzXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsXG4gIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZG9jdW1lbnQsIHdpbmRvdywgaXNCczMsIFV0aWxzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ0xBU1NfTkFNRSwgRElTTUlTU19SRUFTT05TLCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBNb2RhbE9wdGlvbnNcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDA7XG5jb25zdCBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuXG4vKiogTWFyayBhbnkgY29kZSB3aXRoIGRpcmVjdGl2ZSB0byBzaG93IGl0J3MgY29udGVudCBpbiBtb2RhbCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzTW9kYWxdJyxcbiAgZXhwb3J0QXM6ICdicy1tb2RhbCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBhbGxvd3MgdG8gc2V0IG1vZGFsIGNvbmZpZ3VyYXRpb24gdmlhIGVsZW1lbnQgcHJvcGVydHkgKi9cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhjb25mOiBNb2RhbE9wdGlvbnMpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmdldENvbmZpZyhjb25mKTtcbiAgfVxuXG4gIGdldCBjb25maWcoKTogTW9kYWxPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgaW1tZWRpYXRlbHkgd2hlbiB0aGUgYHNob3dgIGluc3RhbmNlIG1ldGhvZCBpcyBjYWxsZWQuICovXG4gIEBPdXRwdXQoKVxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtb2RhbCBoYXMgYmVlbiBtYWRlIHZpc2libGUgdG8gdGhlIHVzZXJcbiAgICogKHdpbGwgd2FpdCBmb3IgQ1NTIHRyYW5zaXRpb25zIHRvIGNvbXBsZXRlKVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCBpbW1lZGlhdGVseSB3aGVuXG4gICAqIHRoZSBoaWRlIGluc3RhbmNlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25IaWRlOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbW9kYWwgaGFzIGZpbmlzaGVkIGJlaW5nXG4gICAqIGhpZGRlbiBmcm9tIHRoZSB1c2VyICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSkuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xuXG4gIC8qKiBUaGlzIGZpZWxkIGNvbnRhaW5zIGxhc3QgZGlzbWlzcyByZWFzb24uXG4gICAqIFBvc3NpYmxlIHZhbHVlczogYGJhY2tkcm9wLWNsaWNrYCwgYGVzY2AgYW5kIGBudWxsYFxuICAgKiAoaWYgbW9kYWwgd2FzIGNsb3NlZCBieSBkaXJlY3QgY2FsbCBvZiBgLmhpZGUoKWApLlxuICAgKi9cbiAgZGlzbWlzc1JlYXNvbjogc3RyaW5nO1xuXG4gIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb25maWc6IE1vZGFsT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9pc1Nob3duID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcbiAgcHJvdGVjdGVkIHNjcm9sbGJhcldpZHRoID0gMDtcblxuICBwcm90ZWN0ZWQgdGltZXJIaWRlTW9kYWwgPSAwO1xuICBwcm90ZWN0ZWQgdGltZXJSbUJhY2tEcm9wID0gMDtcblxuICAvLyByZWZlcmVuY2UgdG8gYmFja2Ryb3AgY29tcG9uZW50XG4gIHByb3RlY3RlZCBiYWNrZHJvcDogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIF9iYWNrZHJvcDogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgaXNOZXN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fYmFja2Ryb3AgPSBjbGYuY3JlYXRlTG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnQsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IERJU01JU1NfUkVBU09OUy5CQUNLUkRPUDtcbiAgICB0aGlzLmhpZGUoZXZlbnQpO1xuICB9XG5cbiAgLy8gdG9kbzogY29uc2lkZXIgcHJldmVudGluZyBkZWZhdWx0IGFuZCBzdG9wcGluZyBwcm9wYWdhdGlvblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIG9uRXNjKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xuICAgICAgdGhpcy5kaXNtaXNzUmVhc29uID0gRElTTUlTU19SRUFTT05TLkVTQztcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29uZmlnID0gdm9pZCAwO1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2NvbmZpZyB8fCB0aGlzLmdldENvbmZpZygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zaG93KSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgLyogUHVibGljIG1ldGhvZHMgKi9cblxuICAvKiogQWxsb3dzIHRvIG1hbnVhbGx5IHRvZ2dsZSBtb2RhbCB2aXNpYmlsaXR5ICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKiogQWxsb3dzIHRvIG1hbnVhbGx5IG9wZW4gbW9kYWwgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBudWxsO1xuICAgIHRoaXMub25TaG93LmVtaXQodGhpcyk7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJIaWRlTW9kYWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcblxuICAgIHRoaXMuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICB0aGlzLnNldFNjcm9sbGJhcigpO1xuXG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FLk9QRU4pKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dFbGVtZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQWxsb3dzIHRvIG1hbnVhbGx5IGNsb3NlIG1vZGFsICovXG4gIGhpZGUoZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uSGlkZS5lbWl0KHRoaXMpO1xuXG4gICAgLy8gdG9kbzogYWRkIGFuIG9wdGlvbiB0byBwcmV2ZW50IGhpZGluZ1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lckhpZGVNb2RhbCk7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLklOKTtcbiAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcbiAgICB9XG4gICAgLy8gdGhpcy5fYWRkQ2xhc3NJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xuICAgICAgdGhpcy50aW1lckhpZGVNb2RhbCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLmhpZGVNb2RhbCgpLFxuICAgICAgICBUUkFOU0lUSU9OX0RVUkFUSU9OXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcml2YXRlIG1ldGhvZHMgQGludGVybmFsICovXG4gIHByb3RlY3RlZCBnZXRDb25maWcoY29uZmlnPzogTW9kYWxPcHRpb25zKTogTW9kYWxPcHRpb25zIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgU2hvdyBkaWFsb2dcbiAgICogIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIHNob3dFbGVtZW50KCk6IHZvaWQge1xuICAgIC8vIHRvZG86IHJlcGxhY2UgdGhpcyB3aXRoIGNvbXBvbmVudCBsb2FkZXIgdXNhZ2VcbiAgICBpZiAoXG4gICAgICAhdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERVxuICAgICkge1xuICAgICAgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAgICdmYWxzZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLW1vZGFsJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZGlzcGxheScsXG4gICAgICAnYmxvY2snXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgMFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XG4gICAgICBVdGlscy5yZWZsb3codGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuSU4pO1xuICAgIGlmICghaXNCczMoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLlNIT1cpO1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xuICAgICAgc2V0VGltZW91dCh0cmFuc2l0aW9uQ29tcGxldGUsIFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBoaWRlTW9kYWwoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZGlzcGxheScsXG4gICAgICAnbm9uZSdcbiAgICApO1xuICAgIHRoaXMuc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNldEFkanVzdG1lbnRzKCk7XG4gICAgICB0aGlzLmZvY3VzT3RoZXJNb2RhbCgpO1xuICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdG9kbzogb3JpZ2luYWwgc2hvdyB3YXMgY2FsbGluZyBhIGNhbGxiYWNrIHdoZW4gZG9uZSwgYnV0IHdlIGNhbiB1c2VcbiAgLy8gcHJvbWlzZVxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBzaG93QmFja2Ryb3AoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2lzU2hvd24gJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wICYmXG4gICAgICAoIXRoaXMuYmFja2Ryb3AgfHwgIXRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93bilcbiAgICApIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wXG4gICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgLnRvKCdib2R5JylcbiAgICAgICAgLnNob3coe2lzQW5pbWF0ZWQ6IHRoaXMuX2NvbmZpZy5hbmltYXRlZH0pO1xuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMuX2JhY2tkcm9wLl9jb21wb25lbnRSZWY7XG5cbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNBbmltYXRlZCkge1xuICAgICAgICB0aGlzLnRpbWVyUm1CYWNrRHJvcCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgIGNhbGxiYWNrUmVtb3ZlLFxuICAgICAgICAgIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT05cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XG4gIH1cblxuICAvKiogRXZlbnRzIHRyaWNrcyAqL1xuXG4gIC8vIG5vIG5lZWQgZm9yIGl0XG4gIC8vIHByb3RlY3RlZCBzZXRFc2NhcGVFdmVudCgpOnZvaWQge1xuICAvLyAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAvLyAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XG4gIC8vICAgICAgICAgdGhpcy5oaWRlKClcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy9cbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gIC8vICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gcHJvdGVjdGVkIHNldFJlc2l6ZUV2ZW50KCk6dm9pZCB7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCcnLCBFdmVudC5SRVNJWkUpKTtcbiAgLy8gaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgLy8gICAkKHdpbmRvdykub24oRXZlbnQuUkVTSVpFLCAkLnByb3h5KHRoaXMuX2hhbmRsZVVwZGF0ZSwgdGhpcykpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gIC8vIH1cbiAgLy8gfVxuXG4gIHByb3RlY3RlZCBmb2N1c090aGVyTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3RoZXJPcGVuZWRNb2RhbHMgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5bYnNNb2RhbF0nKTtcbiAgICBpZiAoIW90aGVyT3BlbmVkTW9kYWxzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvdGhlck9wZW5lZE1vZGFsc1tvdGhlck9wZW5lZE1vZGFscy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgcmVzZXRBZGp1c3RtZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdwYWRkaW5nTGVmdCcsXG4gICAgICAnJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAncGFkZGluZ1JpZ2h0JyxcbiAgICAgICcnXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBjaGVja1Njcm9sbGJhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsXG4gICAgICAxMFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgK1xuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nfXB4YDtcbiAgfVxuXG4gIC8vIHRoeCBkLndhbHNoXG4gIHByb3RlY3RlZCBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ0xBU1NfTkFNRSxcbiAgbW9kYWxDb25maWdEZWZhdWx0cyxcbiAgTW9kYWxPcHRpb25zLFxuICBUUkFOU0lUSU9OX0RVUkFUSU9OU1xufSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJy4vYnMtbW9kYWwtcmVmLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNNb2RhbFNlcnZpY2Uge1xuICAvLyBjb25zdHJ1Y3RvciBwcm9wc1xuICBjb25maWc6IE1vZGFsT3B0aW9ucyA9IG1vZGFsQ29uZmlnRGVmYXVsdHM7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XG5cbiAgcHJvdGVjdGVkIHNjcm9sbGJhcldpZHRoID0gMDtcblxuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BMb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XG4gIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb24gPSAnJztcblxuICBwcml2YXRlIGxvYWRlcnM6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD5bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBwcml2YXRlIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+KFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIC8qKiBTaG93cyBhIG1vZGFsICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2hvdyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LCBjb25maWc/OiBNb2RhbE9wdGlvbnMpOiBCc01vZGFsUmVmIHtcbiAgICB0aGlzLm1vZGFsc0NvdW50Kys7XG4gICAgdGhpcy5fY3JlYXRlTG9hZGVycygpO1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLl9zaG93TW9kYWwoY29udGVudCk7XG4gIH1cblxuICBoaWRlKGxldmVsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RhbHNDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5faGlkZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgfVxuICAgIHRoaXMubW9kYWxzQ291bnQgPSB0aGlzLm1vZGFsc0NvdW50ID49IDEgPyB0aGlzLm1vZGFsc0NvdW50IC0gMSA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwobGV2ZWwpO1xuICAgICAgdGhpcy5yZW1vdmVMb2FkZXJzKGxldmVsKTtcbiAgICB9LCB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMCk7XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQmFja2Ryb3BFbmFibGVkID1cbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJztcbiAgICBjb25zdCBpc0JhY2tkcm9wSW5ET00gPVxuICAgICAgIXRoaXMuYmFja2Ryb3BSZWYgfHwgIXRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93bjtcblxuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgIGlmIChpc0JhY2tkcm9wRW5hYmxlZCAmJiBpc0JhY2tkcm9wSW5ET00pIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3BMb2FkZXJcbiAgICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXG4gICAgICAgICAgLnRvKCdib2R5JylcbiAgICAgICAgICAuc2hvdyh7IGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkIH0pO1xuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmID0gdGhpcy5fYmFja2Ryb3BMb2FkZXIuX2NvbXBvbmVudFJlZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGlkZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iYWNrZHJvcFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVCYWNrZHJvcCgpLCBkdXJhdGlvbik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfc2hvd01vZGFsKGNvbnRlbnQ6IGFueSk6IEJzTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW3RoaXMubG9hZGVycy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBic01vZGFsUmVmID0gbmV3IEJzTW9kYWxSZWYoKTtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lclJlZiA9IG1vZGFsTG9hZGVyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IE1vZGFsT3B0aW9ucywgdXNlVmFsdWU6IHRoaXMuY29uZmlnIH0pXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzTW9kYWxSZWYsIHVzZVZhbHVlOiBic01vZGFsUmVmIH0pXG4gICAgICAuYXR0YWNoKE1vZGFsQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKCdib2R5JylcbiAgICAgIC5zaG93KHtjb250ZW50LCBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCwgaW5pdGlhbFN0YXRlOiB0aGlzLmNvbmZpZy5pbml0aWFsU3RhdGUsIGJzTW9kYWxTZXJ2aWNlOiB0aGlzfSk7XG4gICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UubGV2ZWwgPSB0aGlzLmdldE1vZGFsc0NvdW50KCk7XG4gICAgYnNNb2RhbFJlZi5oaWRlID0gKCkgPT4ge1xuICAgICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgIH07XG4gICAgYnNNb2RhbFJlZi5jb250ZW50ID0gbW9kYWxMb2FkZXIuZ2V0SW5uZXJDb21wb25lbnQoKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGJzTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tsZXZlbCAtIDFdO1xuICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyLmhpZGUoKTtcbiAgICB0aGlzLmJhY2tkcm9wUmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBBRlRFUiBQUiBNRVJHRSBNT0RBTC5DT01QT05FTlQgV0lMTCBCRSBVU0lORyBUSElTIENPREUgKi9cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcbiAgICAgIDEwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUxvYWRlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vblNob3cpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9uU2hvd24pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMub25IaWRlKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25IaWRkZW4sIHRoaXMub25IaWRkZW4pO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChcbiAgICAgIChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBsb2FkZXIuaW5zdGFuY2UubGV2ZWwgPSBpICsgMTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgICBNb2RhbERpcmVjdGl2ZSxcbiAgICBNb2RhbENvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1vZGFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQnNNb2RhbFNlcnZpY2UsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFhcUIsUUFBUTs7O2dCQVg1QixVQUFVOztxQkFGWDs7Ozs7OztBQ0FBLElBQUE7SUFHRSw4QkFBWSxPQUE2Qjt1QkFGL0IsSUFBSTtRQUdaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlCOytCQUxIO0lBTUM7Ozs7OztBQ05EOzs7O2dCQUdDLFVBQVU7O3VCQUhYOztBQXVDTyxxQkFBTSxtQkFBbUIsR0FBaUI7SUFDL0MsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxtQkFBbUIsRUFBRSxLQUFLO0lBQzFC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