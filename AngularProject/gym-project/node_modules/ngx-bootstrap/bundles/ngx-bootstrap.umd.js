(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/chronos'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/alert'), require('ngx-bootstrap/buttons'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/collapse'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/modal'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/progressbar'), require('ngx-bootstrap/rating'), require('ngx-bootstrap/sortable'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/timepicker'), require('ngx-bootstrap/tooltip'), require('ngx-bootstrap/typeahead'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/locale')) :
	typeof define === 'function' && define.amd ? define('ngx-bootstrap', ['exports', 'ngx-bootstrap/chronos', 'ngx-bootstrap/utils', 'ngx-bootstrap/accordion', 'ngx-bootstrap/alert', 'ngx-bootstrap/buttons', 'ngx-bootstrap/carousel', 'ngx-bootstrap/collapse', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/modal', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/pagination', 'ngx-bootstrap/progressbar', 'ngx-bootstrap/rating', 'ngx-bootstrap/sortable', 'ngx-bootstrap/tabs', 'ngx-bootstrap/timepicker', 'ngx-bootstrap/tooltip', 'ngx-bootstrap/typeahead', 'ngx-bootstrap/popover', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/locale'], factory) :
	(factory((global['ngx-bootstrap'] = {}),global.chronos,global.utils,global.accordion,global.alert,global.buttons,global.carousel,global.collapse,global.datepicker,global.modal,global.dropdown,global.pagination,global.progressbar,global.rating,global.sortable,global.tabs,global.timepicker,global.tooltip,global.typeahead,global.popover,global.componentLoader,global.positioning,global.miniNgrx,global.locale));
}(this, (function (exports,chronos,utils,accordion,alert,buttons,carousel,collapse,datepicker,modal,dropdown,pagination,progressbar,rating,sortable,tabs,timepicker,tooltip,typeahead,popover,componentLoader,positioning,miniNgrx,locale) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes} checked by tsc
	 */

	exports.listLocales = chronos.listLocales;
	exports.defineLocale = chronos.defineLocale;
	exports.getSetGlobalLocale = chronos.getSetGlobalLocale;
	exports.parseDate = chronos.parseDate;
	exports.formatDate = chronos.formatDate;
	exports.getDay = chronos.getDay;
	exports.isFirstDayOfWeek = chronos.isFirstDayOfWeek;
	exports.isSameYear = chronos.isSameYear;
	exports.isSameDay = chronos.isSameDay;
	exports.isSameMonth = chronos.isSameMonth;
	exports.getFullYear = chronos.getFullYear;
	exports.getFirstDayOfMonth = chronos.getFirstDayOfMonth;
	exports.getMonth = chronos.getMonth;
	exports.getLocale = chronos.getLocale;
	exports.updateLocale = chronos.updateLocale;
	exports.isAfter = chronos.isAfter;
	exports.isBefore = chronos.isBefore;
	exports.isArray = chronos.isArray;
	exports.isDateValid = chronos.isDateValid;
	exports.isDate = chronos.isDate;
	exports.shiftDate = chronos.shiftDate;
	exports.setFullDate = chronos.setFullDate;
	exports.endOf = chronos.endOf;
	exports.startOf = chronos.startOf;
	exports.setTheme = utils.setTheme;
	exports.OnChange = utils.OnChange;
	exports.document = utils.document;
	exports.window = utils.window;
	exports.parseTriggers = utils.parseTriggers;
	exports.LinkedList = utils.LinkedList;
	exports.isBs3 = utils.isBs3;
	exports.Trigger = utils.Trigger;
	exports.warnOnce = utils.warnOnce;
	exports.Utils = utils.Utils;
	exports.listenToTriggersV2 = utils.listenToTriggersV2;
	exports.registerOutsideClick = utils.registerOutsideClick;
	exports.AccordionComponent = accordion.AccordionComponent;
	exports.AccordionConfig = accordion.AccordionConfig;
	exports.AccordionModule = accordion.AccordionModule;
	exports.AccordionPanelComponent = accordion.AccordionPanelComponent;
	exports.AlertComponent = alert.AlertComponent;
	exports.AlertConfig = alert.AlertConfig;
	exports.AlertModule = alert.AlertModule;
	exports.ButtonCheckboxDirective = buttons.ButtonCheckboxDirective;
	exports.ButtonRadioDirective = buttons.ButtonRadioDirective;
	exports.ButtonsModule = buttons.ButtonsModule;
	exports.CarouselComponent = carousel.CarouselComponent;
	exports.CarouselConfig = carousel.CarouselConfig;
	exports.CarouselModule = carousel.CarouselModule;
	exports.SlideComponent = carousel.SlideComponent;
	exports.CollapseDirective = collapse.CollapseDirective;
	exports.CollapseModule = collapse.CollapseModule;
	exports.DateFormatter = datepicker.DateFormatter;
	exports.DatePickerComponent = datepicker.DatePickerComponent;
	exports.DatepickerConfig = datepicker.DatepickerConfig;
	exports.DatepickerModule = datepicker.DatepickerModule;
	exports.DayPickerComponent = datepicker.DayPickerComponent;
	exports.MonthPickerComponent = datepicker.MonthPickerComponent;
	exports.YearPickerComponent = datepicker.YearPickerComponent;
	exports.BsDatepickerModule = datepicker.BsDatepickerModule;
	exports.BsDatepickerConfig = datepicker.BsDatepickerConfig;
	exports.BsDaterangepickerConfig = datepicker.BsDaterangepickerConfig;
	exports.BsLocaleService = datepicker.BsLocaleService;
	exports.BsDaterangepickerDirective = datepicker.BsDaterangepickerDirective;
	exports.BsDatepickerDirective = datepicker.BsDatepickerDirective;
	exports.ModalDirective = modal.ModalDirective;
	exports.ModalOptions = modal.ModalOptions;
	exports.ModalBackdropOptions = modal.ModalBackdropOptions;
	exports.ModalBackdropComponent = modal.ModalBackdropComponent;
	exports.ModalModule = modal.ModalModule;
	exports.BsModalRef = modal.BsModalRef;
	exports.BsModalService = modal.BsModalService;
	exports.BsDropdownModule = dropdown.BsDropdownModule;
	exports.BsDropdownConfig = dropdown.BsDropdownConfig;
	exports.BsDropdownState = dropdown.BsDropdownState;
	exports.BsDropdownContainerComponent = dropdown.BsDropdownContainerComponent;
	exports.BsDropdownDirective = dropdown.BsDropdownDirective;
	exports.BsDropdownMenuDirective = dropdown.BsDropdownMenuDirective;
	exports.BsDropdownToggleDirective = dropdown.BsDropdownToggleDirective;
	exports.PagerComponent = pagination.PagerComponent;
	exports.PaginationComponent = pagination.PaginationComponent;
	exports.PaginationConfig = pagination.PaginationConfig;
	exports.PaginationModule = pagination.PaginationModule;
	exports.BarComponent = progressbar.BarComponent;
	exports.ProgressbarComponent = progressbar.ProgressbarComponent;
	exports.ProgressbarConfig = progressbar.ProgressbarConfig;
	exports.ProgressbarModule = progressbar.ProgressbarModule;
	exports.RatingComponent = rating.RatingComponent;
	exports.RatingModule = rating.RatingModule;
	exports.DraggableItemService = sortable.DraggableItemService;
	exports.SortableComponent = sortable.SortableComponent;
	exports.SortableModule = sortable.SortableModule;
	exports.NgTranscludeDirective = tabs.NgTranscludeDirective;
	exports.TabDirective = tabs.TabDirective;
	exports.TabHeadingDirective = tabs.TabHeadingDirective;
	exports.TabsetComponent = tabs.TabsetComponent;
	exports.TabsetConfig = tabs.TabsetConfig;
	exports.TabsModule = tabs.TabsModule;
	exports.TimepickerComponent = timepicker.TimepickerComponent;
	exports.TimepickerConfig = timepicker.TimepickerConfig;
	exports.TimepickerModule = timepicker.TimepickerModule;
	exports.TooltipConfig = tooltip.TooltipConfig;
	exports.TooltipContainerComponent = tooltip.TooltipContainerComponent;
	exports.TooltipDirective = tooltip.TooltipDirective;
	exports.TooltipModule = tooltip.TooltipModule;
	exports.TypeaheadOptions = typeahead.TypeaheadOptions;
	exports.TypeaheadContainerComponent = typeahead.TypeaheadContainerComponent;
	exports.TypeaheadDirective = typeahead.TypeaheadDirective;
	exports.TypeaheadMatch = typeahead.TypeaheadMatch;
	exports.TypeaheadModule = typeahead.TypeaheadModule;
	exports.PopoverConfig = popover.PopoverConfig;
	exports.PopoverContainerComponent = popover.PopoverContainerComponent;
	exports.PopoverDirective = popover.PopoverDirective;
	exports.PopoverModule = popover.PopoverModule;
	exports.ComponentLoader = componentLoader.ComponentLoader;
	exports.ComponentLoaderFactory = componentLoader.ComponentLoaderFactory;
	exports.ContentRef = componentLoader.ContentRef;
	exports.BsComponentRef = componentLoader.BsComponentRef;
	exports.Positioning = positioning.Positioning;
	exports.PositioningService = positioning.PositioningService;
	exports.positionElements = positioning.positionElements;
	exports.MiniState = miniNgrx.MiniState;
	exports.MiniStore = miniNgrx.MiniStore;
	exports.arLocale = locale.arLocale;
	exports.bgLocale = locale.bgLocale;
	exports.csLocale = locale.csLocale;
	exports.daLocale = locale.daLocale;
	exports.deLocale = locale.deLocale;
	exports.enGbLocale = locale.enGbLocale;
	exports.esDoLocale = locale.esDoLocale;
	exports.esLocale = locale.esLocale;
	exports.esUsLocale = locale.esUsLocale;
	exports.fiLocale = locale.fiLocale;
	exports.frLocale = locale.frLocale;
	exports.glLocale = locale.glLocale;
	exports.heLocale = locale.heLocale;
	exports.hiLocale = locale.hiLocale;
	exports.huLocale = locale.huLocale;
	exports.idLocale = locale.idLocale;
	exports.itLocale = locale.itLocale;
	exports.jaLocale = locale.jaLocale;
	exports.koLocale = locale.koLocale;
	exports.ltLocale = locale.ltLocale;
	exports.mnLocale = locale.mnLocale;
	exports.nbLocale = locale.nbLocale;
	exports.nlBeLocale = locale.nlBeLocale;
	exports.nlLocale = locale.nlLocale;
	exports.plLocale = locale.plLocale;
	exports.ptBrLocale = locale.ptBrLocale;
	exports.roLocale = locale.roLocale;
	exports.ruLocale = locale.ruLocale;
	exports.skLocale = locale.skLocale;
	exports.slLocale = locale.slLocale;
	exports.svLocale = locale.svLocale;
	exports.thLocale = locale.thLocale;
	exports.trLocale = locale.trLocale;
	exports.zhCnLocale = locale.zhCnLocale;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC51bWQuanMubWFwIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=