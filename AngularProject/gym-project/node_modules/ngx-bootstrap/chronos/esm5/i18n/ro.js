/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var /** @type {?} */ format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    var /** @type {?} */ separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
export var /** @type {?} */ roLocale = {
    abbr: 'ro',
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3JvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFZQSxnQ0FBZ0MsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVztJQUM5RSxxQkFBSSxNQUFNLEdBQTJCO1FBQ25DLEVBQUUsRUFBRSxTQUFTO1FBQ2IsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxNQUFNO1FBQ1YsRUFBRSxFQUFFLE1BQU07UUFDVixFQUFFLEVBQUUsS0FBSztLQUNWLENBQUM7SUFFRixxQkFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQ3BCO0lBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3RDO0FBR0QsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSwrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0I7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8gISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vICEgbG9jYWxlIDogUm9tYW5pYW4gW3JvXVxuLy8hIGF1dGhvciA6IFZsYWQgR3VyZGlnYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ndXJkaWdhXG4vLyEgYXV0aG9yIDogVmFsZW50aW4gQWdhY2hpIDogaHR0cHM6Ly9naXRodWIuY29tL2F2YWx5XG4vLyAhIGF1dGhvciA6IEVhcmxlIHdoaXRlOiBodHRwczovL2dpdGh1Yi5jb20vNWVhcmxlXG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdDoge1trZXk6c3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICBzczogJ3NlY3VuZGUnLFxuICAgIG1tOiAnbWludXRlJyxcbiAgICBoaDogJ29yZScsXG4gICAgZGQ6ICd6aWxlJyxcbiAgICBNTTogJ2x1bmknLFxuICAgIHl5OiAnYW5pJ1xuICB9O1xuXG4gIGxldCBzZXBhcmF0b3IgPSAnICc7XG4gIGlmIChudW0gJSAxMDAgPj0gMjAgfHwgKG51bSA+PSAxMDAgJiYgbnVtICUgMTAwID09PSAwKSkge1xuICAgIHNlcGFyYXRvciA9ICcgZGUgJztcbiAgfVxuICByZXR1cm4gbnVtICsgc2VwYXJhdG9yICsgZm9ybWF0W2tleV07XG59XG5cblxuZXhwb3J0IGNvbnN0IHJvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncm8nLFxuICBtb250aHM6ICdpYW51YXJpZV9mZWJydWFyaWVfbWFydGllX2FwcmlsaWVfbWFpX2l1bmllX2l1bGllX2F1Z3VzdF9zZXB0ZW1icmllX29jdG9tYnJpZV9ub2llbWJyaWVfZGVjZW1icmllJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2lhbi5fZmVici5fbWFydC5fYXByLl9tYWlfaXVuLl9pdWwuX2F1Zy5fc2VwdC5fb2N0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZHVtaW5pY8SDX2x1bmlfbWFyyJtpX21pZXJjdXJpX2pvaV92aW5lcmlfc8OibWLEg3TEgycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0R1bV9MdW5fTWFyX01pZV9Kb2lfVmluX1PDom0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnRHVfTHVfTWFfTWlfSm9fVmlfU8OiJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbYXppIGxhXSBMVCcsXG4gICAgbmV4dERheTogJ1ttw6JpbmUgbGFdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2xhXSBMVCcsXG4gICAgbGFzdERheTogJ1tpZXJpIGxhXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdwZXN0ZSAlcycsXG4gICAgcGFzdDogJyVzIMOubiB1cm3EgycsXG4gICAgczogJ2PDonRldmEgc2VjdW5kZScsXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbTogJ3VuIG1pbnV0JyxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAnbyBvcsSDJyxcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBkOiAnbyB6aScsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ28gbHVuxIMnLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIHk6ICd1biBhbicsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=