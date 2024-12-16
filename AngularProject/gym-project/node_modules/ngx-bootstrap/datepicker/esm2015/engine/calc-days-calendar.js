/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getFirstDayOfMonth } from 'ngx-bootstrap/chronos';
import { getStartingDayOfCalendar } from '../utils/bs-calendar-utils';
import { createMatrix } from '../utils/matrix-utils';
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
export function calcDaysCalendar(startingDate, options) {
    const /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    const /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    const /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate,
        shift: { day: 1 }
    };
    const /** @type {?} */ daysMatrix = createMatrix(matrixOptions, date => date);
    return {
        daysMatrix,
        month: firstDay
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFckQsTUFBTSwyQkFDSixZQUFrQixFQUNsQixPQUF5QjtJQUV6Qix1QkFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsdUJBQU0sV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRSx1QkFBTSxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixXQUFXO1FBQ1gsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtLQUNsQixDQUFDO0lBQ0YsdUJBQU0sVUFBVSxHQUFHLFlBQVksQ0FBTyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxVQUFVO1FBQ1YsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlciBhbmQgbW9kZWwgaW5wdXQgc2hvdWxkIGhhbmRsZSBwYXJzaW5nIGFuZCB2YWxpZGF0aW5nIGlucHV0IHZhbHVlc1xuLy8gc2hvdWxkIGFjY2VwdCBzb21lIG9wdGlvbnNcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXG5pbXBvcnQgeyBEYXlzQ2FsZW5kYXJNb2RlbCwgTW9udGhWaWV3T3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRGaXJzdERheU9mTW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXG4gIHN0YXJ0aW5nRGF0ZTogRGF0ZSxcbiAgb3B0aW9uczogTW9udGhWaWV3T3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xuICBjb25zdCBmaXJzdERheSA9IGdldEZpcnN0RGF5T2ZNb250aChzdGFydGluZ0RhdGUpO1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihmaXJzdERheSwgb3B0aW9ucyk7XG5cbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHtcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgIGluaXRpYWxEYXRlLFxuICAgIHNoaWZ0OiB7IGRheTogMSB9XG4gIH07XG4gIGNvbnN0IGRheXNNYXRyaXggPSBjcmVhdGVNYXRyaXg8RGF0ZT4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiBkYXRlKTtcblxuICByZXR1cm4ge1xuICAgIGRheXNNYXRyaXgsXG4gICAgbW9udGg6IGZpcnN0RGF5XG4gIH07XG59XG4iXX0=