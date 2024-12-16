/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
export class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(resolve => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];
function BsDropdownState_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownState.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownState.ctorParameters;
    /** @type {?} */
    BsDropdownState.prototype.direction;
    /** @type {?} */
    BsDropdownState.prototype.autoClose;
    /** @type {?} */
    BsDropdownState.prototype.isOpenChange;
    /** @type {?} */
    BsDropdownState.prototype.isDisabledChange;
    /** @type {?} */
    BsDropdownState.prototype.toggleClick;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    BsDropdownState.prototype.dropdownMenu;
    /** @type {?} */
    BsDropdownState.prototype.resolveDropdownMenu;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpELE1BQU07SUFjSjt5QkFiMkIsTUFBTTs0QkFFbEIsSUFBSSxZQUFZLEVBQVc7Z0NBQ3ZCLElBQUksWUFBWSxFQUFXOzJCQUNoQyxJQUFJLFlBQVksRUFBVztRQVV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ0o7OztZQW5CRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duU3RhdGUge1xuICBkaXJlY3Rpb246ICdkb3duJyB8ICd1cCcgPSAnZG93bic7XG4gIGF1dG9DbG9zZTogYm9vbGVhbjtcbiAgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBpc0Rpc2FibGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICB0b2dnbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuICBkcm9wZG93bk1lbnU6IFByb21pc2U8QnNDb21wb25lbnRSZWY8YW55Pj47XG4gIHJlc29sdmVEcm9wZG93bk1lbnU6IChjb21wb25lbnRSZWY6IEJzQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZURyb3Bkb3duTWVudSA9IHJlc29sdmU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==