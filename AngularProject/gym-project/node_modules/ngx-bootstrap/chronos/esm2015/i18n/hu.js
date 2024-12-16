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
let /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
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
export const /** @type {?} */ huLocale = {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHFCQUFJLFdBQVcsR0FBRywrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBQzdGLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxLQUFLLElB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QyxJQUFJLENBQUM7U0FDdkM7S0FDRjtJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7Ozs7O1FBQzdCLFFBQVEsQ0FBRSxJQUFVO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxFQUFHLG1CQUFtQjs7Ozs7UUFDN0IsUUFBUSxDQUFFLElBQVU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLElBQUk7UUFDWCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7S0FDZjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFHLEtBQUs7SUFDZixJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSHVuZ2FyaWFuIFtodV1cbi8vISBhdXRob3IgOiBBZGFtIEJydW5uZXIgOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbWJydW5uZXJcblxubGV0IHdlZWtFbmRpbmdzID0gJ3Zhc8Ohcm5hcCBow6l0ZsWRbiBrZWRkZW4gc3plcmTDoW4gY3PDvHTDtnJ0w7Zrw7ZuIHDDqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJ27DqWjDoW55IG3DoXNvZHBlcmMnIDogJ27DqWjDoW55IG3DoXNvZHBlcmNlJztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gbnVtICsgKChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICcgbcOhc29kcGVyYycgOiAnIG3DoXNvZHBlcmNlJyk7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow7NuYXAnIDogJyBow7NuYXBqYScpO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gKGlzRnV0dXJlID8gJycgOiAnW23Dumx0XSAnKSArICdbJyArIHdlZWtFbmRpbmdzW2dldERheU9mV2VlayhkYXRlKV0gKyAnXSBMVFsta29yXSc7XG59XG5cbmV4cG9ydCBjb25zdCBodUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2h1JyxcbiAgbW9udGhzIDogJ2phbnXDoXJfZmVicnXDoXJfbcOhcmNpdXNfw6FwcmlsaXNfbcOhanVzX2rDum5pdXNfasO6bGl1c19hdWd1c3p0dXNfc3plcHRlbWJlcl9va3TDs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw6FyY1/DoXByX23DoWpfasO6bl9qw7psX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAndmFzw6FybmFwX2jDqXRmxZFfa2VkZF9zemVyZGFfY3PDvHTDtnJ0w7ZrX3DDqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMOpdF9rZWRkX3N6ZV9jc8O8dF9ww6luX3N6bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdIOm1tJyxcbiAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkRELicsXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXG4gICAgTExMIDogJ1lZWVkuIE1NTU0gRC4gSDptbScsXG4gICAgTExMTCA6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xuICB9LFxuICBtZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZGUnIDogJ0RFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXG4gICAgbmV4dERheSA6ICdbaG9sbmFwXSBMVFsta29yXScsXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIHRydWUpO1xuICAgIH0sXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXG4gICAgbGFzdFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIGZhbHNlKTtcbiAgICB9LFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgbcO6bHZhJyxcbiAgICBwYXN0IDogJyVzJyxcbiAgICBzIDogdHJhbnNsYXRlLFxuICAgIHNzIDogdHJhbnNsYXRlLFxuICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgaCA6IHRyYW5zbGF0ZSxcbiAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICBkIDogdHJhbnNsYXRlLFxuICAgIGRkIDogdHJhbnNsYXRlLFxuICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgeSA6IHRyYW5zbGF0ZSxcbiAgICB5eSA6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsIDogJyVkLicsXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19