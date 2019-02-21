(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addOptionHead{width:33%;display: inline-block; padding: 15px;background: #444444;color: white;font-size: 16px;}\r\n.nonselected{border-bottom:none;}\r\n.selected{border-bottom: 3px solid white}\r\n.mains{position: relative;height:100%;width:100%;min-height:100%;overflow: hidden;}\r\n.mainHeader{position: relative;text-align:center;background: #444444;height:9%;width:100%;min-height:9%;}\r\n.mainBody{position: relative;border:1px solid red;height:53%;width:100%;min-height:53%;padding-top:40%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLENBQUMscUJBQXFCLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUM7QUFDL0csYUFBYSxrQkFBa0IsQ0FBQztBQUNoQyxVQUFVLDhCQUE4QjtBQUN4QyxPQUFPLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0FBQ2xGLFlBQVksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDeEcsVUFBVSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRPcHRpb25IZWFke3dpZHRoOjMzJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDE1cHg7YmFja2dyb3VuZDogIzQ0NDQ0NDtjb2xvcjogd2hpdGU7Zm9udC1zaXplOiAxNnB4O31cclxuLm5vbnNlbGVjdGVke2JvcmRlci1ib3R0b206bm9uZTt9XHJcbi5zZWxlY3RlZHtib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGV9XHJcbi5tYWluc3twb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcbi5tYWluSGVhZGVye3Bvc2l0aW9uOiByZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiAjNDQ0NDQ0O2hlaWdodDo5JTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6OSU7fVxyXG4ubWFpbkJvZHl7cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlcjoxcHggc29saWQgcmVkO2hlaWdodDo1MyU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjUzJTtwYWRkaW5nLXRvcDo0MCU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='./app.component.css' />\n<div class='mains' [appHighlight]='headerName[0]'>\n  <div class='mainHeader' *ngIf=\"service.headerShow\">\n    <div class='col-sm-3 addOptionHead' [ngClass]=\"service.headerOne\" (click)='headerClick($event)'>\n          {{headerName[0]}}\n    </div>\n    <div class='col-sm-3 addOptionHead' [ngClass]=\"service.headerTwo\" (click)='headerClick($event)'>\n        {{headerName[1]}}\n    </div>\n    <div class='col-sm-3 addOptionHead' [ngClass]=\"service.headerThree\" (click)='headerClick($event)'>\n        {{headerName[2]}}\n    </div>\n  </div>\n\n\n  <div style='width: 100%;height: 100%;min-height: 100%;position: relative;'>\n    <app-left-menu  *ngIf=\"service.oneBool\" [@fadeAnimation]></app-left-menu>\n    <app-middle-menu  *ngIf=\"service.twoBool\" [@fadeAnimation]></app-middle-menu>\n    <app-right-menu  *ngIf=\"service.threeBool\" [@fadeAnimation]></app-right-menu>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hompageAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hompageAnimation */ "./src/app/hompageAnimation.ts");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-value.service */ "./src/app/share-value.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(serve) {
        this.title = 'calling';
        this.headerName = ['연락처', '홈', '통화기록'];
        this.service = serve;
    }
    AppComponent.prototype.headerClick = function (event) {
        var _this = this;
        this.service.headerOne = 'nonselected';
        this.service.headerTwo = 'nonselected';
        this.service.headerThree = 'nonselected';
        this.service.oneBool = false;
        this.service.twoBool = false;
        this.service.threeBool = false;
        this.headerName.forEach(function (element, index) {
            if (element == event.srcElement.innerHTML.trim()) {
                switch (index) {
                    case 0:
                        _this.service.headerOne = 'selected';
                        _this.service.oneBool = true;
                        break;
                    case 1:
                        _this.service.headerTwo = 'selected';
                        _this.service.twoBool = true;
                        break;
                    default:
                        _this.service.headerThree = 'selected';
                        _this.service.threeBool = true;
                        break;
                }
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_hompageAnimation__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_value_service__WEBPACK_IMPORTED_MODULE_3__["ShareValueService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-menu/left-menu.component */ "./src/app/left-menu/left-menu.component.ts");
/* harmony import */ var _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-menu/right-menu.component */ "./src/app/right-menu/right-menu.component.ts");
/* harmony import */ var _middle_menu_middle_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middle-menu/middle-menu.component */ "./src/app/middle-menu/middle-menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _call_screen_call_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call-screen/call-screen.component */ "./src/app/call-screen/call-screen.component.ts");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share-value.service */ "./src/app/share-value.service.ts");
/* harmony import */ var _mobile_touch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mobile-touch */ "./src/app/mobile-touch.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_5__["LeftMenuComponent"],
                _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_6__["RightMenuComponent"],
                _middle_menu_middle_menu_component__WEBPACK_IMPORTED_MODULE_7__["MiddleMenuComponent"],
                _call_screen_call_screen_component__WEBPACK_IMPORTED_MODULE_9__["CallScreenComponent"],
                _mobile_touch__WEBPACK_IMPORTED_MODULE_11__["TouchDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [_share_value_service__WEBPACK_IMPORTED_MODULE_10__["ShareValueService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call-screen/call-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/call-screen/call-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dangerOver:active{opacity:0.35;background:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbC1zY3JlZW4vY2FsbC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsWUFBWSxDQUFDLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY2FsbC1zY3JlZW4vY2FsbC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nZXJPdmVyOmFjdGl2ZXtvcGFjaXR5OjAuMzU7YmFja2dyb3VuZDp3aGl0ZTt9Il19 */"

/***/ }),

/***/ "./src/app/call-screen/call-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/call-screen/call-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='callBack' class='{{classTwo}}' style='padding:10px;padding-top:20px;background-image: url(\"assets/img/background.jpg\");background-size: cover;height: 100%;width: 100%;text-align: center;    background-color: rgba(255,255,255,0.3);background-blend-mode: lighten;'>\r\n    <div style='text-align: left;padding-left: 10px;color: white;font-weight: bold'>발신전화 {{callCount}}초</div>\r\n    <div style='height: 69%;padding: 5%;'>\r\n\t    <img src='{{phoneImg}}' style='width: 50%;height: 50%;display: inline-block;border-radius: 50%;max-width: 200px;max-height: 200px;border: 2px solid #9d9bff;padding: 5px;'>\r\n        <div style='font-size: 35px;font-weight: bold;color: #f3f3f3;'>{{phoneNumber}}</div>\r\n        <div style='font-size: 30px;font-weight: bold;color: #f3f3f3;'>{{phoneName}}</div>\r\n        <img src='assets/img/calling.gif' style='width:35%;height:35%;display: inline-block;'>\r\n    </div>\r\n    \r\n    <div style='height: 30%;padding: 5%;'>\r\n    <button class=\"btn btn-danger dangerOver\" (click)='sendToEventMyParent()' style='border-radius: 50%;width:80px;height:80px;'>\r\n            <img src='assets/img/pne.png' style='width:30px;height:35px'>\r\n    </button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/call-screen/call-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/call-screen/call-screen.component.ts ***!
  \******************************************************/
/*! exports provided: CallScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallScreenComponent", function() { return CallScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-value.service */ "./src/app/share-value.service.ts");



var CallScreenComponent = /** @class */ (function () {
    function CallScreenComponent(serve) {
        this.sendToEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classTwo = 'onhide';
        this.service = serve;
        this.callCount = 0;
    }
    CallScreenComponent.prototype.ngOnInit = function () {
    };
    CallScreenComponent.prototype.sendToEventMyParent = function () {
        console.log(this.phoneNumber);
        this.classTwo = 'onhide';
        this.sendToEvent.emit("IM_HIDE");
        this.service.headerShow = true;
        this.phoneNumber = null;
        this.service.imWorking = false;
    };
    CallScreenComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.phoneNumber != undefined && changes.phoneNumber != null && changes.phoneNumber.currentValue != null && changes.phoneNumber.currentValue.length >= 1) {
            this.service.imWorking = true;
            this.interval = setInterval(function () {
                if (_this.callCount >= 60) {
                    clearInterval(_this.interval);
                    _this.callCount = 0;
                    _this.sendToEventMyParent();
                }
                else {
                    _this.callCount++;
                }
            }, 1000);
        }
        else {
            if (this.interval != undefined && this.interval != null) {
                clearInterval(this.interval);
                this.callCount = 0;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallScreenComponent.prototype, "classTwo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallScreenComponent.prototype, "phoneNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallScreenComponent.prototype, "phoneName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallScreenComponent.prototype, "phoneImg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallScreenComponent.prototype, "sendToEvent", void 0);
    CallScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-screen',
            template: __webpack_require__(/*! ./call-screen.component.html */ "./src/app/call-screen/call-screen.component.html"),
            styles: [__webpack_require__(/*! ./call-screen.component.css */ "./src/app/call-screen/call-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_value_service__WEBPACK_IMPORTED_MODULE_2__["ShareValueService"]])
    ], CallScreenComponent);
    return CallScreenComponent;
}());



/***/ }),

/***/ "./src/app/hompageAnimation.ts":
/*!*************************************!*\
  !*** ./src/app/hompageAnimation.ts ***!
  \*************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.15s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.15s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/left-menu/left-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader{position: relative;text-align:center;background: #444444;height:9%;width:100%;min-height:9%;}\r\n.mainBody{position: relative;height:99%;width:100%;min-height:90%;padding-top:1%;}\r\n.items{ padding: 5px;font-size: 18px;font-weight: bold;border-bottom: 1px solid #bbbbbb;margin-bottom:4px;}\r\n.items div{display:inline-block;}\r\n.itemName{ \r\n    font-size: 20px; font-weight: bold;\r\n    width: 50px;height: 50px;text-align: center;border: 1px solid #bbbbbb;\r\n    border-radius: 50%;line-height: 47px;display:inline-block;color: #f35626;\r\n    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -webkit-animation: hue 30s infinite linear;\r\n}\r\n@-webkit-keyframes hue {\r\n    from {\r\n      -webkit-filter: hue-rotate(0deg);\r\n    }\r\n\r\n    to {\r\n      -webkit-filter: hue-rotate(360deg);\r\n    }\r\n}\r\n.clickName{margin-left: 8px;font-size: 20px;color:#3a3a3a;\r\n    font-weight: bold;\r\n  }\r\n.phoneDiv{\r\n    width: 50px;height: 50px;text-align: center;border: 1px solid #bbbbbb;\r\n    border-radius: 50%;line-height: 47px;\r\n    float:right;background:#00b700;\r\n}\r\n.items:active{\r\n  background:gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1tZW51L2xlZnQtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDeEcsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDakYsUUFBUSxZQUFZLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdDQUFnQyxDQUFDLGlCQUFpQixDQUFDO0FBQzFHLFdBQVcsb0JBQW9CLENBQUM7QUFDaEM7SUFDSSxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMseUJBQXlCO0lBQ3JFLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWM7SUFDeEUsa0VBQWtFO0lBQ2xFLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsMENBQTBDO0FBQzlDO0FBQ0E7SUFDSTtNQUNFLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLGtDQUFrQztJQUNwQztBQUNKO0FBQ0EsV0FBVyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsYUFBYTtJQUNyRCxpQkFBaUI7RUFDbkI7QUFDRjtJQUNJLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMseUJBQXlCO0lBQ3JFLGtCQUFrQixDQUFDLGlCQUFpQjtJQUNwQyxXQUFXLENBQUMsa0JBQWtCO0FBQ2xDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbGVmdC1tZW51L2xlZnQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5IZWFkZXJ7cG9zaXRpb246IHJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6ICM0NDQ0NDQ7aGVpZ2h0OjklO3dpZHRoOjEwMCU7bWluLWhlaWdodDo5JTt9XHJcbi5tYWluQm9keXtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0Ojk5JTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6OTAlO3BhZGRpbmctdG9wOjElO31cclxuLml0ZW1zeyBwYWRkaW5nOiA1cHg7Zm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiBib2xkO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO21hcmdpbi1ib3R0b206NHB4O31cclxuLml0ZW1zIGRpdntkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcbi5pdGVtTmFtZXsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXI6IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO2xpbmUtaGVpZ2h0OiA0N3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiAjZjM1NjI2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTJkZWcsICNmMzU2MjYsICNmZWFiM2EpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaHVlIDMwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGh1ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbi5jbGlja05hbWV7bWFyZ2luLWxlZnQ6IDhweDtmb250LXNpemU6IDIwcHg7Y29sb3I6IzNhM2EzYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuLnBob25lRGl2e1xyXG4gICAgd2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXI6IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO2xpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZDojMDBiNzAwO1xyXG59XHJcbi5pdGVtczphY3RpdmV7XHJcbiAgYmFja2dyb3VuZDpncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/left-menu/left-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='mainBody'>\n  <div class='{{classOne}}' style='overflow-y: auto; overflow-x: hidden;height: 90%;'>\n      <div class='items' *ngFor=\"let item of list\" (click)='call(item.key)'>\n          <div class='itemName'>{{item.main}}</div>\n          <div class='clickName'>{{item.name}}</div>\n          <div class='phoneDiv' style=''>\n            <img src='assets/img/pne.png' style='width: 25px;height: 25px;'>\n          </div>\n        </div>\n  </div>\n  <app-call-screen [classTwo]='classTwo' [phoneNumber] = 'targetNumber' [phoneName] = 'targetName' [phoneImg] = 'targetImg'  (sendToEvent)='receiveEvent($event)'></app-call-screen>\n</div>\n\n"

/***/ }),

