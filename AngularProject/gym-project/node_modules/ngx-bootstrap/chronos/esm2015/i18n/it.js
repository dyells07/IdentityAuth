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
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
export const /** @type {?} */ itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        /**
         * @param {?} num
         * @return {?}
         */
        future(num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU9wRCxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLCtGQUErRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEgsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLDBEQUEwRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0UsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLGdCQUFnQjs7Ozs7UUFDekIsUUFBUSxDQUFDLElBQVU7WUFDakIsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxDQUFDO29CQUNKLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztnQkFDdEM7b0JBQ0UsTUFBTSxDQUFDLDRCQUE0QixDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFOzs7OztRQUNaLE1BQU0sQ0FBQyxHQUFXO1lBQ2hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxFQUFFLE9BQU87UUFDYixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEl0YWxpYW4gW2l0XVxuLy8hIGF1dGhvciA6IExvcmVuem8gOiBodHRwczovL2dpdGh1Yi5jb20vYWxpZW1cbi8vISBhdXRob3I6IE1hdHRpYSBMYXJlbnRpczogaHR0cHM6Ly9naXRodWIuY29tL25vc3RhbGdpYXpcblxuZXhwb3J0IGNvbnN0IGl0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaXQnLFxuICBtb250aHM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnZG9tZW5pY2FfbHVuZWTDrF9tYXJ0ZWTDrF9tZXJjb2xlZMOsX2dpb3ZlZMOsX3ZlbmVyZMOsX3NhYmF0bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbV9sdW5fbWFyX21lcl9naW9fdmVuX3NhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tZV9naV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW09nZ2kgYWxsZV0gTFQnLFxuICAgIG5leHREYXk6ICdbRG9tYW5pIGFsbGVdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2FsbGVdIExUJyxcbiAgICBsYXN0RGF5OiAnW0llcmkgYWxsZV0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tsYSBzY29yc2FdIGRkZGQgW2FsbGVdIExUJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1tsbyBzY29yc29dIGRkZGQgW2FsbGVdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoKC9eWzAtOV0uKyQvKS50ZXN0KG51bS50b1N0cmluZygxMCkpID8gJ3RyYScgOiAnaW4nKSArICcgJyArIG51bTtcbiAgICB9LFxuICAgIHBhc3Q6ICclcyBmYScsXG4gICAgczogJ2FsY3VuaSBzZWNvbmRpJyxcbiAgICBzczogJyVkIHNlY29uZGknLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRpJyxcbiAgICBoOiAndW5cXCdvcmEnLFxuICAgIGhoOiAnJWQgb3JlJyxcbiAgICBkOiAndW4gZ2lvcm5vJyxcbiAgICBkZDogJyVkIGdpb3JuaScsXG4gICAgTTogJ3VuIG1lc2UnLFxuICAgIE1NOiAnJWQgbWVzaScsXG4gICAgeTogJ3VuIGFubm8nLFxuICAgIHl5OiAnJWQgYW5uaSdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICBvcmRpbmFsOiAnJWTCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19