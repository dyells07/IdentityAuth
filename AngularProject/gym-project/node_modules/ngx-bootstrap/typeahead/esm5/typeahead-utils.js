/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { latinMap } from './latin-map';
/**
 * @param {?} str
 * @return {?}
 */
export function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return latinMap[a] || a;
    });
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
export function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
export function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    var /** @type {?} */ result = [];
    var /** @type {?} */ preTokenizedLength = preTokenized.length;
    var /** @type {?} */ token;
    var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
export function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var /** @type {?} */ propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = tslib_1.__values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
    var e_1, _a;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUV2QyxNQUFNLG1CQUFtQixHQUFXO0lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBUztRQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7Q0FDSjs7Ozs7QUFFRCxNQUFNLHVCQUF1QixhQUFxQjs7OztJQUloRCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNoRTs7Ozs7OztBQUdELE1BQU0sbUJBQW1CLEdBQVcsRUFDWCxtQkFBeUIsRUFDekIscUJBQTBCO0lBRDFCLG9DQUFBLEVBQUEseUJBQXlCO0lBQ3pCLHNDQUFBLEVBQUEsMEJBQTBCOztJQUVqRCxxQkFBTSxRQUFRLEdBQUcsU0FBTyxxQkFBcUIsYUFBUSxxQkFBcUIsUUFBSztTQUM3RSxTQUFPLHFCQUFxQixjQUFTLG1CQUFtQixRQUFLLENBQUEsQ0FBQztJQUNoRSxxQkFBTSxZQUFZLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxxQkFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLHFCQUFNLGtCQUFrQixHQUFXLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDdkQscUJBQUksS0FBYSxDQUFDO0lBQ2xCLHFCQUFNLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLE1BQUkscUJBQXFCLE9BQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUvRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0MsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2Y7Ozs7OztBQUdELE1BQU0sNkJBQTZCLE1BQVcsRUFBRSxNQUFjO0lBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQjtJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQztJQUVELHFCQUFNLFVBQVUsR0FBVyxNQUFNO1NBQzlCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1NBQzVCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEIscUJBQU0sZUFBZSxHQUFhLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRXhELEdBQUcsQ0FBQyxDQUFtQixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQTtZQUFqQyxJQUFNLFFBQVEsNEJBQUE7WUFDakIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUV2QixNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7Ozs7Ozs7OztJQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUUxQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOztDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhdGluTWFwIH0gZnJvbSAnLi9sYXRpbi1tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGF0aW5pemUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXFtcXF0gXS9nLCBmdW5jdGlvbiAoYTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbGF0aW5NYXBbYV0gfHwgYTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmdcbiAgLy8gdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggdGhlIHJlc3VsdHMsIGZvciBleGFtcGxlIGlmIHRoZSBjYXB0dXJlIGlzXG4gIC8vICdhJyB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3RyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgd29yZFJlZ2V4RGVsaW1pdGVycyA9ICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2VSZWdleERlbGltaXRlcnMgPSAnJyk6IEFycmF5PHN0cmluZz4ge1xuICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gIGNvbnN0IHJlZ2V4U3RyID0gYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKShbXiR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rKWAgK1xuICAgIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XG4gIGNvbnN0IHByZVRva2VuaXplZDogc3RyaW5nW10gPSBzdHIuc3BsaXQobmV3IFJlZ0V4cChyZWdleFN0ciwgJ2cnKSk7XG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcHJlVG9rZW5pemVkTGVuZ3RoOiBudW1iZXIgPSBwcmVUb2tlbml6ZWQubGVuZ3RoO1xuICBsZXQgdG9rZW46IHN0cmluZztcbiAgY29uc3QgcmVwbGFjZVBocmFzZURlbGltaXRlcnMgPSBuZXcgUmVnRXhwKGBbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XStgLCAnZycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlVG9rZW5pemVkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0b2tlbiA9IHByZVRva2VuaXplZFtpXTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoICYmIHRva2VuICE9PSB3b3JkUmVnZXhEZWxpbWl0ZXJzKSB7XG4gICAgICByZXN1bHQucHVzaCh0b2tlbi5yZXBsYWNlKHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzLCAnJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqZWN0OiBhbnksIG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFvcHRpb24gfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0aW9uLmVuZHNXaXRoKCcoKScpKSB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gb3B0aW9uLnNsaWNlKDAsIG9wdGlvbi5sZW5ndGggLSAyKTtcblxuICAgIHJldHVybiBvYmplY3RbZnVuY3Rpb25OYW1lXSgpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmcgPSBvcHRpb25cbiAgICAucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKVxuICAgIC5yZXBsYWNlKC9eXFwuLywgJycpO1xuICBjb25zdCBwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdID0gcHJvcGVydGllcy5zcGxpdCgnLicpO1xuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllc0FycmF5KSB7XG4gICAgaWYgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBvYmplY3QgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICBpZiAoIW9iamVjdCkge3JldHVybiAnJzsgfVxuXG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbn1cbiJdfQ==