/***/ "./src/app/left-menu/left-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.ts ***!
  \**************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-value.service */ "./src/app/share-value.service.ts");



var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(serve) {
        this.list = [];
        this.classOne = 'onshow';
        this.classTwo = 'onhide';
        this.targetNumber = null;
        this.targetName = null;
        this.targetImg = null;
        this.list.push({ name: '할머니', number: '010-1234-5678', main: '할', key: 0, path: 'assets/familly/gm1.png' });
        this.list.push({ name: '할아버지', number: '010-2665-6789', main: '할', key: 1, path: 'assets/familly/gf1.png' });
        this.list.push({ name: '외할머니', number: '010-1552-3345', main: '외', key: 2, path: 'assets/familly/gm2.png' });
        this.list.push({ name: '외할아버지', number: '010-1773-3345', main: '외', key: 3, path: 'assets/familly/gf2.png' });
        this.list.push({ name: '엄마', number: '010-1784-9245', main: '엄', key: 4, path: 'assets/familly/mother.png' });
        this.list.push({ name: '아빠', number: '010-1151-2345', main: '아', key: 5, path: 'assets/familly/father.png' });
        this.list.push({ name: '큰엄마', number: '010-2278-3325', main: '큰', key: 6, path: 'assets/familly/aunt.png' });
        this.list.push({ name: '큰아빠', number: '010-3193-3145', main: '큰', key: 7, path: 'assets/familly/uncle.png' });
        this.list.push({ name: '사촌동생', number: '010-4215-3348', main: '사', key: 8, path: 'assets/familly/ssu.png' });
        this.list.push({ name: '뽀로로', number: '010-5311-3346', main: '뽀', key: 9, path: 'assets/familly/ppo.png' });
        this.list.push({ name: '코야', number: '010-8451-3345', main: '코', key: 10, path: 'assets/familly/kkoya.png' });
        this.list.push({ name: '아기상어', number: '010-7211-3345', main: '아', key: 11, path: 'assets/familly/shark.png' });
        this.list.push({ name: '콩이', number: '010-9211-421', main: '아', key: 12, path: 'assets/familly/kkong.png' });
        this.service = serve;
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
    };
    LeftMenuComponent.prototype.call = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(key);
                        this.classOne = "onhide";
                        this.classTwo = "onshow";
                        return [4 /*yield*/, this.list.forEach(function (val) {
                                if (val.key == key) {
                                    _this.targetNumber = val.number;
                                    _this.targetName = val.name;
                                    _this.targetImg = val.path;
                                    _this.service.headerShow = false;
                                    _this.service.audio.load();
                                    _this.service.audio.play();
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //콜백 이벤트
    LeftMenuComponent.prototype.receiveEvent = function (event) {
        this.service.headerShow = true;
        this.classOne = "onshow";
        this.classTwo = "onhide";
        this.service.audio.pause();
    };
    LeftMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/left-menu/left-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_value_service__WEBPACK_IMPORTED_MODULE_2__["ShareValueService"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/middle-menu/middle-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/middle-menu/middle-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader{position: relative;text-align:center;background: #444444;height:9%;width:100%;min-height:9%;}\r\n.mainBody{position: relative;height:42%;width:100%;min-height:42%;padding-top:40%;}\r\n.mainFooter1{position: relative;height:39%;width:100%;min-height:39%;text-align:center;background: #f7f7f7;\tpadding-top:3px;}\r\n.mainFooter2{position: relative;height:13%;width:100%;min-height:13%;text-align:center;background: #f7f7f7;}\r\n.mainFooter1 div{display: inline-block;width: 32%;text-align: center;height: 24%;font-size: 32px;font-weight: bold;padding: 1%;border: 1px solid #d6d6d6;margin-top: 1px;margin-bottom: 1px;\r\n    color: #22f;\r\n    background-image: -webkit-linear-gradient(92deg, #22f, #feab3a);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -webkit-animation: hue 30s infinite linear;\r\n}\r\n.mainFooter1 div:active{background: #e4e4e4}\r\n.expressNumber{\r\n    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );\r\n    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );\r\n    color:transparent; -webkit-background-clip: text;background-clip: text;\r\n    text-align: center; font-size: 41px;font-weight: bold;width: 100%;\r\n}\r\n.justShowingText{position: absolute;top: 20px;left: 10px;color: rgba(20,130,10,0.6);text-shadow: 2px 2px 3px rgba(255,255,255,0.1);font-weight: bold;}\r\n.mainFooter2 div{display: inline-block;width: 32%;text-align: center;height: 100%;display: inline-block;}\r\n.imgclass{width: 44%;height: 60%;display: inline-block; margin-top: 10%;}\r\n.imgclass:active{opacity: 0.6;}\r\n.bigger{width: 54%;height: 70%;}\r\n.bigger:active{opacity: 0.3;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkZGxlLW1lbnUvbWlkZGxlLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3hHLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBQ2xGLGFBQWEsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO0FBQzVILGFBQWEsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7QUFDM0csaUJBQWlCLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0lBQ3ZMLFdBQVc7SUFDWCwrREFBK0Q7SUFDL0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQywwQ0FBMEM7QUFDOUM7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0lBQ0ksdVBBQXVQO0lBQ3ZQLCtPQUErTztJQUMvTyxpQkFBaUIsRUFBRSw2QkFBNkIsQ0FBQyxxQkFBcUI7SUFDdEUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVc7QUFDckU7QUFDQSxpQkFBaUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyw4Q0FBOEMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNySixpQkFBaUIscUJBQXFCLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztBQUN4RyxVQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDO0FBQ3hFLGlCQUFpQixZQUFZLENBQUM7QUFDOUIsUUFBUSxVQUFVLENBQUMsV0FBVyxDQUFDO0FBQy9CLGVBQWUsWUFBWSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWlkZGxlLW1lbnUvbWlkZGxlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVye3Bvc2l0aW9uOiByZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiAjNDQ0NDQ0O2hlaWdodDo5JTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6OSU7fVxyXG4ubWFpbkJvZHl7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDo0MiU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQyJTtwYWRkaW5nLXRvcDo0MCU7fVxyXG4ubWFpbkZvb3RlcjF7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDozOSU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjM5JTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiAjZjdmN2Y3O1x0cGFkZGluZy10b3A6M3B4O31cclxuLm1haW5Gb290ZXIye3Bvc2l0aW9uOiByZWxhdGl2ZTtoZWlnaHQ6MTMlO3dpZHRoOjEwMCU7bWluLWhlaWdodDoxMyU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDogI2Y3ZjdmNzt9XHJcbi5tYWluRm9vdGVyMSBkaXZ7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAzMiU7dGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogMjQlO2ZvbnQtc2l6ZTogMzJweDtmb250LXdlaWdodDogYm9sZDtwYWRkaW5nOiAxJTtib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O21hcmdpbi10b3A6IDFweDttYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBjb2xvcjogIzIyZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjMjJmLCAjZmVhYjNhKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGh1ZSAzMHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5tYWluRm9vdGVyMSBkaXY6YWN0aXZle2JhY2tncm91bmQ6ICNlNGU0ZTR9XHJcbi5leHByZXNzTnVtYmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsICNmMjIpLCBjb2xvci1zdG9wKDAuMTUsICNmMmYpLCBjb2xvci1zdG9wKDAuMywgIzIyZiksIGNvbG9yLXN0b3AoMC40NSwgIzJmZiksIGNvbG9yLXN0b3AoMC42LCAjMmYyKSxjb2xvci1zdG9wKDAuNzUsICMyZjIpLCBjb2xvci1zdG9wKDAuOSwgI2ZmMiksIGNvbG9yLXN0b3AoMSwgI2YyMikgKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGdyYWRpZW50KCBsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCwgI2YyMiksIGNvbG9yLXN0b3AoMC4xNSwgI2YyZiksIGNvbG9yLXN0b3AoMC4zLCAjMjJmKSwgY29sb3Itc3RvcCgwLjQ1LCAjMmZmKSwgY29sb3Itc3RvcCgwLjYsICMyZjIpLGNvbG9yLXN0b3AoMC43NSwgIzJmMiksIGNvbG9yLXN0b3AoMC45LCAjZmYyKSwgY29sb3Itc3RvcCgxLCAjZjIyKSApO1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7IC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O2JhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA0MXB4O2ZvbnQtd2VpZ2h0OiBib2xkO3dpZHRoOiAxMDAlO1xyXG59XHJcbi5qdXN0U2hvd2luZ1RleHR7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjBweDtsZWZ0OiAxMHB4O2NvbG9yOiByZ2JhKDIwLDEzMCwxMCwwLjYpO3RleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4ubWFpbkZvb3RlcjIgZGl2e2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMzIlO3RleHQtYWxpZ246IGNlbnRlcjtoZWlnaHQ6IDEwMCU7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmltZ2NsYXNze3dpZHRoOiA0NCU7aGVpZ2h0OiA2MCU7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tdG9wOiAxMCU7fVxyXG4uaW1nY2xhc3M6YWN0aXZle29wYWNpdHk6IDAuNjt9XHJcbi5iaWdnZXJ7d2lkdGg6IDU0JTtoZWlnaHQ6IDcwJTt9XHJcbi5iaWdnZXI6YWN0aXZle29wYWNpdHk6IDAuMzt9Il19 */"

/***/ }),

/***/ "./src/app/middle-menu/middle-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/middle-menu/middle-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='position: relative;height:99%;width:100%;min-height:90%;padding-top:1%;'>\n  <div class='{{classOne}}' style='height: 99%;'>\n    <div class='mainBody'>\n      <div class='justShowingText' *ngIf=\"phone_number.length > 10\">전화버튼을 눌러봐!</div>\n      <div class='expressNumber'>{{phone_number}}</div>\n    </div>\n    \n    <div class='mainFooter1'>\n      <div *ngFor=\"let item of keypadNum\" (click)='keypadPress($event)'>{{item}}</div>\n    </div>\n    \n    <div class='mainFooter2'>\n      <div>&nbsp;</div>\n      <div (click)='change()'><img [src]=\"phoneImg\" class='imgclass bigger'></div>\n      <div (click)='remove()'><img [src]=\"cancleImg\" class='imgclass'></div>\n    </div>\n  </div>\n  <app-call-screen [classTwo]='classTwo' [phoneNumber] = 'targetNumber' [phoneName] = 'targetName' [phoneImg] = 'targetImg'   (sendToEvent)='receiveEvent($event)'></app-call-screen>\n</div>\n"

/***/ }),

/***/ "./src/app/middle-menu/middle-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/middle-menu/middle-menu.component.ts ***!
  \******************************************************/
/*! exports provided: MiddleMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleMenuComponent", function() { return MiddleMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-value.service */ "./src/app/share-value.service.ts");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);




