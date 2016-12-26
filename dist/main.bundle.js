webpackJsonp([0,4],{

/***/ 110:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/toastr-notification-options-factory.service.js.map

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(225);
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
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
        this.userApiUrl = this.apiUrlsConfigService.usersApiUrl;
        this.logoutApiUrl = this.apiUrlsConfigService.logoutApiUrl;
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
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__["a" /* ApiUrlsConfigService */]) === 'function' && _c) || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/user.service.js.map

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(540);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/user-factory.service.js.map

/***/ },

/***/ 222:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/api-urls-config.service.js.map

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(747);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/hashing.service.js.map

/***/ },

/***/ 224:
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
        return {
            url: url,
            content: content,
            headers: headers
        };
    };
    HttpRequesterOptionsFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HttpRequesterOptionsFactoryService);
    return HttpRequesterOptionsFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/http-requester-options-factory.service.js.map

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(319);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/http-requester.service.js.map

/***/ },

/***/ 342:
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
            template: __webpack_require__(720),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/app.component.js.map

/***/ },

/***/ 343:
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
            template: __webpack_require__(721),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/home.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__ = __webpack_require__(539);
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
        if (year === void 0) { year = 0; }
        if (price === void 0) { price = 0; }
        if (enginePower === void 0) { enginePower = 0; }
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
        return itemListing;
    };
    ItemListingFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ItemListingFactoryService);
    return ItemListingFactoryService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/item-listing-factory.service.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_urls_config_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_options_factory_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__(225);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/item-listing.service.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function FavoritesComponent() {
    }
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(725),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/favorites.component.js.map

/***/ },

/***/ 347:
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
            template: __webpack_require__(726),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListedItemsComponent);
    return ListedItemsComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/listed-items.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(727),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/login.component.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(728),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/logout.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(729),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/profile.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(730),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/register.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 410;


/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(538);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/main.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__(68);
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
    AddListingComponent.prototype.onsubmit = function () {
        var _this = this;
        this.itemListingService.addItem(this.itemListing)
            .subscribe(function (response) {
            var toastrNotificationOptions = _this.toastrOptionsFactory
                .createToastrNotificationOptions('success', 'You have submitted the item successfully.');
            _this.toastrNotification.enqueueNotification(toastrNotificationOptions);
        });
    };
    AddListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(719),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/add-listing.component.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_listing_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_listing_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__ = __webpack_require__(344);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__add_listing_component__["a" /* AddListingComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_6__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddListingModule);
    return AddListingModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/add-listing.module.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toastr_notification_options_factory_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_listing_add_listing_module__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_urls_config_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_users_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_storage_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_requester_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_http_requester_options_factory_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_navigation_hover_directive__ = __webpack_require__(535);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__directives_navigation_hover_directive__["a" /* NavigationHoverDirective */]
            ],
            imports: [
                // MockedModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_13__add_listing_add_listing_module__["a" /* AddListingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_api_urls_config_service__["a" /* ApiUrlsConfigService */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_19__services_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_18__services_http_requester_service__["a" /* HttpRequesterService */],
                __WEBPACK_IMPORTED_MODULE_10__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_11__services_toastr_notification_service__["a" /* ToastrNotificationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_storage_service__["a" /* UserStorageService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/app.module.js.map

/***/ },

/***/ 535:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/navigation-hover.directive.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(343);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/home.module.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/home.routes.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(534);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/index.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListing; });
var ItemListing = (function () {
    function ItemListing() {
    }
    return ItemListing;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/item-listing.model.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/user.model.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(722),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/navigation.component.js.map

/***/ },

/***/ 542:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/date-formatter.pipe.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(391);
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
            template: __webpack_require__(723),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 544:
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
            template: __webpack_require__(724),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/facebook-login.component.js.map

/***/ },

/***/ 545:
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
            template: __webpack_require__(731),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/users.component.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_date_formatter_pipe__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_login_facebook_login_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hashing_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listed_items_listed_items_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_factory_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_routes__ = __webpack_require__(547);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__users_routes__["a" /* UsersRouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__facebook_login_facebook_login_component__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_1__pipes_date_formatter_pipe__["a" /* DateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__listed_items_listed_items_component__["a" /* ListedItemsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_user_factory_service__["a" /* UserFactoryService */],
                __WEBPACK_IMPORTED_MODULE_5__services_hashing_service__["a" /* HashingService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/users.module.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_favorites_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listed_items_listed_items_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(42);
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
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModule);
    return UsersRouterModule;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/users.routes.js.map

/***/ },

/***/ 548:
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/environment.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/polyfills.js.map

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(352);
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
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/user-storage.service.js.map

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n  nav a.navbar-brand {\n    font-family: planer;\n    font-size: 22px; }\n  nav li > a {\n    font-family: planer;\n    font-size: 20px; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000;\n    font-family: planer;\n    font-size: 20px; }\n"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = ".login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\ninput {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\nimg {\n  box-shadow: 0 5px 20px black; }\n\n.list-group {\n  font-family: planer;\n  font-size: 20px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: transparent; }\n  .list-group .list-group-item {\n    border: none;\n    box-shadow: 0 5px 20px black;\n    background-color: transparent;\n    margin-bottom: 20px; }\n    .list-group .list-group-item .btn {\n      font-family: planer;\n      font-size: 17px;\n      background-color: transparent;\n      color: rgba(225, 225, 225, 0.77);\n      border: 1px solid rgba(225, 225, 225, 0.77);\n      border-radius: 0px;\n      box-shadow: 0 5px 20px black;\n      overflow: hidden; }\n      .list-group .list-group-item .btn:hover {\n        text-decoration: underline; }\n  .list-group .no-shadow {\n    box-shadow: none; }\n"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "input {\n  background-color: rgba(0, 0, 0, 0.77); }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\n  <h2 id=\"component-header\">Submit Listing</h2>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngMake=\"ngModel\" class=\"form-control\" name=\"make\" [(ngModel)]=\"itemListing.make\" placeholder=\"Make\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngModel=\"ngModel\" class=\"form-control\" name=\"model\" [(ngModel)]=\"itemListing.model\" placeholder=\"Model\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngYear=\"ngModel\" class=\"form-control\" name=\"year\" [(ngModel)]=\"itemListing.year\" placeholder=\"Year\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"itemListing.price\" placeholder=\"Price\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngEnginePower=\"ngModel\" class=\"form-control\" name=\"enginePower\" [(ngModel)]=\"itemListing.enginePower\" placeholder=\"Engine Power\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #ngExteriorColor=\"ngModel\" class=\"form-control\" name=\"exteriorColor\" [(ngModel)]=\"itemListing.exteriorColor\" placeholder=\"Exterior Color\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <input type=\"text\" #InteriorColor=\"ngModel\" class=\"form-control\" name=\"interiorColor\" [(ngModel)]=\"itemListing.interiorColor\" placeholder=\"Interior Color\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\n    <app-navigation></app-navigation>\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\n    <div id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\n  <a routerLink=\"mock\"  class=\"btn <btn-warning></btn-warning>\">Click FFS</a>\n</section>"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n      aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    <a class=\"navbar-brand\">DREAMSTIME</a>\n  </div>\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav\">\n      <li appNavigationHover [class.active]=\"activeItem === 'Home'\" (click)=\"setActiveItem('Home')\"><a routerLink=\"/\">Home</a></li>\n      <li appNavigationHover [class.active]=\"activeItem === 'Gallery'\" (click)=\"setActiveItem('Gallery')\"><a routerLink=\"/\">Gallery</a></li>\n      <li appNavigationHover [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/\">Create</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a appNavigationHover href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li (click)=\"setActiveItem('None')\"><a appNavigationHover routerLink='profile'>Profile</a></li>\n          <li (click)=\"setActiveItem('None')\"><a appNavigationHover routerLink='profile'>Settings</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li (click)=\"setActiveItem('None')\"><a appNavigationHover routerLink=\"logout\">Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!-- /.navbar-collapse -->\n  <div class=\"row\" *ngIf=\"hasLoggedUser == false\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <h1>\n        <a routerLink=\"/\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n      <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\n      <h1>\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n    </div>\n  </div>\n</nav>"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<p>\n  facebook-login works!\n</p>\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<p>\n  favorites works!\n</p>\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<p>\n  listed-items works!\n</p>\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <h2 id=\"component-header\">Sign In</h2>\n  <div class=\"inner-wrapper\">\n    <form *ngIf=\"isLoading === false\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(); loginForm.reset()\">\n      <div class=\"form-group\">\n        <label> \n          <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label> \n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between</div>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\n      </div>\n    </form>\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\n  </div>\n</div>\n\n<!-- Carousel testing DELETE -->\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\n      <img [src]=\"img\" alt=\"slide\">\n    </div>\n  </div>\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>-->"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"content-left col-xs-6\">\n    <img [src]=\"user.image\" alt=\"profile image\" width=\"100%\">\n  </div>\n  <div class=\"content-right col-xs-6\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.username}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.email}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>{{user.firstName}} {{user.lastName}}</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.gender}}, {{user.age}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <p>Member since:</p>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <p>{{user.createdOn | dateFormatter}}</p>\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item no-shadow row\">\n        <div class=\"row\">\n          <div class=\"column-left col-xs-6 text-left\">\n            <a appNavigationHover routerLink=\"/favorites\" class=\"btn btn-default col-xs-12\">\n              <span>View Favorites</span>\n            </a>\n          </div>\n          <div class=\"column-right col-xs-6 text-right\">\n            <a appNavigationHover routerLink=\"/listed-items\" class=\"btn btn-default col-xs-12\">\n              <span>View Listed Items</span>\n            </a>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "<h2>Registration Form</h2>\n<form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label> \n      <span>Username: </span>\n      <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>Password: </span>\n      <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>First Name: </span>\n      <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>Last Name: </span>\n      <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>Age: </span>\n      <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\" required>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"dropdown\">\n      <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          {{user.gender}}\n        <span class=\"caret\"></span>\n      </button>\n      <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\n          Gender\n        <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\n        <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\n        <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>Email: </span>\n      <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label> \n      <span>Profile Image: </span>\n      <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <button class=\"form-control\" type=\"submit\">Register</button>\n    </label>\n  </div>\n</form>\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(411);


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ToastrNotificationService() {
        this.notificationsQueue = [];
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
    ToastrNotificationService.prototype.enqueueNotification = function (options) {
        this.notificationsQueue.push(options);
    };
    ToastrNotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastrNotificationService);
    return ToastrNotificationService;
}());
//# sourceMappingURL=/home/ilievv/Documents/Angular2 Official/killer-app/src/toastr-notification.service.js.map

/***/ }

},[753]);
//# sourceMappingURL=main.bundle.map