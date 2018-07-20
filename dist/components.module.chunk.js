webpackJsonp(["components.module"],{

/***/ "./node_modules/rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/do.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
//# sourceMappingURL=do.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./src/app/components/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <div class=\"col-md-6\">\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel title=\"Simple\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span>&#9733; <b>Fancy</b> title &#9733;</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n  <div class=\"col-md-6\">\n    <ngb-accordion [closeOthers]=\"true\" activeIds=\"1\">\n      <ngb-panel id=\"1\" title=\"Simple\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"2\">\n        <ng-template ngbPanelTitle>\n          <span>&#9733; <b>Fancy</b> title &#9733;</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"3\" title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <ngb-accordion #acc=\"ngbAccordion\">\n      <ngb-panel id=\"1\" title=\"First panel\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"2\" title=\"Second\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n    <p class=\"mt-2\">\n      <button class=\"btn btn-secondary\" (click)=\"acc.toggle('1')\">Toggle first</button>\n      <button class=\"btn btn-secondary\" (click)=\"acc.toggle('2')\">Toggle second</button>\n    </p>\n  </div>\n  <div class=\"col-md-6\">\n    <ngb-accordion (panelChange)=\"beforeChange($event)\">\n      <ngb-panel id=\"1\" title=\"Simple\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"2\" title=\"I can't be toggled...\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"3\" title=\"I can be opened, but not closed...\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === '2') {
            $event.preventDefault();
        }
        if ($event.panelId === '3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__("./src/app/components/accordion/accordion.component.html"),
            styles: [__webpack_require__("./src/app/components/accordion/accordion.component.scss")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Notification Alerts</div>\n  <div class=\"card-body\">\n    <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.<p>\n    <ngb-alert [dismissible]=\"false\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </ngb-alert>\n\n    <p class=\"mt-4\">Closeable Alert</p>\n    <div *ngFor=\"let alert of alerts\">\n      <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n    </div>\n    <p>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n    </p>\n\n    <p class=\"mt-4\">Self-Closing Alert</p>\n    <div>Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</div>\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n\n    <hr/>\n\n    <p>Show a self-closing success message that disappears after 5 seconds.</p>\n    <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n    <p>\n      <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n    </p>\n\n    <p class=\"mt-4\">Closeable Alert</p>\n    <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/***/ (function(module, exports) {

module.exports = ":host > > > .alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040; }\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.alerts = [];
        this._success = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AlertComponent.prototype, "alerts", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Social buttons</div>\n  <div class=\"card-body\">\n    <div>        \n      <button class=\"btn btn-icon btn-adn mb-1 mr-1\">\n        <i class=\"fa fa-adn\"></i>\n        App.net\n      </button>\n\n      <button class=\"btn btn-icon btn-bitbucket mb-1 mr-1\">\n        <i class=\"fa fa-bitbucket\"></i>\n        Bitbucket\n      </button>\n\n      <button class=\"btn btn-icon btn-dropbox mb-1 mr-1\">\n        <i class=\"fa fa-dropbox\"></i>\n        Dropbox\n      </button>\n\n      <button class=\"btn btn-icon btn-facebook mb-1 mr-1\">\n        <i class=\"fa fa-facebook\"></i>\n        Facebook\n      </button>\n\n      <button class=\"btn btn-icon btn-flickr mb-1 mr-1\">\n        <i class=\"fa fa-flickr\"></i>\n        Flickr\n      </button>\n\n      <button class=\"btn btn-icon btn-foursquare mb-1 mr-1\">\n        <i class=\"fa fa-foursquare\"></i>\n        Foursquare\n      </button>\n\n      <button class=\"btn btn-icon btn-github mb-1 mr-1\">\n        <i class=\"fa fa-github\"></i>\n        GitHub\n      </button>\n\n      <button class=\"btn btn-icon btn-google mb-1 mr-1\">\n        <i class=\"fa fa-google-plus\"></i>\n        Google\n      </button>\n\n      <button class=\"btn btn-icon btn-instagram mb-1 mr-1\">\n        <i class=\"fa fa-instagram\"></i>\n        Instagram\n      </button>\n\n      <button class=\"btn btn-icon btn-linkedin mb-1 mr-1\">\n        <i class=\"fa fa-linkedin\"></i>\n        LinkedIn\n      </button>\n\n      <button class=\"btn btn-icon btn-microsoft mb-1 mr-1\">\n        <i class=\"fa fa-windows\"></i>\n        Microsoft\n      </button>\n\n      <button class=\"btn btn-icon btn-odnoklassniki mb-1 mr-1\">\n        <i class=\"fa fa-odnoklassniki\"></i>\n        Odnoklassniki\n      </button>\n\n      <button class=\"btn btn-icon btn-openid mb-1 mr-1\">\n        <i class=\"fa fa-openid\"></i>\n        OpenID\n      </button>\n\n      <button class=\"btn btn-icon btn-pinterest mb-1 mr-1\">\n        <i class=\"fa fa-pinterest\"></i>\n        Pinterest\n      </button>\n\n      <button class=\"btn btn-icon btn-reddit mb-1 mr-1\">\n        <i class=\"fa fa-reddit\"></i>\n        Reddit\n      </button>\n\n      <button class=\"btn btn-icon btn-soundcloud mb-1 mr-1\">\n        <i class=\"fa fa-soundcloud\"></i>\n        SoundCloud\n      </button>\n\n      <button class=\"btn btn-icon btn-tumblr mb-1 mr-1\">\n        <i class=\"fa fa-tumblr\"></i>\n        Tumblr\n      </button>\n\n      <button class=\"btn btn-icon btn-twitter mb-1 mr-1\">\n        <i class=\"fa fa-twitter\"></i>\n        Twitter\n      </button>\n\n      <button class=\"btn btn-icon btn-vimeo mb-1 mr-1\">\n        <i class=\"fa fa-vimeo-square\"></i>\n        Vimeo\n      </button>\n\n      <button class=\"btn btn-icon btn-vk mb-1 mr-1\">\n        <i class=\"fa fa-vk\"></i>\n        VK\n      </button>\n\n      <button class=\"btn btn-icon btn-yahoo mb-1 mr-1\">\n        <i class=\"fa fa-yahoo\"></i>\n        Yahoo!\n      </button>\n    </div>\n\n    <p class=\"pt-3\">Square</p>\n    <div>\n      <button class=\"btn btn-icon-icon btn-adn mb-1 mr-1\">\n        <i class=\"fa fa-adn\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-bitbucket mb-1 mr-1\">\n        <i class=\"fa fa-bitbucket\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-dropbox mb-1 mr-1\">\n        <i class=\"fa fa-dropbox\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-facebook mb-1 mr-1\">\n        <i class=\"fa fa-facebook\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-flickr mb-1 mr-1\">\n        <i class=\"fa fa-flickr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-foursquare mb-1 mr-1\">\n        <i class=\"fa fa-foursquare\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-github mb-1 mr-1\">\n        <i class=\"fa fa-github\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-google mb-1 mr-1\">\n        <i class=\"fa fa-google-plus\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-instagram mb-1 mr-1\">\n        <i class=\"fa fa-instagram\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-linkedin mb-1 mr-1\">\n        <i class=\"fa fa-linkedin\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-microsoft mb-1 mr-1\">\n        <i class=\"fa fa-windows\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-odnoklassniki mb-1 mr-1\">\n        <i class=\"fa fa-odnoklassniki\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-openid mb-1 mr-1\">\n        <i class=\"fa fa-openid\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-pinterest mb-1 mr-1\">\n        <i class=\"fa fa-pinterest\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-reddit mb-1 mr-1\">\n        <i class=\"fa fa-reddit\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-soundcloud mb-1 mr-1\">\n        <i class=\"fa fa-soundcloud\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-tumblr mb-1 mr-1\">\n        <i class=\"fa fa-tumblr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-twitter mb-1 mr-1\">\n        <i class=\"fa fa-twitter\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vimeo mb-1 mr-1\">\n        <i class=\"fa fa-vimeo-square\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vk mb-1 mr-1\">\n        <i class=\"fa fa-vk\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-yahoo mb-1 mr-1\">\n        <i class=\"fa fa-yahoo\"></i>\n      </button>\n    </div>\n    <p class=\"pt-3\">Circle</p>\n    <div>\n      <button class=\"btn btn-icon-icon btn-adn rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-adn\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-bitbucket rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-bitbucket\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-dropbox rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-dropbox\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-facebook rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-facebook\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-flickr rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-flickr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-foursquare rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-foursquare\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-github rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-github\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-google rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-google-plus\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-instagram rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-instagram\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-linkedin rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-linkedin\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-microsoft rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-windows\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-odnoklassniki rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-odnoklassniki\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-openid rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-openid\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-pinterest rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-pinterest\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-reddit rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-reddit\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-soundcloud rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-soundcloud\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-tumblr rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-tumblr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-twitter rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-twitter\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vimeo rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-vimeo-square\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vk rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-vk\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-yahoo rounded-circle mb-1 mr-1\">\n        <i class=\"fa fa-yahoo\"></i>\n      </button>\n    </div>\n    <p class=\"pt-3\">Large</p>\n    <div>\n      <button class=\"btn btn-icon-icon btn-adn btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-adn\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-bitbucket btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-bitbucket\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-dropbox btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-dropbox\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-facebook btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-facebook\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-flickr btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-flickr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-foursquare btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-foursquare\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-github btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-github\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-google btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-google-plus\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-instagram btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-instagram\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-linkedin btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-linkedin\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-microsoft btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-windows\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-odnoklassniki btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-odnoklassniki\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-openid btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-openid\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-pinterest btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-pinterest\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-reddit btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-reddit\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-soundcloud btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-soundcloud\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-tumblr btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-tumblr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-twitter btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-twitter\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vimeo btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-vimeo-square\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vk btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-vk\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-yahoo btn-lg mb-1 mr-1\">\n        <i class=\"fa fa-yahoo\"></i>\n      </button>\n    </div>\n    <p class=\"pt-3\">Small</p>\n    <div>\n      <button class=\"btn btn-icon-icon btn-adn btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-adn\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-bitbucket btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-bitbucket\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-dropbox btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-dropbox\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-facebook btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-facebook\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-flickr btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-flickr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-foursquare btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-foursquare\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-github btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-github\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-google btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-google-plus\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-instagram btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-instagram\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-linkedin btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-linkedin\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-microsoft btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-windows\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-odnoklassniki btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-odnoklassniki\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-openid btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-openid\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-pinterest btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-pinterest\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-reddit btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-reddit\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-soundcloud btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-soundcloud\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-tumblr btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-tumblr\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-twitter btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-twitter\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vimeo btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-vimeo-square\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-vk btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-vk\"></i>\n      </button>\n      <button class=\"btn btn-icon-icon btn-yahoo btn-sm mb-1 mr-1\">\n        <i class=\"fa fa-yahoo\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?v=4.7.0');\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.af7ae505a9eed503f8b8.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.fee66e712a8a08eef580.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.b06871f281fee6b241d6.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.912ec66d7572ff821749.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n/* $colors\n ------------------------------------------*/\n.btn-adn {\n  color: #fff;\n  background-color: #d87a68;\n  border-color: #d87a68; }\n.btn-adn:hover {\n    color: #fff;\n    background-color: #d05f4a;\n    border-color: #ce563f; }\n.btn-adn:focus, .btn-adn.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(216, 122, 104, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(216, 122, 104, 0.5); }\n.btn-adn.disabled, .btn-adn:disabled {\n    color: #fff;\n    background-color: #d87a68;\n    border-color: #d87a68; }\n.btn-adn:not(:disabled):not(.disabled):active, .btn-adn:not(:disabled):not(.disabled).active,\n  .show > .btn-adn.dropdown-toggle {\n    color: #fff;\n    background-color: #ce563f;\n    border-color: #cb4d35; }\n.btn-adn:not(:disabled):not(.disabled):active:focus, .btn-adn:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-adn.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(216, 122, 104, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(216, 122, 104, 0.5); }\n.btn-bitbucket {\n  color: #fff;\n  background-color: #205081;\n  border-color: #205081; }\n.btn-bitbucket:hover {\n    color: #fff;\n    background-color: #183d62;\n    border-color: #163758; }\n.btn-bitbucket:focus, .btn-bitbucket.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(32, 80, 129, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(32, 80, 129, 0.5); }\n.btn-bitbucket.disabled, .btn-bitbucket:disabled {\n    color: #fff;\n    background-color: #205081;\n    border-color: #205081; }\n.btn-bitbucket:not(:disabled):not(.disabled):active, .btn-bitbucket:not(:disabled):not(.disabled).active,\n  .show > .btn-bitbucket.dropdown-toggle {\n    color: #fff;\n    background-color: #163758;\n    border-color: #13304e; }\n.btn-bitbucket:not(:disabled):not(.disabled):active:focus, .btn-bitbucket:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-bitbucket.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(32, 80, 129, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(32, 80, 129, 0.5); }\n.btn-dropbox {\n  color: #fff;\n  background-color: #1087dd;\n  border-color: #1087dd; }\n.btn-dropbox:hover {\n    color: #fff;\n    background-color: #0d71b9;\n    border-color: #0d6aad; }\n.btn-dropbox:focus, .btn-dropbox.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(16, 135, 221, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(16, 135, 221, 0.5); }\n.btn-dropbox.disabled, .btn-dropbox:disabled {\n    color: #fff;\n    background-color: #1087dd;\n    border-color: #1087dd; }\n.btn-dropbox:not(:disabled):not(.disabled):active, .btn-dropbox:not(:disabled):not(.disabled).active,\n  .show > .btn-dropbox.dropdown-toggle {\n    color: #fff;\n    background-color: #0d6aad;\n    border-color: #0c63a2; }\n.btn-dropbox:not(:disabled):not(.disabled):active:focus, .btn-dropbox:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dropbox.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(16, 135, 221, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(16, 135, 221, 0.5); }\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: #3b5998; }\n.btn-facebook:hover {\n    color: #fff;\n    background-color: #30497c;\n    border-color: #2d4373; }\n.btn-facebook:focus, .btn-facebook.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5); }\n.btn-facebook.disabled, .btn-facebook:disabled {\n    color: #fff;\n    background-color: #3b5998;\n    border-color: #3b5998; }\n.btn-facebook:not(:disabled):not(.disabled):active, .btn-facebook:not(:disabled):not(.disabled).active,\n  .show > .btn-facebook.dropdown-toggle {\n    color: #fff;\n    background-color: #2d4373;\n    border-color: #293e6a; }\n.btn-facebook:not(:disabled):not(.disabled):active:focus, .btn-facebook:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-facebook.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5); }\n.btn-flickr {\n  color: #fff;\n  background-color: #ff0084;\n  border-color: #ff0084; }\n.btn-flickr:hover {\n    color: #fff;\n    background-color: #d90070;\n    border-color: #cc006a; }\n.btn-flickr:focus, .btn-flickr.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5); }\n.btn-flickr.disabled, .btn-flickr:disabled {\n    color: #fff;\n    background-color: #ff0084;\n    border-color: #ff0084; }\n.btn-flickr:not(:disabled):not(.disabled):active, .btn-flickr:not(:disabled):not(.disabled).active,\n  .show > .btn-flickr.dropdown-toggle {\n    color: #fff;\n    background-color: #cc006a;\n    border-color: #bf0063; }\n.btn-flickr:not(:disabled):not(.disabled):active:focus, .btn-flickr:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-flickr.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5); }\n.btn-foursquare {\n  color: #fff;\n  background-color: #f94877;\n  border-color: #f94877; }\n.btn-foursquare:hover {\n    color: #fff;\n    background-color: #f8235b;\n    border-color: #f71752; }\n.btn-foursquare:focus, .btn-foursquare.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(249, 72, 119, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(249, 72, 119, 0.5); }\n.btn-foursquare.disabled, .btn-foursquare:disabled {\n    color: #fff;\n    background-color: #f94877;\n    border-color: #f94877; }\n.btn-foursquare:not(:disabled):not(.disabled):active, .btn-foursquare:not(:disabled):not(.disabled).active,\n  .show > .btn-foursquare.dropdown-toggle {\n    color: #fff;\n    background-color: #f71752;\n    border-color: #f70a49; }\n.btn-foursquare:not(:disabled):not(.disabled):active:focus, .btn-foursquare:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-foursquare.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(249, 72, 119, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(249, 72, 119, 0.5); }\n.btn-github {\n  color: #fff;\n  background-color: #444;\n  border-color: #444; }\n.btn-github:hover {\n    color: #fff;\n    background-color: #313131;\n    border-color: #2b2a2a; }\n.btn-github:focus, .btn-github.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(68, 68, 68, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(68, 68, 68, 0.5); }\n.btn-github.disabled, .btn-github:disabled {\n    color: #fff;\n    background-color: #444;\n    border-color: #444; }\n.btn-github:not(:disabled):not(.disabled):active, .btn-github:not(:disabled):not(.disabled).active,\n  .show > .btn-github.dropdown-toggle {\n    color: #fff;\n    background-color: #2b2a2a;\n    border-color: #242424; }\n.btn-github:not(:disabled):not(.disabled):active:focus, .btn-github:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-github.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(68, 68, 68, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(68, 68, 68, 0.5); }\n.btn-google {\n  color: #fff;\n  background-color: #dd4b39;\n  border-color: #dd4b39; }\n.btn-google:hover {\n    color: #fff;\n    background-color: #cd3623;\n    border-color: #c23321; }\n.btn-google:focus, .btn-google.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(221, 75, 57, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(221, 75, 57, 0.5); }\n.btn-google.disabled, .btn-google:disabled {\n    color: #fff;\n    background-color: #dd4b39;\n    border-color: #dd4b39; }\n.btn-google:not(:disabled):not(.disabled):active, .btn-google:not(:disabled):not(.disabled).active,\n  .show > .btn-google.dropdown-toggle {\n    color: #fff;\n    background-color: #c23321;\n    border-color: #b7301f; }\n.btn-google:not(:disabled):not(.disabled):active:focus, .btn-google:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-google.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(221, 75, 57, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(221, 75, 57, 0.5); }\n.btn-instagram {\n  color: #fff;\n  background-color: #3f729b;\n  border-color: #3f729b; }\n.btn-instagram:hover {\n    color: #fff;\n    background-color: #345e80;\n    border-color: #305777; }\n.btn-instagram:focus, .btn-instagram.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(63, 114, 155, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(63, 114, 155, 0.5); }\n.btn-instagram.disabled, .btn-instagram:disabled {\n    color: #fff;\n    background-color: #3f729b;\n    border-color: #3f729b; }\n.btn-instagram:not(:disabled):not(.disabled):active, .btn-instagram:not(:disabled):not(.disabled).active,\n  .show > .btn-instagram.dropdown-toggle {\n    color: #fff;\n    background-color: #305777;\n    border-color: #2d516e; }\n.btn-instagram:not(:disabled):not(.disabled):active:focus, .btn-instagram:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-instagram.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(63, 114, 155, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(63, 114, 155, 0.5); }\n.btn-linkedin {\n  color: #fff;\n  background-color: #007bb6;\n  border-color: #007bb6; }\n.btn-linkedin:hover {\n    color: #fff;\n    background-color: #006190;\n    border-color: #005983; }\n.btn-linkedin:focus, .btn-linkedin.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 182, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 182, 0.5); }\n.btn-linkedin.disabled, .btn-linkedin:disabled {\n    color: #fff;\n    background-color: #007bb6;\n    border-color: #007bb6; }\n.btn-linkedin:not(:disabled):not(.disabled):active, .btn-linkedin:not(:disabled):not(.disabled).active,\n  .show > .btn-linkedin.dropdown-toggle {\n    color: #fff;\n    background-color: #005983;\n    border-color: #005076; }\n.btn-linkedin:not(:disabled):not(.disabled):active:focus, .btn-linkedin:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-linkedin.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 182, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(0, 123, 182, 0.5); }\n.btn-microsoft {\n  color: #fff;\n  background-color: #2672ec;\n  border-color: #2672ec; }\n.btn-microsoft:hover {\n    color: #fff;\n    background-color: #135fd9;\n    border-color: #125acd; }\n.btn-microsoft:focus, .btn-microsoft.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 114, 236, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(38, 114, 236, 0.5); }\n.btn-microsoft.disabled, .btn-microsoft:disabled {\n    color: #fff;\n    background-color: #2672ec;\n    border-color: #2672ec; }\n.btn-microsoft:not(:disabled):not(.disabled):active, .btn-microsoft:not(:disabled):not(.disabled).active,\n  .show > .btn-microsoft.dropdown-toggle {\n    color: #fff;\n    background-color: #125acd;\n    border-color: #1155c1; }\n.btn-microsoft:not(:disabled):not(.disabled):active:focus, .btn-microsoft:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-microsoft.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 114, 236, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(38, 114, 236, 0.5); }\n.btn-odnoklassniki {\n  color: #fff;\n  background-color: #f4731c;\n  border-color: #f4731c; }\n.btn-odnoklassniki:hover {\n    color: #fff;\n    background-color: #df600b;\n    border-color: #d35b0a; }\n.btn-odnoklassniki:focus, .btn-odnoklassniki.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(244, 115, 28, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(244, 115, 28, 0.5); }\n.btn-odnoklassniki.disabled, .btn-odnoklassniki:disabled {\n    color: #fff;\n    background-color: #f4731c;\n    border-color: #f4731c; }\n.btn-odnoklassniki:not(:disabled):not(.disabled):active, .btn-odnoklassniki:not(:disabled):not(.disabled).active,\n  .show > .btn-odnoklassniki.dropdown-toggle {\n    color: #fff;\n    background-color: #d35b0a;\n    border-color: #c7560a; }\n.btn-odnoklassniki:not(:disabled):not(.disabled):active:focus, .btn-odnoklassniki:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-odnoklassniki.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(244, 115, 28, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(244, 115, 28, 0.5); }\n.btn-openid {\n  color: #212529;\n  background-color: #f7931e;\n  border-color: #f7931e; }\n.btn-openid:hover {\n    color: #fff;\n    background-color: #e78008;\n    border-color: #da7908; }\n.btn-openid:focus, .btn-openid.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.5); }\n.btn-openid.disabled, .btn-openid:disabled {\n    color: #212529;\n    background-color: #f7931e;\n    border-color: #f7931e; }\n.btn-openid:not(:disabled):not(.disabled):active, .btn-openid:not(:disabled):not(.disabled).active,\n  .show > .btn-openid.dropdown-toggle {\n    color: #fff;\n    background-color: #da7908;\n    border-color: #ce7207; }\n.btn-openid:not(:disabled):not(.disabled):active:focus, .btn-openid:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-openid.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.5); }\n.btn-pinterest {\n  color: #fff;\n  background-color: #cb2027;\n  border-color: #cb2027; }\n.btn-pinterest:hover {\n    color: #fff;\n    background-color: #aa1b21;\n    border-color: #9f191f; }\n.btn-pinterest:focus, .btn-pinterest.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5); }\n.btn-pinterest.disabled, .btn-pinterest:disabled {\n    color: #fff;\n    background-color: #cb2027;\n    border-color: #cb2027; }\n.btn-pinterest:not(:disabled):not(.disabled):active, .btn-pinterest:not(:disabled):not(.disabled).active,\n  .show > .btn-pinterest.dropdown-toggle {\n    color: #fff;\n    background-color: #9f191f;\n    border-color: #94171c; }\n.btn-pinterest:not(:disabled):not(.disabled):active:focus, .btn-pinterest:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-pinterest.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5); }\n.btn-reddit {\n  color: #212529;\n  background-color: #eff7ff;\n  border-color: #eff7ff;\n  color: block; }\n.btn-reddit:hover {\n    color: #212529;\n    background-color: #c9e4ff;\n    border-color: #bcdeff; }\n.btn-reddit:focus, .btn-reddit.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(239, 247, 255, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(239, 247, 255, 0.5); }\n.btn-reddit.disabled, .btn-reddit:disabled {\n    color: #212529;\n    background-color: #eff7ff;\n    border-color: #eff7ff; }\n.btn-reddit:not(:disabled):not(.disabled):active, .btn-reddit:not(:disabled):not(.disabled).active,\n  .show > .btn-reddit.dropdown-toggle {\n    color: #212529;\n    background-color: #bcdeff;\n    border-color: #afd7ff; }\n.btn-reddit:not(:disabled):not(.disabled):active:focus, .btn-reddit:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-reddit.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(239, 247, 255, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(239, 247, 255, 0.5); }\n.btn-soundcloud {\n  color: #fff;\n  background-color: #f50;\n  border-color: #f50; }\n.btn-soundcloud:hover {\n    color: #fff;\n    background-color: #d94800;\n    border-color: #cc4400; }\n.btn-soundcloud:focus, .btn-soundcloud.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 85, 0, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 85, 0, 0.5); }\n.btn-soundcloud.disabled, .btn-soundcloud:disabled {\n    color: #fff;\n    background-color: #f50;\n    border-color: #f50; }\n.btn-soundcloud:not(:disabled):not(.disabled):active, .btn-soundcloud:not(:disabled):not(.disabled).active,\n  .show > .btn-soundcloud.dropdown-toggle {\n    color: #fff;\n    background-color: #cc4400;\n    border-color: #bf4000; }\n.btn-soundcloud:not(:disabled):not(.disabled):active:focus, .btn-soundcloud:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-soundcloud.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 85, 0, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 85, 0, 0.5); }\n.btn-tumblr {\n  color: #fff;\n  background-color: #2c4762;\n  border-color: #2c4762; }\n.btn-tumblr:hover {\n    color: #fff;\n    background-color: #203448;\n    border-color: #1c2e3f; }\n.btn-tumblr:focus, .btn-tumblr.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 71, 98, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(44, 71, 98, 0.5); }\n.btn-tumblr.disabled, .btn-tumblr:disabled {\n    color: #fff;\n    background-color: #2c4762;\n    border-color: #2c4762; }\n.btn-tumblr:not(:disabled):not(.disabled):active, .btn-tumblr:not(:disabled):not(.disabled).active,\n  .show > .btn-tumblr.dropdown-toggle {\n    color: #fff;\n    background-color: #1c2e3f;\n    border-color: #182736; }\n.btn-tumblr:not(:disabled):not(.disabled):active:focus, .btn-tumblr:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-tumblr.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 71, 98, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(44, 71, 98, 0.5); }\n.btn-twitter {\n  color: #212529;\n  background-color: #55acee;\n  border-color: #55acee; }\n.btn-twitter:hover {\n    color: #fff;\n    background-color: #329beb;\n    border-color: #2795e9; }\n.btn-twitter:focus, .btn-twitter.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(85, 172, 238, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(85, 172, 238, 0.5); }\n.btn-twitter.disabled, .btn-twitter:disabled {\n    color: #212529;\n    background-color: #55acee;\n    border-color: #55acee; }\n.btn-twitter:not(:disabled):not(.disabled):active, .btn-twitter:not(:disabled):not(.disabled).active,\n  .show > .btn-twitter.dropdown-toggle {\n    color: #fff;\n    background-color: #2795e9;\n    border-color: #1b90e8; }\n.btn-twitter:not(:disabled):not(.disabled):active:focus, .btn-twitter:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-twitter.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(85, 172, 238, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(85, 172, 238, 0.5); }\n.btn-vimeo {\n  color: #fff;\n  background-color: #1ab7ea;\n  border-color: #1ab7ea; }\n.btn-vimeo:hover {\n    color: #fff;\n    background-color: #139ecb;\n    border-color: #1295bf; }\n.btn-vimeo:focus, .btn-vimeo.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(26, 183, 234, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(26, 183, 234, 0.5); }\n.btn-vimeo.disabled, .btn-vimeo:disabled {\n    color: #fff;\n    background-color: #1ab7ea;\n    border-color: #1ab7ea; }\n.btn-vimeo:not(:disabled):not(.disabled):active, .btn-vimeo:not(:disabled):not(.disabled).active,\n  .show > .btn-vimeo.dropdown-toggle {\n    color: #fff;\n    background-color: #1295bf;\n    border-color: #108cb4; }\n.btn-vimeo:not(:disabled):not(.disabled):active:focus, .btn-vimeo:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-vimeo.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(26, 183, 234, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(26, 183, 234, 0.5); }\n.btn-vk {\n  color: #fff;\n  background-color: #587ea3;\n  border-color: #587ea3; }\n.btn-vk:hover {\n    color: #fff;\n    background-color: #4b6b8a;\n    border-color: #466482; }\n.btn-vk:focus, .btn-vk.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(88, 126, 163, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(88, 126, 163, 0.5); }\n.btn-vk.disabled, .btn-vk:disabled {\n    color: #fff;\n    background-color: #587ea3;\n    border-color: #587ea3; }\n.btn-vk:not(:disabled):not(.disabled):active, .btn-vk:not(:disabled):not(.disabled).active,\n  .show > .btn-vk.dropdown-toggle {\n    color: #fff;\n    background-color: #466482;\n    border-color: #425e7a; }\n.btn-vk:not(:disabled):not(.disabled):active:focus, .btn-vk:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-vk.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(88, 126, 163, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(88, 126, 163, 0.5); }\n.btn-yahoo {\n  color: #fff;\n  background-color: #720e9e;\n  border-color: #720e9e; }\n.btn-yahoo:hover {\n    color: #fff;\n    background-color: #590b7b;\n    border-color: #500a6f; }\n.btn-yahoo:focus, .btn-yahoo.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(114, 14, 158, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(114, 14, 158, 0.5); }\n.btn-yahoo.disabled, .btn-yahoo:disabled {\n    color: #fff;\n    background-color: #720e9e;\n    border-color: #720e9e; }\n.btn-yahoo:not(:disabled):not(.disabled):active, .btn-yahoo:not(:disabled):not(.disabled).active,\n  .show > .btn-yahoo.dropdown-toggle {\n    color: #fff;\n    background-color: #500a6f;\n    border-color: #480963; }\n.btn-yahoo:not(:disabled):not(.disabled):active:focus, .btn-yahoo:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-yahoo.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(114, 14, 158, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(114, 14, 158, 0.5); }\n.btn-icon {\n  min-width: 160px; }\n"

/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonIconsComponent = /** @class */ (function () {
    function ButtonIconsComponent() {
    }
    ButtonIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-icons',
            template: __webpack_require__("./src/app/components/button-icons/button-icons.component.html"),
            styles: [__webpack_require__("./src/app/components/button-icons/button-icons.component.scss")]
        })
    ], ButtonIconsComponent);
    return ButtonIconsComponent;
}());



