/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadMatch } from './typeahead-match.class';
import { getValueFromObject, latinize, tokenize } from './typeahead-utils';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
export class TypeaheadDirective {
    /**
     * @param {?} ngControl
     * @param {?} element
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} cis
     * @param {?} changeDetection
     */
    constructor(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurres. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(this.typeahead instanceof Observable)) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof Observable) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        const /** @type {?} */ value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter, tab
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if an item is visible - prevent form submission
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if an item is visible - don't change focus
        if (e.keyCode === 9) {
            e.preventDefault();
            this._container.selectActiveMatch();
            return;
        }
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        const /** @type {?} */ valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        const /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap(() => this.typeahead))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
            const /** @type {?} */ normalizedQuery = this.normalizeQuery(value);
            return from(this.typeahead)
                .pipe(filter((option) => {
                return (option &&
                    this.testMatch(this.normalizeOption(option), normalizedQuery));
            }), toArray());
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        const /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
        const /** @type {?} */ normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        let /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        let /** @type {?} */ spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            const /** @type {?} */ _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            const /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        const /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            let /** @type {?} */ matches = [];
            // extract all group names
            const /** @type {?} */ groups = limited
                .map((option) => getValueFromObject(option, this.typeaheadGroupField))
                .filter((v, i, a) => a.indexOf(v) === i);
            groups.forEach((group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(limited
                    .filter(
                // tslint:disable-next-line:no-any
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group)
                    .map(
                // tslint:disable-next-line:no-any
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
            });
            this._matches = matches;
        }
        else {
            this._matches = limited.map(
            // tslint:disable-next-line:no-any
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
        }
    }
    /**
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: NgControl, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ComponentLoaderFactory, },
    { type: ChangeDetectorRef, },
];
TypeaheadDirective.propDecorators = {
    "typeahead": [{ type: Input },],
    "typeaheadMinLength": [{ type: Input },],
    "typeaheadWaitMs": [{ type: Input },],
    "typeaheadOptionsLimit": [{ type: Input },],
    "typeaheadOptionField": [{ type: Input },],
    "typeaheadGroupField": [{ type: Input },],
    "typeaheadAsync": [{ type: Input },],
    "typeaheadLatinize": [{ type: Input },],
    "typeaheadSingleWords": [{ type: Input },],
    "typeaheadWordDelimiters": [{ type: Input },],
    "typeaheadPhraseDelimiters": [{ type: Input },],
    "typeaheadItemTemplate": [{ type: Input },],
    "optionsListTemplate": [{ type: Input },],
    "typeaheadScrollable": [{ type: Input },],
    "typeaheadOptionsInScrollableView": [{ type: Input },],
    "typeaheadLoading": [{ type: Output },],
    "typeaheadNoResults": [{ type: Output },],
    "typeaheadOnSelect": [{ type: Output },],
    "typeaheadOnBlur": [{ type: Output },],
    "container": [{ type: Input },],
    "dropup": [{ type: Input },],
    "onInput": [{ type: HostListener, args: ['input', ['$event'],] },],
    "onChange": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "onFocus": [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
function TypeaheadDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TypeaheadDirective.propDecorators;
    /**
     * options source, can be Array of strings, objects or
     * an Observable for external matching process
     * @type {?}
     */
    TypeaheadDirective.prototype.typeahead;
    /**
     * minimal no of characters that needs to be entered before
     * typeahead kicks-in. When set to 0, typeahead shows on focus with full
     * list of options (limited as normal by typeaheadOptionsLimit)
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMinLength;
    /**
     * minimal wait time after last character typed before typeahead kicks-in
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWaitMs;
    /**
     * maximum length of options items list
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsLimit;
    /**
     * when options source is an array of objects, the name of field
     * that contains the options value, we use array item as option in case
     * of this field is missing. Supports nested properties and methods.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionField;
    /**
     * when options source is an array of objects, the name of field that
     * contains the group value, matches are grouped by this field when set.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadGroupField;
    /**
     * should be used only in case of typeahead attribute is array.
     * If true - loading of options will be async, otherwise - sync.
     * true make sense if options array is large.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadAsync;
    /**
     * match latin symbols.
     * If true the word súper would match super and vice versa.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLatinize;
    /**
     * Can be use to search words by inserting a single white space between each characters
     *  for example 'C a l i f o r n i a' will match 'California'.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSingleWords;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to break words. Defaults to space.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWordDelimiters;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to match exact phrase.
     * Defaults to simple and double quotes.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadPhraseDelimiters;
    /**
     * used to specify a custom item template.
     * Template variables exposed are called item and index;
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadItemTemplate;
    /**
     * used to specify a custom options list template.
     * Template variables: matches, itemTemplate, query
     * @type {?}
     */
    TypeaheadDirective.prototype.optionsListTemplate;
    /**
     * specifies if typeahead is scrollable
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadScrollable;
    /**
     * specifies number of options to show in scroll view
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsInScrollableView;
    /**
     * fired when 'busy' state of this component was changed,
     * fired on async mode only, returns boolean
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLoading;
    /**
     * fired on every key event and returns true
     * in case of matches are not detected
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadNoResults;
    /**
     * fired when option was selected, return object with data of this option
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnSelect;
    /**
     * fired when blur event occurres. returns the active item
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnBlur;
    /**
     * A selector specifying the element the typeahead should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TypeaheadDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    TypeaheadDirective.prototype.dropup;
    /**
     * if false don't focus the input element the typeahead directive is associated with on selection
     * @type {?}
     */
    TypeaheadDirective.prototype._container;
    /** @type {?} */
    TypeaheadDirective.prototype.isTypeaheadOptionsListActive;
    /** @type {?} */
    TypeaheadDirective.prototype.keyUpEventEmitter;
    /** @type {?} */
    TypeaheadDirective.prototype._matches;
    /** @type {?} */
    TypeaheadDirective.prototype.placement;
    /** @type {?} */
    TypeaheadDirective.prototype._typeahead;
    /** @type {?} */
    TypeaheadDirective.prototype._subscriptions;
    /** @type {?} */
    TypeaheadDirective.prototype._outsideClickListener;
    /** @type {?} */
    TypeaheadDirective.prototype.ngControl;
    /** @type {?} */
    TypeaheadDirective.prototype.element;
    /** @type {?} */
    TypeaheadDirective.prototype.renderer;
    /** @type {?} */
    TypeaheadDirective.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BGLE1BQU07Ozs7Ozs7OztJQThHSixZQUFvQixTQUFvQixFQUNwQixTQUNSLGdCQUFrQyxFQUMxQixVQUNSLEdBQTJCLEVBQ25CO1FBTEEsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTztRQUVQLGFBQVEsR0FBUixRQUFRO1FBRVIsb0JBQWUsR0FBZixlQUFlOzs7Ozs7a0NBekdHLEtBQUssQ0FBQzs7Ozs7OzhCQWtCVCxLQUFLLENBQUM7Ozs7O2lDQUlaLElBQUk7Ozs7O29DQUlE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LENBQUMsQ0FBQztLQUNqQzs7O1lBemVGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQzs7OztZQVRyRCxTQUFTO1lBWGhCLFVBQVU7WUFTVixnQkFBZ0I7WUFGaEIsU0FBUztZQU9lLHNCQUFzQjtZQWhCOUMsaUJBQWlCOzs7MEJBNEJoQixLQUFLO21DQUtMLEtBQUs7Z0NBRUwsS0FBSztzQ0FFTCxLQUFLO3FDQUtMLEtBQUs7b0NBSUwsS0FBSzsrQkFLTCxLQUFLO2tDQUlMLEtBQUs7cUNBSUwsS0FBSzt3Q0FJTCxLQUFLOzBDQUtMLEtBQUs7c0NBS0wsS0FBSztvQ0FLTCxLQUFLO29DQUVMLEtBQUs7aURBRUwsS0FBSztpQ0FJTCxNQUFNO21DQUlOLE1BQU07a0NBRU4sTUFBTTtnQ0FHTixNQUFNOzBCQU1OLEtBQUs7dUJBR0wsS0FBSzt3QkFtRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkF1QmhDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBaUNoQyxZQUFZLFNBQUMsT0FBTyxjQUNwQixZQUFZLFNBQUMsT0FBTzt1QkFRcEIsWUFBWSxTQUFDLE1BQU07MEJBT25CLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1t0eXBlYWhlYWRdJywgZXhwb3J0QXM6ICdicy10eXBlYWhlYWQnfSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBvcHRpb25zIHNvdXJjZSwgY2FuIGJlIEFycmF5IG9mIHN0cmluZ3MsIG9iamVjdHMgb3JcbiAgICogYW4gT2JzZXJ2YWJsZSBmb3IgZXh0ZXJuYWwgbWF0Y2hpbmcgcHJvY2Vzc1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIHR5cGVhaGVhZDogYW55O1xuICAvKiogbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG8gYmUgZW50ZXJlZCBiZWZvcmVcbiAgICogdHlwZWFoZWFkIGtpY2tzLWluLiBXaGVuIHNldCB0byAwLCB0eXBlYWhlYWQgc2hvd3Mgb24gZm9jdXMgd2l0aCBmdWxsXG4gICAqIGxpc3Qgb2Ygb3B0aW9ucyAobGltaXRlZCBhcyBub3JtYWwgYnkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0KVxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTWluTGVuZ3RoOiBudW1iZXIgPSB2b2lkIDA7XG4gIC8qKiBtaW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdhaXRNczogbnVtYmVyO1xuICAvKiogbWF4aW11bSBsZW5ndGggb2Ygb3B0aW9ucyBpdGVtcyBsaXN0ICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNMaW1pdDogbnVtYmVyO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZFxuICAgKiB0aGF0IGNvbnRhaW5zIHRoZSBvcHRpb25zIHZhbHVlLCB3ZSB1c2UgYXJyYXkgaXRlbSBhcyBvcHRpb24gaW4gY2FzZVxuICAgKiBvZiB0aGlzIGZpZWxkIGlzIG1pc3NpbmcuIFN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uRmllbGQ6IHN0cmluZztcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGQgdGhhdFxuICAgKiBjb250YWlucyB0aGUgZ3JvdXAgdmFsdWUsIG1hdGNoZXMgYXJlIGdyb3VwZWQgYnkgdGhpcyBmaWVsZCB3aGVuIHNldC5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEdyb3VwRmllbGQ6IHN0cmluZztcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSBvZiB0eXBlYWhlYWQgYXR0cmlidXRlIGlzIGFycmF5LlxuICAgKiBJZiB0cnVlIC0gbG9hZGluZyBvZiBvcHRpb25zIHdpbGwgYmUgYXN5bmMsIG90aGVyd2lzZSAtIHN5bmMuXG4gICAqIHRydWUgbWFrZSBzZW5zZSBpZiBvcHRpb25zIGFycmF5IGlzIGxhcmdlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkQXN5bmM6IGJvb2xlYW4gPSB2b2lkIDA7XG4gIC8qKiBtYXRjaCBsYXRpbiBzeW1ib2xzLlxuICAgKiBJZiB0cnVlIHRoZSB3b3JkIHPDunBlciB3b3VsZCBtYXRjaCBzdXBlciBhbmQgdmljZSB2ZXJzYS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZExhdGluaXplID0gdHJ1ZTtcbiAgLyoqIENhbiBiZSB1c2UgdG8gc2VhcmNoIHdvcmRzIGJ5IGluc2VydGluZyBhIHNpbmdsZSB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggY2hhcmFjdGVyc1xuICAgKiAgZm9yIGV4YW1wbGUgJ0MgYSBsIGkgZiBvIHIgbiBpIGEnIHdpbGwgbWF0Y2ggJ0NhbGlmb3JuaWEnLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2luZ2xlV29yZHMgPSB0cnVlO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBicmVhayB3b3Jkcy4gRGVmYXVsdHMgdG8gc3BhY2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyA9ICcgJztcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgd29yZCBkZWxpbWl0ZXIgdG8gbWF0Y2ggZXhhY3QgcGhyYXNlLlxuICAgKiBEZWZhdWx0cyB0byBzaW1wbGUgYW5kIGRvdWJsZSBxdW90ZXMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzID0gJ1xcJ1wiJztcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXMgZXhwb3NlZCBhcmUgY2FsbGVkIGl0ZW0gYW5kIGluZGV4O1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIHR5cGVhaGVhZEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBvcHRpb25zIGxpc3QgdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlczogbWF0Y2hlcywgaXRlbVRlbXBsYXRlLCBxdWVyeVxuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG9wdGlvbnNMaXN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBzcGVjaWZpZXMgaWYgdHlwZWFoZWFkIGlzIHNjcm9sbGFibGUgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNjcm9sbGFibGUgPSBmYWxzZTtcbiAgLyoqIHNwZWNpZmllcyBudW1iZXIgb2Ygb3B0aW9ucyB0byBzaG93IGluIHNjcm9sbCB2aWV3ICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA9IDU7XG4gIC8qKiBmaXJlZCB3aGVuICdidXN5JyBzdGF0ZSBvZiB0aGlzIGNvbXBvbmVudCB3YXMgY2hhbmdlZCxcbiAgICogZmlyZWQgb24gYXN5bmMgbW9kZSBvbmx5LCByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgb24gZXZlcnkga2V5IGV2ZW50IGFuZCByZXR1cm5zIHRydWVcbiAgICogaW4gY2FzZSBvZiBtYXRjaGVzIGFyZSBub3QgZGV0ZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWROb1Jlc3VsdHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZWFoZWFkTWF0Y2g+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIGJsdXIgZXZlbnQgb2NjdXJyZXMuIHJldHVybnMgdGhlIGFjdGl2ZSBpdGVtICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICAvKiogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkcyAqL1xuICBASW5wdXQoKSBkcm9wdXAgPSBmYWxzZTtcblxuICAvLyBub3QgeWV0IGltcGxlbWVudGVkXG4gIC8qKiBpZiBmYWxzZSByZXN0cmljdCBtb2RlbCB2YWx1ZXMgdG8gdGhlIG9uZXMgc2VsZWN0ZWQgZnJvbSB0aGUgcG9wdXAgb25seSB3aWxsIGJlIHByb3ZpZGVkICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRFZGl0YWJsZTpib29sZWFuO1xuICAvKiogaWYgZmFsc2UgdGhlIGZpcnN0IG1hdGNoIGF1dG9tYXRpY2FsbHkgd2lsbCBub3QgYmUgZm9jdXNlZCBhcyB5b3UgdHlwZSAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNGaXJzdDpib29sZWFuO1xuICAvKiogZm9ybWF0IHRoZSBuZy1tb2RlbCByZXN1bHQgYWZ0ZXIgc2VsZWN0aW9uICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRJbnB1dEZvcm1hdHRlcjphbnk7XG4gIC8qKiBpZiB0cnVlIGF1dG9tYXRpY2FsbHkgc2VsZWN0IGFuIGl0ZW0gd2hlbiB0aGVyZSBpcyBvbmUgb3B0aW9uIHRoYXQgZXhhY3RseSBtYXRjaGVzIHRoZSB1c2VyIGlucHV0ICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRTZWxlY3RPbkV4YWN0OmJvb2xlYW47XG4gIC8qKiAgaWYgdHJ1ZSBzZWxlY3QgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXRjaCBvbiBibHVyICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRTZWxlY3RPbkJsdXI6Ym9vbGVhbjtcbiAgLyoqICBpZiBmYWxzZSBkb24ndCBmb2N1cyB0aGUgaW5wdXQgZWxlbWVudCB0aGUgdHlwZWFoZWFkIGRpcmVjdGl2ZSBpcyBhc3NvY2lhdGVkIHdpdGggb24gc2VsZWN0aW9uICovXG4gICAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzT25TZWxlY3Q6Ym9vbGVhbjtcblxuICBfY29udGFpbmVyOiBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ7XG4gIGlzVHlwZWFoZWFkT3B0aW9uc0xpc3RBY3RpdmUgPSBmYWxzZTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBrZXlVcEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXTtcbiAgcHJvdGVjdGVkIHBsYWNlbWVudCA9ICdib3R0b20tbGVmdCc7XG4gIC8vIHByb3RlY3RlZCBwb3B1cDpDb21wb25lbnRSZWY8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwcml2YXRlIF90eXBlYWhlYWQ6IENvbXBvbmVudExvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5fdHlwZWFoZWFkID0gY2lzLmNyZWF0ZUxvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgZWxlbWVudCxcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICByZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0IHx8IDIwO1xuICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID1cbiAgICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSB2b2lkIDAgPyAxIDogdGhpcy50eXBlYWhlYWRNaW5MZW5ndGg7XG4gICAgdGhpcy50eXBlYWhlYWRXYWl0TXMgPSB0aGlzLnR5cGVhaGVhZFdhaXRNcyB8fCAwO1xuXG4gICAgLy8gYXN5bmMgc2hvdWxkIGJlIGZhbHNlIGluIGNhc2Ugb2YgYXJyYXlcbiAgICBpZiAoXG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID09PSB1bmRlZmluZWQgJiZcbiAgICAgICEodGhpcy50eXBlYWhlYWQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKVxuICAgICkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEFzeW5jKSB7XG4gICAgICB0aGlzLmFzeW5jQWN0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN5bmNBY3Rpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSW5wdXQoZTogYW55KTogdm9pZCB7XG4gICAgLy8gRm9yIGA8aW5wdXQ+YHMsIHVzZSB0aGUgYHZhbHVlYCBwcm9wZXJ0eS4gRm9yIG90aGVycyB0aGF0IGRvbid0IGhhdmUgYVxuICAgIC8vIGB2YWx1ZWAgKHN1Y2ggYXMgYDxzcGFuIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5gKSwgdXNlIGVpdGhlclxuICAgIC8vIGB0ZXh0Q29udGVudGAgb3IgYGlubmVyVGV4dGAgKGRlcGVuZGluZyBvbiB3aGljaCBvbmUgaXMgc3VwcG9ydGVkLCBpLmUuXG4gICAgLy8gRmlyZWZveCBvciBJRSkuXG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogZS50YXJnZXQudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgIDogZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy50eXBlYWhlYWRNaW5MZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAvLyBlc2NcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdXBcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmV2QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvd25cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5uZXh0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGVudGVyLCB0YWJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkT25CbHVyLmVtaXQodGhpcy5fY29udGFpbmVyLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgLy8gbm8gY29udGFpbmVyIC0gbm8gcHJvYmxlbXNcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGFuIGl0ZW0gaXMgdmlzaWJsZSAtIHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGFuIGl0ZW0gaXMgdmlzaWJsZSAtIGRvbid0IGNoYW5nZSBmb2N1c1xuICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZWwobWF0Y2g6IFR5cGVhaGVhZE1hdGNoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWVTdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xuICAgIHRoaXMubmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHZhbHVlU3RyKTtcbiAgICAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkuc2V0VmFsdWUodmFsdWVTdHIpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX3R5cGVhaGVhZFxuICAgICAgLmF0dGFjaChUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQpXG4gICAgICAvLyB0b2RvOiBhZGQgYXBwZW5kIHRvIGJvZHksIGFmdGVyIHVwZGF0aW5nIHBvc2l0aW9uaW5nIHNlcnZpY2VcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogYCR7dGhpcy5kcm9wdXAgPyAndG9wJyA6ICdib3R0b20nfSBsZWZ0YH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIHR5cGVhaGVhZFJlZjogdGhpcyxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgZHJvcHVwOiB0aGlzLmRyb3B1cFxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDAgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3V0c2lkZUNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLl90eXBlYWhlYWQuaW5zdGFuY2U7XG4gICAgdGhpcy5fY29udGFpbmVyLnBhcmVudCA9IHRoaXM7XG4gICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICA6IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdHlwZWFoZWFkLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuX3R5cGVhaGVhZC5oaWRlKCk7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbk91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3R5cGVhaGVhZC5kaXNwb3NlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50eXBlYWhlYWQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgbWVyZ2VNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplUXVlcnkodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnJvbSh0aGlzLnR5cGVhaGVhZClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RNYXRjaCh0aGlzLm5vcm1hbGl6ZU9wdGlvbihvcHRpb24pLCBub3JtYWxpemVkUXVlcnkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvQXJyYXkoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZU9wdGlvbihvcHRpb246IGFueSk6IGFueSB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWU6IHN0cmluZyA9IGdldFZhbHVlRnJvbU9iamVjdChcbiAgICAgIG9wdGlvbixcbiAgICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGRcbiAgICApO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb24gPSB0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKG9wdGlvblZhbHVlKVxuICAgICAgOiBvcHRpb25WYWx1ZTtcblxuICAgIHJldHVybiBub3JtYWxpemVkT3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplUXVlcnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAvLyBJZiBzaW5nbGVXb3JkcywgYnJlYWsgbW9kZWwgaGVyZSB0byBub3QgYmUgZG9pbmcgZXh0cmEgd29yayBvbiBlYWNoXG4gICAgLy8gaXRlcmF0aW9uXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh2YWx1ZSlcbiAgICAgIDogdmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRRdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZXN0TWF0Y2gobWF0Y2g6IHN0cmluZywgdGVzdDogc3RyaW5nW10gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgc3BhY2VMZW5ndGg6IG51bWJlcjtcblxuICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNwYWNlTGVuZ3RoID0gdGVzdC5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYWNlTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRlc3RbaV0ubGVuZ3RoID4gMCAmJiBtYXRjaC5pbmRleE9mKHRlc3RbaV0pIDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guaW5kZXhPZih0ZXN0KSA+PSAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcbiAgICB0aGlzLnByZXBhcmVNYXRjaGVzKG1hdGNoZXMpO1xuXG4gICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoIXRoaXMuaGFzTWF0Y2hlcygpKTtcblxuICAgIGlmICghdGhpcy5oYXNNYXRjaGVzKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZml4OiByZW1vdmUgdXNhZ2Ugb2YgbmdDb250cm9sIGludGVybmFsc1xuICAgICAgY29uc3QgX2NvbnRyb2xWYWx1ZSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAnJztcbiAgICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IF9jb250cm9sVmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgICA/IHRva2VuaXplKFxuICAgICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xuICAgICAgICApXG4gICAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkTWF0Y2hbXSk6IHZvaWQge1xuICAgIGNvbnN0IGxpbWl0ZWQ6IFR5cGVhaGVhZE1hdGNoW10gPSBvcHRpb25zLnNsaWNlKDAsIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0KTtcblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpIHtcbiAgICAgIGxldCBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XG5cbiAgICAgIC8vIGV4dHJhY3QgYWxsIGdyb3VwIG5hbWVzXG4gICAgICBjb25zdCBncm91cHMgPSBsaW1pdGVkXG4gICAgICAgIC5tYXAoKG9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpID0+XG4gICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKVxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoKHY6IHN0cmluZywgaTogbnVtYmVyLCBhOiBzdHJpbmdbXSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcblxuICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gYWRkIGdyb3VwIGhlYWRlciB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMucHVzaChuZXcgVHlwZWFoZWFkTWF0Y2goZ3JvdXAsIGdyb3VwLCB0cnVlKSk7XG5cbiAgICAgICAgLy8gYWRkIGVhY2ggaXRlbSBvZiBncm91cCB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmNvbmNhdChcbiAgICAgICAgICBsaW1pdGVkXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpID09PSBncm91cFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBsaW1pdGVkLm1hcChcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNNYXRjaGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiJdfQ==