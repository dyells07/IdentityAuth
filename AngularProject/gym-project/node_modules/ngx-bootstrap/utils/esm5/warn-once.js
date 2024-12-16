/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isDevMode } from '@angular/core';
var /** @type {?} */ _messagesHash = {};
var /** @type {?} */ _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
export function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi1vbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy8iLCJzb3VyY2VzIjpbIndhcm4tb25jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxxQkFBTSxhQUFhLEdBQStCLEVBQUUsQ0FBQztBQUNyRCxxQkFBTSxRQUFRLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUM7Ozs7O0FBRXhFLE1BQU0sbUJBQW1CLEdBQVc7SUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxRQUFRLElBQUksR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDO0tBQ1I7SUFFRCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDOztJQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBfbWVzc2FnZXNIYXNoOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuY29uc3QgX2hpZGVNc2cgPSB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnd2FybicgaW4gY29uc29sZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZShtc2c6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRGV2TW9kZSgpIHx8IF9oaWRlTXNnIHx8IG1zZyBpbiBfbWVzc2FnZXNIYXNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX21lc3NhZ2VzSGFzaFttc2ddID0gdHJ1ZTtcbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuICBjb25zb2xlLndhcm4obXNnKTtcbn1cbiJdfQ==