/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
var /** @type {?} */ units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return units[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
export var /** @type {?} */ ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate,
        m: translateSingular,
        mm: translate,
        h: translateSingular,
        hh: translate,
        d: translateSingular,
        dd: translate,
        M: translateSingular,
        MM: translate,
        y: translateSingular,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYUEscUJBQU0sS0FBSyxHQUFHO0lBQ1osRUFBRSxFQUFHLDRCQUE0QjtJQUNqQyxDQUFDLEVBQUcsdUJBQXVCO0lBQzNCLEVBQUUsRUFBRSx5QkFBeUI7SUFDN0IsQ0FBQyxFQUFHLDBCQUEwQjtJQUM5QixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixDQUFDLEVBQUcsc0JBQXNCO0lBQzFCLEVBQUUsRUFBRSwyQkFBMkI7SUFDL0IsQ0FBQyxFQUFHLGtCQUFrQjtJQUN0QixFQUFFLEVBQUUsa0JBQWtCO0NBQ3ZCLENBQUM7Ozs7Ozs7O0FBQ0YsMEJBQTBCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztLQUM1QjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0tBQzNEO0NBQ0Y7Ozs7Ozs7O0FBQ0QsMkJBQTJCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25GOzs7OztBQUNELGlCQUFpQixHQUFXO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ2pEOzs7OztBQUNELGVBQWUsR0FBVztJQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM5Qjs7Ozs7Ozs7QUFDRCxtQkFBbUIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQ3BGLHFCQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMzRTtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEU7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtLQUNKO0NBQ0Y7QUFFRCxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHO1FBQ1AsTUFBTSxFQUFFLG1HQUFtRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEgsVUFBVSxFQUFFLGlHQUFpRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEgsUUFBUSxFQUFFLDZEQUE2RDtLQUN4RTtJQUNELFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRztRQUNQLE1BQU0sRUFBRSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RHLFVBQVUsRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pILFFBQVEsRUFBRSxZQUFZO0tBQ3pCO0lBQ0QsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekMsa0JBQWtCLEVBQUcsSUFBSTtJQUN6QixjQUFjLEVBQUc7UUFDYixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyx1QkFBdUI7UUFDNUIsR0FBRyxFQUFHLHFDQUFxQztRQUMzQyxJQUFJLEVBQUcsMkNBQTJDO1FBQ2xELENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyx1QkFBdUI7UUFDNUIsR0FBRyxFQUFHLHFDQUFxQztRQUMzQyxJQUFJLEVBQUcsMENBQTBDO0tBQ3BEO0lBQ0QsUUFBUSxFQUFHO1FBQ1AsT0FBTyxFQUFHLGVBQWU7UUFDekIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLFNBQVM7UUFDcEIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsR0FBRztLQUNqQjtJQUNELFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztLQUNqQjtJQUNELHNCQUFzQixFQUFFLGFBQWE7SUFDckMsT0FBTzs7OztjQUFDLEdBQUc7UUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUN2QjtJQUNELElBQUksRUFBRztRQUNILEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMaXRodWFuaWFuIFtsdF1cbi8vISBhdXRob3IgOiBTdGFuaXNsYXZhcyBHdWsgOiBodHRwczovL2dpdGh1Yi5jb20vaXhvc3RlclxuXG5jb25zdCB1bml0cyA9IHtcbiAgc3MgOiAnc2VrdW5kxJdfc2VrdW5kxb5pxbNfc2VrdW5kZXMnLFxuICBtIDogJ21pbnV0xJdfbWludXTEl3NfbWludXTEmScsXG4gIG1tOiAnbWludXTEl3NfbWludcSNacWzX21pbnV0ZXMnLFxuICBoIDogJ3ZhbGFuZGFfdmFsYW5kb3NfdmFsYW5kxIUnLFxuICBoaDogJ3ZhbGFuZG9zX3ZhbGFuZMWzX3ZhbGFuZGFzJyxcbiAgZCA6ICdkaWVuYV9kaWVub3NfZGllbsSFJyxcbiAgZGQ6ICdkaWVub3NfZGllbsWzX2RpZW5hcycsXG4gIE0gOiAnbcSXbnVvX23El25lc2lvX23El25lc8SvJyxcbiAgTU06ICdtxJduZXNpYWlfbcSXbmVzacWzX23El25lc2l1cycsXG4gIHkgOiAnbWV0YWlfbWV0xbNfbWV0dXMnLFxuICB5eTogJ21ldGFpX21ldMWzX21ldHVzJ1xufTtcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNlY29uZHMobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kxJdzJztcbiAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpxbMgc2VrdW5kxb5pxbMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpbmd1bGFyKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtcyhrZXkpWzBdIDogKGlzRnV0dXJlID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xufVxuZnVuY3Rpb24gc3BlY2lhbChudW06IG51bWJlcikge1xuICByZXR1cm4gbnVtICUgMTAgPT09IDAgfHwgKG51bSA+IDEwICYmIG51bSA8IDIwKTtcbn1cbmZ1bmN0aW9uIGZvcm1zKGtleTogc3RyaW5nKSB7XG4gIHJldHVybiB1bml0c1trZXldLnNwbGl0KCdfJyk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBsZXQgcmVzdWx0ID0gbnVtICsgJyAnO1xuICBpZiAobnVtID09PSAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtLCB3aXRob3V0U3VmZml4LCBrZXlbMF0sIGlzRnV0dXJlKTtcbiAgfSBlbHNlIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzBdKTtcbiAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0Z1dHVyZSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQgKyBmb3JtcyhrZXkpWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbHRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdsdCcsXG4gIG1vbnRocyA6IHtcbiAgICBmb3JtYXQ6ICdzYXVzaW9fdmFzYXJpb19rb3ZvX2JhbGFuZMW+aW9fZ2VndcW+xJdzX2JpcsW+ZWxpb19saWVwb3NfcnVncGrFq8SNaW9fcnVnc8SXam9fc3BhbGlvX2xhcGtyacSNaW9fZ3J1b2TFvmlvJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICdzYXVzaXNfdmFzYXJpc19rb3Zhc19iYWxhbmRpc19nZWd1xb7El19iaXLFvmVsaXNfbGllcGFfcnVncGrFq3Rpc19ydWdzxJdqaXNfc3BhbGlzX2xhcGtyaXRpc19ncnVvZGlzJy5zcGxpdCgnXycpLFxuICAgIGlzRm9ybWF0OiAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NP3xNTU1NPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrRFtvRF0/L1xuICB9LFxuICBtb250aHNTaG9ydCA6ICdzYXVfdmFzX2tvdl9iYWxfZ2VnX2Jpcl9saWVfcmdwX3Jnc19zcGFfbGFwX2dyZCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiB7XG4gICAgICBmb3JtYXQ6ICdzZWttYWRpZW7Er19waXJtYWRpZW7Er19hbnRyYWRpZW7Er190cmXEjWlhZGllbsSvX2tldHZpcnRhZGllbsSvX3Blbmt0YWRpZW7Er1/FoWXFoXRhZGllbsSvJy5zcGxpdCgnXycpLFxuICAgICAgc3RhbmRhbG9uZTogJ3Nla21hZGllbmlzX3Bpcm1hZGllbmlzX2FudHJhZGllbmlzX3RyZcSNaWFkaWVuaXNfa2V0dmlydGFkaWVuaXNfcGVua3RhZGllbmlzX8WhZcWhdGFkaWVuaXMnLnNwbGl0KCdfJyksXG4gICAgICBpc0Zvcm1hdDogL2RkZGQgSEg6bW0vXG4gIH0sXG4gIHdlZWtkYXlzU2hvcnQgOiAnU2VrX1Bpcl9BbnRfVHJlX0tldF9QZW5fxaBlxaEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1NfUF9BX1RfS19Qbl/FoCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICBMVCA6ICdISDptbScsXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgTCA6ICdZWVlZLU1NLUREJyxcbiAgICAgIExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICBMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxuICAgICAgTExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZGQsIEhIOm1tIFt2YWwuXScsXG4gICAgICBsIDogJ1lZWVktTU0tREQnLFxuICAgICAgbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgIGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICBsbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkLCBISDptbSBbdmFsLl0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgICAgc2FtZURheSA6ICdbxaBpYW5kaWVuXSBMVCcsXG4gICAgICBuZXh0RGF5IDogJ1tSeXRval0gTFQnLFxuICAgICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgICBsYXN0RGF5IDogJ1tWYWthcl0gTFQnLFxuICAgICAgbGFzdFdlZWsgOiAnW1ByYcSXanVzxK9dIGRkZGQgTFQnLFxuICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgZnV0dXJlIDogJ3BvICVzJyxcbiAgICAgIHBhc3QgOiAncHJpZcWhICVzJyxcbiAgICAgIHMgOiB0cmFuc2xhdGVTZWNvbmRzLFxuICAgICAgc3MgOiB0cmFuc2xhdGUsXG4gICAgICBtIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICAgIGggOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIGhoIDogdHJhbnNsYXRlLFxuICAgICAgZCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICBNIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICAgIHkgOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIHl5IDogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS1vamkvLFxuICBvcmRpbmFsKG51bSkge1xuICAgICAgcmV0dXJuIG51bSArICctb2ppJztcbiAgfSxcbiAgd2VlayA6IHtcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19