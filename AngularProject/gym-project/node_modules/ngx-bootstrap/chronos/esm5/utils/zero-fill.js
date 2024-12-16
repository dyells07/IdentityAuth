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
    var /** @type {?} */ absNumber = "" + Math.abs(num);
    var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    var /** @type {?} */ sign = num >= 0;
    var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLG1CQUFtQixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBbUI7SUFDMUMscUJBQU0sU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUNyQyxxQkFBTSxXQUFXLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDcEQscUJBQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEIscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7SUFFbEQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7Q0FDckMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gemVyb0ZpbGwobnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VTaWduPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IGFic051bWJlciA9IGAke01hdGguYWJzKG51bSl9YDtcbiAgY29uc3QgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoO1xuICBjb25zdCBzaWduID0gbnVtID49IDA7XG4gIGNvbnN0IF9zaWduID0gc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLSc7XG4gIC8vIHRvZG86IHRoaXMgaXMgY3Jhenkgc2xvd1xuICBjb25zdCBfemVyb3MgPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKTtcblxuICByZXR1cm4gKF9zaWduICsgX3plcm9zICsgYWJzTnVtYmVyKTtcbn1cbiJdfQ==