webpackJsonp([0,4],{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(561);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFactoryService = (function () {
    function UserFactoryService() {
    }
    UserFactoryService.prototype.createUser = function (username, password, firstName, lastName, image, email) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (image === void 0) { image = ''; }
        if (email === void 0) { email = ''; }
        var newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
        newUser.username = username;
        newUser.password = password;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.image = image;
        newUser.email = email;
        newUser.createdOn = new Date();
        return newUser;
    };
    UserFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserFactoryService);
    return UserFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user-factory.service.js.map

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiUrlsConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiUrlsConfigService = (function () {
    function ApiUrlsConfigService() {
        // POST -> login 
        // PUT  -> register
        // GET  -> details
        this.usersApiUrl = '/api/users';
        // GET  -> logout
        this.logoutApiUrl = '/api/logout';
        // GET  -> all items
        // POST -> create item
        // GET  /:id -> item details
        // PUT  /:id -> update listing
        // POST /:id -> submit offer
        this.galleryApiUrl = '/api/gallery';
        // GET  -> list favorites for logged on user
        // POST -> add item to logged user favorites list
        this.favoritesApiUrl = '/api/favorites';
    }
    ApiUrlsConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ApiUrlsConfigService);
    return ApiUrlsConfigService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/api-urls-config.service.js.map

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HashingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HashingService = (function () {
    function HashingService() {
    }
    HashingService.prototype.generateHash = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashAsciiStr(value).toString();
    };
    HashingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HashingService);
    return HashingService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/hashing.service.js.map

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpRequesterOptionsFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpRequesterOptionsFactoryService = (function () {
    function HttpRequesterOptionsFactoryService() {
    }
    HttpRequesterOptionsFactoryService.prototype.createHttpRequesterOptions = function (url, content, headers) {
        if (content === void 0) { content = {}; }
        if (headers === void 0) { headers = {}; }
        if (typeof content !== 'object') {
            content = { content: content };
        }
        return { url: url, content: content, headers: headers };
    };
    HttpRequesterOptionsFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HttpRequesterOptionsFactoryService);
    return HttpRequesterOptionsFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/http-requester-options-factory.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpRequesterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequesterService = (function () {
    function HttpRequesterService(ngHttpService) {
        this.ngHttpService = ngHttpService;
    }
    HttpRequesterService.prototype.get = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.ngHttpService.get(options.url, { headers: headers });
    };
    HttpRequesterService.prototype.post = function (options) {
        var content = JSON.stringify(options.content);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.ngHttpService.post(options.url, content, { headers: headers });
    };
    HttpRequesterService.prototype.put = function (options) {
        var content = JSON.stringify(options.content);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.ngHttpService.put(options.url, content, { headers: headers });
    };
    HttpRequesterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpRequesterService);
    return HttpRequesterService;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/http-requester.service.js.map

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddToFavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddToFavoritesComponent = (function () {
    function AddToFavoritesComponent(router, route, location, userService, toastrNotificationService, toastrNotificationOptionsFactoryService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.userService = userService;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
    }
    AddToFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.route.params
            .switchMap(function (params) {
            var itemListingId = params['id'];
            return _this.userService.addItemToUserFavorites(itemListingId);
        });
        observable.subscribe(function (response) {
            console.log('here');
            var method = 'success';
            var message = "Added a new item to favorites.";
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            var method = 'error';
            var message = err;
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            _this.location.back();
        }, function () {
            console.log('here2');
            _this.location.back();
        });
        this.location.back();
    };
    AddToFavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-add-to-favorites',
            template: __webpack_require__(757),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddToFavoritesComponent);
    return AddToFavoritesComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-to-favorites.component.js.map

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(364);
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
        this.cookieName = 'com.herokuapps.killerapp';
    }
    Object.defineProperty(UserStorageService.prototype, "loggedUser", {
        get: function () {
            var loggedUser = this.getLoggedUser();
            if (loggedUser) {
                return loggedUser.username;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    UserStorageService.prototype.isLogged = function () {
        var loggedUser = this.getLoggedUser();
        return loggedUser ? true : false;
    };
    UserStorageService.prototype.getLoggedUser = function () {
        var cookieContent = this.cookieService.getObject(this.cookieName);
        return cookieContent;
    };
    UserStorageService.prototype.setLoggedUser = function (authResponse) {
        var expirationDate = new Date(2050, 12, 12);
        this.cookieService.putObject(this.cookieName, authResponse, { expires: expirationDate });
    };
    UserStorageService.prototype.clearLoggedUser = function () {
        this.cookieService.remove(this.cookieName);
    };
    UserStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object])
    ], UserStorageService);
    return UserStorageService;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user-storage.service.js.map

/***/ },

/***/ 349:
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
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(747),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/app.component.js.map

/***/ },

/***/ 350:
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
            template: __webpack_require__(750),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/home.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemsCollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsCollectionComponent = (function () {
    function ItemsCollectionComponent(service) {
        this.service = service;
        this.items = [];
        this.activeItemIndex = 0;
    }
    ItemsCollectionComponent.prototype.onPrevious = function () {
        if (this.activeItemIndex > 0) {
            this.activeItemIndex -= 1;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    ItemsCollectionComponent.prototype.onNext = function () {
        if (this.activeItemIndex < this.items.length - 1) {
            this.activeItemIndex += 1;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    ItemsCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItemsCollection()
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            _this.items = response;
        }, function (err) {
            console.log(err);
        }, function () {
            if (_this.items.length > 0) {
                _this.activeItem = _this.items[_this.activeItemIndex];
            }
        });
    };
    ItemsCollectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items-collection',
            template: __webpack_require__(751),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object])
    ], ItemsCollectionComponent);
    return ItemsCollectionComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/items-collection.component.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MakeOfferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MakeOfferComponent = (function () {
    function MakeOfferComponent(itemListingService, userStorageService, route, appRouter, toastrNotification, toastrOptionsFactory) {
        this.itemListingService = itemListingService;
        this.userStorageService = userStorageService;
        this.route = route;
        this.appRouter = appRouter;
        this.toastrNotification = toastrNotification;
        this.toastrOptionsFactory = toastrOptionsFactory;
        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            pictures: [{ imageUrl: null }],
            comments: [],
            offers: [],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };
        this.maxOffer = 'No offers';
        this.offer = {
            offeredPrice: 0,
            id: '0'
        };
    }
    MakeOfferComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userStorageService.isLogged()) {
            var toastrNotificationOptions = this.toastrOptionsFactory
                .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');
            this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            this.appRouter.navigateByUrl('login');
        }
        var id;
        var username;
        if (this.userStorageService.isLogged()) {
            username = this.userStorageService.getLoggedUser().username;
        }
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (x) {
            id = x;
            _this.offer.id = x;
        });
        this.itemListingService.getSingleItem(id)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            _this.item = x;
            // this.item.offers = [{ offeredPrice: 5 }];
            if (_this.getMaxOffer() !== 0) {
                _this.maxOffer = _this.getMaxOffer();
                _this.offer.offeredPrice = _this.maxOffer;
            }
            if (_this.item.owner === username) {
                var toastrNotificationOptions = _this.toastrOptionsFactory
                    .createToastrNotificationOptions('error', 'Make offers for your own car is not allowed!', 'Oops');
                _this.toastrNotification.enqueueNotification(toastrNotificationOptions);
                _this.appRouter.navigateByUrl('/gallery/' + id + '/offers');
            }
        });
    };
    MakeOfferComponent.prototype.getMaxOffer = function () {
        var max = 0;
        if (!this.item.offers) {
            return max;
        }
        for (var _i = 0, _a = this.item.offers; _i < _a.length; _i++) {
            var i = _a[_i];
            max = Math.max(max, i.offeredPrice);
        }
        return max;
    };
    MakeOfferComponent.prototype.onSubmit = function () {
        var _this = this;
        this.itemListingService.makeOffer(this.offer)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            var toastrNotificationOptions = _this.toastrOptionsFactory
                .createToastrNotificationOptions('success', 'You have submitted the offer successfully.', 'Add Item');
            _this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            _this.appRouter.navigateByUrl('/gallery/' + x._id + '/offers');
        });
    };
    MakeOfferComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'make-offer',
            template: __webpack_require__(752),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], MakeOfferComponent);
    return MakeOfferComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/make-offer.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OffersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffersListComponent = (function () {
    function OffersListComponent(itemListingService, userStorageService, route) {
        this.itemListingService = itemListingService;
        this.userStorageService = userStorageService;
        this.route = route;
        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            offers: [],
            pictures: [{ imageUrl: null }],
            comments: [],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };
        this.isLogged = false;
        this.isOwner = false;
    }
    OffersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        var username;
        if (this.userStorageService.isLogged()) {
            this.isLogged = true;
            username = this.userStorageService.getLoggedUser().username;
        }
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (x) { return id = x; });
        this.itemListingService.getSingleItem(id)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            _this.item = x;
            _this.isOwner = _this.item.owner === username;
        });
    };
    OffersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'offers-list',
            template: __webpack_require__(753)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], OffersListComponent);
    return OffersListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/offers-list.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SingleItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleItemComponent = (function () {
    function SingleItemComponent(itemListingService, userStorageService, route) {
        this.itemListingService = itemListingService;
        this.userStorageService = userStorageService;
        this.route = route;
        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            pictures: [],
            comments: [],
            offers: [],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };
    }
    SingleItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        var username;
        if (this.userStorageService.isLogged()) {
            this.isLogged = true;
            username = this.userStorageService.getLoggedUser().username;
        }
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (x) { return id = x; });
        this.itemListingService.getSingleItem(id)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            _this.item = x;
            _this.isOwner = _this.item.owner === username;
        });
    };
    SingleItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-item',
            template: __webpack_require__(754),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SingleItemComponent);
    return SingleItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/single-item.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateProviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateProviderService = (function () {
    function DateProviderService() {
    }
    Object.defineProperty(DateProviderService.prototype, "currentTimestamp", {
        get: function () {
            return Date.now();
        },
        enumerable: true,
        configurable: true
    });
    DateProviderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DateProviderService);
    return DateProviderService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/date-provider.service.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__ = __webpack_require__(560);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListingFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemListingFactoryService = (function () {
    function ItemListingFactoryService() {
    }
    ItemListingFactoryService.prototype.createItemListing = function (make, model, year, price, enginePower, exteriorColor, interiorColor) {
        if (make === void 0) { make = ''; }
        if (model === void 0) { model = ''; }
        if (year === void 0) { year = -1; }
        if (price === void 0) { price = -1; }
        if (enginePower === void 0) { enginePower = -1; }
        if (exteriorColor === void 0) { exteriorColor = ''; }
        if (interiorColor === void 0) { interiorColor = ''; }
        var itemListing = new __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__["a" /* ItemListing */]();
        itemListing.make = make;
        itemListing.model = model;
        itemListing.year = year;
        itemListing.price = price;
        itemListing.enginePower = enginePower;
        itemListing.exteriorColor = exteriorColor;
        itemListing.interiorColor = interiorColor;
        itemListing.createdOn = new Date();
        itemListing.isActive = true;
        itemListing.pictures = [];
        itemListing.comments = [];
        return itemListing;
    };
    ItemListingFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ItemListingFactoryService);
    return ItemListingFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/item-listing-factory.service.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent(userService) {
        this.userService = userService;
        this.userFavorites = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userData = this.userService
            .getUserDetails()
            .subscribe(function (resp) { return _this.userFavorites = resp.json().favorites; });
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(759),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/favorites.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ListedItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListedItemsComponent = (function () {
    function ListedItemsComponent() {
    }
    ListedItemsComponent.prototype.ngOnInit = function () {
    };
    ListedItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listed-items',
            template: __webpack_require__(760),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListedItemsComponent);
    return ListedItemsComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/listed-items.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(31);
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
    function LoginComponent(userService, userStorage, userFactoryService, appRouter, toastrNotificationService, toastrNotificationOptionsFactoryService, hashingService) {
        this.userService = userService;
        this.userStorage = userStorage;
        this.userFactoryService = userFactoryService;
        this.appRouter = appRouter;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
        this.hashingService = hashingService;
        this.user = this.userFactoryService.createUser();
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userStorage.isLogged()) {
            var method = 'error';
            var message = 'User is already logged in.';
            var heading = 'Oops!';
            var toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            this.appRouter.navigateByUrl('profile');
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var hashedPassword = this.hashingService.generateHash(this.user.password);
        this.user.password = hashedPassword;
        this.isLoading = true;
        this.userService.loginUser(this.user)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.username || !response.auth_token) {
                throw new Error('Incorrect response');
            }
            _this.userStorage.setLoggedUser(response);
            var method = 'success';
            var message = "Welcome back " + _this.userStorage.loggedUser;
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            _this.isLoading = false;
            var method = 'error';
            var message = 'Incorrect username or password, please try again.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () {
            var that = _this;
            setTimeout(function () {
                that.appRouter.navigateByUrl('profile');
            }, 1000);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(761),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/login.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(31);
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
    function LogoutComponent(appRouter, userService, userStorage, toastrNotificationService, toastrNotificationOptionsFactoryService) {
        this.appRouter = appRouter;
        this.userService = userService;
        this.userStorage = userStorage;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.logoutUser()
            .subscribe(function (response) {
            var method = 'success';
            var message = "Good bye " + _this.userStorage.loggedUser;
            var heading = 'Aww.';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            _this.userStorage.clearLoggedUser();
        }, function (err) {
            var method = 'error';
            var message = 'Please try again.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () {
            _this.appRouter.navigateByUrl('/');
        });
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(762),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/logout.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(31);
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
    function ProfileComponent(userService, userStorage, appRouter, userFactoryService) {
        this.userService = userService;
        this.userStorage = userStorage;
        this.appRouter = appRouter;
        this.userFactoryService = userFactoryService;
        this.user = this.userFactoryService.createUser();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userStorage.isLogged()) {
            this.appRouter.navigateByUrl('login');
            return;
        }
        this.userService.getUserDetails()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            response.createdOn = new Date(response.createdOn);
            _this.user = response;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(763),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/profile.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(31);
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
    function RegisterComponent(userService, userStorage, userFactoryService, appRouter, toastrNotificationService, toastrNotificationOptionsFactoryService, hashingService) {
        this.userService = userService;
        this.userStorage = userStorage;
        this.userFactoryService = userFactoryService;
        this.appRouter = appRouter;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
        this.hashingService = hashingService;
        this.user = this.userFactoryService.createUser();
        this.isLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.userStorage.isLogged()) {
            var method = 'error';
            var message = 'User is already logged in.';
            var heading = 'Oops!';
            var toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            this.appRouter.navigateByUrl('profile');
        }
    };
    RegisterComponent.prototype.onGenderSelect = function (gender) {
        this.user.gender = gender;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var hashedPassword = this.hashingService.generateHash(this.user.password);
        this.user.password = hashedPassword;
        this.isLoading = true;
        this.userService.registerUser(this.user)
            .map(function (res) { return res.json(); })
            .subscribe(function (responseUser) {
            var method = 'success';
            var message = 'You have registered successfully.';
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            _this.isLoading = false;
            var method = 'error';
            var message = 'Email or username already in use.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () {
            var that = _this;
            setTimeout(function () {
                that.appRouter.navigateByUrl('login');
            }, 1000);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(764),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/register.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_date_formatter_pipe__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listed_items_listed_items_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_routes__ = __webpack_require__(567);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__users_routes__["a" /* UsersRouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login_component__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_date_formatter_pipe__["a" /* DateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__listed_items_listed_items_component__["a" /* ListedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_user_factory_service__["a" /* UserFactoryService */],
                __WEBPACK_IMPORTED_MODULE_6__services_hashing_service__["a" /* HashingService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.module.js.map

/***/ },

/***/ 422:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 422;


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(557);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/main.js.map

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_date_provider_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToastrNotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrNotificationService = (function () {
    function ToastrNotificationService(dateProviderService) {
        this.dateProviderService = dateProviderService;
        this.minimumTimeBetweenEnqueueInMs = 200;
        this.lastNotificationTimestamp = this.dateProviderService.currentTimestamp;
        this.notificationsQueue = [];
        this.lastItemInQueue = {
            method: '',
            message: '',
            heading: '',
            delay: 1500000
        };
    }
    Object.defineProperty(ToastrNotificationService.prototype, "hasNotificationsInQueue", {
        get: function () {
            return this.notificationsQueue.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastrNotificationService.prototype, "nextNotificationInQueue", {
        get: function () {
            var nextNotification = this.notificationsQueue.shift();
            return nextNotification;
        },
        enumerable: true,
        configurable: true
    });
    ToastrNotificationService.prototype.enqueueNotification = function (newNotification) {
        var notificationsAreEqual = this.notificationsAreEqual(newNotification, this.lastItemInQueue);
        var currentTimestamp = this.dateProviderService.currentTimestamp;
        var durationBetweenToastrsIsInvalid = currentTimestamp - this.lastNotificationTimestamp < this.minimumTimeBetweenEnqueueInMs;
        if (notificationsAreEqual && durationBetweenToastrsIsInvalid) {
            return;
        }
        this.notificationsQueue.push(newNotification);
        this.lastNotificationTimestamp = this.dateProviderService.currentTimestamp;
        this.lastItemInQueue = newNotification;
    };
    ToastrNotificationService.prototype.notificationsAreEqual = function (newNotification, lastNotification) {
        var messageIsEqual = newNotification.message === lastNotification.message;
        var headingIsEqual = newNotification.heading === lastNotification.heading;
        return messageIsEqual && headingIsEqual;
    };
    ToastrNotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__helpers_date_provider_service__["a" /* DateProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__helpers_date_provider_service__["a" /* DateProviderService */]) === 'function' && _a) || Object])
    ], ToastrNotificationService);
    return ToastrNotificationService;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/toastr-notification.service.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddListingComponent = (function () {
    function AddListingComponent(appRouter, userStorage, itemListingService, itemListingFactory, toastrNotification, toastrOptionsFactory) {
        this.appRouter = appRouter;
        this.userStorage = userStorage;
        this.itemListingService = itemListingService;
        this.itemListingFactory = itemListingFactory;
        this.toastrNotification = toastrNotification;
        this.toastrOptionsFactory = toastrOptionsFactory;
        this.itemListing = this.itemListingFactory.createItemListing();
    }
    AddListingComponent.prototype.ngOnInit = function () {
        if (!this.userStorage.isLogged()) {
            var toastrNotificationOptions = this.toastrOptionsFactory
                .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');
            this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            this.appRouter.navigateByUrl('login');
        }
    };
    AddListingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.itemListingService.addItem(this.itemListing)
            .subscribe(function (response) {
            var toastrNotificationOptions = _this.toastrOptionsFactory
                .createToastrNotificationOptions('success', 'You have submitted the item successfully.', 'Add Item');
            _this.toastrNotification.enqueueNotification(toastrNotificationOptions);
        });
    };
    AddListingComponent.prototype.onFileUpload = function (uploadedFiles) {
        this.itemListing.pictures = uploadedFiles;
    };
    AddListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(746),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-listing.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_listing_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_uploader_file_uploader_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_form_default_value_directive__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_form_year_validation_directive__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddListingModule; });
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
    { path: 'submit', component: __WEBPACK_IMPORTED_MODULE_0__add_listing_component__["a" /* AddListingComponent */] }
];
var AddListingModule = (function () {
    function AddListingModule() {
    }
    AddListingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_uploader__["NgUploaderModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forChild(routes)],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_3__directives_form_default_value_directive__["a" /* FormDefaultValueDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_form_year_validation_directive__["a" /* FormYearValidationDirective */],
                __WEBPACK_IMPORTED_MODULE_2__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddListingModule);
    return AddListingModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-listing.module.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_urls_config_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_helpers_date_provider_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_requester_options_factory_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_requester_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__items_items_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_navigation_hover_directive__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_storage_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__users_users_module__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comment_section_comment_section_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comment_section_comment_section_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__comment_section_comment_section_component__);
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
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_navigation_hover_directive__["a" /* NavigationHoverDirective */],
                __WEBPACK_IMPORTED_MODULE_23__comment_section_comment_section_component__["CommentSectionComponent"]
            ],
            imports: [
                // MockedModule,
                __WEBPACK_IMPORTED_MODULE_13__items_items_module__["a" /* ItemsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__["a" /* AddListingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_api_urls_config_service__["a" /* ApiUrlsConfigService */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_7__services_helpers_date_provider_service__["a" /* DateProviderService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_12__services_http_requester_service__["a" /* HttpRequesterService */],
                __WEBPACK_IMPORTED_MODULE_17__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_18__services_toastr_notification_service__["a" /* ToastrNotificationService */],
                __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21__services_user_storage_service__["a" /* UserStorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/app.module.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CarouselListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselListComponent = (function () {
    function CarouselListComponent() {
    }
    CarouselListComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CarouselListComponent.prototype, "mylist", void 0);
    CarouselListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(748),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselListComponent);
    return CarouselListComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/carousel-list.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormDefaultValueDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormDefaultValueDirective = (function () {
    function FormDefaultValueDirective(domElement) {
        this.domElement = domElement;
    }
    FormDefaultValueDirective.prototype.ngDoCheck = function () {
        if (this.domElement.nativeElement.value === '-1') {
            this.domElement.nativeElement.value = '';
        }
    };
    FormDefaultValueDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormDefaultValue]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FormDefaultValueDirective);
    return FormDefaultValueDirective;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/form-default-value.directive.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormYearValidationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormYearValidationDirective = (function () {
    function FormYearValidationDirective(domElement) {
        this.domElement = domElement;
    }
    FormYearValidationDirective.prototype.onChange = function () {
        var value = +this.domElement.nativeElement.value;
        if (value < 1850) {
            this.domElement.nativeElement.value = '1850';
        }
        if (2017 < value) {
            this.domElement.nativeElement.value = '2017';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FormYearValidationDirective.prototype, "onChange", null);
    FormYearValidationDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormYearValidation]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FormYearValidationDirective);
    return FormYearValidationDirective;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/form-year-validation.directive.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationHoverDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationHoverDirective = (function () {
    function NavigationHoverDirective(domElement) {
        this.domElement = domElement;
    }
    NavigationHoverDirective.prototype.onMouseEnter = function () {
        this.underline('underline');
    };
    NavigationHoverDirective.prototype.onMouseLeave = function () {
        this.underline(null);
    };
    NavigationHoverDirective.prototype.underline = function (value) {
        this.domElement.nativeElement.style.textDecoration = value;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NavigationHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NavigationHoverDirective.prototype, "onMouseLeave", null);
    NavigationHoverDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavigationHover]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], NavigationHoverDirective);
    return NavigationHoverDirective;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/navigation-hover.directive.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.onFileUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initialLabelText = 'Choose a file...';
        this.uploadedFiles = [];
        this.hasBaseDropZoneOver = false;
        this.options = {
            url: '/api/upload'
        };
        this.sizeLimit = 2000000;
        this.labelText = this.initialLabelText;
    }
    FileUploaderComponent.prototype.ngOnInit = function () { };
    FileUploaderComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFiles.push(data);
            this.onFileUpload.emit(this.uploadedFiles.slice());
        }
    };
    FileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploaderComponent.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    };
    FileUploaderComponent.prototype.updateLabel = function (event) {
        var target = event.target;
        var maxNameLength = 15;
        if (!target.files.length) {
            this.labelText = this.initialLabelText;
        }
        else if (target.files.length > 1) {
            this.labelText = target.files.length + " files selected.";
        }
        else {
            var fileName = target.value.split('\\').pop();
            var startIndex = fileName.length - maxNameLength;
            var shortenedFileName = fileName.substr(startIndex, maxNameLength);
            this.labelText = fileName.length < maxNameLength ? fileName : '...' + shortenedFileName;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], FileUploaderComponent.prototype, "onFileUpload", void 0);
    FileUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(749),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/file-uploader.component.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(350);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/home.module.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRouterModule);
    return HomeRouterModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/home.routes.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(549);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/index.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_list_carousel_list_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_section_comment_section_component__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_collection_items_collection_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_routes__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__offers_make_offer_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__offers_offers_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__single_item_single_item_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_storage_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_users_module__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ItemsModule = (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__items_routes__["a" /* ItemsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_15__users_users_module__["a" /* UsersModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__single_item_single_item_component__["a" /* SingleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__items_collection_items_collection_component__["a" /* ItemsCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_2__comment_section_comment_section_component__["a" /* CommentSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_1__carousel_list_carousel_list_component__["a" /* CarouselListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__offers_offers_list_component__["a" /* OffersListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__offers_make_offer_component__["a" /* MakeOfferComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_12__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_13__services_toastr_notification_service__["a" /* ToastrNotificationService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsModule);
    return ItemsModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/items.module.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_add_to_favorites_add_to_favorites_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_item_single_item_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_collection_items_collection_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offers_offers_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_make_offer_component__ = __webpack_require__(352);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemsRouterModule; });
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
    { path: 'gallery/:id/offers', component: __WEBPACK_IMPORTED_MODULE_5__offers_offers_list_component__["a" /* OffersListComponent */] },
    { path: 'gallery/:id/offer', component: __WEBPACK_IMPORTED_MODULE_6__offers_make_offer_component__["a" /* MakeOfferComponent */] },
    { path: 'gallery/:id', component: __WEBPACK_IMPORTED_MODULE_3__single_item_single_item_component__["a" /* SingleItemComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_4__items_collection_items_collection_component__["a" /* ItemsCollectionComponent */] },
    { path: 'gallery/add/:id', component: __WEBPACK_IMPORTED_MODULE_0__users_add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */] }
];
var ItemsRouterModule = (function () {
    function ItemsRouterModule() {
    }
    ItemsRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsRouterModule);
    return ItemsRouterModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/items.routes.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListing; });
var ItemListing = (function () {
    function ItemListing() {
    }
    return ItemListing;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/item-listing.model.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user.model.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__ = __webpack_require__(31);
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
    function NavigationComponent(userStorage) {
        this.userStorage = userStorage;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activeItem = 'Home';
        this.hasLoggedUser = this.userStorage.isLogged();
        this.loggedUserName = this.userStorage.loggedUser;
    };
    NavigationComponent.prototype.ngDoCheck = function () {
        this.hasLoggedUser = this.userStorage.isLogged();
        this.loggedUserName = this.userStorage.loggedUser;
    };
    NavigationComponent.prototype.setActiveItem = function (selectedItem) {
        selectedItem = selectedItem || '';
        this.activeItem = selectedItem;
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(755),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/navigation.component.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateFormatterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateFormatterPipe = (function () {
    function DateFormatterPipe() {
    }
    DateFormatterPipe.prototype.transform = function (value) {
        return value.toLocaleDateString();
    };
    DateFormatterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatter'
        }), 
        __metadata('design:paramtypes', [])
    ], DateFormatterPipe);
    return DateFormatterPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/date-formatter.pipe.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToastrNotificationsHandlerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastrNotificationsHandlerComponent = (function () {
    function ToastrNotificationsHandlerComponent(toastr, viewContainerRef, toastrNotificationService) {
        this.toastr = toastr;
        this.viewContainerRef = viewContainerRef;
        this.toastrNotificationService = toastrNotificationService;
        this.toasterDurationInMs = 3000;
    }
    ToastrNotificationsHandlerComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.viewContainerRef);
    };
    ToastrNotificationsHandlerComponent.prototype.ngDoCheck = function () {
        var toasterDurationDelay = 0;
        var _loop_1 = function() {
            var that = this_1;
            var nextToast = this_1.toastrNotificationService.nextNotificationInQueue;
            setTimeout(function () {
                that.toastr.setRootViewContainerRef(that.viewContainerRef);
                that.toastr[nextToast.method](nextToast.message, nextToast.heading);
            }, nextToast.delay + toasterDurationDelay);
            // no delay for the first toast,
            // delay each next toast with the duration
            // of the lifetime of the previous one.
            toasterDurationDelay = this_1.toasterDurationInMs;
        };
        var this_1 = this;
        while (this.toastrNotificationService.hasNotificationsInQueue) {
            _loop_1();
        }
    };
    ToastrNotificationsHandlerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toastr-notifications-handler',
            template: __webpack_require__(756),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 565:
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
            template: __webpack_require__(758),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/facebook-login.component.js.map

/***/ },

/***/ 566:
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
            template: __webpack_require__(765),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.component.js.map

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listed_items_listed_items_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersRouterModule; });
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
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'facebook-login', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_1__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'favorites/:id', component: __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */] },
    { path: 'listed-items', component: __WEBPACK_IMPORTED_MODULE_2__listed_items_listed_items_component__["a" /* ListedItemsComponent */] }
];
var UsersRouterModule = (function () {
    function UsersRouterModule() {
    }
    UsersRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModule);
    return UsersRouterModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.routes.js.map

/***/ },

