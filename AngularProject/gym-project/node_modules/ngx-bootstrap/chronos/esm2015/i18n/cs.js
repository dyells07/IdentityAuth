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
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
const /** @type {?} */ months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
const /** @type {?} */ monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    const /** @type {?} */ result = num + ' ';
    switch (key) {
        case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd':
            // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M':
            // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y':
            // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
    }
}
export const /** @type {?} */ csLocale = {
    abbr: 'cs',
    months,
    monthsShort,
    monthsParse: (function (months, monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse: (function (monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse: (function (months) {
        let /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHVCQUFNLE1BQU0sR0FBYSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEgsdUJBQU0sV0FBVyxHQUFhLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7QUFFM0YsZ0JBQWdCLEdBQVc7SUFDekIsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3ZEOzs7Ozs7OztBQUVELG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsdUJBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFekIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2FBQzdCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELEtBQUssSUFBSTs7WUFDUCxFQUFFLENB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bWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDemVjaCBbY3NdXG4vLyEgYXV0aG9yIDogcGV0cmJlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vcGV0cmJlbGFcblxuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9ICdsZWRlbl/Dum5vcl9ixZllemVuX2R1YmVuX2t2xJt0ZW5fxI1lcnZlbl/EjWVydmVuZWNfc3JwZW5fesOhxZnDrV/FmcOtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpO1xuY29uc3QgbW9udGhzU2hvcnQ6IHN0cmluZ1tdID0gJ2xlZF/Dum5vX2LFmWVfZHViX2t2xJtfxI12bl/EjXZjX3NycF96w6HFmV/FmcOtal9saXNfcHJvJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gbnVtICsgJyAnO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6ICAvLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDoXIgc2VrdW5kJyA6ICdww6FyIHNla3VuZGFtaSc7XG4gICAgY2FzZSAnc3MnOiAvLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ20nOiAgLy8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6IChpc0Z1dHVyZSA/ICdtaW51dHUnIDogJ21pbnV0b3UnKTtcbiAgICBjYXNlICdtbSc6IC8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW51dGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnaCc6ICAvLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xuICAgIGNhc2UgJ2hoJzogLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdob2RpbnknIDogJ2hvZGluJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdkJzogIC8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGVuJyA6ICdkbmVtJztcbiAgICBjYXNlICdkZCc6IC8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZG55JyA6ICdkbsOtJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2RueSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnTSc6ICAvLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ23Em3PDrWMnIDogJ23Em3PDrWNlbSc7XG4gICAgY2FzZSAnTU0nOiAvLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ23Em3PDrWNlJyA6ICdtxJtzw61jxa8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbcSbc8OtY2knO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ3knOiAgLy8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva2VtJztcbiAgICBjYXNlICd5eSc6IC8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAncm9reScgOiAnbGV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2xldHknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2NzJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydCxcbiAgbW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzLCBtb250aHNTaG9ydCkge1xuICAgIGxldCBpLCBfbW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gdXNlIGN1c3RvbSBwYXJzZXIgdG8gc29sdmUgcHJvYmxlbSB3aXRoIEp1bHkgKMSNZXJ2ZW5lYylcbiAgICAgIF9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyR8XicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9tb250aHNQYXJzZTtcbiAgfShtb250aHMsIG1vbnRoc1Nob3J0KSksXG4gIHNob3J0TW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzU2hvcnQpIHtcbiAgICBsZXQgaSwgX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX3Nob3J0TW9udGhzUGFyc2U7XG4gIH0obW9udGhzU2hvcnQpKSxcbiAgbG9uZ01vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocykge1xuICAgIGxldCBpLCBfbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIF9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9sb25nTW9udGhzUGFyc2U7XG4gIH0obW9udGhzKSksXG4gIHdlZWtkYXlzOiAnbmVkxJtsZV9wb25kxJtsw61fw7p0ZXLDvV9zdMWZZWRhX8SNdHZydGVrX3DDoXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb1/DunRfc3RfxI10X3DDoV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb1/DunRfc3RfxI10X3DDoV9zbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBsOiAnRC4gTS4gWVlZWSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RuZXMgdl0gTFQnLFxuICAgIG5leHREYXk6ICdbesOtdHJhIHZdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZMSbbGkgdl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1t2ZSBzdMWZZWR1IHZdIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnW3ZlIMSNdHZydGVrIHZdIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3YgcMOhdGVrIHZdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IHZdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsSNZXJhIHZdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IG5lZMSbbGkgdl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMOpXSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHN0xZllZHUgdl0gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHNvYm90dSB2XSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAncMWZZWQgJXMnLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIl19