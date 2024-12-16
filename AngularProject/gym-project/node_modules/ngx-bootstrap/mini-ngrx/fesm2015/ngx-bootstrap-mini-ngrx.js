import { BehaviorSubject, queueScheduler, Observable } from 'rxjs';
import { observeOn, scan, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class MiniState extends BehaviorSubject {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class MiniStore extends Observable {
    /**
     * @param {?} _dispatcher
     * @param {?} _reducer
     * @param {?} state$
     */
    constructor(_dispatcher, _reducer, /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        this.source = state$;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    select(pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        const /** @type {?} */ mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        const /** @type {?} */ store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    next(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) {
        this._dispatcher.error(err);
    }
    /**
     * @return {?}
     */
    complete() {
        /*noop*/
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MiniState, MiniStore };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1taW5pLW5ncnguanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbWluaS1uZ3J4L3N0YXRlLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC9zdG9yZS5jbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgbmdyeFxuICovXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9ic2VydmVPbiwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY2xhc3MgTWluaVN0YXRlPFQ+IGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2luaXRpYWxTdGF0ZTogVCxcbiAgICBhY3Rpb25zRGlzcGF0Y2hlciQ6IE9ic2VydmFibGU8QWN0aW9uPixcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XG4gICkge1xuICAgIHN1cGVyKF9pbml0aWFsU3RhdGUpO1xuXG4gICAgY29uc3QgYWN0aW9uSW5RdWV1ZSQgPSBhY3Rpb25zRGlzcGF0Y2hlciQucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlJCA9IGFjdGlvbkluUXVldWUkLnBpcGUoXG4gICAgICBzY2FuKChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBfaW5pdGlhbFN0YXRlXG4gICAgKSk7XG5cbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNvcHlyaWdodCBuZ3J4XG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTWluaVN0b3JlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPEFjdGlvbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgcHJpdmF0ZSBfcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcbiAgfVxuXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGNvbnN0IG1hcHBlZCQ6IE9ic2VydmFibGU8Uj4gPSB0aGlzLnNvdXJjZS5waXBlKG1hcChwYXRoT3JNYXBGbikpO1xuXG4gICAgcmV0dXJuIG1hcHBlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogTWluaVN0b3JlPFI+IHtcbiAgICBjb25zdCBzdG9yZSA9IG5ldyBNaW5pU3RvcmU8Uj4odGhpcy5fZGlzcGF0Y2hlciwgdGhpcy5fcmVkdWNlciwgdGhpcyk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIHN0b3JlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgbmV4dChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmVycm9yKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvKm5vb3AqL1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7QUFJQSxlQUEwQixTQUFRLGVBQWtCOzs7Ozs7SUFDbEQsWUFDRSxhQUFnQixFQUNoQixrQkFBc0MsRUFDdEMsT0FBeUI7UUFFekIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJCLHVCQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQzVDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FDMUIsQ0FBQztRQUNGLHVCQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUNoQyxJQUFJLENBQUMsQ0FBQyxLQUFRLEVBQUUsTUFBYztZQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0IsRUFDRCxhQUFhLENBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbEQ7Q0FDRjs7Ozs7O0FDN0JEOzs7QUFJQSxlQUEwQixTQUFRLFVBQWE7Ozs7OztJQUM3QyxZQUNVLGFBRUE7O0lBRVIsTUFBdUI7UUFFdkIsS0FBSyxFQUFFLENBQUM7UUFOQSxnQkFBVyxHQUFYLFdBQVc7UUFFWCxhQUFRLEdBQVIsUUFBUTs7UUFPaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7Ozs7OztJQUVELE1BQU0sQ0FBSSxXQUE0Qjs7UUFFcEMsdUJBQU0sT0FBTyxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVsRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQzdDOzs7Ozs7SUFFRCxJQUFJLENBQUksUUFBd0I7UUFDOUIsdUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFdEUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFMUIsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFHRCxLQUFLLENBQUMsR0FBUTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsUUFBUTs7S0FFUDtDQUNGOzs7Ozs7Ozs7Ozs7OzsifQ==