/***/ 568:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/environment.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/polyfills.js.map

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToastrNotificationOptionsFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrNotificationOptionsFactoryService = (function () {
    function ToastrNotificationOptionsFactoryService() {
    }
    ToastrNotificationOptionsFactoryService.prototype.createToastrNotificationOptions = function (method, message, heading, delay) {
        if (method === void 0) { method = ''; }
        if (message === void 0) { message = ''; }
        if (heading === void 0) { heading = ''; }
        if (delay === void 0) { delay = 0; }
        method = method || 'info';
        message = message || 'Hello World!';
        heading = heading || 'Toastr';
        delay = delay || 0;
        return {
            method: method,
            message: message,
            heading: heading,
            delay: delay
        };
    };
    ToastrNotificationOptionsFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastrNotificationOptionsFactoryService);
    return ToastrNotificationOptionsFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/toastr-notification-options-factory.service.js.map

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemListingService = (function () {
    // GET  -> all items
    // POST -> create item
    // GET  /:id -> item details
    // PUT  /:id -> update listing
    // POST /:id -> submit offer
    function ItemListingService(httpRequesterService, httpRequesterOptionsFactory, apiUrlsConfigService) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.apiUrlsConfigService = apiUrlsConfigService;
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
        this.galleryApiUrl = this.apiUrlsConfigService.galleryApiUrl;
    }
    ItemListingService.prototype.addItem = function (item) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.galleryApiUrl, item, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    ItemListingService.prototype.getSingleItem = function (id) {
        var url = this.galleryApiUrl + '/' + id;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    ItemListingService.prototype.getItemsCollection = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.galleryApiUrl, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    ItemListingService.prototype.makeOffer = function (offer) {
        var url = this.galleryApiUrl + '/' + offer.id;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, offer, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    ItemListingService.prototype.addComment = function (comment) {
        var url = this.galleryApiUrl + "/id/comments";
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, comment, this.contentTypeHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    // TODO: 
    ItemListingService.prototype.removeItem = function (Item) {
        return null;
    };
    ;
    ItemListingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], ItemListingService);
    return ItemListingService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/item-listing.service.js.map

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
    function UserService(httpRequesterService, httpRequesterOptionsFactory, apiUrlsConfigService) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.apiUrlsConfigService = apiUrlsConfigService;
        this.userApiUrl = '/api/users';
        this.logoutApiUrl = '/api/logout';
        this.favoritesApiUrl = '/api/favorites';
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
        this.userApiUrl = this.apiUrlsConfigService.usersApiUrl;
        this.logoutApiUrl = this.apiUrlsConfigService.logoutApiUrl;
        this.favoritesApiUrl = this.apiUrlsConfigService.favoritesApiUrl;
    }
    UserService.prototype.registerUser = function (user) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService.prototype.loginUser = function (user) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    UserService.prototype.logoutUser = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.logoutApiUrl);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    // Using Cookies 
    // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
    UserService.prototype.getUserDetails = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.userApiUrl);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    UserService.prototype.addItemToUserFavorites = function (id) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.favoritesApiUrl, id, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user.service.js.map

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg10.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = ".well {\n  background-color: transparent;\n  border: none; }\n  .well .carousel {\n    max-height: 400px;\n    overflow: hidden; }\n    .well .carousel .item img {\n      height: 600px; }\n"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "#image-uploader {\n  border-top: 1px solid rgba(225, 225, 225, 0.77); }\n\nlabel {\n  margin-top: 25px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  label:hover {\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #494949;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\nlabel,\ninput,\nbutton {\n  width: 250px; }\n\nimg {\n  padding: 10px; }\n\n.well {\n  background-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-top: 25px; }\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black;\n  padding: 20px; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n.add-to-favorites-btn {\n  float: right; }\n  .add-to-favorites-btn span.glyphicon-heart {\n    cursor: pointer;\n    font-size: 3.5rem;\n    color: #E6E6E6; }\n  .add-to-favorites-btn:hover > span.glyphicon-heart {\n    color: #DF474B; }\n\n#controls {\n  border-top: 1px solid rgba(225, 225, 225, 0.77);\n  padding: 25px; }\n  #controls .btn {\n    overflow: hidden;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #2f2f2f;\n    border-color: rgba(225, 225, 225, 0.77);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%; }\n    #controls .btn:hover {\n      background-color: #494949; }\n\n.gallery-item {\n  min-width: 300px;\n  max-width: 500px;\n  float: left; }\n  .gallery-item a {\n    text-align: center; }\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "img {\n  max-width: 300px; }\n"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\n@font-face {\n  font-family: noto;\n  src: url(\"../../assets/NotoSans-Regular.ttf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center;\n  font-size: 20px;\n  font-family: noto; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n    nav h1.app-heading:hover {\n      color: white; }\n  nav a.navbar-btn:hover {\n    color: white; }\n  nav a.navbar-brand {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    font-size: 22px; }\n    nav a.navbar-brand:hover {\n      color: white; }\n  nav li.favorites-item:hover span.glyphicon.glyphicon-heart {\n    color: #DF474B; }\n  nav li.favorites-item span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n  nav span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n    nav span.glyphicon.glyphicon-heart:hover {\n      color: red; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000; }\n  nav ul.dropdown-menu > li > a {\n    font-size: 1.5rem;\n    color: #444444; }\n"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "a.add-btn span.glyphicon-heart {\n  cursor: pointer;\n  font-size: 3.5rem;\n  color: #E6E6E6; }\n\na.add-btn:hover > span.glyphicon-heart {\n  color: #DF474B; }\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = ".login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\ninput {\n  color: white;\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = "img {\n  box-shadow: 0 5px 20px black; }\n\n.list-group {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: transparent; }\n  .list-group .list-group-item {\n    border: none;\n    box-shadow: 0 5px 20px black;\n    background-color: transparent;\n    margin-bottom: 20px; }\n    .list-group .list-group-item .btn {\n      font-family: planer;\n      font-size: 17px;\n      background-color: transparent;\n      color: rgba(225, 225, 225, 0.77);\n      border: 1px solid rgba(225, 225, 225, 0.77);\n      border-radius: 0px;\n      box-shadow: 0 5px 20px black;\n      overflow: hidden; }\n      .list-group .list-group-item .btn:hover {\n        text-decoration: underline; }\n  .list-group .no-shadow {\n    box-shadow: none; }\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg2.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput,\n.dropdown-toggle {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched,\n  .dropdown-toggle.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched,\n  .dropdown-toggle.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <div id=\"component-header\">\n    <h3>Submit Listing</h3>\n  </div>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\n      <div id=\"inputs-container\" class=\"row\">\n        <div class=\"content-left col-xs-8\">\n        </div>\n        <div id=\"content-right\" class=\"col-xs-4\">\n          <div class=\"well\">\n            <div class=\"form-group\">\n              <input type=\"text\" #ngMake=\"ngModel\" class=\"form-control\" name=\"make\" [(ngModel)]=\"itemListing.make\" placeholder=\"Make\" required\n                minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #ngModel=\"ngModel\" class=\"form-control\" name=\"model\" [(ngModel)]=\"itemListing.model\" placeholder=\"Model\"\n                required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input appFormDefaultValue appFormYearValidation type=\"text\" #ngYear=\"ngModel\" class=\"form-control\" name=\"year\" [(ngModel)]=\"itemListing.year\"\n                placeholder=\"Year\" required minlength=\"4\" maxlength=\"4\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"itemListing.price\"\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input appFormDefaultValue type=\"text\" #ngEnginePower=\"ngModel\" class=\"form-control\" name=\"enginePower\" [(ngModel)]=\"itemListing.enginePower\"\n                placeholder=\"Engine Power\" required minlength=\"1\" maxlength=\"4\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #ngExteriorColor=\"ngModel\" class=\"form-control\" name=\"exteriorColor\" [(ngModel)]=\"itemListing.exteriorColor\"\n                placeholder=\"Exterior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #InteriorColor=\"ngModel\" class=\"form-control\" name=\"interiorColor\" [(ngModel)]=\"itemListing.interiorColor\"\n                placeholder=\"Interior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z]+\">\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"image-upload\" class=\"form-group\">\n        <app-file-uploader (onFileUpload)=\"onFileUpload($event)\"></app-file-uploader>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\n    <app-navigation></app-navigation>\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\n    <div id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "<div class=\"well\">\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!--Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li [class.active]=\"i===0\" *ngFor=\"let item of mylist; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\">\n      </li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div *ngFor=\"let item of mylist; let i=index\" class=\"item\" [class.active]=\"i===0\">\n        <img [attr.src]=\"item.imageUrl\">\n      </div>\n    </div>\n\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = "<!--<label>\n  <input [id]=\"id\" type=\"file\" name=\"fileUpload\" (change)=\"updateLabel($event)\" multiple>\n  <label [for]=\"id\" class=\"file-upl-lb\">\n    <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span> {{labelText}}\n  </label>\n</label>-->\n<!-- app.component.html -->\n<div id=\"image-uploader\">\n  <label class=\"btn btn-default btn-file\">\n    Upload Image <input style=\"display: none;\" type=\"file\" ngFileSelect [options]=\"options\" (onUpload)=\"handleUpload($event)\" (beforeUpload)=\"beforeUpload($event)\" accept=\"image/*\">\n</label>\n<!-- drag & drop file example-->\n<style>\n    .file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n  </style>\n<div ngFileDrop [options]=\"options\" (onUpload)=\"handleUpload($event)\" [ngClass]=\"{'file-over': hasBaseDropZoneOver}\" (onFileOver)=\"fileOverBase($event)\"\n  (beforeUpload)=\"beforeUpload($event)\">\n</div>\n\n<div *ngIf=\"uploadedFiles.length > 0\" class=\"well\" id=\"uploaded\">\n  <img *ngFor=\"let file of uploadedFiles \" [src]=\"file.imageUrl\" height=\"150px\" alt=\"image\">\n</div>\n</div>"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\n</section>"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <div id=\"component-header\">\n    <h3 *ngIf=\"this.items.length === 0\">Dreamstime Gallery</h3>\n    <h3 *ngIf=\"this.items.length !== 0\">\n      <span>{{this.activeItem.make}}</span>\n      <span>{{this.activeItem.model}}</span>\n      <span>{{this.activeItem.year}}</span>\n      <a routerLink='/gallery/add/{{this.activeItem._id}}' class=\"add-to-favorites-btn\">\n        <span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span>\n      </a>\n    </h3>\n  </div>\n  <div class=\"row\">\n    <h3 *ngIf=\"this.items.length === 0\">Be the first to post a new item!</h3>\n    <div *ngIf=\"this.items.length !== 0\" id=\"carousel-container\" class=\"col-xs-8 col-xs-offset-2\">\n      <app-carousel *ngIf=\"this.activeItem\" [mylist]=\"this.activeItem.pictures\"></app-carousel>\n    </div>\n  </div>\n  <div id=\"controls\">\n    <div *ngIf=\"this.items.length !== 0\" class=\"row\">\n      <div class=\"col-xs-2 col-xs-offset-1\">\n        <a (click)=\"onPrevious()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\n          Previous\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-xs-offset-1\">\n        <a class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\" routerLink=\"{{this.activeItem._id}}\">\n          More Details\n        </a>\n      </div>\n      <div class=\"col-xs-2 col-xs-offset-1\">\n        <a (click)=\"onNext()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\n          Next\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <img src=\"{{this.item.pictures[0].imageUrl}}\">\n    <h3>StartPrice: {{this.item.price}}</h3>\n    <h3>Highest offer: {{this.maxOffer}}</h3>\n\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\n        <div class=\"form-group\">\n            <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"offer.offeredPrice\"\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </div>\n    </form>\n</div>"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "<h2>Offers for:</h2>\n<a routerLink=\"/gallery/{{this.item._id}}\"><img src=\"{{this.item.pictures[0].imageUrl}}\"></a>\n\n<a *ngIf=\"this.isLogged && !this.isOwner\" routerLink=\"/gallery/{{this.item._id}}/offer\" class=\"btn btn-primary\">Make offer</a>\n\n<h3 *ngIf=\"!this.item.offers.length\">No offers at this moment!</h3>\n\n<div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\n    <h3>{{offer.offeredPrice}}</h3>\n    <p>By: {{offer.username}}</p>\n</div>"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<div>\n    <h1>{{this.item.make}} {{this.item.model}} {{this.item.year}}</h1>\n    <app-carousel *ngIf=\"this.item && this.item.pictures && this.item.pictures.length > 0\" [mylist]=\"this.item.pictures\"></app-carousel>\n    <!--<div *ngIf=\"!this.item && !this.item.pictures && !this.item.pictures.length > 0\"></div>-->\n    <h3>Engine power: {{this.item.enginePower}}hp</h3>\n    <h3>Exterior Color: {{this.item.exteriorColor}}</h3>\n    <h3>Interior Color: {{this.item.interiorColor}}</h3>\n    <h3>Price: ${{this.item.price}}</h3>\n\n    <!--TODO add right update link when ready-->\n\n    <a *ngIf=\"this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}\">Update</a>\n\n    <!--TODO add right make offer link when ready-->\n\n    <a *ngIf=\"this.isLogged && !this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offer\">Make Offer</a>\n\n    <a class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offers\">Show offers</a>\n</div>"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n      aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    <a class=\"navbar-brand\" (click)=\"setActiveItem()\" routerLink=\"/\">DREAMSTIME</a>\n  </div>\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Browse'\" (click)=\"setActiveItem('Browse')\"><a routerLink=\"/gallery\">Browse</a></li>\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/submit\">Create</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Profile</a></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink='favorites'>Favorites</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Settings</a></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink=\"logout\">Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!-- /.navbar-collapse -->\n  <div class=\"row public-container\" *ngIf=\"hasLoggedUser == false\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <h1>\n        <a routerLink=\"/gallery\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n      <a routerLink=\"/\">\n        <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\n      </a>\n      <h1>\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n    </div>\n  </div>\n</nav>"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "<p>\n  facebook-login works!\n</p>\n"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let favoriteItem of userFavorites\">{{favoriteItem}}</div>\n</div>"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "<p>\n  listed-items works!\n</p>\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <h2 id=\"component-header\">Sign In</h2>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"isLoading === false\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(); loginForm.reset()\">\n      <div class=\"form-group\">\n        <label> \n          <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label> \n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\n      </div>\n    </form>\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\n  </div>\n</div>\n\n<!-- Carousel testing DELETE -->\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\n      <img [src]=\"img\" alt=\"slide\">\n    </div>\n  </div>\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>-->"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"content-left col-xs-6\">\n    <img [src]=\"user.image\" alt=\"profile image\" width=\"100%\">\n  </div>\n  <div class=\"content-right col-xs-6\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.username}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.email}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.firstName}} {{user.lastName}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.gender}}, {{user.age}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>Member since:</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.createdOn | dateFormatter}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item no-shadow row\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <a appNavigationHover routerLink=\"/favorites\" class=\"btn btn-default col-xs-12\">\n              <span>View Favorites</span>\n            </a>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <a appNavigationHover routerLink=\"/listed-items\" class=\"btn btn-default col-xs-12\">\n              <span>View Listed Items</span>\n            </a>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n\n  <div id=\"component-header\">\n    <h3>Registration Form</h3>\n  </div>\n  <div class=\"inner-wrapper\">\n\n    <form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div id=\"inputs-container\" class=\"row\">\n        <div class=\"content-left col-xs-8\">\n        </div>\n        <div id=\"content-right\" class=\"col-xs-4\">\n          <div class=\"well\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required\n                minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\"\n                required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\"\n                minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\"\n                maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\"\n                required>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"dropdown\">\n                <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          {{user.gender}}\n        <span class=\"caret\"></span>\n      </button>\n                <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          Gender\n        <span class=\"caret\"></span>\n      </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\n                  <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\n                  <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\n            </div>\n            <div class=\"form-group\">\n              <button class=\"form-control btn btn-success\" type=\"submit\">Register</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ },

/***/ 798:
/***/ function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ilievv/Documents/Angular2 Official/src/app/comment-section/comment-section.component.ts'\n    at Error (native)");

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommentSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentSectionComponent = (function () {
    function CommentSectionComponent(itemListingService, userStorageService, toastrNotification, toastrOptions) {
        this.itemListingService = itemListingService;
        this.userStorageService = userStorageService;
        this.toastrNotification = toastrNotification;
        this.toastrOptions = toastrOptions;
        this.comment = '';
    }
    CommentSectionComponent.prototype.ngOnInit = function () {
    };
    CommentSectionComponent.prototype.onSubmit = function () {
    };
    CommentSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment-section',
            template: __webpack_require__(803),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _d) || Object])
    ], CommentSectionComponent);
    return CommentSectionComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/comment-section.component.js.map

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = "<div class=\"comment-section\">\n  <div class=\"comments-wrapper\">\n    <ul></ul>\n  </div>\n  <div class=\"comment-wrapper\">\n    <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\" [(ngModel)]=\"comment\"></textarea>\n  </div>\n</div>"

/***/ }

},[789]);
//# sourceMappingURL=main.bundle.map