var MiddleMenuComponent = /** @class */ (function () {
    function MiddleMenuComponent(serve) {
        this.keypadNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
        this.phoneImg = "assets/img/phone.png";
        this.cancleImg = "assets/img/cancle.png";
        this.targetName = '누굴까?';
        this.targetImg = 'assets/familly/smile.png';
        this.classOne = 'onshow';
        this.classTwo = 'onhide';
        this.sounder = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: ['assets/click.mp3'],
            html5: true
        });
        window['referenceFunction'] = {
            component: this
        };
        this.phone_number = "";
        this.service = serve;
    }
    MiddleMenuComponent.prototype.ngOnInit = function () {
    };
    MiddleMenuComponent.prototype.keypadPress = function (event) {
        var addBar = "";
        this.sounder.play();
        //this.service.clickSounds.get(event.srcElement.innerHTML+"").play();
        if (this.phone_number.length == 3) {
            addBar = "-";
        }
        else if (this.phone_number.length == 8) {
            addBar = "-";
        }
        this.phone_number += addBar + event.srcElement.innerHTML;
    };
    MiddleMenuComponent.prototype.remove = function () {
        this.phone_number = this.phone_number.substr(0, this.phone_number.length - 1);
    };
    MiddleMenuComponent.prototype.change = function () {
        if (this.phone_number != undefined && this.phone_number != null && this.phone_number.length > 0) {
            this.targetNumber = this.phone_number;
            this.classOne = 'onhide';
            this.classTwo = 'onshow';
            this.service.headerShow = false;
            this.service.audio.load();
            this.service.audio.play();
        }
    };
    MiddleMenuComponent.prototype.receiveEvent = function (event) {
        this.service.headerShow = true;
        this.classOne = "onshow";
        this.classTwo = "onhide";
        this.service.audio.pause();
    };
    MiddleMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-middle-menu',
            template: __webpack_require__(/*! ./middle-menu.component.html */ "./src/app/middle-menu/middle-menu.component.html"),
            styles: [__webpack_require__(/*! ./middle-menu.component.css */ "./src/app/middle-menu/middle-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_value_service__WEBPACK_IMPORTED_MODULE_2__["ShareValueService"]])
    ], MiddleMenuComponent);
    return MiddleMenuComponent;
}());



