webpackJsonp([0,4],{

/***/ 115:
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
        this.mailApiUrl = '/api/mail';
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
        // GET requests only
        this.mostExpensiveItemsUrl = '/api/statistics/items/mostExpensiveItems';
        this.mostSalledMakesUrl = '/api/statistics/items/mostSalledMakes';
        this.mostOfferedItemsUrl = '/api/statistics/items/mostOfferedItems';
        this.topSellersUrl = '/api/statistics/users/topSellers';
        this.topBuyersUrl = '/api/statistics/users/topBuyers';
        this.topActiveUsersUrl = '/api/statistics/users/topActiveUsers';
        this.mostCommentedItemsUrl = '/api/statistics/items/mostCommentedItems';
    }
    ApiUrlsConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ApiUrlsConfigService);
    return ApiUrlsConfigService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/api-urls-config.service.js.map

/***/ },

/***/ 116:
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

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(328);
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(596);
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

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(383);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user-storage.service.js.map

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(854);
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

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(75);
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
            var message = 'Item does not exist in your favorites list.';
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
            template: __webpack_require__(830),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _d) || Object])
    ], AddToFavoritesComponent);
    return AddToFavoritesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-to-favorites.component.js.map

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_date_provider_service__ = __webpack_require__(365);
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

/***/ 352:
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
            template: __webpack_require__(800),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/app.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_price_validation_directive__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_string_length_validation_directive__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_year_validation_directive__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DirectivesExportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirectivesExportModule = (function () {
    function DirectivesExportModule() {
    }
    DirectivesExportModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_year_validation_directive__["a" /* FormYearValidationDirective */],
                __WEBPACK_IMPORTED_MODULE_0__form_price_validation_directive__["a" /* FormPriceValidationDirective */],
                __WEBPACK_IMPORTED_MODULE_1__form_string_length_validation_directive__["a" /* FormStringLengthValidationDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_year_validation_directive__["a" /* FormYearValidationDirective */],
                __WEBPACK_IMPORTED_MODULE_0__form_price_validation_directive__["a" /* FormPriceValidationDirective */],
                __WEBPACK_IMPORTED_MODULE_1__form_string_length_validation_directive__["a" /* FormStringLengthValidationDirective */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DirectivesExportModule);
    return DirectivesExportModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/directives-export.module.js.map

/***/ },

/***/ 354:
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
            template: __webpack_require__(805),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/home.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_price_less_then_pipe__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_year_less_then_pipe__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_price_greater_then_pipe__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_year_greater_then_pipe__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_exterior_color_pipe__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_make_filter_pipe__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_item_listing_service__ = __webpack_require__(60);
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
        this.makeFilterPipe = new __WEBPACK_IMPORTED_MODULE_5__pipes_make_filter_pipe__["a" /* MakeFilterPipe */]();
        this.colorFilterPipe = new __WEBPACK_IMPORTED_MODULE_4__pipes_exterior_color_pipe__["a" /* ExteriorColorFilterPipe */]();
        this.minimumYearPipe = new __WEBPACK_IMPORTED_MODULE_3__pipes_year_greater_then_pipe__["a" /* YearGreaterThenPipe */]();
        this.maximumYearPipe = new __WEBPACK_IMPORTED_MODULE_1__pipes_year_less_then_pipe__["a" /* YearLessThenPipe */]();
        this.minimuPricePipe = new __WEBPACK_IMPORTED_MODULE_2__pipes_price_greater_then_pipe__["a" /* PriceGreaterThenPipe */]();
        this.maximumPricePipe = new __WEBPACK_IMPORTED_MODULE_0__pipes_price_less_then_pipe__["a" /* PriceLessThenPipe */]();
        this.makeFilter = '';
        this.colorFilter = '';
        this.minimumYearFilter = 0;
        this.maximumYearFilter = 0;
        this.minimumPriceFilter = 0;
        this.maximumPriceFilter = 0;
        this.items = [];
        this.originalItems = [];
        this.activeItemIndex = 0;
    }
    ItemsCollectionComponent.prototype.onPrevious = function () {
        if (this.activeItemIndex > 0) {
            this.activeItemIndex -= 1;
        }
        else {
            this.activeItemIndex = this.items.length - 1;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    ItemsCollectionComponent.prototype.onNext = function () {
        if (this.activeItemIndex < this.items.length - 1) {
            this.activeItemIndex += 1;
        }
        else {
            this.activeItemIndex = 0;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    ItemsCollectionComponent.prototype.onMakeFilter = function (makeFilterValue) {
        this.makeFilter = makeFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.onColorFilter = function (colorFilterValue) {
        this.colorFilter = colorFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.onMinimumYearFilter = function (minimumYearFilterValue) {
        this.minimumYearFilter = minimumYearFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.onMaximumYearFilter = function (maximumYearFilterValue) {
        this.maximumYearFilter = maximumYearFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.onMinimumPriceFilter = function (minimumPriceFilterValue) {
        this.minimumPriceFilter = minimumPriceFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.onMaximumPriceFilter = function (maximumPriceFilterValue) {
        this.maximumPriceFilter = maximumPriceFilterValue;
        this.applyFiltersToItems();
    };
    ItemsCollectionComponent.prototype.applyFiltersToItems = function () {
        this.items = this.originalItems.slice();
        if (this.makeFilter) {
            this.items = this.makeFilterPipe.transform(this.items, this.makeFilter);
        }
        if (this.colorFilter) {
            this.items = this.colorFilterPipe.transform(this.items, this.colorFilter);
        }
        if (this.minimumYearFilter) {
            this.items = this.minimumYearPipe.transform(this.items, this.minimumYearFilter);
        }
        if (this.maximumYearFilter) {
            this.items = this.maximumYearPipe.transform(this.items, this.maximumYearFilter);
        }
        if (this.minimumPriceFilter) {
            this.items = this.minimuPricePipe.transform(this.items, this.minimumPriceFilter);
        }
        if (this.maximumPriceFilter) {
            this.items = this.maximumPricePipe.transform(this.items, this.maximumPriceFilter);
        }
        this.activeItemIndex = 0;
        this.activeItem = this.items[this.activeItemIndex];
    };
    ItemsCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItemsCollection()
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            _this.originalItems = response;
            _this.items = _this.originalItems.slice();
        }, function (err) {
            console.log(err);
        }, function () {
            if (_this.items.length > 0) {
                _this.activeItem = _this.items[_this.activeItemIndex];
            }
        });
    };
    ItemsCollectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'app-items-collection',
            template: __webpack_require__(813),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _b) || Object])
    ], ItemsCollectionComponent);
    return ItemsCollectionComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/items-collection.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(32);
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
    MakeOfferComponent.prototype.haveOffers = function () {
        return !(this.maxOffer === 'No offers');
    };
    MakeOfferComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'make-offer',
            template: __webpack_require__(814),
            styles: [__webpack_require__(429)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], MakeOfferComponent);
    return MakeOfferComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/make-offer.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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
            template: __webpack_require__(815),
            styles: [__webpack_require__(429)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], OffersListComponent);
    return OffersListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/offers-list.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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
            template: __webpack_require__(816),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SingleItemComponent);
    return SingleItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/single-item.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExteriorColorFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExteriorColorFilterPipe = (function () {
    function ExteriorColorFilterPipe() {
    }
    ExteriorColorFilterPipe.prototype.transform = function (array, exteriorColorFilter) {
        if (!exteriorColorFilter) {
            return array;
        }
        return array.filter(function (x) { return x.exteriorColor === exteriorColorFilter; });
    };
    ExteriorColorFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'exteriorColorFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ExteriorColorFilterPipe);
    return ExteriorColorFilterPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/exterior-color.pipe.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MakeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakeFilterPipe = (function () {
    function MakeFilterPipe() {
    }
    MakeFilterPipe.prototype.transform = function (array, makefilter) {
        if (!makefilter) {
            return array;
        }
        return array.filter(function (x) { return x.make === makefilter; });
    };
    MakeFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'makeFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], MakeFilterPipe);
    return MakeFilterPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/make-filter.pipe.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PriceGreaterThenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceGreaterThenPipe = (function () {
    function PriceGreaterThenPipe() {
    }
    PriceGreaterThenPipe.prototype.transform = function (array, priceGreaterThen) {
        if (!priceGreaterThen) {
            return array;
        }
        return array.filter(function (x) { return x.price >= priceGreaterThen; });
    };
    PriceGreaterThenPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'priceGreaterThen'
        }), 
        __metadata('design:paramtypes', [])
    ], PriceGreaterThenPipe);
    return PriceGreaterThenPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/price-greater-then.pipe.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PriceLessThenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceLessThenPipe = (function () {
    function PriceLessThenPipe() {
    }
    PriceLessThenPipe.prototype.transform = function (array, priceLessThen) {
        if (!priceLessThen) {
            return array;
        }
        return array.filter(function (x) { return x.price <= priceLessThen; });
    };
    PriceLessThenPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'priceLessThen'
        }), 
        __metadata('design:paramtypes', [])
    ], PriceLessThenPipe);
    return PriceLessThenPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/price-less-then.pipe.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return YearGreaterThenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YearGreaterThenPipe = (function () {
    function YearGreaterThenPipe() {
    }
    YearGreaterThenPipe.prototype.transform = function (array, yearGreaterThen) {
        if (!yearGreaterThen) {
            return array;
        }
        return array.filter(function (x) { return x.year >= yearGreaterThen; });
    };
    YearGreaterThenPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'yearGreaterThen'
        }), 
        __metadata('design:paramtypes', [])
    ], YearGreaterThenPipe);
    return YearGreaterThenPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/year-greater-then.pipe.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return YearLessThenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YearLessThenPipe = (function () {
    function YearLessThenPipe() {
    }
    YearLessThenPipe.prototype.transform = function (array, yearLessThen) {
        if (!yearLessThen) {
            return array;
        }
        return array.filter(function (x) { return x.year <= yearLessThen; });
    };
    YearLessThenPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'yearLessThen'
        }), 
        __metadata('design:paramtypes', [])
    ], YearLessThenPipe);
    return YearLessThenPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/year-less-then.pipe.js.map

