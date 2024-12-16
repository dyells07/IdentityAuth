/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
let /** @type {?} */ symbolMap = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
}, /** @type {?} */
numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
export const /** @type {?} */ hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBLHFCQUFJLFNBQVMsR0FBNEI7SUFDckMsQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7Q0FDUDtBQUNELFNBQVMsR0FBNEI7SUFDbkMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVCxDQUFDO0FBRUosTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSw2RUFBNkUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hHLFdBQVcsRUFBRSw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0QsV0FBVyxFQUFFLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsR0FBRyxFQUFFLGVBQWU7UUFDcEIsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLElBQUksRUFBRSwrQkFBK0I7S0FDdEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsU0FBUztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxhQUFhO1FBQ2hCLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7S0FDZDs7Ozs7SUFDRCxRQUFRLENBQUMsR0FBVztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLO1lBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBQ0QsVUFBVSxDQUFDLEdBQVc7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSztZQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNKOzs7SUFHRCxhQUFhLEVBQUUsb0JBQW9COzs7Ozs7SUFDbkMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDcEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7S0FDRjs7Ozs7OztJQUNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEhpbmRpIFtoaV1cbi8vISBhdXRob3IgOiBNYXlhbmsgU2luZ2hhbCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXlhbmtzaW5naGFsXG5cbmxldCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIDE6ICfgpacnLFxuICAgIDI6ICfgpagnLFxuICAgIDM6ICfgpaknLFxuICAgIDQ6ICfgpaonLFxuICAgIDU6ICfgpasnLFxuICAgIDY6ICfgpawnLFxuICAgIDc6ICfgpa0nLFxuICAgIDg6ICfgpa4nLFxuICAgIDk6ICfgpa8nLFxuICAgIDA6ICfgpaYnXG4gIH0sXG4gIG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgJ+Clpyc6ICcxJyxcbiAgICAn4KWoJzogJzInLFxuICAgICfgpaknOiAnMycsXG4gICAgJ+Clqic6ICc0JyxcbiAgICAn4KWrJzogJzUnLFxuICAgICfgpawnOiAnNicsXG4gICAgJ+ClrSc6ICc3JyxcbiAgICAn4KWuJzogJzgnLFxuICAgICfgpa8nOiAnOScsXG4gICAgJ+Clpic6ICcwJ1xuICB9O1xuXG5leHBvcnQgY29uc3QgaGlMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdoaScsXG4gIG1vbnRoczogJ+CknOCkqOCkteCksOClgF/gpKvgpLzgpLDgpLXgpLDgpYBf4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCliOCksl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksuCkvuCkiF/gpIXgpJfgpLjgpY3gpKRf4KS44KS/4KSk4KSu4KWN4KSs4KSwX+CkheCkleCljeCkn+ClguCkrOCksF/gpKjgpLXgpK7gpY3gpKzgpLBf4KSm4KS/4KS44KSu4KWN4KSs4KSwJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ+CknOCkqC5f4KSr4KS84KSwLl/gpK7gpL7gpLDgpY3gpJpf4KSF4KSq4KWN4KSw4KWILl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksi5f4KSF4KSXLl/gpLjgpL/gpKQuX+CkheCkleCljeCkn+Clgi5f4KSo4KS1Ll/gpKbgpL/gpLguJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ+CksOCkteCkv+CkteCkvuCksF/gpLjgpYvgpK7gpLXgpL7gpLBf4KSu4KSC4KSX4KSy4KS14KS+4KSwX+CkrOClgeCkp+CkteCkvuCksF/gpJfgpYHgpLDgpYLgpLXgpL7gpLBf4KS24KWB4KSV4KWN4KSw4KS14KS+4KSwX+CktuCkqOCkv+CkteCkvuCksCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ+CksOCkteCkv1/gpLjgpYvgpK5f4KSu4KSC4KSX4KSyX+CkrOClgeCkp1/gpJfgpYHgpLDgpYJf4KS24KWB4KSV4KWN4KSwX+CktuCkqOCkvycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfgpLBf4KS44KWLX+CkruCkgl/gpKzgpYFf4KSX4KWBX+CktuClgV/gpLYnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdBIGg6bW0g4KSs4KSc4KWHJyxcbiAgICBMVFM6ICdBIGg6bW06c3Mg4KSs4KSc4KWHJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVksIEEgaDptbSDgpKzgpJzgpYcnLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tIOCkrOCknOClhydcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW+CkhuCknF0gTFQnLFxuICAgIG5leHREYXk6ICdb4KSV4KSyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkLCBMVCcsXG4gICAgbGFzdERheTogJ1vgpJXgpLJdIExUJyxcbiAgICBsYXN0V2VlazogJ1vgpKrgpL/gpJvgpLLgpYddIGRkZGQsIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIOCkruClh+CkgicsXG4gICAgcGFzdDogJyVzIOCkquCkueCksuClhycsXG4gICAgczogJ+CkleClgeCkmyDgpLngpYAg4KSV4KWN4KS34KSjJyxcbiAgICBzczogJyVkIOCkuOClh+CkleCkguCkoScsXG4gICAgbTogJ+Ckj+CklSDgpK7gpL/gpKjgpJ8nLFxuICAgIG1tOiAnJWQg4KSu4KS/4KSo4KSfJyxcbiAgICBoOiAn4KSP4KSVIOCkmOCkguCkn+CkvicsXG4gICAgaGg6ICclZCDgpJjgpILgpJ/gpYcnLFxuICAgIGQ6ICfgpI/gpJUg4KSm4KS/4KSoJyxcbiAgICBkZDogJyVkIOCkpuCkv+CkqCcsXG4gICAgTTogJ+Ckj+CklSDgpK7gpLngpYDgpKjgpYcnLFxuICAgIE1NOiAnJWQg4KSu4KS54KWA4KSo4KWHJyxcbiAgICB5OiAn4KSP4KSVIOCkteCksOCljeCktycsXG4gICAgeXk6ICclZCDgpLXgpLDgpY3gpLcnXG4gIH0sXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vgpafgpajgpangpargpavgpazgpa3gpa7gpa/gpaZdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgfSk7XG4gIH0sXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgfSk7XG4gIH0sXG4gIC8vIEhpbmRpIG5vdGF0aW9uIGZvciBtZXJpZGllbXMgYXJlIHF1aXRlIGZ1enp5IGluIHByYWN0aWNlLiBXaGlsZSB0aGVyZSBleGlzdHNcbiAgLy8gYSByaWdpZCBub3Rpb24gb2YgYSAnUGFoYXInIGl0IGlzIG5vdCB1c2VkIGFzIHJpZ2lkbHkgaW4gbW9kZXJuIEhpbmRpLlxuICBtZXJpZGllbVBhcnNlOiAv4KSw4KS+4KSkfOCkuOClgeCkrOCkuXzgpKbgpYvgpKrgpLngpLB84KS24KS+4KSuLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAn4KSw4KS+4KSkJykge1xuICAgICAgcmV0dXJuIGhvdXIgPCA0ID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4KS44KWB4KSs4KS5Jykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CkpuCli+CkquCkueCksCcpIHtcbiAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4KS24KS+4KSuJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgcmV0dXJuICfgpLDgpL7gpKQnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICByZXR1cm4gJ+CkuOClgeCkrOCkuSc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgIHJldHVybiAn4KSm4KWL4KSq4KS54KSwJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xuICAgICAgcmV0dXJuICfgpLbgpL7gpK4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ+CksOCkvuCkpCc7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==