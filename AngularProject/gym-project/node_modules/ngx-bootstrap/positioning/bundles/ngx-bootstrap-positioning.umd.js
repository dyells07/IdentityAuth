(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/positioning', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].positioning = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var Positioning = (function () {
        function Positioning() {
        }
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.position = /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
            function (element, round) {
                if (round === void 0) {
                    round = true;
                }
                var /** @type {?} */ elPosition;
                var /** @type {?} */ parentOffset = {
                    width: 0,
                    height: 0,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
                if (this.getStyle(element, 'position') === 'fixed') {
                    var /** @type {?} */ bcRect = element.getBoundingClientRect();
                    elPosition = {
                        width: bcRect.width,
                        height: bcRect.height,
                        top: bcRect.top,
                        bottom: bcRect.bottom,
                        left: bcRect.left,
                        right: bcRect.right
                    };
                }
                else {
                    var /** @type {?} */ offsetParentEl = this.offsetParent(element);
                    elPosition = this.offset(element, false);
                    if (offsetParentEl !== document.documentElement) {
                        parentOffset = this.offset(offsetParentEl, false);
                    }
                    parentOffset.top += offsetParentEl.clientTop;
                    parentOffset.left += offsetParentEl.clientLeft;
                }
                elPosition.top -= parentOffset.top;
                elPosition.bottom -= parentOffset.top;
                elPosition.left -= parentOffset.left;
                elPosition.right -= parentOffset.left;
                if (round) {
                    elPosition.top = Math.round(elPosition.top);
                    elPosition.bottom = Math.round(elPosition.bottom);
                    elPosition.left = Math.round(elPosition.left);
                    elPosition.right = Math.round(elPosition.right);
                }
                return elPosition;
            };
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.offset = /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
            function (element, round) {
                if (round === void 0) {
                    round = true;
                }
                var /** @type {?} */ elBcr = element.getBoundingClientRect();
                var /** @type {?} */ viewportOffset = {
                    top: window.pageYOffset - document.documentElement.clientTop,
                    left: window.pageXOffset - document.documentElement.clientLeft
                };
                var /** @type {?} */ elOffset = {
                    height: elBcr.height || element.offsetHeight,
                    width: elBcr.width || element.offsetWidth,
                    top: elBcr.top + viewportOffset.top,
                    bottom: elBcr.bottom + viewportOffset.top,
                    left: elBcr.left + viewportOffset.left,
                    right: elBcr.right + viewportOffset.left
                };
                if (round) {
                    elOffset.height = Math.round(elOffset.height);
                    elOffset.width = Math.round(elOffset.width);
                    elOffset.top = Math.round(elOffset.top);
                    elOffset.bottom = Math.round(elOffset.bottom);
                    elOffset.left = Math.round(elOffset.left);
                    elOffset.right = Math.round(elOffset.right);
                }
                return elOffset;
            };
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} placement
         * @param {?=} appendToBody
         * @return {?}
         */
        Positioning.prototype.positionElements = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} placement
         * @param {?=} appendToBody
         * @return {?}
         */
            function (hostElement, targetElement, placement, appendToBody) {
                var /** @type {?} */ hostElPosition = appendToBody
                    ? this.offset(hostElement, false)
                    : this.position(hostElement, false);
                var /** @type {?} */ targetElStyles = this.getAllStyles(targetElement);
                var /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
                var /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
                var /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
                var /** @type {?} */ targetElPosition = {
                    height: targetElBCR.height || targetElement.offsetHeight,
                    width: targetElBCR.width || targetElement.offsetWidth,
                    top: 0,
                    bottom: targetElBCR.height || targetElement.offsetHeight,
                    left: 0,
                    right: targetElBCR.width || targetElement.offsetWidth
                };
                var /** @type {?} */ shiftHeight = {
                    top: hostElPosition.top,
                    center: hostElPosition.top +
                        hostElPosition.height / 2 -
                        targetElPosition.height / 2,
                    bottom: hostElPosition.top + hostElPosition.height
                };
                var /** @type {?} */ shiftWidth = {
                    left: hostElPosition.left,
                    center: hostElPosition.left +
                        hostElPosition.width / 2 -
                        targetElPosition.width / 2,
                    right: hostElPosition.left + hostElPosition.width
                };
                if (placementPrimary === 'auto') {
                    var /** @type {?} */ newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
                    if (!newPlacementPrimary)
                        newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
                    if (newPlacementPrimary)
                        placementPrimary = newPlacementPrimary;
                    targetElement.classList.add(placementPrimary);
                }
                switch (placementPrimary) {
                    case 'top':
                        targetElPosition.top =
                            hostElPosition.top -
                                (targetElPosition.height +
                                    parseFloat(targetElStyles.marginBottom));
                        targetElPosition.bottom +=
                            hostElPosition.top - targetElPosition.height;
                        targetElPosition.left = shiftWidth[placementSecondary];
                        targetElPosition.right += shiftWidth[placementSecondary];
                        break;
                    case 'bottom':
                        targetElPosition.top = shiftHeight[placementPrimary];
                        targetElPosition.bottom += shiftHeight[placementPrimary];
                        targetElPosition.left = shiftWidth[placementSecondary];
                        targetElPosition.right += shiftWidth[placementSecondary];
                        break;
                    case 'left':
                        targetElPosition.top = shiftHeight[placementSecondary];
                        targetElPosition.bottom += shiftHeight[placementSecondary];
                        targetElPosition.left =
                            hostElPosition.left -
                                (targetElPosition.width + parseFloat(targetElStyles.marginRight));
                        targetElPosition.right +=
                            hostElPosition.left - targetElPosition.width;
                        break;
                    case 'right':
                        targetElPosition.top = shiftHeight[placementSecondary];
                        targetElPosition.bottom += shiftHeight[placementSecondary];
                        targetElPosition.left = shiftWidth[placementPrimary];
                        targetElPosition.right += shiftWidth[placementPrimary];
                        break;
                }
                targetElPosition.top = Math.round(targetElPosition.top);
                targetElPosition.bottom = Math.round(targetElPosition.bottom);
                targetElPosition.left = Math.round(targetElPosition.left);
                targetElPosition.right = Math.round(targetElPosition.right);
                return targetElPosition;
            };
        /**
         * @param {?} targetElPosition
         * @param {?} hostElPosition
         * @param {?} targetElement
         * @param {?=} preferredPosition
         * @return {?}
         */
        Positioning.prototype.autoPosition = /**
         * @param {?} targetElPosition
         * @param {?} hostElPosition
         * @param {?} targetElement
         * @param {?=} preferredPosition
         * @return {?}
         */
            function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
                if ((!preferredPosition || preferredPosition === 'right') &&
                    targetElPosition.left + hostElPosition.left - targetElPosition.width <
                        0) {
                    return 'right';
                }
                else if ((!preferredPosition || preferredPosition === 'top') &&
                    targetElPosition.bottom +
                        hostElPosition.bottom +
                        targetElPosition.height >
                        window.innerHeight) {
                    return 'top';
                }
                else if ((!preferredPosition || preferredPosition === 'bottom') &&
                    targetElPosition.top + hostElPosition.top - targetElPosition.height < 0) {
                    return 'bottom';
                }
                else if ((!preferredPosition || preferredPosition === 'left') &&
                    targetElPosition.right +
                        hostElPosition.right +
                        targetElPosition.width >
                        window.innerWidth) {
                    return 'left';
                }
                return null;
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.getAllStyles = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return window.getComputedStyle(element);
            };
        /**
         * @param {?} element
         * @param {?} prop
         * @return {?}
         */
        Positioning.prototype.getStyle = /**
         * @param {?} element
         * @param {?} prop
         * @return {?}
         */
            function (element, prop) {
                return ((this.getAllStyles(element)))[prop];
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.isStaticPositioned = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return (this.getStyle(element, 'position') || 'static') === 'static';
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.offsetParent = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var /** @type {?} */ offsetParentEl = (element.offsetParent) || document.documentElement;
                while (offsetParentEl &&
                    offsetParentEl !== document.documentElement &&
                    this.isStaticPositioned(offsetParentEl)) {
                    offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
                }
                return offsetParentEl || document.documentElement;
            };
        return Positioning;
    }());
    var /** @type {?} */ positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    function positionElements(hostElement, targetElement, placement, appendToBody) {
        var /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
        targetElement.style.top = pos.top + "px";
        targetElement.style.left = pos.left + "px";
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PositioningService = (function () {
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
            { type: core.Injectable }
        ];
        return PositioningService;
    }());
    /**
     * @param {?} element
     * @return {?}
     */
    function _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof core.ElementRef) {
            return element.nativeElement;
        }
        return element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.positionElements = positionElements;
    exports.Positioning = Positioning;
    exports.PositioningService = PositioningService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3NpdGlvbmluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbmctcG9zaXRpb25pbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbi8vIHByZXZpb3VzIHZlcnNpb246XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS9ib290c3RyYXAvYmxvYi8wN2MzMWQwNzMxZjdjYjA2OGExOTMyYjhlMDFkMjMxMmI3OTZiNGVjL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi5qc1xuLy8gdHNsaW50OmRpc2FibGVcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHB1YmxpYyBwb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogQ2xpZW50UmVjdCB7XG4gICAgbGV0IGVsUG9zaXRpb246IENsaWVudFJlY3Q7XG4gICAgbGV0IHBhcmVudE9mZnNldDogQ2xpZW50UmVjdCA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmdldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICBjb25zdCBiY1JlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgZWxQb3NpdGlvbiA9IHtcbiAgICAgICAgd2lkdGg6IGJjUmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBiY1JlY3QuaGVpZ2h0LFxuICAgICAgICB0b3A6IGJjUmVjdC50b3AsXG4gICAgICAgIGJvdHRvbTogYmNSZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdDogYmNSZWN0LmxlZnQsXG4gICAgICAgIHJpZ2h0OiBiY1JlY3QucmlnaHRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9mZnNldFBhcmVudEVsID0gdGhpcy5vZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICAgIGVsUG9zaXRpb24gPSB0aGlzLm9mZnNldChlbGVtZW50LCBmYWxzZSk7XG5cbiAgICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudE9mZnNldCA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE9mZnNldC50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wO1xuICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50TGVmdDtcbiAgICB9XG5cbiAgICBlbFBvc2l0aW9uLnRvcCAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGVsUG9zaXRpb24uYm90dG9tIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgZWxQb3NpdGlvbi5sZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuICAgIGVsUG9zaXRpb24ucmlnaHQgLT0gcGFyZW50T2Zmc2V0LmxlZnQ7XG5cbiAgICBpZiAocm91bmQpIHtcbiAgICAgIGVsUG9zaXRpb24udG9wID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLnRvcCk7XG4gICAgICBlbFBvc2l0aW9uLmJvdHRvbSA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi5ib3R0b20pO1xuICAgICAgZWxQb3NpdGlvbi5sZWZ0ID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLmxlZnQpO1xuICAgICAgZWxQb3NpdGlvbi5yaWdodCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi5yaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsUG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgb2Zmc2V0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBDbGllbnRSZWN0IHtcbiAgICBjb25zdCBlbEJjciA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgdmlld3BvcnRPZmZzZXQgPSB7XG4gICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4gICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICAgIH07XG5cbiAgICBsZXQgZWxPZmZzZXQgPSB7XG4gICAgICBoZWlnaHQ6IGVsQmNyLmhlaWdodCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiBlbEJjci53aWR0aCB8fCBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgdG9wOiBlbEJjci50b3AgKyB2aWV3cG9ydE9mZnNldC50b3AsXG4gICAgICBib3R0b206IGVsQmNyLmJvdHRvbSArIHZpZXdwb3J0T2Zmc2V0LnRvcCxcbiAgICAgIGxlZnQ6IGVsQmNyLmxlZnQgKyB2aWV3cG9ydE9mZnNldC5sZWZ0LFxuICAgICAgcmlnaHQ6IGVsQmNyLnJpZ2h0ICsgdmlld3BvcnRPZmZzZXQubGVmdFxuICAgIH07XG5cbiAgICBpZiAocm91bmQpIHtcbiAgICAgIGVsT2Zmc2V0LmhlaWdodCA9IE1hdGgucm91bmQoZWxPZmZzZXQuaGVpZ2h0KTtcbiAgICAgIGVsT2Zmc2V0LndpZHRoID0gTWF0aC5yb3VuZChlbE9mZnNldC53aWR0aCk7XG4gICAgICBlbE9mZnNldC50b3AgPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LnRvcCk7XG4gICAgICBlbE9mZnNldC5ib3R0b20gPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LmJvdHRvbSk7XG4gICAgICBlbE9mZnNldC5sZWZ0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5sZWZ0KTtcbiAgICAgIGVsT2Zmc2V0LnJpZ2h0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5yaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsT2Zmc2V0O1xuICB9XG5cbiAgcHVibGljIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHBsYWNlbWVudDogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW5cbiAgKTogQ2xpZW50UmVjdCB7XG4gICAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBhcHBlbmRUb0JvZHlcbiAgICAgID8gdGhpcy5vZmZzZXQoaG9zdEVsZW1lbnQsIGZhbHNlKVxuICAgICAgOiB0aGlzLnBvc2l0aW9uKGhvc3RFbGVtZW50LCBmYWxzZSk7XG4gICAgY29uc3QgdGFyZ2V0RWxTdHlsZXMgPSB0aGlzLmdldEFsbFN0eWxlcyh0YXJnZXRFbGVtZW50KTtcbiAgICBjb25zdCB0YXJnZXRFbEJDUiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHBsYWNlbWVudFByaW1hcnkgPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVswXSB8fCAndG9wJztcbiAgICBjb25zdCBwbGFjZW1lbnRTZWNvbmRhcnkgPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnY2VudGVyJztcblxuICAgIGxldCB0YXJnZXRFbFBvc2l0aW9uOiBDbGllbnRSZWN0ID0ge1xuICAgICAgaGVpZ2h0OiB0YXJnZXRFbEJDUi5oZWlnaHQgfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogdGFyZ2V0RWxCQ1Iud2lkdGggfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogdGFyZ2V0RWxCQ1IuaGVpZ2h0IHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiB0YXJnZXRFbEJDUi53aWR0aCB8fCB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgfTtcblxuICAgIGNvbnN0IHNoaWZ0SGVpZ2h0OiBhbnkgPSB7XG4gICAgICB0b3A6IGhvc3RFbFBvc2l0aW9uLnRvcCxcbiAgICAgIGNlbnRlcjpcbiAgICAgICAgaG9zdEVsUG9zaXRpb24udG9wICtcbiAgICAgICAgaG9zdEVsUG9zaXRpb24uaGVpZ2h0IC8gMiAtXG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uaGVpZ2h0IC8gMixcbiAgICAgIGJvdHRvbTogaG9zdEVsUG9zaXRpb24udG9wICsgaG9zdEVsUG9zaXRpb24uaGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzaGlmdFdpZHRoOiBhbnkgPSB7XG4gICAgICBsZWZ0OiBob3N0RWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgY2VudGVyOlxuICAgICAgICBob3N0RWxQb3NpdGlvbi5sZWZ0ICtcbiAgICAgICAgaG9zdEVsUG9zaXRpb24ud2lkdGggLyAyIC1cbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi53aWR0aCAvIDIsXG4gICAgICByaWdodDogaG9zdEVsUG9zaXRpb24ubGVmdCArIGhvc3RFbFBvc2l0aW9uLndpZHRoXG4gICAgfTsgICAgXG5cbiAgICBpZiAocGxhY2VtZW50UHJpbWFyeSA9PT0gJ2F1dG8nKSB7XG4gICAgICBsZXQgbmV3UGxhY2VtZW50UHJpbWFyeSA9IHRoaXMuYXV0b1Bvc2l0aW9uKFxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLFxuICAgICAgICBob3N0RWxQb3NpdGlvbixcbiAgICAgICAgdGFyZ2V0RWxlbWVudCxcbiAgICAgICAgcGxhY2VtZW50U2Vjb25kYXJ5XG4gICAgICApO1xuICAgICAgaWYgKCFuZXdQbGFjZW1lbnRQcmltYXJ5KVxuICAgICAgICBuZXdQbGFjZW1lbnRQcmltYXJ5ID0gdGhpcy5hdXRvUG9zaXRpb24oXG4gICAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbixcbiAgICAgICAgICBob3N0RWxQb3NpdGlvbixcbiAgICAgICAgICB0YXJnZXRFbGVtZW50XG4gICAgICAgICk7XG4gICAgICBpZiAobmV3UGxhY2VtZW50UHJpbWFyeSkgcGxhY2VtZW50UHJpbWFyeSA9IG5ld1BsYWNlbWVudFByaW1hcnk7XG4gICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQocGxhY2VtZW50UHJpbWFyeSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChwbGFjZW1lbnRQcmltYXJ5KSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9XG4gICAgICAgICAgaG9zdEVsUG9zaXRpb24udG9wIC1cbiAgICAgICAgICAodGFyZ2V0RWxQb3NpdGlvbi5oZWlnaHQgK1xuICAgICAgICAgICAgcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5Cb3R0b20pKTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz1cbiAgICAgICAgICBob3N0RWxQb3NpdGlvbi50b3AgLSB0YXJnZXRFbFBvc2l0aW9uLmhlaWdodDtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gc2hpZnRXaWR0aFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRQcmltYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gc2hpZnRXaWR0aFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPVxuICAgICAgICAgIGhvc3RFbFBvc2l0aW9uLmxlZnQgLVxuICAgICAgICAgICh0YXJnZXRFbFBvc2l0aW9uLndpZHRoICsgcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5SaWdodCkpO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9XG4gICAgICAgICAgaG9zdEVsUG9zaXRpb24ubGVmdCAtIHRhcmdldEVsUG9zaXRpb24ud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICs9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IHNoaWZ0V2lkdGhbcGxhY2VtZW50UHJpbWFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgKz0gc2hpZnRXaWR0aFtwbGFjZW1lbnRQcmltYXJ5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBNYXRoLnJvdW5kKHRhcmdldEVsUG9zaXRpb24udG9wKTtcbiAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20pO1xuICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5sZWZ0KTtcbiAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0KTtcblxuICAgIHJldHVybiB0YXJnZXRFbFBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBhdXRvUG9zaXRpb24oXG4gICAgdGFyZ2V0RWxQb3NpdGlvbjogQ2xpZW50UmVjdCxcbiAgICBob3N0RWxQb3NpdGlvbjogQ2xpZW50UmVjdCxcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcmVmZXJyZWRQb3NpdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAoXG4gICAgICAoIXByZWZlcnJlZFBvc2l0aW9uIHx8IHByZWZlcnJlZFBvc2l0aW9uID09PSAncmlnaHQnKSAmJlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ICsgaG9zdEVsUG9zaXRpb24ubGVmdCAtIHRhcmdldEVsUG9zaXRpb24ud2lkdGggPFxuICAgICAgICAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCFwcmVmZXJyZWRQb3NpdGlvbiB8fCBwcmVmZXJyZWRQb3NpdGlvbiA9PT0gJ3RvcCcpICYmXG4gICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArXG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLmJvdHRvbSArXG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uaGVpZ2h0ID5cbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0XG4gICAgKSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICghcHJlZmVycmVkUG9zaXRpb24gfHwgcHJlZmVycmVkUG9zaXRpb24gPT09ICdib3R0b20nKSAmJlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgKyBob3N0RWxQb3NpdGlvbi50b3AgLSB0YXJnZXRFbFBvc2l0aW9uLmhlaWdodCA8IDBcbiAgICApIHtcbiAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCFwcmVmZXJyZWRQb3NpdGlvbiB8fCBwcmVmZXJyZWRQb3NpdGlvbiA9PT0gJ2xlZnQnKSAmJlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArXG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLnJpZ2h0ICtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi53aWR0aCA+XG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgKSB7XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0QWxsU3R5bGVzKGVsZW1lbnQpIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBwcml2YXRlIGlzU3RhdGljUG9zaXRpb25lZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5nZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xuICB9XG5cbiAgcHJpdmF0ZSBvZmZzZXRQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IG9mZnNldFBhcmVudEVsID1cbiAgICAgIDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAoXG4gICAgICBvZmZzZXRQYXJlbnRFbCAmJlxuICAgICAgb2Zmc2V0UGFyZW50RWwgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50RWwpXG4gICAgKSB7XG4gICAgICBvZmZzZXRQYXJlbnRFbCA9IDxIVE1MRWxlbWVudD5vZmZzZXRQYXJlbnRFbC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFBhcmVudEVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgcG9zID0gcG9zaXRpb25TZXJ2aWNlLnBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudCxcbiAgICBwbGFjZW1lbnQsXG4gICAgYXBwZW5kVG9Cb2R5XG4gICk7XG5cbiAgdGFyZ2V0RWxlbWVudC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgdGFyZ2V0RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcG9zaXRpb25FbGVtZW50cyB9IGZyb20gJy4vbmctcG9zaXRpb25pbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBtb3ZlZCAqL1xuICBlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byAgKi9cbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1hdHRhY2htZW50IGhvcml6LWF0dGFjaG1lbnQnIG9yICdwbGFjZW1lbnQnXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqIG5vdCB5ZXQgc3VwcG9ydGVkOlxuICAgKiAtIHZlcnQtYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbSdcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xuICAgKi9cbiAgYXR0YWNobWVudD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgYXR0YWNobWVudGAuIFRoZSBvbmUgZGlmZmVyZW5jZSBpcyB0aGF0LCBpZiBpdCdzIG5vdCBwcm92aWRlZCxcbiAgICogYHRhcmdldEF0dGFjaG1lbnRgIHdpbGwgYXNzdW1lIHRoZSBtaXJyb3IgaW1hZ2Ugb2YgYGF0dGFjaG1lbnRgLlxuICAgKi9cbiAgdGFyZ2V0QXR0YWNobWVudD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcbiAgICogLSB2ZXJ0LW9mZnNldCBhbmQgaG9yaXotb2Zmc2V0IGNhbiBiZSBvZiB0aGUgZm9ybSBcIjIwcHhcIiBvciBcIjU1JVwiXG4gICAqL1xuICBvZmZzZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYG9mZnNldGAsIGJ1dCByZWZlcnJpbmcgdG8gdGhlIG9mZnNldCBvZiB0aGUgdGFyZ2V0ICovXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcblxuICAvKiogSWYgdHJ1ZSBjb21wb25lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byBib2R5ICovXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICBwb3NpdGlvbihvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCB7ZWxlbWVudCwgdGFyZ2V0LCBhdHRhY2htZW50LCBhcHBlbmRUb0JvZHl9ID0gb3B0aW9ucztcbiAgICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgX2dldEh0bWxFbGVtZW50KHRhcmdldCksXG4gICAgICBfZ2V0SHRtbEVsZW1lbnQoZWxlbWVudCksXG4gICAgICBhdHRhY2htZW50LFxuICAgICAgYXBwZW5kVG9Cb2R5XG4gICAgKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gIC8vIGl0IG1lYW5zIHRoYXQgd2UgZ290IGEgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50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