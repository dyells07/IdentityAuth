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
const /** @type {?} */ units = {
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
    let /** @type {?} */ result = num + ' ';
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
export const /** @type {?} */ ltLocale = {
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
    /**
     * @param {?} num
     * @return {?}
     */
    ordinal(num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYUEsdUJBQU0sS0FBSyxHQUFHO0lBQ1osRUFBRSxFQUFHLDRCQUE0QjtJQUNqQyxDQUFDLEVBQUcsdUJBQXVCO0lBQzNCLEVBQUUsRUFBRSx5QkFBeUI7SUFDN0IsQ0FBQyxFQUFHLDBCQUEwQjtJQUM5QixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixDQUFDLEVBQUcsc0JBQXNCO0lBQzFCLEVBQUUsRUFBRSwyQkFBMkI7SUFDL0IsQ0FBQyxFQUFHLGtCQUFrQjtJQUN0QixFQUFFLEVBQUUsa0JBQWtCO0NBQ3ZCLENBQUM7Ozs7Ozs7O0FBQ0YsMEJBQTBCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztLQUM1QjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0tBQzNEO0NBQ0Y7Ozs7Ozs7O0FBQ0QsMkJBQTJCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25GOzs7OztBQUNELGlCQUFpQixHQUFXO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ2pEOzs7OztBQUNELGVBQWUsR0FBVztJQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM5Qjs7Ozs7Ozs7QUFDRCxtQkFBbUIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQ3BGLHFCQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMzRTtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEU7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtLQUNKO0NBQ0Y7QUFFRCxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHO1FBQ1AsTUFBTSxFQUFFLG1HQUFtRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEgsVUFBVSxFQUFFLGlHQUFpRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEgsUUFBUSxFQUFFLDZEQUE2RDtLQUN4RTtJQUNELFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRztRQUNQLE1BQU0sRUFBRSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RHLFVBQVUsRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pILFFBQVEsRUFBRSxZQUFZO0tBQ3pCO0lBQ0QsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekMsa0JBQWtCLEVBQUcsSUFBSTtJQUN6QixjQUFjLEVBQUc7UUFDYixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyx1QkFBdUI7UUFDNUIsR0FBRyxFQUFHLHFDQUFxQztRQUMzQyxJQUFJLEVBQUcsMkNBQTJDO1FBQ2xELENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyx1QkFBdUI7UUFDNUIsR0FBRyxFQUFHLHFDQUFxQztRQUMzQyxJQUFJLEVBQUcsMENBQTBDO0tBQ3BEO0lBQ0QsUUFBUSxFQUFHO1FBQ1AsT0FBTyxFQUFHLGVBQWU7UUFDekIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLFNBQVM7UUFDcEIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsR0FBRztLQUNqQjtJQUNELFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztLQUNqQjtJQUNELHNCQUFzQixFQUFFLGFBQWE7Ozs7O0lBQ3JDLE9BQU8sQ0FBQyxHQUFHO1FBQ1AsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDdkI7SUFDRCxJQUFJLEVBQUc7UUFDSCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNWO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTGl0aHVhbmlhbiBbbHRdXG4vLyEgYXV0aG9yIDogU3RhbmlzbGF2YXMgR3VrIDogaHR0cHM6Ly9naXRodWIuY29tL2l4b3N0ZXJcblxuY29uc3QgdW5pdHMgPSB7XG4gIHNzIDogJ3Nla3VuZMSXX3Nla3VuZMW+acWzX3Nla3VuZGVzJyxcbiAgbSA6ICdtaW51dMSXX21pbnV0xJdzX21pbnV0xJknLFxuICBtbTogJ21pbnV0xJdzX21pbnXEjWnFs19taW51dGVzJyxcbiAgaCA6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMSFJyxcbiAgaGg6ICd2YWxhbmRvc192YWxhbmTFs192YWxhbmRhcycsXG4gIGQgOiAnZGllbmFfZGllbm9zX2RpZW7EhScsXG4gIGRkOiAnZGllbm9zX2RpZW7Fs19kaWVuYXMnLFxuICBNIDogJ23El251b19txJduZXNpb19txJduZXPErycsXG4gIE1NOiAnbcSXbmVzaWFpX23El25lc2nFs19txJduZXNpdXMnLFxuICB5IDogJ21ldGFpX21ldMWzX21ldHVzJyxcbiAgeXk6ICdtZXRhaV9tZXTFs19tZXR1cydcbn07XG5mdW5jdGlvbiB0cmFuc2xhdGVTZWNvbmRzKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgIHJldHVybiAna2VsaW9zIHNla3VuZMSXcyc7XG4gIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna2VsacWzIHNla3VuZMW+acWzJyA6ICdrZWxpYXMgc2VrdW5kZXMnO1xuICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTaW5ndWxhcihudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybXMoa2V5KVswXSA6IChpc0Z1dHVyZSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbn1cbmZ1bmN0aW9uIHNwZWNpYWwobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG51bSAlIDEwID09PSAwIHx8IChudW0gPiAxMCAmJiBudW0gPCAyMCk7XG59XG5mdW5jdGlvbiBmb3JtcyhrZXk6IHN0cmluZykge1xuICByZXR1cm4gdW5pdHNba2V5XS5zcGxpdCgnXycpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcbiAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIHRyYW5zbGF0ZVNpbmd1bGFyKG51bSwgd2l0aG91dFN1ZmZpeCwga2V5WzBdLCBpc0Z1dHVyZSk7XG4gIH0gZWxzZSBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XG4gIH0gZWxzZSB7XG4gICAgICBpZiAoaXNGdXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGx0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbHQnLFxuICBtb250aHMgOiB7XG4gICAgZm9ybWF0OiAnc2F1c2lvX3Zhc2FyaW9fa292b19iYWxhbmTFvmlvX2dlZ3XFvsSXc19iaXLFvmVsaW9fbGllcG9zX3J1Z3BqxavEjWlvX3J1Z3PEl2pvX3NwYWxpb19sYXBrcmnEjWlvX2dydW9kxb5pbycuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAnc2F1c2lzX3Zhc2FyaXNfa292YXNfYmFsYW5kaXNfZ2VndcW+xJdfYmlyxb5lbGlzX2xpZXBhX3J1Z3Bqxat0aXNfcnVnc8SXamlzX3NwYWxpc19sYXBrcml0aXNfZ3J1b2Rpcycuc3BsaXQoJ18nKSxcbiAgICBpc0Zvcm1hdDogL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT98TU1NTT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK0Rbb0RdPy9cbiAgfSxcbiAgbW9udGhzU2hvcnQgOiAnc2F1X3Zhc19rb3ZfYmFsX2dlZ19iaXJfbGllX3JncF9yZ3Nfc3BhX2xhcF9ncmQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDoge1xuICAgICAgZm9ybWF0OiAnc2VrbWFkaWVuxK9fcGlybWFkaWVuxK9fYW50cmFkaWVuxK9fdHJlxI1pYWRpZW7Er19rZXR2aXJ0YWRpZW7Er19wZW5rdGFkaWVuxK9fxaFlxaF0YWRpZW7Erycuc3BsaXQoJ18nKSxcbiAgICAgIHN0YW5kYWxvbmU6ICdzZWttYWRpZW5pc19waXJtYWRpZW5pc19hbnRyYWRpZW5pc190cmXEjWlhZGllbmlzX2tldHZpcnRhZGllbmlzX3Blbmt0YWRpZW5pc1/FoWXFoXRhZGllbmlzJy5zcGxpdCgnXycpLFxuICAgICAgaXNGb3JtYXQ6IC9kZGRkIEhIOm1tL1xuICB9LFxuICB3ZWVrZGF5c1Nob3J0IDogJ1Nla19QaXJfQW50X1RyZV9LZXRfUGVuX8WgZcWhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTX1BfQV9UX0tfUG5fxaAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgIEwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICBMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxuICAgICAgTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIExMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGRkLCBISDptbSBbdmFsLl0nLFxuICAgICAgbCA6ICdZWVlZLU1NLUREJyxcbiAgICAgIGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICBsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxuICAgICAgbGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZCwgSEg6bW0gW3ZhbC5dJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICAgIHNhbWVEYXkgOiAnW8WgaWFuZGllbl0gTFQnLFxuICAgICAgbmV4dERheSA6ICdbUnl0b2pdIExUJyxcbiAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFQnLFxuICAgICAgbGFzdERheSA6ICdbVmFrYXJdIExUJyxcbiAgICAgIGxhc3RXZWVrIDogJ1tQcmHEl2p1c8SvXSBkZGRkIExUJyxcbiAgICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgIGZ1dHVyZSA6ICdwbyAlcycsXG4gICAgICBwYXN0IDogJ3ByaWXFoSAlcycsXG4gICAgICBzIDogdHJhbnNsYXRlU2Vjb25kcyxcbiAgICAgIHNzIDogdHJhbnNsYXRlLFxuICAgICAgbSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgICBoIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgIGQgOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIGRkIDogdHJhbnNsYXRlLFxuICAgICAgTSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgICB5IDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICB5eSA6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tb2ppLyxcbiAgb3JkaW5hbChudW0pIHtcbiAgICAgIHJldHVybiBudW0gKyAnLW9qaSc7XG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==