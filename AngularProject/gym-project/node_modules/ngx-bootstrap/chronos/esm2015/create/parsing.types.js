/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function DateParsingConfig() { }
function DateParsingConfig_tsickle_Closure_declarations() {
    /**
     * date value
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._d;
    /**
     * DateArray [year, month, date, .....]
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._a;
    /**
     * date meridiem
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._meridiem;
    /**
     * is PM
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isPm;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._isUTC;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._useUTC;
    /**
     * input to parse: could be string, number[], number, Date, object
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._i;
    /**
     * locale key, 'en' by default
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._l;
    /**
     * date locale obj
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._locale;
    /**
     * date format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._f;
    /**
     * use strict parse format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._strict;
    /**
     * add one day to result at the end of parsing
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._nextDay;
    /**
     * utc time offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._offset;
    /**
     * time zone
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._tzm;
    /**
     * is valid
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isValid;
    /**
     * date parsing flags
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._pf;
    /**
     * week
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._w;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._dayOfYear;
    /**
     * used in set offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._changeInProgress;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._zoneDelta;
}
/**
 * @record
 */
export function DateParsingFlags() { }
function DateParsingFlags_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowDayOfYear;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeeks;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeekday;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.score;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.bigHour;
    /** @type {?} */
    DateParsingFlags.prototype.empty;
    /** @type {?} */
    DateParsingFlags.prototype.unusedTokens;
    /** @type {?} */
    DateParsingFlags.prototype.unusedInput;
    /** @type {?} */
    DateParsingFlags.prototype.overflow;
    /** @type {?} */
    DateParsingFlags.prototype.charsLeftOver;
    /** @type {?} */
    DateParsingFlags.prototype.nullInput;
    /** @type {?} */
    DateParsingFlags.prototype.invalidMonth;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.invalidWeekday;
    /** @type {?} */
    DateParsingFlags.prototype.invalidFormat;
    /** @type {?} */
    DateParsingFlags.prototype.userInvalidated;
    /** @type {?} */
    DateParsingFlags.prototype.iso;
    /** @type {?} */
    DateParsingFlags.prototype.parsedDateParts;
    /** @type {?} */
    DateParsingFlags.prototype.meridiem;
    /** @type {?} */
    DateParsingFlags.prototype.rfc2822;
    /** @type {?} */
    DateParsingFlags.prototype.weekdayMismatch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZU9iamVjdCwgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIC8qKiBkYXRlIHZhbHVlICovXG4gIF9kPzogRGF0ZTtcbiAgLyoqIERhdGVBcnJheSBbeWVhciwgbW9udGgsIGRhdGUsIC4uLi4uXSAqL1xuICBfYT86IERhdGVBcnJheTtcbiAgLyoqIGRhdGUgbWVyaWRpZW0gKi9cbiAgX21lcmlkaWVtPzogc3RyaW5nO1xuICAvKiogaXMgUE0gKi9cbiAgX2lzUG0/OiBib29sZWFuO1xuICAvLyBkdXBsaWNhdGUgcGFyYW0/XG4gIF9pc1VUQz86IGJvb2xlYW47XG4gIF91c2VVVEM/OiBib29sZWFuO1xuICAvKiogaW5wdXQgdG8gcGFyc2U6IGNvdWxkIGJlIHN0cmluZywgbnVtYmVyW10sIG51bWJlciwgRGF0ZSwgb2JqZWN0ICovXG4gIF9pPzogRGF0ZUlucHV0O1xuICAvKiogbG9jYWxlIGtleSwgJ2VuJyBieSBkZWZhdWx0ICovXG4gIF9sPzogc3RyaW5nO1xuICAvKiogZGF0ZSBsb2NhbGUgb2JqICovXG4gIF9sb2NhbGU/OiBMb2NhbGU7XG4gIC8qKiBkYXRlIGZvcm1hdCAqL1xuICBfZj86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKiogdXNlIHN0cmljdCBwYXJzZSBmb3JtYXQgKi9cbiAgX3N0cmljdD86IGJvb2xlYW47XG4gIC8qKiBhZGQgb25lIGRheSB0byByZXN1bHQgYXQgdGhlIGVuZCBvZiBwYXJzaW5nICovXG4gIF9uZXh0RGF5PzogYm9vbGVhbjtcbiAgLyoqIHV0YyB0aW1lIG9mZnNldCAqL1xuICBfb2Zmc2V0PzogbnVtYmVyO1xuICAvKiogdGltZSB6b25lICovXG4gIF90em0/OiBudW1iZXI7XG4gIC8qKiBpcyB2YWxpZCAqL1xuICBfaXNWYWxpZD86IGJvb2xlYW47XG4gIC8qKiBkYXRlIHBhcnNpbmcgZmxhZ3MgKi9cbiAgX3BmPzogRGF0ZVBhcnNpbmdGbGFncztcblxuICAvKiogZGF0ZSBzcGVjaWZpYyBpbmZvICovXG5cbiAgLyoqIHdlZWsgKi9cbiAgX3c/OiBXZWVrUGFyc2luZztcbiAgX2RheU9mWWVhcj86IG51bWJlcjtcbiAgLyoqIHVzZWQgaW4gc2V0IG9mZnNldCAqL1xuICBfY2hhbmdlSW5Qcm9ncmVzcz86IGJvb2xlYW47XG4gIC8qIHVzZWQgb25seSBpbiBkaWZmIG1ldGhvZCAqL1xuICBfem9uZURlbHRhPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQYXJzaW5nRmxhZ3Mge1xuICBfb3ZlcmZsb3dEYXlPZlllYXI/OiBib29sZWFuO1xuICBfb3ZlcmZsb3dXZWVrcz86IGJvb2xlYW47XG4gIF9vdmVyZmxvd1dlZWtkYXk/OiBib29sZWFuO1xuICBzY29yZT86IG51bWJlcjtcbiAgYmlnSG91cj86IGJvb2xlYW47XG4gIGVtcHR5OiBib29sZWFuO1xuICB1bnVzZWRUb2tlbnM6IHN0cmluZ1tdO1xuICB1bnVzZWRJbnB1dDogc3RyaW5nW107XG4gIG92ZXJmbG93OiBudW1iZXI7XG4gIGNoYXJzTGVmdE92ZXI6IG51bWJlcjtcbiAgbnVsbElucHV0OiBib29sZWFuO1xuICBpbnZhbGlkTW9udGg6IGJvb2xlYW47XG4gIGludmFsaWRXZWVrZGF5PzogYm9vbGVhbjtcbiAgaW52YWxpZEZvcm1hdDogYm9vbGVhbjtcbiAgdXNlckludmFsaWRhdGVkOiBib29sZWFuO1xuICBpc286IGJvb2xlYW47XG4gIHBhcnNlZERhdGVQYXJ0czogRGF0ZUFycmF5O1xuICBtZXJpZGllbTogc3RyaW5nO1xuICByZmMyODIyOiBib29sZWFuO1xuICB3ZWVrZGF5TWlzbWF0Y2g6IGJvb2xlYW47XG59XG4iXX0=