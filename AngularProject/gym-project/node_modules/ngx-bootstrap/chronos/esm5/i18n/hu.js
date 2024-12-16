/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
export var /** @type {?} */ huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHFCQUFJLFdBQVcsR0FBRywrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBQzdGLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxLQUFLLElB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SUFBSSxDQUFDO1NBQ3ZDO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsZUFBZTtRQUN6QixPQUFPLEVBQUcsbUJBQW1CO1FBQzdCLFFBQVE7Ozs7a0JBQUUsSUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sRUFBRyxtQkFBbUI7UUFDN0IsUUFBUTs7OztrQkFBRSxJQUFVO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxVQUFVO1FBQ25CLElBQUksRUFBRyxJQUFJO1FBQ1gsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRyxLQUFLO0lBQ2YsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUM7S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEh1bmdhcmlhbiBbaHVdXG4vLyEgYXV0aG9yIDogQWRhbSBCcnVubmVyIDogaHR0cHM6Ly9naXRodWIuY29tL2FkYW1icnVubmVyXG5cbmxldCB3ZWVrRW5kaW5ncyA9ICd2YXPDoXJuYXAgaMOpdGbFkW4ga2VkZGVuIHN6ZXJkw6FuIGNzw7x0w7ZydMO2a8O2biBww6ludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICduw6low6FueSBtw6Fzb2RwZXJjJyA6ICduw6low6FueSBtw6Fzb2RwZXJjZSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIG51bSArICgoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnIG3DoXNvZHBlcmMnIDogJyBtw6Fzb2RwZXJjZScpO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOzcmEnIDogJyDDs3LDoWphJyk7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICBjYXNlICdkZCc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgY2FzZSAnTSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDs25hcCcgOiAnIGjDs25hcGphJyk7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw6l2JyA6ICcgw6l2ZScpO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw6l2JyA6ICcgw6l2ZScpO1xuICB9XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIHdlZWsoZGF0ZTogRGF0ZSwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChpc0Z1dHVyZSA/ICcnIDogJ1ttw7psdF0gJykgKyAnWycgKyB3ZWVrRW5kaW5nc1tnZXREYXlPZldlZWsoZGF0ZSldICsgJ10gTFRbLWtvcl0nO1xufVxuXG5leHBvcnQgY29uc3QgaHVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdodScsXG4gIG1vbnRocyA6ICdqYW51w6FyX2ZlYnJ1w6FyX23DoXJjaXVzX8OhcHJpbGlzX23DoWp1c19qw7puaXVzX2rDumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w7NiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbcOhcmNfw6Fwcl9tw6FqX2rDum5fasO6bF9hdWdfc3plcHRfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ3Zhc8Ohcm5hcF9ow6l0ZsWRX2tlZGRfc3plcmRhX2Nzw7x0w7ZydMO2a19ww6ludGVrX3N6b21iYXQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAndmFzX2jDqXRfa2VkZF9zemVfY3PDvHRfcMOpbl9zem8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ3ZfaF9rX3N6ZV9jc19wX3N6bycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSDptbScsXG4gICAgTFRTIDogJ0g6bW06c3MnLFxuICAgIEwgOiAnWVlZWS5NTS5ERC4nLFxuICAgIExMIDogJ1lZWVkuIE1NTU0gRC4nLFxuICAgIExMTCA6ICdZWVlZLiBNTU1NIEQuIEg6bW0nLFxuICAgIExMTEwgOiAnWVlZWS4gTU1NTSBELiwgZGRkZCBIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvZGV8ZHUvaSxcbiAgaXNQTSAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd1JztcbiAgfSxcbiAgbWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzIDwgMTIpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2RlJyA6ICdERSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2R1JyA6ICdEVSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1ttYV0gTFRbLWtvcl0nLFxuICAgIG5leHREYXkgOiAnW2hvbG5hcF0gTFRbLWtvcl0nLFxuICAgIG5leHRXZWVrIChkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gd2VlayhkYXRlLCB0cnVlKTtcbiAgICB9LFxuICAgIGxhc3REYXkgOiAnW3RlZ25hcF0gTFRbLWtvcl0nLFxuICAgIGxhc3RXZWVrIChkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gd2VlayhkYXRlLCBmYWxzZSk7XG4gICAgfSxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIG3Dumx2YScsXG4gICAgcGFzdCA6ICclcycsXG4gICAgcyA6IHRyYW5zbGF0ZSxcbiAgICBzcyA6IHRyYW5zbGF0ZSxcbiAgICBtIDogdHJhbnNsYXRlLFxuICAgIG1tIDogdHJhbnNsYXRlLFxuICAgIGggOiB0cmFuc2xhdGUsXG4gICAgaGggOiB0cmFuc2xhdGUsXG4gICAgZCA6IHRyYW5zbGF0ZSxcbiAgICBkZCA6IHRyYW5zbGF0ZSxcbiAgICBNIDogdHJhbnNsYXRlLFxuICAgIE1NIDogdHJhbnNsYXRlLFxuICAgIHkgOiB0cmFuc2xhdGUsXG4gICAgeXkgOiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbCA6ICclZC4nLFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==