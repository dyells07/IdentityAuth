/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getWeek } from '../units/week';
import { getDayOfWeek } from '../units/day-of-week';
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural(word, num) {
    var /** @type {?} */ forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var /** @type {?} */ format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural(format[key], +num);
}
var /** @type {?} */ monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
export var /** @type {?} */ ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3J1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQVFwRCxnQkFBZ0IsSUFBWSxFQUFFLEdBQVc7SUFDdkMscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3RKOzs7Ozs7O0FBRUQsZ0NBQWdDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVc7SUFDOUUscUJBQUksTUFBTSxHQUE0QjtRQUNwQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ3ZFLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDakUsRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsc0JBQXNC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QUFHLEtBQUssQ0FBQztZQUNyQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNwQjtnQkFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFJ1c3NpYW4gW3J1XVxuLy8hIGF1dGhvciA6IFZpa3Rvcm1pbmF0b3IgOiBodHRwczovL2dpdGh1Yi5jb20vVmlrdG9ybWluYXRvclxuLy8hIEF1dGhvciA6IE1lbmVsaW9uIEVsZW5zw7psZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDog0JrQvtGA0LXQvdCx0LXRgNCzINCc0LDRgNC6IDogaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldHBhaXJcblxuZnVuY3Rpb24gcGx1cmFsKHdvcmQ6IHN0cmluZywgbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgZm9ybXMgPSB3b3JkLnNwbGl0KCdfJyk7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiAobnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApID8gZm9ybXNbMV0gOiBmb3Jtc1syXSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgc3M6IHdpdGhvdXRTdWZmaXggPyAn0YHQtdC60YPQvdC00LBf0YHQtdC60YPQvdC00Ytf0YHQtdC60YPQvdC0JyA6ICfRgdC10LrRg9C90LTRg1/RgdC10LrRg9C90LTRi1/RgdC10LrRg9C90LQnLFxuICAgIG1tOiB3aXRob3V0U3VmZml4ID8gJ9C80LjQvdGD0YLQsF/QvNC40L3Rg9GC0Ytf0LzQuNC90YPRgicgOiAn0LzQuNC90YPRgtGDX9C80LjQvdGD0YLRi1/QvNC40L3Rg9GCJyxcbiAgICBoaDogJ9GH0LDRgV/Rh9Cw0YHQsF/Rh9Cw0YHQvtCyJyxcbiAgICBkZDogJ9C00LXQvdGMX9C00L3Rj1/QtNC90LXQuScsXG4gICAgTU06ICfQvNC10YHRj9GGX9C80LXRgdGP0YbQsF/QvNC10YHRj9GG0LXQsicsXG4gICAgeXk6ICfQs9C+0LRf0LPQvtC00LBf0LvQtdGCJ1xuICB9O1xuICBpZiAoa2V5ID09PSAnbScpIHtcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfQvNC40L3Rg9GC0LAnIDogJ9C80LjQvdGD0YLRgyc7XG4gIH1cbiAgcmV0dXJuIG51bSArICcgJyArIHBsdXJhbChmb3JtYXRba2V5XSwgK251bSk7XG59XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXtGP0L3Qsi9pLCAvXtGE0LXQsi9pLCAvXtC80LDRgC9pLCAvXtCw0L/RgC9pLCAvXtC80LBb0LnRj10vaSwgL17QuNGO0L0vaSwgL17QuNGO0LsvaSwgL17QsNCy0LMvaSwgL17RgdC10L0vaSwgL17QvtC60YIvaSwgL17QvdC+0Y8vaSwgL17QtNC10LovaV07XG5cbi8vIGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL3J1bGVzLzEzOS1wcm9wIDogwqcgMTAzXG4vLyDQodC+0LrRgNCw0YnQtdC90LjRjyDQvNC10YHRj9GG0LXQsjogaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvYnVyby9zZWFyY2gtYW5zd2VyP3M9MjQyNjM3XG4vLyBDTERSIGRhdGE6ICAgICAgICAgIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMjgvc3VtbWFyeS9ydS5odG1sIzE3NTNcbmV4cG9ydCBjb25zdCBydUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3J1JyxcbiAgbW9udGhzOiB7XG4gICAgZm9ybWF0OiAn0Y/QvdCy0LDRgNGPX9GE0LXQstGA0LDQu9GPX9C80LDRgNGC0LBf0LDQv9GA0LXQu9GPX9C80LDRj1/QuNGO0L3Rj1/QuNGO0LvRj1/QsNCy0LPRg9GB0YLQsF/RgdC10L3RgtGP0LHRgNGPX9C+0LrRgtGP0LHRgNGPX9C90L7Rj9Cx0YDRj1/QtNC10LrQsNCx0YDRjycuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAn0Y/QvdCy0LDRgNGMX9GE0LXQstGA0LDQu9GMX9C80LDRgNGCX9Cw0L/RgNC10LvRjF/QvNCw0Llf0LjRjtC90Yxf0LjRjtC70Yxf0LDQstCz0YPRgdGCX9GB0LXQvdGC0Y/QsdGA0Yxf0L7QutGC0Y/QsdGA0Yxf0L3QvtGP0LHRgNGMX9C00LXQutCw0LHRgNGMJy5zcGxpdCgnXycpXG4gIH0sXG4gIG1vbnRoc1Nob3J0OiB7XG4gICAgLy8g0L/QviBDTERSINC40LzQtdC90L3QviBcItC40Y7Quy5cIiDQuCBcItC40Y7QvS5cIiwg0L3QviDQutCw0LrQvtC5INGB0LzRi9GB0Lsg0LzQtdC90Y/RgtGMINCx0YPQutCy0YMg0L3QsCDRgtC+0YfQutGDID9cbiAgICBmb3JtYXQ6ICfRj9C90LIuX9GE0LXQstGALl/QvNCw0YAuX9Cw0L/RgC5f0LzQsNGPX9C40Y7QvdGPX9C40Y7Qu9GPX9Cw0LLQsy5f0YHQtdC90YIuX9C+0LrRgi5f0L3QvtGP0LEuX9C00LXQui4nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ9GP0L3Qsi5f0YTQtdCy0YAuX9C80LDRgNGCX9Cw0L/RgC5f0LzQsNC5X9C40Y7QvdGMX9C40Y7Qu9GMX9Cw0LLQsy5f0YHQtdC90YIuX9C+0LrRgi5f0L3QvtGP0LEuX9C00LXQui4nLnNwbGl0KCdfJylcbiAgfSxcbiAgd2Vla2RheXM6IHtcbiAgICBzdGFuZGFsb25lOiAn0LLQvtGB0LrRgNC10YHQtdC90YzQtV/Qv9C+0L3QtdC00LXQu9GM0L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00LBf0YfQtdGC0LLQtdGA0LNf0L/Rj9GC0L3QuNGG0LBf0YHRg9Cx0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0OiAn0LLQvtGB0LrRgNC10YHQtdC90YzQtV/Qv9C+0L3QtdC00LXQu9GM0L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00YNf0YfQtdGC0LLQtdGA0LNf0L/Rj9GC0L3QuNGG0YNf0YHRg9Cx0LHQvtGC0YMnLnNwbGl0KCdfJyksXG4gICAgaXNGb3JtYXQ6IC9cXFsgP1vQktCyXSA/KD860L/RgNC+0YjQu9GD0Y580YHQu9C10LTRg9GO0YnRg9GOfNGN0YLRgyk/ID9cXF0gP2RkZGQvXG4gIH0sXG4gIHdlZWtkYXlzU2hvcnQ6ICfQstGBX9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ9Cy0YFf0L/QvV/QstGCX9GB0YBf0YfRgl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcblxuICAvLyDQv9C+0LvQvdGL0LUg0L3QsNC30LLQsNC90LjRjyDRgSDQv9Cw0LTQtdC20LDQvNC4LCDQv9C+INGC0YDQuCDQsdGD0LrQstGLLCDQtNC70Y8g0L3QtdC60L7RgtC+0YDRi9GFLCDQv9C+IDQg0LHRg9C60LLRiywg0YHQvtC60YDQsNGJ0LXQvdC40Y8g0YEg0YLQvtGH0LrQvtC5INC4INCx0LXQtyDRgtC+0YfQutC4XG4gIG1vbnRoc1JlZ2V4OiAvXijRj9C90LLQsNGAW9GM0Y9dfNGP0L3QslxcLj980YTQtdCy0YDQsNC7W9GM0Y9dfNGE0LXQstGAP1xcLj980LzQsNGA0YLQsD980LzQsNGAXFwuP3zQsNC/0YDQtdC7W9GM0Y9dfNCw0L/RgFxcLj980LzQsFvQudGPXXzQuNGO0L1b0YzRj1180LjRjtC9XFwuP3zQuNGO0Ltb0YzRj1180LjRjtC7XFwuP3zQsNCy0LPRg9GB0YLQsD980LDQstCzXFwuP3zRgdC10L3RgtGP0LHRgFvRjNGPXXzRgdC10L3Rgj9cXC4/fNC+0LrRgtGP0LHRgFvRjNGPXXzQvtC60YJcXC4/fNC90L7Rj9Cx0YBb0YzRj1180L3QvtGP0LE/XFwuP3zQtNC10LrQsNCx0YBb0YzRj1180LTQtdC6XFwuPykvaSxcblxuICAvLyDQutC+0L/QuNGPINC/0YDQtdC00YvQtNGD0YnQtdCz0L5cbiAgbW9udGhzU2hvcnRSZWdleDogL14o0Y/QvdCy0LDRgFvRjNGPXXzRj9C90LJcXC4/fNGE0LXQstGA0LDQu1vRjNGPXXzRhNC10LLRgD9cXC4/fNC80LDRgNGC0LA/fNC80LDRgFxcLj980LDQv9GA0LXQu1vRjNGPXXzQsNC/0YBcXC4/fNC80LBb0LnRj1180LjRjtC9W9GM0Y9dfNC40Y7QvVxcLj980LjRjtC7W9GM0Y9dfNC40Y7Qu1xcLj980LDQstCz0YPRgdGC0LA/fNCw0LLQs1xcLj980YHQtdC90YLRj9Cx0YBb0YzRj1180YHQtdC90YI/XFwuP3zQvtC60YLRj9Cx0YBb0YzRj1180L7QutGCXFwuP3zQvdC+0Y/QsdGAW9GM0Y9dfNC90L7Rj9CxP1xcLj980LTQtdC60LDQsdGAW9GM0Y9dfNC00LXQulxcLj8pL2ksXG5cbiAgLy8g0L/QvtC70L3Ri9C1INC90LDQt9Cy0LDQvdC40Y8g0YEg0L/QsNC00LXQttCw0LzQuFxuICBtb250aHNTdHJpY3RSZWdleDogL14o0Y/QvdCy0LDRgFvRj9GMXXzRhNC10LLRgNCw0Ltb0Y/RjF180LzQsNGA0YLQsD980LDQv9GA0LXQu1vRj9GMXXzQvNCwW9GP0LldfNC40Y7QvVvRj9GMXXzQuNGO0Ltb0Y/RjF180LDQstCz0YPRgdGC0LA/fNGB0LXQvdGC0Y/QsdGAW9GP0YxdfNC+0LrRgtGP0LHRgFvRj9GMXXzQvdC+0Y/QsdGAW9GP0YxdfNC00LXQutCw0LHRgFvRj9GMXSkvaSxcblxuICAvLyDQktGL0YDQsNC20LXQvdC40LUsINC60L7RgtC+0YDQvtC1INGB0L7QvtGC0LLQtdGB0YLQstGD0LXRgiDRgtC+0LvRjNC60L4g0YHQvtC60YDQsNGJ0ZHQvdC90YvQvCDRhNC+0YDQvNCw0LxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14o0Y/QvdCyXFwufNGE0LXQstGAP1xcLnzQvNCw0YBb0YIuXXzQsNC/0YBcXC580LzQsFvRj9C5XXzQuNGO0L1b0YzRjy5dfNC40Y7Qu1vRjNGPLl180LDQstCzXFwufNGB0LXQvdGCP1xcLnzQvtC60YJcXC580L3QvtGP0LE/XFwufNC00LXQulxcLikvaSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZINCzLicsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkg0LMuLCBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkg0LMuLCBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdb0KHQtdCz0L7QtNC90Y8g0LJdIExUJyxcbiAgICBuZXh0RGF5OiAnW9CX0LDQstGC0YDQsCDQsl0gTFQnLFxuICAgIGxhc3REYXk6ICdb0JLRh9C10YDQsCDQsl0gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xuICAgICAgaWYgKGdldFdlZWsobm93KSAhPT0gZ2V0V2VlayhkYXRlKSkge1xuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAnW9CSINGB0LvQtdC00YPRjtGJ0LXQtV0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnW9CSINGB0LvQtdC00YPRjtGJ0LjQuV0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnW9CSINGB0LvQtdC00YPRjtGJ0YPRjl0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xuICAgICAgICAgIHJldHVybiAnW9CS0L5dIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdb0JJdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xuICAgICAgaWYgKGdldFdlZWsobm93KSAhPT0gZ2V0V2VlayhkYXRlKSkge1xuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAnW9CSINC/0YDQvtGI0LvQvtC1XSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdb0JIg0L/RgNC+0YjQu9GL0LldIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDQv9GA0L7RiNC70YPRjl0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xuICAgICAgICAgIHJldHVybiAnW9CS0L5dIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdb0JJdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn0YfQtdGA0LXQtyAlcycsXG4gICAgcGFzdDogJyVzINC90LDQt9Cw0LQnLFxuICAgIHM6ICfQvdC10YHQutC+0LvRjNC60L4g0YHQtdC60YPQvdC0JyxcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGg6ICfRh9Cw0YEnLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICfQtNC10L3RjCcsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ9C80LXRgdGP0YYnLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIHk6ICfQs9C+0LQnLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/QvdC+0YfQuHzRg9GC0YDQsHzQtNC90Y980LLQtdGH0LXRgNCwL2ksXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14o0LTQvdGPfNCy0LXRh9C10YDQsCkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICByZXR1cm4gJ9C90L7Rh9C4JztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfRg9GC0YDQsCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgIHJldHVybiAn0LTQvdGPJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfQstC10YfQtdGA0LAnO1xuICAgIH1cbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQuXzQs9C+fNGPKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICct0LknO1xuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLdCz0L4nO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICct0Y8nO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==