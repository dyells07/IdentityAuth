/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
import { getDayOfWeek } from '../units/day-of-week';
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
export var /** @type {?} */ slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3NsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7QUFNcEQsNkJBQTZCLE1BQWMsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNqRyxxQkFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osS0FBSyxHQUFHO1lBQ04sTUFBTSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsS0FBSyxJQUFJO1lBQ1AsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ2pEO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDOUQ7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzthQUM5RDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENB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QkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtLQUN4QjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU2xvdmVuaWFuIFtzbF1cbi8vISBhdXRob3IgOiBtaWhhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWhhblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlcjogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbmVrYWogc2VrdW5kJyA6ICduZWthaiBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnc2VrdW5kbycgOiAnc2VrdW5kaSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRpJyA6ICdzZWt1bmRhaCc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kZScgOiAnc2VrdW5kYWgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kJyA6ICdzZWt1bmQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSBtaW51dGEnIDogJ2VubyBtaW51dG8nO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dG8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRpJyA6ICdtaW51dGFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRlJyA6ICdtaW51dGFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dCcgOiAnbWludXRhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSB1cmEnIDogJ2VubyB1cm8nO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAndXJhJyA6ICd1cm8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJpJyA6ICd1cmFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJlJyA6ICd1cmFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cicgOiAndXJhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIGRhbicgOiAnZW5pbSBkbmVtJztcbiAgICBjYXNlICdkZCc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RhbicgOiAnZG5lbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZvbWEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2aSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gbWVzZWMnIDogJ2VuaW0gbWVzZWNlbSc7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlYycgOiAnbWVzZWNlbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2EnIDogJ21lc2VjZW1hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2UnIDogJ21lc2VjaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2V2JyA6ICdtZXNlY2knO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VubyBsZXRvJyA6ICdlbmltIGxldG9tJztcbiAgICBjYXNlICd5eSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldG8nIDogJ2xldG9tJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGknIDogJ2xldG9tYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0YScgOiAnbGV0aSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXQnIDogJ2xldGknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzbCcsXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hci5fYXByLl9tYWouX2p1bi5fanVsLl9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnbmVkZWxqYV9wb25lZGVsamVrX3RvcmVrX3NyZWRhX8SNZXRydGVrX3BldGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lZC5fcG9uLl90b3IuX3NyZS5fxI1ldC5fcGV0Ll9zb2IuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3RvX3NyX8SNZV9wZV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZGFuZXMgb2JdIExUJyxcbiAgICBuZXh0RGF5OiAnW2p1dHJpIG9iXSBMVCcsXG5cbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW25lZGVsam9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzb2JvdG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb2JdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsSNZXJhaiBvYl0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuam9dIFtuZWRlbGpvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ByZWrFoW5qb10gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ByZWrFoW5qb10gW3NvYm90b10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuamldIGRkZGQgW29iXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8SNZXogJXMnLFxuICAgIHBhc3Q6ICdwcmVkICVzJyxcbiAgICBzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHNzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=