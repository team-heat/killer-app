webpackJsonp([0,4],{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(562);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/user-factory.service.js.map

/***/ },

/***/ 19:
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
        this.localStorageFavoritesKey = 'killerappuserfavorites';
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
    UserStorageService.prototype.setLoggedUserFavorites = function (favorites) {
        var favoritesJson = JSON.stringify(favorites);
        localStorage.setItem(this.localStorageFavoritesKey, favoritesJson);
    };
    UserStorageService.prototype.getLoggedUserFavorites = function () {
        var favoritesJson = localStorage.getItem(this.localStorageFavoritesKey);
        return JSON.parse(favoritesJson);
    };
    UserStorageService.prototype.clearLoggedUserFavorites = function () {
        localStorage.removeItem(this.localStorageFavoritesKey);
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

/***/ 228:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/api-urls-config.service.js.map

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(784);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/hashing.service.js.map

/***/ },

/***/ 230:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/http-requester-options-factory.service.js.map

/***/ },

/***/ 231:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/http-requester.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(19);
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
    function AddToFavoritesComponent(userService, userStorage, toastrNotificationService, toastrNotificationOptionsFactoryService) {
        this.userService = userService;
        this.userStorage = userStorage;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
    }
    Object.defineProperty(AddToFavoritesComponent.prototype, "itemIdToFavorite", {
        get: function () {
            return this._itemIdToFavorite;
        },
        set: function (value) {
            var _this = this;
            this._itemIdToFavorite = value;
            var savedUserFavorites = this.userStorage.getLoggedUserFavorites();
            this.itemIsFavorite = savedUserFavorites.some(function (item) { return item === _this.itemIdToFavorite; });
        },
        enumerable: true,
        configurable: true
    });
    AddToFavoritesComponent.prototype.ngOnInit = function () { };
    AddToFavoritesComponent.prototype.addToFavorites = function () {
        var _this = this;
        return this.userService.addItemToUserFavorites(this.itemIdToFavorite)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            var method = 'success';
            var message = "Added a new item to favorites.";
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            _this.userStorage.setLoggedUserFavorites(response.favorites);
            _this.itemIsFavorite = true;
        }, function (err) {
            var method = 'error';
            var message = 'Item already exists in your favorites list.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () { });
    };
    AddToFavoritesComponent.prototype.removeFromFavorites = function () {
        var _this = this;
        return this.userService.removeItemToUserFavorites(this.itemIdToFavorite)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            var method = 'success';
            var message = "Removed an item from favorites.";
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
            _this.userStorage.setLoggedUserFavorites(response.favorites);
            _this.itemIsFavorite = false;
        }, function (err) {
            var method = 'error';
            var message = 'Item dows not exist in your favorites list.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () { });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AddToFavoritesComponent.prototype, "itemIdToFavorite", null);
    AddToFavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add-to-favorites',
            template: __webpack_require__(760),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _d) || Object])
    ], AddToFavoritesComponent);
    return AddToFavoritesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/add-to-favorites.component.js.map

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
            template: __webpack_require__(749),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.component.js.map

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
            template: __webpack_require__(752),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
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
    function ItemsCollectionComponent(userStorage, service) {
        this.userStorage = userStorage;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-items-collection',
            template: __webpack_require__(754),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _b) || Object])
    ], ItemsCollectionComponent);
    return ItemsCollectionComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/items-collection.component.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(42);
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
            id: '0',
            status: 'active',
            username: ''
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
            template: __webpack_require__(755),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], MakeOfferComponent);
    return MakeOfferComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/make-offer.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(19);
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
        if (this.userStorageService.isLogged()) {
            this.isLogged = true;
            this.loggedUser = this.userStorageService.getLoggedUser().username;
        }
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (x) { return id = x; });
        this.itemListingService.getSingleItem(id)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            _this.item = x;
            _this.isOwner = _this.item.owner === _this.loggedUser;
        });
    };
    OffersListComponent.prototype.acceptOffer = function ($event, offer) {
        var _this = this;
        // TODO Add logging somewhere with successfull deals ... maybe!
        if (this.loggedUser === this.item.owner) {
            for (var _i = 0, _a = this.item.offers; _i < _a.length; _i++) {
                var o = _a[_i];
                if (o.username === offer.username &&
                    o.offeredPrice === offer.offeredPrice &&
                    o.status === 'active') {
                    // all other offers been canceled 1st
                    for (var _b = 0, _c = this.item.offers; _b < _c.length; _b++) {
                        var ofr = _c[_b];
                        ofr.status = 'canceled';
                    }
                    o.status = 'accepted';
                    this.item.isActive = false;
                    this.itemListingService.updateItem(this.item)
                        .map(function (x) { return x.json(); })
                        .subscribe(function (x) { return _this.item = x; });
                }
            }
        }
    };
    OffersListComponent.prototype.rejectOffer = function ($event, offer) {
        var _this = this;
        this.changeOfferStatus($event, offer, 'rejected', function (str) { return _this.loggedUser === _this.item.owner; });
    };
    OffersListComponent.prototype.cencelOffer = function ($event, offer) {
        var _this = this;
        this.changeOfferStatus($event, offer, 'canceled', function (str) { return str === _this.loggedUser; });
    };
    OffersListComponent.prototype.changeOfferStatus = function ($event, offer, status, allowed) {
        var _this = this;
        for (var _i = 0, _a = this.item.offers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (allowed(o.username) &&
                o.offeredPrice === offer.offeredPrice &&
                o.status === 'active') {
                o.status = status;
                this.itemListingService.updateItem(this.item)
                    .map(function (x) { return x.json(); })
                    .subscribe(function (x) { return _this.item = x; });
            }
        }
    };
    OffersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'offers-list',
            template: __webpack_require__(756)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], OffersListComponent);
    return OffersListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/offers-list.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(757),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SingleItemComponent);
    return SingleItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/single-item.component.js.map

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
//# sourceMappingURL=D:/GitHub/killer-app/src/date-provider.service.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__ = __webpack_require__(561);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/item-listing-factory.service.js.map

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
            template: __webpack_require__(762),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/favorites.component.js.map

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
            template: __webpack_require__(763),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListedItemsComponent);
    return ListedItemsComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/listed-items.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(19);
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
            _this.userStorage.setLoggedUserFavorites(response.favorites);
            _this.userStorage.setLoggedUser({
                auth_token: response.auth_token,
                username: response.username
            });
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
            template: __webpack_require__(764),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/login.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(19);
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
            _this.userStorage.clearLoggedUserFavorites();
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
            template: __webpack_require__(765),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/logout.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(766),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/profile.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(767),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/register.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_date_formatter_pipe__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_hashing_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listed_items_listed_items_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_routes__ = __webpack_require__(568);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/users.module.js.map

