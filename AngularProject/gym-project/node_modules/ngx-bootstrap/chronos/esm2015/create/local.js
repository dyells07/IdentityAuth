/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createLocalOrUTC } from './from-anything';
import { isDate } from '../utils/type-checks';
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    const /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvbG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0FBRTlDLE1BQU0sb0JBQW9CLEtBQWdCLEVBQUUsTUFBMEIsRUFDNUMsU0FBa0IsRUFBRSxNQUFnQixFQUFFLEtBQWU7SUFDN0UsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCx1QkFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG5cbiAgcmV0dXJuIGNvbmZpZy5fZDtcbn1cbiJdfQ==