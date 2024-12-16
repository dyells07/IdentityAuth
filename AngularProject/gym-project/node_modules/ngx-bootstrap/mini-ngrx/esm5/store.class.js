/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    tslib_1.__extends(MiniStore, _super);
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
 * @template T
 */
export { MiniStore };
function MiniStore_tsickle_Closure_declarations() {
    /** @type {?} */
    MiniStore.prototype._dispatcher;
    /** @type {?} */
    MiniStore.prototype._reducer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0b3JlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzNEOzs7QUFBQTtJQUFrQyxxQ0FBYTtJQUM3QyxtQkFDVSxhQUVBO0lBRVIsQUFEQSxzQ0FBc0M7SUFDdEMsTUFBdUI7UUFMekIsWUFPRSxpQkFBTyxTQUlSO1FBVlMsaUJBQVcsR0FBWCxXQUFXO1FBRVgsY0FBUSxHQUFSLFFBQVE7O1FBT2hCLEFBREEsMkNBQTJDO1FBQzNDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztLQUN0Qjs7Ozs7O0lBRUQsMEJBQU07Ozs7O0lBQU4sVUFBVSxXQUE0Qjs7UUFFcEMscUJBQU0sT0FBTyxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDN0M7Ozs7OztJQUVELHdCQUFJOzs7OztJQUFKLFVBQVEsUUFBd0I7UUFDOUIscUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFdEUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELHdCQUFJOzs7O0lBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBRUQsc0NBQXNDOzs7OztJQUN0Qyx5QkFBSzs7OztJQUFMLFVBQU0sR0FBUTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsNEJBQVE7OztJQUFSOztLQUVDO29CQW5ESDtFQU9rQyxVQUFVLEVBNkMzQyxDQUFBOzs7O0FBN0NELHFCQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBuZ3J4XG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTWluaVN0b3JlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPEFjdGlvbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgcHJpdmF0ZSBfcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcbiAgfVxuXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGNvbnN0IG1hcHBlZCQ6IE9ic2VydmFibGU8Uj4gPSB0aGlzLnNvdXJjZS5waXBlKG1hcChwYXRoT3JNYXBGbikpO1xuXG4gICAgcmV0dXJuIG1hcHBlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogTWluaVN0b3JlPFI+IHtcbiAgICBjb25zdCBzdG9yZSA9IG5ldyBNaW5pU3RvcmU8Uj4odGhpcy5fZGlzcGF0Y2hlciwgdGhpcy5fcmVkdWNlciwgdGhpcyk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIHN0b3JlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgbmV4dChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmVycm9yKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvKm5vb3AqL1xuICB9XG59XG4iXX0=