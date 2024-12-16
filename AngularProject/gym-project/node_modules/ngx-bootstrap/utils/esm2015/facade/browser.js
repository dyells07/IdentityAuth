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
export var /** @type {?} */ gc = win['gc'] ? () => win['gc']() : () => null;
export var /** @type {?} */ performance = win['performance'] ? win['performance'] : null;
export const /** @type {?} */ Event = win['Event'];
export const /** @type {?} */ MouseEvent = win['MouseEvent'];
export const /** @type {?} */ KeyboardEvent = win['KeyboardEvent'];
export const /** @type {?} */ EventTarget = win['EventTarget'];
export const /** @type {?} */ History = win['History'];
export const /** @type {?} */ Location = win['Location'];
export const /** @type {?} */ EventListener = win['EventListener'];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxxQkFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLHNCQUFTLEVBQUUsQ0FBQSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDekIsTUFBTSxDQUFDLHFCQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxxQkFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztBQUNoRSxNQUFNLENBQUMscUJBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDeEUsTUFBTSxDQUFDLHVCQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLHVCQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEQsTUFBTSxDQUFDLHVCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLHVCQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbnZhciB3aW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCA8YW55Pnt9O1xuXG5leHBvcnQgeyB3aW4gYXMgd2luZG93IH07XG5leHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCB2YXIgZ2MgPSB3aW5bJ2djJ10gPyAoKSA9PiB3aW5bJ2djJ10oKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luWydFdmVudCddO1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW5bJ01vdXNlRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW5bJ0V2ZW50VGFyZ2V0J107XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpblsnSGlzdG9yeSddO1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW5bJ0V2ZW50TGlzdGVuZXInXTtcbiJdfQ==