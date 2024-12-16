/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
export const /** @type {?} */ jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === '午後';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    ordinal(num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2phLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBZ0I7SUFDbkMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxXQUFXLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxRQUFRLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuRCxhQUFhLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUMsV0FBVyxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLFdBQVc7UUFDaEIsR0FBRyxFQUFHLGlCQUFpQjtRQUN2QixJQUFJLEVBQUcsc0JBQXNCO1FBQzdCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtLQUM5QjtJQUNELGFBQWEsRUFBRSxRQUFROzs7OztJQUN2QixJQUFJLENBQUUsS0FBSztRQUNULE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQ3ZCOzs7Ozs7O0lBQ0QsUUFBUSxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsU0FBUztRQUNuQixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUcsVUFBVTs7Ozs7O0lBQ25DLE9BQU8sQ0FBRSxHQUFXLEVBQUUsTUFBYztRQUNsQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSztnQkFDUixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLEtBQUs7UUFDZCxJQUFJLEVBQUcsS0FBSztRQUNaLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxNQUFNO1FBQ1gsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztLQUNYO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSmFwYW5lc2UgW2phXVxuLy8hIGF1dGhvciA6IExJIExvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vYmFyeW9uXG5cbmV4cG9ydCBjb25zdCBqYUxvY2FsZTogTG9jYWxlRGF0YSA9ICB7XG4gIGFiYnI6ICdqYScsXG4gIG1vbnRocyA6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ+aXpeabnOaXpV/mnIjmm5zml6Vf54Gr5puc5pelX+awtOabnOaXpV/mnKjmm5zml6Vf6YeR5puc5pelX+Wcn+abnOaXpScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICfml6Vf5pyIX+eBq1/msLRf5pyoX+mHkV/lnJ8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdZWVlZL01NL0REJyxcbiAgICBMTCA6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgIExMTCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIExMTEwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tIGRkZGQnLFxuICAgIGwgOiAnWVlZWS9NTS9ERCcsXG4gICAgbGwgOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICBsbGwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcbiAgICBsbGxsIDogJ1lZWVnlubRN5pyIROaXpSBISDptbSBkZGRkJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv5Y2I5YmNfOWNiOW+jC9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ+WNiOW+jCc7XG4gIH0sXG4gIG1lcmlkaWVtIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ+WNiOWJjSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn5Y2I5b6MJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW+S7iuaXpV0gTFQnLFxuICAgIG5leHREYXkgOiAnW+aYjuaXpV0gTFQnLFxuICAgIG5leHRXZWVrIDogJ1vmnaXpgLFdZGRkZCBMVCcsXG4gICAgbGFzdERheSA6ICdb5pio5pelXSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW+WJjemAsV1kZGRkIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ95pelLyxcbiAgb3JkaW5hbCAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAn5pelJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclc+W+jCcsXG4gICAgcGFzdCA6ICclc+WJjScsXG4gICAgcyA6ICfmlbDnp5InLFxuICAgIHNzIDogJyVk56eSJyxcbiAgICBtIDogJzHliIYnLFxuICAgIG1tIDogJyVk5YiGJyxcbiAgICBoIDogJzHmmYLplpMnLFxuICAgIGhoIDogJyVk5pmC6ZaTJyxcbiAgICBkIDogJzHml6UnLFxuICAgIGRkIDogJyVk5pelJyxcbiAgICBNIDogJzHjg7bmnIgnLFxuICAgIE1NIDogJyVk44O25pyIJyxcbiAgICB5IDogJzHlubQnLFxuICAgIHl5IDogJyVk5bm0J1xuICB9XG59O1xuIl19