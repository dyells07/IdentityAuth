/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */
numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
export var /** @type {?} */ fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2ZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSxxQkFBSSxXQUFXLEdBQUcsdUVBQXVFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNsRyxhQUFhLEdBQUc7SUFDZCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQ2xFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztDQUMvQyxDQUFDOzs7Ozs7OztBQUVKLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYscUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osS0FBSyxHQUFHO1lBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzVELEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssSUFBSTtZQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzdDLEtBQUssQ0FBQztRQUNSLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FB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QUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9ibG9iL2RldmVsb3AvbG9jYWxlL2ZpLmpzXG5cbnZhciBudW1iZXJzUGFzdCA9ICdub2xsYSB5a3NpIGtha3NpIGtvbG1lIG5lbGrDpCB2aWlzaSBrdXVzaSBzZWl0c2Vtw6RuIGthaGRla3NhbiB5aGRla3PDpG4nLnNwbGl0KCcgJyksXG4gIG51bWJlcnNGdXR1cmUgPSBbXG4gICAgJ25vbGxhJywgJ3loZGVuJywgJ2thaGRlbicsICdrb2xtZW4nLCAnbmVsasOkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcbiAgICBudW1iZXJzUGFzdFs3XSwgbnVtYmVyc1Bhc3RbOF0sIG51bWJlcnNQYXN0WzldXG4gIF07XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ211dXRhbWFuIHNla3VubmluJyA6ICdtdXV0YW1hIHNla3VudGknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdzZWt1bm5pbicgOiAnc2VrdW50aWEnO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aSc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAnbWludXV0aW4nIDogJ21pbnV1dHRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpJztcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdww6RpdsOkbicgOiAncMOkaXbDpCc7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAncMOkaXbDpG4nIDogJ3DDpGl2w6TDpCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXNpJztcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXR0YSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3NpJztcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3R0YSc7XG4gICAgICBicmVhaztcbiAgfVxuICByZXN1bHQgPSB2ZXJiYWxOdW1iZXIobnVtLCBpc0Z1dHVyZSkgKyAnICcgKyByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHZlcmJhbE51bWJlcihudW06IG51bWJlciwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIG51bSA8IDEwID8gKGlzRnV0dXJlID8gbnVtYmVyc0Z1dHVyZVtudW1dIDogbnVtYmVyc1Bhc3RbbnVtXSkgOiBudW07XG59XG5cbmV4cG9ydCBjb25zdCBmaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2ZpJyxcbiAgbW9udGhzOiAndGFtbWlrdXVfaGVsbWlrdXVfbWFhbGlza3V1X2h1aHRpa3V1X3RvdWtva3V1X2tlc8Oka3V1X2hlaW7DpGt1dV9lbG9rdXVfc3l5c2t1dV9sb2tha3V1X21hcnJhc2t1dV9qb3VsdWt1dScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICd0YW1taV9oZWxtaV9tYWFsaXNfaHVodGlfdG91a29fa2Vzw6RfaGVpbsOkX2Vsb19zeXlzX2xva2FfbWFycmFzX2pvdWx1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ3N1bm51bnRhaV9tYWFuYW50YWlfdGlpc3RhaV9rZXNraXZpaWtrb190b3JzdGFpX3BlcmphbnRhaV9sYXVhbnRhaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEgubW0nLFxuICAgIExUUzogJ0hILm1tLnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEbyBNTU1NW3RhXSBZWVlZJyxcbiAgICBMTEw6ICdEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgTExMTDogJ2RkZGQsIERvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBsOiAnRC5NLllZWVknLFxuICAgIGxsOiAnRG8gTU1NIFlZWVknLFxuICAgIGxsbDogJ0RvIE1NTSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgbGxsbDogJ2RkZCwgRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbdMOkbsOkw6RuXSBba2xvXSBMVCcsXG4gICAgbmV4dERheTogJ1todW9tZW5uYV0gW2tsb10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBba2xvXSBMVCcsXG4gICAgbGFzdERheTogJ1tlaWxlbl0gW2tsb10gTFQnLFxuICAgIGxhc3RXZWVrOiAnW3ZpaW1lXSBkZGRkW25hXSBba2xvXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyBww6TDpHN0w6QnLFxuICAgIHBhc3Q6ICclcyBzaXR0ZW4nLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==