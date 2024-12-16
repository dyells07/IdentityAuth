/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
export const /** @type {?} */ svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        let /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3N2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx1RkFBdUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFHLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSxtREFBbUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxHQUFHLEVBQUUsa0JBQWtCO1FBQ3ZCLElBQUksRUFBRSxzQkFBc0I7S0FDN0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsV0FBVztRQUNwQixRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxjQUFjO1FBQ3BCLENBQUMsRUFBRSxnQkFBZ0I7UUFDbkIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztLQUNaO0lBQ0Qsc0JBQXNCLEVBQUUsY0FBYzs7Ozs7SUFDdEMsT0FBTyxDQUFDLElBQVk7UUFDbEIsdUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDZCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5QixNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTd2VkaXNoIFtzdl1cbi8vISBhdXRob3IgOiBKZW5zIEFsbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS91bG11c1xuXG5leHBvcnQgY29uc3Qgc3ZMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzdicsXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuX2ZlYl9tYXJfYXByX21hal9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnc8O2bmRhZ19tw6VuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMO2cmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3PDtm5fbcOlbl90aXNfb25zX3Rvcl9mcmVfbMO2cicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdzw7ZfbcOlX3RpX29uX3RvX2ZyX2zDticuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVktTU0tREQnLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXG4gICAgbGxsbDogJ2RkZCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbSWRhZ10gTFQnLFxuICAgIG5leHREYXk6ICdbSW1vcmdvbl0gTFQnLFxuICAgIGxhc3REYXk6ICdbSWfDpXJdIExUJyxcbiAgICBuZXh0V2VlazogJ1tQw6VdIGRkZGQgTFQnLFxuICAgIGxhc3RXZWVrOiAnW0ldIGRkZGRbc10gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb20gJXMnLFxuICAgIHBhc3Q6ICdmw7ZyICVzIHNlZGFuJyxcbiAgICBzOiAnbsOlZ3JhIHNla3VuZGVyJyxcbiAgICBzczogJyVkIHNla3VuZGVyJyxcbiAgICBtOiAnZW4gbWludXQnLFxuICAgIG1tOiAnJWQgbWludXRlcicsXG4gICAgaDogJ2VuIHRpbW1lJyxcbiAgICBoaDogJyVkIHRpbW1hcicsXG4gICAgZDogJ2VuIGRhZycsXG4gICAgZGQ6ICclZCBkYWdhcicsXG4gICAgTTogJ2VuIG3DpW5hZCcsXG4gICAgTU06ICclZCBtw6VuYWRlcicsXG4gICAgeTogJ2V0dCDDpXInLFxuICAgIHl5OiAnJWQgw6VyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXxhKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgbGV0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ2UnIDpcbiAgICAgICAgKGIgPT09IDEpID8gJ2EnIDpcbiAgICAgICAgICAoYiA9PT0gMikgPyAnYScgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ2UnIDogJ2UnO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19