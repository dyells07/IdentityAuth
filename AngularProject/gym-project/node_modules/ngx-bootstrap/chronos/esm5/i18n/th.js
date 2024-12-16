/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
export var /** @type {?} */ thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGdEQUFnRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckUsYUFBYSxFQUFFLDZDQUE2QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQ3ZFLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE1BQU0sQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDO0tBQy9CO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsV0FBVztRQUNqQixDQUFDLEVBQUUsY0FBYztRQUNqQixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxPQUFPO1FBQ1YsRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsT0FBTztLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBsb2NhbGUgOiBUaGFpIFt0aF1cbi8vIGF1dGhvciA6IFdhdGNoYXJhcG9sIFNhbml0d29uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS90dW1pdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCB0aExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RoJyxcbiAgbW9udGhzOiAn4Lih4LiB4Lij4Liy4LiE4LihX+C4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jF/guKHguLXguJnguLLguITguKFf4LmA4Lih4Lip4Liy4Lii4LiZX+C4nuC4pOC4qeC4oOC4suC4hOC4oV/guKHguLTguJbguLjguJnguLLguKLguJlf4LiB4Lij4LiB4LiO4Liy4LiE4LihX+C4quC4tOC4h+C4q+C4suC4hOC4oV/guIHguLHguJnguKLguLLguKLguJlf4LiV4Li44Lil4Liy4LiE4LihX+C4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mV/guJjguLHguJnguKfguLLguITguKEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAn4LihLuC4hC5f4LiBLuC4ni5f4Lih4Li1LuC4hC5f4LmA4LihLuC4oi5f4LieLuC4hC5f4Lih4Li0LuC4oi5f4LiBLuC4hC5f4LiqLuC4hC5f4LiBLuC4oi5f4LiVLuC4hC5f4LieLuC4oi5f4LiYLuC4hC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAn4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4quC4muC4lOC4tV/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4ql/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMJy5zcGxpdCgnXycpLCAvLyB5ZXMsIHRocmVlIGNoYXJhY3RlcnMgZGlmZmVyZW5jZVxuICB3ZWVrZGF5c01pbjogJ+C4reC4si5f4LiILl/guK0uX+C4ni5f4Lie4LikLl/guKguX+C4qi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDguYDguKfguKXguLIgSDptbScsXG4gICAgTExMTDogJ+C4p+C4seC4mWRkZGTguJfguLXguYggRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/guIHguYjguK3guJnguYDguJfguLXguYjguKLguId84Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHLyxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ+C4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hyc7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW+C4p+C4seC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBuZXh0RGF5OiAnW+C4nuC4o+C4uOC5iOC4h+C4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGRb4Lir4LiZ4LmJ4LiyIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIGxhc3REYXk6ICdb4LmA4Lih4Li34LmI4Lit4Lin4Liy4LiZ4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW+C4p+C4seC4mV1kZGRkW+C4l+C4teC5iOC5geC4peC5ieC4pyDguYDguKfguKXguLJdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ+C4reC4teC4gSAlcycsXG4gICAgcGFzdDogJyVz4LiX4Li14LmI4LmB4Lil4LmJ4LinJyxcbiAgICBzOiAn4LmE4Lih4LmI4LiB4Li14LmI4Lin4Li04LiZ4Liy4LiX4Li1JyxcbiAgICBzczogJyVkIOC4p+C4tOC4meC4suC4l+C4tScsXG4gICAgbTogJzEg4LiZ4Liy4LiX4Li1JyxcbiAgICBtbTogJyVkIOC4meC4suC4l+C4tScsXG4gICAgaDogJzEg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcbiAgICBoaDogJyVkIOC4iuC4seC5iOC4p+C5guC4oeC4hycsXG4gICAgZDogJzEg4Lin4Lix4LiZJyxcbiAgICBkZDogJyVkIOC4p+C4seC4mScsXG4gICAgTTogJzEg4LmA4LiU4Li34Lit4LiZJyxcbiAgICBNTTogJyVkIOC5gOC4lOC4t+C4reC4mScsXG4gICAgeTogJzEg4Lib4Li1JyxcbiAgICB5eTogJyVkIOC4m+C4tSdcbiAgfVxufTtcbiJdfQ==