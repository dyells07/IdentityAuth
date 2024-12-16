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
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
export var /** @type {?} */ zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        var /** @type {?} */ hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemgtY24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3poLWNuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMscUJBQU0sVUFBVSxHQUFlO0lBQ3BDLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLHVDQUF1QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUQsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEUsUUFBUSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEQsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxXQUFXO1FBQ2YsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFdBQVc7UUFDZixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLElBQUksRUFBRSxxQkFBcUI7S0FDNUI7SUFDRCxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLFlBQVk7Ozs7O2NBQUMsSUFBSSxFQUFFLFFBQVE7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSTtZQUN4QyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFN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Y2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoQ2hpbmEpIFt6aC1jbl1cbi8vISBhdXRob3IgOiBzdXVwaWMgOiBodHRwczovL2dpdGh1Yi5jb20vc3V1cGljXG4vLyEgYXV0aG9yIDogWmVubyBaZW5nIDogaHR0cHM6Ly9naXRodWIuY29tL3plbm96ZW5nXG5cbmV4cG9ydCBjb25zdCB6aENuTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnemgtY24nLFxuICBtb250aHM6ICfkuIDmnIhf5LqM5pyIX+S4ieaciF/lm5vmnIhf5LqU5pyIX+WFreaciF/kuIPmnIhf5YWr5pyIX+S5neaciF/ljYHmnIhf5Y2B5LiA5pyIX+WNgeS6jOaciCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfmmJ/mnJ/ml6Vf5pif5pyf5LiAX+aYn+acn+S6jF/mmJ/mnJ/kuIlf5pif5pyf5ZubX+aYn+acn+S6lF/mmJ/mnJ/lha0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICflkajml6Vf5ZGo5LiAX+WRqOS6jF/lkajkuIlf5ZGo5ZubX+WRqOS6lF/lkajlha0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn5pelX+S4gF/kuoxf5LiJX+Wbm1/kupRf5YWtJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS9NTS9ERCcsXG4gICAgTEw6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgIExMTDogJ1lZWVnlubRN5pyIROaXpUFo54K5bW3liIYnLFxuICAgIExMTEw6ICdZWVlZ5bm0TeaciETml6VkZGRkQWjngrltbeWIhicsXG4gICAgbDogJ1lZWVkvTS9EJyxcbiAgICBsbDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgbGxsOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcbiAgICBsbGxsOiAnWVlZWeW5tE3mnIhE5pelZGRkZCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL+WHjOaZqHzml6nkuIp85LiK5Y2IfOS4reWNiHzkuIvljYh85pma5LiKLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAn5YeM5pmoJyB8fCBtZXJpZGllbSA9PT0gJ+aXqeS4iicgfHxcbiAgICAgIG1lcmlkaWVtID09PSAn5LiK5Y2IJykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+S4i+WNiCcgfHwgbWVyaWRpZW0gPT09ICfmmZrkuIonKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAn5Lit5Y2IJ1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgbGV0IGhtID0gaG91ciAqIDEwMCArIG1pbnV0ZTtcbiAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgIHJldHVybiAn5YeM5pmoJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XG4gICAgICByZXR1cm4gJ+aXqeS4iic7XG4gICAgfSBlbHNlIGlmIChobSA8IDExMzApIHtcbiAgICAgIHJldHVybiAn5LiK5Y2IJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTIzMCkge1xuICAgICAgcmV0dXJuICfkuK3ljYgnO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XG4gICAgICByZXR1cm4gJ+S4i+WNiCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn5pma5LiKJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vku4rlpKldTFQnLFxuICAgIG5leHREYXk6ICdb5piO5aSpXUxUJyxcbiAgICBuZXh0V2VlazogJ1vkuItdZGRkZExUJyxcbiAgICBsYXN0RGF5OiAnW+aYqOWkqV1MVCcsXG4gICAgbGFzdFdlZWs6ICdb5LiKXWRkZGRMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0o5pelfOaciHzlkagpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZCkge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAn5pelJztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICByZXR1cm4gbnVtICsgJ+aciCc7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ+WRqCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclc+WGhScsXG4gICAgcGFzdDogJyVz5YmNJyxcbiAgICBzOiAn5Yeg56eSJyxcbiAgICBzczogJyVkIOenkicsXG4gICAgbTogJzEg5YiG6ZKfJyxcbiAgICBtbTogJyVkIOWIhumSnycsXG4gICAgaDogJzEg5bCP5pe2JyxcbiAgICBoaDogJyVkIOWwj+aXticsXG4gICAgZDogJzEg5aSpJyxcbiAgICBkZDogJyVkIOWkqScsXG4gICAgTTogJzEg5Liq5pyIJyxcbiAgICBNTTogJyVkIOS4quaciCcsXG4gICAgeTogJzEg5bm0JyxcbiAgICB5eTogJyVkIOW5tCdcbiAgfSxcbiAgd2Vlazoge1xuICAgIC8vIEdCL1QgNzQwOC0xOTk044CK5pWw5o2u5YWD5ZKM5Lqk5o2i5qC85byPwrfkv6Hmga/kuqTmjaLCt+aXpeacn+WSjOaXtumXtOihqOekuuazleOAi+S4jklTTyA4NjAxOjE5ODjnrYnmlYhcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19