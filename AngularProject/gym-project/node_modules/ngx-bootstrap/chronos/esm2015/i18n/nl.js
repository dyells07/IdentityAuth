/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getMonth } from '../utils/date-getters';
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
let /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */
monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
let /** @type {?} */ monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
let /** @type {?} */ monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
export const /** @type {?} */ nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots[getMonth(date, isUTC)];
        }
    },
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL25sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQU9qRCxxQkFBSSxtQkFBbUIsR0FBRyw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQy9GLHNCQUFzQixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUV4RixxQkFBSSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckoscUJBQUksV0FBVyxHQUFHLDBLQUEwSyxDQUFDO0FBRTdMLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcseUZBQXlGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7OztJQUM3RyxXQUFXLENBQUUsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0tBQ0Y7SUFFRCxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsV0FBVztJQUM3QixpQkFBaUIsRUFBRSwyRkFBMkY7SUFDOUcsc0JBQXNCLEVBQUUsa0ZBQWtGO0lBRTFHLFdBQVc7SUFDWCxlQUFlLEVBQUcsV0FBVztJQUM3QixnQkFBZ0IsRUFBRyxXQUFXO0lBRTlCLFFBQVEsRUFBRyw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGtCQUFrQixFQUFHLElBQUk7SUFDekIsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLE9BQU87UUFDWixHQUFHLEVBQUcsVUFBVTtRQUNoQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsYUFBYTtRQUNsQixHQUFHLEVBQUcsbUJBQW1CO1FBQ3pCLElBQUksRUFBRyx3QkFBd0I7S0FDaEM7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsU0FBUztRQUNsQixJQUFJLEVBQUcsWUFBWTtRQUNuQixDQUFDLEVBQUcsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFFBQVE7UUFDYixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFdBQVc7UUFDZixFQUFFLEVBQUcsWUFBWTtRQUNqQixDQUFDLEVBQUcsVUFBVTtRQUNkLEVBQUUsRUFBRyxTQUFTO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRSxpQkFBaUI7Ozs7O0lBQ3pDLE9BQU8sQ0FBRSxJQUFZO1FBQ25CLHVCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyRTtJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEdXRjaCBbbmxdXG4vLyEgYXV0aG9yIDogSm9yaXMgUsO2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXG5cbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0V2l0aG91dERvdHMgPSAnamFuX2ZlYl9tcnRfYXByX21laV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmphbi9pLCAvXmZlYi9pLCAvXm1hYXJ0fG1ydC4/JC9pLCAvXmFwci9pLCAvXm1laSQvaSwgL15qdW5baS5dPyQvaSwgL15qdWxbaS5dPyQvaSwgL15hdWcvaSwgL15zZXAvaSwgL15va3QvaSwgL15ub3YvaSwgL15kZWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fGFwcmlsfG1laXxhcHJpbHxqdVtubF1pfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyfGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBubExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ25sJyxcbiAgbW9udGhzIDogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRob3V0RG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcblxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fG1laXxqdVtubF1pfGFwcmlsfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fG1laXxqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcblxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlIDogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcblxuICB3ZWVrZGF5cyA6ICd6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ3pvLl9tYS5fZGkuX3dvLl9kby5fdnIuX3phLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQtTU0tWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdvdmVyICVzJyxcbiAgICBwYXN0IDogJyVzIGdlbGVkZW4nLFxuICAgIHMgOiAnZWVuIHBhYXIgc2Vjb25kZW4nLFxuICAgIHNzIDogJyVkIHNlY29uZGVuJyxcbiAgICBtIDogJ8Opw6luIG1pbnV1dCcsXG4gICAgbW0gOiAnJWQgbWludXRlbicsXG4gICAgaCA6ICfDqcOpbiB1dXInLFxuICAgIGhoIDogJyVkIHV1cicsXG4gICAgZCA6ICfDqcOpbiBkYWcnLFxuICAgIGRkIDogJyVkIGRhZ2VuJyxcbiAgICBNIDogJ8Opw6luIG1hYW5kJyxcbiAgICBNTSA6ICclZCBtYWFuZGVuJyxcbiAgICB5IDogJ8Opw6luIGphYXInLFxuICAgIHl5IDogJyVkIGphYXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgb3JkaW5hbCAoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgcmV0dXJuIG51bSArICgobnVtID09PSAxIHx8IG51bSA9PT0gOCB8fCBudW0gPj0gMjApID8gJ3N0ZScgOiAnZGUnKTtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=