/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { absFloor } from '../utils';
import { absCeil } from '../utils/abs-ceil';
/**
 * @param {?} dur
 * @return {?}
 */
export function bubble(dur) {
    let /** @type {?} */ milliseconds = dur._milliseconds;
    let /** @type {?} */ days = dur._days;
    let /** @type {?} */ months = dur._months;
    const /** @type {?} */ data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    const /** @type {?} */ seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    const /** @type {?} */ minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    const /** @type {?} */ hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    const /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    const /** @type {?} */ years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
export function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
export function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vYnViYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFNUMsTUFBTSxpQkFBaUIsR0FBYTtJQUNsQyxxQkFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNyQyxxQkFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixxQkFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN6Qix1QkFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs7O0lBSXZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0QsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDWjs7O0lBSUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBRXhDLHVCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUU1Qix1QkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFNUIsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXhCLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztJQUc3Qix1QkFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxjQUFjLENBQUM7SUFDekIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7SUFHOUMsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWxCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWjs7Ozs7QUFFRCxNQUFNLHVCQUF1QixHQUFXOzs7SUFHdEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQzVCOzs7OztBQUVELE1BQU0sdUJBQXVCLEtBQWE7O0lBRXhDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGFic0NlaWwgfSBmcm9tICcuLi91dGlscy9hYnMtY2VpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWJibGUoZHVyOiBEdXJhdGlvbik6IER1cmF0aW9uIHtcbiAgbGV0IG1pbGxpc2Vjb25kcyA9IGR1ci5fbWlsbGlzZWNvbmRzO1xuICBsZXQgZGF5cyA9IGR1ci5fZGF5cztcbiAgbGV0IG1vbnRocyA9IGR1ci5fbW9udGhzO1xuICBjb25zdCBkYXRhID0gZHVyLl9kYXRhO1xuXG4gIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKSkpIHtcbiAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgZGF5cyA9IDA7XG4gICAgbW9udGhzID0gMDtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgY29uc3Qgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgY29uc3QgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICBjb25zdCBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xuXG4gIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICBjb25zdCBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgY29uc3QgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gIG1vbnRocyAlPSAxMjtcblxuICBkYXRhLmRheSA9IGRheXM7XG4gIGRhdGEubW9udGggPSBtb250aHM7XG4gIGRhdGEueWVhciA9IHllYXJzO1xuXG4gIHJldHVybiBkdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzVG9Nb250aHMoZGF5OiBudW1iZXIpOiBudW1iZXIge1xuICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICByZXR1cm4gZGF5ICogNDgwMCAvIDE0NjA5Nztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gIHJldHVybiBtb250aCAqIDE0NjA5NyAvIDQ4MDA7XG59XG4iXX0=