/***/ },

/***/ 42:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notification.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(557);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/GitHub/killer-app/src/main.js.map

/***/ },

/***/ 46:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notification-options-factory.service.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(748),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/add-listing.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_listing_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_uploader_file_uploader_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_form_default_value_directive__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_form_year_validation_directive__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(20);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/add-listing.module.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_add_to_favorites_add_to_favorites_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_urls_config_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_helpers_date_provider_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_requester_options_factory_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_requester_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__items_items_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navigation_navigation_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_navigation_hover_directive__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__users_users_module__ = __webpack_require__(363);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_navigation_hover_directive__["a" /* NavigationHoverDirective */]
            ],
            imports: [
                // MockedModule,
                __WEBPACK_IMPORTED_MODULE_14__items_items_module__["a" /* ItemsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__["a" /* AddListingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_api_urls_config_service__["a" /* ApiUrlsConfigService */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_8__services_helpers_date_provider_service__["a" /* DateProviderService */],
                __WEBPACK_IMPORTED_MODULE_12__services_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_13__services_http_requester_service__["a" /* HttpRequesterService */],
                __WEBPACK_IMPORTED_MODULE_18__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_19__services_toastr_notification_service__["a" /* ToastrNotificationService */],
                __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_3__users_add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.module.js.map

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
            template: __webpack_require__(750),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselListComponent);
    return CarouselListComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/carousel-list.component.js.map

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
//# sourceMappingURL=D:/GitHub/killer-app/src/form-default-value.directive.js.map

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
//# sourceMappingURL=D:/GitHub/killer-app/src/form-year-validation.directive.js.map

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
//# sourceMappingURL=D:/GitHub/killer-app/src/navigation-hover.directive.js.map

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
            template: __webpack_require__(751),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/file-uploader.component.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(35);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/home.module.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/home.routes.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(549);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/GitHub/killer-app/src/index.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(753),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _d) || Object])
    ], CommentSectionComponent);
    return CommentSectionComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/comment-section.component.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_list_carousel_list_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_section_comment_section_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_collection_items_collection_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_routes__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__offers_make_offer_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__offers_offers_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__single_item_single_item_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_toastr_notification_options_factory_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toastr_notification_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_storage_service__ = __webpack_require__(19);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/items.module.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_add_to_favorites_add_to_favorites_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/items.routes.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListing; });
