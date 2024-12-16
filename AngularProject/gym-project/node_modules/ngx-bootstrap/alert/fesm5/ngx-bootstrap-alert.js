import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { OnChange } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: Injectable }
    ];
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(/** @type {?} */ (this.dismissOnTimeout), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig, },
        { type: ChangeDetectorRef, },
    ]; };
    AlertComponent.propDecorators = {
        "type": [{ type: Input },],
        "dismissible": [{ type: Input },],
        "dismissOnTimeout": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "onClose": [{ type: Output },],
        "onClosed": [{ type: Output },],
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AlertComponent, AlertModule, AlertConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hbGVydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC9hbGVydC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydENvbmZpZyB7XG4gIC8qKiBkZWZhdWx0IGFsZXJ0IHR5cGUgKi9cbiAgdHlwZSA9ICd3YXJuaW5nJztcblxuICAvKiogaXMgYWxlcnRzIGFyZSBkaXNtaXNzaWJsZSBieSBkZWZhdWx0ICovXG4gIGRpc21pc3NpYmxlID0gZmFsc2U7XG5cbiAgLyoqIGRlZmF1bHQgdGltZSBiZWZvcmUgYWxlcnQgd2lsbCBkaXNtaXNzICovXG4gIGRpc21pc3NPblRpbWVvdXQ/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQuY29uZmlnJztcbmltcG9ydCB7IE9uQ2hhbmdlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FsZXJ0LGJzLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogQWxlcnQgdHlwZS5cbiAgICogUHJvdmlkZXMgb25lIG9mIGZvdXIgYm9vdHN0cmFwIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6XG4gICAqIGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AgYW5kIGBkYW5nZXJgXG4gICAqL1xuICBASW5wdXQoKSB0eXBlID0gJ3dhcm5pbmcnO1xuICAvKiogSWYgc2V0LCBkaXNwbGF5cyBhbiBpbmxpbmUgXCJDbG9zZVwiIGJ1dHRvbiAqL1xuICBAT25DaGFuZ2UoKSAgIEBJbnB1dCgpICAgZGlzbWlzc2libGUgPSBmYWxzZTtcbiAgLyoqIE51bWJlciBpbiBtaWxsaXNlY29uZHMsIGFmdGVyIHdoaWNoIGFsZXJ0IHdpbGwgYmUgY2xvc2VkICovXG4gIEBJbnB1dCgpIGRpc21pc3NPblRpbWVvdXQ6IG51bWJlciB8IHN0cmluZztcblxuICAvKiogSXMgYWxlcnQgdmlzaWJsZSAqL1xuICBASW5wdXQoKSBpc09wZW4gPSB0cnVlO1xuXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGltbWVkaWF0ZWx5IGFmdGVyIGNsb3NlIGluc3RhbmNlIG1ldGhvZCBpcyBjYWxsZWQsXG4gICAqICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gYWxlcnQgY2xvc2VkLCAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+KCk7XG5cblxuICBjbGFzc2VzID0gJyc7XG4gIGRpc21pc3NpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jb25maWc6IEFsZXJ0Q29uZmlnLCBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMuZGlzbWlzc2libGVDaGFuZ2Uuc3Vic2NyaWJlKChkaXNtaXNzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJztcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzbWlzc09uVGltZW91dCkge1xuICAgICAgLy8gaWYgZGlzbWlzc09uVGltZW91dCB1c2VkIGFzIGF0dHIgd2l0aG91dCBiaW5kaW5nLCBpdCB3aWxsIGJlIGEgc3RyaW5nXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLmNsb3NlKCksXG4gICAgICAgIHBhcnNlSW50KHRoaXMuZGlzbWlzc09uVGltZW91dCBhcyBzdHJpbmcsIDEwKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyB0b2RvOiBhbmltYXRpb24gYCBJZiB0aGUgLmZhZGUgYW5kIC5pbiBjbGFzc2VzIGFyZSBwcmVzZW50IG9uIHRoZSBlbGVtZW50LFxuICAvLyB0aGUgYWxlcnQgd2lsbCBmYWRlIG91dCBiZWZvcmUgaXQgaXMgcmVtb3ZlZGBcbiAgLyoqXG4gICAqIENsb3NlcyBhbiBhbGVydCBieSByZW1vdmluZyBpdCBmcm9tIHRoZSBET00uXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsb3NlLmVtaXQodGhpcyk7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uQ2xvc2VkLmVtaXQodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FsZXJ0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWxlcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFsZXJ0TW9kdWxlLCBwcm92aWRlcnM6IFtBbGVydENvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFLUyxTQUFTOzs7OzJCQUdGLEtBQUs7Ozs7Z0NBR1MsU0FBUzs7O2dCQVR0QyxVQUFVOztzQkFGWDs7Ozs7Ozs7SUMwQ0Usd0JBQVksT0FBb0IsRUFBVSxlQUFrQztRQUE1RSxpQkFNQztRQU55QyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7OztvQkFwQjVELFNBQVM7Ozs7MkJBRWMsS0FBSzs7OztzQkFLMUIsSUFBSTs7Ozs7dUJBS0YsSUFBSSxZQUFZLEVBQWtCOzs7O3dCQUVqQyxJQUFJLFlBQVksRUFBa0I7dUJBRzdDLEVBQUU7aUNBQ1EsSUFBSSxZQUFZLEVBQVc7UUFHN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQW9CO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFDM0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSjs7OztJQUVELGlDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBRXpCLFVBQVUsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQ2xCLFFBQVEsbUJBQUMsSUFBSSxDQUFDLGdCQUEwQixHQUFFLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO1NBQ0g7S0FDRjs7Ozs7Ozs7OztJQU9ELDhCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtiQUFxQztvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLFdBQVc7Z0JBUGxCLGlCQUFpQjs7O3lCQW9CaEIsS0FBSztnQ0FFUyxLQUFLO3FDQUVuQixLQUFLOzJCQUdMLEtBQUs7NEJBS0wsTUFBTTs2QkFFTixNQUFNOzs7UUFaTixRQUFRLEVBQUU7Ozt5QkF4QmI7Ozs7Ozs7QUNBQTs7Ozs7O0lBWVMsbUJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztLQUM1RDs7Z0JBVEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDbEM7O3NCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=