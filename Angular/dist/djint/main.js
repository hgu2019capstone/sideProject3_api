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

module.exports = "     html, body{\n\tmargin: 20px;\n    }\n    #main {\n\theight: 600px;\n\tposition: relative;\n\twidth: 600px;\n\tbackground: gold;\n    }\n    #board {\n\tmargin: 30px;\n\tbackground-image: repeating-linear-gradient(0deg,transparent,transparent 29px, black 29px, black 30px), repeating-linear-gradient(-90deg,transparent,transparent 29px, black 29px, black 30px);\n\tbackground-size: 30px 30px;\n\theight: 541;\n\tposition: absolute;\n\twidth: 541;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJLQUFLO0NBQ0osWUFBWTtJQUNUO0lBQ0E7Q0FDSCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixnQkFBZ0I7SUFDYjtJQUNBO0NBQ0gsWUFBWTtDQUNaLDhMQUE4TDtDQUM5TCwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixVQUFVO0lBQ1AiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgIGh0bWwsIGJvZHl7XG5cdG1hcmdpbjogMjBweDtcbiAgICB9XG4gICAgI21haW4ge1xuXHRoZWlnaHQ6IDYwMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA2MDBweDtcblx0YmFja2dyb3VuZDogZ29sZDtcbiAgICB9XG4gICAgI2JvYXJkIHtcblx0bWFyZ2luOiAzMHB4O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDBkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgMjlweCwgYmxhY2sgMjlweCwgYmxhY2sgMzBweCksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTkwZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDI5cHgsIGJsYWNrIDI5cHgsIGJsYWNrIDMwcHgpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcblx0aGVpZ2h0OiA1NDE7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDU0MTtcbiAgICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <h2>Test App: {{c1.name}}</h2>\n  <button (click)=\"click1()\" >click me</button>\n  <button (click)=\"click2()\" >test</button>\n</div>\n\n\n  <body>\n      <div id = \"main\">\n            <canvas id=\"board\" width = \"541\" height=\"541\"></canvas>\n      </div>\n      <br/>\n  </body>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      \n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Cust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cust", function() { return Cust; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'djint';
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(2000, 1000);
        this.products = [];
        this.c1 = new Cust();
        this.c1.name = "eli";
    }
    AppComponent.prototype.click1 = function () {
        var _this = this;
        this.getBooks().subscribe(function (b) { return _this.c1.name = b.toString(); });
    };
    AppComponent.prototype.click2 = function () {
        var _this = this;
        this.source.subscribe(function (t) { return _this.onTimeOut(); });
    };
    AppComponent.prototype.onTimeOut = function () {
        var _this = this;
        this.getAllBooks().subscribe(function (data) {
            console.log(data);
            _this.products = data;
        });
        var canvas = document.getElementById('board');
        if (canvas.getContext) {
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var entry = _a[_i];
                var coor_X = entry.x;
                var coor_Y = entry.y;
                var ctx = canvas.getContext('2d');
                var y;
                switch (coor_X) {
                    case 'A':
                        y = 0 * 30;
                        break;
                    case 'B':
                        y = 1 * 30;
                        break;
                    case 'C':
                        y = 2 * 30;
                        break;
                    case 'D':
                        y = 3 * 30;
                        break;
                    case 'E':
                        y = 4 * 30;
                        break;
                    case 'F':
                        y = 5 * 30;
                        break;
                    case 'G':
                        y = 6 * 30;
                        break;
                    case 'H':
                        y = 7 * 30;
                        break;
                    case 'I':
                        y = 8 * 30;
                        break;
                    case 'J':
                        y = 9 * 30;
                        break;
                    case 'K':
                        y = 10 * 30;
                        break;
                    case 'L':
                        y = 11 * 30;
                        break;
                    case 'M':
                        y = 12 * 30;
                        break;
                    case 'N':
                        y = 13 * 30;
                        break;
                    case 'O':
                        y = 14 * 30;
                        break;
                    case 'P':
                        y = 15 * 30;
                        break;
                    case 'Q':
                        y = 16 * 30;
                        break;
                    case 'R':
                        y = 17 * 30;
                        break;
                    case 'S':
                        y = 18 * 30;
                        break;
                }
                var x = (coor_Y - 1) * 30;
                ctx.beginPath();
                ctx.arc(x, y, 14, 0, 2 * Math.PI, false);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeSytle = "black";
                ctx.stroke();
            }
        }
    };
    AppComponent.prototype.getAllBooks = function () {
        return this.http
            .get("http://turnincode.cafe24.com:8880/home/omok/");
    };
    AppComponent.prototype.getBooks = function () {
        return this.http
            .post("./apitest/", "3");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());

var Cust = /** @class */ (function () {
    function Cust() {
    }
    return Cust;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rcy9ib29rcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  books works!\n</p>\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
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

module.exports = __webpack_require__(/*! /home/cykim/DjangoAngular7/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map