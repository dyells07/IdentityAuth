/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._localeChange;
    }
    /**
     * @return {?}
     */
    get currentLocale() {
        return this._locale.getValue();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.decorators = [
    { type: Injectable }
];
function BsLocaleService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsLocaleService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsLocaleService.ctorParameters;
    /** @type {?} */
    BsLocaleService.prototype._defaultLocale;
    /** @type {?} */
    BsLocaleService.prototype._locale;
    /** @type {?} */
    BsLocaleService.prototype._localeChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1sb2NhbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBR25ELE1BQU07OzhCQUNxQixJQUFJO3VCQUNYLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxjQUFjLENBQUM7NkJBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFOzs7OztJQUV2RSxJQUFJLE1BQU07UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7OztJQUVELElBQUksWUFBWTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDaEM7Ozs7O0lBRUQsR0FBRyxDQUFDLE1BQWM7UUFDaEIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0I7OztZQXhCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0xvY2FsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0TG9jYWxlID0gJ2VuJztcbiAgcHJpdmF0ZSBfbG9jYWxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHRoaXMuX2RlZmF1bHRMb2NhbGUpO1xuICBwcml2YXRlIF9sb2NhbGVDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX2xvY2FsZS5hc09ic2VydmFibGUoKTtcblxuICBnZXQgbG9jYWxlKCk6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVDaGFuZ2U7XG4gIH1cblxuICBnZXQgY3VycmVudExvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHVzZShsb2NhbGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChsb2NhbGUgPT09IHRoaXMuY3VycmVudExvY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xvY2FsZS5uZXh0KGxvY2FsZSk7XG4gIH1cbn1cbiJdfQ==