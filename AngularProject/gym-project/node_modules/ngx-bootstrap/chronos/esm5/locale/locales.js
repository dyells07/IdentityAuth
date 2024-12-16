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
var /** @type {?} */ locales = {};
var /** @type {?} */ localeFamilies = {};
var /** @type {?} */ globalLocale;
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
    var /** @type {?} */ next;
    var /** @type {?} */ locale;
    var /** @type {?} */ i = 0;
    while (i < names.length) {
        var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        var /** @type {?} */ j = split.length;
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
    var /** @type {?} */ res = Object.assign({}, parentConfig);
    for (var /** @type {?} */ childProp in childConfig) {
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
    var /** @type {?} */ parentProp;
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
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
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
    var /** @type {?} */ data;
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
    var /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
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
    var /** @type {?} */ _config = config;
    if (_config != null) {
        var /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        var /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        var /** @type {?} */ locale = new Locale(_config);
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
    var /** @type {?} */ _key = isArray(key) ? key : [key];
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
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            var /** @type {?} */ b = num % 10;
            var /** @type {?} */ output = toInt((num % 100) / 10) === 1
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JB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bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBiYXNlQ29uZmlnIH0gZnJvbSAnLi9sb2NhbGUuZGVmYXVsdHMnO1xuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCwgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBjb21wYXJlQXJyYXlzIH0gZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xuXG5pbXBvcnQgeyBpbml0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuaW1wb3J0IHsgaW5pdFdlZWtZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcbmltcG9ydCB7IGluaXRZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBpbml0VGltZXpvbmUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XG5pbXBvcnQgeyBpbml0VGltZXN0YW1wIH0gZnJvbSAnLi4vdW5pdHMvdGltZXN0YW1wJztcbmltcG9ydCB7IGluaXRTZWNvbmQgfSBmcm9tICcuLi91bml0cy9zZWNvbmQnO1xuaW1wb3J0IHsgaW5pdFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcbmltcG9ydCB7IGluaXRPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgaW5pdE1pbnV0ZSB9IGZyb20gJy4uL3VuaXRzL21pbnV0ZSc7XG5pbXBvcnQgeyBpbml0TWlsbGlzZWNvbmQgfSBmcm9tICcuLi91bml0cy9taWxsaXNlY29uZCc7XG5pbXBvcnQgeyBpbml0TW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBpbml0SG91ciB9IGZyb20gJy4uL3VuaXRzL2hvdXInO1xuaW1wb3J0IHsgaW5pdERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcbmltcG9ydCB7IGluaXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBpbml0RGF5T2ZNb250aCB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi1tb250aCc7XG5cbmNvbnN0IGxvY2FsZXM6IHsgW2tleTogc3RyaW5nXTogTG9jYWxlIH0gPSB7fTtcbmNvbnN0IGxvY2FsZUZhbWlsaWVzOiB7IFtrZXk6IHN0cmluZ106IHtuYW1lOiBzdHJpbmc7IGNvbmZpZzogTG9jYWxlRGF0YX1bXSB9ID0ge307XG5sZXQgZ2xvYmFsTG9jYWxlOiBMb2NhbGU7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCxcbi8vIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lczogc3RyaW5nW10pOiBMb2NhbGUge1xuICBsZXQgbmV4dDtcbiAgbGV0IGxvY2FsZTtcbiAgbGV0IGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgbGV0IGogPSBzcGxpdC5sZW5ndGg7XG4gICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBqLS07XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZzogTG9jYWxlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWc6IExvY2FsZURhdGEpIHtcbiAgY29uc3QgcmVzOiBMb2NhbGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50Q29uZmlnKTtcblxuICBmb3IgKGNvbnN0IGNoaWxkUHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChjaGlsZENvbmZpZywgY2hpbGRQcm9wKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcbiAgICAgIHJlc1tjaGlsZFByb3BdID0ge307XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBwYXJlbnRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBjaGlsZENvbmZpZ1tjaGlsZFByb3BdKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0gIT0gbnVsbCkge1xuICAgICAgcmVzW2NoaWxkUHJvcF0gPSBjaGlsZENvbmZpZ1tjaGlsZFByb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcF07XG4gICAgfVxuICB9XG4gIGxldCBwYXJlbnRQcm9wO1xuICBmb3IgKHBhcmVudFByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxuICAgICkge1xuICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0gPSBPYmplY3QuYXNzaWduKHt9LCByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWU6IHN0cmluZyk6IExvY2FsZSB7XG4gIC8vIG5vIHdheSFcbiAgLyogdmFyIG9sZExvY2FsZSA9IG51bGw7XG4gICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgIHRyeSB7XG4gICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgfSBjYXRjaCAoZSkge31cbiAgIH0qL1xuICBpZiAoIWxvY2FsZXNbbmFtZV0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zb2xlLmVycm9yKGBLaHJvbm9zIGxvY2FsZSBlcnJvcjogcGxlYXNlIGxvYWQgbG9jYWxlIFwiJHtuYW1lfVwiIGJlZm9yZSB1c2luZyBpdGApO1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZyB7XG4gIGxldCBkYXRhOiBMb2NhbGU7XG5cbiAgaWYgKGtleSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhrZXkpKSB7XG4gICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsTG9jYWxlICYmIGdsb2JhbExvY2FsZS5fYWJicjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgZ2xvYmFsTG9jYWxlID0gZ2V0TG9jYWxlKCdlbicpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICBjb25maWcuYWJiciA9IG5hbWU7XG4gIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goeyBuYW1lLCBjb25maWcgfSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoX2NvbmZpZyAhPSBudWxsKSB7XG4gICAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgLy8gTUVSR0VcbiAgICBjb25zdCB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xuICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gdG1wTG9jYWxlLl9jb25maWc7XG4gICAgfVxuICAgIF9jb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBfY29uZmlnKTtcbiAgICBjb25zdCBsb2NhbGUgPSBuZXcgTG9jYWxlKF9jb25maWcpO1xuICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IExvY2FsZSB7XG4gIHNldERlZmF1bHRMb2NhbGUoKTtcblxuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gIH1cbiAgLy8gbGV0IGxvY2FsZTtcbiAgY29uc3QgX2tleSA9IGlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldO1xuXG4gIHJldHVybiBjaG9vc2VMb2NhbGUoX2tleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0TG9jYWxlcygpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbGVzKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdExvY2FsZSgpOiB2b2lkIHtcbiAgaWYgKGxvY2FsZXNbYGVuYF0pIHtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgIG9yZGluYWwobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgY29uc3QgYiA9IG51bSAlIDEwO1xuICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgdG9JbnQoKG51bSAlIDEwMCkgLyAxMCkgPT09IDFcbiAgICAgICAgICA/ICd0aCdcbiAgICAgICAgICA6IGIgPT09IDEgPyAnc3QnIDogYiA9PT0gMiA/ICduZCcgOiBiID09PSAzID8gJ3JkJyA6ICd0aCc7XG5cbiAgICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gICAgfVxuICB9KTtcblxuICBpbml0V2VlaygpO1xuICBpbml0V2Vla1llYXIoKTtcbiAgaW5pdFllYXIoKTtcbiAgaW5pdFRpbWV6b25lKCk7XG4gIGluaXRUaW1lc3RhbXAoKTtcbiAgaW5pdFNlY29uZCgpO1xuICBpbml0UXVhcnRlcigpO1xuICBpbml0T2Zmc2V0KCk7XG4gIGluaXRNb250aCgpO1xuICBpbml0TWludXRlKCk7XG4gIGluaXRNaWxsaXNlY29uZCgpO1xuICBpbml0SG91cigpO1xuICBpbml0RGF5T2ZZZWFyKCk7XG4gIGluaXREYXlPZldlZWsoKTtcbiAgaW5pdERheU9mTW9udGgoKTtcbn1cbiJdfQ==