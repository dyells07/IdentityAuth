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
    var /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    var /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    var /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var /** @type {?} */ daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFckQsTUFBTSwyQkFDSixZQUFrQixFQUNsQixPQUF5QjtJQUV6QixxQkFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQscUJBQU0sV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRSxxQkFBTSxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixXQUFXLGFBQUE7UUFDWCxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0tBQ2xCLENBQUM7SUFDRixxQkFBTSxVQUFVLEdBQUcsWUFBWSxDQUFPLGFBQWEsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxVQUFVLFlBQUE7UUFDVixLQUFLLEVBQUUsUUFBUTtLQUNoQixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2VyIGFuZCBtb2RlbCBpbnB1dCBzaG91bGQgaGFuZGxlIHBhcnNpbmcgYW5kIHZhbGlkYXRpbmcgaW5wdXQgdmFsdWVzXG4vLyBzaG91bGQgYWNjZXB0IHNvbWUgb3B0aW9uc1xuLy8gdG9kbzogc3BsaXQgb3V0IGZvcm1hdHRpbmdcbmltcG9ydCB7IERheXNDYWxlbmRhck1vZGVsLCBNb250aFZpZXdPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGdldEZpcnN0RGF5T2ZNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0RheXNDYWxlbmRhcihcbiAgc3RhcnRpbmdEYXRlOiBEYXRlLFxuICBvcHRpb25zOiBNb250aFZpZXdPcHRpb25zXG4pOiBEYXlzQ2FsZW5kYXJNb2RlbCB7XG4gIGNvbnN0IGZpcnN0RGF5ID0gZ2V0Rmlyc3REYXlPZk1vbnRoKHN0YXJ0aW5nRGF0ZSk7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyKGZpcnN0RGF5LCBvcHRpb25zKTtcblxuICBjb25zdCBtYXRyaXhPcHRpb25zID0ge1xuICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxuICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXG4gICAgaW5pdGlhbERhdGUsXG4gICAgc2hpZnQ6IHsgZGF5OiAxIH1cbiAgfTtcbiAgY29uc3QgZGF5c01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxEYXRlPihtYXRyaXhPcHRpb25zLCBkYXRlID0+IGRhdGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGF5c01hdHJpeCxcbiAgICBtb250aDogZmlyc3REYXlcbiAgfTtcbn1cbiJdfQ==