(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    #title {\r\n        text-align: center;\r\n        vertical-align: middle;\r\n        margin: 75px 0 75px 0;\r\n        font-family: 'Agency FB';\r\n    }\n    #title div{\r\n        display: inline-block;\r\n        margin: 0;\r\n    }\n</style>\n<!--<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content color=\"primary\">\n    <div class=\"ion-padding\" style=\"margin-top: 10%;\">\r\n        <div id=\"title\">\r\n            <div style=\"font-size: 100px;\">Pi<span style=\"color: saddlebrown;\">X</span></div>\r\n            <div style=\"font-size: 25px; color: azure;\">PUZZLE</div>\r\n        </div>\r\n\r\n        <div *ngIf=sign style=\"text-align:center\">\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"signinfunction()\" color=\"secondary\">Sign In</ion-button><br />\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"signupfunction()\" color=\"secondary\">Sign Up</ion-button><br />\r\n            <ion-label style=\"max-width: 500px; margin: auto; text-align: center\" position=\"fixed\" text-center text-wrap>{{text}}</ion-label>\r\n        </div>\r\n        <div *ngIf=page style=\"max-width: 500px; margin: auto;\" expand=\"block\" color=\"secondary\">\r\n            <ion-list>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Username</ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Password</ion-label>\r\n                    <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n            <ion-button *ngIf=signin fill=\"solid\" expand=\"block\" color=\"secondary\" (click)=\"login()\">Login</ion-button>\r\n            <ion-button *ngIf=signup fill=\"solid\" expand=\"block\" color=\"secondary\" (click)=\"register()\">Register</ion-button>\r\n            <ion-button fill=\"solid\" expand=\"block\" color=\"secondary\" (click)=\"backfunction()\">Back</ion-button>\r\n        </div>\r\n        <div *ngIf=default>\r\n            <ion-card style=\"max-width: 500px; margin:0 auto;\">\r\n                <ion-card-header>\r\n                    <ion-card-title>Welcome, {{global.useraccount}}</ion-card-title>\r\n                    <ion-card-subtitle>Progress: {{global.progaccount}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n            </ion-card>\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"start()\" routerLink=\"/play\" color=\"secondary\">Play</ion-button><br />\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"choose()\" color=\"secondary\">Select Level</ion-button><br />\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"logout()\" color=\"secondary\">Log Out</ion-button><br />\r\n        </div>\r\n        <div *ngIf=\"select\">\r\n            <div *ngFor=\"let row of global.levelstatus; let i = index\">\r\n                <ion-button *ngIf=row style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"selection(i)\" routerLink=\"/play\" color=\"secondary\" disabled>{{i}}</ion-button>\r\n                <ion-button *ngIf=!row style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"selection(i)\" routerLink=\"/play\" color=\"secondary\">{{i}}</ion-button>\r\n                <br>\r\n            </div>\r\n            <ion-button style=\"max-width: 500px; margin: auto;\" expand=\"block\" (click)=\"choose()\" color=\"secondary\">Back</ion-button><br />\r\n        </div>\r\n\r\n\r\n    </div>\n</ion-content>\n<!--<ion-content padding>\r\n\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input placeholder=\"Enter Username\" [(ngModel)]=\"userName\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input placeholder=\"Enter Password\" [(ngModel)]=\"userPassword\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input placeholder=\"Enter Progress\" [(ngModel)]=\"userProgress\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col text-center>\r\n                <ion-button (click)=\"CreateRecord()\" [disabled]=\"!userName || !userPassword || !userProgress\">\r\n                    <ion-icon size=\"small\" slot=\"icon-only\" name=\"add\"></ion-icon>\r\n                    &nbsp;Create Record\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-card *ngFor=\"let item of users\">\r\n        <span *ngIf=\"!item.isEdit; else elseBlock\">\r\n            <ion-card-header>\r\n                <ion-card-title>{{item.Name}} with {{item.Password}} Password</ion-card-title>\r\n                <ion-card-subtitle>Progress: {{item.Progress}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n\r\n                <ion-button shape=\"round\" color=\"secondary\" size=\"small\" (click)=\"EditRecord(item)\">\r\n                    <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\r\n\r\n                </ion-button>\r\n                <ion-button shape=\"round\" color=\"danger\" size=\"small\" (click)=\"RemoveRecord(item.id)\">\r\n                    <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n\r\n                </ion-button>\r\n            </ion-card-content>\r\n        </span>\r\n        <ng-template #elseBlock>\r\n            <ion-card-header>\r\n                <ion-card-title>\r\n                    <ion-grid>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                Edit\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-button fill=\"clear\" color=\"medium\" size=\"small\" (click)=\"item.isEdit = false\">\r\n                                    Cancel\r\n                                </ion-button>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-button fill=\"outline\" color=\"success\" size=\"small\" (click)=\"UpdateRecord(item)\">\r\n                                    Update\r\n                                </ion-button>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-item>\r\n                    <ion-label><strong>Name</strong></ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"item.EditName\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label><strong>Age</strong></ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"item.EditPassword\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label><strong>Address</strong></ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"item.EditProgress\"></ion-input>\r\n                </ion-item>\r\n            </ion-card-content>\r\n        </ng-template>\r\n    </ion-card>\r\n\r\n</ion-content>-->\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../crud.service */ "./src/app/crud.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(global, afAuth, crudService) {
        this.global = global;
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.text = "";
        this.username = "";
        this.password = "";
        this.saveusername = "";
        this.savepassword = "";
        this.default = false;
        this.select = false;
        this.sign = true;
        this.page = false;
        this.saveusername = "";
        this.savepassword = "";
    }
    //ngOnInit() {
    //    this.crudService.read_Students().subscribe(data => {
    //        this.users = data.map(e => {
    //            return {
    //                id: e.payload.doc.id,
    //                isEdit: false,
    //                Name: e.payload.doc.data()['Name'],
    //                Password: e.payload.doc.data()['Password'],
    //                Progress: e.payload.doc.data()['Progress'],
    //            };
    //        })
    //        console.log(this.users);
    //    });
    //}
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.crudService.read_Students().subscribe(function (data) {
            _this.users = data.map(function (e) {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Password: e.payload.doc.data()['Password'],
                    Progress: e.payload.doc.data()['Progress'],
                };
            });
            console.log(_this.users);
        });
    };
    HomePage.prototype.CreateRecord = function () {
        var _this = this;
        var record = {};
        record['Name'] = this.userName;
        record['Password'] = this.userPassword;
        record['Progress'] = this.userProgress;
        this.crudService.create_NewStudent(record).then(function (resp) {
            _this.userName = "";
            _this.userPassword = undefined;
            _this.userProgress = 0;
            console.log(resp);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.RemoveRecord = function (rowID) {
        this.crudService.delete_Student(rowID);
    };
    HomePage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditPassword = record.Password;
        record.EditProgress = record.Progress;
    };
    HomePage.prototype.UpdateRecord = function (recordRow) {
        var record = {};
        record['Name'] = recordRow.EditName;
        record['Password'] = recordRow.EditPassword;
        record['Progress'] = recordRow.EditProgress;
        this.crudService.update_Student(recordRow.id, record);
        recordRow.isEdit = false;
    };
    HomePage.prototype.setLevel = function (level) {
        this.global.level = level;
    };
    HomePage.prototype.choose = function () {
        if (this.select == true) {
            this.default = true;
            this.select = false;
        }
        else {
            this.select = true;
            this.default = false;
        }
    };
    HomePage.prototype.selection = function (number) {
        this.global.level = number;
    };
    HomePage.prototype.start = function () {
        this.global.level = 0;
    };
    HomePage.prototype.signinfunction = function () {
        this.signin = true;
        this.signup = false;
        this.sign = false;
        this.page = true;
        this.default = false;
        this.text = "";
        this.username = "";
        this.password = "";
    };
    HomePage.prototype.signupfunction = function () {
        this.signup = true;
        this.signin = false;
        this.sign = false;
        this.page = true;
        this.default = false;
        this.text = "";
        this.username = "";
        this.password = "";
    };
    HomePage.prototype.backfunction = function () {
        //this.signup = false;
        //this.signin = false;
        this.sign = true;
        this.page = false;
        this.text = "";
        this.username = "";
        this.password = "";
    };
    // abcdef + @gmail.com
    HomePage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, username, password, res, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, username = _a.username, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password)];
                    case 2:
                        res = _b.sent();
                        console.log("Success");
                        this.default = true;
                        this.page = false;
                        this.sign = false;
                        this.saveusername = username;
                        this.savepassword = password;
                        this.crudService.read_Students().subscribe(function (data) {
                            _this.users = data.map(function (e) {
                                if (e.payload.doc.data()['Name'] == _this.saveusername) {
                                    if (e.payload.doc.data()['Password'] == _this.savepassword) {
                                        _this.global.idaccount = e.payload.doc.id;
                                        _this.global.useraccount = e.payload.doc.data()['Name'];
                                        _this.global.passaccount = e.payload.doc.data()['Password'];
                                        _this.global.progaccount = e.payload.doc.data()['Progress'];
                                        for (var i = 0; i < 5; i++) {
                                            if (i > +_this.global.progaccount) {
                                                _this.global.levelstatus[i] = true;
                                            }
                                            else {
                                                _this.global.levelstatus[i] = false;
                                            }
                                        }
                                        return {
                                            id: e.payload.doc.id,
                                            isEdit: false,
                                            Name: e.payload.doc.data()['Name'],
                                            Password: e.payload.doc.data()['Password'],
                                            Progress: e.payload.doc.data()['Progress'],
                                        };
                                    }
                                }
                            });
                            console.log(_this.users);
                        });
                        this.username = "";
                        this.password = "";
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        this.page = false;
                        this.sign = true;
                        if (err_1.code === "auth/user-not-found") {
                            console.log("User not found");
                            this.text = "User Not Found, Please Try Again!";
                        }
                        this.username = "";
                        this.password = "";
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, username, password, rest, record, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, username = _a.username, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)];
                    case 2:
                        rest = _b.sent();
                        console.log(rest);
                        this.page = false;
                        this.sign = true;
                        this.text = "Success Register, Please Sign In!";
                        record = {};
                        record['Name'] = this.username;
                        record['Password'] = this.password;
                        record['Progress'] = 0;
                        this.crudService.create_NewStudent(record).then(function (resp) {
                            _this.userName = "";
                            _this.userPassword = undefined;
                            _this.userProgress = 0;
                            console.log(resp);
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                        this.username = "";
                        this.password = "";
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        this.text = "Failed to Register, Please Try Again!";
                        this.username = "";
                        this.password = "";
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        this.default = false;
        this.select = false;
        this.sign = true;
        this.page = false;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map