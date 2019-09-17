(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./src/app/level.ts":
/*!**************************!*\
  !*** ./src/app/level.ts ***!
  \**************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
var Level = /** @class */ (function () {
    function Level(where) {
        if (where == 0) {
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.title = "The Test";
            this.size = 5;
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.answer = [
                [0, 1, 1, 1, 0],
                [1, 1, 0, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 0, 1, 1],
                [0, 1, 1, 1, 0]
            ];
            this.answer_n = 19;
            this.hint_v = [[3], [5], [1, 1, 1], [5], [3]];
            this.hint_h = [[3], [2, 2], [5], [2, 2], [3]];
            this.time = 10;
        }
        else if (where == 1) {
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.title = "Get the Ball";
            this.size = 5;
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.answer = [
                [0, 1, 1, 1, 0],
                [1, 1, 1, 1, 1],
                [1, 1, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0]
            ];
            this.answer_n = 17;
            this.hint_v = [[3], [3, 1], [2, 1], [3, 1], [3]];
            this.hint_h = [[3], [5], [2, 2], [1, 1], [3]];
            this.time = 20;
        }
        else if (where == 2) {
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.title = "Try to Catch";
            this.size = 5;
            this.layout = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            this.answer = [
                [0, 1, 1, 1, 0],
                [1, 0, 1, 1, 0],
                [0, 1, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1]
            ];
            this.answer_n = 16;
            this.hint_v = [[1, 2], [1, 1, 1], [2, 1], [3, 1], [3]];
            this.hint_h = [[3], [1, 2], [1, 2], [1, 1], [5]];
            this.time = 30;
        }
        else if (where == 3) {
            this.layout = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.title = "Get It";
            this.size = 10;
            this.layout = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.answer = [
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
                [1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
            ];
            this.answer_n = 56;
            this.hint_v = [[10], [4, 2], [2, 2, 1], [1, 1, 2], [0], [2, 2], [1, 2, 3], [2, 2, 1], [4, 2], [10]];
            this.hint_h = [[4, 4], [3, 3], [2, 2, 2], [2, 1, 2, 2], [1, 1], [1, 1], [1, 2, 2, 1], [1, 2, 3, 1], [2, 2, 2], [3, 3]];
            this.time = 60;
        }
        else if (where == 4) {
            this.layout = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.title = "Let's Get Some Tea";
            this.size = 10;
            this.layout = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.answer = [
                [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
                [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
                [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
            ];
            this.answer_n = 60;
            this.hint_v = [[0], [7], [1, 6], [4, 5], [1, 1, 1, 1], [1, 2, 5], [4, 5], [1, 6], [7], [2]];
            this.hint_h = [[4], [2, 2], [1, 1, 2, 1], [1, 4, 1], [2, 2], [8], [3, 5], [3, 5], [3, 4], [6]];
            this.time = 80;
        }
    }
    return Level;
}());



/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.page */ "./src/app/play/play.page.ts");







var routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]
    }
];
var PlayPageModule = /** @class */ (function () {
    function PlayPageModule() {
    }
    PlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]]
        })
    ], PlayPageModule);
    return PlayPageModule;
}());



/***/ }),

