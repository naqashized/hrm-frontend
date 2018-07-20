webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication.module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components.module",
		"common"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./user/datatable.module": [
		"./src/app/user/datatable.module.ts",
		"datatable.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, local) {
        this.router = router;
        this.local = local;
        if (this.local.get('token') == undefined) {
            this.router.navigate(['/authentication/signin']);
        }
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__["c" /* WebStorageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_sidebar__ = __webpack_require__("./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_loading_bar_router__ = __webpack_require__("./node_modules/@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//import { CanActivate} from '@angular/router';

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["h" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["g" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["i" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["f" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["d" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["e" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core__["a" /* AccordionAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_18__core__["c" /* AccordionLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_18__core__["b" /* AccordionDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular_webstorage_service__["b" /* StorageServiceModule */],
                //WebStorageService,
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_11__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng_sidebar__["SidebarModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'YOURAPIKEY' })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/app/core/index.ts");


var AppRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__core__["d" /* AdminLayoutComponent */],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            // {
            //   path: 'email',
            //   loadChildren: './email/email.module#EmailModule'
            // },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            // {
            //   path: 'icons',
            //   loadChildren: './icons/icons.module#IconsModule'
            // }, 
            // {
            //   path: 'cards',
            //   loadChildren: './cards/cards.module#CardsModule'
            // }, 
            // {
            //   path: 'forms',
            //   loadChildren: './form/form.module#FormModule'
            // }, 
            // {
            //   path: 'tables',
            //   loadChildren: './tables/tables.module#TablesModule'
            // }, 
            {
                path: 'user',
                loadChildren: './user/datatable.module#DatatableModule'
            },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__core__["e" /* AuthLayoutComponent */],
        children: [{
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }];


