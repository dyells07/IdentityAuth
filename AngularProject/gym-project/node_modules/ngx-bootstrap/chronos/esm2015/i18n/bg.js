/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
export const /** @type {?} */ bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: function (d) {
            switch (d) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (_num) {
        const /** @type {?} */ number = Number(_num);
        let /** @type {?} */ lastDigit = number % 10, /** @type {?} */
        last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEcsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLHdEQUF3RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0UsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLFVBQVUsQ0FBTTtZQUV4QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixNQUFNLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixNQUFNLENBQUMsMkJBQTJCLENBQUM7YUFDdEM7U0FDRjtRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsVUFBVTtRQUNoQixDQUFDLEVBQUUsaUJBQWlCO1FBQ3BCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxPQUFPO1FBQ1YsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO0tBQ2hCO0lBQ0Qsc0JBQXNCLEVBQUUsNkJBQTZCO0lBQ3JELE9BQU8sRUFBRSxVQUFVLElBQVk7UUFFN0IsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixxQkFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLEVBQUU7UUFDekIsV0FBVyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IEtocm9ub3MgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEJ1bGdhcmlhbiBbYmddXG4vLyEgYXV0aG9yIDogSXNrcmVuIEl2b3YgQ2hlcm5ldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2hlcm5ldlxuLy8hIGF1dGhvciA6IEt1bmFsIE1hcndhaGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWFyd2FoYWhhXG4vLyEgYXV0aG9yIDogTWF0dCBHcmFuZGUgOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGdyYW5kZVxuLy8hIGF1dGhvciA6IElzYWFjIENhbWJyb24gOiBodHRwczovL2dpdGh1Yi5jb20vaWNhbWJyb25cbi8vISBhdXRob3IgOiBWZW5lbGluIE1hbmNoZXYgOiBodHRwczovL2dpdGh1Yi5jb20vdm1hbmNoZXZcblxuZXhwb3J0IGNvbnN0IGJnTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnYmcnLFxuICBtb250aHM6ICfRj9C90YPQsNGA0Lhf0YTQtdCy0YDRg9Cw0YDQuF/QvNCw0YDRgl/QsNC/0YDQuNC7X9C80LDQuV/RjtC90Lhf0Y7Qu9C4X9Cw0LLQs9GD0YHRgl/RgdC10L/RgtC10LzQstGA0Lhf0L7QutGC0L7QvNCy0YDQuF/QvdC+0LXQvNCy0YDQuF/QtNC10LrQtdC80LLRgNC4Jy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ9GP0L3RgF/RhNC10LJf0LzQsNGAX9Cw0L/RgF/QvNCw0Llf0Y7QvdC4X9GO0LvQuF/QsNCy0LNf0YHQtdC/X9C+0LrRgl/QvdC+0LVf0LTQtdC6Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ9C90LXQtNC10LvRj1/Qv9C+0L3QtdC00LXQu9C90LjQul/QstGC0L7RgNC90LjQul/RgdGA0Y/QtNCwX9GH0LXRgtCy0YrRgNGC0YrQul/Qv9C10YLRitC6X9GB0YrQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ9C90LXQtF/Qv9C+0L1f0LLRgtC+X9GB0YDRj1/Rh9C10YJf0L/QtdGCX9GB0YrQsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfQvdC0X9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0QuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vQlNC90LXRgSDQsl0gTFQnLFxuICAgIG5leHREYXk6ICdb0KPRgtGA0LUg0LJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW9CyXSBMVCcsXG4gICAgbGFzdERheTogJ1vQktGH0LXRgNCwINCyXSBMVCcsXG4gICAgbGFzdFdlZWs6IGZ1bmN0aW9uIChkOiBhbnkpIHtcblxuICAgICAgc3dpdGNoIChkKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdb0JIg0LjQt9C80LjQvdCw0LvQsNGC0LBdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1vQkiDQuNC30LzQuNC90LDQu9C40Y9dIGRkZGQgW9CyXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9GB0LvQtdC0ICVzJyxcbiAgICBwYXN0OiAn0L/RgNC10LTQuCAlcycsXG4gICAgczogJ9C90Y/QutC+0LvQutC+INGB0LXQutGD0L3QtNC4JyxcbiAgICBzczogJyVkINGB0LXQutGD0L3QtNC4JyxcbiAgICBtOiAn0LzQuNC90YPRgtCwJyxcbiAgICBtbTogJyVkINC80LjQvdGD0YLQuCcsXG4gICAgaDogJ9GH0LDRgScsXG4gICAgaGg6ICclZCDRh9Cw0YHQsCcsXG4gICAgZDogJ9C00LXQvScsXG4gICAgZGQ6ICclZCDQtNC90LgnLFxuICAgIE06ICfQvNC10YHQtdGGJyxcbiAgICBNTTogJyVkINC80LXRgdC10YbQsCcsXG4gICAgeTogJ9Cz0L7QtNC40L3QsCcsXG4gICAgeXk6ICclZCDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0o0LXQsnzQtdC9fNGC0Lh80LLQuHzRgNC4fNC80LgpLyxcbiAgb3JkaW5hbDogZnVuY3Rpb24gKF9udW06IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoX251bSk7XG5cbiAgICBsZXQgbGFzdERpZ2l0ID0gbnVtYmVyICUgMTAsXG4gICAgICBsYXN0MkRpZ2l0cyA9IG51bWJlciAlIDEwMDtcblxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdC10LInO1xuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPT09IDApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdC10L0nO1xuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0LLQuCc7XG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDIpIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdGA0LgnO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0LzQuCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdGC0LgnO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=