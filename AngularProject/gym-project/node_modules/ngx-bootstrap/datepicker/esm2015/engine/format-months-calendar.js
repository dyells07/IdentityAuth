/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
const /** @type {?} */ height = 4;
const /** @type {?} */ width = 3;
const /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = startOf(viewDate, 'year');
    const /** @type {?} */ matrixOptions = { width, height, initialDate, shift };
    const /** @type {?} */ monthMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCx1QkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLHVCQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEIsdUJBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFM0IsTUFBTSwrQkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMsdUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sYUFBYSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDNUQsdUJBQU0sV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJO1FBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxDQUFDO1FBQ0wsTUFBTSxFQUFFLFdBQVc7UUFDbkIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsVUFBVSxDQUNuQixRQUFRLEVBQ1IsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgc3RhcnRPZiwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSAzO1xuY29uc3Qgc2hpZnQgPSB7IG1vbnRoOiAxIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc3RhcnRPZih2aWV3RGF0ZSwgJ3llYXInKTtcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XG4gIGNvbnN0IG1vbnRoTWF0cml4ID0gY3JlYXRlTWF0cml4PFxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcbiAgICBkYXRlLFxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMubW9udGhMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIG1vbnRoczogbW9udGhNYXRyaXgsXG4gICAgbW9udGhUaXRsZTogJycsXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgdmlld0RhdGUsXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKVxuICB9O1xufVxuIl19