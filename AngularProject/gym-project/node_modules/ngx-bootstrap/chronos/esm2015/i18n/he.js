/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
export const /** @type {?} */ heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        /**
         * @param {?} num
         * @return {?}
         */
        hh(num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        /**
         * @param {?} num
         * @return {?}
         */
        dd(num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        /**
         * @param {?} num
         * @return {?}
         */
        MM(num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        /**
         * @param {?} num
         * @return {?}
         */
        yy(num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLHlFQUF5RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUYsV0FBVyxFQUFFLDJEQUEyRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkYsUUFBUSxFQUFFLHNDQUFzQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0QsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7Ozs7O1FBQ1IsRUFBRSxDQUFDLEdBQVc7WUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pCO1lBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxDQUFDLEVBQUUsS0FBSzs7Ozs7UUFDUixFQUFFLENBQUMsR0FBVztZQUNaLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDakI7WUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUNELENBQUMsRUFBRSxNQUFNOzs7OztRQUNULEVBQUUsQ0FBQyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO1FBQ0QsQ0FBQyxFQUFFLEtBQUs7Ozs7O1FBQ1IsRUFBRSxDQUFDLEdBQVc7WUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pCO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxhQUFhLEVBQUUsK0RBQStEOzs7OztJQUM5RSxJQUFJLENBQUMsS0FBSztRQUNSLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7SUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2hCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzNDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEhlYnJldyBbaGVdXG4vLyEgYXV0aG9yIDogVG9tZXIgQ29oZW4gOiBodHRwczovL2dpdGh1Yi5jb20vdG9tZXJcbi8vISBhdXRob3IgOiBNb3NoZSBTaW1hbnRvdiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbG9wbWVudElMXG4vLyEgYXV0aG9yIDogVGFsIEF0ZXIgOiBodHRwczovL2dpdGh1Yi5jb20vVGFsQXRlclxuXG5leHBvcnQgY29uc3QgaGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdoZScsXG4gIG1vbnRoczogJ9eZ16DXldeQ16hf16TXkdeo15XXkNeoX9ee16jXpV/XkNek16jXmdecX9ee15DXmV/XmdeV16DXmV/XmdeV15zXmV/XkNeV15LXldeh15hf16HXpNeY157XkdeoX9eQ15XXp9eY15XXkdeoX9eg15XXkdee15HXqF/Xk9em157XkdeoJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ9eZ16DXldezX9ek15HXqNezX9ee16jXpV/XkNek16jXs1/XnteQ15lf15nXldeg15lf15nXldec15lf15DXldeS17Nf16HXpNeY17Nf15DXlden17Nf16DXldeR17Nf15PXptee17MnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAn16jXkNep15XXn1/Xqdeg15lf16nXnNeZ16nXmV/XqNeR15nXoteZX9eX157Xmdep15lf16nXmdep15lf16nXkdeqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn15DXs1/XkdezX9eS17Nf15PXs1/XlNezX9eV17Nf16nXsycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfXkF/XkV/Xkl/Xk1/XlF/XlV/XqScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBb15FdTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIFvXkV1NTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFvXkV1NTU1NIFlZWVkgSEg6bW0nLFxuICAgIGw6ICdEL00vWVlZWScsXG4gICAgbGw6ICdEIE1NTSBZWVlZJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkLCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdb15TXmdeV150g15HWvl1MVCcsXG4gICAgbmV4dERheTogJ1vXnteX16gg15HWvl1MVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvXkdep16LXlF0gTFQnLFxuICAgIGxhc3REYXk6ICdb15DXqtee15XXnCDXkda+XUxUJyxcbiAgICBsYXN0V2VlazogJ1vXkdeZ15XXnV0gZGRkZCBb15TXkNeX16jXldefINeR16nXoteUXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfXkdei15XXkyAlcycsXG4gICAgcGFzdDogJ9ec16TXoNeZICVzJyxcbiAgICBzOiAn157Xodek16gg16nXoNeZ15XXqicsXG4gICAgc3M6ICclZCDXqdeg15nXldeqJyxcbiAgICBtOiAn15PXp9eUJyxcbiAgICBtbTogJyVkINeT16fXldeqJyxcbiAgICBoOiAn16nXoteUJyxcbiAgICBoaChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAn16nXoteq15nXmdedJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnINep16LXldeqJztcbiAgICB9LFxuICAgIGQ6ICfXmdeV150nLFxuICAgIGRkKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfXmdeV157XmdeZ150nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcg15nXnteZ150nO1xuICAgIH0sXG4gICAgTTogJ9eX15XXk9epJyxcbiAgICBNTShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAn15fXldeT16nXmdeZ150nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcg15fXldeT16nXmdedJztcbiAgICB9LFxuICAgIHk6ICfXqdeg15QnLFxuICAgIHl5KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfXqdeg16rXmdeZ150nO1xuICAgICAgfSBlbHNlIGlmIChudW0gJSAxMCA9PT0gMCAmJiBudW0gIT09IDEwKSB7XG4gICAgICAgIHJldHVybiBudW0gKyAnINep16DXlCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDXqdeg15nXnSc7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv15DXl9eUXCLXpnzXnNek16DXlFwi16Z815DXl9eo15kg15TXpteU16jXmdeZ151815zXpNeg15kg15TXpteU16jXmdeZ151815zXpNeg15XXqiDXkdeV16fXqHzXkdeR15XXp9eofNeR16LXqNeRL2ksXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14o15DXl9eUXCLXpnzXkNeX16jXmSDXlNem15TXqNeZ15nXnXzXkdei16jXkSkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA1KSB7XG4gICAgICByZXR1cm4gJ9ec16TXoNeV16og15HXlden16gnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICByZXR1cm4gJ9eR15HXlden16gnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfXnNek16DXlFwi16YnIDogJ9ec16TXoNeZINeU16bXlNeo15nXmdedJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxOCkge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAn15DXl9eUXCLXpicgOiAn15DXl9eo15kg15TXpteU16jXmdeZ150nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9eR16LXqNeRJztcbiAgICB9XG4gIH1cbn07XG4iXX0=