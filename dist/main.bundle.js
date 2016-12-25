webpackJsonp([0,4],{

/***/ 153:
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
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notification.service.js.map

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(529);
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

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_storage_service__ = __webpack_require__(68);
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
        this.httpService = httpService;
        this.userStorage = userStorage;
        this.appRouter = appRouter;
        this.contentTypeHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.registerUser = function (user) {
        return this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
    };
    UserService.prototype.loginUser = function (user) {
        return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
    };
    // Using Cookies 
    // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
    UserService.prototype.getUserDetails = function (token) {
        return this.httpService.get('/api/users');
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

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(729);
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

/***/ 221:
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

/***/ 339:
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
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.component.js.map

/***/ },

/***/ 340:
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
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/home.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(155);
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
            template: __webpack_require__(709),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/login.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__ = __webpack_require__(68);
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
            template: __webpack_require__(710),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/logout.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(155);
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
        var cookie = this.userStorage.getLoggedUser();
        var token = cookie.auth_token;
        this.userService.getUserDetails(token)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.user = response;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(711),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/profile.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(155);
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
            var message = 'Successful registration.';
            var heading = 'Yay!';
            var toastrNotificationOptions = _this.toastrNotificationOptionsFactoryService
                .createToastrNotificationOptions(method, message, heading);
            _this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            _this.isLoading = false;
            var method = 'error';
            var message = 'Please try again.';
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
            template: __webpack_require__(712),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hashing_service__["a" /* HashingService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/register.component.js.map

/***/ },

/***/ 403:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(528);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/GitHub/killer-app/src/main.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toastr_notification_options_factory_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toastr_notification_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toastr_notifications_handler_toastr_notifications_handler_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_users_module__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_storage_service__ = __webpack_require__(68);
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
                __WEBPACK_IMPORTED_MODULE_12__toastr_notifications_handler_toastr_notifications_handler_component__["a" /* ToastrNotificationsHandlerComponent */]
            ],
            imports: [
                // MockedModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_10__services_toastr_notification_options_factory_service__["a" /* ToastrNotificationOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_11__services_toastr_notification_service__["a" /* ToastrNotificationService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_storage_service__["a" /* UserStorageService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/app.module.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_routes__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(340);
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

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
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

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(525);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/GitHub/killer-app/src/index.js.map

/***/ },

/***/ 529:
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

/***/ 530:
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
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_storage_service__["a" /* UserStorageService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/navigation.component.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(384);
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
    }
    ToastrNotificationsHandlerComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.viewContainerRef);
    };
    ToastrNotificationsHandlerComponent.prototype.ngDoCheck = function () {
        var _loop_1 = function() {
            var that = this_1;
            var nextToast = this_1.toastrNotificationService.nextNotificationInQueue;
            setTimeout(function () {
                that.toastr.setRootViewContainerRef(that.viewContainerRef);
                that.toastr[nextToast.method](nextToast.message, nextToast.heading);
            }, nextToast.delay);
        };
        var this_1 = this;
        while (this.toastrNotificationService.hasNotificationsInQueue) {
            _loop_1();
        }
    };
    ToastrNotificationsHandlerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toastr-notifications-handler',
            template: __webpack_require__(707),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_toastr_notification_service__["a" /* ToastrNotificationService */]) === 'function' && _c) || Object])
    ], ToastrNotificationsHandlerComponent);
    return ToastrNotificationsHandlerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/toastr-notifications-handler.component.js.map

/***/ },

/***/ 532:
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
            template: __webpack_require__(708),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/facebook-login.component.js.map

/***/ },

/***/ 533:
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
            template: __webpack_require__(713),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.component.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facebook_login_facebook_login_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hashing_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_factory_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_routes__ = __webpack_require__(535);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__users_routes__["a" /* UsersRouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__facebook_login_facebook_login_component__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_component__["a" /* UsersComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_user_factory_service__["a" /* UserFactoryService */],
                __WEBPACK_IMPORTED_MODULE_3__services_hashing_service__["a" /* HashingService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.module.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logout_logout_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(56);
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
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'facebook-login', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_0__logout_logout_component__["a" /* LogoutComponent */] }
];
var UsersRouterModule = (function () {
    function UsersRouterModule() {
    }
    UsersRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModule);
    return UsersRouterModule;
}());
//# sourceMappingURL=D:/GitHub/killer-app/src/users.routes.js.map

/***/ },

/***/ 536:
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

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/GitHub/killer-app/src/polyfills.js.map

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_services_cookies_service__ = __webpack_require__(345);
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