var ItemListing = (function () {
    function ItemListing() {
    }
    return ItemListing;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/item-listing.model.js.map

/***/ },

/***/ 562:
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

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__ = __webpack_require__(19);
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
            template: __webpack_require__(758),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/navigation.component.js.map

/***/ },

/***/ 564:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/date-formatter.pipe.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(42);
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
            template: __webpack_require__(759),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 566:
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
            template: __webpack_require__(761),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/facebook-login.component.js.map

/***/ },

/***/ 567:
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
            template: __webpack_require__(768),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.component.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_favorites_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listed_items_listed_items_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(20);
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
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'facebook-login', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_0__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'listed-items', component: __WEBPACK_IMPORTED_MODULE_1__listed_items_listed_items_component__["a" /* ListedItemsComponent */] }
];
var UsersRouterModule = (function () {
    function UsersRouterModule() {
    }
    UsersRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModule);
    return UsersRouterModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.routes.js.map

/***/ },

/***/ 569:
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

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/GitHub/killer-app/src/polyfills.js.map

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(231);
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
    ItemListingService.prototype.updateItem = function (item) {
        var url = this.galleryApiUrl + '/' + item._id;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, item, this.contentTypeHeaderObject);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/item-listing.service.js.map

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(231);
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
    UserService.prototype.removeItemToUserFavorites = function (id) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.favoritesApiUrl, id, this.contentTypeHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/user.service.js.map

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg10.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = ".well {\n  background-color: transparent;\n  border: none; }\n  .well .carousel {\n    max-height: 400px;\n    overflow: hidden; }\n    .well .carousel .item img {\n      height: 600px; }\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "#image-uploader {\n  border-top: 1px solid rgba(225, 225, 225, 0.77); }\n\nlabel {\n  margin-top: 25px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  label:hover {\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #494949;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\nlabel,\ninput,\nbutton {\n  width: 250px; }\n\nimg {\n  padding: 10px; }\n\n.well {\n  background-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-top: 25px; }\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black;\n  padding: 20px; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n.add-to-favorites-btn {\n  float: right; }\n  .add-to-favorites-btn span.glyphicon-heart {\n    cursor: pointer;\n    font-size: 3.5rem;\n    color: #E6E6E6; }\n  .add-to-favorites-btn:hover > span.glyphicon-heart {\n    color: #DF474B; }\n\n#controls {\n  border-top: 1px solid rgba(225, 225, 225, 0.77);\n  padding: 25px; }\n  #controls .btn {\n    overflow: hidden;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #2f2f2f;\n    border-color: rgba(225, 225, 225, 0.77);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%; }\n    #controls .btn:hover {\n      background-color: #494949; }\n\n.gallery-item {\n  min-width: 300px;\n  max-width: 500px;\n  float: left; }\n  .gallery-item a {\n    text-align: center; }\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "img {\n  max-width: 300px; }\n"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\n@font-face {\n  font-family: noto;\n  src: url(\"../../assets/NotoSans-Regular.ttf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center;\n  font-size: 20px;\n  font-family: noto; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n    nav h1.app-heading:hover {\n      color: white; }\n  nav a.navbar-btn:hover {\n    color: white; }\n  nav a.navbar-brand {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    font-size: 22px; }\n    nav a.navbar-brand:hover {\n      color: white; }\n  nav li.favorites-item:hover span.glyphicon.glyphicon-heart {\n    color: #DF474B; }\n  nav li.favorites-item span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n  nav span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n    nav span.glyphicon.glyphicon-heart:hover {\n      color: red; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000; }\n  nav ul.dropdown-menu > li > a {\n    font-size: 1.5rem;\n    color: #444444; }\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = "span.add-to-favorites {\n  cursor: pointer;\n  font-size: 3.5rem;\n  color: #E6E6E6; }\n  span.add-to-favorites:hover {\n    color: #DF474B; }\n\nspan.remove-to-favorites {\n  cursor: pointer;\n  font-size: 3.5rem;\n  color: #DF474B; }\n  span.remove-to-favorites:hover {\n    color: #E6E6E6; }\n"

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = ".login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\ninput {\n  color: white;\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = "img {\n  box-shadow: 0 5px 20px black; }\n\n.list-group {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: transparent; }\n  .list-group .list-group-item {\n    border: none;\n    box-shadow: 0 5px 20px black;\n    background-color: transparent;\n    margin-bottom: 20px; }\n    .list-group .list-group-item .btn {\n      font-family: planer;\n      font-size: 17px;\n      background-color: transparent;\n      color: rgba(225, 225, 225, 0.77);\n      border: 1px solid rgba(225, 225, 225, 0.77);\n      border-radius: 0px;\n      box-shadow: 0 5px 20px black;\n      overflow: hidden; }\n      .list-group .list-group-item .btn:hover {\n        text-decoration: underline; }\n  .list-group .no-shadow {\n    box-shadow: none; }\n"

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg2.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput,\n.dropdown-toggle {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched,\n  .dropdown-toggle.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched,\n  .dropdown-toggle.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\r\n  <div id=\"component-header\">\r\n    <h3>Submit Listing</h3>\r\n  </div>\r\n  <div class=\"inner-wrapper\">\r\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\r\n      <div id=\"inputs-container\" class=\"row\">\r\n        <div class=\"content-left col-xs-8\">\r\n        </div>\r\n        <div id=\"content-right\" class=\"col-xs-4\">\r\n          <div class=\"well\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" #ngMake=\"ngModel\" class=\"form-control\" name=\"make\" [(ngModel)]=\"itemListing.make\" placeholder=\"Make\" required\r\n                minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z0-9]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" #ngModel=\"ngModel\" class=\"form-control\" name=\"model\" [(ngModel)]=\"itemListing.model\" placeholder=\"Model\"\r\n                required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z0-9]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input appFormDefaultValue appFormYearValidation type=\"text\" #ngYear=\"ngModel\" class=\"form-control\" name=\"year\" [(ngModel)]=\"itemListing.year\"\r\n                placeholder=\"Year\" required minlength=\"4\" maxlength=\"4\" pattern=\"[0-9]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"itemListing.price\"\r\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input appFormDefaultValue type=\"text\" #ngEnginePower=\"ngModel\" class=\"form-control\" name=\"enginePower\" [(ngModel)]=\"itemListing.enginePower\"\r\n                placeholder=\"Engine Power\" required minlength=\"1\" maxlength=\"4\" pattern=\"[0-9]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" #ngExteriorColor=\"ngModel\" class=\"form-control\" name=\"exteriorColor\" [(ngModel)]=\"itemListing.exteriorColor\"\r\n                placeholder=\"Exterior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" #InteriorColor=\"ngModel\" class=\"form-control\" name=\"interiorColor\" [(ngModel)]=\"itemListing.interiorColor\"\r\n                placeholder=\"Interior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z]+\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"image-upload\" class=\"form-group\">\r\n        <app-file-uploader (onFileUpload)=\"onFileUpload($event)\"></app-file-uploader>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\r\n    <app-navigation></app-navigation>\r\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<div class=\"well\">\r\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!--Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li [class.active]=\"i===0\" *ngFor=\"let item of mylist; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\">\r\n      </li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div *ngFor=\"let item of mylist; let i=index\" class=\"item\" [class.active]=\"i===0\">\r\n        <img [attr.src]=\"item.imageUrl\">\r\n      </div>\r\n    </div>\r\n\r\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = "<!--<label>\r\n  <input [id]=\"id\" type=\"file\" name=\"fileUpload\" (change)=\"updateLabel($event)\" multiple>\r\n  <label [for]=\"id\" class=\"file-upl-lb\">\r\n    <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span> {{labelText}}\r\n  </label>\r\n</label>-->\r\n<!-- app.component.html -->\r\n<div id=\"image-uploader\">\r\n  <label class=\"btn btn-default btn-file\">\r\n    Upload Image <input style=\"display: none;\" type=\"file\" ngFileSelect [options]=\"options\" (onUpload)=\"handleUpload($event)\" (beforeUpload)=\"beforeUpload($event)\" accept=\"image/*\">\r\n</label>\r\n<!-- drag & drop file example-->\r\n<style>\r\n    .file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n  </style>\r\n<div ngFileDrop [options]=\"options\" (onUpload)=\"handleUpload($event)\" [ngClass]=\"{'file-over': hasBaseDropZoneOver}\" (onFileOver)=\"fileOverBase($event)\"\r\n  (beforeUpload)=\"beforeUpload($event)\">\r\n</div>\r\n\r\n<div *ngIf=\"uploadedFiles.length > 0\" class=\"well\" id=\"uploaded\">\r\n  <img *ngFor=\"let file of uploadedFiles \" [src]=\"file.imageUrl\" height=\"150px\" alt=\"image\">\r\n</div>\r\n</div>"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\r\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\r\n</section>"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "<div class=\"comment-section\">\r\n  <div class=\"comments-wrapper\">\r\n    <ul></ul>\r\n  </div>\r\n  <div class=\"comment-wrapper\">\r\n    <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\" [(ngModel)]=\"comment\"></textarea>\r\n  </div>\r\n</div>"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\r\n  <div id=\"component-header\">\r\n    <h3 *ngIf=\"this.items.length === 0\">Dreamstime Gallery</h3>\r\n    <h3 *ngIf=\"this.items.length !== 0\">\r\n      <span>{{this.activeItem.make}}</span>\r\n      <span>{{this.activeItem.model}}</span>\r\n      <span>{{this.activeItem.year}}</span>\r\n      <app-add-to-favorites *ngIf=\"this.userStorage.isLogged()\" [itemIdToFavorite]=\"this.activeItem._id\" class=\"add-to-favorites-btn\"></app-add-to-favorites>\r\n    </h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <h3 *ngIf=\"this.items.length === 0\">Be the first to post a new item!</h3>\r\n    <div *ngIf=\"this.items.length !== 0\" id=\"carousel-container\" class=\"col-xs-8 col-xs-offset-2\">\r\n      <app-carousel *ngIf=\"this.activeItem\" [mylist]=\"this.activeItem.pictures\"></app-carousel>\r\n    </div>\r\n  </div>\r\n  <div id=\"controls\">\r\n    <div *ngIf=\"this.items.length !== 0\" class=\"row\">\r\n      <div class=\"col-xs-2 col-xs-offset-1\">\r\n        <a (click)=\"onPrevious()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\r\n          Previous\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-4 col-xs-offset-1\">\r\n        <a class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\" routerLink=\"{{this.activeItem._id}}\">\r\n          More Details\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-2 col-xs-offset-1\">\r\n        <a (click)=\"onNext()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\r\n          Next\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <img src=\"{{this.item.pictures[0].imageUrl}}\">\r\n    <h3>StartPrice: {{this.item.price}}</h3>\r\n    <h3>Highest offer: {{this.maxOffer}}</h3>\r\n\r\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\r\n        <div class=\"form-group\">\r\n            <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"offer.offeredPrice\"\r\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "<h2>Offers for:</h2>\r\n<a routerLink=\"/gallery/{{this.item._id}}\"><img src=\"{{this.item.pictures[0].imageUrl}}\"></a>\r\n\r\n<a *ngIf=\"this.isLogged && !this.isOwner\" routerLink=\"/gallery/{{this.item._id}}/offer\" class=\"btn btn-primary\">Make offer</a>\r\n\r\n<h3 *ngIf=\"!this.item.offers.length\">No offers at this moment!</h3>\r\n\r\n<div *ngIf=\"this.item.offers.length\">\r\n    <h2>Active offers:</h2>\r\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\r\n        <div *ngIf=\"offer.status === 'active'\">\r\n            <h3>{{offer.offeredPrice}}</h3>\r\n            <p>By: {{offer.username}}</p>\r\n            <div *ngIf=\"this.isOwner\" class=\"btn btn-success\" (click)=\"acceptOffer($event, offer)\">Accept offer</div>             \r\n            <div *ngIf=\"this.isOwner\" class=\"btn btn-danger\" (click)=\"rejectOffer($event, offer)\">Reject offer</div> \r\n            <div *ngIf=\"this.loggedUser===offer.username\" class=\"btn btn-warning\" (click)=\"cencelOffer($event, offer)\">Cancel offer</div> \r\n        </div>\r\n    </div>\r\n\r\n    <h2>Rejected offers:</h2>\r\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\r\n        <div *ngIf=\"offer.status === 'rejected'\">\r\n            <h3>{{offer.offeredPrice}}</h3>\r\n            <p>By: {{offer.username}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <h2>Canceled offers:</h2>\r\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\r\n        <div *ngIf=\"offer.status === 'canceled'\">\r\n            <h3>{{offer.offeredPrice}}</h3>\r\n            <p>By: {{offer.username}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1>{{this.item.make}} {{this.item.model}} {{this.item.year}}</h1>\r\n    <app-carousel *ngIf=\"this.item && this.item.pictures && this.item.pictures.length > 0\" [mylist]=\"this.item.pictures\"></app-carousel>\r\n    <!--<div *ngIf=\"!this.item && !this.item.pictures && !this.item.pictures.length > 0\"></div>-->\r\n    <h3>Engine power: {{this.item.enginePower}}hp</h3>\r\n    <h3>Exterior Color: {{this.item.exteriorColor}}</h3>\r\n    <h3>Interior Color: {{this.item.interiorColor}}</h3>\r\n    <h3>Price: ${{this.item.price}}</h3>\r\n\r\n    <!--TODO add right update link when ready-->\r\n\r\n    <a *ngIf=\"this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}\">Update</a>\r\n\r\n    <!--TODO add right make offer link when ready-->\r\n\r\n    <a *ngIf=\"this.isLogged && !this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offer\">Make Offer</a>\r\n\r\n    <a class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offers\">Show offers</a>\r\n\r\n    <app-comment-section></app-comment-section>\r\n</div>"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n      aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\" (click)=\"setActiveItem()\" routerLink=\"/\">DREAMSTIME</a>\r\n  </div>\r\n  <!-- Collect the nav links, forms, and other content for toggling -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Browse'\" (click)=\"setActiveItem('Browse')\"><a routerLink=\"/gallery\">Browse</a></li>\r\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/submit\">Create</a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Profile</a></li>\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink='favorites'>Favorites</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Settings</a></li>\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink=\"logout\">Logout</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n  <div class=\"row public-container\" *ngIf=\"hasLoggedUser == false\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <h1>\r\n        <a routerLink=\"/gallery\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n      <a routerLink=\"/\">\r\n        <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\r\n      </a>\r\n      <h1>\r\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "<a *ngIf=\"!this.itemIsFavorite\" (click)=\"addToFavorites()\">\r\n  <span class=\"glyphicon glyphicon-heart add-to-favorites\" aria-hidden=\"true\"></span>\r\n</a>\r\n<a *ngIf=\"this.itemIsFavorite\" (click)=\"removeToFavorites()\">\r\n  <span class=\"glyphicon glyphicon-heart remove-to-favorites\" aria-hidden=\"true\"></span>\r\n</a>"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = "<p>\r\n  facebook-login works!\r\n</p>\r\n"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = "<div>\r\n  <div *ngFor=\"let favoriteItem of userFavorites\">{{favoriteItem}}</div>\r\n</div>"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = "<p>\r\n  listed-items works!\r\n</p>\r\n"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <h2 id=\"component-header\">Sign In</h2>\r\n  <div class=\"inner-wrapper\">\r\n    <form *ngIf=\"isLoading === false\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(); loginForm.reset()\">\r\n      <div class=\"form-group\">\r\n        <label> \r\n          <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between</div>\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label> \r\n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between</div>\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\r\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\r\n      </div>\r\n    </form>\r\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\r\n  </div>\r\n</div>\r\n\r\n<!-- Carousel testing DELETE -->\r\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\r\n      <img [src]=\"img\" alt=\"slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>-->"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"content-left col-xs-6\">\r\n    <img [src]=\"user.image\" alt=\"profile image\" width=\"100%\">\r\n  </div>\r\n  <div class=\"content-right col-xs-6\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>{{user.username}}</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.email}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>{{user.firstName}} {{user.lastName}}</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.gender}}, {{user.age}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>Member since:</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.createdOn | dateFormatter}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item no-shadow row\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <a appNavigationHover routerLink=\"/favorites\" class=\"btn btn-default col-xs-12\">\r\n              <span>View Favorites</span>\r\n            </a>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <a appNavigationHover routerLink=\"/listed-items\" class=\"btn btn-default col-xs-12\">\r\n              <span>View Listed Items</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\r\n\r\n  <div id=\"component-header\">\r\n    <h3>Registration Form</h3>\r\n  </div>\r\n  <div class=\"inner-wrapper\">\r\n\r\n    <form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div id=\"inputs-container\" class=\"row\">\r\n        <div class=\"content-left col-xs-8\">\r\n        </div>\r\n        <div id=\"content-right\" class=\"col-xs-4\">\r\n          <div class=\"well\">\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required\r\n                minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\"\r\n                required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\"\r\n                minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\"\r\n                maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\"\r\n                required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"dropdown\">\r\n                <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          {{user.gender}}\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n                <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          Gender\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n                <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\r\n                  <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\r\n                  <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button class=\"form-control btn btn-success\" type=\"submit\">Register</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ }

},[790]);
//# sourceMappingURL=main.bundle.map