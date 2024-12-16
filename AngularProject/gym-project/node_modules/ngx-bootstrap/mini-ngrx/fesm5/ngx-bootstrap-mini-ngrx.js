import { __extends } from 'tslib';
import { BehaviorSubject, queueScheduler, Observable } from 'rxjs';
import { observeOn, scan, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    __extends(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        var /** @type {?} */ actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        var /** @type {?} */ state$ = actionInQueue$.pipe(scan(function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(BehaviorSubject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    __extends(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        /* tslint:disable-next-line: deprecation */
        _this.source = state$;
        return _this;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    MiniStore.prototype.select = /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    function (pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        var /** @type {?} */ mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    MiniStore.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        var /** @type {?} */ store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.next = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    MiniStore.prototype.error = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._dispatcher.error(err);
    };
    /**
     * @return {?}
     */
    MiniStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        /*noop*/
    };
    return MiniStore;
}(Observable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MiniState, MiniStore };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1taW5pLW5ncnguanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbWluaS1uZ3J4L3N0YXRlLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC9zdG9yZS5jbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgbmdyeFxuICovXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9ic2VydmVPbiwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY2xhc3MgTWluaVN0YXRlPFQ+IGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2luaXRpYWxTdGF0ZTogVCxcbiAgICBhY3Rpb25zRGlzcGF0Y2hlciQ6IE9ic2VydmFibGU8QWN0aW9uPixcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XG4gICkge1xuICAgIHN1cGVyKF9pbml0aWFsU3RhdGUpO1xuXG4gICAgY29uc3QgYWN0aW9uSW5RdWV1ZSQgPSBhY3Rpb25zRGlzcGF0Y2hlciQucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlJCA9IGFjdGlvbkluUXVldWUkLnBpcGUoXG4gICAgICBzY2FuKChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBfaW5pdGlhbFN0YXRlXG4gICAgKSk7XG5cbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNvcHlyaWdodCBuZ3J4XG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTWluaVN0b3JlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPEFjdGlvbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgcHJpdmF0ZSBfcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcbiAgfVxuXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGNvbnN0IG1hcHBlZCQ6IE9ic2VydmFibGU8Uj4gPSB0aGlzLnNvdXJjZS5waXBlKG1hcChwYXRoT3JNYXBGbikpO1xuXG4gICAgcmV0dXJuIG1hcHBlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogTWluaVN0b3JlPFI+IHtcbiAgICBjb25zdCBzdG9yZSA9IG5ldyBNaW5pU3RvcmU8Uj4odGhpcy5fZGlzcGF0Y2hlciwgdGhpcy5fcmVkdWNlciwgdGhpcyk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIHN0b3JlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgbmV4dChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmVycm9yKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvKm5vb3AqL1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUE7OztBQUFBO0lBQWtDQSw2QkFBa0I7SUFDbEQsbUJBQ0UsYUFBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLE9BQXlCO1FBSDNCLFlBS0Usa0JBQU0sYUFBYSxDQUFDLFNBaUJyQjtRQWZDLHFCQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQzVDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FDMUIsQ0FBQztRQUNGLHFCQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUNoQyxJQUFJLENBQUMsVUFBQyxLQUFRLEVBQUUsTUFBYztZQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0IsRUFDRCxhQUFhLENBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDOztLQUNsRDtvQkEvQkg7RUFRa0MsZUFBZSxFQXdCaEQ7Ozs7Ozs7OztBQ3pCRDs7O0FBQUE7SUFBa0NBLDZCQUFhO0lBQzdDLG1CQUNVLGFBRUE7O0lBRVIsTUFBdUI7UUFMekIsWUFPRSxpQkFBTyxTQUlSO1FBVlMsaUJBQVcsR0FBWCxXQUFXO1FBRVgsY0FBUSxHQUFSLFFBQVE7OztRQU9oQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7S0FDdEI7Ozs7OztJQUVELDBCQUFNOzs7OztJQUFOLFVBQVUsV0FBNEI7O1FBRXBDLHFCQUFNLE9BQU8sR0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbEUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0lBRUQsd0JBQUk7Ozs7O0lBQUosVUFBUSxRQUF3QjtRQUM5QixxQkFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUV0RSxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUxQixPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELHdCQUFJOzs7O0lBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7Ozs7SUFHRCx5QkFBSzs7OztJQUFMLFVBQU0sR0FBUTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsNEJBQVE7OztJQUFSOztLQUVDO29CQW5ESDtFQU9rQyxVQUFVLEVBNkMzQzs7Ozs7Ozs7Ozs7Ozs7In0=