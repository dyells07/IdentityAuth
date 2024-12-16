/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class ProgressbarComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    /**
     * if `true` changing value of progress bar will be animated
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((b) => {
            b.animate = value;
        });
    }
    /**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((b) => {
            b.striped = value;
        });
    }
    /**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set value(value) {
        this.isStacked = Array.isArray(value);
        this._value = value;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'progressbar',
                template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                styles: [`
    :host {
      width: 100%;
      display: flex;
    }
  `]
            }] }
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig, },
];
ProgressbarComponent.propDecorators = {
    "animate": [{ type: Input },],
    "striped": [{ type: Input },],
    "type": [{ type: Input },],
    "value": [{ type: Input },],
    "max": [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
    "addClass": [{ type: HostBinding, args: ['class.progress',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWU1QyxNQUFNOzs7O0lBMkRKLFlBQVksTUFBeUI7eUJBOUJ6QixLQUFLO3dCQXVCeUIsSUFBSTs7b0JBR3ZCLEVBQUU7b0JBRVIsR0FBRztRQUdsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O1FBMURHLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkIsQ0FBQyxDQUFDOzs7Ozs7O1FBSUQsT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNuQixDQUFDLENBQUM7Ozs7Ozs7OztRQVVELEtBQUssQ0FBQyxLQUFxQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBT3RCLElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7Ozs7UUFLRyxHQUFHO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUduQixJQUFJLEdBQUcsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFZRCxNQUFNLENBQUMsR0FBaUI7UUFDdEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBaUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0M7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDZRQUEyQzt5QkFFekM7Ozs7O0dBS0Q7YUFFRjs7OztZQWZRLGlCQUFpQjs7O3dCQWtCdkIsS0FBSzt3QkFRTCxLQUFLO3FCQVNMLEtBQUs7c0JBSUwsS0FBSztvQkFnQkwsV0FBVyxTQUFDLFVBQVUsY0FDdEIsS0FBSzt5QkFZTCxXQUFXLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYi5hbmltYXRlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCwgc3RyaXBlZCBjbGFzc2VzIGFyZSBhcHBsaWVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZCA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuc3RyaXBlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyLiBDb3VsZCBiZSBhIG51bWJlciBvciBhcnJheSBvZiBvYmplY3RzXG4gICAqIGxpa2Uge1widmFsdWVcIjoxNSxcInR5cGVcIjpcImluZm9cIixcImxhYmVsXCI6XCIxNSAlXCJ9XG4gICAqL1xuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcbiAgICB0aGlzLmlzU3RhY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgaXNTdGFja2VkID0gZmFsc2U7XG4gIF9zdHJpcGVkOiBib29sZWFuO1xuICBfYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBfdmFsdWU6IG51bWJlciB8IGFueVtdO1xuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdjtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbiAgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgYmFyLmFuaW1hdGUgPSB0aGlzLl9hbmltYXRlO1xuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcblxuICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG4gIH1cblxuICByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iXX0=