/***/ }),

/***/ "./src/app/mobile-touch.ts":
/*!*********************************!*\
  !*** ./src/app/mobile-touch.ts ***!
  \*********************************/
/*! exports provided: TouchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchDirective", function() { return TouchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-value.service */ "./src/app/share-value.service.ts");



var TouchDirective = /** @class */ (function () {
    function TouchDirective(el, serve) {
        this.el = el;
        this.touch1 = { x: 0, y: 0, time: 0 };
        this.service = serve;
        console.log(this.service);
    }
    TouchDirective.prototype.doSwipe = function (evt, type) {
        //console.log(evt,type,'gogo!');
        this.forDirectiveOrder(type);
    };
    TouchDirective.prototype.forDirectiveOrder = function (type) {
        console.log(this.service.imWorking);
        if (this.service.imWorking) {
            return;
        }
        else {
            if (type == 'left') {
                if (this.service.oneBool) {
                    this.service.headerOne = "nonselected";
                    this.service.headerTwo = "nonselected";
                    this.service.headerThree = "selected";
                    this.service.oneBool = false;
                    this.service.twoBool = false;
                    this.service.threeBool = true;
                }
                else if (this.service.threeBool) {
                    this.service.headerOne = "nonselected";
                    this.service.headerTwo = "selected";
                    this.service.headerThree = "nonselected";
                    this.service.oneBool = false;
                    this.service.twoBool = true;
                    this.service.threeBool = false;
                }
                else {
                    this.service.headerOne = "selected";
                    this.service.headerTwo = "nonselected";
                    this.service.headerThree = "nonselected";
                    this.service.oneBool = true;
                    this.service.twoBool = false;
                    this.service.threeBool = false;
                }
            }
            else {
                if (this.service.twoBool) {
                    this.service.headerOne = "nonselected";
                    this.service.headerTwo = "nonselected";
                    this.service.headerThree = "selected";
                    this.service.oneBool = false;
                    this.service.twoBool = false;
                    this.service.threeBool = true;
                }
                else if (this.service.oneBool) {
                    this.service.headerOne = "nonselected";
                    this.service.headerTwo = "selected";
                    this.service.headerThree = "nonselected";
                    this.service.oneBool = false;
                    this.service.twoBool = true;
                    this.service.threeBool = false;
                }
                else {
                    this.service.headerOne = "selected";
                    this.service.headerTwo = "nonselected";
                    this.service.headerThree = "nonselected";
                    this.service.oneBool = true;
                    this.service.twoBool = false;
                    this.service.threeBool = false;
                }
            }
        }
    };
    TouchDirective.prototype.handleTouch = function (ev) {
        var touch = ev.touches[0] || ev.changedTouches[0];
        if (ev.type === 'touchstart') {
            this.touch1.x = touch.pageX;
            this.touch1.y = touch.pageY;
            this.touch1.time = ev.timeStamp;
        }
        else if (ev.type === 'touchend') {
            var dx = touch.pageX - this.touch1.x;
            var dy = touch.pageY - this.touch1.y;
            var dt = ev.timeStamp - this.touch1.time;
            if (dt < 500) {
                // swipe lasted less than 500 ms
                if (Math.abs(dx) > 120) {
                    // delta x is at least 60 pixels
                    if (dx > 0) {
                        this.doSwipe(ev, 'left');
                    }
                    else {
                        this.doSwipe(ev, 'right');
                    }
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appHighlight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TouchDirective.prototype, "arg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TouchDirective.prototype, "handleTouch", null);
    TouchDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _share_value_service__WEBPACK_IMPORTED_MODULE_2__["ShareValueService"]])
    ], TouchDirective);
    return TouchDirective;
}());