/***/ 694:
/***/ function(module, exports) {

module.exports = "div#content {\n  min-height: 60vh;\n  padding: 25px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0.33);\n  box-shadow: 0 5px 20px black;\n  color: rgba(225, 225, 225, 0.77); }\n"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "section img {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7); }\n"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "@font-face {\n  font-family: planer;\n  src: url(\"../../assets/Planer-Regular.otf\"); }\n\nnav {\n  margin-top: 1.5%;\n  padding-left: 10px;\n  padding-right: 25px;\n  border: none;\n  box-shadow: 0 5px 25px #000000;\n  background-color: rgba(0, 0, 0, 0.33);\n  text-align: center; }\n  nav .btn-default {\n    color: rgba(225, 225, 225, 0.77);\n    background-color: transparent;\n    border: none;\n    font-size: 24px;\n    margin-top: 0px; }\n  nav h1.app-heading {\n    color: rgba(225, 225, 225, 0.77);\n    font-family: planer;\n    letter-spacing: 1em;\n    margin-top: 0px; }\n  nav a.navbar-brand {\n    font-family: planer;\n    font-size: 22px; }\n  nav li > a {\n    font-family: planer;\n    font-size: 20px; }\n  nav li.active > a,\n  nav li.open > a {\n    background-color: rgba(51, 51, 51, 0.33) !important;\n    box-shadow: 0 1px 15px #000000;\n    font-family: planer;\n    font-size: 20px; }\n"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = ".login-wrapper {\n  text-align: center;\n  min-height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap; }\n  .login-wrapper > .inner-wrapper {\n    margin-top: auto;\n    margin-bottom: auto; }\n\n#component-header {\n  margin: 0;\n  padding: 2vh 0;\n  color: #e6e6e6;\n  background-color: #848484; }\n\ninput {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.77);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  input.ng-valid.ng-touched {\n    border-color: #55b559; }\n  input.ng-invalid.ng-touched {\n    border-color: #F55145; }\n\n.btn.btn-success {\n  background-color: #55b559; }\n\n.invalid-input-msg {\n  padding: 10px 7.5px;\n  font-size: 1.2rem;\n  color: #FFFEFE;\n  background-color: #F55145;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 700:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "input {\n  background-color: rgba(0, 0, 0, 0.77); }\n\n#loading {\n  display: block;\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = "<div id=\"root\" class=\"container\">\r\n    <app-navigation></app-navigation>\r\n    <app-toastr-notifications-handler></app-toastr-notifications-handler>\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = "<section id=\"header\">\r\n  <img src=\"../../assets/home-bg6.jpg\" alt=\"logo\" width=\"100%\">\r\n  <a routerLink=\"mock\"  class=\"btn <btn-warning></btn-warning>\">Click FFS</a>\r\n</section>"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n      aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\">DREAMSTIME</a>\r\n  </div>\r\n  <!-- Collect the nav links, forms, and other content for toggling -->\r\n  <div *ngIf=\"hasLoggedUser == true\" class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li [class.active]=\"activeItem === 'Home'\" (click)=\"setActiveItem('Home')\"><a routerLink=\"/\">Home</a></li>\r\n      <li [class.active]=\"activeItem === 'Gallery'\" (click)=\"setActiveItem('Gallery')\"><a routerLink=\"/\">Gallery</a></li>\r\n      <li [class.active]=\"activeItem === 'Create'\" (click)=\"setActiveItem('Create')\"><a routerLink=\"/\">Create</a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{loggedUserName}}<span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a routerLink='profile'>Profile</a></li>\r\n          <li><a href=\"#\">Settings</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li><a routerLink=\"logout\">Logout</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n  <div class=\"row\" *ngIf=\"hasLoggedUser == false\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <h1>\r\n        <a routerLink=\"/\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n      <h1 class=\"app-heading col-xs-10\">DREAMSTIME</h1>\r\n      <h1>\r\n        <a routerLink=\"/login\" class=\"btn btn-default navbar-btn col-xs-1\" aria-label=\"Left Align\">\r\n          <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>\r\n        </a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = "<p>\r\n  facebook-login works!\r\n</p>\r\n"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <h2 id=\"component-header\">Sign In</h2>\r\n  <div class=\"inner-wrapper\">\r\n    <form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(); registerForm.reset()\">\r\n      <div class=\"form-group\">\r\n        <label> \r\n      <input #ngName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"4\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n      <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngName.valid || ngName.untouched\">Your username must be between</div>\r\n    </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label> \r\n          <input #ngPass=\"ngModel\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"6\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n          <div class=\"invalid-input-msg animated jello\" [hidden]=\"ngPass.valid || ngPass.untouched\">Your password must be between</div>\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" [disabled]=\"ngPass.invalid || ngName.invalid\" type=\"submit\">Submit</button>\r\n        <a routerLink='/register' class=\"btn btn-primary\">Register</a>\r\n      </div>\r\n    </form>\r\n    <img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />\r\n  </div>\r\n</div>\r\n\r\n<!-- Carousel testing DELETE -->\r\n<!--<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li *ngFor=\"let img of images; let i = index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" [class.active]=\"i===1\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div *ngFor=\"let img of images; let i = index\" class=\"item\" [class.active]=\"i===1\">\r\n      <img [src]=\"img\" alt=\"slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>-->"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<img [src]=\"user.image\" alt=\"profile image\" width=\"200px\">\r\n"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<h2>Registration Form</h2>\r\n<form *ngIf=\"isLoading === false\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Username: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter your username\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Password: </span>\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter your password\" required minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>First Name: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Enter your first name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Last Name: </span>\r\n      <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Enter your last name\" minlength=\"3\" maxlength=\"30\" pattern=\"[a-zA-Z0-9\\-_]*\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Age: </span>\r\n      <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" placeholder=\"Enter your age\" min=\"0\" max=\"120\" required>\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"dropdown\">\r\n      <button *ngIf=\"user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          {{user.gender}}\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <button *ngIf=\"!user.gender\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"gender-select\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"true\" name=\"gender\">\r\n          Gender\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\" aria-labelledby=\"gender-select\">\r\n        <li (click)=\"onGenderSelect('Male')\"><a>Male</a></li>\r\n        <li (click)=\"onGenderSelect('Female')\"><a>Female</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Email: </span>\r\n      <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your email\" required>\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> \r\n      <span>Profile Image: </span>\r\n      <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"user.image\" placeholder=\"Enter an url to your profile image\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <button class=\"form-control\" type=\"submit\">Register</button>\r\n    </label>\r\n  </div>\r\n</form>\r\n<img *ngIf=\"isLoading === true\" id=\"loading\" src=\"../../../assets/load.gif\" alt=\"Be patient...\" width=\"50px\" />"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ }

},[735]);
//# sourceMappingURL=main.bundle.map