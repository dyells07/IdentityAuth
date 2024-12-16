/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
import './units/index';
import { formatFunctions, makeFormatFunction } from './format/format';
import { getLocale } from './locale/locales';
import { isDateValid } from './utils/type-checks';
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatDate(date, format, locale, isUTC, offset = 0) {
    const /** @type {?} */ _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
    }
    const /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    const /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatMoment(date, _format, locale, isUTC, offset = 0) {
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    const /** @type {?} */ format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
export function expandFormat(_format, locale) {
    let /** @type {?} */ format = _format;
    let /** @type {?} */ i = 5;
    const /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    const /** @type {?} */ replaceLongDateFormatTokens = (input) => {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxxQkFBcUIsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsS0FBZSxFQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ2pHLHVCQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sSUFBSSxLQUFLLENBQ2IsV0FBVyxNQUFNLDBEQUEwRCxDQUM1RSxDQUFDO0tBQ0g7SUFFRCx1QkFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV2Rix1QkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNuQzs7Ozs7Ozs7O0FBR0QsTUFBTSx1QkFBdUIsSUFBVSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsS0FBZSxFQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ25HLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUMzQjtJQUVELHVCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztDQUM3RDs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsT0FBZSxFQUFFLE1BQWM7SUFDMUQscUJBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsdUJBQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7SUFFM0UsdUJBQU0sMkJBQTJCLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7S0FDOUMsQ0FBQztJQUVGLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDNUUscUJBQXFCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1I7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb21lbnQuanNcbi8vIHZlcnNpb24gOiAyLjE4LjFcbi8vIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vIGxpY2Vuc2UgOiBNSVRcbi8vIG1vbWVudGpzLmNvbVxuXG5pbXBvcnQgJy4vdW5pdHMvaW5kZXgnO1xuaW1wb3J0IHsgZm9ybWF0RnVuY3Rpb25zLCBtYWtlRm9ybWF0RnVuY3Rpb24gfSBmcm9tICcuL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQgfSBmcm9tICcuL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZywgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUgfHwgJ2VuJyk7XG4gIGlmICghX2xvY2FsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBMb2NhbGUgXCIke2xvY2FsZX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdCB8fCAoaXNVVEMgPyAgJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nIDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gZm9ybWF0TW9tZW50KGRhdGUsIF9mb3JtYXQsIF9sb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xuXG4gIGlmICghb3V0cHV0KSB7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBfbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KGRhdGU6IERhdGUsIF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlLmludmFsaWREYXRlO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KF9mb3JtYXQsIGxvY2FsZSk7XG4gIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKGRhdGUsIGxvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQgPSBfZm9ybWF0O1xuICBsZXQgaSA9IDU7XG4gIGNvbnN0IGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbiAgY29uc3QgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zID0gKGlucHV0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdExvbmdEYXRlKGlucHV0KSB8fCBpbnB1dDtcbiAgfTtcblxuICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIGkgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQ7XG59XG4iXX0=