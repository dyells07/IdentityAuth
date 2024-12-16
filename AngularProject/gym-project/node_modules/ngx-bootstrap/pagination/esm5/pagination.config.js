/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default values for Pagination and pager components
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: Injectable }
    ];
    return PaginationConfig;
}());
export { PaginationConfig };
function PaginationConfig_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PaginationConfig.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PaginationConfig.ctorParameters;
    /** @type {?} */
    PaginationConfig.prototype.main;
    /** @type {?} */
    PaginationConfig.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O29CQU9yQjtZQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsWUFBWSxFQUFFLFVBQVU7WUFDeEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtxQkFDbUI7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWjs7O2dCQXBCRixVQUFVOzsyQkFOWDs7U0FPYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBzcGxpdFxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciBQYWdpbmF0aW9uIGFuZCBwYWdlciBjb21wb25lbnRzICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbmZpZyB7XG4gIG1haW46IENvbmZpZ01vZGVsID0ge1xuICAgIG1heFNpemU6IHZvaWQgMCxcbiAgICBpdGVtc1BlclBhZ2U6IDEwLFxuICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxuICAgIGRpcmVjdGlvbkxpbmtzOiB0cnVlLFxuICAgIGZpcnN0VGV4dDogJ0ZpcnN0JyxcbiAgICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXG4gICAgbmV4dFRleHQ6ICdOZXh0JyxcbiAgICBsYXN0VGV4dDogJ0xhc3QnLFxuICAgIHBhZ2VCdG5DbGFzczogJycsXG4gICAgcm90YXRlOiB0cnVlXG4gIH07XG4gIHBhZ2VyOiBQYWdlck1vZGVsID0ge1xuICAgIGl0ZW1zUGVyUGFnZTogMTUsXG4gICAgcHJldmlvdXNUZXh0OiAnwqsgUHJldmlvdXMnLFxuICAgIG5leHRUZXh0OiAnTmV4dCDCuycsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICBhbGlnbjogdHJ1ZVxuICB9O1xufVxuIl19