/***/ }),

/***/ "./src/app/right-menu/right-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/right-menu/right-menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader{position: relative;text-align:center;background: #444444;height:9%;width:100%;min-height:9%;}\r\n.mainBody{position: relative;height:90%;width:100%;min-height:90%;padding-top:1%;}\r\n.items{ padding: 5px;font-size: 18px;font-weight: bold;border-bottom: 1px solid #bbbbbb;}\r\n.items div{display:inline-block;}\r\n.itemName{ \r\n    font-size: 20px; font-weight: bold;\r\n    width: 50px;height: 50px;text-align: center;border: 1px solid #bbbbbb;\r\n    border-radius: 50%;line-height: 47px;display:inline-block;color: #f35626;\r\n    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -webkit-animation: hue 30s infinite linear;\r\n}\r\n@-webkit-keyframes hue {\r\n    from {\r\n      -webkit-filter: hue-rotate(0deg);\r\n    }\r\n\r\n    to {\r\n      -webkit-filter: hue-rotate(360deg);\r\n    }\r\n}\r\n.clickName{margin-left: 8px;font-size: 20px;color:#3a3a3a;}\r\n.phoneDiv{\r\n    width: 35px;height: 35px;text-align: center;border: 1px solid #bbbbbb;\r\n    border-radius: 50%;line-height: 27px;\r\n    float:right;background:#e2e2e2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtbWVudS9yaWdodC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUN4RyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUNqRixRQUFRLFlBQVksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUM7QUFDeEYsV0FBVyxvQkFBb0IsQ0FBQztBQUNoQztJQUNJLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUI7SUFDckUsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYztJQUN4RSxrRUFBa0U7SUFDbEUsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQywwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUVBO01BQ0Usa0NBQWtDO0lBQ3BDO0FBQ0o7QUFDQSxXQUFXLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7QUFDMUQ7SUFDSSxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QjtJQUNyRSxrQkFBa0IsQ0FBQyxpQkFBaUI7SUFDcEMsV0FBVyxDQUFDLGtCQUFrQjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LW1lbnUvcmlnaHQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5IZWFkZXJ7cG9zaXRpb246IHJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6ICM0NDQ0NDQ7aGVpZ2h0OjklO3dpZHRoOjEwMCU7bWluLWhlaWdodDo5JTt9XHJcbi5tYWluQm9keXtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OjkwJTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6OTAlO3BhZGRpbmctdG9wOjElO31cclxuLml0ZW1zeyBwYWRkaW5nOiA1cHg7Zm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiBib2xkO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO31cclxuLml0ZW1zIGRpdntkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcbi5pdGVtTmFtZXsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXI6IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO2xpbmUtaGVpZ2h0OiA0N3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiAjZjM1NjI2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTJkZWcsICNmMzU2MjYsICNmZWFiM2EpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaHVlIDMwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGh1ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbi5jbGlja05hbWV7bWFyZ2luLWxlZnQ6IDhweDtmb250LXNpemU6IDIwcHg7Y29sb3I6IzNhM2EzYTt9XHJcbi5waG9uZURpdntcclxuICAgIHdpZHRoOiAzNXB4O2hlaWdodDogMzVweDt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyOiAxcHggc29saWQgI2JiYmJiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGZsb2F0OnJpZ2h0O2JhY2tncm91bmQ6I2UyZTJlMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/right-menu/right-menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/right-menu/right-menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='mainBody'>\n  <div class='{{classOne}}' style='overflow-y: auto; overflow-x: hidden;height: 99%;'>\n\n    <div  *ngFor=\"let item of list; let i = index\">\n      <div *ngIf=\"i == 10\" style='width: 100%;height: 35px;background: #d6d6d6;padding: 4px;'>\n            어제 {{yesterday | date:'yyyy-MM-dd'}}\n      </div>      \n      <div *ngIf=\"i == 15\" style='width: 100%;height: 35px;background: #d6d6d6;padding: 4px;'>\n          그저께 {{befor2day | date:'yyyy-MM-dd'}}\n    </div>            \n      <div class='items'>\n          <div class='itemName' style='float: left;'>{{item.main}}</div>\n          <div class='clickName'>\n            <div style='display: block;'>{{item.name}}</div>\n            <div style='display: block;'><small>{{item.number}}</small></div>\n          </div>\n          <div class='phoneDiv' >\n            <img src='assets/img/pne.png' style='width: 18px;height: 18px;'>\n            <div style='display: block;margin-top: 3px;'><small>{{item.day}}</small></div>\n          </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/right-menu/right-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/right-menu/right-menu.component.ts ***!
  \****************************************************/
