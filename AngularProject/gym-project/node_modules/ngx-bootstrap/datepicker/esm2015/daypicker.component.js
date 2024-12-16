/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
export class DayPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ year = this.activeDate.getFullYear();
            const /** @type {?} */ month = this.activeDate.getMonth();
            const /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
            const /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
            const /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            const /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            const /** @type {?} */ _days = self.getDates(firstDate, 42);
            const /** @type {?} */ days = [];
            for (let /** @type {?} */ i = 0; i < 42; i++) {
                const /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (let /** @type {?} */ j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                const /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                const /** @type {?} */ numWeeks = self.rows.length;
                for (let /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            const /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    }
    /**
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    getDates(startDate, n) {
        const /** @type {?} */ dates = new Array(n);
        let /** @type {?} */ current = new Date(startDate.getTime());
        let /** @type {?} */ i = 0;
        let /** @type {?} */ date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISO8601WeekNumber(date) {
        const /** @type {?} */ checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        const /** @type {?} */ time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    }
}
DayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'daypicker',
                template: `
<table *ngIf="datePicker.datepickerMode === 'day'" role="grid" [attr.aria-labelledby]="datePicker.uniqueId + '-title'" aria-activedescendant="activeDateId">
  <thead>
    <tr>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">‹</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">&lt;</button>
      </th>
      <th [attr.colspan]="5 + (datePicker.showWeeks ? 1 : 0)">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-secondary btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">›</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">&gt;
        </button>
      </th>
    </tr>
    <tr>
      <th *ngIf="datePicker.showWeeks"></th>
      <th *ngFor="let labelz of labels" class="text-center">
        <small aria-label="labelz.full"><b>{{ labelz.abbr }}</b></small>
      </th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor [ngForOf]="rows" let-rowz="$implicit" let-index="index">
      <tr *ngIf="!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)">
        <td *ngIf="datePicker.showWeeks" class="h6" class="text-center">
          <em>{{ weekNumbers[index] }}</em>
        </td>
        <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [id]="dtz.uid">
          <button type="button" style="min-width:100%;" class="btn btn-sm {{dtz.customClass}}"
                  *ngIf="!(datePicker.onlyCurrentMonth && dtz.secondary)"
                  [ngClass]="{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1">
            <span [ngClass]="{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
          </button>
        </td>
      </tr>
    </ng-template>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-secondary {
      color: #292b2c;
      background-color: #fff;
      border-color: #ccc;
    }
    :host .btn-info .text-muted {
      color: #292b2c !important;
    }
  `]
            }] }
];
// todo: key events implementation
/** @nocollapse */
DayPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];
function DayPickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DayPickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DayPickerComponent.ctorParameters;
    /** @type {?} */
    DayPickerComponent.prototype.labels;
    /** @type {?} */
    DayPickerComponent.prototype.title;
    /** @type {?} */
    DayPickerComponent.prototype.rows;
    /** @type {?} */
    DayPickerComponent.prototype.weekNumbers;
    /** @type {?} */
    DayPickerComponent.prototype.datePicker;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImRheXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBbUZ4RSxNQUFNOzs7O0lBT0osWUFBWSxVQUFvQztzQkFOaEMsRUFBRTtvQkFFSixFQUFFOzJCQUNRLEVBQUU7UUFJeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNqQjs7OztJQU1ELFFBQVE7UUFDTix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXhDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7WUFDcEMsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsdUJBQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9ELHVCQUFNLDZCQUE2QixHQUNqQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMs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QUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ25CLENBQUM7U0FDSDtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFFUyxvQkFBb0IsQ0FBQyxJQUFVO1FBQ3ZDLHVCQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzs7UUFFM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsdUJBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFFakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3hFLENBQUM7S0FDSDs7O1lBbE1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlFVDt5QkFFQzs7Ozs7Ozs7O0dBU0Q7YUFFRjs7Ozs7WUFsRlEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGRlcHJlY2F0ZWRcbi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXlwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheSdcIiByb2xlPVwiZ3JpZFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJhY3RpdmVEYXRlSWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+4oC5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmx0OzwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIjUgKyAoZGF0ZVBpY2tlci5zaG93V2Vla3MgPyAxIDogMClcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7igLo8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmd0O1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiPjwvdGg+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGxhYmVseiBvZiBsYWJlbHNcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxzbWFsbCBhcmlhLWxhYmVsPVwibGFiZWx6LmZ1bGxcIj48Yj57eyBsYWJlbHouYWJiciB9fTwvYj48L3NtYWxsPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInJvd3NcIiBsZXQtcm93ej1cIiRpbXBsaWNpdFwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICA8dHIgKm5nSWY9XCIhKGRhdGVQaWNrZXIub25seUN1cnJlbnRNb250aCAmJiByb3d6WzBdLnNlY29uZGFyeSAmJiByb3d6WzZdLnNlY29uZGFyeSlcIj5cbiAgICAgICAgPHRkICpuZ0lmPVwiZGF0ZVBpY2tlci5zaG93V2Vla3NcIiBjbGFzcz1cImg2XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxlbT57eyB3ZWVrTnVtYmVyc1tpbmRleF0gfX08L2VtPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFtpZF09XCJkdHoudWlkXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tc20ge3tkdHouY3VzdG9tQ2xhc3N9fVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIGR0ei5zZWNvbmRhcnkpXCJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLXNlY29uZGFyeSc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4tZGVmYXVsdCc6ICFpc0JzNH1cIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LW11dGVkJzogZHR6LnNlY29uZGFyeSB8fCBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgY29sb3I6ICMyOTJiMmM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtbXV0ZWQge1xuICAgICAgY29sb3I6ICMyOTJiMmMgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXlQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsYWJlbHM6IGFueVtdID0gW107XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHJvd3M6IGFueVtdID0gW107XG4gIHdlZWtOdW1iZXJzOiBudW1iZXJbXSA9IFtdO1xuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICAvKnByb3RlY3RlZCBnZXREYXlzSW5Nb250aCh5ZWFyOm51bWJlciwgbW9udGg6bnVtYmVyKSB7XG4gICByZXR1cm4gKChtb250aCA9PT0gMSkgJiYgKHllYXIgJSA0ID09PSAwKSAmJlxuICAgKCh5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCkpKSA/IDI5IDogREFZU19JTl9NT05USFttb250aF07XG4gICB9Ki9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcERheSA9IHsgbW9udGhzOiAxIH07XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0aGlzLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpO1xuICAgICAgY29uc3QgbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPVxuICAgICAgICBkaWZmZXJlbmNlID4gMCA/IDcgLSBkaWZmZXJlbmNlIDogLWRpZmZlcmVuY2U7XG4gICAgICBjb25zdCBmaXJzdERhdGUgPSBuZXcgRGF0ZShmaXJzdERheU9mTW9udGguZ2V0VGltZSgpKTtcblxuICAgICAgaWYgKG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID4gMCkge1xuICAgICAgICBmaXJzdERhdGUuc2V0RGF0ZSgtbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gNDIgaXMgdGhlIG51bWJlciBvZiBkYXlzIG9uIGEgc2l4LXdlZWsgY2FsZW5kYXJcbiAgICAgIGNvbnN0IF9kYXlzOiBEYXRlW10gPSBzZWxmLmdldERhdGVzKGZpcnN0RGF0ZSwgNDIpO1xuICAgICAgY29uc3QgZGF5czogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkrKykge1xuICAgICAgICBjb25zdCBfZGF0ZU9iamVjdCA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChfZGF5c1tpXSwgdGhpcy5mb3JtYXREYXkpO1xuICAgICAgICBfZGF0ZU9iamVjdC5zZWNvbmRhcnkgPSBfZGF5c1tpXS5nZXRNb250aCgpICE9PSBtb250aDtcbiAgICAgICAgX2RhdGVPYmplY3QudWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XG4gICAgICAgIGRheXNbaV0gPSBfZGF0ZU9iamVjdDtcbiAgICAgIH1cblxuICAgICAgc2VsZi5sYWJlbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgIHNlbGYubGFiZWxzW2pdID0ge307XG4gICAgICAgIHNlbGYubGFiZWxzW2pdLmFiYnIgPSB0aGlzLmRhdGVGaWx0ZXIoXG4gICAgICAgICAgZGF5c1tqXS5kYXRlLFxuICAgICAgICAgIHRoaXMuZm9ybWF0RGF5SGVhZGVyXG4gICAgICAgICk7XG4gICAgICAgIHNlbGYubGFiZWxzW2pdLmZ1bGwgPSB0aGlzLmRhdGVGaWx0ZXIoZGF5c1tqXS5kYXRlLCAnRUVFRScpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRpdGxlID0gdGhpcy5kYXRlRmlsdGVyKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5mb3JtYXREYXlUaXRsZSk7XG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KGRheXMsIDcpO1xuXG4gICAgICBpZiAodGhpcy5zaG93V2Vla3MpIHtcbiAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IFtdO1xuICAgICAgICBjb25zdCB0aHVyc2RheUluZGV4ID0gKDQgKyA3IC0gdGhpcy5zdGFydGluZ0RheSkgJSA3O1xuICAgICAgICBjb25zdCBudW1XZWVrcyA9IHNlbGYucm93cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGN1cldlZWsgPSAwOyBjdXJXZWVrIDwgbnVtV2Vla3M7IGN1cldlZWsrKykge1xuICAgICAgICAgIHNlbGYud2Vla051bWJlcnMucHVzaChcbiAgICAgICAgICAgIHNlbGYuZ2V0SVNPODYwMVdlZWtOdW1iZXIoc2VsZi5yb3dzW2N1cldlZWtdW3RodXJzZGF5SW5kZXhdLmRhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sICdkYXknKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcbiAgICAgIGRhdGUxOiBEYXRlLFxuICAgICAgZGF0ZTI6IERhdGVcbiAgICApOiBudW1iZXIge1xuICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkpO1xuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpLCBkYXRlMi5nZXREYXRlKCkpO1xuICAgICAgcmV0dXJuIGQxLmdldFRpbWUoKSAtIGQyLmdldFRpbWUoKTtcbiAgICB9LCAnZGF5Jyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREYXRlcyhzdGFydERhdGU6IERhdGUsIG46IG51bWJlcik6IERhdGVbXSB7XG4gICAgY29uc3QgZGF0ZXM6IERhdGVbXSA9IG5ldyBBcnJheShuKTtcbiAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50LmdldFRpbWUoKSk7XG4gICAgICBkYXRlID0gdGhpcy5kYXRlUGlja2VyLmZpeFRpbWVab25lKGRhdGUpO1xuICAgICAgZGF0ZXNbaSsrXSA9IGRhdGU7XG4gICAgICBjdXJyZW50ID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKSArIDFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJU084NjAxV2Vla051bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgLy8gVGh1cnNkYXlcbiAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpO1xuICAgIGNvbnN0IHRpbWUgPSBjaGVja0RhdGUuZ2V0VGltZSgpO1xuICAgIC8vIENvbXBhcmUgd2l0aCBKYW4gMVxuICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTtcbiAgICBjaGVja0RhdGUuc2V0RGF0ZSgxKTtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJvdW5kKCh0aW1lIC0gY2hlY2tEYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgLyA3KSArIDFcbiAgICApO1xuICB9XG5cbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxufVxuIl19