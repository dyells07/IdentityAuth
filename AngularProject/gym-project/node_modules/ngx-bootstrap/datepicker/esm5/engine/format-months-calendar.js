/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
var /** @type {?} */ height = 4;
var /** @type {?} */ width = 3;
var /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = startOf(viewDate, 'year');
    var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        });
    });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxxQkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLHFCQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEIscUJBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFM0IsTUFBTSwrQkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMscUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMscUJBQU0sYUFBYSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztJQUM1RCxxQkFBTSxXQUFXLEdBQUcsWUFBWSxDQUU5QixhQUFhLEVBQUUsVUFBQSxJQUFJO1FBQUksT0FBQSxDQUFDO1lBQ3hCLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQztTQUN4RSxDQUFDO0lBSHVCLENBR3ZCLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQztRQUNMLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLFVBQVUsQ0FDbkIsUUFBUSxFQUNSLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IHN0YXJ0T2YsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuY29uc3QgaGVpZ2h0ID0gNDtcbmNvbnN0IHdpZHRoID0gMztcbmNvbnN0IHNoaWZ0ID0geyBtb250aDogMSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXG4gIHZpZXdEYXRlOiBEYXRlLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IHN0YXJ0T2Yodmlld0RhdGUsICd5ZWFyJyk7XG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xuICBjb25zdCBtb250aE1hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XG4gICAgZGF0ZSxcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLm1vbnRoTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtb250aHM6IG1vbnRoTWF0cml4LFxuICAgIG1vbnRoVGl0bGU6ICcnLFxuICAgIHllYXJUaXRsZTogZm9ybWF0RGF0ZShcbiAgICAgIHZpZXdEYXRlLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgIClcbiAgfTtcbn1cbiJdfQ==