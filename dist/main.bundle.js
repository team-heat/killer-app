webpackJsonp([0,4],{

/***/ 112:
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

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(557);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/api-urls-config.service.js.map

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(776);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/http-requester-options-factory.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(324);
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

/***/ 348:
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
            template: __webpack_require__(742),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.component.js.map

/***/ },

/***/ 349:
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
            template: __webpack_require__(745),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__ = __webpack_require__(112);
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
    }
    ItemsCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItemsCollection()
            .map(function (x) { return x.json(); })
            .subscribe(function (x) { return _this.items = x; });
    };
    ItemsCollectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'items-collection',
            template: __webpack_require__(746),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object])
    ], ItemsCollectionComponent);
    return ItemsCollectionComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/items-collection.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__(44);
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
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            isOwner: false,
            owner: null
        };
    }
    SingleItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        var username;
        if (this.userStorageService.isLogged()) {
            username = this.userStorageService.getLoggedUser().username;
        }
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (x) { return id = x; });
        this.itemListingService.getSingleItem(id)
            .map(function (x) { return x.json(); })
            .subscribe(function (x) {
            _this.item = x;
            _this.item.isOwner = _this.item.owner === username;
        });
    };
    SingleItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-item',
            template: __webpack_require__(747),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SingleItemComponent);
    return SingleItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/single-item.component.js.map

/***/ },

/***/ 352:
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

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_listing_model__ = __webpack_require__(556);
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

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(84);
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
    function AddToFavoritesComponent(router, route, userService, toastrNotificationService, toastrNotificationOptionsFactoryService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.toastrNotificationService = toastrNotificationService;
        this.toastrNotificationOptionsFactoryService = toastrNotificationOptionsFactoryService;
    }
    AddToFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            var itemListingId = params['id'];
            return _this.userService.addItemToUserFavorites(itemListingId);
        })
            .subscribe(function (response) {
            var method = 'success';
            var message = "Added a new item to favorites.";
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            var method = 'error';
            var message = 'Invalid item.';
            var heading = 'Oops!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () {
            _this.router.navigateByUrl('favorites');
        });
    };
    AddToFavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add-to-favorites',
            template: __webpack_require__(750),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], AddToFavoritesComponent);
    return AddToFavoritesComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/add-to-favorites.component.js.map

/***/ },

/***/ 355:
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
            template: __webpack_require__(752),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/favorites.component.js.map

/***/ },

/***/ 356:
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
            template: __webpack_require__(753),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListedItemsComponent);
    return ListedItemsComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/listed-items.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(754),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/login.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(755),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _e) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/logout.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(756),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/profile.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(757),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/register.component.js.map

/***/ },

/***/ 419:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 419;


/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(553);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/GitHub/killer-app/src/main.js.map

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(361);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/user-storage.service.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(741),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_item_listing_service__["a" /* ItemListingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/add-listing.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_form_default_value_directive__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_uploader__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_listing_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_listing_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_item_listing_factory_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_uploader_file_uploader_component__ = __webpack_require__(550);
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
    { path: 'submit', component: __WEBPACK_IMPORTED_MODULE_3__add_listing_component__["a" /* AddListingComponent */] }
];
var AddListingModule = (function () {
    function AddListingModule() {
    }
    AddListingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_uploader__["NgUploaderModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_0__directives_form_default_value_directive__["a" /* FormDefaultValueDirective */],
                __WEBPACK_IMPORTED_MODULE_9__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_8__services_item_listing_factory_service__["a" /* ItemListingFactoryService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddListingModule);
    return AddListingModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/add-listing.module.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_listing_add_listing_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_urls_config_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_helpers_date_provider_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_requester_options_factory_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_requester_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__items_items_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_navigation_hover_directive__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toastr_notification_options_factory_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__users_users_module__ = __webpack_require__(563);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_navigation_hover_directive__["a" /* NavigationHoverDirective */]
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
//# sourceMappingURL=D:/GitHub/killer-app/src/app.module.js.map

/***/ },

/***/ 547:
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
            template: __webpack_require__(743),
            styles: [".carousel-inner .item img {min-width:100%;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselListComponent);
    return CarouselListComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/carousel-list.component.js.map

/***/ },

/***/ 548:
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

/***/ 549:
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

/***/ 550:
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
            template: __webpack_require__(744),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/file-uploader.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(349);
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

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
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

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(546);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/GitHub/killer-app/src/index.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_list_carousel_list_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_item_single_item_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_collection_items_collection_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_routes__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_item_listing_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_storage_service__ = __webpack_require__(44);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__items_routes__["a" /* ItemsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__single_item_single_item_component__["a" /* SingleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__items_collection_items_collection_component__["a" /* ItemsCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__carousel_list_carousel_list_component__["a" /* CarouselListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_item_listing_service__["a" /* ItemListingService */],
                __WEBPACK_IMPORTED_MODULE_9__services_user_storage_service__["a" /* UserStorageService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsModule);
    return ItemsModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/items.module.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__single_item_single_item_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items_collection_items_collection_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
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
    { path: 'gallery/:id', component: __WEBPACK_IMPORTED_MODULE_0__single_item_single_item_component__["a" /* SingleItemComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_1__items_collection_items_collection_component__["a" /* ItemsCollectionComponent */] }
];
var ItemsRouterModule = (function () {
    function ItemsRouterModule() {
    }
    ItemsRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsRouterModule);
    return ItemsRouterModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/items.routes.js.map

/***/ },

/***/ 556:
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

/***/ 557:
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

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__ = __webpack_require__(44);
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
            template: __webpack_require__(748),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/navigation.component.js.map

/***/ },

/***/ 559:
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

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(400);
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
            template: __webpack_require__(749),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 561:
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
            template: __webpack_require__(751),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/facebook-login.component.js.map

/***/ },

/***/ 562:
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
            template: __webpack_require__(758),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.component.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_date_formatter_pipe__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_login_facebook_login_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hashing_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listed_items_listed_items_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_factory_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_routes__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_to_favorites_add_to_favorites_component__ = __webpack_require__(354);
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
                __WEBPACK_IMPORTED_MODULE_6__listed_items_listed_items_component__["a" /* ListedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__add_to_favorites_add_to_favorites_component__["a" /* AddToFavoritesComponent */]
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
//# sourceMappingURL=D:/GitHub/killer-app/src/users.module.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_favorites_add_to_favorites_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listed_items_listed_items_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(25);
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
//# sourceMappingURL=D:/GitHub/killer-app/src/users.routes.js.map

/***/ },

/***/ 565:
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

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/GitHub/killer-app/src/polyfills.js.map

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_date_provider_service__ = __webpack_require__(352);
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

/***/ 724:
/***/ function(module, exports) {

module.exports = ".submit-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .submit-wrapper > .inner-wrapper {\n    margin: 5vh; }\n\ninput {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 250px; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "label {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  label:hover {\n    font-size: 12px;\n    color: rgba(225, 225, 225, 0.77);\n    background-color: #494949;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\nlabel,\ninput {\n  width: 250px; }\n\nimg {\n  padding: 10px; }\n\n.well {\n  background-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-top: 25px; }\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = ".gallery-item {\n  min-width: 300px;\n  max-width: 500px;\n  float: left; }\n  .gallery-item a {\n    text-align: center; }\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\n@font-face {\n  font-family: noto;\n  src: url(\"../../assets/NotoSans-Regular.ttf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center;\n  font-size: 20px;\n  font-family: noto; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n  nav a.navbar-brand {\n    color: #fff;\n    font-family: planer;\n    font-size: 22px; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000; }\n  nav ul.dropdown-menu > li > a {\n    font-size: 1.5rem;\n    color: #444444; }\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = ".login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\ninput {\n  color: white;\n  background-color: #2f2f2f;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = "img {\n  box-shadow: 0 5px 20px black; }\n\n.list-group {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: transparent; }\n  .list-group .list-group-item {\n    border: none;\n    box-shadow: 0 5px 20px black;\n    background-color: transparent;\n    margin-bottom: 20px; }\n    .list-group .list-group-item .btn {\n      font-family: planer;\n      font-size: 17px;\n      background-color: transparent;\n      color: rgba(225, 225, 225, 0.77);\n      border: 1px solid rgba(225, 225, 225, 0.77);\n      border-radius: 0px;\n      box-shadow: 0 5px 20px black;\n      overflow: hidden; }\n      .list-group .list-group-item .btn:hover {\n        text-decoration: underline; }\n  .list-group .no-shadow {\n    box-shadow: none; }\n"

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = "input,\nbutton {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.77);\n  background-color: #2f2f2f;\n  border-radius: 0; }\n  input.ng-valid.ng-touched,\n  button.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched,\n  button.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\ninput,\nbutton {\n  width: 250px; }\n\nbutton.dropdown-toggle {\n  text-align: left; }\n\nbutton[type=\"submit\"]:hover {\n  text-decoration: underline; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = "<div class=\"submit-wrapper\">\r\n  <h2 id=\"component-header\">Submit Listing</h2>\r\n  <div class=\"inner-wrapper\">\r\n    <form *ngIf=\"!isLoading\" #submitForm=\"ngForm\" (ngSubmit)=\"onSubmit(); submitForm.reset()\">\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input type=\"text\" #ngMake=\"ngModel\" class=\"form-control\" name=\"make\" [(ngModel)]=\"itemListing.make\" placeholder=\"Make\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input type=\"text\" #ngModel=\"ngModel\" class=\"form-control\" name=\"model\" [(ngModel)]=\"itemListing.model\" placeholder=\"Model\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input appFormDefaultValue type=\"text\" #ngYear=\"ngModel\" class=\"form-control\" name=\"year\" [(ngModel)]=\"itemListing.year\" placeholder=\"Year\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input appFormDefaultValue type=\"text\" #ngPrice=\"ngModel\" class=\"form-control\" name=\"price\" [(ngModel)]=\"itemListing.price\" placeholder=\"Price\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input appFormDefaultValue type=\"text\" #ngEnginePower=\"ngModel\" class=\"form-control\" name=\"enginePower\" [(ngModel)]=\"itemListing.enginePower\" placeholder=\"Engine Power\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input type=\"text\" #ngExteriorColor=\"ngModel\" class=\"form-control\" name=\"exteriorColor\" [(ngModel)]=\"itemListing.exteriorColor\" placeholder=\"Exterior Color\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>\r\n          <input type=\"text\" #InteriorColor=\"ngModel\" class=\"form-control\" name=\"interiorColor\" [(ngModel)]=\"itemListing.interiorColor\" placeholder=\"Interior Color\">\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <app-file-uploader (onFileUpload)=\"onFileUpload($event)\"></app-file-uploader>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\r\n    <app-navigation></app-navigation>\r\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n     <!--Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n        <li [class.active]=\"i===0\" *ngFor=\"let item of mylist; let i = index\" data-target=\"#carousel-example-generic\"\r\n        [attr.data-slide-to]=\"i\">\r\n        </li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div  class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let item of mylist; let i=index\" class=\"item\" [class.active]=\"i===0\">\r\n            <img [attr.src]=\"item\">\r\n        </div>\r\n    </div>\r\n\r\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "<!--<label>\r\n  <input [id]=\"id\" type=\"file\" name=\"fileUpload\" (change)=\"updateLabel($event)\" multiple>\r\n  <label [for]=\"id\" class=\"file-upl-lb\">\r\n    <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span> {{labelText}}\r\n  </label>\r\n</label>-->\r\n<!-- app.component.html -->\r\n<label class=\"btn btn-default btn-file\">\r\n  Upload Image <input style=\"display: none;\" type=\"file\" ngFileSelect [options]=\"options\" (onUpload)=\"handleUpload($event)\" (beforeUpload)=\"beforeUpload($event)\" accept=\"image/*\">\r\n</label>\r\n<!-- drag & drop file example-->\r\n<style>\r\n  .file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n</style>\r\n<div ngFileDrop [options]=\"options\" (onUpload)=\"handleUpload($event)\" [ngClass]=\"{'file-over': hasBaseDropZoneOver}\" (onFileOver)=\"fileOverBase($event)\"\r\n  (beforeUpload)=\"beforeUpload($event)\">\r\n</div>\r\n\r\n<div *ngIf=\"uploadedFiles.length > 0\" class=\"well\" id=\"uploaded\">\r\n  <img *ngFor=\"let file of uploadedFiles \" [src]=\"file.imageUrl\" height=\"150px\" alt=\"image\">\r\n</div>"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\r\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\r\n</section>"

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let item of this.items\" class=\"gallery-item\">\r\n    <app-carousel *ngIf=\"this.item && this.item.pictures && this.item.pictures.length > 0\" [mylist]=\"this.item.pictures\"></app-carousel>\r\n    <a routerLink=\"{{item._id}}\">    \r\n        <h2>{{this.item.make}} {{this.item.model}} {{this.item.year}}</h2>\r\n    </a>\r\n</div>"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1>{{this.item.make}} {{this.item.model}} {{this.item.year}}</h1>    \r\n    <app-carousel *ngIf=\"this.item && this.item.pictures && this.item.pictures.length > 0\" [mylist]=\"this.item.pictures\"></app-carousel>\r\n    <!--<div *ngIf=\"!this.item && !this.item.pictures && !this.item.pictures.length > 0\"></div>-->\r\n    <h3>Engine power: {{this.item.enginePower}}hp</h3>\r\n    <h3>Exterior Color: {{this.item.exteriorColor}}</h3>\r\n    <h3>Interior Color: {{this.item.interiorColor}}</h3>\r\n    <h3>Price: ${{this.item.price}}</h3>\r\n\r\n    <!--TODO add right update link when ready-->\r\n\r\n    <a *ngIf=\"this.item.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}\">Update</a>\r\n\r\n    <!--TODO add right make offer link when ready-->\r\n\r\n    <a *ngIf=\"!this.item.isOwner\" class=\"btn btn-primary\" routerLink=\"/gallery/{{this.item._id}}\">Make Offer</a>\r\n</div>"

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\" (click)=\"setActiveItem()\" routerLink=\"/\">DREAMSTIME</a>\r\n  </div>\r\n  <!-- Collect the nav links, forms, and other content for toggling -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Gallery'\" (click)=\"setActiveItem('Gallery')\"><a routerLink=\"/gallery\">Gallery</a></li>\r\n      <li class=\"hvr-overline-reveal\" [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/submit\">Create</a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Profile</a></li>\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink='profile'>Settings</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li (click)=\"setActiveItem('None')\"><a routerLink=\"logout\">Logout</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n  <div class=\"row\" *ngIf=\"hasLoggedUser == false\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <h1>\r\n        <a routerLink=\"/\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n      <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\r\n      <h1>\r\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<p>\n  add-to-favorites works!\n</p>\n"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = "<p>\r\n  facebook-login works!\r\n</p>\r\n"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "<p>\r\n  favorites works!\r\n</p>\r\n"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "<p>\r\n  listed-items works!\r\n</p>\r\n"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <h2 id=\"component-header\">Sign In</h2>\r\n  <div class=\"inner-wrapper\">\r\n    <form *ngIf=\"isLoading === false\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(); loginForm.reset()\">\r\n      <div class=\"form-group\">\r\n        <label> \r\n          <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between</div>\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label> \r\n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between</div>\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\r\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\r\n      </div>\r\n    </form>\r\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\r\n  </div>\r\n</div>\r\n\r\n<!-- Carousel testing DELETE -->\r\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\r\n      <img [src]=\"img\" alt=\"slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>-->"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"content-left col-xs-6\">\r\n    <img [src]=\"user.image\" alt=\"profile image\" width=\"100%\">\r\n  </div>\r\n  <div class=\"content-right col-xs-6\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>{{user.username}}</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.email}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>{{user.firstName}} {{user.lastName}}</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.gender}}, {{user.age}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <p>Member since:</p>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <p>{{user.createdOn | dateFormatter}}</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item no-shadow row\">\r\n        <div class=\"row\">\r\n          <div class=\"column-left col-xs-6 text-left\">\r\n            <a appNavigationHover routerLink=\"/favorites\" class=\"btn btn-default col-xs-12\">\r\n              <span>View Favorites</span>\r\n            </a>\r\n          </div>\r\n          <div class=\"column-right col-xs-6 text-right\">\r\n            <a appNavigationHover routerLink=\"/listed-items\" class=\"btn btn-default col-xs-12\">\r\n              <span>View Listed Items</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "<h2>Registration Form</h2>\r\n<form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Username: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Password: </span>\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>First Name: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Last Name: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Age: </span>\r\n      <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\" required>\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"dropdown\">\r\n      <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          {{user.gender}}\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          Gender\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\r\n        <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\r\n        <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Email: </span>\r\n      <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Profile Image: </span>\r\n      <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <button class=\"form-control\" type=\"submit\">Register</button>\r\n    </label>\r\n  </div>\r\n</form>\r\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(420);


/***/ },

/***/ 83:
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

/***/ 84:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/user.service.js.map

/***/ }

},[782]);
//# sourceMappingURL=main.bundle.map