/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
function ModalOptions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalOptions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalOptions.ctorParameters;
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.animated;
    /**
     * Modal data
     * @type {?}
     */
    ModalOptions.prototype.initialState;
}
export const /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
export const /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
export const /** @type {?} */ SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export const /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export const /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU07OztZQURMLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ1gsTUFBTSxDQUFDLHVCQUFNLG1CQUFtQixHQUFpQjtJQUMvQyxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsS0FBSyxFQUFFLEVBQUU7SUFDVCxRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixNQUFNLENBQUMsdUJBQU0sVUFBVSxHQUFjO0lBQ25DLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBYTtJQUNoQyxNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsYUFBYSxFQUFFLG9EQUFvRDtDQUNwRSxDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLG9CQUFvQixHQUF3QjtJQUN2RCxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSxlQUFlLEdBQW1CO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7Q0FDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lLCBEaXNtaXNzUmVhc29ucywgU2VsZWN0b3IsIFRyYW5zaXRpb25EdXJhdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSxcbiAgICogIHNwZWNpZnkgc3RhdGljIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxuICAgKi9cbiAga2V5Ym9hcmQ/OiBib29sZWFuO1xuXG4gIGZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBtb2RhbCB3aGVuIGluaXRpYWxpemVkLlxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXG4gICAqL1xuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3Igb3BlbmVkIG1vZGFsXG4gICAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRvZ2dsZSBhbmltYXRpb25cbiAgICovXG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1vZGFsIGRhdGFcbiAgICovXG4gIGluaXRpYWxTdGF0ZT86IE9iamVjdDtcbn1cblxuXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiBmYWxzZSxcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gIGNsYXNzOiAnJyxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIGluaXRpYWxTdGF0ZToge31cbn07XG5cbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FOiBDbGFzc05hbWUgPSB7XG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgRkFERTogJ2ZhZGUnLFxuICBJTjogJ2luJywgLy8gYnMzXG4gIFNIT1c6ICdzaG93JyAvLyBiczRcbn07XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RPUjogU2VsZWN0b3IgPSB7XG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT05TOiBUcmFuc2l0aW9uRHVyYXRpb25zID0ge1xuICBNT0RBTDogMzAwLFxuICBCQUNLRFJPUDogMTUwXG59O1xuXG5leHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TOiBEaXNtaXNzUmVhc29ucyA9IHtcbiAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXG4gIEVTQzogJ2VzYydcbn07XG4iXX0=