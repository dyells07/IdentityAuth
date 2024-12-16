/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createDuration } from './create';
var /** @type {?} */ round = Math.round;
var /** @type {?} */ thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
export function relativeTime(posNegDuration, withoutSuffix, locale) {
    var /** @type {?} */ duration = createDuration(posNegDuration).abs();
    var /** @type {?} */ seconds = round(duration.as('s'));
    var /** @type {?} */ minutes = round(duration.as('m'));
    var /** @type {?} */ hours = round(duration.as('h'));
    var /** @type {?} */ days = round(duration.as('d'));
    var /** @type {?} */ months = round(duration.as('M'));
    var /** @type {?} */ years = round(duration.as('y'));
    var /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
        seconds < thresholds["s"] && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds["m"] && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds["h"] && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds["d"] && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds["M"] && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    var /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
/**
 * @param {?} roundingFunction
 * @return {?}
 */
export function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof (roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}
/**
 * @param {?} threshold
 * @param {?} limit
 * @return {?}
 */
export function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds["ss"] = limit - 1;
    }
    return true;
}
// export function humanize(withSuffix) {
//   if (!this.isValid()) {
//     return this.localeData().invalidDate();
//   }
//
//   const locale = this.localeData();
//   let output = relativeTime(this, !withSuffix, locale);
//
//   if (withSuffix) {
//     output = locale.pastFuture(+this, output);
//   }
//
//   return locale.postformat(output);
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW5pemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9odW1hbml6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUkxQyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QixxQkFBTSxVQUFVLEdBQThCO0lBQzVDLEVBQUUsRUFBRSxFQUFFOztJQUNOLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFO0NBQ04sQ0FBQzs7Ozs7Ozs7O0FBR0YsMkJBQTJCLEdBQXNCLEVBQUUsR0FBVyxFQUNuQyxhQUFzQixFQUFFLFFBQWlCLEVBQ3pDLE1BQWM7SUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztDQUN0RTs7Ozs7OztBQUVELE1BQU0sdUJBQXVCLGNBQXdCLEVBQUUsYUFBc0IsRUFBRSxNQUFjO0lBQzNGLHFCQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQscUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMscUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMscUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMscUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMscUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEMscUJBQU0sQ0FBQyxHQUNMLE9BQU8sSUFBSSxVQUFVLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDMUMsT0FBTyxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7UUFDekMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixLQUFLLEdBQUcsVUFBVSxLQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZDLHFCQUFNLENBQUMsR0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztJQUszRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN6Qzs7Ozs7QUFHRCxNQUFNLHFDQUFxQyxnQkFBcUI7SUFDOUQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2Q7Ozs7OztBQUdELE1BQU0sc0NBQXNDLFNBQWlCLEVBQUUsS0FBYTtJQUMxRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixVQUFVLFNBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmxldCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCB0aHJlc2hvbGRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICBzczogNDQsICAgICAgICAgLy8gYSBmZXcgc2Vjb25kcyB0byBzZWNvbmRzXG4gIHM6IDQ1LCAgICAgICAgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gIG06IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxuICBoOiAyMiwgICAgICAgICAvLyBob3VycyB0byBkYXlcbiAgZDogMjYsICAgICAgICAgLy8gZGF5cyB0byBtb250aFxuICBNOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxufTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgaXNGdXR1cmU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bSB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKHBvc05lZ0R1cmF0aW9uOiBEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xuICBjb25zdCBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xuICBjb25zdCBtaW51dGVzID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gIGNvbnN0IGhvdXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSk7XG4gIGNvbnN0IGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgY29uc3QgbW9udGhzID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gIGNvbnN0IHllYXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSk7XG5cbiAgY29uc3QgYTogW3N0cmluZ10gfCBbc3RyaW5nLCBudW1iZXJdID1cbiAgICBzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10gfHxcbiAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxuICAgIG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSB8fFxuICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgaG91cnMgPD0gMSAmJiBbJ2gnXSB8fFxuICAgIGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gfHxcbiAgICBkYXlzIDw9IDEgJiYgWydkJ10gfHxcbiAgICBkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxuICAgIG1vbnRocyA8PSAxICYmIFsnTSddIHx8XG4gICAgbW9udGhzIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdIHx8XG4gICAgeWVhcnMgPD0gMSAmJiBbJ3knXSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gIGNvbnN0IGI6IFtzdHJpbmcsIG51bWJlciB8IHN0cmluZywgYm9vbGVhbiwgYm9vbGVhbiwgTG9jYWxlXSA9XG4gICAgW2FbMF0sIGFbMV0sIHdpdGhvdXRTdWZmaXgsICtwb3NOZWdEdXJhdGlvbiA+IDAsIGxvY2FsZV07XG4gIC8vIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAvLyBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgLy8gYVs0XSA9IGxvY2FsZTtcblxuICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYik7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uOiBhbnkpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xuICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJvdW5kO1xuICB9XG4gIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gIH1cbiAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xuICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplKHdpdGhTdWZmaXgpIHtcbi8vICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuLy8gICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuLy8gICB9XG4vL1xuLy8gICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbi8vICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcbi8vXG4vLyAgIGlmICh3aXRoU3VmZml4KSB7XG4vLyAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuLy8gfVxuIl19