/***/ "./src/app/play/play.page.html":
/*!*************************************!*\
  !*** ./src/app/play/play.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    #time {\r\n        text-align: center;\r\n        color: black;\r\n        font-size: 30px;\r\n        margin-top: 25px;\r\n    }\r\n    #time span{\r\n        display: inline-block;\r\n        width: 50px;\r\n        margin: 10px;\r\n        text-align: left;\r\n    }\r\n  .level{\r\n    text-align: center;\r\n    margin-top: 25px;\r\n    color: black\r\n  }\r\n  .tile{\r\n    display: inline-block;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n  .hint_h{\r\n    background-color: gainsboro;\r\n    border-top-left-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    padding-left: 5px;\r\n  }\r\n  .hint_h .row{\r\n    text-align: right;\r\n  }\r\n  .hint_h .tile{\r\n    width: 20px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n  }\r\n  .hint_v{\r\n    background-color: gainsboro;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    padding-top: 5px;\r\n  }\r\n  .hint_v .row{\r\n    display: inline-block;\r\n  }\r\n  .hint_v .tile{\r\n    display: block;\r\n    width: 50px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n  }\r\n  .answer .tile{\r\n    border: 1px solid gray;\r\n    border-collapse: collapse;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n  }\r\n  .tile p{\r\n    margin: 0;\r\n  }\r\n    #declaration {\r\n        text-align: center;\r\n        color: black;\r\n        font-size: 50px;\r\n        height: 50px;\r\n        margin-top: 50px;\r\n    }\r\n</style>\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title>Level {{global.level}} - {{level.title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"primary\">\r\n    <!-- DEBUG -->\r\n    <!--<div>Progress : {{right}} / {{level.answer_n}}</div>\r\n    <div>X : {{wrong}}</div>-->\r\n    <div id=\"time\"><img src=\"/../assets/icon/time.png\" style=\"height: 30px; width: auto; padding-top: 7px;\" /><span>{{timer}}</span></div>\r\n    <div class=\"level\">\r\n        <div class=\"hint_h\" style=\"display: inline-block\">\r\n            <div class=\"row\" *ngFor=\"let row of level.hint_h; let i = index\">\r\n                <div class=\"tile\" *ngFor=\"let num of row; let j = index\">\r\n                    <p>{{num}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"display: inline-block\">\r\n            <div class=\"hint_v\">\r\n                <div class=\"row\" *ngFor=\"let row of level.hint_v; let i = index\">\r\n                    <div class=\"tile\" *ngFor=\"let num of row; let j = index\">\r\n                        <p>{{num}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"answer\">\r\n                <div class=\"row\" *ngFor=\"let row of level.layout; let i = index\">\r\n                    <div class=\"tile\" [style.background-color]=\"level.layout[i][j] ? (level.layout[i][j] == 1   ? 'black' : 'yellow') : 'white'\" *ngFor=\"let tile of row; let j = index\" (click)=\"check(i, j)\">\r\n                        <!-- <p>{{tile}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"declaration\">\r\n        <div *ngIf=win>YOU WIN!!!</div>\r\n        <div *ngIf=lose>YOU LOSE!!!</div>\r\n    </div>\r\n    <ion-button *ngIf=\"win == true && max == false\" style=\"max-width: 60%; margin: auto; margin-top: 75px;\" expand=\"block\" (click)=\"next()\" routerDirection=\"back\" color=\"secondary\">Next >></ion-button>\r\n    <ion-button style=\"max-width: 60%; margin: auto; margin-top: 75px; margin-bottom: 75px;\" expand=\"block\" routerLink=\"/home\" routerDirection=\"back\" color=\"secondary\"><< Back</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/play/play.page.scss":
/*!*************************************!*\
  !*** ./src/app/play/play.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/play/play.page.ts":
/*!***********************************!*\
  !*** ./src/app/play/play.page.ts ***!
  \***********************************/
/*! exports provided: PlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPage", function() { return PlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../level */ "./src/app/level.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../crud.service */ "./src/app/crud.service.ts");






var PlayPage = /** @class */ (function () {
    function PlayPage(global, afAuth, crudService) {
        this.global = global;
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.saveusername = "";
        this.savepassword = "";
        this.level = new _level__WEBPACK_IMPORTED_MODULE_3__["Level"](this.global.level);
        this.right = 0;
        this.wrong = 0;
        this.win = false;
        this.lose = false;
        this.max = false;
        this.timer = this.level.time;
        this.startTimer();
    }
    PlayPage.prototype.startTimer = function () {
        var intervalVar = setInterval(function () {
            if (!this.lose && !this.win) {
                this.timer--;
                if (this.timer <= 0) {
                    this.lose = true;
                }
            }
        }.bind(this), 1000);
    };
    PlayPage.prototype.check = function (i, j) {
        if (!this.lose && !this.win) {
            if (this.level.layout[i][j] == 0 || this.level.layout[i][j] == 2) {
                this.level.layout[i][j] = 1;
                if (this.level.answer[i][j] == 1) {
                    this.right++;
                }
                else {
                    this.wrong++;
                }
            }
            else {
                this.level.layout[i][j] = 0;
                if (this.level.answer[i][j] == 1) {
                    this.right--;
                }
                else {
                    this.wrong--;
                }
            }
            this.answer_check();
        }
    };
    PlayPage.prototype.answer_check = function () {
        if (this.right == this.level.answer_n && this.wrong == 0) {
            this.win = true;
            if (this.global.level >= +this.global.progaccount) {
                var record = {};
                record['Name'] = this.global.useraccount;
                record['Password'] = this.global.passaccount;
                record['Progress'] = String(this.global.level + 1);
                this.crudService.update_Student(this.global.idaccount, record);
            }
        }
    };
    PlayPage.prototype.next = function () {
        if (this.global.level == 4) {
            this.max = true;
        }
        else {
            this.global.level = this.global.level + 1;
            this.level = new _level__WEBPACK_IMPORTED_MODULE_3__["Level"](this.global.level);
            this.right = 0;
            this.wrong = 0;
            this.win = false;
            this.lose = false;
            this.timer = this.level.time;
        }
    };
    PlayPage.prototype.ngOnInit = function () {
    };
    PlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.page.html */ "./src/app/play/play.page.html"),
            styles: [__webpack_require__(/*! ./play.page.scss */ "./src/app/play/play.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]])
    ], PlayPage);
    return PlayPage;
}());



/***/ })

}]);
//# sourceMappingURL=play-play-module.js.map