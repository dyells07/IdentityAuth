(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/collapse', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].collapse = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CollapseDirective = (function () {
        function CollapseDirective(_el, _renderer) {
            this._el = _el;
            this._renderer = _renderer;
            /**
             * This event fires as soon as content collapses
             */
            this.collapsed = new core.EventEmitter();
            /**
             * This event fires as soon as content becomes visible
             */
            this.expanded = new core.EventEmitter();
            // shown
            this.isExpanded = true;
            // hidden
            this.isCollapsed = false;
            // stale state
            this.isCollapse = true;
            // animation state
            this.isCollapsing = false;
        }
        Object.defineProperty(CollapseDirective.prototype, "collapse", {
            get: /**
             * @return {?}
             */ function () {
                return this.isExpanded;
            },
            set: /**
             * A flag indicating visibility of content (shown or hidden)
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.isExpanded = value;
                this.toggle();
            },
            enumerable: true,
            configurable: true
        });
        /** allows to manually toggle content visibility */
        /**
         * allows to manually toggle content visibility
         * @return {?}
         */
        CollapseDirective.prototype.toggle = /**
         * allows to manually toggle content visibility
         * @return {?}
         */
            function () {
                if (this.isExpanded) {
                    this.hide();
                }
                else {
                    this.show();
                }
            };
        /** allows to manually hide content */
        /**
         * allows to manually hide content
         * @return {?}
         */
        CollapseDirective.prototype.hide = /**
         * allows to manually hide content
         * @return {?}
         */
            function () {
                this.isCollapse = false;
                this.isCollapsing = true;
                this.isExpanded = false;
                this.isCollapsed = true;
                this.isCollapse = true;
                this.isCollapsing = false;
                this.display = 'none';
                this.collapsed.emit(this);
            };
        /** allows to manually show collapsed content */
        /**
         * allows to manually show collapsed content
         * @return {?}
         */
        CollapseDirective.prototype.show = /**
         * allows to manually show collapsed content
         * @return {?}
         */
            function () {
                this.isCollapse = false;
                this.isCollapsing = true;
                this.isExpanded = true;
                this.isCollapsed = false;
                this.display = 'block';
                // this.height = 'auto';
                this.isCollapse = true;
                this.isCollapsing = false;
                this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
                this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
                this.expanded.emit(this);
            };
        CollapseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[collapse]',
                        exportAs: 'bs-collapse',
                        host: {
                            '[class.collapse]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        CollapseDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        CollapseDirective.propDecorators = {
            "collapsed": [{ type: core.Output },],
            "expanded": [{ type: core.Output },],
            "display": [{ type: core.HostBinding, args: ['style.display',] },],
            "isExpanded": [{ type: core.HostBinding, args: ['class.in',] }, { type: core.HostBinding, args: ['class.show',] }, { type: core.HostBinding, args: ['attr.aria-expanded',] },],
            "isCollapsed": [{ type: core.HostBinding, args: ['attr.aria-hidden',] },],
            "isCollapse": [{ type: core.HostBinding, args: ['class.collapse',] },],
            "isCollapsing": [{ type: core.HostBinding, args: ['class.collapsing',] },],
            "collapse": [{ type: core.Input },],
        };
        return CollapseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CollapseModule = (function () {
        function CollapseModule() {
        }
        /**
         * @return {?}
         */
        CollapseModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CollapseModule, providers: [] };
            };
        CollapseModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CollapseDirective],
                        exports: [CollapseDirective]
                    },] }
        ];
        return CollapseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CollapseDirective = CollapseDirective;
    exports.CollapseModule = CollapseModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb2xsYXBzZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvY29sbGFwc2UvY29sbGFwc2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBhZGQgYW5pbWF0aW9ucyB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzk5NDcgc29sdmVkXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlXScsXG4gIGV4cG9ydEFzOiAnYnMtY29sbGFwc2UnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jb2xsYXBzZV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSB7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBjb2xsYXBzZXMgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBiZWNvbWVzIHZpc2libGUgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmc7XG4gIC8vIHNob3duXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGlzRXhwYW5kZWQgPSB0cnVlO1xuICAvLyBoaWRkZW5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJykgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgLy8gc3RhbGUgc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xuICAvLyBhbmltYXRpb24gc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzaW5nJykgaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgLyoqIEEgZmxhZyBpbmRpY2F0aW5nIHZpc2liaWxpdHkgb2YgY29udGVudCAoc2hvd24gb3IgaGlkZGVuKSAqL1xuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRXhwYW5kZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHRvZ2dsZSBjb250ZW50IHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IGhpZGUgY29udGVudCAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuY29sbGFwc2VkLmVtaXQodGhpcyk7XG4gIH1cblxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHNob3cgY29sbGFwc2VkIGNvbnRlbnQgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gdGhpcy5oZWlnaHQgPSAnYXV0byc7XG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdvdmVyZmxvdycsXG4gICAgICAndmlzaWJsZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnYXV0bycpO1xuICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbGxhcHNlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0NvbGxhcHNlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDb2xsYXBzZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO1FBaURFLDJCQUFvQixHQUFlLEVBQVUsU0FBb0I7WUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtZQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7NkJBN0J4QixJQUFJQSxpQkFBWSxFQUFFOzs7OzRCQUduQixJQUFJQSxpQkFBWSxFQUFFOzs4QkFPN0MsSUFBSTs7K0JBRThCLEtBQUs7OzhCQUVSLElBQUk7O2dDQUVBLEtBQUs7U0FhZ0I7OEJBVGpFLHVDQUFROzs7Z0JBS1o7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hCOzs7OzswQkFQWSxLQUFjO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7O1FBVWhCLGtDQUFNOzs7O1lBQU47Z0JBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7Ozs7OztRQUdELGdDQUFJOzs7O1lBQUo7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCOzs7Ozs7UUFHRCxnQ0FBSTs7OztZQUFKO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7Z0JBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixVQUFVLEVBQ1YsU0FBUyxDQUNWLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjs7b0JBcEZGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixJQUFJLEVBQUU7NEJBQ0osa0JBQWtCLEVBQUUsTUFBTTt5QkFDM0I7cUJBQ0Y7Ozs7O3dCQWRDQyxlQUFVO3dCQUtWQyxjQUFTOzs7O2tDQWFSQyxXQUFNO2lDQUdOQSxXQUFNO2dDQUVOQyxnQkFBVyxTQUFDLGVBQWU7bUNBRTNCQSxnQkFBVyxTQUFDLFVBQVUsY0FDdEJBLGdCQUFXLFNBQUMsWUFBWSxjQUN4QkEsZ0JBQVcsU0FBQyxvQkFBb0I7b0NBR2hDQSxnQkFBVyxTQUFDLGtCQUFrQjttQ0FFOUJBLGdCQUFXLFNBQUMsZ0JBQWdCO3FDQUU1QkEsZ0JBQVcsU0FBQyxrQkFBa0I7aUNBRzlCQyxVQUFLOztnQ0F4Q1I7Ozs7Ozs7QUNBQTs7Ozs7O1FBU1Msc0JBQU87OztZQUFkO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNwRDs7b0JBUEZDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOzs2QkFQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9