/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar color=\"rgb(51, 51, 51)\" [includeSpinner]=\"false\"></ngx-loading-bar>\n\n<ng-sidebar-container class=\"app\" [ngClass]=\"{\n  'mode-boxed': options.boxed,\n  'sidebar-opened': options.opened,\n  'theme-light': options.theme == 'light',\n  'theme-dark': options.theme == 'dark',\n  'mode-push': _mode == 'push',\n  'mode-dock': _mode == 'dock',\n  'mode-over': _mode == 'over',\n  'mode-slide': _mode == 'slide',\n  'no-footer': routeOptions?.removeFooter,\n  'map-header': routeOptions?.mapHeader}\">\n  <ng-sidebar\n    [(opened)]=\"options.opened\"\n    [(mode)]=\"_mode\"\n    [position]=\"'left'\"\n    [dockedSize]=\"'80px'\"\n    [autoCollapseWidth]=\"'991'\"\n    [closeOnClickOutside]=\"isOver()\"\n    [showBackdrop]=\"isOver()\"\n    [sidebarClass]=\"'sidebar-panel'\" #sidebar>\n    <app-sidebar (messageEvent)=\"receiveMessage($event)\" (toggleSidebar)=\"toogleSidebar()\" [mode]=\"options.mode\"></app-sidebar>\n  </ng-sidebar>\n\n  <div ng-sidebar-content class=\"app-inner\">\n    <app-header (toggleSidebar)=\"toogleSidebar()\" (openSearch)=\"openSearch(search)\" (toggleFullscreen)=\"toggleFullscreen()\" [heading]=\"routeOptions.heading\"></app-header>\n\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n      <app-footer></app-footer>\n    </div>\n  </div>\n\n</ng-sidebar-container>\n\n<ng-template #search let-c=\"close\" let-d=\"dismiss\">\n  <form class=\"search__form\" action=\"\">\n    <input class=\"search-input\" name=\"search\" type=\"search\" placeholder=\"Search...\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" autofocus=\"true\" />\n    <p class=\"text-muted\"><small><strong>Hit enter to search or ESC to close</strong></small></p>\n  </form>\n  <div class=\"search-suggestions\">\n    <h6 class=\"text-uppercase\"><strong>Suggestions?</strong></h6>\n    <p class=\"text-primary\">#medical #analytics #fitness #transport #ui #dashboard #admin #bootstrap #angular #typescript</p>\n  </div>\n  <button type=\"button\" class=\"search-close\" aria-label=\"Close search form\" (click)=\"d('Cross click')\">\n    <i class=\"fi flaticon-close\"></i>\n  </button>\n</ng-template>\n\n\n<div class=\"configuration hidden-sm-down\" [ngClass]=\"{'active': options.settings}\">\n  <div class=\"configuration-cog\" (click)=\"options.settings = !options.settings\">\n    <i class=\"icon icon-basic-mixer2\"></i>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Template Options\n    </div>\n    <div class=\"card-body\">\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Explore Sidebar API</strong></small>\n      <div class=\"custom-controls-stacked mb-2\">\n\n        <div class=\"custom-control custom-radio\">\n          <input name=\"radio-stacked\" type=\"radio\" value=\"push\" [(ngModel)]=\"_mode\" (change)=\"options.opened = true; options.mode = _mode\" class=\"custom-control-input\" id=\"pushMode\">\n          <label class=\"custom-control-label\" for=\"pushMode\">Push mode</label>\n        </div>\n\n        <div class=\"custom-control custom-radio\">\n          <input name=\"radio-stacked\" type=\"radio\" value=\"dock\" [(ngModel)]=\"_mode\" (change)=\"options.opened = true; options.mode = _mode\" class=\"custom-control-input\" id=\"dockedMode\">\n          <label class=\"custom-control-label\" for=\"dockedMode\">Docked mode</label>\n        </div>\n\n        <div class=\"custom-control custom-radio\">\n          <input name=\"radio-stacked\" type=\"radio\" value=\"over\" [(ngModel)]=\"_mode\" (change)=\"options.opened = true; options.mode = _mode\" class=\"custom-control-input\" id=\"overMode\">\n          <label class=\"custom-control-label\" for=\"overMode\">Over content mode</label>\n        </div>\n\n        <div class=\"custom-control custom-radio\">\n          <input name=\"radio-stacked\" type=\"radio\" value=\"slide\" [(ngModel)]=\"_mode\" (change)=\"options.opened = true; options.mode = _mode\" class=\"custom-control-input\" id=\"slideMode\">\n          <label class=\"custom-control-label\" for=\"slideMode\">Slide mode</label>\n        </div>\n\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Layout</strong></small>\n      <div class=\"d-flex align-items-center mb-2\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"options.boxed\" id=\"boxed\">\n          <label class=\"custom-control-label\" for=\"boxed\">Boxed</label>\n        </div>\n      </div>\n      <div class=\"d-flex align-items-center mb-2\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" [ngModel]=\"routeOptions?.removeFooter\" (ngModelChange)=\"routeOptions.removeFooter=$event\" id=\"rfooter\">\n          <label class=\"custom-control-label\" for=\"rfooter\">Toggle footer</label>\n        </div>\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Theme</strong></small>\n      <div class=\"custom-controls-stacked mb-2\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" value=\"light\" [(ngModel)]=\"options.theme\" id=\"lightTheme\">\n          <label class=\"custom-control-label\" for=\"lightTheme\">Light theme</label>\n        </div>\n\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" value=\"dark\" [(ngModel)]=\"options.theme\" id=\"darkTheme\">\n          <label class=\"custom-control-label\" for=\"darkTheme\">Dark theme</label>\n        </div>\n\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Language</strong></small>\n      <div class=\"d-flex align-items-center\">\n        <select class=\"custom-select\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\" placeholder=\"Select language\" style=\"min-width: 50%;\">\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".configuration {\n  width: 240px;\n  position: fixed;\n  right: 0;\n  top: 150px;\n  margin-left: 0;\n  z-index: 99999999;\n  -webkit-transition: -webkit-transform .3s ease-in-out;\n  transition: -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n  .configuration .card {\n    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    margin: 0;\n    border-radius: 0; }\n  .configuration.active {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n  .configuration-cog {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: -50px;\n  line-height: 50px;\n  font-size: 24px;\n  text-align: center;\n  background: #fff;\n  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  cursor: pointer; }\n  .configuration-cog i:before {\n    line-height: 50px; }\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SMALL_WIDTH_BREAKPOINT = 991;
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(_element, router, route, translate, modalService, titleService, zone) {
        var _this = this;
        this._element = _element;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.modalService = modalService;
        this.titleService = titleService;
        this.zone = zone;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.options = {
            lang: 'en',
            theme: 'light',
            settings: false,
            docked: false,
            boxed: false,
            opened: true,
            mode: 'push'
        };
        this._mode = this.options.mode;
        this._autoCollapseWidth = 991;
        this.currentLang = 'en';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () { return _this.mediaMatcher = mql; }); });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            // Scroll to top on view load
            document.querySelector('.main-content').scrollTop = 0;
            if (_this.isOver()) {
                _this._mode = 'over';
                _this.options.opened = false;
            }
            _this.runOnRouteChange();
        });
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) { return _this.runOnRouteChange(); });
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        var _this = this;
        if (this.isOver() || this.router.url === '/maps/fullscreen') {
            this.options.opened = false;
        }
        this.route.children.forEach(function (route) {
            var activeRoute = route;
            while (activeRoute.firstChild) {
                activeRoute = activeRoute.firstChild;
            }
            _this.routeOptions = activeRoute.snapshot.data;
        });
        if (this.routeOptions) {
            if (this.routeOptions.hasOwnProperty('heading')) {
                this.setTitle(this.routeOptions.heading);
            }
        }
    };
    AdminLayoutComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('HRM: Portal | ' + newTitle);
    };
    AdminLayoutComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    AdminLayoutComponent.prototype.toogleSidebar = function () {
        this.options.opened = !this.options.opened;
    };
    AdminLayoutComponent.prototype.receiveMessage = function ($event) {
        this.options = $event;
    };
    AdminLayoutComponent.prototype.openSearch = function (search) {
        this.modalService.open(search, { windowClass: 'search', backdrop: false });
    };
    AdminLayoutComponent.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.main-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/core/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/core/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: '<router-outlet></router-outlet>'
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar navbar-light main-footer small\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"javascript:;\">\n        <span>Copyright &copy; 2017</span> <span class=\"ff-headers text-uppercase\">Decima</span>. All rights reserved\n      </a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav hidden-xs-down\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"javascript:;\">Made with love on Earth</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar bg-faded main-header\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toggleSidebar.emit()\">\n        <i class=\"hamburger-icon v2\">\n          <span></span>\n        </i>\n      </a>\n    </li>\n  </ul>\n  <span class=\"navbar-heading hidden-xs-down\">{{heading}}</span>\n  <span class=\"mr-auto\"></span>\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n      <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\n        <img src=\"assets/images/avatar.jpg\" class=\"navbar-avatar rounded-circle\" alt=\"user\" title=\"user\">\n      </a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n        <!-- <a class=\"dropdown-item\" href=\"javascript:;\">\n          <i class=\"icon icon-basic-settings mr-3\"></i>\n          <span>Settings</span>\n        </a>\n        <a class=\"dropdown-item\" href=\"javascript:;\">\n          <i class=\"icon icon-basic-postcard mr-3\"></i>\n          <span>Profile</span>\n        </a>\n        <a class=\"dropdown-item\" href=\"javascript:;\">\n          <i class=\"icon icon-basic-message-multiple mr-3\"></i>\n          <span>Notifications</span>\n        </a> -->\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"logout()\">\n          <i class=\"icon icon-arrows-switch-vertical mr-3\"></i>\n          <span>Signout</span>\n        </a>\n      </div>\n    </li>\n    <!-- <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n      <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\n        <i class=\"fi flaticon-notification\"></i>\n        <span class=\"badge badge-danger\">4</span>\n      </a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notifications\">\n        <div class=\"notifications-wrapper\">\n          <a href=\"javascript:;\" class=\"dropdown-item\">\n            <span class=\"badge badge-warning\">NEW</span>\n            &nbsp;Sean launched a new application\n            <span class=\"time\">2 seconds ago</span>\n          </a>\n          <a href=\"javascript:;\" class=\"dropdown-item\">\n            Removed calendar from app list\n            <span class=\"time\">4 hours ago</span>\n          </a>\n          <a href=\"javascript:;\" class=\"dropdown-item\">\n            Jack Hunt has joined mailing list\n            <span class=\"time\">9 days ago</span>\n          </a>\n          <a href=\"javascript:;\" class=\"dropdown-item\">\n            <span class=\"text-muted\">Conan Johns created a new list</span>\n            <span class=\"time\">9 days ago</span>\n          </a>\n        </div>\n        <div class=\"notification-footer\">Notifications</div>\n      </div>\n    </li> -->\n    <!-- <li class=\"nav-item\">\n      <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toggleFullscreen.emit()\">\n        <i class=\"fi flaticon-fullscreen\"></i>\n      </a>\n    </li>\n\n    <li class=\"nav-item\">\n      <span class=\"nav-divider\"></span>\n    </li>\n    <li class=\"nav-item\">\n      <a href=\"javascript:;\" class=\"nav-link\" (click)=\"openSearch.emit()\">\n        <i class=\"fi flaticon-search\"></i>\n      </a>\n    </li> -->\n\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, loginService, local) {
        this.router = router;
        this.loginService = loginService;
        this.local = local;
        this.toggleSidebar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleFullscreen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.service = loginService;
    }
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.service.logout(this.local.get('token')).subscribe(function (response) {
            console.log("response " + JSON.stringify(response));
            _this.local.set('token', null);
            _this.router.navigate(['/authentication/signin']);
        }, function (error) {
            _this.local.set('token', null);
            _this.router.navigate(['/authentication/signin']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "openSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleFullscreen", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/header/header.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2_angular_webstorage_service__["c" /* WebStorageService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/helpers/chartData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return single; });
/* unused harmony export multi */
/* unused harmony export bubble */
/* unused harmony export countries */
/* unused harmony export generateGraph */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateData;
var single = [
    {
        name: 'Germany',
        value: 40
    },
    {
        name: 'USA',
        value: 49
    },
    {
        name: 'France',
        value: 36
    },
    {
        name: 'United Kingdom',
        value: 36
    },
    {
        name: 'Spain',
        value: 33
    },
    {
        name: 'Italy',
        value: 35
    }
];
var multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2010',
                value: 40
            },
            {
                name: '2000',
                value: 36
            },
            {
                name: '1990',
                value: 31
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                value: 49
            },
            {
                name: '2000',
                value: 45
            },
            {
                name: '1990',
                value: 37
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 34
            },
            {
                name: '1990',
                value: 29
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 32
            },
            {
                name: '1990',
                value: 26
            }
        ]
    }
];
var bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 80.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 78
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 78.8,
                r: 310
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 76.9,
                r: 283
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 81.4,
                r: 63
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 79.1,
                r: 59.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.2,
                r: 62.7
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.8,
                r: 58.9
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
var countries = [
    'Abkhazia', 'Afghanistan', 'Akrotiri and Dhekelia', 'Aland', 'Albania',
    'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla',
    'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Ascension Island',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas, The', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
    'Cape Verde', 'Cayman Islands', 'Central Africa Republic', 'Chad', 'Chile',
    'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros',
    'Congo', 'Cook Islands', 'Costa Rica', 'Cote d\'lvoire', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'East Timor Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands',
    'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Gabon',
    'Cambia, The', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece',
    'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guemsey', 'Guinea',
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'Korea, N', 'Korea, S', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
    'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar',
    'Nagorno-Karabakh', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'Niue', 'Norfolk Island', 'Northern Cyprus',
    'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau',
    'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Pitcaim Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Sahrawi Arab Democratic Republic', 'Saint-Barthelemy',
    'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
    'Saint Pierre and Miquelon', 'Saint Vincent and Grenadines', 'Samos',
    'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
    'Solomon Islands', 'Somalia', 'Somaliland', 'South Africa', 'South Ossetia',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard', 'Swaziland', 'Sweden',
    'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo',
    'Tokelau', 'Tonga', 'Transnistria', 'Trinidad and Tobago', 'Tristan da Cunha',
    'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Virgin Islands, British', 'Virgin Islands, U.S.',
    'Wallis and Futuna', 'Yemen', 'Zambia', 'Zimbabwe'
];
function generateGraph(nodeCount) {
    var nodes = [];
    var links = [];
    for (var i = 0; i < nodeCount; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            value: country,
        });
        for (var j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: country,
                    target: nodes[j].value,
                });
            }
        }
    }
    return { links: links, nodes: nodes };
}
function generateData(seriesLength, includeMinMaxRange) {
    var results = [];
    var domain = []; // array of time stamps in milliseconds
    for (var j = 0; j < 8; j++) {
        // random dates between Sep 12, 2016 and Sep 24, 2016
        domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
    }
    for (var i = 0; i < seriesLength; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        var series = {
            name: country,
            series: []
        };
        for (var j = 0; j < domain.length; j++) {
            var value = Math.floor(2 + Math.random() * 5);
            // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
            var timestamp = domain[j];
            if (includeMinMaxRange) {
                var errorMargin = 0.02 + Math.random() * 0.08;
                series.series.push({
                    value: value,
                    name: timestamp,
                    min: Math.floor(value * (1 - errorMargin)),
                    max: Math.ceil(value * (1 + errorMargin))
                });
            }
            else {
                series.series.push({
                    value: value,
                    name: timestamp
                });
            }
        }
        results.push(series);
    }
    return results;
}


