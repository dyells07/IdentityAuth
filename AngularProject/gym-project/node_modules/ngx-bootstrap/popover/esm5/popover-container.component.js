/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'popover-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -8px;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -8px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        "placement": [{ type: Input },],
        "title": [{ type: Input },],
    };
    return PopoverContainerComponent;
}());
export { PopoverContainerComponent };
function PopoverContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PopoverContainerComponent.propDecorators;
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyLyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQW9DMUMsbUNBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7SUFORCxzQkFBSSw0Q0FBSzs7OztRQUFUO1lBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCOzs7T0FBQTs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQ1AsOEdBQThHO3dCQUNoSCxjQUFjLEVBQUUsUUFBUTt3QkFDeEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLGdCQUFnQjtxQkFDeEI7b0JBYUQsdU5BQWlEOzZCQVgvQyxnUEFTRDtpQkFHRjs7OztnQkEzQlEsYUFBYTs7OzhCQTZCbkIsS0FBSzswQkFDTCxLQUFLOztvQ0EvQlI7O1NBNkJhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzpcbiAgICAgICdcInBvcG92ZXIgaW4gcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy1wb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXG4gICAgcm9sZTogJ3Rvb2x0aXAnLFxuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jazsnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC5icy1wb3BvdmVyLXRvcCAuYXJyb3csIDpob3N0LmJzLXBvcG92ZXItYm90dG9tIC5hcnJvdyB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB9XG4gICAgOmhvc3QuYnMtcG9wb3Zlci1sZWZ0IC5hcnJvdywgOmhvc3QuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3cge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIH1cbiAgYFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBvcG92ZXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==