/*! exports provided: RightMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightMenuComponent", function() { return RightMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var RightMenuComponent = /** @class */ (function () {
    function RightMenuComponent(datePipe) {
        this.datePipe = datePipe;
        this.list = [];
        this.classOne = 'onshow';
        this.classTwo = 'onhide';
        this.targetNumber = null;
        this.targetName = null;
        this.yesterday = new Date();
        this.befor2day = new Date();
        this.yesterday.setDate(this.yesterday.getDate() - 1);
        this.befor2day.setDate(this.befor2day.getDate() - 2);
        this.list.push({ name: '엄마', number: '010-1144-9345', main: '엄', day: 24 });
        this.list.push({ name: '엄마', number: '010-1144-9345', main: '엄', day: 34 });
        this.list.push({ name: '엄마', number: '010-1144-9345', main: '엄', day: 44 });
        this.list.push({ name: '아빠', number: '010-1156-2345', main: '아', day: 55 });
        this.list.push({ name: '아빠', number: '010-1156-2345', main: '아', day: 65 });
        this.list.push({ name: '아빠', number: '010-1156-2345', main: '아', day: 75 });
        this.list.push({ name: '할머니', number: '010-1234-5678', main: '할', day: 90 });
        this.list.push({ name: '할머니', number: '010-1234-5678', main: '할', day: 0 });
        this.list.push({ name: '할아버지', number: '010-2345-6789', main: '할', day: 1 });
        this.list.push({ name: '외할머니', number: '010-1122-3345', main: '외', day: 2 });
        this.list.push({ name: '외할아버지', number: '010-1133-3345', main: '외', day: 3 });
        this.list.push({ name: '엄마', number: '010-1144-9345', main: '엄', day: 4 });
        this.list.push({ name: '아빠', number: '010-1156-2345', main: '아', day: 5 });
        this.list.push({ name: '큰엄마', number: '010-1178-3325', main: '큰', day: 6 });
        this.list.push({ name: '큰아빠', number: '010-1191-3145', main: '큰', day: 7 });
        this.list.push({ name: '사촌동생', number: '010-1211-3348', main: '사', day: 8 });
        this.list.push({ name: '뽀로로', number: '010-1311-3346', main: '뽀', day: 9 });
        this.list.push({ name: '코야', number: '010-1451-3345', main: '코', day: 10 });
        this.list.push({ name: '아기상어', number: '010-2211-3345', main: '아', day: 11 });
        this.list.push({ name: '콩이', number: '010-2211-421', main: '아', day: 12 });
    }
    RightMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.map(function (val) {
            var front = _this.getRandomInt(1, 23);
            var end = _this.getRandomInt(0, 59);
            if (front < 10) {
                front = "0" + front;
            }
            if (end < 10) {
                end = "0" + end;
            }
            val.day = front + ':' + end;
        });
    };
    RightMenuComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    RightMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-menu',
            template: __webpack_require__(/*! ./right-menu.component.html */ "./src/app/right-menu/right-menu.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./right-menu.component.css */ "./src/app/right-menu/right-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], RightMenuComponent);
    return RightMenuComponent;
}());



/***/ }),

/***/ "./src/app/share-value.service.ts":
/*!****************************************!*\
  !*** ./src/app/share-value.service.ts ***!
  \****************************************/
/*! exports provided: ShareValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareValueService", function() { return ShareValueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShareValueService = /** @class */ (function () {
    function ShareValueService() {
        this.headerShow = true;
        this.headerOne = 'nonselected';
        this.headerTwo = 'selected';
        this.headerThree = 'nonselected';
        this.oneBool = false;
        this.twoBool = true;
        this.threeBool = false;
        this.imWorking = false;
        this.clickSounds = new Map();
        this.audio = new Audio();
        //this.audio.src='assets/audio.mp3';
        this.audio.src = 'assets/ohlle.mp3';
        for (var i = 0; i < 12; i++) { //따로 객체를 사용하기위해
            var aud = new Audio();
            aud.src = 'assets/click.mp3';
            aud.load();
            if (i == 10) {
                this.clickSounds.set('#', aud);
            }
            else if (i == 11) {
                this.clickSounds.set('*', aud);
            }
            else {
                this.clickSounds.set('' + i + '', aud);
            }
        }
    }
    ShareValueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareValueService);
    return ShareValueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\04_NODE\call\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map