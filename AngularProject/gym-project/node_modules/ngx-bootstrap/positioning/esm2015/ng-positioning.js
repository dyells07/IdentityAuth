/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
export class Positioning {
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
export function positionElements(hostElement, targetElement, placement, appendToBody) {
    const /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = `${pos.top}px`;
    targetElement.style.left = `${pos.left}px`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSxNQUFNOzs7Ozs7SUFDRyxRQUFRLENBQUMsT0FBb0IsRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUNoRCxxQkFBSSxVQUFzQixDQUFDO1FBQzNCLHFCQUFJLFlBQVksR0FBZTtZQUM3QixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1lBQ1QsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuRCx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0MsVUFBVSxHQUFHO2dCQUNYLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUNyQixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUNwQixDQUFDO1NBQ0g7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLHVCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV6QyxFQUFFLENBQUMsQ0FBQyxjQUFj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O1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFDdkMsQ0FBQztZQUNELGNBQWMscUJBQWdCLGNBQWMsQ0FBQyxZQUFZLENBQUEsQ0FBQztTQUMzRDtRQUVELE1BQU0sQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQzs7Q0FFckQ7QUFFRCx1QkFBTSxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7QUFFMUMsTUFBTSwyQkFDSixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQjtJQUV0Qix1QkFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMxQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLENBQ2IsQ0FBQztJQUVGLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0NBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cbiAqL1xuXG4vLyBwcmV2aW91cyB2ZXJzaW9uOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvYm9vdHN0cmFwL2Jsb2IvMDdjMzFkMDczMWY3Y2IwNjhhMTkzMmI4ZTAxZDIzMTJiNzk2YjRlYy9zcmMvcG9zaXRpb24vcG9zaXRpb24uanNcbi8vIHRzbGludDpkaXNhYmxlXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwdWJsaWMgcG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IENsaWVudFJlY3Qge1xuICAgIGxldCBlbFBvc2l0aW9uOiBDbGllbnRSZWN0O1xuICAgIGxldCBwYXJlbnRPZmZzZXQ6IENsaWVudFJlY3QgPSB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5nZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgY29uc3QgYmNSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGVsUG9zaXRpb24gPSB7XG4gICAgICAgIHdpZHRoOiBiY1JlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogYmNSZWN0LmhlaWdodCxcbiAgICAgICAgdG9wOiBiY1JlY3QudG9wLFxuICAgICAgICBib3R0b206IGJjUmVjdC5ib3R0b20sXG4gICAgICAgIGxlZnQ6IGJjUmVjdC5sZWZ0LFxuICAgICAgICByaWdodDogYmNSZWN0LnJpZ2h0XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXRQYXJlbnRFbCA9IHRoaXMub2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgICBlbFBvc2l0aW9uID0gdGhpcy5vZmZzZXQoZWxlbWVudCwgZmFsc2UpO1xuXG4gICAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBwYXJlbnRPZmZzZXQgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRPZmZzZXQudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcDtcbiAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IG9mZnNldFBhcmVudEVsLmNsaWVudExlZnQ7XG4gICAgfVxuXG4gICAgZWxQb3NpdGlvbi50b3AgLT0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICBlbFBvc2l0aW9uLmJvdHRvbSAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGVsUG9zaXRpb24ubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgICBlbFBvc2l0aW9uLnJpZ2h0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuXG4gICAgaWYgKHJvdW5kKSB7XG4gICAgICBlbFBvc2l0aW9uLnRvcCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi50b3ApO1xuICAgICAgZWxQb3NpdGlvbi5ib3R0b20gPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24uYm90dG9tKTtcbiAgICAgIGVsUG9zaXRpb24ubGVmdCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIGVsUG9zaXRpb24ucmlnaHQgPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24ucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIG9mZnNldChlbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogQ2xpZW50UmVjdCB7XG4gICAgY29uc3QgZWxCY3IgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHZpZXdwb3J0T2Zmc2V0ID0ge1xuICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcbiAgICB9O1xuXG4gICAgbGV0IGVsT2Zmc2V0ID0ge1xuICAgICAgaGVpZ2h0OiBlbEJjci5oZWlnaHQgfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogZWxCY3Iud2lkdGggfHwgZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIHRvcDogZWxCY3IudG9wICsgdmlld3BvcnRPZmZzZXQudG9wLFxuICAgICAgYm90dG9tOiBlbEJjci5ib3R0b20gKyB2aWV3cG9ydE9mZnNldC50b3AsXG4gICAgICBsZWZ0OiBlbEJjci5sZWZ0ICsgdmlld3BvcnRPZmZzZXQubGVmdCxcbiAgICAgIHJpZ2h0OiBlbEJjci5yaWdodCArIHZpZXdwb3J0T2Zmc2V0LmxlZnRcbiAgICB9O1xuXG4gICAgaWYgKHJvdW5kKSB7XG4gICAgICBlbE9mZnNldC5oZWlnaHQgPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LmhlaWdodCk7XG4gICAgICBlbE9mZnNldC53aWR0aCA9IE1hdGgucm91bmQoZWxPZmZzZXQud2lkdGgpO1xuICAgICAgZWxPZmZzZXQudG9wID0gTWF0aC5yb3VuZChlbE9mZnNldC50b3ApO1xuICAgICAgZWxPZmZzZXQuYm90dG9tID0gTWF0aC5yb3VuZChlbE9mZnNldC5ib3R0b20pO1xuICAgICAgZWxPZmZzZXQubGVmdCA9IE1hdGgucm91bmQoZWxPZmZzZXQubGVmdCk7XG4gICAgICBlbE9mZnNldC5yaWdodCA9IE1hdGgucm91bmQoZWxPZmZzZXQucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbE9mZnNldDtcbiAgfVxuXG4gIHB1YmxpYyBwb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwbGFjZW1lbnQ6IHN0cmluZyxcbiAgICBhcHBlbmRUb0JvZHk/OiBib29sZWFuXG4gICk6IENsaWVudFJlY3Qge1xuICAgIGNvbnN0IGhvc3RFbFBvc2l0aW9uID0gYXBwZW5kVG9Cb2R5XG4gICAgICA/IHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCBmYWxzZSlcbiAgICAgIDogdGhpcy5wb3NpdGlvbihob3N0RWxlbWVudCwgZmFsc2UpO1xuICAgIGNvbnN0IHRhcmdldEVsU3R5bGVzID0gdGhpcy5nZXRBbGxTdHlsZXModGFyZ2V0RWxlbWVudCk7XG4gICAgY29uc3QgdGFyZ2V0RWxCQ1IgPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBwbGFjZW1lbnRQcmltYXJ5ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF0gfHwgJ3RvcCc7XG4gICAgY29uc3QgcGxhY2VtZW50U2Vjb25kYXJ5ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV0gfHwgJ2NlbnRlcic7XG5cbiAgICBsZXQgdGFyZ2V0RWxQb3NpdGlvbjogQ2xpZW50UmVjdCA9IHtcbiAgICAgIGhlaWdodDogdGFyZ2V0RWxCQ1IuaGVpZ2h0IHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IHRhcmdldEVsQkNSLndpZHRoIHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IHRhcmdldEVsQkNSLmhlaWdodCB8fCB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogdGFyZ2V0RWxCQ1Iud2lkdGggfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIH07XG5cbiAgICBjb25zdCBzaGlmdEhlaWdodDogYW55ID0ge1xuICAgICAgdG9wOiBob3N0RWxQb3NpdGlvbi50b3AsXG4gICAgICBjZW50ZXI6XG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLnRvcCArXG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLmhlaWdodCAvIDIgLVxuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmhlaWdodCAvIDIsXG4gICAgICBib3R0b206IGhvc3RFbFBvc2l0aW9uLnRvcCArIGhvc3RFbFBvc2l0aW9uLmhlaWdodFxuICAgIH07XG4gICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xuICAgICAgbGVmdDogaG9zdEVsUG9zaXRpb24ubGVmdCxcbiAgICAgIGNlbnRlcjpcbiAgICAgICAgaG9zdEVsUG9zaXRpb24ubGVmdCArXG4gICAgICAgIGhvc3RFbFBvc2l0aW9uLndpZHRoIC8gMiAtXG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ud2lkdGggLyAyLFxuICAgICAgcmlnaHQ6IGhvc3RFbFBvc2l0aW9uLmxlZnQgKyBob3N0RWxQb3NpdGlvbi53aWR0aFxuICAgIH07ICAgIFxuXG4gICAgaWYgKHBsYWNlbWVudFByaW1hcnkgPT09ICdhdXRvJykge1xuICAgICAgbGV0IG5ld1BsYWNlbWVudFByaW1hcnkgPSB0aGlzLmF1dG9Qb3NpdGlvbihcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbixcbiAgICAgICAgaG9zdEVsUG9zaXRpb24sXG4gICAgICAgIHRhcmdldEVsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudFNlY29uZGFyeVxuICAgICAgKTtcbiAgICAgIGlmICghbmV3UGxhY2VtZW50UHJpbWFyeSlcbiAgICAgICAgbmV3UGxhY2VtZW50UHJpbWFyeSA9IHRoaXMuYXV0b1Bvc2l0aW9uKFxuICAgICAgICAgIHRhcmdldEVsUG9zaXRpb24sXG4gICAgICAgICAgaG9zdEVsUG9zaXRpb24sXG4gICAgICAgICAgdGFyZ2V0RWxlbWVudFxuICAgICAgICApO1xuICAgICAgaWYgKG5ld1BsYWNlbWVudFByaW1hcnkpIHBsYWNlbWVudFByaW1hcnkgPSBuZXdQbGFjZW1lbnRQcmltYXJ5O1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHBsYWNlbWVudFByaW1hcnkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAocGxhY2VtZW50UHJpbWFyeSkge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPVxuICAgICAgICAgIGhvc3RFbFBvc2l0aW9uLnRvcCAtXG4gICAgICAgICAgKHRhcmdldEVsUG9zaXRpb24uaGVpZ2h0ICtcbiAgICAgICAgICAgIHBhcnNlRmxvYXQodGFyZ2V0RWxTdHlsZXMubWFyZ2luQm90dG9tKSk7XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICs9XG4gICAgICAgICAgaG9zdEVsUG9zaXRpb24udG9wIC0gdGFyZ2V0RWxQb3NpdGlvbi5oZWlnaHQ7XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRQcmltYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz0gc2hpZnRIZWlnaHRbcGxhY2VtZW50UHJpbWFyeV07XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID1cbiAgICAgICAgICBob3N0RWxQb3NpdGlvbi5sZWZ0IC1cbiAgICAgICAgICAodGFyZ2V0RWxQb3NpdGlvbi53aWR0aCArIHBhcnNlRmxvYXQodGFyZ2V0RWxTdHlsZXMubWFyZ2luUmlnaHQpKTtcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArPVxuICAgICAgICAgIGhvc3RFbFBvc2l0aW9uLmxlZnQgLSB0YXJnZXRFbFBvc2l0aW9uLndpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArPSBzaGlmdEhlaWdodFtwbGFjZW1lbnRTZWNvbmRhcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBzaGlmdFdpZHRoW3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9IHNoaWZ0V2lkdGhbcGxhY2VtZW50UHJpbWFyeV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLnRvcCk7XG4gICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gPSBNYXRoLnJvdW5kKHRhcmdldEVsUG9zaXRpb24uYm90dG9tKTtcbiAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBNYXRoLnJvdW5kKHRhcmdldEVsUG9zaXRpb24ubGVmdCk7XG4gICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5yaWdodCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0RWxQb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgYXV0b1Bvc2l0aW9uKFxuICAgIHRhcmdldEVsUG9zaXRpb246IENsaWVudFJlY3QsXG4gICAgaG9zdEVsUG9zaXRpb246IENsaWVudFJlY3QsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJlZmVycmVkUG9zaXRpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgKCFwcmVmZXJyZWRQb3NpdGlvbiB8fCBwcmVmZXJyZWRQb3NpdGlvbiA9PT0gJ3JpZ2h0JykgJiZcbiAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCArIGhvc3RFbFBvc2l0aW9uLmxlZnQgLSB0YXJnZXRFbFBvc2l0aW9uLndpZHRoIDxcbiAgICAgICAgMFxuICAgICkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICghcHJlZmVycmVkUG9zaXRpb24gfHwgcHJlZmVycmVkUG9zaXRpb24gPT09ICd0b3AnKSAmJlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gK1xuICAgICAgICBob3N0RWxQb3NpdGlvbi5ib3R0b20gK1xuICAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmhlaWdodCA+XG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICkge1xuICAgICAgcmV0dXJuICd0b3AnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoIXByZWZlcnJlZFBvc2l0aW9uIHx8IHByZWZlcnJlZFBvc2l0aW9uID09PSAnYm90dG9tJykgJiZcbiAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wICsgaG9zdEVsUG9zaXRpb24udG9wIC0gdGFyZ2V0RWxQb3NpdGlvbi5oZWlnaHQgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICghcHJlZmVycmVkUG9zaXRpb24gfHwgcHJlZmVycmVkUG9zaXRpb24gPT09ICdsZWZ0JykgJiZcbiAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgK1xuICAgICAgICBob3N0RWxQb3NpdGlvbi5yaWdodCArXG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ud2lkdGggPlxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICkge1xuICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbFN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3R5bGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmdldEFsbFN0eWxlcyhlbGVtZW50KSBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByaXZhdGUgb2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBvZmZzZXRQYXJlbnRFbCA9XG4gICAgICA8SFRNTEVsZW1lbnQ+ZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgd2hpbGUgKFxuICAgICAgb2Zmc2V0UGFyZW50RWwgJiZcbiAgICAgIG9mZnNldFBhcmVudEVsICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudEVsKVxuICAgICkge1xuICAgICAgb2Zmc2V0UGFyZW50RWwgPSA8SFRNTEVsZW1lbnQ+b2Zmc2V0UGFyZW50RWwub2Zmc2V0UGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRQYXJlbnRFbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbn1cblxuY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkVsZW1lbnRzKFxuICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBwbGFjZW1lbnQ6IHN0cmluZyxcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHBvcyA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgcGxhY2VtZW50LFxuICAgIGFwcGVuZFRvQm9keVxuICApO1xuXG4gIHRhcmdldEVsZW1lbnQuc3R5bGUudG9wID0gYCR7cG9zLnRvcH1weGA7XG4gIHRhcmdldEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbn1cbiJdfQ==