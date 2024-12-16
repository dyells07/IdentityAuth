/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniState extends BehaviorSubject {
    /**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        const /** @type {?} */ actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        const /** @type {?} */ state$ = actionInQueue$.pipe(scan((state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe((value) => this.next(value));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR2pELE1BQU0sZ0JBQW9CLFNBQVEsZUFBa0I7Ozs7OztJQUNsRCxZQUNFLGFBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxPQUF5QjtRQUV6QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckIsdUJBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQixDQUFDO1FBQ0YsdUJBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQ2hDLElBQUksQ0FBQyxDQUFDLEtBQVEsRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNkO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0IsRUFDRCxhQUFhLENBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgbmdyeFxuICovXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9ic2VydmVPbiwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY2xhc3MgTWluaVN0YXRlPFQ+IGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2luaXRpYWxTdGF0ZTogVCxcbiAgICBhY3Rpb25zRGlzcGF0Y2hlciQ6IE9ic2VydmFibGU8QWN0aW9uPixcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XG4gICkge1xuICAgIHN1cGVyKF9pbml0aWFsU3RhdGUpO1xuXG4gICAgY29uc3QgYWN0aW9uSW5RdWV1ZSQgPSBhY3Rpb25zRGlzcGF0Y2hlciQucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlJCA9IGFjdGlvbkluUXVldWUkLnBpcGUoXG4gICAgICBzY2FuKChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBfaW5pdGlhbFN0YXRlXG4gICAgKSk7XG5cbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==