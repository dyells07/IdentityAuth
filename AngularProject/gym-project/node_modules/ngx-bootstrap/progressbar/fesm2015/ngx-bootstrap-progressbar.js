import { Injectable, Component, HostBinding, Input, Host, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarConfig {
    constructor() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
}
ProgressbarConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BarComponent {
    /**
     * @param {?} progress
     */
    constructor(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
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
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        const /** @type {?} */ totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"'
                }
            }] }
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ProgressbarComponent, decorators: [{ type: Host },] },
];
BarComponent.propDecorators = {
    "type": [{ type: Input },],
    "value": [{ type: Input },],
    "setBarWidth": [{ type: HostBinding, args: ['style.width.%',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29uZmlnIHtcbiAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAqL1xuICBhbmltYXRlOiBCb29sZWFuID0gZmFsc2U7XG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cbiAgbWF4ID0gMTAwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYi5hbmltYXRlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCwgc3RyaXBlZCBjbGFzc2VzIGFyZSBhcHBsaWVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZCA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuc3RyaXBlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyLiBDb3VsZCBiZSBhIG51bWJlciBvciBhcnJheSBvZiBvYmplY3RzXG4gICAqIGxpa2Uge1widmFsdWVcIjoxNSxcInR5cGVcIjpcImluZm9cIixcImxhYmVsXCI6XCIxNSAlXCJ9XG4gICAqL1xuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcbiAgICB0aGlzLmlzU3RhY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgaXNTdGFja2VkID0gZmFsc2U7XG4gIF9zdHJpcGVkOiBib29sZWFuO1xuICBfYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBfdmFsdWU6IG51bWJlciB8IGFueVtdO1xuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdjtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbiAgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgYmFyLmFuaW1hdGUgPSB0aGlzLl9hbmltYXRlO1xuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcblxuICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG4gIH1cblxuICByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuLy8gdG9kbzogbnVtYmVyIHBpcGVcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxuICAgICdbY2xhc3NdJzogJ1wicHJvZ3Jlc3MtYmFyIFwiICsgKHR5cGUgPyBcInByb2dyZXNzLWJhci1cIiArIHR5cGUgKyBcIiBiZy1cIiArIHR5cGUgOiBcIlwiKScsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdJzogJyFpc0JzMyAmJiBhbmltYXRlJyxcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxuICAgICdbc3R5bGUuaGVpZ2h0LiVdJzogJ1wiMTAwXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBtYXg6IG51bWJlcjtcblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XG4gICAgaWYgKCF2ICYmIHYgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLiUnKVxuICBnZXQgc2V0QmFyV2lkdGgoKSB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcblxuICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XG4gIH1cblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBzdHJpcGVkOiBib29sZWFuO1xuICBhbmltYXRlOiBib29sZWFuO1xuICBwZXJjZW50ID0gMDtcbiAgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByb2dyZXNzOiBQcm9ncmVzc2JhckNvbXBvbmVudCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5yZW1vdmVCYXIodGhpcyk7XG4gIH1cblxuICByZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5wZXJjZW50ID0gKyh0aGlzLnZhbHVlIC8gdGhpcy5wcm9ncmVzcy5tYXggKiAxMDApLnRvRml4ZWQoMik7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRhZ2UgPSB0aGlzLnByb2dyZXNzLmJhcnNcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsOiBudW1iZXIsIGJhcjogQmFyQ29tcG9uZW50KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgYmFyLnBlcmNlbnQ7XG4gICAgICB9LCAwKTtcblxuICAgIGlmICh0b3RhbFBlcmNlbnRhZ2UgPiAxMDApIHtcbiAgICAgIHRoaXMucGVyY2VudCAtPSB0b3RhbFBlcmNlbnRhZ2UgLSAxMDA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFByb2dyZXNzYmFyTW9kdWxlLCBwcm92aWRlcnM6IFtQcm9ncmVzc2JhckNvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O3VCQUtxQixLQUFLOzs7O21CQUVsQixHQUFHOzs7O1lBTFYsVUFBVTs7Ozs7OztBQ0ZYOzs7O0lBNEVFLFlBQVksTUFBeUI7eUJBOUJ6QixLQUFLO3dCQXVCeUIsSUFBSTs7b0JBR3ZCLEVBQUU7b0JBRVIsR0FBRztRQUdsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O1FBMURHLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZTtZQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNuQixDQUFDLENBQUM7Ozs7Ozs7UUFJRCxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQWU7WUFDaEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkIsQ0FBQyxDQUFDOzs7Ozs7Ozs7UUFVRCxLQUFLLENBQUMsS0FBcUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RD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