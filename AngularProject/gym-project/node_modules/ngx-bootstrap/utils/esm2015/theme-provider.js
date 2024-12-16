/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { window } from './facade/browser';
let /** @type {?} */ guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    const /** @type {?} */ spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    const /** @type {?} */ rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
export function setTheme(theme) {
    guessedVersion = theme;
}
/**
 * @return {?}
 */
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme !== 'bs4';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidGhlbWUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQyxxQkFBSSxjQUE2QixDQUFDOzs7O0FBRWxDO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFDRCx1QkFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLHVCQUFNLElBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQ3ZDOzs7OztBQUVELE1BQU0sbUJBQW1CLEtBQW9CO0lBQzNDLGNBQWMsR0FBRyxLQUFLLENBQUM7Q0FDeEI7Ozs7QUFHRCxNQUFNO0lBQ0osRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsY0FBYyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDO0tBQ2pDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5cbmxldCBndWVzc2VkVmVyc2lvbjogJ2JzMycgfCAnYnM0JztcblxuZnVuY3Rpb24gX2d1ZXNzQnNWZXJzaW9uKCk6ICdiczMnIHwgJ2JzNCcge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhbkVsLmlubmVyVGV4dCA9ICd0ZXN0IGJzIHZlcnNpb24nO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5FbCk7XG4gIHNwYW5FbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgY29uc3QgcmVjdCA9IHNwYW5FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuRWwpO1xuICBpZiAoIXJlY3QpIHtcbiAgICByZXR1cm4gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gcmVjdC50b3AgPT09IDAgPyAnYnM0JyA6ICdiczMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWU6ICdiczMnIHwgJ2JzNCcpOiB2b2lkIHtcbiAgZ3Vlc3NlZFZlcnNpb24gPSB0aGVtZTtcbn1cblxuLy8gdG9kbzogaW4gbmd4LWJvb3RzdHJhcCwgYnM0IHdpbGwgYmVjYW1lIGEgZGVmYXVsdCBvbmVcbmV4cG9ydCBmdW5jdGlvbiBpc0JzMygpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5fX3RoZW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChndWVzc2VkVmVyc2lvbikge1xuICAgICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcbiAgICB9XG4gICAgZ3Vlc3NlZFZlcnNpb24gPSBfZ3Vlc3NCc1ZlcnNpb24oKTtcblxuICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gd2luZG93Ll9fdGhlbWUgIT09ICdiczQnO1xufVxuIl19