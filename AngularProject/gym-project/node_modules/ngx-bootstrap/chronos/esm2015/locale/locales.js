/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Locale } from './locale.class';
import { baseConfig } from './locale.defaults';
import { hasOwnProp, isArray, isObject, isString, isUndefined, toInt } from '../utils/type-checks';
import { compareArrays } from '../utils/compare-arrays';
import { initWeek } from '../units/week';
import { initWeekYear } from '../units/week-year';
import { initYear } from '../units/year';
import { initTimezone } from '../units/timezone';
import { initTimestamp } from '../units/timestamp';
import { initSecond } from '../units/second';
import { initQuarter } from '../units/quarter';
import { initOffset } from '../units/offset';
import { initMinute } from '../units/minute';
import { initMillisecond } from '../units/millisecond';
import { initMonth } from '../units/month';
import { initHour } from '../units/hour';
import { initDayOfYear } from '../units/day-of-year';
import { initDayOfWeek } from '../units/day-of-week';
import { initDayOfMonth } from '../units/day-of-month';
const /** @type {?} */ locales = {};
const /** @type {?} */ localeFamilies = {};
let /** @type {?} */ globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    let /** @type {?} */ next;
    let /** @type {?} */ locale;
    let /** @type {?} */ i = 0;
    while (i < names.length) {
        const /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        let /** @type {?} */ j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
export function mergeConfigs(parentConfig, childConfig) {
    const /** @type {?} */ res = Object.assign({}, parentConfig);
    for (const /** @type {?} */ childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    let /** @type {?} */ parentProp;
    for (parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[/** @type {?} */ (parentProp)])) {
            // make sure changes to properties don't modify parent config
            res[/** @type {?} */ (parentProp)] = Object.assign({}, res[/** @type {?} */ (parentProp)]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
       // TODO: Find a better way to register and load all the locales in Node
       if (!locales[name] && (typeof module !== 'undefined') &&
         module && module.exports) {
         try {
           oldLocale = globalLocale._abbr;
           var aliasedRequire = require;
           aliasedRequire('./locale/' + name);
           getSetGlobalLocale(oldLocale);
         } catch (e) {}
       }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error(`Khronos locale error: please load locale "${name}" before using it`);
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
export function getSetGlobalLocale(key, values) {
    let /** @type {?} */ data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    let /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name, config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function updateLocale(name, config) {
    let /** @type {?} */ _config = config;
    if (_config != null) {
        let /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        const /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        const /** @type {?} */ locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @return {?}
 */
export function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    const /** @type {?} */ _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
export function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales[`en`]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        /**
         * @param {?} num
         * @return {?}
         */
        ordinal(num) {
            const /** @type {?} */ b = num % 10;
            const /** @type {?} */ output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JB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bnRlbnQiOlsiLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xuaW1wb3J0IHsgTG9jYWxlLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vbG9jYWxlLmRlZmF1bHRzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY29tcGFyZUFycmF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbXBhcmUtYXJyYXlzJztcblxuaW1wb3J0IHsgaW5pdFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7IGluaXRXZWVrWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWsteWVhcic7XG5pbXBvcnQgeyBpbml0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgaW5pdFRpbWV6b25lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xuaW1wb3J0IHsgaW5pdFRpbWVzdGFtcCB9IGZyb20gJy4uL3VuaXRzL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBpbml0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcbmltcG9ydCB7IGluaXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XG5pbXBvcnQgeyBpbml0T2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGluaXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xuaW1wb3J0IHsgaW5pdE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xuaW1wb3J0IHsgaW5pdE1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaW5pdEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcbmltcG9ydCB7IGluaXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XG5pbXBvcnQgeyBpbml0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgaW5pdERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xuXG5jb25zdCBsb2NhbGVzOiB7IFtrZXk6IHN0cmluZ106IExvY2FsZSB9ID0ge307XG5jb25zdCBsb2NhbGVGYW1pbGllczogeyBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBjb25maWc6IExvY2FsZURhdGF9W10gfSA9IHt9O1xubGV0IGdsb2JhbExvY2FsZTogTG9jYWxlO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsXG4vLyBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG5mdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXM6IHN0cmluZ1tdKTogTG9jYWxlIHtcbiAgbGV0IG5leHQ7XG4gIGxldCBsb2NhbGU7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgIGxldCBqID0gc3BsaXQubGVuZ3RoO1xuICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICB9XG4gICAgICBpZiAobmV4dCAmJiBuZXh0Lmxlbmd0aCA+PSBqICYmIGNvbXBhcmVBcnJheXMoc3BsaXQsIG5leHQsIHRydWUpID49IGogLSAxKSB7XG4gICAgICAgIC8vIHRoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgai0tO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWc6IExvY2FsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnOiBMb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHJlczogTG9jYWxlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudENvbmZpZyk7XG5cbiAgZm9yIChjb25zdCBjaGlsZFByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AoY2hpbGRDb25maWcsIGNoaWxkUHJvcCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pKSB7XG4gICAgICByZXNbY2hpbGRQcm9wXSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgcGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgY2hpbGRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1tjaGlsZFByb3BdICE9IG51bGwpIHtcbiAgICAgIHJlc1tjaGlsZFByb3BdID0gY2hpbGRDb25maWdbY2hpbGRQcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHJlc1tjaGlsZFByb3BdO1xuICAgIH1cbiAgfVxuICBsZXQgcGFyZW50UHJvcDtcbiAgZm9yIChwYXJlbnRQcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgIGlmIChcbiAgICAgIGhhc093blByb3AocGFyZW50Q29uZmlnLCBwYXJlbnRQcm9wKSAmJlxuICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSlcbiAgICApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lOiBzdHJpbmcpOiBMb2NhbGUge1xuICAvLyBubyB3YXkhXG4gIC8qIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICB0cnkge1xuICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICB2YXIgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgIH0gY2F0Y2ggKGUpIHt9XG4gICB9Ki9cbiAgaWYgKCFsb2NhbGVzW25hbWVdKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc29sZS5lcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmcge1xuICBsZXQgZGF0YTogTG9jYWxlO1xuXG4gIGlmIChrZXkpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSkge1xuICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdsb2JhbExvY2FsZSAmJiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgIGdsb2JhbExvY2FsZSA9IGdldExvY2FsZSgnZW4nKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICB9XG4gICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHsgbmFtZSwgY29uZmlnIH0pO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgbGV0IF9jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKF9jb25maWcgIT0gbnVsbCkge1xuICAgIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgIC8vIE1FUkdFXG4gICAgY29uc3QgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgX2NvbmZpZyk7XG4gICAgY29uc3QgbG9jYWxlID0gbmV3IExvY2FsZShfY29uZmlnKTtcbiAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10pOiBMb2NhbGUge1xuICBzZXREZWZhdWx0TG9jYWxlKCk7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICB9XG4gIC8vIGxldCBsb2NhbGU7XG4gIGNvbnN0IF9rZXkgPSBpc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcblxuICByZXR1cm4gY2hvb3NlTG9jYWxlKF9rZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoKTogdm9pZCB7XG4gIGlmIChsb2NhbGVzW2BlbmBdKSB7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IGIgPSBudW0gJSAxMDtcbiAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgPyAndGgnXG4gICAgICAgICAgOiBiID09PSAxID8gJ3N0JyA6IGIgPT09IDIgPyAnbmQnIDogYiA9PT0gMyA/ICdyZCcgOiAndGgnO1xuXG4gICAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICAgIH1cbiAgfSk7XG5cbiAgaW5pdFdlZWsoKTtcbiAgaW5pdFdlZWtZZWFyKCk7XG4gIGluaXRZZWFyKCk7XG4gIGluaXRUaW1lem9uZSgpO1xuICBpbml0VGltZXN0YW1wKCk7XG4gIGluaXRTZWNvbmQoKTtcbiAgaW5pdFF1YXJ0ZXIoKTtcbiAgaW5pdE9mZnNldCgpO1xuICBpbml0TW9udGgoKTtcbiAgaW5pdE1pbnV0ZSgpO1xuICBpbml0TWlsbGlzZWNvbmQoKTtcbiAgaW5pdEhvdXIoKTtcbiAgaW5pdERheU9mWWVhcigpO1xuICBpbml0RGF5T2ZXZWVrKCk7XG4gIGluaXREYXlPZk1vbnRoKCk7XG59XG4iXX0=