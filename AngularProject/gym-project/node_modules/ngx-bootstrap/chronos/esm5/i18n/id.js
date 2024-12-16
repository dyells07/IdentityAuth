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
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
export var /** @type {?} */ idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdGQUF3RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUcsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsUUFBUSxFQUFHLDRDQUE0QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEUsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0MsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLE9BQU87UUFDWixHQUFHLEVBQUcsVUFBVTtRQUNoQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsYUFBYTtRQUNsQixHQUFHLEVBQUcsMkJBQTJCO1FBQ2pDLElBQUksRUFBRyxpQ0FBaUM7S0FDekM7SUFDRCxhQUFhLEVBQUUsdUJBQXVCO0lBQ3RDLFlBQVk7Ozs7O2NBQUMsSUFBSSxFQUFFLFFBQVE7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtLQUNGO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcscUJBQXFCO1FBQy9CLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGlCQUFpQjtRQUM1QixPQUFPLEVBQUcsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRyxzQkFBc0I7UUFDakMsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxVQUFVO1FBQ25CLElBQUksRUFBRyxjQUFjO1FBQ3JCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLE9BQU87UUFDWCxFQUFFLEVBQUcsUUFBUTtRQUNiLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtLQUNoQjtJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEluZG9uZXNpYSBbaWRdXG4vLyEgYXV0aG9yIDogUm9teSBLdXN1bWEgOiBodHRwczovL2dpdGh1Yi5jb20vcmt1c3VtYVxuLy8hIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9pZC5qc1xuXG5leHBvcnQgY29uc3QgaWRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdpZCcsXG4gIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hcmV0X0FwcmlsX01laV9KdW5pX0p1bGlfQWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01laV9KdW5fSnVsX0Fnc19TZXBfT2t0X05vdl9EZXMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ01pbmdndV9TZW5pbl9TZWxhc2FfUmFidV9LYW1pc19KdW1hdF9TYWJ0dScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdNaW5fU2VuX1NlbF9SYWJfS2FtX0p1bV9TYWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ01nX1NuX1NsX1JiX0ttX0ptX1NiJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISC5tbScsXG4gICAgTFRTIDogJ0hILm1tLnNzJyxcbiAgICBMIDogJ0REL01NL1lZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbScsXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvcGFnaXxzaWFuZ3xzb3JlfG1hbGFtLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzaWFuZycpIHtcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc29yZScgfHwgbWVyaWRpZW0gPT09ICdtYWxhbScpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICByZXR1cm4gJ3BhZ2knO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgcmV0dXJuICdzaWFuZyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA8IDE5KSB7XG4gICAgICByZXR1cm4gJ3NvcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21hbGFtJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW0hhcmkgaW5pIHB1a3VsXSBMVCcsXG4gICAgbmV4dERheSA6ICdbQmVzb2sgcHVrdWxdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFtwdWt1bF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW0tlbWFyaW4gcHVrdWxdIExUJyxcbiAgICBsYXN0V2VlayA6ICdkZGRkIFtsYWx1IHB1a3VsXSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdkYWxhbSAlcycsXG4gICAgcGFzdCA6ICclcyB5YW5nIGxhbHUnLFxuICAgIHMgOiAnYmViZXJhcGEgZGV0aWsnLFxuICAgIHNzIDogJyVkIGRldGlrJyxcbiAgICBtIDogJ3NlbWVuaXQnLFxuICAgIG1tIDogJyVkIG1lbml0JyxcbiAgICBoIDogJ3NlamFtJyxcbiAgICBoaCA6ICclZCBqYW0nLFxuICAgIGQgOiAnc2VoYXJpJyxcbiAgICBkZCA6ICclZCBoYXJpJyxcbiAgICBNIDogJ3NlYnVsYW4nLFxuICAgIE1NIDogJyVkIGJ1bGFuJyxcbiAgICB5IDogJ3NldGFodW4nLFxuICAgIHl5IDogJyVkIHRhaHVuJ1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIl19