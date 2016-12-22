webpackJsonp([0,4],{

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_storage_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(httpService, userStorage, appRouter) {
        this.contentTypeHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.httpService = httpService;
        this.userStorage = userStorage;
        this.appRouter = appRouter;
    }
    Object.defineProperty(UserService.prototype, "loggedUser", {
        get: function () {
            var loggedUser = this.userStorage.getLoggedUser();
            if (loggedUser) {
                return loggedUser.username;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.isLogged = function () {
        var loggedUser = this.userStorage.getLoggedUser();
        return loggedUser ? true : false;
    };
    // Create server Router
    // Only Redirect on Successful Login
    // Display message on incorrect login
    UserService.prototype.registerUser = function (user) {
        var _this = this;
        //  { headers: new Headers({ 'Authorization': token }) }
        // for testing 
        this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders })
            .subscribe(function (responseUser) {
            console.log(responseUser);
        }, function (err) {
            console.log(err);
        }, function () {
            _this.appRouter.navigateByUrl('profile');
        });
    };
    // Create server Router
    // Only Redirect on Successful Login
    // Display message on incorrect login
    UserService.prototype.loginUser = function (user) {
        var _this = this;
        console.log(user);
        // for testing 
        // Observable.of(user)
        this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (!response.username || !response.auth_token) {
                throw new Error('Incorrect response');
            }
            _this.userStorage.setLoggedUser(response);
        }, function (err) {
            console.log(err);
        }, function () {
            _this.appRouter.navigateByUrl('profile');
        });
    };
    UserService.prototype.ngOnInit = function () {
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/user.service.js.map

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(666),
            styles: [__webpack_require__(658)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.component.js.map

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(667),
            styles: [__webpack_require__(659)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.component.js.map

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/user.model.js.map

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserStorageService = (function () {
    function UserStorageService(cookieService) {
        this.cookieService = cookieService;
    }
    UserStorageService.prototype.getLoggedUser = function () {
        var cookieContent = this.cookieService.getObject('killerapp');
        return cookieContent;
    };
    UserStorageService.prototype.setLoggedUser = function (authResponse) {
        this.cookieService.putObject('killerapp', authResponse, { expires: new Date(2017, 12, 30) });
    };
    UserStorageService.prototype.clearLoggedUser = function () {
        this.cookieService.remove('killerapp');
    };
    UserStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object])
    ], UserStorageService);
    return UserStorageService;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/user-storage.service.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */]();
        this.isLoading = false;
        this.images = [
            'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
            'https://c1.staticflickr.com/7/6107/6381966401_032df5fe1e_b.jpg',
            'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg'
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.isLoading = true;
        this.userService.loginUser(this.user);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(670),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/login.component.js.map

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(671),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/profile.component.js.map

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
        this.isLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.isLoading = true;
        this.userService.registerUser(this.user);
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(672),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/register.component.js.map

/***/ },

/***/ 381:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 381;


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(493);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/GitHub/killer-app/src/main.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_storage_service__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/** MOCK */
// import { MockedModule } from './mocked-module/mocked.module'
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            imports: [
                // MockedModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_10__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_11__services_user_storage_service__["a" /* UserStorageService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.module.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(320);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__home_routes__["a" /* HomeRouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.module.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] }
];
var HomeRouterModule = (function () {
    function HomeRouterModule() {
    }
    HomeRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRouterModule);
    return HomeRouterModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.routes.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/GitHub/killer-app/src/index.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(userService) {
        this.userService = userService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activeItem = 'Home';
        this.hasLoggedUser = this.userService.isLogged();
        this.loggedUserName = this.userService.loggedUser;
    };
    NavigationComponent.prototype.ngDoCheck = function () {
        this.hasLoggedUser = this.userService.isLogged();
        this.loggedUserName = this.userService.loggedUser;
    };
    NavigationComponent.prototype.setActiveItem = function (selectedItem) {
        selectedItem = selectedItem || '';
        this.activeItem = selectedItem;
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(668),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/navigation.component.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FacebookLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacebookLoginComponent = (function () {
    function FacebookLoginComponent() {
    }
    FacebookLoginComponent.prototype.ngOnInit = function () {
    };
    FacebookLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(669),
            styles: [__webpack_require__(661)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/facebook-login.component.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(673),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.component.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_routes__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__facebook_login_facebook_login_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__(700);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__users_routes__["a" /* UsersRouterModuler */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__facebook_login_facebook_login_component__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.module.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logout_logout_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersRouterModuler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'facebook-login', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_0__logout_logout_component__["a" /* LogoutComponent */] }
];
var UsersRouterModuler = (function () {
    function UsersRouterModuler() {
    }
    UsersRouterModuler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModuler);
    return UsersRouterModuler;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.routes.js.map

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/GitHub/killer-app/src/environment.js.map

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/GitHub/killer-app/src/polyfills.js.map

/***/ },

/***/ 658:
/***/ function(module, exports) {

module.exports = "div#content {\n  background-color: rgba(0, 0, 0, 0.33);\n  box-shadow: 0 5px 20px black;\n  padding: 25px;\n  color: white;\n  height: 50%; }\n"

/***/ },

/***/ 659:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 660:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n  nav a.navbar-brand {\n    font-family: planer;\n    font-size: 22px; }\n  nav li > a {\n    font-family: planer;\n    font-size: 20px; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000;\n    font-family: planer;\n    font-size: 20px; }\n"

/***/ },

/***/ 661:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 662:
/***/ function(module, exports) {

module.exports = "input {\n  background-color: rgba(0, 0, 0, 0.77); }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = "input {\n  background-color: rgba(0, 0, 0, 0.77); }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\r\n    <app-navigation></app-navigation>\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\r\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\r\n  <a routerLink=\"mock\"  class=\"btn <btn-warning></btn-warning>\">Click FFS</a>\r\n</section>"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n      aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\">DREAMSTIME</a>\r\n  </div>\r\n  <!-- Collect the nav links, forms, and other content for toggling -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li [class.active]=\"activeItem == 'Home'\" (click)=\"setActiveItem('Home')\"><a routerLink=\"/\">Home</a></li>\r\n      <li [class.active]=\"activeItem == 'Browse'\" (click)=\"setActiveItem('Browse')\"><a routerLink=\"/\">Browse</a></li>\r\n      <li [class.active]=\"activeItem == 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/\">Create</a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a href=\"#\">Action</a></li>\r\n          <li><a href=\"#\">Another action</a></li>\r\n          <li><a href=\"#\">Something else here</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li><a href=\"#\">Separated link</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n  <div class=\"row\" *ngIf=\"hasLoggedUser == false\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <h1>\r\n        <a routerLink=\"/\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n      <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\r\n      <h1>\r\n        <a routerLink=\"/register\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<p>\r\n  facebook-login works!\r\n</p>\r\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<h2>Login Form</h2>\r\n<form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(); registerForm.reset()\">\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Username: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Password: </span>\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <button class=\"form-control\" type=\"submit\">Register</button>\r\n    </label>\r\n  </div>\r\n</form>\r\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\r\n\r\n<!-- Carousel testing DELETE -->\r\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\r\n      <img [src]=\"img\" alt=\"slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>-->"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<h2>Registration Form</h2>\r\n<form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(); registerForm.reset()\">\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Username: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Password: </span>\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <button class=\"form-control\" type=\"submit\">Register</button>\r\n    </label>\r\n  </div>\r\n</form>\r\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(382);


/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(appRouter, userStorage) {
        this.appRouter = appRouter;
        this.userStorage = userStorage;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userStorage.clearLoggedUser();
        this.appRouter.navigateByUrl('/');
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(702),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/logout.component.js.map

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }

},[697]);
//# sourceMappingURL=main.bundle.map