(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/collapse'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}),global.ng.core,global.utils,global.ng.common,global.collapse));
}(this, (function (exports,core,utils,common,collapse) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = (function () {
        function AccordionConfig() {
            /**
             * Whether the other panels should be closed when a panel is opened
             */
            this.closeOthers = false;
        }
        AccordionConfig.decorators = [
            { type: core.Injectable }
        ];
        return AccordionConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Displays collapsible content panels for presenting information in a limited amount of space.
     */
    var AccordionComponent = (function () {
        function AccordionComponent(config) {
            this.groups = [];
            Object.assign(this, config);
        }
        /**
         * @param {?} openGroup
         * @return {?}
         */
        AccordionComponent.prototype.closeOtherPanels = /**
         * @param {?} openGroup
         * @return {?}
         */
            function (openGroup) {
                if (!this.closeOthers) {
                    return;
                }
                this.groups.forEach(function (group) {
                    if (group !== openGroup) {
                        group.isOpen = false;
                    }
                });
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.addGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                this.groups.push(group);
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.removeGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var /** @type {?} */ index = this.groups.indexOf(group);
                if (index !== -1) {
                    this.groups.splice(index, 1);
                }
            };
        AccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accordion',
                        template: "<ng-content></ng-content>",
                        host: {
                            '[attr.aria-multiselectable]': 'closeOthers',
                            role: 'tablist',
                            class: 'panel-group',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionComponent.ctorParameters = function () {
            return [
                { type: AccordionConfig, },
            ];
        };
        AccordionComponent.propDecorators = {
            "closeOthers": [{ type: core.Input },],
        };
        return AccordionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * ### Accordion heading
     * Instead of using `heading` attribute on the `accordion-group`, you can use
     * an `accordion-heading` attribute on `any` element inside of a group that
     * will be used as group's header template.
     */
    var AccordionPanelComponent = (function () {
        function AccordionPanelComponent(accordion) {
            /**
             * Emits when the opened state changes
             */
            this.isOpenChange = new core.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            get: /**
             * Is accordion group open or closed. This property supports two-way binding
             * @return {?}
             */ function () {
                return this._isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                if (value !== this.isOpen) {
                    if (value) {
                        this.accordion.closeOtherPanels(this);
                    }
                    this._isOpen = value;
                    Promise.resolve(null).then(function () {
                        _this.isOpenChange.emit(value);
                    })
                        .catch(function (error) {
                        /* tslint:disable: no-console */
                        console.log(error);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.panelClass = this.panelClass || 'panel-default';
                this.accordion.addGroup(this);
            };
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.accordion.removeGroup(this);
            };
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.toggleOpen = /**
         * @return {?}
         */
            function () {
                if (!this.isDisabled) {
                    this.isOpen = !this.isOpen;
                }
            };
        AccordionPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accordion-group, accordion-panel',
                        template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                        host: {
                            class: 'panel',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionPanelComponent.ctorParameters = function () {
            return [
                { type: AccordionComponent, decorators: [{ type: core.Inject, args: [AccordionComponent,] },] },
            ];
        };
        AccordionPanelComponent.propDecorators = {
            "heading": [{ type: core.Input },],
            "panelClass": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "isOpenChange": [{ type: core.Output },],
            "isOpen": [{ type: core.HostBinding, args: ['class.panel-open',] }, { type: core.Input },],
        };
        return AccordionPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AccordionModule = (function () {
        function AccordionModule() {
        }
        /**
         * @return {?}
         */
        AccordionModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: AccordionModule, providers: [AccordionConfig] };
            };
        AccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, collapse.CollapseModule],
                        declarations: [AccordionComponent, AccordionPanelComponent],
                        exports: [AccordionComponent, AccordionPanelComponent]
                    },] }
        ];
        return AccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.AccordionPanelComponent = AccordionPanelComponent;
    exports.AccordionComponent = AccordionComponent;
    exports.AccordionModule = AccordionModule;
    exports.AccordionConfig = AccordionConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hY2NvcmRpb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24uY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UsIHByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgQWNjb3JkaW9uQ29tcG9uZW50LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29uZmlnIHtcbiAgLyoqIFdoZXRoZXIgdGhlIG90aGVyIHBhbmVscyBzaG91bGQgYmUgY2xvc2VkIHdoZW4gYSBwYW5lbCBpcyBvcGVuZWQgKi9cbiAgY2xvc2VPdGhlcnM6IEJvb2xlYW4gPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XG5cbi8qKiBEaXNwbGF5cyBjb2xsYXBzaWJsZSBjb250ZW50IHBhbmVscyBmb3IgcHJlc2VudGluZyBpbmZvcm1hdGlvbiBpbiBhIGxpbWl0ZWQgYW1vdW50IG9mIHNwYWNlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZV0nOiAnY2xvc2VPdGhlcnMnLFxuICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICBjbGFzczogJ3BhbmVsLWdyb3VwJyxcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gIC8qKiBpZiBgdHJ1ZWAgZXhwYW5kaW5nIG9uZSBpdGVtIHdpbGwgY2xvc2UgYWxsIG90aGVycyAqL1xuICBASW5wdXQoKSBjbG9zZU90aGVyczogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgZ3JvdXBzOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBBY2NvcmRpb25Db25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBjbG9zZU90aGVyUGFuZWxzKG9wZW5Hcm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gIH1cblxuICByZW1vdmVHcm91cChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuLyoqXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcbiAqIEluc3RlYWQgb2YgdXNpbmcgYGhlYWRpbmdgIGF0dHJpYnV0ZSBvbiB0aGUgYGFjY29yZGlvbi1ncm91cGAsIHlvdSBjYW4gdXNlXG4gKiBhbiBgYWNjb3JkaW9uLWhlYWRpbmdgIGF0dHJpYnV0ZSBvbiBgYW55YCBlbGVtZW50IGluc2lkZSBvZiBhIGdyb3VwIHRoYXRcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAncGFuZWwnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBDbGlja2FibGUgdGV4dCBpbiBhY2NvcmRpb24ncyBncm91cCBoZWFkZXIsIGNoZWNrIGBhY2NvcmRpb24gaGVhZGluZ2AgYmVsb3cgZm9yIHVzaW5nIGh0bWwgaW4gaGVhZGVyICovXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcbiAgLyoqIFByb3ZpZGVzIGFuIGFiaWxpdHkgdG8gdXNlIEJvb3RzdHJhcCdzIGNvbnRleHR1YWwgcGFuZWwgY2xhc3Nlc1xuICAgKiAoYHBhbmVsLXByaW1hcnlgLCBgcGFuZWwtc3VjY2Vzc2AsIGBwYW5lbC1pbmZvYCwgZXRjLi4uKS5cbiAgICogTGlzdCBvZiBhbGwgYXZhaWxhYmxlIGNsYXNzZXMgW2F2YWlsYWJsZSBoZXJlXVxuICAgKiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvMy4zL2NvbXBvbmVudHMvI3BhbmVscy1hbHRlcm5hdGl2ZXMpXG4gICAqL1xuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XG4gIC8qKiBpZiA8Y29kZT50cnVlPC9jb2RlPiDDosKAwpQgZGlzYWJsZXMgYWNjb3JkaW9uIGdyb3VwICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBvcGVuZWQgc3RhdGUgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gUXVlc3Rpb25hYmxlLCBtYXliZSAucGFuZWwtb3BlbiBzaG91bGQgYmUgb24gY2hpbGQgZGl2LnBhbmVsIGVsZW1lbnQ/XG4gIC8qKiBJcyBhY2NvcmRpb24gZ3JvdXAgb3BlbiBvciBjbG9zZWQuIFRoaXMgcHJvcGVydHkgc3VwcG9ydHMgdHdvLXdheSBiaW5kaW5nICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFuZWwtb3BlbicpXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaXNPcGVuKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaXNPcGVuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLmFjY29yZGlvbiA9IGFjY29yZGlvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxDbGFzcyA9IHRoaXMucGFuZWxDbGFzcyB8fCAncGFuZWwtZGVmYXVsdCc7XG4gICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvbi5yZW1vdmVHcm91cCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb2xsYXBzZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFjY29yZGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbQWNjb3JkaW9uQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIklucHV0IiwiRXZlbnRFbWl0dGVyIiwiaXNCczMiLCJJbmplY3QiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29sbGFwc2VNb2R1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