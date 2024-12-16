/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
export var /** @type {?} */ deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
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
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSw2QkFBNkIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQzlGLHFCQUFNLE1BQU0sR0FBd0M7UUFDbEQsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUNwQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQ3BDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDO0tBQ3hDLENBQUM7SUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RDtBQUVELE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsb0ZBQW9GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RyxXQUFXLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QixJQUFJLEVBQUUsMEJBQTBCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7S0FDeEI7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiBbZGVdXG4vLyEgYXV0aG9yIDogbGx1Y2hzIDogaHR0cHM6Ly9naXRodWIuY29tL2xsdWNoc1xuLy8hIGF1dGhvcjogTWVuZWxpb24gRWxlbnPDumxlOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuLy8hIGF1dGhvciA6IE1pa29sYWogRGFkZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL21pazAxYWpcblxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZ10gfSA9IHtcbiAgICAnbSc6IFsnZWluZSBNaW51dGUnLCAnZWluZXIgTWludXRlJ10sXG4gICAgJ2gnOiBbJ2VpbmUgU3R1bmRlJywgJ2VpbmVyIFN0dW5kZSddLFxuICAgICdkJzogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICAgICdkZCc6IFtudW0gKyAnIFRhZ2UnLCBudW0gKyAnIFRhZ2VuJ10sXG4gICAgJ00nOiBbJ2VpbiBNb25hdCcsICdlaW5lbSBNb25hdCddLFxuICAgICdNTSc6IFtudW0gKyAnIE1vbmF0ZScsIG51bSArICcgTW9uYXRlbiddLFxuICAgICd5JzogWydlaW4gSmFocicsICdlaW5lbSBKYWhyJ10sXG4gICAgJ3l5JzogW251bSArICcgSmFocmUnLCBudW0gKyAnIEphaHJlbiddXG4gIH07XG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZGUnLFxuICBtb250aHM6ICdKYW51YXJfRmVicnVhcl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdKYW4uX0ZlYi5fTcOkcnpfQXByLl9NYWlfSnVuaV9KdWxpX0F1Zy5fU2VwLl9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1NvLl9Nby5fRGkuX01pLl9Eby5fRnIuX1NhLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2hldXRlIHVtXSBMVCBbVWhyXScsXG4gICAgc2FtZUVsc2U6ICdMJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0RGF5OiAnW2dlc3Rlcm4gdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAndm9yICVzJyxcbiAgICBzOiAnZWluIHBhYXIgU2VrdW5kZW4nLFxuICAgIHNzOiAnJWQgU2VrdW5kZW4nLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06ICclZCBNaW51dGVuJyxcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGhoOiAnJWQgU3R1bmRlbicsXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19