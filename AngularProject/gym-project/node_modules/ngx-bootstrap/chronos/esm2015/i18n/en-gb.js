/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
export const /** @type {?} */ enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        const /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4tZ2IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2VuLWdiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHVCQUFNLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRyx1RkFBdUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNHLFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRywwREFBMEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hGLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGFBQWE7UUFDbEIsR0FBRyxFQUFHLG1CQUFtQjtRQUN6QixJQUFJLEVBQUcseUJBQXlCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFHLGVBQWU7UUFDekIsT0FBTyxFQUFHLGtCQUFrQjtRQUM1QixRQUFRLEVBQUcsY0FBYztRQUN6QixPQUFPLEVBQUcsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRyxxQkFBcUI7UUFDaEMsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxRQUFRO1FBQ2YsQ0FBQyxFQUFHLGVBQWU7UUFDbkIsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFVBQVU7UUFDZCxFQUFFLEVBQUcsWUFBWTtRQUNqQixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLE9BQU87UUFDWCxFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFdBQVc7UUFDaEIsQ0FBQyxFQUFHLFFBQVE7UUFDWixFQUFFLEVBQUcsVUFBVTtLQUNoQjtJQUNELHNCQUFzQixFQUFFLHNCQUFzQjs7Ozs7SUFDOUMsT0FBTyxDQUFDLElBQVk7UUFDbEIsdUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6Qix1QkFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDaEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNyQjtJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSkgW2VuLWdiXVxuLy8hIGF1dGhvciA6IENocmlzIEdlZHJpbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2dlZHJpbVxuXG5leHBvcnQgY29uc3QgZW5HYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VuLWdiJyxcbiAgbW9udGhzIDogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ0REL01NL1lZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgIHBhc3QgOiAnJXMgYWdvJyxcbiAgICBzIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgIHNzIDogJyVkIHNlY29uZHMnLFxuICAgIG0gOiAnYSBtaW51dGUnLFxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgIGggOiAnYW4gaG91cicsXG4gICAgaGggOiAnJWQgaG91cnMnLFxuICAgIGQgOiAnYSBkYXknLFxuICAgIGRkIDogJyVkIGRheXMnLFxuICAgIE0gOiAnYSBtb250aCcsXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcbiAgICB5IDogJ2EgeWVhcicsXG4gICAgeXkgOiAnJWQgeWVhcnMnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdHxuZHxyZHx0aCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGNvbnN0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiJdfQ==