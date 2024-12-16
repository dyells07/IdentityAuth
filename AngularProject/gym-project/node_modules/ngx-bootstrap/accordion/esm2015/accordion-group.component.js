/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then(() => {
                this.isOpenChange.emit(value);
            })
                .catch((error) => {
                /* tslint:disable: no-console */
                console.log(error);
            });
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] },] },
];
AccordionPanelComponent.propDecorators = {
    "heading": [{ type: Input },],
    "panelClass": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "isOpenChange": [{ type: Output },],
    "isOpen": [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input },],
};
function AccordionPanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AccordionPanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AccordionPanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AccordionPanelComponent.propDecorators;
    /**
     * Clickable text in accordion's group header, check `accordion heading` below for using html in header
     * @type {?}
     */
    AccordionPanelComponent.prototype.heading;
    /**
     * Provides an ability to use Bootstrap's contextual panel classes
     * (`panel-primary`, `panel-success`, `panel-info`, etc...).
     * List of all available classes [available here]
     * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
     * @type {?}
     */
    AccordionPanelComponent.prototype.panelClass;
    /**
     * if <code>true</code> — disables accordion group
     * @type {?}
     */
    AccordionPanelComponent.prototype.isDisabled;
    /**
     * Emits when the opened state changes
     * @type {?}
     */
    AccordionPanelComponent.prototype.isOpenChange;
    /** @type {?} */
    AccordionPanelComponent.prototype._isOpen;
    /** @type {?} */
    AccordionPanelComponent.prototype.accordion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFDL0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBZ0IzRCxNQUFNOzs7O0lBNkNKLFlBQXdDOzs7OzRCQWpDUSxJQUFJLFlBQVksRUFBRTt1QkE4QjlDLEtBQUs7UUFJdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDNUI7Ozs7O1FBN0JHLE1BQU07UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0lBR3RCLElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0IsQ0FBQztpQkFDQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7Z0JBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ047S0FDRjs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7S0FDRjs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QywrdEJBQStDO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7YUFDRjs7OztZQWZRLGtCQUFrQix1QkE2RFosTUFBTSxTQUFDLGtCQUFrQjs7O3dCQTNDckMsS0FBSzsyQkFNTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsTUFBTTt1QkFJTixXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuLyoqXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcbiAqIEluc3RlYWQgb2YgdXNpbmcgYGhlYWRpbmdgIGF0dHJpYnV0ZSBvbiB0aGUgYGFjY29yZGlvbi1ncm91cGAsIHlvdSBjYW4gdXNlXG4gKiBhbiBgYWNjb3JkaW9uLWhlYWRpbmdgIGF0dHJpYnV0ZSBvbiBgYW55YCBlbGVtZW50IGluc2lkZSBvZiBhIGdyb3VwIHRoYXRcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAncGFuZWwnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBDbGlja2FibGUgdGV4dCBpbiBhY2NvcmRpb24ncyBncm91cCBoZWFkZXIsIGNoZWNrIGBhY2NvcmRpb24gaGVhZGluZ2AgYmVsb3cgZm9yIHVzaW5nIGh0bWwgaW4gaGVhZGVyICovXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcbiAgLyoqIFByb3ZpZGVzIGFuIGFiaWxpdHkgdG8gdXNlIEJvb3RzdHJhcCdzIGNvbnRleHR1YWwgcGFuZWwgY2xhc3Nlc1xuICAgKiAoYHBhbmVsLXByaW1hcnlgLCBgcGFuZWwtc3VjY2Vzc2AsIGBwYW5lbC1pbmZvYCwgZXRjLi4uKS5cbiAgICogTGlzdCBvZiBhbGwgYXZhaWxhYmxlIGNsYXNzZXMgW2F2YWlsYWJsZSBoZXJlXVxuICAgKiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvMy4zL2NvbXBvbmVudHMvI3BhbmVscy1hbHRlcm5hdGl2ZXMpXG4gICAqL1xuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XG4gIC8qKiBpZiA8Y29kZT50cnVlPC9jb2RlPiDigJQgZGlzYWJsZXMgYWNjb3JkaW9uIGdyb3VwICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBvcGVuZWQgc3RhdGUgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gUXVlc3Rpb25hYmxlLCBtYXliZSAucGFuZWwtb3BlbiBzaG91bGQgYmUgb24gY2hpbGQgZGl2LnBhbmVsIGVsZW1lbnQ/XG4gIC8qKiBJcyBhY2NvcmRpb24gZ3JvdXAgb3BlbiBvciBjbG9zZWQuIFRoaXMgcHJvcGVydHkgc3VwcG9ydHMgdHdvLXdheSBiaW5kaW5nICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFuZWwtb3BlbicpXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaXNPcGVuKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaXNPcGVuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLmFjY29yZGlvbiA9IGFjY29yZGlvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxDbGFzcyA9IHRoaXMucGFuZWxDbGFzcyB8fCAncGFuZWwtZGVmYXVsdCc7XG4gICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvbi5yZW1vdmVHcm91cCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cbiAgfVxufVxuIl19