/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
export { win as window };
export var /** @type {?} */ document = win.document;
export var /** @type {?} */ location = win.location;
export var /** @type {?} */ gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
export var /** @type {?} */ performance = win['performance'] ? win['performance'] : null;
export var /** @type {?} */ Event = win['Event'];
export var /** @type {?} */ MouseEvent = win['MouseEvent'];
export var /** @type {?} */ KeyboardEvent = win['KeyboardEvent'];
export var /** @type {?} */ EventTarget = win['EventTarget'];
export var /** @type {?} */ History = win['History'];
export var /** @type {?} */ Location = win['Location'];
export var /** @type {?} */ EventListener = win['EventListener'];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxxQkFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLHNCQUFTLEVBQUUsQ0FBQSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDekIsTUFBTSxDQUFDLHFCQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxxQkFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUMsY0FBVyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7QUFDaEUsTUFBTSxDQUFDLHFCQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3hFLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxxQkFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxxQkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxxQkFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyp0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG52YXIgd2luID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwgPGFueT57fTtcblxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xuZXhwb3J0IHZhciBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcbmV4cG9ydCB2YXIgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG5leHBvcnQgdmFyIGdjID0gd2luWydnYyddID8gKCkgPT4gd2luWydnYyddKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgdmFyIHBlcmZvcm1hbmNlID0gd2luWydwZXJmb3JtYW5jZSddID8gd2luWydwZXJmb3JtYW5jZSddIDogbnVsbDtcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpblsnRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luWydNb3VzZUV2ZW50J107XG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpblsnS2V5Ym9hcmRFdmVudCddO1xuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luWydFdmVudFRhcmdldCddO1xuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW5bJ0hpc3RvcnknXTtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpblsnTG9jYXRpb24nXTtcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luWydFdmVudExpc3RlbmVyJ107XG4iXX0=