/***/ },

/***/ 365:
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

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__ = __webpack_require__(595);
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

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailService = (function () {
    function MailService(httpRequesterService, httpRequesterOptionsFactory, apiUrlsConfigService) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.apiUrlsConfigService = apiUrlsConfigService;
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
        this.mailApiUrl = this.apiUrlsConfigService.mailApiUrl;
    }
    MailService.prototype.sendMail = function (mail) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.mailApiUrl, mail, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    MailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], MailService);
    return MailService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/mail.service.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MonstCommentedItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonstCommentedItemsComponent = (function () {
    function MonstCommentedItemsComponent(service) {
        this.service = service;
    }
    MonstCommentedItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMostCommentedItems()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x
            .map(function (y) {
            y.count = y.comments.length;
            return y;
        }); });
    };
    MonstCommentedItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-most-commented-items',
            template: __webpack_require__(818),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], MonstCommentedItemsComponent);
    return MonstCommentedItemsComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/most-commented-items.component.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MonstExpensiveItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonstExpensiveItemsComponent = (function () {
    function MonstExpensiveItemsComponent(service) {
        this.service = service;
    }
    MonstExpensiveItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMostExpensiveItems()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x
            .map(function (y) {
            y.count = y.price;
            return y;
        }); });
    };
    MonstExpensiveItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-most-expensive-items',
            template: __webpack_require__(819),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], MonstExpensiveItemsComponent);
    return MonstExpensiveItemsComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/most-expensive-items.component.js.map

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MonstOfferedItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonstOfferedItemsComponent = (function () {
    function MonstOfferedItemsComponent(service) {
        this.service = service;
    }
    MonstOfferedItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMostOfferedItems()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x
            .map(function (y) {
            y.count = y.offers.length;
            return y;
        }); });
    };
    MonstOfferedItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-most-offered-items',
            template: __webpack_require__(820),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], MonstOfferedItemsComponent);
    return MonstOfferedItemsComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/most-offered-items.component.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MostSelledMakesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MostSelledMakesComponent = (function () {
    function MostSelledMakesComponent(service) {
        this.service = service;
    }
    MostSelledMakesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMostSalledMakes()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x; });
    };
    MostSelledMakesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-most-selled-makes',
            template: __webpack_require__(821),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], MostSelledMakesComponent);
    return MostSelledMakesComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/most-salled-makes.component.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsMainComponent = (function () {
    function StatisticsMainComponent() {
    }
    StatisticsMainComponent.prototype.ngOnInit = function () { };
    StatisticsMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics-main',
            template: __webpack_require__(825),
            styles: [__webpack_require__(788), __webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsMainComponent);
    return StatisticsMainComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics-main.component.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopActiveUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopActiveUsersComponent = (function () {
    function TopActiveUsersComponent(service) {
        this.service = service;
    }
    TopActiveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTopActiveUsers()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x; });
    };
    TopActiveUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-active-users',
            template: __webpack_require__(826),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], TopActiveUsersComponent);
    return TopActiveUsersComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/top-active-users.component.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopBuyersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBuyersComponent = (function () {
    function TopBuyersComponent(service) {
        this.service = service;
    }
    TopBuyersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTopBuyers()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x; });
    };
    TopBuyersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-buyers',
            template: __webpack_require__(827),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], TopBuyersComponent);
    return TopBuyersComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/top-buyers.component.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopSellersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopSellersComponent = (function () {
    function TopSellersComponent(service) {
        this.service = service;
    }
    TopSellersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTopSellers()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.list = x; });
    };
    TopSellersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-sellers',
            template: __webpack_require__(828),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_statistic_service__["a" /* StatisticService */]) === 'function' && _a) || Object])
    ], TopSellersComponent);
    return TopSellersComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/top-sellers.component.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(19);
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
    function FavoritesComponent(appRouter, userService, userStorage) {
        this.appRouter = appRouter;
        this.userService = userService;
        this.userStorage = userStorage;
        this.items = [];
        this.activeItemIndex = 0;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userStorage.isLogged()) {
            this.appRouter.navigateByUrl('login');
            return;
        }
        this.userService.getUserDetails()
            .map(function (response) { return response.json(); })
            .subscribe(function (responseJson) {
            _this.items = responseJson.favorites;
        }, function (err) {
            console.log(err);
        }, function () {
            if (_this.items.length > 0) {
                _this.activeItem = _this.items[_this.activeItemIndex];
            }
        });
    };
    FavoritesComponent.prototype.onPrevious = function () {
        if (this.activeItemIndex > 0) {
            this.activeItemIndex -= 1;
        }
        else {
            this.activeItemIndex = this.items.length - 1;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    FavoritesComponent.prototype.onNext = function () {
        if (this.activeItemIndex < this.items.length - 1) {
            this.activeItemIndex += 1;
        }
        else {
            this.activeItemIndex = 0;
        }
        this.activeItem = this.items[this.activeItemIndex];
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(832),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/favorites.component.js.map

/***/ },

/***/ 377:
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
            template: __webpack_require__(833),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListedItemsComponent);
    return ListedItemsComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/listed-items.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(75);
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
            template: __webpack_require__(834),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/login.component.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(75);
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
            template: __webpack_require__(835),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/logout.component.js.map

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(75);
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
            template: __webpack_require__(836),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/profile.component.js.map

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(75);
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
            template: __webpack_require__(837),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/register.component.js.map

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_list_carousel_list_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_to_favorites_add_to_favorites_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_date_formatter_pipe__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facebook_login_facebook_login_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorites_favorites_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_hashing_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listed_items_listed_items_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_factory_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_routes__ = __webpack_require__(608);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__users_routes__["a" /* UsersRouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__facebook_login_facebook_login_component__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_date_formatter_pipe__["a" /* DateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__listed_items_listed_items_component__["a" /* ListedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_1__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_0__carousel_list_carousel_list_component__["a" /* CarouselListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_user_factory_service__["a" /* UserFactoryService */],
                __WEBPACK_IMPORTED_MODULE_7__services_hashing_service__["a" /* HashingService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_0__carousel_list_carousel_list_component__["a" /* CarouselListComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.module.js.map

/***/ },

/***/ 429:
/***/ function(module, exports) {

module.exports = "img {\n  max-width: 300px;\n  margin: 20px;\n  border-radius: 10px; }\n\n.go-center {\n  text-align: center; }\n\n.go-right {\n  text-align: right; }\n\n.go-left {\n  text-align: left; }\n\n.bordered {\n  border: 1px solid gray; }\n\n.border-radius {\n  border-radius: 10px; }\n\n.padding-10-25 {\n  padding: 10px 25px; }\n\n.margin-10 {\n  margin: 10px; }\n"

/***/ },

/***/ 43:
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
        heading = heading || '';
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

/***/ 446:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 446;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(585);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/main.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(32);
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
        this.resetState = false;
    }
    AddListingComponent.prototype.ngOnInit = function () {
        if (!this.userStorage.isLogged()) {
            var toastrNotificationOptions = this.toastrOptionsFactory
                .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');
            this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            this.appRouter.navigateByUrl('login');
        }
    };
    AddListingComponent.prototype.updateYearProp = function (value) {
        if (!value) {
            this.itemListing.year = undefined;
            return;
        }
        this.itemListing.year = +value;
    };
    AddListingComponent.prototype.updatePriceProp = function (value) {
        if (!value) {
            this.itemListing.price = undefined;
            return;
        }
        this.itemListing.price = +value;
    };
    AddListingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.itemListingService.addItem(this.itemListing)
            .subscribe(function (response) {
            var toastrNotificationOptions = _this.toastrOptionsFactory
                .createToastrNotificationOptions('success', 'You have submitted the item successfully.', 'Add Item');
            _this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            _this.resetState = true;
        });
    };
    AddListingComponent.prototype.onFileUpload = function (uploadedFiles) {
        this.itemListing.pictures = uploadedFiles;
    };
    AddListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(799),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-listing.component.js.map

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_export_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_listing_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_uploader_file_uploader_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_form_default_value_directive__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(18);
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
    { path: 'submit', component: __WEBPACK_IMPORTED_MODULE_1__add_listing_component__["a" /* AddListingComponent */] }
];
var AddListingModule = (function () {
    function AddListingModule() {
    }
    AddListingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_uploader__["NgUploaderModule"],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_export_module__["a" /* DirectivesExportModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forChild(routes)],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directives_form_default_value_directive__["a" /* FormDefaultValueDirective */],
                __WEBPACK_IMPORTED_MODULE_3__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddListingModule);
    return AddListingModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/add-listing.module.js.map

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_add_to_favorites_add_to_favorites_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_urls_config_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_helpers_date_provider_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_requester_options_factory_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_requester_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__items_items_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_mail_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navigation_navigation_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_navigation_hover_directive__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_pagination__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__users_users_module__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__statistics_statistics_module__ = __webpack_require__(603);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_navigation_hover_directive__["a" /* NavigationHoverDirective */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__items_items_module__["a" /* ItemsModule */],
                __WEBPACK_IMPORTED_MODULE_28__statistics_statistics_module__["a" /* StatisticsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__["a" /* AddListingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_api_urls_config_service__["a" /* ApiUrlsConfigService */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_9__services_helpers_date_provider_service__["a" /* DateProviderService */],
                __WEBPACK_IMPORTED_MODULE_14__services_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_15__services_http_requester_service__["a" /* HttpRequesterService */],
                __WEBPACK_IMPORTED_MODULE_22__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_23__services_toastr_notification_service__["a" /* ToastrNotificationService */],
                __WEBPACK_IMPORTED_MODULE_25__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_26__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_3__users_add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__services_mail_service__["a" /* MailService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/app.module.js.map

/***/ },

/***/ 574:
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
            template: __webpack_require__(801),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselListComponent);
    return CarouselListComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/carousel-list.component.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(mailService, toastrNotification, toastrOptions) {
        this.mailService = mailService;
        this.toastrNotification = toastrNotification;
        this.toastrOptions = toastrOptions;
        this.mail = {
            senderName: '',
            senderEmail: '',
            subject: '',
            content: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.mailService.sendMail(this.mail)
            .subscribe(function (resp) {
            var toastrOptions = _this.toastrOptions
                .createToastrNotificationOptions('success', 'We\'ll reply shortly.', 'Thanks for your feedback');
            _this.toastrNotification.enqueueNotification(toastrOptions);
        }, function (err) {
            var toastrOptions = _this.toastrOptions
                .createToastrNotificationOptions('error', err.message || 'An error has occured.');
            _this.toastrNotification.enqueueNotification(toastrOptions);
        }, function () {
            _this.mail.subject = '';
            _this.mail.content = '';
        });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(802),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _c) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/contact.component.js.map

/***/ },

/***/ 576:
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

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormPriceValidationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormPriceValidationDirective = (function () {
    function FormPriceValidationDirective(domElement) {
        this.domElement = domElement;
    }
    FormPriceValidationDirective.prototype.onChange = function () {
        var value = +this.domElement.nativeElement.value;
        if (!value) {
            this.domElement.nativeElement.value = '';
            return;
        }
        if (value < 1) {
            this.domElement.nativeElement.value = '1';
        }
        if (999999999 < value) {
            this.domElement.nativeElement.value = '999999999';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FormPriceValidationDirective.prototype, "onChange", null);
    FormPriceValidationDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormPriceValidation]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FormPriceValidationDirective);
    return FormPriceValidationDirective;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/form-price-validation.directive.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormStringLengthValidationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormStringLengthValidationDirective = (function () {
    function FormStringLengthValidationDirective(domElement) {
        this.domElement = domElement;
        this.allowedStringLength = 30;
    }
    FormStringLengthValidationDirective.prototype.onChange = function () {
        var value = this.domElement.nativeElement.value;
        if (!value) {
            this.domElement.nativeElement.value = '';
            return;
        }
        if (value.length > this.allowedStringLength) {
            this.domElement.nativeElement.value = '';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FormStringLengthValidationDirective.prototype, "onChange", null);
    FormStringLengthValidationDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormStringLengthValidation]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FormStringLengthValidationDirective);
    return FormStringLengthValidationDirective;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/form-string-length-validation.directive.js.map

/***/ },

/***/ 579:
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
        if (!value) {
            this.domElement.nativeElement.value = '';
            return;
        }
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

/***/ 580:
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

/***/ 581:
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
    Object.defineProperty(FileUploaderComponent.prototype, "resetState", {
        set: function (shouldReset) {
            if (shouldReset) {
                this.uploadedFiles = [];
                this.onFileUpload.emit(this.uploadedFiles.slice());
            }
        },
        enumerable: true,
        configurable: true
    });
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], FileUploaderComponent.prototype, "resetState", null);
    FileUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(803),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/file-uploader.component.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(804),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/footer.component.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(354);
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

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
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

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(573);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/index.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(19);
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
    function CommentSectionComponent(route, itemListingService, userStorageService, toastrNotification, toastrOptions) {
        this.route = route;
        this.itemListingService = itemListingService;
        this.userStorageService = userStorageService;
        this.toastrNotification = toastrNotification;
        this.toastrOptions = toastrOptions;
        this.minContentLength = 10;
        this.maxContentLength = 150;
        this.listingComments = [];
        this.comment = {
            listingId: '',
            username: '',
            content: ''
        };
    }
    CommentSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var listingId;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) { return listingId = id; });
        this.itemListingService.getSingleItem(listingId)
            .map(function (response) { return response.json(); })
            .subscribe(function (listing) {
            _this.comment.listingId = listing._id;
            _this.listingComments = listing.comments;
        });
    };
    CommentSectionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment.username = this.userStorageService.loggedUser;
        var isContentLengthInRange = this.comment.content.length < this.minContentLength ||
            this.comment.content.length > this.maxContentLength;
        if (!this.comment.username) {
            var toastrOptions = this.toastrOptions
                .createToastrNotificationOptions('error', 'You must be logged in.');
            this.toastrNotification.enqueueNotification(toastrOptions);
        }
        else if (isContentLengthInRange) {
            var toastrOptions = this.toastrOptions
                .createToastrNotificationOptions('error', "Content length must be between " + this.minContentLength + " and " + this.maxContentLength + ".");
            this.toastrNotification.enqueueNotification(toastrOptions);
        }
        else {
            this.itemListingService.addComment(this.comment)
                .subscribe(function (response) {
                var comment = JSON.parse(JSON.stringify(_this.comment));
                _this.listingComments.push(comment);
                var toastrOptions = _this.toastrOptions
                    .createToastrNotificationOptions('success', 'Comment submitted successfully.');
                _this.toastrNotification.enqueueNotification(toastrOptions);
            }, function (err) {
                var toastrOptions = _this.toastrOptions
                    .createToastrNotificationOptions('error', 'You must be logged in.');
                _this.toastrNotification.enqueueNotification(toastrOptions);
            }, function () { return _this.comment.content = ''; });
        }
    };
    CommentSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-comment-section',
            template: __webpack_require__(806),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], CommentSectionComponent);
    return CommentSectionComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/comment-section.component.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ColorFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorFilterComponent = (function () {
    function ColorFilterComponent() {
        this.onColorFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ColorFilterComponent.prototype.updateValue = function () {
        this.onColorFilter.emit(this.colorFilterValue);
    };
    ColorFilterComponent.prototype.updateValidation = function (value) {
        if (!value) {
            this.colorFilterValue = '';
        }
        else {
            this.colorFilterValue = value;
        }
        this.updateValue();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ColorFilterComponent.prototype, "onColorFilter", void 0);
    ColorFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-color-filter',
            template: __webpack_require__(807),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorFilterComponent);
    return ColorFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/color-filter.component.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MakeFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakeFilterComponent = (function () {
    function MakeFilterComponent() {
        this.onMakeFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MakeFilterComponent.prototype.updateValue = function () {
        this.onMakeFilter.emit(this.makeFilterValue);
    };
    MakeFilterComponent.prototype.updateValidation = function (value) {
        if (!value) {
            this.makeFilterValue = '';
        }
        else {
            this.makeFilterValue = value;
        }
        this.updateValue();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MakeFilterComponent.prototype, "onMakeFilter", void 0);
    MakeFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-make-filter',
            template: __webpack_require__(808),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [])
    ], MakeFilterComponent);
    return MakeFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/make-filter.component.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaximumPriceFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaximumPriceFilterComponent = (function () {
    function MaximumPriceFilterComponent() {
        this.onMaximumPriceFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MaximumPriceFilterComponent.prototype.updateValue = function () {
        this.onMaximumPriceFilter.emit(+this.maximumPriceFilterValue);
    };
    MaximumPriceFilterComponent.prototype.validationUpdate = function (value) {
        if (!value) {
            this.maximumPriceFilterValue = undefined;
        }
        else {
            this.maximumPriceFilterValue = +value;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MaximumPriceFilterComponent.prototype, "onMaximumPriceFilter", void 0);
    MaximumPriceFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maximum-price-filter',
            template: __webpack_require__(809),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [])
    ], MaximumPriceFilterComponent);
    return MaximumPriceFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/maximum-price-filter.component.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaximumYearFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaximumYearFilterComponent = (function () {
    function MaximumYearFilterComponent() {
        this.onMaximumYearFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MaximumYearFilterComponent.prototype.updateValue = function () {
        this.onMaximumYearFilter.emit(+this.maximumYearFilterValue);
    };
    MaximumYearFilterComponent.prototype.updateValidation = function (value) {
        if (!value) {
            this.maximumYearFilterValue = undefined;
        }
        else {
            this.maximumYearFilterValue = +value;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MaximumYearFilterComponent.prototype, "onMaximumYearFilter", void 0);
    MaximumYearFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maximum-year-filter',
            template: __webpack_require__(810),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [])
    ], MaximumYearFilterComponent);
    return MaximumYearFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/maximum-year-filter.component.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MinimumPriceFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinimumPriceFilterComponent = (function () {
    function MinimumPriceFilterComponent() {
        this.onMinimumPriceFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MinimumPriceFilterComponent.prototype.updateValue = function () {
        this.onMinimumPriceFilter.emit(+this.minimumPriceFilterValue);
    };
    MinimumPriceFilterComponent.prototype.validationUpdate = function (value) {
        if (!value) {
            this.minimumPriceFilterValue = undefined;
        }
        else {
            this.minimumPriceFilterValue = +value;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MinimumPriceFilterComponent.prototype, "onMinimumPriceFilter", void 0);
    MinimumPriceFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-minimum-price-filter',
            template: __webpack_require__(811),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [])
    ], MinimumPriceFilterComponent);
    return MinimumPriceFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/minimum-price-filter.component.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MinimumYearFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinimumYearFilterComponent = (function () {
    function MinimumYearFilterComponent() {
        this.onMinimumYearFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MinimumYearFilterComponent.prototype.updateValue = function () {
        this.onMinimumYearFilter.emit(+this.minimumYearFilterValue);
    };
    MinimumYearFilterComponent.prototype.updateValidation = function (value) {
        if (!value) {
            this.minimumYearFilterValue = undefined;
        }
        else {
            this.minimumYearFilterValue = +value;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MinimumYearFilterComponent.prototype, "onMinimumYearFilter", void 0);
    MinimumYearFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-minimum-year-filter',
            template: __webpack_require__(812),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [])
    ], MinimumYearFilterComponent);
    return MinimumYearFilterComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/minimum-year-filter.component.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_color_filter_color_filter_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_section_comment_section_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_export_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_exterior_color_pipe__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__items_collection_items_collection_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__items_routes__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filters_make_filter_make_filter_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_make_filter_pipe__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__offers_make_offer_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filters_maximum_price_filter_maximum_price_filter_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filters_maximum_year_filter_maximum_year_filter_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filters_minimum_price_filter_minimum_price_filter_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filters_minimum_year_filter_minimum_year_filter_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_model_filter_pipe__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_pagination__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__offers_offers_list_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_price_greater_then_pipe__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_price_less_then_pipe__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__single_item_single_item_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_toastr_notification_options_factory_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__users_users_module__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_user_storage_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_year_greater_then_pipe__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_year_less_then_pipe__ = __webpack_require__(364);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_18_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_9__items_routes__["a" /* ItemsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_26__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_export_module__["a" /* DirectivesExportModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__single_item_single_item_component__["a" /* SingleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__items_collection_items_collection_component__["a" /* ItemsCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_2__comment_section_comment_section_component__["a" /* CommentSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__offers_offers_list_component__["a" /* OffersListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__offers_make_offer_component__["a" /* MakeOfferComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_exterior_color_pipe__["a" /* ExteriorColorFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_make_filter_pipe__["a" /* MakeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_model_filter_pipe__["a" /* ModelFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_price_greater_then_pipe__["a" /* PriceGreaterThenPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_price_less_then_pipe__["a" /* PriceLessThenPipe */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_year_greater_then_pipe__["a" /* YearGreaterThenPipe */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_year_less_then_pipe__["a" /* YearLessThenPipe */],
                __WEBPACK_IMPORTED_MODULE_10__filters_make_filter_make_filter_component__["a" /* MakeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_1__filters_color_filter_color_filter_component__["a" /* ColorFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__filters_minimum_year_filter_minimum_year_filter_component__["a" /* MinimumYearFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__filters_maximum_year_filter_maximum_year_filter_component__["a" /* MaximumYearFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__filters_minimum_price_filter_minimum_price_filter_component__["a" /* MinimumPriceFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__filters_maximum_price_filter_maximum_price_filter_component__["a" /* MaximumPriceFilterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_27__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_24__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_25__services_toastr_notification_service__["a" /* ToastrNotificationService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsModule);
    return ItemsModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/items.module.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_add_to_favorites_add_to_favorites_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_item_single_item_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_collection_items_collection_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offers_offers_list_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_make_offer_component__ = __webpack_require__(356);
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

/***/ 595:
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

/***/ 596:
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

/***/ 597:
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
            template: __webpack_require__(817),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/navigation.component.js.map

/***/ },

/***/ 598:
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

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModelFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelFilterPipe = (function () {
    function ModelFilterPipe() {
    }
    ModelFilterPipe.prototype.transform = function (array, modelFilter) {
        if (!modelFilter) {
            return array;
        }
        return array.filter(function (x) { return x.model === modelFilter; });
    };
    ModelFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'modelFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ModelFilterPipe);
    return ModelFilterPipe;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/model-filter.pipe.js.map

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(117);
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
        var url = this.galleryApiUrl + "/" + comment.listingId + "/comments";
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/item-listing.service.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsListItemLinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsListItemLinkComponent = (function () {
    function StatisticsListItemLinkComponent() {
        this.linkPrefix = '/gallery/';
    }
    StatisticsListItemLinkComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StatisticsListItemLinkComponent.prototype, "item", void 0);
    StatisticsListItemLinkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics-list-item-link',
            template: __webpack_require__(822),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsListItemLinkComponent);
    return StatisticsListItemLinkComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics-list-item-link.component.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsListItemComponent = (function () {
    function StatisticsListItemComponent() {
    }
    StatisticsListItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StatisticsListItemComponent.prototype, "item", void 0);
    StatisticsListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics-list-item',
            template: __webpack_require__(823),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsListItemComponent);
    return StatisticsListItemComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics-list-item.component.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsListComponent = (function () {
    function StatisticsListComponent() {
    }
    StatisticsListComponent.prototype.ngOnInit = function () {
    };
    StatisticsListComponent.prototype.isThereAnythingInTheList = function () {
        return !!this.mylist;
    };
    StatisticsListComponent.prototype.isThereId = function () {
        return this.mylist[0]._id;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StatisticsListComponent.prototype, "mylist", void 0);
    StatisticsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics-list',
            template: __webpack_require__(824),
            styles: [__webpack_require__(787)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsListComponent);
    return StatisticsListComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics-list.component.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_routes__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_statistic_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partial_statistics_list_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partial_statistics_list_item_link_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partial_statistics_list_item_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statistics_main_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__item_statistics_most_commented_items_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_statistics_most_expensive_items_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__item_statistics_most_offered_items_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__item_statistics_most_salled_makes_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_statistics_top_active_users_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_statistics_top_buyers_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_statistics_top_sellers_component__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var StatisticsModule = (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__statistics_routes__["a" /* StatisticsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__partial_statistics_list_component__["a" /* StatisticsListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__statistics_main_component__["a" /* StatisticsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__partial_statistics_list_item_component__["a" /* StatisticsListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__partial_statistics_list_item_link_component__["a" /* StatisticsListItemLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_9__item_statistics_most_commented_items_component__["a" /* MonstCommentedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__item_statistics_most_expensive_items_component__["a" /* MonstExpensiveItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__item_statistics_most_offered_items_component__["a" /* MonstOfferedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__item_statistics_most_salled_makes_component__["a" /* MostSelledMakesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_statistics_top_active_users_component__["a" /* TopActiveUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_statistics_top_buyers_component__["a" /* TopBuyersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_statistics_top_sellers_component__["a" /* TopSellersComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_statistic_service__["a" /* StatisticService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsModule);
    return StatisticsModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics.module.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_statistics_most_commented_items_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_statistics_most_expensive_items_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_statistics_most_offered_items_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_statistics_most_salled_makes_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_statistics_top_active_users_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_statistics_top_buyers_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_statistics_top_sellers_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__statistics_main_component__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsRouterModule; });
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
    { path: 'statistics/items/mostExpensiveItems', component: __WEBPACK_IMPORTED_MODULE_3__item_statistics_most_expensive_items_component__["a" /* MonstExpensiveItemsComponent */] },
    { path: 'statistics/items/mostSalledMakes', component: __WEBPACK_IMPORTED_MODULE_5__item_statistics_most_salled_makes_component__["a" /* MostSelledMakesComponent */] },
    { path: 'statistics/items/mostOfferedItems', component: __WEBPACK_IMPORTED_MODULE_4__item_statistics_most_offered_items_component__["a" /* MonstOfferedItemsComponent */] },
    { path: 'statistics/items/mostCommentedItems', component: __WEBPACK_IMPORTED_MODULE_2__item_statistics_most_commented_items_component__["a" /* MonstCommentedItemsComponent */] },
    { path: 'statistics/users/topSellers', component: __WEBPACK_IMPORTED_MODULE_8__user_statistics_top_sellers_component__["a" /* TopSellersComponent */] },
    { path: 'statistics/users/topBuyers', component: __WEBPACK_IMPORTED_MODULE_7__user_statistics_top_buyers_component__["a" /* TopBuyersComponent */] },
    { path: 'statistics/users/topActiveUsers', component: __WEBPACK_IMPORTED_MODULE_6__user_statistics_top_active_users_component__["a" /* TopActiveUsersComponent */] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_9__statistics_main_component__["a" /* StatisticsMainComponent */] }
];
var StatisticsRouterModule = (function () {
    function StatisticsRouterModule() {
    }
    StatisticsRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsRouterModule);
    return StatisticsRouterModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistics.routes.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(426);
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
            template: __webpack_require__(829),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 606:
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
            template: __webpack_require__(831),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/facebook-login.component.js.map

/***/ },

/***/ 607:
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
            template: __webpack_require__(838),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.component.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_favorites_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listed_items_listed_items_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(18);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/users.routes.js.map

/***/ },

/***/ 609:
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

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_urls_config_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_options_factory_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_requester_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticService = (function () {
    function StatisticService(httpRequesterService, httpRequesterOptionsFactory, apiUrlsConfigService) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.apiUrlsConfigService = apiUrlsConfigService;
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
    }
    StatisticService.prototype.getTopBuyers = function () {
        var url = this.apiUrlsConfigService.topBuyersUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getTopSellers = function () {
        var url = this.apiUrlsConfigService.topSellersUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getTopActiveUsers = function () {
        var url = this.apiUrlsConfigService.topActiveUsersUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getMostExpensiveItems = function () {
        var url = this.apiUrlsConfigService.mostExpensiveItemsUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getMostSalledMakes = function () {
        var url = this.apiUrlsConfigService.mostSalledMakesUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getMostOfferedItems = function () {
        var url = this.apiUrlsConfigService.mostOfferedItemsUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService.prototype.getMostCommentedItems = function () {
        var url = this.apiUrlsConfigService.mostCommentedItemsUrl;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    StatisticService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], StatisticService);
    return StatisticService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/statistic.service.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/polyfills.js.map

/***/ },

/***/ 64:
/***/ function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  margin-bottom: 30px; }\n"

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(117);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/src/user.service.js.map

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg10.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = ".carousel-control {\n  background-image: -webkit-linear-gradient(left, transparent 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.0001) 100%);\n  color: #2098D1; }\n\n.well {\n  background-color: transparent;\n  border: none; }\n  .well .carousel {\n    max-height: 400px;\n    overflow: hidden;\n    background-color: transparent; }\n    .well .carousel .item img {\n      width: 100%;\n      margin-top: -100px;\n      height: 600px;\n      -o-object-fit: contain;\n         object-fit: contain; }\n"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = "div.contact-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap row;\n      flex-flow: wrap row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 60vh;\n  text-align: center;\n  color: #262626; }\n  div.contact-wrapper div.form-wrapper {\n    width: 50%; }\n    @media only screen and (max-device-width: 480px) {\n      div.contact-wrapper div.form-wrapper {\n        width: 100%; } }\n  div.contact-wrapper input {\n    width: 100%; }\n  div.contact-wrapper #content {\n    resize: none;\n    padding: 10px 15px;\n    width: 100%;\n    height: 20em; }\n"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = "#image-uploader {\n  border-top: 1px solid rgba(225, 225, 225, 0.77); }\n\nlabel {\n  margin-top: 25px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  label:hover {\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #494949;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\nlabel,\ninput,\nbutton {\n  width: 250px; }\n\nimg {\n  padding: 10px; }\n\n.well {\n  background-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-top: 25px; }\n"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\n@font-face {\n  font-family: noto;\n  src: url(\"../../assets/NotoSans-Regular.ttf\"); }\n\n.navbar .navbar-nav {\n  display: inline-block;\n  float: none;\n  vertical-align: top; }\n\n.navbar .navbar-collapse {\n  text-align: center; }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center;\n  font-size: 16px;\n  font-family: noto; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 16px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n    nav h1.app-heading:hover {\n      color: white; }\n  nav a.navbar-btn:hover {\n    color: white; }\n  nav a.navbar-brand {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    font-size: 22px; }\n    nav a.navbar-brand:hover {\n      color: white; }\n  nav li.favorites-item:hover span.glyphicon.glyphicon-heart {\n    color: #DF474B; }\n  nav li.favorites-item span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n  nav span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n    nav span.glyphicon.glyphicon-heart:hover {\n      color: red; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000; }\n  nav ul.dropdown-menu > li > a {\n    font-size: 1.5rem;\n    color: #444444; }\n"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = "div.comment-section {\n  width: 80%;\n  margin: 7.5vh auto; }\n  div.comment-section div.comments-wrapper ul {\n    width: 60%;\n    margin: 0 auto 5vh auto;\n    padding: 0;\n    list-style-type: none;\n    background-color: #F9F9F9;\n    box-shadow: 0px 0px 9px 3px rgba(252, 252, 252, 0.75); }\n    @media only screen and (max-device-width: 480px) {\n      div.comment-section div.comments-wrapper ul {\n        width: 100%; } }\n    div.comment-section div.comments-wrapper ul li {\n      text-align: left;\n      word-wrap: break-word;\n      padding: 10px;\n      border-bottom: 1px solid #ccc;\n      color: #282828; }\n      div.comment-section div.comments-wrapper ul li h3 {\n        margin-top: 0;\n        color: #7e7e7e; }\n  div.comment-section div.comment-wrapper {\n    margin-top: 5vh; }\n    div.comment-section div.comment-wrapper #comment {\n      background-color: #F9F9F9;\n      resize: none;\n      padding: 15px;\n      font-size: 2rem;\n      color: #272727;\n      width: 60%;\n      height: 30vh; }\n      @media only screen and (max-device-width: 480px) {\n        div.comment-section div.comment-wrapper #comment {\n          width: 100%; } }\n\n:host /deep/ .pagination-controls ul {\n  padding: 0; }\n  :host /deep/ .pagination-controls ul li {\n    cursor: pointer; }\n    :host /deep/ .pagination-controls ul li.disabled {\n      cursor: default; }\n    :host /deep/ .pagination-controls ul li a,\n    :host /deep/ .pagination-controls ul li span {\n      font-size: 1.5rem !important; }\n    :host /deep/ .pagination-controls ul li a {\n      color: #fff !important; }\n      :host /deep/ .pagination-controls ul li a:hover {\n        background-color: #79c1f1 !important;\n        text-decoration: none; }\n"

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = "input {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-style: solid;\n  width: 100%; }\n  input:hover {\n    background-color: #494949; }\n"

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black;\n  padding: 20px; }\n  #component-header h3 > span {\n    text-transform: capitalize; }\n\n.well {\n  background-color: transparent;\n  border: none; }\n\napp-add-to-favorites {\n  float: right; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n.add-to-favorites-btn {\n  float: right; }\n  .add-to-favorites-btn span.glyphicon-heart {\n    cursor: pointer;\n    font-size: 3.5rem;\n    color: #E6E6E6; }\n  .add-to-favorites-btn:hover > span.glyphicon-heart {\n    color: #DF474B; }\n\n#controls {\n  border-top: 1px solid rgba(225, 225, 225, 0.77);\n  padding: 25px;\n  padding-bottom: 0; }\n  #controls .btn {\n    overflow: hidden;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #2f2f2f;\n    border-color: rgba(225, 225, 225, 0.77);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%; }\n    #controls .btn:hover {\n      background-color: #494949; }\n  #controls #item-number {\n    padding-top: 25px; }\n\n.gallery-item {\n  min-width: 300px;\n  max-width: 500px;\n  float: left; }\n  .gallery-item a {\n    text-align: center; }\n"

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = "div.single-item-wrapper {\n  text-align: center; }\n  div.single-item-wrapper h1 {\n    text-align: center; }\n"

/***/ },

/***/ 786:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\n@font-face {\n  font-family: noto;\n  src: url(\"../../assets/NotoSans-Regular.ttf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center;\n  font-size: 20px;\n  font-family: noto; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n    nav h1.app-heading:hover {\n      color: white; }\n  nav a.navbar-btn:hover {\n    color: white; }\n  nav a.navbar-brand {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    font-size: 22px; }\n    nav a.navbar-brand:hover {\n      color: white; }\n  nav li.favorites-item:hover span.glyphicon.glyphicon-heart {\n    color: #DF474B; }\n  nav li.favorites-item span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n  nav span.glyphicon.glyphicon-heart {\n    font-size: 2.5rem; }\n    nav span.glyphicon.glyphicon-heart:hover {\n      color: red; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000; }\n  nav ul.dropdown-menu > li > a {\n    font-size: 1.5rem;\n    color: #444444; }\n"

/***/ },

/***/ 787:
/***/ function(module, exports) {

module.exports = "ol {\n  font-size: 20px; }\n  ol .go-right {\n    float: right; }\n  ol li {\n    margin-top: 10px; }\n  ol li div {\n    margin-right: 20px; }\n  ol li:nth-child(2n) {\n    background-color: rgba(225, 225, 225, 0.05); }\n\n.go-center {\n  text-align: center; }\n"

/***/ },

/***/ 788:
/***/ function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  font-size: 20px; }\n  ul li {\n    margin-top: 10px; }\n  ul li:nth-child(2n) {\n    background-color: rgba(225, 225, 225, 0.05); }\n"

/***/ },

/***/ 789:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = "span {\n  cursor: pointer;\n  font-size: 3.37rem;\n  color: rgba(255, 214, 51, 0.77); }\n"

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black;\n  padding: 20px; }\n  #component-header h3 > span {\n    text-transform: capitalize; }\n\n.well {\n  background-color: transparent;\n  border: none; }\n\napp-add-to-favorites {\n  float: right; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n.add-to-favorites-btn {\n  float: right; }\n  .add-to-favorites-btn span.glyphicon-heart {\n    cursor: pointer;\n    font-size: 3.5rem;\n    color: #E6E6E6; }\n  .add-to-favorites-btn:hover > span.glyphicon-heart {\n    color: #DF474B; }\n\n#controls {\n  border-top: 1px solid rgba(225, 225, 225, 0.77);\n  padding: 25px;\n  padding-bottom: 0; }\n  #controls .btn {\n    overflow: hidden;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #2f2f2f;\n    border-color: rgba(225, 225, 225, 0.77);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%; }\n    #controls .btn:hover {\n      background-color: #494949; }\n  #controls #item-number {\n    padding-top: 25px; }\n\n.gallery-item {\n  min-width: 300px;\n  max-width: 500px;\n  float: left; }\n  .gallery-item a {\n    text-align: center; }\n"

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\ninput {\n  text-align: center;\n  color: white;\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n\n.form-group label {\n  width: 20em; }\n"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "img {\n  box-shadow: 0 5px 20px black; }\n\n#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black;\n  margin-bottom: 25px; }\n\n.list-group {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: transparent; }\n  .list-group .list-group-item {\n    border: none;\n    box-shadow: 0 5px 20px black;\n    background-color: transparent;\n    margin-bottom: 20px; }\n    .list-group .list-group-item .btn {\n      font-family: planer;\n      font-size: 17px;\n      background-color: transparent;\n      color: rgba(225, 225, 225, 0.77);\n      border: 1px solid rgba(225, 225, 225, 0.77);\n      border-radius: 0px;\n      box-shadow: 0 5px 20px black;\n      overflow: hidden; }\n      .list-group .list-group-item .btn:hover {\n        text-decoration: underline; }\n  .list-group .no-shadow {\n    box-shadow: none; }\n"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = "#component-header {\n  color: rgba(225, 225, 225, 0.77);\n  background: transparent;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom: 1px solid rgba(225, 225, 225, 0.77);\n  box-shadow: 0 1px 25px black; }\n\n.submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\n#inputs-container {\n  margin-bottom: 25px; }\n\n.well {\n  background: transparent;\n  box-shadow: 0 5px 25px black;\n  border-color: rgba(225, 225, 225, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.content-left {\n  opacity: 0.99;\n  box-shadow: 0 5px 25px black;\n  background-image: url(\"../../assets/home-bg2.jpg\");\n  background-repeat: none;\n  padding-left: 20px; }\n\n.form-group {\n  width: 100%; }\n\ninput,\n.dropdown-toggle {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%; }\n  input.ng-valid.ng-touched,\n  .dropdown-toggle.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched,\n  .dropdown-toggle.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  width: 100%;\n  background-color: #55b559; }\n  .btn.btn-success:hover {\n    text-decoration: underline; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <div id=\"component-header\">\n    <h3>Submit Listing</h3>\n  </div>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\n      <div id=\"inputs-container\" class=\"row\">\n        <div class=\"content-left col-xs-8\">\n        </div>\n        <div id=\"content-right\" class=\"col-xs-4\">\n          <div class=\"well\">\n            <div class=\"form-group\">\n              <input type=\"text\" #ngMake=\"ngModel\" class=\"form-control\" name=\"make\" [(ngModel)]=\"itemListing.make\" placeholder=\"Make\" required\n                minlength=\"1\" maxlength=\"30\" pattern=\"[A-Za-z0-9\\- ]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #ngModel=\"ngModel\" class=\"form-control\" name=\"model\" [(ngModel)]=\"itemListing.model\" placeholder=\"Model\"\n                required minlength=\"1\" maxlength=\"30\" pattern=\"[A-Za-z0-9\\- ]+\">\n            </div>\n            <div class=\"form-group\">\n              <input #yearInput appFormDefaultValue appFormYearValidation (change)=\"updateYearProp(yearInput.value)\" type=\"text\" #ngYear=\"ngModel\" class=\"form-control\" name=\"year\" [(ngModel)]=\"itemListing.year\"\n                placeholder=\"Year\" required minlength=\"4\" maxlength=\"4\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input appFormDefaultValue appFormPriceValidation #tbPrice (change)=\"updatePriceProp(tbPrice.value)\" type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"itemListing.price\"\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input appFormDefaultValue type=\"text\" #ngEnginePower=\"ngModel\" class=\"form-control\" name=\"enginePower\" [(ngModel)]=\"itemListing.enginePower\"\n                placeholder=\"Engine Power\" required minlength=\"1\" maxlength=\"4\" pattern=\"[0-9]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #ngExteriorColor=\"ngModel\" class=\"form-control\" name=\"exteriorColor\" [(ngModel)]=\"itemListing.exteriorColor\"\n                placeholder=\"Exterior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z \\-]+\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" #InteriorColor=\"ngModel\" class=\"form-control\" name=\"interiorColor\" [(ngModel)]=\"itemListing.interiorColor\"\n                placeholder=\"Interior Color\" required minlength=\"3\" maxlength=\"30\" pattern=\"[A-Za-z \\-]+\">\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"image-upload\" class=\"form-group\">\n        <app-file-uploader [resetState]=\"this.resetState\" (onFileUpload)=\"onFileUpload($event)\"></app-file-uploader>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\n    <app-navigation></app-navigation>\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\n    <div id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = "<div class=\"well\">\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!--Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li [class.active]=\"i===0\" *ngFor=\"let item of mylist; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\">\n      </li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div *ngFor=\"let item of mylist; let i=index\" class=\"item\" [class.active]=\"i===0\">\n        <img [attr.src]=\"item.imageUrl\" class=\"animated fadeIn\">\n      </div>\n    </div>\n\n    <a *ngIf=\"mylist.length > 1\" class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a *ngIf=\"mylist.length > 1\" class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = "<h3 id=\"component-header\">Contact Us</h3>\n<div class=\"contact-wrapper\">\n  <div class=\"form-wrapper form-group\">\n    <input type=\"text\" class=\"form-group\" placeholder=\"Name\" [(ngModel)]=\"mail.senderName\">\n    <br>\n    <input type=\"email\" class=\"form-group\" placeholder=\"Email Address\" [(ngModel)]=\"mail.senderEmail\">\n    <br>\n    <input type=\"text\" class=\"form-group\" placeholder=\"Subject\" [(ngModel)]=\"mail.subject\">\n    <br>\n    <textarea name=\"content\" id=\"content\" [(ngModel)]=\"mail.content\"></textarea>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Send</button>\n  </div>\n</div>"

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = "<!--<label>\n  <input [id]=\"id\" type=\"file\" name=\"fileUpload\" (change)=\"updateLabel($event)\" multiple>\n  <label [for]=\"id\" class=\"file-upl-lb\">\n    <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span> {{labelText}}\n  </label>\n</label>-->\n<!-- app.component.html -->\n<div id=\"image-uploader\">\n  <label class=\"btn btn-default btn-file\">\n    Upload Image <input style=\"display: none;\" type=\"file\" ngFileSelect [options]=\"options\" (onUpload)=\"handleUpload($event)\" (beforeUpload)=\"beforeUpload($event)\" accept=\"image/*\">\n</label>\n<!-- drag & drop file example-->\n<style>\n    .file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n  </style>\n<div ngFileDrop [options]=\"options\" (onUpload)=\"handleUpload($event)\" [ngClass]=\"{'file-over': hasBaseDropZoneOver}\" (onFileOver)=\"fileOverBase($event)\"\n  (beforeUpload)=\"beforeUpload($event)\">\n</div>\n\n<div *ngIf=\"uploadedFiles.length > 0\" class=\"well\" id=\"uploaded\">\n  <img *ngFor=\"let file of uploadedFiles \" [src]=\"file.imageUrl\" height=\"150px\" alt=\"image\">\n</div>\n</div>"

/***/ },

/***/ 804:
/***/ function(module, exports) {

module.exports = "<!--<footer>\n  <div class=\"well\">\n    <a href=\"https://github.com/team-heat/killer-app\" target=\"_blank\">\n      <p>Team Heat - Killer App @ GitHub</p>\n    </a>\n    <a href=\"https://github.com/ilievv\" target=\"_blank\">\n      <p>Iliyan Kupenov</p>\n    </a>\n    <a href=\"https://github.com/shakuu\" target=\"_blank\">\n      <p>Hristo Todorov</p>\n    </a>\n    <a href=\"https://github.com/StoikoNeykov\" target=\"_blank\">\n      <p>Stoiko Neykov</p>\n    </a>\n  </div>\n</footer>-->\n<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav text-center\">\n      <li>\n        <a href=\"https://github.com/team-heat/killer-app\" target=\"_blank\">Team Heat - Killer App @ GitHub</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/ilievv\" target=\"_blank\">Iliyan Kupenov</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/shakuu\" target=\"_blank\">Hristo Todorov</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/StoikoNeykov\" target=\"_blank\">Stoiko Neykov</a>\n      </li>\n      <li>\n        <a routerLink=\"/contact\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ },

/***/ 805:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\n</section>"

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "<div class=\"comment-section\">\n  <div class=\"comments-wrapper\" *ngIf=\"listingComments.length\">\n    <ul>\n      <li *ngFor=\"let comment of listingComments | paginate: { itemsPerPage: 5, currentPage: p }\">\n        <div class=\"comment-list-item\">\n          <div class=\"author-wrapper\">\n            <h3 class=\"author\">{{comment.username}}</h3>\n          </div>\n          <div class=\"content-wrapper\">\n            <span>{{comment.content}}</span>\n          </div>\n        </div>\n      </li>\n    </ul>\n    <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n  <div class=\"comment-wrapper\" *ngIf=\"this.userStorageService.loggedUser\">\n    <textarea name=\"comment\" id=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n    <br>\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">Submit Comment</button>\n  </div>\n</div>"

/***/ },

/***/ 807:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormStringLengthValidation #tbColorFilter (change)=\"updateValidation(tbColorFilter.value)\" [(ngModel)]=\"this.colorFilterValue\" (ngModelChange)=\"updateValue()\" type=\"text\" name=\"colorFilterValue\"\n    placeholder=\"Color Filter\">\n</div>"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormStringLengthValidation #tbMakeFilter (change)=\"updateValidation(tbMakeFilter.value)\" [(ngModel)]=\"this.makeFilterValue\"\n    (ngModelChange)=\"updateValue()\" type=\"text\" name=\"makeFilterValue\" placeholder=\"Make Filter\">\n</div>"

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormPriceValidation #tbMaxPrice (change)=\"validationUpdate(tbMaxPrice.value)\" [(ngModel)]=\"this.maximumPriceFilterValue\" (ngModelChange)=\"updateValue()\" type=\"text\" name=\"maximumPriceFilterValue\"\n    placeholder=\"Maximum Price\">\n</div>"

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormYearValidation #tbMaxYear (change)=\"updateValidation(tbMaxYear.value)\" [(ngModel)]=\"this.maximumYearFilterValue\" (ngModelChange)=\"updateValue()\" type=\"text\" name=\"maximumYearFilterValue\"\n    placeholder=\"Maximum Year\">\n</div>"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormPriceValidation #tbMinPrice (change)=\"validationUpdate(tbMinPrice.value)\" [(ngModel)]=\"this.minimumPriceFilterValue\" (ngModelChange)=\"updateValue()\" type=\"text\" name=\"minimumPriceFilterValue\"\n    placeholder=\"Minimum Price\">\n</div>"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input class=\"from-control\" appFormYearValidation #tbMinYear (change)=\"updateValidation(tbMinYear.value)\" [(ngModel)]=\"this.minimumYearFilterValue\" (ngModelChange)=\"updateValue()\" type=\"text\" name=\"minimumYearFilterValue\"\n    placeholder=\"Minimum Year\">\n</div>"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <div id=\"component-header\">\n    <h3 *ngIf=\"this.items.length === 0\">Dreamstime Gallery</h3>\n    <h3 *ngIf=\"this.items.length !== 0\" class=\" text-center\">\n      <span> {{this.activeItem.make}}</span>\n      <span>{{this.activeItem.model}}</span>\n      <span>{{this.activeItem.year}}</span>\n      <app-add-to-favorites *ngIf=\"this.items.length !== 0 && this.userStorage.isLogged() \" [itemIdToFavorite]=\"this.activeItem._id\"></app-add-to-favorites>\n    </h3>\n  </div>\n  <div class=\"row\">\n    <div *ngIf=\"this.originalItems.length !== 0\" class=\"well\">\n      <div class=\"row\">\n        <div class=\"col-xs-2\">\n          <app-make-filter (onMakeFilter)=\"onMakeFilter($event)\"></app-make-filter>\n        </div>\n        <div class=\"col-xs-2\">\n          <app-color-filter (onColorFilter)=\"onColorFilter($event)\"></app-color-filter>\n        </div>\n        <div class=\"col-xs-2\">\n          <app-minimum-year-filter (onMinimumYearFilter)=\"onMinimumYearFilter($event)\"></app-minimum-year-filter>\n        </div>\n        <div class=\"col-xs-2\">\n          <app-maximum-year-filter (onMaximumYearFilter)=\"onMaximumYearFilter($event)\"></app-maximum-year-filter>\n        </div>\n        <div class=\"col-xs-2\">\n          <app-minimum-price-filter (onMinimumPriceFilter)=\"onMinimumPriceFilter($event)\"></app-minimum-price-filter>\n        </div>\n        <div class=\"col-xs-2\">\n          <app-maximum-price-filter (onMaximumPriceFilter)=\"onMaximumPriceFilter($event)\"></app-maximum-price-filter>\n        </div>\n      </div>\n    </div>\n    <h3 *ngIf=\"this.originalItems.length === 0 && this.items.length !== 0\">Be the first to post a new item!</h3>\n    <h3 *ngIf=\"this.items.length === 0\">No matching items found.</h3>\n    <div *ngIf=\"this.items.length !== 0\" id=\"carousel-container\" class=\"col-xs-8 col-xs-offset-2\">\n      <app-carousel *ngIf=\"this.activeItem\" [mylist]=\"this.activeItem.pictures\"></app-carousel>\n    </div>\n  </div>\n  <div id=\"controls\">\n    <div *ngIf=\"this.items.length !== 0\" class=\"row\">\n      <div class=\"col-xs-2 col-xs-offset-1\">\n        <a (click)=\"onPrevious()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\n          Previous\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-xs-offset-1\">\n        <a class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\" routerLink=\"{{this.activeItem._id}}\">\n          More Details\n        </a>\n      </div>\n      <div class=\"col-xs-2 col-xs-offset-1\">\n        <a (click)=\"onNext()\" class=\"btn btn-primary\" *ngIf=\"this.items.length !== 0\">\n          Next\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"this.items.length !== 0\" id=\"item-number\" class=\"row text-center\">\n      <p>Displaying Item {{this.activeItemIndex + 1}} / {{this.items.length}}</p>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <div class=\"go-center\">\n        <a routerLink=\"/gallery/{{this.item._id}}\">\n            <img src=\"{{this.item.pictures[0].imageUrl}}\">\n        </a>\n    </div>\n    <h3>StartPrice: {{this.item.price | currency:'USD':true:'4.0'}}</h3>\n    <h3 *ngIf=\"this.haveOffers()\">Highest offer: {{this.maxOffer | currency:'USD':true:'4.0'}}</h3>\n    <h3 *ngIf=\"!this.haveOffers()\">Highest offer: {{this.maxOffer}}</h3>\n\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\n        <div class=\"form-group\">\n            <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"offer.offeredPrice\"\n                placeholder=\"Price\" required minlength=\"1\" maxlength=\"10\" pattern=\"[0-9]+\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </div>\n    </form>\n</div>"

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = "<div class=\"go-center\">\n    <h2>Offers for:</h2>\n    <a routerLink=\"/gallery/{{this.item._id}}\">\n        <img src=\"{{this.item.pictures[0].imageUrl}}\">\n    </a>\n</div>\n<div class=\"go-center\">\n    <a *ngIf=\"this.isLogged && !this.isOwner\" routerLink=\"/gallery/{{this.item._id}}/offer\" class=\"btn btn-primary\">Make offer</a>\n</div>\n\n\n<h3 *ngIf=\"!this.item.offers.length\" class=\"go-center\">No offers at this moment!</h3>\n\n<div *ngIf=\"this.item.offers.length\">\n    <h2 class=\"go-center\">Active offers:</h2>\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\n        <div *ngIf=\"offer.status === 'active'\" class=\"bordered border-radius padding-10-25 go-center margin-10\">\n            \n            <h3 class=\"go-left\">Offered price: {{offer.offeredPrice | currency:'USD':true :'1.0-0'}}</h3>\n            <p class=\"go-right\">By: {{offer.username}}</p>\n            \n            <div *ngIf=\"this.isOwner\" class=\"btn btn-success\" (click)=\"acceptOffer($event, offer)\">Accept offer</div>\n            <div *ngIf=\"this.isOwner\" class=\"btn btn-danger\" (click)=\"rejectOffer($event, offer)\">Reject offer</div>\n            <div *ngIf=\"this.loggedUser===offer.username\" class=\"btn btn-warning\" (click)=\"cencelOffer($event, offer)\">Cancel offer</div>\n        </div>\n    </div>\n\n    <h2 class=\"go-center\">Rejected offers:</h2>\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\n        <div *ngIf=\"offer.status === 'rejected'\" class=\"bordered border-radius padding-10-25 go-center margin-10\">\n            <h3 class=\"go-left\">Offered price: {{offer.offeredPrice | currency:'USD':true :'1.0-0'}}</h3>\n            <p class=\"go-right\">By: {{offer.username}}</p>\n        </div>\n    </div>\n\n    <h2 class=\"go-center\">Canceled offers:</h2>\n    <div *ngFor=\"let offer of this.item.offers\" class=\"offer\">\n        <div *ngIf=\"offer.status === 'canceled'\" class=\"bordered border-radius padding-10-25 go-center margin-10\">\n            <h3 class=\"go-left\">Offered price: {{offer.offeredPrice | currency:'USD':true :'1.0-0'}}</h3>\n            <p class=\"go-right\">By: {{offer.username}}</p>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<div class=\"single-item-wrapper\">\n    <h1>{{this.item.make}} {{this.item.model}} {{this.item.year}}</h1>\n    <app-carousel *ngIf=\"this.item && this.item.pictures && this.item.pictures.length > 0\" [mylist]=\"this.item.pictures\"></app-carousel>\n    <!--<div *ngIf=\"!this.item && !this.item.pictures && !this.item.pictures.length > 0\"></div>-->\n    <h3>Engine power: {{this.item.enginePower}}hp</h3>\n    <h3>Exterior Color: {{this.item.exteriorColor}}</h3>\n    <h3>Interior Color: {{this.item.interiorColor}}</h3>\n    <h3>Price: ${{this.item.price}}</h3>\n\n    <!--TODO add right update link when ready-->\n\n    <a *ngIf=\"this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}\">Update</a>\n\n    <!--TODO add right make offer link when ready-->\n\n    <a *ngIf=\"this.isLogged && !this.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offer\">Make Offer</a>\n\n    <a class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}/offers\">Show offers</a>\n\n    <app-comment-section></app-comment-section>\n</div>"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n      aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    <a class=\"navbar-brand\" (click)=\"setActiveItem()\" routerLink=\"/\">DREAMSTIME</a>\n  </div>\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Browse'\" (click)=\"setActiveItem('Browse')\"><a routerLink=\"/gallery\">Browse</a></li>\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/submit\">Create</a></li>\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Statistics'\" (click)=\"setActiveItem('Statistics')\"><a routerLink=\"/statistics\">Statistics</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Profile</a></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink='favorites'>Favorites</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Settings</a></li>\n          <li (click)=\"setActiveItem('None')\"><a routerLink=\"logout\">Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!-- /.navbar-collapse -->\n  <div class=\"row public-container\" *ngIf=\"hasLoggedUser == false\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <h1>\n        <a routerLink=\"/gallery\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n      <a routerLink=\"/\">\n        <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\n      </a>\n      <h1>\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n    </div>\n  </div>\n</nav>"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 most commented cars</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 most expensive cars</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 most offered cars</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 most selled makes</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = "<div>\n    <a routerLink=\"{{this.linkPrefix}}{{this.item._id}}\">\n        {{this.item.make}} {{this.item.model}}\n    </a>\n    <div class=\"go-right\">\n        {{this.item.count}}\n    </div>\n</div>"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = "<div>\n    {{this.item.name}}\n    <div class=\"go-right\">\n        {{this.item.count}}\n    </div>\n</div>"

/***/ },

/***/ 824:
/***/ function(module, exports) {

module.exports = "<ol *ngIf=\"this.isThereAnythingInTheList() && this.isThereId()\">\n    <li *ngFor=\"let item of mylist\">\n        <app-statistics-list-item-link [item]=\"item\"></app-statistics-list-item-link>\n    </li>\n</ol>\n<ol *ngIf=\"this.isThereAnythingInTheList() && !this.isThereId()\">\n    <li *ngFor=\"let item of mylist\">\n        <app-statistics-list-item [item]=\"item\"></app-statistics-list-item>\n    </li>\n</ol>\n<div class=\"go-center\">\n    <a routerLink=\"/statistics\" class=\"btn btn-primary\">Back</a>\n</div>"

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = "<h2>Statistics (Top 10)</h2>\n<ul>\n    <li>\n        <a routerLink=\"/statistics/items/mostCommentedItems\">Most commented cars</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/items/mostExpensiveItems\">Most expensive cars</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/items/mostOfferedItems\">Most offered cars</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/items/mostSalledMakes\">Most selled makes</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/users/topActiveUsers\">Active users</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/users/topBuyers\">Buyers</a>\n    </li>\n    <li>\n        <a routerLink=\"/statistics/users/topSellers\">Sellers</a>\n    </li>\n</ul>"

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 active users</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 buyers</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "<h2>Top 10 sellers</h2>\n<app-statistics-list [mylist]=\"this.list\"></app-statistics-list>"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = "<a *ngIf=\"!this.itemIsFavorite\" (click)=\"addToFavorites()\">\n  <span class=\"glyphicon glyphicon-star-empty add-to-favorites\" aria-hidden=\"true\"></span>\n</a>\n<a *ngIf=\"this.itemIsFavorite\" (click)=\"removeFromFavorites()\">\n  <span class=\"glyphicon glyphicon-star remove-to-favorites\" aria-hidden=\"true\"></span>\n</a>"

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<p>\n  facebook-login works!\n</p>\n"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <div id=\"component-header\">\n    <h3 *ngIf=\"this.items.length === 0\">Dreamstime Gallery</h3>\n    <h3 *ngIf=\"this.items.length !== 0\" class=\" text-center\">\n      <span> {{this.activeItem.make}}</span>\n      <span>{{this.activeItem.model}}</span>\n      <span>{{this.activeItem.year}}</span>\n      <app-add-to-favorites *ngIf=\"this.items.length !== 0 && this.userStorage.isLogged() \" [itemIdToFavorite]=\"this.activeItem._id\"></app-add-to-favorites>\n    </h3>\n  </div>\n  <div class=\"row \">\n    <h3 *ngIf=\"this.items.length===0 \">Be the first to post a new item!</h3>\n    <div *ngIf=\"this.items.length !==0 \" id=\"carousel-container \" class=\"col-xs-8 col-xs-offset-2 \">\n      <app-carousel *ngIf=\"this.activeItem \" [mylist]=\"this.activeItem.pictures \"></app-carousel>\n    </div>\n  </div>\n  <div id=\"controls\">\n    <div *ngIf=\"this.items.length !==0 \" class=\"row \">\n      <div class=\"col-xs-2 col-xs-offset-1 \">\n        <a (click)=\"onPrevious() \" class=\"btn btn-primary \" *ngIf=\"this.items.length !==0 \">\n          Previous\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-xs-offset-1 \">\n        <a class=\"btn btn-primary \" *ngIf=\"this.items.length !==0 \" routerLink=\"{{this.activeItem._id}} \">\n          More Details\n        </a>\n      </div>\n      <div class=\"col-xs-2 col-xs-offset-1 \">\n        <a (click)=\"onNext() \" class=\"btn btn-primary \" *ngIf=\"this.items.length !==0 \">\n          Next\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"this.items.length !== 0\" id=\"item-number\" class=\"row text-center\">\n      <p>Displaying Item {{this.activeItemIndex + 1}} / {{this.items.length}}</p>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "<p>\n  listed-items works!\n</p>\n"

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <h2 id=\"component-header\">Sign In</h2>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"isLoading === false\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(); loginForm.reset()\">\n      <div class=\"form-group\">\n        <label> \n          <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between 4 and 30 symbols long.</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label> \n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between 6 and 30 symbols long.</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\n      </div>\n    </form>\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\n  </div>\n</div>\n\n<!-- Carousel testing DELETE -->\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\n      <img [src]=\"img\" alt=\"slide\">\n    </div>\n  </div>\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>-->"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<div id=\"component-header\">\n  <h3>Profile</h3>\n</div>\n<div class=\"row\">\n  <div class=\"content-left col-xs-6\">\n    <img [src]=\"user.image\" alt=\"profile image\" width=\"100%\">\n  </div>\n  <div class=\"content-right col-xs-6\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.username}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.email}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.firstName}} {{user.lastName}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.gender}}, {{user.age}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>Member since:</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.createdOn | dateFormatter}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item no-shadow row\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <a appNavigationHover routerLink=\"/favorites\" class=\"btn btn-default col-xs-12\">\n              <span>View Favorites</span>\n            </a>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <a appNavigationHover routerLink=\"/listed-items\" class=\"btn btn-default col-xs-12\">\n              <span>View Listed Items</span>\n            </a>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n\n  <div id=\"component-header\">\n    <h3>Registration Form</h3>\n  </div>\n  <div class=\"inner-wrapper\">\n\n    <form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div id=\"inputs-container\" class=\"row\">\n        <div class=\"content-left col-xs-8\">\n        </div>\n        <div id=\"content-right\" class=\"col-xs-4\">\n          <div class=\"well\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required\n                minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\"\n                required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\"\n                minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\"\n                maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\"\n                required>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"dropdown\">\n                <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          {{user.gender}}\n        <span class=\"caret\"></span>\n      </button>\n                <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          Gender\n        <span class=\"caret\"></span>\n      </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\n                  <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\n                  <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\n            </div>\n            <div class=\"form-group\">\n              <button class=\"form-control btn btn-success\" type=\"submit\">Register</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ },

/***/ 860:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(447);


/***/ }

},[860]);
//# sourceMappingURL=main.bundle.map