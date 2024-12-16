/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Trigger } from './trigger.class';
/**
 * @record
 */
export function ListenOptions() { }
function ListenOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.targets;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideClick;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
var /** @type {?} */ DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var /** @type {?} */ parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var /** @type {?} */ manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
export function listenToTriggers(renderer, /* tslint:disable-next-line: no-any */
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    var /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function listenToTriggersV2(renderer, options) {
    var /** @type {?} */ parsedTriggers = parseTriggers(options.triggers);
    var /** @type {?} */ target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    var /** @type {?} */ listeners = [];
    // lazy listeners registration
    var /** @type {?} */ _registerHide = [];
    var /** @type {?} */ registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var /** @type {?} */ useToggle = trigger.open === trigger.close;
        var /** @type {?} */ showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return undefined;
        }
        options.hide();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTFDLHFCQUFNLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7Q0FDL0IsQ0FBQzs7Ozs7O0FBR0YsTUFBTSx3QkFBd0IsUUFBZ0IsRUFBRSxPQUE4QjtJQUE5Qix3QkFBQSxFQUFBLHlCQUE4QjtJQUM1RSxxQkFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFaEQsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDtJQUVELHFCQUFNLGNBQWMsR0FBRyxlQUFlO1NBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDWixHQUFHLENBQUMsVUFBQyxPQUFlLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDO1NBQzVDLEdBQUcsQ0FBQyxVQUFDLFdBQXFCO1FBQ3pCLHFCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEMsQ0FBQyxDQUFDO0lBRUwscUJBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENB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QU8sQ0FBQyxPQUFPO1lBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsQ0FDOUQsQ0FBQyxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCLENBQUMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cbiAqL1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmlnZ2VyIH0gZnJvbSAnLi90cmlnZ2VyLmNsYXNzJztcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCB0eXBlIEJzRXZlbnRDYWxsYmFjayA9IChldmVudD86IGFueSkgPT4gYm9vbGVhbiB8IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuT3B0aW9ucyB7XG4gIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICB0YXJnZXRzPzogSFRNTEVsZW1lbnRbXTtcbiAgdHJpZ2dlcnM/OiBzdHJpbmc7XG4gIG91dHNpZGVDbGljaz86IGJvb2xlYW47XG4gIHNob3c/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIGhpZGU/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIHRvZ2dsZT86IEJzRXZlbnRDYWxsYmFjaztcbn1cblxuY29uc3QgREVGQVVMVF9BTElBU0VTID0ge1xuICBob3ZlcjogWydtb3VzZW92ZXInLCAnbW91c2VvdXQnXSxcbiAgZm9jdXM6IFsnZm9jdXNpbicsICdmb2N1c291dCddXG59O1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlczogYW55ID0gREVGQVVMVF9BTElBU0VTKTogVHJpZ2dlcltdIHtcbiAgY29uc3QgdHJpbW1lZFRyaWdnZXJzID0gKHRyaWdnZXJzIHx8ICcnKS50cmltKCk7XG5cbiAgaWYgKHRyaW1tZWRUcmlnZ2Vycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHRyaW1tZWRUcmlnZ2Vyc1xuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgodHJpZ2dlcjogc3RyaW5nKSA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpXG4gICAgLm1hcCgodHJpZ2dlclBhaXI6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBhbGlhcyA9IGFsaWFzZXNbdHJpZ2dlclBhaXJbMF1dIHx8IHRyaWdnZXJQYWlyO1xuXG4gICAgICByZXR1cm4gbmV3IFRyaWdnZXIoYWxpYXNbMF0sIGFsaWFzWzFdKTtcbiAgICB9KTtcblxuICBjb25zdCBtYW51YWxUcmlnZ2VycyA9IHBhcnNlZFRyaWdnZXJzLmZpbHRlcigodHJpZ2dlclBhaXI6IFRyaWdnZXIpID0+XG4gICAgdHJpZ2dlclBhaXIuaXNNYW51YWwoKVxuICApO1xuXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogb25seSBvbmUgbWFudWFsIHRyaWdnZXIgaXMgYWxsb3dlZCcpO1xuICB9XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogbWFudWFsIHRyaWdnZXIgY2FuXFwndCBiZSBtaXhlZCB3aXRoIG90aGVyIHRyaWdnZXJzJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVHJpZ2dlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vyczogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZuOiBCc0V2ZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZuOiBCc0V2ZW50Q2FsbGJhY2spOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcblxuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGlmICh0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2UpIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgdG9nZ2xlRm4pKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCBzaG93Rm4pLFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgaGlkZUZuKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2Vyc1YyKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2VycyhvcHRpb25zLnRyaWdnZXJzKTtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gIC8vIGRvIG5vdGhpbmdcbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8vIGFsbCBsaXN0ZW5lcnNcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIGxhenkgbGlzdGVuZXJzIHJlZ2lzdHJhdGlvblxuICBjb25zdCBfcmVnaXN0ZXJIaWRlOiBGdW5jdGlvbltdID0gW107XG4gIGNvbnN0IHJlZ2lzdGVySGlkZSA9ICgpID0+IHtcbiAgICAvLyBhZGQgaGlkZSBsaXN0ZW5lcnMgdG8gdW5yZWdpc3RlciBhcnJheVxuICAgIF9yZWdpc3RlckhpZGUuZm9yRWFjaCgoZm46IEZ1bmN0aW9uKSA9PiBsaXN0ZW5lcnMucHVzaChmbigpKSk7XG4gICAgLy8gcmVnaXN0ZXIgaGlkZSBldmVudHMgb25seSBvbmNlXG4gICAgX3JlZ2lzdGVySGlkZS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8vIHJlZ2lzdGVyIG9wZW5cXGNsb3NlXFx0b2dnbGUgbGlzdGVuZXJzXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICBjb25zdCB1c2VUb2dnbGUgPSB0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2U7XG4gICAgY29uc3Qgc2hvd0ZuID0gdXNlVG9nZ2xlID8gb3B0aW9ucy50b2dnbGUgOiBvcHRpb25zLnNob3c7XG5cbiAgICBpZiAoIXVzZVRvZ2dsZSkge1xuICAgICAgX3JlZ2lzdGVySGlkZS5wdXNoKCgpID0+XG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIG9wdGlvbnMuaGlkZSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sICgpID0+IHNob3dGbihyZWdpc3RlckhpZGUpKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJPdXRzaWRlQ2xpY2socmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlQ2xpY2spIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIHJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnRhcmdldCAmJiBvcHRpb25zLnRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5oaWRlKCk7XG4gIH0pO1xufVxuIl19