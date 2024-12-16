/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, ElementRef } from '@angular/core';
import { positionElements } from './ng-positioning';
/**
 * @record
 */
export function PositioningOptions() { }
function PositioningOptions_tsickle_Closure_declarations() {
    /**
     * The DOM element, ElementRef, or a selector string of an element which will be moved
     * @type {?|undefined}
     */
    PositioningOptions.prototype.element;
    /**
     * The DOM element, ElementRef, or a selector string of an element which the element will be attached to
     * @type {?|undefined}
     */
    PositioningOptions.prototype.target;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     * @type {?|undefined}
     */
    PositioningOptions.prototype.attachment;
    /**
     * A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetAttachment;
    /**
     * A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     * @type {?|undefined}
     */
    PositioningOptions.prototype.offset;
    /**
     * A string similar to `offset`, but referring to the offset of the target
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetOffset;
    /**
     * If true component will be attached to body
     * @type {?|undefined}
     */
    PositioningOptions.prototype.appendToBody;
}
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    return PositioningService;
}());
export { PositioningService };
function PositioningService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PositioningService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PositioningService.ctorParameters;
}
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJwb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDbEQscUNBQVE7Ozs7SUFBUixVQUFTLE9BQTJCO1FBQzNCLElBQUEseUJBQU8sRUFBRSx1QkFBTSxFQUFFLCtCQUFVLEVBQUUsbUNBQVksQ0FBWTtRQUM1RCxnQkFBZ0IsQ0FDZCxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQ3ZCLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDeEIsVUFBVSxFQUNWLFlBQVksQ0FDYixDQUFDO0tBQ0g7O2dCQVZGLFVBQVU7OzZCQXBDWDs7U0FxQ2Esa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQWEvQix5QkFBeUIsT0FBMEM7O0lBRWpFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztLQUM5QjtJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdPcHRpb25zIHtcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXG4gIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LWF0dGFjaG1lbnQgaG9yaXotYXR0YWNobWVudCcgb3IgJ3BsYWNlbWVudCdcbiAgICogLSBwbGFjZW1lbnQgY2FuIGJlIFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XG4gICAqIC0gdmVydC1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ1xuICAgKiAtIGhvcml6LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXG4gICAqL1xuICBhdHRhY2htZW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxuICAgKiBgdGFyZ2V0QXR0YWNobWVudGAgd2lsbCBhc3N1bWUgdGhlIG1pcnJvciBpbWFnZSBvZiBgYXR0YWNobWVudGAuXG4gICAqL1xuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1vZmZzZXQgaG9yaXotb2Zmc2V0J1xuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcbiAgICovXG4gIG9mZnNldD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgb2Zmc2V0YCwgYnV0IHJlZmVycmluZyB0byB0aGUgb2Zmc2V0IG9mIHRoZSB0YXJnZXQgKi9cbiAgdGFyZ2V0T2Zmc2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBJZiB0cnVlIGNvbXBvbmVudCB3aWxsIGJlIGF0dGFjaGVkIHRvIGJvZHkgKi9cbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IHtlbGVtZW50LCB0YXJnZXQsIGF0dGFjaG1lbnQsIGFwcGVuZFRvQm9keX0gPSBvcHRpb25zO1xuICAgIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICBfZ2V0SHRtbEVsZW1lbnQodGFyZ2V0KSxcbiAgICAgIF9nZXRIdG1sRWxlbWVudChlbGVtZW50KSxcbiAgICAgIGF0dGFjaG1lbnQsXG4gICAgICBhcHBlbmRUb0JvZHlcbiAgICApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gX2dldEh0bWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=