/***/ }),

/***/ "./src/app/core/helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chartData__ = __webpack_require__("./src/app/core/helpers/chartData.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chartData__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__chartData__["b"]; });



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/core/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("./src/app/core/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_layout_admin_layout_component__ = __webpack_require__("./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__admin_layout_admin_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_layout_auth_layout_component__ = __webpack_require__("./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__auth_layout_auth_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("./src/app/core/menu/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_accordion__ = __webpack_require__("./src/app/core/menu-accordion/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__("./src/app/core/helpers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__helpers__["b"]; });










/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });





/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__("./src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* tslint:disable:max-line-length */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: "\n  <ul class=\"navigation\" appAccordion>\n    <li class=\"navigation-item\" appAccordionLink *ngFor=\"let menuitem of menuService.getAll()\" group=\"{{menuitem.state}}\">\n      <a class=\"navigation-link\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n        <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n        <span>{{ menuitem.name | translate }}</span>\n        <span class=\"mr-auto\"></span>\n        <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n      </a>\n      <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\n        <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n        <span>{{ menuitem.name | translate }}</span>\n        <span class=\"mr-auto\"></span>\n        <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n      </a>\n      <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\n        <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n        <span>{{ menuitem.name | translate }}</span>\n        <span class=\"mr-auto\"></span>\n        <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n      </a>\n      <a class=\"navigation-link\" appAccordionToggle href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\n        <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n        <span>{{ menuitem.name | translate }}</span>\n        <span class=\"mr-auto\"></span>\n        <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        <i class=\"menu-caret icon icon-arrows-right\"></i>\n      </a>\n      <ul class=\"navigation-submenu\" *ngIf=\"menuitem.type === 'sub'\">\n        <li class=\"navigation-item\" *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n          <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"navigation-link relative\">{{ childitem.name | translate }}</a>\n        </li>\n      </ul>\n    </li>\n  </ul>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: '/',
        name: 'Dashboard',
        type: 'link',
        icon: 'basic-accelerator'
    },
    // {
    //   state: 'email',
    //   name: 'EMAIL',
    //   type: 'link',
    //   icon: 'basic-paperplane'
    // },
    // {
    //   state: 'components',
    //   name: 'COMPONENTS',
    //   type: 'sub',
    //   icon: 'basic-webpage-multiple',
    //   badge: [
    //     {
    //       type: 'success',
    //       value: '5'
    //     }
    //   ],
    //   children: [
    //     {
    //       state: 'accordion',
    //       name: 'ACCORDION'
    //     },
    //     {
    //       state: 'alert',
    //       name: 'ALERT'
    //     },
    //     {
    //       state: 'buttons',
    //       name: 'BUTTONS'
    //     },
    //     {
    //       state: 'buttonicons',
    //       name: 'SBUTTONS'
    //     },
    //     {
    //       state: 'carousel',
    //       name: 'CAROUSEL'
    //     },
    //     {
    //       state: 'collapse',
    //       name: 'COLLAPSE'
    //     },
    //     {
    //       state: 'datepicker',
    //       name: 'DATEPICKER'
    //     },
    //     {
    //       state: 'dropdown',
    //       name: 'DROPDOWN'
    //     },
    //     {
    //       state: 'modal',
    //       name: 'MODAL'
    //     },
    //     {
    //       state: 'pagination',
    //       name: 'PAGINATION'
    //     },
    //     {
    //       state: 'popover',
    //       name: 'POPOVER'
    //     },
    //     {
    //       state: 'progress',
    //       name: 'PROGRESS'
    //     },
    //     {
    //       state: 'rating',
    //       name: 'RATING'
    //     },
    //     {
    //       state: 'tabs',
    //       name: 'TABS'
    //     },
    //     {
    //       state: 'timepicker',
    //       name: 'TIMEPICKER'
    //     },
    //     {
    //       state: 'tooltip',
    //       name: 'TOOLTIP'
    //     },
    //     {
    //       state: 'typeahead',
    //       name: 'TYPEAHEAD'
    //     },
    //     {
    //       state: 'spinners',
    //       name: 'SPINNERS'
    //     }
    //   ]
    // },
    // {
    //   state: 'icons',
    //   name: 'ICONS',
    //   type: 'sub',
    //   icon: 'basic-postcard',
    //   children: [
    //     {
    //       state: 'linea',
    //       name: 'LINEA'
    //     },
    //     {
    //       state: 'fontawesome',
    //       name: 'FONTAWESOME'
    //     },
    //     {
    //       state: 'sli',
    //       name: 'SLI'
    //     }
    //   ]
    // },
    // {
    //   state: 'taskboard',
    //   name: 'TASKBOARD',
    //   type: 'link',
    //   icon: 'basic-message-txt'
    // },
    // {
    //   state: 'cards',
    //   name: 'CARDS',
    //   type: 'sub',
    //   icon: 'basic-postcard',
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'portlets',
    //       name: 'PORTLETS'
    //     },
    //     {
    //       state: 'draggable',
    //       name: 'DRAGGABLE'
    //     }
    //   ]
    // },
    // {
    //   state: 'forms',
    //   name: 'FORMS',
    //   type: 'sub',
    //   icon: 'basic-sheet-pen',
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'masks',
    //       name: 'MASKS'
    //     },
    //     {
    //       state: 'editor',
    //       name: 'EDITOR'
    //     },
    //     {
    //       state: 'validation',
    //       name: 'VALIDATION'
    //     },
    //     {
    //       state: 'upload',
    //       name: 'UPLOAD'
    //     },
    //     {
    //       state: 'tree',
    //       name: 'TREE'
    //     },
    //   ]
    // },
    // {
    //   state: 'tables',
    //   name: 'TABLES',
    //   type: 'sub',
    //   icon: 'basic-webpage-txt',
    //   badge: [
    //     {
    //       type: 'primary',
    //       value: '2'
    //     }
    //   ],
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'responsive',
    //       name: 'RESPONSIVE'
    //     },
    //   ]
    // },
    {
        state: 'user',
        name: 'User',
        type: 'sub',
        icon: 'basic-webpage-img-txt',
        children: [
            // {
            //   state: 'fullscreen',
            //   name: 'FULLSCREEN'
            // },
            // {
            //   state: 'editing',
            //   name: 'EDITING'
            // },
            {
                state: 'filter',
                name: 'Users Listing'
            },
        ]
    },
];
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar main-brand\">\n  <a class=\"navbar-brand mr-auto\" [routerLink]=\"['/']\">\n    <img src=\"assets/images/logo.png\" class=\"navbar-brand-logo\" alt=\"\">\n    <span class=\"docked-hidden\">&nbsp;HRM Portal</span>\n  </a>\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toggleSidebar.emit()\">\n        <i class=\"hamburger-icon v2\" *ngIf=\"mode === 'over'\">\n          <span></span>\n        </i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<app-menu></app-menu>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.toggleSidebar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "mode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "toggleSidebar", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/core/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api/'
    //baseUrl: 'http://ec2-18-221-39-77.us-east-2.compute.amazonaws.com:3000/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Statics

// Operators

var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        //private baseUrl = 'http://localhost:3000/api/users/login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //headers.toekn = '';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: this.headers });
    }
    LoginService.prototype.login = function (login) {
        //console.log('here '+User.title)
        return this.http
            .post(this.baseUrl + '/users/login', login, this.options).map(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LoginService.prototype.logout = function (token) {
        // ...using get request
        return this.http.post(this.baseUrl + 'users/logout?access_token=' + token, null, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("res " + res + "body " + body);
        return body || {};
    };
    LoginService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Statics

// Operators

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users = [];
        // private instance variable to hold base url
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        //private baseUrl = 'http://localhost:3000/api/users?access_token=';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //headers.toekn = '';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: this.headers });
    }
    UserService.prototype.add = function (user) {
        this.users.push(user);
    };
    UserService.prototype.clear = function () {
        this.users = [];
    };
    UserService.prototype.getData = function (token) {
        // ...using get request
        return this.http.get(this.baseUrl + 'users?access_token=' + token, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http
            .post(this.baseUrl + '/users', user, this.options).map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        //console.log('here '+User.title)
        this.http
            .delete(this.baseUrl + '/delete/' + id, this.options)
            .map(function (res) { return res; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error'); })
            .subscribe();
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("res " + body);
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map