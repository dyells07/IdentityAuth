import { Injectable, ElementRef } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Positioning {
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    position(element, round = true) {
        let /** @type {?} */ elPosition;
        let /** @type {?} */ parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            const /** @type {?} */ bcRect = element.getBoundingClientRect();
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
            const /** @type {?} */ offsetParentEl = this.offsetParent(element);
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
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    offset(element, round = true) {
        const /** @type {?} */ elBcr = element.getBoundingClientRect();
        const /** @type {?} */ viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        let /** @type {?} */ elOffset = {
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
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    positionElements(hostElement, targetElement, placement, appendToBody) {
        const /** @type {?} */ hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        const /** @type {?} */ targetElStyles = this.getAllStyles(targetElement);
        const /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
        let /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
        const /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
        let /** @type {?} */ targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        const /** @type {?} */ shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElPosition.height / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        const /** @type {?} */ shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElPosition.width / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        if (placementPrimary === 'auto') {
            let /** @type {?} */ newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
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
    }
    /**
     * @param {?} targetElPosition
     * @param {?} hostElPosition
     * @param {?} targetElement
     * @param {?=} preferredPosition
     * @return {?}
     */
    autoPosition(targetElPosition, hostElPosition, targetElement, preferredPosition) {
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
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getAllStyles(element) {
        return window.getComputedStyle(element);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    getStyle(element, prop) {
        return (/** @type {?} */ (this.getAllStyles(element)))[prop];
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isStaticPositioned(element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    offsetParent(element) {
        let /** @type {?} */ offsetParentEl = /** @type {?} */ (element.offsetParent) || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    }
}
const /** @type {?} */ positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    const /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = `${pos.top}px`;
    targetElement.style.left = `${pos.left}px`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PositioningService {
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        const { element, target, attachment, appendToBody } = options;
        positionElements(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { positionElements, Positioning, PositioningService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3NpdGlvbmluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cblxuLy8gcHJldmlvdXMgdmVyc2lvbjpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL2Jvb3RzdHJhcC9ibG9iLzA3YzMxZDA3MzFmN2NiMDY4YTE5MzJiOGUwMWQyMzEyYjc5NmI0ZWMvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLmpzXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcHVibGljIHBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBDbGllbnRSZWN0IHtcbiAgICBsZXQgZWxQb3NpdGlvbjogQ2xpZW50UmVjdDtcbiAgICBsZXQgcGFyZW50T2Zmc2V0OiBDbGllbnRSZWN0ID0ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDBcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZ2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICAgIGNvbnN0IGJjUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBlbFBvc2l0aW9uID0ge1xuICAgICAgICB3aWR0aDogYmNSZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJjUmVjdC5oZWlnaHQsXG4gICAgICAgIHRvcDogYmNSZWN0LnRvcCxcbiAgICAgICAgYm90dG9tOiBiY1JlY3QuYm90dG9tLFxuICAgICAgICBsZWZ0OiBiY1JlY3QubGVmdCxcbiAgICAgICAgcmlnaHQ6IGJjUmVjdC5yaWdodFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLm9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICAgICAgZWxQb3NpdGlvbiA9IHRoaXMub2Zmc2V0KGVsZW1lbnQsIGZhbHNlKTtcblxuICAgICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50T2Zmc2V0ID0gdGhpcy5vZmZzZXQob2Zmc2V0UGFyZW50RWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50T2Zmc2V0LnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3A7XG4gICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0O1xuICAgIH1cblxuICAgIGVsUG9zaXRpb24udG9wIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgZWxQb3NpdGlvbi5ib3R0b20gLT0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICBlbFBvc2l0aW9uLmxlZnQgLT0gcGFyZW50T2Zmc2V0LmxlZnQ7XG4gICAgZWxQb3NpdGlvbi5yaWdodCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcblxuICAgIGlmIChyb3VuZCkge1xuICAgICAgZWxQb3NpdGlvbi50b3AgPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24udG9wKTtcbiAgICAgIGVsUG9zaXRpb24uYm90dG9tID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLmJvdHRvbSk7XG4gICAgICBlbFBvc2l0aW9uLmxlZnQgPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24ubGVmdCk7XG4gICAgICBlbFBvc2l0aW9uLnJpZ2h0ID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLnJpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBvZmZzZXQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IENsaWVudFJlY3Qge1xuICAgIGNvbnN0IGVsQmNyID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB2aWV3cG9ydE9mZnNldCA9IHtcbiAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0XG4gICAgfTtcblxuICAgIGxldCBlbE9mZnNldCA9IHtcbiAgICAgIGhlaWdodDogZWxCY3IuaGVpZ2h0IHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IGVsQmNyLndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICB0b3A6IGVsQmNyLnRvcCArIHZpZXdwb3J0T2Zmc2V0LnRvcCxcbiAgICAgIGJvdHRvbTogZWxCY3IuYm90dG9tICsgdmlld3BvcnRPZmZzZXQudG9wLFxuICAgICAgbGVmdDogZWxCY3IubGVmdCArIHZpZXdwb3J0T2Zmc2V0LmxlZnQsXG4gICAgICByaWdodDogZWxCY3IucmlnaHQgKyB2aWV3cG9ydE9mZnNldC5sZWZ0XG4gICAgfTtcblxuICAgIGlmIChyb3VuZCkge1xuICAgICAgZWxPZmZzZXQuaGVpZ2h0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5oZWlnaHQpO1xuICAgICAgZWxPZmZzZXQud2lkdGggPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LndpZHRoKTtcbiAgICAgIGVsT2Zmc2V0LnRvcCA9IE1hdGgucm91bmQoZWxPZmZzZXQudG9wKTtcbiAgICAgIGVsT2Zmc2V0LmJvdHRvbSA9IE1hdGgucm91bmQoZWxPZmZzZXQuYm90dG9tKTtcbiAgICAgIGVsT2Zmc2V0LmxlZnQgPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LmxlZnQpO1xuICAgICAgZWxPZmZzZXQucmlnaHQgPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LnJpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxPZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcGxhY2VtZW50OiBzdHJpbmcsXG4gICAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhblxuICApOiBDbGllbnRSZWN0IHtcbiAgICBjb25zdCBob3N0RWxQb3NpdGlvbiA9IGFwcGVuZFRvQm9keVxuICAgICAgPyB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgZmFsc2UpXG4gICAgICA6IHRoaXMucG9zaXRpb24oaG9zdEVsZW1lbnQsIGZhbHNlKTtcbiAgICBjb25zdCB0YXJnZXRFbFN0eWxlcyA9IHRoaXMuZ2V0QWxsU3R5bGVzKHRhcmdldEVsZW1lbnQpO1xuICAgIGNvbnN0IHRhcmdldEVsQkNSID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcGxhY2VtZW50UHJpbWFyeSA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdIHx8ICd0b3AnO1xuICAgIGNvbnN0IHBsYWNlbWVudFNlY29uZGFyeSA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdIHx8ICdjZW50ZXInO1xuXG4gICAgbGV0IHRhcmdldEVsUG9zaXRpb246IENsaWVudFJlY3QgPSB7XG4gICAgICBoZWlnaHQ6IHRhcmdldEVsQkNSLmhlaWdodCB8fCB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiB0YXJnZXRFbEJDUi53aWR0aCB8fCB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiB0YXJnZXRFbEJDUi5oZWlnaHQgfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IHRhcmdldEVsQkNSLndpZHRoIHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcbiAgICAgIHRvcDogaG9zdEVsUG9zaXRpb24udG9wLFxuICAgICAgY2VudGVyOlxuICAgICAgICBob3N0RWxQb3NpdGlvbi50b3AgK1xuICAgICAgICBob3N0RWxQb3NpdGlvbi5oZWlnaHQgLyAyIC1cbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5oZWlnaHQgLyAyLFxuICAgICAgYm90dG9tOiBob3N0RWxQb3NpdGlvbi50b3AgKyBob3N0RWxQb3NpdGlvbi5oZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHNoaWZ0V2lkdGg6IGFueSA9IHtcbiAgICAgIGxlZnQ6IGhvc3RFbFBvc2l0aW9uLmxlZnQsXG4gICAgICBjZW50ZXI6XG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLmxlZnQgK1xuICAgICAgICBob3N0RWxQb3NpdGlvbi53aWR0aCAvIDIgLVxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLndpZHRoIC8gMixcbiAgICAgIHJpZ2h0OiBob3N0RWxQb3NpdGlvbi5sZWZ0ICsgaG9zdEVsUG9zaXRpb24ud2lkdGhcbiAgICB9OyAgICBcblxuICAgIGlmIChwbGFjZW1lbnRQcmltYXJ5ID09PSAnYXV0bycpIHtcbiAgICAgIGxldCBuZXdQbGFjZW1lbnRQcmltYXJ5ID0gdGhpcy5hdXRvUG9zaXRpb24oXG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24sXG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLFxuICAgICAgICB0YXJnZXRFbGVtZW50LFxuICAgICAgICBwbGFjZW1lbnRTZWNvbmRhcnlcbiAgICAgICk7XG4gICAgICBpZiAoIW5ld1BsYWNlbWVudFByaW1hcnkpXG4gICAgICAgIG5ld1BsYWNlbWVudFByaW1hcnkgPSB0aGlzLmF1dG9Qb3NpdGlvbihcbiAgICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLFxuICAgICAgICAgIGhvc3RFbFBvc2l0aW9uLFxuICAgICAgICAgIHRhcmdldEVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIGlmIChuZXdQbGFjZW1lbnRQcmltYXJ5KSBwbGFjZW1lbnRQcmltYXJ5ID0gbmV3UGxhY2VtZW50UHJpbWFyeTtcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChwbGFjZW1lbnRQcmltYXJ5KTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHBsYWNlbWVudFByaW1hcnkpIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID1cbiAgICAgICAgICBob3N0RWxQb3NpdGlvbi50b3AgLVxuICAgICAgICAgICh0YXJnZXRFbFBvc2l0aW9uLmhlaWdodCArXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHRhcmdldEVsU3R5bGVzLm1hcmdpbkJvdHRvbSkpO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArPVxuICAgICAgICAgIGhvc3RFbFBvc2l0aW9uLnRvcCAtIHRhcmdldEVsUG9zaXRpb24uaGVpZ2h0O1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgKz0gc2hpZnRXaWR0aFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gc2hpZnRIZWlnaHRbcGxhY2VtZW50UHJpbWFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICs9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgKz0gc2hpZnRXaWR0aFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICs9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9XG4gICAgICAgICAgaG9zdEVsUG9zaXRpb24ubGVmdCAtXG4gICAgICAgICAgKHRhcmdldEVsUG9zaXRpb24ud2lkdGggKyBwYXJzZUZsb2F0KHRhcmdldEVsU3R5bGVzLm1hcmdpblJpZ2h0KSk7XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgKz1cbiAgICAgICAgICBob3N0RWxQb3NpdGlvbi5sZWZ0IC0gdGFyZ2V0RWxQb3NpdGlvbi53aWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gc2hpZnRXaWR0aFtwbGFjZW1lbnRQcmltYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArPSBzaGlmdFdpZHRoW3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi50b3ApO1xuICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSk7XG4gICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLmxlZnQpO1xuICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgPSBNYXRoLnJvdW5kKHRhcmdldEVsUG9zaXRpb24ucmlnaHQpO1xuXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIGF1dG9Qb3NpdGlvbihcbiAgICB0YXJnZXRFbFBvc2l0aW9uOiBDbGllbnRSZWN0LFxuICAgIGhvc3RFbFBvc2l0aW9uOiBDbGllbnRSZWN0LFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByZWZlcnJlZFBvc2l0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChcbiAgICAgICghcHJlZmVycmVkUG9zaXRpb24gfHwgcHJlZmVycmVkUG9zaXRpb24gPT09ICdyaWdodCcpICYmXG4gICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgKyBob3N0RWxQb3NpdGlvbi5sZWZ0IC0gdGFyZ2V0RWxQb3NpdGlvbi53aWR0aCA8XG4gICAgICAgIDBcbiAgICApIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoIXByZWZlcnJlZFBvc2l0aW9uIHx8IHByZWZlcnJlZFBvc2l0aW9uID09PSAndG9wJykgJiZcbiAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICtcbiAgICAgICAgaG9zdEVsUG9zaXRpb24uYm90dG9tICtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5oZWlnaHQgPlxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICApIHtcbiAgICAgIHJldHVybiAndG9wJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCFwcmVmZXJyZWRQb3NpdGlvbiB8fCBwcmVmZXJyZWRQb3NpdGlvbiA9PT0gJ2JvdHRvbScpICYmXG4gICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCArIGhvc3RFbFBvc2l0aW9uLnRvcCAtIHRhcmdldEVsUG9zaXRpb24uaGVpZ2h0IDwgMFxuICAgICkge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoIXByZWZlcnJlZFBvc2l0aW9uIHx8IHByZWZlcnJlZFBvc2l0aW9uID09PSAnbGVmdCcpICYmXG4gICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICtcbiAgICAgICAgaG9zdEVsUG9zaXRpb24ucmlnaHQgK1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLndpZHRoID5cbiAgICAgICAgd2luZG93LmlubmVyV2lkdGhcbiAgICApIHtcbiAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbGxTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0eWxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5nZXRBbGxTdHlsZXMoZWxlbWVudCkgYXMgYW55KVtwcm9wXTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTdGF0aWNQb3NpdGlvbmVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XG4gIH1cblxuICBwcml2YXRlIG9mZnNldFBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBsZXQgb2Zmc2V0UGFyZW50RWwgPVxuICAgICAgPEhUTUxFbGVtZW50PmVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChcbiAgICAgIG9mZnNldFBhcmVudEVsICYmXG4gICAgICBvZmZzZXRQYXJlbnRFbCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnRFbClcbiAgICApIHtcbiAgICAgIG9mZnNldFBhcmVudEVsID0gPEhUTUxFbGVtZW50Pm9mZnNldFBhcmVudEVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50RWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCBwb3MgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50LFxuICAgIHBsYWNlbWVudCxcbiAgICBhcHBlbmRUb0JvZHlcbiAgKTtcblxuICB0YXJnZXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICB0YXJnZXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdPcHRpb25zIHtcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXG4gIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LWF0dGFjaG1lbnQgaG9yaXotYXR0YWNobWVudCcgb3IgJ3BsYWNlbWVudCdcbiAgICogLSBwbGFjZW1lbnQgY2FuIGJlIFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XG4gICAqIC0gdmVydC1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ1xuICAgKiAtIGhvcml6LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXG4gICAqL1xuICBhdHRhY2htZW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxuICAgKiBgdGFyZ2V0QXR0YWNobWVudGAgd2lsbCBhc3N1bWUgdGhlIG1pcnJvciBpbWFnZSBvZiBgYXR0YWNobWVudGAuXG4gICAqL1xuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1vZmZzZXQgaG9yaXotb2Zmc2V0J1xuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcbiAgICovXG4gIG9mZnNldD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgb2Zmc2V0YCwgYnV0IHJlZmVycmluZyB0byB0aGUgb2Zmc2V0IG9mIHRoZSB0YXJnZXQgKi9cbiAgdGFyZ2V0T2Zmc2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBJZiB0cnVlIGNvbXBvbmVudCB3aWxsIGJlIGF0dGFjaGVkIHRvIGJvZHkgKi9cbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IHtlbGVtZW50LCB0YXJnZXQsIGF0dGFjaG1lbnQsIGFwcGVuZFRvQm9keX0gPSBvcHRpb25zO1xuICAgIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICBfZ2V0SHRtbEVsZW1lbnQodGFyZ2V0KSxcbiAgICAgIF9nZXRIdG1sRWxlbWVudChlbGVtZW50KSxcbiAgICAgIGF0dGFjaG1lbnQsXG4gICAgICBhcHBlbmRUb0JvZHlcbiAgICApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gX2dldEh0bWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59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