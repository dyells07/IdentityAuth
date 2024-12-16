/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
export function zeroFill(num, targetLength, forceSign) {
    const /** @type {?} */ absNumber = `${Math.abs(num)}`;
    const /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    const /** @type {?} */ sign = num >= 0;
    const /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    const /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLG1CQUFtQixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBbUI7SUFDMUMsdUJBQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3JDLHVCQUFNLFdBQVcsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNwRCx1QkFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOztJQUVsRCx1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0UsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztDQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB6ZXJvRmlsbChudW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNpZ24/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgYWJzTnVtYmVyID0gYCR7TWF0aC5hYnMobnVtKX1gO1xuICBjb25zdCB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGg7XG4gIGNvbnN0IHNpZ24gPSBudW0gPj0gMDtcbiAgY29uc3QgX3NpZ24gPSBzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJztcbiAgLy8gdG9kbzogdGhpcyBpcyBjcmF6eSBzbG93XG4gIGNvbnN0IF96ZXJvcyA9IE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiAoX3NpZ24gKyBfemVyb3MgKyBhYnNOdW1iZXIpO1xufVxuIl19