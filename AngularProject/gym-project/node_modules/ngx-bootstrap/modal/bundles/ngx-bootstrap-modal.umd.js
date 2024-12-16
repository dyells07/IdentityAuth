(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/modal', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].modal = {}),global.ng.core,global.utils,global.componentLoader,global.positioning));
}(this, (function (exports,core,utils,componentLoader,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalRef = (function () {
        function BsModalRef() {
            /**
             * Hides the modal
             */
            this.hide = Function;
        }
        BsModalRef.decorators = [
            { type: core.Injectable }
        ];
        return BsModalRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalBackdropOptions = (function () {
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
    var ModalOptions = (function () {
        function ModalOptions() {
        }
        ModalOptions.decorators = [
            { type: core.Injectable }
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
    var ModalContainerComponent = (function () {
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
                    _this._renderer.addClass(_this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
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
                this._renderer.removeClass(this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
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
            { type: core.Component, args: [{
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
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalOptions, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        ModalContainerComponent.propDecorators = {
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['window:keydown.esc', ['$event'],] },],
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
    var ModalBackdropComponent = (function () {
        function ModalBackdropComponent(element, renderer) {
            this._isShown = false;
            this.element = element;
            this.renderer = renderer;
        }
        Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAnimated;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isAnimated = value;
                // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isShown = value;
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                if (!utils.isBs3()) {
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
                    utils.Utils.reflow(this.element.nativeElement);
                }
                this.isShown = true;
            };
        ModalBackdropComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-backdrop',
                        template: ' ',
                        host: { class: CLASS_NAME.BACKDROP }
                    }] }
        ];
        /** @nocollapse */
        ModalBackdropComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
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
    var ModalDirective = (function () {
        function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
            this._element = _element;
            this._renderer = _renderer;
            /**
             * This event fires immediately when the `show` instance method is called.
             */
            this.onShow = new core.EventEmitter();
            /**
             * This event is fired when the modal has been made visible to the user
             * (will wait for CSS transitions to complete)
             */
            this.onShown = new core.EventEmitter();
            /**
             * This event is fired immediately when
             * the hide instance method has been called.
             */
            this.onHide = new core.EventEmitter();
            /**
             * This event is fired when the modal has finished being
             * hidden from the user (will wait for CSS transitions to complete).
             */
            this.onHidden = new core.EventEmitter();
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
             */ function () {
                return this._config;
            },
            set: /**
             * allows to set modal configuration via element property
             * @param {?} conf
             * @return {?}
             */ function (conf) {
                this._config = this.getConfig(conf);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalDirective.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
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
                if (utils.document && utils.document.body) {
                    if (utils.document.body.classList.contains(CLASS_NAME.OPEN)) {
                        this.isNested = true;
                    }
                    else {
                        this._renderer.addClass(utils.document.body, CLASS_NAME.OPEN);
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
                utils.window.clearTimeout(this.timerHideModal);
                utils.window.clearTimeout(this.timerRmBackDrop);
                this._isShown = false;
                this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
                    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
                }
                // this._addClassIn = false;
                if (this._config.animated) {
                    this.timerHideModal = utils.window.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
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
                    if (utils.document && utils.document.body) {
                        utils.document.body.appendChild(this._element.nativeElement);
                    }
                }
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
                this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
                if (this._config.animated) {
                    utils.Utils.reflow(this._element.nativeElement);
                }
                // this._addClassIn = true;
                this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
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
                        if (utils.document && utils.document.body) {
                            _this._renderer.removeClass(utils.document.body, CLASS_NAME.OPEN);
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
                        this.timerRmBackDrop = utils.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
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
                this.isBodyOverflowing = utils.document.body.clientWidth < utils.window.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.setScrollbar = /**
         * @return {?}
         */
            function () {
                if (!utils.document) {
                    return;
                }
                this.originalBodyPadding = parseInt(utils.window
                    .getComputedStyle(utils.document.body)
                    .getPropertyValue('padding-right') || 0, 10);
                if (this.isBodyOverflowing) {
                    utils.document.body.style.paddingRight = this.originalBodyPadding +
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
                utils.document.body.style.paddingRight = this.originalBodyPadding + "px";
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
                this._renderer.appendChild(utils.document.body, scrollDiv);
                var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                this._renderer.removeChild(utils.document.body, scrollDiv);
                return scrollbarWidth;
            };
        ModalDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsModal]',
                        exportAs: 'bs-modal'
                    },] }
        ];
        /** @nocollapse */
        ModalDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        ModalDirective.propDecorators = {
            "config": [{ type: core.Input },],
            "onShow": [{ type: core.Output },],
            "onShown": [{ type: core.Output },],
            "onHide": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] },],
        };
        return ModalDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalService = (function () {
        function BsModalService(rendererFactory, clf) {
            this.clf = clf;
            // constructor props
            this.config = modalConfigDefaults;
            // tslint:disable-next-line:no-any
            this.onShow = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onShown = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHide = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHidden = new core.EventEmitter();
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsModalService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        return BsModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalModule = (function () {
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
                    providers: [BsModalService, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        ModalModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.BsModalRef = BsModalRef;
    exports.ModalBackdropOptions = ModalBackdropOptions;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalBackdropComponent = ModalBackdropComponent;
    exports.ModalOptions = ModalOptions;
    exports.ModalDirective = ModalDirective;
    exports.ModalModule = ModalModule;
    exports.BsModalService = BsModalService;
    exports.ɵa = CLASS_NAME;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbW9kYWwvYnMtbW9kYWwtcmVmLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3Aub3B0aW9ucy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsUmVmIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29udGVudD86IGFueSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBtb2RhbFxuICAgKi9cbiAgaGlkZTogKCkgPT4gdm9pZCA9IEZ1bmN0aW9uO1xufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BPcHRpb25zIHtcbiAgYW5pbWF0ZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTW9kYWxCYWNrZHJvcE9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc05hbWUsIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LFxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogTW9kYWwgZGF0YVxuICAgKi9cbiAgaW5pdGlhbFN0YXRlPzogT2JqZWN0O1xufVxuXG5cbmV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIHNob3c6IGZhbHNlLFxuICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcbiAgY2xhc3M6ICcnLFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgaW5pdGlhbFN0YXRlOiB7fVxufTtcblxuZXhwb3J0IGNvbnN0IENMQVNTX05BTUU6IENsYXNzTmFtZSA9IHtcbiAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTjogJ21vZGFsLW9wZW4nLFxuICBGQURFOiAnZmFkZScsXG4gIElOOiAnaW4nLCAvLyBiczNcbiAgU0hPVzogJ3Nob3cnIC8vIGJzNFxufTtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SOiBTZWxlY3RvciA9IHtcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTlM6IFRyYW5zaXRpb25EdXJhdGlvbnMgPSB7XG4gIE1PREFMOiAzMDAsXG4gIEJBQ0tEUk9QOiAxNTBcbn07XG5cbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlM6IERpc21pc3NSZWFzb25zID0ge1xuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgRVNDOiAnZXNjJ1xufTtcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ0xBU1NfTkFNRSxcbiAgRElTTUlTU19SRUFTT05TLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vYnMtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cIidtb2RhbC1kaWFsb2cnICsgKGNvbmZpZy5jbGFzcyA/ICcgJyArIGNvbmZpZy5jbGFzcyA6ICcnKVwiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21vZGFsJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICAnW2F0dHIuYXJpYS1tb2RhbF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnM7XG4gIGlzU2hvd24gPSBmYWxzZTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgaXNBbmltYXRlZDogYm9vbGVhbjtcbiAgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlO1xuICBwcml2YXRlIGlzTW9kYWxIaWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbE9wdGlvbnMsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBDTEFTU19OQU1FLkZBREVcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ2Jsb2NrJ1xuICAgICk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgaXNCczMoKSA/IENMQVNTX05BTUUuSU4gOiBDTEFTU19OQU1FLlNIT1dcbiAgICAgICk7XG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgaWYgKHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0U2Nyb2xsYmFyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuQkFDS1JET1ApO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgb25Fc2MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmtleWJvYXJkICYmXG4gICAgICB0aGlzLmxldmVsID09PSB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KClcbiAgICApIHtcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xuICAgICk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgZG9jdW1lbnQgJiZcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgICAgfVxuICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5oaWRlKHRoaXMubGV2ZWwpO1xuICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuTU9EQUwgOiAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDTEFTU19OQU1FIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5cbi8qKiBUaGlzIGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGFzIGJhY2tncm91bmQgbGF5b3V0IGZvciBtb2RhbHMgaWYgZW5hYmxlZCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbW9kYWwtYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogJyAnLFxuICBob3N0OiB7IGNsYXNzOiBDTEFTU19OQU1FLkJBQ0tEUk9QIH1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdldCBpc0FuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FuaW1hdGVkO1xuICB9XG5cbiAgc2V0IGlzQW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FuaW1hdGVkID0gdmFsdWU7XG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke0NsYXNzTmFtZS5GQURFfWAsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzU2hvd24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1Nob3duID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBwcm90ZWN0ZWQgX2lzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaXNTaG93biA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBgJHtDTEFTU19OQU1FLkZBREV9YFxuICAgICAgKTtcbiAgICAgIFV0aWxzLnJlZmxvdyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgKi9cbi8vIHRvZG86IHNob3VsZCB3ZSBzdXBwb3J0IGVuZm9yY2UgZm9jdXMgaW4/XG4vLyB0b2RvOiBpbiBvcmlnaW5hbCBicyB0aGVyZSBhcmUgd2FzIGEgd2F5IHRvIHByZXZlbnQgbW9kYWwgZnJvbSBzaG93aW5nXG4vLyB0b2RvOiBvcmlnaW5hbCBtb2RhbCBoYWQgcmVzaXplIGV2ZW50c1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRvY3VtZW50LCB3aW5kb3csIGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsIERJU01JU1NfUkVBU09OUywgbW9kYWxDb25maWdEZWZhdWx0cywgTW9kYWxPcHRpb25zXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwO1xuY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcblxuLyoqIE1hcmsgYW55IGNvZGUgd2l0aCBkaXJlY3RpdmUgdG8gc2hvdyBpdCdzIGNvbnRlbnQgaW4gbW9kYWwgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic01vZGFsXScsXG4gIGV4cG9ydEFzOiAnYnMtbW9kYWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogYWxsb3dzIHRvIHNldCBtb2RhbCBjb25maWd1cmF0aW9uIHZpYSBlbGVtZW50IHByb3BlcnR5ICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoY29uZjogTW9kYWxPcHRpb25zKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5nZXRDb25maWcoY29uZik7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGltbWVkaWF0ZWx5IHdoZW4gdGhlIGBzaG93YCBpbnN0YW5jZSBtZXRob2QgaXMgY2FsbGVkLiAqL1xuICBAT3V0cHV0KClcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbW9kYWwgaGFzIGJlZW4gbWFkZSB2aXNpYmxlIHRvIHRoZSB1c2VyXG4gICAqICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSlcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgaW1tZWRpYXRlbHkgd2hlblxuICAgKiB0aGUgaGlkZSBpbnN0YW5jZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSGlkZTogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCBiZWluZ1xuICAgKiBoaWRkZW4gZnJvbSB0aGUgdXNlciAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcblxuICAvKiogVGhpcyBmaWVsZCBjb250YWlucyBsYXN0IGRpc21pc3MgcmVhc29uLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGBiYWNrZHJvcC1jbGlja2AsIGBlc2NgIGFuZCBgbnVsbGBcbiAgICogKGlmIG1vZGFsIHdhcyBjbG9zZWQgYnkgZGlyZWN0IGNhbGwgb2YgYC5oaWRlKClgKS5cbiAgICovXG4gIGRpc21pc3NSZWFzb246IHN0cmluZztcblxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29uZmlnOiBNb2RhbE9wdGlvbnM7XG4gIHByb3RlY3RlZCBfaXNTaG93biA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIHRpbWVySGlkZU1vZGFsID0gMDtcbiAgcHJvdGVjdGVkIHRpbWVyUm1CYWNrRHJvcCA9IDA7XG5cbiAgLy8gcmVmZXJlbmNlIHRvIGJhY2tkcm9wIGNvbXBvbmVudFxuICBwcm90ZWN0ZWQgYmFja2Ryb3A6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfYmFja2Ryb3A6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcblxuICBwcml2YXRlIGlzTmVzdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIHRoaXMuX2JhY2tkcm9wID0gY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50LFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8XG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuQkFDS1JET1A7XG4gICAgdGhpcy5oaWRlKGV2ZW50KTtcbiAgfVxuXG4gIC8vIHRvZG86IGNvbnNpZGVyIHByZXZlbnRpbmcgZGVmYXVsdCBhbmQgc3RvcHBpbmcgcHJvcGFnYXRpb25cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IERJU01JU1NfUkVBU09OUy5FU0M7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHZvaWQgMDtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9jb25maWcgfHwgdGhpcy5nZXRDb25maWcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuc2hvdykge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qIFB1YmxpYyBtZXRob2RzICovXG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgbW9kYWwgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBvcGVuIG1vZGFsICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5kaXNtaXNzUmVhc29uID0gbnVsbDtcbiAgICB0aGlzLm9uU2hvdy5lbWl0KHRoaXMpO1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclJtQmFja0Ryb3ApO1xuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKTtcblxuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRS5PUEVOKSkge1xuICAgICAgICB0aGlzLmlzTmVzdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBjbG9zZSBtb2RhbCAqL1xuICBoaWRlKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcblxuICAgIC8vIHRvZG86IGFkZCBhbiBvcHRpb24gdG8gcHJldmVudCBoaWRpbmdcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJIaWRlTW9kYWwpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lclJtQmFja0Ryb3ApO1xuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5JTik7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuU0hPVyk7XG4gICAgfVxuICAgIC8vIHRoaXMuX2FkZENsYXNzSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMudGltZXJIaWRlTW9kYWwgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5oaWRlTW9kYWwoKSxcbiAgICAgICAgVFJBTlNJVElPTl9EVVJBVElPTlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogUHJpdmF0ZSBtZXRob2RzIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnKGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogIFNob3cgZGlhbG9nXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudCgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiByZXBsYWNlIHRoaXMgd2l0aCBjb21wb25lbnQgbG9hZGVyIHVzYWdlXG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREVcbiAgICApIHtcbiAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWhpZGRlbicsXG4gICAgICAnZmFsc2UnXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1tb2RhbCcsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ2Jsb2NrJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xuICAgICAgVXRpbHMucmVmbG93KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fYWRkQ2xhc3NJbiA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLklOKTtcbiAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcyk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQodHJhbnNpdGlvbkNvbXBsZXRlLCBUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgaGlkZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWhpZGRlbicsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ25vbmUnXG4gICAgKTtcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgdGhpcy5mb2N1c090aGVyTW9kYWwoKTtcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRvZG86IG9yaWdpbmFsIHNob3cgd2FzIGNhbGxpbmcgYSBjYWxsYmFjayB3aGVuIGRvbmUsIGJ1dCB3ZSBjYW4gdXNlXG4gIC8vIHByb21pc2VcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgc2hvd0JhY2tkcm9wKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9pc1Nob3duICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCAmJlxuICAgICAgKCF0aGlzLmJhY2tkcm9wIHx8ICF0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzU2hvd24pXG4gICAgKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcFxuICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXG4gICAgICAgIC50bygnYm9keScpXG4gICAgICAgIC5zaG93KHtpc0FuaW1hdGVkOiB0aGlzLl9jb25maWcuYW5pbWF0ZWR9KTtcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcC5fY29tcG9uZW50UmVmO1xuXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy50aW1lclJtQmFja0Ryb3AgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSxcbiAgICAgICAgICBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpO1xuICB9XG5cbiAgLyoqIEV2ZW50cyB0cmlja3MgKi9cblxuICAvLyBubyBuZWVkIGZvciBpdFxuICAvLyBwcm90ZWN0ZWQgc2V0RXNjYXBlRXZlbnQoKTp2b2lkIHtcbiAgLy8gICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgLy8gICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyNykge1xuICAvLyAgICAgICAgIHRoaXMuaGlkZSgpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vXG4gIC8vICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHByb3RlY3RlZCBzZXRSZXNpemVFdmVudCgpOnZvaWQge1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnJywgRXZlbnQuUkVTSVpFKSk7XG4gIC8vIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gIC8vICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAvLyB9XG4gIC8vIH1cblxuICBwcm90ZWN0ZWQgZm9jdXNPdGhlck1vZGFsKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG90aGVyT3BlbmVkTW9kYWxzID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluW2JzTW9kYWxdJyk7XG4gICAgaWYgKCFvdGhlck9wZW5lZE1vZGFscy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3RoZXJPcGVuZWRNb2RhbHNbb3RoZXJPcGVuZWRNb2RhbHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlc2V0QWRqdXN0bWVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAncGFkZGluZ0xlZnQnLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3BhZGRpbmdSaWdodCcsXG4gICAgICAnJ1xuICAgICk7XG4gIH1cblxuICAvKiogU2Nyb2xsIGJhciB0cmlja3MgKi9cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3dcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZXNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XG4gIH1cblxuICAvLyB0aHggZC53YWxzaFxuICBwcm90ZWN0ZWQgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsXG4gIG1vZGFsQ29uZmlnRGVmYXVsdHMsXG4gIE1vZGFsT3B0aW9ucyxcbiAgVFJBTlNJVElPTl9EVVJBVElPTlNcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICcuL2JzLW1vZGFsLXJlZi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxTZXJ2aWNlIHtcbiAgLy8gY29uc3RydWN0b3IgcHJvcHNcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnMgPSBtb2RhbENvbmZpZ0RlZmF1bHRzO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xuXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIGJhY2tkcm9wUmVmOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgX2JhY2tkcm9wTG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgbW9kYWxzQ291bnQgPSAwO1xuICBwcml2YXRlIGxhc3REaXNtaXNzUmVhc29uID0gJyc7XG5cbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcblxuICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MiwgcHJpdmF0ZSBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKiogU2hvd3MgYSBtb2RhbCAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNob3coY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSwgY29uZmlnPzogTW9kYWxPcHRpb25zKTogQnNNb2RhbFJlZiB7XG4gICAgdGhpcy5tb2RhbHNDb3VudCsrO1xuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCk7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvd01vZGFsKGNvbnRlbnQpO1xuICB9XG5cbiAgaGlkZShsZXZlbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxID8gdGhpcy5tb2RhbHNDb3VudCAtIDEgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKGxldmVsKTtcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVycyhsZXZlbCk7XG4gICAgfSwgdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDApO1xuICB9XG5cbiAgX3Nob3dCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0JhY2tkcm9wRW5hYmxlZCA9XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCB8fCB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYyc7XG4gICAgY29uc3QgaXNCYWNrZHJvcEluRE9NID1cbiAgICAgICF0aGlzLmJhY2tkcm9wUmVmIHx8ICF0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd247XG5cbiAgICBpZiAodGhpcy5tb2RhbHNDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuXG4gICAgICBpZiAoaXNCYWNrZHJvcEVuYWJsZWQgJiYgaXNCYWNrZHJvcEluRE9NKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyXG4gICAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxuICAgICAgICAgIC50bygnYm9keScpXG4gICAgICAgICAgLnNob3coeyBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCB9KTtcbiAgICAgICAgdGhpcy5iYWNrZHJvcFJlZiA9IHRoaXMuX2JhY2tkcm9wTG9hZGVyLl9jb21wb25lbnRSZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hpZGVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQmFja2Ryb3AoKSwgZHVyYXRpb24pO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgX3Nob3dNb2RhbChjb250ZW50OiBhbnkpOiBCc01vZGFsUmVmIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1t0aGlzLmxvYWRlcnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYnNNb2RhbFJlZiA9IG5ldyBCc01vZGFsUmVmKCk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXJSZWYgPSBtb2RhbExvYWRlclxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBNb2RhbE9wdGlvbnMsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZyB9KVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBCc01vZGFsUmVmLCB1c2VWYWx1ZTogYnNNb2RhbFJlZiB9KVxuICAgICAgLmF0dGFjaChNb2RhbENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50bygnYm9keScpXG4gICAgICAuc2hvdyh7Y29udGVudCwgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQsIGluaXRpYWxTdGF0ZTogdGhpcy5jb25maWcuaW5pdGlhbFN0YXRlLCBic01vZGFsU2VydmljZTogdGhpc30pO1xuICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmxldmVsID0gdGhpcy5nZXRNb2RhbHNDb3VudCgpO1xuICAgIGJzTW9kYWxSZWYuaGlkZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICB9O1xuICAgIGJzTW9kYWxSZWYuY29udGVudCA9IG1vZGFsTG9hZGVyLmdldElubmVyQ29tcG9uZW50KCkgfHwgbnVsbDtcblxuICAgIHJldHVybiBic01vZGFsUmVmO1xuICB9XG5cbiAgX2hpZGVNb2RhbChsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbbGV2ZWwgLSAxXTtcbiAgICBpZiAobW9kYWxMb2FkZXIpIHtcbiAgICAgIG1vZGFsTG9hZGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbHNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGFsc0NvdW50O1xuICB9XG5cbiAgc2V0RGlzbWlzc1JlYXNvbihyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSByZWFzb247XG4gIH1cblxuICByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlci5oaWRlKCk7XG4gICAgdGhpcy5iYWNrZHJvcFJlZiA9IG51bGw7XG4gIH1cblxuICAvKiogQUZURVIgUFIgTUVSR0UgTU9EQUwuQ09NUE9ORU5UIFdJTEwgQkUgVVNJTkcgVEhJUyBDT0RFICovXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xuICAvKiogQGludGVybmFsICovXG4gIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIHNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3dcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAnMCcsXG4gICAgICAxMFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgK1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nfXB4YDtcbiAgfVxuXG4gIC8vIHRoeCBkLndhbHNoXG4gIHByaXZhdGUgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVMb2FkZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZVNob3csIHRoaXMub25TaG93KTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25TaG93biwgdGhpcy5vblNob3duKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVIaWRlLCB0aGlzLm9uSGlkZSk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uSGlkZGVuLCB0aGlzLm9uSGlkZGVuKTtcbiAgICB0aGlzLmxvYWRlcnMucHVzaChsb2FkZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMb2FkZXJzKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRlcnMuc3BsaWNlKGxldmVsIC0gMSwgMSk7XG4gICAgdGhpcy5sb2FkZXJzLmZvckVhY2goXG4gICAgICAobG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgbG9hZGVyLmluc3RhbmNlLmxldmVsID0gaSArIDE7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBjb3B5RXZlbnQoZnJvbTogRXZlbnRFbWl0dGVyPGFueT4sIHRvOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIGZyb20uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRvLmVtaXQodGhpcy5sYXN0RGlzbWlzc1JlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vYnMtbW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsXG4gICAgTW9kYWxEaXJlY3RpdmUsXG4gICAgTW9kYWxDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNb2RhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0JzTW9kYWxTZXJ2aWNlLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJpc0JzMyIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJIb3N0TGlzdGVuZXIiLCJVdGlscyIsIkV2ZW50RW1pdHRlciIsImRvY3VtZW50Iiwid2luZG93IiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJJbnB1dCIsIk91dHB1dCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJQb3NpdGlvbmluZ1NlcnZpY2UiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozt3QkFhcUIsUUFBUTs7O29CQVg1QkEsZUFBVTs7eUJBRlg7Ozs7Ozs7QUNBQSxRQUFBO1FBR0UsOEJBQVksT0FBNkI7MkJBRi9CLElBQUk7WUFHWixN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