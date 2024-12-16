/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
var /** @type {?} */ height = 4;
var /** @type {?} */ width = 4;
export var /** @type {?} */ yearsPerCalendar = height * width;
var /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var /** @type {?} */ shift = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatYearsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        });
    });
    var /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var /** @type {?} */ from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var /** @type {?} */ to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXllYXJzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQscUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQixxQkFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sQ0FBQyxxQkFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQy9DLHFCQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUscUJBQU0sS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFMUIsTUFBTSw4QkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMscUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNoRSxxQkFBTSxhQUFhLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO0lBQzVELHFCQUFNLFdBQVcsR0FBRyxZQUFZLENBRTlCLGFBQWEsRUFBRSxVQUFBLElBQUk7UUFBSSxPQUFBLENBQUM7WUFDeEIsSUFBSSxNQUFBO1lBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO1NBQ3ZFLENBQUM7SUFIdUIsQ0FHdkIsQ0FBQyxDQUFDO0lBQ0oscUJBQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsV0FBVztRQUNsQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsV0FBQTtLQUNWLENBQUM7Q0FDSDs7Ozs7O0FBRUQsOEJBQ0UsV0FBc0MsRUFDdEMsYUFBc0M7SUFFdEMscUJBQU0sSUFBSSxHQUFHLFVBQVUsQ0FDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUNGLHFCQUFNLEVBQUUsR0FBRyxVQUFVLENBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdkMsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUVGLE1BQU0sQ0FBSSxJQUFJLFdBQU0sRUFBSSxDQUFDO0NBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgc2hpZnREYXRlLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmNvbnN0IGhlaWdodCA9IDQ7XG5jb25zdCB3aWR0aCA9IDQ7XG5leHBvcnQgY29uc3QgeWVhcnNQZXJDYWxlbmRhciA9IGhlaWdodCAqIHdpZHRoO1xuY29uc3QgaW5pdGlhbFNoaWZ0ID0gKE1hdGguZmxvb3IoeWVhcnNQZXJDYWxlbmRhciAvIDIpIC0gMSkgKiAtMTtcbmNvbnN0IHNoaWZ0ID0geyB5ZWFyOiAxIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiBpbml0aWFsU2hpZnQgfSk7XG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xuICBjb25zdCB5ZWFyc01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XG4gICAgZGF0ZSxcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLnllYXJMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXG4gIH0pKTtcbiAgY29uc3QgeWVhclRpdGxlID0gZm9ybWF0WWVhclJhbmdlVGl0bGUoeWVhcnNNYXRyaXgsIGZvcm1hdE9wdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcnM6IHllYXJzTWF0cml4LFxuICAgIG1vbnRoVGl0bGU6ICcnLFxuICAgIHllYXJUaXRsZVxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRZZWFyUmFuZ2VUaXRsZShcbiAgeWVhcnNNYXRyaXg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW10sXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBjb25zdCBmcm9tID0gZm9ybWF0RGF0ZShcbiAgICB5ZWFyc01hdHJpeFswXVswXS5kYXRlLFxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICk7XG4gIGNvbnN0IHRvID0gZm9ybWF0RGF0ZShcbiAgICB5ZWFyc01hdHJpeFtoZWlnaHQgLSAxXVt3aWR0aCAtIDFdLmRhdGUsXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgKTtcblxuICByZXR1cm4gYCR7ZnJvbX0gLSAke3RvfWA7XG59XG4iXX0=