/***/ }),

/***/ "./src/app/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Button options</div>\n      <div class=\"card-body\">\n        <p>Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>\n        <button class=\"btn btn-secondary mr-1 mb-1\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-primary mr-1 mb-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success mr-1 mb-1\">Success</button>\n        <button type=\"button\" class=\"btn btn-info mr-1 mb-1\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning mr-1 mb-1\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger mr-1 mb-1\">Danger</button>\n        <button type=\"button\" class=\"btn btn-primary mr-1 mb-1\" disabled=\"\">Disabled</button>\n        <button type=\"button\" class=\"btn btn-link mr-1 mb-1\">Link</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Outline</div>\n      <div class=\"card-body\">\n        <p>\n          In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the\n          <code>\n            .btn-outline-*\n          </code>\n          ones to remove all background images and colors on any button.\n        </p>\n        <button class=\"btn btn-outline-secondary mr-1 mb-1\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-outline-success mr-1 mb-1\">Success</button>\n        <button type=\"button\" class=\"btn btn-outline-info mr-1 mb-1\">Info</button>\n        <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\">Warning</button>\n        <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\">Danger</button>\n        <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" disabled=\"\">Disabled</button>\n        <button type=\"button\" class=\"btn btn-link mr-1 mb-1\">Link</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Checkbox and radio buttons</div>\n      <div class=\"card-body\">\n        <div [(ngModel)]=\"radioModel\" ngbRadioGroup name=\"radioBasic\">\n          <label class=\"btn btn-secondary btn-sm\">\n            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n          </label>\n          <label class=\"btn btn-secondary btn-sm\">\n            <input type=\"radio\" value=\"middle\"> Middle\n          </label>\n          <label class=\"btn btn-secondary btn-sm\">\n            <input type=\"radio\" [value]=\"false\"> Right\n          </label>\n          <label class=\"btn btn-secondary btn-sm\">\n            <input type=\"radio\" disabled=\"\"> {{radioModel}}\n          </label>\n        </div>\n\n        <p>Check-box-like button group can be easily done with pure Angular, no custom directives necessary.\n          But we include demo here for completeness.</p>\n        <div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.left\">\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.left\"> Left (pre-checked)\n          </label>\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.middle\">\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.middle\"> Middle\n          </label>\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.right\">\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.right\"> Right\n          </label>\n        </div>\n        <pre>{{checkboxModel | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Sizing</div>\n      <div class=\"card-body\">\n        <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>\n        <p>\n          <a href=\"javascript:;\" class=\"btn btn-secondary btn-lg mr-1\">Large button</a>\n          &nbsp;\n          <a href=\"javascript:;\" class=\"btn btn-outline-info btn-lg mr-1\">Large button</a>\n        </p>\n        <p>\n          <a href=\"javascript:;\" class=\"btn btn-secondary mr-1\">Default button</a>\n          &nbsp;\n          <a href=\"javascript:;\" class=\"btn btn-outline-primary mr-1\">Default button</a>\n        </p>\n        <p>\n          <a href=\"javascript:;\" class=\"btn btn-secondary btn-sm mr-1\">Small button</a>\n          &nbsp;\n          <a href=\"javascript:;\" class=\"btn btn-outline-danger btn-sm mr-1\">Small button</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">Button styles</div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p>Button icons</p>\n        <p>Custom bootstrap buttons with icons</p>\n        <button type=\"button\" class=\"btn btn-primary btn-icon loading-demo mr-1 mb-1\">\n          <i class=\"icon icon-basic-paperplane\"></i>\n          <span>Submit</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-icon mr-1 mb-1\">\n          <i class=\"icon icon-basic-ban\"></i>\n          <span>Warning</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-info btn-icon mr-1 mb-1\">\n          <i class=\"icon icon-basic-server-upload\"></i>\n          <span>Upload</span>\n        </button>\n        <button class=\"btn btn-success btn-icon-icon mr-1 mb-1\">\n          <i class=\"icon icon-basic-heart\"></i>\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <p>Groups</p>\n        <p>Wrap a series of buttons with .btn in .btn-group.</p>\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n          <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n          <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Toolbar</div>\n      <div class=\"card-body\">\n        <p>Combine sets of button groups into button toolbars for more complex components.</p>\n        <div class=\"btn-toolbar\" role=\"toolbar\">\n          <div class=\"btn-group mr-1 mb-1\">\n            <button type=\"button\" class=\"btn btn-success\">1</button>\n            <button type=\"button\" class=\"btn btn-success\">2</button>\n            <button type=\"button\" class=\"btn btn-success\">3</button>\n            <button type=\"button\" class=\"btn btn-success\">4</button>\n          </div>\n          <div class=\"btn-group mr-1 mb-1\">\n            <button type=\"button\" class=\"btn btn-primary\">5</button>\n            <button type=\"button\" class=\"btn btn-primary\">6</button>\n            <button type=\"button\" class=\"btn btn-primary\">7</button>\n          </div>\n          <div class=\"btn-group mr-1 mb-1\">\n            <button type=\"button\" class=\"btn btn-warning\">8</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Nesting</div>\n      <div class=\"card-body\">\n        <p>\n          Place a\n          <code>.btn-group</code>\n          within another\n          <code>.btn-group</code>\n          when you want dropdown menus mixed with a series of buttons.\n        </p>\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-secondary\">1</button>\n          <button type=\"button\" class=\"btn btn-secondary\">2</button>\n          <div class=\"dropdown btn-group\" ngbDropdown>\n            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" ngbDropdownToggle>\n              Dropdown\n              <span class=\"caret\"></span>\n            </button>\n            <div class=\"dropdown-menu\" role=\"menu\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">   \n    <div class=\"card\">\n      <div class=\"card-header\">Block level buttons</div>\n      <div class=\"card-body\">\n        <p>Create block level buttons—those that span the full width of a parent—by adding .btn-block.</p>\n        <button type=\"button\" class=\"btn btn-danger btn-lg btn-block mb-1\">\n          <span>Block level button</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-info btn-block mb-1\">\n          <span>Block level button</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block mb-1\">\n          <span>Block level button</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Vertical groups</div>\n      <div class=\"card-body\">\n        <p>Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.</p>\n        <div class=\"btn-group-vertical\">\n          <button type=\"button\" class=\"btn btn-secondary\">Top</button>\n          <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n          <button type=\"button\" class=\"btn btn-secondary\">Bottom</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.radioModel = 1;
        this.checkboxModel = {
            left: true,
            middle: false,
            right: false
        };
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("./src/app/components/buttons/buttons.component.html"),
            styles: [__webpack_require__("./src/app/components/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Carousel</div>\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-center\">\n      <ngb-carousel>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/unsplash/16.jpg\" alt=\"Random first slide\">\n          <div class=\"carousel-caption\">\n            <h3 class=\"ff-serif text-uppercase\">First slide label</h3>\n            <p class=\"mb-0\">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/unsplash/17.jpg\" alt=\"Random second slide\">\n          <div class=\"carousel-caption\">\n            <h3 class=\"ff-serif text-uppercase\">Second slide label</h3>\n            <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/unsplash/21.jpg\" alt=\"Random third slide\">\n          <div class=\"carousel-caption\">\n            <h3 class=\"ff-serif text-uppercase\">Third slide label</h3>\n            <p class=\"mb-0\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/components/carousel/carousel.component.scss")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/collapse/collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Collapse</div>\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn btn-primary mb-3\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">Toggle</button>\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"card\">\n        <div>You can collapse this card by clicking Toggle.<br/> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/collapse/collapse.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/collapse/collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__("./src/app/components/collapse/collapse.component.html"),
            styles: [__webpack_require__("./src/app/components/collapse/collapse.component.scss")]
        })
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_routing__ = __webpack_require__("./src/app/components/components.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__ = __webpack_require__("./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__ = __webpack_require__("./src/app/components/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spinners_spinners_component__ = __webpack_require__("./src/app/components/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__accordion_accordion_component__ = __webpack_require__("./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carousel_carousel_component__ = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__collapse_collapse_component__ = __webpack_require__("./src/app/components/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__datepicker_datepicker_component__ = __webpack_require__("./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dropdown_dropdown_component__ = __webpack_require__("./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popover_popover_component__ = __webpack_require__("./src/app/components/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rating_rating_component__ = __webpack_require__("./src/app/components/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tabs_tabs_component__ = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__timepicker_timepicker_component__ = __webpack_require__("./src/app/components/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tooltip_tooltip_component__ = __webpack_require__("./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__typeahead_typeahead_component__ = __webpack_require__("./src/app/components/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__button_icons_button_icons_component__ = __webpack_require__("./src/app/components/button-icons/button-icons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__components_routing__["a" /* ComponentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__["a" /* ProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__spinners_spinners_component__["a" /* SpinnersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__accordion_accordion_component__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_13__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_14__collapse_collapse_component__["a" /* CollapseComponent */],
                __WEBPACK_IMPORTED_MODULE_15__datepicker_datepicker_component__["a" /* DatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_17__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__popover_popover_component__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_19__rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__timepicker_timepicker_component__["a" /* TimepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__tooltip_tooltip_component__["a" /* TooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_23__typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__button_icons_button_icons_component__["a" /* ButtonIconsComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__("./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_progress_component__ = __webpack_require__("./src/app/components/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinners_spinners_component__ = __webpack_require__("./src/app/components/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_component__ = __webpack_require__("./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collapse_collapse_component__ = __webpack_require__("./src/app/components/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_datepicker_component__ = __webpack_require__("./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dropdown_dropdown_component__ = __webpack_require__("./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popover_popover_component__ = __webpack_require__("./src/app/components/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_rating_component__ = __webpack_require__("./src/app/components/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_component__ = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_component__ = __webpack_require__("./src/app/components/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_component__ = __webpack_require__("./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_component__ = __webpack_require__("./src/app/components/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__button_icons_button_icons_component__ = __webpack_require__("./src/app/components/button-icons/button-icons.component.ts");


















var ComponentsRoutes = [
    {
        path: '',
        children: [{
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__["a" /* ButtonsComponent */],
                data: {
                    heading: 'Buttons'
                }
            }, {
                path: 'buttonicons',
                component: __WEBPACK_IMPORTED_MODULE_17__button_icons_button_icons_component__["a" /* ButtonIconsComponent */],
                data: {
                    heading: 'Social Button Icons'
                }
            }, {
                path: 'progress',
                component: __WEBPACK_IMPORTED_MODULE_1__progress_progress_component__["a" /* ProgressComponent */],
                data: {
                    heading: 'Progress bars'
                }
            }, {
                path: 'pagination',
                component: __WEBPACK_IMPORTED_MODULE_2__pagination_pagination_component__["a" /* PaginationComponent */],
                data: {
                    heading: 'Pagination'
                }
            }, {
                path: 'spinners',
                component: __WEBPACK_IMPORTED_MODULE_3__spinners_spinners_component__["a" /* SpinnersComponent */],
                data: {
                    heading: 'Spinner'
                }
            }, {
                path: 'accordion',
                component: __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_component__["a" /* AccordionComponent */],
                data: {
                    heading: 'Accordion'
                }
            }, {
                path: 'alert',
                component: __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__["a" /* AlertComponent */],
                data: {
                    heading: 'Alert'
                }
            }, {
                path: 'carousel',
                component: __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
                data: {
                    heading: 'Carousel'
                }
            }, {
                path: 'collapse',
                component: __WEBPACK_IMPORTED_MODULE_7__collapse_collapse_component__["a" /* CollapseComponent */],
                data: {
                    heading: 'Collapse'
                }
            }, {
                path: 'datepicker',
                component: __WEBPACK_IMPORTED_MODULE_8__datepicker_datepicker_component__["a" /* DatepickerComponent */],
                data: {
                    heading: 'Datepicker'
                }
            }, {
                path: 'dropdown',
                component: __WEBPACK_IMPORTED_MODULE_9__dropdown_dropdown_component__["a" /* DropdownComponent */],
                data: {
                    heading: 'Dropdown'
                }
            }, {
                path: 'modal',
                component: __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__["a" /* ModalComponent */],
                data: {
                    heading: 'Modal'
                }
            }, {
                path: 'popover',
                component: __WEBPACK_IMPORTED_MODULE_11__popover_popover_component__["a" /* PopoverComponent */],
                data: {
                    heading: 'Popovers'
                }
            }, {
                path: 'rating',
                component: __WEBPACK_IMPORTED_MODULE_12__rating_rating_component__["a" /* RatingComponent */],
                data: {
                    heading: 'Rating'
                }
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_component__["a" /* TabsComponent */],
                data: {
                    heading: 'Tabs'
                }
            }, {
                path: 'timepicker',
                component: __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_component__["a" /* TimepickerComponent */],
                data: {
                    heading: 'Timepicker'
                }
            }, {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_component__["a" /* TooltipComponent */],
                data: {
                    heading: 'Tooltips'
                }
            }, {
                path: 'typeahead',
                component: __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                data: {
                    heading: 'Typeahead'
                }
            }]
    }
];


/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Simple datepicker</div>\n      <div class=\"card-body\">\n        <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n\n        <div class=\"block mt-3 mb-3\">\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n        </div>\n\n        <pre>Month: {{ date.month }}.{{ date.year }}</pre>\n        <pre>Model: {{ model | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Multiple months</div>\n      <div class=\"card-body\">\n        <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\n\n        <p class=\"pt-3\">Inline</p>\n\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                    name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" ngbDatepicker #d=\"ngbDatepicker\">\n              <div class=\"input-group-prepend\" (click)=\"d.toggle()\" >\n                <span class=\"input-group-text\" id=\"\"><i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i></span>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <p class=\"pt-3\">Options</p>\n\n        <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\n          <option [ngValue]=\"1\">One month</option>\n          <option [ngValue]=\"2\">Two months</option>\n          <option [ngValue]=\"3\">Three months</option>\n        </select>\n\n        <select class=\"custom-select\" [(ngModel)]=\"navigation\">\n          <option value=\"none\">Without navigation</option>\n          <option value=\"select\">With select boxes</option>\n          <option value=\"arrows\">Without select boxes</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Datepicker in a popup</div>\n      <div class=\"card-body\">\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d2=\"ngbDatepicker\">\n              <div class=\"input-group-prepend\" (click)=\"d2.toggle()\" >\n                <span class=\"input-group-text\" id=\"\"><i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i></span>\n              </div>\n            </div>\n          </div>\n        </form>\n        <pre>Model: {{ popupModel | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Custom day view</div>\n      <div class=\"card-body\">\n        <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\n\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\">\n              <div class=\"input-group-prepend\" (click)=\"d3.toggle()\" >\n                <span class=\"input-group-text\" id=\"\"><i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i></span>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n          <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\"\n                [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n            {{ date.day }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Disabled datepicker</div>\n      <div class=\"card-body\">\n        <ngb-datepicker [(ngModel)]=\"disabledModel\" [disabled]=\"disabled\"></ngb-datepicker>\n\n        <div class=\"block mt-3\">\n          <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n            {{ disabled ? \"disabled\" : \"enabled\"}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Internationalization of datepickers</div>\n      <div class=\"card-body\">\n        <div class=\"block mb-3\">\n          <div [(ngModel)]=\"language\" ngbRadioGroup>\n            <label class=\"btn btn-primary btn-sm\">\n              <input type=\"radio\" value=\"en\"> English\n            </label>\n            <label class=\"btn btn-primary btn-sm\">\n              <input type=\"radio\" value=\"fr\"> Français\n            </label>\n          </div>\n        </div>\n        <ngb-datepicker [(ngModel)]=\"intModel\"></ngb-datepicker>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  border-radius: 0;\n  display: inline-block;\n  width: 2rem; }\n\n.custom-day:hover {\n  background-color: #e6e6e6; }\n\n.weekend {\n  background-color: #f0ad4e;\n  border-radius: 0;\n  color: white; }\n\n.hidden {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18n */
/* unused harmony export CustomDatepickerI18n */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var now = new Date();
var I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fr: {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
};
// Define a service holding the language. You probably already have one if your app is i18ned.
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'en';
    }
    I18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerI18n */]));

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(_i18n) {
        this._i18n = _i18n;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.disabledModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
    }
    Object.defineProperty(DatepickerComponent.prototype, "language", {
        get: function () {
            return this._i18n.language;
        },
        set: function (language) {
            this._i18n.language = language;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    DatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__("./src/app/components/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("./src/app/components/datepicker/datepicker.component.scss")],
            providers: [I18n, { provide: __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerI18n */], useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
        }),
        __metadata("design:paramtypes", [I18n])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Basic dropdown</div>\n  <div class=\"card-body\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n\n    <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu2\" ngbDropdownToggle>Toggle dropup</button>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n\n    <p class=\"mt-4\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n\n      <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n      <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n    </div>\n\n    <p class=\"mt-4\">Manual triggers</p>\n    <p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n\n      <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n      <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n    </div>\n\n\n    <p class=\"mt-4\">Turn a button into a dropdown toggle with some basic markup changes.</p>\n    <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-danger\">Action</button>\n      <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </div>\n    </div>\n    <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Action</button>\n      <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </div>\n    </div>\n    <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-info dropdown-toggle\" ngbDropdownToggle>\n        Dropdown\n        <span class=\"caret\"></span>\n      </button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </div>\n    </div>\n    <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" ngbDropdownToggle>\n        Dropdown\n        <span class=\"caret\"></span>\n      </button>\n      <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__("./src/app/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/components/dropdown/dropdown.component.scss")]
        })
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Modal</div>\n  <div class=\"card-body\">\n    <button class=\"btn btn-secondary\" (click)=\"open(content)\">Modal with default options</button>\n    <pre>{{closeResult}}</pre>\n\n    <div role=\"document\" class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title text-uppercase\">Modal title</h6>\n          <button aria-label=\"Close\" class=\"close\" type=\"button\">\n            <span aria-hidden=\"true\">×</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>One fine body…</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" type=\"button\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template ngbModalContainer></ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h6 class=\"modal-title text-uppercase\">Modal title</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Pagination options</div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div>Default pagination</div>\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n\n        <div>directionLinks = false</div>\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n\n        <div>boundaryLinks = true</div>\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n        <div>Pagination sizes</div>\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n      </div>\n      <div class=\"col-lg-6\">\n        <div>maxSize = 5, rotate = false</div>\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n        <div>maxSize = 5, rotate = true</div>\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n        <div>maxSize = 5, rotate = true, ellipses = false</div>\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n        <pre>Current page: {{page}}</pre>\n\n        <div>Pagination control can be disabled</div>\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [disabled]='isDisabled'></ngb-pagination>\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n          Toggle disabled\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 4;
        this.currentPage = 3;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/pagination/pagination.component.scss")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/popover/popover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Quick and easy popovers</div>\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"top\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n          Popover on top\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"right\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n          Popover on right\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"bottom\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n          Popover on bottom\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"left\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n          Popover on left\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">HTML and bindings in popovers</div>\n      <div class=\"card-body\">\n        <p>\n          Popovers can contain any arbitrary HTML, Angular bindings and even directives!\n          Simply enclose desired content in a <code>&lt;template&gt;</code> element.\n        </p>\n\n        <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\n          I've got markup and bindings in my popover!\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Custom and manual triggers</div>\n      <div class=\"card-body\">\n        <p>\n          You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n        </p>\n\n        <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\n          Hover over me!\n        </button>\n\n        <p class=\"pt-3\">\n          Alternatively you can take full manual control over popover opening / closing events.\n        </p>\n\n        <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\n          Click me to open a popover\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"p.close()\">\n          Click me to close a popover\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Append popover in the body</div>\n      <div class=\"card-body\">\n        <p>\n          Set the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\n        </p>\n\n        <div class=\"row\">\n          <div class=\"card mb-0\" style=\"padding: 20px 0; text-align: center; overflow:hidden\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm mb-3\"\n                    ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n              Popover appended to body\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"\n                    ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n              Default popover\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Context and manual triggers</div>\n      <div class=\"card-body\">\n        <p>\n          You can optionally pass in a context when manually triggering a popover.\n        </p>\n\n        <ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n        <p>\n          How would you like to greet <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p=\"ngbPopover\" triggers=\"manual\">me</strong>?\n        </p>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n          French\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n          German\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n          English\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Popover visibility events</div>\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" \n                #popover=\"ngbPopover\">\n          Open Popover\n        </button>\n\n        <p class=\"pt-3\">\n          Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('p'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbPopover */])
    ], PopoverComponent.prototype, "popover", void 0);
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__("./src/app/components/popover/popover.component.html"),
            styles: [__webpack_require__("./src/app/components/popover/popover.component.scss")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/components/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Contextual progress bars</div>\n  <div class=\"card-body\">\n    <p>Stylize the HTML5 <code>progress</code> element with a few extra classes and some crafty browser-specific CSS. Be sure to read up on the browser support.</p>\n    <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">Progress bars with current value labels</div>\n  <div class=\"card-body\">\n    <p>Add labels to your progress bars by placing text within the <code class=\"highlighter-rouge\">.progress-bar</code>.</p>\n    <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n    <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n    <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n    <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">Striped progress bars</div>\n  <div class=\"card-body\">\n    <p>Uses a gradient to create a striped effect.</p>\n    <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">Progress bars with custom labels</div>\n  <div class=\"card-body\">\n    <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\n    <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/progress/progress.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/components/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/components/progress/progress.component.scss")]
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">   \n    <div class=\"card\">\n      <div class=\"card-header\">Basic demo</div>\n      <div class=\"card-body\">\n        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n        <pre>Rate: <b>{{currentRate}}</b></pre>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Events and readonly ratings</div>\n      <div class=\"card-body\">\n        <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n        <pre>Selected: <b>{{selected}}</b>\nHovered: <b>{{hovered}}</b>\n        </pre>\n        <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n          {{ readonly ? \"readonly\" : \"editable\"}}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Custom star template</div>\n      <div class=\"card-body\">\n        <p>Custom rating template provided as child element</p>\n        <ngb-rating [(rate)]=\"currentRate\">\n          <ng-template let-fill=\"fill\">\n            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\n          </ng-template>\n        </ngb-rating>\n        <pre>Rate: <b>{{currentRate}}</b></pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Custom decimal rating</div>\n      <div class=\"card-body\">\n        <p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\n\n        <ng-template #t let-fill=\"fill\">\n          <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\n          <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\n          <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n            <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n          </span>\n        </ng-template>\n\n        <ngb-rating [(rate)]=\"decimalCurrentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n        <pre>Rate: <b>{{decimalCurrentRate}}</b></pre>\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 1.35\">1.35</button>\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 4.72\">4.72</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Form integration</div>\n      <div class=\"card-body\">\n        <p>NgModel and reactive forms can be used without the 'rate' binding</p>\n\n        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\n          <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n          <div class=\"form-control-feedback\">\n            <div *ngIf=\"ctrl.valid\">Thanks!</div>\n            <div *ngIf=\"ctrl.errors\">Please rate us</div>\n          </div>\n        </div>\n\n        <pre>Model: <b>{{ ctrl.value }}</b></pre>\n        <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n          {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n        </button>\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/rating/rating.component.scss":
/***/ (function(module, exports) {

module.exports = ".star {\n  font-size: 1.5rem;\n  color: #b0c4de; }\n\n.filled {\n  color: #1e90ff; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.currentRate = 8;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.decimalCurrentRate = 3.14;
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__("./src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__("./src/app/components/rating/rating.component.scss")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/spinners/spinners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row demo-spinkit\">\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>01</div>\n      <div class=\"card-body\">\n        <div class=\"loader01\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>02</div>\n      <div class=\"card-body\">\n        <div class=\"loader02\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>03</div>\n      <div class=\"card-body\">\n        <div class=\"loader03\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>04</div>\n      <div class=\"card-body\">\n        <div class=\"loader04\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>05</div>\n      <div class=\"card-body\">\n        <div class=\"loader05\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>06</div>\n      <div class=\"card-body\">\n        <div class=\"loader06\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>07</div>\n      <div class=\"card-body\">\n        <div class=\"loader07\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>08</div>\n      <div class=\"card-body\">\n        <div class=\"loader08\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>09</div>\n      <div class=\"card-body\">\n        <div class=\"loader09\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>10</div>\n      <div class=\"card-body\">\n        <div class=\"loader10\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>11</div>\n      <div class=\"card-body\">\n        <div class=\"loader11\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>12</div>\n      <div class=\"card-body\">\n        <div class=\"loader12\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/spinners/spinners.component.scss":
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n.loader01 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid #304ffe;\n  border-right-color: transparent;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader01::after {\n    content: '';\n    width: 8px;\n    height: 8px;\n    background: #304ffe;\n    border-radius: 50%;\n    position: absolute;\n    top: -1px;\n    left: 33px; }\n@-webkit-keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader02 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid rgba(48, 79, 254, 0.25);\n  border-top-color: #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader03 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid transparent;\n  border-top-color: #304ffe;\n  border-bottom-color: #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader04 {\n  width: 56px;\n  height: 56px;\n  border: 2px solid rgba(48, 79, 254, 0.5);\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s ease-in-out infinite;\n          animation: loader-rotate 1s ease-in-out infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader04::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #304ffe;\n    position: absolute;\n    top: -6px;\n    left: 50%;\n    margin-left: -5px; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader05 {\n  width: 56px;\n  height: 56px;\n  border: 4px solid #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-scale 1s ease-out infinite;\n          animation: loader-scale 1s ease-out infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@-webkit-keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n@keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n.loader06 {\n  width: 56px;\n  height: 56px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  position: relative;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader06::before {\n    content: '';\n    border: 4px solid rgba(48, 79, 254, 0.5);\n    border-radius: 50%;\n    width: 67.2px;\n    height: 67.2px;\n    position: absolute;\n    top: -9.6px;\n    left: -9.6px;\n    -webkit-animation: loader-scale 1s ease-out infinite;\n            animation: loader-scale 1s ease-out infinite;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    opacity: 0; }\n.loader06::after {\n    content: '';\n    border: 4px solid #304ffe;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    position: absolute;\n    top: -4px;\n    left: -4px;\n    -webkit-animation: loader-scale 1s ease-out infinite;\n            animation: loader-scale 1s ease-out infinite;\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s; }\n@keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n.loader07 {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader07-u8a11c74a 1s linear infinite;\n          animation: loader07-u8a11c74a 1s linear infinite;\n  top: 50%;\n  margin: -8px auto 0; }\n@-webkit-keyframes loader07-u8a11c74a {\n  0% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; }\n  12.5% {\n    -webkit-box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8);\n            box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8); }\n  25% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6); }\n  37.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4); }\n  50% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3); }\n  62.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1); }\n  87.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05); }\n  100% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; } }\n@keyframes loader07-u8a11c74a {\n  0% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; }\n  12.5% {\n    -webkit-box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8);\n            box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8); }\n  25% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6); }\n  37.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4); }\n  50% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3); }\n  62.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1); }\n  87.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05); }\n  100% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; } }\n.loader08 {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  -webkit-animation: loader08-u6ea81444 1s ease infinite;\n          animation: loader08-u6ea81444 1s ease infinite;\n  top: 50%;\n  margin: -46px auto 0; }\n@-webkit-keyframes loader08-u6ea81444 {\n  0%, 100% {\n    -webkit-box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe;\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe; } }\n@keyframes loader08-u6ea81444 {\n  0%, 100% {\n    -webkit-box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe;\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe; } }\n.loader09 {\n  width: 10px;\n  height: 48px;\n  background: #304ffe;\n  position: relative;\n  -webkit-animation: loader09-u207daad4 1s ease-in-out infinite;\n          animation: loader09-u207daad4 1s ease-in-out infinite;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader09::after, .loader09::before {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 48px;\n    background: #304ffe;\n    -webkit-animation: loader09-u207daad4 1s ease-in-out infinite;\n            animation: loader09-u207daad4 1s ease-in-out infinite; }\n.loader09::before {\n    right: 18px;\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n.loader09::after {\n    left: 18px;\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s; }\n@-webkit-keyframes loader09-u207daad4 {\n  0%, 100% {\n    -webkit-box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe;\n            box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe; }\n  50% {\n    -webkit-box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe;\n            box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe; } }\n@keyframes loader09-u207daad4 {\n  0%, 100% {\n    -webkit-box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe;\n            box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe; }\n  50% {\n    -webkit-box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe;\n            box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe; } }\n.loader10 {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader10-uc171fff8 0.9s ease alternate infinite;\n          animation: loader10-uc171fff8 0.9s ease alternate infinite;\n  -webkit-animation-delay: 0.36s;\n          animation-delay: 0.36s;\n  top: 50%;\n  margin: -42px auto 0; }\n.loader10::after, .loader10::before {\n    content: '';\n    position: absolute;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    -webkit-animation: loader10-uc171fff8 0.9s ease alternate infinite;\n            animation: loader10-uc171fff8 0.9s ease alternate infinite; }\n.loader10::before {\n    left: -40px;\n    -webkit-animation-delay: 0.18s;\n            animation-delay: 0.18s; }\n.loader10::after {\n    right: -40px;\n    -webkit-animation-delay: 0.54s;\n            animation-delay: 0.54s; }\n@-webkit-keyframes loader10-uc171fff8 {\n  0% {\n    -webkit-box-shadow: 0 28px 0 -28px #304ffe;\n            box-shadow: 0 28px 0 -28px #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 28px 0 #304ffe;\n            box-shadow: 0 28px 0 #304ffe; } }\n@keyframes loader10-uc171fff8 {\n  0% {\n    -webkit-box-shadow: 0 28px 0 -28px #304ffe;\n            box-shadow: 0 28px 0 -28px #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 28px 0 #304ffe;\n            box-shadow: 0 28px 0 #304ffe; } }\n.loader11 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 40px 0 #304ffe;\n          box-shadow: 0 40px 0 #304ffe;\n  position: relative;\n  -webkit-animation: loader11-u97288bc5 0.8s ease-in-out alternate infinite;\n          animation: loader11-u97288bc5 0.8s ease-in-out alternate infinite;\n  -webkit-animation-delay: 0.32s;\n          animation-delay: 0.32s;\n  top: 50%;\n  margin: -50px auto 0; }\n.loader11::after, .loader11::before {\n    content: '';\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe;\n    -webkit-animation: loader11-u97288bc5 0.8s ease-in-out alternate infinite;\n            animation: loader11-u97288bc5 0.8s ease-in-out alternate infinite; }\n.loader11::before {\n    left: -30px;\n    -webkit-animation-delay: 0.48s;\n            animation-delay: 0.48s; }\n.loader11::after {\n    right: -30px;\n    -webkit-animation-delay: 0.16s;\n            animation-delay: 0.16s; }\n@-webkit-keyframes loader11-u97288bc5 {\n  0% {\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 20px 0 #304ffe;\n            box-shadow: 0 20px 0 #304ffe; } }\n@keyframes loader11-u97288bc5 {\n  0% {\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 20px 0 #304ffe;\n            box-shadow: 0 20px 0 #304ffe; } }\n.loader12 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader12-uecdc8d63 1s linear alternate infinite;\n          animation: loader12-uecdc8d63 1s linear alternate infinite;\n  top: 50%;\n  margin: -50px auto 0; }\n@-webkit-keyframes loader12-uecdc8d63 {\n  0% {\n    -webkit-box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  100% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe;\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe; } }\n@keyframes loader12-uecdc8d63 {\n  0% {\n    -webkit-box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  100% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe;\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe; } }\n.card {\n  min-height: 160px; }\n"

/***/ }),

/***/ "./src/app/components/spinners/spinners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnersComponent = /** @class */ (function () {
    function SpinnersComponent() {
    }
    SpinnersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinners',
            template: __webpack_require__("./src/app/components/spinners/spinners.component.html"),
            styles: [__webpack_require__("./src/app/components/spinners/spinners.component.scss")]
        })
    ], SpinnersComponent);
    return SpinnersComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"ff-headers text-uppercase mb-3 fw-600\">Tabset</p>\n<div class=\"mb-5\">\n  <ngb-tabset>\n    <ngb-tab title=\"Simple\">\n      <ng-template ngbTabContent>Simple content</ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n      <ng-template ngbTabContent>Fancy title content</ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n      <ng-template ngbTabContent>Disabled content</ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Pills</p>\n<div class=\"mb-5\">\n  <ngb-tabset type=\"pills\">\n    <ngb-tab title=\"Simple\">\n      <ng-template ngbTabContent>Simple content</ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n      <ng-template ngbTabContent>Fancy title content</ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n      <ng-template ngbTabContent>Disabled content</ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Select an active tab by id</p>\n<div class=\"mb-5\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab title=\"Simple\" id=\"foo\">\n      <ng-template ngbTabContent>Simple content</ng-template>\n    </ngb-tab>\n    <ngb-tab id=\"bar\">\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n      <ng-template ngbTabContent>Fancy title content</ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n  <p>\n    <button class=\"btn btn-outline-primary\" (click)=\"t.select('bar')\">Selected tab with \"bar\" id</button>\n  </p>\n</div>\n\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Prevent tab change</p>\n<div class=\"mb-5\">\n  <ngb-tabset (tabChange)=\"beforeChange($event)\">\n    <ngb-tab title=\"Simple\" id=\"foo\">\n      <ng-template ngbTabContent>Simple content</ng-template>\n    </ngb-tab>\n    <ngb-tab id=\"bar\" title=\"I can't be selected...\">\n      <ng-template ngbTabContent>I can't be selected content</ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"But I can!\" >\n      <ng-template ngbTabContent>But I can content</ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'bar') {
            $event.preventDefault();
        }
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("./src/app/components/tabs/tabs.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4\"> \n    <div class=\"card\">\n      <div class=\"card-header\">Basic Timepicker</div>\n      <div class=\"card-body\">\n        <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n        <button class=\"btn mb-3 mt-3\" style=\"opacity: 0;\">&nbsp;</button>\n        <pre>Selected time: {{time | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\"> \n    <div class=\"card\">\n      <div class=\"card-header\">Meridian</div>\n      <div class=\"card-body\">\n        <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n        <button class=\"btn btn-outline-{{meridian ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleMeridian()\">\n            Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n        </button>\n        <pre>Selected time: {{time | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\"> \n    <div class=\"card\">\n      <div class=\"card-header\">Seconds</div>\n      <div class=\"card-body\">\n        <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n        <button class=\"btn btn-outline-{{seconds ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSeconds()\">\n            Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n        </button>\n        <pre>Selected time: {{time | json}}</pre>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\"> \n    <div class=\"card\">\n      <div class=\"card-header\">Spinners</div>\n      <div class=\"card-body\">\n        <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n\n        <button class=\"m-t-1 btn btn-outline-{{spinners ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSpinners()\">\n            Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">Custom steps</div>\n      <div class=\"card-body\">\n        <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" \n        [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <label for=\"changeHourStep\">Hour Step</label>\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n            </div>    \n            <div class=\"col-sm-3\">\n                <label for=\"changeMinuteStep\">Minute Step</label>\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n            </div>\n            <div class=\"col-sm-3\">\n                <label for=\"changeSecondStep\">Second Step</label>\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n            </div>\n        </div>\n        <pre>Selected time: {{time | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">Custom validation</div>\n      <div class=\"card-body\">\n        <p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\n\n        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\n          <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\n          <div class=\"form-control-feedback\">\n            <div *ngIf=\"ctrl.valid\">Great choice</div>\n            <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\n            <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n            <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\n          </div>\n        </div>\n\n        <pre>Selected time: {{time | json}}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.meridian = true;
        this.time = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.spinners = true;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__("./src/app/components/timepicker/timepicker.component.html"),
            styles: [__webpack_require__("./src/app/components/timepicker/timepicker.component.scss")]
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Quick and easy tooltips</div>\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n          Tooltip on top\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n          Tooltip on right\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n          Tooltip on bottom\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n          Tooltip on left\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">HTML and bindings in tooltips</div>\n      <div class=\"card-body\">\n        <p>\n          Tooltips can contain any arbitrary HTML, Angular bindings and even directives!\n          Simply enclose desired content in a <code>&lt;template&gt;</code> element.\n        </p>\n\n        <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\n        <button type=\"button\" class=\"btn btn-secondary\" [ngbTooltip]=\"tipContent\">\n          I've got markup and bindings in my tooltip!\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">Custom and manual triggers</div>\n  <div class=\"card-body\">\n    <p>\n      You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n    </p>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n      Click me!\n    </button>\n\n    <p class=\"pt-3\">\n      Alternatively you can take full manual control over tooltip opening / closing events.\n    </p>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n      Click me to open a tooltip\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"t.close()\">\n      Click me to close a tooltip\n    </button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Context and manual triggers</div>\n      <div class=\"card-body\">\n        <p>\n          You can optionally pass in a context when manually triggering a popover.\n        </p>\n\n        <ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n        <p>\n          How would you like to greet <strong [ngbTooltip]=\"tipContent\" #t=\"ngbTooltip\" triggers=\"manual\">me</strong>?\n        </p>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n          French\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n          German\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n          English\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Modal</div>\n      <div class=\"card-body\">\n        <p>\n          Set the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\n        </p>\n\n        <div class='row'>\n          <div class='card' style=\"padding: 50px 0; text-align: center; overflow:hidden\">\n            <button type=\"button\" class=\"btn btn-secondary\"\n                    ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n              Default tooltip\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\"\n                    ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n              Tooltip appended to body\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('t'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbTooltip */])
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__("./src/app/components/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("./src/app/components/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Simple Typeahead</div>\n      <div class=\"card-body\">\n        A typeahead example that gets values from a static <code>string[]</code>\n        <ul>\n          <li><code>debounceTime</code> operator</li>\n          <li>kicks in only if 2+ characters typed</li>\n          <li>limits to 10 results</li>\n        </ul>\n\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n\n        <pre>Model: {{ model | json }}</pre>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Formatted results</div>\n      <div class=\"card-body\">\n        <p>A typeahead example that uses a formatter function for string results</p>\n\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\" />\n\n        <pre>Model: {{ model | json }}</pre>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Wikipedia search</div>\n      <div class=\"card-body\">\n        A typeahead example that gets values from the <code>WikipediaService</code>\n        <ul>\n          <li>remote data retrieval</li>\n          <li><code>debounceTime</code> operator</li>\n          <li><code>do</code> operator</li>\n          <li><code>distinctUntilChanged</code> operator</li>\n          <li><code>switchMap</code> operator</li>\n          <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n        </ul>\n\n        <div class=\"form-group\" [class.has-danger]=\"searchFailed\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"searchWiki\" placeholder=\"Wikipedia search\" />\n          <span *ngIf=\"searching\">searching...</span>\n          <div class=\"form-control-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n        </div>\n\n        <pre>Model: {{ model | json }}</pre>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Template for results</div>\n      <div class=\"card-body\">\n        <p>A typeahead example that uses custom template for results display and uses object as a model</p>\n\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\n          <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\">\n          {{ r.name}}\n        </ng-template>\n\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"searchFlags\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\n\n        <pre>Model: {{ model | json }}</pre>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6\">\n  </div>\n\n  <div class=\"col-lg-6\">  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WikipediaService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    { 'name': 'Georgia', 'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WikipediaService = /** @class */ (function () {
    function WikipediaService(_jsonp) {
        this._jsonp = _jsonp;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
        }
        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    WikipediaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]])
    ], WikipediaService);
    return WikipediaService;
}());

var TypeaheadComponent = /** @class */ (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); });
        };
        this.searchWiki = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        this.searchFlags = function (text$) {
            return text$
                .debounceTime(200)
                .map(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return new RegExp(term, 'gi').test(v.name); }).slice(0, 10); });
        };
        this.formatter = function (x) { return x.name; };
    }
    TypeaheadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typeahead',
            template: __webpack_require__("./src/app/components/typeahead/typeahead.component.html"),
            styles: [__webpack_require__("./src/app/components/typeahead/typeahead.component.scss")],
            providers: [WikipediaService]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map