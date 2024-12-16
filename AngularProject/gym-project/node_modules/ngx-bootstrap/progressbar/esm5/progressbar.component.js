/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "animate", {
        set: /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = value;
            this.bars.forEach(function (b) {
                b.animate = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "striped", {
        set: /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._striped = value;
            this.bars.forEach(function (b) {
                b.striped = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        set: /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        "animate": [{ type: Input },],
        "striped": [{ type: Input },],
        "type": [{ type: Input },],
        "value": [{ type: Input },],
        "max": [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
        "addClass": [{ type: HostBinding, args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
function ProgressbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProgressbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProgressbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ProgressbarComponent.propDecorators;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /** @type {?} */
    ProgressbarComponent.prototype.isStacked;
    /** @type {?} */
    ProgressbarComponent.prototype._striped;
    /** @type {?} */
    ProgressbarComponent.prototype._animate;
    /** @type {?} */
    ProgressbarComponent.prototype._value;
    /** @type {?} */
    ProgressbarComponent.prototype.addClass;
    /** @type {?} */
    ProgressbarComponent.prototype.bars;
    /** @type {?} */
    ProgressbarComponent.prototype._max;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUEwRTFDLDhCQUFZLE1BQXlCO3lCQTlCekIsS0FBSzt3QkF1QnlCLElBQUk7O29CQUd2QixFQUFFO29CQUVSLEdBQUc7UUFHbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7MEJBMURHLHlDQUFPOzs7Ozs7a0JBQUMsS0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQWU7Z0JBQ2hDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ25CLENBQUMsQ0FBQzs7Ozs7MEJBSUQseUNBQU87Ozs7OztrQkFBQyxLQUFjO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBZTtnQkFDaEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDbkIsQ0FBQyxDQUFDOzs7OzswQkFVRCx1Q0FBSzs7Ozs7Ozs7a0JBQUMsS0FBcUI7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OztJQU90QixzQkFBSSx1Q0FBSzs7OztRQUFUO1lBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCOzs7T0FBQTswQkFLRyxxQ0FBRzs7Ozs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztRQUduQixVQUFRLENBQVM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBaUI7Z0JBQ2xDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzdCLENBQUMsQ0FBQztTQUNKOzs7Ozs7OztJQVlELHFDQUFNOzs7O0lBQU4sVUFBTyxHQUFpQjtRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELHdDQUFTOzs7O0lBQVQsVUFBVSxHQUFpQjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3Qzs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsNlFBQTJDOzZCQUV6QyxvRUFLRDtpQkFFRjs7OztnQkFmUSxpQkFBaUI7Ozs0QkFrQnZCLEtBQUs7NEJBUUwsS0FBSzt5QkFTTCxLQUFLOzBCQUlMLEtBQUs7d0JBZ0JMLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLEtBQUs7NkJBWUwsV0FBVyxTQUFDLGdCQUFnQjs7K0JBckUvQjs7U0FpQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYi5hbmltYXRlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCwgc3RyaXBlZCBjbGFzc2VzIGFyZSBhcHBsaWVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZCA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuc3RyaXBlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyLiBDb3VsZCBiZSBhIG51bWJlciBvciBhcnJheSBvZiBvYmplY3RzXG4gICAqIGxpa2Uge1widmFsdWVcIjoxNSxcInR5cGVcIjpcImluZm9cIixcImxhYmVsXCI6XCIxNSAlXCJ9XG4gICAqL1xuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcbiAgICB0aGlzLmlzU3RhY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgaXNTdGFja2VkID0gZmFsc2U7XG4gIF9zdHJpcGVkOiBib29sZWFuO1xuICBfYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBfdmFsdWU6IG51bWJlciB8IGFueVtdO1xuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdjtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbiAgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgYmFyLmFuaW1hdGUgPSB0aGlzLl9hbmltYXRlO1xuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcblxuICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG4gIH1cblxuICByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iXX0=